/* global VERSION, Node, document */

import Emitter from 'democracyos-emitter';
import { is, addClass, removeClass, isArray } from 'widget-utils';

import * as tpls from './templates';
import CalendarTree from './calendarTree';

// these are labels for the days of the week
const weekdaysLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const { keys }       = Object;

// these are human-readable month name labels, in order
const monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currDate     = new Date();

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

const isLater = (start, end) =>
new Date(start[0], start[1] + 1, start[2]) < new Date(end[0], end[1] + 1, end[2]);

/**
 * year = 2016 full year number
 * month = 0...11, accordingly to getUTCMonth() method
 *
 */
export default class Calendar extends Emitter {
  constructor(opts) {
    super();
    this.name    = 'Calendar Widget';
    this.VERSION = VERSION;

    this.element       = opts.element;
    this.monthStart    = is(opts.monthStart) ? opts.monthStart : currDate.getUTCMonth();
    this.displayMonths = opts.displayMonths || 4;
    this.yearStart     = opts.yearStart || currDate.getUTCFullYear();

    this.domTree   = {};
    this.templates = tpls;

    this.daysPerWeek    = 7; // FIXME is not not supported in calendar-rendering,
    this.startOfWeek    = 0; // 0 Mo ... 6 Su
    this.minRange       = 1; // one night
    this.calendarTree   = new CalendarTree(cell => cell.getAttribute('data-disabled') === '', {});

    this.selectEndFirst = false;

    this.availabilityUpdatedAt = opts.availabilityUpdatedAt;

    if (opts.availabilityMap) {
      const updatedAt = this.availabilityUpdatedAt || currDate;
      this.calendarTree.addAvailabilityMap(opts.availabilityMap, updatedAt);
    }

    // selection and highlights
    this.isSelecting       = false;
    this.highlightedBounds = [];

    this.render();
  }

  render() {
    this.renderMonths(this.monthStart, this.yearStart);
    this.domTree.forward = this.element.appendChild(elementFromString(this.templates.forward));
    this.domTree.back    = this.element.appendChild(elementFromString(this.templates.back));
    this.addBtnsEvents();
  }

  renderMonths(monthStart, yearStart) {
    // construct dom tree
    const { tree, year, months, month } = this.domMonths(yearStart, monthStart);

    this.currMonth      = monthStart;
    this.currYear       = yearStart;
    this.domTree.months = months;
    this.monthEnd       = month;
    this.yearEnd        = year;

    this.calendarTree.add(tree);

    this.recoverSelections();

    this.domTree.months.forEach((m) => {
      this.element.appendChild(m);
      this.addMonthEvents(m);
    });
  }

  recoverSelections() {
    if (this.selectionA) {
      this.startSelecting(...this.selectionA, this.calendarTree.selectDay(...this.selectionA));
    }

    if (this.selectionB) {
      this.endSelecting(...this.selectionB, this.calendarTree.selectDay(...this.selectionB));
    }

    if (this.highlightedBounds.length > 0) {
      this.highLightRange(...this.highlightedBounds);
    }
  }

  // FIXME add renderForward renderBackward methods
  addBtnsEvents() {
    this.domTree.forward.addEventListener('click', (e) => {
      this.destroyMonths();
      this.renderMonths(this.monthEnd, this.yearEnd);
      e.preventDefault();
    });

    this.domTree.back.addEventListener('click', (e) => {
      this.destroyMonths();
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
        const dayValue = [month.year, month.month, parseInt(cell.getAttribute('data-value'), 10)];

        if (this.isSelecting && isLater(this.selectionA, dayValue)) {
          this.endSelecting(...dayValue, cell);
          this.emit('selection-end', new Date(...dayValue), dayValue);
        } else {
          this.startSelecting(...dayValue, cell);
          this.emit('selection-start', new Date(...dayValue), dayValue);
        }
      }
    });

    month.addEventListener('mouseover', (e) => {
      const cell = e.target;
      if (cell.hasAttribute('data-selectable')) {
        if (this.isSelecting) {
          const currentEnd = [month.year, month.month, parseInt(cell.getAttribute('data-value'), 10)];

          if (this.highlightedBounds.length > 0) {
            this.removeHighlight(...this.highlightedBounds);
          }

          this.highLightRange(this.selectionA, currentEnd);
        }
      }
    });

