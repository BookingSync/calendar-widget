import { is, merge, monthLength, isString } from 'widget-utils';

/**
 *  please refer to /tests/unit/calendarTree.specs.js for usage
 *  TODO docs, merge availability with calendar tree, use one data-structure
 *  TODO minStay + availability map considerations fo disabling dates
 */
const genArrayRange = (a, b) => {
  const list = [];
  for (let i = a; i <= b; i += 1) {
    list.push(i);
  }
  return list;
};

export default class CalendarTree {
  /**
   * @param {Function} validateCell
   * @param {Object} tree
   */
  constructor(validateCell, tree) {
    this.validateCell = validateCell;
    this.tree         = tree;
  }

  addTree(obj) {
    if (!this.tree) {
      this.tree = obj;
    } else {
      this.tree = merge(this.tree || {}, obj, true);
    }
    return this;
  }
  /**
   * select range from the tree, returns array items
   * start date is ALWAYS < then end date , as we are selecting time range in days.
   *
   * @param {Array} start e.g. [2016, 0, 1]
   * @param {Array} end        [2016, 1, 3]
   * @returns {{range: Array, isValid: {Boolean}}}
   */
  selectRange(start, end) {
    let range = [];

    const a = start.slice();

    // if year and month the same, just slice the current month
    if (a[0] === end[0] && a[1] === end[1]) {
      range = this.selectDaysInMonth(a[0], a[1], a[2], end[2]);
    } else {
      const monthDays = this.tree[a[0]][a[1]];

      // slice the piece of current monthDays from start of range till end of the monthDays
      range = range.concat(this.selectDaysInMonth(a[0], a[1], a[2], monthDays.length));

      // shift start month, b/c we already selected days in it
      a[1] += 1;

      // if end date year > start date
      // select everything in start year till the end of start year
      // e.g. start is 20 October, so select November and December, October was selected above
      if (end[0] > start[0]) {
        range = range.concat(this.selectMonthsInYear(a[0], a[1], 11));
        // and set start year to end year
        // month to 0 (January)
        a[0] = end[0];
        a[1] = 0;
      }

      // now we are at the same year and have the case if end month > start month
      // then select everything between those months
      if (end[1] > a[1]) {
        // e.g. start 20 October end 20 December, select full November
        range = range.concat(this.selectMonthsInYear(a[0], a[1], end[1] - 1));
        a[1]  = end[1];
      }

      // the missing part is days in end selection month
      range = range.concat(this.selectDaysInMonth(end[0], end[1], 1, end[2]));
    }

    return {
      range,
      isValid: this.isRangeValid(range),
    };
  }

  selectMonthsInYear(year, start, end) {
    let selection    = [];
    const monthRange = genArrayRange(start, end);

    monthRange.forEach((month) => {
      const y = this.tree[year];
      const m = is(y) ? this.tree[year][month] : null;

      if (y && m) {
        selection = selection.concat(this.selectDaysInMonth(year, month, 1, m.length));
      }
    });

    return selection;
  }

  selectDaysInMonth(year, month, startDay, endDay) {
    const y = this.tree[year];
    const m = is(y) ? this.tree[year][month] : null;

    if (y && m) {
      return m.slice((startDay - 1), endDay);
    }
    return [];
  }

  selectDay(year, month, day) {
    const y = this.tree[year];
    const m = is(y) ? this.tree[year][month] : null;

    if (y && m) {
      return m[day - 1];
    }
    return null;
  }

  isRangeValid(range, fn) {
    const validateCell = this.validateCell || fn;
    let isValid        = true;

    if (typeof validateCell === 'function') {
      isValid = range.filter((a, i) => this.validateCell(a, i, range)).length === 0;
    }

    return isValid;
  }

  replaceMaps(map, updatedAt) {
    this.map = CalendarTree.mapsToTree(map, updatedAt);
    return this;
  }

  removeMap() {
    this.map = {};
    return this;
  }

  /**
   *  Create a tree structure from maps
   *  for n-time day access, e.g. this.map[year][month][day].isAvailable;
   * {
   *   2106: {
   *      1: {
   *        1: ,
   *        2: ,
   *        3:
   *        ...
   *      }
   *      ...
   *      12: {
   *
   *      }
   *    }
   * }
   * @param {Object} maps
   * @param {String | Date} mapStartAt
   * @returns {Object}
   */
  static mapsToTree(maps, mapStartAt) {
    if (!(isString(maps.availability) ||
      isString(maps.nightly_rates) ||
      isString(maps.minimum_stays))) {
      return null;
    }

    const avail  = maps.availability.split('').map(parseFloat);
    const rates  = maps.nightly_rates.split(',').map(parseFloat);
    const minMap = maps.minimum_stays.split(',').map(parseFloat);
    const date   = new Date(mapStartAt);

    let year     = date.getFullYear();
    let month    = date.getMonth();
    let dayShift = date.getDate();
    let day      = 1;

    // trick to add extra unavailable date for proper calculations of check-out dates

    if (avail[avail.length - 1] === 0) {
      avail.push(1);
    }

    return avail.reduce((curr, state, index, arr) => {
      const length           = monthLength(year, month);
      const tree             = curr;
      const minStay          = minMap[index];
      const rate             = rates[index];
      const isAvailable      = state === 0;
      const prevAvailable    = arr[index - 1] === 0;
      const isMorningBlocked = (isAvailable && !prevAvailable);

      if (!tree[year]) {
        tree[year] = {};
      }

      if (!tree[year][month]) {
        tree[year][month] = {};
      }

      if (dayShift) {
        day      = dayShift;
        dayShift = null;
      }

      // if minStay > available days in future
      // consider current day as unavailable as well
      // if (isAvailable && minStay > 1) {
      //   let daysAvailable = 1;
      //   let i             = index + 1;
      //   while (arr[i] === 0) {
      //     daysAvailable += 1;
      //     i += 1;
      //   }
      //
      //   if (minStay > daysAvailable) {
      //     isAvailable = false;
      //   }
      // }

      tree[year][month][day] = {
        rate,
        minStay,
        isAvailable,
        isMorningBlocked,
        isOutAvailable: (!isMorningBlocked && isAvailable) ||
                        (!isAvailable && prevAvailable === true),
      };

      if (day < length) {
        day += 1;
      } else {
        if (month > 10) {
          month = 0;
          year += 1;
        } else {
          month += 1;
        }
        day = 1;
      }

      return tree;
    }, {});
  }

  getDayProperty(year, month, day, property) {
    let prop;

    if (this.map) {
      try {
        prop = this.map[year][month][day][property];
      } catch (e) {
        // continue regardless of error
      }
    }

    return prop;
  }

  isDayDisabled(year, month, day) {
    return !this.getDayProperty(year, month, day, 'isAvailable');
  }

}
