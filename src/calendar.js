/* global VERSION, document */

import Emitter from 'democracyos-emitter';
import { is, addClass, removeClass, isArray } from 'widget-utils';

import * as tpls from './templates';
import CalendarTree from './calendarTree';

// these are labels for the days of the week
const weekdaysLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const { keys }       = Object;

// these are human-readable month name labels, in order
const monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// these are the days of the week for each month, in order
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
const currDate   = new Date();

const monthLength = (month, year) => {
  let days = daysInMonth[month];
  if (month === 1 && isLeapYear(year)) {
    days = 29;
  }
  return days;
};

const createElement = (tag, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(tag);
  keys(params).map(i => element.setAttribute(i, params[i]));
  return element;
};

const elementFromString = (string) => {
  const element     = createElement('div');
  element.innerHTML = string;
  return element.children[0];
};

const destroyElement = (element) => {
  element.parentNode.removeChild(element);
  return element;
};

const availabilityMap = '11111111111101111111111111111111111000000001111111111111111110011110000000000000000000000011111110000000000000000000000000000000000000111111111100000111111110000011110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
const mapStartDate    = new Date('2016-11-11');

export default class Calendar extends Emitter {
  constructor(opts) {
    super();
    this.name    = 'Calendar Widget';
    this.VERSION = VERSION;

    this.element       = opts.element;
    this.monthStart    = is(opts.monthStart) ? opts.monthStart : currDate.getMonth();
    this.displayMonths = opts.displayMonths || 3;
    this.yearStart     = opts.yearStart || currDate.getFullYear();

    this.domTree     = {};
    this.templates   = tpls;
    this.daysPerWeek = 7; // FIXME is not not supported in calendar-rendering,
    this.startOfWeek = 0; // 0 Mo ... 6 Su
    this.minRange    = 1; // one night

    this.availabilityTree = Calendar.availabilityMapToTree(availabilityMap);
    this.isSelecting      = false;
    this.calendarTree     = new CalendarTree();
    this.render();
  }

  render() {
    this.renderMonths(this.monthStart, this.yearStart);
    this.domTree.forward = this.element.appendChild(elementFromString(this.templates.forward));
    this.domTree.back    = this.element.appendChild(elementFromString(this.templates.back));
    this.addBtnsEvents();
  }

