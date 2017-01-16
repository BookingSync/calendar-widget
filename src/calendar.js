/* global VERSION, Node, document, require */
import {
  addClass,
  removeClass,
  isArray,
  isObject,
  Emitter,
  merge,
  elementFromString,
  traverseToParentWithAttr,
  destroyElement,
  monthLength,
  is,
  isFunction,
  isNumeric,
  traverseObj,
} from 'widget-utils';

import * as tpls from './templates';
import CalendarTree from './calendar-tree';
import locales from './locales';

import reset from './styles/Reset.css';
import css from './styles/Calendar.css';


const { calendar, chunky, highlighted, invalid,
        selected, actionsEnabled, body, tableHeader, caption, selectedStart, selectedEnd,
        selecting } = css;

const { documentElement: { lang } }  = document;
const currDate                       = new Date();
const isLater                        = (start, end) => new Date(...start) < new Date(...end);

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

const dateToIso = (year, month, day) => {
  function pad(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  return new Date(`${year}-${pad(month + 1)}-${day}`);
};

const validationOfRange = (cell, index, range) => {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }
  return cell.getAttribute('data-disabled') === '';
};

const defaults = {
  startOfWeek:      6, // 0 Mo ... 6 Su, by ISO
  minRange:         1, // can select one night
  monthStart:       currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart:        currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek:      7, // FIXME support calendar rendering
  displayMonths:    2,
  selectable:       false,
  showRates:        false,
  showMinStay:      false,
  reverseSelecting: false, // select end date first
  isBackDisabled:   true,
};

