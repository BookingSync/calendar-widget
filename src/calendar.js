/* global VERSION, Node, NODE_ENV, CSS_PREFIX, document, require */
import {
  addClass, removeClass, isArray, isObject, Emitter,
  merge, elementFromString, traverseToParentWithAttr, destroyElement, monthLength, is, isFunction,
  isNumeric, traverseObj, ajax, isInside,
} from 'widget-utils';

import Drop from 'tether-drop';

import * as tpls from './templates';
import CalendarTree from './calendar-tree';
import config from './config';
import locales from './locales';
import { reset } from './styles/reset.scss';

import {
  calendar, chunky, highlighted, invalid,
  selected, actionsEnabled, body, tableHeader, caption, selectedStart, selectedEnd,
  reversed, direct, selectingReversed, selectingDirect, dropBasic, focus,
} from './styles/calendar.scss';

const { documentElement: { lang } } = document;
const formatDate                    = (format, year, month, day) => {
  function pad(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  return format
    .replace('dd', pad(day))
    .replace('mm', pad(month + 1))
    .replace('yyyy', year);
};

const dateToIso = (year, month, day, isString = false) => {
  function pad(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  if (isString) {
    return `${year}-${pad(month + 1)}-${pad(day)}`;
  }
  return new Date(year, month, day);
};

const isLater = (start, end) => dateToIso(...start) < dateToIso(...end);

const validationOfRange = (cell, index, range) => {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }
  return cell.getAttribute('data-disabled') === '';
};

export default class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name    = 'BookingSync Calendar Widget';
    this.VERSION = VERSION;

    if (isObject(opts)) {
      if (!opts.el) {
        console.error('el must be HTML element');
        return;
      }

      const configDataset = merge(config, opts.el.dataset);
      this.opts           = merge(configDataset, opts);

      this.opts = traverseObj(this.opts, a => a, (b) => {
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

      this.opts.lang        = Calendar.widgetLang(this.opts.lang, lang);
      this.locale           = locales[this.opts.lang || 'en'];
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
            tree, yearEnd, monthEnd, months,
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

    this.disableBackBtn();
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
      const startDate        = dateToIso(
        this.yearStart, this.monthStart, 1
      );
      const curr             = dateToIso(
        this.opts.currDate.getFullYear(), this.opts.currDate.getMonth(), 1
      );
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
      let value;
      let cell;

      if (this.isSelecting) {
        ({
          value, parent: cell,
        } = traverseToParentWithAttr(e.target, isEndFirst ? 'data-enabled' : 'data-available-out'));
      } else {
        ({
          value, parent: cell,
        } = traverseToParentWithAttr(e.target, isEndFirst ? 'data-available-out' : 'data-enabled'));
      }

      if (is(value) && cell) {
        const dateValue = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

        // for simplicity just reset selection when user interacts again
        if (!this.isSelecting && this.selectionEnd && this.selectionStart) {
          this.resetSelection();
        }

        if (isEndFirst) {
          this.endDateFirstAction(dateValue, cell);
        } else {
          this.startDateFirstAction(dateValue, cell);
        }

        if (this.opts.isDropDown && this.selectionEnd && this.selectionStart) {
          this.completeSelection(isEndFirst, dateValue, cell);
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
      if (!e.relatedTarget ||
        (e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget) &
        Node.DOCUMENT_POSITION_CONTAINED_BY))) {
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
      range.map(a => removeClass(a, highlighted, invalid));

      this.hasValidRange     = true;
      this.highlightedBounds = [];
    }
  }

  highLightRange(start, end) {
    const { range, isValid } = this.selectRange(start, end);
    let hasValidRange        = this.opts.rentalId ? isValid : true;
    const minStay            = this.opts.rentalId ? this.cTree.getDayProperty(...start, 'minStay') : this.opts.minStay;

    if (isArray(range)) {
      // if selected range less than minimum stay at start
      if (range.length <= minStay) {
        hasValidRange = false;
      }

      range.map((a) => {
        removeClass(a, highlighted, invalid);
        addClass(a, hasValidRange ? highlighted : invalid);
        return a;
      });

      this.hasValidRange     = hasValidRange;
      this.highlightedBounds = [start, end];
    }

    return hasValidRange;
  }

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
      range:   null,
      isValid: false,
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

  headerTplString() {
    // just to make life easier with start of the week calculation
    const header                 = [];
    const weekdaysLabelsExtended = this.locale.weekdaysLabels.concat(this.locale.weekdaysLabels);

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
          let rate    = this.opts.showRates ? this.cTree.getDayProperty(year, month, dayOfMonth, 'rate') : null;
          const minStay = this.opts.showMinStay ? this.cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : null;

          let isDisabled      = this.cTree.isDayDisabled(year, month, dayOfMonth);
          let isOutAvailable  = this.cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
          let isDisabledStart = this.cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');
          const cDate         = this.opts.currDate;

          // if rate is float, then display 2 digits after point.
          rate = isNumeric(rate) && rate % 1 !== 0 ? rate.toFixed(2) : rate;

          // in the past any availability does not make sense
          if (isLater(
              [year, month, dayOfMonth],
              [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()])) {
            isDisabled      = true;
            isDisabledStart = undefined;
            isOutAvailable  = undefined;
          }

          if (!this.opts.rentalId) {
            isDisabled = false;
            isOutAvailable = true;
            isDisabledStart = false;
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
      week.push(rowTemplate().close);
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

  loadMaps(id) {
    this.toggleLoading();
    const onSuccess = (rental) => {
      this.toggleLoading();
      if (isArray(rental.data) && rental.data[0].attributes) {
        this.emit('maps-loaded', rental);
        this.addMaps(rental.data[0].attributes);
        this.mapsLoaded = true;
      } else {
        console.error('expects json-api data format');
      }
    };

    const onError = () => {
      this.toggleLoading();
      this.emit('maps-error');
      console.error('Server error happened');
    };

    if (NODE_ENV !== 'test') {
      ajax(this.opts.rentalUrl(id), onSuccess, onError);
    }
  }

  completeSelection() {
    this.emit('selection-completed', this.selectionStart, this.selectionEnd);
    this.closeDrop(null, true);
  }

  initCalendarDrop() {
    const element = elementFromString('<div></div>');
    this.elTarget = this.opts.el;
    this.el       = element;

    document.body.appendChild(element);

    const MyDrop = Drop.createContext({
      classPrefix: `${CSS_PREFIX}__drop`,
    });

    const calDrop = new MyDrop({
      content:                 element,
      target:                  this.elTarget,
      classes:                 dropBasic,
      openOn:                  null,
      targetAttachment:        'bottom left',
      constrainToWindow:       false,
      constrainToScrollParent: false,
    });

    const onFocus = (input, isReversed) => {
      this.switchInputFocus(input);
      this.changeSelectionOrder(isReversed);
      if (!calDrop.isOpened()) {
        this.emit('drop-open');
        calDrop.open();
        if (!this.mapsLoaded) {
          this.loadMaps(this.opts.rentalId);
        }
      }
    };

    this.opts.elStartAt.addEventListener('focus', () => {
      onFocus('start', false);
    });

    this.opts.elEndAt.addEventListener('focus', () => {
      onFocus('end', true);
    });

    if (this.opts.elReset) {
      this.opts.elReset.addEventListener('click', () => {
        this.resetSelection();
      });
    }

    document.addEventListener('click', this.closeDrop.bind(this));
    this.calDrop = calDrop;
  }

  valueToInput(input, dateValue) {
    const format = this.opts.formatDate;
    const value  = formatDate(format, ...dateValue);

    if (input === 'start' && this.opts.elStartAt) {
      this.opts.elStartAt.value = value;
    } else if (input === 'end' && this.opts.elEndAt) {
      this.opts.elEndAt.value = value;
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
      this.emit('drop-close');
      this.switchInputFocus('any');
      this.calDrop.close();
    }
  }

  static widgetLang(elLang, documentLang) {
    let langFallback = elLang || documentLang;

    langFallback = langFallback || 'en';

    if (Object.keys(locales).indexOf(langFallback) === -1) {
      console.warn('this language is not supported yet, locale set to English');
      langFallback = 'en';
    }

    return langFallback;
  }
}