  /**
   *  Create a tree structure out of availability map
   * {
   *   2106: {
   *      11: {
   *        1: 0,
   *        2: 0,
   *        3: 1
   *      }
   *    }
   * }
   * @param map
   * @returns {Object}
   */
  static availabilityMapToTree(map) {
    const mapArr = map.split('').map(parseFloat);
    let year     = mapStartDate.getFullYear();
    let month    = mapStartDate.getMonth();
    let dayShift = mapStartDate.getDate();
    let day      = 1;

    return mapArr.reduce((curr, isAvailable) => {
      const length = monthLength(month, year);
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

  addBtnsEvents() {
    this.domTree.forward.addEventListener('click', (e) => {
      this.clearMonths();
      this.renderMonths(this.monthEnd, this.yearEnd);
      e.preventDefault();
    });

    this.domTree.back.addEventListener('click', (e) => {
      this.clearMonths();
      let monthToRender = this.currMonth - this.displayMonths;
      let yearToRender  = this.currYear;

      if (monthToRender < 0) {
        monthToRender += 12;
        yearToRender -= 1;
      }

      this.renderMonths(monthToRender, yearToRender);
      e.preventDefault();
    });
  }

  addMonthEvents(month) {
    month.addEventListener('click', (e) => {
      const cell = e.target;
      if (cell.hasAttribute('data-enabled')) {
        if (this.isSelecting) {
          this.endSelecting(month.year, month.month, parseInt(cell.getAttribute('data-value'), 10), cell);
        } else {
          this.startSelecting(month.year, month.month, parseInt(cell.getAttribute('data-value'), 10), cell);
        }
      }
    });
  }

  endSelecting(year, month, day, cell) {
    // this.validateSelection();
    this.selectionB = [year, month, day];
    this.selectedRange = this.selectRange(this.selectionA, this.selectionB);

    // we
    // if (!this.selectedRange) {
    //
    // }


    if (this.cellEnd) {
      removeClass(this.cellEnd, 'cell-selected');
    }

    if (cell) {
      addClass(cell, 'cell-selected');
      this.cellEnd = cell;
    }
    this.isSelecting = false;
  }

  selectRange(start, end) {
    // visually select
    // selection is only valid if start date < end date
    if (new Date(start[0], start[1] + 1, start[2]) < new Date(end[0], end[1] + 1, end[2])) {
      const cellsSelected = this.calendarTree.selectRange(start, end);
      if (isArray(cellsSelected)) {
        cellsSelected.map(a => addClass(a, 'cell-selected'));
        return [start, end];
      }
    }
    return false;
  }

  startSelecting(year, month, day, cell) {
    this.selectionA = [year, month, day];

    if (this.cellStart) {
      removeClass(this.cellStart, 'cell-selected');
    }

    if (cell) {
      addClass(cell, 'cell-selected');
      this.cellStart = cell;
    }
    this.isSelecting = true;
  }

  renderMonths(monthStart, yearStart) {
    // construct dom tree
    const { months, month, year, tree } = this.domMonths(yearStart, monthStart);
    this.currMonth                      = monthStart;
    this.currYear                       = yearStart;
    this.domTree.months                 = months;

    this.monthEnd = month;
    this.yearEnd  = year;

    this.calendarTree.add(tree);

    if (this.selectedRange) {
      this.selectRange(this.selectedRange[0], this.selectedRange[1]);
    }

    this.domTree.months.forEach((m) => {
      this.element.appendChild(m);
      this.addMonthEvents(m);
    });
  }

  clearMonths() {
    this.domTree.months.map(m => destroyElement(m));
  }

  domMonths(yearStart, monthStart) {
    const months  = [];
    const tree    = {};
    let month     = monthStart;
    let year      = yearStart;


    for (let i = 1; i <= this.displayMonths; i += 1) {
      const mDom = this.domMonth(month, year);

      months.push(mDom);

      if (!tree[year]) {
        tree[year] = {};
      }

      if (!tree[year][month]) {
        tree[year][month] = Array.prototype.slice.call(mDom.daysElements);
      }

      if (month > 10) {
        month = 0;
        year += 1;
      } else {
        month += 1;
      }
    }

    return {
      months,
      month,
      year,
      tree,
    };
  }

  domMonth(month, year) {
    const monthDom = elementFromString(this.templates.month);

    monthDom.querySelector('.header tr').innerHTML = this.monthHeader();
    monthDom.querySelector('.caption').innerHTML   = `${monthsLabels[month]} ${year}`;
    monthDom.querySelector('.body').innerHTML      = this.monthDays(month, year);
    monthDom.month                                 = month;
    monthDom.year                                  = year;
    monthDom.daysElements                          = monthDom.querySelectorAll('[data-value]');

    return monthDom;
  }

  monthHeader() {
    const header                 = [];
    // just to make life easier with start of the week calculation
    const weekdaysLabelsExtended = weekdaysLabels.concat(weekdaysLabels);

    for (let i = 0; i < this.daysPerWeek; i += 1) {
      header.push(this.templates.weekDayLabel(weekdaysLabelsExtended[i + this.startOfWeek]));
    }
    return header.join('');
  }

  monthDays(month, year) {
    const startOfMonth = new Date(year, month, 1).getUTCDay();
    const length       = monthLength(month, year);
    const rowTemplate  = this.templates.weekRow;
    const monthTpl     = [];
    const weekShift    = (this.daysPerWeek - this.startOfWeek);

    let rows               = 5;
    let weekShiftCorrected = startOfMonth + weekShift;
    let dayCounter         = 0;
    let dayOfMonth         = 1;

    // don't render full empty week
    if (weekShiftCorrected >= this.daysPerWeek) {
      weekShiftCorrected -= this.daysPerWeek;
    }

    // try to figure out if 5 rows is enough or not for the month
    if (rows * this.daysPerWeek < weekShiftCorrected + length) {
      rows = 6;
    }

    for (let i = 0; i < rows; i += 1) {
      const week = [];
      week.push(rowTemplate.open);

      for (let j = 0; j < this.daysPerWeek; j += 1) {
        if ((dayCounter >= weekShiftCorrected) && dayOfMonth <= length) {
          week.push(this.templates.weekDay(
            dayOfMonth,
            this.isDayDisabled(year, month, dayOfMonth))
          );

          dayOfMonth += 1;
        } else {
          week.push(this.templates.weekDayPlaceholder);
        }

        dayCounter += 1;
      }

      week.push(rowTemplate.close);
      monthTpl.push(week.join(''));
    }

    return monthTpl.join('');
  }

  isDayDisabled(year, month, day) {
    const yesterday = new Date(currDate);
    const isFuture  = new Date(year, month, day) >= yesterday.setDate(currDate.getDate() - 1);
    let isAvailable;

    try {
      isAvailable = this.availabilityTree[year][month][day];
    } catch (e) {
      isAvailable = false;
    }

    return !(isFuture && isAvailable);
  }
}
