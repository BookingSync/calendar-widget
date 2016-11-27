/* global VERSION, document */

import Emitter from 'democracyos-emitter';
import * as tpls from './templates';

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

export default class Calendar extends Emitter {
  constructor(opts) {
    super();
    this.name          = 'Calendar Widget';
    this.VERSION       = VERSION;
    this.element       = opts.element;
    this.monthStart    = opts.monthStart || currDate.getMonth();
    this.displayMonths = opts.displayMonths || 50;
    this.currYear      = opts.year || currDate.getFullYear();
    this.domTree       = {};
    this.templates     = tpls;
    this.daysPerWeek   = 7;
    this.startOfWeek   = 0; // 0 Mo, 6 Sa
    this.render();
  }

  render() {
    // construct dom tree
    // const root          = createElement('div', { class: 'calendarMonths' });
    this.domTree.months = this.domMonths(this.monthStart, this.currYear);
    this.domTree.months.map( m => this.element.appendChild(m));
  }

  domMonths(currMonth, currYear) {
    const months = [];
    let month    = currMonth;
    let year     = currYear;

    for (let i = 1; i <= this.displayMonths; i += 1) {
      months.push(this.domMonth(month, year));

      if (month > 10) {
        month = 0;
        year += 1;
      } else {
        month += 1;
      }
    }

    return months;
  }

  domMonth(month, year) {
    const monthDom = elementFromString(this.templates.month);

    monthDom.querySelector('.header tr').innerHTML = this.monthHeader();
    monthDom.querySelector('.caption').innerHTML = this.monthCaption(month, year);
    monthDom.querySelector('.body').innerHTML = this.monthDays(month, year);
    return monthDom;
  }

  monthCaption(month, year) {
    return `${monthsLabels[month]} ${year}`;
  }

  monthHeader() {
    const header = [];
    // just to make life easier with start of the week calculation
    const weekdaysLabelsExtended = weekdaysLabels.concat(weekdaysLabels);

    for (let i = 0; i < this.daysPerWeek; i += 1) {
      header.push(this.templates.weekDayLabel(weekdaysLabelsExtended[i + this.startOfWeek]));
    }
    return header.join('');
  }

  monthDays(month, year) {
    const startOfMonth = new Date(year, month, 1).getUTCDay();
    const length   = monthLength(month, year);
    const rowTemplate = this.templates.weekRow;
    const rows = 6;
    const monthTpl = [];
    let dayRow = 0;
    let dayLabel = 1;

    for (let i = 0; i < rows; i += 1) {
      const week = [];

      week.push(rowTemplate.open);

      for (let j = 0; j < this.daysPerWeek; j += 1) {
        if (dayRow >= startOfMonth && dayLabel <= length) {
          week.push(this.templates.weekDay(dayLabel));
          dayLabel += 1;

        } else {
          week.push(this.templates.weekDayPlaceholder);
        }
        dayRow += 1;
      }

      week.push(rowTemplate.close);
      monthTpl.push(week.join(''));
    }

    return monthTpl.join('');
  }

}
