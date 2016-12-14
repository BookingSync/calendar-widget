/* global VERSION, Node, document */
import {
  addClass,
  removeClass,
  isArray,
  isObject,
  Emitter,
  merge,
  elementFromString,
  destroyElement,
  monthLength,
} from 'widget-utils';

import * as tpls from './templates';
import CalendarTree from './calendar-tree';
import locales from './locales';

import reset from './styles/reset.css';
import css from './styles/calendar.css';


const { calendar, chunky, highlighted, invalid,
        selected, actionsEnabled, body, tableHeader, caption } = css;

const { documentElement: { lang } }  = document;
const currDate                       = new Date();
const isLater                        = (start, end) => new Date(...start) < new Date(...end);
//
// const isoTz = 'T00:00:00.000Z';
//
// const getISO = (date, period) => {
//   function pad(number) {
//     if (number < 10) {
//       return `0${number}`;
//     }
//     return number;
//   }
//
//   switch (period) {
//     case 'year':
//       return date.getUTCFullYear();
//     case 'month':
//       return pad(date.getUTCMonth() + 1);
//     case 'date':
//       return pad(date.getUTCDate());
//     default:
//       return date;
//   }
// };

const defaults = {
  startOfWeek:   0, // 0 Mo ... 6 Su, by ISO
  minRange:      1, // can select one night
  monthStart:    currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart:     currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek:   7, // FIXME support calendar rendering
  displayMonths: 2,
  selectable:    false,
  showRates:     false,
  showMinStay:   false,
};

