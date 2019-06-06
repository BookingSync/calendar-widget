/* global VERSION, Node, CSS_PREFIX, document, console */
import {
  addClass, removeClass, hasClass, isArray, isObject, Emitter,
  merge, elementFromString, traverseToParentWithAttr, destroyElement, monthLength, is, isFunction,
  isNumeric, traverseObj, ajax, isInside, currencyFormatter
} from 'widget-utils';

import Popper from 'popper.js';

import * as tpls from './templates';
import CalendarTree from './calendar-tree';
import config from './config';
import locales from './locales';

import { strftime } from 'strtime';

import {
  dateToIso, isLater, isCurrent, validationOfRange, tFormatter, dateToArray
} from './utils';

import {
  calendar, chunky, highlighted, invalid,
  selected, actionsEnabled, body, tableHeader, caption, selectedStart, selectedEnd,
  reversed, direct, selectingReversed, selectingDirect, dropBasic, focus, visible
} from './styles/calendar.scss';

import { reset } from './styles/reset.scss';

export default class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name    = config.name;
    this.VERSION = VERSION;

    if (isObject(opts)) {
      if (!opts.el) {
        this.logger('el must be HTML element', 'error');
        return;
      }

      const configDataset = merge(config, opts.el.dataset);
      this.opts           = merge(configDataset, opts);

      this.opts = traverseObj(this.opts, (a) => a, (b) => {
        if (b === 'true' || b === 'false') {
          return (b === 'true');
        }
        if (isNumeric(b)) {
          return parseInt(b, 10);
        }
        return b;
      });

      if (this.opts.isDropDown) {
        this.initCalendarDrop();
      } else {
        this.el = opts.el;
      }

      this.opts.lang        = (this.opts.lang && this.opts.lang in locales) ? this.opts.lang : 'en-US';
      this.locale           = locales[this.opts.lang];
      this.format           = this.opts.formatDate || this.locale.formatDate || '%D';
      this.opts.startOfWeek = this.opts.startOfWeek || this.locale.startOfWeek;
    }

    this.dom   = {};
    this.cTree = new CalendarTree(validationOfRange, {});

    if (isObject(maps)) {
      this.cTree.addMaps(maps, maps.start_date || this.opts.currDate);
    }

    // selection and highlights
    this.isSelecting       = false;
    this.highlightedBounds = [];
    this.hasValidRange     = true;

    // user selects end date first
    this.isReverseSelectable = this.opts.isReverseSelectable;
    this.init();
  }

  init() {
    addClass(this.el, calendar, reset);

    if (this.opts.selectable && this.opts.elStartAt && this.opts.elEndAt) {
      if (this.opts.elStartAt.value && this.opts.elEndAt.value) {
        this.selectionStart = dateToArray(this.opts.elStartAt.value, this.format, this.locale);
        this.selectionEnd   = dateToArray(this.opts.elEndAt.value, this.format, this.locale);
        this.completeSelection();
      }
    }

    this.dom.monthsWrapper = this.el.appendChild(elementFromString(tpls.main));
    this.dom.forward       = this.el.appendChild(elementFromString(tpls.forward));
    this.dom.back          = this.el.appendChild(elementFromString(tpls.back));
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);

    this.addBtnsEvents();

    if (this.opts.rentalId) {
      if (this.opts.showRates || this.opts.showMinStay) {
        addClass(this.el, chunky);
      }

      this.loadMaps(this.opts.rentalId);
    }

    this.logger('inited');
    this.emit('init');
  }

  changeSelectionOrder(isReverse) {
    if ((isReverse !== this.isReverseSelectable) && !this.isSelecting) {
      this.isReverseSelectable = isReverse;
      this.destroyMonths();
      this.renderMonths(this.yearStart, this.monthStart);
    }
  }

  renderMonths(yearStart, monthStart) {
    // construct dom tree
    const {
      tree, yearEnd, monthEnd, months
    } = this.createTree(yearStart, monthStart, this.opts.displayMonths);

    this.cTree.addTree(tree);

    this.monthStart = monthStart;
    this.yearStart  = yearStart;

    this.monthEnd = monthEnd;
    this.yearEnd  = yearEnd;

    this.recoverSelections();

    if (this.opts.selectable) {
      addClass(this.el, this.isReverseSelectable ? reversed : direct);
      removeClass(this.el, this.isReverseSelectable ? direct : reversed);
    }

    this.dom.months = months;
    this.dom.months.forEach((m) => {
      this.dom.monthsWrapper.appendChild(m);
      if (this.opts.selectable) {
        this.addMonthEvents(m);
        addClass(this.el, actionsEnabled);
      }
    });

    if (!this.opts.enableAllDays) {
      this.disableBackBtn();
    }
  }

  recoverSelections() {
    if (this.selectionStart) {
      this.selectStart(this.selectionStart, this.cTree.selectDay(...this.selectionStart));
    }

    if (this.selectionEnd) {
      this.selectEnd(this.selectionEnd, this.cTree.selectDay(...this.selectionEnd));
    }

    if (this.selectionStart && this.selectionEnd) {
      if (this.highlightedBounds.length > 0) {
        this.highLightRange(...this.highlightedBounds);
      } else {
        this.highLightRange(this.selectionStart, this.selectionEnd);
      }
    }
  }

  disableBackBtn() {
    if (this.opts.isBackDisabled) {
      const startDate        = dateToIso(this.yearStart, this.monthStart, 1);
      const curr             = dateToIso(this.opts.currDate.getFullYear(), this.opts.currDate.getMonth(), 1);
      this.dom.back.disabled = startDate <= curr;
    }
  }

  toggleLoading() {
    if (!this.loaderEl) {
      this.loaderEl = this.el.appendChild(elementFromString(tpls.loading));
      this.emit('loading-show');
    } else {
      destroyElement(this.loaderEl);
      this.loaderEl = null;
      this.emit('loading-hide');
    }
  }

  addMaps(maps) {
    this.cTree.replaceMaps(maps, maps.start_date);
    this.destroyMonths();
    this.renderMonths(
      this.opts.yearStart || this.yearStart,
      this.opts.monthStart || this.monthStart
    );
  }

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
      const isEndFirst = this.isReverseSelectable;
      const weekDayEl  = traverseToParentWithAttr(e.target, 'data-value').parent;
      let value, cell;

      const resetSelectionOnEscape = (event) => {
        const key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
          if (this.isSelecting) {
            document.removeEventListener('keyup', resetSelectionOnEscape, true);
            this.resetSelection();
          }
        }
      };

      // cancel selection if day is invalid
      if (weekDayEl && hasClass(weekDayEl, invalid)) {
        document.removeEventListener('keyup', resetSelectionOnEscape, true);
        this.resetSelection();
      }

      document.addEventListener('keyup', resetSelectionOnEscape, true);

      if (this.isSelecting) {
        ({
          value, parent: cell
        } = traverseToParentWithAttr(e.target, isEndFirst ? 'data-enabled' : 'data-available-out'));
      } else {
        ({
          value, parent: cell
        } = traverseToParentWithAttr(e.target, isEndFirst ? 'data-available-out' : 'data-enabled'));
      }

      if (is(value) && cell) {
        const dateValue = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

        // for simplicity just reset selection when user interacts again
        if (!this.isSelecting && this.selectionEnd && this.selectionStart) {
          document.removeEventListener('keyup', resetSelectionOnEscape, true);
          this.resetSelection();
        }

        if (isEndFirst) {
          this.endDateFirstAction(dateValue, cell);
        } else {
          this.startDateFirstAction(dateValue, cell);
        }

        if (this.selectionEnd && this.selectionStart) {
          document.removeEventListener('keyup', resetSelectionOnEscape, true);
          this.completeSelection(isEndFirst, dateValue, cell);
          if (this.opts.isDropDown && this.calDrop) {
            this.closeDrop(null, true);
          }
        }
      }
    });

    el.addEventListener('mouseover', (e) => {
      const { value, parent: cell } = traverseToParentWithAttr(e.target, 'data-value');

      if (is(value) && cell) {
        const current = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

        if (this.isSelecting) {
          this.removeHighlight();

          if (this.isReverseSelectable && this.selectionEnd) {
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
      if (!e.relatedTarget
        || (e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget)
        & Node.DOCUMENT_POSITION_CONTAINED_BY))) {
        if (this.isSelecting) {
          this.removeHighlight();
        }
      }
    });
  }

  startDateFirstAction(dateValue, cell) {
    if (this.isSelecting && isLater(this.selectionStart, dateValue)) {
      if (!this.hasValidRange) {
        return;
      }
      this.selectEndAction(dateValue, cell);

      const fn = () => {
        removeClass(this.el, selectingDirect);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      addClass(this.el, selectingDirect);
      this.isSelecting = true;
      this.selectStartAction(dateValue, cell);
    }
  }

  endDateFirstAction(dateValue, cell) {
    if (this.isSelecting && isLater(dateValue, this.selectionEnd)) {
      if (!this.hasValidRange) {
        return;
      }
      this.selectStartAction(dateValue, cell);

      const fn = () => {
        removeClass(this.el, selectingReversed);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      addClass(this.el, selectingReversed);
      this.isSelecting = true;
      this.selectEndAction(dateValue, cell);
    }
  }

  selectStartAction(dateValue, cell) {
    this.selectStart(dateValue, cell);
    this.switchInputFocus('end');
    this.emit('selection-start', dateToIso(...dateValue, true), dateToIso(...dateValue));
    if (isFunction(this.opts.onSelectStart)) {
      this.opts.onSelectStart(dateToIso(...dateValue, true), dateToIso(...dateValue));
    }
  }

  selectEndAction(dateValue, cell) {
    this.selectEnd(dateValue, cell);
    this.switchInputFocus('start');
    this.emit('selection-end', dateToIso(...dateValue, true), dateToIso(...dateValue));
    if (isFunction(this.opts.onSelectEnd)) {
      this.opts.onSelectEnd(dateToIso(...dateValue, true), dateToIso(...dateValue));
    }
  }

  removeHighlight() {
    if (this.highlightedBounds.length > 0) {
      const { range } = this.selectRange(...this.highlightedBounds);
      range.map((a) => removeClass(a, highlighted, invalid));

      this.hasValidRange     = true;
      this.highlightedBounds = [];
    }
  }

  highLightRange(start, end) {
    const { range, isValid } = this.selectRange(start, end);
    let hasValidRange        = this.opts.rentalId ? isValid : true;
    const minStay            = this.opts.rentalId ? (this.opts.allowShorterMinStaySelection ? 1 : this.cTree.getDayProperty(...start, 'minStay')) : this.opts.minStay;

    if (isArray(range)) {
      // check that range is valid and longer than minStay
      this.hasValidRange = hasValidRange = hasValidRange && range.length > minStay;

      range.map((a) => {
        removeClass(a, highlighted, invalid);
        addClass(a, hasValidRange ? highlighted : invalid);
        return a;
      });

      this.highlightedBounds = [start, end];
    }

    return hasValidRange;
  }

  /** Resets selection, removes highlights
   * @public
   * @returns {Calendar}
   */
  resetSelection() {
    this.removeHighlight();
    this.isSelecting = false;

    this.emit('selection-reset', this.selectionStart, this.selectionEnd);
    if (isFunction(this.opts.onClearSelection)) {
      this.opts.onClearSelection(this.selectionStart, this.selectionEnd);
    }

    this.selectionStart = null;
    this.selectionEnd   = null;

    if (this.cellA) {
      removeClass(this.cellA, selected, selectedStart);
      this.cellA = null;
    }

    if (this.cellB) {
      removeClass(this.cellB, selected, selectedEnd);
      this.cellB = null;
    }

    if (this.opts.isDropDown && this.opts.elStartAt && this.opts.elEndAt) {
      this.opts.elStartAt.value = null;
      this.opts.elEndAt.value   = null;
    }

    return this;
  }

  selectRange(start, end) {
    if (isLater(start, end)) {
      return this.cTree.selectRange(start, end);
    }
    return {
      range: null,
      isValid: false
    };
  }

  selectStart(dateValue, cell) {
    this.selectionStart = dateValue;

    if (this.cellA) {
      removeClass(this.cellA, selected, selectedStart);
    }

    if (cell) {
      addClass(cell, selected, selectedStart);
      this.cellA = cell;
    }

    this.valueToInput('start', dateValue);
  }

  selectEnd(dateValue, cell) {
    this.selectionEnd = dateValue;

    if (this.cellB) {
      removeClass(this.cellB, selected, selectedEnd);
    }

    if (cell) {
      addClass(cell, selected, selectedEnd);
      this.cellB = cell;
    }

    this.valueToInput('end', dateValue);
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
      months
    };
  }

  domMonth(year, month) {
    const monthDom                                         = elementFromString(tpls.month);
    monthDom.querySelector(`.${tableHeader} tr`).innerHTML = this.headerTplString();
    monthDom.querySelector(`.${caption}`).innerHTML        = `${this.locale.longMonthNames[month]} ${year}`;

    monthDom.body           = monthDom.querySelector(`.${body}`);
    monthDom.body.innerHTML = this.daysTplString(year, month);

    monthDom.month       = month;
    monthDom.year        = year;
    monthDom.dayElements = [].slice.call(monthDom.querySelectorAll('[data-value]'));

    return monthDom;
  }

  headerTplString() {
    // just to make life easier with start of the week calculation
    const header                 = [];
    const weekdaysLabelsExtended = this.locale.shortWeekdayNames.concat(this.locale.shortWeekdayNames);

    for (let i = 0; i < this.opts.daysPerWeek; i += 1) {
      header.push(tpls.weekDayLabel(weekdaysLabelsExtended[i + this.opts.startOfWeek]));
    }
    return header.join('');
  }

  daysTplString(year, month) {
    const startOfMonth = new Date(year, month, 1).getDay();
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
      week.push(rowTemplate(i).open);

      // push days in week
      for (let j = 0; j < this.opts.daysPerWeek; j += 1) {
        // pushing actual days 1...daysInMonth
        if ((dayCounter >= weekShiftCorrected) && dayOfMonth <= daysInMonth) {
          week.push(this.dayTplString(year, month, dayOfMonth));
          dayOfMonth += 1;
          // pushing placeholders instead of days
        } else {
          week.push(tpls.weekDayPlaceholder);
        }

        dayCounter += 1;
      }
      // close tag </tr> of week
      week.push(rowTemplate().close);
      // push completed week to month template
      monthTpl.push(week.join(''));
    }

    return monthTpl.join('');
  }

  dayTplString(year, month, dayOfMonth) {
    const { cTree }   = this;
    const rate        = this.opts.showRates ? cTree.getDayProperty(year, month, dayOfMonth, 'rate') : 0;
    const minStay     = this.opts.showMinStay ? cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : 0;

    let isDisabled      = cTree.isDayDisabled(year, month, dayOfMonth);
    let isOutAvailable  = cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
    let isDisabledStart = cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');
    const cDate         = this.opts.currDate;
    const cDateArray    = [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()];
    const dateArray     = [year, month, dayOfMonth];

    // in the past any availability does not make sense
    if (isLater(dateArray, cDateArray)) {
      isDisabled      = true;
      isDisabledStart = undefined;
      isOutAvailable  = undefined;
    }

    if (isCurrent(dateArray, cDateArray)) {
      isDisabled      = false;
      isDisabledStart = true;
    }

    // if there is not rentalId and no maps, just render plain calendar
    if (!this.opts.rentalId && isLater(cDateArray, dateArray) || this.opts.enableAllDays) {
      isDisabled = false;
      isOutAvailable = true;
      isDisabledStart = false;
    }

    return tpls.weekDay(
      dayOfMonth, isDisabled, isDisabledStart, isOutAvailable, rate, (this.opts.allowShorterMinStaySelection ? 1 : minStay),
      currencyFormatter(Math.round(rate), this.opts.lang, this.opts.currency || this.locale.currency),
      tFormatter(minStay, this.locale.minStay)
    );
  }

  destroyMonths() {
    if (this.dom && isArray(this.dom.months)) {
      this.dom.months.map((m) => destroyElement(m));
    }
  }

  destroy() {
    return destroyElement(this.el);
  }

  loadMaps(id) {
    this.toggleLoading();

    const onSuccess = (maps) => {
      this.toggleLoading();

      if (isArray(maps.data) && maps.data[0].attributes) {
        if (this.opts.disableAvailabityMap) {
          maps.data[0].attributes.availability = maps.data[0].attributes.availability.replace(/[0-9]/g, '0');
        }
        this.opts.currency = this.opts.currency || maps.data[0].attributes.currency;
        this.emit('maps-loaded', maps);
        this.addMaps(maps.data[0].attributes);
        this.mapsLoaded = true;
      } else {
        this.logger('expects json-api data format', 'error');
      }
    };

    const onError = () => {
      this.toggleLoading();
      this.emit('maps-error');
      this.logger('Server error happened', 'error');
    };

    ajax(this.opts.rentalUrl(id), onSuccess, onError);
  }

  completeSelection() {
    if (this.opts.isSingleInput) {
      const singleInputDateFormat = this.singleInputDateFormat || this.locale.formatDate;

      const dateStart = strftime(dateToIso(...this.selectionStart), singleInputDateFormat, this.locale);
      const dateEnd   = strftime(dateToIso(...this.selectionEnd), singleInputDateFormat, this.locale);

      this.opts.elSingleInput.value = `${dateStart} ${this.opts.singleInputSeparator} ${dateEnd}`;
    }

    this.emit('selection-completed', this.selectionStart, this.selectionEnd);
    if (isFunction(this.opts.onSelectionCompleted)) {
      this.opts.onSelectionCompleted(
        dateToIso(...this.selectionStart, true), dateToIso(...this.selectionEnd, true)
      );
    }
  }

  initCalendarDrop() {
    const element = elementFromString('<div></div>');
    this.elTarget = this.opts.el;
    this.el       = element;

    document.body.appendChild(element);

    this.opts.elStartAt     = this.opts.elStartAt || document.querySelector(`.${CSS_PREFIX}__start-at`);
    this.opts.elEndAt       = this.opts.elEndAt || document.querySelector(`.${CSS_PREFIX}__end-at`);
    this.opts.elSingleInput = this.opts.elSingleInput || document.querySelector(`.${CSS_PREFIX}__single-input`);

    if (this.opts.hiddenElFormat) {
      [this.opts.elStartAt, this.opts.elEndAt].forEach((input, i) => {
        const hiddenInput = input.cloneNode(true);
        input.parentElement.appendChild(hiddenInput);
        input.removeAttribute('name');
        hiddenInput.className = '';
        hiddenInput.hidden    = true;

        (i) ? this.hiddenElEndAt = hiddenInput : this.hiddenElStartAt = hiddenInput;
      });
    }

    if (this.opts.isSingleInput) {
      this.opts.elSingleInput.readOnly = true;

      [this.opts.elStartAt, this.opts.elEndAt].forEach((input) => {
        input.hidden = true;
      });
    }

    addClass(this.el, dropBasic);

    const calDrop = new Popper(this.elTarget, this.el, {
      placement: this.opts.dropPlacement || 'bottom-start',
      hide: true
    });

    const onFocus = (input, isReversed) => {
      this.switchInputFocus(input);
      this.changeSelectionOrder(isReversed);

      if (!hasClass(this.el, visible)) {
        calDrop.update();
        this.emit('drop-open');
        addClass(this.el, visible);

        if (!this.mapsLoaded && this.opts.rentalId) {
          this.loadMaps(this.opts.rentalId);
        }
      }
    };

    if (this.opts.isSingleInput) {
      this.opts.elSingleInput.addEventListener('focus', () => {
        onFocus('start', false);
      });
    } else {
      this.opts.elStartAt.addEventListener('focus', () => {
        onFocus('start', false);
      });

      this.opts.elEndAt.addEventListener('focus', () => {
        onFocus('end', true);
      });
    }

    document.addEventListener('click', this.closeDrop.bind(this));
    this.calDrop = calDrop;

    if (this.opts.elReset) {
      this.opts.elReset.addEventListener('click', () => {
        this.resetSelection();
      });
    }
  }

  valueToInput(input, dateValue) {
    const { elStartAt } = this.opts;
    const { elEndAt }   = this.opts;

    const date  = dateToIso(...dateValue);
    const value = strftime(date, this.format, this.locale);
    const evt   = document.createEvent('Event');

    evt.initEvent('change', false, true);

    if (this.opts.hiddenElFormat) {
      const hiddenValue = strftime(date, this.opts.hiddenElFormat, this.locale);

      if (input === 'start' && this.hiddenElStartAt) {
        this.hiddenElStartAt.value = hiddenValue;
      } else if (input === 'end' && this.hiddenElEndAt) {
        this.hiddenElEndAt.value = hiddenValue;
      }
    }

    if (input === 'start' && elStartAt) {
      elStartAt.value = value;
      elStartAt.dispatchEvent(evt);
    } else if (input === 'end' && elEndAt) {
      elEndAt.value = value;
      elEndAt.dispatchEvent(evt);
    }
  }

  switchInputFocus(type) {
    if (this.opts.elStartAt && this.opts.elEndAt) {
      if (type === 'start') {
        addClass(this.opts.elStartAt, focus);
        removeClass(this.opts.elEndAt, focus);
      }
      if (type === 'end') {
        addClass(this.opts.elEndAt, focus);
        removeClass(this.opts.elStartAt, focus);
      }
      if (type === 'any') {
        removeClass(this.opts.elStartAt, focus);
        removeClass(this.opts.elEndAt, focus);
      }
    }
  }

  closeDrop(e, force) {
    if (!force && (isInside(e.target, this.el) || isInside(e.target, this.elTarget))) {
      e.stopPropagation();
    } else {
      removeClass(this.el, visible);
      this.emit('drop-close');
      this.switchInputFocus('any');
    }
  }

  toString() {
    return `[${this.name} ${this.VERSION}] `;
  }

  logger(msg, type = 'log') {
    if (console && console[type]) {
      console[type](this.toString() + msg);
    }
  }
}
