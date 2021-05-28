/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/currency-symbol-map/currency-symbol-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/currency-symbol-map/currency-symbol-map.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const currencySymbolMap = __webpack_require__(/*! ./map */ "./node_modules/currency-symbol-map/map.js");

module.exports = function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') {
    return undefined;
  }

  const code = currencyCode.toUpperCase();

  if (!Object.prototype.hasOwnProperty.call(currencySymbolMap, code)) {
    return undefined;
  }

  return currencySymbolMap[code];
};

module.exports.currencySymbolMap = currencySymbolMap;

/***/ }),

/***/ "./node_modules/currency-symbol-map/map.js":
/*!*************************************************!*\
  !*** ./node_modules/currency-symbol-map/map.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: '$b',
  BOV: 'BOV',
  BRL: 'R$',
  BSD: '$',
  BTC: '₿',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BYR: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'FC',
  CHE: 'CHE',
  CHF: 'CHF',
  CHW: 'CHW',
  CLF: 'CLF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  COU: 'COU',
  CRC: '₡',
  CUC: '$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: '$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: '$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: '₸',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: '$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MXV: 'MXV',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '$',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYI: 'UYI',
  UYU: '$U',
  UYW: 'UYW',
  UZS: 'лв',
  VEF: 'Bs',
  VES: 'Bs.S',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  XSU: 'Sucre',
  XUA: 'XUA',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZWD: 'Z$',
  ZWL: '$'
};

/***/ }),

/***/ "./src/calendar-tree.js":
/*!******************************!*\
  !*** ./src/calendar-tree.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarTree)
/* harmony export */ });
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/object/merge.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/is.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/string/isString.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/date/monthLength.js");

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

const parseISOString = (str
/* yyyy-mm-dd */
) => {
  const arrStr = str.split('-').map(parseFloat);
  return {
    year: arrStr[0],
    month: arrStr[1] - 1,
    date: arrStr[2]
  };
};

class CalendarTree {
  /**
   * @param {Function} validateCell
   * @param {Object} tree
   */
  constructor(validateCell, tree) {
    this.validateCell = validateCell;
    this.tree = tree;
  }

  addTree(obj) {
    if (!this.tree) {
      this.tree = obj;
    } else {
      this.tree = (0,widget_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(this.tree || {}, obj, true);
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
    const a = start.slice(); // if year and month the same, just slice the current month

    if (a[0] === end[0] && a[1] === end[1]) {
      range = this.selectDaysInMonth(a[0], a[1], a[2], end[2]);
    } else {
      const monthDays = this.tree[a[0]][a[1]]; // slice the piece of current monthDays from start of range till end of the monthDays

      range = range.concat(this.selectDaysInMonth(a[0], a[1], a[2], monthDays.length)); // shift start month, b/c we already selected days in it

      a[1] += 1; // if end date year > start date
      // select everything in start year till the end of start year
      // e.g. start is 20 October, so select November and December, October was selected above

      if (end[0] > start[0]) {
        range = range.concat(this.selectMonthsInYear(a[0], a[1], 11)); // and set start year to end year
        // month to 0 (January)

        [a[0], a[1]] = [end[0], 0];
      } // now we are at the same year and have the case if end month > start month
      // then select everything between those months


      if (end[1] > a[1]) {
        // e.g. start 20 October end 20 December, select full November
        range = range.concat(this.selectMonthsInYear(a[0], a[1], end[1] - 1));
        a[1] = end;
      } // the missing part is days in end selection month


      range = range.concat(this.selectDaysInMonth(end[0], end[1], 1, end[2]));
    }

    return {
      range,
      isValid: this.isRangeValid(range)
    };
  }

  selectMonthsInYear(year, start, end) {
    let selection = [];
    const monthRange = genArrayRange(start, end);
    monthRange.forEach(month => {
      const y = this.tree[year];
      const m = (0,widget_utils__WEBPACK_IMPORTED_MODULE_1__.is)(y) ? this.tree[year][month] : null;

      if (y && m) {
        selection = selection.concat(this.selectDaysInMonth(year, month, 1, m.length));
      }
    });
    return selection;
  }

  selectDaysInMonth(year, month, startDay, endDay) {
    const y = this.tree[year];
    const m = (0,widget_utils__WEBPACK_IMPORTED_MODULE_1__.is)(y) ? this.tree[year][month] : null;

    if (y && m) {
      return m.slice(startDay - 1, endDay);
    }

    return [];
  }

  selectDay(year, month, day) {
    const y = this.tree[year];
    const m = (0,widget_utils__WEBPACK_IMPORTED_MODULE_1__.is)(y) ? this.tree[year][month] : null;

    if (y && m) {
      return m[day - 1];
    }

    return null;
  }

  isRangeValid(range, fn) {
    const validateCell = this.validateCell || fn;
    let isValid = true;

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
    if (!((0,widget_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(maps.availability) || (0,widget_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(maps.nightly_rates) || (0,widget_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(maps.minimum_stays))) {
      return null;
    }

    const avail = maps.availability.split('').map(parseFloat);
    const rates = maps.nightly_rates.split(',').map(parseFloat);
    const minMap = maps.minimum_stays.split(',').map(parseFloat);
    let {
      year,
      month,
      date: dayShift
    } = parseISOString(mapStartAt);
    let day = 1; // trick to add extra unavailable date for proper calculations of check-out dates

    if (avail[avail.length - 1] === 0) {
      avail.push(1);
    }

    return avail.reduce((curr, state, index, arr) => {
      const length = (0,widget_utils__WEBPACK_IMPORTED_MODULE_3__.monthLength)(year, month);
      const tree = curr;
      const minStay = minMap[index];
      const rate = rates[index];
      const isAvailable = state === 0;
      const prevAvailable = arr[index - 1] === 0;
      const isMorningBlocked = isAvailable && !prevAvailable;

      if (!tree[year]) {
        tree[year] = {};
      }

      if (!tree[year][month]) {
        tree[year][month] = {};
      }

      if (dayShift) {
        day = dayShift;
        dayShift = null;
      } // if minStay > available days in future
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
        isOutAvailable: !isMorningBlocked && isAvailable || !isAvailable && prevAvailable === true
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
      } catch (e) {// continue regardless of error
      }
    }

    return prop;
  }

  isDayDisabled(year, month, day) {
    return !this.getDayProperty(year, month, day, 'isAvailable');
  }

}

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/emitter.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/object/isObject.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/object/merge.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/object/traverseObj.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/math/isNumeric.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/addClass.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/elementFromString.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/removeClass.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/hasClass.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/traverseToParentWithAttr.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/is.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/function/isFunction.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/array/isArray.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/date/monthLength.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/currency/currencyFormatter.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/destroyElement.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/ajax.js");
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/dom/isInside.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _calendar_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-tree */ "./src/calendar-tree.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales */ "./src/locales.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strtime */ "./node_modules/strtime/dist/strtime.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(strtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/calendar.scss */ "./src/styles/calendar.scss");
/* harmony import */ var widget_utils_src_styles_reset_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! widget-utils/src/styles/reset.scss */ "./node_modules/widget-utils/src/styles/reset.scss");
/* global Node, document, console, require */










class Calendar extends widget_utils__WEBPACK_IMPORTED_MODULE_1__.default {
  constructor(opts, maps) {
    super();
    this.name = _config__WEBPACK_IMPORTED_MODULE_2__.default.name;
    this.VERSION = __webpack_require__(/*! ../package.json */ "./package.json").version;
    this.CSS_PREFIX = _config__WEBPACK_IMPORTED_MODULE_2__.default.cssPrefix;

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(opts)) {
      if (!opts.el) {
        this.logger('el must be HTML element', 'error');
        return;
      }

      const configDataset = (0,widget_utils__WEBPACK_IMPORTED_MODULE_4__.merge)(_config__WEBPACK_IMPORTED_MODULE_2__.default, opts.el.dataset);
      this.opts = (0,widget_utils__WEBPACK_IMPORTED_MODULE_4__.merge)(configDataset, opts);
      this.opts = (0,widget_utils__WEBPACK_IMPORTED_MODULE_5__.traverseObj)(this.opts, a => a, b => {
        if (b === 'true' || b === 'false') {
          return b === 'true';
        }

        if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_6__.isNumeric)(b)) {
          return parseInt(b, 10);
        }

        return b;
      });

      if (this.opts.isDropDown) {
        this.initCalendarDrop();
      } else {
        this.el = opts.el;
      }

      this.opts.lang = this.opts.lang && this.opts.lang in _locales__WEBPACK_IMPORTED_MODULE_7__.default ? this.opts.lang : 'en-US';
      this.locale = _locales__WEBPACK_IMPORTED_MODULE_7__.default[this.opts.lang];
      this.format = this.opts.formatDate || this.locale.formatDate || '%D';
      this.opts.startOfWeek = this.opts.startOfWeek || this.locale.startOfWeek;
    }

    this.dom = {};
    this.cTree = new _calendar_tree__WEBPACK_IMPORTED_MODULE_8__.default(_utils__WEBPACK_IMPORTED_MODULE_9__.validationOfRange, {});

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(maps)) {
      this.cTree.addMaps(maps, maps.start_date || this.opts.currDate);
    } // selection and highlights


    this.isSelecting = false;
    this.highlightedBounds = [];
    this.hasValidRange = true; // user selects end date first

    this.isReverseSelectable = this.opts.isReverseSelectable;
    this.init();
  }

  init() {
    (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.calendar, widget_utils_src_styles_reset_scss__WEBPACK_IMPORTED_MODULE_12__.default.reset);
    this.dom.monthsWrapper = this.el.appendChild((0,widget_utils__WEBPACK_IMPORTED_MODULE_13__.elementFromString)(_templates__WEBPACK_IMPORTED_MODULE_14__.main));
    this.dom.forward = this.el.appendChild((0,widget_utils__WEBPACK_IMPORTED_MODULE_13__.elementFromString)(_templates__WEBPACK_IMPORTED_MODULE_14__.forward));
    this.dom.back = this.el.appendChild((0,widget_utils__WEBPACK_IMPORTED_MODULE_13__.elementFromString)(_templates__WEBPACK_IMPORTED_MODULE_14__.back));
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);
    this.addBtnsEvents();

    if (this.opts.selectable && this.opts.elStartAt && this.opts.elEndAt) {
      this.inputsToValues();
      this.opts.elStartAt.addEventListener('input', () => {
        this.inputsToValues();
      });
      this.opts.elEndAt.addEventListener('input', () => {
        this.inputsToValues();
      });
    }

    if (this.opts.rentalId) {
      this.loadMaps(this.opts.rentalId);
    }

    this.logger('inited');
    this.emit('init');
  }

  changeSelectionOrder(isReverse) {
    if (isReverse !== this.isReverseSelectable && !this.isSelecting) {
      this.isReverseSelectable = isReverse;
      this.destroyMonths();
      this.renderMonths(this.yearStart, this.monthStart);
    }
  }

  renderMonths(yearStart, monthStart) {
    // construct dom tree
    const {
      tree,
      yearEnd,
      monthEnd,
      months
    } = this.createTree(yearStart, monthStart, this.opts.displayMonths);
    this.cTree.addTree(tree);
    this.monthStart = monthStart;
    this.yearStart = yearStart;
    this.monthEnd = monthEnd;
    this.yearEnd = yearEnd;
    this.recoverSelections();

    if (this.opts.selectable) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, this.isReverseSelectable ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.reversed : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.direct);
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.el, this.isReverseSelectable ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.direct : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.reversed);
    }

    this.dom.months = months;
    this.dom.months.forEach(m => {
      this.dom.monthsWrapper.appendChild(m);

      if (this.opts.selectable) {
        this.addMonthEvents(m);
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.actionsEnabled);
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
      const startDate = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(this.yearStart, this.monthStart, 1);
      const curr = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(this.opts.currDate.getFullYear(), this.opts.currDate.getMonth(), 1);
      this.dom.back.disabled = startDate <= curr;
    }
  }

  toggleLoading() {
    if (!(0,widget_utils__WEBPACK_IMPORTED_MODULE_16__.hasClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.loading)) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.loading);
      this.emit('loading-show');
    } else {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.loading);
      this.emit('loading-hide');
    }
  }

  addMaps(maps) {
    this.cTree.replaceMaps(maps, maps.start_date);
    this.destroyMonths();
    this.renderMonths(this.opts.yearStart || this.yearStart, this.opts.monthStart || this.monthStart);
  }

  addBtnsEvents() {
    this.dom.forward.addEventListener('click', e => {
      this.destroyMonths();
      this.renderMonths(this.yearEnd, this.monthEnd);
      e.preventDefault();
    });
    this.dom.back.addEventListener('click', e => {
      this.destroyMonths();
      let monthToRender = this.monthStart - this.opts.displayMonths;
      let yearToRender = this.yearStart;

      if (monthToRender < 0) {
        monthToRender += 12;
        yearToRender -= 1;
      }

      this.renderMonths(yearToRender, monthToRender);
      e.preventDefault();
    });
  }

  addMonthEvents(el) {
    el.addEventListener('click', e => {
      const isEndFirst = this.isReverseSelectable;
      const weekDayEl = (0,widget_utils__WEBPACK_IMPORTED_MODULE_17__.traverseToParentWithAttr)(e.target, 'data-value').parent;
      let value, cell;

      const resetSelectionOnEscape = event => {
        const key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
          if (this.isSelecting) {
            document.removeEventListener('keyup', resetSelectionOnEscape, true);
            this.resetSelection();
          }
        }
      }; // cancel selection if day is invalid


      if (weekDayEl && (0,widget_utils__WEBPACK_IMPORTED_MODULE_16__.hasClass)(weekDayEl, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.invalid)) {
        document.removeEventListener('keyup', resetSelectionOnEscape, true);
        this.resetSelection();
      }

      document.addEventListener('keyup', resetSelectionOnEscape, true);

      if (this.isSelecting) {
        ({
          value,
          parent: cell
        } = (0,widget_utils__WEBPACK_IMPORTED_MODULE_17__.traverseToParentWithAttr)(e.target, isEndFirst ? 'data-enabled' : 'data-available-out'));
      } else {
        ({
          value,
          parent: cell
        } = (0,widget_utils__WEBPACK_IMPORTED_MODULE_17__.traverseToParentWithAttr)(e.target, isEndFirst ? 'data-available-out' : 'data-enabled'));
      }

      if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_18__.is)(value) && cell) {
        const dateValue = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)]; // for simplicity just reset selection when user interacts again

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
    el.addEventListener('mouseover', e => {
      const {
        value,
        parent: cell
      } = (0,widget_utils__WEBPACK_IMPORTED_MODULE_17__.traverseToParentWithAttr)(e.target, 'data-value');

      if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_18__.is)(value) && cell) {
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
    el.body.addEventListener('mouseout', e => {
      /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
      // simulate 'mouseleave'
      if (!e.relatedTarget || e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
        if (this.isSelecting) {
          this.removeHighlight();
        }
      }
    });
  }

  startDateFirstAction(dateValue, cell) {
    if (this.isSelecting && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(this.selectionStart, dateValue)) {
      if (!this.hasValidRange) {
        return;
      }

      this.selectEndAction(dateValue, cell);

      const fn = () => {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectingDirect);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectingDirect);
      this.isSelecting = true;
      this.selectStartAction(dateValue, cell);
    }
  }

  endDateFirstAction(dateValue, cell) {
    if (this.isSelecting && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(dateValue, this.selectionEnd)) {
      if (!this.hasValidRange) {
        return;
      }

      this.selectStartAction(dateValue, cell);

      const fn = () => {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectingReversed);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectingReversed);
      this.isSelecting = true;
      this.selectEndAction(dateValue, cell);
    }
  }

  selectStartAction(dateValue, cell) {
    this.selectStart(dateValue, cell);
    this.switchInputFocus('end');
    this.emit('selection-start', (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue));

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_19__.isFunction)(this.opts.onSelectStart)) {
      this.opts.onSelectStart((0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue));
    }
  }

  selectEndAction(dateValue, cell) {
    this.selectEnd(dateValue, cell);
    this.switchInputFocus('start');
    this.emit('selection-end', (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue));

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_19__.isFunction)(this.opts.onSelectEnd)) {
      this.opts.onSelectEnd((0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue));
    }
  }

  removeHighlight() {
    if (this.highlightedBounds.length > 0) {
      const {
        range
      } = this.selectRange(...this.highlightedBounds);
      range.map(a => (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(a, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.highlighted, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.invalid));
      this.hasValidRange = true;
      this.highlightedBounds = [];
    }
  }

  highLightRange(start, end) {
    const {
      range,
      isValid
    } = this.selectRange(start, end);
    let hasValidRange = this.opts.rentalId ? isValid : true;
    const minStay = this.opts.rentalId ? this.opts.allowShorterMinStaySelection ? 1 : this.cTree.getDayProperty(...start, 'minStay') : this.opts.minStay;
    let maxStay = this.opts.rentalId ? this.opts.allowLongerMaxStaySelection ? 1 : this.cTree.getDayProperty(...start, 'maxStay') : this.opts.maxStay;
    maxStay = maxStay === 0 || !maxStay ? Infinity : maxStay;

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_20__.isArray)(range)) {
      // check that range is valid and longer than minStay and shorter than maxStay
      this.hasValidRange = hasValidRange = hasValidRange && range.length > minStay && range.length < maxStay;
      range.map((a, index) => {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(a, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selected);

        if (index !== 0 && index + 1 !== range.length) {
          (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(a, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selected);
        }

        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(a, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.highlighted, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.invalid);
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(a, hasValidRange ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.highlighted : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.invalid);
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

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_19__.isFunction)(this.opts.onClearSelection)) {
      this.opts.onClearSelection(this.selectionStart, this.selectionEnd);
    }

    this.selectionStart = null;
    this.selectionEnd = null;

    if (this.cellA) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.cellA, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedStart);
      this.cellA = null;
    }

    if (this.cellB) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.cellB, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedEnd);
      this.cellB = null;
    }

    if (this.opts.isDropDown && this.opts.elStartAt && this.opts.elEndAt) {
      this.opts.elStartAt.value = null;
      this.opts.elEndAt.value = null;

      if (this.opts.isSingleInput) {
        this.opts.elSingleInput.value = null;
      }
    }

    return this;
  }

  selectRange(start, end) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(start, end)) {
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
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.cellA, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedStart);
    }

    if (cell) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(cell, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedStart);
      this.cellA = cell;
    }

    this.valueToInput('start', dateValue);
  }

  selectEnd(dateValue, cell) {
    this.selectionEnd = dateValue;

    if (this.cellB) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.cellB, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedEnd);
    }

    if (cell) {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(cell, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.selectedEnd);
      this.cellB = cell;
    }

    this.valueToInput('end', dateValue);
  }

  createTree(yearStart, monthStart, times) {
    const months = [];
    const tree = {};
    let monthEnd = monthStart;
    let yearEnd = yearStart;

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
    const monthDom = (0,widget_utils__WEBPACK_IMPORTED_MODULE_13__.elementFromString)(_templates__WEBPACK_IMPORTED_MODULE_14__.month);
    monthDom.querySelector(".".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.tableHeader, " tr")).innerHTML = this.headerTplString();
    monthDom.querySelector(".".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.caption)).innerHTML = "".concat(this.locale.longMonthNames[month], " ").concat(year);
    monthDom.body = monthDom.querySelector(".".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.body));
    monthDom.body.innerHTML = this.daysTplString(year, month);
    monthDom.month = month;
    monthDom.year = year;
    monthDom.dayElements = [].slice.call(monthDom.querySelectorAll('[data-value]'));
    return monthDom;
  }

  headerTplString() {
    // just to make life easier with start of the week calculation
    const header = [];
    const weekdaysLabelsExtended = this.locale.shortWeekdayNames.concat(this.locale.shortWeekdayNames);

    for (let i = 0; i < this.opts.daysPerWeek; i += 1) {
      header.push(_templates__WEBPACK_IMPORTED_MODULE_14__.weekDayLabel(weekdaysLabelsExtended[i + this.opts.startOfWeek]));
    }

    return header.join('');
  }

  daysTplString(year, month) {
    const startOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = (0,widget_utils__WEBPACK_IMPORTED_MODULE_21__.monthLength)(year, month);
    const rowTemplate = _templates__WEBPACK_IMPORTED_MODULE_14__.weekRow;
    const monthTpl = [];
    const weekShift = this.opts.daysPerWeek - this.opts.startOfWeek;
    let rows = 5;
    let weekShiftCorrected = startOfMonth + weekShift;
    let dayCounter = 0;
    let dayOfMonth = 1; // don't render full empty week

    if (weekShiftCorrected >= this.opts.daysPerWeek) {
      weekShiftCorrected -= this.opts.daysPerWeek;
    } // try to figure out if 5 rows is enough for the month


    if (rows * this.opts.daysPerWeek < weekShiftCorrected + daysInMonth) {
      rows = 6;
    } // for each week (5 or 6)


    for (let i = 0; i < rows; i += 1) {
      const week = []; // open tag <tr>

      week.push(rowTemplate(i).open); // push days in week

      for (let j = 0; j < this.opts.daysPerWeek; j += 1) {
        // pushing actual days 1...daysInMonth
        if (dayCounter >= weekShiftCorrected && dayOfMonth <= daysInMonth) {
          week.push(this.dayTplString(year, month, dayOfMonth));
          dayOfMonth += 1; // pushing placeholders instead of days
        } else {
          week.push(_templates__WEBPACK_IMPORTED_MODULE_14__.weekDayPlaceholder);
        }

        dayCounter += 1;
      } // close tag </tr> of week


      week.push(rowTemplate().close); // push completed week to month template

      monthTpl.push(week.join(''));
    }

    return monthTpl.join('');
  }

  dayTplString(year, month, dayOfMonth) {
    const {
      cTree
    } = this;
    const rate = this.opts.showRates ? cTree.getDayProperty(year, month, dayOfMonth, 'rate') : 0;
    const minStay = this.opts.showMinStay ? cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : 0;
    const maxStay = this.opts.showMaxStay ? cTree.getDayProperty(year, month, dayOfMonth, 'maxStay') : 0;
    let isDisabled = cTree.isDayDisabled(year, month, dayOfMonth);
    let isEnabledStart = cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
    let isDisabledEnd = cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');
    const cDate = this.opts.currDate;
    const cDateArray = [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()];
    const dateArray = [year, month, dayOfMonth];
    const isCurrentDay = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCurrent)(dateArray, cDateArray); // disable past dates

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(dateArray, cDateArray) && !isCurrentDay) {
      isDisabled = true;
      isDisabledEnd = undefined;
      isEnabledStart = undefined;
    } // disable current day morning


    if (isCurrentDay && isEnabledStart !== false) {
      isDisabled = false;
      isDisabledEnd = true;
    } // if there is not rentalId and no maps, just render plain calendar


    if (!this.opts.rentalId && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(cDateArray, dateArray) || this.opts.enableAllDays) {
      isDisabled = false;
      isEnabledStart = true;
      isDisabledEnd = false;
    }

    return _templates__WEBPACK_IMPORTED_MODULE_14__.weekDay(dayOfMonth, isDisabled, isDisabledEnd, isEnabledStart, isCurrentDay, rate, this.opts.allowShorterMinStaySelection ? 1 : minStay, this.opts.allowLongerMaxStaySelection ? 0 : maxStay, (0,widget_utils__WEBPACK_IMPORTED_MODULE_22__.currencyFormatter)(Math.round(rate), this.opts.lang, this.opts.currency || this.locale.currency), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.tFormatter)(minStay, this.locale.minStay), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.tFormatter)(maxStay, this.locale.maxStay));
  }

  destroyMonths() {
    if (this.dom && (0,widget_utils__WEBPACK_IMPORTED_MODULE_20__.isArray)(this.dom.months)) {
      this.dom.months.map(m => (0,widget_utils__WEBPACK_IMPORTED_MODULE_23__.destroyElement)(m));
    }
  }

  destroy() {
    return (0,widget_utils__WEBPACK_IMPORTED_MODULE_23__.destroyElement)(this.el);
  }

  loadMaps(id) {
    this.toggleLoading();

    const onSuccess = maps => {
      this.toggleLoading();

      if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_20__.isArray)(maps.data) && maps.data[0].attributes) {
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

    (0,widget_utils__WEBPACK_IMPORTED_MODULE_24__.ajax)(this.opts.rentalUrl(id), onSuccess, onError);
  }

  completeSelection() {
    if (this.opts.isSingleInput) {
      const singleInputDateFormat = this.singleInputDateFormat || this.locale.formatDate;
      const dateStart = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...this.selectionStart), singleInputDateFormat, this.locale);
      const dateEnd = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...this.selectionEnd), singleInputDateFormat, this.locale);
      this.opts.elSingleInput.value = "".concat(dateStart, " ").concat(this.opts.singleInputSeparator, " ").concat(dateEnd);
    }

    this.emit('selection-completed', this.selectionStart, this.selectionEnd);

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_19__.isFunction)(this.opts.onSelectionCompleted)) {
      this.opts.onSelectionCompleted((0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...this.selectionStart, true), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...this.selectionEnd, true));
    }
  }

  initCalendarDrop() {
    const element = (0,widget_utils__WEBPACK_IMPORTED_MODULE_13__.elementFromString)('<div></div>');
    this.elTarget = this.opts.el;
    this.el = element;
    document.body.appendChild(element);
    this.opts.elStartAt = this.opts.elStartAt || document.querySelector(".".concat(this.CSS_PREFIX, "__start-at"));
    this.opts.elEndAt = this.opts.elEndAt || document.querySelector(".".concat(this.CSS_PREFIX, "__end-at"));
    this.opts.elSingleInput = this.opts.elSingleInput || document.querySelector(".".concat(this.CSS_PREFIX, "__single-input"));

    if (this.opts.hiddenElFormat) {
      [this.opts.elStartAt, this.opts.elEndAt].forEach((input, i) => {
        const hiddenInput = input.cloneNode(true);
        input.parentElement.appendChild(hiddenInput);
        input.removeAttribute('name');
        hiddenInput.className = '';
        hiddenInput.hidden = true;
        i ? this.hiddenElEndAt = hiddenInput : this.hiddenElStartAt = hiddenInput;
      });
    }

    if (this.opts.isSingleInput) {
      this.opts.elSingleInput.readOnly = true;
      [this.opts.elStartAt, this.opts.elEndAt].forEach(input => {
        input.hidden = true;
      });
    }

    (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.dropBasic);
    const calDrop = new popper_js__WEBPACK_IMPORTED_MODULE_25__.default(this.elTarget, this.el, {
      placement: this.opts.dropPlacement,
      hide: true
    });

    const openDrop = (input, isReversed) => {
      this.switchInputFocus(input);
      this.changeSelectionOrder(isReversed);

      if (!(0,widget_utils__WEBPACK_IMPORTED_MODULE_16__.hasClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.visible)) {
        calDrop.update();
        this.emit('drop-open');
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.visible);

        if (!this.mapsLoaded && this.opts.rentalId) {
          this.loadMaps(this.opts.rentalId);
        }
      }
    };

    if (this.opts.isSingleInput) {
      this.focusTouchEvents(this.opts.elSingleInput, () => {
        openDrop('start', false);
      });
    } else {
      this.focusTouchEvents(this.opts.elStartAt, () => {
        openDrop('start', false);
      });
      this.focusTouchEvents(this.opts.elEndAt, () => {
        openDrop('end', true);
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
    const {
      elStartAt
    } = this.opts;
    const {
      elEndAt
    } = this.opts;
    const date = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToIso)(...dateValue);
    const value = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strftime)(date, this.format, this.locale);
    const evt = document.createEvent('Event');
    evt.initEvent('change', false, true);

    if (this.opts.hiddenElFormat) {
      const hiddenValue = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strftime)(date, this.opts.hiddenElFormat, this.locale);

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

  inputsToValues() {
    const selectionStart = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToArray)(this.opts.elStartAt.value, this.format, this.locale);
    const selectionEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.dateToArray)(this.opts.elEndAt.value, this.format, this.locale);
    const cDate = this.opts.currDate;
    const cDateArray = [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()];
    this.resetSelection();

    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_20__.isArray)(selectionStart) && (0,widget_utils__WEBPACK_IMPORTED_MODULE_20__.isArray)(selectionEnd)) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(cDateArray, selectionStart) && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isLater)(selectionStart, selectionEnd)) {
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
        this.recoverSelections();
        this.completeSelection();
      } else {
        this.logger("invalid range: \"[".concat(selectionStart, "]\" \"[").concat(selectionEnd, "]\""), 'warn');
        return false;
      }
    } else if (selectionStart && selectionEnd) {
      this.logger("invalid dates: \"".concat(selectionStart, "\" \"").concat(selectionEnd, "\""), 'warn');
      return false;
    }
  }

  switchInputFocus(type) {
    if (this.opts.elStartAt && this.opts.elEndAt) {
      if (type === 'start') {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
      }

      if (type === 'end') {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_10__.addClass)(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
      }

      if (type === 'any') {
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
        (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.focus);
      }
    }
  }

  closeDrop(e, force) {
    if (!force && ((0,widget_utils__WEBPACK_IMPORTED_MODULE_26__.isInside)(e.target, this.el) || (0,widget_utils__WEBPACK_IMPORTED_MODULE_26__.isInside)(e.target, this.elTarget))) {
      e.stopPropagation();
    } else {
      (0,widget_utils__WEBPACK_IMPORTED_MODULE_15__.removeClass)(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_11__.default.visible);
      this.emit('drop-close');
      this.switchInputFocus('any');
    }
  }

  focusTouchEvents(element, _callback) {
    if ((0,widget_utils__WEBPACK_IMPORTED_MODULE_19__.isFunction)(_callback)) {
      element.addEventListener('touchstart', event => {
        event.preventDefault();

        _callback();
      });
      element.addEventListener('focus', event => {
        event.preventDefault();

        _callback();
      });
    }
  }

  toString() {
    return "[".concat(this.name, " ").concat(this.VERSION, "] ");
  }

  logger(msg) {
    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';

    if (console && console[type]) {
      console[type](this.toString() + msg);
    }
  }

}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/string/dashToCapital.js");
/* global process, require */

const currDate = new Date();

const {
  name
} = __webpack_require__(/*! ../package.json */ "./package.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  cssPrefix: (0,widget_utils__WEBPACK_IMPORTED_MODULE_0__.dashToCapital)(name),
  apiHost:  true ? 'http://localhost:3000' : 0,
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?{apiRentalId}{apiCurrency}',
  apiRentalId: 'rental_id=',
  apiCurrency: '&exchange_to_currency=',

  rentalUrl(ids) {
    let route = this.apiMapsRoute.replace('{apiRentalId}', "".concat(this.apiRentalId).concat(ids));
    route = route.replace('{apiCurrency}', this.currency ? "".concat(this.apiCurrency).concat(this.currency) : '');
    return "".concat(this.apiHost).concat(this.apiNamespace).concat(route);
  },

  startOfWeek: 0,
  // 0 Sun 1 Mon....6 Sat
  minStay: 1,
  // can select one night
  maxStay: 0,
  // can select infinite nights
  monthStart: currDate.getUTCMonth(),
  // start with current month by default M '0...12'
  yearStart: currDate.getUTCFullYear(),
  // start with current year YYYY
  daysPerWeek: 7,
  // FIXME support calendar rendering
  displayMonths: 2,
  selectable: false,
  showRates: false,
  showMinStay: false,
  showMaxStay: false,
  isReverseSelectable: false,
  // select end date first
  isBackDisabled: true,
  isDropDown: false,
  dropPlacement: 'bottom-start',
  el: null,
  elStartAt: null,
  elEndAt: null,
  elSingleInput: null,
  isSingleInput: null,
  singleInputDateFormat: null,
  singleInputSeparator: '→',
  elReset: null,
  formatDate: null,
  hiddenElFormat: null,
  rentalId: null,
  currency: null,
  disableAvailabityMap: false,
  allowShorterMinStaySelection: false,
  allowLongerMaxStaySelection: false,
  enableAllDays: false,
  currDate
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global document, require, window, module */
let Calendar = __webpack_require__(/*! ./calendar */ "./src/calendar.js");

Calendar = Calendar.default; // Export WidgetUtils

window.BookingSyncWidgetUtils = __webpack_require__(/*! widget-utils */ "./node_modules/widget-utils/src/index.js"); // Export Popper

window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

Calendar.init = opts => {
  const initialized = [];
  const options = opts || {};
  const elements = document.querySelectorAll('[data-bookingsync-calendar-widget]');
  elements.forEach(element => {
    options.el = element;
    const cal = new Calendar(options);
    initialized.push(cal);
  });
  Calendar.instances = initialized;
  return initialized;
};

Calendar.VERSION = __webpack_require__(/*! ../package.json */ "./package.json").version;

if (Calendar.autoInit !== false) {
  if (document.readyState !== 'loading') {
    Calendar.init();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      Calendar.init();
    });
  }
}

window.BookingSyncCalendarWidget = Calendar;
module.exports = Calendar;

/***/ }),

/***/ "./src/locales.js":
/*!************************!*\
  !*** ./src/locales.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let locales = {
  'en-GB': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'GBP',
    minStay: '%number+ nights',
    maxStay: '%number- nights',
    startOfWeek: 0
  },
  'en-US': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'USD',
    minStay: '%number+ nights',
    maxStay: '%number- nights',
    startOfWeek: 1
  },
  'de-DE': {
    shortWeekdayNames: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    longMonthNames: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    shortMonthNames: 'Jan_Feb_Mär_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nächte',
    maxStay: '%number- nächte',
    startOfWeek: 1
  },
  'es-ES': {
    shortWeekdayNames: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
    longWeekdayNames: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    longMonthNames: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    shortMonthNames: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ noches',
    maxStay: '%number- noches',
    startOfWeek: 1
  },
  'fr-FR': {
    shortWeekdayNames: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longWeekdayNames: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    longMonthNames: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    shortMonthNames: 'jan_fév_mar_avr_mai_juin_juil_aoû_sep_oct_nov_déc'.split('_'),
    formatDate: '%d %b, %Y',
    currency: 'EUR',
    minStay: '%number+ nuits',
    maxStay: '%number- nuits',
    startOfWeek: 1
  },
  'it-IT': {
    shortWeekdayNames: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
    longWeekdayNames: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    longMonthNames: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    shortMonthNames: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ notti.',
    maxStay: '%number- notti',
    startOfWeek: 1
  },
  'sv-SE': {
    shortWeekdayNames: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longWeekdayNames: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    longMonthNames: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    shortMonthNames: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nätter',
    maxStay: '%number- nätter',
    startOfWeek: 1
  },
  'ru-RU': {
    shortWeekdayNames: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    longWeekdayNames: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
    longMonthNames: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    shortMonthNames: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
    formatDate: '%d.%b.%Y',
    currency: 'Руб.',
    minStay: '%number+ ноч.',
    maxStay: '%number- ноч.',
    startOfWeek: 1
  },
  'pl-PL': {
    shortWeekdayNames: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longWeekdayNames: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    longMonthNames: 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
    shortMonthNames: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    formatDate: '%d.%b.%Y',
    currency: 'PLN',
    minStay: '%number+ noce',
    maxStay: '%number- noce',
    startOfWeek: 1
  },
  'nl-NL': {
    shortWeekdayNames: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    longWeekdayNames: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
    longMonthNames: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Maa_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nights',
    maxStay: '%number- nights',
    startOfWeek: 1
  }
}; // Add aliases

locales = Object.assign({
  en: locales['en-US'],
  de: locales['de-DE'],
  es: locales['es-ES'],
  fr: locales['fr-FR'],
  it: locales['it-IT'],
  sv: locales['sv-SV'],
  ru: locales['ru-RU'],
  pl: locales['pl-PL'],
  nl: locales['nl-NL']
}, locales);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "month": () => (/* binding */ month),
/* harmony export */   "weekDayLabel": () => (/* binding */ weekDayLabel),
/* harmony export */   "weekDay": () => (/* binding */ weekDay),
/* harmony export */   "forward": () => (/* binding */ forward),
/* harmony export */   "back": () => (/* binding */ back),
/* harmony export */   "weekDayPlaceholder": () => (/* binding */ weekDayPlaceholder),
/* harmony export */   "weekRow": () => (/* binding */ weekRow)
/* harmony export */ });
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/calendar.scss */ "./src/styles/calendar.scss");

const main = "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.monthsWrapper, "\"></div>");
const month = "\n  <div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.mCell, " js-month\">\n    <table class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.month, "\" role=\"month\">\n      <caption><div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.caption, "\"></div></caption>\n      <thead class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.tableHeader, "\"><tr></tr></thead>\n      <tbody class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.body, "\"></tbody>\n    </table>\n  </div>\n");
const weekDayLabel = label => "<th class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.th, "\">").concat(label, "</th>");
/* eslint prefer-template: 0 */

const weekDay = (label, disabled, disabledEnd, enabledStart, isCurrentDay, rate, minStay, maxStay, rateT, minStayT, maxStayT) => "\n  <td ".concat(disabled ? 'data-disabled' : 'data-enabled', "\n       ").concat(enabledStart ? 'data-available-out' : '', "\n       data-value=\"").concat(label, "\"\n       class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.cell, " ").concat(isCurrentDay ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.today : '', " ").concat(disabled && !enabledStart ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.disabled : '', " ").concat(disabled && enabledStart ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.disabledStart : '', " ").concat(disabledEnd ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.disabledEnd : '', "\">\n       <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.cnt, "\" role=\"day-value\">\n        ").concat(label, "\n        <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.info, "\">\n          ").concat(rate ? '<span data-rate>' + rateT + '</span>' : '', "\n          ").concat(minStay ? '<span data-min-stay>' + minStayT + '</span>' : '', "\n          ").concat(maxStay ? '<span data-max-stay>' + maxStayT + '</span>' : '', "\n        </div>\n      </div>\n  </td>\n");
const forward = "\n  <button class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.forward, "\" role=\"button\">\n    <svg viewBox=\"0 0 1000 1000\" width=\"20\" height=\"20\">\n      <path d=\"M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z\"></path>\n    </svg>\n  </button>\n");
const back = "\n  <button class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__.default.back, "\" role=\"button\">\n    <svg viewBox=\"0 0 1000 1000\" width=\"20\" height=\"20\">\n      <path d=\"M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z\"></path>\n    </svg>\n  </button>\n");
const weekDayPlaceholder = '<td></td>';
/* eslint arrow-body-style: 0 */

const weekRow = num => {
  return {
    open: "<tr class=\"js-body-row-".concat(num, "\">"),
    close: '</tr>'
  };
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDST": () => (/* binding */ isDST),
/* harmony export */   "dateToIso": () => (/* binding */ dateToIso),
/* harmony export */   "dateToArray": () => (/* binding */ dateToArray),
/* harmony export */   "isLater": () => (/* binding */ isLater),
/* harmony export */   "isCurrent": () => (/* binding */ isCurrent),
/* harmony export */   "validationOfRange": () => (/* binding */ validationOfRange),
/* harmony export */   "tFormatter": () => (/* binding */ tFormatter)
/* harmony export */ });
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strtime */ "./node_modules/strtime/dist/strtime.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(strtime__WEBPACK_IMPORTED_MODULE_0__);

const isDST = date => {
  let jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) != date.getTimezoneOffset();
};
const dateToIso = function dateToIso(year, month, day) {
  let isString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  function pad(number) {
    if (number < 10) {
      return "0".concat(number);
    }

    return number;
  }

  if (isString) {
    return "".concat(year, "-").concat(pad(month + 1), "-").concat(pad(day));
  }

  let date = new Date(year, month, day, 12, 0, 0);
  return date;
};
const dateToArray = (val, format, locale) => {
  try {
    const date = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strptime)(val, format, locale);
    const a = (0,strtime__WEBPACK_IMPORTED_MODULE_0__.strftime)(date, '%Y-%m-%d').split('-');
    return [parseInt(a[0]), // year
    parseInt(a[1] - 1), // month index
    parseInt(a[2]) // day
    ];
  } catch (e) {
    return false;
  }
};
const isLater = (start, end) => dateToIso(...start, true) < dateToIso(...end, true);
const isCurrent = (start, end) => dateToIso(...start, true) == dateToIso(...end, true);
const validationOfRange = (cell, index, range) => {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }

  return cell.getAttribute('data-disabled') === '';
};
const tFormatter = (value, str) => str.replace('%number', value);

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popper);

/***/ }),

/***/ "./node_modules/strtime/dist/strtime.js":
/*!**********************************************!*\
  !*** ./node_modules/strtime/dist/strtime.js ***!
  \**********************************************/
/***/ ((module) => {

// github.com/pineapplemachine/strtime-js
// MIT license, Copyright (c) 2018 Sophie Kirschner (sophiek@pineapplemachine.com)
// References:
// https://www.ibm.com/support/knowledgecenter/en/ssw_ibm_i_71/rtref/strpti.htm
// https://www.gnu.org/software/libc/manual/html_node/Formatting-Calendar-Time.html
// https://www.gnu.org/software/libc/manual/html_node/Low_002dLevel-Time-String-Parsing.html
// http://man7.org/linux/man-pages/man3/strptime.3.html
// https://apidock.com/ruby/DateTime/strftime
// http://strftime.org/
function getFormatOptions(timezone, options) {
  let useOptions;
  let tz = undefined;

  if (timezone === null || timezone === undefined || Number.isFinite(timezone) || typeof timezone === "string") {
    tz = timezone;
    useOptions = options || {};
  } else if (timezone && !options) {
    useOptions = timezone;
    tz = useOptions.tz;
  } else {
    useOptions = {};
  }

  return {
    tz: tz,
    options: useOptions
  };
}

function getTimezoneOffsetMinutes(date, tz) {
  if (tz === null || tz === undefined) {
    return 0;
  } else if (tz >= -16 && tz <= +16) {
    return Math.floor(60 * tz);
  } else if (Number.isFinite(tz)) {
    return Math.floor(tz);
  } else if (tz === "local") {
    return -(date || new Date()).getTimezoneOffset();
  } else {
    const tzUpper = String(tz).toUpperCase();

    if (tzUpper in defaultTimezoneNames) {
      const offset = Math.floor(60 * defaultTimezoneNames[tzUpper]);

      if (Number.isFinite(offset)) {
        return offset;
      }
    }
  }

  throw new Error(`Unrecognized timezone option "${tz}".`);
}

function strftime(date, format, timezone, options) {
  if (Number.isFinite(date)) {
    // Accept unix timestamps (milliseconds since epoch)
    date = new Date(date);
  } else if (!date) {
    throw new Error("No date input was provided.");
  } else if (typeof date.toDate === "function") {
    // Support date objects from https://www.npmjs.com/package/moment
    // Support date objects from https://www.npmjs.com/package/dayjs
    date = date.toDate();
  } else if (typeof date.toJSDate === "function") {
    // Support date objects from https://www.npmjs.com/package/luxon
    date = date.toJSDate();
  }

  if (!(date instanceof Date)) {
    throw new Error("Failed to get Date instance from date input.");
  }

  const tokens = TimestampParser.parseFormatString(format);
  const useOptions = getFormatOptions(timezone, options);
  const timezoneOffsetMinutes = getTimezoneOffsetMinutes(date, useOptions.tz);
  const tzDate = new Date(date);

  if (timezoneOffsetMinutes !== undefined) {
    tzDate.setUTCMinutes(date.getUTCMinutes() + timezoneOffsetMinutes);
  }

  let output = "";

  for (let token of tokens) {
    if (token instanceof Directive) {
      output += token.write(tzDate, "", useOptions.options, timezoneOffsetMinutes);
    } else if (token instanceof Directive.Token) {
      output += token.write(tzDate, useOptions.options, timezoneOffsetMinutes);
    } else {
      output += token;
    }
  }

  return output;
}

function strptime(timestamp, format, timezone, options) {
  const useOptions = getFormatOptions(timezone, options);
  const parser = new TimestampParser(timestamp, format);
  const timezoneOffsetMinutes = getTimezoneOffsetMinutes(undefined, useOptions.tz);

  if (timezoneOffsetMinutes !== undefined) {
    parser.timezoneOffsetMinutes = timezoneOffsetMinutes;
  }

  if (useOptions.options) {
    for (let key in useOptions.options) {
      parser[key] = useOptions.options[key];
    }
  }

  const result = parser.parse();
  return result.getDate();
}

const strtime = {
  strftime: strftime,
  strptime: strptime
};
const english = {
  eraNames: ["CE", "BCE"],
  meridiemNames: ["AM", "PM"],
  shortWeekdayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  longWeekdayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  longMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ordinalTransform: function (number) {
    const digit = Math.floor(number % 10);
    if (number > 3 && number <= 20) return `${number}th`;
    if (digit === 1) return `${number}st`;else if (digit === 2) return `${number}nd`;else if (digit === 3) return `${number}rd`;else return `${number}th`;
  }
};

function leftPad(char, length, text) {
  let string = String(text);

  while (string.length < length) {
    string = char + string;
  }

  return string;
}

function writeTimezoneOffset(offsetMinutes, modifier) {
  const absOffset = Math.abs(offsetMinutes);
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const hour = leftPad("0", 2, Math.floor(absOffset / 60));
  const minute = leftPad("0", 2, absOffset % 60);

  if (modifier === "::") {
    return sign + hour + ":" + minute + ":00";
  } else if (modifier === ":") {
    return sign + hour + ":" + minute;
  } else {
    return sign + hour + minute;
  }
} // Get the day of the week given an input Date.
// Returns 0 for Sunday, 1 for Monday, etc.
// https://www.quora.com/How-does-Tomohiko-Sakamotos-Algorithm-work/answer/Raziman-T-V?srid=u2HNX


function getDayOfWeek(date) {
  const offsets = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getUTCDate();

  if (month < 2) {
    year--;
  }

  return (offsets[month] + year + day + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;
} // Get the day of the year as a number (1-366)


function getDayOfYear(date) {
  const lengths = monthLengths.forYear(date.getUTCFullYear());
  const months = lengths.slice(0, date.getUTCMonth());
  return date.getUTCDate() + (months.length && months.reduce((a, b) => a + b) || 0);
} // Get the week of the year (starting with Sunday) (0-53)


function getWeekOfYearFromSunday(date) {
  const dayOfYear = getDayOfYear(date);
  const firstDayOfWeek = getFirstWeekdayInYear(date.getUTCFullYear());
  return Math.floor((dayOfYear + (firstDayOfWeek || 7) - 1) / 7);
} // Get the week of the year (starting with Monday) (0-53)


function getWeekOfYearFromMonday(date) {
  const dayOfYear = getDayOfYear(date);
  const dayOfWeek = getDayOfWeek(date);
  const firstDayOfWeek = getFirstWeekdayInYear(date.getUTCFullYear());
  const sundayWeek = Math.floor((dayOfYear + (firstDayOfWeek || 7) - 1) / 7);
  return sundayWeek - (dayOfWeek === 0 ? 1 : 0) + (firstDayOfWeek === 1 ? 1 : 0);
}

function getISOWeeksInYear(year) {
  const priorYear = year - 1;
  const a = (year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;
  const b = (priorYear + Math.floor(priorYear / 4) - Math.floor(priorYear / 100) + Math.floor(priorYear / 400)) % 7;
  return a === 4 || b === 3 ? 53 : 52;
} // Get the ISO week of the year
// https://en.wikipedia.org/wiki/ISO_week_date
// https://en.wikipedia.org/wiki/ISO_8601#Week_dates


function getISOWeekOfYear(date) {
  const year = date.getUTCFullYear();
  const dayOfYear = getDayOfYear(date);
  const dayOfWeek = getDayOfWeek(date);
  const weekNumber = Math.floor((10 + dayOfYear - (dayOfWeek || 7)) / 7);

  if (weekNumber < 1) {
    return getISOWeeksInYear(year - 1);
  } else if (weekNumber > getISOWeeksInYear(year)) {
    return 1;
  } else {
    return weekNumber;
  }
} // https://en.wikipedia.org/wiki/ISO_week_date


function getISOWeekDateYear(date) {
  const year = date.getUTCFullYear();
  const dayOfYear = getDayOfYear(date);
  const dayOfWeek = getDayOfWeek(date);
  const weekNumber = Math.floor((10 + dayOfYear - (dayOfWeek || 7)) / 7);

  if (weekNumber < 1) {
    return year - 1;
  } else if (weekNumber > getISOWeeksInYear(year)) {
    return year + 1;
  } else {
    return year;
  }
}

class Directive {
  constructor(options) {
    // List of possible names for this directive
    this.names = options.names; // Pad numbers to this length (normally)

    this.padLength = options.padLength; // A likely (but not strict) length to be used when resolving
    // ambiguous parsing inputs

    this.likelyLength = options.likelyLength; // Indicates that this directive uses text (as opposed to numbers)

    this.text = options.text; // The minimum permitted numeric value for a directive

    this.minimum = options.minimum; // The maximum permitted numeric value for a directive

    this.maximum = options.maximum; // Whether this directive represents a number that can be negative

    this.canBeNegative = options.canBeNegative; // This directive should always be rewritten using a combination of
    // other directives

    this.rewrite = options.rewrite; // Function to parse content from a string

    this.parseFunction = options.parse; // Function to write content as a string, given a date to format

    this.writeFunction = options.write; // Function to store a parsed numeric value

    this.storeFunction = options.store;
  }

  static getByName(name) {
    for (let directive of Directive.list) {
      if (directive.names.indexOf(name) >= 0) {
        return directive;
      }
    }

    return undefined;
  }

  isOrdinal() {
    return false;
  }

  getCanBeNegative() {
    return this.canBeNegative;
  }

  getLikelyLength() {
    return this.likelyLength;
  }

  getRewriteParsed(parseFormatString) {
    if (!this.rewriteParsedValue) {
      this.rewriteParsedValue = parseFormatString(this.rewrite);

      for (let token of this.rewriteParsedValue) {
        token.expandedFrom = this;
      }
    }

    return this.rewriteParsedValue;
  }

  hasParseFunction() {
    return !!this.parseFunction;
  }

  hasStoreFunction() {
    return !!this.storeFunction;
  }

  parse(parser) {
    return this.parseFunction.call(parser);
  }

  store(parser, number) {
    this.storeFunction.call(parser, number);
  }

  write(date, modifier, options, timezoneOffsetMinutes) {
    return this.writeFunction(date, modifier, options, timezoneOffsetMinutes);
  }

  numberInBounds(value) {
    return (!Number.isFinite(this.minimum) || value >= this.minimum) && (!Number.isFinite(this.maximum) || value <= this.maximum);
  }

  getBoundsString() {
    if (Number.isFinite(this.minimum) && Number.isFinite(this.maximum)) {
      return `[${this.minimum}, ${this.maximum}]`;
    } else if (Number.isFinite(this.minimum)) {
      return `[${this.minimum}, ...]`;
    } else if (Number.isFinite(this.maximum)) {
      return `[..., ${this.maximum}]`;
    } else {
      return undefined;
    }
  }

  toString() {
    return "%" + this.names[0];
  }

}

Directive.Token = class DirectiveToken {
  constructor(modifier, directive) {
    this.modifier = modifier;
    this.directive = directive;
    this.expandedFrom = undefined;
  }

  isOrdinal() {
    return this.modifier === ":";
  }

  getCanBeNegative() {
    return this.directive.canBeNegative;
  }

  getLikelyLength() {
    return this.directive.likelyLength;
  }

  hasParseFunction() {
    return this.directive.hasParseFunction();
  }

  hasStoreFunction() {
    return this.directive.hasStoreFunction();
  }

  parse(parser) {
    return this.directive.parseFunction.call(parser, this.modifier);
  }

  store(parser, number) {
    this.directive.storeFunction.call(parser, number);
  }

  write(date, options, timezoneOffsetMinutes) {
    const result = this.directive.write(date, this.modifier, options, timezoneOffsetMinutes);

    if (this.modifier === "^") {
      const resultString = String(result);
      if (typeof result === "number") return resultString;
      const upper = resultString.toUpperCase();
      return upper !== resultString ? upper : resultString.toLowerCase();
    } else if (this.modifier === "_" && this.directive.padLength) {
      return leftPad(" ", this.directive.padLength, result);
    } else if (this.modifier === "_" && this.directive.text) {
      return String(result).toLowerCase();
    } else if (this.modifier === "-" && this.directive.padLength) {
      return String(result);
    } else if (this.modifier === ":" && !this.directive.text) {
      const transform = options && options.ordinalTransform || english.ordinalTransform;
      return transform(result);
    } else if (!this.directive.text && this.directive.padLength) {
      return result >= 0 ? leftPad("0", this.directive.padLength, result) : `-${leftPad("0", this.directive.padLength, -result)}`;
    } else {
      return String(result);
    }
  }

  numberInBounds(value) {
    return this.directive.numberInBounds(value);
  }

  getBoundsString() {
    return this.directive.getBoundsString();
  }

  toString() {
    return "%" + this.modifier + this.directive.names[0];
  }

};
Directive.StringToken = class DirectiveStringToken {
  constructor(string) {
    this.string = string || "";
    this.expandedFrom = undefined;
  }

  addCharacter(ch) {
    this.string += ch;
  }

  toString() {
    return this.string;
  }

};
Directive.list = [// Abbreviated weekday name
new Directive({
  names: ["a"],
  text: true,
  parse: function () {
    this.dayOfWeek = this.parseWeekdayName(this);
  },
  write: function (date, modifier, options) {
    const names = options && options.shortWeekdayNames || english.shortWeekdayNames;
    return names[date.getUTCDay() % 7];
  }
}), // Long weekday name
new Directive({
  names: ["A"],
  text: true,
  parse: function () {
    this.dayOfWeek = this.parseWeekdayName(this);
  },
  write: function (date, modifier, options) {
    const names = options && options.longWeekdayNames || english.longWeekdayNames;
    return names[date.getUTCDay() % 7];
  }
}), // Abbreviated month name
new Directive({
  names: ["b", "h"],
  text: true,
  parse: function () {
    this.month = 1 + this.parseMonthName(this);
  },
  write: function (date, modifier, options) {
    const names = options && options.shortMonthNames || english.shortMonthNames;
    return names[date.getUTCMonth() % 12];
  }
}), // Long month name
new Directive({
  names: ["B"],
  text: true,
  parse: function () {
    this.month = 1 + this.parseMonthName(this);
  },
  write: function (date, modifier, options) {
    const names = options && options.longMonthNames || english.longMonthNames;
    return names[date.getUTCMonth() % 12];
  }
}), // Combination date and time, same as "%a %b %e %H:%M:%S %Y"
new Directive({
  names: ["c"],
  rewrite: "%a %b %e %H:%M:%S %Y"
}), // Century (complements %y)
new Directive({
  names: ["C"],
  likelyLength: 2,
  canBeNegative: true,
  store: function (number) {
    this.century = number;
  },
  write: function (date) {
    return Math.floor(date.getUTCFullYear() / 100);
  }
}), // Two-digit day of month
new Directive({
  names: ["d"],
  padLength: 2,
  likelyLength: 2,
  minimum: 1,
  maximum: 31,
  store: function (number) {
    this.dayOfMonth = number;
  },
  write: function (date) {
    return date.getUTCDate();
  }
}), // Same as %m/%d/%y
new Directive({
  names: ["D", "x"],
  rewrite: "%m/%d/%y"
}), // Day of month padded with spaces (same as "%_d")
new Directive({
  names: ["e"],
  likelyLength: 2,
  minimum: 1,
  maximum: 31,
  store: function (number) {
    this.dayOfMonth = number;
  },
  write: function (date, modifier) {
    if (!modifier) {
      return leftPad(" ", 2, date.getUTCDate());
    } else {
      return date.getUTCDate();
    }
  }
}), // Six-digit microsecond
new Directive({
  names: ["f"],
  padLength: 6,
  likelyLength: 6,
  minimum: 0,
  maximum: 999999,
  store: function (number) {
    this.microsecond = number;
  },
  write: function (date) {
    return 1000 * date.getUTCMilliseconds();
  }
}), // Same as %Y-%m-%d
new Directive({
  names: ["F"],
  rewrite: "%Y-%m-%d"
}), // Two-digit ISO week year
new Directive({
  names: ["g"],
  likelyLength: 2,
  store: function (number) {
    this.isoTwoDigitYear = number;
  },
  write: function (date) {
    return getISOWeekDateYear(date) % 100;
  }
}), // Full ISO week year
new Directive({
  names: ["G"],
  padLength: 4,
  likelyLength: 4,
  canBeNegative: true,
  store: function (number) {
    this.isoYear = number;
  },
  write: function (date) {
    return getISOWeekDateYear(date);
  }
}), // Two-digit hour (0-23)
new Directive({
  names: ["H", "k"],
  padLength: 2,
  likelyLength: 2,
  minimum: 0,
  maximum: 23,
  store: function (number) {
    this.hour = number;
  },
  write: function (date) {
    return date.getUTCHours();
  }
}), // Two-digit hour (1-12) to be used in combination with %p (AM/PM)
new Directive({
  names: ["I", "l"],
  padLength: 2,
  likelyLength: 2,
  minimum: 1,
  maximum: 12,
  store: function (number) {
    this.hour = number;
  },
  write: function (date) {
    return date.getUTCHours() % 12 || 12;
  }
}), // Day in year
new Directive({
  names: ["j"],
  padLength: 3,
  likelyLength: 3,
  minimum: 1,
  maximum: 366,
  store: function (number) {
    this.dayOfYear = number;
  },
  write: function (date) {
    return getDayOfYear(date);
  }
}), // Three-digit millisecond
new Directive({
  names: ["L"],
  padLength: 3,
  likelyLength: 3,
  minimum: 0,
  maximum: 999,
  store: function (number) {
    this.millisecond = number;
  },
  write: function (date) {
    return date.getUTCMilliseconds();
  }
}), // Two-digit month number (1-12)
new Directive({
  names: ["m"],
  padLength: 2,
  likelyLength: 2,
  minimum: 1,
  maximum: 12,
  store: function (number) {
    this.month = number;
  },
  write: function (date) {
    return 1 + date.getUTCMonth();
  }
}), // Two-digit minute (0-59)
new Directive({
  names: ["M"],
  padLength: 2,
  likelyLength: 2,
  minimum: 0,
  maximum: 59,
  store: function (number) {
    this.minute = number;
  },
  write: function (date) {
    return date.getUTCMinutes();
  }
}), // AM or PM (uppercase)
new Directive({
  names: ["p"],
  text: true,
  parse: function () {
    this.meridiem = this.parseMeridiemName();
  },
  write: function (date, modifier, options) {
    const index = date.getUTCHours() < 12 ? 0 : 1;
    return (options && options.meridiemNames || english.meridiemNames)[index];
  }
}), // AM or PM (lowercase)
new Directive({
  names: ["P"],
  likelyLength: 2,
  text: true,
  parse: function () {
    this.meridiem = this.parseMeridiemName();
  },
  write: function (date, modifier, options) {
    const index = date.getUTCHours() < 12 ? 0 : 1;
    return (options && options.meridiemNames || english.meridiemNames)[index].toLowerCase();
  }
}), // Number of mircoseconds since epoch
new Directive({
  names: ["Q"],
  canBeNegative: true,
  store: function (number) {
    this.microsecondsSinceEpoch = number;
  },
  write: function (date) {
    return Math.floor(date.getTime() * 1000);
  }
}), // Same as "%I:%M:%S %p"
new Directive({
  names: ["r"],
  rewrite: "%I:%M:%S %p"
}), // Same as "%H:%M"
new Directive({
  names: ["R"],
  rewrite: "%H:%M"
}), // Number of seconds since epoch
new Directive({
  names: ["s"],
  canBeNegative: true,
  store: function (number) {
    this.secondsSinceEpoch = number;
  },
  write: function (date) {
    return Math.floor(date.getTime() / 1000);
  }
}), // Two-digit second (0-61)
new Directive({
  names: ["S"],
  padLength: 2,
  likelyLength: 2,
  minimum: 0,
  maximum: 61,
  store: function (number) {
    this.second = number;
  },
  write: function (date) {
    return Math.min(59, date.getUTCSeconds());
  }
}), // Same as %H:%M:%S
new Directive({
  names: ["T", "X"],
  rewrite: "%H:%M:%S"
}), // Weekday number, starting with Monday (1-7)
new Directive({
  names: ["u"],
  likelyLength: 1,
  minimum: 1,
  maximum: 7,
  store: function (number) {
    this.dayOfWeek = number % 7;
  },
  write: function (date) {
    return getDayOfWeek(date) || 7;
  }
}), // Week of the year, starting with Sunday (0-53)
new Directive({
  names: ["U"],
  padLength: 2,
  likelyLength: 2,
  minimum: 0,
  maximum: 53,
  store: function (number) {
    this.weekOfYearFromSunday = number;
  },
  write: function (date) {
    return getWeekOfYearFromSunday(date);
  }
}), // VMS date, same as "%e-%b-%Y"
new Directive({
  names: ["v"],
  rewrite: "%e-%b-%Y"
}), // ISO 8601:1988 week number (1-53), complements %g/%G
new Directive({
  names: ["V"],
  padLength: 2,
  likelyLength: 2,
  minimum: 1,
  maximum: 53,
  store: function (number) {
    this.isoWeekOfYear = number;
  },
  write: function (date) {
    return getISOWeekOfYear(date);
  }
}), // Weekday number, starting with Sunday (0-6)
new Directive({
  names: ["w"],
  likelyLength: 1,
  minimum: 0,
  maximum: 6,
  store: function (number) {
    this.dayOfWeek = number % 7;
  },
  write: function (date) {
    return getDayOfWeek(date);
  }
}), // Week of the year, starting with Monday (0-53)
new Directive({
  names: ["W"],
  padLength: 2,
  likelyLength: 2,
  minimum: 0,
  maximum: 53,
  store: function (number) {
    this.weekOfYearFromMonday = number;
  },
  write: function (date) {
    return getWeekOfYearFromMonday(date);
  }
}), // Two-digit year
new Directive({
  names: ["y"],
  padLength: 2,
  likelyLength: 2,
  store: function (number) {
    this.twoDigitYear = number;
  },
  write: function (date) {
    return date.getUTCFullYear() % 100;
  }
}), // Full year (usually four-digit, but not strictly so)
new Directive({
  names: ["Y"],
  padLength: 4,
  likelyLength: 4,
  canBeNegative: true,
  store: function (number) {
    this.year = number;
  },
  write: function (date, modifier) {
    const year = date.getUTCFullYear(); // Modifier "^" produces unsigned year, for combination with era "%#"

    if (year <= 0 && modifier === "^") return 1 - year;else return year;
  }
}), // Timezone offset e.g. +0500 or -1200
new Directive({
  names: ["z"],
  text: true,
  parse: function (modifier) {
    this.timezoneOffsetMinutes = this.parseTimezoneOffset(modifier);
  },
  write: function (date, modifier, options, timezoneOffsetMinutes) {
    const offset = Number.isFinite(timezoneOffsetMinutes) ? timezoneOffsetMinutes : -date.getTimezoneOffset();
    return writeTimezoneOffset(offset, modifier);
  }
}), // Timezone offset or name e.g. UTC or GMT or EST or +0500 or -1200
new Directive({
  names: ["Z"],
  likelyLength: 5,
  text: true,
  parse: function (modifier) {
    const tzList = this.getTimezoneNameList();
    const index = this.parseIndexInList(tzList);

    if (index !== undefined) {
      this.timezoneOffsetMinutes = 60 * this.timezoneNames[tzList[index]];
    } else {
      this.timezoneOffsetMinutes = this.parseTimezoneOffset(modifier);
    }
  },
  write: function (date, modifier, options, timezoneOffsetMinutes) {
    const offset = Number.isFinite(timezoneOffsetMinutes) ? timezoneOffsetMinutes : -date.getTimezoneOffset();
    if (offset === 0) return "UTC";else return writeTimezoneOffset(offset, modifier);
  }
}), // Same as "%a %b %e %H:%M:%S %Z %Y"
new Directive({
  names: ["+"],
  rewrite: "%a %b %e %H:%M:%S %Z %Y"
}), // Era (BC/BCE)
new Directive({
  names: ["#"],
  text: true,
  parse: function () {
    this.era = this.parseEraName();
  },
  write: function (date, modifier, options) {
    const index = date.getUTCFullYear() <= 0 ? 1 : 0;
    return (options && options.eraNames || english.eraNames)[index];
  }
})]; // The assertion-error package was used as a basis for the TimestampParseError type
// https://github.com/chaijs/assertion-error/blob/master/index.js
// The constructor

function TimestampParseError(reason, parser) {
  Error.call(this);
  this.reason = reason;
  this.format = parser.format;
  this.timestamp = parser.string;
  this.token = parser.currentToken;
  this.index = parser.index;
  if (this.token && this.token.expandedFrom && this.index !== undefined) this.message = `Failed to parse token "${this.token}" ` + `(expanded from "${this.token.expandedFrom}") at position [${this.index}] ` + `in timestamp "${this.timestamp}" with format "${this.format}": ` + `${this.reason}`;else if (this.token && this.index !== undefined) this.message = `Failed to parse token "${this.token}" at position [${this.index}] ` + `in timestamp "${this.timestamp}" with format "${this.format}": ` + `${this.reason}`;else if (this.token) this.message = `Failed to parse token "${this.token}" ` + `in format "${this.format}": ${this.reason}`;else this.message = `Failed with format "${this.format}": ${this.reason}`; // https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    try {
      throw new Error();
    } catch (error) {
      this.stack = error.stack;
    }
  }
} // Prototype wrangling


TimestampParseError.prototype = Object.create(Error.prototype);
TimestampParseError.prototype.name = "TimestampParseError";
TimestampParseError.prototype.constructor = TimestampParseError;

function isDigit(ch) {
  return ch === "0" || ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" || ch === "6" || ch === "7" || ch === "8" || ch === "9";
} // Matches GNU C strptime behavior
// https://www.gnu.org/software/libc/manual/html_node/Low_002dLevel-Time-String-Parsing.html


function getYearFromTwoDigits(year) {
  return year + (year <= 68 ? 2000 : 1900);
}

function getMonthFromDayOfYear(year, dayOfYear) {
  const months = monthLengths.forYear(year);
  let days = 0;

  for (let i = 0; i < months.length; i++) {
    if (days >= dayOfYear) return i;
    days += months[i];
  }

  return 12;
}

function getDayOfMonthFromDayOfYear(year, dayOfYear) {
  const months = monthLengths.forYear(year);
  let days = 0;

  for (let i = 0; i < months.length; i++) {
    if (dayOfYear - days <= months[i]) return dayOfYear - days;
    days += months[i];
  }

  return dayOfYear - days;
} // https://en.wikipedia.org/wiki/ISO_week_date
// https://en.wikipedia.org/wiki/ISO_8601#Week_dates


function getDateFromISOWeekDate(parser, isoYear, isoWeekOfYear, dayOfWeek) {
  const firstDayOfWeek = getFirstWeekdayInYear(isoYear);
  const weekdayOfJan4 = (3 + firstDayOfWeek) % 7 || 7;
  const daysInYear = isLeapYear(isoYear) ? 366 : 365;
  let dayOfYear = 7 * isoWeekOfYear + (dayOfWeek || 7) - weekdayOfJan4 - 3;

  if (dayOfYear < 1) {
    parser.year = isoYear - 1;
    dayOfYear += daysInYear;
  } else if (dayOfYear > daysInYear) {
    parser.year = 1 + isoYear;
    dayOfYear -= daysInYear;
  } else {
    parser.year = isoYear;
  }

  parser.month = getMonthFromDayOfYear(parser.year, dayOfYear);
  parser.dayOfMonth = getDayOfMonthFromDayOfYear(parser.year, dayOfYear);
}

function getDateFromSundayWeekDate(parser, year, weekOfYear, dayOfWeek) {
  const firstDayOfWeek = getFirstWeekdayInYear(year);
  const dayOfYear = 1 + 7 * weekOfYear - (firstDayOfWeek || 7) + dayOfWeek;
  parser.year = year;
  parser.month = getMonthFromDayOfYear(year, dayOfYear);
  parser.dayOfMonth = getDayOfMonthFromDayOfYear(year, dayOfYear);
}

function getDateFromMondayWeekDate(parser, year, weekOfYear, dayOfWeek) {
  const firstDayOfWeek = getFirstWeekdayInYear(year);
  const sundayDayOfYear = 1 + 7 * weekOfYear - (firstDayOfWeek || 7) + dayOfWeek;
  const dayOfYear = sundayDayOfYear + ((dayOfWeek === 0 ? 7 : 0) - (firstDayOfWeek === 1 ? 7 : 0));
  parser.year = year;
  parser.month = getMonthFromDayOfYear(year, dayOfYear);
  parser.dayOfMonth = getDayOfMonthFromDayOfYear(year, dayOfYear);
}

class TimestampParser {
  constructor(timestamp, format, tokens) {
    // Parser state
    this.index = 0;
    this.string = String(timestamp);
    this.format = String(format);
    this.tokens = tokens || TimestampParser.parseFormatString(this.format);
    this.forkLength = 0;
    this.currentToken = undefined; // Parser settings

    this.shortWeekdayNames = english.shortWeekdayNames;
    this.longWeekdayNames = english.longWeekdayNames;
    this.shortMonthNames = english.shortMonthNames;
    this.longMonthNames = english.longMonthNames;
    this.eraNames = english.eraNames;
    this.meridiemNames = english.meridiemNames;
    this.ordinalTransform = english.ordinalTransform;
    this.timezoneNames = defaultTimezoneNames; // Storage values from parsing tokens

    this.era = undefined;
    this.century = undefined;
    this.year = undefined;
    this.twoDigitYear = undefined;
    this.isoYear = undefined;
    this.isoTwoDigitYear = undefined;
    this.month = undefined;
    this.isoWeekOfYear = undefined;
    this.weekOfYearFromSunday = undefined;
    this.weekOfYearFromMonday = undefined;
    this.dayOfYear = undefined;
    this.dayOfMonth = undefined;
    this.dayOfWeek = undefined;
    this.hour = undefined;
    this.minute = undefined;
    this.second = undefined;
    this.millisecond = undefined;
    this.microsecond = undefined;
    this.meridiem = undefined;
    this.timezoneOffsetMinutes = undefined;
    this.secondsSinceEpoch = undefined;
    this.millisecondsSinceEpoch = undefined;
    this.microsecondsSinceEpoch = undefined;
  }

  getTimezoneOffsetOfDate(date) {
    const offset = this.timezoneOffsetMinutes === undefined ? -date.getTimezoneOffset() : this.timezoneOffsetMinutes;
    const offsetSign = offset >= 0 ? +1 : -1;
    const absOffset = Math.abs(offset);
    return {
      hour: offsetSign * Math.floor(absOffset / 60),
      minute: offsetSign * Math.floor(absOffset % 60),
      totalMinutes: offset
    };
  }

  getDate() {
    if (this.microsecondsSinceEpoch === undefined) {
      if (this.millisecondsSinceEpoch !== undefined) {
        this.microsecondsSinceEpoch = 1000 * this.millisecondsSinceEpoch;
      } else if (this.secondsSinceEpoch !== undefined) {
        this.microsecondsSinceEpoch = 1000000 * this.secondsSinceEpoch;
      }
    }

    if (this.microsecondsSinceEpoch !== undefined) {
      const date = new Date(this.microsecondsSinceEpoch / 1000);
      const offset = this.getTimezoneOffsetOfDate(date);
      date.setUTCMinutes(date.getUTCMinutes() - offset.totalMinutes);
      return date;
    }

    const date = new Date();

    if (this.year === undefined && this.twoDigitYear !== undefined) {
      if (this.century === undefined) {
        this.year = getYearFromTwoDigits(this.twoDigitYear);
      } else {
        this.year = 100 * this.century + this.twoDigitYear;
      }
    } else if (this.isoYear === undefined && this.isoTwoDigitYear !== undefined) {
      this.isoYear = getYearFromTwoDigits(this.isoTwoDigitYear);
    } else if (this.year === undefined && this.century !== undefined) {
      this.year = 100 * this.century;
    }

    if (this.era && this.year !== undefined) {
      this.year = 1 - this.year;
    }

    if (this.hour !== undefined && this.meridiem !== undefined) {
      this.hour = this.hour % 12 + (this.meridiem ? 12 : 0);
    }

    if (this.microsecond === undefined && this.millisecond !== undefined) {
      this.microsecond = 1000 * this.millisecond;
    }

    if (this.isoYear !== undefined && this.isoWeekOfYear !== undefined && (this.month === undefined || this.dayOfMonth === undefined)) {
      getDateFromISOWeekDate(this, this.isoYear, this.isoWeekOfYear, this.dayOfWeek || 0);
    } else if (this.dayOfYear !== undefined) {
      const year = this.year !== undefined ? this.year : date.getFullYear();

      if (this.month === undefined) {
        this.month = getMonthFromDayOfYear(year, this.dayOfYear);
      }

      if (this.dayOfMonth === undefined) {
        this.dayOfMonth = getDayOfMonthFromDayOfYear(year, this.dayOfYear);
      }
    } else if (this.weekOfYearFromSunday !== undefined && (this.month === undefined || this.dayOfMonth === undefined)) {
      const year = this.year !== undefined ? this.year : date.getFullYear();
      getDateFromSundayWeekDate(this, year, this.weekOfYearFromSunday, this.dayOfWeek || 0);
    } else if (this.weekOfYearFromMonday !== undefined && (this.month === undefined || this.dayOfMonth === undefined)) {
      const year = this.year !== undefined ? this.year : date.getFullYear();
      getDateFromMondayWeekDate(this, year, this.weekOfYearFromMonday, this.dayOfWeek || 0);
    }

    if (this.year !== undefined) {
      date.setUTCFullYear(this.year);
    }

    if (this.month !== undefined) {
      // https://github.com/pineapplemachine/strtime-js/issues/5
      // https://stackoverflow.com/questions/26681313/javascript-setutcmonth-does-not-work-for-november
      date.setUTCMonth(0, 1);
      date.setUTCMonth(this.month - 1);
    }

    if (this.dayOfMonth !== undefined) {
      date.setUTCDate(this.dayOfMonth);
    }

    const offset = this.getTimezoneOffsetOfDate(date);

    if (offset.totalMinutes) {
      this.hour = (this.hour || 0) - offset.hour;
      this.minute = (this.minute || 0) - offset.minute;
    }

    date.setUTCHours(this.hour || 0);
    date.setUTCMinutes(this.minute || 0);
    date.setUTCSeconds(this.second || 0);
    date.setUTCMilliseconds(this.microsecond ? this.microsecond / 1000 : 0);
    return date;
  }

  copy() {
    const parser = new TimestampParser(this.string, this.format, this.tokens);

    for (let key in this) {
      parser[key] = this[key];
    }

    return parser;
  }

  fork(length, startTokenIndex) {
    const parser = this.copy();
    parser.forkLength = length;
    return parser.parse(startTokenIndex);
  }

  parse(startTokenIndex) {
    for (let i = startTokenIndex || 0; i < this.tokens.length; i++) {
      const token = this.tokens[i];
      this.currentToken = token;
      if (this.index >= this.string.length) throw new TimestampParseError("Timestamp is too short to match the whole format.", this);

      if (token instanceof Directive.StringToken) {
        this.parseStringToken(token.string);
      } else if (token.hasParseFunction()) {
        token.parse(this);
      } else if (token.hasStoreFunction() && !token.text) {
        const next = this.tokens[1 + i];

        if (next instanceof Directive.StringToken && isDigit(next.string[0]) || (next instanceof Directive || next instanceof Directive.Token) && !next.text) {
          const result = this.parseAmbiguousNumber(token, i);
          if (result) return result;
        } else {
          token.store(this, this.parseNumber(token));
        }
      } else {
        throw new TimestampParseError("Invalid directive.", this);
      }
    }

    this.currentToken = undefined;
    if (1 + this.index < this.string.length) throw new TimestampParseError(`Timestamp is too long for the given format. Text remaining: "${this.string.slice(this.index)}".`, this);
    return this;
  }

  parseStringToken(token) {
    for (let i = 0; i < token.length; i++) {
      if (this.string[this.index] !== token[i]) {
        throw new TimestampParseError(`String literal "${token}" not matched.`, this);
      }

      this.index++;
    }
  }

  parseAmbiguousNumber(token, tokenIndex) {
    if (this.forkLength === 0) {
      const likelyLength = token.getLikelyLength();

      if (likelyLength) {
        try {
          return this.fork(likelyLength, tokenIndex);
        } catch (error) {
          if (!(error instanceof TimestampParseError)) throw error;
        }
      }

      let lastWholeError = undefined;

      for (let i = 1; i < this.string.length - this.index; i++) {
        if (i === token.likelyLength) continue;

        try {
          return this.fork(i, tokenIndex);
        } catch (error) {
          if (!(error instanceof TimestampParseError)) throw error;

          if (error.message = "Timestamp is too short to match the whole format.") {
            lastWholeError = error;
          }
        }
      }

      if (lastWholeError) {
        throw lastWholeError;
      } else {
        throw new TimestampParseError("Failed to parse ambiguous number.", this);
      }
    } else {
      const number = this.parseNumber(token, this.forkLength);
      token.store(this, number);
      this.forkLength = 0;
    }
  }

  parseNumber(directive, lengthLimit = Infinity) {
    const negative = this.string[this.index] === "-";

    if (negative && !directive.getCanBeNegative()) {
      throw new TimestampParseError("Number cannot be negative.", this);
    } else if (negative) {
      this.index++;
    }

    const start = this.index;

    while (this.index < this.string.length && this.string[this.index] === " ") {
      this.index++;
    }

    while (this.index < this.string.length && this.index - start < lengthLimit && isDigit(this.string[this.index])) {
      this.index++;
    }

    const value = +this.string.slice(start, this.index).trim();

    if (!Number.isInteger(value)) {
      throw new TimestampParseError("Failed to parse number.", this);
    } else if (!directive.numberInBounds(value)) {
      throw new TimestampParseError(`Number [${value}] is out of bounds ${directive.getBoundsString()}.`, this);
    }

    const result = negative ? -value : value;

    if (directive.isOrdinal()) {
      const ordinal = this.ordinalTransform(result);
      this.index += ordinal.length - (this.index - start);
    }

    return result;
  }

  parseMonthName() {
    const names = this.shortMonthNames.slice();
    names.push(...this.longMonthNames);
    const index = this.parseIndexInList(names);
    if (index === undefined) throw new TimestampParseError("Failed to parse month name.", this);
    return index % 12;
  }

  parseWeekdayName() {
    const names = this.shortWeekdayNames.slice();
    names.push(...this.longWeekdayNames);
    const index = this.parseIndexInList(names);
    if (index === undefined) throw new TimestampParseError("Failed to parse weekday name.", this);
    return index % 7;
  }

  parseMeridiemName() {
    const index = this.parseIndexInList(this.meridiemNames);
    if (index === undefined) throw new TimestampParseError("Failed to parse AM/PM.", this);
    return index % 2;
  }

  parseEraName() {
    const index = this.parseIndexInList(this.eraNames);
    if (index === undefined) throw new TimestampParseError("Failed to parse era name.", this);
    return index % 2;
  }

  parseIndexInList(list) {
    const possible = list.slice();
    let possibleCount = possible.length;
    let matchIndex = undefined;
    let matchLength = 0;

    for (let i = 0; possibleCount && this.index + i < this.string.length; i++) {
      const ch = this.string[this.index + i].toLowerCase();

      for (let j = 0; j < possible.length; j++) {
        const item = possible[j];
        if (!item) continue;

        if (i >= item.length || item[i].toLowerCase() !== ch) {
          possible[j] = null;
          possibleCount--;
        } else if (1 + i === item.length) {
          matchIndex = j;
          matchLength = 1 + i;
        }
      }
    }

    if (matchIndex === undefined) {
      return undefined;
    } else {
      this.index += matchLength;
      return matchIndex;
    }
  }

  getTimezoneNameList() {
    if (!this.timezoneNameList) {
      this.timezoneNameList = [];

      for (let key in this.timezoneNames) {
        this.timezoneNameList.push(key);
      }
    }

    return this.timezoneNameList;
  }

  parseTimezoneOffset(modifier) {
    const start = this.index;
    const sign = this.string[this.index];
    const hours = +this.string.slice(this.index + 1, this.index + 3);
    let minutes;

    if (this.string[this.index + 3] === ":") {
      minutes = +this.string.slice(this.index + 4, this.index + 6);
      this.index += 6;
    } else {
      minutes = +this.string.slice(this.index + 3, this.index + 5);
      this.index += 5;
    }

    if (!Number.isInteger(hours) || !Number.isInteger(minutes)) {
      throw new TimestampParseError(`Failed to parse timezone offset from string ` + `"${this.string.slice(start, this.index)}".`, this);
    }

    const offset = minutes + 60 * hours;
    if (sign === "+" || sign === "±") return +offset;else if (sign === "-") return -offset;else throw new TimestampParseError(`Unknown timezone offset sign "${sign}".`, this);
  }

}

TimestampParser.parseFormatString = function parseFormatString(format) {
  const tokens = [];
  let directive = false;
  let modifier = undefined;
  const formatString = String(format);

  if (!formatString) {
    throw new TimestampParseError(`Empty format string.`, {
      format: formatString
    });
  }

  function addCharacter(ch) {
    if (tokens.length && tokens[tokens.length - 1] instanceof Directive.StringToken) {
      if (isDigit(ch) === isDigit(tokens[tokens.length - 1].string[0])) {
        tokens[tokens.length - 1].addCharacter(ch);
      } else {
        tokens.push(new Directive.StringToken(ch));
      }
    } else {
      tokens.push(new Directive.StringToken(ch));
    }
  }

  for (let ch of formatString) {
    if (directive && ch === "%") {
      addCharacter("%");
      modifier = "";
      directive = false;
    } else if (directive && ch === "n") {
      addCharacter("\n");
      modifier = "";
      directive = false;
    } else if (directive && ch === "t") {
      addCharacter("\t");
      modifier = "";
      directive = false;
    } else if (directive && !modifier && (ch === "-" || ch === "_" || ch === "^" || ch === ":")) {
      modifier += ch;
    } else if (directive) {
      const dir = Directive.getByName(ch);
      if (!dir) throw new TimestampParseError(`Unknown directive "%${modifier}${ch}".`, {
        format: formatString
      });else if (dir.rewrite) tokens.push(...dir.getRewriteParsed(TimestampParser.parseFormatString));else tokens.push(new Directive.Token(modifier, dir));
      modifier = "";
      directive = false;
    } else if (ch === "%") {
      modifier = "";
      directive = true;
    } else {
      addCharacter(ch);
    }
  }

  if (directive) throw new TimestampParseError("Found unterminated directive at the end of the format string.", {
    format: formatString
  });

  if (tokens.length && tokens[tokens.length - 1].string === "Z") {
    tokens.zuluTimezone = true;
  }

  return tokens;
};

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const monthLengths = {
  common: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leap: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  forYear: function (year) {
    return isLeapYear(year) ? monthLengths.leap : monthLengths.common;
  }
}; // https://stackoverflow.com/a/478992/4099022

function getFirstWeekdayInYear(year) {
  const y = year - 1;
  return (year * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)) % 7;
}

const defaultTimezoneNames = {
  "ACDT": +10.5,
  "ACST": +9.5,
  "ACT": -5,
  "ACWST": +8.75,
  "ADT": -3,
  "AEDT": +11,
  "AEST": +10,
  "AFT": +4.5,
  "AKDT": -8,
  "AKST": -9,
  "AMST": -3,
  "AMT": -4,
  "AMT": +4,
  "ART": -3,
  "AST": +3,
  "AST": -4,
  "AWST": +8,
  "AZOST": 0,
  "AZOT": -1,
  "AZT": +4,
  "BDT": +8,
  "BIOT": +6,
  "BIT": -12,
  "BOT": -4,
  "BRST": -2,
  "BRT": -3,
  "BST": +6,
  "BST": +11,
  "BST": +1,
  "BTT": +6,
  "CAT": +2,
  "CCT": +6.5,
  "CDT": -5,
  "CDT": -4,
  "CEST": +2,
  "CET": +1,
  "CHADT": +13.75,
  "CHAST": +12.75,
  "CHOT": +8,
  "CHOST": +9,
  "CHST": +10,
  "CHUT": +10,
  "CIST": -8,
  "CIT": +8,
  "CKT": -10,
  "CLST": -3,
  "CLT": -4,
  "COST": -4,
  "COT": -5,
  "CST": -6,
  "CST": +8,
  "CST": -5,
  "CT": +8,
  "CVT": -1,
  "CWST": +8.75,
  "CXT": +7,
  "DAVT": +7,
  "DDUT": +10,
  "DFT": +1,
  "EASST": -5,
  "EAST": -6,
  "EAT": +3,
  "ECT": -4,
  "ECT": -5,
  "EDT": -4,
  "EEST": +3,
  "EET": +2,
  "EGST": 0,
  "EGT": -1,
  "EIT": +9,
  "EST": -5,
  "FET": +3,
  "FJT": +12,
  "FKST": -3,
  "FKT": -4,
  "FNT": -2,
  "GALT": -6,
  "GAMT": -9,
  "GET": +4,
  "GFT": -3,
  "GILT": +12,
  "GIT": -9,
  "GMT": 0,
  "GST": -2,
  "GST": +4,
  "GYT": -4,
  "HDT": -9,
  "HAEC": +2,
  "HST": -10,
  "HKT": +8,
  "HMT": +5,
  "HOVST": +8,
  "HOVT": +7,
  "ICT": +7,
  "IDLW": -12,
  "IDT": +3,
  "IOT": +3,
  "IRDT": +4.5,
  "IRKT": +8,
  "IRST": +3.5,
  "IST": +5.5,
  "IST": +1,
  "IST": +2,
  "JST": +9,
  "KGT": +6,
  "KOST": +11,
  "KRAT": +7,
  "KST": +9,
  "LHST": +10.5,
  "LHST": +11,
  "LINT": +14,
  "MAGT": +12,
  "MART": -9.5,
  "MAWT": +5,
  "MDT": -6,
  "MET": +1,
  "MEST": +2,
  "MHT": +12,
  "MIST": +11,
  "MIT": -9.5,
  "MMT": +6.5,
  "MSK": +3,
  "MST": +8,
  "MST": -7,
  "MUT": +4,
  "MVT": +5,
  "MYT": +8,
  "NCT": +11,
  "NDT": -2.5,
  "NFT": +11,
  "NPT": +5.75,
  "NST": -3.5,
  "NT": -3.5,
  "NUT": -11,
  "NZDT": +13,
  "NZST": +12,
  "OMST": +6,
  "ORAT": +5,
  "PDT": -7,
  "PET": -5,
  "PETT": +12,
  "PGT": +10,
  "PHOT": +13,
  "PHT": +8,
  "PKT": +5,
  "PMDT": -2,
  "PMST": -3,
  "PONT": +11,
  "PST": -8,
  "PST": +8,
  "PYST": -3,
  "PYT": -4,
  "RET": +4,
  "ROTT": -3,
  "SAKT": +11,
  "SAMT": +4,
  "SAST": +2,
  "SBT": +11,
  "SCT": +4,
  "SDT": -10,
  "SGT": +8,
  "SLST": +5.5,
  "SRET": +11,
  "SRT": -3,
  "SST": -11,
  "SST": +8,
  "SYOT": +3,
  "TAHT": -10,
  "THA": +7,
  "TFT": +5,
  "TJT": +5,
  "TKT": +13,
  "TLT": +9,
  "TMT": +5,
  "TRT": +3,
  "TOT": +13,
  "TVT": +12,
  "ULAST": +9,
  "ULAT": +8,
  "USZ": +2,
  "UTC": 0,
  "UYST": -2,
  "UYT": -3,
  "UZT": +5,
  "VET": -4,
  "VLAT": +10,
  "VOLT": +4,
  "VOST": +6,
  "VUT": +11,
  "WAKT": +12,
  "WAST": +2,
  "WAT": +1,
  "WEST": +1,
  "WET": 0,
  "WIT": +7,
  "WST": +8,
  "YAKT": +9,
  "YEKT": +5,
  "Z": 0
};

if (true) {
  module.exports = strtime;
} else {}

/***/ }),

/***/ "./node_modules/widget-utils/src/ajax.js":
/*!***********************************************!*\
  !*** ./node_modules/widget-utils/src/ajax.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax)
/* harmony export */ });
/* harmony import */ var _object_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/isObject */ "./node_modules/widget-utils/src/object/isObject.js");
/* harmony import */ var _object_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object/serialize */ "./node_modules/widget-utils/src/object/serialize.js");
/* harmony import */ var _string_toUnderscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/toUnderscore */ "./node_modules/widget-utils/src/string/toUnderscore.js");
/* global XMLHttpRequest */



const {
  parse,
  stringify
} = JSON; // ajax wrapper

const ajax = (apiUrl, success, error, params, method = 'GET') => {
  const xmlHttp = new XMLHttpRequest();
  const url = method === 'GET' && params ? `${apiUrl}?${(0,_object_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(params, _string_toUnderscore__WEBPACK_IMPORTED_MODULE_1__.toUnderscore)}` : apiUrl;

  const isSuccess = status => status >= 200 && status < 300 || status === 304;

  xmlHttp.open(method, url);
  xmlHttp.setRequestHeader('Content-type', 'application/vnd.api+json');

  xmlHttp.onreadystatechange = () => {
    let response;

    if (xmlHttp.readyState === 4) {
      if (isSuccess(xmlHttp.status)) {
        try {
          response = parse(xmlHttp.responseText);
        } catch (e) {
          response = xmlHttp;
        }

        success(response);
      } else {
        error(xmlHttp);
      }
    }
  };

  if ((0,_object_isObject__WEBPACK_IMPORTED_MODULE_2__.isObject)(params) && method !== 'GET') {
    xmlHttp.send(stringify(params));
  } else {
    xmlHttp.send();
  }
};

/***/ }),

/***/ "./node_modules/widget-utils/src/array/index.js":
/*!******************************************************!*\
  !*** ./node_modules/widget-utils/src/array/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* reexport safe */ _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/widget-utils/src/array/isArray.js");


/***/ }),

/***/ "./node_modules/widget-utils/src/array/isArray.js":
/*!********************************************************!*\
  !*** ./node_modules/widget-utils/src/array/isArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
const {
  prototype: {
    toString
  }
} = Object;
const isArray = a => {
  return toString.call(a) === '[object Array]';
};

/***/ }),

/***/ "./node_modules/widget-utils/src/currency/currencyFormatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/widget-utils/src/currency/currencyFormatter.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currencyFormatter": () => (/* binding */ currencyFormatter)
/* harmony export */ });
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! currency-symbol-map */ "./node_modules/currency-symbol-map/currency-symbol-map.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__);
/* global Intl */


function toLocaleStringSupportsOptions() {
  return !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');
}

const currencyFormatter = (value, lang, currency, minimumFractionDigits = 0, maximumFractionDigits = 3) => {
  if (toLocaleStringSupportsOptions() && currency) {
    const isDollar = () => (0,currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__.getSymbolFromCurrency)(currency) === '$';

    const options = {
      style: 'currency',
      currency,
      currencyDisplay: isDollar ? 'symbol' : 'code',
      minimumFractionDigits,
      maximumFractionDigits
    };
    const numberFormat = new Intl.NumberFormat(lang, options);
    const str = numberFormat.format(value);

    if (isDollar || !(0,currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__.getSymbolFromCurrency)(currency)) {
      return str;
    }

    return str.replace(currency, (0,currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__.getSymbolFromCurrency)(currency));
  }

  return value;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/currency/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/widget-utils/src/currency/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currencyFormatter": () => (/* reexport safe */ _currencyFormatter__WEBPACK_IMPORTED_MODULE_0__.currencyFormatter)
/* harmony export */ });
/* harmony import */ var _currencyFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyFormatter */ "./node_modules/widget-utils/src/currency/currencyFormatter.js");


/***/ }),

/***/ "./node_modules/widget-utils/src/date/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/widget-utils/src/date/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthLength": () => (/* reexport safe */ _monthLength__WEBPACK_IMPORTED_MODULE_0__.monthLength)
/* harmony export */ });
/* harmony import */ var _monthLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monthLength */ "./node_modules/widget-utils/src/date/monthLength.js");


/***/ }),

/***/ "./node_modules/widget-utils/src/date/monthLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/widget-utils/src/date/monthLength.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthLength": () => (/* binding */ monthLength)
/* harmony export */ });
// Date utils
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

const monthLength = (year, month) => {
  let days = daysInMonth[month];

  if (month === 1 && isLeapYear(year)) {
    days = 29;
  }

  return days;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/addClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/addClass.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeClass */ "./node_modules/widget-utils/src/dom/removeClass.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setClassName */ "./node_modules/widget-utils/src/dom/setClassName.js");
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getClassName */ "./node_modules/widget-utils/src/dom/getClassName.js");



const addClass = (el, ...classNames) => {
  const name = classNames;

  if (typeof el.classList !== 'undefined') {
    name.forEach(cls => {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    (0,_removeClass__WEBPACK_IMPORTED_MODULE_0__.removeClass)(el, name);
    const cls = `${(0,_getClassName__WEBPACK_IMPORTED_MODULE_1__.getClassName)(el)} ${name.join(' ')}`;
    (0,_setClassName__WEBPACK_IMPORTED_MODULE_2__.setClassName)(el, cls);
  }
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/createElement.js":
/*!************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/createElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/* global document */
const {
  keys
} = Object;
/**
 * Create HTMLElement with attributes
 * @param name {String}
 * @param attrs {Object}
 * @returns {HTMLElement}
 */

const createElement = (name, attrs) => {
  const params = attrs || {};
  const element = document.createElement(name);
  keys(params).map(i => element.setAttribute(i, params[i]));
  return element;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/destroyElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/destroyElement.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destroyElement": () => (/* binding */ destroyElement)
/* harmony export */ });
const destroyElement = element => {
  if (element.parentNode && element.parentNode.removeChild) {
    element.parentNode.removeChild(element);
  }

  return element;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/elementFromString.js":
/*!****************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/elementFromString.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementFromString": () => (/* binding */ elementFromString)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./node_modules/widget-utils/src/dom/createElement.js");

const elementFromString = string => {
  const element = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  element.innerHTML = string;
  return element.children[0];
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/findByClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/findByClassName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findByClassName": () => (/* binding */ findByClassName)
/* harmony export */ });
const findByClassName = (context, name) => context.querySelector(`.${name}`);

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/getClassName.js":
/*!***********************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/getClassName.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassName": () => (/* binding */ getClassName)
/* harmony export */ });
const getClassName = el => {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }

  return el.className;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/getParentAttribute.js":
/*!*****************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/getParentAttribute.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentAttribute": () => (/* binding */ getParentAttribute)
/* harmony export */ });
/* harmony import */ var _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverseToParentWithAttr */ "./node_modules/widget-utils/src/dom/traverseToParentWithAttr.js");

/**
 * Find HTMLElement attribute, in the dom-tree, bubbles up
 * @param el {HTMLElement}
 * @param attr
 * @returns {string}
 */

const getParentAttribute = (el, attr) => (0,_traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_0__.traverseToParentWithAttr)(el, attr).value;

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/hasClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/hasClass.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasClass": () => (/* binding */ hasClass)
/* harmony export */ });
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClassName */ "./node_modules/widget-utils/src/dom/getClassName.js");

const hasClass = (el, name) => {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }

  const className = (0,_getClassName__WEBPACK_IMPORTED_MODULE_0__.getClassName)(el);
  return new RegExp(`(^| )${name}( |$)`, 'gi').test(className);
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/index.js":
/*!****************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* reexport safe */ _addClass__WEBPACK_IMPORTED_MODULE_0__.addClass),
/* harmony export */   "createElement": () => (/* reexport safe */ _createElement__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "destroyElement": () => (/* reexport safe */ _destroyElement__WEBPACK_IMPORTED_MODULE_2__.destroyElement),
/* harmony export */   "elementFromString": () => (/* reexport safe */ _elementFromString__WEBPACK_IMPORTED_MODULE_3__.elementFromString),
/* harmony export */   "findByClassName": () => (/* reexport safe */ _findByClassName__WEBPACK_IMPORTED_MODULE_4__.findByClassName),
/* harmony export */   "getClassName": () => (/* reexport safe */ _getClassName__WEBPACK_IMPORTED_MODULE_5__.getClassName),
/* harmony export */   "getParentAttribute": () => (/* reexport safe */ _getParentAttribute__WEBPACK_IMPORTED_MODULE_6__.getParentAttribute),
/* harmony export */   "hasClass": () => (/* reexport safe */ _hasClass__WEBPACK_IMPORTED_MODULE_7__.hasClass),
/* harmony export */   "isInside": () => (/* reexport safe */ _isInside__WEBPACK_IMPORTED_MODULE_8__.isInside),
/* harmony export */   "removeClass": () => (/* reexport safe */ _removeClass__WEBPACK_IMPORTED_MODULE_9__.removeClass),
/* harmony export */   "setClassName": () => (/* reexport safe */ _setClassName__WEBPACK_IMPORTED_MODULE_10__.setClassName),
/* harmony export */   "traverseToParentWithAttr": () => (/* reexport safe */ _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_11__.traverseToParentWithAttr)
/* harmony export */ });
/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ "./node_modules/widget-utils/src/dom/addClass.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./node_modules/widget-utils/src/dom/createElement.js");
/* harmony import */ var _destroyElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroyElement */ "./node_modules/widget-utils/src/dom/destroyElement.js");
/* harmony import */ var _elementFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementFromString */ "./node_modules/widget-utils/src/dom/elementFromString.js");
/* harmony import */ var _findByClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./findByClassName */ "./node_modules/widget-utils/src/dom/findByClassName.js");
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getClassName */ "./node_modules/widget-utils/src/dom/getClassName.js");
/* harmony import */ var _getParentAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getParentAttribute */ "./node_modules/widget-utils/src/dom/getParentAttribute.js");
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hasClass */ "./node_modules/widget-utils/src/dom/hasClass.js");
/* harmony import */ var _isInside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isInside */ "./node_modules/widget-utils/src/dom/isInside.js");
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removeClass */ "./node_modules/widget-utils/src/dom/removeClass.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setClassName */ "./node_modules/widget-utils/src/dom/setClassName.js");
/* harmony import */ var _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./traverseToParentWithAttr */ "./node_modules/widget-utils/src/dom/traverseToParentWithAttr.js");













/***/ }),

/***/ "./node_modules/widget-utils/src/dom/isInside.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/isInside.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInside": () => (/* binding */ isInside)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/widget-utils/src/is.js");

/**
 * Check if some HTMLElement is inside another one
 * @param child {HTMLElement}
 * @param parent {HTMLElement}
 * @returns {boolean}
 */

const isInside = (child, parent) => {
  let current = child;

  while (current !== parent) {
    if (!(0,_is__WEBPACK_IMPORTED_MODULE_0__.is)(current) || current.tagName === 'BODY' || current.tagName === 'HTML') {
      return false;
    }

    current = current.parentNode;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/removeClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/removeClass.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClassName */ "./node_modules/widget-utils/src/dom/getClassName.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClassName */ "./node_modules/widget-utils/src/dom/setClassName.js");


const removeClass = (el, ...classNames) => {
  const name = classNames;

  if (typeof el.classList !== 'undefined') {
    name.forEach(cls => {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    const regex = new RegExp(`(^| )${name.join('|')}( |$)`, 'gi');
    const className = (0,_getClassName__WEBPACK_IMPORTED_MODULE_0__.getClassName)(el).replace(regex, ' ');
    (0,_setClassName__WEBPACK_IMPORTED_MODULE_1__.setClassName)(el, className);
  }
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/setClassName.js":
/*!***********************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/setClassName.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setClassName": () => (/* binding */ setClassName)
/* harmony export */ });
const setClassName = (el, className) => {
  el.setAttribute('class', className);
};

/***/ }),

/***/ "./node_modules/widget-utils/src/dom/traverseToParentWithAttr.js":
/*!***********************************************************************!*\
  !*** ./node_modules/widget-utils/src/dom/traverseToParentWithAttr.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseToParentWithAttr": () => (/* binding */ traverseToParentWithAttr)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/widget-utils/src/is.js");

const traverseToParentWithAttr = (element, attribute) => {
  let parent = element;
  let value = element.getAttribute(attribute);

  while (!(0,_is__WEBPACK_IMPORTED_MODULE_0__.is)(value)) {
    parent = parent.parentNode;

    if (parent && typeof parent.getAttribute === 'function') {
      value = parent.getAttribute(attribute);
    } else {
      parent = null;
      break;
    }
  }

  return {
    value,
    parent
  };
};

/***/ }),

/***/ "./node_modules/widget-utils/src/emitter.js":
/*!**************************************************!*\
  !*** ./node_modules/widget-utils/src/emitter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Emitter)
/* harmony export */ });
class Emitter {
  on(event, listener) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
    return this;
  }

  once(event, listener) {
    const self = this;

    function fn(...args) {
      self.off(event, fn);
      listener.apply(this, args);
    }

    fn.listener = listener;
    this.on(event, fn);
    return this;
  }

  off(event, listener) {
    let listeners;

    if (this.events && this.events[event]) {
      listeners = this.events[event];
      listeners.forEach((fn, i) => {
        if (fn === listener || fn.listener === listener) {
          listeners.splice(i, 1);
        }
      });

      if (listeners.length === 0) {
        delete this.events[event];
      }
    }

    return this;
  }

  emit(event, ...args) {
    let listeners;

    if (this.events && this.events[event]) {
      listeners = this.events[event];
      listeners = listeners.slice(0);
      listeners.forEach(fn => fn.apply(this, args));
    }

    return this;
  }

}

/***/ }),

/***/ "./node_modules/widget-utils/src/function/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/widget-utils/src/function/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* reexport safe */ _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/widget-utils/src/function/isFunction.js");


/***/ }),

/***/ "./node_modules/widget-utils/src/function/isFunction.js":
/*!**************************************************************!*\
  !*** ./node_modules/widget-utils/src/function/isFunction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
const isFunction = f => {
  return typeof f === 'function';
};

/***/ }),

/***/ "./node_modules/widget-utils/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/widget-utils/src/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "currencyFormatter": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_1__.currencyFormatter),
/* harmony export */   "monthLength": () => (/* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_2__.monthLength),
/* harmony export */   "addClass": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.addClass),
/* harmony export */   "createElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.createElement),
/* harmony export */   "destroyElement": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.destroyElement),
/* harmony export */   "elementFromString": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.elementFromString),
/* harmony export */   "findByClassName": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.findByClassName),
/* harmony export */   "getClassName": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getClassName),
/* harmony export */   "getParentAttribute": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getParentAttribute),
/* harmony export */   "hasClass": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.hasClass),
/* harmony export */   "isInside": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.isInside),
/* harmony export */   "removeClass": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.removeClass),
/* harmony export */   "setClassName": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.setClassName),
/* harmony export */   "traverseToParentWithAttr": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.traverseToParentWithAttr),
/* harmony export */   "isFunction": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_4__.isFunction),
/* harmony export */   "isNaNPolyfill": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_5__.isNaNPolyfill),
/* harmony export */   "isNumeric": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_5__.isNumeric),
/* harmony export */   "capitalizeObj": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.capitalizeObj),
/* harmony export */   "isObject": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.isObject),
/* harmony export */   "merge": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.merge),
/* harmony export */   "pick": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.pick),
/* harmony export */   "serialize": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.serialize),
/* harmony export */   "traverseObj": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_6__.traverseObj),
/* harmony export */   "dashToCapital": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_7__.dashToCapital),
/* harmony export */   "isString": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_7__.isString),
/* harmony export */   "toUnderscore": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_7__.toUnderscore),
/* harmony export */   "underscoreToCapital": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_7__.underscoreToCapital),
/* harmony export */   "is": () => (/* reexport safe */ _is__WEBPACK_IMPORTED_MODULE_8__.is),
/* harmony export */   "ajax": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_9__.ajax),
/* harmony export */   "validate": () => (/* reexport safe */ _validate__WEBPACK_IMPORTED_MODULE_10__.validate),
/* harmony export */   "Emitter": () => (/* reexport safe */ _emitter__WEBPACK_IMPORTED_MODULE_11__.default)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/widget-utils/src/array/index.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./node_modules/widget-utils/src/currency/index.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./node_modules/widget-utils/src/date/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./node_modules/widget-utils/src/dom/index.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./node_modules/widget-utils/src/function/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math */ "./node_modules/widget-utils/src/math/index.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./node_modules/widget-utils/src/object/index.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string */ "./node_modules/widget-utils/src/string/index.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is */ "./node_modules/widget-utils/src/is.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ajax */ "./node_modules/widget-utils/src/ajax.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate */ "./node_modules/widget-utils/src/validate.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emitter */ "./node_modules/widget-utils/src/emitter.js");














/***/ }),

/***/ "./node_modules/widget-utils/src/is.js":
/*!*********************************************!*\
  !*** ./node_modules/widget-utils/src/is.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ is)
/* harmony export */ });
/* harmony import */ var _math_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/isNaNPolyfill */ "./node_modules/widget-utils/src/math/isNaNPolyfill.js");

const is = o => {
  return typeof o !== 'undefined' && o !== null && !(0,_math_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__.isNaNPolyfill)(o);
};

/***/ }),

/***/ "./node_modules/widget-utils/src/math/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/widget-utils/src/math/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNaNPolyfill": () => (/* reexport safe */ _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__.isNaNPolyfill),
/* harmony export */   "isNumeric": () => (/* reexport safe */ _isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)
/* harmony export */ });
/* harmony import */ var _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNaNPolyfill */ "./node_modules/widget-utils/src/math/isNaNPolyfill.js");
/* harmony import */ var _isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumeric */ "./node_modules/widget-utils/src/math/isNumeric.js");



/***/ }),

/***/ "./node_modules/widget-utils/src/math/isNaNPolyfill.js":
/*!*************************************************************!*\
  !*** ./node_modules/widget-utils/src/math/isNaNPolyfill.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNaNPolyfill": () => (/* binding */ isNaNPolyfill)
/* harmony export */ });
const isNaNPolyfill = value => {
  return typeof value === 'number' && Number.isNaN(value);
};

/***/ }),

/***/ "./node_modules/widget-utils/src/math/isNumeric.js":
/*!*********************************************************!*\
  !*** ./node_modules/widget-utils/src/math/isNumeric.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNaNPolyfill */ "./node_modules/widget-utils/src/math/isNaNPolyfill.js");
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/isArray */ "./node_modules/widget-utils/src/array/isArray.js");


const isNumeric = n => {
  return !(0,_array_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) && !(0,_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_1__.isNaNPolyfill)(parseInt(n, 10));
};

/***/ }),

/***/ "./node_modules/widget-utils/src/object/capitalizeObj.js":
/*!***************************************************************!*\
  !*** ./node_modules/widget-utils/src/object/capitalizeObj.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeObj": () => (/* binding */ capitalizeObj)
/* harmony export */ });
/* harmony import */ var _traverseObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverseObj */ "./node_modules/widget-utils/src/object/traverseObj.js");
/* harmony import */ var _string_dashToCapital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/dashToCapital */ "./node_modules/widget-utils/src/string/dashToCapital.js");
/* harmony import */ var _string_underscoreToCapital__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/underscoreToCapital */ "./node_modules/widget-utils/src/string/underscoreToCapital.js");



const capitalizeObj = object => {
  object = (0,_traverseObj__WEBPACK_IMPORTED_MODULE_0__.traverseObj)(object, _string_dashToCapital__WEBPACK_IMPORTED_MODULE_1__.dashToCapital);
  object = (0,_traverseObj__WEBPACK_IMPORTED_MODULE_0__.traverseObj)(object, _string_underscoreToCapital__WEBPACK_IMPORTED_MODULE_2__.underscoreToCapital);
  return object;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/object/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/object/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeObj": () => (/* reexport safe */ _capitalizeObj__WEBPACK_IMPORTED_MODULE_0__.capitalizeObj),
/* harmony export */   "isObject": () => (/* reexport safe */ _isObject__WEBPACK_IMPORTED_MODULE_1__.isObject),
/* harmony export */   "merge": () => (/* reexport safe */ _merge__WEBPACK_IMPORTED_MODULE_2__.merge),
/* harmony export */   "pick": () => (/* reexport safe */ _pick__WEBPACK_IMPORTED_MODULE_3__.pick),
/* harmony export */   "serialize": () => (/* reexport safe */ _serialize__WEBPACK_IMPORTED_MODULE_4__.serialize),
/* harmony export */   "traverseObj": () => (/* reexport safe */ _traverseObj__WEBPACK_IMPORTED_MODULE_5__.traverseObj)
/* harmony export */ });
/* harmony import */ var _capitalizeObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizeObj */ "./node_modules/widget-utils/src/object/capitalizeObj.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./node_modules/widget-utils/src/object/isObject.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge */ "./node_modules/widget-utils/src/object/merge.js");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick */ "./node_modules/widget-utils/src/object/pick.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialize */ "./node_modules/widget-utils/src/object/serialize.js");
/* harmony import */ var _traverseObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traverseObj */ "./node_modules/widget-utils/src/object/traverseObj.js");







/***/ }),

/***/ "./node_modules/widget-utils/src/object/isObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/widget-utils/src/object/isObject.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
const {
  prototype: {
    toString
  }
} = Object;
const isObject = o => {
  return toString.call(o) === '[object Object]';
};

/***/ }),

/***/ "./node_modules/widget-utils/src/object/merge.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/object/merge.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/widget-utils/src/object/isObject.js");

const {
  keys
} = Object;
/**
 * Merge two objects
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Boolean} isDeep
 * @returns {Object}
 */

const merge = (obj1, obj2, isDeep) => {
  const obj3 = {};
  keys(obj1).forEach(i => {
    if (isDeep && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj1[i])) {
      obj3[i] = merge(obj1[i], {}, true);
    } else {
      obj3[i] = obj1[i];
    }
  });
  keys(obj2).forEach(i => {
    if (isDeep && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj2[i])) {
      obj3[i] = merge(obj3[i] || {}, obj2[i], true);
    } else {
      obj3[i] = obj2[i];
    }
  });
  return obj3;
};

/***/ }),

/***/ "./node_modules/widget-utils/src/object/pick.js":
/*!******************************************************!*\
  !*** ./node_modules/widget-utils/src/object/pick.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pick": () => (/* binding */ pick)
/* harmony export */ });
/**
 * Pick properties from object
 * let a = { name: "Roman", phone: 123, country: "any" };
 * pick(a, 'name', 'country')
 * => { name: "Roman", country: "any" }
 *
 * @param obj {Object}
 * @param args {String}
 * @returns {Object}
 */
const pick = (obj, ...args) => args.reduce((i, t) => {
  const pickedObj = i;
  pickedObj[t] = obj[t];
  return pickedObj;
}, {});

/***/ }),

/***/ "./node_modules/widget-utils/src/object/serialize.js":
/*!***********************************************************!*\
  !*** ./node_modules/widget-utils/src/object/serialize.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": () => (/* binding */ serialize)
/* harmony export */ });
const {
  keys
} = Object; // serialize query params with additional transform function

const serialize = (obj, transform) => {
  const component = keys(obj).map(p => `${transform(encodeURIComponent(p))}=${encodeURIComponent(obj[p])}`);
  return component.join('&');
};

/***/ }),

/***/ "./node_modules/widget-utils/src/object/traverseObj.js":
/*!*************************************************************!*\
  !*** ./node_modules/widget-utils/src/object/traverseObj.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseObj": () => (/* binding */ traverseObj)
/* harmony export */ });
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array/isArray */ "./node_modules/widget-utils/src/array/isArray.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/widget-utils/src/object/isObject.js");


const {
  keys
} = Object;
/**
 * Recursively traverse object own properties and apply transform function on keys or values
 * let a = { lastName: "Roman", firstName: "Khudyakov" }
 * traverseObj(a, toUnderscore)
 * => { last_name: "Roman", first_name: "Khudyakov" }
 *
 * @param obj {Object}
 * @param fnKey {Function | Boolean}
 * @param fnValue {Function | Boolean}
 */

const traverseObj = (obj, fnKey = false, fnValue = false) => {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj)) {
    return obj;
  }

  return keys(obj).reduce((curr, next) => {
    let nextProperty = obj[next];
    const o = curr;

    if ((0,_array_isArray__WEBPACK_IMPORTED_MODULE_1__.isArray)(nextProperty)) {
      nextProperty = nextProperty.map(i => traverseObj(i, fnKey, fnValue));
    }

    if (fnValue) {
      o[fnKey ? fnKey(next) : next] = (0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(nextProperty) ? traverseObj(nextProperty, fnKey, fnValue) : fnValue(nextProperty, next);
    } else {
      o[fnKey ? fnKey(next) : next] = (0,_isObject__WEBPACK_IMPORTED_MODULE_0__.isObject)(nextProperty) ? traverseObj(nextProperty, fnKey) : nextProperty;
    }

    return o;
  }, {});
};

/***/ }),

/***/ "./node_modules/widget-utils/src/string/dashToCapital.js":
/*!***************************************************************!*\
  !*** ./node_modules/widget-utils/src/string/dashToCapital.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashToCapital": () => (/* binding */ dashToCapital)
/* harmony export */ });
const dashToCapital = str => str.replace(/-([a-z])/ig, (s, i) => i.toUpperCase());

/***/ }),

/***/ "./node_modules/widget-utils/src/string/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/widget-utils/src/string/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashToCapital": () => (/* reexport safe */ _dashToCapital__WEBPACK_IMPORTED_MODULE_0__.dashToCapital),
/* harmony export */   "isString": () => (/* reexport safe */ _isString__WEBPACK_IMPORTED_MODULE_1__.isString),
/* harmony export */   "toUnderscore": () => (/* reexport safe */ _toUnderscore__WEBPACK_IMPORTED_MODULE_2__.toUnderscore),
/* harmony export */   "underscoreToCapital": () => (/* reexport safe */ _underscoreToCapital__WEBPACK_IMPORTED_MODULE_3__.underscoreToCapital)
/* harmony export */ });
/* harmony import */ var _dashToCapital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashToCapital */ "./node_modules/widget-utils/src/string/dashToCapital.js");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "./node_modules/widget-utils/src/string/isString.js");
/* harmony import */ var _toUnderscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUnderscore */ "./node_modules/widget-utils/src/string/toUnderscore.js");
/* harmony import */ var _underscoreToCapital__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./underscoreToCapital */ "./node_modules/widget-utils/src/string/underscoreToCapital.js");





/***/ }),

/***/ "./node_modules/widget-utils/src/string/isString.js":
/*!**********************************************************!*\
  !*** ./node_modules/widget-utils/src/string/isString.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": () => (/* binding */ isString)
/* harmony export */ });
const isString = f => {
  return typeof f === 'string';
};

/***/ }),

/***/ "./node_modules/widget-utils/src/string/toUnderscore.js":
/*!**************************************************************!*\
  !*** ./node_modules/widget-utils/src/string/toUnderscore.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toUnderscore": () => (/* binding */ toUnderscore)
/* harmony export */ });
const toUnderscore = str => str.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`);

/***/ }),

/***/ "./node_modules/widget-utils/src/string/underscoreToCapital.js":
/*!*********************************************************************!*\
  !*** ./node_modules/widget-utils/src/string/underscoreToCapital.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "underscoreToCapital": () => (/* binding */ underscoreToCapital)
/* harmony export */ });
const underscoreToCapital = str => str.replace(/_([a-z])/ig, (s, i) => i.toUpperCase());

/***/ }),

/***/ "./node_modules/widget-utils/src/validate.js":
/*!***************************************************!*\
  !*** ./node_modules/widget-utils/src/validate.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/widget-utils/src/is.js");
/* harmony import */ var _math_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/isNumeric */ "./node_modules/widget-utils/src/math/isNumeric.js");

 // Validations

const validate = {
  isBlank(o) {
    return (0,_is__WEBPACK_IMPORTED_MODULE_0__.is)(o);
  },

  isNumeric(o) {
    return (0,_math_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(o);
  },

  isEmail(o) {
    return typeof o === 'string' && (0,_is__WEBPACK_IMPORTED_MODULE_0__.is)(o.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/));
  },

  isBoundedBy(o, min, max) {
    return typeof o === 'number' && o >= min && o <= max;
  }

};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/calendar.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/calendar.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/********************************************************\r\n\r\n    loader\r\n\r\n********************************************************/\n@-webkit-keyframes BookingSyncCalendarWidget__bookingsync-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes BookingSyncCalendarWidget__bookingsync-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.BookingSyncCalendarWidget__calendar::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  content: ''; }\n\n.BookingSyncCalendarWidget__calendar::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30.97'%3E%3Cpath d='M32,15.48a16.52,16.52,0,0,1-1.37,6.28,16.35,16.35,0,0,1-9,8.63,15.87,15.87,0,0,1-17.3-3.78A15.43,15.43,0,0,1,4.72,4.72,15,15,0,0,1,15.49.52a14.76,14.76,0,0,1,10.4,4.56A14.77,14.77,0,0,1,29,9.9a14.45,14.45,0,0,1,.85,3.35h.13A2.06,2.06,0,0,1,32,15.31a.91.91,0,0,1,0,.17ZM28.72,10a14.27,14.27,0,0,0-3.2-4.55,14,14,0,0,0-10-3.9A13.72,13.72,0,0,0,3,10.3a13.43,13.43,0,0,0,.24,10.27,13.05,13.05,0,0,0,12.28,7.82,12.92,12.92,0,0,0,4.88-1.1,12.65,12.65,0,0,0,4.06-2.87,12.48,12.48,0,0,0,2.62-4.15,12.24,12.24,0,0,0,.82-4.79h0a.91.91,0,0,1,0-.17,2.07,2.07,0,0,1,1.84-2.05,14.27,14.27,0,0,0-1-3.26Z' transform='translate(0 -0.51)'/%3E%3C/svg%3E\");\n  height: 20px;\n  width: 20px;\n  margin: -10px 0 0 -10px;\n  content: '';\n  -webkit-animation: BookingSyncCalendarWidget__bookingsync-spin 2s infinite linear;\n  animation: BookingSyncCalendarWidget__bookingsync-spin 2s infinite linear;\n  animation-play-state: paused; }\n\n.BookingSyncCalendarWidget__calendar::before, .BookingSyncCalendarWidget__calendar::after {\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.25s ease-in-out;\n  -o-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out; }\n\n.BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__loading::before, .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__loading::after {\n  opacity: 1;\n  visibility: visible;\n  animation-play-state: running; }\n\n/********************************************************\r\n\r\n    dropdown\r\n\r\n********************************************************/\n.BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic {\n  position: absolute;\n  display: none;\n  max-width: 100%;\n  box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.2);\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  margin: 0;\n  padding: 1em;\n  font-family: inherit;\n  line-height: 1.5em;\n  z-index: 10; }\n  .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic.BookingSyncCalendarWidget__visible {\n    display: block; }\n  .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic .BookingSyncCalendarWidget__caption {\n    margin-bottom: .7em; }\n  .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic .BookingSyncCalendarWidget__forward,\n  .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic .BookingSyncCalendarWidget__back {\n    top: 1em;\n    left: 1em; }\n  .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__dropBasic .BookingSyncCalendarWidget__forward {\n    left: auto;\n    right: 1em; }\n\n/********************************************************\r\n\r\n    colors\r\n\r\n********************************************************/\n.BookingSyncCalendarWidget__calendar {\n  position: relative;\n  font: 1rem/1.4 Helvetica, Arial, sans-serif;\n  position: relative;\n  background: #fff; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__caption {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    line-height: 2rem;\n    font-weight: 700;\n    margin-bottom: 2.3em;\n    padding-top: 0;\n    text-align: center; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__monthsWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    gap: 2em; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__mCell {\n    font-size: 0.875em;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%; }\n    @media only screen and (max-width: 990px) {\n      .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__mCell {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__month {\n    border-collapse: separate;\n    border-spacing: 0 0.2em;\n    padding: 0;\n    margin: 0;\n    width: 100%; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__tableHeader,\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__body {\n    margin: 0; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__th {\n    font-size: 0.85em;\n    color: #aaaaaa;\n    height: 25px;\n    width: 30px;\n    text-align: center; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell {\n    text-align: center;\n    padding: 0;\n    position: relative;\n    border: 0;\n    vertical-align: middle;\n    color: #444444;\n    background-clip: padding-box;\n    overflow: hidden;\n    width: 30px; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell:first-child {\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell:last-child {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell::before, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell::after {\n      position: absolute;\n      top: 0;\n      display: block;\n      height: 100%;\n      width: 100%;\n      margin: 0;\n      content: '';\n      -webkit-transform: skew(-30deg);\n      -ms-transform: skew(-30deg);\n      transform: skew(-30deg);\n      border-radius: 4px;\n      z-index: 0; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell::before {\n      left: -55%; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell::after {\n      left: 55%; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell.BookingSyncCalendarWidget__today {\n      font-weight: bold; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cnt {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    z-index: 1;\n    font-size: 1em;\n    font-weight: inherit; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cnt::after {\n      content: '';\n      display: block;\n      margin-top: 100%; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__info {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 0.65em;\n    padding: 1px 3px;\n    color: rgba(60, 60, 60, 0.5);\n    right: 0; }\n    .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__info > span {\n      display: block;\n      text-align: center; }\n\n.BookingSyncCalendarWidget__focus,\n.BookingSyncCalendarWidget__selected,\n.BookingSyncCalendarWidget__reversed,\n.BookingSyncCalendarWidget__direct,\n.BookingSyncCalendarWidget__selectingReversed,\n.BookingSyncCalendarWidget__selectingDirect,\n.BookingSyncCalendarWidget__actionsEnabled,\n.BookingSyncCalendarWidget__highlighted,\n.BookingSyncCalendarWidget__invalid {\n  color: inherit; }\n\n/********************************************************\r\n\r\n    selections, start and ends\r\n\r\n********************************************************/\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabledStart::after {\n  background: var(--bookingsync-calendar-disabled-bg-color, #f0f0f0); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabled {\n  background: var(--bookingsync-calendar-disabled-bg-color, #f0f0f0); }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabled::before, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabled::after {\n    display: none; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabledEnd::before {\n  background: var(--bookingsync-calendar-disabled-bg-color, #f0f0f0); }\n\n.BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__disabledStart, .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__disabled, .BookingSyncCalendarWidget__calendar.BookingSyncCalendarWidget__disabledEnd {\n  color: var(--bookingsync-calendar-disabled-color, #bfbfbf); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selectedStart::after {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected::before, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected::after {\n    display: none; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selectedEnd::before {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selectedStart, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selectedEnd {\n  color: var(--bookingsync-calendar-highlighted-color, #373737); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selectedStart::after {\n  background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selected {\n  background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selected::before, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selected::after {\n    display: none; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selectedEnd::before {\n  background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selectedStart, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selected, .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__selectedEnd {\n  color: var(--bookingsync-calendar-invalid-color, #b2b2b2); }\n\n.BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__cell:not(.BookingSyncCalendarWidget__highlighted):not(.BookingSyncCalendarWidget__invalid):hover::after {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover {\n  background: none; }\n  .BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover::before, .BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover::after {\n    display: block;\n    background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__highlighted:not(.BookingSyncCalendarWidget__selectedStart):not(.BookingSyncCalendarWidget__selectedEnd):hover::before {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__invalid:hover::before {\n  background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n\n.BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover {\n  background: none; }\n  .BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover::before {\n    display: block;\n    background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n  .BookingSyncCalendarWidget__direct .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover::after {\n    display: block;\n    background: var(--bookingsync-calendar-disabled-bg-color, #f0f0f0); }\n\n.BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__cell:not(.BookingSyncCalendarWidget__highlighted):not(.BookingSyncCalendarWidget__invalid):hover::before {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover {\n  background: none; }\n  .BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover::before, .BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover::after {\n    display: block;\n    background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__highlighted:not(.BookingSyncCalendarWidget__selectedStart):not(.BookingSyncCalendarWidget__selectedEnd):hover::after {\n  background: var(--bookingsync-calendar-highlighted-bg-color, #b7cafb); }\n\n.BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__invalid:hover::after {\n  background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n\n.BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover {\n  background: none; }\n  .BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover::after {\n    display: block;\n    background: var(--bookingsync-calendar-invalid-bg-color, #e3e3e3); }\n  .BookingSyncCalendarWidget__reversed .BookingSyncCalendarWidget__invalid.BookingSyncCalendarWidget__disabled:hover::before {\n    display: block;\n    background: var(--bookingsync-calendar-disabled-bg-color, #f0f0f0); }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__cell:not(.BookingSyncCalendarWidget__highlighted):not(.BookingSyncCalendarWidget__invalid):hover * {\n  cursor: pointer; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted.BookingSyncCalendarWidget__selected:hover * {\n  cursor: pointer; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__highlighted:not(.BookingSyncCalendarWidget__selectedStart):not(.BookingSyncCalendarWidget__selectedEnd):hover * {\n  cursor: pointer; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__invalid:hover * {\n  cursor: not-allowed; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__disabled:hover * {\n  cursor: not-allowed !important; }\n\n/********************************************************\r\n\r\n    buttons\r\n\r\n********************************************************/\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 2rem;\n  width: 23px;\n  fill: #444444;\n  padding: 0;\n  border-radius: 1px;\n  cursor: pointer;\n  z-index: 2; }\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward svg,\n  .BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back svg {\n    height: inherit;\n    width: inherit; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward {\n  right: 0;\n  left: auto; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward:active,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward:focus,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back:active,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back:focus {\n  outline: none; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward:hover,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back:hover {\n  fill: #3895d9; }\n\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward[disabled],\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__forward[disabled]:hover,\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back[disabled],\n.BookingSyncCalendarWidget__calendar .BookingSyncCalendarWidget__back[disabled]:hover {\n  opacity: 0.5;\n  cursor: default;\n  fill: #444444; }\n", "",{"version":3,"sources":["webpack://./src/styles/loading.scss","webpack://./src/styles/calendar.scss","webpack://./src/styles/svg-uri.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/drop.scss"],"names":[],"mappings":"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","sourcesContent":["/********************************************************\r\n\r\n    loader\r\n\r\n********************************************************/\r\n\r\n@-webkit-keyframes bookingsync-spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes bookingsync-spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.calendar {\r\n  &::before {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(#fff, .7);\r\n    content: '';\r\n  }\r\n\r\n  &::after {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    background-image: $icon-spinner-svg;\r\n    height: 20px;\r\n    width: 20px;\r\n    margin: -10px 0 0 -10px;\r\n    content: '';\r\n    -webkit-animation: bookingsync-spin 2s infinite linear;\r\n    animation: bookingsync-spin 2s infinite linear;\r\n    animation-play-state: paused;\r\n  }\r\n\r\n  &::before,\r\n  &::after {\r\n    z-index: 1000;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    -webkit-transition: $transition;\r\n    -o-transition: $transition;\r\n    transition: $transition;\r\n  }\r\n\r\n  &.loading {\r\n    &::before,\r\n    &::after {\r\n      opacity: 1;\r\n      visibility: visible;\r\n      animation-play-state: running;\r\n    }\r\n  }\r\n}\r\n","@import 'svg-uri';\r\n@import 'variables';\r\n@import 'loading';\r\n@import 'drop';\r\n\r\n/********************************************************\r\n\r\n    colors\r\n\r\n********************************************************/\r\n\r\n.calendar {\r\n  position: relative;\r\n  font: 1rem/1.4 Helvetica, Arial, sans-serif;\r\n  position: relative;\r\n  background: $calendar-bg-color;\r\n\r\n  .caption {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    line-height: 2rem;\r\n    font-weight: 700;\r\n    margin-bottom: 2.3em;\r\n    padding-top: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  .monthsWrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    gap: 2em;\r\n  }\r\n\r\n  .mCell {\r\n    font-size: 0.875em;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 25%;\r\n    flex: 1 1 25%;\r\n\r\n    @media only screen and (max-width: 990px) {\r\n      -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 100%;\r\n      flex: 1 1 100%;\r\n    }\r\n  }\r\n\r\n  .month {\r\n    border-collapse: separate;\r\n    border-spacing: 0 0.2em;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    \r\n  }\r\n\r\n  .tableHeader,\r\n  .body {\r\n    margin: 0;\r\n  }\r\n\r\n  .th {\r\n    font-size: 0.85em;\r\n    color: $th-color;\r\n    height: 25px;\r\n    width: $cell-width;\r\n    text-align: center;\r\n  }\r\n\r\n  .cell {\r\n    text-align: center;\r\n    padding: 0;\r\n    position: relative;\r\n    border: 0;\r\n    vertical-align: middle;\r\n    color: $cell-color;\r\n    background-clip: padding-box;\r\n    overflow: hidden;\r\n    width: $cell-width;\r\n\r\n    &:first-child {\r\n      border-top-left-radius: 4px;\r\n      border-bottom-left-radius: 4px;\r\n    }\r\n\r\n    &:last-child {\r\n      border-top-right-radius: 4px;\r\n      border-bottom-right-radius: 4px;\r\n    }\r\n\r\n    &::before,\r\n    &::after {\r\n    position: absolute;\r\n    top: 0;\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    content: '';\r\n    -webkit-transform: skew(-30deg);\r\n    -ms-transform: skew(-30deg);\r\n    transform: skew(-30deg);\r\n    border-radius: 4px;\r\n    z-index: 0;\r\n    }\r\n\r\n    &::before {\r\n    left: -55%;\r\n    }\r\n\r\n    &::after {\r\n    left: 55%;\r\n    }\r\n\r\n    &.today {\r\n      font-weight: bold;\r\n    }\r\n  }\r\n\r\n  .cnt {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    z-index: 1;\r\n    font-size: 1em;\r\n    font-weight: inherit;\r\n\r\n    &::after {\r\n    content: '';\r\n    display: block;\r\n    margin-top: 100%;\r\n    }\r\n  }\r\n\r\n  .info {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-size: 0.65em;\r\n    padding: 1px 3px;\r\n    color: $info-color;\r\n    right: 0;\r\n\r\n    > span {\r\n      display: block;\r\n      text-align: center;\r\n    }\r\n  }\r\n}\r\n\r\n.focus,\r\n.selected,\r\n.reversed,\r\n.direct,\r\n.selectingReversed,\r\n.selectingDirect,\r\n.actionsEnabled,\r\n.highlighted,\r\n.invalid {\r\n  color: inherit;\r\n}\r\n\r\n/********************************************************\r\n\r\n    selections, start and ends\r\n\r\n********************************************************/\r\n\r\n// cells disabled\r\n\r\n.calendar {\r\n  .disabledStart {\r\n    &::after {\r\n      background: var(--bookingsync-calendar-disabled-bg-color, $disabled-bg-color);\r\n    }\r\n  }\r\n\r\n  .disabled {\r\n    background: var(--bookingsync-calendar-disabled-bg-color, $disabled-bg-color);\r\n\r\n    &::before,\r\n    &::after {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .disabledEnd {\r\n    &::before {\r\n      background: var(--bookingsync-calendar-disabled-bg-color, $disabled-bg-color);\r\n    }\r\n  }\r\n\r\n  &.disabledStart,\r\n  &.disabled,\r\n  &.disabledEnd {\r\n    color: var(--bookingsync-calendar-disabled-color, $disabled-color);\r\n  }\r\n}\r\n\r\n// cells highlighted\r\n\r\n.calendar {\r\n  .highlighted {\r\n    &.selectedStart {\r\n      &::after {\r\n        background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n      }\r\n    }\r\n  \r\n    &.selected {\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n  \r\n      &::before,\r\n      &::after {\r\n        display: none;\r\n      }\r\n    }\r\n  \r\n    &.selectedEnd {\r\n      &::before {\r\n        background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n      }\r\n    }\r\n\r\n    &.selectedStart,\r\n    &.selected,\r\n    &.selectedEnd {\r\n      color: var(--bookingsync-calendar-highlighted-color, $highlighted-color);\r\n    }\r\n  }\r\n}\r\n\r\n// cells invalid\r\n\r\n.calendar {\r\n  .invalid {\r\n    &.selectedStart {\r\n      &::after {\r\n        background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n      }\r\n    }\r\n  \r\n    &.selected {\r\n      background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n  \r\n      &::before,\r\n      &::after {\r\n        display: none;\r\n      }\r\n    }\r\n  \r\n    &.selectedEnd {\r\n      &::before {\r\n        background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n      }\r\n    }\r\n\r\n    &.selectedStart,\r\n    &.selected,\r\n    &.selectedEnd {\r\n      color: var(--bookingsync-calendar-invalid-color, $invalid-color);\r\n    }\r\n  }\r\n}\r\n\r\n// cell hover direct\r\n\r\n.direct {\r\n  .cell:not(.highlighted):not(.invalid):hover {\r\n    &::after {\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n\r\n  .highlighted.selected:hover {\r\n    background: none;\r\n\r\n    &::before,\r\n    &::after {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n\r\n  .highlighted:not(.selectedStart):not(.selectedEnd):hover {\r\n    &::before {\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n  \r\n  .invalid:hover {\r\n    &::before {\r\n      background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n    }\r\n  }\r\n\r\n  .invalid.disabled:hover {\r\n    background: none;\r\n\r\n    &::before {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n    }\r\n\r\n    &::after {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-disabled-bg-color, $disabled-bg-color);\r\n    }\r\n  }\r\n}\r\n\r\n// cell hover reversed\r\n\r\n.reversed {\r\n  .cell:not(.highlighted):not(.invalid):hover {\r\n    &::before {\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n\r\n  .highlighted.selected:hover {\r\n    background: none;\r\n\r\n    &::before,\r\n    &::after {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n\r\n  .highlighted:not(.selectedStart):not(.selectedEnd):hover {\r\n    &::after {\r\n      background: var(--bookingsync-calendar-highlighted-bg-color, $highlighted-bg-color);\r\n    }\r\n  }\r\n  \r\n  .invalid:hover {\r\n    &::after {\r\n      background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n    }\r\n  }\r\n\r\n  .invalid.disabled:hover {\r\n    background: none;\r\n\r\n    &::after {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-invalid-bg-color, $invalid-bg-color);\r\n    }\r\n\r\n    &::before {\r\n      display: block;\r\n      background: var(--bookingsync-calendar-disabled-bg-color, $disabled-bg-color);\r\n    }\r\n  }\r\n}\r\n\r\n// cell hover cursor\r\n\r\n.calendar {\r\n  .cell:not(.highlighted):not(.invalid):hover {\r\n    * {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  .highlighted.selected:hover {\r\n    * {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  .highlighted:not(.selectedStart):not(.selectedEnd):hover {\r\n    * {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  \r\n  .invalid:hover {\r\n    * {\r\n      cursor: not-allowed;\r\n    }\r\n  }\r\n\r\n  .disabled:hover {\r\n    * {\r\n      cursor: not-allowed !important;\r\n    }\r\n  }\r\n}\r\n\r\n/********************************************************\r\n\r\n    buttons\r\n\r\n********************************************************/\r\n.calendar {\r\n\r\n  .forward,\r\n  .back {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 2rem;\r\n    width: 23px;\r\n    fill: $btn-fill;\r\n    padding: 0;\r\n    border-radius: 1px;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n\r\n    svg {\r\n    height: inherit;\r\n    width: inherit;\r\n    }\r\n  }\r\n\r\n  .forward {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n\r\n  .forward:active,\r\n  .forward:focus,\r\n  .back:active,\r\n  .back:focus {\r\n    outline: none;\r\n  }\r\n\r\n  .forward:hover,\r\n  .back:hover {\r\n    fill: $btn-fill-hover;\r\n  }\r\n\r\n  .forward[disabled],\r\n  .forward[disabled]:hover,\r\n  .back[disabled],\r\n  .back[disabled]:hover {\r\n    opacity: 0.5;\r\n    cursor: default;\r\n    fill: $btn-fill;\r\n  }\r\n}\r\n","////\r\n/// Helper function to easily use an SVG inline in CSS\r\n/// without encoding it to base64, saving bytes.\r\n/// It also helps with browser support.\r\n////\r\n\r\n/// A small function allowing skipping base64 encoding\r\n/// and simply pasting the SVG markup right in the CSS.\r\n/// @author Jakob Eriksen\r\n/// @link http://codepen.io/jakob-e/pen/doMoML\r\n/// @param {String} $svg - SVG image to encode\r\n/// @return {String} - Encoded SVG data uri\r\n@function svg-uri($svg) {\r\n    $encoded: '';\r\n    $slice: 2000;\r\n    $index: 0;\r\n    $loops: ceil(str-length($svg) / $slice);\r\n\r\n    @for $i from 1 through $loops {\r\n        $chunk: str-slice($svg, $index, $index + $slice - 1);\r\n        $chunk: str-replace($chunk, '\"', \"'\");\r\n        $chunk: str-replace($chunk, '<', '%3C');\r\n        $chunk: str-replace($chunk, '>', '%3E');\r\n        $chunk: str-replace($chunk, '&', '%26');\r\n        $chunk: str-replace($chunk, '#', '%23');\r\n        $encoded: #{$encoded}#{$chunk};\r\n        $index: $index + $slice;\r\n    }\r\n\r\n    @return url(\"data:image/svg+xml;charset=utf8,#{$encoded}\");\r\n}\r\n\r\n/// Replace `$search` with `$replace` in `$string`\r\n/// @author Hugo Giraudel\r\n/// @link http://sassmeister.com/gist/1b4f2da5527830088e4d\r\n/// @param {String} $string - Initial string\r\n/// @param {String} $search - Substring to replace\r\n/// @param {String} $replace ('') - New value\r\n/// @return {String} - Updated string\r\n@function str-replace($string, $search, $replace: '') {\r\n    $index: str-index($string, $search);\r\n\r\n    @if $index {\r\n        @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\r\n    }\r\n\r\n    @return $string;\r\n}\r\n","$icon-spinner-svg:      svg-uri(\"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30.97'><path d='M32,15.48a16.52,16.52,0,0,1-1.37,6.28,16.35,16.35,0,0,1-9,8.63,15.87,15.87,0,0,1-17.3-3.78A15.43,15.43,0,0,1,4.72,4.72,15,15,0,0,1,15.49.52a14.76,14.76,0,0,1,10.4,4.56A14.77,14.77,0,0,1,29,9.9a14.45,14.45,0,0,1,.85,3.35h.13A2.06,2.06,0,0,1,32,15.31a.91.91,0,0,1,0,.17ZM28.72,10a14.27,14.27,0,0,0-3.2-4.55,14,14,0,0,0-10-3.9A13.72,13.72,0,0,0,3,10.3a13.43,13.43,0,0,0,.24,10.27,13.05,13.05,0,0,0,12.28,7.82,12.92,12.92,0,0,0,4.88-1.1,12.65,12.65,0,0,0,4.06-2.87,12.48,12.48,0,0,0,2.62-4.15,12.24,12.24,0,0,0,.82-4.79h0a.91.91,0,0,1,0-.17,2.07,2.07,0,0,1,1.84-2.05,14.27,14.27,0,0,0-1-3.26Z' transform='translate(0 -0.51)'/></svg>\");\r\n\r\n$breakpoint-xs:         900px;\r\n\r\n$transition:            all 0.25s ease-in-out;\r\n\r\n// calendar\r\n\r\n$calendar-bg-color:     #fff;\r\n\r\n// calendar cells\r\n\r\n$cell-width:            30px;\r\n\r\n$cell-color:            #444444;\r\n\r\n$disabled-bg-color:     #f0f0f0;\r\n$disabled-color:        #bfbfbf;\r\n\r\n$highlighted-bg-color:  lighten(#5784F5, 20%);\r\n$highlighted-color:     darken($cell-color, 5%);\r\n\r\n$invalid-bg-color:      darken($disabled-bg-color,  5%);\r\n$invalid-color:         darken($disabled-color, 5%);\r\n\r\n// calendar table\r\n\r\n$info-color:            rgba(60, 60, 60, 0.5);\r\n\r\n$th-border-bottom:      #cbcbcb;\r\n$th-color:              #aaaaaa;\r\n\r\n// form\r\n\r\n$btn-fill:              $cell-color;\r\n$btn-border:            $th-border-bottom;\r\n$btn-fill-hover:        #3895d9;\r\n","/********************************************************\r\n\r\n    dropdown\r\n\r\n********************************************************/\r\n\r\n.calendar.dropBasic {\r\n  position: absolute;\r\n  display: none;\r\n  max-width: 100%;\r\n  box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.2);\r\n  border: 1px solid #e0e0e0;\r\n  background: #fff;\r\n  margin: 0;\r\n  padding: 1em;\r\n  font-family: inherit;\r\n  line-height: 1.5em;\r\n  z-index: 10;\r\n\r\n  &.visible {\r\n    display: block;\r\n  }\r\n\r\n  .caption {\r\n    margin-bottom: .7em;\r\n  }\r\n\r\n  .forward,\r\n  .back {\r\n    top: 1em;\r\n    left: 1em;\r\n  }\r\n\r\n  .forward {\r\n    left: auto;\r\n    right: 1em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"calendar": "BookingSyncCalendarWidget__calendar",
	"bookingsync-spin": "BookingSyncCalendarWidget__bookingsync-spin",
	"loading": "BookingSyncCalendarWidget__loading",
	"dropBasic": "BookingSyncCalendarWidget__dropBasic",
	"visible": "BookingSyncCalendarWidget__visible",
	"caption": "BookingSyncCalendarWidget__caption",
	"forward": "BookingSyncCalendarWidget__forward",
	"back": "BookingSyncCalendarWidget__back",
	"monthsWrapper": "BookingSyncCalendarWidget__monthsWrapper",
	"mCell": "BookingSyncCalendarWidget__mCell",
	"month": "BookingSyncCalendarWidget__month",
	"tableHeader": "BookingSyncCalendarWidget__tableHeader",
	"body": "BookingSyncCalendarWidget__body",
	"th": "BookingSyncCalendarWidget__th",
	"cell": "BookingSyncCalendarWidget__cell",
	"today": "BookingSyncCalendarWidget__today",
	"cnt": "BookingSyncCalendarWidget__cnt",
	"info": "BookingSyncCalendarWidget__info",
	"focus": "BookingSyncCalendarWidget__focus",
	"selected": "BookingSyncCalendarWidget__selected",
	"reversed": "BookingSyncCalendarWidget__reversed",
	"direct": "BookingSyncCalendarWidget__direct",
	"selectingReversed": "BookingSyncCalendarWidget__selectingReversed",
	"selectingDirect": "BookingSyncCalendarWidget__selectingDirect",
	"actionsEnabled": "BookingSyncCalendarWidget__actionsEnabled",
	"highlighted": "BookingSyncCalendarWidget__highlighted",
	"invalid": "BookingSyncCalendarWidget__invalid",
	"disabledStart": "BookingSyncCalendarWidget__disabledStart",
	"disabled": "BookingSyncCalendarWidget__disabled",
	"disabledEnd": "BookingSyncCalendarWidget__disabledEnd",
	"selectedStart": "BookingSyncCalendarWidget__selectedStart",
	"selectedEnd": "BookingSyncCalendarWidget__selectedEnd"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/widget-utils/src/styles/reset.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/widget-utils/src/styles/reset.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".BookingSyncWidgetUtils__reset div, .BookingSyncWidgetUtils__reset span, .BookingSyncWidgetUtils__reset applet, .BookingSyncWidgetUtils__reset object, .BookingSyncWidgetUtils__reset iframe, .BookingSyncWidgetUtils__reset h1, .BookingSyncWidgetUtils__reset h2, .BookingSyncWidgetUtils__reset h3, .BookingSyncWidgetUtils__reset h4, .BookingSyncWidgetUtils__reset h5, .BookingSyncWidgetUtils__reset h6, .BookingSyncWidgetUtils__reset p, .BookingSyncWidgetUtils__reset blockquote, .BookingSyncWidgetUtils__reset pre, .BookingSyncWidgetUtils__reset a,\n.BookingSyncWidgetUtils__reset abbr, .BookingSyncWidgetUtils__reset acronym, .BookingSyncWidgetUtils__reset address, .BookingSyncWidgetUtils__reset big, .BookingSyncWidgetUtils__reset cite, .BookingSyncWidgetUtils__reset code, .BookingSyncWidgetUtils__reset del, .BookingSyncWidgetUtils__reset dfn, .BookingSyncWidgetUtils__reset em, .BookingSyncWidgetUtils__reset img, .BookingSyncWidgetUtils__reset ins, .BookingSyncWidgetUtils__reset kbd, .BookingSyncWidgetUtils__reset q, .BookingSyncWidgetUtils__reset s, .BookingSyncWidgetUtils__reset samp,\n.BookingSyncWidgetUtils__reset small, .BookingSyncWidgetUtils__reset strike, .BookingSyncWidgetUtils__reset strong, .BookingSyncWidgetUtils__reset sub, .BookingSyncWidgetUtils__reset sup, .BookingSyncWidgetUtils__reset tt, .BookingSyncWidgetUtils__reset var, .BookingSyncWidgetUtils__reset b, .BookingSyncWidgetUtils__reset u, .BookingSyncWidgetUtils__reset i, .BookingSyncWidgetUtils__reset center, .BookingSyncWidgetUtils__reset dl, .BookingSyncWidgetUtils__reset dt, .BookingSyncWidgetUtils__reset dd, .BookingSyncWidgetUtils__reset ol, .BookingSyncWidgetUtils__reset ul, .BookingSyncWidgetUtils__reset li,\n.BookingSyncWidgetUtils__reset fieldset, .BookingSyncWidgetUtils__reset form, .BookingSyncWidgetUtils__reset div.BookingSyncWidgetUtils__form, .BookingSyncWidgetUtils__reset label, .BookingSyncWidgetUtils__reset legend, .BookingSyncWidgetUtils__reset table, .BookingSyncWidgetUtils__reset caption, .BookingSyncWidgetUtils__reset tbody, .BookingSyncWidgetUtils__reset tfoot, .BookingSyncWidgetUtils__reset thead, .BookingSyncWidgetUtils__reset tr,\n.BookingSyncWidgetUtils__reset th, .BookingSyncWidgetUtils__reset td, .BookingSyncWidgetUtils__reset article, .BookingSyncWidgetUtils__reset aside, .BookingSyncWidgetUtils__reset canvas, .BookingSyncWidgetUtils__reset details, .BookingSyncWidgetUtils__reset figcaption, .BookingSyncWidgetUtils__reset figure, .BookingSyncWidgetUtils__reset footer, .BookingSyncWidgetUtils__reset header, .BookingSyncWidgetUtils__reset hgroup,\n.BookingSyncWidgetUtils__reset menu, .BookingSyncWidgetUtils__reset nav, .BookingSyncWidgetUtils__reset section, .BookingSyncWidgetUtils__reset summary, .BookingSyncWidgetUtils__reset time, .BookingSyncWidgetUtils__reset mark, .BookingSyncWidgetUtils__reset audio, .BookingSyncWidgetUtils__reset video, .BookingSyncWidgetUtils__reset button, .BookingSyncWidgetUtils__reset textarea, .BookingSyncWidgetUtils__reset input, .BookingSyncWidgetUtils__reset .BookingSyncWidgetUtils__button, .BookingSyncWidgetUtils__reset .BookingSyncWidgetUtils__legend {\n  font-family: \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size-adjust: none;\n  font-size: 100%;\n  font-style: normal;\n  letter-spacing: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font: normal normal 100% \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: left;\n  -moz-text-align-last: initial;\n  text-align-last: initial;\n  text-decoration: none;\n  -webkit-text-emphasis: none;\n  text-emphasis: none;\n  text-height: auto;\n  text-indent: 0;\n  text-justify: auto;\n  text-outline: none;\n  text-shadow: none;\n  text-transform: none;\n  text-wrap: normal;\n  alignment-adjust: auto;\n  alignment-baseline: baseline;\n  -webkit-animation: none 0 ease 0 1 normal;\n  animation: none 0 ease 0 1 normal;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n  appearance: normal;\n  azimuth: center;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  background: none 0 0 auto repeat scroll padding-box transparent;\n  background-color: transparent;\n  background-image: none;\n  baseline-shift: baseline;\n  binding: none;\n  bleed: 6pt;\n  bookmark-label: content();\n  bookmark-level: none;\n  bookmark-state: open;\n  bookmark-target: none;\n  border: 0 none transparent;\n  border-radius: 0;\n  bottom: auto;\n  box-align: stretch;\n  -webkit-box-decoration-break: slice;\n  box-decoration-break: slice;\n  box-direction: normal;\n  flex: 0.0;\n  flex-group: 1;\n  box-lines: single;\n  box-ordinal-group: 1;\n  box-orient: inline-axis;\n  box-pack: start;\n  box-shadow: none;\n  box-sizing: content-box;\n  -webkit-break-after: auto;\n  -moz-break-after: auto;\n  break-after: auto;\n  -webkit-break-before: auto;\n  -moz-break-before: auto;\n  break-before: auto;\n  -webkit-column-break-inside: auto;\n  page-break-inside: auto;\n  break-inside: auto;\n  caption-side: top;\n  clear: none;\n  clip: auto;\n  color: inherit;\n  color-profile: auto;\n  -webkit-column-count: auto;\n  -moz-column-count: auto;\n  column-count: auto;\n  -webkit-column-fill: balance;\n  -moz-column-fill: balance;\n  column-fill: balance;\n  -webkit-column-gap: normal;\n  -moz-column-gap: normal;\n  column-gap: normal;\n  -webkit-column-rule: medium medium #1f1f1f;\n  -moz-column-rule: medium medium #1f1f1f;\n  column-rule: medium medium #1f1f1f;\n  -webkit-column-span: 1;\n  -moz-column-span: 1;\n  column-span: 1;\n  -webkit-column-width: auto;\n  -moz-column-width: auto;\n  column-width: auto;\n  -webkit-columns: auto auto;\n  -moz-columns: auto auto;\n  columns: auto auto;\n  content: normal;\n  counter-increment: none;\n  counter-reset: none;\n  crop: auto;\n  cursor: auto;\n  direction: ltr;\n  display: inline;\n  dominant-baseline: auto;\n  drop-initial-after-adjust: text-after-edge;\n  drop-initial-after-align: baseline;\n  drop-initial-before-adjust: text-before-edge;\n  drop-initial-before-align: caps-height;\n  drop-initial-size: auto;\n  drop-initial-value: initial;\n  elevation: level;\n  empty-cells: show;\n  fit: fill;\n  fit-position: 0% 0%;\n  float: none;\n  float-offset: 0 0;\n  grid-columns: none;\n  grid-rows: none;\n  hanging-punctuation: none;\n  height: auto;\n  hyphenate-after: auto;\n  hyphenate-before: auto;\n  hyphenate-character: auto;\n  hyphenate-lines: no-limit;\n  hyphenate-resource: none;\n  -webkit-hyphens: manual;\n  -moz-hyphens: manual;\n  -ms-hyphens: manual;\n  hyphens: manual;\n  icon: auto;\n  image-orientation: auto;\n  image-rendering: auto;\n  image-resolution: normal;\n  inline-box-align: last;\n  left: auto;\n  line-height: inherit;\n  line-stacking: inline-line-height exclude-ruby consider-shifts;\n  list-style: disc outside none;\n  margin: 0;\n  marks: none;\n  marquee-direction: forward;\n  marquee-loop: 1;\n  marquee-play-count: 1;\n  marquee-speed: normal;\n  marquee-style: scroll;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  move-to: normal;\n  nav-down: auto;\n  nav-index: auto;\n  nav-left: auto;\n  nav-right: auto;\n  nav-up: auto;\n  opacity: 1;\n  orphans: 2;\n  outline: invert none medium;\n  outline-offset: 0;\n  overflow: visible;\n  overflow-style: auto;\n  padding: 0;\n  page: auto;\n  page-break-after: auto;\n  page-break-before: auto;\n  page-break-inside: auto;\n  page-policy: start;\n  -webkit-perspective: none;\n  perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  position: static;\n  presentation-level: 0;\n  punctuation-trim: none;\n  quotes: none;\n  rendering-intent: auto;\n  resize: none;\n  right: auto;\n  rotation: 0;\n  rotation-point: 50% 50%;\n  ruby-align: auto;\n  ruby-overhang: none;\n  ruby-position: before;\n  ruby-span: none;\n  size: auto;\n  string-set: none;\n  table-layout: auto;\n  top: auto;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transform-origin: 50% 50% 0;\n  -ms-transform-origin: 50% 50% 0;\n  transform-origin: 50% 50% 0;\n  -webkit-transform-style: flat;\n  transform-style: flat;\n  transition: all 0 ease 0;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  white-space: normal;\n  white-space-collapse: collapse;\n  widows: 2;\n  width: auto;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  z-index: auto;\n  text-align: start;\n  /* And disable MS gradients */\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.BookingSyncWidgetUtils__reset address, .BookingSyncWidgetUtils__reset blockquote, .BookingSyncWidgetUtils__reset dd, .BookingSyncWidgetUtils__reset div, .BookingSyncWidgetUtils__reset dl, .BookingSyncWidgetUtils__reset dt, .BookingSyncWidgetUtils__reset fieldset, .BookingSyncWidgetUtils__reset form, .BookingSyncWidgetUtils__reset div.BookingSyncWidgetUtils__form, .BookingSyncWidgetUtils__reset frame, .BookingSyncWidgetUtils__reset frameset, .BookingSyncWidgetUtils__reset h1, .BookingSyncWidgetUtils__reset h2, .BookingSyncWidgetUtils__reset h3, .BookingSyncWidgetUtils__reset h4, .BookingSyncWidgetUtils__reset h5, .BookingSyncWidgetUtils__reset h6, .BookingSyncWidgetUtils__reset noframes, .BookingSyncWidgetUtils__reset ol, .BookingSyncWidgetUtils__reset p, .BookingSyncWidgetUtils__reset ul, .BookingSyncWidgetUtils__reset center, .BookingSyncWidgetUtils__reset dir, .BookingSyncWidgetUtils__reset hr, .BookingSyncWidgetUtils__reset menu, .BookingSyncWidgetUtils__reset pre, .BookingSyncWidgetUtils__reset article, .BookingSyncWidgetUtils__reset aside, .BookingSyncWidgetUtils__reset canvas, .BookingSyncWidgetUtils__reset details, .BookingSyncWidgetUtils__reset figcaption, .BookingSyncWidgetUtils__reset figure, .BookingSyncWidgetUtils__reset footer, .BookingSyncWidgetUtils__reset header, .BookingSyncWidgetUtils__reset hgroup, .BookingSyncWidgetUtils__reset menu, .BookingSyncWidgetUtils__reset nav, .BookingSyncWidgetUtils__reset section, .BookingSyncWidgetUtils__reset summary {\n  display: block; }\n\n.BookingSyncWidgetUtils__reset li {\n  display: list-item; }\n\n.BookingSyncWidgetUtils__reset table {\n  display: table; }\n\n.BookingSyncWidgetUtils__reset tr {\n  display: table-row; }\n\n.BookingSyncWidgetUtils__reset thead {\n  display: table-header-group; }\n\n.BookingSyncWidgetUtils__reset tbody {\n  display: table-row-group; }\n\n.BookingSyncWidgetUtils__reset tfoot {\n  display: table-footer-group; }\n\n.BookingSyncWidgetUtils__reset col {\n  display: table-column; }\n\n.BookingSyncWidgetUtils__reset colgroup {\n  display: table-column-group; }\n\n.BookingSyncWidgetUtils__reset td, .BookingSyncWidgetUtils__reset th {\n  display: table-cell; }\n\n.BookingSyncWidgetUtils__reset caption {\n  display: table-caption; }\n\n.BookingSyncWidgetUtils__reset input, .BookingSyncWidgetUtils__reset select {\n  display: inline-block; }\n\n.BookingSyncWidgetUtils__reset b, .BookingSyncWidgetUtils__reset strong {\n  font-weight: bold; }\n\n.BookingSyncWidgetUtils__reset b > i, .BookingSyncWidgetUtils__reset strong > i, .BookingSyncWidgetUtils__reset b > em, .BookingSyncWidgetUtils__reset strong > em {\n  font-weight: bold;\n  font-style: italic; }\n\n.BookingSyncWidgetUtils__reset i > b, .BookingSyncWidgetUtils__reset i > strong {\n  font-weight: bold;\n  font-style: italic; }\n\n.BookingSyncWidgetUtils__reset em > b, .BookingSyncWidgetUtils__reset em > strong {\n  font-weight: bold;\n  font-style: italic; }\n\n.BookingSyncWidgetUtils__reset textarea, .BookingSyncWidgetUtils__reset input {\n  cursor: text; }\n", "",{"version":3,"sources":["webpack://./node_modules/widget-utils/src/styles/reset.scss"],"names":[],"mappings":"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","sourcesContent":[".reset {\r\n\tdiv, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,\r\n\tabbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,\r\n\tsmall, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,\r\n\tfieldset, form, div.form, label, legend, table, caption, tbody, tfoot, thead, tr,\r\n\tth, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup,\r\n\tmenu, nav, section, summary, time, mark, audio, video, button, textarea, input, .button, .legend {\r\n    font-family: \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size-adjust: none;\r\n    font-size: 100%;\r\n    font-style: normal;\r\n    letter-spacing: normal;\r\n    font-stretch: normal;\r\n    font-variant: normal;\r\n    font-weight: normal;\r\n    font: normal normal 100% \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    text-align: left;\r\n    -moz-text-align-last: initial;\r\n    text-align-last: initial;\r\n    text-decoration: none;\r\n    -webkit-text-emphasis: none;\r\n    text-emphasis: none;\r\n    text-height: auto;\r\n    text-indent: 0;\r\n    text-justify: auto;\r\n    text-outline: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    text-wrap: normal;\r\n    alignment-adjust: auto;\r\n    alignment-baseline: baseline;\r\n    -webkit-animation: none 0 ease 0 1 normal;\r\n    animation: none 0 ease 0 1 normal;\r\n    -webkit-animation-play-state: running;\r\n    animation-play-state: running;\r\n    appearance: normal;\r\n    azimuth: center;\r\n    -webkit-backface-visibility: visible;\r\n    backface-visibility: visible;\r\n    background: none 0 0 auto repeat scroll padding-box transparent;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    baseline-shift: baseline;\r\n    binding: none;\r\n    bleed: 6pt;\r\n    bookmark-label: content();\r\n    bookmark-level: none;\r\n    bookmark-state: open;\r\n    bookmark-target: none;\r\n    border: 0 none transparent;\r\n    border-radius: 0;\r\n    bottom: auto;\r\n    box-align: stretch;\r\n    -webkit-box-decoration-break: slice;\r\n    box-decoration-break: slice;\r\n    box-direction: normal;\r\n    flex: 0.0;\r\n    flex-group: 1;\r\n    box-lines: single;\r\n    box-ordinal-group: 1;\r\n    box-orient: inline-axis;\r\n    box-pack: start;\r\n    box-shadow: none;\r\n    box-sizing: content-box;\r\n    -webkit-break-after: auto;\r\n    -moz-break-after: auto;\r\n    break-after: auto;\r\n    -webkit-break-before: auto;\r\n    -moz-break-before: auto;\r\n    break-before: auto;\r\n    -webkit-column-break-inside: auto;\r\n    page-break-inside: auto;\r\n    break-inside: auto;\r\n    caption-side: top;\r\n    clear: none;\r\n    clip: auto;\r\n    color: inherit;\r\n    color-profile: auto;\r\n    -webkit-column-count: auto;\r\n    -moz-column-count: auto;\r\n    column-count: auto;\r\n    -webkit-column-fill: balance;\r\n    -moz-column-fill: balance;\r\n    column-fill: balance;\r\n    -webkit-column-gap: normal;\r\n    -moz-column-gap: normal;\r\n    column-gap: normal;\r\n    -webkit-column-rule: medium medium #1f1f1f;\r\n    -moz-column-rule: medium medium #1f1f1f;\r\n    column-rule: medium medium #1f1f1f;\r\n    -webkit-column-span: 1;\r\n    -moz-column-span: 1;\r\n    column-span: 1;\r\n    -webkit-column-width: auto;\r\n    -moz-column-width: auto;\r\n    column-width: auto;\r\n    -webkit-columns: auto auto;\r\n    -moz-columns: auto auto;\r\n    columns: auto auto;\r\n    content: normal;\r\n    counter-increment: none;\r\n    counter-reset: none;\r\n    crop: auto;\r\n    cursor: auto;\r\n    direction: ltr;\r\n    display: inline;\r\n    dominant-baseline: auto;\r\n    drop-initial-after-adjust: text-after-edge;\r\n    drop-initial-after-align: baseline;\r\n    drop-initial-before-adjust: text-before-edge;\r\n    drop-initial-before-align: caps-height;\r\n    drop-initial-size: auto;\r\n    drop-initial-value: initial;\r\n    elevation: level;\r\n    empty-cells: show;\r\n    fit: fill;\r\n    fit-position: 0% 0%;\r\n    float: none;\r\n    float-offset: 0 0;\r\n    grid-columns: none;\r\n    grid-rows: none;\r\n    hanging-punctuation: none;\r\n    height: auto;\r\n    hyphenate-after: auto;\r\n    hyphenate-before: auto;\r\n    hyphenate-character: auto;\r\n    hyphenate-lines: no-limit;\r\n    hyphenate-resource: none;\r\n    -webkit-hyphens: manual;\r\n    -moz-hyphens: manual;\r\n    -ms-hyphens: manual;\r\n    hyphens: manual;\r\n    icon: auto;\r\n    image-orientation: auto;\r\n    image-rendering: auto;\r\n    image-resolution: normal;\r\n    inline-box-align: last;\r\n    left: auto;\r\n    line-height: inherit;\r\n    line-stacking: inline-line-height exclude-ruby consider-shifts;\r\n    list-style: disc outside none;\r\n    margin: 0;\r\n    marks: none;\r\n    marquee-direction: forward;\r\n    marquee-loop: 1;\r\n    marquee-play-count: 1;\r\n    marquee-speed: normal;\r\n    marquee-style: scroll;\r\n    max-height: none;\r\n    max-width: none;\r\n    min-height: 0;\r\n    min-width: 0;\r\n    move-to: normal;\r\n    nav-down: auto;\r\n    nav-index: auto;\r\n    nav-left: auto;\r\n    nav-right: auto;\r\n    nav-up: auto;\r\n    opacity: 1;\r\n    orphans: 2;\r\n    outline: invert none medium;\r\n    outline-offset: 0;\r\n    overflow: visible;\r\n    overflow-style: auto;\r\n    padding: 0;\r\n    page: auto;\r\n    page-break-after: auto;\r\n    page-break-before: auto;\r\n    page-break-inside: auto;\r\n    page-policy: start;\r\n    -webkit-perspective: none;\r\n    perspective: none;\r\n    -webkit-perspective-origin: 50% 50%;\r\n    perspective-origin: 50% 50%;\r\n    position: static;\r\n    presentation-level: 0;\r\n    punctuation-trim: none;\r\n    quotes: none;\r\n    rendering-intent: auto;\r\n    resize: none;\r\n    right: auto;\r\n    rotation: 0;\r\n    rotation-point: 50% 50%;\r\n    ruby-align: auto;\r\n    ruby-overhang: none;\r\n    ruby-position: before;\r\n    ruby-span: none;\r\n    size: auto;\r\n    string-set: none;\r\n    table-layout: auto;\r\n    top: auto;\r\n    -webkit-transform: none;\r\n    -ms-transform: none;\r\n    transform: none;\r\n    -webkit-transform-origin: 50% 50% 0;\r\n    -ms-transform-origin: 50% 50% 0;\r\n    transform-origin: 50% 50% 0;\r\n    -webkit-transform-style: flat;\r\n    transform-style: flat;\r\n    transition: all 0 ease 0;\r\n    unicode-bidi: normal;\r\n    vertical-align: baseline;\r\n    white-space: normal;\r\n    white-space-collapse: collapse;\r\n    widows: 2;\r\n    width: auto;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    word-wrap: normal;\r\n    z-index: auto;\r\n    text-align: start;\r\n    /* And disable MS gradients */\r\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  address, blockquote, dd, div, dl, dt, fieldset, form, div.form, frame, frameset, h1, h2, h3, h4, h5, h6, noframes, ol, p, ul, center, dir, hr, menu, pre, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {\r\n    display: block;\r\n  }\r\n  li {\r\n    display: list-item;\r\n  }\r\n  table {\r\n    display: table;\r\n  }\r\n  tr {\r\n    display: table-row;\r\n  }\r\n  thead {\r\n    display: table-header-group;\r\n  }\r\n  tbody {\r\n    display: table-row-group;\r\n  }\r\n  tfoot {\r\n    display: table-footer-group;\r\n  }\r\n  col {\r\n    display: table-column;\r\n  }\r\n  colgroup {\r\n    display: table-column-group;\r\n  }\r\n  td, th {\r\n    display: table-cell;\r\n  }\r\n  caption {\r\n    display: table-caption;\r\n  }\r\n  input, select {\r\n    display: inline-block;\r\n  }\r\n  b, strong {\r\n    font-weight: bold;\r\n  }\r\n  b > i, strong > i, b > em, strong > em {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n  }\r\n  i > {\r\n    b, strong {\r\n      font-weight: bold;\r\n      font-style: italic;\r\n    }\r\n  }\r\n  em > {\r\n    b, strong {\r\n      font-weight: bold;\r\n      font-style: italic;\r\n    }\r\n  }\r\n  textarea, input {\r\n    cursor: text;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"reset": "BookingSyncWidgetUtils__reset",
	"form": "BookingSyncWidgetUtils__form",
	"button": "BookingSyncWidgetUtils__button",
	"legend": "BookingSyncWidgetUtils__legend"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/calendar.scss":
/*!**********************************!*\
  !*** ./src/styles/calendar.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./calendar.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/calendar.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/widget-utils/src/styles/reset.scss":
/*!*********************************************************!*\
  !*** ./node_modules/widget-utils/src/styles/reset.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./reset.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/widget-utils/src/styles/reset.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"bookingsync-calendar-widget","version":"1.5.0","description":"BookingSync Calendar Widget","main":"dist/bookingsync-calendar-widget.js","module":"src/bookingsync-calendar-widget.js","sideEffects":false,"files":["/dist","/src"],"scripts":{"dev":"webpack --config webpack.dev.js","build":"webpack --config webpack.prod.js","start":"webpack serve --open --config webpack.dev.js","test":"karma start karma.config.js --colors","test-ci":"karma start karma.config.js --single-run true","lint:js":"eslint ./*.js src","mock-server":"node json-server.js","publish-please":"publish-please","prepublishOnly":"publish-please guard","preversion":"npm run lint:js && npm run test-ci","version":"npm run build && npm run dev && git add -A dist","postversion":"git push && git push --tags && rm -rf build/temp"},"dependencies":{"popper.js":"^1.16.0","strtime":"^1.1.2","widget-utils":"0.5.0"},"devDependencies":{"@babel/cli":"^7.14.3","@babel/core":"^7.14.3","@babel/polyfill":"^7.7.0","@babel/preset-env":"^7.14.2","assert":"^2.0.0","babel-eslint":"^10.0.3","babel-loader":"^8.2.2","chai":"^4.3.4","css-loader":"^5.2.6","eslint":"^7.27.0","eslint-loader":"3.0.3","eslint-plugin-import":"^2.23.3","json-server":"0.16.3","karma":"^6.3.2","karma-chai":"^0.1.0","karma-chrome-launcher":"^3.1.0","karma-mocha":"^2.0.1","karma-webpack":"5.0.0","mocha":"8.4.0","node-sass":"^6.0.0","publish-please":"^5.5.2","sass-loader":"^11.1.1","sinon":"^11.1.1","style-loader":"^2.0.0","tether":"2.0.0","timezone-mock":"1.1.4","util":"^0.12.4","webpack":"^5.38.0","webpack-cli":"^4.7.0","webpack-dev-server":"3.11.2","webpack-merge":"^5.7.3","yargs":"17.0.1"},"repository":{"type":"git","url":"git+https://github.com/BookingSync/calendar-widget.git"},"author":"BookingSync.com","license":"MIT","bugs":{"url":"https://github.com/BookingSync/calendar-widget/issues"},"homepage":"https://github.com/BookingSync/calendar-widget#readme","engines":{"yarn":"YARN NO LONGER USED - use npm instead."}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy9jdXJyZW5jeS1zeW1ib2wtbWFwL2N1cnJlbmN5LXN5bWJvbC1tYXAuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL2N1cnJlbmN5LXN5bWJvbC1tYXAvbWFwLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci10cmVlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2lzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VOb2RlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvaXNJRS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2lzT2Zmc2V0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvZ2V0Um9vdC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9pbmNsdWRlU2Nyb2xsLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvZ2V0Qm9yZGVyc1NpemUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRXaW5kb3dTaXplcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldENsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9pc0ZpeGVkLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldEJvdW5kYXJpZXMuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRPdXRlclNpemVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRQb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvZmluZC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL3J1bk1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL21ldGhvZHMvdXBkYXRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvdXRpbHMvaXNNb2RpZmllckVuYWJsZWQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tZXRob2RzL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9zZXR1cEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbWV0aG9kcy9lbmFibGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL3JlbW92ZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbWV0aG9kcy9kaXNhYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9pc051bWVyaWMuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9zZXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9zZXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbW9kaWZpZXJzL2FwcGx5U3R5bGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRSb3VuZGVkT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL21vZGlmaWVycy9jb21wdXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL21ldGhvZHMvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL3V0aWxzL2Nsb2Nrd2lzZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbW9kaWZpZXJzL2tlZXBUb2dldGhlci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi4vc3JjL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbW9kaWZpZXJzL3NoaWZ0LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tb2RpZmllcnMvaW5uZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4uL3NyYy9tZXRob2RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3N0cnRpbWUvZGlzdC9zdHJ0aW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2FqYXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvYXJyYXkvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9jdXJyZW5jeS9jdXJyZW5jeUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kYXRlL21vbnRoTGVuZ3RoLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZGVzdHJveUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2VsZW1lbnRGcm9tU3RyaW5nLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9maW5kQnlDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZ2V0UGFyZW50QXR0cmlidXRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2lzSW5zaWRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vc2V0Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS90cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9mdW5jdGlvbi9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2lzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvbWF0aC9pc05hTlBvbHlmaWxsLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOdW1lcmljLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9jYXBpdGFsaXplT2JqLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvb2JqZWN0L3RyYXZlcnNlT2JqLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9kYXNoVG9DYXBpdGFsLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvc3RyaW5nL3RvVW5kZXJzY29yZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvdW5kZXJzY29yZVRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvc3R5bGVzL2NhbGVuZGFyLnNjc3MiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzP2ZkN2IiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvc3R5bGVzL3Jlc2V0LnNjc3M/MjNhNCIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX3MiLCJfZSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY3VycmVuY3lTeW1ib2xNYXAiLCJyZXF1aXJlIiwiZ2V0U3ltYm9sRnJvbUN1cnJlbmN5IiwiY3VycmVuY3lDb2RlIiwidW5kZWZpbmVkIiwiY29kZSIsInRvVXBwZXJDYXNlIiwiaGFzT3duUHJvcGVydHkiLCJBRUQiLCJBRk4iLCJBTEwiLCJBTUQiLCJBTkciLCJBT0EiLCJBUlMiLCJBVUQiLCJBV0ciLCJBWk4iLCJCQU0iLCJCQkQiLCJCRFQiLCJCR04iLCJCSEQiLCJCSUYiLCJCTUQiLCJCTkQiLCJCT0IiLCJCT1YiLCJCUkwiLCJCU0QiLCJCVEMiLCJCVE4iLCJCV1AiLCJCWU4iLCJCWVIiLCJCWkQiLCJDQUQiLCJDREYiLCJDSEUiLCJDSEYiLCJDSFciLCJDTEYiLCJDTFAiLCJDTlkiLCJDT1AiLCJDT1UiLCJDUkMiLCJDVUMiLCJDVVAiLCJDVkUiLCJDWksiLCJESkYiLCJES0siLCJET1AiLCJEWkQiLCJFRUsiLCJFR1AiLCJFUk4iLCJFVEIiLCJFVEgiLCJFVVIiLCJGSkQiLCJGS1AiLCJHQlAiLCJHRUwiLCJHR1AiLCJHSEMiLCJHSFMiLCJHSVAiLCJHTUQiLCJHTkYiLCJHVFEiLCJHWUQiLCJIS0QiLCJITkwiLCJIUksiLCJIVEciLCJIVUYiLCJJRFIiLCJJTFMiLCJJTVAiLCJJTlIiLCJJUUQiLCJJUlIiLCJJU0siLCJKRVAiLCJKTUQiLCJKT0QiLCJKUFkiLCJLRVMiLCJLR1MiLCJLSFIiLCJLTUYiLCJLUFciLCJLUlciLCJLV0QiLCJLWUQiLCJLWlQiLCJMQUsiLCJMQlAiLCJMS1IiLCJMUkQiLCJMU0wiLCJMVEMiLCJMVEwiLCJMVkwiLCJMWUQiLCJNQUQiLCJNREwiLCJNR0EiLCJNS0QiLCJNTUsiLCJNTlQiLCJNT1AiLCJNUk8iLCJNUlUiLCJNVVIiLCJNVlIiLCJNV0siLCJNWE4iLCJNWFYiLCJNWVIiLCJNWk4iLCJOQUQiLCJOR04iLCJOSU8iLCJOT0siLCJOUFIiLCJOWkQiLCJPTVIiLCJQQUIiLCJQRU4iLCJQR0siLCJQSFAiLCJQS1IiLCJQTE4iLCJQWUciLCJRQVIiLCJSTUIiLCJST04iLCJSU0QiLCJSVUIiLCJSV0YiLCJTQVIiLCJTQkQiLCJTQ1IiLCJTREciLCJTRUsiLCJTR0QiLCJTSFAiLCJTTEwiLCJTT1MiLCJTUkQiLCJTU1AiLCJTVEQiLCJTVE4iLCJTVkMiLCJTWVAiLCJTWkwiLCJUSEIiLCJUSlMiLCJUTVQiLCJUTkQiLCJUT1AiLCJUUkwiLCJUUlkiLCJUVEQiLCJUVkQiLCJUV0QiLCJUWlMiLCJVQUgiLCJVR1giLCJVU0QiLCJVWUkiLCJVWVUiLCJVWVciLCJVWlMiLCJWRUYiLCJWRVMiLCJWTkQiLCJWVVYiLCJXU1QiLCJYQUYiLCJYQlQiLCJYQ0QiLCJYT0YiLCJYUEYiLCJYU1UiLCJYVUEiLCJZRVIiLCJaQVIiLCJaTVciLCJaV0QiLCJaV0wiLCJnZW5BcnJheVJhbmdlIiwiYSIsImIiLCJwYXJzZUlTT1N0cmluZyIsInN0ciIsImFyclN0ciIsInNwbGl0IiwicGFyc2VGbG9hdCIsInllYXIiLCJtb250aCIsImRhdGUiLCJDYWxlbmRhclRyZWUiLCJ2YWxpZGF0ZUNlbGwiLCJ0cmVlIiwiYWRkVHJlZSIsIm9iaiIsIm1lcmdlIiwic2VsZWN0UmFuZ2UiLCJzdGFydCIsImVuZCIsInJhbmdlIiwic2VsZWN0RGF5c0luTW9udGgiLCJtb250aERheXMiLCJzZWxlY3RNb250aHNJblllYXIiLCJpc1ZhbGlkIiwiaXNSYW5nZVZhbGlkIiwic2VsZWN0aW9uIiwibW9udGhSYW5nZSIsImZvckVhY2giLCJ5IiwibSIsImlzIiwic3RhcnREYXkiLCJlbmREYXkiLCJzZWxlY3REYXkiLCJkYXkiLCJmbiIsImZpbHRlciIsInJlcGxhY2VNYXBzIiwidXBkYXRlZEF0IiwibWFwc1RvVHJlZSIsInJlbW92ZU1hcCIsIm1hcHMiLCJtYXBTdGFydEF0IiwiaXNTdHJpbmciLCJhdmFpbGFiaWxpdHkiLCJuaWdodGx5X3JhdGVzIiwibWluaW11bV9zdGF5cyIsImF2YWlsIiwicmF0ZXMiLCJtaW5NYXAiLCJkYXlTaGlmdCIsInJlZHVjZSIsImN1cnIiLCJzdGF0ZSIsImluZGV4IiwibW9udGhMZW5ndGgiLCJtaW5TdGF5IiwicmF0ZSIsImlzQXZhaWxhYmxlIiwicHJldkF2YWlsYWJsZSIsImlzTW9ybmluZ0Jsb2NrZWQiLCJpc091dEF2YWlsYWJsZSIsImdldERheVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wIiwiZSIsImlzRGF5RGlzYWJsZWQiLCJDYWxlbmRhciIsIkVtaXR0ZXIiLCJvcHRzIiwiY29uZmlnIiwiVkVSU0lPTiIsIkNTU19QUkVGSVgiLCJpc09iamVjdCIsImVsIiwibG9nZ2VyIiwiY29uZmlnRGF0YXNldCIsImRhdGFzZXQiLCJ0cmF2ZXJzZU9iaiIsImlzTnVtZXJpYyIsInBhcnNlSW50IiwiaXNEcm9wRG93biIsImluaXRDYWxlbmRhckRyb3AiLCJsYW5nIiwibG9jYWxlcyIsImxvY2FsZSIsImZvcm1hdCIsImZvcm1hdERhdGUiLCJzdGFydE9mV2VlayIsImRvbSIsImNUcmVlIiwidmFsaWRhdGlvbk9mUmFuZ2UiLCJhZGRNYXBzIiwic3RhcnRfZGF0ZSIsImN1cnJEYXRlIiwiaXNTZWxlY3RpbmciLCJoaWdobGlnaHRlZEJvdW5kcyIsImhhc1ZhbGlkUmFuZ2UiLCJpc1JldmVyc2VTZWxlY3RhYmxlIiwiaW5pdCIsImFkZENsYXNzIiwic3R5bGVzIiwidXRpbHNTdHlsZXMiLCJtb250aHNXcmFwcGVyIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50RnJvbVN0cmluZyIsInRwbHMiLCJmb3J3YXJkIiwiYmFjayIsInJlbmRlck1vbnRocyIsInllYXJTdGFydCIsIm1vbnRoU3RhcnQiLCJhZGRCdG5zRXZlbnRzIiwic2VsZWN0YWJsZSIsImVsU3RhcnRBdCIsImVsRW5kQXQiLCJpbnB1dHNUb1ZhbHVlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW50YWxJZCIsImxvYWRNYXBzIiwiZW1pdCIsImNoYW5nZVNlbGVjdGlvbk9yZGVyIiwiaXNSZXZlcnNlIiwiZGVzdHJveU1vbnRocyIsInllYXJFbmQiLCJtb250aEVuZCIsIm1vbnRocyIsImNyZWF0ZVRyZWUiLCJkaXNwbGF5TW9udGhzIiwicmVjb3ZlclNlbGVjdGlvbnMiLCJyZW1vdmVDbGFzcyIsImFkZE1vbnRoRXZlbnRzIiwiZW5hYmxlQWxsRGF5cyIsImRpc2FibGVCYWNrQnRuIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3RTdGFydCIsInNlbGVjdGlvbkVuZCIsInNlbGVjdEVuZCIsImhpZ2hMaWdodFJhbmdlIiwiaXNCYWNrRGlzYWJsZWQiLCJzdGFydERhdGUiLCJkYXRlVG9Jc28iLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZGlzYWJsZWQiLCJ0b2dnbGVMb2FkaW5nIiwiaGFzQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIm1vbnRoVG9SZW5kZXIiLCJ5ZWFyVG9SZW5kZXIiLCJpc0VuZEZpcnN0Iiwid2Vla0RheUVsIiwidHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyIiwidGFyZ2V0IiwicGFyZW50IiwiY2VsbCIsInJlc2V0U2VsZWN0aW9uT25Fc2NhcGUiLCJldmVudCIsImtleSIsImtleUNvZGUiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldFNlbGVjdGlvbiIsImRhdGVWYWx1ZSIsImdldEF0dHJpYnV0ZSIsImVuZERhdGVGaXJzdEFjdGlvbiIsInN0YXJ0RGF0ZUZpcnN0QWN0aW9uIiwiY29tcGxldGVTZWxlY3Rpb24iLCJjYWxEcm9wIiwiY2xvc2VEcm9wIiwiY3VycmVudCIsInJlbW92ZUhpZ2hsaWdodCIsImJvZHkiLCJyZWxhdGVkVGFyZ2V0IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJOb2RlIiwiRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZIiwiaXNMYXRlciIsInNlbGVjdEVuZEFjdGlvbiIsInNlbGVjdFN0YXJ0QWN0aW9uIiwic3dpdGNoSW5wdXRGb2N1cyIsImlzRnVuY3Rpb24iLCJvblNlbGVjdFN0YXJ0Iiwib25TZWxlY3RFbmQiLCJhbGxvd1Nob3J0ZXJNaW5TdGF5U2VsZWN0aW9uIiwibWF4U3RheSIsImFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbiIsIkluZmluaXR5Iiwib25DbGVhclNlbGVjdGlvbiIsImNlbGxBIiwiY2VsbEIiLCJpc1NpbmdsZUlucHV0IiwiZWxTaW5nbGVJbnB1dCIsInZhbHVlVG9JbnB1dCIsInRpbWVzIiwibURvbSIsImRvbU1vbnRoIiwiZGF5RWxlbWVudHMiLCJtb250aERvbSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJoZWFkZXJUcGxTdHJpbmciLCJsb25nTW9udGhOYW1lcyIsImRheXNUcGxTdHJpbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVyIiwid2Vla2RheXNMYWJlbHNFeHRlbmRlZCIsInNob3J0V2Vla2RheU5hbWVzIiwiZGF5c1BlcldlZWsiLCJzdGFydE9mTW9udGgiLCJEYXRlIiwiZ2V0RGF5IiwiZGF5c0luTW9udGgiLCJyb3dUZW1wbGF0ZSIsIm1vbnRoVHBsIiwid2Vla1NoaWZ0Iiwicm93cyIsIndlZWtTaGlmdENvcnJlY3RlZCIsImRheUNvdW50ZXIiLCJkYXlPZk1vbnRoIiwid2VlayIsIm9wZW4iLCJqIiwiZGF5VHBsU3RyaW5nIiwiY2xvc2UiLCJzaG93UmF0ZXMiLCJzaG93TWluU3RheSIsInNob3dNYXhTdGF5IiwiaXNEaXNhYmxlZCIsImlzRW5hYmxlZFN0YXJ0IiwiaXNEaXNhYmxlZEVuZCIsImNEYXRlIiwiY0RhdGVBcnJheSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXREYXRlIiwiZGF0ZUFycmF5IiwiaXNDdXJyZW50RGF5IiwiaXNDdXJyZW50IiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJNYXRoIiwicm91bmQiLCJjdXJyZW5jeSIsInRGb3JtYXR0ZXIiLCJkZXN0cm95RWxlbWVudCIsImRlc3Ryb3kiLCJvblN1Y2Nlc3MiLCJhdHRyaWJ1dGVzIiwiZGlzYWJsZUF2YWlsYWJpdHlNYXAiLCJyZXBsYWNlIiwibWFwc0xvYWRlZCIsIm9uRXJyb3IiLCJhamF4IiwicmVudGFsVXJsIiwic2luZ2xlSW5wdXREYXRlRm9ybWF0IiwiZGF0ZVN0YXJ0Iiwic3RyZnRpbWUiLCJkYXRlRW5kIiwic2luZ2xlSW5wdXRTZXBhcmF0b3IiLCJvblNlbGVjdGlvbkNvbXBsZXRlZCIsImVsZW1lbnQiLCJlbFRhcmdldCIsImhpZGRlbkVsRm9ybWF0IiwiaW5wdXQiLCJoaWRkZW5JbnB1dCIsImNsb25lTm9kZSIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJoaWRkZW4iLCJoaWRkZW5FbEVuZEF0IiwiaGlkZGVuRWxTdGFydEF0IiwicmVhZE9ubHkiLCJQb3BwZXIiLCJwbGFjZW1lbnQiLCJkcm9wUGxhY2VtZW50IiwiaGlkZSIsIm9wZW5Ecm9wIiwiaXNSZXZlcnNlZCIsInVwZGF0ZSIsImZvY3VzVG91Y2hFdmVudHMiLCJiaW5kIiwiZWxSZXNldCIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiaGlkZGVuVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiZGF0ZVRvQXJyYXkiLCJ0eXBlIiwiZm9yY2UiLCJpc0luc2lkZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9jYWxsYmFjayIsIm1zZyIsImNvbnNvbGUiLCJjc3NQcmVmaXgiLCJkYXNoVG9DYXBpdGFsIiwiYXBpSG9zdCIsInByb2Nlc3MiLCJhcGlOYW1lc3BhY2UiLCJhcGlNYXBzUm91dGUiLCJhcGlSZW50YWxJZCIsImFwaUN1cnJlbmN5IiwiaWRzIiwicm91dGUiLCJkZWZhdWx0Iiwid2luZG93IiwiQm9va2luZ1N5bmNXaWRnZXRVdGlscyIsImluaXRpYWxpemVkIiwib3B0aW9ucyIsImVsZW1lbnRzIiwiY2FsIiwiaW5zdGFuY2VzIiwiYXV0b0luaXQiLCJyZWFkeVN0YXRlIiwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldCIsImxvbmdXZWVrZGF5TmFtZXMiLCJzaG9ydE1vbnRoTmFtZXMiLCJhc3NpZ24iLCJlbiIsImRlIiwiZXMiLCJmciIsIml0Iiwic3YiLCJydSIsInBsIiwibmwiLCJtYWluIiwid2Vla0RheUxhYmVsIiwibGFiZWwiLCJ3ZWVrRGF5IiwiZGlzYWJsZWRFbmQiLCJlbmFibGVkU3RhcnQiLCJyYXRlVCIsIm1pblN0YXlUIiwibWF4U3RheVQiLCJ3ZWVrRGF5UGxhY2Vob2xkZXIiLCJ3ZWVrUm93IiwibnVtIiwiaXNEU1QiLCJqYW4iLCJnZXRUaW1lem9uZU9mZnNldCIsImp1bCIsIm1heCIsInBhZCIsIm51bWJlciIsInZhbCIsInN0cnB0aW1lIiwidGltZW91dER1cmF0aW9uIiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwiaXNCcm93c2VyIiwibmF2aWdhdG9yIiwiY2FsbGVkIiwic2NoZWR1bGVkIiwic3VwcG9ydHNNaWNyb1Rhc2tzIiwiZ2V0VHlwZSIsImZ1bmN0aW9uVG9DaGVjayIsImNzcyIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50Tm9kZSIsInJlZmVyZW5jZSIsImlzSUUxMSIsImlzSUUxMCIsInZlcnNpb24iLCJub09mZnNldFBhcmVudCIsImlzSUUiLCJvZmZzZXRQYXJlbnQiLCJub2RlTmFtZSIsImdldE9mZnNldFBhcmVudCIsIm5vZGUiLCJnZXRSb290IiwiZWxlbWVudDEiLCJlbGVtZW50MiIsIm9yZGVyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc09mZnNldENvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJzaWRlIiwidXBwZXJTaWRlIiwiaHRtbCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzdWJ0cmFjdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbCIsInNjcm9sbExlZnQiLCJtb2RpZmllciIsInNpZGVBIiwiYXhpcyIsInNpZGVCIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTaXplIiwib2Zmc2V0cyIsImhlaWdodCIsInJlY3QiLCJyZXN1bHQiLCJ0b3AiLCJzaXplcyIsImdldFdpbmRvd1NpemVzIiwid2lkdGgiLCJob3JpelNjcm9sbGJhciIsInZlcnRTY3JvbGxiYXIiLCJnZXRCb3JkZXJzU2l6ZSIsImdldENsaWVudFJlY3QiLCJmaXhlZFBvc2l0aW9uIiwicnVuSXNJRSIsImlzSFRNTCIsImNoaWxkcmVuUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJzY3JvbGxQYXJlbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpbmNsdWRlU2Nyb2xsIiwiZXhjbHVkZVNjcm9sbCIsInJlbGF0aXZlT2Zmc2V0IiwiZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIiwib2Zmc2V0IiwicGFyZW50Tm9kZSIsImlzRml4ZWQiLCJib3VuZGFyaWVzIiwibGVmdCIsImdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQiLCJnZXRSZWZlcmVuY2VOb2RlIiwiYm91bmRhcmllc0VsZW1lbnQiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsInBhZGRpbmciLCJpc1BhZGRpbmdOdW1iZXIiLCJnZXRCb3VuZGFyaWVzIiwicmVjdHMiLCJyZWZSZWN0IiwiYm90dG9tIiwic29ydGVkQXJlYXMiLCJnZXRBcmVhIiwiZmlsdGVyZWRBcmVhcyIsImNvbXB1dGVkUGxhY2VtZW50IiwidmFyaWF0aW9uIiwiY29tbW9uT2Zmc2V0UGFyZW50IiwieCIsImhhc2giLCJyaWdodCIsInBvcHBlclJlY3QiLCJnZXRPdXRlclNpemVzIiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwicmVmZXJlbmNlT2Zmc2V0cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiY3VyIiwibWF0Y2giLCJtb2RpZmllcnNUb1J1biIsImVuZHMiLCJtb2RpZmllcnMiLCJmaW5kSW5kZXgiLCJnZXRSZWZlcmVuY2VPZmZzZXRzIiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJnZXRQb3BwZXJPZmZzZXRzIiwicnVuTW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZWZpeGVzIiwidXBwZXJQcm9wIiwicHJlZml4IiwidG9DaGVjayIsImlzTW9kaWZpZXJFbmFibGVkIiwiZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIiwib3duZXJEb2N1bWVudCIsImlzQm9keSIsInBhc3NpdmUiLCJzY3JvbGxFbGVtZW50Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiaXNOYU4iLCJpc0Zpbml0ZSIsInVuaXQiLCJwb3NpdGlvbiIsImZsb29yIiwibm9Sb3VuZCIsInJlZmVyZW5jZVdpZHRoIiwicG9wcGVyV2lkdGgiLCJpc1ZlcnRpY2FsIiwiaXNWYXJpYXRpb24iLCJzYW1lV2lkdGhQYXJpdHkiLCJib3RoT2RkV2lkdGgiLCJob3Jpem9udGFsVG9JbnRlZ2VyIiwidmVydGljYWxUb0ludGVnZXIiLCJpc0ZpcmVmb3giLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZ2V0Um91bmRlZE9mZnNldHMiLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwicmVxdWVzdGVkIiwiaXNNb2RpZmllclJlcXVpcmVkIiwiYXJyb3dFbGVtZW50Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsInZhbGlkUGxhY2VtZW50cyIsInBsYWNlbWVudHMiLCJjb3VudGVyIiwiQkVIQVZJT1JTIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJjbG9ja3dpc2UiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCIsImZsaXBwZWRWYXJpYXRpb24iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInNpemUiLCJ1c2VIZWlnaHQiLCJmcmFnbWVudHMiLCJmcmFnIiwiZGl2aWRlciIsInNwbGl0UmVnZXgiLCJvcHMiLCJtZXJnZVdpdGhQcmV2aW91cyIsInRvVmFsdWUiLCJvcCIsImluZGV4MiIsImJhc2VQbGFjZW1lbnQiLCJwYXJzZU9mZnNldCIsInRyYW5zZm9ybVByb3AiLCJwb3BwZXJTdHlsZXMiLCJ0cmFuc2Zvcm0iLCJjaGVjayIsInNoaWZ0dmFyaWF0aW9uIiwic2hpZnRPZmZzZXRzIiwiYm91bmQiLCJzdWJ0cmFjdExlbmd0aCIsInNoaWZ0Iiwia2VlcFRvZ2V0aGVyIiwiaW5uZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWJvdW5jZSIsIm1vZGlmaWVyT3B0aW9ucyIsImV2ZW50c0VuYWJsZWQiLCJlbmFibGVFdmVudExpc3RlbmVycyIsImRpc2FibGVFdmVudExpc3RlbmVycyIsIlV0aWxzIiwiUG9wcGVyVXRpbHMiLCJEZWZhdWx0cyIsImdldEZvcm1hdE9wdGlvbnMiLCJ0aW1lem9uZSIsInVzZU9wdGlvbnMiLCJ0eiIsIk51bWJlciIsImdldFRpbWV6b25lT2Zmc2V0TWludXRlcyIsInR6VXBwZXIiLCJTdHJpbmciLCJkZWZhdWx0VGltZXpvbmVOYW1lcyIsIkVycm9yIiwidG9EYXRlIiwidG9KU0RhdGUiLCJ0b2tlbnMiLCJUaW1lc3RhbXBQYXJzZXIiLCJwYXJzZUZvcm1hdFN0cmluZyIsInRpbWV6b25lT2Zmc2V0TWludXRlcyIsInR6RGF0ZSIsInNldFVUQ01pbnV0ZXMiLCJnZXRVVENNaW51dGVzIiwib3V0cHV0IiwidG9rZW4iLCJEaXJlY3RpdmUiLCJ3cml0ZSIsIlRva2VuIiwidGltZXN0YW1wIiwicGFyc2VyIiwicGFyc2UiLCJzdHJ0aW1lIiwiZW5nbGlzaCIsImVyYU5hbWVzIiwibWVyaWRpZW1OYW1lcyIsIm9yZGluYWxUcmFuc2Zvcm0iLCJkaWdpdCIsImxlZnRQYWQiLCJjaGFyIiwidGV4dCIsInN0cmluZyIsIndyaXRlVGltZXpvbmVPZmZzZXQiLCJvZmZzZXRNaW51dGVzIiwiYWJzT2Zmc2V0IiwiYWJzIiwic2lnbiIsImhvdXIiLCJtaW51dGUiLCJnZXREYXlPZldlZWsiLCJnZXRVVENEYXRlIiwiZ2V0RGF5T2ZZZWFyIiwibGVuZ3RocyIsIm1vbnRoTGVuZ3RocyIsImZvclllYXIiLCJnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheSIsImRheU9mWWVhciIsImZpcnN0RGF5T2ZXZWVrIiwiZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyIiwiZ2V0V2Vla09mWWVhckZyb21Nb25kYXkiLCJkYXlPZldlZWsiLCJzdW5kYXlXZWVrIiwiZ2V0SVNPV2Vla3NJblllYXIiLCJwcmlvclllYXIiLCJnZXRJU09XZWVrT2ZZZWFyIiwid2Vla051bWJlciIsImdldElTT1dlZWtEYXRlWWVhciIsIm5hbWVzIiwicGFkTGVuZ3RoIiwibGlrZWx5TGVuZ3RoIiwibWluaW11bSIsIm1heGltdW0iLCJjYW5CZU5lZ2F0aXZlIiwicmV3cml0ZSIsInBhcnNlRnVuY3Rpb24iLCJ3cml0ZUZ1bmN0aW9uIiwic3RvcmVGdW5jdGlvbiIsInN0b3JlIiwiZ2V0QnlOYW1lIiwiZGlyZWN0aXZlIiwiaW5kZXhPZiIsImlzT3JkaW5hbCIsImdldENhbkJlTmVnYXRpdmUiLCJnZXRMaWtlbHlMZW5ndGgiLCJnZXRSZXdyaXRlUGFyc2VkIiwicmV3cml0ZVBhcnNlZFZhbHVlIiwiZXhwYW5kZWRGcm9tIiwiaGFzUGFyc2VGdW5jdGlvbiIsImhhc1N0b3JlRnVuY3Rpb24iLCJudW1iZXJJbkJvdW5kcyIsImdldEJvdW5kc1N0cmluZyIsIkRpcmVjdGl2ZVRva2VuIiwicmVzdWx0U3RyaW5nIiwidXBwZXIiLCJ0b0xvd2VyQ2FzZSIsIlN0cmluZ1Rva2VuIiwiRGlyZWN0aXZlU3RyaW5nVG9rZW4iLCJhZGRDaGFyYWN0ZXIiLCJjaCIsInBhcnNlV2Vla2RheU5hbWUiLCJnZXRVVENEYXkiLCJwYXJzZU1vbnRoTmFtZSIsImNlbnR1cnkiLCJtaWNyb3NlY29uZCIsImdldFVUQ01pbGxpc2Vjb25kcyIsImlzb1R3b0RpZ2l0WWVhciIsImlzb1llYXIiLCJnZXRVVENIb3VycyIsIm1pbGxpc2Vjb25kIiwibWVyaWRpZW0iLCJwYXJzZU1lcmlkaWVtTmFtZSIsIm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2giLCJnZXRUaW1lIiwic2Vjb25kc1NpbmNlRXBvY2giLCJzZWNvbmQiLCJtaW4iLCJnZXRVVENTZWNvbmRzIiwid2Vla09mWWVhckZyb21TdW5kYXkiLCJpc29XZWVrT2ZZZWFyIiwid2Vla09mWWVhckZyb21Nb25kYXkiLCJ0d29EaWdpdFllYXIiLCJwYXJzZVRpbWV6b25lT2Zmc2V0IiwidHpMaXN0IiwiZ2V0VGltZXpvbmVOYW1lTGlzdCIsInBhcnNlSW5kZXhJbkxpc3QiLCJ0aW1lem9uZU5hbWVzIiwiZXJhIiwicGFyc2VFcmFOYW1lIiwiVGltZXN0YW1wUGFyc2VFcnJvciIsInJlYXNvbiIsImN1cnJlbnRUb2tlbiIsIm1lc3NhZ2UiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImVycm9yIiwic3RhY2siLCJjcmVhdGUiLCJpc0RpZ2l0IiwiZ2V0WWVhckZyb21Ud29EaWdpdHMiLCJnZXRNb250aEZyb21EYXlPZlllYXIiLCJkYXlzIiwiZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIiLCJnZXREYXRlRnJvbUlTT1dlZWtEYXRlIiwid2Vla2RheU9mSmFuNCIsImRheXNJblllYXIiLCJpc0xlYXBZZWFyIiwiZ2V0RGF0ZUZyb21TdW5kYXlXZWVrRGF0ZSIsIndlZWtPZlllYXIiLCJnZXREYXRlRnJvbU1vbmRheVdlZWtEYXRlIiwic3VuZGF5RGF5T2ZZZWFyIiwiZm9ya0xlbmd0aCIsIm1pbGxpc2Vjb25kc1NpbmNlRXBvY2giLCJnZXRUaW1lem9uZU9mZnNldE9mRGF0ZSIsIm9mZnNldFNpZ24iLCJ0b3RhbE1pbnV0ZXMiLCJzZXRVVENGdWxsWWVhciIsInNldFVUQ01vbnRoIiwic2V0VVRDRGF0ZSIsInNldFVUQ0hvdXJzIiwic2V0VVRDU2Vjb25kcyIsInNldFVUQ01pbGxpc2Vjb25kcyIsImNvcHkiLCJmb3JrIiwic3RhcnRUb2tlbkluZGV4IiwicGFyc2VTdHJpbmdUb2tlbiIsInBhcnNlQW1iaWd1b3VzTnVtYmVyIiwicGFyc2VOdW1iZXIiLCJ0b2tlbkluZGV4IiwibGFzdFdob2xlRXJyb3IiLCJsZW5ndGhMaW1pdCIsIm5lZ2F0aXZlIiwidHJpbSIsImlzSW50ZWdlciIsIm9yZGluYWwiLCJwb3NzaWJsZSIsInBvc3NpYmxlQ291bnQiLCJtYXRjaEluZGV4IiwibWF0Y2hMZW5ndGgiLCJ0aW1lem9uZU5hbWVMaXN0IiwiaG91cnMiLCJtaW51dGVzIiwiZm9ybWF0U3RyaW5nIiwiZGlyIiwienVsdVRpbWV6b25lIiwiY29tbW9uIiwibGVhcCIsImFwaVVybCIsInN1Y2Nlc3MiLCJwYXJhbXMiLCJtZXRob2QiLCJ4bWxIdHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJzZXJpYWxpemUiLCJ0b1VuZGVyc2NvcmUiLCJpc1N1Y2Nlc3MiLCJzdGF0dXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwidG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiaXNEb2xsYXIiLCJzdHlsZSIsImN1cnJlbmN5RGlzcGxheSIsIm51bWJlckZvcm1hdCIsImNsYXNzTmFtZXMiLCJjbGFzc0xpc3QiLCJjbHMiLCJhZGQiLCJnZXRDbGFzc05hbWUiLCJzZXRDbGFzc05hbWUiLCJrZXlzIiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsImZpbmRCeUNsYXNzTmFtZSIsImNvbnRleHQiLCJkZWZhdWx0VmlldyIsIlNWR0FuaW1hdGVkU3RyaW5nIiwiYmFzZVZhbCIsImdldFBhcmVudEF0dHJpYnV0ZSIsImF0dHIiLCJjb250YWlucyIsIlJlZ0V4cCIsImNoaWxkIiwidGFnTmFtZSIsInJlbW92ZSIsInJlZ2V4IiwiYXR0cmlidXRlIiwib24iLCJsaXN0ZW5lciIsImV2ZW50cyIsIm9uY2UiLCJzZWxmIiwiYXJncyIsIm9mZiIsImFwcGx5IiwibGlzdGVuZXJzIiwic3BsaWNlIiwiZiIsImlzTmFOUG9seWZpbGwiLCJjYXBpdGFsaXplT2JqIiwib2JqZWN0IiwidW5kZXJzY29yZVRvQ2FwaXRhbCIsIm9iajEiLCJvYmoyIiwiaXNEZWVwIiwib2JqMyIsInBpY2siLCJ0IiwicGlja2VkT2JqIiwiY29tcG9uZW50IiwicCIsImZuS2V5IiwiZm5WYWx1ZSIsIm5leHRQcm9wZXJ0eSIsInMiLCJ2YWxpZGF0ZSIsImlzQmxhbmsiLCJpc0VtYWls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QWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLG1CQUFtQixPQUFPLGlCQUFpQixPQUFPLG1CQUFtQixPQUFPLGlCQUFpQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLGFBQWEsbUJBQW1CLE9BQU8sYUFBYSxtQkFBbUIs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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImNvbnN0IGN1cnJlbmN5U3ltYm9sTWFwID0gcmVxdWlyZSgnLi9tYXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFN5bWJvbEZyb21DdXJyZW5jeSAoY3VycmVuY3lDb2RlKSB7XG4gIGlmICh0eXBlb2YgY3VycmVuY3lDb2RlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IGNvZGUgPSBjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKVxuXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnJlbmN5U3ltYm9sTWFwLCBjb2RlKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeVN5bWJvbE1hcFtjb2RlXVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jdXJyZW5jeVN5bWJvbE1hcCA9IGN1cnJlbmN5U3ltYm9sTWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUVEOiAn2K8u2KUnLFxuICBBRk46ICfYiycsXG4gIEFMTDogJ0wnLFxuICBBTUQ6ICfWjycsXG4gIEFORzogJ8aSJyxcbiAgQU9BOiAnS3onLFxuICBBUlM6ICckJyxcbiAgQVVEOiAnJCcsXG4gIEFXRzogJ8aSJyxcbiAgQVpOOiAn4oK8JyxcbiAgQkFNOiAnS00nLFxuICBCQkQ6ICckJyxcbiAgQkRUOiAn4KezJyxcbiAgQkdOOiAn0LvQsicsXG4gIEJIRDogJy7Yry7YqCcsXG4gIEJJRjogJ0ZCdScsXG4gIEJNRDogJyQnLFxuICBCTkQ6ICckJyxcbiAgQk9COiAnJGInLFxuICBCT1Y6ICdCT1YnLFxuICBCUkw6ICdSJCcsXG4gIEJTRDogJyQnLFxuICBCVEM6ICfigr8nLFxuICBCVE46ICdOdS4nLFxuICBCV1A6ICdQJyxcbiAgQllOOiAnQnInLFxuICBCWVI6ICdCcicsXG4gIEJaRDogJ0JaJCcsXG4gIENBRDogJyQnLFxuICBDREY6ICdGQycsXG4gIENIRTogJ0NIRScsXG4gIENIRjogJ0NIRicsXG4gIENIVzogJ0NIVycsXG4gIENMRjogJ0NMRicsXG4gIENMUDogJyQnLFxuICBDTlk6ICfCpScsXG4gIENPUDogJyQnLFxuICBDT1U6ICdDT1UnLFxuICBDUkM6ICfigqEnLFxuICBDVUM6ICckJyxcbiAgQ1VQOiAn4oKxJyxcbiAgQ1ZFOiAnJCcsXG4gIENaSzogJ0vEjScsXG4gIERKRjogJ0ZkaicsXG4gIERLSzogJ2tyJyxcbiAgRE9QOiAnUkQkJyxcbiAgRFpEOiAn2K/YrCcsXG4gIEVFSzogJ2tyJyxcbiAgRUdQOiAnwqMnLFxuICBFUk46ICdOZmsnLFxuICBFVEI6ICdCcicsXG4gIEVUSDogJ86eJyxcbiAgRVVSOiAn4oKsJyxcbiAgRkpEOiAnJCcsXG4gIEZLUDogJ8KjJyxcbiAgR0JQOiAnwqMnLFxuICBHRUw6ICfigr4nLFxuICBHR1A6ICfCoycsXG4gIEdIQzogJ+KCtScsXG4gIEdIUzogJ0dI4oK1JyxcbiAgR0lQOiAnwqMnLFxuICBHTUQ6ICdEJyxcbiAgR05GOiAnRkcnLFxuICBHVFE6ICdRJyxcbiAgR1lEOiAnJCcsXG4gIEhLRDogJyQnLFxuICBITkw6ICdMJyxcbiAgSFJLOiAna24nLFxuICBIVEc6ICdHJyxcbiAgSFVGOiAnRnQnLFxuICBJRFI6ICdScCcsXG4gIElMUzogJ+KCqicsXG4gIElNUDogJ8KjJyxcbiAgSU5SOiAn4oK5JyxcbiAgSVFEOiAn2Lku2K8nLFxuICBJUlI6ICfvt7wnLFxuICBJU0s6ICdrcicsXG4gIEpFUDogJ8KjJyxcbiAgSk1EOiAnSiQnLFxuICBKT0Q6ICdKRCcsXG4gIEpQWTogJ8KlJyxcbiAgS0VTOiAnS1NoJyxcbiAgS0dTOiAn0LvQsicsXG4gIEtIUjogJ+GfmycsXG4gIEtNRjogJ0NGJyxcbiAgS1BXOiAn4oKpJyxcbiAgS1JXOiAn4oKpJyxcbiAgS1dEOiAnS0QnLFxuICBLWUQ6ICckJyxcbiAgS1pUOiAn4oK4JyxcbiAgTEFLOiAn4oKtJyxcbiAgTEJQOiAnwqMnLFxuICBMS1I6ICfigqgnLFxuICBMUkQ6ICckJyxcbiAgTFNMOiAnTScsXG4gIExUQzogJ8WBJyxcbiAgTFRMOiAnTHQnLFxuICBMVkw6ICdMcycsXG4gIExZRDogJ0xEJyxcbiAgTUFEOiAnTUFEJyxcbiAgTURMOiAnbGVpJyxcbiAgTUdBOiAnQXInLFxuICBNS0Q6ICfQtNC10L0nLFxuICBNTUs6ICdLJyxcbiAgTU5UOiAn4oKuJyxcbiAgTU9QOiAnTU9QJCcsXG4gIE1STzogJ1VNJyxcbiAgTVJVOiAnVU0nLFxuICBNVVI6ICfigqgnLFxuICBNVlI6ICdSZicsXG4gIE1XSzogJ01LJyxcbiAgTVhOOiAnJCcsXG4gIE1YVjogJ01YVicsXG4gIE1ZUjogJ1JNJyxcbiAgTVpOOiAnTVQnLFxuICBOQUQ6ICckJyxcbiAgTkdOOiAn4oKmJyxcbiAgTklPOiAnQyQnLFxuICBOT0s6ICdrcicsXG4gIE5QUjogJ+KCqCcsXG4gIE5aRDogJyQnLFxuICBPTVI6ICfvt7wnLFxuICBQQUI6ICdCLy4nLFxuICBQRU46ICdTLy4nLFxuICBQR0s6ICdLJyxcbiAgUEhQOiAn4oKxJyxcbiAgUEtSOiAn4oKoJyxcbiAgUExOOiAnesWCJyxcbiAgUFlHOiAnR3MnLFxuICBRQVI6ICfvt7wnLFxuICBSTUI6ICfvv6UnLFxuICBST046ICdsZWknLFxuICBSU0Q6ICfQlNC40L0uJyxcbiAgUlVCOiAn4oK9JyxcbiAgUldGOiAnUuKCoycsXG4gIFNBUjogJ++3vCcsXG4gIFNCRDogJyQnLFxuICBTQ1I6ICfigqgnLFxuICBTREc6ICfYrC7Ysy4nLFxuICBTRUs6ICdrcicsXG4gIFNHRDogJ1MkJyxcbiAgU0hQOiAnwqMnLFxuICBTTEw6ICdMZScsXG4gIFNPUzogJ1MnLFxuICBTUkQ6ICckJyxcbiAgU1NQOiAnwqMnLFxuICBTVEQ6ICdEYicsXG4gIFNUTjogJ0RiJyxcbiAgU1ZDOiAnJCcsXG4gIFNZUDogJ8KjJyxcbiAgU1pMOiAnRScsXG4gIFRIQjogJ+C4vycsXG4gIFRKUzogJ1NNJyxcbiAgVE1UOiAnVCcsXG4gIFRORDogJ9ivLtiqJyxcbiAgVE9QOiAnVCQnLFxuICBUUkw6ICfigqQnLFxuICBUUlk6ICfigronLFxuICBUVEQ6ICdUVCQnLFxuICBUVkQ6ICckJyxcbiAgVFdEOiAnTlQkJyxcbiAgVFpTOiAnVFNoJyxcbiAgVUFIOiAn4oK0JyxcbiAgVUdYOiAnVVNoJyxcbiAgVVNEOiAnJCcsXG4gIFVZSTogJ1VZSScsXG4gIFVZVTogJyRVJyxcbiAgVVlXOiAnVVlXJyxcbiAgVVpTOiAn0LvQsicsXG4gIFZFRjogJ0JzJyxcbiAgVkVTOiAnQnMuUycsXG4gIFZORDogJ+KCqycsXG4gIFZVVjogJ1ZUJyxcbiAgV1NUOiAnV1MkJyxcbiAgWEFGOiAnRkNGQScsXG4gIFhCVDogJ8mDJyxcbiAgWENEOiAnJCcsXG4gIFhPRjogJ0NGQScsXG4gIFhQRjogJ+KCoycsXG4gIFhTVTogJ1N1Y3JlJyxcbiAgWFVBOiAnWFVBJyxcbiAgWUVSOiAn77e8JyxcbiAgWkFSOiAnUicsXG4gIFpNVzogJ1pLJyxcbiAgWldEOiAnWiQnLFxuICBaV0w6ICckJ1xufVxuIiwiaW1wb3J0IHtcclxuICBpcywgbWVyZ2UsIG1vbnRoTGVuZ3RoLCBpc1N0cmluZ1xyXG59IGZyb20gJ3dpZGdldC11dGlscyc7XHJcblxyXG4vKipcclxuICogIHBsZWFzZSByZWZlciB0byAvdGVzdHMvdW5pdC9jYWxlbmRhclRyZWUuc3BlY3MuanMgZm9yIHVzYWdlXHJcbiAqICBUT0RPIGRvY3MsIG1lcmdlIGF2YWlsYWJpbGl0eSB3aXRoIGNhbGVuZGFyIHRyZWUsIHVzZSBvbmUgZGF0YS1zdHJ1Y3R1cmVcclxuICogIFRPRE8gbWluU3RheSArIGF2YWlsYWJpbGl0eSBtYXAgY29uc2lkZXJhdGlvbnMgZm8gZGlzYWJsaW5nIGRhdGVzXHJcbiAqL1xyXG5jb25zdCBnZW5BcnJheVJhbmdlID0gKGEsIGIpID0+IHtcclxuICBjb25zdCBsaXN0ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IGE7IGkgPD0gYjsgaSArPSAxKSB7XHJcbiAgICBsaXN0LnB1c2goaSk7XHJcbiAgfVxyXG4gIHJldHVybiBsaXN0O1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VJU09TdHJpbmcgPSAoc3RyIC8qIHl5eXktbW0tZGQgKi8pID0+IHtcclxuICBjb25zdCBhcnJTdHIgPSBzdHIuc3BsaXQoJy0nKS5tYXAocGFyc2VGbG9hdCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXI6IGFyclN0clswXSxcclxuICAgIG1vbnRoOiBhcnJTdHJbMV0gLSAxLFxyXG4gICAgZGF0ZTogYXJyU3RyWzJdXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyVHJlZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsaWRhdGVDZWxsXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHRyZWVcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih2YWxpZGF0ZUNlbGwsIHRyZWUpIHtcclxuICAgIHRoaXMudmFsaWRhdGVDZWxsID0gdmFsaWRhdGVDZWxsO1xyXG4gICAgdGhpcy50cmVlICAgICAgICAgPSB0cmVlO1xyXG4gIH1cclxuXHJcbiAgYWRkVHJlZShvYmopIHtcclxuICAgIGlmICghdGhpcy50cmVlKSB7XHJcbiAgICAgIHRoaXMudHJlZSA9IG9iajtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJlZSA9IG1lcmdlKHRoaXMudHJlZSB8fCB7fSwgb2JqLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2VsZWN0IHJhbmdlIGZyb20gdGhlIHRyZWUsIHJldHVybnMgYXJyYXkgaXRlbXNcclxuICAgKiBzdGFydCBkYXRlIGlzIEFMV0FZUyA8IHRoZW4gZW5kIGRhdGUgLCBhcyB3ZSBhcmUgc2VsZWN0aW5nIHRpbWUgcmFuZ2UgaW4gZGF5cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YXJ0IGUuZy4gWzIwMTYsIDAsIDFdXHJcbiAgICogQHBhcmFtIHtBcnJheX0gZW5kICAgICAgICBbMjAxNiwgMSwgM11cclxuICAgKiBAcmV0dXJucyB7e3JhbmdlOiBBcnJheSwgaXNWYWxpZDoge0Jvb2xlYW59fX1cclxuICAgKi9cclxuICBzZWxlY3RSYW5nZShzdGFydCwgZW5kKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBbXTtcclxuXHJcbiAgICBjb25zdCBhID0gc3RhcnQuc2xpY2UoKTtcclxuXHJcbiAgICAvLyBpZiB5ZWFyIGFuZCBtb250aCB0aGUgc2FtZSwganVzdCBzbGljZSB0aGUgY3VycmVudCBtb250aFxyXG4gICAgaWYgKGFbMF0gPT09IGVuZFswXSAmJiBhWzFdID09PSBlbmRbMV0pIHtcclxuICAgICAgcmFuZ2UgPSB0aGlzLnNlbGVjdERheXNJbk1vbnRoKGFbMF0sIGFbMV0sIGFbMl0sIGVuZFsyXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtb250aERheXMgPSB0aGlzLnRyZWVbYVswXV1bYVsxXV07XHJcblxyXG4gICAgICAvLyBzbGljZSB0aGUgcGllY2Ugb2YgY3VycmVudCBtb250aERheXMgZnJvbSBzdGFydCBvZiByYW5nZSB0aWxsIGVuZCBvZiB0aGUgbW9udGhEYXlzXHJcbiAgICAgIHJhbmdlID0gcmFuZ2UuY29uY2F0KHRoaXMuc2VsZWN0RGF5c0luTW9udGgoYVswXSwgYVsxXSwgYVsyXSwgbW9udGhEYXlzLmxlbmd0aCkpO1xyXG5cclxuICAgICAgLy8gc2hpZnQgc3RhcnQgbW9udGgsIGIvYyB3ZSBhbHJlYWR5IHNlbGVjdGVkIGRheXMgaW4gaXRcclxuICAgICAgYVsxXSArPSAxO1xyXG5cclxuICAgICAgLy8gaWYgZW5kIGRhdGUgeWVhciA+IHN0YXJ0IGRhdGVcclxuICAgICAgLy8gc2VsZWN0IGV2ZXJ5dGhpbmcgaW4gc3RhcnQgeWVhciB0aWxsIHRoZSBlbmQgb2Ygc3RhcnQgeWVhclxyXG4gICAgICAvLyBlLmcuIHN0YXJ0IGlzIDIwIE9jdG9iZXIsIHNvIHNlbGVjdCBOb3ZlbWJlciBhbmQgRGVjZW1iZXIsIE9jdG9iZXIgd2FzIHNlbGVjdGVkIGFib3ZlXHJcbiAgICAgIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY29uY2F0KHRoaXMuc2VsZWN0TW9udGhzSW5ZZWFyKGFbMF0sIGFbMV0sIDExKSk7XHJcbiAgICAgICAgLy8gYW5kIHNldCBzdGFydCB5ZWFyIHRvIGVuZCB5ZWFyXHJcbiAgICAgICAgLy8gbW9udGggdG8gMCAoSmFudWFyeSlcclxuICAgICAgICBbYVswXSwgYVsxXV0gPSBbZW5kWzBdLCAwXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm93IHdlIGFyZSBhdCB0aGUgc2FtZSB5ZWFyIGFuZCBoYXZlIHRoZSBjYXNlIGlmIGVuZCBtb250aCA+IHN0YXJ0IG1vbnRoXHJcbiAgICAgIC8vIHRoZW4gc2VsZWN0IGV2ZXJ5dGhpbmcgYmV0d2VlbiB0aG9zZSBtb250aHNcclxuICAgICAgaWYgKGVuZFsxXSA+IGFbMV0pIHtcclxuICAgICAgICAvLyBlLmcuIHN0YXJ0IDIwIE9jdG9iZXIgZW5kIDIwIERlY2VtYmVyLCBzZWxlY3QgZnVsbCBOb3ZlbWJlclxyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY29uY2F0KHRoaXMuc2VsZWN0TW9udGhzSW5ZZWFyKGFbMF0sIGFbMV0sIGVuZFsxXSAtIDEpKTtcclxuICAgICAgICBhWzFdID0gZW5kO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB0aGUgbWlzc2luZyBwYXJ0IGlzIGRheXMgaW4gZW5kIHNlbGVjdGlvbiBtb250aFxyXG4gICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdERheXNJbk1vbnRoKGVuZFswXSwgZW5kWzFdLCAxLCBlbmRbMl0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByYW5nZSxcclxuICAgICAgaXNWYWxpZDogdGhpcy5pc1JhbmdlVmFsaWQocmFuZ2UpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TW9udGhzSW5ZZWFyKHllYXIsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gICAgPSBbXTtcclxuICAgIGNvbnN0IG1vbnRoUmFuZ2UgPSBnZW5BcnJheVJhbmdlKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgIG1vbnRoUmFuZ2UuZm9yRWFjaCgobW9udGgpID0+IHtcclxuICAgICAgY29uc3QgeSA9IHRoaXMudHJlZVt5ZWFyXTtcclxuICAgICAgY29uc3QgbSA9IGlzKHkpID8gdGhpcy50cmVlW3llYXJdW21vbnRoXSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoeSAmJiBtKSB7XHJcbiAgICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uLmNvbmNhdCh0aGlzLnNlbGVjdERheXNJbk1vbnRoKHllYXIsIG1vbnRoLCAxLCBtLmxlbmd0aCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGF5c0luTW9udGgoeWVhciwgbW9udGgsIHN0YXJ0RGF5LCBlbmREYXkpIHtcclxuICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XHJcbiAgICBjb25zdCBtID0gaXMoeSkgPyB0aGlzLnRyZWVbeWVhcl1bbW9udGhdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoeSAmJiBtKSB7XHJcbiAgICAgIHJldHVybiBtLnNsaWNlKChzdGFydERheSAtIDEpLCBlbmREYXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGF5KHllYXIsIG1vbnRoLCBkYXkpIHtcclxuICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XHJcbiAgICBjb25zdCBtID0gaXMoeSkgPyB0aGlzLnRyZWVbeWVhcl1bbW9udGhdIDogbnVsbDtcclxuXHJcbiAgICBpZiAoeSAmJiBtKSB7XHJcbiAgICAgIHJldHVybiBtW2RheSAtIDFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpc1JhbmdlVmFsaWQocmFuZ2UsIGZuKSB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZUNlbGwgPSB0aGlzLnZhbGlkYXRlQ2VsbCB8fCBmbjtcclxuICAgIGxldCBpc1ZhbGlkICAgICAgICA9IHRydWU7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWxpZGF0ZUNlbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaXNWYWxpZCA9IHJhbmdlLmZpbHRlcigoYSwgaSkgPT4gdGhpcy52YWxpZGF0ZUNlbGwoYSwgaSwgcmFuZ2UpKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlTWFwcyhtYXAsIHVwZGF0ZWRBdCkge1xyXG4gICAgdGhpcy5tYXAgPSBDYWxlbmRhclRyZWUubWFwc1RvVHJlZShtYXAsIHVwZGF0ZWRBdCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbW92ZU1hcCgpIHtcclxuICAgIHRoaXMubWFwID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBDcmVhdGUgYSB0cmVlIHN0cnVjdHVyZSBmcm9tIG1hcHNcclxuICAgKiAgZm9yIG4tdGltZSBkYXkgYWNjZXNzLCBlLmcuIHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldLmlzQXZhaWxhYmxlO1xyXG4gICAqIHtcclxuICAgKiAgIDIxMDY6IHtcclxuICAgKiAgICAgIDE6IHtcclxuICAgKiAgICAgICAgMTogLFxyXG4gICAqICAgICAgICAyOiAsXHJcbiAgICogICAgICAgIDM6XHJcbiAgICogICAgICAgIC4uLlxyXG4gICAqICAgICAgfVxyXG4gICAqICAgICAgLi4uXHJcbiAgICogICAgICAxMjoge1xyXG4gICAqXHJcbiAgICogICAgICB9XHJcbiAgICogICAgfVxyXG4gICAqIH1cclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgRGF0ZX0gbWFwU3RhcnRBdFxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgICovXHJcbiAgc3RhdGljIG1hcHNUb1RyZWUobWFwcywgbWFwU3RhcnRBdCkge1xyXG4gICAgaWYgKCEoaXNTdHJpbmcobWFwcy5hdmFpbGFiaWxpdHkpXHJcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubmlnaHRseV9yYXRlcylcclxuICAgICAgfHwgaXNTdHJpbmcobWFwcy5taW5pbXVtX3N0YXlzKSkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWwgID0gbWFwcy5hdmFpbGFiaWxpdHkuc3BsaXQoJycpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGNvbnN0IHJhdGVzICA9IG1hcHMubmlnaHRseV9yYXRlcy5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGNvbnN0IG1pbk1hcCA9IG1hcHMubWluaW11bV9zdGF5cy5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGxldCB7IHllYXIsIG1vbnRoLCBkYXRlOiBkYXlTaGlmdCB9ID0gcGFyc2VJU09TdHJpbmcobWFwU3RhcnRBdCk7XHJcblxyXG4gICAgbGV0IGRheSAgICAgID0gMTtcclxuXHJcbiAgICAvLyB0cmljayB0byBhZGQgZXh0cmEgdW5hdmFpbGFibGUgZGF0ZSBmb3IgcHJvcGVyIGNhbGN1bGF0aW9ucyBvZiBjaGVjay1vdXQgZGF0ZXNcclxuXHJcbiAgICBpZiAoYXZhaWxbYXZhaWwubGVuZ3RoIC0gMV0gPT09IDApIHtcclxuICAgICAgYXZhaWwucHVzaCgxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXZhaWwucmVkdWNlKChjdXJyLCBzdGF0ZSwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgICBjb25zdCBsZW5ndGggICAgICAgICAgID0gbW9udGhMZW5ndGgoeWVhciwgbW9udGgpO1xyXG4gICAgICBjb25zdCB0cmVlICAgICAgICAgICAgID0gY3VycjtcclxuICAgICAgY29uc3QgbWluU3RheSAgICAgICAgICA9IG1pbk1hcFtpbmRleF07XHJcbiAgICAgIGNvbnN0IHJhdGUgICAgICAgICAgICAgPSByYXRlc1tpbmRleF07XHJcbiAgICAgIGNvbnN0IGlzQXZhaWxhYmxlICAgICAgPSBzdGF0ZSA9PT0gMDtcclxuICAgICAgY29uc3QgcHJldkF2YWlsYWJsZSAgICA9IGFycltpbmRleCAtIDFdID09PSAwO1xyXG4gICAgICBjb25zdCBpc01vcm5pbmdCbG9ja2VkID0gKGlzQXZhaWxhYmxlICYmICFwcmV2QXZhaWxhYmxlKTtcclxuXHJcbiAgICAgIGlmICghdHJlZVt5ZWFyXSkge1xyXG4gICAgICAgIHRyZWVbeWVhcl0gPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0cmVlW3llYXJdW21vbnRoXSkge1xyXG4gICAgICAgIHRyZWVbeWVhcl1bbW9udGhdID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXlTaGlmdCkge1xyXG4gICAgICAgIGRheSAgICAgID0gZGF5U2hpZnQ7XHJcbiAgICAgICAgZGF5U2hpZnQgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiBtaW5TdGF5ID4gYXZhaWxhYmxlIGRheXMgaW4gZnV0dXJlXHJcbiAgICAgIC8vIGNvbnNpZGVyIGN1cnJlbnQgZGF5IGFzIHVuYXZhaWxhYmxlIGFzIHdlbGxcclxuICAgICAgLy8gaWYgKGlzQXZhaWxhYmxlICYmIG1pblN0YXkgPiAxKSB7XHJcbiAgICAgIC8vICAgbGV0IGRheXNBdmFpbGFibGUgPSAxO1xyXG4gICAgICAvLyAgIGxldCBpICAgICAgICAgICAgID0gaW5kZXggKyAxO1xyXG4gICAgICAvLyAgIHdoaWxlIChhcnJbaV0gPT09IDApIHtcclxuICAgICAgLy8gICAgIGRheXNBdmFpbGFibGUgKz0gMTtcclxuICAgICAgLy8gICAgIGkgKz0gMTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vICAgaWYgKG1pblN0YXkgPiBkYXlzQXZhaWxhYmxlKSB7XHJcbiAgICAgIC8vICAgICBpc0F2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdHJlZVt5ZWFyXVttb250aF1bZGF5XSA9IHtcclxuICAgICAgICByYXRlLFxyXG4gICAgICAgIG1pblN0YXksXHJcbiAgICAgICAgaXNBdmFpbGFibGUsXHJcbiAgICAgICAgaXNNb3JuaW5nQmxvY2tlZCxcclxuICAgICAgICBpc091dEF2YWlsYWJsZTogKCFpc01vcm5pbmdCbG9ja2VkICYmIGlzQXZhaWxhYmxlKSB8fCAoIWlzQXZhaWxhYmxlICYmIHByZXZBdmFpbGFibGUgPT09IHRydWUpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoZGF5IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgZGF5ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1vbnRoID4gMTApIHtcclxuICAgICAgICAgIG1vbnRoID0gMDtcclxuICAgICAgICAgIHllYXIgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9udGggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRyZWU7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlQcm9wZXJ0eSh5ZWFyLCBtb250aCwgZGF5LCBwcm9wZXJ0eSkge1xyXG4gICAgbGV0IHByb3A7XHJcblxyXG4gICAgaWYgKHRoaXMubWFwKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcHJvcCA9IHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldW3Byb3BlcnR5XTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3A7XHJcbiAgfVxyXG5cclxuICBpc0RheURpc2FibGVkKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuICAgIHJldHVybiAhdGhpcy5nZXREYXlQcm9wZXJ0eSh5ZWFyLCBtb250aCwgZGF5LCAnaXNBdmFpbGFibGUnKTtcclxuICB9XHJcbn1cclxuIiwiLyogZ2xvYmFsIE5vZGUsIGRvY3VtZW50LCBjb25zb2xlLCByZXF1aXJlICovXHJcbmltcG9ydCB7XHJcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgaXNBcnJheSwgaXNPYmplY3QsIEVtaXR0ZXIsXHJcbiAgbWVyZ2UsIGVsZW1lbnRGcm9tU3RyaW5nLCB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsIGRlc3Ryb3lFbGVtZW50LCBtb250aExlbmd0aCwgaXMsIGlzRnVuY3Rpb24sXHJcbiAgaXNOdW1lcmljLCB0cmF2ZXJzZU9iaiwgYWpheCwgaXNJbnNpZGUsIGN1cnJlbmN5Rm9ybWF0dGVyXHJcbn0gZnJvbSAnd2lkZ2V0LXV0aWxzJztcclxuXHJcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJztcclxuXHJcbmltcG9ydCAqIGFzIHRwbHMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5pbXBvcnQgQ2FsZW5kYXJUcmVlIGZyb20gJy4vY2FsZW5kYXItdHJlZSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuL2xvY2FsZXMnO1xyXG5cclxuaW1wb3J0IHsgc3RyZnRpbWUgfSBmcm9tICdzdHJ0aW1lJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZGF0ZVRvSXNvLCBpc0xhdGVyLCBpc0N1cnJlbnQsIHZhbGlkYXRpb25PZlJhbmdlLCB0Rm9ybWF0dGVyLCBkYXRlVG9BcnJheVxyXG59IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jYWxlbmRhci5zY3NzJztcclxuXHJcbmltcG9ydCB1dGlsc1N0eWxlcyBmcm9tICd3aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgRW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3Iob3B0cywgbWFwcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSAgICA9IGNvbmZpZy5uYW1lO1xyXG4gICAgdGhpcy5WRVJTSU9OID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcclxuICAgIHRoaXMuQ1NTX1BSRUZJWCA9IGNvbmZpZy5jc3NQcmVmaXg7XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdHMpKSB7XHJcbiAgICAgIGlmICghb3B0cy5lbCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyKCdlbCBtdXN0IGJlIEhUTUwgZWxlbWVudCcsICdlcnJvcicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY29uZmlnRGF0YXNldCA9IG1lcmdlKGNvbmZpZywgb3B0cy5lbC5kYXRhc2V0KTtcclxuICAgICAgdGhpcy5vcHRzICAgICAgICAgICA9IG1lcmdlKGNvbmZpZ0RhdGFzZXQsIG9wdHMpO1xyXG5cclxuICAgICAgdGhpcy5vcHRzID0gdHJhdmVyc2VPYmoodGhpcy5vcHRzLCAoYSkgPT4gYSwgKGIpID0+IHtcclxuICAgICAgICBpZiAoYiA9PT0gJ3RydWUnIHx8IGIgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgIHJldHVybiAoYiA9PT0gJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVtZXJpYyhiKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0cy5pc0Ryb3BEb3duKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q2FsZW5kYXJEcm9wKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IG9wdHMuZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMub3B0cy5sYW5nICAgICAgICA9ICh0aGlzLm9wdHMubGFuZyAmJiB0aGlzLm9wdHMubGFuZyBpbiBsb2NhbGVzKSA/IHRoaXMub3B0cy5sYW5nIDogJ2VuLVVTJztcclxuICAgICAgdGhpcy5sb2NhbGUgICAgICAgICAgID0gbG9jYWxlc1t0aGlzLm9wdHMubGFuZ107XHJcbiAgICAgIHRoaXMuZm9ybWF0ICAgICAgICAgICA9IHRoaXMub3B0cy5mb3JtYXREYXRlIHx8IHRoaXMubG9jYWxlLmZvcm1hdERhdGUgfHwgJyVEJztcclxuICAgICAgdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrID0gdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrIHx8IHRoaXMubG9jYWxlLnN0YXJ0T2ZXZWVrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9tICAgPSB7fTtcclxuICAgIHRoaXMuY1RyZWUgPSBuZXcgQ2FsZW5kYXJUcmVlKHZhbGlkYXRpb25PZlJhbmdlLCB7fSk7XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG1hcHMpKSB7XHJcbiAgICAgIHRoaXMuY1RyZWUuYWRkTWFwcyhtYXBzLCBtYXBzLnN0YXJ0X2RhdGUgfHwgdGhpcy5vcHRzLmN1cnJEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3Rpb24gYW5kIGhpZ2hsaWdodHNcclxuICAgIHRoaXMuaXNTZWxlY3RpbmcgICAgICAgPSBmYWxzZTtcclxuICAgIHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMgPSBbXTtcclxuICAgIHRoaXMuaGFzVmFsaWRSYW5nZSAgICAgPSB0cnVlO1xyXG5cclxuICAgIC8vIHVzZXIgc2VsZWN0cyBlbmQgZGF0ZSBmaXJzdFxyXG4gICAgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID0gdGhpcy5vcHRzLmlzUmV2ZXJzZVNlbGVjdGFibGU7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuY2FsZW5kYXIsIHV0aWxzU3R5bGVzLnJlc2V0KTtcclxuXHJcbiAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0cGxzLm1haW4pKTtcclxuICAgIHRoaXMuZG9tLmZvcndhcmQgICAgICAgPSB0aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnRGcm9tU3RyaW5nKHRwbHMuZm9yd2FyZCkpO1xyXG4gICAgdGhpcy5kb20uYmFjayAgICAgICAgICA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodHBscy5iYWNrKSk7XHJcbiAgICB0aGlzLnJlbmRlck1vbnRocyh0aGlzLm9wdHMueWVhclN0YXJ0LCB0aGlzLm9wdHMubW9udGhTdGFydCk7XHJcblxyXG4gICAgdGhpcy5hZGRCdG5zRXZlbnRzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlICYmIHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcclxuICAgICAgdGhpcy5pbnB1dHNUb1ZhbHVlcygpO1xyXG5cclxuICAgICAgdGhpcy5vcHRzLmVsU3RhcnRBdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLmlucHV0c1RvVmFsdWVzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5vcHRzLmVsRW5kQXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dHNUb1ZhbHVlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLnJlbnRhbElkKSB7XHJcbiAgICAgIHRoaXMubG9hZE1hcHModGhpcy5vcHRzLnJlbnRhbElkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvZ2dlcignaW5pdGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ2luaXQnKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNlbGVjdGlvbk9yZGVyKGlzUmV2ZXJzZSkge1xyXG4gICAgaWYgKChpc1JldmVyc2UgIT09IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgJiYgIXRoaXMuaXNTZWxlY3RpbmcpIHtcclxuICAgICAgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID0gaXNSZXZlcnNlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJNb250aHModGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJNb250aHMoeWVhclN0YXJ0LCBtb250aFN0YXJ0KSB7XHJcbiAgICAvLyBjb25zdHJ1Y3QgZG9tIHRyZWVcclxuICAgIGNvbnN0IHtcclxuICAgICAgdHJlZSwgeWVhckVuZCwgbW9udGhFbmQsIG1vbnRoc1xyXG4gICAgfSA9IHRoaXMuY3JlYXRlVHJlZSh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQsIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzKTtcclxuXHJcbiAgICB0aGlzLmNUcmVlLmFkZFRyZWUodHJlZSk7XHJcblxyXG4gICAgdGhpcy5tb250aFN0YXJ0ID0gbW9udGhTdGFydDtcclxuICAgIHRoaXMueWVhclN0YXJ0ICA9IHllYXJTdGFydDtcclxuXHJcbiAgICB0aGlzLm1vbnRoRW5kID0gbW9udGhFbmQ7XHJcbiAgICB0aGlzLnllYXJFbmQgID0geWVhckVuZDtcclxuXHJcbiAgICB0aGlzLnJlY292ZXJTZWxlY3Rpb25zKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA/IHN0eWxlcy5yZXZlcnNlZCA6IHN0eWxlcy5kaXJlY3QpO1xyXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPyBzdHlsZXMuZGlyZWN0IDogc3R5bGVzLnJldmVyc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRvbS5tb250aHMgPSBtb250aHM7XHJcbiAgICB0aGlzLmRvbS5tb250aHMuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyLmFwcGVuZENoaWxkKG0pO1xyXG4gICAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUpIHtcclxuICAgICAgICB0aGlzLmFkZE1vbnRoRXZlbnRzKG0pO1xyXG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5hY3Rpb25zRW5hYmxlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy5vcHRzLmVuYWJsZUFsbERheXMpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlQmFja0J0bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjb3ZlclNlbGVjdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFN0YXJ0KHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuY1RyZWUuc2VsZWN0RGF5KC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RFbmQodGhpcy5zZWxlY3Rpb25FbmQsIHRoaXMuY1RyZWUuc2VsZWN0RGF5KC4uLnRoaXMuc2VsZWN0aW9uRW5kKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZWxlY3Rpb25FbmQpIHtcclxuICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UoLi4udGhpcy5oaWdobGlnaHRlZEJvdW5kcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSh0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVCYWNrQnRuKCkge1xyXG4gICAgaWYgKHRoaXMub3B0cy5pc0JhY2tEaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBzdGFydERhdGUgICAgICAgID0gZGF0ZVRvSXNvKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQsIDEpO1xyXG4gICAgICBjb25zdCBjdXJyICAgICAgICAgICAgID0gZGF0ZVRvSXNvKHRoaXMub3B0cy5jdXJyRGF0ZS5nZXRGdWxsWWVhcigpLCB0aGlzLm9wdHMuY3VyckRhdGUuZ2V0TW9udGgoKSwgMSk7XHJcbiAgICAgIHRoaXMuZG9tLmJhY2suZGlzYWJsZWQgPSBzdGFydERhdGUgPD0gY3VycjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUxvYWRpbmcoKSB7XHJcbiAgICBpZiAoIWhhc0NsYXNzKHRoaXMuZWwsIHN0eWxlcy5sb2FkaW5nKSkge1xyXG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMubG9hZGluZyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9hZGluZy1zaG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMubG9hZGluZyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnbG9hZGluZy1oaWRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRNYXBzKG1hcHMpIHtcclxuICAgIHRoaXMuY1RyZWUucmVwbGFjZU1hcHMobWFwcywgbWFwcy5zdGFydF9kYXRlKTtcclxuICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xyXG4gICAgdGhpcy5yZW5kZXJNb250aHMoXHJcbiAgICAgIHRoaXMub3B0cy55ZWFyU3RhcnQgfHwgdGhpcy55ZWFyU3RhcnQsXHJcbiAgICAgIHRoaXMub3B0cy5tb250aFN0YXJ0IHx8IHRoaXMubW9udGhTdGFydFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZEJ0bnNFdmVudHMoKSB7XHJcbiAgICB0aGlzLmRvbS5mb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMueWVhckVuZCwgdGhpcy5tb250aEVuZCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tLmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcclxuICAgICAgbGV0IG1vbnRoVG9SZW5kZXIgPSB0aGlzLm1vbnRoU3RhcnQgLSB0aGlzLm9wdHMuZGlzcGxheU1vbnRocztcclxuICAgICAgbGV0IHllYXJUb1JlbmRlciAgPSB0aGlzLnllYXJTdGFydDtcclxuXHJcbiAgICAgIGlmIChtb250aFRvUmVuZGVyIDwgMCkge1xyXG4gICAgICAgIG1vbnRoVG9SZW5kZXIgKz0gMTI7XHJcbiAgICAgICAgeWVhclRvUmVuZGVyIC09IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHllYXJUb1JlbmRlciwgbW9udGhUb1JlbmRlcik7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkTW9udGhFdmVudHMoZWwpIHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgaXNFbmRGaXJzdCA9IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZTtcclxuICAgICAgY29uc3Qgd2Vla0RheUVsICA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgJ2RhdGEtdmFsdWUnKS5wYXJlbnQ7XHJcbiAgICAgIGxldCB2YWx1ZSwgY2VsbDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc2V0U2VsZWN0aW9uT25Fc2NhcGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScgfHwga2V5ID09PSAnRXNjJyB8fCBrZXkgPT09IDI3KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0U2VsZWN0aW9uT25Fc2NhcGUsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gY2FuY2VsIHNlbGVjdGlvbiBpZiBkYXkgaXMgaW52YWxpZFxyXG4gICAgICBpZiAod2Vla0RheUVsICYmIGhhc0NsYXNzKHdlZWtEYXlFbCwgc3R5bGVzLmludmFsaWQpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCByZXNldFNlbGVjdGlvbk9uRXNjYXBlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcmVzZXRTZWxlY3Rpb25PbkVzY2FwZSwgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xyXG4gICAgICAgICh7XHJcbiAgICAgICAgICB2YWx1ZSwgcGFyZW50OiBjZWxsXHJcbiAgICAgICAgfSA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgaXNFbmRGaXJzdCA/ICdkYXRhLWVuYWJsZWQnIDogJ2RhdGEtYXZhaWxhYmxlLW91dCcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAoe1xyXG4gICAgICAgICAgdmFsdWUsIHBhcmVudDogY2VsbFxyXG4gICAgICAgIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsIGlzRW5kRmlyc3QgPyAnZGF0YS1hdmFpbGFibGUtb3V0JyA6ICdkYXRhLWVuYWJsZWQnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IFtlbC55ZWFyLCBlbC5tb250aCwgcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSwgMTApXTtcclxuXHJcbiAgICAgICAgLy8gZm9yIHNpbXBsaWNpdHkganVzdCByZXNldCBzZWxlY3Rpb24gd2hlbiB1c2VyIGludGVyYWN0cyBhZ2FpblxyXG4gICAgICAgIGlmICghdGhpcy5pc1NlbGVjdGluZyAmJiB0aGlzLnNlbGVjdGlvbkVuZCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0U2VsZWN0aW9uT25Fc2NhcGUsIHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRW5kRmlyc3QpIHtcclxuICAgICAgICAgIHRoaXMuZW5kRGF0ZUZpcnN0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHJlc2V0U2VsZWN0aW9uT25Fc2NhcGUsIHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVNlbGVjdGlvbihpc0VuZEZpcnN0LCBkYXRlVmFsdWUsIGNlbGwpO1xyXG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5pc0Ryb3BEb3duICYmIHRoaXMuY2FsRHJvcCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcChudWxsLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHBhcmVudDogY2VsbCB9ID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS12YWx1ZScpO1xyXG5cclxuICAgICAgaWYgKGlzKHZhbHVlKSAmJiBjZWxsKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IFtlbC55ZWFyLCBlbC5tb250aCwgcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSwgMTApXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcpIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSAmJiB0aGlzLnNlbGVjdGlvbkVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UodGhpcy5zZWxlY3Rpb25TdGFydCwgY3VycmVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCImXCJdIH1dICovXHJcbiAgICAgIC8vIHNpbXVsYXRlICdtb3VzZWxlYXZlJ1xyXG4gICAgICBpZiAoIWUucmVsYXRlZFRhcmdldFxyXG4gICAgICAgIHx8IChlLnJlbGF0ZWRUYXJnZXQgIT09IGVsLmJvZHkgJiYgIShlbC5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldClcclxuICAgICAgICAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdGluZyAmJiBpc0xhdGVyKHRoaXMuc2VsZWN0aW9uU3RhcnQsIGRhdGVWYWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RFbmRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcclxuXHJcbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHN0eWxlcy5zZWxlY3RpbmdEaXJlY3QpO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xyXG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0KTtcclxuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0U3RhcnRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcclxuICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nICYmIGlzTGF0ZXIoZGF0ZVZhbHVlLCB0aGlzLnNlbGVjdGlvbkVuZCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xyXG5cclxuICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnNlbGVjdGluZ1JldmVyc2VkKTtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcclxuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnNlbGVjdGluZ1JldmVyc2VkKTtcclxuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcclxuICAgIHRoaXMuc2VsZWN0U3RhcnQoZGF0ZVZhbHVlLCBjZWxsKTtcclxuICAgIHRoaXMuc3dpdGNoSW5wdXRGb2N1cygnZW5kJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1zdGFydCcsIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XHJcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25TZWxlY3RTdGFydCkpIHtcclxuICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0U3RhcnQoZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEVuZEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcclxuICAgIHRoaXMuc2VsZWN0RW5kKGRhdGVWYWx1ZSwgY2VsbCk7XHJcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ3N0YXJ0Jyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1lbmQnLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlLCB0cnVlKSwgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSkpO1xyXG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uU2VsZWN0RW5kKSkge1xyXG4gICAgICB0aGlzLm9wdHMub25TZWxlY3RFbmQoZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUhpZ2hsaWdodCgpIHtcclxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkQm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5zZWxlY3RSYW5nZSguLi50aGlzLmhpZ2hsaWdodGVkQm91bmRzKTtcclxuICAgICAgcmFuZ2UubWFwKChhKSA9PiByZW1vdmVDbGFzcyhhLCBzdHlsZXMuaGlnaGxpZ2h0ZWQsIHN0eWxlcy5pbnZhbGlkKSk7XHJcblxyXG4gICAgICB0aGlzLmhhc1ZhbGlkUmFuZ2UgICAgID0gdHJ1ZTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlnaExpZ2h0UmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgY29uc3QgeyByYW5nZSwgaXNWYWxpZCB9ID0gdGhpcy5zZWxlY3RSYW5nZShzdGFydCwgZW5kKTtcclxuICAgIGxldCBoYXNWYWxpZFJhbmdlICAgICAgICA9IHRoaXMub3B0cy5yZW50YWxJZCA/IGlzVmFsaWQgOiB0cnVlO1xyXG4gICAgY29uc3QgbWluU3RheSAgICAgICAgICAgID0gdGhpcy5vcHRzLnJlbnRhbElkID8gKHRoaXMub3B0cy5hbGxvd1Nob3J0ZXJNaW5TdGF5U2VsZWN0aW9uID8gMSA6IHRoaXMuY1RyZWUuZ2V0RGF5UHJvcGVydHkoLi4uc3RhcnQsICdtaW5TdGF5JykpIDogdGhpcy5vcHRzLm1pblN0YXk7XHJcbiAgICBsZXQgbWF4U3RheSAgICAgICAgICAgICAgPSB0aGlzLm9wdHMucmVudGFsSWQgPyAodGhpcy5vcHRzLmFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbiA/IDEgOiB0aGlzLmNUcmVlLmdldERheVByb3BlcnR5KC4uLnN0YXJ0LCAnbWF4U3RheScpKSA6IHRoaXMub3B0cy5tYXhTdGF5O1xyXG5cclxuICAgIG1heFN0YXkgPSAobWF4U3RheSA9PT0gMCB8fCAhbWF4U3RheSkgPyBJbmZpbml0eSA6IG1heFN0YXk7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkocmFuZ2UpKSB7XHJcbiAgICAgIC8vIGNoZWNrIHRoYXQgcmFuZ2UgaXMgdmFsaWQgYW5kIGxvbmdlciB0aGFuIG1pblN0YXkgYW5kIHNob3J0ZXIgdGhhbiBtYXhTdGF5XHJcbiAgICAgIHRoaXMuaGFzVmFsaWRSYW5nZSA9IGhhc1ZhbGlkUmFuZ2UgPSBoYXNWYWxpZFJhbmdlICYmIHJhbmdlLmxlbmd0aCA+IG1pblN0YXkgJiYgcmFuZ2UubGVuZ3RoIDwgbWF4U3RheTtcclxuXHJcbiAgICAgIHJhbmdlLm1hcCgoYSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZW1vdmVDbGFzcyhhLCBzdHlsZXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gMCAmJiBpbmRleCArIDEgIT09IHJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgYWRkQ2xhc3MoYSwgc3R5bGVzLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUNsYXNzKGEsIHN0eWxlcy5oaWdobGlnaHRlZCwgc3R5bGVzLmludmFsaWQpO1xyXG4gICAgICAgIGFkZENsYXNzKGEsIGhhc1ZhbGlkUmFuZ2UgPyBzdHlsZXMuaGlnaGxpZ2h0ZWQgOiBzdHlsZXMuaW52YWxpZCk7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtzdGFydCwgZW5kXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzVmFsaWRSYW5nZTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXNldHMgc2VsZWN0aW9uLCByZW1vdmVzIGhpZ2hsaWdodHNcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge0NhbGVuZGFyfVxyXG4gICAqL1xyXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xyXG4gICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcclxuICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1yZXNldCcsIHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcclxuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vbkNsZWFyU2VsZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLm9wdHMub25DbGVhclNlbGVjdGlvbih0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkVuZCAgID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5jZWxsQSkge1xyXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmNlbGxBLCBzdHlsZXMuc2VsZWN0ZWRTdGFydCk7XHJcbiAgICAgIHRoaXMuY2VsbEEgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNlbGxCKSB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY2VsbEIsIHN0eWxlcy5zZWxlY3RlZEVuZCk7XHJcbiAgICAgIHRoaXMuY2VsbEIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdHMuaXNEcm9wRG93biAmJiB0aGlzLm9wdHMuZWxTdGFydEF0ICYmIHRoaXMub3B0cy5lbEVuZEF0KSB7XHJcbiAgICAgIHRoaXMub3B0cy5lbFN0YXJ0QXQudmFsdWUgPSBudWxsO1xyXG4gICAgICB0aGlzLm9wdHMuZWxFbmRBdC52YWx1ZSAgID0gbnVsbDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xyXG4gICAgICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0LnZhbHVlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgaWYgKGlzTGF0ZXIoc3RhcnQsIGVuZCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY1RyZWUuc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByYW5nZTogbnVsbCxcclxuICAgICAgaXNWYWxpZDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTdGFydChkYXRlVmFsdWUsIGNlbGwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBkYXRlVmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuY2VsbEEpIHtcclxuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jZWxsQSwgc3R5bGVzLnNlbGVjdGVkU3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjZWxsKSB7XHJcbiAgICAgIGFkZENsYXNzKGNlbGwsIHN0eWxlcy5zZWxlY3RlZFN0YXJ0KTtcclxuICAgICAgdGhpcy5jZWxsQSA9IGNlbGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZVRvSW5wdXQoJ3N0YXJ0JywgZGF0ZVZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEVuZChkYXRlVmFsdWUsIGNlbGwpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gZGF0ZVZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmNlbGxCKSB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY2VsbEIsIHN0eWxlcy5zZWxlY3RlZEVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNlbGwpIHtcclxuICAgICAgYWRkQ2xhc3MoY2VsbCwgc3R5bGVzLnNlbGVjdGVkRW5kKTtcclxuICAgICAgdGhpcy5jZWxsQiA9IGNlbGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZVRvSW5wdXQoJ2VuZCcsIGRhdGVWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUcmVlKHllYXJTdGFydCwgbW9udGhTdGFydCwgdGltZXMpIHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtdO1xyXG4gICAgY29uc3QgdHJlZSAgID0ge307XHJcbiAgICBsZXQgbW9udGhFbmQgPSBtb250aFN0YXJ0O1xyXG4gICAgbGV0IHllYXJFbmQgID0geWVhclN0YXJ0O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBtRG9tID0gdGhpcy5kb21Nb250aCh5ZWFyRW5kLCBtb250aEVuZCk7XHJcblxyXG4gICAgICBtb250aHMucHVzaChtRG9tKTtcclxuXHJcbiAgICAgIGlmICghdHJlZVt5ZWFyRW5kXSkge1xyXG4gICAgICAgIHRyZWVbeWVhckVuZF0gPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0cmVlW3llYXJFbmRdW21vbnRoRW5kXSkge1xyXG4gICAgICAgIHRyZWVbeWVhckVuZF1bbW9udGhFbmRdID0gbURvbS5kYXlFbGVtZW50cyB8fCBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1vbnRoRW5kID4gMTApIHtcclxuICAgICAgICBtb250aEVuZCA9IDA7XHJcbiAgICAgICAgeWVhckVuZCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vbnRoRW5kICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0cmVlLFxyXG4gICAgICB5ZWFyRW5kLFxyXG4gICAgICBtb250aEVuZCxcclxuICAgICAgbW9udGhzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZG9tTW9udGgoeWVhciwgbW9udGgpIHtcclxuICAgIGNvbnN0IG1vbnRoRG9tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGVsZW1lbnRGcm9tU3RyaW5nKHRwbHMubW9udGgpO1xyXG4gICAgbW9udGhEb20ucXVlcnlTZWxlY3RvcihgLiR7c3R5bGVzLnRhYmxlSGVhZGVyfSB0cmApLmlubmVySFRNTCA9IHRoaXMuaGVhZGVyVHBsU3RyaW5nKCk7XHJcbiAgICBtb250aERvbS5xdWVyeVNlbGVjdG9yKGAuJHtzdHlsZXMuY2FwdGlvbn1gKS5pbm5lckhUTUwgICAgICAgID0gYCR7dGhpcy5sb2NhbGUubG9uZ01vbnRoTmFtZXNbbW9udGhdfSAke3llYXJ9YDtcclxuXHJcbiAgICBtb250aERvbS5ib2R5ICAgICAgICAgICA9IG1vbnRoRG9tLnF1ZXJ5U2VsZWN0b3IoYC4ke3N0eWxlcy5ib2R5fWApO1xyXG4gICAgbW9udGhEb20uYm9keS5pbm5lckhUTUwgPSB0aGlzLmRheXNUcGxTdHJpbmcoeWVhciwgbW9udGgpO1xyXG5cclxuICAgIG1vbnRoRG9tLm1vbnRoICAgICAgID0gbW9udGg7XHJcbiAgICBtb250aERvbS55ZWFyICAgICAgICA9IHllYXI7XHJcbiAgICBtb250aERvbS5kYXlFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobW9udGhEb20ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xyXG5cclxuICAgIHJldHVybiBtb250aERvbTtcclxuICB9XHJcblxyXG4gIGhlYWRlclRwbFN0cmluZygpIHtcclxuICAgIC8vIGp1c3QgdG8gbWFrZSBsaWZlIGVhc2llciB3aXRoIHN0YXJ0IG9mIHRoZSB3ZWVrIGNhbGN1bGF0aW9uXHJcbiAgICBjb25zdCBoZWFkZXIgICAgICAgICAgICAgICAgID0gW107XHJcbiAgICBjb25zdCB3ZWVrZGF5c0xhYmVsc0V4dGVuZGVkID0gdGhpcy5sb2NhbGUuc2hvcnRXZWVrZGF5TmFtZXMuY29uY2F0KHRoaXMubG9jYWxlLnNob3J0V2Vla2RheU5hbWVzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0cy5kYXlzUGVyV2VlazsgaSArPSAxKSB7XHJcbiAgICAgIGhlYWRlci5wdXNoKHRwbHMud2Vla0RheUxhYmVsKHdlZWtkYXlzTGFiZWxzRXh0ZW5kZWRbaSArIHRoaXMub3B0cy5zdGFydE9mV2Vla10pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZWFkZXIuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBkYXlzVHBsU3RyaW5nKHllYXIsIG1vbnRoKSB7XHJcbiAgICBjb25zdCBzdGFydE9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCk7XHJcbiAgICBjb25zdCBkYXlzSW5Nb250aCAgPSBtb250aExlbmd0aCh5ZWFyLCBtb250aCk7XHJcbiAgICBjb25zdCByb3dUZW1wbGF0ZSAgPSB0cGxzLndlZWtSb3c7XHJcbiAgICBjb25zdCBtb250aFRwbCAgICAgPSBbXTtcclxuICAgIGNvbnN0IHdlZWtTaGlmdCAgICA9ICh0aGlzLm9wdHMuZGF5c1BlcldlZWsgLSB0aGlzLm9wdHMuc3RhcnRPZldlZWspO1xyXG5cclxuICAgIGxldCByb3dzICAgICAgICAgICAgICAgPSA1O1xyXG4gICAgbGV0IHdlZWtTaGlmdENvcnJlY3RlZCA9IHN0YXJ0T2ZNb250aCArIHdlZWtTaGlmdDtcclxuICAgIGxldCBkYXlDb3VudGVyICAgICAgICAgPSAwO1xyXG4gICAgbGV0IGRheU9mTW9udGggICAgICAgICA9IDE7XHJcblxyXG4gICAgLy8gZG9uJ3QgcmVuZGVyIGZ1bGwgZW1wdHkgd2Vla1xyXG4gICAgaWYgKHdlZWtTaGlmdENvcnJlY3RlZCA+PSB0aGlzLm9wdHMuZGF5c1BlcldlZWspIHtcclxuICAgICAgd2Vla1NoaWZ0Q29ycmVjdGVkIC09IHRoaXMub3B0cy5kYXlzUGVyV2VlaztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cnkgdG8gZmlndXJlIG91dCBpZiA1IHJvd3MgaXMgZW5vdWdoIGZvciB0aGUgbW9udGhcclxuICAgIGlmIChyb3dzICogdGhpcy5vcHRzLmRheXNQZXJXZWVrIDwgd2Vla1NoaWZ0Q29ycmVjdGVkICsgZGF5c0luTW9udGgpIHtcclxuICAgICAgcm93cyA9IDY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGVhY2ggd2VlayAoNSBvciA2KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qgd2VlayA9IFtdO1xyXG4gICAgICAvLyBvcGVuIHRhZyA8dHI+XHJcbiAgICAgIHdlZWsucHVzaChyb3dUZW1wbGF0ZShpKS5vcGVuKTtcclxuXHJcbiAgICAgIC8vIHB1c2ggZGF5cyBpbiB3ZWVrXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHRzLmRheXNQZXJXZWVrOyBqICs9IDEpIHtcclxuICAgICAgICAvLyBwdXNoaW5nIGFjdHVhbCBkYXlzIDEuLi5kYXlzSW5Nb250aFxyXG4gICAgICAgIGlmICgoZGF5Q291bnRlciA+PSB3ZWVrU2hpZnRDb3JyZWN0ZWQpICYmIGRheU9mTW9udGggPD0gZGF5c0luTW9udGgpIHtcclxuICAgICAgICAgIHdlZWsucHVzaCh0aGlzLmRheVRwbFN0cmluZyh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCkpO1xyXG4gICAgICAgICAgZGF5T2ZNb250aCArPSAxO1xyXG4gICAgICAgICAgLy8gcHVzaGluZyBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBkYXlzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdlZWsucHVzaCh0cGxzLndlZWtEYXlQbGFjZWhvbGRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXlDb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY2xvc2UgdGFnIDwvdHI+IG9mIHdlZWtcclxuICAgICAgd2Vlay5wdXNoKHJvd1RlbXBsYXRlKCkuY2xvc2UpO1xyXG4gICAgICAvLyBwdXNoIGNvbXBsZXRlZCB3ZWVrIHRvIG1vbnRoIHRlbXBsYXRlXHJcbiAgICAgIG1vbnRoVHBsLnB1c2god2Vlay5qb2luKCcnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoVHBsLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgZGF5VHBsU3RyaW5nKHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKSB7XHJcbiAgICBjb25zdCB7IGNUcmVlIH0gICA9IHRoaXM7XHJcbiAgICBjb25zdCByYXRlICAgICAgICA9IHRoaXMub3B0cy5zaG93UmF0ZXMgPyBjVHJlZS5nZXREYXlQcm9wZXJ0eSh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCwgJ3JhdGUnKSA6IDA7XHJcbiAgICBjb25zdCBtaW5TdGF5ICAgICA9IHRoaXMub3B0cy5zaG93TWluU3RheSA/IGNUcmVlLmdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoLCAnbWluU3RheScpIDogMDtcclxuICAgIGNvbnN0IG1heFN0YXkgICAgID0gdGhpcy5vcHRzLnNob3dNYXhTdGF5ID8gY1RyZWUuZ2V0RGF5UHJvcGVydHkoeWVhciwgbW9udGgsIGRheU9mTW9udGgsICdtYXhTdGF5JykgOiAwO1xyXG5cclxuICAgIGxldCBpc0Rpc2FibGVkICAgICAgPSBjVHJlZS5pc0RheURpc2FibGVkKHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKTtcclxuICAgIGxldCBpc0VuYWJsZWRTdGFydCAgPSBjVHJlZS5nZXREYXlQcm9wZXJ0eSh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCwgJ2lzT3V0QXZhaWxhYmxlJyk7XHJcbiAgICBsZXQgaXNEaXNhYmxlZEVuZCAgID0gY1RyZWUuZ2V0RGF5UHJvcGVydHkoeWVhciwgbW9udGgsIGRheU9mTW9udGgsICdpc01vcm5pbmdCbG9ja2VkJyk7XHJcblxyXG4gICAgY29uc3QgY0RhdGUgICAgICAgICA9IHRoaXMub3B0cy5jdXJyRGF0ZTtcclxuICAgIGNvbnN0IGNEYXRlQXJyYXkgICAgPSBbY0RhdGUuZ2V0VVRDRnVsbFllYXIoKSwgY0RhdGUuZ2V0VVRDTW9udGgoKSwgY0RhdGUuZ2V0RGF0ZSgpXTtcclxuICAgIGNvbnN0IGRhdGVBcnJheSAgICAgPSBbeWVhciwgbW9udGgsIGRheU9mTW9udGhdO1xyXG4gICAgY29uc3QgaXNDdXJyZW50RGF5ICA9IGlzQ3VycmVudChkYXRlQXJyYXksIGNEYXRlQXJyYXkpO1xyXG5cclxuICAgIC8vIGRpc2FibGUgcGFzdCBkYXRlc1xyXG4gICAgaWYgKGlzTGF0ZXIoZGF0ZUFycmF5LCBjRGF0ZUFycmF5KSAmJiAhaXNDdXJyZW50RGF5KSB7XHJcbiAgICAgIGlzRGlzYWJsZWQgICAgICA9IHRydWU7XHJcbiAgICAgIGlzRGlzYWJsZWRFbmQgICA9IHVuZGVmaW5lZDtcclxuICAgICAgaXNFbmFibGVkU3RhcnQgID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc2FibGUgY3VycmVudCBkYXkgbW9ybmluZ1xyXG4gICAgaWYgKGlzQ3VycmVudERheSAmJiBpc0VuYWJsZWRTdGFydCAhPT0gZmFsc2UpIHtcclxuICAgICAgaXNEaXNhYmxlZCAgICAgID0gZmFsc2U7XHJcbiAgICAgIGlzRGlzYWJsZWRFbmQgICA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm90IHJlbnRhbElkIGFuZCBubyBtYXBzLCBqdXN0IHJlbmRlciBwbGFpbiBjYWxlbmRhclxyXG4gICAgaWYgKCF0aGlzLm9wdHMucmVudGFsSWQgJiYgaXNMYXRlcihjRGF0ZUFycmF5LCBkYXRlQXJyYXkpIHx8IHRoaXMub3B0cy5lbmFibGVBbGxEYXlzKSB7XHJcbiAgICAgIGlzRGlzYWJsZWQgICAgICA9IGZhbHNlO1xyXG4gICAgICBpc0VuYWJsZWRTdGFydCAgPSB0cnVlO1xyXG4gICAgICBpc0Rpc2FibGVkRW5kICAgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHBscy53ZWVrRGF5KFxyXG4gICAgICBkYXlPZk1vbnRoLFxyXG4gICAgICBpc0Rpc2FibGVkLFxyXG4gICAgICBpc0Rpc2FibGVkRW5kLFxyXG4gICAgICBpc0VuYWJsZWRTdGFydCxcclxuICAgICAgaXNDdXJyZW50RGF5LFxyXG4gICAgICByYXRlLFxyXG4gICAgICAodGhpcy5vcHRzLmFsbG93U2hvcnRlck1pblN0YXlTZWxlY3Rpb24gPyAxIDogbWluU3RheSksXHJcbiAgICAgICh0aGlzLm9wdHMuYWxsb3dMb25nZXJNYXhTdGF5U2VsZWN0aW9uID8gMCA6IG1heFN0YXkpLFxyXG4gICAgICBjdXJyZW5jeUZvcm1hdHRlcihNYXRoLnJvdW5kKHJhdGUpLCB0aGlzLm9wdHMubGFuZywgdGhpcy5vcHRzLmN1cnJlbmN5IHx8IHRoaXMubG9jYWxlLmN1cnJlbmN5KSxcclxuICAgICAgdEZvcm1hdHRlcihtaW5TdGF5LCB0aGlzLmxvY2FsZS5taW5TdGF5KSxcclxuICAgICAgdEZvcm1hdHRlcihtYXhTdGF5LCB0aGlzLmxvY2FsZS5tYXhTdGF5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lNb250aHMoKSB7XHJcbiAgICBpZiAodGhpcy5kb20gJiYgaXNBcnJheSh0aGlzLmRvbS5tb250aHMpKSB7XHJcbiAgICAgIHRoaXMuZG9tLm1vbnRocy5tYXAoKG0pID0+IGRlc3Ryb3lFbGVtZW50KG0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICByZXR1cm4gZGVzdHJveUVsZW1lbnQodGhpcy5lbCk7XHJcbiAgfVxyXG5cclxuICBsb2FkTWFwcyhpZCkge1xyXG4gICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XHJcblxyXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKG1hcHMpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XHJcblxyXG4gICAgICBpZiAoaXNBcnJheShtYXBzLmRhdGEpICYmIG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5kaXNhYmxlQXZhaWxhYml0eU1hcCkge1xyXG4gICAgICAgICAgbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5ID0gbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5LnJlcGxhY2UoL1swLTldL2csICcwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3B0cy5jdXJyZW5jeSA9IHRoaXMub3B0cy5jdXJyZW5jeSB8fCBtYXBzLmRhdGFbMF0uYXR0cmlidXRlcy5jdXJyZW5jeTtcclxuICAgICAgICB0aGlzLmVtaXQoJ21hcHMtbG9hZGVkJywgbWFwcyk7XHJcbiAgICAgICAgdGhpcy5hZGRNYXBzKG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyKCdleHBlY3RzIGpzb24tYXBpIGRhdGEgZm9ybWF0JywgJ2Vycm9yJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnbWFwcy1lcnJvcicpO1xyXG4gICAgICB0aGlzLmxvZ2dlcignU2VydmVyIGVycm9yIGhhcHBlbmVkJywgJ2Vycm9yJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFqYXgodGhpcy5vcHRzLnJlbnRhbFVybChpZCksIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZVNlbGVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xyXG4gICAgICBjb25zdCBzaW5nbGVJbnB1dERhdGVGb3JtYXQgPSB0aGlzLnNpbmdsZUlucHV0RGF0ZUZvcm1hdCB8fCB0aGlzLmxvY2FsZS5mb3JtYXREYXRlO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gc3RyZnRpbWUoZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQpLCBzaW5nbGVJbnB1dERhdGVGb3JtYXQsIHRoaXMubG9jYWxlKTtcclxuICAgICAgY29uc3QgZGF0ZUVuZCAgID0gc3RyZnRpbWUoZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uRW5kKSwgc2luZ2xlSW5wdXREYXRlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcblxyXG4gICAgICB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dC52YWx1ZSA9IGAke2RhdGVTdGFydH0gJHt0aGlzLm9wdHMuc2luZ2xlSW5wdXRTZXBhcmF0b3J9ICR7ZGF0ZUVuZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWNvbXBsZXRlZCcsIHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcclxuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vblNlbGVjdGlvbkNvbXBsZXRlZCkpIHtcclxuICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0aW9uQ29tcGxldGVkKFxyXG4gICAgICAgIGRhdGVUb0lzbyguLi50aGlzLnNlbGVjdGlvblN0YXJ0LCB0cnVlKSwgZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uRW5kLCB0cnVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdENhbGVuZGFyRHJvcCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50RnJvbVN0cmluZygnPGRpdj48L2Rpdj4nKTtcclxuICAgIHRoaXMuZWxUYXJnZXQgPSB0aGlzLm9wdHMuZWw7XHJcbiAgICB0aGlzLmVsICAgICAgID0gZWxlbWVudDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMub3B0cy5lbFN0YXJ0QXQgICAgID0gdGhpcy5vcHRzLmVsU3RhcnRBdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLkNTU19QUkVGSVh9X19zdGFydC1hdGApO1xyXG4gICAgdGhpcy5vcHRzLmVsRW5kQXQgICAgICAgPSB0aGlzLm9wdHMuZWxFbmRBdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLkNTU19QUkVGSVh9X19lbmQtYXRgKTtcclxuICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0ID0gdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5DU1NfUFJFRklYfV9fc2luZ2xlLWlucHV0YCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5oaWRkZW5FbEZvcm1hdCkge1xyXG4gICAgICBbdGhpcy5vcHRzLmVsU3RhcnRBdCwgdGhpcy5vcHRzLmVsRW5kQXRdLmZvckVhY2goKGlucHV0LCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBpbnB1dC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dCk7XHJcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgaGlkZGVuSW5wdXQuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgaGlkZGVuSW5wdXQuaGlkZGVuICAgID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgKGkpID8gdGhpcy5oaWRkZW5FbEVuZEF0ID0gaGlkZGVuSW5wdXQgOiB0aGlzLmhpZGRlbkVsU3RhcnRBdCA9IGhpZGRlbklucHV0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLmlzU2luZ2xlSW5wdXQpIHtcclxuICAgICAgdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgICAgW3RoaXMub3B0cy5lbFN0YXJ0QXQsIHRoaXMub3B0cy5lbEVuZEF0XS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmhpZGRlbiA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5kcm9wQmFzaWMpO1xyXG5cclxuICAgIGNvbnN0IGNhbERyb3AgPSBuZXcgUG9wcGVyKHRoaXMuZWxUYXJnZXQsIHRoaXMuZWwsIHtcclxuICAgICAgcGxhY2VtZW50OiB0aGlzLm9wdHMuZHJvcFBsYWNlbWVudCxcclxuICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3BlbkRyb3AgPSAoaW5wdXQsIGlzUmV2ZXJzZWQpID0+IHtcclxuICAgICAgdGhpcy5zd2l0Y2hJbnB1dEZvY3VzKGlucHV0KTtcclxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3Rpb25PcmRlcihpc1JldmVyc2VkKTtcclxuXHJcbiAgICAgIGlmICghaGFzQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnZpc2libGUpKSB7XHJcbiAgICAgICAgY2FsRHJvcC51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Ryb3Atb3BlbicpO1xyXG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy52aXNpYmxlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQgJiYgdGhpcy5vcHRzLnJlbnRhbElkKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRNYXBzKHRoaXMub3B0cy5yZW50YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xyXG4gICAgICB0aGlzLmZvY3VzVG91Y2hFdmVudHModGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQsICgpID0+IHtcclxuICAgICAgICBvcGVuRHJvcCgnc3RhcnQnLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb2N1c1RvdWNoRXZlbnRzKHRoaXMub3B0cy5lbFN0YXJ0QXQsICgpID0+IHtcclxuICAgICAgICBvcGVuRHJvcCgnc3RhcnQnLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmZvY3VzVG91Y2hFdmVudHModGhpcy5vcHRzLmVsRW5kQXQsICgpID0+IHtcclxuICAgICAgICBvcGVuRHJvcCgnZW5kJywgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmNhbERyb3AgPSBjYWxEcm9wO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdHMuZWxSZXNldCkge1xyXG4gICAgICB0aGlzLm9wdHMuZWxSZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsdWVUb0lucHV0KGlucHV0LCBkYXRlVmFsdWUpIHtcclxuICAgIGNvbnN0IHsgZWxTdGFydEF0IH0gPSB0aGlzLm9wdHM7XHJcbiAgICBjb25zdCB7IGVsRW5kQXQgfSAgID0gdGhpcy5vcHRzO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgID0gZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHN0cmZ0aW1lKGRhdGUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCBldnQgICA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG5cclxuICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLmhpZGRlbkVsRm9ybWF0KSB7XHJcbiAgICAgIGNvbnN0IGhpZGRlblZhbHVlID0gc3RyZnRpbWUoZGF0ZSwgdGhpcy5vcHRzLmhpZGRlbkVsRm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcblxyXG4gICAgICBpZiAoaW5wdXQgPT09ICdzdGFydCcgJiYgdGhpcy5oaWRkZW5FbFN0YXJ0QXQpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbkVsU3RhcnRBdC52YWx1ZSA9IGhpZGRlblZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAnZW5kJyAmJiB0aGlzLmhpZGRlbkVsRW5kQXQpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbkVsRW5kQXQudmFsdWUgPSBoaWRkZW5WYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dCA9PT0gJ3N0YXJ0JyAmJiBlbFN0YXJ0QXQpIHtcclxuICAgICAgZWxTdGFydEF0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGVsU3RhcnRBdC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAnZW5kJyAmJiBlbEVuZEF0KSB7XHJcbiAgICAgIGVsRW5kQXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgZWxFbmRBdC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dHNUb1ZhbHVlcygpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gZGF0ZVRvQXJyYXkodGhpcy5vcHRzLmVsU3RhcnRBdC52YWx1ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbkVuZCAgID0gZGF0ZVRvQXJyYXkodGhpcy5vcHRzLmVsRW5kQXQudmFsdWUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCBjRGF0ZSAgICAgICAgID0gdGhpcy5vcHRzLmN1cnJEYXRlO1xyXG4gICAgY29uc3QgY0RhdGVBcnJheSAgICA9IFtjRGF0ZS5nZXRVVENGdWxsWWVhcigpLCBjRGF0ZS5nZXRVVENNb250aCgpLCBjRGF0ZS5nZXREYXRlKCldO1xyXG5cclxuICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBpZiAoaXNBcnJheShzZWxlY3Rpb25TdGFydCkgJiYgaXNBcnJheShzZWxlY3Rpb25FbmQpKSB7XHJcbiAgICAgIGlmIChpc0xhdGVyKGNEYXRlQXJyYXksIHNlbGVjdGlvblN0YXJ0KSAmJiBpc0xhdGVyKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIHRoaXMucmVjb3ZlclNlbGVjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIoYGludmFsaWQgcmFuZ2U6IFwiWyR7c2VsZWN0aW9uU3RhcnR9XVwiIFwiWyR7c2VsZWN0aW9uRW5kfV1cImAsICd3YXJuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblN0YXJ0ICYmIHNlbGVjdGlvbkVuZCkge1xyXG4gICAgICB0aGlzLmxvZ2dlcihgaW52YWxpZCBkYXRlczogXCIke3NlbGVjdGlvblN0YXJ0fVwiIFwiJHtzZWxlY3Rpb25FbmR9XCJgLCAnd2FybicpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hJbnB1dEZvY3VzKHR5cGUpIHtcclxuICAgIGlmICh0aGlzLm9wdHMuZWxTdGFydEF0ICYmIHRoaXMub3B0cy5lbEVuZEF0KSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnc3RhcnQnKSB7XHJcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5vcHRzLmVsU3RhcnRBdCwgc3R5bGVzLmZvY3VzKTtcclxuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgc3R5bGVzLmZvY3VzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZCcpIHtcclxuICAgICAgICBhZGRDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgc3R5bGVzLmZvY3VzKTtcclxuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxTdGFydEF0LCBzdHlsZXMuZm9jdXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09PSAnYW55Jykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMub3B0cy5lbFN0YXJ0QXQsIHN0eWxlcy5mb2N1cyk7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsRW5kQXQsIHN0eWxlcy5mb2N1cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcChlLCBmb3JjZSkge1xyXG4gICAgaWYgKCFmb3JjZSAmJiAoaXNJbnNpZGUoZS50YXJnZXQsIHRoaXMuZWwpIHx8IGlzSW5zaWRlKGUudGFyZ2V0LCB0aGlzLmVsVGFyZ2V0KSkpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHN0eWxlcy52aXNpYmxlKTtcclxuICAgICAgdGhpcy5lbWl0KCdkcm9wLWNsb3NlJyk7XHJcbiAgICAgIHRoaXMuc3dpdGNoSW5wdXRGb2N1cygnYW55Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1RvdWNoRXZlbnRzKGVsZW1lbnQsIF9jYWxsYmFjaykge1xyXG4gICAgaWYgKGlzRnVuY3Rpb24oX2NhbGxiYWNrKSkge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIF9jYWxsYmFjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIF9jYWxsYmFjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9ICR7dGhpcy5WRVJTSU9OfV0gYDtcclxuICB9XHJcblxyXG4gIGxvZ2dlcihtc2csIHR5cGUgPSAnbG9nJykge1xyXG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkge1xyXG4gICAgICBjb25zb2xlW3R5cGVdKHRoaXMudG9TdHJpbmcoKSArIG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIGdsb2JhbCBwcm9jZXNzLCByZXF1aXJlICovXHJcbmltcG9ydCB7IGRhc2hUb0NhcGl0YWwgfSBmcm9tICd3aWRnZXQtdXRpbHMnO1xyXG5cclxuY29uc3QgY3VyckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCB7IG5hbWUgfSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWUsXHJcbiAgY3NzUHJlZml4OiBkYXNoVG9DYXBpdGFsKG5hbWUpLFxyXG4gIGFwaUhvc3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgOiAnaHR0cHM6Ly93d3cuYm9va2luZ3N5bmMuY29tJyxcclxuICBhcGlOYW1lc3BhY2U6ICcvYXBpL3YyL3B1YmxpYycsXHJcbiAgYXBpTWFwc1JvdXRlOiAnL21hcHMuanNvbj97YXBpUmVudGFsSWR9e2FwaUN1cnJlbmN5fScsXHJcbiAgYXBpUmVudGFsSWQ6ICdyZW50YWxfaWQ9JyxcclxuICBhcGlDdXJyZW5jeTogJyZleGNoYW5nZV90b19jdXJyZW5jeT0nLFxyXG5cclxuICByZW50YWxVcmwoaWRzKSB7XHJcbiAgICBsZXQgcm91dGUgPSB0aGlzLmFwaU1hcHNSb3V0ZS5yZXBsYWNlKCd7YXBpUmVudGFsSWR9JywgYCR7dGhpcy5hcGlSZW50YWxJZH0ke2lkc31gKTtcclxuICAgIHJvdXRlID0gcm91dGUucmVwbGFjZSgne2FwaUN1cnJlbmN5fScsICh0aGlzLmN1cnJlbmN5KSA/IGAke3RoaXMuYXBpQ3VycmVuY3l9JHt0aGlzLmN1cnJlbmN5fWAgOiAnJyk7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlIb3N0fSR7dGhpcy5hcGlOYW1lc3BhY2V9JHtyb3V0ZX1gO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0T2ZXZWVrOiAwLCAvLyAwIFN1biAxIE1vbi4uLi42IFNhdFxyXG4gIG1pblN0YXk6IDEsIC8vIGNhbiBzZWxlY3Qgb25lIG5pZ2h0XHJcbiAgbWF4U3RheTogMCwgLy8gY2FuIHNlbGVjdCBpbmZpbml0ZSBuaWdodHNcclxuICBtb250aFN0YXJ0OiBjdXJyRGF0ZS5nZXRVVENNb250aCgpLCAvLyBzdGFydCB3aXRoIGN1cnJlbnQgbW9udGggYnkgZGVmYXVsdCBNICcwLi4uMTInXHJcbiAgeWVhclN0YXJ0OiBjdXJyRGF0ZS5nZXRVVENGdWxsWWVhcigpLCAvLyBzdGFydCB3aXRoIGN1cnJlbnQgeWVhciBZWVlZXHJcbiAgZGF5c1BlcldlZWs6IDcsIC8vIEZJWE1FIHN1cHBvcnQgY2FsZW5kYXIgcmVuZGVyaW5nXHJcbiAgZGlzcGxheU1vbnRoczogMixcclxuICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICBzaG93UmF0ZXM6IGZhbHNlLFxyXG4gIHNob3dNaW5TdGF5OiBmYWxzZSxcclxuICBzaG93TWF4U3RheTogZmFsc2UsXHJcbiAgaXNSZXZlcnNlU2VsZWN0YWJsZTogZmFsc2UsIC8vIHNlbGVjdCBlbmQgZGF0ZSBmaXJzdFxyXG4gIGlzQmFja0Rpc2FibGVkOiB0cnVlLFxyXG4gIGlzRHJvcERvd246IGZhbHNlLFxyXG4gIGRyb3BQbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxyXG4gIGVsOiBudWxsLFxyXG4gIGVsU3RhcnRBdDogbnVsbCxcclxuICBlbEVuZEF0OiBudWxsLFxyXG4gIGVsU2luZ2xlSW5wdXQ6IG51bGwsXHJcbiAgaXNTaW5nbGVJbnB1dDogbnVsbCxcclxuICBzaW5nbGVJbnB1dERhdGVGb3JtYXQ6IG51bGwsXHJcbiAgc2luZ2xlSW5wdXRTZXBhcmF0b3I6ICfihpInLFxyXG4gIGVsUmVzZXQ6IG51bGwsXHJcbiAgZm9ybWF0RGF0ZTogbnVsbCxcclxuICBoaWRkZW5FbEZvcm1hdDogbnVsbCxcclxuICByZW50YWxJZDogbnVsbCxcclxuICBjdXJyZW5jeTogbnVsbCxcclxuICBkaXNhYmxlQXZhaWxhYml0eU1hcDogZmFsc2UsXHJcbiAgYWxsb3dTaG9ydGVyTWluU3RheVNlbGVjdGlvbjogZmFsc2UsXHJcbiAgYWxsb3dMb25nZXJNYXhTdGF5U2VsZWN0aW9uOiBmYWxzZSxcclxuICBlbmFibGVBbGxEYXlzOiBmYWxzZSxcclxuICBjdXJyRGF0ZVxyXG59O1xyXG4iLCIvKiBnbG9iYWwgZG9jdW1lbnQsIHJlcXVpcmUsIHdpbmRvdywgbW9kdWxlICovXHJcbmxldCBDYWxlbmRhciA9IHJlcXVpcmUoJy4vY2FsZW5kYXInKTtcclxuXHJcbkNhbGVuZGFyID0gQ2FsZW5kYXIuZGVmYXVsdDtcclxuXHJcbi8vIEV4cG9ydCBXaWRnZXRVdGlsc1xyXG53aW5kb3cuQm9va2luZ1N5bmNXaWRnZXRVdGlscyA9IHJlcXVpcmUoJ3dpZGdldC11dGlscycpO1xyXG5cclxuLy8gRXhwb3J0IFBvcHBlclxyXG53aW5kb3cuUG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5DYWxlbmRhci5pbml0ID0gKG9wdHMpID0+IHtcclxuICBjb25zdCBpbml0aWFsaXplZCA9IFtdO1xyXG4gIGNvbnN0IG9wdGlvbnMgICAgID0gb3B0cyB8fCB7fTtcclxuICBjb25zdCBlbGVtZW50cyAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldF0nKTtcclxuXHJcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XHJcbiAgICBjb25zdCBjYWwgID0gbmV3IENhbGVuZGFyKG9wdGlvbnMpO1xyXG5cclxuICAgIGluaXRpYWxpemVkLnB1c2goY2FsKTtcclxuICB9KTtcclxuXHJcbiAgQ2FsZW5kYXIuaW5zdGFuY2VzID0gaW5pdGlhbGl6ZWQ7XHJcbiAgcmV0dXJuIGluaXRpYWxpemVkO1xyXG59O1xyXG5cclxuQ2FsZW5kYXIuVkVSU0lPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XHJcblxyXG5pZiAoQ2FsZW5kYXIuYXV0b0luaXQgIT09IGZhbHNlKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xyXG4gICAgQ2FsZW5kYXIuaW5pdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICBDYWxlbmRhci5pbml0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0ID0gQ2FsZW5kYXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbGVuZGFyO1xyXG4iLCJsZXQgbG9jYWxlcyA9IHtcclxuICAnZW4tR0InOiB7XHJcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxyXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxyXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcclxuICAgIGN1cnJlbmN5OiAnR0JQJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuaWdodHMnLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5pZ2h0cycsXHJcbiAgICBzdGFydE9mV2VlazogMFxyXG4gIH0sXHJcbiAgJ2VuLVVTJzoge1xyXG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICAgIHNob3J0TW9udGhOYW1lczogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxyXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXHJcbiAgICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbmlnaHRzJyxcclxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuaWdodHMnLFxyXG4gICAgc3RhcnRPZldlZWs6IDFcclxuICB9LFxyXG4gICdkZS1ERSc6IHtcclxuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nTW9udGhOYW1lczogJ0phbnVhcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9Nw6RyX0Fwcl9NYWlfSnVuX0p1bF9BdWdfU2VwX09rdF9Ob3ZfRGV6Jy5zcGxpdCgnXycpLFxyXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXHJcbiAgICBjdXJyZW5jeTogJ0VVUicsXHJcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbsOkY2h0ZScsXHJcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbsOkY2h0ZScsXHJcbiAgICBzdGFydE9mV2VlazogMVxyXG4gIH0sXHJcbiAgJ2VzLUVTJzoge1xyXG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdEb19MdV9NYV9NaV9KdV9WaV9Tw6EnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvJy5zcGxpdCgnXycpLFxyXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcclxuICAgIGN1cnJlbmN5OiAnRVVSJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBub2NoZXMnLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vY2hlcycsXHJcbiAgICBzdGFydE9mV2VlazogMVxyXG4gIH0sXHJcbiAgJ2ZyLUZSJzoge1xyXG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdEaV9MdV9NYV9NZV9KZV9WZV9TYScuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdkaW1hbmNoZV9sdW5kaV9tYXJkaV9tZXJjcmVkaV9qZXVkaV92ZW5kcmVkaV9zYW1lZGknLnNwbGl0KCdfJyksXHJcbiAgICBsb25nTW9udGhOYW1lczogJ2phbnZpZXJfZsOpdnJpZXJfbWFyc19hdnJpbF9tYWlfanVpbl9qdWlsbGV0X2Fvw7t0X3NlcHRlbWJyZV9vY3RvYnJlX25vdmVtYnJlX2TDqWNlbWJyZScuc3BsaXQoJ18nKSxcclxuICAgIHNob3J0TW9udGhOYW1lczogJ2phbl9mw6l2X21hcl9hdnJfbWFpX2p1aW5fanVpbF9hb8O7X3NlcF9vY3Rfbm92X2TDqWMnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWQgJWIsICVZJyxcclxuICAgIGN1cnJlbmN5OiAnRVVSJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBudWl0cycsXHJcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbnVpdHMnLFxyXG4gICAgc3RhcnRPZldlZWs6IDFcclxuICB9LFxyXG4gICdpdC1JVCc6IHtcclxuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnRG9fTHVfTWFfTWVfR2lfVmVfU2EnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnZG9tZW5pY2FfbHVuZWTDrF9tYXJ0ZWTDrF9tZXJjb2xlZMOsX2dpb3ZlZMOsX3ZlbmVyZMOsX3NhYmF0bycuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdNb250aE5hbWVzOiAnZ2VubmFpb19mZWJicmFpb19tYXJ6b19hcHJpbGVfbWFnZ2lvX2dpdWdub19sdWdsaW9fYWdvc3RvX3NldHRlbWJyZV9vdHRvYnJlX25vdmVtYnJlX2RpY2VtYnJlJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcclxuICAgIGN1cnJlbmN5OiAnRVVSJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBub3R0aS4nLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vdHRpJyxcclxuICAgIHN0YXJ0T2ZXZWVrOiAxXHJcbiAgfSxcclxuICAnc3YtU0UnOiB7XHJcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ3PDtl9tw6VfdGlfb25fdG9fZnJfbMO2Jy5zcGxpdCgnXycpLFxyXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ3PDtm5kYWdfbcOlbmRhZ190aXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDtnJkYWcnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nTW9udGhOYW1lczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcclxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxyXG4gICAgY3VycmVuY3k6ICdFVVInLFxyXG4gICAgbWluU3RheTogJyVudW1iZXIrIG7DpHR0ZXInLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG7DpHR0ZXInLFxyXG4gICAgc3RhcnRPZldlZWs6IDFcclxuICB9LFxyXG4gICdydS1SVSc6IHtcclxuICAgIHNob3J0V2Vla2RheU5hbWVzOiAn0JLRgV/Qn9C9X9CS0YJf0KHRgF/Qp9GCX9Cf0YJf0KHQsScuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICfQktC+0YHQutGA0LXRgdC10L3RjNC1X9Cf0L7QvdC10LTQtdC70YzQvdC40Lpf0JLRgtC+0YDQvdC40Lpf0KHRgNC10LTQsF/Qp9C10YLQstC10YDQs1/Qn9GP0YLQvdC40YbQsF/QodGD0LHQsdC+0YLQsCcuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdNb250aE5hbWVzOiAn0K/QvdCy0LDRgNGMX9Ck0LXQstGA0LDQu9GMX9Cc0LDRgNGCX9CQ0L/RgNC10LvRjF/QnNCw0Llf0JjRjtC90Yxf0JjRjtC70Yxf0JDQstCz0YPRgdGCX9Ch0LXQvdGC0Y/QsdGA0Yxf0J7QutGC0Y/QsdGA0Yxf0J3QvtGP0LHRgNGMX9CU0LXQutCw0LHRgNGMJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAn0K/QvdCyX9Ck0LXQsl/QnNCw0YBf0JDQv9GAX9Cc0LDQuV/QmNGO0L1f0JjRjtC7X9CQ0LLQs1/QodC10L1f0J7QutGCX9Cd0L7Rj1/QlNC10LonLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWQuJWIuJVknLFxyXG4gICAgY3VycmVuY3k6ICfQoNGD0LEuJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyDQvdC+0YcuJyxcclxuICAgIG1heFN0YXk6ICclbnVtYmVyLSDQvdC+0YcuJyxcclxuICAgIHN0YXJ0T2ZXZWVrOiAxXHJcbiAgfSxcclxuICAncGwtUEwnOiB7XHJcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ05kX1BuX1d0X8Wacl9Del9QdF9Tbycuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICduaWVkemllbGFfcG9uaWVkemlhxYJla193dG9yZWtfxZtyb2RhX2N6d2FydGVrX3BpxIV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdzdHljemXFhF9sdXR5X21hcnplY19rd2llY2llxYRfbWFqX2N6ZXJ3aWVjX2xpcGllY19zaWVycGllxYRfd3J6ZXNpZcWEX3Bhxbpkemllcm5pa19saXN0b3BhZF9ncnVkemllxYQnLnNwbGl0KCdfJyksXHJcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdzdHlfbHV0X21hcl9rd2lfbWFqX2N6ZV9saXBfc2llX3dyel9wYcW6X2xpc19ncnUnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWQuJWIuJVknLFxyXG4gICAgY3VycmVuY3k6ICdQTE4nLFxyXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5vY2UnLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vY2UnLFxyXG4gICAgc3RhcnRPZldlZWs6IDFcclxuICB9LFxyXG4gICdubC1OTCc6IHtcclxuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnWm9fTWFfRGlfV29fRG9fVnJfWmEnLnNwbGl0KCdfJyksXHJcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnWm9uZGFnX01hYW5kYWdfRGluc2RhZ19Xb2Vuc2RhZ19Eb25kZXJkYWdfVnJpamRhZ19aYXRlcmRhZycuc3BsaXQoJ18nKSxcclxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyaV9GZWJydWFyaV9NYWFydF9BcHJpbF9NZWlfSnVuaV9KdWxpX0F1Z3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9NYWFfQXByX01laV9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXHJcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcclxuICAgIGN1cnJlbmN5OiAnRVVSJyxcclxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuaWdodHMnLFxyXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5pZ2h0cycsXHJcbiAgICBzdGFydE9mV2VlazogMVxyXG4gIH1cclxufTtcclxuXHJcbi8vIEFkZCBhbGlhc2VzXHJcbmxvY2FsZXMgPSBPYmplY3QuYXNzaWduKHtcclxuICBlbjogbG9jYWxlc1snZW4tVVMnXSxcclxuICBkZTogbG9jYWxlc1snZGUtREUnXSxcclxuICBlczogbG9jYWxlc1snZXMtRVMnXSxcclxuICBmcjogbG9jYWxlc1snZnItRlInXSxcclxuICBpdDogbG9jYWxlc1snaXQtSVQnXSxcclxuICBzdjogbG9jYWxlc1snc3YtU1YnXSxcclxuICBydTogbG9jYWxlc1sncnUtUlUnXSxcclxuICBwbDogbG9jYWxlc1sncGwtUEwnXSxcclxuICBubDogbG9jYWxlc1snbmwtTkwnXVxyXG59LCBsb2NhbGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZXM7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY2FsZW5kYXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbiAgPSBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLm1vbnRoc1dyYXBwZXJ9XCI+PC9kaXY+YDtcclxuXHJcbmV4cG9ydCBjb25zdCBtb250aCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMubUNlbGx9IGpzLW1vbnRoXCI+XHJcbiAgICA8dGFibGUgY2xhc3M9XCIke3N0eWxlcy5tb250aH1cIiByb2xlPVwibW9udGhcIj5cclxuICAgICAgPGNhcHRpb24+PGRpdiBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb259XCI+PC9kaXY+PC9jYXB0aW9uPlxyXG4gICAgICA8dGhlYWQgY2xhc3M9XCIke3N0eWxlcy50YWJsZUhlYWRlcn1cIj48dHI+PC90cj48L3RoZWFkPlxyXG4gICAgICA8dGJvZHkgY2xhc3M9XCIke3N0eWxlcy5ib2R5fVwiPjwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdlZWtEYXlMYWJlbCA9IChsYWJlbCkgPT4gYDx0aCBjbGFzcz1cIiR7c3R5bGVzLnRofVwiPiR7bGFiZWx9PC90aD5gO1xyXG5cclxuLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xyXG5leHBvcnQgY29uc3Qgd2Vla0RheSA9IChsYWJlbCwgZGlzYWJsZWQsIGRpc2FibGVkRW5kLCBlbmFibGVkU3RhcnQsIGlzQ3VycmVudERheSwgcmF0ZSwgbWluU3RheSwgbWF4U3RheSwgcmF0ZVQsIG1pblN0YXlULCBtYXhTdGF5VCkgPT4gYFxyXG4gIDx0ZCAke2Rpc2FibGVkID8gJ2RhdGEtZGlzYWJsZWQnIDogJ2RhdGEtZW5hYmxlZCd9XHJcbiAgICAgICAke2VuYWJsZWRTdGFydCA/ICdkYXRhLWF2YWlsYWJsZS1vdXQnIDogJyd9XHJcbiAgICAgICBkYXRhLXZhbHVlPVwiJHtsYWJlbH1cIlxyXG4gICAgICAgY2xhc3M9XCIke3N0eWxlcy5jZWxsfSAke2lzQ3VycmVudERheSA/IHN0eWxlcy50b2RheSA6ICcnfSAke2Rpc2FibGVkICYmICFlbmFibGVkU3RhcnQgPyBzdHlsZXMuZGlzYWJsZWQgOiAnJ30gJHtkaXNhYmxlZCAmJiBlbmFibGVkU3RhcnQgPyBzdHlsZXMuZGlzYWJsZWRTdGFydCA6ICcnfSAke2Rpc2FibGVkRW5kID8gc3R5bGVzLmRpc2FibGVkRW5kIDogJyd9XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuY250fVwiIHJvbGU9XCJkYXktdmFsdWVcIj5cclxuICAgICAgICAke2xhYmVsfVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy5pbmZvfVwiPlxyXG4gICAgICAgICAgJHtyYXRlID8gJzxzcGFuIGRhdGEtcmF0ZT4nICsgcmF0ZVQgKyAnPC9zcGFuPicgOiAnJ31cclxuICAgICAgICAgICR7bWluU3RheSA/ICc8c3BhbiBkYXRhLW1pbi1zdGF5PicgKyBtaW5TdGF5VCArICc8L3NwYW4+JyA6ICcnfVxyXG4gICAgICAgICAgJHttYXhTdGF5ID8gJzxzcGFuIGRhdGEtbWF4LXN0YXk+JyArIG1heFN0YXlUICsgJzwvc3Bhbj4nIDogJyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvdGQ+XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZm9yd2FyZCA9IGBcclxuICA8YnV0dG9uIGNsYXNzPVwiJHtzdHlsZXMuZm9yd2FyZH1cIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNjk0LjQgMjQyLjRsMjQ5LjEgMjQ5LjFjMTEgMTEgMTEgMjEgMCAzMkw2OTQuNCA3NzIuN2MtNSA1LTEwIDctMTYgN3MtMTEtMi0xNi03Yy0xMS0xMS0xMS0yMSAwLTMybDIxMC4xLTIxMC4xSDY3LjFjLTEzIDAtMjMtMTAtMjMtMjNzMTAtMjMgMjMtMjNoODA1LjRMNjYyLjQgMjc0LjVjLTIxLTIxLjEgMTEtNTMuMSAzMi0zMi4xelwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gIDwvYnV0dG9uPlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhY2sgPSBgXHJcbiAgPGJ1dHRvbiBjbGFzcz1cIiR7c3R5bGVzLmJhY2t9XCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTMzNi4yIDI3NC41bC0yMTAuMSAyMTBoODA1LjRjMTMgMCAyMyAxMCAyMyAyM3MtMTAgMjMtMjMgMjNIMTI2LjFsMjEwLjEgMjEwLjFjMTEgMTEgMTEgMjEgMCAzMi01IDUtMTAgNy0xNiA3cy0xMS0yLTE2LTdsLTI0OS4xLTI0OWMtMTEtMTEtMTEtMjEgMC0zMmwyNDkuMS0yNDkuMWMyMS0yMS4xIDUzIDEwLjkgMzIgMzJ6XCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9idXR0b24+XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vla0RheVBsYWNlaG9sZGVyID0gJzx0ZD48L3RkPic7XHJcblxyXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xyXG5leHBvcnQgY29uc3Qgd2Vla1JvdyA9IChudW0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgb3BlbjogYDx0ciBjbGFzcz1cImpzLWJvZHktcm93LSR7bnVtfVwiPmAsXHJcbiAgICBjbG9zZTogJzwvdHI+J1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IHN0cmZ0aW1lLCBzdHJwdGltZSB9IGZyb20gJ3N0cnRpbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRFNUID0gKGRhdGUpID0+IHtcclxuICBsZXQgamFuID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG4gIGxldCBqdWwgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDYsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcbiAgcmV0dXJuIE1hdGgubWF4KGphbiwganVsKSAhPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZVRvSXNvID0gKHllYXIsIG1vbnRoLCBkYXksIGlzU3RyaW5nID0gZmFsc2UpID0+IHtcclxuICBmdW5jdGlvbiBwYWQobnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyIDwgMTApIHtcclxuICAgICAgcmV0dXJuIGAwJHtudW1iZXJ9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcpIHtcclxuICAgIHJldHVybiBgJHt5ZWFyfS0ke3BhZChtb250aCArIDEpfS0ke3BhZChkYXkpfWA7XHJcbiAgfVxyXG5cclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDEyLCAwLCAwKTtcclxuICByZXR1cm4gZGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlVG9BcnJheSA9ICh2YWwsIGZvcm1hdCwgbG9jYWxlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGUgPSBzdHJwdGltZSh2YWwsIGZvcm1hdCwgbG9jYWxlKTtcclxuICAgIGNvbnN0IGEgICAgPSBzdHJmdGltZShkYXRlLCAnJVktJW0tJWQnKS5zcGxpdCgnLScpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgcGFyc2VJbnQoYVswXSksIC8vIHllYXJcclxuICAgICAgcGFyc2VJbnQoYVsxXSAtIDEpLCAvLyBtb250aCBpbmRleFxyXG4gICAgICBwYXJzZUludChhWzJdKSAvLyBkYXlcclxuICAgIF07XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTGF0ZXIgPSAoc3RhcnQsIGVuZCkgPT4gZGF0ZVRvSXNvKC4uLnN0YXJ0LCB0cnVlKSA8IGRhdGVUb0lzbyguLi5lbmQsIHRydWUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ3VycmVudCA9IChzdGFydCwgZW5kKSA9PiBkYXRlVG9Jc28oLi4uc3RhcnQsIHRydWUpID09IGRhdGVUb0lzbyguLi5lbmQsIHRydWUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25PZlJhbmdlID0gKGNlbGwsIGluZGV4LCByYW5nZSkgPT4ge1xyXG4gIGlmIChpbmRleCA9PT0gcmFuZ2UubGVuZ3RoIC0gMSkge1xyXG4gICAgcmV0dXJuIGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWF2YWlsYWJsZS1vdXQnKSAhPT0gJyc7XHJcbiAgfVxyXG4gIHJldHVybiBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNhYmxlZCcpID09PSAnJztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0Rm9ybWF0dGVyID0gKHZhbHVlLCBzdHIpID0+IHN0ci5yZXBsYWNlKCclbnVtYmVyJywgdmFsdWUpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IChmdW5jdGlvbigpe1xuICBjb25zdCBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59KCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYWxsZWQgPSBmYWxzZVxuICAgICAgZm4oKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICBsZXQgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3Qgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlXG5cblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbmV4cG9ydCBkZWZhdWx0IChzdXBwb3J0c01pY3JvVGFza3NcbiAgPyBtaWNyb3Rhc2tEZWJvdW5jZVxuICA6IHRhc2tEZWJvdW5jZSk7XG4iLCIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIGNvbnN0IGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIChcbiAgICBmdW5jdGlvblRvQ2hlY2sgJiZcbiAgICBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHlcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keVxuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cbiIsImltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXG4gICAgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnXG4gICkge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbGVtZW50O1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50XG4gICk7XG59XG4iLCIvKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCBpc09mZnNldENvbnRhaW5lciBmcm9tICcuL2lzT2Zmc2V0Q29udGFpbmVyJztcbmltcG9ydCBnZXRSb290IGZyb20gJy4vZ2V0Um9vdCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICBjb25zdCBvcmRlciA9XG4gICAgZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICZcbiAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgY29uc3Qgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcbiAgaWYgKFxuICAgIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiZcbiAgICAgIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lcikgfHxcbiAgICBzdGFydC5jb250YWlucyhlbmQpXG4gICkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgY29uc3QgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG4iLCIvKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xuICBjb25zdCB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xuICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuIiwiLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIChcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGBdLCAxMCkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYF0sIDEwKVxuICApO1xufVxuIiwiaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXG4gICAgYm9keVtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGh0bWxbYGNsaWVudCR7YXhpc31gXSxcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXG4gICAgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGlzSUUoMTApXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCd9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnfWBdKSlcbiAgICA6IDAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gIH07XG59XG4iLCIvKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5vZmZzZXRzLFxuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodCxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldEJvcmRlcnNTaXplIGZyb20gJy4vZ2V0Qm9yZGVyc1NpemUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICBsZXQgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfVxuICBjYXRjaChlKXt9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCxcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIGNvbnN0IHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICBjb25zdCB3aWR0aCA9XG4gICAgc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9XG4gICAgc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICBsZXQgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGluY2x1ZGVTY3JvbGwgZnJvbSAnLi9pbmNsdWRlU2Nyb2xsJztcbmltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgcnVuSXNJRSBmcm9tICcuL2lzSUUnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQsIGZpeGVkUG9zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCBpc0lFMTAgPSBydW5Jc0lFKDEwKTtcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIGNvbnN0IGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIGNvbnN0IHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICBjb25zdCBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIGxldCBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodCxcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wLCAxMCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQsIDEwKTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoXG4gICAgaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uXG4gICAgICA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpXG4gICAgICA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknXG4gICkge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCwgZXhjbHVkZVNjcm9sbCA9IGZhbHNlKSB7XG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICBjb25zdCBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICBjb25zdCBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuaW1wb3J0IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0V2luZG93U2l6ZXMgZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XG5pbXBvcnQgaXNGaXhlZCBmcm9tICcuL2lzRml4ZWQnO1xuaW1wb3J0IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIHBhZGRpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2Vcbikge1xuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIGxldCBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0JyApIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH1cblxuICBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgbGV0IGJvdW5kYXJpZXNOb2RlO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcbiAgICAgIGJvdW5kYXJpZXNOb2RlLFxuICAgICAgb2Zmc2V0UGFyZW50LFxuICAgICAgZml4ZWRQb3NpdGlvblxuICAgICk7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldFdpbmRvd1NpemVzKHBvcHBlci5vd25lckRvY3VtZW50KTtcbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgY29uc3QgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwOyBcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7IFxuICBib3VuZGFyaWVzLnJpZ2h0IC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnJpZ2h0IHx8IDA7IFxuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDsgXG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG4iLCJpbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcblxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gIHBsYWNlbWVudCxcbiAgcmVmUmVjdCxcbiAgcG9wcGVyLFxuICByZWZlcmVuY2UsXG4gIGJvdW5kYXJpZXNFbGVtZW50LFxuICBwYWRkaW5nID0gMFxuKSB7XG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBwb3BwZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIHBhZGRpbmcsXG4gICAgYm91bmRhcmllc0VsZW1lbnRcbiAgKTtcblxuICBjb25zdCByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHQsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKVxuICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi5yZWN0c1trZXldLFxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKSxcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBjb25zdCBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKFxuICAgICh7IHdpZHRoLCBoZWlnaHQgfSkgPT5cbiAgICAgIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodFxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXG4gICAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleVxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XG59XG4iLCJpbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU5vZGUgZnJvbSAnLi9nZXRSZWZlcmVuY2VOb2RlJztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBmaXhlZFBvc2l0aW9uID0gbnVsbCkge1xuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeCxcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIGNvbnN0IGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgbWF0Y2hlZCA9PiBoYXNoW21hdGNoZWRdKTtcbn1cbiIsImltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIGNvbnN0IHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICBjb25zdCBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHQsXG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9XG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gK1xuICAgIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtXG4gICAgcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9XG4gICAgICByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuIiwiLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGN1ciA9PiBjdXJbcHJvcF0gPT09IHZhbHVlKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIGNvbnN0IG1hdGNoID0gZmluZChhcnIsIG9iaiA9PiBvYmpbcHJvcF0gPT09IHZhbHVlKTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4JztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIGNvbnN0IG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkXG4gICAgPyBtb2RpZmllcnNcbiAgICA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKG1vZGlmaWVyID0+IHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgZ2V0UG9wcGVyT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRQb3BwZXJPZmZzZXRzJztcbmltcG9ydCBydW5Nb2RpZmllcnMgZnJvbSAnLi4vdXRpbHMvcnVuTW9kaWZpZXJzJztcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge30sXG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKFxuICAgIHRoaXMuc3RhdGUsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50LFxuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nXG4gICk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHMoXG4gICAgdGhpcy5wb3BwZXIsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICBkYXRhLnBsYWNlbWVudFxuICApO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICAgID8gJ2ZpeGVkJ1xuICAgIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG4iLCIvKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKFxuICAgICh7IG5hbWUsIGVuYWJsZWQgfSkgPT4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWVcbiAgKTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIGNvbnN0IHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIGNvbnN0IHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IHRvQ2hlY2sgPSBwcmVmaXggPyBgJHtwcmVmaXh9JHt1cHBlclByb3B9YCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICBjb25zdCBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIGNvbnN0IHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICAgIGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksXG4gICAgICBldmVudCxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgc2Nyb2xsUGFyZW50c1xuICAgICk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICByZWZlcmVuY2UsXG4gIG9wdGlvbnMsXG4gIHN0YXRlLFxuICB1cGRhdGVCb3VuZFxuKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoXG4gICAgc2Nyb2xsRWxlbWVudCxcbiAgICAnc2Nyb2xsJyxcbiAgICBzdGF0ZS51cGRhdGVCb3VuZCxcbiAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzXG4gICk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgc2V0dXBFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9zZXR1cEV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyhcbiAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGVcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCByZW1vdmVFdmVudExpc3RlbmVycyBmcm9tICcuLi91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycyc7XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4vaXNOdW1lcmljJztcblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChcbiAgICAgIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09XG4gICAgICAgIC0xICYmXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKVxuICAgICkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cbiIsIi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZXMgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgc2V0U3R5bGVzIGZyb20gJy4uL3V0aWxzL3NldFN0eWxlcyc7XG5pbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuLi91dGlscy9zZXRBdHRyaWJ1dGVzJztcbmltcG9ydCBnZXRSZWZlcmVuY2VPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLnN0eWxlcyAtIExpc3Qgb2Ygc3R5bGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuYXR0cmlidXRlcyAtIExpc3Qgb2YgYXR0cmlidXRlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzYW1lIGRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5U3R5bGUoZGF0YSkge1xuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5zdHlsZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyBpbiB0aGlzIHdheSB3ZSBjYW4gbWFrZSB0aGUgM3JkIHBhcnR5IG1vZGlmaWVycyBhZGQgY3VzdG9tIHN0eWxlcyB0byBpdFxuICAvLyBCZSBhd2FyZSwgbW9kaWZpZXJzIGNvdWxkIG92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHByZXZpb3VzXG4gIC8vIGxpbmVzIG9mIHRoaXMgbW9kaWZpZXIhXG4gIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5zdHlsZXMpO1xuXG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLmF0dHJpYnV0ZXNgIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLFxuICAvLyB0aGV5IHdpbGwgYmUgc2V0IGFzIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICBzZXRBdHRyaWJ1dGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBkZWZpbmVkIGFuZCBhcnJvd1N0eWxlcyBoYXMgc29tZSBwcm9wZXJ0aWVzXG4gIGlmIChkYXRhLmFycm93RWxlbWVudCAmJiBPYmplY3Qua2V5cyhkYXRhLmFycm93U3R5bGVzKS5sZW5ndGgpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5hcnJvd0VsZW1lbnQsIGRhdGEuYXJyb3dTdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB4LXBsYWNlbWVudCBhdHRyaWJ1dGUgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBiZWNhdXNlIGl0IGNvdWxkIGJlIHVzZWRcbiAqIHRvIGFkZCBtYXJnaW5zIHRvIHRoZSBwb3BwZXIgbWFyZ2lucyBuZWVkcyB0byBiZSBjYWxjdWxhdGVkIHRvIGdldCB0aGVcbiAqIGNvcnJlY3QgcG9wcGVyIG9mZnNldHMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLm1vZGlmaWVyc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQb3BwZXIuanMgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChcbiAgcmVmZXJlbmNlLFxuICBwb3BwZXIsXG4gIG9wdGlvbnMsXG4gIG1vZGlmaWVyT3B0aW9ucyxcbiAgc3RhdGVcbikge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgY29uc3QgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBjb25zdCBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICByZWZlcmVuY2VPZmZzZXRzLFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gKlxuICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gKiBEaXNjdXNzaW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL3B1bGwvNzE1XG4gKlxuICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICogYXMgd2VsbCBvbiBIaWdoIERQSSBzY3JlZW5zKS5cbiAqXG4gKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAqIGhpZ2ggRFBJIHNjcmVlbnMuXG4gKlxuICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IHsgcm91bmQsIGZsb29yIH0gPSBNYXRoO1xuICBjb25zdCBub1JvdW5kID0gdiA9PiB2O1xuICBcbiAgY29uc3QgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICBjb25zdCBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG4gIFxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIGNvbnN0IHNhbWVXaWR0aFBhcml0eSA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gcG9wcGVyV2lkdGggJSAyO1xuICBjb25zdCBib3RoT2RkV2lkdGggPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IDEgJiYgcG9wcGVyV2lkdGggJSAyID09PSAxO1xuXG4gIGNvbnN0IGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmRcbiAgICA/IG5vUm91bmRcbiAgICA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5XG4gICAgPyByb3VuZFxuICAgIDogZmxvb3I7XG4gIGNvbnN0IHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihcbiAgICAgIGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmRcbiAgICAgICAgPyBwb3BwZXIubGVmdCAtIDFcbiAgICAgICAgOiBwb3BwZXIubGVmdFxuICAgICksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodCksXG4gIH07XG59XG4iLCJpbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBnZXRSb3VuZGVkT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSb3VuZGVkT2Zmc2V0cyc7XG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4uL3V0aWxzL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcbiAgY29uc3QgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChcbiAgICBkYXRhLmluc3RhbmNlLm1vZGlmaWVycyxcbiAgICBtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSdcbiAgKS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzISdcbiAgICApO1xuICB9XG4gIGNvbnN0IGdwdUFjY2VsZXJhdGlvbiA9XG4gICAgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uXG4gICAgICA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb24sXG4gIH07XG5cbiAgY29uc3Qgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKFxuICAgIGRhdGEsXG4gICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAyIHx8ICFpc0ZpcmVmb3hcbiAgKTtcblxuICBjb25zdCBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgY29uc3Qgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgbGV0IGxlZnQsIHRvcDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9IGB0cmFuc2xhdGUzZCgke2xlZnR9cHgsICR7dG9wfXB4LCAwKWA7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIGNvbnN0IGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICBjb25zdCBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBgJHtzaWRlQX0sICR7c2lkZUJ9YDtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudCxcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0geyAuLi5hdHRyaWJ1dGVzLCAuLi5kYXRhLmF0dHJpYnV0ZXMgfTtcbiAgZGF0YS5zdHlsZXMgPSB7IC4uLnN0eWxlcywgLi4uZGF0YS5zdHlsZXMgfTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IHsgLi4uZGF0YS5vZmZzZXRzLmFycm93LCAuLi5kYXRhLmFycm93U3R5bGVzIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQoXG4gIG1vZGlmaWVycyxcbiAgcmVxdWVzdGluZ05hbWUsXG4gIHJlcXVlc3RlZE5hbWVcbikge1xuICBjb25zdCByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWUpO1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPVxuICAgICEhcmVxdWVzdGluZyAmJlxuICAgIG1vZGlmaWVycy5zb21lKG1vZGlmaWVyID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiZcbiAgICAgICAgbW9kaWZpZXIuZW5hYmxlZCAmJlxuICAgICAgICBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXJcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgY29uc3QgcmVxdWVzdGluZyA9IGBcXGAke3JlcXVlc3RpbmdOYW1lfVxcYGA7XG4gICAgY29uc3QgcmVxdWVzdGVkID0gYFxcYCR7cmVxdWVzdGVkTmFtZX1cXGBgO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGAke3JlcXVlc3RlZH0gbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJHtyZXF1ZXN0aW5nfSBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICR7cmVxdWVzdGluZ30hYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPdXRlclNpemVzIGZyb20gJy4uL3V0aWxzL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuLi91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxldCBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPVxuICAgICAgcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz1cbiAgICAgIHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIGNvbnN0IGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICBjb25zdCBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdLCAxMCk7XG4gIGNvbnN0IHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgYm9yZGVyJHtzaWRlQ2FwaXRhbGl6ZWR9V2lkdGhgXSwgMTApO1xuICBsZXQgc2lkZVZhbHVlID1cbiAgICBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnLCAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG4iLCIvKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2F1dG8tc3RhcnQnLFxuICAnYXV0bycsXG4gICdhdXRvLWVuZCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wJyxcbiAgJ3RvcC1lbmQnLFxuICAncmlnaHQtc3RhcnQnLFxuICAncmlnaHQnLFxuICAncmlnaHQtZW5kJyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtc3RhcnQnLFxuXTtcbiIsImltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4uL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxuY29uc3QgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50LCBjb3VudGVyID0gZmFsc2UpIHtcbiAgY29uc3QgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICBjb25zdCBhcnIgPSB2YWxpZFBsYWNlbWVudHNcbiAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgIC5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cbiIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb24gZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24nO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgY2xvY2t3aXNlIGZyb20gJy4uL3V0aWxzL2Nsb2Nrd2lzZSc7XG5cbmNvbnN0IEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZScsXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgbGV0IHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgbGV0IGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgY29uc3QgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9XG4gICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20pIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCkpO1xuXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnBvcHBlcixcbiAgICAgICAgLi4uZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICAgICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgICksXG4gICAgICB9O1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPVxuICAgICAgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuLi91dGlscy9pc051bWVyaWMnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICBjb25zdCBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIGNvbnN0IHZhbHVlID0gK3NwbGl0WzFdO1xuICBjb25zdCB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIGxldCBlbGVtZW50O1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICBsZXQgc2l6ZTtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPZmZzZXQoXG4gIG9mZnNldCxcbiAgcG9wcGVyT2Zmc2V0cyxcbiAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgYmFzZVBsYWNlbWVudFxuKSB7XG4gIGNvbnN0IG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICBjb25zdCB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICBjb25zdCBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmcmFnID0+IGZyYWcudHJpbSgpKTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgY29uc3QgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKFxuICAgIGZpbmQoZnJhZ21lbnRzLCBmcmFnID0+IGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMSlcbiAgKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIGNvbnN0IHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICBsZXQgb3BzID0gZGl2aWRlciAhPT0gLTFcbiAgICA/IFtcbiAgICAgICAgZnJhZ21lbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIGRpdmlkZXIpXG4gICAgICAgICAgLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksXG4gICAgICAgIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChcbiAgICAgICAgICBmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpXG4gICAgICAgICksXG4gICAgICBdXG4gICAgOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKChvcCwgaW5kZXgpID0+IHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KVxuICAgICAgPyAnaGVpZ2h0J1xuICAgICAgOiAnd2lkdGgnO1xuICAgIGxldCBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBvcFxuICAgICAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgICAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAgICAgLm1hcChzdHIgPT4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSlcbiAgICApO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goKG9wLCBpbmRleCkgPT4ge1xuICAgIG9wLmZvckVhY2goKGZyYWcsIGluZGV4MikgPT4ge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIHsgb2Zmc2V0IH0pIHtcbiAgY29uc3QgeyBwbGFjZW1lbnQsIG9mZnNldHM6IHsgcG9wcGVyLCByZWZlcmVuY2UgfSB9ID0gZGF0YTtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIGxldCBvZmZzZXRzO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICBsZXQgYm91bmRhcmllc0VsZW1lbnQgPVxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgY29uc3QgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSBwb3BwZXJTdHlsZXM7XG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICBjb25zdCBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIGxldCBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBwb3BwZXJbbWFpblNpZGVdLFxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXG4gICAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfSxcbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKHBsYWNlbWVudCA9PiB7XG4gICAgY29uc3Qgc2lkZSA9XG4gICAgICBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5jaGVja1tzaWRlXShwbGFjZW1lbnQpIH07XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogeyBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgY29uc3QgYm91bmQgPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnXG4gICkuYm91bmRhcmllcztcblxuICBpZiAoXG4gICAgcmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHxcbiAgICByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fFxuICAgIHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8XG4gICAgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnRcbiAgKSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3Qgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPVxuICAgIHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtXG4gICAgKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGFwcGx5U3R5bGUsIHsgYXBwbHlTdHlsZU9uTG9hZCB9IGZyb20gJy4vYXBwbHlTdHlsZSc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlIGZyb20gJy4vY29tcHV0ZVN0eWxlJztcbmltcG9ydCBhcnJvdyBmcm9tICcuL2Fycm93JztcbmltcG9ydCBmbGlwIGZyb20gJy4vZmxpcCc7XG5pbXBvcnQga2VlcFRvZ2V0aGVyIGZyb20gJy4va2VlcFRvZ2V0aGVyJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tICcuL3ByZXZlbnRPdmVyZmxvdyc7XG5pbXBvcnQgc2hpZnQgZnJvbSAnLi9zaGlmdCc7XG5pbXBvcnQgaGlkZSBmcm9tICcuL2hpZGUnO1xuaW1wb3J0IGlubmVyIGZyb20gJy4vaW5uZXInO1xuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XScsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lcixcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0JyxcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZCxcbiAgfSxcbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cbiIsImltcG9ydCBtb2RpZmllcnMgZnJvbSAnLi4vbW9kaWZpZXJzL2luZGV4JztcblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzLFxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuIiwiLy8gVXRpbHNcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vdXRpbHMvaXNGdW5jdGlvbic7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSc7XG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL21ldGhvZHMvZGVzdHJveSc7XG5pbXBvcnQgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2VuYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2Rpc2FibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9tZXRob2RzL2RlZmF1bHRzJztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wcGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLlBvcHBlci5EZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW10sXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoe1xuICAgICAgLi4uUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycyxcbiAgICAgIC4uLm9wdGlvbnMubW9kaWZpZXJzLFxuICAgIH0pLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgYnVpbHQtaW4gbW9kaWZpZXIsIHVzZSBpdCBhcyBiYXNlXG4gICAgICAgIC4uLihQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9KSxcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGN1c3RvbSBvcHRpb25zLCBvdmVycmlkZSBhbmQgbWVyZ2Ugd2l0aCBkZWZhdWx0IG9uZXNcbiAgICAgICAgLi4uKG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKVxuICAgICAgLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0sXG4gICAgICB9KSlcbiAgICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG1vZGlmaWVyT3B0aW9ucyA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKFxuICAgICAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgIHRoaXMucG9wcGVyLFxuICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBtb2RpZmllck9wdGlvbnMsXG4gICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGNvbnN0IGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG4gIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG4gIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzY2hlZHVsZVVwZGF0ZSA9ICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgKlxuICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAqIEBzdGF0aWNcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICogQG1lbWJlciBVdGlsc1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzdGF0aWMgVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuXG4gIHN0YXRpYyBwbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICBzdGF0aWMgRGVmYXVsdHMgPSBEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuIiwiLy8gZ2l0aHViLmNvbS9waW5lYXBwbGVtYWNoaW5lL3N0cnRpbWUtanNcbi8vIE1JVCBsaWNlbnNlLCBDb3B5cmlnaHQgKGMpIDIwMTggU29waGllIEtpcnNjaG5lciAoc29waGlla0BwaW5lYXBwbGVtYWNoaW5lLmNvbSlcbi8vIFJlZmVyZW5jZXM6XG4vLyBodHRwczovL3d3dy5pYm0uY29tL3N1cHBvcnQva25vd2xlZGdlY2VudGVyL2VuL3Nzd19pYm1faV83MS9ydHJlZi9zdHJwdGkuaHRtXG4vLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2xpYmMvbWFudWFsL2h0bWxfbm9kZS9Gb3JtYXR0aW5nLUNhbGVuZGFyLVRpbWUuaHRtbFxuLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9saWJjL21hbnVhbC9odG1sX25vZGUvTG93XzAwMmRMZXZlbC1UaW1lLVN0cmluZy1QYXJzaW5nLmh0bWxcbi8vIGh0dHA6Ly9tYW43Lm9yZy9saW51eC9tYW4tcGFnZXMvbWFuMy9zdHJwdGltZS4zLmh0bWxcbi8vIGh0dHBzOi8vYXBpZG9jay5jb20vcnVieS9EYXRlVGltZS9zdHJmdGltZVxuLy8gaHR0cDovL3N0cmZ0aW1lLm9yZy9cblxuXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBsZXQgdXNlT3B0aW9ucztcbiAgICBsZXQgdHogPSB1bmRlZmluZWQ7XG4gICAgaWYoXG4gICAgICAgIHRpbWV6b25lID09PSBudWxsIHx8IHRpbWV6b25lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgTnVtYmVyLmlzRmluaXRlKHRpbWV6b25lKSB8fCB0eXBlb2YodGltZXpvbmUpID09PSBcInN0cmluZ1wiXG4gICAgKXtcbiAgICAgICAgdHogPSB0aW1lem9uZTtcbiAgICAgICAgdXNlT3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfWVsc2UgaWYodGltZXpvbmUgJiYgIW9wdGlvbnMpe1xuICAgICAgICB1c2VPcHRpb25zID0gdGltZXpvbmU7XG4gICAgICAgIHR6ID0gdXNlT3B0aW9ucy50ejtcbiAgICB9ZWxzZXtcbiAgICAgICAgdXNlT3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0ejogdHosXG4gICAgICAgIG9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKGRhdGUsIHR6KXtcbiAgICBpZih0eiA9PT0gbnVsbCB8fCB0eiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfWVsc2UgaWYodHogPj0gLTE2ICYmIHR6IDw9ICsxNil7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKDYwICogdHopO1xuICAgIH1lbHNlIGlmKE51bWJlci5pc0Zpbml0ZSh0eikpe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0eik7XG4gICAgfWVsc2UgaWYodHogPT09IFwibG9jYWxcIil7XG4gICAgICAgIHJldHVybiAtKGRhdGUgfHwgbmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgdHpVcHBlciA9IFN0cmluZyh0eikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYodHpVcHBlciBpbiBkZWZhdWx0VGltZXpvbmVOYW1lcyl7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLmZsb29yKDYwICogZGVmYXVsdFRpbWV6b25lTmFtZXNbdHpVcHBlcl0pO1xuICAgICAgICAgICAgaWYoTnVtYmVyLmlzRmluaXRlKG9mZnNldCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdGltZXpvbmUgb3B0aW9uIFwiJHt0en1cIi5gKTtcbn1cblxuZnVuY3Rpb24gc3RyZnRpbWUoZGF0ZSwgZm9ybWF0LCB0aW1lem9uZSwgb3B0aW9ucyl7XG4gICAgaWYoTnVtYmVyLmlzRmluaXRlKGRhdGUpKXtcbiAgICAgICAgLy8gQWNjZXB0IHVuaXggdGltZXN0YW1wcyAobWlsbGlzZWNvbmRzIHNpbmNlIGVwb2NoKVxuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfWVsc2UgaWYoIWRhdGUpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkYXRlIGlucHV0IHdhcyBwcm92aWRlZC5cIik7XG4gICAgfWVsc2UgaWYodHlwZW9mKGRhdGUudG9EYXRlKSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgLy8gU3VwcG9ydCBkYXRlIG9iamVjdHMgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tb21lbnRcbiAgICAgICAgLy8gU3VwcG9ydCBkYXRlIG9iamVjdHMgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9kYXlqc1xuICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YoZGF0ZS50b0pTRGF0ZSkgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgIC8vIFN1cHBvcnQgZGF0ZSBvYmplY3RzIGZyb20gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbHV4b25cbiAgICAgICAgZGF0ZSA9IGRhdGUudG9KU0RhdGUoKTtcbiAgICB9XG4gICAgaWYoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IERhdGUgaW5zdGFuY2UgZnJvbSBkYXRlIGlucHV0LlwiKTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5zID0gVGltZXN0YW1wUGFyc2VyLnBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCk7XG4gICAgY29uc3QgdXNlT3B0aW9ucyA9IGdldEZvcm1hdE9wdGlvbnModGltZXpvbmUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0TWludXRlcyA9IGdldFRpbWV6b25lT2Zmc2V0TWludXRlcyhkYXRlLCB1c2VPcHRpb25zLnR6KTtcbiAgICBjb25zdCB0ekRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBpZih0aW1lem9uZU9mZnNldE1pbnV0ZXMgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHR6RGF0ZS5zZXRVVENNaW51dGVzKFxuICAgICAgICAgICAgZGF0ZS5nZXRVVENNaW51dGVzKCkgK1xuICAgICAgICAgICAgdGltZXpvbmVPZmZzZXRNaW51dGVzXG4gICAgICAgICk7XG4gICAgfVxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgaWYodG9rZW4gaW5zdGFuY2VvZiBEaXJlY3RpdmUpe1xuICAgICAgICAgICAgb3V0cHV0ICs9IHRva2VuLndyaXRlKHR6RGF0ZSwgXCJcIiwgdXNlT3B0aW9ucy5vcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpO1xuICAgICAgICB9ZWxzZSBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZS5Ub2tlbil7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW4ud3JpdGUodHpEYXRlLCB1c2VPcHRpb25zLm9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb3V0cHV0ICs9IHRva2VuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHN0cnB0aW1lKHRpbWVzdGFtcCwgZm9ybWF0LCB0aW1lem9uZSwgb3B0aW9ucyl7XG4gICAgY29uc3QgdXNlT3B0aW9ucyA9IGdldEZvcm1hdE9wdGlvbnModGltZXpvbmUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBUaW1lc3RhbXBQYXJzZXIodGltZXN0YW1wLCBmb3JtYXQpO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0TWludXRlcyA9IGdldFRpbWV6b25lT2Zmc2V0TWludXRlcyh1bmRlZmluZWQsIHVzZU9wdGlvbnMudHopO1xuICAgIGlmKHRpbWV6b25lT2Zmc2V0TWludXRlcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcGFyc2VyLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9IHRpbWV6b25lT2Zmc2V0TWludXRlcztcbiAgICB9XG4gICAgaWYodXNlT3B0aW9ucy5vcHRpb25zKXtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdXNlT3B0aW9ucy5vcHRpb25zKXtcbiAgICAgICAgICAgIHBhcnNlcltrZXldID0gdXNlT3B0aW9ucy5vcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLnBhcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdC5nZXREYXRlKCk7XG59XG5cbmNvbnN0IHN0cnRpbWUgPSB7XG4gICAgc3RyZnRpbWU6IHN0cmZ0aW1lLFxuICAgIHN0cnB0aW1lOiBzdHJwdGltZSxcbn07XG5cbmNvbnN0IGVuZ2xpc2ggPSB7XG4gICAgZXJhTmFtZXM6IFtcbiAgICAgICAgXCJDRVwiLCBcIkJDRVwiXG4gICAgXSxcbiAgICBtZXJpZGllbU5hbWVzOiBbXG4gICAgICAgIFwiQU1cIiwgXCJQTVwiXG4gICAgXSxcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogW1xuICAgICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXG4gICAgXSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiBbXG4gICAgICAgIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLFxuICAgICAgICBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIlxuICAgIF0sXG4gICAgc2hvcnRNb250aE5hbWVzOiBbXG4gICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsXG4gICAgICAgIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJcbiAgICBdLFxuICAgIGxvbmdNb250aE5hbWVzOiBbXG4gICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgICAgICAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuICAgIF0sXG4gICAgb3JkaW5hbFRyYW5zZm9ybTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgY29uc3QgZGlnaXQgPSBNYXRoLmZsb29yKG51bWJlciAlIDEwKTtcbiAgICAgICAgaWYobnVtYmVyID4gMyAmJiBudW1iZXIgPD0gMjApIHJldHVybiBgJHtudW1iZXJ9dGhgO1xuICAgICAgICBpZihkaWdpdCA9PT0gMSkgcmV0dXJuIGAke251bWJlcn1zdGA7XG4gICAgICAgIGVsc2UgaWYoZGlnaXQgPT09IDIpIHJldHVybiBgJHtudW1iZXJ9bmRgO1xuICAgICAgICBlbHNlIGlmKGRpZ2l0ID09PSAzKSByZXR1cm4gYCR7bnVtYmVyfXJkYDtcbiAgICAgICAgZWxzZSByZXR1cm4gYCR7bnVtYmVyfXRoYDtcbiAgICB9LFxufTtcblxuXG5mdW5jdGlvbiBsZWZ0UGFkKGNoYXIsIGxlbmd0aCwgdGV4dCl7XG4gICAgbGV0IHN0cmluZyA9IFN0cmluZyh0ZXh0KTtcbiAgICB3aGlsZShzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKXtcbiAgICAgICAgc3RyaW5nID0gY2hhciArIHN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gd3JpdGVUaW1lem9uZU9mZnNldChvZmZzZXRNaW51dGVzLCBtb2RpZmllcil7XG4gICAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0TWludXRlcyk7XG4gICAgY29uc3Qgc2lnbiA9IChvZmZzZXRNaW51dGVzID49IDAgPyBcIitcIiA6IFwiLVwiKTtcbiAgICBjb25zdCBob3VyID0gbGVmdFBhZChcIjBcIiwgMiwgTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCkpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IGxlZnRQYWQoXCIwXCIsIDIsIGFic09mZnNldCAlIDYwKTtcbiAgICBpZihtb2RpZmllciA9PT0gXCI6OlwiKXtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjowMFwiO1xuICAgIH1lbHNlIGlmKG1vZGlmaWVyID09PSBcIjpcIil7XG4gICAgICAgIHJldHVybiBzaWduICsgaG91ciArIFwiOlwiICsgbWludXRlO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gc2lnbiArIGhvdXIgKyBtaW51dGU7XG4gICAgfVxufVxuXG4vLyBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBnaXZlbiBhbiBpbnB1dCBEYXRlLlxuLy8gUmV0dXJucyAwIGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuLy8gaHR0cHM6Ly93d3cucXVvcmEuY29tL0hvdy1kb2VzLVRvbW9oaWtvLVNha2Ftb3Rvcy1BbGdvcml0aG0td29yay9hbnN3ZXIvUmF6aW1hbi1ULVY/c3JpZD11MkhOWFxuZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGUpe1xuICAgIGNvbnN0IG9mZnNldHMgPSBbMCwgMywgMiwgNSwgMCwgMywgNSwgMSwgNCwgNiwgMiwgNF07XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIGxldCBkYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBpZihtb250aCA8IDIpe1xuICAgICAgICB5ZWFyLS07XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIG9mZnNldHNbbW9udGhdICsgeWVhciArIGRheSArXG4gICAgICAgIE1hdGguZmxvb3IoeWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3IoeWVhciAvIDQwMClcbiAgICApICUgNztcbn1cblxuLy8gR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgYXMgYSBudW1iZXIgKDEtMzY2KVxuZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpe1xuICAgIGNvbnN0IGxlbmd0aHMgPSBtb250aExlbmd0aHMuZm9yWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgIGNvbnN0IG1vbnRocyA9IGxlbmd0aHMuc2xpY2UoMCwgZGF0ZS5nZXRVVENNb250aCgpKTtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCkgKyAoXG4gICAgICAgIChtb250aHMubGVuZ3RoICYmIG1vbnRocy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSkgfHwgMFxuICAgICk7XG59XG5cbi8vIEdldCB0aGUgd2VlayBvZiB0aGUgeWVhciAoc3RhcnRpbmcgd2l0aCBTdW5kYXkpICgwLTUzKVxuZnVuY3Rpb24gZ2V0V2Vla09mWWVhckZyb21TdW5kYXkoZGF0ZSl7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGRheU9mWWVhciArIChmaXJzdERheU9mV2VlayB8fCA3KSAtIDEpIC8gNyk7XG59XG5cbi8vIEdldCB0aGUgd2VlayBvZiB0aGUgeWVhciAoc3RhcnRpbmcgd2l0aCBNb25kYXkpICgwLTUzKVxuZnVuY3Rpb24gZ2V0V2Vla09mWWVhckZyb21Nb25kYXkoZGF0ZSl7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGdldERheU9mV2VlayhkYXRlKTtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGdldEZpcnN0V2Vla2RheUluWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgIGNvbnN0IHN1bmRheVdlZWsgPSBNYXRoLmZsb29yKChkYXlPZlllYXIgKyAoZmlyc3REYXlPZldlZWsgfHwgNykgLSAxKSAvIDcpO1xuICAgIHJldHVybiBzdW5kYXlXZWVrIC0gKGRheU9mV2VlayA9PT0gMCA/IDEgOiAwKSArIChmaXJzdERheU9mV2VlayA9PT0gMSA/IDEgOiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoeWVhcil7XG4gICAgY29uc3QgcHJpb3JZZWFyID0geWVhciAtIDE7XG4gICAgY29uc3QgYSA9ICh5ZWFyICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNDAwKVxuICAgICkgJSA3O1xuICAgIGNvbnN0IGIgPSAocHJpb3JZZWFyICtcbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3IocHJpb3JZZWFyIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3IocHJpb3JZZWFyIC8gNDAwKVxuICAgICkgJSA3O1xuICAgIHJldHVybiBhID09PSA0IHx8IGIgPT09IDMgPyA1MyA6IDUyO1xufVxuXG4vLyBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSB5ZWFyXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNXZWVrX2RhdGVzXG5mdW5jdGlvbiBnZXRJU09XZWVrT2ZZZWFyKGRhdGUpe1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGdldERheU9mV2VlayhkYXRlKTtcbiAgICBjb25zdCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigoMTAgKyBkYXlPZlllYXIgLSAoZGF5T2ZXZWVrIHx8IDcpKSAvIDcpO1xuICAgIGlmKHdlZWtOdW1iZXIgPCAxKXtcbiAgICAgICAgcmV0dXJuIGdldElTT1dlZWtzSW5ZZWFyKHllYXIgLSAxKTtcbiAgICB9ZWxzZSBpZih3ZWVrTnVtYmVyID4gZ2V0SVNPV2Vla3NJblllYXIoeWVhcikpe1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHdlZWtOdW1iZXI7XG4gICAgfVxufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG5mdW5jdGlvbiBnZXRJU09XZWVrRGF0ZVllYXIoZGF0ZSl7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKCgxMCArIGRheU9mWWVhciAtIChkYXlPZldlZWsgfHwgNykpIC8gNyk7XG4gICAgaWYod2Vla051bWJlciA8IDEpe1xuICAgICAgICByZXR1cm4geWVhciAtIDE7XG4gICAgfWVsc2UgaWYod2Vla051bWJlciA+IGdldElTT1dlZWtzSW5ZZWFyKHllYXIpKXtcbiAgICAgICAgcmV0dXJuIHllYXIgKyAxO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4geWVhcjtcbiAgICB9XG59XG5cbmNsYXNzIERpcmVjdGl2ZXtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICAgICAgLy8gTGlzdCBvZiBwb3NzaWJsZSBuYW1lcyBmb3IgdGhpcyBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5uYW1lcyA9IG9wdGlvbnMubmFtZXM7XG4gICAgICAgIC8vIFBhZCBudW1iZXJzIHRvIHRoaXMgbGVuZ3RoIChub3JtYWxseSlcbiAgICAgICAgdGhpcy5wYWRMZW5ndGggPSBvcHRpb25zLnBhZExlbmd0aDtcbiAgICAgICAgLy8gQSBsaWtlbHkgKGJ1dCBub3Qgc3RyaWN0KSBsZW5ndGggdG8gYmUgdXNlZCB3aGVuIHJlc29sdmluZ1xuICAgICAgICAvLyBhbWJpZ3VvdXMgcGFyc2luZyBpbnB1dHNcbiAgICAgICAgdGhpcy5saWtlbHlMZW5ndGggPSBvcHRpb25zLmxpa2VseUxlbmd0aDtcbiAgICAgICAgLy8gSW5kaWNhdGVzIHRoYXQgdGhpcyBkaXJlY3RpdmUgdXNlcyB0ZXh0IChhcyBvcHBvc2VkIHRvIG51bWJlcnMpXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgLy8gVGhlIG1pbmltdW0gcGVybWl0dGVkIG51bWVyaWMgdmFsdWUgZm9yIGEgZGlyZWN0aXZlXG4gICAgICAgIHRoaXMubWluaW11bSA9IG9wdGlvbnMubWluaW11bTtcbiAgICAgICAgLy8gVGhlIG1heGltdW0gcGVybWl0dGVkIG51bWVyaWMgdmFsdWUgZm9yIGEgZGlyZWN0aXZlXG4gICAgICAgIHRoaXMubWF4aW11bSA9IG9wdGlvbnMubWF4aW11bTtcbiAgICAgICAgLy8gV2hldGhlciB0aGlzIGRpcmVjdGl2ZSByZXByZXNlbnRzIGEgbnVtYmVyIHRoYXQgY2FuIGJlIG5lZ2F0aXZlXG4gICAgICAgIHRoaXMuY2FuQmVOZWdhdGl2ZSA9IG9wdGlvbnMuY2FuQmVOZWdhdGl2ZTtcbiAgICAgICAgLy8gVGhpcyBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBiZSByZXdyaXR0ZW4gdXNpbmcgYSBjb21iaW5hdGlvbiBvZlxuICAgICAgICAvLyBvdGhlciBkaXJlY3RpdmVzXG4gICAgICAgIHRoaXMucmV3cml0ZSA9IG9wdGlvbnMucmV3cml0ZTtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gcGFyc2UgY29udGVudCBmcm9tIGEgc3RyaW5nXG4gICAgICAgIHRoaXMucGFyc2VGdW5jdGlvbiA9IG9wdGlvbnMucGFyc2U7XG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHdyaXRlIGNvbnRlbnQgYXMgYSBzdHJpbmcsIGdpdmVuIGEgZGF0ZSB0byBmb3JtYXRcbiAgICAgICAgdGhpcy53cml0ZUZ1bmN0aW9uID0gb3B0aW9ucy53cml0ZTtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gc3RvcmUgYSBwYXJzZWQgbnVtZXJpYyB2YWx1ZVxuICAgICAgICB0aGlzLnN0b3JlRnVuY3Rpb24gPSBvcHRpb25zLnN0b3JlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QnlOYW1lKG5hbWUpe1xuICAgICAgICBmb3IobGV0IGRpcmVjdGl2ZSBvZiBEaXJlY3RpdmUubGlzdCl7XG4gICAgICAgICAgICBpZihkaXJlY3RpdmUubmFtZXMuaW5kZXhPZihuYW1lKSA+PSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlzT3JkaW5hbCgpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldENhbkJlTmVnYXRpdmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuQmVOZWdhdGl2ZTtcbiAgICB9XG4gICAgZ2V0TGlrZWx5TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxpa2VseUxlbmd0aDtcbiAgICB9XG4gICAgZ2V0UmV3cml0ZVBhcnNlZChwYXJzZUZvcm1hdFN0cmluZyl7XG4gICAgICAgIGlmKCF0aGlzLnJld3JpdGVQYXJzZWRWYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnJld3JpdGVQYXJzZWRWYWx1ZSA9IHBhcnNlRm9ybWF0U3RyaW5nKHRoaXMucmV3cml0ZSk7XG4gICAgICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlKXtcbiAgICAgICAgICAgICAgICB0b2tlbi5leHBhbmRlZEZyb20gPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJld3JpdGVQYXJzZWRWYWx1ZTtcbiAgICB9XG4gICAgaGFzUGFyc2VGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gISF0aGlzLnBhcnNlRnVuY3Rpb247XG4gICAgfVxuICAgIGhhc1N0b3JlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdG9yZUZ1bmN0aW9uO1xuICAgIH1cbiAgICBwYXJzZShwYXJzZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uLmNhbGwocGFyc2VyKTtcbiAgICB9XG4gICAgc3RvcmUocGFyc2VyLCBudW1iZXIpe1xuICAgICAgICB0aGlzLnN0b3JlRnVuY3Rpb24uY2FsbChwYXJzZXIsIG51bWJlcik7XG4gICAgfVxuICAgIHdyaXRlKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpO1xuICAgIH1cbiAgICBudW1iZXJJbkJvdW5kcyh2YWx1ZSl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLm1pbmltdW0pIHx8IHZhbHVlID49IHRoaXMubWluaW11bSkgJiZcbiAgICAgICAgICAgICghTnVtYmVyLmlzRmluaXRlKHRoaXMubWF4aW11bSkgfHwgdmFsdWUgPD0gdGhpcy5tYXhpbXVtKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnZXRCb3VuZHNTdHJpbmcoKXtcbiAgICAgICAgaWYoTnVtYmVyLmlzRmluaXRlKHRoaXMubWluaW11bSkgJiYgTnVtYmVyLmlzRmluaXRlKHRoaXMubWF4aW11bSkpe1xuICAgICAgICAgICAgcmV0dXJuIGBbJHt0aGlzLm1pbmltdW19LCAke3RoaXMubWF4aW11bX1dYDtcbiAgICAgICAgfWVsc2UgaWYoTnVtYmVyLmlzRmluaXRlKHRoaXMubWluaW11bSkpe1xuICAgICAgICAgICAgcmV0dXJuIGBbJHt0aGlzLm1pbmltdW19LCAuLi5dYDtcbiAgICAgICAgfWVsc2UgaWYoTnVtYmVyLmlzRmluaXRlKHRoaXMubWF4aW11bSkpe1xuICAgICAgICAgICAgcmV0dXJuIGBbLi4uLCAke3RoaXMubWF4aW11bX1dYDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiBcIiVcIiArIHRoaXMubmFtZXNbMF07XG4gICAgfVxufVxuXG5EaXJlY3RpdmUuVG9rZW4gPSBjbGFzcyBEaXJlY3RpdmVUb2tlbntcbiAgICBjb25zdHJ1Y3Rvcihtb2RpZmllciwgZGlyZWN0aXZlKXtcbiAgICAgICAgdGhpcy5tb2RpZmllciA9IG1vZGlmaWVyO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IGRpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5leHBhbmRlZEZyb20gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlzT3JkaW5hbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmllciA9PT0gXCI6XCI7XG4gICAgfVxuICAgIGdldENhbkJlTmVnYXRpdmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmNhbkJlTmVnYXRpdmU7XG4gICAgfVxuICAgIGdldExpa2VseUxlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUubGlrZWx5TGVuZ3RoO1xuICAgIH1cbiAgICBoYXNQYXJzZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZS5oYXNQYXJzZUZ1bmN0aW9uKCk7XG4gICAgfVxuICAgIGhhc1N0b3JlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmhhc1N0b3JlRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgcGFyc2UocGFyc2VyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLnBhcnNlRnVuY3Rpb24uY2FsbChwYXJzZXIsIHRoaXMubW9kaWZpZXIpO1xuICAgIH1cbiAgICBzdG9yZShwYXJzZXIsIG51bWJlcil7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLnN0b3JlRnVuY3Rpb24uY2FsbChwYXJzZXIsIG51bWJlcik7XG4gICAgfVxuICAgIHdyaXRlKGRhdGUsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlyZWN0aXZlLndyaXRlKGRhdGUsIHRoaXMubW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgICAgIGlmKHRoaXMubW9kaWZpZXIgPT09IFwiXlwiKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IFN0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgaWYodHlwZW9mKHJlc3VsdCkgPT09IFwibnVtYmVyXCIpIHJldHVybiByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICBjb25zdCB1cHBlciA9IHJlc3VsdFN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHVwcGVyICE9PSByZXN1bHRTdHJpbmcgPyB1cHBlciA6IHJlc3VsdFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIl9cIiAmJiB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRQYWQoXCIgXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgcmVzdWx0KTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RpZmllciA9PT0gXCJfXCIgJiYgdGhpcy5kaXJlY3RpdmUudGV4dCl7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHJlc3VsdCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RpZmllciA9PT0gXCItXCIgJiYgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcocmVzdWx0KTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RpZmllciA9PT0gXCI6XCIgJiYgIXRoaXMuZGlyZWN0aXZlLnRleHQpe1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gKChvcHRpb25zICYmIG9wdGlvbnMub3JkaW5hbFRyYW5zZm9ybSkgfHxcbiAgICAgICAgICAgICAgICBlbmdsaXNoLm9yZGluYWxUcmFuc2Zvcm1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtKHJlc3VsdCk7XG4gICAgICAgIH1lbHNlIGlmKCF0aGlzLmRpcmVjdGl2ZS50ZXh0ICYmIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdCA+PSAwID9cbiAgICAgICAgICAgICAgICBsZWZ0UGFkKFwiMFwiLCB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgsIHJlc3VsdCkgOlxuICAgICAgICAgICAgICAgIGAtJHtsZWZ0UGFkKFwiMFwiLCB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgsIC1yZXN1bHQpfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG51bWJlckluQm91bmRzKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLm51bWJlckluQm91bmRzKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZS5nZXRCb3VuZHNTdHJpbmcoKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIFwiJVwiICsgdGhpcy5tb2RpZmllciArIHRoaXMuZGlyZWN0aXZlLm5hbWVzWzBdO1xuICAgIH1cbn1cblxuRGlyZWN0aXZlLlN0cmluZ1Rva2VuID0gY2xhc3MgRGlyZWN0aXZlU3RyaW5nVG9rZW57XG4gICAgY29uc3RydWN0b3Ioc3RyaW5nKXtcbiAgICAgICAgdGhpcy5zdHJpbmcgPSBzdHJpbmcgfHwgXCJcIjtcbiAgICAgICAgdGhpcy5leHBhbmRlZEZyb20gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFkZENoYXJhY3RlcihjaCl7XG4gICAgICAgIHRoaXMuc3RyaW5nICs9IGNoO1xuICAgIH1cbiAgICB0b1N0cmluZygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gICAgfVxufVxuXG5EaXJlY3RpdmUubGlzdCA9IFtcbiAgICAvLyBBYmJyZXZpYXRlZCB3ZWVrZGF5IG5hbWVcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImFcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSB0aGlzLnBhcnNlV2Vla2RheU5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLnNob3J0V2Vla2RheU5hbWVzKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2guc2hvcnRXZWVrZGF5TmFtZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNbZGF0ZS5nZXRVVENEYXkoKSAlIDddO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIExvbmcgd2Vla2RheSBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJBXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gdGhpcy5wYXJzZVdlZWtkYXlOYW1lKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSAoKG9wdGlvbnMgJiYgb3B0aW9ucy5sb25nV2Vla2RheU5hbWVzKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2gubG9uZ1dlZWtkYXlOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ0RheSgpICUgN107XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gQWJicmV2aWF0ZWQgbW9udGggbmFtZVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiYlwiLCBcImhcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IDEgKyB0aGlzLnBhcnNlTW9udGhOYW1lKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSAoKG9wdGlvbnMgJiYgb3B0aW9ucy5zaG9ydE1vbnRoTmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5zaG9ydE1vbnRoTmFtZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNbZGF0ZS5nZXRVVENNb250aCgpICUgMTJdO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIExvbmcgbW9udGggbmFtZVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiQlwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gMSArIHRoaXMucGFyc2VNb250aE5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLmxvbmdNb250aE5hbWVzKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2gubG9uZ01vbnRoTmFtZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNbZGF0ZS5nZXRVVENNb250aCgpICUgMTJdO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIENvbWJpbmF0aW9uIGRhdGUgYW5kIHRpbWUsIHNhbWUgYXMgXCIlYSAlYiAlZSAlSDolTTolUyAlWVwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJjXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVhICViICVlICVIOiVNOiVTICVZXCIsXG4gICAgfSksXG4gICAgLy8gQ2VudHVyeSAoY29tcGxlbWVudHMgJXkpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJDXCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5jZW50dXJ5ID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLyAxMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBkYXkgb2YgbW9udGhcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImRcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAzMSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmRheU9mTW9udGggPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzICVtLyVkLyV5XG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJEXCIsIFwieFwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlbS8lZC8leVwiLFxuICAgIH0pLFxuICAgIC8vIERheSBvZiBtb250aCBwYWRkZWQgd2l0aCBzcGFjZXMgKHNhbWUgYXMgXCIlX2RcIilcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImVcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMzEsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIpe1xuICAgICAgICAgICAgaWYoIW1vZGlmaWVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFBhZChcIiBcIiwgMiwgZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNpeC1kaWdpdCBtaWNyb3NlY29uZFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZlwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiA2LFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDYsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDk5OTk5OSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gMTAwMCAqIGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyAlWS0lbS0lZFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiRlwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlWS0lbS0lZFwiLFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBJU08gd2VlayB5ZWFyXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJnXCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5pc29Ud29EaWdpdFllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRJU09XZWVrRGF0ZVllYXIoZGF0ZSkgJSAxMDA7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRnVsbCBJU08gd2VlayB5ZWFyXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJHXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDQsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNCxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmlzb1llYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRJU09XZWVrRGF0ZVllYXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IGhvdXIgKDAtMjMpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJIXCIsIFwia1wiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDIzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaG91ciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgaG91ciAoMS0xMikgdG8gYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoICVwIChBTS9QTSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIklcIiwgXCJsXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMTIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyKSB8fCAxMjtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBEYXkgaW4geWVhclxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wialwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAzLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDMsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDM2NixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmRheU9mWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUaHJlZS1kaWdpdCBtaWxsaXNlY29uZFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiTFwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAzLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDMsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDk5OSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLm1pbGxpc2Vjb25kID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgbW9udGggbnVtYmVyICgxLTEyKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wibVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDEyLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAxICsgZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBtaW51dGUgKDAtNTkpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJNXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNTksXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5taW51dGUgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBTSBvciBQTSAodXBwZXJjYXNlKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wicFwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1lcmlkaWVtID0gdGhpcy5wYXJzZU1lcmlkaWVtTmFtZSgpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0hvdXJzKCkgPCAxMiA/IDAgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLm1lcmlkaWVtTmFtZXMpIHx8IGVuZ2xpc2gubWVyaWRpZW1OYW1lc1xuICAgICAgICAgICAgKVtpbmRleF07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gQU0gb3IgUE0gKGxvd2VyY2FzZSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlBcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1lcmlkaWVtID0gdGhpcy5wYXJzZU1lcmlkaWVtTmFtZSgpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0hvdXJzKCkgPCAxMiA/IDAgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLm1lcmlkaWVtTmFtZXMpIHx8IGVuZ2xpc2gubWVyaWRpZW1OYW1lc1xuICAgICAgICAgICAgKVtpbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBOdW1iZXIgb2YgbWlyY29zZWNvbmRzIHNpbmNlIGVwb2NoXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJRXCJdLFxuICAgICAgICBjYW5CZU5lZ2F0aXZlOiB0cnVlLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgKiAxMDAwKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzIFwiJUk6JU06JVMgJXBcIlxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiclwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlSTolTTolUyAlcFwiLFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgXCIlSDolTVwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJSXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVIOiVNXCIsXG4gICAgfSksXG4gICAgLy8gTnVtYmVyIG9mIHNlY29uZHMgc2luY2UgZXBvY2hcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcInNcIl0sXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRzU2luY2VFcG9jaCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgc2Vjb25kICgwLTYxKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiU1wiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDYxLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oNTksIGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzICVIOiVNOiVTXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJUXCIsIFwiWFwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlSDolTTolU1wiLFxuICAgIH0pLFxuICAgIC8vIFdlZWtkYXkgbnVtYmVyLCBzdGFydGluZyB3aXRoIE1vbmRheSAoMS03KVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1widVwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAxLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiA3LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gbnVtYmVyICUgNztcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldERheU9mV2VlayhkYXRlKSB8fCA3O1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFdlZWsgb2YgdGhlIHllYXIsIHN0YXJ0aW5nIHdpdGggU3VuZGF5ICgwLTUzKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiVVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMud2Vla09mWWVhckZyb21TdW5kYXkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheShkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBWTVMgZGF0ZSwgc2FtZSBhcyBcIiVlLSViLSVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcInZcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWUtJWItJVlcIixcbiAgICB9KSxcbiAgICAvLyBJU08gODYwMToxOTg4IHdlZWsgbnVtYmVyICgxLTUzKSwgY29tcGxlbWVudHMgJWcvJUdcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlZcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiA1MyxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmlzb1dlZWtPZlllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRJU09XZWVrT2ZZZWFyKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFdlZWtkYXkgbnVtYmVyLCBzdGFydGluZyB3aXRoIFN1bmRheSAoMC02KVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wid1wiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAxLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICBtYXhpbXVtOiA2LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gbnVtYmVyICUgNztcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldERheU9mV2VlayhkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBXZWVrIG9mIHRoZSB5ZWFyLCBzdGFydGluZyB3aXRoIE1vbmRheSAoMC01MylcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIldcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICBtYXhpbXVtOiA1MyxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tTW9uZGF5ID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0V2Vla09mWWVhckZyb21Nb25kYXkoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcInlcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMudHdvRGlnaXRZZWFyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICUgMTAwO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEZ1bGwgeWVhciAodXN1YWxseSBmb3VyLWRpZ2l0LCBidXQgbm90IHN0cmljdGx5IHNvKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiWVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiA0LFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDQsXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy55ZWFyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIpe1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICAgIC8vIE1vZGlmaWVyIFwiXlwiIHByb2R1Y2VzIHVuc2lnbmVkIHllYXIsIGZvciBjb21iaW5hdGlvbiB3aXRoIGVyYSBcIiUjXCJcbiAgICAgICAgICAgIGlmKHllYXIgPD0gMCAmJiBtb2RpZmllciA9PT0gXCJeXCIpIHJldHVybiAxIC0geWVhcjtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHllYXI7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVGltZXpvbmUgb2Zmc2V0IGUuZy4gKzA1MDAgb3IgLTEyMDBcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcInpcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihtb2RpZmllcil7XG4gICAgICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9IHRoaXMucGFyc2VUaW1lem9uZU9mZnNldChtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChOdW1iZXIuaXNGaW5pdGUodGltZXpvbmVPZmZzZXRNaW51dGVzKSA/XG4gICAgICAgICAgICAgICAgdGltZXpvbmVPZmZzZXRNaW51dGVzIDogLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB3cml0ZVRpbWV6b25lT2Zmc2V0KG9mZnNldCwgbW9kaWZpZXIpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFRpbWV6b25lIG9mZnNldCBvciBuYW1lIGUuZy4gVVRDIG9yIEdNVCBvciBFU1Qgb3IgKzA1MDAgb3IgLTEyMDBcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlpcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogNSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKG1vZGlmaWVyKXtcbiAgICAgICAgICAgIGNvbnN0IHR6TGlzdCA9IHRoaXMuZ2V0VGltZXpvbmVOYW1lTGlzdCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodHpMaXN0KTtcbiAgICAgICAgICAgIGlmKGluZGV4ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gNjAgKiB0aGlzLnRpbWV6b25lTmFtZXNbdHpMaXN0W2luZGV4XV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9IHRoaXMucGFyc2VUaW1lem9uZU9mZnNldChtb2RpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChOdW1iZXIuaXNGaW5pdGUodGltZXpvbmVPZmZzZXRNaW51dGVzKSA/XG4gICAgICAgICAgICAgICAgdGltZXpvbmVPZmZzZXRNaW51dGVzIDogLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmKG9mZnNldCA9PT0gMCkgcmV0dXJuIFwiVVRDXCI7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB3cml0ZVRpbWV6b25lT2Zmc2V0KG9mZnNldCwgbW9kaWZpZXIpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgXCIlYSAlYiAlZSAlSDolTTolUyAlWiAlWVwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCIrXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVhICViICVlICVIOiVNOiVTICVaICVZXCIsXG4gICAgfSksXG4gICAgLy8gRXJhIChCQy9CQ0UpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCIjXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuZXJhID0gdGhpcy5wYXJzZUVyYU5hbWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDw9IDAgPyAxIDogMDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMgJiYgb3B0aW9ucy5lcmFOYW1lcykgfHwgZW5nbGlzaC5lcmFOYW1lc1xuICAgICAgICAgICAgKVtpbmRleF07XG4gICAgICAgIH0sXG4gICAgfSksXG5dO1xuXG4vLyBUaGUgYXNzZXJ0aW9uLWVycm9yIHBhY2thZ2Ugd2FzIHVzZWQgYXMgYSBiYXNpcyBmb3IgdGhlIFRpbWVzdGFtcFBhcnNlRXJyb3IgdHlwZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NoYWlqcy9hc3NlcnRpb24tZXJyb3IvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuLy8gVGhlIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBUaW1lc3RhbXBQYXJzZUVycm9yKHJlYXNvbiwgcGFyc2VyKXtcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuZm9ybWF0ID0gcGFyc2VyLmZvcm1hdDtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHBhcnNlci5zdHJpbmc7XG4gICAgdGhpcy50b2tlbiA9IHBhcnNlci5jdXJyZW50VG9rZW47XG4gICAgdGhpcy5pbmRleCA9IHBhcnNlci5pbmRleDtcbiAgICBpZih0aGlzLnRva2VuICYmIHRoaXMudG9rZW4uZXhwYW5kZWRGcm9tICYmIHRoaXMuaW5kZXggIT09IHVuZGVmaW5lZCkgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRva2VuIFwiJHt0aGlzLnRva2VufVwiIGAgK1xuICAgICAgICBgKGV4cGFuZGVkIGZyb20gXCIke3RoaXMudG9rZW4uZXhwYW5kZWRGcm9tfVwiKSBhdCBwb3NpdGlvbiBbJHt0aGlzLmluZGV4fV0gYCArXG4gICAgICAgIGBpbiB0aW1lc3RhbXAgXCIke3RoaXMudGltZXN0YW1wfVwiIHdpdGggZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogYCArXG4gICAgICAgIGAke3RoaXMucmVhc29ufWBcbiAgICApO1xuICAgIGVsc2UgaWYodGhpcy50b2tlbiAmJiB0aGlzLmluZGV4ICE9PSB1bmRlZmluZWQpIHRoaXMubWVzc2FnZSA9IChcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSB0b2tlbiBcIiR7dGhpcy50b2tlbn1cIiBhdCBwb3NpdGlvbiBbJHt0aGlzLmluZGV4fV0gYCArXG4gICAgICAgIGBpbiB0aW1lc3RhbXAgXCIke3RoaXMudGltZXN0YW1wfVwiIHdpdGggZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogYCArXG4gICAgICAgIGAke3RoaXMucmVhc29ufWBcbiAgICApO1xuICAgIGVsc2UgaWYodGhpcy50b2tlbikgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRva2VuIFwiJHt0aGlzLnRva2VufVwiIGAgK1xuICAgICAgICBgaW4gZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogJHt0aGlzLnJlYXNvbn1gXG4gICAgKTtcbiAgICBlbHNlIHRoaXMubWVzc2FnZSA9IChcbiAgICAgICAgYEZhaWxlZCB3aXRoIGZvcm1hdCBcIiR7dGhpcy5mb3JtYXR9XCI6ICR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9lcnJvcnMuaHRtbCNlcnJvcnNfZXJyb3JfY2FwdHVyZXN0YWNrdHJhY2VfdGFyZ2V0b2JqZWN0X2NvbnN0cnVjdG9yb3B0XG4gICAgaWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2Upe1xuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFByb3RvdHlwZSB3cmFuZ2xpbmdcblRpbWVzdGFtcFBhcnNlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuVGltZXN0YW1wUGFyc2VFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVGltZXN0YW1wUGFyc2VFcnJvclwiO1xuVGltZXN0YW1wUGFyc2VFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUaW1lc3RhbXBQYXJzZUVycm9yO1xuXG5cbmZ1bmN0aW9uIGlzRGlnaXQoY2gpe1xuICAgIHJldHVybiAoXG4gICAgICAgIGNoID09PSBcIjBcIiB8fCBjaCA9PT0gXCIxXCIgfHwgY2ggPT09IFwiMlwiIHx8IGNoID09PSBcIjNcIiB8fCBjaCA9PT0gXCI0XCIgfHxcbiAgICAgICAgY2ggPT09IFwiNVwiIHx8IGNoID09PSBcIjZcIiB8fCBjaCA9PT0gXCI3XCIgfHwgY2ggPT09IFwiOFwiIHx8IGNoID09PSBcIjlcIlxuICAgICk7XG59XG5cbi8vIE1hdGNoZXMgR05VIEMgc3RycHRpbWUgYmVoYXZpb3Jcbi8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvbGliYy9tYW51YWwvaHRtbF9ub2RlL0xvd18wMDJkTGV2ZWwtVGltZS1TdHJpbmctUGFyc2luZy5odG1sXG5mdW5jdGlvbiBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh5ZWFyKXtcbiAgICByZXR1cm4geWVhciArICh5ZWFyIDw9IDY4ID8gMjAwMCA6IDE5MDApO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKXtcbiAgICBjb25zdCBtb250aHMgPSBtb250aExlbmd0aHMuZm9yWWVhcih5ZWFyKTtcbiAgICBsZXQgZGF5cyA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1vbnRocy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRheXMgPj0gZGF5T2ZZZWFyKSByZXR1cm4gaTtcbiAgICAgICAgZGF5cyArPSBtb250aHNbaV07XG4gICAgfVxuICAgIHJldHVybiAxMjtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKXtcbiAgICBjb25zdCBtb250aHMgPSBtb250aExlbmd0aHMuZm9yWWVhcih5ZWFyKTtcbiAgICBsZXQgZGF5cyA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1vbnRocy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRheU9mWWVhciAtIGRheXMgPD0gbW9udGhzW2ldKSByZXR1cm4gZGF5T2ZZZWFyIC0gZGF5cztcbiAgICAgICAgZGF5cyArPSBtb250aHNbaV07XG4gICAgfVxuICAgIHJldHVybiBkYXlPZlllYXIgLSBkYXlzO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNXZWVrX2RhdGVzXG5mdW5jdGlvbiBnZXREYXRlRnJvbUlTT1dlZWtEYXRlKHBhcnNlciwgaXNvWWVhciwgaXNvV2Vla09mWWVhciwgZGF5T2ZXZWVrKXtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGdldEZpcnN0V2Vla2RheUluWWVhcihpc29ZZWFyKTtcbiAgICBjb25zdCB3ZWVrZGF5T2ZKYW40ID0gKCgzICsgZmlyc3REYXlPZldlZWspICUgNykgfHwgNztcbiAgICBjb25zdCBkYXlzSW5ZZWFyID0gaXNMZWFwWWVhcihpc29ZZWFyKSA/IDM2NiA6IDM2NTtcbiAgICBsZXQgZGF5T2ZZZWFyID0gNyAqIGlzb1dlZWtPZlllYXIgKyAoZGF5T2ZXZWVrIHx8IDcpIC0gd2Vla2RheU9mSmFuNCAtIDM7XG4gICAgaWYoZGF5T2ZZZWFyIDwgMSl7XG4gICAgICAgIHBhcnNlci55ZWFyID0gaXNvWWVhciAtIDE7XG4gICAgICAgIGRheU9mWWVhciArPSBkYXlzSW5ZZWFyO1xuICAgIH1lbHNlIGlmKGRheU9mWWVhciA+IGRheXNJblllYXIpe1xuICAgICAgICBwYXJzZXIueWVhciA9IDEgKyBpc29ZZWFyO1xuICAgICAgICBkYXlPZlllYXIgLT0gZGF5c0luWWVhcjtcbiAgICB9ZWxzZXtcbiAgICAgICAgcGFyc2VyLnllYXIgPSBpc29ZZWFyO1xuICAgIH1cbiAgICBwYXJzZXIubW9udGggPSBnZXRNb250aEZyb21EYXlPZlllYXIocGFyc2VyLnllYXIsIGRheU9mWWVhcik7XG4gICAgcGFyc2VyLmRheU9mTW9udGggPSBnZXREYXlPZk1vbnRoRnJvbURheU9mWWVhcihwYXJzZXIueWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21TdW5kYXlXZWVrRGF0ZShwYXJzZXIsIHllYXIsIHdlZWtPZlllYXIsIGRheU9mV2Vlayl7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoeWVhcik7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gMSArIDcgKiB3ZWVrT2ZZZWFyIC0gKGZpcnN0RGF5T2ZXZWVrIHx8IDcpICsgZGF5T2ZXZWVrO1xuICAgIHBhcnNlci55ZWFyID0geWVhcjtcbiAgICBwYXJzZXIubW9udGggPSBnZXRNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbiAgICBwYXJzZXIuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHllYXIsIGRheU9mWWVhcik7XG59XG5cbmZ1bmN0aW9uIGdldERhdGVGcm9tTW9uZGF5V2Vla0RhdGUocGFyc2VyLCB5ZWFyLCB3ZWVrT2ZZZWFyLCBkYXlPZldlZWspe1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKHllYXIpO1xuICAgIGNvbnN0IHN1bmRheURheU9mWWVhciA9IDEgKyA3ICogd2Vla09mWWVhciAtIChmaXJzdERheU9mV2VlayB8fCA3KSArIGRheU9mV2VlaztcbiAgICBjb25zdCBkYXlPZlllYXIgPSBzdW5kYXlEYXlPZlllYXIgKyAoXG4gICAgICAgIChkYXlPZldlZWsgPT09IDAgPyA3IDogMCkgLSAoZmlyc3REYXlPZldlZWsgPT09IDEgPyA3IDogMClcbiAgICApO1xuICAgIHBhcnNlci55ZWFyID0geWVhcjtcbiAgICBwYXJzZXIubW9udGggPSBnZXRNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbiAgICBwYXJzZXIuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHllYXIsIGRheU9mWWVhcik7XG59XG5cbmNsYXNzIFRpbWVzdGFtcFBhcnNlcntcbiAgICBjb25zdHJ1Y3Rvcih0aW1lc3RhbXAsIGZvcm1hdCwgdG9rZW5zKXtcbiAgICAgICAgLy8gUGFyc2VyIHN0YXRlXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnN0cmluZyA9IFN0cmluZyh0aW1lc3RhbXApO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IFN0cmluZyhmb3JtYXQpO1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcodGhpcy5mb3JtYXQpO1xuICAgICAgICB0aGlzLmZvcmtMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gUGFyc2VyIHNldHRpbmdzXG4gICAgICAgIHRoaXMuc2hvcnRXZWVrZGF5TmFtZXMgPSBlbmdsaXNoLnNob3J0V2Vla2RheU5hbWVzO1xuICAgICAgICB0aGlzLmxvbmdXZWVrZGF5TmFtZXMgPSBlbmdsaXNoLmxvbmdXZWVrZGF5TmFtZXM7XG4gICAgICAgIHRoaXMuc2hvcnRNb250aE5hbWVzID0gZW5nbGlzaC5zaG9ydE1vbnRoTmFtZXM7XG4gICAgICAgIHRoaXMubG9uZ01vbnRoTmFtZXMgPSBlbmdsaXNoLmxvbmdNb250aE5hbWVzO1xuICAgICAgICB0aGlzLmVyYU5hbWVzID0gZW5nbGlzaC5lcmFOYW1lcztcbiAgICAgICAgdGhpcy5tZXJpZGllbU5hbWVzID0gZW5nbGlzaC5tZXJpZGllbU5hbWVzO1xuICAgICAgICB0aGlzLm9yZGluYWxUcmFuc2Zvcm0gPSBlbmdsaXNoLm9yZGluYWxUcmFuc2Zvcm07XG4gICAgICAgIHRoaXMudGltZXpvbmVOYW1lcyA9IGRlZmF1bHRUaW1lem9uZU5hbWVzO1xuICAgICAgICAvLyBTdG9yYWdlIHZhbHVlcyBmcm9tIHBhcnNpbmcgdG9rZW5zXG4gICAgICAgIHRoaXMuZXJhID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNlbnR1cnkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMueWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50d29EaWdpdFllYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNvWWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29Ud29EaWdpdFllYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW9udGggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNvV2Vla09mWWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy53ZWVrT2ZZZWFyRnJvbU1vbmRheSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXlPZlllYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXlPZldlZWsgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaG91ciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5taW51dGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2Vjb25kID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1lcmlkaWVtID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZWNvbmRzU2luY2VFcG9jaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5taWxsaXNlY29uZHNTaW5jZUVwb2NoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGdldFRpbWV6b25lT2Zmc2V0T2ZEYXRlKGRhdGUpe1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXMgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIDpcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9mZnNldFNpZ24gPSBvZmZzZXQgPj0gMCA/ICsxIDogLTE7XG4gICAgICAgIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3VyOiBvZmZzZXRTaWduICogTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksXG4gICAgICAgICAgICBtaW51dGU6IG9mZnNldFNpZ24gKiBNYXRoLmZsb29yKGFic09mZnNldCAlIDYwKSxcbiAgICAgICAgICAgIHRvdGFsTWludXRlczogb2Zmc2V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXREYXRlKCl7XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKHRoaXMubWlsbGlzZWNvbmRzU2luY2VFcG9jaCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggPSAxMDAwICogdGhpcy5taWxsaXNlY29uZHNTaW5jZUVwb2NoO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZWNvbmRzU2luY2VFcG9jaCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggPSAxMDAwMDAwICogdGhpcy5zZWNvbmRzU2luY2VFcG9jaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoIC8gMTAwMCk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFRpbWV6b25lT2Zmc2V0T2ZEYXRlKGRhdGUpO1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENNaW51dGVzKGRhdGUuZ2V0VVRDTWludXRlcygpIC0gb2Zmc2V0LnRvdGFsTWludXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYodGhpcy55ZWFyID09PSB1bmRlZmluZWQgJiYgdGhpcy50d29EaWdpdFllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZih0aGlzLmNlbnR1cnkgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyID0gZ2V0WWVhckZyb21Ud29EaWdpdHModGhpcy50d29EaWdpdFllYXIpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyID0gMTAwICogdGhpcy5jZW50dXJ5ICsgdGhpcy50d29EaWdpdFllYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNvWWVhciA9PT0gdW5kZWZpbmVkICYmIHRoaXMuaXNvVHdvRGlnaXRZZWFyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5pc29ZZWFyID0gZ2V0WWVhckZyb21Ud29EaWdpdHModGhpcy5pc29Ud29EaWdpdFllYXIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnllYXIgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNlbnR1cnkgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSAxMDAgKiB0aGlzLmNlbnR1cnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5lcmEgJiYgdGhpcy55ZWFyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy55ZWFyID0gMSAtIHRoaXMueWVhcjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvdXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1lcmlkaWVtICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gKHRoaXMuaG91ciAlIDEyKSArICh0aGlzLm1lcmlkaWVtID8gMTIgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm1pY3Jvc2Vjb25kID09PSB1bmRlZmluZWQgJiYgdGhpcy5taWxsaXNlY29uZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSAxMDAwICogdGhpcy5taWxsaXNlY29uZDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmlzb1llYXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzb1dlZWtPZlllYXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCB8fCB0aGlzLmRheU9mTW9udGggPT09IHVuZGVmaW5lZClcbiAgICAgICAgKXtcbiAgICAgICAgICAgIGdldERhdGVGcm9tSVNPV2Vla0RhdGUodGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmlzb1llYXIsIHRoaXMuaXNvV2Vla09mWWVhciwgdGhpcy5kYXlPZldlZWsgfHwgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kYXlPZlllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy55ZWFyICE9PSB1bmRlZmluZWQgPyB0aGlzLnllYXIgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBpZih0aGlzLm1vbnRoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubW9udGggPSBnZXRNb250aEZyb21EYXlPZlllYXIoeWVhciwgdGhpcy5kYXlPZlllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5kYXlPZk1vbnRoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHllYXIsIHRoaXMuZGF5T2ZZZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMueWVhciAhPT0gdW5kZWZpbmVkID8gdGhpcy55ZWFyIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21TdW5kYXlXZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIsIHRoaXMud2Vla09mWWVhckZyb21TdW5kYXksIHRoaXMuZGF5T2ZXZWVrIHx8IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMud2Vla09mWWVhckZyb21Nb25kYXkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCB8fCB0aGlzLmRheU9mTW9udGggPT09IHVuZGVmaW5lZClcbiAgICAgICAgKXtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCA/IHRoaXMueWVhciA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGdldERhdGVGcm9tTW9uZGF5V2Vla0RhdGUodGhpcyxcbiAgICAgICAgICAgICAgICB5ZWFyLCB0aGlzLndlZWtPZlllYXJGcm9tTW9uZGF5LCB0aGlzLmRheU9mV2VlayB8fCAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMueWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIodGhpcy55ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm1vbnRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BpbmVhcHBsZW1hY2hpbmUvc3RydGltZS1qcy9pc3N1ZXMvNVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjY2ODEzMTMvamF2YXNjcmlwdC1zZXR1dGNtb250aC1kb2VzLW5vdC13b3JrLWZvci1ub3ZlbWJlclxuICAgICAgICAgICAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgICAgICAgICAgIGRhdGUuc2V0VVRDTW9udGgodGhpcy5tb250aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZGF5T2ZNb250aCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGRhdGUuc2V0VVRDRGF0ZSh0aGlzLmRheU9mTW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSk7XG4gICAgICAgIGlmKG9mZnNldC50b3RhbE1pbnV0ZXMpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gKHRoaXMuaG91ciB8fCAwKSAtIG9mZnNldC5ob3VyO1xuICAgICAgICAgICAgdGhpcy5taW51dGUgPSAodGhpcy5taW51dGUgfHwgMCkgLSBvZmZzZXQubWludXRlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModGhpcy5ob3VyIHx8IDApO1xuICAgICAgICBkYXRlLnNldFVUQ01pbnV0ZXModGhpcy5taW51dGUgfHwgMCk7XG4gICAgICAgIGRhdGUuc2V0VVRDU2Vjb25kcyh0aGlzLnNlY29uZCB8fCAwKTtcbiAgICAgICAgZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModGhpcy5taWNyb3NlY29uZCA/IHRoaXMubWljcm9zZWNvbmQgLyAxMDAwIDogMCk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICBjb3B5KCl7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBUaW1lc3RhbXBQYXJzZXIodGhpcy5zdHJpbmcsIHRoaXMuZm9ybWF0LCB0aGlzLnRva2Vucyk7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMpe1xuICAgICAgICAgICAgcGFyc2VyW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlcjtcbiAgICB9XG4gICAgZm9yayhsZW5ndGgsIHN0YXJ0VG9rZW5JbmRleCl7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IHRoaXMuY29weSgpO1xuICAgICAgICBwYXJzZXIuZm9ya0xlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHBhcnNlci5wYXJzZShzdGFydFRva2VuSW5kZXgpO1xuICAgIH1cbiAgICBwYXJzZShzdGFydFRva2VuSW5kZXgpe1xuICAgICAgICBmb3IobGV0IGkgPSBzdGFydFRva2VuSW5kZXggfHwgMDsgaSA8IHRoaXMudG9rZW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgaWYodGhpcy5pbmRleCA+PSB0aGlzLnN0cmluZy5sZW5ndGgpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgIFwiVGltZXN0YW1wIGlzIHRvbyBzaG9ydCB0byBtYXRjaCB0aGUgd2hvbGUgZm9ybWF0LlwiLCB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYodG9rZW4gaW5zdGFuY2VvZiBEaXJlY3RpdmUuU3RyaW5nVG9rZW4pe1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VTdHJpbmdUb2tlbih0b2tlbi5zdHJpbmcpO1xuICAgICAgICAgICAgfWVsc2UgaWYodG9rZW4uaGFzUGFyc2VGdW5jdGlvbigpKXtcbiAgICAgICAgICAgICAgICB0b2tlbi5wYXJzZSh0aGlzKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRva2VuLmhhc1N0b3JlRnVuY3Rpb24oKSAmJiAhdG9rZW4udGV4dCl7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMudG9rZW5zWzEgKyBpXTtcbiAgICAgICAgICAgICAgICBpZigobmV4dCBpbnN0YW5jZW9mIERpcmVjdGl2ZS5TdHJpbmdUb2tlbiAmJiBpc0RpZ2l0KG5leHQuc3RyaW5nWzBdKSkgfHwgKChcbiAgICAgICAgICAgICAgICAgICAgbmV4dCBpbnN0YW5jZW9mIERpcmVjdGl2ZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlLlRva2VuXG4gICAgICAgICAgICAgICAgKSAmJiAhbmV4dC50ZXh0KSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VBbWJpZ3VvdXNOdW1iZXIodG9rZW4sIGkpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLnN0b3JlKHRoaXMsIHRoaXMucGFyc2VOdW1iZXIodG9rZW4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIkludmFsaWQgZGlyZWN0aXZlLlwiLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYoMSArIHRoaXMuaW5kZXggPCB0aGlzLnN0cmluZy5sZW5ndGgpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgYFRpbWVzdGFtcCBpcyB0b28gbG9uZyBmb3IgdGhlIGdpdmVuIGZvcm1hdC4gVGV4dCByZW1haW5pbmc6IFwiJHt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4KX1cIi5gLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwYXJzZVN0cmluZ1Rva2VuKHRva2VuKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdICE9PSB0b2tlbltpXSl7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYFN0cmluZyBsaXRlcmFsIFwiJHt0b2tlbn1cIiBub3QgbWF0Y2hlZC5gLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJzZUFtYmlndW91c051bWJlcih0b2tlbiwgdG9rZW5JbmRleCl7XG4gICAgICAgIGlmKHRoaXMuZm9ya0xlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBjb25zdCBsaWtlbHlMZW5ndGggPSB0b2tlbi5nZXRMaWtlbHlMZW5ndGgoKTtcbiAgICAgICAgICAgIGlmKGxpa2VseUxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JrKGxpa2VseUxlbmd0aCwgdG9rZW5JbmRleCk7XG4gICAgICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIShlcnJvciBpbnN0YW5jZW9mIFRpbWVzdGFtcFBhcnNlRXJyb3IpKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbGFzdFdob2xlRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgdGhpcy5zdHJpbmcubGVuZ3RoIC0gdGhpcy5pbmRleDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihpID09PSB0b2tlbi5saWtlbHlMZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yayhpLCB0b2tlbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZighKGVycm9yIGluc3RhbmNlb2YgVGltZXN0YW1wUGFyc2VFcnJvcikpIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvci5tZXNzYWdlID0gXCJUaW1lc3RhbXAgaXMgdG9vIHNob3J0IHRvIG1hdGNoIHRoZSB3aG9sZSBmb3JtYXQuXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFdob2xlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxhc3RXaG9sZUVycm9yKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBsYXN0V2hvbGVFcnJvcjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGFtYmlndW91cyBudW1iZXIuXCIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGFyc2VOdW1iZXIodG9rZW4sIHRoaXMuZm9ya0xlbmd0aCk7XG4gICAgICAgICAgICB0b2tlbi5zdG9yZSh0aGlzLCBudW1iZXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JrTGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJzZU51bWJlcihkaXJlY3RpdmUsIGxlbmd0aExpbWl0ID0gSW5maW5pdHkpe1xuICAgICAgICBjb25zdCBuZWdhdGl2ZSA9IHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdID09PSBcIi1cIjtcbiAgICAgICAgaWYobmVnYXRpdmUgJiYgIWRpcmVjdGl2ZS5nZXRDYW5CZU5lZ2F0aXZlKCkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXCJOdW1iZXIgY2Fubm90IGJlIG5lZ2F0aXZlLlwiLCB0aGlzKTtcbiAgICAgICAgfWVsc2UgaWYobmVnYXRpdmUpe1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgd2hpbGUodGhpcy5pbmRleCA8IHRoaXMuc3RyaW5nLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gPT09IFwiIFwiXG4gICAgICAgICl7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUodGhpcy5pbmRleCA8IHRoaXMuc3RyaW5nLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5pbmRleCAtIHN0YXJ0IDwgbGVuZ3RoTGltaXQgJiYgaXNEaWdpdCh0aGlzLnN0cmluZ1t0aGlzLmluZGV4XSlcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9ICt0aGlzLnN0cmluZy5zbGljZShzdGFydCwgdGhpcy5pbmRleCkudHJpbSgpO1xuICAgICAgICBpZighTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgbnVtYmVyLlwiLCB0aGlzKTtcbiAgICAgICAgfWVsc2UgaWYoIWRpcmVjdGl2ZS5udW1iZXJJbkJvdW5kcyh2YWx1ZSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYE51bWJlciBbJHt2YWx1ZX1dIGlzIG91dCBvZiBib3VuZHMgJHtkaXJlY3RpdmUuZ2V0Qm91bmRzU3RyaW5nKCl9LmAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5lZ2F0aXZlID8gLXZhbHVlIDogdmFsdWU7XG4gICAgICAgIGlmKGRpcmVjdGl2ZS5pc09yZGluYWwoKSl7XG4gICAgICAgICAgICBjb25zdCBvcmRpbmFsID0gdGhpcy5vcmRpbmFsVHJhbnNmb3JtKHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IG9yZGluYWwubGVuZ3RoIC0gKHRoaXMuaW5kZXggLSBzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcGFyc2VNb250aE5hbWUoKXtcbiAgICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLnNob3J0TW9udGhOYW1lcy5zbGljZSgpO1xuICAgICAgICBuYW1lcy5wdXNoKC4uLnRoaXMubG9uZ01vbnRoTmFtZXMpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyc2VJbmRleEluTGlzdChuYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgbW9udGggbmFtZS5cIiwgdGhpc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5kZXggJSAxMjtcbiAgICB9XG4gICAgcGFyc2VXZWVrZGF5TmFtZSgpe1xuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc2hvcnRXZWVrZGF5TmFtZXMuc2xpY2UoKTtcbiAgICAgICAgbmFtZXMucHVzaCguLi50aGlzLmxvbmdXZWVrZGF5TmFtZXMpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyc2VJbmRleEluTGlzdChuYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2Ugd2Vla2RheSBuYW1lLlwiLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbmRleCAlIDc7XG4gICAgfVxuICAgIHBhcnNlTWVyaWRpZW1OYW1lKCl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KHRoaXMubWVyaWRpZW1OYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgQU0vUE0uXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgMjtcbiAgICB9XG4gICAgcGFyc2VFcmFOYW1lKCl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KHRoaXMuZXJhTmFtZXMpO1xuICAgICAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgICAgIFwiRmFpbGVkIHRvIHBhcnNlIGVyYSBuYW1lLlwiLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbmRleCAlIDI7XG4gICAgfVxuICAgIHBhcnNlSW5kZXhJbkxpc3QobGlzdCl7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlID0gbGlzdC5zbGljZSgpO1xuICAgICAgICBsZXQgcG9zc2libGVDb3VudCA9IHBvc3NpYmxlLmxlbmd0aDtcbiAgICAgICAgbGV0IG1hdGNoSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBtYXRjaExlbmd0aCA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IHBvc3NpYmxlQ291bnQgJiYgdGhpcy5pbmRleCArIGkgPCB0aGlzLnN0cmluZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBjaCA9IHRoaXMuc3RyaW5nW3RoaXMuaW5kZXggKyBpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHBvc3NpYmxlLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcG9zc2libGVbal07XG4gICAgICAgICAgICAgICAgaWYoIWl0ZW0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmKGkgPj0gaXRlbS5sZW5ndGggfHwgaXRlbVtpXS50b0xvd2VyQ2FzZSgpICE9PSBjaCl7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlW2pdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDb3VudC0tO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKDEgKyBpID09PSBpdGVtLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICBtYXRjaExlbmd0aCA9IDEgKyBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihtYXRjaEluZGV4ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IG1hdGNoTGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGltZXpvbmVOYW1lTGlzdCgpe1xuICAgICAgICBpZighdGhpcy50aW1lem9uZU5hbWVMaXN0KXtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVOYW1lTGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy50aW1lem9uZU5hbWVzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWV6b25lTmFtZUxpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWV6b25lTmFtZUxpc3Q7XG4gICAgfVxuICAgIHBhcnNlVGltZXpvbmVPZmZzZXQobW9kaWZpZXIpe1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLnN0cmluZ1t0aGlzLmluZGV4XTtcbiAgICAgICAgY29uc3QgaG91cnMgPSArdGhpcy5zdHJpbmcuc2xpY2UodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyAzKTtcbiAgICAgICAgbGV0IG1pbnV0ZXM7XG4gICAgICAgIGlmKHRoaXMuc3RyaW5nW3RoaXMuaW5kZXggKyAzXSA9PT0gXCI6XCIpe1xuICAgICAgICAgICAgbWludXRlcyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgNCwgdGhpcy5pbmRleCArIDYpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSA2O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSArdGhpcy5zdHJpbmcuc2xpY2UodGhpcy5pbmRleCArIDMsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNTtcbiAgICAgICAgfVxuICAgICAgICBpZighTnVtYmVyLmlzSW50ZWdlcihob3VycykgfHwgIU51bWJlci5pc0ludGVnZXIobWludXRlcykpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSB0aW1lem9uZSBvZmZzZXQgZnJvbSBzdHJpbmcgYCArXG4gICAgICAgICAgICAgICAgYFwiJHt0aGlzLnN0cmluZy5zbGljZShzdGFydCwgdGhpcy5pbmRleCl9XCIuYCwgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvZmZzZXQgPSBtaW51dGVzICsgNjAgKiBob3VycztcbiAgICAgICAgaWYoc2lnbiA9PT0gXCIrXCIgfHwgc2lnbiA9PT0gXCLCsVwiKSByZXR1cm4gK29mZnNldDtcbiAgICAgICAgZWxzZSBpZihzaWduID09PSBcIi1cIikgcmV0dXJuIC1vZmZzZXQ7XG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYFVua25vd24gdGltZXpvbmUgb2Zmc2V0IHNpZ24gXCIke3NpZ259XCIuYCwgdGhpcyk7XG4gICAgfVxufVxuXG5UaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdFN0cmluZyhmb3JtYXQpe1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCBkaXJlY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgbW9kaWZpZXIgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgZm9ybWF0U3RyaW5nID0gU3RyaW5nKGZvcm1hdCk7XG4gICAgaWYoIWZvcm1hdFN0cmluZyl7XG4gICAgICAgIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKGBFbXB0eSBmb3JtYXQgc3RyaW5nLmAsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0U3RyaW5nXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDaGFyYWN0ZXIoY2gpe1xuICAgICAgICBpZih0b2tlbnMubGVuZ3RoICYmICh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgRGlyZWN0aXZlLlN0cmluZ1Rva2VuKSl7XG4gICAgICAgICAgICBpZihpc0RpZ2l0KGNoKSA9PT0gaXNEaWdpdCh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdLnN0cmluZ1swXSkpe1xuICAgICAgICAgICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uYWRkQ2hhcmFjdGVyKGNoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5ldyBEaXJlY3RpdmUuU3RyaW5nVG9rZW4oY2gpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0b2tlbnMucHVzaChuZXcgRGlyZWN0aXZlLlN0cmluZ1Rva2VuKGNoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBjaCBvZiBmb3JtYXRTdHJpbmcpe1xuICAgICAgICBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwiJVwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIiVcIik7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aXZlICYmIGNoID09PSBcIm5cIil7XG4gICAgICAgICAgICBhZGRDaGFyYWN0ZXIoXCJcXG5cIik7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aXZlICYmIGNoID09PSBcInRcIil7XG4gICAgICAgICAgICBhZGRDaGFyYWN0ZXIoXCJcXHRcIik7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aXZlICYmICFtb2RpZmllciAmJiAoXG4gICAgICAgICAgICBjaCA9PT0gXCItXCIgfHwgY2ggPT09IFwiX1wiIHx8IGNoID09PSBcIl5cIiB8fCBjaCA9PT0gXCI6XCJcbiAgICAgICAgKSl7XG4gICAgICAgICAgICBtb2RpZmllciArPSBjaDtcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aXZlKXtcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IERpcmVjdGl2ZS5nZXRCeU5hbWUoY2gpO1xuICAgICAgICAgICAgaWYoIWRpcikgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYFVua25vd24gZGlyZWN0aXZlIFwiJSR7bW9kaWZpZXJ9JHtjaH1cIi5gLCB7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSBpZihkaXIucmV3cml0ZSkgdG9rZW5zLnB1c2goXG4gICAgICAgICAgICAgICAgLi4uZGlyLmdldFJld3JpdGVQYXJzZWQoVGltZXN0YW1wUGFyc2VyLnBhcnNlRm9ybWF0U3RyaW5nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVsc2UgdG9rZW5zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IERpcmVjdGl2ZS5Ub2tlbihtb2RpZmllciwgZGlyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihjaCA9PT0gXCIlXCIpe1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIlwiO1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhZGRDaGFyYWN0ZXIoY2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGRpcmVjdGl2ZSkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgIFwiRm91bmQgdW50ZXJtaW5hdGVkIGRpcmVjdGl2ZSBhdCB0aGUgZW5kIG9mIHRoZSBmb3JtYXQgc3RyaW5nLlwiLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFN0cmluZ1xuICAgICAgICB9XG4gICAgKTtcbiAgICBpZih0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uc3RyaW5nID09PSBcIlpcIil7XG4gICAgICAgIHRva2Vucy56dWx1VGltZXpvbmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpe1xuICAgIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cblxuXG5jb25zdCBtb250aExlbmd0aHMgPSB7XG4gICAgY29tbW9uOiBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG4gICAgbGVhcDogWzMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxuICAgIGZvclllYXI6IGZ1bmN0aW9uKHllYXIpe1xuICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IG1vbnRoTGVuZ3Rocy5sZWFwIDogbW9udGhMZW5ndGhzLmNvbW1vbjtcbiAgICB9LFxufTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3ODk5Mi80MDk5MDIyXG5mdW5jdGlvbiBnZXRGaXJzdFdlZWtkYXlJblllYXIoeWVhcil7XG4gICAgY29uc3QgeSA9IHllYXIgLSAxO1xuICAgIHJldHVybiAoeWVhciAqIDM2NSArXG4gICAgICAgIE1hdGguZmxvb3IoeSAvIDQpIC0gTWF0aC5mbG9vcih5IC8gMTAwKSArIE1hdGguZmxvb3IoeSAvIDQwMClcbiAgICApICUgNztcbn1cblxuY29uc3QgZGVmYXVsdFRpbWV6b25lTmFtZXMgPSB7XG4gICAgXCJBQ0RUXCI6ICsxMC41LFxuICAgIFwiQUNTVFwiOiArOS41LFxuICAgIFwiQUNUXCI6IC01LFxuICAgIFwiQUNXU1RcIjogKzguNzUsXG4gICAgXCJBRFRcIjogLTMsXG4gICAgXCJBRURUXCI6ICsxMSxcbiAgICBcIkFFU1RcIjogKzEwLFxuICAgIFwiQUZUXCI6ICs0LjUsXG4gICAgXCJBS0RUXCI6IC04LFxuICAgIFwiQUtTVFwiOiAtOSxcbiAgICBcIkFNU1RcIjogLTMsXG4gICAgXCJBTVRcIjogLTQsXG4gICAgXCJBTVRcIjogKzQsXG4gICAgXCJBUlRcIjogLTMsXG4gICAgXCJBU1RcIjogKzMsXG4gICAgXCJBU1RcIjogLTQsXG4gICAgXCJBV1NUXCI6ICs4LFxuICAgIFwiQVpPU1RcIjogMCxcbiAgICBcIkFaT1RcIjogLTEsXG4gICAgXCJBWlRcIjogKzQsXG4gICAgXCJCRFRcIjogKzgsXG4gICAgXCJCSU9UXCI6ICs2LFxuICAgIFwiQklUXCI6IC0xMixcbiAgICBcIkJPVFwiOiAtNCxcbiAgICBcIkJSU1RcIjogLTIsXG4gICAgXCJCUlRcIjogLTMsXG4gICAgXCJCU1RcIjogKzYsXG4gICAgXCJCU1RcIjogKzExLFxuICAgIFwiQlNUXCI6ICsxLFxuICAgIFwiQlRUXCI6ICs2LFxuICAgIFwiQ0FUXCI6ICsyLFxuICAgIFwiQ0NUXCI6ICs2LjUsXG4gICAgXCJDRFRcIjogLTUsXG4gICAgXCJDRFRcIjogLTQsXG4gICAgXCJDRVNUXCI6ICsyLFxuICAgIFwiQ0VUXCI6ICsxLFxuICAgIFwiQ0hBRFRcIjogKzEzLjc1LFxuICAgIFwiQ0hBU1RcIjogKzEyLjc1LFxuICAgIFwiQ0hPVFwiOiArOCxcbiAgICBcIkNIT1NUXCI6ICs5LFxuICAgIFwiQ0hTVFwiOiArMTAsXG4gICAgXCJDSFVUXCI6ICsxMCxcbiAgICBcIkNJU1RcIjogLTgsXG4gICAgXCJDSVRcIjogKzgsXG4gICAgXCJDS1RcIjogLTEwLFxuICAgIFwiQ0xTVFwiOiAtMyxcbiAgICBcIkNMVFwiOiAtNCxcbiAgICBcIkNPU1RcIjogLTQsXG4gICAgXCJDT1RcIjogLTUsXG4gICAgXCJDU1RcIjogLTYsXG4gICAgXCJDU1RcIjogKzgsXG4gICAgXCJDU1RcIjogLTUsXG4gICAgXCJDVFwiOiArOCxcbiAgICBcIkNWVFwiOiAtMSxcbiAgICBcIkNXU1RcIjogKzguNzUsXG4gICAgXCJDWFRcIjogKzcsXG4gICAgXCJEQVZUXCI6ICs3LFxuICAgIFwiRERVVFwiOiArMTAsXG4gICAgXCJERlRcIjogKzEsXG4gICAgXCJFQVNTVFwiOiAtNSxcbiAgICBcIkVBU1RcIjogLTYsXG4gICAgXCJFQVRcIjogKzMsXG4gICAgXCJFQ1RcIjogLTQsXG4gICAgXCJFQ1RcIjogLTUsXG4gICAgXCJFRFRcIjogLTQsXG4gICAgXCJFRVNUXCI6ICszLFxuICAgIFwiRUVUXCI6ICsyLFxuICAgIFwiRUdTVFwiOiAwLFxuICAgIFwiRUdUXCI6IC0xLFxuICAgIFwiRUlUXCI6ICs5LFxuICAgIFwiRVNUXCI6IC01LFxuICAgIFwiRkVUXCI6ICszLFxuICAgIFwiRkpUXCI6ICsxMixcbiAgICBcIkZLU1RcIjogLTMsXG4gICAgXCJGS1RcIjogLTQsXG4gICAgXCJGTlRcIjogLTIsXG4gICAgXCJHQUxUXCI6IC02LFxuICAgIFwiR0FNVFwiOiAtOSxcbiAgICBcIkdFVFwiOiArNCxcbiAgICBcIkdGVFwiOiAtMyxcbiAgICBcIkdJTFRcIjogKzEyLFxuICAgIFwiR0lUXCI6IC05LFxuICAgIFwiR01UXCI6IDAsXG4gICAgXCJHU1RcIjogLTIsXG4gICAgXCJHU1RcIjogKzQsXG4gICAgXCJHWVRcIjogLTQsXG4gICAgXCJIRFRcIjogLTksXG4gICAgXCJIQUVDXCI6ICsyLFxuICAgIFwiSFNUXCI6IC0xMCxcbiAgICBcIkhLVFwiOiArOCxcbiAgICBcIkhNVFwiOiArNSxcbiAgICBcIkhPVlNUXCI6ICs4LFxuICAgIFwiSE9WVFwiOiArNyxcbiAgICBcIklDVFwiOiArNyxcbiAgICBcIklETFdcIjogLTEyLFxuICAgIFwiSURUXCI6ICszLFxuICAgIFwiSU9UXCI6ICszLFxuICAgIFwiSVJEVFwiOiArNC41LFxuICAgIFwiSVJLVFwiOiArOCxcbiAgICBcIklSU1RcIjogKzMuNSxcbiAgICBcIklTVFwiOiArNS41LFxuICAgIFwiSVNUXCI6ICsxLFxuICAgIFwiSVNUXCI6ICsyLFxuICAgIFwiSlNUXCI6ICs5LFxuICAgIFwiS0dUXCI6ICs2LFxuICAgIFwiS09TVFwiOiArMTEsXG4gICAgXCJLUkFUXCI6ICs3LFxuICAgIFwiS1NUXCI6ICs5LFxuICAgIFwiTEhTVFwiOiArMTAuNSxcbiAgICBcIkxIU1RcIjogKzExLFxuICAgIFwiTElOVFwiOiArMTQsXG4gICAgXCJNQUdUXCI6ICsxMixcbiAgICBcIk1BUlRcIjogLTkuNSxcbiAgICBcIk1BV1RcIjogKzUsXG4gICAgXCJNRFRcIjogLTYsXG4gICAgXCJNRVRcIjogKzEsXG4gICAgXCJNRVNUXCI6ICsyLFxuICAgIFwiTUhUXCI6ICsxMixcbiAgICBcIk1JU1RcIjogKzExLFxuICAgIFwiTUlUXCI6IC05LjUsXG4gICAgXCJNTVRcIjogKzYuNSxcbiAgICBcIk1TS1wiOiArMyxcbiAgICBcIk1TVFwiOiArOCxcbiAgICBcIk1TVFwiOiAtNyxcbiAgICBcIk1VVFwiOiArNCxcbiAgICBcIk1WVFwiOiArNSxcbiAgICBcIk1ZVFwiOiArOCxcbiAgICBcIk5DVFwiOiArMTEsXG4gICAgXCJORFRcIjogLTIuNSxcbiAgICBcIk5GVFwiOiArMTEsXG4gICAgXCJOUFRcIjogKzUuNzUsXG4gICAgXCJOU1RcIjogLTMuNSxcbiAgICBcIk5UXCI6IC0zLjUsXG4gICAgXCJOVVRcIjogLTExLFxuICAgIFwiTlpEVFwiOiArMTMsXG4gICAgXCJOWlNUXCI6ICsxMixcbiAgICBcIk9NU1RcIjogKzYsXG4gICAgXCJPUkFUXCI6ICs1LFxuICAgIFwiUERUXCI6IC03LFxuICAgIFwiUEVUXCI6IC01LFxuICAgIFwiUEVUVFwiOiArMTIsXG4gICAgXCJQR1RcIjogKzEwLFxuICAgIFwiUEhPVFwiOiArMTMsXG4gICAgXCJQSFRcIjogKzgsXG4gICAgXCJQS1RcIjogKzUsXG4gICAgXCJQTURUXCI6IC0yLFxuICAgIFwiUE1TVFwiOiAtMyxcbiAgICBcIlBPTlRcIjogKzExLFxuICAgIFwiUFNUXCI6IC04LFxuICAgIFwiUFNUXCI6ICs4LFxuICAgIFwiUFlTVFwiOiAtMyxcbiAgICBcIlBZVFwiOiAtNCxcbiAgICBcIlJFVFwiOiArNCxcbiAgICBcIlJPVFRcIjogLTMsXG4gICAgXCJTQUtUXCI6ICsxMSxcbiAgICBcIlNBTVRcIjogKzQsXG4gICAgXCJTQVNUXCI6ICsyLFxuICAgIFwiU0JUXCI6ICsxMSxcbiAgICBcIlNDVFwiOiArNCxcbiAgICBcIlNEVFwiOiAtMTAsXG4gICAgXCJTR1RcIjogKzgsXG4gICAgXCJTTFNUXCI6ICs1LjUsXG4gICAgXCJTUkVUXCI6ICsxMSxcbiAgICBcIlNSVFwiOiAtMyxcbiAgICBcIlNTVFwiOiAtMTEsXG4gICAgXCJTU1RcIjogKzgsXG4gICAgXCJTWU9UXCI6ICszLFxuICAgIFwiVEFIVFwiOiAtMTAsXG4gICAgXCJUSEFcIjogKzcsXG4gICAgXCJURlRcIjogKzUsXG4gICAgXCJUSlRcIjogKzUsXG4gICAgXCJUS1RcIjogKzEzLFxuICAgIFwiVExUXCI6ICs5LFxuICAgIFwiVE1UXCI6ICs1LFxuICAgIFwiVFJUXCI6ICszLFxuICAgIFwiVE9UXCI6ICsxMyxcbiAgICBcIlRWVFwiOiArMTIsXG4gICAgXCJVTEFTVFwiOiArOSxcbiAgICBcIlVMQVRcIjogKzgsXG4gICAgXCJVU1pcIjogKzIsXG4gICAgXCJVVENcIjogMCxcbiAgICBcIlVZU1RcIjogLTIsXG4gICAgXCJVWVRcIjogLTMsXG4gICAgXCJVWlRcIjogKzUsXG4gICAgXCJWRVRcIjogLTQsXG4gICAgXCJWTEFUXCI6ICsxMCxcbiAgICBcIlZPTFRcIjogKzQsXG4gICAgXCJWT1NUXCI6ICs2LFxuICAgIFwiVlVUXCI6ICsxMSxcbiAgICBcIldBS1RcIjogKzEyLFxuICAgIFwiV0FTVFwiOiArMixcbiAgICBcIldBVFwiOiArMSxcbiAgICBcIldFU1RcIjogKzEsXG4gICAgXCJXRVRcIjogMCxcbiAgICBcIldJVFwiOiArNyxcbiAgICBcIldTVFwiOiArOCxcbiAgICBcIllBS1RcIjogKzksXG4gICAgXCJZRUtUXCI6ICs1LFxuICAgIFwiWlwiOiAwLFxufTtcblxuXG5pZih0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzdHJ0aW1lO1xufWVsc2UgaWYodHlwZW9mKHdpbmRvdykgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbmRvdy5zdHJ0aW1lID0gc3RydGltZTtcbn1cbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xyXG5cclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL29iamVjdC9pc09iamVjdCc7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vb2JqZWN0L3NlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IHRvVW5kZXJzY29yZSB9IGZyb20gJy4vc3RyaW5nL3RvVW5kZXJzY29yZSc7XHJcblxyXG5jb25zdCB7IHBhcnNlLCBzdHJpbmdpZnkgfSA9IEpTT047XHJcblxyXG4vLyBhamF4IHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IGFqYXggPSAoYXBpVXJsLCBzdWNjZXNzLCBlcnJvciwgcGFyYW1zLCBtZXRob2QgPSAnR0VUJykgPT4ge1xyXG4gIGNvbnN0IHhtbEh0dHAgICA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIGNvbnN0IHVybCAgICAgICA9IChtZXRob2QgPT09ICdHRVQnICYmIHBhcmFtcykgPyBgJHthcGlVcmx9PyR7KHNlcmlhbGl6ZShwYXJhbXMsIHRvVW5kZXJzY29yZSkpfWAgOiBhcGlVcmw7XHJcbiAgY29uc3QgaXNTdWNjZXNzID0gKHN0YXR1cykgPT4gKChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCkgfHwgc3RhdHVzID09PSAzMDQpO1xyXG5cclxuICB4bWxIdHRwLm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicpO1xyXG5cclxuICB4bWxIdHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZTtcclxuXHJcbiAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgIGlmIChpc1N1Y2Nlc3MoeG1sSHR0cC5zdGF0dXMpKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3BvbnNlID0gcGFyc2UoeG1sSHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSB4bWxIdHRwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IoeG1sSHR0cCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoaXNPYmplY3QocGFyYW1zKSAmJiBtZXRob2QgIT09ICdHRVQnKSB7XHJcbiAgICB4bWxIdHRwLnNlbmQoc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB4bWxIdHRwLnNlbmQoKTtcclxuICB9XHJcbn07XHJcbiIsImNvbnN0IHsgcHJvdG90eXBlOiB7IHRvU3RyaW5nIH0gfSA9IE9iamVjdDtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGEpID0+IHtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufTtcclxuIiwiLyogZ2xvYmFsIEludGwgKi9cclxuXHJcbmltcG9ydCB7IGdldFN5bWJvbEZyb21DdXJyZW5jeSB9IGZyb20gJ2N1cnJlbmN5LXN5bWJvbC1tYXAnO1xyXG5cclxuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XHJcbiAgcmV0dXJuICEhKHR5cGVvZiBJbnRsID09PSAnb2JqZWN0JyAmJiBJbnRsICYmIHR5cGVvZiBJbnRsLk51bWJlckZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9ICh2YWx1ZSwgbGFuZywgY3VycmVuY3ksIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDAsXHJcbiAgbWF4aW11bUZyYWN0aW9uRGlnaXRzID0gMykgPT4ge1xyXG4gIGlmICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpICYmIGN1cnJlbmN5KSB7XHJcbiAgICBjb25zdCBpc0RvbGxhciAgICAgPSAoKSA9PiBnZXRTeW1ib2xGcm9tQ3VycmVuY3koY3VycmVuY3kpID09PSAnJCc7XHJcbiAgICBjb25zdCBvcHRpb25zICAgICAgPSB7XHJcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICBjdXJyZW5jeSxcclxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBpc0RvbGxhciA/ICdzeW1ib2wnIDogJ2NvZGUnLFxyXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHMsXHJcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0c1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBudW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBzdHIgICAgICAgICAgPSBudW1iZXJGb3JtYXQuZm9ybWF0KHZhbHVlKTtcclxuXHJcbiAgICBpZiAoaXNEb2xsYXIgfHwgIWdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShjdXJyZW5jeSwgZ2V0U3ltYm9sRnJvbUN1cnJlbmN5KGN1cnJlbmN5KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWU7XHJcbn07XHJcbiIsIi8vIERhdGUgdXRpbHNcclxuY29uc3QgZGF5c0luTW9udGggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcbmNvbnN0IGlzTGVhcFllYXIgID0gKHllYXIpID0+ICgoeWVhciAlIDQgPT09IDApICYmICh5ZWFyICUgMTAwICE9PSAwKSkgfHwgKHllYXIgJSA0MDAgPT09IDApO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vbnRoTGVuZ3RoID0gKHllYXIsIG1vbnRoKSA9PiB7XHJcbiAgbGV0IGRheXMgPSBkYXlzSW5Nb250aFttb250aF07XHJcbiAgaWYgKG1vbnRoID09PSAxICYmIGlzTGVhcFllYXIoeWVhcikpIHtcclxuICAgIGRheXMgPSAyOTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXlzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW1vdmVDbGFzcyB9IGZyb20gJy4vcmVtb3ZlQ2xhc3MnO1xyXG5pbXBvcnQgeyBzZXRDbGFzc05hbWUgfSBmcm9tICcuL3NldENsYXNzTmFtZSc7XHJcbmltcG9ydCB7IGdldENsYXNzTmFtZSB9IGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbCwgLi4uY2xhc3NOYW1lcykgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBjbGFzc05hbWVzO1xyXG5cclxuICBpZiAodHlwZW9mIGVsLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIG5hbWUuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtb3ZlQ2xhc3MoZWwsIG5hbWUpO1xyXG4gICAgY29uc3QgY2xzID0gYCR7Z2V0Q2xhc3NOYW1lKGVsKX0gJHtuYW1lLmpvaW4oJyAnKX1gO1xyXG4gICAgc2V0Q2xhc3NOYW1lKGVsLCBjbHMpO1xyXG4gIH1cclxufTtcclxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcblxyXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgSFRNTEVsZW1lbnQgd2l0aCBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XHJcbiAqIEBwYXJhbSBhdHRycyB7T2JqZWN0fVxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lLCBhdHRycykgPT4ge1xyXG4gIGNvbnN0IHBhcmFtcyAgPSBhdHRycyB8fCB7fTtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuXHJcbiAga2V5cyhwYXJhbXMpLm1hcCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgcGFyYW1zW2ldKSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVzdHJveUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKSB7XHJcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBlbGVtZW50RnJvbVN0cmluZyA9IChzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyaW5nO1xyXG5cclxuICByZXR1cm4gZWxlbWVudC5jaGlsZHJlblswXTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbmRCeUNsYXNzTmFtZSA9IChjb250ZXh0LCBuYW1lKSA9PiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9YCk7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRDbGFzc05hbWUgPSAoZWwpID0+IHtcclxuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcclxuICAvLyBjb21wbGV0ZWx5IHNlcGFyYXRlbHkgU1ZHQW5pbWF0ZWRTdHJpbmcgYmFzZSBjbGFzc2VzXHJcbiAgaWYgKGVsLmNsYXNzTmFtZSBpbnN0YW5jZW9mIGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuU1ZHQW5pbWF0ZWRTdHJpbmcpIHtcclxuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcclxuICB9XHJcbiAgcmV0dXJuIGVsLmNsYXNzTmFtZTtcclxufTtcclxuIiwiaW1wb3J0IHsgdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyIH0gZnJvbSAnLi90cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHInO1xyXG5cclxuLyoqXHJcbiAqIEZpbmQgSFRNTEVsZW1lbnQgYXR0cmlidXRlLCBpbiB0aGUgZG9tLXRyZWUsIGJ1YmJsZXMgdXBcclxuICogQHBhcmFtIGVsIHtIVE1MRWxlbWVudH1cclxuICogQHBhcmFtIGF0dHJcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRQYXJlbnRBdHRyaWJ1dGUgPSAoZWwsIGF0dHIpID0+IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlbCwgYXR0cikudmFsdWU7XHJcbiIsImltcG9ydCB7IGdldENsYXNzTmFtZSB9IGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNDbGFzcyA9IChlbCwgbmFtZSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcclxuICB9XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKGVsKTtcclxuICByZXR1cm4gbmV3IFJlZ0V4cChgKF58ICkke25hbWV9KCB8JClgLCAnZ2knKS50ZXN0KGNsYXNzTmFtZSk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYWRkQ2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Rlc3Ryb3lFbGVtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50RnJvbVN0cmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmluZEJ5Q2xhc3NOYW1lJztcclxuZXhwb3J0ICogZnJvbSAnLi9nZXRDbGFzc05hbWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dldFBhcmVudEF0dHJpYnV0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaGFzQ2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lzSW5zaWRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW1vdmVDbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2V0Q2xhc3NOYW1lJztcclxuZXhwb3J0ICogZnJvbSAnLi90cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHInO1xyXG4iLCJpbXBvcnQgeyBpcyB9IGZyb20gJy4uL2lzJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBzb21lIEhUTUxFbGVtZW50IGlzIGluc2lkZSBhbm90aGVyIG9uZVxyXG4gKiBAcGFyYW0gY2hpbGQge0hUTUxFbGVtZW50fVxyXG4gKiBAcGFyYW0gcGFyZW50IHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbnNpZGUgPSAoY2hpbGQsIHBhcmVudCkgPT4ge1xyXG4gIGxldCBjdXJyZW50ID0gY2hpbGQ7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50ICE9PSBwYXJlbnQpIHtcclxuICAgIGlmICghaXMoY3VycmVudCkgfHwgY3VycmVudC50YWdOYW1lID09PSAnQk9EWScgfHwgY3VycmVudC50YWdOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldENsYXNzTmFtZSB9IGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcclxuaW1wb3J0IHsgc2V0Q2xhc3NOYW1lIH0gZnJvbSAnLi9zZXRDbGFzc05hbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsLCAuLi5jbGFzc05hbWVzKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XHJcblxyXG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgaWYgKGNscy50cmltKCkpIHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCByZWdleCAgICAgPSBuZXcgUmVnRXhwKGAoXnwgKSR7bmFtZS5qb2luKCd8Jyl9KCB8JClgLCAnZ2knKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcclxuICAgIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzZXRDbGFzc05hbWUgPSAoZWwsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpcyB9IGZyb20gJy4uL2lzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIgPSAoZWxlbWVudCwgYXR0cmlidXRlKSA9PiB7XHJcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQ7XHJcbiAgbGV0IHZhbHVlICA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgd2hpbGUgKCFpcyh2YWx1ZSkpIHtcclxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudCAmJiB0eXBlb2YgcGFyZW50LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudCA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWUsXHJcbiAgICBwYXJlbnRcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ldmVudHMgICAgICAgID0gdGhpcy5ldmVudHMgfHwge307XG4gICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBmbiguLi5hcmdzKSB7XG4gICAgICBzZWxmLm9mZihldmVudCwgZm4pO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB0aGlzLm9uKGV2ZW50LCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgbGV0IGxpc3RlbmVycztcblxuICAgIGlmICh0aGlzLmV2ZW50cyAmJiB0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgIGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcblxuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGZuLCBpKSA9PiB7XG4gICAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW1pdChldmVudCwgLi4uYXJncykge1xuICAgIGxldCBsaXN0ZW5lcnM7XG5cbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF07XG5cbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChmbikgPT4gZm4uYXBwbHkodGhpcywgYXJncykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSAoZikgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJztcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY3VycmVuY3knO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZnVuY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL21hdGgnO1xyXG5leHBvcnQgKiBmcm9tICcuL29iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vaXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FqYXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRlJztcclxuXHJcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vZW1pdHRlcic7XHJcbmV4cG9ydCB7IEVtaXR0ZXIgfTtcclxuIiwiaW1wb3J0IHsgaXNOYU5Qb2x5ZmlsbCB9IGZyb20gJy4vbWF0aC9pc05hTlBvbHlmaWxsJztcclxuXHJcbmV4cG9ydCBjb25zdCBpcyA9IChvKSA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvICE9PSAndW5kZWZpbmVkJyAmJiBvICE9PSBudWxsICYmICFpc05hTlBvbHlmaWxsKG8pO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2lzTmFOUG9seWZpbGwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lzTnVtZXJpYyc7XHJcbiIsImV4cG9ydCBjb25zdCBpc05hTlBvbHlmaWxsID0gKHZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKTtcclxufTtcclxuIiwiaW1wb3J0IHsgaXNOYU5Qb2x5ZmlsbCB9IGZyb20gJy4vaXNOYU5Qb2x5ZmlsbCc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9hcnJheS9pc0FycmF5JztcclxuXHJcbmV4cG9ydCBjb25zdCBpc051bWVyaWMgPSAobikgPT4ge1xyXG4gIHJldHVybiAhaXNBcnJheShuKSAmJiAhaXNOYU5Qb2x5ZmlsbChwYXJzZUludChuLCAxMCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB0cmF2ZXJzZU9iaiB9IGZyb20gJy4vdHJhdmVyc2VPYmonO1xyXG5pbXBvcnQgeyBkYXNoVG9DYXBpdGFsIH0gZnJvbSAnLi4vc3RyaW5nL2Rhc2hUb0NhcGl0YWwnO1xyXG5pbXBvcnQgeyB1bmRlcnNjb3JlVG9DYXBpdGFsIH0gZnJvbSAnLi4vc3RyaW5nL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVPYmogPSAob2JqZWN0KSA9PiB7XHJcbiAgb2JqZWN0ID0gdHJhdmVyc2VPYmoob2JqZWN0LCBkYXNoVG9DYXBpdGFsKTtcclxuICBvYmplY3QgPSB0cmF2ZXJzZU9iaihvYmplY3QsIHVuZGVyc2NvcmVUb0NhcGl0YWwpO1xyXG5cclxuICByZXR1cm4gb2JqZWN0O1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NhcGl0YWxpemVPYmonO1xyXG5leHBvcnQgKiBmcm9tICcuL2lzT2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9tZXJnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGljayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VyaWFsaXplJztcclxuZXhwb3J0ICogZnJvbSAnLi90cmF2ZXJzZU9iaic7XHJcbiIsImNvbnN0IHsgcHJvdG90eXBlOiB7IHRvU3RyaW5nIH0gfSA9IE9iamVjdDtcclxuXHJcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IChvKSA9PiB7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vaXNPYmplY3QnO1xyXG5cclxuY29uc3QgeyBrZXlzIH0gPSBPYmplY3Q7XHJcblxyXG4vKipcclxuICogTWVyZ2UgdHdvIG9iamVjdHNcclxuICogQHBhcmFtIHtPYmplY3R9IG9iajFcclxuICogQHBhcmFtIHtPYmplY3R9IG9iajJcclxuICogQHBhcmFtIHtCb29sZWFufSBpc0RlZXBcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9IChvYmoxLCBvYmoyLCBpc0RlZXApID0+IHtcclxuICBjb25zdCBvYmozID0ge307XHJcbiAga2V5cyhvYmoxKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajFbaV0pKSB7XHJcbiAgICAgIG9iajNbaV0gPSBtZXJnZShvYmoxW2ldLCB7fSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmozW2ldID0gb2JqMVtpXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAga2V5cyhvYmoyKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajJbaV0pKSB7XHJcbiAgICAgIG9iajNbaV0gPSBtZXJnZShvYmozW2ldIHx8IHt9LCBvYmoyW2ldLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iajNbaV0gPSBvYmoyW2ldO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvYmozO1xyXG59O1xyXG4iLCIvKipcclxuICogUGljayBwcm9wZXJ0aWVzIGZyb20gb2JqZWN0XHJcbiAqIGxldCBhID0geyBuYW1lOiBcIlJvbWFuXCIsIHBob25lOiAxMjMsIGNvdW50cnk6IFwiYW55XCIgfTtcclxuICogcGljayhhLCAnbmFtZScsICdjb3VudHJ5JylcclxuICogPT4geyBuYW1lOiBcIlJvbWFuXCIsIGNvdW50cnk6IFwiYW55XCIgfVxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIHtPYmplY3R9XHJcbiAqIEBwYXJhbSBhcmdzIHtTdHJpbmd9XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGljayA9IChvYmosIC4uLmFyZ3MpID0+IGFyZ3MucmVkdWNlKChpLCB0KSA9PiB7XHJcbiAgY29uc3QgcGlja2VkT2JqID0gaTtcclxuXHJcbiAgcGlja2VkT2JqW3RdID0gb2JqW3RdO1xyXG5cclxuICByZXR1cm4gcGlja2VkT2JqO1xyXG59LCB7fSk7XHJcbiIsImNvbnN0IHsga2V5cyB9ID0gT2JqZWN0O1xyXG5cclxuLy8gc2VyaWFsaXplIHF1ZXJ5IHBhcmFtcyB3aXRoIGFkZGl0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCBzZXJpYWxpemUgPSAob2JqLCB0cmFuc2Zvcm0pID0+IHtcclxuICBjb25zdCBjb21wb25lbnQgPSBrZXlzKG9iaikubWFwKChwKSA9PiBgJHt0cmFuc2Zvcm0oZW5jb2RlVVJJQ29tcG9uZW50KHApKX09JHtlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKX1gKTtcclxuICByZXR1cm4gY29tcG9uZW50LmpvaW4oJyYnKTtcclxufTtcclxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL2FycmF5L2lzQXJyYXknO1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vaXNPYmplY3QnO1xyXG5cclxuY29uc3QgeyBrZXlzIH0gPSBPYmplY3Q7XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2Ugb2JqZWN0IG93biBwcm9wZXJ0aWVzIGFuZCBhcHBseSB0cmFuc2Zvcm0gZnVuY3Rpb24gb24ga2V5cyBvciB2YWx1ZXNcclxuICogbGV0IGEgPSB7IGxhc3ROYW1lOiBcIlJvbWFuXCIsIGZpcnN0TmFtZTogXCJLaHVkeWFrb3ZcIiB9XHJcbiAqIHRyYXZlcnNlT2JqKGEsIHRvVW5kZXJzY29yZSlcclxuICogPT4geyBsYXN0X25hbWU6IFwiUm9tYW5cIiwgZmlyc3RfbmFtZTogXCJLaHVkeWFrb3ZcIiB9XHJcbiAqXHJcbiAqIEBwYXJhbSBvYmoge09iamVjdH1cclxuICogQHBhcmFtIGZuS2V5IHtGdW5jdGlvbiB8IEJvb2xlYW59XHJcbiAqIEBwYXJhbSBmblZhbHVlIHtGdW5jdGlvbiB8IEJvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdHJhdmVyc2VPYmogPSAob2JqLCBmbktleSA9IGZhbHNlLCBmblZhbHVlID0gZmFsc2UpID0+IHtcclxuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ga2V5cyhvYmopLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4ge1xyXG4gICAgbGV0IG5leHRQcm9wZXJ0eSA9IG9ialtuZXh0XTtcclxuICAgIGNvbnN0IG8gICAgICAgICAgPSBjdXJyO1xyXG5cclxuICAgIGlmIChpc0FycmF5KG5leHRQcm9wZXJ0eSkpIHtcclxuICAgICAgbmV4dFByb3BlcnR5ID0gbmV4dFByb3BlcnR5Lm1hcCgoaSkgPT4gdHJhdmVyc2VPYmooaSwgZm5LZXksIGZuVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm5WYWx1ZSkge1xyXG4gICAgICBvW2ZuS2V5ID8gZm5LZXkobmV4dCkgOiBuZXh0XSA9IGlzT2JqZWN0KG5leHRQcm9wZXJ0eSlcclxuICAgICAgICA/IHRyYXZlcnNlT2JqKG5leHRQcm9wZXJ0eSwgZm5LZXksIGZuVmFsdWUpIDogZm5WYWx1ZShuZXh0UHJvcGVydHksIG5leHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb1tmbktleSA/IGZuS2V5KG5leHQpIDogbmV4dF0gPSBpc09iamVjdChuZXh0UHJvcGVydHkpXHJcbiAgICAgICAgPyB0cmF2ZXJzZU9iaihuZXh0UHJvcGVydHksIGZuS2V5KSA6IG5leHRQcm9wZXJ0eTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbztcclxuICB9LCB7fSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkYXNoVG9DYXBpdGFsID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoLy0oW2Etel0pL2lnLCAocywgaSkgPT4gaS50b1VwcGVyQ2FzZSgpKTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXNoVG9DYXBpdGFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9pc1N0cmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdG9VbmRlcnNjb3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi91bmRlcnNjb3JlVG9DYXBpdGFsJztcclxuIiwiZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKGYpID0+IHtcclxuICByZXR1cm4gdHlwZW9mIGYgPT09ICdzdHJpbmcnO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgdG9VbmRlcnNjb3JlID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKHMpID0+IGBfJHtzLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiIsImV4cG9ydCBjb25zdCB1bmRlcnNjb3JlVG9DYXBpdGFsID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL18oW2Etel0pL2lnLCAocywgaSkgPT4gaS50b1VwcGVyQ2FzZSgpKTtcclxuIiwiaW1wb3J0IHsgaXMgfSBmcm9tICcuL2lzJztcclxuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi9tYXRoL2lzTnVtZXJpYyc7XHJcblxyXG4vLyBWYWxpZGF0aW9uc1xyXG5leHBvcnQgY29uc3QgdmFsaWRhdGUgPSB7XHJcbiAgaXNCbGFuayhvKSB7XHJcbiAgICByZXR1cm4gaXMobyk7XHJcbiAgfSxcclxuICBpc051bWVyaWMobykge1xyXG4gICAgcmV0dXJuIGlzTnVtZXJpYyhvKTtcclxuICB9LFxyXG4gIGlzRW1haWwobykge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBpcyhvLm1hdGNoKC9eW15AXFxzXStAKFteQFxcc10rXFwuKStbXkBcXFddKyQvKSk7XHJcbiAgfSxcclxuICBpc0JvdW5kZWRCeShvLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvID49IG1pbiAmJiBvIDw9IG1heDtcclxuICB9XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuXFxyXFxuICAgIGxvYWRlclxcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19ib29raW5nc3luYy1zcGluIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYm9va2luZ3N5bmMtc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBjb250ZW50OiAnJzsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMC45NyclM0UlM0NwYXRoIGQ9J00zMiwxNS40OGExNi41MiwxNi41MiwwLDAsMS0xLjM3LDYuMjgsMTYuMzUsMTYuMzUsMCwwLDEtOSw4LjYzLDE1Ljg3LDE1Ljg3LDAsMCwxLTE3LjMtMy43OEExNS40MywxNS40MywwLDAsMSw0LjcyLDQuNzIsMTUsMTUsMCwwLDEsMTUuNDkuNTJhMTQuNzYsMTQuNzYsMCwwLDEsMTAuNCw0LjU2QTE0Ljc3LDE0Ljc3LDAsMCwxLDI5LDkuOWExNC40NSwxNC40NSwwLDAsMSwuODUsMy4zNWguMTNBMi4wNiwyLjA2LDAsMCwxLDMyLDE1LjMxYS45MS45MSwwLDAsMSwwLC4xN1pNMjguNzIsMTBhMTQuMjcsMTQuMjcsMCwwLDAtMy4yLTQuNTUsMTQsMTQsMCwwLDAtMTAtMy45QTEzLjcyLDEzLjcyLDAsMCwwLDMsMTAuM2ExMy40MywxMy40MywwLDAsMCwuMjQsMTAuMjcsMTMuMDUsMTMuMDUsMCwwLDAsMTIuMjgsNy44MiwxMi45MiwxMi45MiwwLDAsMCw0Ljg4LTEuMSwxMi42NSwxMi42NSwwLDAsMCw0LjA2LTIuODcsMTIuNDgsMTIuNDgsMCwwLDAsMi42Mi00LjE1LDEyLjI0LDEyLjI0LDAsMCwwLC44Mi00Ljc5aDBhLjkxLjkxLDAsMCwxLDAtLjE3LDIuMDcsMi4wNywwLDAsMSwxLjg0LTIuMDUsMTQuMjcsMTQuMjcsMCwwLDAtMS0zLjI2WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMC41MSknLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAtMTBweCAwIDAgLTEwcHg7XFxuICBjb250ZW50OiAnJztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19ib29raW5nc3luYy1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbjogQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYm9va2luZ3N5bmMtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyOjpiZWZvcmUsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhcjo6YWZ0ZXIge1xcbiAgei1pbmRleDogMTAwMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhci5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19sb2FkaW5nOjpiZWZvcmUsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhci5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19sb2FkaW5nOjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuXFxyXFxuICAgIGRyb3Bkb3duXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Ryb3BCYXNpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICB6LWluZGV4OiAxMDsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Ryb3BCYXNpYy5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X192aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhci5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kcm9wQmFzaWMgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuN2VtOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZHJvcEJhc2ljIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19mb3J3YXJkLFxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Ryb3BCYXNpYyAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYmFjayB7XFxuICAgIHRvcDogMWVtO1xcbiAgICBsZWZ0OiAxZW07IH1cXG4gIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhci5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kcm9wQmFzaWMgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvcndhcmQge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMWVtOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuXFxyXFxuICAgIGNvbG9yc1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250OiAxcmVtLzEuNCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjNlbTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19tb250aHNXcmFwcGVyIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMmVtOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX21DZWxsIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleDogMSAxIDI1JTtcXG4gICAgZmxleDogMSAxIDI1JTsgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XFxuICAgICAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19tQ2VsbCB7XFxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMSAxIDEwMCU7IH0gfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19tb250aCB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDAuMmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3RhYmxlSGVhZGVyLFxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19ib2R5IHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3RoIHtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiAjYWFhYWFhO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2VsbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMzBweDsgfVxcbiAgICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NlbGw6Zmlyc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7IH1cXG4gICAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jZWxsOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxcbiAgICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NlbGw6OmJlZm9yZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jZWxsOjphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogc2tldygtMzBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMzBkZWcpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICB6LWluZGV4OiAwOyB9XFxuICAgIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2VsbDo6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAtNTUlOyB9XFxuICAgIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2VsbDo6YWZ0ZXIge1xcbiAgICAgIGxlZnQ6IDU1JTsgfVxcbiAgICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NlbGwuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fdG9kYXkge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDsgfVxcbiAgICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NudDo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbi10b3A6IDEwMCU7IH1cXG4gIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDAuNjVlbTtcXG4gICAgcGFkZGluZzogMXB4IDNweDtcXG4gICAgY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC41KTtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gICAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbmZvID4gc3BhbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvY3VzLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2RpcmVjdCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0aW5nUmV2ZXJzZWQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGluZ0RpcmVjdCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYWN0aW9uc0VuYWJsZWQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuXFxyXFxuICAgIHNlbGVjdGlvbnMsIHN0YXJ0IGFuZCBlbmRzXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZFN0YXJ0OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1kaXNhYmxlZC1iZy1jb2xvciwgI2YwZjBmMCk7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWRpc2FibGVkLWJnLWNvbG9yLCAjZjBmMGYwKTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZDo6YmVmb3JlLCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkRW5kOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItZGlzYWJsZWQtYmctY29sb3IsICNmMGYwZjApOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkU3RhcnQsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhci5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkRW5kIHtcXG4gIGNvbG9yOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1kaXNhYmxlZC1jb2xvciwgI2JmYmZiZik7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkU3RhcnQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAjYjdjYWZiKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICNiN2NhZmIpOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkOjpiZWZvcmUsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRFbmQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgI2I3Y2FmYik7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkU3RhcnQsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWQsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRFbmQge1xcbiAgY29sb3I6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCAjMzczNzM3KTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZFN0YXJ0OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCAjZTNlM2UzKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCAjZTNlM2UzKTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkOjpiZWZvcmUsIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZDo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkRW5kOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgI2UzZTNlMyk7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRTdGFydCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkLCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRFbmQge1xcbiAgY29sb3I6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtY29sb3IsICNiMmIyYjIpOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2VsbDpub3QoLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkKTpub3QoLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQpOmhvdmVyOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgI2I3Y2FmYik7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZDpob3Zlcjo6YmVmb3JlLCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICNiN2NhZmIpOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQ6bm90KC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZFN0YXJ0KTpub3QoLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkRW5kKTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAjYjdjYWZiKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXJlY3QgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQ6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCAjZTNlM2UzKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXJlY3QgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlzYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZDpob3Zlcjo6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsICNlM2UzZTMpOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkOmhvdmVyOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1kaXNhYmxlZC1iZy1jb2xvciwgI2YwZjBmMCk7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NlbGw6bm90KC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZCk6bm90KC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkKTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAjYjdjYWZiKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19yZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3JldmVyc2VkIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZDpob3Zlcjo6YmVmb3JlLCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkOmhvdmVyOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgI2I3Y2FmYik7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkOm5vdCguQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRTdGFydCk6bm90KC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZEVuZCk6aG92ZXI6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAjYjdjYWZiKTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19yZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZDpob3Zlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgI2UzZTNlMyk7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlzYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3JldmVyc2VkIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkOmhvdmVyOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCAjZTNlM2UzKTsgfVxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3JldmVyc2VkIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2Rpc2FibGVkOmhvdmVyOjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItZGlzYWJsZWQtYmctY29sb3IsICNmMGYwZjApOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jZWxsOm5vdCguQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWQpOm5vdCguQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZCk6aG92ZXIgKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2hpZ2hsaWdodGVkLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkOmhvdmVyICoge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19oaWdobGlnaHRlZDpub3QoLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGVkU3RhcnQpOm5vdCguQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRFbmQpOmhvdmVyICoge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19pbnZhbGlkOmhvdmVyICoge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlzYWJsZWQ6aG92ZXIgKiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5cXHJcXG4gICAgYnV0dG9uc1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZm9yd2FyZCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2JhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgZmlsbDogIzQ0NDQ0NDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAyOyB9XFxuICAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvcndhcmQgc3ZnLFxcbiAgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19iYWNrIHN2ZyB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7IH1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvcndhcmQge1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiBhdXRvOyB9XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19mb3J3YXJkOmFjdGl2ZSxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvcndhcmQ6Zm9jdXMsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19iYWNrOmFjdGl2ZSxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2JhY2s6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZm9yd2FyZDpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2JhY2s6aG92ZXIge1xcbiAgZmlsbDogIzM4OTVkOTsgfVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZm9yd2FyZFtkaXNhYmxlZF0sXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19mb3J3YXJkW2Rpc2FibGVkXTpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2JhY2tbZGlzYWJsZWRdLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYmFja1tkaXNhYmxlZF06aG92ZXIge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZmlsbDogIzQ0NDQ0NDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9hZGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NhbGVuZGFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3ZnLXVyaS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9kcm9wLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7d0RD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QVJwQjtJQVlNLGNBQWM7SUFDZCxxRUFBbUYsRUFBQTs7QUFiekY7RUFtQk0scUVBQW1GLEVBQUE7O0FBbkJ6RjtFQXlCTSxpRUFBMkUsRUFBQTs7QUF6QmpGO0VBOEJJLGdCQUFnQixFQUFBO0VBOUJwQjtJQWlDTSxjQUFjO0lBQ2QsaUVBQTJFLEVBQUE7RUFsQ2pGO0lBc0NNLGNBQWM7SUFDZCxrRUFBNkUsRUFBQTs7QUFPbkY7RUFHTSxxRUFBbUYsRUFBQTs7QUFIekY7RUFRSSxnQkFBZ0IsRUFBQTtFQVJwQjtJQVlNLGNBQWM7SUFDZCxxRUFBbUYsRUFBQTs7QUFiekY7RUFtQk0scUVBQW1GLEVBQUE7O0FBbkJ6RjtFQXlCTSxpRUFBMkUsRUFBQTs7QUF6QmpGO0VBOEJJLGdCQUFnQixFQUFBO0VBOUJwQjtJQWlDTSxjQUFjO0lBQ2QsaUVBQTJFLEVBQUE7RUFsQ2pGO0lBc0NNLGNBQWM7SUFDZCxrRUFBNkUsRUFBQTs7QUFPbkY7RUFHTSxlQUFlLEVBQUE7O0FBSHJCO0VBU00sZUFBZSxFQUFBOztBQVRyQjtFQWVNLGVBQWUsRUFBQTs7QUFmckI7RUFxQk0sbUJBQW1CLEVBQUE7O0FBckJ6QjtFQTJCTSw4QkFBOEIsRUFBQTs7QUFLcEM7Ozs7d0RBeEV3RDtBQTZFeEQ7O0VBSUksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxhRXZaMkI7RUZ3WjNCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVUsRUFBQTtFQWJkOztJQWdCSSxlQUFlO0lBQ2YsY0FBYyxFQUFBOztBQWpCbEI7RUFzQkksUUFBUTtFQUNSLFVBQVUsRUFBQTs7QUF2QmQ7Ozs7RUE4QkksYUFBYSxFQUFBOztBQTlCakI7O0VBbUNJLGFFM1oyQixFQUFBOztBRndYL0I7Ozs7RUEwQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixhRTFiMkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5cXHJcXG4gICAgbG9hZGVyXFxyXFxuXFxyXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvb2tpbmdzeW5jLXNwaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm9va2luZ3N5bmMtc3BpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC43KTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRpY29uLXNwaW5uZXItc3ZnO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib29raW5nc3luYy1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gICAgYW5pbWF0aW9uOiBib29raW5nc3luYy1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6OmJlZm9yZSxcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmxvYWRpbmcge1xcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICdzdmctdXJpJztcXHJcXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcbkBpbXBvcnQgJ2xvYWRpbmcnO1xcclxcbkBpbXBvcnQgJ2Ryb3AnO1xcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblxcclxcbiAgICBjb2xvcnNcXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY2FsZW5kYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udDogMXJlbS8xLjQgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICRjYWxlbmRhci1iZy1jb2xvcjtcXHJcXG5cXHJcXG4gIC5jYXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjNlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb250aHNXcmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1DZWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcclxcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcclxcbiAgICAtbXMtZmxleDogMSAxIDI1JTtcXHJcXG4gICAgZmxleDogMSAxIDI1JTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xcclxcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxyXFxuICAgICAgLW1zLWZsZXg6IDEgMSAxMDAlO1xcclxcbiAgICAgIGZsZXg6IDEgMSAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9udGgge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMCAwLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFibGVIZWFkZXIsXFxyXFxuICAuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICBjb2xvcjogJHRoLWNvbG9yO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAkY2VsbC13aWR0aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNlbGwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBjb2xvcjogJGNlbGwtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAkY2VsbC13aWR0aDtcXHJcXG5cXHJcXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiBza2V3KC0zMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tldygtMzBkZWcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogLTU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnRvZGF5IHtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xcclxcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xcclxcbiAgICBjb2xvcjogJGluZm8tY29sb3I7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICA+IHNwYW4ge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXMsXFxyXFxuLnNlbGVjdGVkLFxcclxcbi5yZXZlcnNlZCxcXHJcXG4uZGlyZWN0LFxcclxcbi5zZWxlY3RpbmdSZXZlcnNlZCxcXHJcXG4uc2VsZWN0aW5nRGlyZWN0LFxcclxcbi5hY3Rpb25zRW5hYmxlZCxcXHJcXG4uaGlnaGxpZ2h0ZWQsXFxyXFxuLmludmFsaWQge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblxcclxcbiAgICBzZWxlY3Rpb25zLCBzdGFydCBhbmQgZW5kc1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8vIGNlbGxzIGRpc2FibGVkXFxyXFxuXFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gIC5kaXNhYmxlZFN0YXJ0IHtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWRpc2FibGVkLWJnLWNvbG9yLCAkZGlzYWJsZWQtYmctY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1kaXNhYmxlZC1iZy1jb2xvciwgJGRpc2FibGVkLWJnLWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc2FibGVkRW5kIHtcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1kaXNhYmxlZC1iZy1jb2xvciwgJGRpc2FibGVkLWJnLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi5kaXNhYmxlZFN0YXJ0LFxcclxcbiAgJi5kaXNhYmxlZCxcXHJcXG4gICYuZGlzYWJsZWRFbmQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItZGlzYWJsZWQtY29sb3IsICRkaXNhYmxlZC1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGNlbGxzIGhpZ2hsaWdodGVkXFxyXFxuXFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gIC5oaWdobGlnaHRlZCB7XFxyXFxuICAgICYuc2VsZWN0ZWRTdGFydCB7XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgJi5zZWxlY3RlZCB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICBcXHJcXG4gICAgICAmOjpiZWZvcmUsXFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmLnNlbGVjdGVkRW5kIHtcXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc2VsZWN0ZWRTdGFydCxcXHJcXG4gICAgJi5zZWxlY3RlZCxcXHJcXG4gICAgJi5zZWxlY3RlZEVuZCB7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCAkaGlnaGxpZ2h0ZWQtY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGNlbGxzIGludmFsaWRcXHJcXG5cXHJcXG4uY2FsZW5kYXIge1xcclxcbiAgLmludmFsaWQge1xcclxcbiAgICAmLnNlbGVjdGVkU3RhcnQge1xcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsICRpbnZhbGlkLWJnLWNvbG9yKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmLnNlbGVjdGVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCAkaW52YWxpZC1iZy1jb2xvcik7XFxyXFxuICBcXHJcXG4gICAgICAmOjpiZWZvcmUsXFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmLnNlbGVjdGVkRW5kIHtcXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgJGludmFsaWQtYmctY29sb3IpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnNlbGVjdGVkU3RhcnQsXFxyXFxuICAgICYuc2VsZWN0ZWQsXFxyXFxuICAgICYuc2VsZWN0ZWRFbmQge1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1pbnZhbGlkLWNvbG9yLCAkaW52YWxpZC1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gY2VsbCBob3ZlciBkaXJlY3RcXHJcXG5cXHJcXG4uZGlyZWN0IHtcXHJcXG4gIC5jZWxsOm5vdCguaGlnaGxpZ2h0ZWQpOm5vdCguaW52YWxpZCk6aG92ZXIge1xcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oaWdobGlnaHRlZC5zZWxlY3RlZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSxcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAkaGlnaGxpZ2h0ZWQtYmctY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlnaGxpZ2h0ZWQ6bm90KC5zZWxlY3RlZFN0YXJ0KTpub3QoLnNlbGVjdGVkRW5kKTpob3ZlciB7XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmludmFsaWQ6aG92ZXIge1xcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsICRpbnZhbGlkLWJnLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmludmFsaWQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsICRpbnZhbGlkLWJnLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItZGlzYWJsZWQtYmctY29sb3IsICRkaXNhYmxlZC1iZy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gY2VsbCBob3ZlciByZXZlcnNlZFxcclxcblxcclxcbi5yZXZlcnNlZCB7XFxyXFxuICAuY2VsbDpub3QoLmhpZ2hsaWdodGVkKTpub3QoLmludmFsaWQpOmhvdmVyIHtcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib29raW5nc3luYy1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgJGhpZ2hsaWdodGVkLWJnLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZ2hsaWdodGVkLnNlbGVjdGVkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsICRoaWdobGlnaHRlZC1iZy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oaWdobGlnaHRlZDpub3QoLnNlbGVjdGVkU3RhcnQpOm5vdCguc2VsZWN0ZWRFbmQpOmhvdmVyIHtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCAkaGlnaGxpZ2h0ZWQtYmctY29sb3IpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZhbGlkOmhvdmVyIHtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvb2tpbmdzeW5jLWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsICRpbnZhbGlkLWJnLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmludmFsaWQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgJGludmFsaWQtYmctY29sb3IpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9va2luZ3N5bmMtY2FsZW5kYXItZGlzYWJsZWQtYmctY29sb3IsICRkaXNhYmxlZC1iZy1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gY2VsbCBob3ZlciBjdXJzb3JcXHJcXG5cXHJcXG4uY2FsZW5kYXIge1xcclxcbiAgLmNlbGw6bm90KC5oaWdobGlnaHRlZCk6bm90KC5pbnZhbGlkKTpob3ZlciB7XFxyXFxuICAgICoge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZ2hsaWdodGVkLnNlbGVjdGVkOmhvdmVyIHtcXHJcXG4gICAgKiB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlnaGxpZ2h0ZWQ6bm90KC5zZWxlY3RlZFN0YXJ0KTpub3QoLnNlbGVjdGVkRW5kKTpob3ZlciB7XFxyXFxuICAgICoge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW52YWxpZDpob3ZlciB7XFxyXFxuICAgICoge1xcclxcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICAgICoge1xcclxcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5cXHJcXG4gICAgYnV0dG9uc1xcclxcblxcclxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5jYWxlbmRhciB7XFxyXFxuXFxyXFxuICAuZm9yd2FyZCxcXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIzcHg7XFxyXFxuICAgIGZpbGw6ICRidG4tZmlsbDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgIHN2ZyB7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3J3YXJkIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9yd2FyZDphY3RpdmUsXFxyXFxuICAuZm9yd2FyZDpmb2N1cyxcXHJcXG4gIC5iYWNrOmFjdGl2ZSxcXHJcXG4gIC5iYWNrOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3J3YXJkOmhvdmVyLFxcclxcbiAgLmJhY2s6aG92ZXIge1xcclxcbiAgICBmaWxsOiAkYnRuLWZpbGwtaG92ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9yd2FyZFtkaXNhYmxlZF0sXFxyXFxuICAuZm9yd2FyZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuICAuYmFja1tkaXNhYmxlZF0sXFxyXFxuICAuYmFja1tkaXNhYmxlZF06aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgZmlsbDogJGJ0bi1maWxsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8vLy9cXHJcXG4vLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGVhc2lseSB1c2UgYW4gU1ZHIGlubGluZSBpbiBDU1NcXHJcXG4vLy8gd2l0aG91dCBlbmNvZGluZyBpdCB0byBiYXNlNjQsIHNhdmluZyBieXRlcy5cXHJcXG4vLy8gSXQgYWxzbyBoZWxwcyB3aXRoIGJyb3dzZXIgc3VwcG9ydC5cXHJcXG4vLy8vXFxyXFxuXFxyXFxuLy8vIEEgc21hbGwgZnVuY3Rpb24gYWxsb3dpbmcgc2tpcHBpbmcgYmFzZTY0IGVuY29kaW5nXFxyXFxuLy8vIGFuZCBzaW1wbHkgcGFzdGluZyB0aGUgU1ZHIG1hcmt1cCByaWdodCBpbiB0aGUgQ1NTLlxcclxcbi8vLyBAYXV0aG9yIEpha29iIEVyaWtzZW5cXHJcXG4vLy8gQGxpbmsgaHR0cDovL2NvZGVwZW4uaW8vamFrb2ItZS9wZW4vZG9Nb01MXFxyXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkc3ZnIC0gU1ZHIGltYWdlIHRvIGVuY29kZVxcclxcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gRW5jb2RlZCBTVkcgZGF0YSB1cmlcXHJcXG5AZnVuY3Rpb24gc3ZnLXVyaSgkc3ZnKSB7XFxyXFxuICAgICRlbmNvZGVkOiAnJztcXHJcXG4gICAgJHNsaWNlOiAyMDAwO1xcclxcbiAgICAkaW5kZXg6IDA7XFxyXFxuICAgICRsb29wczogY2VpbChzdHItbGVuZ3RoKCRzdmcpIC8gJHNsaWNlKTtcXHJcXG5cXHJcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbG9vcHMge1xcclxcbiAgICAgICAgJGNodW5rOiBzdHItc2xpY2UoJHN2ZywgJGluZGV4LCAkaW5kZXggKyAkc2xpY2UgLSAxKTtcXHJcXG4gICAgICAgICRjaHVuazogc3RyLXJlcGxhY2UoJGNodW5rLCAnXFxcIicsIFxcXCInXFxcIik7XFxyXFxuICAgICAgICAkY2h1bms6IHN0ci1yZXBsYWNlKCRjaHVuaywgJzwnLCAnJTNDJyk7XFxyXFxuICAgICAgICAkY2h1bms6IHN0ci1yZXBsYWNlKCRjaHVuaywgJz4nLCAnJTNFJyk7XFxyXFxuICAgICAgICAkY2h1bms6IHN0ci1yZXBsYWNlKCRjaHVuaywgJyYnLCAnJTI2Jyk7XFxyXFxuICAgICAgICAkY2h1bms6IHN0ci1yZXBsYWNlKCRjaHVuaywgJyMnLCAnJTIzJyk7XFxyXFxuICAgICAgICAkZW5jb2RlZDogI3skZW5jb2RlZH0jeyRjaHVua307XFxyXFxuICAgICAgICAkaW5kZXg6ICRpbmRleCArICRzbGljZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAcmV0dXJuIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwjeyRlbmNvZGVkfVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4vLy8gUmVwbGFjZSBgJHNlYXJjaGAgd2l0aCBgJHJlcGxhY2VgIGluIGAkc3RyaW5nYFxcclxcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcXHJcXG4vLy8gQGxpbmsgaHR0cDovL3Nhc3NtZWlzdGVyLmNvbS9naXN0LzFiNGYyZGE1NTI3ODMwMDg4ZTRkXFxyXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkc3RyaW5nIC0gSW5pdGlhbCBzdHJpbmdcXHJcXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzZWFyY2ggLSBTdWJzdHJpbmcgdG8gcmVwbGFjZVxcclxcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHJlcGxhY2UgKCcnKSAtIE5ldyB2YWx1ZVxcclxcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVXBkYXRlZCBzdHJpbmdcXHJcXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6ICcnKSB7XFxyXFxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xcclxcblxcclxcbiAgICBAaWYgJGluZGV4IHtcXHJcXG4gICAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAcmV0dXJuICRzdHJpbmc7XFxyXFxufVxcclxcblwiLFwiJGljb24tc3Bpbm5lci1zdmc6ICAgICAgc3ZnLXVyaShcXFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMC45Nyc+PHBhdGggZD0nTTMyLDE1LjQ4YTE2LjUyLDE2LjUyLDAsMCwxLTEuMzcsNi4yOCwxNi4zNSwxNi4zNSwwLDAsMS05LDguNjMsMTUuODcsMTUuODcsMCwwLDEtMTcuMy0zLjc4QTE1LjQzLDE1LjQzLDAsMCwxLDQuNzIsNC43MiwxNSwxNSwwLDAsMSwxNS40OS41MmExNC43NiwxNC43NiwwLDAsMSwxMC40LDQuNTZBMTQuNzcsMTQuNzcsMCwwLDEsMjksOS45YTE0LjQ1LDE0LjQ1LDAsMCwxLC44NSwzLjM1aC4xM0EyLjA2LDIuMDYsMCwwLDEsMzIsMTUuMzFhLjkxLjkxLDAsMCwxLDAsLjE3Wk0yOC43MiwxMGExNC4yNywxNC4yNywwLDAsMC0zLjItNC41NSwxNCwxNCwwLDAsMC0xMC0zLjlBMTMuNzIsMTMuNzIsMCwwLDAsMywxMC4zYTEzLjQzLDEzLjQzLDAsMCwwLC4yNCwxMC4yNywxMy4wNSwxMy4wNSwwLDAsMCwxMi4yOCw3LjgyLDEyLjkyLDEyLjkyLDAsMCwwLDQuODgtMS4xLDEyLjY1LDEyLjY1LDAsMCwwLDQuMDYtMi44NywxMi40OCwxMi40OCwwLDAsMCwyLjYyLTQuMTUsMTIuMjQsMTIuMjQsMCwwLDAsLjgyLTQuNzloMGEuOTEuOTEsMCwwLDEsMC0uMTcsMi4wNywyLjA3LDAsMCwxLDEuODQtMi4wNSwxNC4yNywxNC4yNywwLDAsMC0xLTMuMjZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0wLjUxKScvPjwvc3ZnPlxcXCIpO1xcclxcblxcclxcbiRicmVha3BvaW50LXhzOiAgICAgICAgIDkwMHB4O1xcclxcblxcclxcbiR0cmFuc2l0aW9uOiAgICAgICAgICAgIGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4vLyBjYWxlbmRhclxcclxcblxcclxcbiRjYWxlbmRhci1iZy1jb2xvcjogICAgICNmZmY7XFxyXFxuXFxyXFxuLy8gY2FsZW5kYXIgY2VsbHNcXHJcXG5cXHJcXG4kY2VsbC13aWR0aDogICAgICAgICAgICAzMHB4O1xcclxcblxcclxcbiRjZWxsLWNvbG9yOiAgICAgICAgICAgICM0NDQ0NDQ7XFxyXFxuXFxyXFxuJGRpc2FibGVkLWJnLWNvbG9yOiAgICAgI2YwZjBmMDtcXHJcXG4kZGlzYWJsZWQtY29sb3I6ICAgICAgICAjYmZiZmJmO1xcclxcblxcclxcbiRoaWdobGlnaHRlZC1iZy1jb2xvcjogIGxpZ2h0ZW4oIzU3ODRGNSwgMjAlKTtcXHJcXG4kaGlnaGxpZ2h0ZWQtY29sb3I6ICAgICBkYXJrZW4oJGNlbGwtY29sb3IsIDUlKTtcXHJcXG5cXHJcXG4kaW52YWxpZC1iZy1jb2xvcjogICAgICBkYXJrZW4oJGRpc2FibGVkLWJnLWNvbG9yLCAgNSUpO1xcclxcbiRpbnZhbGlkLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZGlzYWJsZWQtY29sb3IsIDUlKTtcXHJcXG5cXHJcXG4vLyBjYWxlbmRhciB0YWJsZVxcclxcblxcclxcbiRpbmZvLWNvbG9yOiAgICAgICAgICAgIHJnYmEoNjAsIDYwLCA2MCwgMC41KTtcXHJcXG5cXHJcXG4kdGgtYm9yZGVyLWJvdHRvbTogICAgICAjY2JjYmNiO1xcclxcbiR0aC1jb2xvcjogICAgICAgICAgICAgICNhYWFhYWE7XFxyXFxuXFxyXFxuLy8gZm9ybVxcclxcblxcclxcbiRidG4tZmlsbDogICAgICAgICAgICAgICRjZWxsLWNvbG9yO1xcclxcbiRidG4tYm9yZGVyOiAgICAgICAgICAgICR0aC1ib3JkZXItYm90dG9tO1xcclxcbiRidG4tZmlsbC1ob3ZlcjogICAgICAgICMzODk1ZDk7XFxyXFxuXCIsXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5cXHJcXG4gICAgZHJvcGRvd25cXHJcXG5cXHJcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uY2FsZW5kYXIuZHJvcEJhc2ljIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggNXB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcblxcclxcbiAgJi52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC43ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9yd2FyZCxcXHJcXG4gIC5iYWNrIHtcXHJcXG4gICAgdG9wOiAxZW07XFxyXFxuICAgIGxlZnQ6IDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3J3YXJkIHtcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgcmlnaHQ6IDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY2FsZW5kYXJcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYWxlbmRhclwiLFxuXHRcImJvb2tpbmdzeW5jLXNwaW5cIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19ib29raW5nc3luYy1zcGluXCIsXG5cdFwibG9hZGluZ1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2xvYWRpbmdcIixcblx0XCJkcm9wQmFzaWNcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kcm9wQmFzaWNcIixcblx0XCJ2aXNpYmxlXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fdmlzaWJsZVwiLFxuXHRcImNhcHRpb25cIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19jYXB0aW9uXCIsXG5cdFwiZm9yd2FyZFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvcndhcmRcIixcblx0XCJiYWNrXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fYmFja1wiLFxuXHRcIm1vbnRoc1dyYXBwZXJcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19tb250aHNXcmFwcGVyXCIsXG5cdFwibUNlbGxcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19tQ2VsbFwiLFxuXHRcIm1vbnRoXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fbW9udGhcIixcblx0XCJ0YWJsZUhlYWRlclwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3RhYmxlSGVhZGVyXCIsXG5cdFwiYm9keVwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2JvZHlcIixcblx0XCJ0aFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3RoXCIsXG5cdFwiY2VsbFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2NlbGxcIixcblx0XCJ0b2RheVwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3RvZGF5XCIsXG5cdFwiY250XCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fY250XCIsXG5cdFwiaW5mb1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2luZm9cIixcblx0XCJmb2N1c1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX2ZvY3VzXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19zZWxlY3RlZFwiLFxuXHRcInJldmVyc2VkXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fcmV2ZXJzZWRcIixcblx0XCJkaXJlY3RcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXJlY3RcIixcblx0XCJzZWxlY3RpbmdSZXZlcnNlZFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRfX3NlbGVjdGluZ1JldmVyc2VkXCIsXG5cdFwic2VsZWN0aW5nRGlyZWN0XCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0aW5nRGlyZWN0XCIsXG5cdFwiYWN0aW9uc0VuYWJsZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19hY3Rpb25zRW5hYmxlZFwiLFxuXHRcImhpZ2hsaWdodGVkXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faGlnaGxpZ2h0ZWRcIixcblx0XCJpbnZhbGlkXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9faW52YWxpZFwiLFxuXHRcImRpc2FibGVkU3RhcnRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZFN0YXJ0XCIsXG5cdFwiZGlzYWJsZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0X19kaXNhYmxlZFwiLFxuXHRcImRpc2FibGVkRW5kXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fZGlzYWJsZWRFbmRcIixcblx0XCJzZWxlY3RlZFN0YXJ0XCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRTdGFydFwiLFxuXHRcInNlbGVjdGVkRW5kXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldF9fc2VsZWN0ZWRFbmRcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGRpdiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHNwYW4sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBhcHBsZXQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBvYmplY3QsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpZnJhbWUsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBoMSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGgyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaDMsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBoNCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGg1LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaDYsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBwLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgYmxvY2txdW90ZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHByZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGEsXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGFiYnIsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBhY3JvbnltLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgYWRkcmVzcywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGJpZywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNpdGUsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBjb2RlLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZGVsLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZGZuLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZW0sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpbWcsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpbnMsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBrYmQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBxLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgcywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHNhbXAsXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHNtYWxsLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgc3RyaWtlLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgc3Ryb25nLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgc3ViLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgc3VwLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdHQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB2YXIsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBiLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGksIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBjZW50ZXIsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBkbCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGR0LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZGQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBvbCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHVsLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbGksXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGZpZWxkc2V0LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZm9ybSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGRpdi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19mb3JtLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbGFiZWwsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBsZWdlbmQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0YWJsZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNhcHRpb24sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0Ym9keSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHRmb290LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdGhlYWQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0cixcXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdGgsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0ZCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGFydGljbGUsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBhc2lkZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNhbnZhcywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGRldGFpbHMsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBmaWdjYXB0aW9uLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZmlndXJlLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZm9vdGVyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaGVhZGVyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaGdyb3VwLFxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBtZW51LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbmF2LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgc2VjdGlvbiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHN1bW1hcnksIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0aW1lLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbWFyaywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGF1ZGlvLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdmlkZW8sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBidXR0b24sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0ZXh0YXJlYSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGlucHV0LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX2J1dHRvbiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19sZWdlbmQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplLWFkanVzdDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgMTAwJSBcXFwiT3BlbiBzYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICAtbW96LXRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcXG4gIHRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtdGV4dC1lbXBoYXNpczogbm9uZTtcXG4gIHRleHQtZW1waGFzaXM6IG5vbmU7XFxuICB0ZXh0LWhlaWdodDogYXV0bztcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xcbiAgdGV4dC1vdXRsaW5lOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtd3JhcDogbm9ybWFsO1xcbiAgYWxpZ25tZW50LWFkanVzdDogYXV0bztcXG4gIGFsaWdubWVudC1iYXNlbGluZTogYmFzZWxpbmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcXG4gIGFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gIGFwcGVhcmFuY2U6IG5vcm1hbDtcXG4gIGF6aW11dGg6IGNlbnRlcjtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICBiYWNrZ3JvdW5kOiBub25lIDAgMCBhdXRvIHJlcGVhdCBzY3JvbGwgcGFkZGluZy1ib3ggdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYXNlbGluZS1zaGlmdDogYmFzZWxpbmU7XFxuICBiaW5kaW5nOiBub25lO1xcbiAgYmxlZWQ6IDZwdDtcXG4gIGJvb2ttYXJrLWxhYmVsOiBjb250ZW50KCk7XFxuICBib29rbWFyay1sZXZlbDogbm9uZTtcXG4gIGJvb2ttYXJrLXN0YXRlOiBvcGVuO1xcbiAgYm9va21hcmstdGFyZ2V0OiBub25lO1xcbiAgYm9yZGVyOiAwIG5vbmUgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm90dG9tOiBhdXRvO1xcbiAgYm94LWFsaWduOiBzdHJldGNoO1xcbiAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XFxuICBib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XFxuICBib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICBmbGV4OiAwLjA7XFxuICBmbGV4LWdyb3VwOiAxO1xcbiAgYm94LWxpbmVzOiBzaW5nbGU7XFxuICBib3gtb3JkaW5hbC1ncm91cDogMTtcXG4gIGJveC1vcmllbnQ6IGlubGluZS1heGlzO1xcbiAgYm94LXBhY2s6IHN0YXJ0O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1icmVhay1hZnRlcjogYXV0bztcXG4gIC1tb3otYnJlYWstYWZ0ZXI6IGF1dG87XFxuICBicmVhay1hZnRlcjogYXV0bztcXG4gIC13ZWJraXQtYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgLW1vei1icmVhay1iZWZvcmU6IGF1dG87XFxuICBicmVhay1iZWZvcmU6IGF1dG87XFxuICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF1dG87XFxuICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcXG4gIGJyZWFrLWluc2lkZTogYXV0bztcXG4gIGNhcHRpb24tc2lkZTogdG9wO1xcbiAgY2xlYXI6IG5vbmU7XFxuICBjbGlwOiBhdXRvO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvci1wcm9maWxlOiBhdXRvO1xcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IGF1dG87XFxuICAtbW96LWNvbHVtbi1jb3VudDogYXV0bztcXG4gIGNvbHVtbi1jb3VudDogYXV0bztcXG4gIC13ZWJraXQtY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxuICAtbW96LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxuICAtd2Via2l0LWNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gIC1tb3otY29sdW1uLWdhcDogbm9ybWFsO1xcbiAgY29sdW1uLWdhcDogbm9ybWFsO1xcbiAgLXdlYmtpdC1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcbiAgLW1vei1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcbiAgY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gIC13ZWJraXQtY29sdW1uLXNwYW46IDE7XFxuICAtbW96LWNvbHVtbi1zcGFuOiAxO1xcbiAgY29sdW1uLXNwYW46IDE7XFxuICAtd2Via2l0LWNvbHVtbi13aWR0aDogYXV0bztcXG4gIC1tb3otY29sdW1uLXdpZHRoOiBhdXRvO1xcbiAgY29sdW1uLXdpZHRoOiBhdXRvO1xcbiAgLXdlYmtpdC1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAtbW96LWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGNvbnRlbnQ6IG5vcm1hbDtcXG4gIGNvdW50ZXItaW5jcmVtZW50OiBub25lO1xcbiAgY291bnRlci1yZXNldDogbm9uZTtcXG4gIGNyb3A6IGF1dG87XFxuICBjdXJzb3I6IGF1dG87XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGRvbWluYW50LWJhc2VsaW5lOiBhdXRvO1xcbiAgZHJvcC1pbml0aWFsLWFmdGVyLWFkanVzdDogdGV4dC1hZnRlci1lZGdlO1xcbiAgZHJvcC1pbml0aWFsLWFmdGVyLWFsaWduOiBiYXNlbGluZTtcXG4gIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWRqdXN0OiB0ZXh0LWJlZm9yZS1lZGdlO1xcbiAgZHJvcC1pbml0aWFsLWJlZm9yZS1hbGlnbjogY2Fwcy1oZWlnaHQ7XFxuICBkcm9wLWluaXRpYWwtc2l6ZTogYXV0bztcXG4gIGRyb3AtaW5pdGlhbC12YWx1ZTogaW5pdGlhbDtcXG4gIGVsZXZhdGlvbjogbGV2ZWw7XFxuICBlbXB0eS1jZWxsczogc2hvdztcXG4gIGZpdDogZmlsbDtcXG4gIGZpdC1wb3NpdGlvbjogMCUgMCU7XFxuICBmbG9hdDogbm9uZTtcXG4gIGZsb2F0LW9mZnNldDogMCAwO1xcbiAgZ3JpZC1jb2x1bW5zOiBub25lO1xcbiAgZ3JpZC1yb3dzOiBub25lO1xcbiAgaGFuZ2luZy1wdW5jdHVhdGlvbjogbm9uZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGh5cGhlbmF0ZS1hZnRlcjogYXV0bztcXG4gIGh5cGhlbmF0ZS1iZWZvcmU6IGF1dG87XFxuICBoeXBoZW5hdGUtY2hhcmFjdGVyOiBhdXRvO1xcbiAgaHlwaGVuYXRlLWxpbmVzOiBuby1saW1pdDtcXG4gIGh5cGhlbmF0ZS1yZXNvdXJjZTogbm9uZTtcXG4gIC13ZWJraXQtaHlwaGVuczogbWFudWFsO1xcbiAgLW1vei1oeXBoZW5zOiBtYW51YWw7XFxuICAtbXMtaHlwaGVuczogbWFudWFsO1xcbiAgaHlwaGVuczogbWFudWFsO1xcbiAgaWNvbjogYXV0bztcXG4gIGltYWdlLW9yaWVudGF0aW9uOiBhdXRvO1xcbiAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xcbiAgaW1hZ2UtcmVzb2x1dGlvbjogbm9ybWFsO1xcbiAgaW5saW5lLWJveC1hbGlnbjogbGFzdDtcXG4gIGxlZnQ6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtc3RhY2tpbmc6IGlubGluZS1saW5lLWhlaWdodCBleGNsdWRlLXJ1YnkgY29uc2lkZXItc2hpZnRzO1xcbiAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlIG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJrczogbm9uZTtcXG4gIG1hcnF1ZWUtZGlyZWN0aW9uOiBmb3J3YXJkO1xcbiAgbWFycXVlZS1sb29wOiAxO1xcbiAgbWFycXVlZS1wbGF5LWNvdW50OiAxO1xcbiAgbWFycXVlZS1zcGVlZDogbm9ybWFsO1xcbiAgbWFycXVlZS1zdHlsZTogc2Nyb2xsO1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtb3ZlLXRvOiBub3JtYWw7XFxuICBuYXYtZG93bjogYXV0bztcXG4gIG5hdi1pbmRleDogYXV0bztcXG4gIG5hdi1sZWZ0OiBhdXRvO1xcbiAgbmF2LXJpZ2h0OiBhdXRvO1xcbiAgbmF2LXVwOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIG9ycGhhbnM6IDI7XFxuICBvdXRsaW5lOiBpbnZlcnQgbm9uZSBtZWRpdW07XFxuICBvdXRsaW5lLW9mZnNldDogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgb3ZlcmZsb3ctc3R5bGU6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFnZTogYXV0bztcXG4gIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XFxuICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcXG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgcGFnZS1wb2xpY3k6IHN0YXJ0O1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogbm9uZTtcXG4gIHBlcnNwZWN0aXZlOiBub25lO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgcHJlc2VudGF0aW9uLWxldmVsOiAwO1xcbiAgcHVuY3R1YXRpb24tdHJpbTogbm9uZTtcXG4gIHF1b3Rlczogbm9uZTtcXG4gIHJlbmRlcmluZy1pbnRlbnQ6IGF1dG87XFxuICByZXNpemU6IG5vbmU7XFxuICByaWdodDogYXV0bztcXG4gIHJvdGF0aW9uOiAwO1xcbiAgcm90YXRpb24tcG9pbnQ6IDUwJSA1MCU7XFxuICBydWJ5LWFsaWduOiBhdXRvO1xcbiAgcnVieS1vdmVyaGFuZzogbm9uZTtcXG4gIHJ1YnktcG9zaXRpb246IGJlZm9yZTtcXG4gIHJ1Ynktc3Bhbjogbm9uZTtcXG4gIHNpemU6IGF1dG87XFxuICBzdHJpbmctc2V0OiBub25lO1xcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAtbXMtdHJhbnNmb3JtOiBub25lO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMCBlYXNlIDA7XFxuICB1bmljb2RlLWJpZGk6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZS1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB3aWRvd3M6IDI7XFxuICB3aWR0aDogYXV0bztcXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICB6LWluZGV4OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAvKiBBbmQgZGlzYWJsZSBNUyBncmFkaWVudHMgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XFxuXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGFkZHJlc3MsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBibG9ja3F1b3RlLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZGQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBkaXYsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBkbCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGR0LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZmllbGRzZXQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBmb3JtLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZGl2LkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX2Zvcm0sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBmcmFtZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGZyYW1lc2V0LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaDEsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBoMiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGgzLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaDQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBoNSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGg2LCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbm9mcmFtZXMsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBvbCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHAsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB1bCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNlbnRlciwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGRpciwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGhyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbWVudSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHByZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGFydGljbGUsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBhc2lkZSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNhbnZhcywgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGRldGFpbHMsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBmaWdjYXB0aW9uLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZmlndXJlLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZm9vdGVyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaGVhZGVyLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgaGdyb3VwLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgbWVudSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IG5hdiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHNlY3Rpb24sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGxpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0ciB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdGhlYWQge1xcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyB9XFxuXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHRib2R5IHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0Zm9vdCB7XFxuICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgY29sIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBjb2xncm91cCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdGQsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCB0aCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9XFxuXFxuLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGNhcHRpb24ge1xcbiAgZGlzcGxheTogdGFibGUtY2FwdGlvbjsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpbnB1dCwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHNlbGVjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgYiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBiID4gaSwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IHN0cm9uZyA+IGksIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBiID4gZW0sIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBzdHJvbmcgPiBlbSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpID4gYiwgLkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX3Jlc2V0IGkgPiBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZW0gPiBiLCAuQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgZW0gPiBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXQgdGV4dGFyZWEsIC5Cb29raW5nU3luY1dpZGdldFV0aWxzX19yZXNldCBpbnB1dCB7XFxuICBjdXJzb3I6IHRleHQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0VBT0ksd0VBQXdFO0VBQ3hFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvRkFBb0Y7RUFDcEYsZ0JBQWdCO0VBQ2hC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OztBQXZQMUI7RUEwUEkscUJBQXFCLEVBQUE7O0FBMVB6QjtFQTZQSSxpQkFBaUIsRUFBQTs7QUE3UHJCO0VBZ1FJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFqUXRCO0VBcVFNLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUF0UXhCO0VBMlFNLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUE1UXhCO0VBZ1JJLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVzZXQge1xcclxcblxcdGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLFxcclxcblxcdGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcblxcdHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5cXHRmaWVsZHNldCwgZm9ybSwgZGl2LmZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0cixcXHJcXG5cXHR0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5cXHRtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIC5idXR0b24sIC5sZWdlbmQge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXHJcXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgMTAwJSBcXFwiT3BlbiBzYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgLW1vei10ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XFxyXFxuICAgIHRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAtd2Via2l0LXRleHQtZW1waGFzaXM6IG5vbmU7XFxyXFxuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XFxyXFxuICAgIHRleHQtaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB0ZXh0LWluZGVudDogMDtcXHJcXG4gICAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xcclxcbiAgICB0ZXh0LW91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgdGV4dC13cmFwOiBub3JtYWw7XFxyXFxuICAgIGFsaWdubWVudC1hZGp1c3Q6IGF1dG87XFxyXFxuICAgIGFsaWdubWVudC1iYXNlbGluZTogYmFzZWxpbmU7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lIDAgZWFzZSAwIDEgbm9ybWFsO1xcclxcbiAgICBhbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxyXFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub3JtYWw7XFxyXFxuICAgIGF6aW11dGg6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lIDAgMCBhdXRvIHJlcGVhdCBzY3JvbGwgcGFkZGluZy1ib3ggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgICBiYXNlbGluZS1zaGlmdDogYmFzZWxpbmU7XFxyXFxuICAgIGJpbmRpbmc6IG5vbmU7XFxyXFxuICAgIGJsZWVkOiA2cHQ7XFxyXFxuICAgIGJvb2ttYXJrLWxhYmVsOiBjb250ZW50KCk7XFxyXFxuICAgIGJvb2ttYXJrLWxldmVsOiBub25lO1xcclxcbiAgICBib29rbWFyay1zdGF0ZTogb3BlbjtcXHJcXG4gICAgYm9va21hcmstdGFyZ2V0OiBub25lO1xcclxcbiAgICBib3JkZXI6IDAgbm9uZSB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBib3gtYWxpZ246IHN0cmV0Y2g7XFxyXFxuICAgIC13ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xcclxcbiAgICBib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XFxyXFxuICAgIGJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgZmxleDogMC4wO1xcclxcbiAgICBmbGV4LWdyb3VwOiAxO1xcclxcbiAgICBib3gtbGluZXM6IHNpbmdsZTtcXHJcXG4gICAgYm94LW9yZGluYWwtZ3JvdXA6IDE7XFxyXFxuICAgIGJveC1vcmllbnQ6IGlubGluZS1heGlzO1xcclxcbiAgICBib3gtcGFjazogc3RhcnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtd2Via2l0LWJyZWFrLWFmdGVyOiBhdXRvO1xcclxcbiAgICAtbW96LWJyZWFrLWFmdGVyOiBhdXRvO1xcclxcbiAgICBicmVhay1hZnRlcjogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1icmVhay1iZWZvcmU6IGF1dG87XFxyXFxuICAgIC1tb3otYnJlYWstYmVmb3JlOiBhdXRvO1xcclxcbiAgICBicmVhay1iZWZvcmU6IGF1dG87XFxyXFxuICAgIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXV0bztcXHJcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XFxyXFxuICAgIGJyZWFrLWluc2lkZTogYXV0bztcXHJcXG4gICAgY2FwdGlvbi1zaWRlOiB0b3A7XFxyXFxuICAgIGNsZWFyOiBub25lO1xcclxcbiAgICBjbGlwOiBhdXRvO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3ItcHJvZmlsZTogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IGF1dG87XFxyXFxuICAgIC1tb3otY29sdW1uLWNvdW50OiBhdXRvO1xcclxcbiAgICBjb2x1bW4tY291bnQ6IGF1dG87XFxyXFxuICAgIC13ZWJraXQtY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxyXFxuICAgIC1tb3otY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxyXFxuICAgIGNvbHVtbi1maWxsOiBiYWxhbmNlO1xcclxcbiAgICAtd2Via2l0LWNvbHVtbi1nYXA6IG5vcm1hbDtcXHJcXG4gICAgLW1vei1jb2x1bW4tZ2FwOiBub3JtYWw7XFxyXFxuICAgIGNvbHVtbi1nYXA6IG5vcm1hbDtcXHJcXG4gICAgLXdlYmtpdC1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcclxcbiAgICAtbW96LWNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxyXFxuICAgIGNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxyXFxuICAgIC13ZWJraXQtY29sdW1uLXNwYW46IDE7XFxyXFxuICAgIC1tb3otY29sdW1uLXNwYW46IDE7XFxyXFxuICAgIGNvbHVtbi1zcGFuOiAxO1xcclxcbiAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogYXV0bztcXHJcXG4gICAgLW1vei1jb2x1bW4td2lkdGg6IGF1dG87XFxyXFxuICAgIGNvbHVtbi13aWR0aDogYXV0bztcXHJcXG4gICAgLXdlYmtpdC1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICAgIC1tb3otY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgICBjb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICAgIGNvbnRlbnQ6IG5vcm1hbDtcXHJcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IG5vbmU7XFxyXFxuICAgIGNvdW50ZXItcmVzZXQ6IG5vbmU7XFxyXFxuICAgIGNyb3A6IGF1dG87XFxyXFxuICAgIGN1cnNvcjogYXV0bztcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgZG9taW5hbnQtYmFzZWxpbmU6IGF1dG87XFxyXFxuICAgIGRyb3AtaW5pdGlhbC1hZnRlci1hZGp1c3Q6IHRleHQtYWZ0ZXItZWRnZTtcXHJcXG4gICAgZHJvcC1pbml0aWFsLWFmdGVyLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgZHJvcC1pbml0aWFsLWJlZm9yZS1hZGp1c3Q6IHRleHQtYmVmb3JlLWVkZ2U7XFxyXFxuICAgIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWxpZ246IGNhcHMtaGVpZ2h0O1xcclxcbiAgICBkcm9wLWluaXRpYWwtc2l6ZTogYXV0bztcXHJcXG4gICAgZHJvcC1pbml0aWFsLXZhbHVlOiBpbml0aWFsO1xcclxcbiAgICBlbGV2YXRpb246IGxldmVsO1xcclxcbiAgICBlbXB0eS1jZWxsczogc2hvdztcXHJcXG4gICAgZml0OiBmaWxsO1xcclxcbiAgICBmaXQtcG9zaXRpb246IDAlIDAlO1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgZmxvYXQtb2Zmc2V0OiAwIDA7XFxyXFxuICAgIGdyaWQtY29sdW1uczogbm9uZTtcXHJcXG4gICAgZ3JpZC1yb3dzOiBub25lO1xcclxcbiAgICBoYW5naW5nLXB1bmN0dWF0aW9uOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGh5cGhlbmF0ZS1hZnRlcjogYXV0bztcXHJcXG4gICAgaHlwaGVuYXRlLWJlZm9yZTogYXV0bztcXHJcXG4gICAgaHlwaGVuYXRlLWNoYXJhY3RlcjogYXV0bztcXHJcXG4gICAgaHlwaGVuYXRlLWxpbmVzOiBuby1saW1pdDtcXHJcXG4gICAgaHlwaGVuYXRlLXJlc291cmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWh5cGhlbnM6IG1hbnVhbDtcXHJcXG4gICAgLW1vei1oeXBoZW5zOiBtYW51YWw7XFxyXFxuICAgIC1tcy1oeXBoZW5zOiBtYW51YWw7XFxyXFxuICAgIGh5cGhlbnM6IG1hbnVhbDtcXHJcXG4gICAgaWNvbjogYXV0bztcXHJcXG4gICAgaW1hZ2Utb3JpZW50YXRpb246IGF1dG87XFxyXFxuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgaW1hZ2UtcmVzb2x1dGlvbjogbm9ybWFsO1xcclxcbiAgICBpbmxpbmUtYm94LWFsaWduOiBsYXN0O1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgbGluZS1zdGFja2luZzogaW5saW5lLWxpbmUtaGVpZ2h0IGV4Y2x1ZGUtcnVieSBjb25zaWRlci1zaGlmdHM7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmtzOiBub25lO1xcclxcbiAgICBtYXJxdWVlLWRpcmVjdGlvbjogZm9yd2FyZDtcXHJcXG4gICAgbWFycXVlZS1sb29wOiAxO1xcclxcbiAgICBtYXJxdWVlLXBsYXktY291bnQ6IDE7XFxyXFxuICAgIG1hcnF1ZWUtc3BlZWQ6IG5vcm1hbDtcXHJcXG4gICAgbWFycXVlZS1zdHlsZTogc2Nyb2xsO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcclxcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgbW92ZS10bzogbm9ybWFsO1xcclxcbiAgICBuYXYtZG93bjogYXV0bztcXHJcXG4gICAgbmF2LWluZGV4OiBhdXRvO1xcclxcbiAgICBuYXYtbGVmdDogYXV0bztcXHJcXG4gICAgbmF2LXJpZ2h0OiBhdXRvO1xcclxcbiAgICBuYXYtdXA6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIG9ycGhhbnM6IDI7XFxyXFxuICAgIG91dGxpbmU6IGludmVydCBub25lIG1lZGl1bTtcXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDA7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICBvdmVyZmxvdy1zdHlsZTogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcGFnZTogYXV0bztcXHJcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcXHJcXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xcclxcbiAgICBwYWdlLXBvbGljeTogc3RhcnQ7XFxyXFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IG5vbmU7XFxyXFxuICAgIHBlcnNwZWN0aXZlOiBub25lO1xcclxcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBwcmVzZW50YXRpb24tbGV2ZWw6IDA7XFxyXFxuICAgIHB1bmN0dWF0aW9uLXRyaW06IG5vbmU7XFxyXFxuICAgIHF1b3Rlczogbm9uZTtcXHJcXG4gICAgcmVuZGVyaW5nLWludGVudDogYXV0bztcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgcm90YXRpb246IDA7XFxyXFxuICAgIHJvdGF0aW9uLXBvaW50OiA1MCUgNTAlO1xcclxcbiAgICBydWJ5LWFsaWduOiBhdXRvO1xcclxcbiAgICBydWJ5LW92ZXJoYW5nOiBub25lO1xcclxcbiAgICBydWJ5LXBvc2l0aW9uOiBiZWZvcmU7XFxyXFxuICAgIHJ1Ynktc3Bhbjogbm9uZTtcXHJcXG4gICAgc2l6ZTogYXV0bztcXHJcXG4gICAgc3RyaW5nLXNldDogbm9uZTtcXHJcXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xcclxcbiAgICB0b3A6IGF1dG87XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcclxcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwIGVhc2UgMDtcXHJcXG4gICAgdW5pY29kZS1iaWRpOiBub3JtYWw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgd2hpdGUtc3BhY2UtY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICB3aWRvd3M6IDI7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgei1pbmRleDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIC8qIEFuZCBkaXNhYmxlIE1TIGdyYWRpZW50cyAqL1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKTtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICB9XFxyXFxuICBhZGRyZXNzLCBibG9ja3F1b3RlLCBkZCwgZGl2LCBkbCwgZHQsIGZpZWxkc2V0LCBmb3JtLCBkaXYuZm9ybSwgZnJhbWUsIGZyYW1lc2V0LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBub2ZyYW1lcywgb2wsIHAsIHVsLCBjZW50ZXIsIGRpciwgaHIsIG1lbnUsIHByZSwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIGxpIHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbiAgfVxcclxcbiAgdGFibGUge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIH1cXHJcXG4gIHRyIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbiAgfVxcclxcbiAgdGhlYWQge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxyXFxuICB9XFxyXFxuICB0Ym9keSB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcXHJcXG4gIH1cXHJcXG4gIHRmb290IHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xcclxcbiAgfVxcclxcbiAgY29sIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcclxcbiAgfVxcclxcbiAgY29sZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7XFxyXFxuICB9XFxyXFxuICB0ZCwgdGgge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgfVxcclxcbiAgY2FwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxyXFxuICB9XFxyXFxuICBpbnB1dCwgc2VsZWN0IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcbiAgYiwgc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBiID4gaSwgc3Ryb25nID4gaSwgYiA+IGVtLCBzdHJvbmcgPiBlbSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB9XFxyXFxuICBpID4ge1xcclxcbiAgICBiLCBzdHJvbmcge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgZW0gPiB7XFxyXFxuICAgIGIsIHN0cm9uZyB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICB0ZXh0YXJlYSwgaW5wdXQge1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJlc2V0XCI6IFwiQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fcmVzZXRcIixcblx0XCJmb3JtXCI6IFwiQm9va2luZ1N5bmNXaWRnZXRVdGlsc19fZm9ybVwiLFxuXHRcImJ1dHRvblwiOiBcIkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX2J1dHRvblwiLFxuXHRcImxlZ2VuZFwiOiBcIkJvb2tpbmdTeW5jV2lkZ2V0VXRpbHNfX2xlZ2VuZFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2NhbGVuZGFyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuL3Jlc2V0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==