    month.addEventListener('mouseout', (e) => {
      /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
      // simulate 'mouseleave'
      if (!e.relatedTarget ||
        (e.relatedTarget !== month && !(month.compareDocumentPosition(e.relatedTarget) &
        Node.DOCUMENT_POSITION_CONTAINED_BY))) {
        if (this.isSelecting && this.highlightedBounds.length > 0) {
          this.removeHighlight(...this.highlightedBounds);
        }
      }
    });
  }

  removeHighlight(start, end) {
    const { range } = this.selectRange(start, end);
    range.map(a => removeClass(a, 'cell-highlighted'));
    this.highlightedBounds = [];
  }

  highLightRange(start, end) {
    const { range, isValid } = this.selectRange(start, end);
    if (isArray(range)) {
      range.map(a => addClass(a, isValid ? 'cell-highlighted' : 'cel-highlighted-invalid'));
      this.highlightedBounds = [start, end];
    }
  }

  selectRange(start, end) {
    if (isLater(start, end)) {
      return this.calendarTree.selectRange(start, end);
    }
    return false;
  }

  startSelecting(year, month, day, cell) {
    this.selectionA = [year, month, day];

    if (this.cellA) {
      removeClass(this.cellA, 'cell-selected');
    }

    if (cell) {
      addClass(cell, 'cell-selected');
      this.cellA = cell;
    }
    this.isSelecting = true;
  }

  endSelecting(year, month, day, cell) {
    this.selectionB = [year, month, day];

    if (this.cellB) {
      removeClass(this.cellB, 'cell-selected');
    }

    if (cell) {
      addClass(cell, 'cell-selected');
      this.cellB = cell;
    }
    this.isSelecting = false;
  }

  destroyMonths() {
    this.domTree.months.map(m => destroyElement(m));
  }

  domMonths(yearStart, monthStart) {
    const months = [];
    const tree   = {};
    let month    = monthStart;
    let year     = yearStart;

    for (let i = 1; i <= this.displayMonths; i += 1) {
      const mDom = this.domMonth(month, year);

      months.push(mDom);

      if (!tree[year]) {
        tree[year] = {};
      }

      if (!tree[year][month]) {
        tree[year][month] = mDom.daysElements;
      }

      if (month > 10) {
        month = 0;
        year += 1;
      } else {
        month += 1;
      }
    }

    return {
      tree,
      year,
      months,
      month,
    };
  }

  domMonth(month, year) {
    const monthDom                                 = elementFromString(this.templates.month);
    monthDom.querySelector('.header tr').innerHTML = this.headerTplString();
    monthDom.querySelector('.caption').innerHTML   = `${monthsLabels[month]} ${year}`;
    monthDom.querySelector('.body').innerHTML      = this.daysTplString(month, year);
    monthDom.month                                 = month;
    monthDom.year                                  = year;
    monthDom.daysElements                          = Array.prototype.slice.call(monthDom.querySelectorAll('[data-value]'));

    return monthDom;
  }

  headerTplString() {
    // just to make life easier with start of the week calculation
    const header                 = [];
    const weekdaysLabelsExtended = weekdaysLabels.concat(weekdaysLabels);

    for (let i = 0; i < this.daysPerWeek; i += 1) {
      header.push(this.templates.weekDayLabel(weekdaysLabelsExtended[i + this.startOfWeek]));
    }
    return header.join('');
  }

  daysTplString(month, year) {
    const startOfMonth = new Date(year, month, 1).getUTCDay();
    const daysInMonth  = this.calendarTree.monthLength(month, year);
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

    // try to figure out if 5 rows is enough for the month
    if (rows * this.daysPerWeek < weekShiftCorrected + daysInMonth) {
      rows = 6;
    }

    // for each week (5 or 6)
    for (let i = 0; i < rows; i += 1) {
      const week = [];
      // open tag <tr>
      week.push(rowTemplate.open);

      // push days in week
      for (let j = 0; j < this.daysPerWeek; j += 1) {
        // pushing actual days 1...daysInMonth
        if ((dayCounter >= weekShiftCorrected) && dayOfMonth <= daysInMonth) {
          week.push(this.templates.weekDay(
            dayOfMonth,
            this.calendarTree.isDayDisabled(year, month, dayOfMonth))
          );

          dayOfMonth += 1;
          // pushing placeholders instead of days
        } else {
          week.push(this.templates.weekDayPlaceholder);
        }

        dayCounter += 1;
      }
      // close tag </tr> of week
      week.push(rowTemplate.close);
      // push completed week to month template
      monthTpl.push(week.join(''));
    }

    return monthTpl.join('');
  }

  destroy() {
    return destroyElement(this.element);
  }
}
