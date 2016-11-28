import { is, merge } from 'widget-utils';

/**
 *  please refer to /tests/unit/calendarTree.specs.js for usage
 *  TODO docs,
 *
 *  calendar tree structure is
 *  {
 *    '2016': { // years
 *        '0': [1..31]  // months and days per month
 *    }
 *  }
 */

const genArrayRange = (a, b) => {
  const list = [];
  for (let i = a; i <= b; i += 1) {
    list.push(i);
  }
  return list;
};

export default class CalendarTree {
  constructor(tree) {
    this.tree = tree;
    this.currentSelection = null;
  }

  add(obj) {
    if (!this.tree) {
      this.tree = obj;
    } else {
      this.tree = merge(this.tree, obj, true);
    }
    return this;
  }

  // start is ALWAYS <= then end, as we are selecting time range in days.

  selectRange(start, end) {
    let range = [];

    const a = start.slice();

    // if year and month the same, just slice the current month
    if (a[0] === end[0] && a[1] === end[1]) {
      return this.selectDaysInMonth(a[0], a[1], a[2], end[2]);
    }

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
      a[1] = end[1];
    }

    // the missing part is days in end selection month
    range = range.concat(this.selectDaysInMonth(end[0], end[1], 1, end[2]));

    this.currentSelection = range;
    return range;
  }

  selectMonthsInYear(year, start, end) {
    let selection = [];
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
}
