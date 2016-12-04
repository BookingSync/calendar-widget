import { is, merge } from 'widget-utils';

/**
 *  please refer to /tests/unit/calendarTree.specs.js for usage
 *  TODO docs, merge availability with calendar tree, use one data-structure
 *
 */
const genArrayRange = (a, b) => {
  const list = [];
  for (let i = a; i <= b; i += 1) {
    list.push(i);
  }
  return list;
};

const currDate    = new Date();
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default class CalendarTree {
  /**
   * @param {Function} validateCell
   * @param {Object} tree
   */
  constructor(validateCell, tree) {
    this.daysInMonth  = daysInMonth;
    this.validateCell = validateCell;
    this.tree         = tree;
  }

  /**
   *  *  calendar tree structure is
   *  {
   *    '2016': { // years
   *        '0': [1..31]  // months and days per month
   *    }
   *  }
   * @param {Object} obj
   * @returns {CalendarTree}
   */
  add(obj) {
    if (!this.tree) {
      this.tree = obj;
    } else {
      this.tree = merge(this.tree, obj, true);
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
    let isValid = true;

    if (typeof validateCell === 'function') {
      isValid = range.filter(a => this.validateCell(a)).length === 0;
    }

    return isValid;
  }

  addAvailabilityMap(map, updatedAt) {
    this.availabilityMap = this.availabilityMapToTree(map, updatedAt);
    return this;
  }

  removeAvailabilityMap() {
    this.availabilityMap = {};
    return this;
  }

  /**
   *  Create a tree structure from availability map
   *  for n-time day access, e.g. this.availabilityMap[year][month][day];
   * {
   *   2106: {
   *      11: {
   *        1: 0,
   *        2: 0,
   *        3: 1
   *      }
   *    }
   * }
   * @param {String} map
   * @param {Date} mapStartAt
   * @returns {Object}
   */
  availabilityMapToTree(map, mapStartAt) {
    const mapArr = map.split('').map(parseFloat);
    let year     = mapStartAt.getFullYear();
    let month    = mapStartAt.getMonth();
    let dayShift = mapStartAt.getDate();
    let day      = 1;

    return mapArr.reduce((curr, isAvailable) => {
      const length = this.monthLength(month, year);
      const tree   = curr;

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

      tree[year][month][day] = !!isAvailable;

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

  static isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  monthLength(month, year) {
    let days = this.daysInMonth[month];
    if (month === 1 && CalendarTree.isLeapYear(year)) {
      days = 29;
    }
    return days;
  }

  isDayDisabledOnMap(year, month, day) {
    let isAvailable;

    if (this.availabilityMap) {
      try {
        isAvailable = this.availabilityMap[year][month][day];
      } catch (e) {
        isAvailable = false;
      }
    } else {
      isAvailable = true;
    }

    return isAvailable;
  }

  isDayDisabled(year, month, day) {
    const yesterday = new Date(currDate);
    const isFuture  = new Date(year, month, day) >= yesterday.setDate(currDate.getDate() - 1);
    const isDayDisabledInMap = this.isDayDisabledOnMap(year, month, day);

    return !(isFuture && isDayDisabledInMap);
  }
}