export default class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name    = 'BookingSync Calendar Widget';
    this.VERSION = VERSION;
    this.opts    = merge(defaults, opts);
    this.el      = opts.el;
    this.dom     = {};

    this.opts    = traverseObj(this.opts, a => a, (b) => {
      if (b === 'true' || b === 'false') {
        return (b === 'true');
      }
      if (isNumeric(b)) {
        return parseInt(b, 10);
      }
      return b;
    });

    this.opts.lang = Calendar.widgetLang(this.opts.lang, lang);
    this.locale    = locales[this.opts.lang || 'en'];

    this.cTree = new CalendarTree(validationOfRange, {});

    if (isObject(maps)) {
      this.cTree.addMaps(maps, maps.start_date || currDate);
    }

    // selection and highlights
    this.isSelecting       = false;
    this.highlightedBounds = [];
    this.hasValidRange     = true;

    // user selects end date first
    this.reverseSelecting  = this.opts.reverseSelecting;
    this.init();
  }

  init() {
    addClass(this.el, calendar, reset.reset);

    if (this.opts.showRates || this.opts.showMinStay) {
      addClass(this.el, chunky);
    }

    this.dom.monthsWrapper = this.el.appendChild(elementFromString(tpls.main));
    this.dom.forward       = this.el.appendChild(elementFromString(tpls.forward));
    this.dom.back          = this.el.appendChild(elementFromString(tpls.back));
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);

    this.addBtnsEvents();
    this.emit('init');
  }

  renderMonths(yearStart, monthStart) {
    // construct dom tree
    const {
            tree, yearEnd, monthEnd, months,
          } = this.createTree(yearStart, monthStart, this.opts.displayMonths);

    this.cTree.addTree(tree);

    this.monthStart = monthStart;
    this.yearStart  = yearStart;

    this.monthEnd   = monthEnd;
    this.yearEnd    = yearEnd;

    this.recoverSelections();

    this.dom.months = months;
    this.dom.months.forEach((m) => {
      this.dom.monthsWrapper.appendChild(m);
      if (this.opts.selectable) {
        this.addMonthEvents(m);
        addClass(this.el, actionsEnabled);
      }
    });

    this.disableBackBtn();
  }

  recoverSelections() {
    if (this.selectionStart) {
      this.selectStart(...this.selectionStart, this.cTree.selectDay(...this.selectionStart));
    }

    if (this.selectionEnd) {
      this.selectEnd(...this.selectionEnd, this.cTree.selectDay(...this.selectionEnd));
    }

    if (this.highlightedBounds.length > 0) {
      this.highLightRange(...this.highlightedBounds);
    }
  }

  disableBackBtn() {
    if (this.opts.isBackDisabled) {
      const startDate = dateToIso(this.yearStart, this.monthStart, 1);
      const curr = dateToIso(currDate.getFullYear(), currDate.getMonth(), 1);
      this.dom.back.disabled = startDate <= curr;
    }
  }

  toggleLoading() {
    if (!this.loaderEl) {
      this.loaderEl = this.el.appendChild(elementFromString(tpls.loading));
      this.emit('loading-starts');
    } else {
      destroyElement(this.loaderEl);
      this.loaderEl = null;
      this.emit('loading-ended');
    }
  }

  addMaps(maps) {
    this.cTree.replaceMaps(maps, maps.start_date);
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
      let monthToRender = this.monthStart - this.opts.displayMonths;
      let yearToRender  = this.yearStart;

      if (monthToRender < 0) {
        monthToRender += 12;
        yearToRender -= 1;
      }

      this.renderMonths(yearToRender, monthToRender);
      e.preventDefault();
    });
  }

  addMonthEvents(el) {
    el.addEventListener('click', (e) => {
      const isEndFirst = this.reverseSelecting;
      let value;
      let cell;

      if (this.isSelecting || isEndFirst) {
        ({ value, parent: cell } = traverseToParentWithAttr(e.target, 'data-available-out'));
      } else {
        ({ value, parent: cell } = traverseToParentWithAttr(e.target, 'data-enabled'));
      }

      if (is(value) && cell) {
        const dateValue  = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

        // for simplicity just reset selection when user interacts again
        if (!this.isSelecting && this.selectionEnd && this.selectionStart) {
          this.resetSelection();
        }

        if (isEndFirst) {
          this.endDateFirstAction(dateValue, cell);
        } else {
          this.startDateFirstAction(dateValue, cell);
        }
      }
    });

    el.addEventListener('mouseover', (e) => {
      const { value, parent: cell } = traverseToParentWithAttr(e.target, 'data-value');

      if (is(value) && cell) {
        if (this.isSelecting) {
          const current = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

          this.removeHighlight();

          if (this.reverseSelecting) {
            this.highLightRange(current, this.selectionEnd);
          } else {
            this.highLightRange(this.selectionStart, current);
          }
        }
      }
    });

    el.body.addEventListener('mouseout', (e) => {
      /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
      // simulate 'mouseleave'
      if (!e.relatedTarget ||
        (e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget) &
        Node.DOCUMENT_POSITION_CONTAINED_BY))) {
        if (this.isSelecting) {
          this.removeHighlight();
        }
      }
    });
  }

  endDateFirstAction(dateValue, cell) {
    if (this.isSelecting && isLater(dateValue, this.selectionEnd)) {
      if (!this.hasValidRange) {
        return;
      }
      this.selectStartAction(dateValue, cell);
      removeClass(this.el, selecting);
      this.isSelecting = false;
    } else {
      addClass(this.el, selecting);
      this.isSelecting = true;
      this.selectEndAction(dateValue, cell);
    }
  }

  startDateFirstAction(dateValue, cell) {
    if (this.isSelecting && isLater(this.selectionStart, dateValue)) {
      if (!this.hasValidRange) {
        return;
      }
      this.selectEndAction(dateValue, cell);
      removeClass(this.el, selecting);
      this.isSelecting = false;
    } else {
      addClass(this.el, selecting);
      this.isSelecting = true;
      this.selectStartAction(dateValue, cell);
    }
  }

  selectStartAction(dateValue, cell) {
    this.selectStart(...dateValue, cell);
    this.emit('selection-start', dateToIso(...dateValue), dateValue);
    if (isFunction(this.opts.onSelectStart)) {
      this.opts.onSelectStart(dateToIso(...dateValue), dateValue);
    }
  }

  selectEndAction(dateValue, cell) {
    this.selectEnd(...dateValue, cell);
    this.emit('selection-end', dateToIso(...dateValue), dateValue);
    if (isFunction(this.opts.onSelectEnd)) {
      this.opts.onSelectEnd(dateToIso(...dateValue), dateValue);
    }
  }

  removeHighlight() {
    if (this.highlightedBounds.length > 0) {
      const { range } = this.selectRange(...this.highlightedBounds);
      range.map(a => removeClass(a, highlighted, invalid));

      this.hasValidRange     = true;
      this.highlightedBounds = [];
    }
  }

  highLightRange(start, end) {
    const { range, isValid } = this.selectRange(start, end);
    let hasValidRange = isValid;

    if (isArray(range)) {
      // if selected range less than minimum stay at start
      if (range.length <= this.cTree.getDayProperty(...start, 'minStay')) {
        hasValidRange = false;
      }

      range.map(a => addClass(a,
        hasValidRange ? highlighted : invalid)
      );

      this.hasValidRange     = hasValidRange;
      this.highlightedBounds = [start, end];
    }

    return hasValidRange;
  }

  resetSelection() {
    this.removeHighlight();
    this.isSelecting = false;

    this.emit('clear-selection', this.selectionStart, this.selectionEnd);
    if (isFunction(this.opts.onClearSelection)) {
      this.opts.onClearSelection(this.selectionStart, this.selectionEnd);
    }

    this.selectionStart = null;
    this.selectionEnd = null;

    if (this.cellA) {
      removeClass(this.cellA, selected, selectedStart);
      this.cellA = null;
    }

    if (this.cellB) {
      removeClass(this.cellB, selected, selectedEnd);
      this.cellB = null;
    }

    return this;
  }

  selectRange(start, end) {
    if (isLater(start, end)) {
      return this.cTree.selectRange(start, end);
    }
    return  {
      range: null,
      isValid: false,
    };
  }

  selectStart(year, month, day, cell) {
    this.selectionStart = [year, month, day];

    if (this.cellA) {
      removeClass(this.cellA, selected, selectedStart);
    }

    if (cell) {
      addClass(cell, selected, selectedStart);
      this.cellA = cell;
    }
  }

  selectEnd(year, month, day, cell) {
    this.selectionEnd = [year, month, day];

    if (this.cellB) {
      removeClass(this.cellB, selected, selectedEnd);
    }

    if (cell) {
      addClass(cell, selected, selectedEnd);
      this.cellB = cell;
    }
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
        tree[yearEnd][monthEnd] = mDom.dayElements || [];
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
    const monthDom                                         = elementFromString(tpls.month);
    monthDom.querySelector(`.${tableHeader} tr`).innerHTML = this.headerTplString();
    monthDom.querySelector(`.${caption}`).innerHTML        = `${this.locale.months[month]} ${year}`;

    monthDom.body           = monthDom.querySelector(`.${body}`);
    monthDom.body.innerHTML = this.daysTplString(year, month);

    monthDom.month       = month;
    monthDom.year        = year;
    monthDom.dayElements = [].slice.call(monthDom.querySelectorAll('[data-value]'));

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
          const rate            = this.opts.showRates ? this.cTree.getDayProperty(year, month, dayOfMonth, 'rate') : null;
          const minStay         = this.opts.showMinStay ? this.cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : null;

          let isDisabled      = this.cTree.isDayDisabled(year, month, dayOfMonth);
          let isOutAvailable = this.cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
          let isDisabledStart   = this.cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');

          // in the past any availability does not make sense
          if (isLater([year, month, dayOfMonth], currDate)) {
            isDisabled = true;
            isDisabledStart = undefined;
            isOutAvailable = undefined;
          }

          week.push(tpls.weekDay(
            dayOfMonth, isDisabled, isDisabledStart, isOutAvailable,
            rate, minStay, this.locale.rate, this.locale.minStay
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