export default class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name    = 'Calendar Widget';
    this.VERSION = VERSION;
    this.opts    = merge(defaults, opts);
    this.el      = opts.el;
    this.dom     = {};

    this.opts.lang = Calendar.widgetLang(this.opts.lang, lang);
    this.locale    = locales[this.opts.lang || 'en'];

    this.cTree = new CalendarTree(cell => cell.getAttribute('data-disabled') === '', {});

    if (isObject(maps)) {
      this.cTree.addMaps(maps, maps.start_date || currDate);
    }

    // selection and highlights
    this.isSelecting       = false;
    this.highlightedBounds = [];
    this.init();
  }

  init() {
    addClass(this.el, calendar, reset.reset);

    if (this.opts.showRates || this.opts.showMinStay) {
      addClass(this.el, chunky);
    }

    this.dom.monthsWrapper = this.el.appendChild(elementFromString(tpls.main));

    this.renderMonths(this.opts.yearStart, this.opts.monthStart);

    this.dom.forward = this.el.appendChild(elementFromString(tpls.forward));
    this.dom.back    = this.el.appendChild(elementFromString(tpls.back));
    this.addBtnsEvents();
  }

  renderMonths(yearStart, monthStart) {
    // construct dom tree
    const {
            tree, yearEnd, monthEnd, months,
          } = this.createTree(yearStart, monthStart, this.opts.displayMonths);

    this.cTree.addTree(tree);

    this.currMonth = monthStart;
    this.currYear  = yearStart;

    this.dom.months = months;
    this.monthEnd   = monthEnd;
    this.yearEnd    = yearEnd;

    this.recoverSelections();

    this.dom.months.forEach((m) => {
      this.dom.monthsWrapper.appendChild(m);
      if (this.opts.selectable) {
        this.addMonthEvents(m);
        addClass(this.el, actionsEnabled);
      }
    });
  }

  recoverSelections() {
    if (this.selectionA) {
      this.startSelecting(...this.selectionA, this.cTree.selectDay(...this.selectionA));
    }

    if (this.selectionB) {
      this.endSelecting(...this.selectionB, this.cTree.selectDay(...this.selectionB));
    }

    if (this.highlightedBounds.length > 0) {
      this.highLightRange(...this.highlightedBounds);
    }
  }

  toggleLoading() {
    if (!this.loaderEl) {
      this.loaderEl = this.el.appendChild(elementFromString(tpls.loading));
    } else {
      destroyElement(this.loaderEl);
      this.loaderEl = null;
    }
  }

  addMaps(maps) {
    this.cTree.addMaps(maps, maps.start_date);
    this.destroyMonths();
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);
  }

  // FIXME add renderForward renderBackward methods
  addBtnsEvents() {
    this.dom.forward.addEventListener('click', (e) => {
      this.destroyMonths();
      this.renderMonths(this.yearEnd, this.monthEnd);
      e.preventDefault();
    });

    this.dom.back.addEventListener('click', (e) => {
      this.destroyMonths();
      let monthToRender = this.currMonth - this.opts.displayMonths;
      let yearToRender  = this.currYear;

      if (monthToRender < 0) {
        monthToRender += 12;
        yearToRender -= 1;
      }

      this.renderMonths(yearToRender, monthToRender);
      e.preventDefault();
    });
  }

  addMonthEvents(month) {
    month.addEventListener('click', (e) => {
      const cell = e.target;
      if (cell.hasAttribute('data-enabled')) {
        const dayValue = [month.year, month.month, parseInt(cell.getAttribute('data-value'), 10)];

        if (this.isSelecting && isLater(this.selectionA, dayValue)) {
          if (!this.hasValidRange) {
            return;
          }
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
      if (cell.hasAttribute('data-value')) {
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
    range.map(a => removeClass(a,
      highlighted, invalid)
    );
    this.hasValidRange     = true;
    this.highlightedBounds = [];
  }

  highLightRange(start, end) {
    const { range, isValid } = this.selectRange(start, end);
    let hasValidRange        = isValid;

    if (isArray(range)) {
      // if selected range less than minimum nights
      if (range.length <= this.opts.minRange) {
        hasValidRange = false;
      }

      range.map(a => addClass(a,
        hasValidRange ? highlighted : invalid)
      );

      this.hasValidRange     = hasValidRange;
      this.highlightedBounds = [start, end];
    }
  }

  resetSelection() {
    this.removeHighlight(...this.highlightedBounds);
    this.selectionA = null;
    this.selectionB = null;

    removeClass(this.cellA, selected);
    removeClass(this.cellB, selected);
    this.cellA = null;
    this.cellB = null;
  }

  selectRange(start, end) {
    if (isLater(start, end)) {
      return this.cTree.selectRange(start, end);
    }
    return false;
  }

  startSelecting(year, month, day, cell) {
    this.selectionA = [year, month, day];

    if (this.cellA) {
      removeClass(this.cellA, selected);
    }

    if (cell) {
      addClass(cell, selected);
      this.cellA = cell;
    }
    this.isSelecting = true;
  }

  endSelecting(year, month, day, cell) {
    this.selectionB = [year, month, day];

    if (this.cellB) {
      removeClass(this.cellB, selected);
    }

    if (cell) {
      addClass(cell, selected);
      this.cellB = cell;
    }
    this.isSelecting = false;
  }

  createTree(yearStart, monthStart, times) {
    const months = [];
    const tree   = {};
    let monthEnd = monthStart;
    let yearEnd  = yearStart;

    for (let i = 0; i < times; i += 1) {
      const mDom = this.domMonth(yearEnd, monthEnd);

      months.push(mDom);

      if (!tree[yearEnd]) {
        tree[yearEnd] = {};
      }

      if (!tree[yearEnd][monthEnd]) {
        tree[yearEnd][monthEnd] = mDom.days || [];
      }

      if (monthEnd > 10) {
        monthEnd = 0;
        yearEnd += 1;
      } else {
        monthEnd += 1;
      }
    }

    return {
      tree,
      yearEnd,
      monthEnd,
      months,
    };
  }

  domMonth(year, month) {
    const monthDom                                    = elementFromString(tpls.month);
    monthDom.querySelector(`.${tableHeader} tr`).innerHTML = this.headerTplString();
    monthDom.querySelector(`.${caption}`).innerHTML   = `${this.locale.months[month]} ${year}`;
    monthDom.querySelector(`.${body}`).innerHTML      = this.daysTplString(year, month);
    // const days = [].slice.call(monthDom.querySelectorAll('[data-value]'));

    monthDom.month = month;
    monthDom.year  = year;

    return monthDom;
  }

  /**
   *
   * @returns {string}
   */
  headerTplString() {
    // just to make life easier with start of the week calculation
    const header                 = [];
    const weekdaysLabelsExtended = this.locale.weekdaysLabels.concat(this.locale.weekdaysLabels);

    for (let i = 0; i < this.opts.daysPerWeek; i += 1) {
      header.push(tpls.weekDayLabel(weekdaysLabelsExtended[i + this.opts.startOfWeek]));
    }
    return header.join('');
  }

  /**
   *
   * @param year
   * @param month
   * @returns {string}
   */
  daysTplString(year, month) {
    const startOfMonth = new Date(year, month, 1).getUTCDay();
    const daysInMonth  = monthLength(year, month);
    const rowTemplate  = tpls.weekRow;
    const monthTpl     = [];
    const weekShift    = (this.opts.daysPerWeek - this.opts.startOfWeek);

    let rows               = 5;
    let weekShiftCorrected = startOfMonth + weekShift;
    let dayCounter         = 0;
    let dayOfMonth         = 1;

    // don't render full empty week
    if (weekShiftCorrected >= this.opts.daysPerWeek) {
      weekShiftCorrected -= this.opts.daysPerWeek;
    }

    // try to figure out if 5 rows is enough for the month
    if (rows * this.opts.daysPerWeek < weekShiftCorrected + daysInMonth) {
      rows = 6;
    }

    // for each week (5 or 6)
    for (let i = 0; i < rows; i += 1) {
      const week = [];
      // open tag <tr>
      week.push(rowTemplate.open);

      // push days in week
      for (let j = 0; j < this.opts.daysPerWeek; j += 1) {
        // pushing actual days 1...daysInMonth
        if ((dayCounter >= weekShiftCorrected) && dayOfMonth <= daysInMonth) {
          const rate     = this.opts.showRates ? this.cTree.getDayProperty(year, month, dayOfMonth, 'rate') : null;
          const minStay  = this.opts.showMinStay ? this.cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : null;
          const rateT    = this.locale.rate;
          const minStayT = this.locale.minStay;

          week.push(tpls.weekDay(
            dayOfMonth,
            this.cTree.isDayDisabled(year, month, dayOfMonth), rate, minStay, rateT, minStayT
          ));

          dayOfMonth += 1;
          // pushing placeholders instead of days
        } else {
          week.push(tpls.weekDayPlaceholder);
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

  destroyMonths() {
    this.dom.months.map(m => destroyElement(m));
  }

  destroy() {
    return destroyElement(this.el);
  }

  /**
   *
   * @param elLang {String}
   * @param documentLang {String}
   * @returns {String}
   */
  static widgetLang(elLang, documentLang) {
    let langFallback = elLang || documentLang;

    if (Object.keys(locales).indexOf(langFallback) === -1) {
      console.warn('this language is not supported yet');
      langFallback = 'en';
    }

    return langFallback;
  }
}
