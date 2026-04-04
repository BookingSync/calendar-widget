/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/currency-symbol-map.js"
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/currency-symbol-map.js ***!
  \**************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const currencySymbolMap = __webpack_require__(/*! ./map */ "./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/map.js");
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

/***/ },

/***/ "./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/map.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/map.js ***!
  \**********************************************************************************************/
(module) {

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
  CNH: '¥',
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

/***/ },

/***/ "./node_modules/.pnpm/strtime@1.1.2/node_modules/strtime/dist/strtime.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/strtime@1.1.2/node_modules/strtime/dist/strtime.js ***!
  \*******************************************************************************/
(module) {

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
}

// Get the day of the week given an input Date.
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
}

// Get the day of the year as a number (1-366)
function getDayOfYear(date) {
  const lengths = monthLengths.forYear(date.getUTCFullYear());
  const months = lengths.slice(0, date.getUTCMonth());
  return date.getUTCDate() + (months.length && months.reduce((a, b) => a + b) || 0);
}

// Get the week of the year (starting with Sunday) (0-53)
function getWeekOfYearFromSunday(date) {
  const dayOfYear = getDayOfYear(date);
  const firstDayOfWeek = getFirstWeekdayInYear(date.getUTCFullYear());
  return Math.floor((dayOfYear + (firstDayOfWeek || 7) - 1) / 7);
}

// Get the week of the year (starting with Monday) (0-53)
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
}

// Get the ISO week of the year
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
}

// https://en.wikipedia.org/wiki/ISO_week_date
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
    this.names = options.names;
    // Pad numbers to this length (normally)
    this.padLength = options.padLength;
    // A likely (but not strict) length to be used when resolving
    // ambiguous parsing inputs
    this.likelyLength = options.likelyLength;
    // Indicates that this directive uses text (as opposed to numbers)
    this.text = options.text;
    // The minimum permitted numeric value for a directive
    this.minimum = options.minimum;
    // The maximum permitted numeric value for a directive
    this.maximum = options.maximum;
    // Whether this directive represents a number that can be negative
    this.canBeNegative = options.canBeNegative;
    // This directive should always be rewritten using a combination of
    // other directives
    this.rewrite = options.rewrite;
    // Function to parse content from a string
    this.parseFunction = options.parse;
    // Function to write content as a string, given a date to format
    this.writeFunction = options.write;
    // Function to store a parsed numeric value
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
Directive.list = [
// Abbreviated weekday name
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
}),
// Long weekday name
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
}),
// Abbreviated month name
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
}),
// Long month name
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
}),
// Combination date and time, same as "%a %b %e %H:%M:%S %Y"
new Directive({
  names: ["c"],
  rewrite: "%a %b %e %H:%M:%S %Y"
}),
// Century (complements %y)
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
}),
// Two-digit day of month
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
}),
// Same as %m/%d/%y
new Directive({
  names: ["D", "x"],
  rewrite: "%m/%d/%y"
}),
// Day of month padded with spaces (same as "%_d")
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
}),
// Six-digit microsecond
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
}),
// Same as %Y-%m-%d
new Directive({
  names: ["F"],
  rewrite: "%Y-%m-%d"
}),
// Two-digit ISO week year
new Directive({
  names: ["g"],
  likelyLength: 2,
  store: function (number) {
    this.isoTwoDigitYear = number;
  },
  write: function (date) {
    return getISOWeekDateYear(date) % 100;
  }
}),
// Full ISO week year
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
}),
// Two-digit hour (0-23)
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
}),
// Two-digit hour (1-12) to be used in combination with %p (AM/PM)
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
}),
// Day in year
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
}),
// Three-digit millisecond
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
}),
// Two-digit month number (1-12)
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
}),
// Two-digit minute (0-59)
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
}),
// AM or PM (uppercase)
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
}),
// AM or PM (lowercase)
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
}),
// Number of mircoseconds since epoch
new Directive({
  names: ["Q"],
  canBeNegative: true,
  store: function (number) {
    this.microsecondsSinceEpoch = number;
  },
  write: function (date) {
    return Math.floor(date.getTime() * 1000);
  }
}),
// Same as "%I:%M:%S %p"
new Directive({
  names: ["r"],
  rewrite: "%I:%M:%S %p"
}),
// Same as "%H:%M"
new Directive({
  names: ["R"],
  rewrite: "%H:%M"
}),
// Number of seconds since epoch
new Directive({
  names: ["s"],
  canBeNegative: true,
  store: function (number) {
    this.secondsSinceEpoch = number;
  },
  write: function (date) {
    return Math.floor(date.getTime() / 1000);
  }
}),
// Two-digit second (0-61)
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
}),
// Same as %H:%M:%S
new Directive({
  names: ["T", "X"],
  rewrite: "%H:%M:%S"
}),
// Weekday number, starting with Monday (1-7)
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
}),
// Week of the year, starting with Sunday (0-53)
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
}),
// VMS date, same as "%e-%b-%Y"
new Directive({
  names: ["v"],
  rewrite: "%e-%b-%Y"
}),
// ISO 8601:1988 week number (1-53), complements %g/%G
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
}),
// Weekday number, starting with Sunday (0-6)
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
}),
// Week of the year, starting with Monday (0-53)
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
}),
// Two-digit year
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
}),
// Full year (usually four-digit, but not strictly so)
new Directive({
  names: ["Y"],
  padLength: 4,
  likelyLength: 4,
  canBeNegative: true,
  store: function (number) {
    this.year = number;
  },
  write: function (date, modifier) {
    const year = date.getUTCFullYear();
    // Modifier "^" produces unsigned year, for combination with era "%#"
    if (year <= 0 && modifier === "^") return 1 - year;else return year;
  }
}),
// Timezone offset e.g. +0500 or -1200
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
}),
// Timezone offset or name e.g. UTC or GMT or EST or +0500 or -1200
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
}),
// Same as "%a %b %e %H:%M:%S %Z %Y"
new Directive({
  names: ["+"],
  rewrite: "%a %b %e %H:%M:%S %Z %Y"
}),
// Era (BC/BCE)
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
})];

// The assertion-error package was used as a basis for the TimestampParseError type
// https://github.com/chaijs/assertion-error/blob/master/index.js

// The constructor
function TimestampParseError(reason, parser) {
  Error.call(this);
  this.reason = reason;
  this.format = parser.format;
  this.timestamp = parser.string;
  this.token = parser.currentToken;
  this.index = parser.index;
  if (this.token && this.token.expandedFrom && this.index !== undefined) this.message = `Failed to parse token "${this.token}" ` + `(expanded from "${this.token.expandedFrom}") at position [${this.index}] ` + `in timestamp "${this.timestamp}" with format "${this.format}": ` + `${this.reason}`;else if (this.token && this.index !== undefined) this.message = `Failed to parse token "${this.token}" at position [${this.index}] ` + `in timestamp "${this.timestamp}" with format "${this.format}": ` + `${this.reason}`;else if (this.token) this.message = `Failed to parse token "${this.token}" ` + `in format "${this.format}": ${this.reason}`;else this.message = `Failed with format "${this.format}": ${this.reason}`;
  // https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    try {
      throw new Error();
    } catch (error) {
      this.stack = error.stack;
    }
  }
}

// Prototype wrangling
TimestampParseError.prototype = Object.create(Error.prototype);
TimestampParseError.prototype.name = "TimestampParseError";
TimestampParseError.prototype.constructor = TimestampParseError;
function isDigit(ch) {
  return ch === "0" || ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" || ch === "6" || ch === "7" || ch === "8" || ch === "9";
}

// Matches GNU C strptime behavior
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
}

// https://en.wikipedia.org/wiki/ISO_week_date
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
    this.currentToken = undefined;
    // Parser settings
    this.shortWeekdayNames = english.shortWeekdayNames;
    this.longWeekdayNames = english.longWeekdayNames;
    this.shortMonthNames = english.shortMonthNames;
    this.longMonthNames = english.longMonthNames;
    this.eraNames = english.eraNames;
    this.meridiemNames = english.meridiemNames;
    this.ordinalTransform = english.ordinalTransform;
    this.timezoneNames = defaultTimezoneNames;
    // Storage values from parsing tokens
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
};

// https://stackoverflow.com/a/478992/4099022
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
} else // removed by dead control flow
{}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/ajax.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/ajax.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object/isObject */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js");
/* harmony import */ var _object_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/serialize */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/serialize.js");
/* harmony import */ var _string_toUnderscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/toUnderscore */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/toUnderscore.js");



const {
  parse,
  stringify
} = JSON;

/**
 * Makes an AJAX request to the specified API endpoint.
 *
 * @param {string} apiUrl - The URL of the API endpoint.
 * @param {function} success - The success callback function.
 * @param {function} error - The error callback function.
 * @param {object} [params] - The request parameters.
 * @param {string} [method='GET'] - The HTTP method to use.
 */
const ajax = (apiUrl, success, error, params, method = 'GET') => {
  const xmlHttp = new XMLHttpRequest();
  const url = method === 'GET' && params ? `${apiUrl}?${(0,_object_serialize__WEBPACK_IMPORTED_MODULE_1__["default"])(params, _string_toUnderscore__WEBPACK_IMPORTED_MODULE_2__["default"])}` : apiUrl;
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
  if ((0,_object_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(params) && method !== 'GET') {
    xmlHttp.send(stringify(params));
  } else {
    xmlHttp.send();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajax);

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/index.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/index.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/isArray.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_isArray__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/isArray.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/isArray.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isArray)
/* harmony export */ });
const {
  prototype: {
    toString
  }
} = Object;
function isArray(a) {
  return toString.call(a) === '[object Array]';
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/currencyFormatter.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/currencyFormatter.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currencyFormatter)
/* harmony export */ });
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! currency-symbol-map */ "./node_modules/.pnpm/currency-symbol-map@5.1.0/node_modules/currency-symbol-map/currency-symbol-map.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_0__);

const toLocaleStringSupportsOptions = () => !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');
function currencyFormatter(value, lang, currency, minimumFractionDigits = 0, maximumFractionDigits = 3) {
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
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/index.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/index.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currencyFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyFormatter */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/currencyFormatter.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_currencyFormatter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/index.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/index.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monthLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monthLength */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/monthLength.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_monthLength__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/monthLength.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/monthLength.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ monthLength)
/* harmony export */ });
// Date utils
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
function monthLength(year, month) {
  let days = daysInMonth[month];
  if (month === 1 && isLeapYear(year)) {
    days = 29;
  }
  return days;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/addClass.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/addClass.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeClass */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/removeClass.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/setClassName.js");
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js");



function addClass(el, ...classNames) {
  const name = classNames;
  if (typeof el.classList !== 'undefined') {
    name.forEach(cls => {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    (0,_removeClass__WEBPACK_IMPORTED_MODULE_0__["default"])(el, name);
    const cls = `${(0,_getClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(el)} ${name.join(' ')}`;
    (0,_setClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(el, cls);
  }
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/createElement.js"
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/createElement.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
const {
  keys
} = Object;

/**
 * Create HTMLElement with attributes
 * @param name {String}
 * @param attrs {Object}
 * @returns {HTMLElement}
 */
function createElement(name, attrs) {
  const params = attrs || {};
  const element = document.createElement(name);
  keys(params).map(i => element.setAttribute(i, params[i]));
  return element;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/destroyElement.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/destroyElement.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ destroyElement)
/* harmony export */ });
function destroyElement(element) {
  if (element.parentNode && element.parentNode.removeChild) {
    element.parentNode.removeChild(element);
  }
  return element;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/elementFromString.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/elementFromString.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementFromString)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/createElement.js");

function elementFromString(string) {
  const element = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
  element.innerHTML = string;
  return element.children[0];
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/findByClassName.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/findByClassName.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findByClassName)
/* harmony export */ });
function findByClassName(context, name) {
  return context.querySelector(`.${name}`);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClassName)
/* harmony export */ });
function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getParentAttribute.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getParentAttribute.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentAttribute)
/* harmony export */ });
/* harmony import */ var _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverseToParentWithAttr */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/traverseToParentWithAttr.js");


/**
 * Find HTMLElement attribute, in the dom-tree, bubbles up
 * @param el {HTMLElement}
 * @param attr
 * @returns {string}
 */
function getParentAttribute(el, attr) {
  return (0,_traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_0__["default"])(el, attr).value;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/hasClass.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/hasClass.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasClass)
/* harmony export */ });
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js");

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  const className = (0,_getClassName__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
  return new RegExp(`(^| )${name}( |$)`, 'gi').test(className);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/index.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/index.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClass */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/addClass.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/createElement.js");
/* harmony import */ var _destroyElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroyElement */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/destroyElement.js");
/* harmony import */ var _elementFromString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementFromString */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/elementFromString.js");
/* harmony import */ var _findByClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./findByClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/findByClassName.js");
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js");
/* harmony import */ var _getParentAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getParentAttribute */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getParentAttribute.js");
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hasClass */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/hasClass.js");
/* harmony import */ var _isInside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isInside */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/isInside.js");
/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removeClass */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/removeClass.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/setClassName.js");
/* harmony import */ var _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./traverseToParentWithAttr */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/traverseToParentWithAttr.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClass: _addClass__WEBPACK_IMPORTED_MODULE_0__["default"],
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_1__["default"],
  destroyElement: _destroyElement__WEBPACK_IMPORTED_MODULE_2__["default"],
  elementFromString: _elementFromString__WEBPACK_IMPORTED_MODULE_3__["default"],
  findByClassName: _findByClassName__WEBPACK_IMPORTED_MODULE_4__["default"],
  getClassName: _getClassName__WEBPACK_IMPORTED_MODULE_5__["default"],
  getParentAttribute: _getParentAttribute__WEBPACK_IMPORTED_MODULE_6__["default"],
  hasClass: _hasClass__WEBPACK_IMPORTED_MODULE_7__["default"],
  isInside: _isInside__WEBPACK_IMPORTED_MODULE_8__["default"],
  removeClass: _removeClass__WEBPACK_IMPORTED_MODULE_9__["default"],
  setClassName: _setClassName__WEBPACK_IMPORTED_MODULE_10__["default"],
  traverseToParentWithAttr: _traverseToParentWithAttr__WEBPACK_IMPORTED_MODULE_11__["default"]
});

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/isInside.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/isInside.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInside)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js");


/**
 * Check if some HTMLElement is inside another one
 * @param child {HTMLElement}
 * @param parent {HTMLElement}
 * @returns {boolean}
 */
function isInside(child, parent) {
  let current = child;
  while (current !== parent) {
    if (!(0,_is__WEBPACK_IMPORTED_MODULE_0__["default"])(current) || current.tagName === 'BODY' || current.tagName === 'HTML') {
      return false;
    }
    current = current.parentNode;
  }
  return true;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/removeClass.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/removeClass.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var _getClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/getClassName.js");
/* harmony import */ var _setClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClassName */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/setClassName.js");


function removeClass(el, ...classNames) {
  const name = classNames;
  if (typeof el.classList !== 'undefined') {
    name.forEach(cls => {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    const regex = new RegExp(`(^| )${name.join('|')}( |$)`, 'gi');
    const className = (0,_getClassName__WEBPACK_IMPORTED_MODULE_0__["default"])(el).replace(regex, ' ');
    (0,_setClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(el, className);
  }
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/setClassName.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/setClassName.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setClassName)
/* harmony export */ });
function setClassName(el, className) {
  el.setAttribute('class', className);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/traverseToParentWithAttr.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/traverseToParentWithAttr.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ traverseToParentWithAttr)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js");

function traverseToParentWithAttr(element, attribute) {
  let parent = element;
  let value = element.getAttribute(attribute);
  while (!(0,_is__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
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
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/emitter.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/emitter.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/index.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/index.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/isFunction.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/isFunction.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/isFunction.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(f) {
  return typeof f === 'function';
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js"
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/index.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/currency/index.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/date/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/dom/index.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/function/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/index.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/index.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/index.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ajax */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/ajax.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emitter */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/emitter.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validate */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/validate.js");












const {
  addClass,
  createElement,
  destroyElement,
  elementFromString,
  findByClassName,
  getClassName,
  getParentAttribute,
  hasClass,
  isInside,
  removeClass,
  setClassName,
  traverseToParentWithAttr
} = _dom__WEBPACK_IMPORTED_MODULE_3__["default"];
const {
  isNaNPolyfill,
  isNumeric
} = _math__WEBPACK_IMPORTED_MODULE_5__["default"];
const {
  capitalizeObj,
  isObject,
  merge,
  pick,
  serialize,
  traverseObj
} = _object__WEBPACK_IMPORTED_MODULE_6__["default"];
const {
  dashToCapital,
  isString,
  toUnderscore,
  underscoreToCapital
} = _string__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // array
  isArray: _array__WEBPACK_IMPORTED_MODULE_0__["default"],
  // currency
  currencyFormatter: _currency__WEBPACK_IMPORTED_MODULE_1__["default"],
  // date
  monthLength: _date__WEBPACK_IMPORTED_MODULE_2__["default"],
  // dom
  addClass,
  createElement,
  destroyElement,
  elementFromString,
  findByClassName,
  getClassName,
  getParentAttribute,
  hasClass,
  isInside,
  removeClass,
  setClassName,
  traverseToParentWithAttr,
  // function
  isFunction: _function__WEBPACK_IMPORTED_MODULE_4__["default"],
  // math
  isNaNPolyfill,
  isNumeric,
  // object
  capitalizeObj,
  isObject,
  merge,
  pick,
  serialize,
  traverseObj,
  // string
  dashToCapital,
  isString,
  toUnderscore,
  underscoreToCapital,
  // ajax
  ajax: _ajax__WEBPACK_IMPORTED_MODULE_8__["default"],
  // emitter
  Emitter: _emitter__WEBPACK_IMPORTED_MODULE_9__["default"],
  // is
  is: _is__WEBPACK_IMPORTED_MODULE_10__["default"],
  // validate
  validate: _validate__WEBPACK_IMPORTED_MODULE_11__["default"]
});

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ is)
/* harmony export */ });
/* harmony import */ var _math_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/isNaNPolyfill */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNaNPolyfill.js");

function is(o) {
  return typeof o !== 'undefined' && o !== null && !(0,_math_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(o);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/index.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/index.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNaNPolyfill */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNaNPolyfill.js");
/* harmony import */ var _isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumeric */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNumeric.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isNaNPolyfill: _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"],
  isNumeric: _isNumeric__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNaNPolyfill.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNaNPolyfill.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNaNPolyfill)
/* harmony export */ });
function isNaNPolyfill(value) {
  return typeof value === 'number' && Number.isNaN(value);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNumeric.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNumeric.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNaNPolyfill */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNaNPolyfill.js");
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array/isArray */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/isArray.js");


function isNumeric(n) {
  return !(0,_array_isArray__WEBPACK_IMPORTED_MODULE_1__["default"])(n) && !(0,_isNaNPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(n, 10));
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/capitalizeObj.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/capitalizeObj.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalizeObj)
/* harmony export */ });
/* harmony import */ var _traverseObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverseObj */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/traverseObj.js");
/* harmony import */ var _string_dashToCapital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/dashToCapital */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/dashToCapital.js");
/* harmony import */ var _string_underscoreToCapital__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/underscoreToCapital */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/underscoreToCapital.js");



function capitalizeObj(obj) {
  const object = (0,_traverseObj__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, _string_dashToCapital__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const newObj = (0,_traverseObj__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _string_underscoreToCapital__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return newObj;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/index.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/index.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _capitalizeObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizeObj */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/capitalizeObj.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/merge.js");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/pick.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialize */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/serialize.js");
/* harmony import */ var _traverseObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traverseObj */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/traverseObj.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  capitalizeObj: _capitalizeObj__WEBPACK_IMPORTED_MODULE_0__["default"],
  isObject: _isObject__WEBPACK_IMPORTED_MODULE_1__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_2__["default"],
  pick: _pick__WEBPACK_IMPORTED_MODULE_3__["default"],
  serialize: _serialize__WEBPACK_IMPORTED_MODULE_4__["default"],
  traverseObj: _traverseObj__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObject)
/* harmony export */ });
const {
  prototype: {
    toString
  }
} = Object;
function isObject(o) {
  return toString.call(o) === '[object Object]';
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/merge.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/merge.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js");

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
function merge(obj1, obj2, isDeep) {
  const obj3 = {};
  keys(obj1).forEach(i => {
    if (isDeep && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(obj1[i])) {
      obj3[i] = merge(obj1[i], {}, true);
    } else {
      obj3[i] = obj1[i];
    }
  });
  keys(obj2).forEach(i => {
    if (isDeep && (0,_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(obj2[i])) {
      obj3[i] = merge(obj3[i] || {}, obj2[i], true);
    } else {
      obj3[i] = obj2[i];
    }
  });
  return obj3;
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/pick.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/pick.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pick)
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
function pick(obj, ...args) {
  return args.reduce((i, t) => {
    const pickedObj = i;
    pickedObj[t] = obj[t];
    return pickedObj;
  }, {});
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/serialize.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/serialize.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ serialize)
/* harmony export */ });
const {
  keys
} = Object;
function serialize(obj, transform) {
  const component = keys(obj).map(p => `${transform(encodeURIComponent(p))}=${encodeURIComponent(obj[p])}`);
  return component.join('&');
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/traverseObj.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/traverseObj.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ traverseObj)
/* harmony export */ });
/* harmony import */ var _array_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/isArray */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/array/isArray.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/object/isObject.js");


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
function traverseObj(obj, fnKey = false, fnValue = false) {
  if (!(0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) return obj;
  return keys(obj).reduce((curr, next) => {
    let nextProperty = obj[next];
    const o = curr;
    if ((0,_array_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextProperty)) {
      nextProperty = nextProperty.map(i => traverseObj(i, fnKey, fnValue));
    }
    if (fnValue) {
      o[fnKey ? fnKey(next) : next] = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(nextProperty) ? traverseObj(nextProperty, fnKey, fnValue) : fnValue(nextProperty, next);
    } else {
      o[fnKey ? fnKey(next) : next] = (0,_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(nextProperty) ? traverseObj(nextProperty, fnKey) : nextProperty;
    }
    return o;
  }, {});
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/dashToCapital.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/dashToCapital.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dashToCapital)
/* harmony export */ });
function dashToCapital(str) {
  return str.replace(/-([a-z])/ig, (match, letter) => letter.toUpperCase());
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/index.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/index.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashToCapital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashToCapital */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/dashToCapital.js");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/isString.js");
/* harmony import */ var _toUnderscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUnderscore */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/toUnderscore.js");
/* harmony import */ var _underscoreToCapital__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./underscoreToCapital */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/underscoreToCapital.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  dashToCapital: _dashToCapital__WEBPACK_IMPORTED_MODULE_0__["default"],
  isString: _isString__WEBPACK_IMPORTED_MODULE_1__["default"],
  toUnderscore: _toUnderscore__WEBPACK_IMPORTED_MODULE_2__["default"],
  underscoreToCapital: _underscoreToCapital__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/isString.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/isString.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isString)
/* harmony export */ });
function isString(f) {
  return typeof f === 'string';
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/toUnderscore.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/toUnderscore.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toUnderscore)
/* harmony export */ });
function toUnderscore(str) {
  return str.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`);
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/underscoreToCapital.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/string/underscoreToCapital.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ underscoreToCapital)
/* harmony export */ });
function underscoreToCapital(str) {
  return str.replace(/_([a-z])/ig, (match, letter) => letter.toUpperCase());
}

/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/validate.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/validate.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/is.js");
/* harmony import */ var _math_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/isNumeric */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/math/isNumeric.js");



// Validations
const validate = {
  isBlank(o) {
    return (0,_is__WEBPACK_IMPORTED_MODULE_0__["default"])(o);
  },
  isNumeric(o) {
    return (0,_math_isNumeric__WEBPACK_IMPORTED_MODULE_1__["default"])(o);
  },
  isEmail(o) {
    return typeof o === 'string' && (0,_is__WEBPACK_IMPORTED_MODULE_0__["default"])(o.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/));
  },
  isBoundedBy(o, min, max) {
    return typeof o === 'number' && o >= min && o <= max;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ },

/***/ "./src/calendar-tree.js"
/*!******************************!*\
  !*** ./src/calendar-tree.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarTree)
/* harmony export */ });
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget-utils */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js");

const {
  is,
  merge,
  monthLength,
  isString
} = widget_utils__WEBPACK_IMPORTED_MODULE_0__["default"];

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
const parseISOString = (str /* yyyy-mm-dd */) => {
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
      this.tree = merge(this.tree || {}, obj, true);
    }
    return this;
  }

  /**
   * select range from the tree, returns array items
   * start date is ALWAYS < then end date , as we are selecting time range in days.
   *
   * @param {Array} start e.g. [2016, 0, 1]
   * @param {Array} end [2016, 1, 3]
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
        [a[0], a[1]] = [end[0], 0];
      }

      // now we are at the same year and have the case if end month > start month
      // then select everything between those months
      if (end[1] > a[1]) {
        // e.g. start 20 October end 20 December, select full November
        range = range.concat(this.selectMonthsInYear(a[0], a[1], end[1] - 1));
        a[1] = end;
      }

      // the missing part is days in end selection month
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
      return m.slice(startDay - 1, endDay);
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
      const filterValids = range.filter(cell => this.validateCell(cell));
      isValid = filterValids.length == range.length;
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
    if (!(isString(maps.availability) || isString(maps.nightly_rates) || isString(maps.minimum_stays))) {
      return null;
    }
    const avail = maps.availability.split('').map(parseFloat);
    const rates = maps.nightly_rates.split(',').map(parseFloat);
    const minMap = maps.minimum_stays.split(',').map(parseFloat);
    let day = 1;
    let {
      year,
      month,
      date: dayShift
    } = parseISOString(mapStartAt);

    // trick to add extra unavailable date for proper calculations of check-out dates
    if (avail[avail.length - 1] === 0) {
      avail.push(1);
    }
    let previousDate = {};
    return avail.reduce((curr, state, index, arr) => {
      const length = monthLength(year, month);
      const tree = curr;
      const minStay = minMap[index];
      const rate = rates[index];
      const isAvailable = state === 0;
      const prevAvailable = arr[index - 1] === 0;
      const isMorningBlocked = isAvailable && !prevAvailable ? true : null;
      const isAvailableOut = isMorningBlocked ? true : null;
      if (!tree[year]) {
        tree[year] = {};
      }
      if (!tree[year][month]) {
        tree[year][month] = {};
      }
      if (dayShift) {
        day = dayShift;
        dayShift = null;
      }

      // if minStay > available days in future
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
        isAvailableOut
      };
      try {
        if (prevAvailable && !isAvailable) {
          tree[previousDate.year][previousDate.month][previousDate.day].isAvailableOut = true;
          tree[year][month][day].isMorningBlocked = false;
        }
      } catch (e) {
        // continue
      }
      previousDate = {
        year,
        month,
        day
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
    const dayData = this.getDay(year, month, day);
    return dayData ? dayData[property] : undefined;
  }
  getDay(year, month, day) {
    if (!this.map) {
      return null;
    }
    const yearData = this.map[year];
    if (!yearData) {
      return null;
    }
    const monthData = yearData[month];
    if (!monthData) {
      return null;
    }
    return monthData[day] || null;
  }
  isDayDisabled(year, month, day) {
    const dayData = this.getDay(year, month, day);
    return !(dayData && dayData.isAvailable);
  }
}

/***/ },

/***/ "./src/calendar.js"
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget-utils */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _calendar_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-tree */ "./src/calendar-tree.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales */ "./src/locales.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! strtime */ "./node_modules/.pnpm/strtime@1.1.2/node_modules/strtime/dist/strtime.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(strtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/calendar.scss */ "./src/styles/calendar.scss");
/* harmony import */ var widget_utils_src_styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! widget-utils/src/styles/reset.scss */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss");
/* global Node, document, window, console, require, fetch, setTimeout */










const {
  addClass,
  removeClass,
  hasClass,
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
  isInside,
  currencyFormatter
} = widget_utils__WEBPACK_IMPORTED_MODULE_0__["default"];
class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name = _config__WEBPACK_IMPORTED_MODULE_3__["default"].name;
    this.VERSION = (__webpack_require__(/*! ../package.json */ "./package.json").version);
    this.CSS_PREFIX = _config__WEBPACK_IMPORTED_MODULE_3__["default"].cssPrefix;
    if (isObject(opts)) {
      if (!opts.el) {
        this.logger('el must be HTML element', 'error');
        return;
      }
      const configDataset = merge(_config__WEBPACK_IMPORTED_MODULE_3__["default"], opts.el.dataset);
      this.opts = merge(configDataset, opts);
      this.opts = traverseObj(this.opts, a => a, b => {
        if (b === 'true' || b === 'false') {
          return b === 'true';
        }
        if (isNumeric(b)) {
          return parseInt(b, 10);
        }
        return b;
      });
      this.opts.lang = this.opts.lang && this.opts.lang in _locales__WEBPACK_IMPORTED_MODULE_4__["default"] ? this.opts.lang : 'en-US';
      this.locale = _locales__WEBPACK_IMPORTED_MODULE_4__["default"][this.opts.lang];
      this.format = this.opts.formatDate || this.locale.formatDate || '%m/%d/%Y';
      this.opts.startOfWeek = this.opts.startOfWeek || this.locale.startOfWeek;
      let {
        currentDate
      } = this.opts;
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const day = currentDate.getDate();
      this.opts.currentDate = [year, month, day];
      if (!this.opts.yearStart) {
        this.opts.yearStart = year;
      }
      if (!this.opts.monthStart) {
        this.opts.monthStart = month;
      }
      this.normalizeResponsiveOptions();
      if (this.opts.isDropDown) {
        this.initCalendarDrop();
      } else {
        this.el = opts.el;
      }
    }
    // TODO: rename daysTree
    this.dom = {};
    // TODO: rename to calendarTree or bookingsTree
    this.cTree = new _calendar_tree__WEBPACK_IMPORTED_MODULE_2__["default"](_utils__WEBPACK_IMPORTED_MODULE_7__.validationOfCell, {});
    // TODO: rename to bookingsData & addData
    if (isObject(maps)) {
      this.cTree.addMaps(maps, maps.start_date || (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(this.opts.currentDate));
    }

    // selection and highlights
    this.isSelecting = false;
    this.highlightedBounds = [];
    this.hasValidRange = true;

    // TODO: rename isReverseSelectable to selectionDefaultDirection - should be LTR or RTL
    // user selects end date first
    this.isReverseSelectable = this.opts.isReverseSelectable;
    this.displayMonths = this.opts.displayMonths;
    this.mediaQueryList = null;
    this.onMediaQueryChange = null;
    this.onWindowResize = null;
    this.activeYearPicker = null;
    this.onDocumentClick = null;
    this.onDocumentKeydown = null;
    this.init();
  }
  init() {
    addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].calendar, widget_utils_src_styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__["default"].reset);
    if (!this.el.dataset.theme) {
      this.el.dataset.theme = this.opts.theme;
    }
    this.el.setAttribute('role', 'region');
    this.el.setAttribute('aria-label', this.locale.labels.calendar);
    this.dom.sprite = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.svgSprite("".concat(this.CSS_PREFIX, "ChevronDown"))));
    this.dom.pagination = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.pagination()));
    this.dom.mobileWeekdays = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.mobileWeekdays(this.headerTemplateString())));
    this.dom.monthsWrapper = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.main(this.locale.labels.months)));
    this.dom.liveRegion = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.liveRegion()));
    this.dom.yearPickerPanel = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.sharedYearPickerPanel({
      closeLabel: this.locale.labels.close || 'Close',
      previousLabel: this.locale.labels.previousYears || 'Previous years',
      nextLabel: this.locale.labels.nextYears || 'Next years'
    })));
    this.dom.forward = this.dom.pagination.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.forward(this.locale.labels.monthsForward)));
    this.dom.back = this.dom.pagination.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.back(this.locale.labels.monthsBackward)));
    this.addCaptionPickerEvents();
    this.addViewportEvents();
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);
    this.addBtnsEvents();
    if (this.opts.selectable && this.opts.elStartAt && this.opts.elEndAt) {
      if (!this.opts.rentalId) {
        this.inputsToValues();
      }
      this.on('maps-loaded', () => this.inputsToValues());
      this.opts.elStartAt.addEventListener('input', () => this.inputsToValues());
      this.opts.elEndAt.addEventListener('input', () => this.inputsToValues());
    }
    if (this.opts.rentalId && !this.opts.isDropDown) {
      this.loadMaps(this.opts.rentalId);
    }
    this.el.dataset.selectable = this.opts.selectable;
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
  normalizeResponsiveOptions() {
    const fallbackDisplayMonths = this.toPositiveInt(this.opts.displayMonths, 2);
    this.opts.displayMonths = fallbackDisplayMonths;
    this.opts.displayMonthsMobile = this.toPositiveInt(this.opts.displayMonthsMobile, fallbackDisplayMonths);
    this.opts.mobileBreakpoint = this.toNonNegativeInt(this.opts.mobileBreakpoint, 767);
  }
  toPositiveInt(value, fallback) {
    if (value === null || value === undefined || value === '') {
      return fallback;
    }
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed) || parsed < 1) {
      return fallback;
    }
    return parsed;
  }
  toNonNegativeInt(value, fallback) {
    if (value === null || value === undefined || value === '') {
      return fallback;
    }
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed) || parsed < 0) {
      return fallback;
    }
    return parsed;
  }
  isMobileViewport() {
    if (this.mediaQueryList) {
      return this.mediaQueryList.matches;
    }
    const viewportWidth = window && typeof window.innerWidth === 'number' ? window.innerWidth : this.opts.mobileBreakpoint + 1;
    return viewportWidth <= this.opts.mobileBreakpoint;
  }
  applyViewportMode(isMobileViewport) {
    if (!this.el) {
      return;
    }
    if (isMobileViewport) {
      this.el.dataset.viewport = 'mobile';
      addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mobileMode);
      if (this.opts.showPaginationMobile) {
        addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mobilePaginationEnabled);
      } else {
        removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mobilePaginationEnabled);
      }
    } else {
      this.el.dataset.viewport = 'desktop';
      removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mobileMode);
      removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].mobilePaginationEnabled);
    }
  }
  getDisplayMonthsForViewport() {
    const isMobileViewport = this.isMobileViewport();
    this.applyViewportMode(isMobileViewport);
    if (isMobileViewport) {
      return this.opts.displayMonthsMobile;
    }
    return this.opts.displayMonths;
  }
  syncDisplayMonthsForViewport() {
    const nextDisplayMonths = this.getDisplayMonthsForViewport();
    const hasChanged = this.displayMonths !== nextDisplayMonths;
    this.displayMonths = nextDisplayMonths;
    return hasChanged;
  }
  handleViewportChange() {
    if (this.syncDisplayMonthsForViewport()) {
      this.destroyMonths();
      this.renderMonths(this.yearStart, this.monthStart);
    }
  }
  addViewportEvents() {
    this.removeViewportEvents();
    if (window.matchMedia) {
      this.mediaQueryList = window.matchMedia("(max-width: ".concat(this.opts.mobileBreakpoint, "px)"));
      this.onMediaQueryChange = () => this.handleViewportChange();
      if (this.mediaQueryList.addEventListener) {
        this.mediaQueryList.addEventListener('change', this.onMediaQueryChange);
      } else if (this.mediaQueryList.addListener) {
        this.mediaQueryList.addListener(this.onMediaQueryChange);
      }
      return;
    }
    this.onWindowResize = () => this.handleViewportChange();
    window.addEventListener('resize', this.onWindowResize);
  }
  removeViewportEvents() {
    if (this.mediaQueryList && this.onMediaQueryChange) {
      if (this.mediaQueryList.removeEventListener) {
        this.mediaQueryList.removeEventListener('change', this.onMediaQueryChange);
      } else if (this.mediaQueryList.removeListener) {
        this.mediaQueryList.removeListener(this.onMediaQueryChange);
      }
    }
    this.mediaQueryList = null;
    this.onMediaQueryChange = null;
    if (this.onWindowResize) {
      window.removeEventListener('resize', this.onWindowResize);
      this.onWindowResize = null;
    }
  }
  renderMonths(yearStart, monthStart) {
    this.syncDisplayMonthsForViewport();
    const headerTemplate = this.headerTemplateString();
    // construct dom tree
    const {
      tree,
      yearEnd,
      monthEnd,
      months
    } = this.createTree(yearStart, monthStart, this.displayMonths, headerTemplate);
    this.cTree.addTree(tree);
    this.monthStart = monthStart;
    this.yearStart = yearStart;
    this.monthEnd = monthEnd;
    this.yearEnd = yearEnd;
    if (this.opts.selectable) {
      addClass(this.el, this.isReverseSelectable ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].reversed : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].direct);
      removeClass(this.el, this.isReverseSelectable ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].direct : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].reversed);
    }
    this.dom.months = months;
    const fragment = document.createDocumentFragment();
    this.dom.months.forEach(m => {
      if (this.opts.selectable) {
        this.addMonthEvents(m);
      }
      fragment.appendChild(m);
    });
    this.dom.monthsWrapper.appendChild(fragment);
    if (this.opts.selectable) {
      addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].actionsEnabled);
    }
    if (!this.opts.enableAllDays) {
      this.disableBackBtn();
    }
    this.recoverSelections();
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
      const startDate = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(this.yearStart, this.monthStart, 1);
      let {
        currentDate
      } = this.opts;
      currentDate = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(currentDate[0], currentDate[1], 1);
      this.dom.back.disabled = startDate <= currentDate;
    }
  }
  toggleLoading() {
    if (!hasClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loading)) {
      addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loading);
      this.emit('loading-show');
    } else {
      removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loading);
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
      const {
        year: yearToRender,
        month: monthToRender
      } = this.shiftMonth(this.yearStart, this.monthStart, this.opts.monthsPaginationJump || this.displayMonths);
      this.renderMonths(yearToRender, monthToRender);
      e.preventDefault();
    });
    this.dom.back.addEventListener('click', e => {
      this.destroyMonths();
      const {
        year: yearToRender,
        month: monthToRender
      } = this.shiftMonth(this.yearStart, this.monthStart, -(this.opts.monthsPaginationJump || this.displayMonths));
      this.renderMonths(yearToRender, monthToRender);
      e.preventDefault();
    });
  }
  addCaptionPickerEvents() {
    this.onDocumentClick = e => {
      const clickedInsideCalendar = this.el.contains(e.target);
      const trigger = traverseToParentWithAttr(e.target, 'data-year-picker-trigger').parent;
      const yearOption = traverseToParentWithAttr(e.target, 'data-year-option');
      const yearPager = traverseToParentWithAttr(e.target, 'data-year-page-offset');
      const closePicker = traverseToParentWithAttr(e.target, 'data-year-picker-close').parent;
      if (!clickedInsideCalendar) {
        if (this.activeYearPicker) {
          this.closeYearPicker();
        }
        return;
      }
      if (closePicker) {
        this.closeYearPicker({
          focusTrigger: e.detail === 0
        });
        return;
      }
      if (yearOption.parent && yearOption.value) {
        const selectedYear = parseInt(yearOption.value, 10);
        const monthElement = this.activeYearPicker;
        this.closeYearPicker();
        if (monthElement) {
          this.renderFromSlot(monthElement, selectedYear, monthElement.month);
        }
        return;
      }
      if (yearPager.parent && yearPager.value) {
        const monthElement = this.activeYearPicker;
        const nextYearPageStart = parseInt(this.dom.yearPickerPanel.dataset.yearPageStart || monthElement.year, 10) + parseInt(yearPager.value, 10);
        if (monthElement) {
          this.renderYearGrid(monthElement, nextYearPageStart);
        }
        return;
      }
      if (trigger) {
        const monthElement = trigger.closest('.js-month');
        if (this.activeYearPicker === monthElement) {
          this.closeYearPicker({
            focusTrigger: e.detail === 0
          });
        } else {
          this.openYearPicker(monthElement);
        }
        return;
      }
      if (this.activeYearPicker && !this.activeYearPicker.contains(e.target) && !this.dom.yearPickerPanel.contains(e.target)) {
        this.closeYearPicker();
      }
    };
    this.onDocumentKeydown = e => {
      if (e.key === 'Escape' && this.activeYearPicker) {
        this.closeYearPicker({
          focusTrigger: true
        });
        return;
      }

      // Arrow key navigation within year picker grid (3 columns)
      if (this.activeYearPicker && this.dom.yearPickerPanel) {
        this.handleYearPickerKeydown(e);
      }
    };
    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('keydown', this.onDocumentKeydown);
  }
  openYearPicker(monthElement) {
    if (!monthElement || !this.el.contains(monthElement)) {
      return;
    }
    this.closeYearPicker();
    const trigger = monthElement.querySelector('[data-year-picker-trigger]');
    if (!this.dom.yearPickerPanel || !trigger) {
      return;
    }
    this.positionYearPickerPanel();
    this.dom.yearPickerPanel.hidden = false;
    this.dom.yearPickerPanel.setAttribute('role', 'dialog');
    this.dom.yearPickerPanel.setAttribute('aria-modal', 'true');
    this.dom.yearPickerPanel.setAttribute('aria-label', this.locale.labels.calendar);
    trigger.setAttribute('aria-expanded', 'true');
    addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].yearPickerOpen);
    this.activeYearPicker = monthElement;
    this.renderYearGrid(monthElement, monthElement.year - 5);

    // Focus the selected year button, or the first year button
    const selectedBtn = this.dom.yearPickerPanel.querySelector('[data-selected-year]');
    const firstBtn = this.dom.yearPickerPanel.querySelector('[data-year-option]');
    if (selectedBtn) {
      selectedBtn.focus();
    } else if (firstBtn) {
      firstBtn.focus();
    }
  }
  closeYearPicker() {
    let {
      focusTrigger = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!this.activeYearPicker) {
      return;
    }
    const trigger = this.activeYearPicker.querySelector('[data-year-picker-trigger]');
    if (this.dom.yearPickerPanel) {
      this.dom.yearPickerPanel.hidden = true;
    }
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      if (focusTrigger) {
        trigger.focus();
      }
    }
    removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].yearPickerOpen);
    this.activeYearPicker = null;
  }
  handleYearPickerKeydown(e) {
    const panel = this.dom.yearPickerPanel;
    const focused = panel.querySelector(':focus');
    if (!focused) {
      return;
    }
    const key = e.key || e.keyCode;
    const yearButtons = Array.from(panel.querySelectorAll('[data-year-option]'));
    const currentIndex = yearButtons.indexOf(focused);

    // Arrow navigation within the 3-column year grid
    const cols = 3;
    const arrowOffsets = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -cols,
      ArrowDown: cols,
      37: -1,
      39: 1,
      38: -cols,
      40: cols
    };
    if (arrowOffsets[key] !== undefined && currentIndex !== -1) {
      e.preventDefault();
      const targetIndex = currentIndex + arrowOffsets[key];
      if (targetIndex >= 0 && targetIndex < yearButtons.length) {
        yearButtons[targetIndex].focus();
      }
      return;
    }

    // Focus trap: Tab cycles within the year picker panel
    if (key === 'Tab' || key === 9) {
      const focusable = Array.from(panel.querySelectorAll('button:not([hidden]):not([disabled])'));
      if (focusable.length === 0) {
        return;
      }
      const [firstEl] = focusable;
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey && focused === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && focused === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
  renderYearGrid(monthElement, yearPageStart) {
    const panel = this.dom.yearPickerPanel;
    const grid = this.dom.yearPickerPanel.querySelector('[data-year-grid]');
    const previousPager = this.dom.yearPickerPanel.querySelector('[data-year-page-offset="-12"]');
    const nextPager = this.dom.yearPickerPanel.querySelector('[data-year-page-offset="12"]');
    if (!panel || !grid) {
      return;
    }
    const minimumYear = this.minimumSelectableYear();
    const boundedYearPageStart = minimumYear === null ? yearPageStart : Math.max(yearPageStart, minimumYear);
    const years = [];
    for (let year = boundedYearPageStart; year < boundedYearPageStart + 12; year += 1) {
      years.push(_templates__WEBPACK_IMPORTED_MODULE_1__.yearOption(year, monthElement.year));
    }
    panel.dataset.yearPageStart = boundedYearPageStart;
    grid.innerHTML = years.join('');
    if (previousPager) {
      const shouldDisablePreviousPager = minimumYear !== null && boundedYearPageStart <= minimumYear;
      previousPager.hidden = false;
      previousPager.disabled = shouldDisablePreviousPager;
    }
    if (nextPager) {
      nextPager.hidden = false;
      nextPager.disabled = false;
    }
  }
  positionYearPickerPanel() {
    if (!this.dom.yearPickerPanel) {
      return;
    }
    const top = Math.max(this.el.scrollTop, 0);
    const visibleHeight = this.el.clientHeight || Math.round(this.el.getBoundingClientRect().height);
    this.dom.yearPickerPanel.style.top = "".concat(top, "px");
    this.dom.yearPickerPanel.style.left = '0';
    this.dom.yearPickerPanel.style.right = '0';
    this.dom.yearPickerPanel.style.bottom = 'auto';
    this.dom.yearPickerPanel.style.height = visibleHeight ? "".concat(visibleHeight, "px") : '100%';
  }
  renderFromSlot(monthElement, year, month) {
    this.destroyMonths();
    let {
      year: yearStart,
      month: monthStart
    } = this.shiftMonth(year, month, -monthElement.slotIndex);
    ({
      year: yearStart,
      month: monthStart
    } = this.clampVisibleMonthStart(yearStart, monthStart));
    this.renderMonths(yearStart, monthStart);
  }
  addMonthEvents(el) {
    const selectionHandler = e => {
      const isEndFirst = this.isReverseSelectable;
      const {
        value,
        parent: cell
      } = traverseToParentWithAttr(e.target, 'data-value');
      if (is(value) && cell) {
        const dateValue = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];
        const dayAlreadySelected = this.isSelecting && (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCurrent)(isEndFirst ? this.selectionEnd : this.selectionStart, dateValue);
        const rangeSelected = !this.isSelecting && this.selectionEnd && this.selectionStart;
        const isPastToday = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(dateValue, this.opts.currentDate);
        if (dayAlreadySelected || rangeSelected || isPastToday) {
          this.resetSelection();
        }
        if (!dayAlreadySelected && !isPastToday && !this.opts.enableAllDays) {
          if (isEndFirst) {
            this.endDateFirstAction(dateValue, cell);
          } else {
            this.startDateFirstAction(dateValue, cell);
          }
        } else {
          removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingDirect, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingReversed);
          delete cell.dataset.highlighted;
        }
        if (this.selectionEnd && this.selectionStart && this.hasValidRange) {
          this.completeSelection(isEndFirst, dateValue, cell);
          if (this.opts.isDropDown && this.calDrop) {
            this.closeDrop(null, true);
          }
        }
      }
    };
    const mouseoverHandler = e => {
      const {
        value,
        parent: cell
      } = traverseToParentWithAttr(e.target, 'data-value');
      if (is(value) && cell) {
        const current = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];
        const isPastToday = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(current, this.opts.currentDate);
        const isEndFirst = this.isReverseSelectable;
        if (isPastToday && !this.opts.enableAllDays) {
          return;
        }
        if (this.isSelecting) {
          this.removeHighlight();
          const cells = this.el.querySelectorAll('[data-value]');
          cells.forEach(el => {
            delete el.dataset.hovered;
            delete el.dataset.hoveredOffset;
          });

          // reverse selection direction
          if (isEndFirst && this.selectionEnd && !(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCurrent)(current, this.selectionEnd)) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(this.selectionEnd, current)) {
              const cellA = this.cellB;
              const {
                selectionEnd
              } = this;
              this.changeHighlightDirection(false, selectionEnd);
              this.startDateFirstAction(this.selectionEnd, cellA);
            }
          } else if (!isEndFirst && this.selectionStart && !(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCurrent)(current, this.selectionStart)) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(current, this.selectionStart)) {
              const cellB = this.cellA;
              const {
                selectionStart
              } = this;
              this.changeHighlightDirection(true, selectionStart);
              this.endDateFirstAction(this.selectionStart, cellB);
            }
          }
          if (this.isReverseSelectable) {
            this.highLightRange(current, this.selectionEnd);
          } else {
            this.highLightRange(this.selectionStart, current);
          }
        } else {
          this.changeHighlightDirection(this.opts.isReverseSelectable);
          const isDisabledLeft = cell.dataset.disabled === 'left';
          const isDisabledCenter = cell.dataset.disabled === 'center';
          const isDisabledRight = cell.dataset.disabled === 'right';
          let isInvalid = '';
          if (isEndFirst && isDisabledRight || isDisabledCenter || !isEndFirst && isDisabledLeft) {
            isInvalid = 'invalid';
          }
          const cells = this.el.querySelectorAll('[data-value]');
          let offsetCell;
          cells.forEach((el, index) => {
            delete el.dataset.hovered;
            delete el.dataset.hoveredOffset;
            if (el === cell) {
              offsetCell = this.opts.isReverseSelectable ? cells[index - 1] : cells[index + 1];
            }
          });
          if (is(offsetCell)) {
            offsetCell.dataset.hoveredOffset = '';
          }
          cell.dataset.hovered = isInvalid;
        }
      }
    };
    el.addEventListener('keydown', e => {
      const key = e.key || e.keyCode;
      if (key === 'Enter' || key === 13) {
        selectionHandler(e);
      }

      // select dates with Tab key
      if (key === 'Tab' || key === 9) {
        if (this.isSelecting) {
          // magic trick
          setTimeout(() => {
            const cells = this.el.querySelectorAll('[data-value]');
            const cell = this.el.querySelector('[data-value]:focus');
            const index = [].indexOf.call(cells, cell);
            if (index === -1) {
              return;
            }
            mouseoverHandler({
              target: cells[index]
            });
          });
        }
      }
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        if (this.isSelecting) {
          this.resetSelection();
        }
      }

      // Arrow key grid navigation
      this.handleArrowNavigation(e, key, mouseoverHandler);
    });
    el.addEventListener('click', selectionHandler);
    el.addEventListener('mouseover', mouseoverHandler);
    el.body.addEventListener('mouseout', e => {
      const cells = this.el.querySelectorAll('[data-value]');
      cells.forEach(el => {
        delete el.dataset.hovered;
        delete el.dataset.hoveredOffset;
      });

      /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
      // simulate 'mouseleave'
      if (!e.relatedTarget || e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
        if (this.isSelecting) {
          this.removeHighlight();
        }
      }
    });
  }
  changeHighlightDirection(isReverse) {
    let dateArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.isReverseSelectable = isReverse;
    if (dateArray) {
      this.resetSelection();
      this.selectionStart = isReverse ? dateArray : null;
      this.selectionEnd = isReverse ? null : dateArray;
    } else {
      this.selectionStart = this.selectionEnd;
      this.selectionEnd = this.selectionStart;
    }
    if (this.opts.selectable) {
      addClass(this.el, isReverse ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].reversed : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].direct);
      removeClass(this.el, isReverse ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].direct : _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].reversed);
    }
  }
  startDateFirstAction(dateValue, cell) {
    if (this.isSelecting && (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(this.selectionStart, dateValue)) {
      this.selectEndAction(dateValue, cell);
      const fn = () => {
        removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingDirect);
        cell.removeEventListener('mouseout', fn);
      };
      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      this.removeHighlight();
      addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingDirect);
      this.isSelecting = true;
      this.selectStartAction(dateValue, cell);
      cell.dataset.highlighted = 'left';
    }
  }
  endDateFirstAction(dateValue, cell) {
    if (this.isSelecting && (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(dateValue, this.selectionEnd)) {
      this.selectStartAction(dateValue, cell);
      const fn = () => {
        removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingReversed);
        cell.removeEventListener('mouseout', fn);
      };
      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      this.removeHighlight();
      addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].selectingReversed);
      this.isSelecting = true;
      this.selectEndAction(dateValue, cell);
      cell.dataset.highlighted = 'right';
    }
  }
  selectStartAction(dateValue, cell) {
    this.selectStart(dateValue, cell);
    this.switchInputFocus('end');
    if (this.hasValidRange) {
      const dateStr = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue), this.locale.formatDate, this.locale);
      const label = this.locale.labels.selectedStart || 'Start date: %date';
      this.announceLiveRegion(label.replace('%date', dateStr));
      this.emit('selection-start', (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue));
      if (isFunction(this.opts.onSelectStart)) {
        this.opts.onSelectStart((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue));
      }
    }
  }
  selectEndAction(dateValue, cell) {
    this.selectEnd(dateValue, cell);
    this.switchInputFocus('start');
    if (this.hasValidRange) {
      const dateStr = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue), this.locale.formatDate, this.locale);
      const label = this.locale.labels.selectedEnd || 'End date: %date';
      this.announceLiveRegion(label.replace('%date', dateStr));
      this.emit('selection-end', (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue));
      if (isFunction(this.opts.onSelectEnd)) {
        this.opts.onSelectEnd((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue, true), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue));
      }
    }
  }
  removeHighlight() {
    if (this.highlightedBounds.length > 0) {
      const {
        range
      } = this.selectRange(...this.highlightedBounds);
      range.map(cell => {
        delete cell.dataset.highlighted;
        delete cell.dataset.invalid;
      });
      this.destroyTooltip();
      this.hasValidRange = true;
      this.highlightedBounds = [];
    }
  }
  destroyTooltip() {
    if (this.tooltipPopper && isFunction(this.tooltipPopper.destroy)) {
      this.tooltipPopper.destroy();
      this.tooltipPopper = null;
    }
    if (is(this.dom.tooltip)) {
      // Remove aria-describedby from the cell linked to this tooltip
      const described = this.el.querySelector('[aria-describedby="calendar-tooltip"]');
      if (described) {
        described.removeAttribute('aria-describedby');
      }
      destroyElement(this.dom.tooltip);
    }
  }
  announceLiveRegion(message) {
    if (this.dom.liveRegion) {
      this.dom.liveRegion.textContent = message;
    }
  }
  handleArrowNavigation(e, key, mouseoverHandler) {
    const focusedCell = this.el.querySelector('[data-value]:focus') || (e.target && typeof e.target.closest === 'function' ? e.target.closest('[data-value]') : null);
    if (!focusedCell) {
      return;
    }
    const arrowKeys = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7,
      37: -1,
      39: 1,
      38: -7,
      40: 7
    };
    const homeEndKeys = {
      Home: 'home',
      End: 'end',
      36: 'home',
      35: 'end'
    };
    const pageKeys = {
      PageUp: -1,
      PageDown: 1,
      33: -1,
      34: 1
    };
    if (arrowKeys[key] !== undefined) {
      e.preventDefault();
      const cells = Array.from(this.el.querySelectorAll('[data-value]'));
      const currentIndex = cells.indexOf(focusedCell);
      const targetIndex = currentIndex + arrowKeys[key];
      if (targetIndex >= 0 && targetIndex < cells.length) {
        cells[targetIndex].focus();
        if (this.isSelecting) {
          mouseoverHandler({
            target: cells[targetIndex]
          });
        }
      }
    } else if (homeEndKeys[key]) {
      e.preventDefault();
      const row = focusedCell.closest('[role="row"]');
      if (row) {
        const rowCells = Array.from(row.querySelectorAll('[data-value]'));
        if (rowCells.length) {
          const target = homeEndKeys[key] === 'home' ? rowCells[0] : rowCells[rowCells.length - 1];
          target.focus();
          if (this.isSelecting) {
            mouseoverHandler({
              target
            });
          }
        }
      }
    } else if (pageKeys[key] !== undefined) {
      e.preventDefault();
      const dayValue = focusedCell.getAttribute('data-value');
      const focusedMonth = focusedCell.closest('.js-month');
      const originSlotIndex = focusedMonth ? focusedMonth.slotIndex : null;
      if (pageKeys[key] === 1) {
        this.dom.forward.click();
      } else {
        this.dom.back.click();
      }

      // After re-render, focus the same day number or last available cell
      setTimeout(() => {
        let targetMonth = null;
        let target = null;
        if (originSlotIndex !== null && this.dom.months) {
          targetMonth = this.dom.months.find(monthEl => monthEl.slotIndex === originSlotIndex) || null;
        }
        if (targetMonth) {
          target = targetMonth.querySelector("[data-value=\"".concat(dayValue, "\"]"));
          if (!target) {
            const monthCells = targetMonth.querySelectorAll('[data-value]');
            if (monthCells.length) {
              target = monthCells[monthCells.length - 1];
            }
          }
        }
        if (!target) {
          const newCells = this.el.querySelectorAll('[data-value]');
          for (let i = 0; i < newCells.length; i += 1) {
            if (newCells[i].getAttribute('data-value') === dayValue) {
              target = newCells[i];
              break;
            }
          }
          if (!target && newCells.length) {
            target = newCells[newCells.length - 1];
          }
        }
        if (target) {
          target.focus();
        }
      });
    }
  }

  /**
   * Highlights the range of cells between the start and end dates.
   * @public
   * @param {Array} start e.g. [2016, 0, 1]
   * @param {Array} end [2016, 1, 3]
   * @returns {boolean} - Whether the range is valid or not.
   */
  highLightRange(start, end) {
    const {
      range,
      isValid
    } = this.selectRange(start, end);
    const {
      opts
    } = this;
    let {
      minStay,
      maxStay
    } = opts;
    let invalidRangeMessage;
    if (isArray(range)) {
      if (opts.rentalId) {
        const rangeWithoutLast = range.slice(0, -1);
        if (!opts.allowShorterMinStaySelection) {
          // get the biggest minStay value in the range
          const cells = rangeWithoutLast.map(cell => cell.dataset.minStay || minStay);
          minStay = Math.max(...cells);
        }
        if (!opts.allowLongerMaxStaySelection) {
          // get the biggest maxStay value in the range
          const cells = rangeWithoutLast.map(cell => cell.dataset.maxStay || maxStay);
          maxStay = Math.max(...cells);
        }
      }

      // check that range is valid and longer than minStay and shorter than maxStay
      const hasValidDays = opts.rentalId ? isValid : true;
      const hasValidMinStay = range.length > minStay;
      const hasValidMaxStay = range.length < maxStay;
      this.hasValidRange = hasValidDays && hasValidMinStay && hasValidMaxStay;
      if (!hasValidMinStay) {
        invalidRangeMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.tFormatter)(minStay, this.locale.hasInvalidMinStay);
      }
      if (!hasValidMaxStay) {
        invalidRangeMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.tFormatter)(maxStay, this.locale.hasInvalidMaxStay);
      }
      if (!hasValidDays) {
        invalidRangeMessage = this.locale.hasInvalidDays;
      }
      range.map((cell, index) => {
        const left = index === 0;
        const right = index + 1 === range.length;
        if (this.hasValidRange) {
          if (left) {
            cell.dataset.highlighted = 'left';
          } else if (right) {
            cell.dataset.highlighted = 'right';
          } else {
            cell.dataset.highlighted = 'center';
          }
        } else {
          if (left) {
            cell.dataset.invalid = 'left';
          } else if (right) {
            cell.dataset.invalid = 'right';
          } else {
            cell.dataset.invalid = 'center';
          }
        }
        const tooltipPosition = this.isReverseSelectable ? left : right;
        if (tooltipPosition && this.el.contains(cell) && !this.hasValidRange) {
          this.dom.tooltip = this.el.appendChild(elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.tooltip));
          this.dom.tooltip.id = 'calendar-tooltip';
          this.dom.tooltip.querySelector('span').innerHTML = invalidRangeMessage;
          cell.setAttribute('aria-describedby', 'calendar-tooltip');
          this.logger("invalidRangeMessage: ".concat(invalidRangeMessage, " (").concat(start, " - ").concat(end, ")"), 'warn');
          this.tooltipPopper = (0,_positioning__WEBPACK_IMPORTED_MODULE_5__["default"])(cell, this.dom.tooltip, {
            placement: 'top',
            flip: false,
            offset: [0, 0]
          });
        }
        return cell;
      });
      this.highlightedBounds = [start, end];
    }
    return this.hasValidRange;
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
    this.selectionEnd = null;
    if (this.cellA) {
      this.cellA = null;
    }
    if (this.cellB) {
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

  /**
   * select range from the tree
   *
   * @param {Array} start e.g. [2016, 0, 1]
   * @param {Array} end [2016, 1, 3]
   * @returns {{range: Array, isValid: {Boolean}}}
   */
  selectRange(start, end) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(start, end)) {
      return this.cTree.selectRange(start, end);
    }
    return {
      range: null,
      isValid: false
    };
  }
  selectStart(dateValue, cell) {
    this.selectionStart = dateValue;
    if (cell) {
      this.cellA = cell;
    }
    this.valueToInput('start', dateValue);
  }
  selectEnd(dateValue, cell) {
    this.selectionEnd = dateValue;
    if (cell) {
      this.cellB = cell;
    }
    this.valueToInput('end', dateValue);
  }
  createTree(yearStart, monthStart, times, headerTemplate) {
    const months = [];
    const tree = {};
    let monthEnd = monthStart;
    let yearEnd = yearStart;
    for (let i = 0; i < times; i += 1) {
      const mDom = this.domMonth(yearEnd, monthEnd, headerTemplate, i);
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
  domMonth(year, month, headerTemplate) {
    let slotIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    const longMonthNames = this.locale.longMonthNames[month];
    const monthDom = elementFromString(_templates__WEBPACK_IMPORTED_MODULE_1__.month({
      label: longMonthNames,
      caption: this.captionTemplateString(year, month),
      header: headerTemplate,
      body: this.daysTemplateString(year, month)
    }));
    monthDom.body = monthDom.querySelector(".".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].body));
    monthDom.month = month;
    monthDom.year = year;
    monthDom.slotIndex = slotIndex;
    monthDom.dayElements = [].slice.call(monthDom.querySelectorAll('[data-value]'));
    return monthDom;
  }
  captionTemplateString(year, month) {
    return _templates__WEBPACK_IMPORTED_MODULE_1__.yearPicker({
      label: "".concat(this.locale.longMonthNames[month], " ").concat(year),
      chevronDownId: "".concat(this.CSS_PREFIX, "ChevronDown")
    });
  }
  minimumSelectableYear() {
    return this.shouldClampToCurrentDate() ? this.opts.currentDate[0] : null;
  }
  minimumSelectableMonth() {
    return this.shouldClampToCurrentDate() ? this.opts.currentDate[1] : null;
  }
  shouldClampToCurrentDate() {
    return this.opts.isBackDisabled && !this.opts.enableAllDays;
  }
  clampVisibleMonthStart(year, month) {
    const minimumYear = this.minimumSelectableYear();
    const minimumMonth = this.minimumSelectableMonth();
    if (minimumYear === null || minimumMonth === null) {
      return {
        year,
        month
      };
    }
    if (year < minimumYear || year === minimumYear && month < minimumMonth) {
      return {
        year: minimumYear,
        month: minimumMonth
      };
    }
    return {
      year,
      month
    };
  }
  shiftMonth(year, month, offset) {
    const normalizedMonth = month + offset;
    return {
      year: year + Math.floor(normalizedMonth / 12),
      month: (normalizedMonth % 12 + 12) % 12
    };
  }
  headerTemplateString() {
    // just to make life easier with start of the week calculation
    const header = [];
    const weekdaysLabelsExtended = this.locale.shortWeekdayNames.concat(this.locale.shortWeekdayNames);
    for (let i = 0; i < this.opts.daysPerWeek; i += 1) {
      header.push(_templates__WEBPACK_IMPORTED_MODULE_1__.weekDayLabel(weekdaysLabelsExtended[i + this.opts.startOfWeek]));
    }
    return header.join('');
  }
  daysTemplateString(year, month) {
    const startOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = monthLength(year, month);
    const rowTemplate = _templates__WEBPACK_IMPORTED_MODULE_1__.weekRow;
    const rowClose = rowTemplate().close;
    const weekShift = this.opts.daysPerWeek - this.opts.startOfWeek;
    let monthTemplate = '';
    let rows = 5;
    let weekShiftCorrected = startOfMonth + weekShift;
    let dayCounter = 0;
    let dayOfMonth = 1;

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
      let week = rowTemplate(i).open;
      // open tag <tr>

      // push days in week
      for (let j = 0; j < this.opts.daysPerWeek; j += 1) {
        // pushing actual days 1...daysInMonth
        if (dayCounter >= weekShiftCorrected && dayOfMonth <= daysInMonth) {
          week += this.dayTemplateString(year, month, dayOfMonth);
          dayOfMonth += 1;
          // pushing placeholders instead of days
        } else {
          week += _templates__WEBPACK_IMPORTED_MODULE_1__.weekDayPlaceholder;
        }
        dayCounter += 1;
      }
      // close tag </tr> of week
      week += rowClose;
      // push completed week to month template
      monthTemplate += week;
    }
    return monthTemplate;
  }
  dayTemplateString(year, month, dayOfMonth) {
    const {
      minStay,
      maxStay,
      rate: dayRate,
      isAvailable,
      isAvailableOut: dayIsAvailableOut,
      isMorningBlocked: dayIsMorningBlocked
    } = this.cTree.getDay(year, month, dayOfMonth) || {};
    const rate = this.opts.showRates && dayRate ? dayRate : 0;
    let isDisabled = !isAvailable;
    let isAvailableOut = dayIsAvailableOut;
    let isMorningBlocked = dayIsMorningBlocked;
    const {
      currentDate
    } = this.opts;
    const dateArray = [year, month, dayOfMonth];
    const isCurrentDay = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCurrent)(dateArray, currentDate);

    // disable past dates
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(dateArray, currentDate)) {
      isDisabled = true;
      isMorningBlocked = null;
      isAvailableOut = null;
    }

    // disable current day morning
    if (isCurrentDay) {
      if (!(isDisabled && isAvailableOut === null && isMorningBlocked === null)) {
        isMorningBlocked = true;
        if (isAvailableOut === null) {
          isAvailableOut = true;
        }
      }
    }

    // if there is not rentalId and no maps, just render plain calendar
    if (!this.opts.rentalId || this.opts.enableAllDays) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(currentDate, dateArray)) {
        isDisabled = false;
        isAvailableOut = true;
        isMorningBlocked = false;
      }
      if (isCurrentDay) {
        isDisabled = true;
        isMorningBlocked = true;
      }
    }
    const isAvailableIn = isMorningBlocked == false;
    if (isDisabled && isAvailableIn) {
      isDisabled = 'left';
    } else if (isMorningBlocked) {
      isDisabled = 'right';
    } else if (isDisabled) {
      isDisabled = 'center';
    }
    const dateStr = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(year, month, dayOfMonth), this.locale.formatDate, this.locale);
    const rateT = rate ? currencyFormatter(Math.round(rate), this.opts.lang, this.opts.currency || this.locale.currency) : false;
    const minStayT = this.opts.showMinStay && minStay ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.tFormatter)(minStay, this.locale.minStay) : false;
    const maxStayT = this.opts.showMaxStay && maxStay ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.tFormatter)(maxStay, this.locale.maxStay) : false;

    // Build enriched aria-label for screen readers
    const ariaLabelParts = [dateStr];
    if (isCurrentDay) {
      ariaLabelParts.push(this.locale.labels.today || 'today');
    }
    if (isDisabled) {
      ariaLabelParts.push(this.locale.labels.unavailable || 'unavailable');
    }
    if (rateT) {
      ariaLabelParts.push(rateT);
    }
    if (minStayT) {
      ariaLabelParts.push(minStayT);
    }
    if (maxStayT) {
      ariaLabelParts.push(maxStayT);
    }
    const options = {
      label: dayOfMonth,
      date: dateStr,
      ariaLabel: ariaLabelParts.join(', '),
      disabled: isDisabled,
      isAvailableIn,
      isAvailableOut,
      isCurrentDay,
      minStay,
      minStayT,
      maxStay,
      maxStayT,
      rate,
      rateT,
      tabindex: this.opts.selectable ? 0 : -1
    };
    return _templates__WEBPACK_IMPORTED_MODULE_1__.weekDay(options);
  }
  destroyMonths() {
    this.closeYearPicker();
    if (this.dom && isArray(this.dom.months)) {
      this.dom.months.forEach(m => destroyElement(m));
      this.destroyTooltip();
    }
  }
  destroy() {
    this.removeViewportEvents();
    this.closeYearPicker();
    this.destroyTooltip();
    if (this.calDrop && isFunction(this.calDrop.destroy)) {
      this.calDrop.destroy();
      this.calDrop = null;
    }
    if (this.onDocumentClick) {
      document.removeEventListener('click', this.onDocumentClick);
      this.onDocumentClick = null;
    }
    if (this.onDocumentKeydown) {
      document.removeEventListener('keydown', this.onDocumentKeydown);
      this.onDocumentKeydown = null;
    }
    return destroyElement(this.el);
  }
  loadMaps(id) {
    this.logger('loading maps');
    this.toggleLoading();
    const onSuccess = maps => {
      if (isArray(maps.data) && maps.data[0].attributes) {
        if (this.opts.disableAvailabityMap) {
          maps.data[0].attributes.availability = maps.data[0].attributes.availability.replace(/[0-9]/g, '0');
        }
        this.opts.currency = this.opts.currency || maps.data[0].attributes.currency;
        this.addMaps(maps.data[0].attributes);
        this.mapsLoaded = true;
        this.toggleLoading();
        this.emit('maps-loaded', maps);
      } else {
        this.toggleLoading();
        this.logger('expects json-api data format', 'error');
      }
    };
    const onError = () => {
      this.toggleLoading();
      this.emit('maps-error');
      this.logger('Server error happened', 'error');
    };
    fetch(this.opts.rentalUrl(id)).then(response => response.json()).then(onSuccess).catch(onError);
  }
  completeSelection() {
    if (this.opts.isSingleInput) {
      const singleInputDateFormat = this.opts.singleInputDateFormat || this.locale.formatDate;
      const dateStart = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...this.selectionStart), singleInputDateFormat, this.locale);
      const dateEnd = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...this.selectionEnd), singleInputDateFormat, this.locale);
      this.opts.elSingleInput.value = "".concat(dateStart, " ").concat(this.opts.singleInputSeparator, " ").concat(dateEnd);
    }
    this.emit('selection-completed', this.selectionStart, this.selectionEnd);
    if (isFunction(this.opts.onSelectionCompleted)) {
      this.opts.onSelectionCompleted((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...this.selectionStart, true), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...this.selectionEnd, true));
    }
  }
  initCalendarDrop() {
    const element = elementFromString('<div></div>');
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
    addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].dropBasic);

    // Add aria attributes
    this.el.setAttribute('role', 'dialog');
    this.el.setAttribute('aria-modal', 'true');
    this.el.setAttribute('aria-label', this.locale.labels.calendar);
    this.el.setAttribute('aria-hidden', 'true');
    const openDrop = (input, isReversed) => {
      this.switchInputFocus(input);
      this.changeSelectionOrder(isReversed);
      if (!hasClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].visible)) {
        if (!this.calDrop) {
          this.calDrop = (0,_positioning__WEBPACK_IMPORTED_MODULE_5__["default"])(this.elTarget, this.el, {
            placement: this.opts.dropPlacement,
            hide: true,
            deferUpdate: true
          });
        }
        addClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].visible);
        this.el.setAttribute('aria-hidden', 'false');
        this.calDrop.update();
        this.emit('drop-open');
        this.dom.monthsWrapper.querySelector('[role="gridcell"][tabindex="0"]').focus();
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
    if (this.opts.elReset) {
      this.opts.elReset.addEventListener('click', () => {
        this.resetSelection();
      });
    }
  }
  closeDrop(e, force) {
    if (!force && (isInside(e.target, this.el) || isInside(e.target, this.elTarget))) {
      e.stopPropagation();
    } else {
      removeClass(this.el, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].visible);
      this.el.setAttribute('aria-hidden', 'true');
      this.destroyTooltip();
      this.emit('drop-close');
      this.switchInputFocus('any');
    }
  }
  valueToInput(input, dateValue) {
    const {
      elStartAt
    } = this.opts;
    const {
      elEndAt
    } = this.opts;
    const date = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...dateValue);
    const value = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)(date, this.format, this.locale);
    const evt = document.createEvent('Event');
    evt.initEvent('change', false, true);
    if (this.opts.hiddenElFormat) {
      const hiddenValue = (0,strtime__WEBPACK_IMPORTED_MODULE_6__.strftime)(date, this.opts.hiddenElFormat, this.locale);
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
    if (this.opts.elStartAt.value === '' && this.opts.elEndAt.value === '') {
      return;
    }
    const selectionStart = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToArray)(this.opts.elStartAt.value, this.format, this.locale);
    const selectionEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToArray)(this.opts.elEndAt.value, this.format, this.locale);
    const {
      currentDate
    } = this.opts;
    this.resetSelection();
    if (isArray(selectionStart) && isArray(selectionEnd)) {
      if (((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(currentDate, selectionStart) || (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCurrent)(currentDate, selectionStart)) && (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isLater)(selectionStart, selectionEnd)) {
        const monthDifference = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.monthDiff)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(this.opts.yearStart, this.opts.monthStart, 1), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.dateToIso)(...selectionEnd));
        const {
          tree
        } = this.createTree(this.opts.yearStart, this.opts.monthStart, monthDifference);
        this.cTree.addTree(tree);
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
        this.recoverSelections();
        this.completeSelection();
        this.destroyMonths();
        this.renderMonths(selectionEnd[0], selectionEnd[1]);
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
        addClass(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
        removeClass(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
      }
      if (type === 'end') {
        addClass(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
        removeClass(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
      }
      if (type === 'any') {
        removeClass(this.opts.elStartAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
        removeClass(this.opts.elEndAt, _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].focus);
      }
    }
  }
  focusTouchEvents(element, _callback) {
    if (isFunction(_callback)) {
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

/***/ },

/***/ "./src/config.js"
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global process */

const name = 'smily-calendar-widget';
const currentDate = new Date();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  cssPrefix: 'SmilyCalendar',
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
  maxStay: Infinity,
  // can select infinite nights
  monthStart: null,
  // start with current month by default M '0...11'
  yearStart: null,
  // start with current year YYYY
  daysPerWeek: 7,
  // FIXME support calendar rendering
  displayMonths: 2,
  displayMonthsMobile: null,
  // falls back to displayMonths
  mobileBreakpoint: 767,
  // px, <= breakpoint is mobile
  showPaginationMobile: true,
  monthsPaginationJump: 1,
  selectable: false,
  showRates: false,
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
  currentDate,
  theme: 'basic'
});

/***/ },

/***/ "./src/locales.js"
/*!************************!*\
  !*** ./src/locales.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    hasInvalidMinStay: 'minimum stay: %number nights',
    hasInvalidMaxStay: 'maximum stay: %number nights',
    hasInvalidDays: 'booked already',
    startOfWeek: 0,
    labels: {
      calendar: 'Calendar',
      months: 'Months',
      monthsForward: 'Next month',
      monthsBackward: 'Previous month',
      close: 'Close',
      previousYears: 'Previous years',
      nextYears: 'Next years',
      today: 'today',
      unavailable: 'unavailable',
      selectedStart: 'Start date: %date',
      selectedEnd: 'End date: %date'
    }
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
    hasInvalidMinStay: 'minimum stay: %number nights',
    hasInvalidMaxStay: 'maximum stay: %number nights',
    hasInvalidDays: 'booked already',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendar',
      months: 'Months',
      monthsForward: 'Next month',
      monthsBackward: 'Previous month',
      close: 'Close',
      previousYears: 'Previous years',
      nextYears: 'Next years',
      today: 'today',
      unavailable: 'unavailable',
      selectedStart: 'Start date: %date',
      selectedEnd: 'End date: %date'
    }
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
    hasInvalidMinStay: 'mindestaufenthalt: %number Nächte',
    hasInvalidMaxStay: 'maximaler Aufenthalt: %number Nächte',
    hasInvalidDays: 'schon gebucht',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Monate',
      monthsForward: 'Nächster Monat',
      monthsBackward: 'Vorheriger Monat',
      close: 'Schließen',
      previousYears: 'Vorherige Jahre',
      nextYears: 'Nächste Jahre',
      today: 'heute',
      unavailable: 'nicht verfügbar',
      selectedStart: 'Startdatum: %date',
      selectedEnd: 'Enddatum: %date'
    }
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
    hasInvalidMinStay: 'estancia mínima: %number noches',
    hasInvalidMaxStay: 'estancia máxima: %number noches',
    hasInvalidDays: 'ya reservado',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendario',
      months: 'Meses',
      monthsForward: 'Próximo mes',
      monthsBackward: 'Mes anterior',
      close: 'Cerrar',
      previousYears: 'Años anteriores',
      nextYears: 'Años siguientes',
      today: 'hoy',
      unavailable: 'no disponible',
      selectedStart: 'Fecha de inicio: %date',
      selectedEnd: 'Fecha de fin: %date'
    }
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
    hasInvalidMinStay: 'séjour minimum : %number nuits',
    hasInvalidMaxStay: 'séjour maximum : %number nuits',
    hasInvalidDays: 'déjà réservé',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendrier',
      months: 'Mois',
      monthsForward: 'Mois suivant',
      monthsBackward: 'Mois précédent',
      close: 'Fermer',
      previousYears: 'Années précédentes',
      nextYears: 'Années suivantes',
      today: "aujourd'hui",
      unavailable: 'indisponible',
      selectedStart: 'Date de début : %date',
      selectedEnd: 'Date de fin : %date'
    }
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
    hasInvalidMinStay: 'soggiorno minim: %number notti',
    hasInvalidMaxStay: 'soggiorno massimo: %number notti',
    hasInvalidDays: 'già prenotato',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendario',
      months: 'Mesi',
      monthsForward: 'Mese successivo',
      monthsBackward: 'Mese precedente',
      close: 'Chiudi',
      previousYears: 'Anni precedenti',
      nextYears: 'Anni successivi',
      today: 'oggi',
      unavailable: 'non disponibile',
      selectedStart: 'Data di inizio: %date',
      selectedEnd: 'Data di fine: %date'
    }
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
    hasInvalidMinStay: 'kortaste vistelse: %number nätter',
    hasInvalidMaxStay: 'maximálny pobyt: %number nätter',
    hasInvalidDays: 'redan bokat',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Månader',
      monthsForward: 'Nästa månad',
      monthsBackward: 'Föregående månad',
      close: 'Stäng',
      previousYears: 'Föregående år',
      nextYears: 'Nästa år',
      today: 'idag',
      unavailable: 'ej tillgänglig',
      selectedStart: 'Startdatum: %date',
      selectedEnd: 'Slutdatum: %date'
    }
  },
  'ru-RU': {
    shortWeekdayNames: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    longWeekdayNames: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
    longMonthNames: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    shortMonthNames: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
    formatDate: '%d.%b.%Y',
    currency: 'RUB',
    minStay: '%number+ ноч.',
    maxStay: '%number- ноч.',
    hasInvalidMinStay: 'минимальное пребывани: %number ночи',
    hasInvalidMaxStay: 'максимальное пребывание: %number ночи',
    hasInvalidDays: 'забронировано уже',
    startOfWeek: 1,
    labels: {
      calendar: 'Календарь',
      months: 'Месяцы',
      monthsForward: 'Следующий месяц',
      monthsBackward: 'Предыдущий месяц',
      close: 'Закрыть',
      previousYears: 'Предыдущие годы',
      nextYears: 'Следующие годы',
      today: 'сегодня',
      unavailable: 'недоступно',
      selectedStart: 'Дата начала: %date',
      selectedEnd: 'Дата окончания: %date'
    }
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
    hasInvalidMinStay: 'minimalny poby: %number noce',
    hasInvalidMaxStay: 'maksymalny pobyt: %number noce',
    hasInvalidDays: 'już zarezerwowane',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalendarz',
      months: 'Miesiące',
      monthsForward: 'Następny miesiąc',
      monthsBackward: 'Poprzedni miesiąc',
      close: 'Zamknij',
      previousYears: 'Poprzednie lata',
      nextYears: 'Następne lata',
      today: 'dzisiaj',
      unavailable: 'niedostępne',
      selectedStart: 'Data rozpoczęcia: %date',
      selectedEnd: 'Data zakończenia: %date'
    }
  },
  'nl-NL': {
    shortWeekdayNames: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    longWeekdayNames: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
    longMonthNames: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Maa_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nachten',
    maxStay: '%number- nachten',
    hasInvalidMinStay: 'minimaal verblijf: %number nachten',
    hasInvalidMaxStay: 'maximaal verblijf: %number nachten',
    hasInvalidDays: 'al geboekt',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Maanden',
      monthsForward: 'Volgende maand',
      monthsBackward: 'Vorige maand',
      close: 'Sluiten',
      previousYears: 'Vorige jaren',
      nextYears: 'Volgende jaren',
      today: 'vandaag',
      unavailable: 'niet beschikbaar',
      selectedStart: 'Startdatum: %date',
      selectedEnd: 'Einddatum: %date'
    }
  }
};

// Add aliases
locales = Object.assign({
  en: locales['en-US'],
  de: locales['de-DE'],
  es: locales['es-ES'],
  fr: locales['fr-FR'],
  it: locales['it-IT'],
  sv: locales['sv-SE'],
  ru: locales['ru-RU'],
  pl: locales['pl-PL'],
  nl: locales['nl-NL']
}, locales);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ },

/***/ "./src/positioning.js"
/*!****************************!*\
  !*** ./src/positioning.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPositioner)
/* harmony export */ });
/* global document, window */

const ARROW_SIZE = 8;
const getGlobalObject = () => typeof window !== 'undefined' ? window : null;
const getPopperRuntime = () => {
  const globalObject = getGlobalObject();
  if (globalObject && globalObject.Popper && typeof globalObject.Popper.createPopper === 'function') {
    return globalObject.Popper;
  }
  return null;
};
const getFloatingRuntime = () => {
  const globalObject = getGlobalObject();
  const runtime = globalObject && (globalObject.FloatingUIDOM || globalObject.FloatingUI || globalObject.floatingUI);
  if (runtime && typeof runtime.computePosition === 'function') {
    return runtime;
  }
  return null;
};
const getArrowElement = floatingEl => floatingEl.querySelector('[data-popper-arrow]');
const splitPlacement = function splitPlacement() {
  let placement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom';
  const [basePlacement, alignment] = placement.split('-');
  return {
    basePlacement: basePlacement || 'bottom',
    alignment: alignment || null
  };
};
const setBooleanAttribute = (element, name, value) => {
  if (!element) {
    return;
  }
  if (value) {
    element.setAttribute(name, '');
  } else {
    element.removeAttribute(name);
  }
};
const applyPosition = function applyPosition(floatingEl, x, y, placement) {
  let strategy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'absolute';
  floatingEl.style.position = strategy;
  floatingEl.style.left = "".concat(x, "px");
  floatingEl.style.top = "".concat(y, "px");
  floatingEl.setAttribute('data-popper-placement', placement);
};
const applyArrowPosition = (arrowEl, x, y) => {
  if (!arrowEl) {
    return;
  }
  arrowEl.style.left = '';
  arrowEl.style.top = '';
  if (typeof x === 'number') {
    arrowEl.style.left = "".concat(x, "px");
  }
  if (typeof y === 'number') {
    arrowEl.style.top = "".concat(y, "px");
  }
};
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const alignHorizontally = (referenceRect, floatingRect, alignment) => {
  if (alignment === 'start') {
    return referenceRect.left;
  }
  if (alignment === 'end') {
    return referenceRect.right - floatingRect.width;
  }
  return referenceRect.left + (referenceRect.width - floatingRect.width) / 2;
};
const alignVertically = (referenceRect, floatingRect, alignment) => {
  if (alignment === 'start') {
    return referenceRect.top;
  }
  if (alignment === 'end') {
    return referenceRect.bottom - floatingRect.height;
  }
  return referenceRect.top + (referenceRect.height - floatingRect.height) / 2;
};
const getViewportCoordinates = function getViewportCoordinates(referenceRect, floatingRect, placement) {
  let offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
  const {
    basePlacement,
    alignment
  } = splitPlacement(placement);
  const [crossAxisOffset = 0, mainAxisOffset = 0] = offset;
  if (basePlacement === 'top') {
    return {
      x: alignHorizontally(referenceRect, floatingRect, alignment) + crossAxisOffset,
      y: referenceRect.top - floatingRect.height - mainAxisOffset
    };
  }
  if (basePlacement === 'bottom') {
    return {
      x: alignHorizontally(referenceRect, floatingRect, alignment) + crossAxisOffset,
      y: referenceRect.bottom + mainAxisOffset
    };
  }
  if (basePlacement === 'left') {
    return {
      x: referenceRect.left - floatingRect.width - mainAxisOffset,
      y: alignVertically(referenceRect, floatingRect, alignment) + crossAxisOffset
    };
  }
  return {
    x: referenceRect.right + mainAxisOffset,
    y: alignVertically(referenceRect, floatingRect, alignment) + crossAxisOffset
  };
};
const normalizeCoordinatesForOffsetParent = (floatingEl, viewportX, viewportY) => {
  const ownerDocument = floatingEl.ownerDocument || document;
  const globalObject = ownerDocument.defaultView || getGlobalObject();
  const {
    offsetParent
  } = floatingEl;
  if (!offsetParent || offsetParent === ownerDocument.body || offsetParent === ownerDocument.documentElement) {
    return {
      x: viewportX + (globalObject ? globalObject.pageXOffset : 0),
      y: viewportY + (globalObject ? globalObject.pageYOffset : 0)
    };
  }
  const parentRect = offsetParent.getBoundingClientRect();
  return {
    x: viewportX - parentRect.left - offsetParent.clientLeft + offsetParent.scrollLeft,
    y: viewportY - parentRect.top - offsetParent.clientTop + offsetParent.scrollTop
  };
};
const positionManualArrow = (referenceRect, floatingRect, viewportX, viewportY, placement, arrowEl) => {
  if (!arrowEl) {
    return;
  }
  const {
    basePlacement
  } = splitPlacement(placement);
  const halfArrow = ARROW_SIZE / 2;
  if (basePlacement === 'top' || basePlacement === 'bottom') {
    const maxArrowX = Math.max(floatingRect.width - ARROW_SIZE, 0);
    const arrowX = clamp(referenceRect.left + referenceRect.width / 2 - viewportX - halfArrow, 0, maxArrowX);
    applyArrowPosition(arrowEl, arrowX, null);
    return;
  }
  const maxArrowY = Math.max(floatingRect.height - ARROW_SIZE, 0);
  const arrowY = clamp(referenceRect.top + referenceRect.height / 2 - viewportY - halfArrow, 0, maxArrowY);
  applyArrowPosition(arrowEl, null, arrowY);
};
const attachFallbackAutoUpdate = update => {
  const globalObject = getGlobalObject();
  if (!globalObject || typeof globalObject.addEventListener !== 'function') {
    return () => {};
  }
  globalObject.addEventListener('resize', update);
  globalObject.addEventListener('scroll', update, true);
  return () => {
    globalObject.removeEventListener('resize', update);
    globalObject.removeEventListener('scroll', update, true);
  };
};
const createPopperPositioner = (popperRuntime, referenceEl, floatingEl, options) => {
  const modifiers = [];
  if (options.flip === false) {
    modifiers.push({
      name: 'flip',
      enabled: false
    });
  }
  if (Array.isArray(options.offset)) {
    modifiers.push({
      name: 'offset',
      options: {
        offset: options.offset
      }
    });
  }
  if (options.hide) {
    modifiers.push({
      name: 'hide',
      enabled: true
    });
  }
  return popperRuntime.createPopper(referenceEl, floatingEl, {
    placement: options.placement,
    strategy: options.strategy || 'absolute',
    modifiers
  });
};
const createFloatingPositioner = (floatingRuntime, referenceEl, floatingEl, options) => {
  const arrowEl = getArrowElement(floatingEl);
  const middleware = [];
  if (Array.isArray(options.offset) && typeof floatingRuntime.offset === 'function') {
    const [crossAxis = 0, mainAxis = 0] = options.offset;
    middleware.push(floatingRuntime.offset({
      mainAxis,
      crossAxis
    }));
  }
  if (options.flip !== false && typeof floatingRuntime.flip === 'function') {
    middleware.push(floatingRuntime.flip());
  }
  if (options.shift !== false && typeof floatingRuntime.shift === 'function') {
    middleware.push(floatingRuntime.shift());
  }
  if (options.hide && typeof floatingRuntime.hide === 'function') {
    middleware.push(floatingRuntime.hide());
  }
  if (arrowEl && typeof floatingRuntime.arrow === 'function') {
    middleware.push(floatingRuntime.arrow({
      element: arrowEl
    }));
  }
  const update = () => {
    floatingEl.style.position = options.strategy || 'absolute';
    return floatingRuntime.computePosition(referenceEl, floatingEl, {
      placement: options.placement,
      strategy: options.strategy || 'absolute',
      middleware
    }).then(_ref => {
      let {
        x,
        y,
        placement,
        middlewareData = {}
      } = _ref;
      applyPosition(floatingEl, x, y, placement, options.strategy || 'absolute');
      applyArrowPosition(arrowEl, middlewareData.arrow && middlewareData.arrow.x, middlewareData.arrow && middlewareData.arrow.y);
      setBooleanAttribute(floatingEl, 'data-popper-reference-hidden', middlewareData.hide && middlewareData.hide.referenceHidden);
      setBooleanAttribute(floatingEl, 'data-popper-escaped', middlewareData.hide && middlewareData.hide.escaped);
    });
  };
  const cleanup = typeof floatingRuntime.autoUpdate === 'function' ? floatingRuntime.autoUpdate(referenceEl, floatingEl, update) : attachFallbackAutoUpdate(update);
  if (!options.deferUpdate) {
    update();
  }
  return {
    update,
    destroy() {
      cleanup();
    }
  };
};
const createManualPositioner = (referenceEl, floatingEl, options) => {
  const arrowEl = getArrowElement(floatingEl);
  const update = () => {
    floatingEl.style.position = options.strategy || 'absolute';
    const referenceRect = referenceEl.getBoundingClientRect();
    const floatingRect = floatingEl.getBoundingClientRect();
    const viewportCoordinates = getViewportCoordinates(referenceRect, floatingRect, options.placement, options.offset);
    const normalizedCoordinates = normalizeCoordinatesForOffsetParent(floatingEl, viewportCoordinates.x, viewportCoordinates.y);
    applyPosition(floatingEl, normalizedCoordinates.x, normalizedCoordinates.y, options.placement, options.strategy || 'absolute');
    positionManualArrow(referenceRect, floatingRect, viewportCoordinates.x, viewportCoordinates.y, options.placement, arrowEl);
  };
  const cleanup = attachFallbackAutoUpdate(update);
  if (!options.deferUpdate) {
    update();
  }
  return {
    update,
    destroy() {
      cleanup();
    }
  };
};
function createPositioner(referenceEl, floatingEl) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const normalizedOptions = {
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    offset: options.offset || [0, 0],
    flip: options.flip !== false,
    shift: options.shift !== false,
    hide: options.hide === true,
    deferUpdate: options.deferUpdate === true
  };
  const popperRuntime = getPopperRuntime();
  if (popperRuntime) {
    return createPopperPositioner(popperRuntime, referenceEl, floatingEl, normalizedOptions);
  }
  const floatingRuntime = getFloatingRuntime();
  if (floatingRuntime) {
    return createFloatingPositioner(floatingRuntime, referenceEl, floatingEl, normalizedOptions);
  }
  return createManualPositioner(referenceEl, floatingEl, normalizedOptions);
}

/***/ },

/***/ "./src/templates.js"
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   back: () => (/* binding */ back),
/* harmony export */   forward: () => (/* binding */ forward),
/* harmony export */   liveRegion: () => (/* binding */ liveRegion),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   mobileWeekdays: () => (/* binding */ mobileWeekdays),
/* harmony export */   month: () => (/* binding */ month),
/* harmony export */   pagination: () => (/* binding */ pagination),
/* harmony export */   sharedYearPickerPanel: () => (/* binding */ sharedYearPickerPanel),
/* harmony export */   svgSprite: () => (/* binding */ svgSprite),
/* harmony export */   tooltip: () => (/* binding */ tooltip),
/* harmony export */   weekDay: () => (/* binding */ weekDay),
/* harmony export */   weekDayLabel: () => (/* binding */ weekDayLabel),
/* harmony export */   weekDayPlaceholder: () => (/* binding */ weekDayPlaceholder),
/* harmony export */   weekRow: () => (/* binding */ weekRow),
/* harmony export */   yearOption: () => (/* binding */ yearOption),
/* harmony export */   yearPicker: () => (/* binding */ yearPicker)
/* harmony export */ });
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/calendar.scss */ "./src/styles/calendar.scss");

const main = label => "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].monthsWrapper, "\" role=\"tabpanel\" aria-label=\"").concat(label, "\"></div>");
const liveRegion = () => "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].srOnly, "\" aria-live=\"polite\" aria-atomic=\"true\" data-live-region></div>");
const pagination = () => "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].pagination, "\"></div>");
const mobileWeekdays = header => "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mobileWeekdays, "\" role=\"row\">").concat(header, "</div>");
const svgSprite = chevronDownId => "\n  <svg class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].sprite, "\" aria-hidden=\"true\" focusable=\"false\" width=\"0\" height=\"0\">\n    <symbol id=\"").concat(chevronDownId, "\" viewBox=\"0 0 16 16\">\n      <path d=\"M4.22 6.97a.75.75 0 0 1 1.06 0L8 9.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 8.03a.75.75 0 0 1 0-1.06Z\"></path>\n    </symbol>\n  </svg>\n");
const tooltip = "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].tooltip, "\" role=\"tooltip\"><span></span><div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].tooltipArrow, "\" data-popper-arrow=\"true\"></div></div>");
const month = _ref => {
  let {
    label,
    caption,
    header,
    body
  } = _ref;
  return "\n  <div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].month, " ").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mCell, " js-month\" role=\"grid\" aria-label=\"").concat(label, "\">\n    <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].caption, "\">").concat(caption, "</div>\n    <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].tableHeader, "\" role=\"row\">").concat(header, "</div>\n    <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].body, "\" role=\"rowgroup\">").concat(body, "</div>\n  </div>\n");
};
const yearPicker = _ref2 => {
  let {
    label,
    chevronDownId
  } = _ref2;
  return "\n  <div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].captionPicker, "\">\n    <button\n      type=\"button\"\n      class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].captionTrigger, "\"\n      data-year-picker-trigger\n      aria-expanded=\"false\"\n      aria-haspopup=\"dialog\"\n      aria-label=\"").concat(label, "\"\n    >\n      <span class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].captionLabel, "\">").concat(label, "</span>\n      <svg class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].captionChevron, "\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 16 16\">\n        <use href=\"#").concat(chevronDownId, "\"></use>\n      </svg>\n    </button>\n  </div>\n");
};
const sharedYearPickerPanel = _ref3 => {
  let {
    closeLabel,
    previousLabel,
    nextLabel
  } = _ref3;
  return "\n  <div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearPickerPanel, "\" data-year-picker-panel hidden>\n    <button type=\"button\" class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearPickerClose, "\" data-year-picker-close aria-label=\"").concat(closeLabel, "\">").concat(closeLabel, "</button>\n    <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearGrid, "\" data-year-grid></div>\n    <div class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearPickerHeader, "\">\n      <button type=\"button\" class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearPager, "\" data-year-page-offset=\"-12\" aria-label=\"").concat(previousLabel, "\">").concat(previousLabel, "</button>\n      <button type=\"button\" class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearPager, "\" data-year-page-offset=\"12\" aria-label=\"").concat(nextLabel, "\">").concat(nextLabel, "</button>\n    </div>\n  </div>\n");
};
const yearOption = (year, selectedYear) => "\n  <button\n    type=\"button\"\n    class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].yearOption, "\"\n    data-year-option=\"").concat(year, "\"\n    ").concat(year === selectedYear ? 'data-selected-year aria-current="true"' : '', "\n  >\n    ").concat(year, "\n  </button>\n");
const weekDayLabel = label => "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].th, "\" role=\"columnheader\">").concat(label, "</div>");
const weekDay = o => {
  const infoLines = [];
  if (o.rate) {
    infoLines.push(o.rateT);
  }
  if (o.minStay && o.minStayT) {
    infoLines.push(o.minStayT);
  }
  if (o.maxStay && o.maxStayT) {
    infoLines.push(o.maxStayT);
  }
  const infoHtml = infoLines.length ? "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].info, "\">").concat(infoLines.join('<br>'), "</div>") : '';
  return "\n    <div\n      ".concat(o.disabled ? "data-disabled=".concat(o.disabled, " aria-disabled=\"true\"") : 'data-enabled', "\n      ").concat(o.isAvailableOut ? 'data-available-out' : '', "\n      ").concat(o.isAvailableIn ? 'data-available-in' : '', "\n      ").concat(o.minStay ? "data-min-stay=".concat(o.minStay) : '', "\n      ").concat(o.maxStay ? "data-max-stay=".concat(o.maxStay) : '', "\n      data-value=\"").concat(o.label, "\"\n      class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cell, " ").concat(o.isCurrentDay ? _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].today : '', "\"\n      role=\"gridcell\"\n      tabindex=\"").concat(o.tabindex, "\"\n      aria-label=\"").concat(o.ariaLabel, "\"\n      ").concat(o.isCurrentDay ? 'aria-current="date"' : '', "\n    >\n      <span class=\"").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cnt, "\">").concat(o.label, "</span>\n      ").concat(infoHtml, "\n    </div>\n  ");
};
const forward = label => "\n  <button class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].forward, "\" aria-label=\"").concat(label, "\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"m9 18 6-6-6-6\"></path>\n    </svg>\n  </button>\n");
const back = label => "\n  <button class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].back, "\" aria-label=\"").concat(label, "\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"m15 18-6-6 6-6\"></path>\n    </svg>\n  </button>\n");
const weekDayPlaceholder = "<div class=\"".concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].placeholder, "\" data-placeholder aria-hidden=\"true\"></div>");

/* eslint arrow-body-style: 0 */
const weekRow = num => {
  return {
    open: "<div role=\"row\" class=\"js-body-row-".concat(num, " ").concat(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_0__["default"].weekRow, "\">"),
    close: '</div>'
  };
};

/***/ },

/***/ "./src/utils.js"
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateToArray: () => (/* binding */ dateToArray),
/* harmony export */   dateToIso: () => (/* binding */ dateToIso),
/* harmony export */   isCurrent: () => (/* binding */ isCurrent),
/* harmony export */   isLater: () => (/* binding */ isLater),
/* harmony export */   monthDiff: () => (/* binding */ monthDiff),
/* harmony export */   tFormatter: () => (/* binding */ tFormatter),
/* harmony export */   validationOfCell: () => (/* binding */ validationOfCell)
/* harmony export */ });
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strtime */ "./node_modules/.pnpm/strtime@1.1.2/node_modules/strtime/dist/strtime.js");
/* harmony import */ var strtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(strtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var widget_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widget-utils */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js");
/* global console */


const {
  is
} = widget_utils__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    return [parseInt(a[0]),
    // year
    parseInt(a[1] - 1),
    // month index
    parseInt(a[2]) // day
    ];
  } catch (e) {
    if (is(e.message)) {
      console.log(e.message);
    }
    return false;
  }
};
const isLater = (start, end) => dateToIso(...start, true) < dateToIso(...end, true);
const isCurrent = (start, end) => dateToIso(...start, true) == dateToIso(...end, true);
const monthDiff = (start, end) => {
  return end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear());
};
const validationOfCell = cell => {
  if (is(cell.dataset.enabled) || is(cell.dataset.availableIn) || is(cell.dataset.availableOut)) {
    return true;
  }
  return false;
};
const tFormatter = (value, str) => str.replace('%number', value);

/***/ },

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SmilyCalendar__reset div, .SmilyCalendar__reset span, .SmilyCalendar__reset applet, .SmilyCalendar__reset object, .SmilyCalendar__reset iframe, .SmilyCalendar__reset h1, .SmilyCalendar__reset h2, .SmilyCalendar__reset h3, .SmilyCalendar__reset h4, .SmilyCalendar__reset h5, .SmilyCalendar__reset h6, .SmilyCalendar__reset p, .SmilyCalendar__reset blockquote, .SmilyCalendar__reset pre, .SmilyCalendar__reset a,
.SmilyCalendar__reset abbr, .SmilyCalendar__reset acronym, .SmilyCalendar__reset address, .SmilyCalendar__reset big, .SmilyCalendar__reset cite, .SmilyCalendar__reset code, .SmilyCalendar__reset del, .SmilyCalendar__reset dfn, .SmilyCalendar__reset em, .SmilyCalendar__reset img, .SmilyCalendar__reset ins, .SmilyCalendar__reset kbd, .SmilyCalendar__reset q, .SmilyCalendar__reset s, .SmilyCalendar__reset samp,
.SmilyCalendar__reset small, .SmilyCalendar__reset strike, .SmilyCalendar__reset strong, .SmilyCalendar__reset sub, .SmilyCalendar__reset sup, .SmilyCalendar__reset tt, .SmilyCalendar__reset var, .SmilyCalendar__reset b, .SmilyCalendar__reset u, .SmilyCalendar__reset i, .SmilyCalendar__reset center, .SmilyCalendar__reset dl, .SmilyCalendar__reset dt, .SmilyCalendar__reset dd, .SmilyCalendar__reset ol, .SmilyCalendar__reset ul, .SmilyCalendar__reset li,
.SmilyCalendar__reset fieldset, .SmilyCalendar__reset form, .SmilyCalendar__reset div.SmilyCalendar__form, .SmilyCalendar__reset label, .SmilyCalendar__reset legend, .SmilyCalendar__reset table, .SmilyCalendar__reset caption, .SmilyCalendar__reset tbody, .SmilyCalendar__reset tfoot, .SmilyCalendar__reset thead, .SmilyCalendar__reset tr,
.SmilyCalendar__reset th, .SmilyCalendar__reset td, .SmilyCalendar__reset article, .SmilyCalendar__reset aside, .SmilyCalendar__reset canvas, .SmilyCalendar__reset details, .SmilyCalendar__reset figcaption, .SmilyCalendar__reset figure, .SmilyCalendar__reset footer, .SmilyCalendar__reset header, .SmilyCalendar__reset hgroup,
.SmilyCalendar__reset menu, .SmilyCalendar__reset nav, .SmilyCalendar__reset section, .SmilyCalendar__reset summary, .SmilyCalendar__reset time, .SmilyCalendar__reset mark, .SmilyCalendar__reset audio, .SmilyCalendar__reset video, .SmilyCalendar__reset button, .SmilyCalendar__reset textarea, .SmilyCalendar__reset input, .SmilyCalendar__reset .SmilyCalendar__button, .SmilyCalendar__reset .SmilyCalendar__legend {
  font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size-adjust: none;
  font-size: 100%;
  font-style: normal;
  letter-spacing: normal;
  font-stretch: normal;
  font-variant: normal;
  font-weight: normal;
  font: normal normal 100% "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
  -moz-text-align-last: initial;
  text-align-last: initial;
  text-decoration: none;
  -webkit-text-emphasis: none;
  text-emphasis: none;
  text-height: auto;
  text-indent: 0;
  text-justify: auto;
  text-outline: none;
  text-shadow: none;
  text-transform: none;
  text-wrap: normal;
  alignment-adjust: auto;
  alignment-baseline: baseline;
  -webkit-animation: none 0 ease 0 1 normal;
  animation: none 0 ease 0 1 normal;
  -webkit-animation-play-state: running;
  animation-play-state: running;
  appearance: normal;
  azimuth: center;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  background: none 0 0 auto repeat scroll padding-box transparent;
  background-color: transparent;
  background-image: none;
  baseline-shift: baseline;
  binding: none;
  bleed: 6pt;
  bookmark-label: content();
  bookmark-level: none;
  bookmark-state: open;
  bookmark-target: none;
  border: 0 none transparent;
  border-radius: 0;
  bottom: auto;
  box-align: stretch;
  -webkit-box-decoration-break: slice;
  box-decoration-break: slice;
  box-direction: normal;
  flex: 0;
  flex-group: 1;
  box-lines: single;
  box-ordinal-group: 1;
  box-orient: inline-axis;
  box-pack: start;
  box-shadow: none;
  box-sizing: content-box;
  -webkit-break-after: auto;
  -moz-break-after: auto;
  break-after: auto;
  -webkit-break-before: auto;
  -moz-break-before: auto;
  break-before: auto;
  -webkit-column-break-inside: auto;
  page-break-inside: auto;
  break-inside: auto;
  caption-side: top;
  clear: none;
  clip: auto;
  color: inherit;
  color-profile: auto;
  -webkit-column-count: auto;
  -moz-column-count: auto;
  column-count: auto;
  -webkit-column-fill: balance;
  -moz-column-fill: balance;
  column-fill: balance;
  -webkit-column-gap: normal;
  -moz-column-gap: normal;
  column-gap: normal;
  -webkit-column-rule: medium medium #1f1f1f;
  -moz-column-rule: medium medium #1f1f1f;
  column-rule: medium medium #1f1f1f;
  -webkit-column-span: 1;
  -moz-column-span: 1;
  column-span: 1;
  -webkit-column-width: auto;
  -moz-column-width: auto;
  column-width: auto;
  -webkit-columns: auto auto;
  -moz-columns: auto auto;
  columns: auto auto;
  content: normal;
  counter-increment: none;
  counter-reset: none;
  crop: auto;
  cursor: auto;
  direction: ltr;
  display: inline;
  dominant-baseline: auto;
  drop-initial-after-adjust: text-after-edge;
  drop-initial-after-align: baseline;
  drop-initial-before-adjust: text-before-edge;
  drop-initial-before-align: caps-height;
  drop-initial-size: auto;
  drop-initial-value: initial;
  elevation: level;
  empty-cells: show;
  fit: fill;
  fit-position: 0% 0%;
  float: none;
  float-offset: 0 0;
  grid-columns: none;
  grid-rows: none;
  hanging-punctuation: none;
  height: auto;
  hyphenate-after: auto;
  hyphenate-before: auto;
  hyphenate-character: auto;
  hyphenate-lines: no-limit;
  hyphenate-resource: none;
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
  icon: auto;
  image-orientation: auto;
  image-rendering: auto;
  image-resolution: normal;
  inline-box-align: last;
  left: auto;
  line-height: inherit;
  line-stacking: inline-line-height exclude-ruby consider-shifts;
  list-style: disc outside none;
  margin: 0;
  marks: none;
  marquee-direction: forward;
  marquee-loop: 1;
  marquee-play-count: 1;
  marquee-speed: normal;
  marquee-style: scroll;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  move-to: normal;
  nav-down: auto;
  nav-index: auto;
  nav-left: auto;
  nav-right: auto;
  nav-up: auto;
  opacity: 1;
  orphans: 2;
  outline: invert none medium;
  outline-offset: 0;
  overflow: visible;
  overflow-style: auto;
  padding: 0;
  page: auto;
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: auto;
  page-policy: start;
  -webkit-perspective: none;
  perspective: none;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  position: static;
  presentation-level: 0;
  punctuation-trim: none;
  quotes: none;
  rendering-intent: auto;
  resize: none;
  right: auto;
  rotation: 0;
  rotation-point: 50% 50%;
  ruby-align: auto;
  ruby-overhang: none;
  ruby-position: before;
  ruby-span: none;
  size: auto;
  string-set: none;
  table-layout: auto;
  top: auto;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-transform-origin: 50% 50% 0;
  -ms-transform-origin: 50% 50% 0;
  transform-origin: 50% 50% 0;
  -webkit-transform-style: flat;
  transform-style: flat;
  transition: all 0 ease 0;
  unicode-bidi: normal;
  vertical-align: baseline;
  white-space: normal;
  white-space-collapse: collapse;
  widows: 2;
  width: auto;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  z-index: auto;
  text-align: start;
  /* And disable MS gradients */
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.SmilyCalendar__reset address, .SmilyCalendar__reset blockquote, .SmilyCalendar__reset dd, .SmilyCalendar__reset div, .SmilyCalendar__reset dl, .SmilyCalendar__reset dt, .SmilyCalendar__reset fieldset, .SmilyCalendar__reset form, .SmilyCalendar__reset div.SmilyCalendar__form, .SmilyCalendar__reset frame, .SmilyCalendar__reset frameset, .SmilyCalendar__reset h1, .SmilyCalendar__reset h2, .SmilyCalendar__reset h3, .SmilyCalendar__reset h4, .SmilyCalendar__reset h5, .SmilyCalendar__reset h6, .SmilyCalendar__reset noframes, .SmilyCalendar__reset ol, .SmilyCalendar__reset p, .SmilyCalendar__reset ul, .SmilyCalendar__reset center, .SmilyCalendar__reset dir, .SmilyCalendar__reset hr, .SmilyCalendar__reset menu, .SmilyCalendar__reset pre, .SmilyCalendar__reset article, .SmilyCalendar__reset aside, .SmilyCalendar__reset canvas, .SmilyCalendar__reset details, .SmilyCalendar__reset figcaption, .SmilyCalendar__reset figure, .SmilyCalendar__reset footer, .SmilyCalendar__reset header, .SmilyCalendar__reset hgroup, .SmilyCalendar__reset menu, .SmilyCalendar__reset nav, .SmilyCalendar__reset section, .SmilyCalendar__reset summary {
  display: block;
}
.SmilyCalendar__reset li {
  display: list-item;
}
.SmilyCalendar__reset table {
  display: table;
}
.SmilyCalendar__reset tr {
  display: table-row;
}
.SmilyCalendar__reset thead {
  display: table-header-group;
}
.SmilyCalendar__reset tbody {
  display: table-row-group;
}
.SmilyCalendar__reset tfoot {
  display: table-footer-group;
}
.SmilyCalendar__reset col {
  display: table-column;
}
.SmilyCalendar__reset colgroup {
  display: table-column-group;
}
.SmilyCalendar__reset td, .SmilyCalendar__reset th {
  display: table-cell;
}
.SmilyCalendar__reset caption {
  display: table-caption;
}
.SmilyCalendar__reset input, .SmilyCalendar__reset select {
  display: inline-block;
}
.SmilyCalendar__reset b, .SmilyCalendar__reset strong {
  font-weight: bold;
}
.SmilyCalendar__reset b > i, .SmilyCalendar__reset strong > i, .SmilyCalendar__reset b > em, .SmilyCalendar__reset strong > em {
  font-weight: bold;
  font-style: italic;
}
.SmilyCalendar__reset i > b, .SmilyCalendar__reset i > strong {
  font-weight: bold;
  font-style: italic;
}
.SmilyCalendar__reset em > b, .SmilyCalendar__reset em > strong {
  font-weight: bold;
  font-style: italic;
}
.SmilyCalendar__reset textarea, .SmilyCalendar__reset input {
  cursor: text;
}`, "",{"version":3,"sources":["webpack://./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss"],"names":[],"mappings":"AACC;;;;;;EAMG,wEAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,oFAAA;EACA,gBAAA;EACA,6BAAA;EACA,wBAAA;EACA,qBAAA;EACA,2BAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,iBAAA;EACA,sBAAA;EACA,4BAAA;EACA,yCAAA;EACA,iCAAA;EACA,qCAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,oCAAA;EACA,4BAAA;EACA,+DAAA;EACA,6BAAA;EACA,sBAAA;EACA,wBAAA;EACA,aAAA;EACA,UAAA;EACA,yBAAA;EACA,oBAAA;EACA,oBAAA;EACA,qBAAA;EACA,0BAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,mCAAA;EACA,2BAAA;EACA,qBAAA;EACA,OAAA;EACA,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,iCAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,UAAA;EACA,cAAA;EACA,mBAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,4BAAA;EACA,yBAAA;EACA,oBAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,0CAAA;EACA,uCAAA;EACA,kCAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;EACA,0CAAA;EACA,kCAAA;EACA,4CAAA;EACA,sCAAA;EACA,uBAAA;EACA,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EACA,yBAAA;EACA,wBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;EACA,UAAA;EACA,oBAAA;EACA,8DAAA;EACA,6BAAA;EACA,SAAA;EACA,WAAA;EACA,0BAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,2BAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,mCAAA;EACA,2BAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,mCAAA;EACA,+BAAA;EACA,2BAAA;EACA,6BAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,wBAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,6BAAA;EACA,iEAAA;EACA,mCAAA;EACA,kCAAA;AAAJ;AAEE;EACE,cAAA;AAAJ;AAEE;EACE,kBAAA;AAAJ;AAEE;EACE,cAAA;AAAJ;AAEE;EACE,kBAAA;AAAJ;AAEE;EACE,2BAAA;AAAJ;AAEE;EACE,wBAAA;AAAJ;AAEE;EACE,2BAAA;AAAJ;AAEE;EACE,qBAAA;AAAJ;AAEE;EACE,2BAAA;AAAJ;AAEE;EACE,mBAAA;AAAJ;AAEE;EACE,sBAAA;AAAJ;AAEE;EACE,qBAAA;AAAJ;AAEE;EACE,iBAAA;AAAJ;AAEE;EACE,iBAAA;EACA,kBAAA;AAAJ;AAGI;EACE,iBAAA;EACA,kBAAA;AADN;AAKI;EACE,iBAAA;EACA,kBAAA;AAHN;AAME;EACE,YAAA;AAJJ","sourcesContent":[".reset {\n\tdiv, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,\n\tabbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,\n\tfieldset, form, div.form, label, legend, table, caption, tbody, tfoot, thead, tr,\n\tth, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup,\n\tmenu, nav, section, summary, time, mark, audio, video, button, textarea, input, .button, .legend {\n    font-family: \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size-adjust: none;\n    font-size: 100%;\n    font-style: normal;\n    letter-spacing: normal;\n    font-stretch: normal;\n    font-variant: normal;\n    font-weight: normal;\n    font: normal normal 100% \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    text-align: left;\n    -moz-text-align-last: initial;\n    text-align-last: initial;\n    text-decoration: none;\n    -webkit-text-emphasis: none;\n    text-emphasis: none;\n    text-height: auto;\n    text-indent: 0;\n    text-justify: auto;\n    text-outline: none;\n    text-shadow: none;\n    text-transform: none;\n    text-wrap: normal;\n    alignment-adjust: auto;\n    alignment-baseline: baseline;\n    -webkit-animation: none 0 ease 0 1 normal;\n    animation: none 0 ease 0 1 normal;\n    -webkit-animation-play-state: running;\n    animation-play-state: running;\n    appearance: normal;\n    azimuth: center;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    background: none 0 0 auto repeat scroll padding-box transparent;\n    background-color: transparent;\n    background-image: none;\n    baseline-shift: baseline;\n    binding: none;\n    bleed: 6pt;\n    bookmark-label: content();\n    bookmark-level: none;\n    bookmark-state: open;\n    bookmark-target: none;\n    border: 0 none transparent;\n    border-radius: 0;\n    bottom: auto;\n    box-align: stretch;\n    -webkit-box-decoration-break: slice;\n    box-decoration-break: slice;\n    box-direction: normal;\n    flex: 0.0;\n    flex-group: 1;\n    box-lines: single;\n    box-ordinal-group: 1;\n    box-orient: inline-axis;\n    box-pack: start;\n    box-shadow: none;\n    box-sizing: content-box;\n    -webkit-break-after: auto;\n    -moz-break-after: auto;\n    break-after: auto;\n    -webkit-break-before: auto;\n    -moz-break-before: auto;\n    break-before: auto;\n    -webkit-column-break-inside: auto;\n    page-break-inside: auto;\n    break-inside: auto;\n    caption-side: top;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    color-profile: auto;\n    -webkit-column-count: auto;\n    -moz-column-count: auto;\n    column-count: auto;\n    -webkit-column-fill: balance;\n    -moz-column-fill: balance;\n    column-fill: balance;\n    -webkit-column-gap: normal;\n    -moz-column-gap: normal;\n    column-gap: normal;\n    -webkit-column-rule: medium medium #1f1f1f;\n    -moz-column-rule: medium medium #1f1f1f;\n    column-rule: medium medium #1f1f1f;\n    -webkit-column-span: 1;\n    -moz-column-span: 1;\n    column-span: 1;\n    -webkit-column-width: auto;\n    -moz-column-width: auto;\n    column-width: auto;\n    -webkit-columns: auto auto;\n    -moz-columns: auto auto;\n    columns: auto auto;\n    content: normal;\n    counter-increment: none;\n    counter-reset: none;\n    crop: auto;\n    cursor: auto;\n    direction: ltr;\n    display: inline;\n    dominant-baseline: auto;\n    drop-initial-after-adjust: text-after-edge;\n    drop-initial-after-align: baseline;\n    drop-initial-before-adjust: text-before-edge;\n    drop-initial-before-align: caps-height;\n    drop-initial-size: auto;\n    drop-initial-value: initial;\n    elevation: level;\n    empty-cells: show;\n    fit: fill;\n    fit-position: 0% 0%;\n    float: none;\n    float-offset: 0 0;\n    grid-columns: none;\n    grid-rows: none;\n    hanging-punctuation: none;\n    height: auto;\n    hyphenate-after: auto;\n    hyphenate-before: auto;\n    hyphenate-character: auto;\n    hyphenate-lines: no-limit;\n    hyphenate-resource: none;\n    -webkit-hyphens: manual;\n    -moz-hyphens: manual;\n    -ms-hyphens: manual;\n    hyphens: manual;\n    icon: auto;\n    image-orientation: auto;\n    image-rendering: auto;\n    image-resolution: normal;\n    inline-box-align: last;\n    left: auto;\n    line-height: inherit;\n    line-stacking: inline-line-height exclude-ruby consider-shifts;\n    list-style: disc outside none;\n    margin: 0;\n    marks: none;\n    marquee-direction: forward;\n    marquee-loop: 1;\n    marquee-play-count: 1;\n    marquee-speed: normal;\n    marquee-style: scroll;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    move-to: normal;\n    nav-down: auto;\n    nav-index: auto;\n    nav-left: auto;\n    nav-right: auto;\n    nav-up: auto;\n    opacity: 1;\n    orphans: 2;\n    outline: invert none medium;\n    outline-offset: 0;\n    overflow: visible;\n    overflow-style: auto;\n    padding: 0;\n    page: auto;\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: auto;\n    page-policy: start;\n    -webkit-perspective: none;\n    perspective: none;\n    -webkit-perspective-origin: 50% 50%;\n    perspective-origin: 50% 50%;\n    position: static;\n    presentation-level: 0;\n    punctuation-trim: none;\n    quotes: none;\n    rendering-intent: auto;\n    resize: none;\n    right: auto;\n    rotation: 0;\n    rotation-point: 50% 50%;\n    ruby-align: auto;\n    ruby-overhang: none;\n    ruby-position: before;\n    ruby-span: none;\n    size: auto;\n    string-set: none;\n    table-layout: auto;\n    top: auto;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    -webkit-transform-origin: 50% 50% 0;\n    -ms-transform-origin: 50% 50% 0;\n    transform-origin: 50% 50% 0;\n    -webkit-transform-style: flat;\n    transform-style: flat;\n    transition: all 0 ease 0;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    white-space: normal;\n    white-space-collapse: collapse;\n    widows: 2;\n    width: auto;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    z-index: auto;\n    text-align: start;\n    /* And disable MS gradients */\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  address, blockquote, dd, div, dl, dt, fieldset, form, div.form, frame, frameset, h1, h2, h3, h4, h5, h6, noframes, ol, p, ul, center, dir, hr, menu, pre, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {\n    display: block;\n  }\n  li {\n    display: list-item;\n  }\n  table {\n    display: table;\n  }\n  tr {\n    display: table-row;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tbody {\n    display: table-row-group;\n  }\n  tfoot {\n    display: table-footer-group;\n  }\n  col {\n    display: table-column;\n  }\n  colgroup {\n    display: table-column-group;\n  }\n  td, th {\n    display: table-cell;\n  }\n  caption {\n    display: table-caption;\n  }\n  input, select {\n    display: inline-block;\n  }\n  b, strong {\n    font-weight: bold;\n  }\n  b > i, strong > i, b > em, strong > em {\n    font-weight: bold;\n    font-style: italic;\n  }\n  i > {\n    b, strong {\n      font-weight: bold;\n      font-style: italic;\n    }\n  }\n  em > {\n    b, strong {\n      font-weight: bold;\n      font-style: italic;\n    }\n  }\n  textarea, input {\n    cursor: text;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"reset": `SmilyCalendar__reset`,
	"form": `SmilyCalendar__form`,
	"button": `SmilyCalendar__button`,
	"legend": `SmilyCalendar__legend`
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/calendar.scss"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/calendar.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/********************************************************

    loader

********************************************************/
@-webkit-keyframes SmilyCalendar__smily-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes SmilyCalendar__smily-spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.SmilyCalendar__calendar::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  content: "";
}
.SmilyCalendar__calendar::after {
  position: absolute;
  top: 50%;
  left: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30.97'%3E%3Cpath d='M32,15.48a16.52,16.52,0,0,1-1.37,6.28,16.35,16.35,0,0,1-9,8.63,15.87,15.87,0,0,1-17.3-3.78A15.43,15.43,0,0,1,4.72,4.72,15,15,0,0,1,15.49.52a14.76,14.76,0,0,1,10.4,4.56A14.77,14.77,0,0,1,29,9.9a14.45,14.45,0,0,1,.85,3.35h.13A2.06,2.06,0,0,1,32,15.31a.91.91,0,0,1,0,.17ZM28.72,10a14.27,14.27,0,0,0-3.2-4.55,14,14,0,0,0-10-3.9A13.72,13.72,0,0,0,3,10.3a13.43,13.43,0,0,0,.24,10.27,13.05,13.05,0,0,0,12.28,7.82,12.92,12.92,0,0,0,4.88-1.1,12.65,12.65,0,0,0,4.06-2.87,12.48,12.48,0,0,0,2.62-4.15,12.24,12.24,0,0,0,.82-4.79h0a.91.91,0,0,1,0-.17,2.07,2.07,0,0,1,1.84-2.05,14.27,14.27,0,0,0-1-3.26Z' transform='translate(0 -0.51)'/%3E%3C/svg%3E");
  height: 20px;
  width: 20px;
  margin: -10px 0 0 -10px;
  content: "";
  -webkit-animation: SmilyCalendar__smily-spin 2s infinite linear;
  animation: SmilyCalendar__smily-spin 2s infinite linear;
  animation-play-state: paused;
}
.SmilyCalendar__calendar::before, .SmilyCalendar__calendar::after {
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.25s ease-in-out;
  -o-transition: opacity 0.25s ease-in-out;
  transition: opacity 0.25s ease-in-out;
}
.SmilyCalendar__calendar.SmilyCalendar__loading::before, .SmilyCalendar__calendar.SmilyCalendar__loading::after {
  opacity: 1;
  visibility: visible;
  animation-play-state: running;
}

/********************************************************

    dropdown

********************************************************/
.SmilyCalendar__calendar.SmilyCalendar__dropBasic {
  position: absolute;
  display: none;
  max-width: 100%;
  box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e0e0;
  background: #fff;
  margin: 0;
  padding: 1em;
  font-family: inherit;
  line-height: 1.5em;
  z-index: 10;
}
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__visible {
  display: block;
}
.SmilyCalendar__calendar.SmilyCalendar__dropBasic .SmilyCalendar__caption {
  margin-bottom: 0.7em;
}
.SmilyCalendar__calendar.SmilyCalendar__dropBasic .SmilyCalendar__forward,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic .SmilyCalendar__back {
  top: 1em;
  left: 1em;
}
.SmilyCalendar__calendar.SmilyCalendar__dropBasic .SmilyCalendar__forward {
  left: auto;
  right: 1em;
}

.SmilyCalendar__calendar[data-theme=basic] .SmilyCalendar__cell::before, .SmilyCalendar__calendar[data-theme=basic] .SmilyCalendar__cell::after {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  margin: 0;
  content: "";
  z-index: 0;
}

/********************************************************

    selections, left - center - right

********************************************************/
/********************************************************
  cells disabled
/*******************************************************/
.SmilyCalendar__calendar[data-theme=basic] [data-disabled=center] {
  text-decoration: line-through;
  color: var(--smily-calendar-disabled-color, #bfbfbf);
}

/********************************************************
  cells highlighted
/*******************************************************/
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=left] {
  color: var(--smily-calendar-highlighted-color, rgb(55.25, 55.25, 55.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=left]::before {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
  width: 50%;
  left: 50%;
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=left]::after {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  border-radius: var(--smily-calendar-cell-border-radius, 6px);
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=center] {
  color: var(--smily-calendar-highlighted-color, rgb(55.25, 55.25, 55.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=center]::before {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=right] {
  color: var(--smily-calendar-highlighted-color, rgb(55.25, 55.25, 55.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=right]::before {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
  width: 50%;
  right: 50%;
}
.SmilyCalendar__calendar[data-theme=basic] [data-highlighted=right]::after {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  border-radius: var(--smily-calendar-cell-border-radius, 6px);
}

/********************************************************
  cells invalid
/*******************************************************/
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=left] {
  color: var(--smily-calendar-invalid-color, rgb(178.25, 178.25, 178.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=left]::before {
  background: var(--smily-calendar-invalid-bg-color, rgb(227.25, 227.25, 227.25));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
  width: 50%;
  left: 50%;
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=left]::after {
  background: var(--smily-calendar-invalid-bg-color, rgb(227.25, 227.25, 227.25));
  border-radius: var(--smily-calendar-cell-border-radius, 6px);
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=center] {
  color: var(--smily-calendar-invalid-color, rgb(178.25, 178.25, 178.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=center]::before {
  background: var(--smily-calendar-invalid-bg-color, rgb(227.25, 227.25, 227.25));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=right] {
  color: var(--smily-calendar-invalid-color, rgb(178.25, 178.25, 178.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=right]::before {
  background: var(--smily-calendar-invalid-bg-color, rgb(227.25, 227.25, 227.25));
  opacity: var(--smily-calendar-cell-bg-opacity, 0.5);
  width: 50%;
  right: 50%;
}
.SmilyCalendar__calendar[data-theme=basic] [data-invalid=right]::after {
  background: var(--smily-calendar-invalid-bg-color, rgb(227.25, 227.25, 227.25));
  border-radius: var(--smily-calendar-cell-border-radius, 6px);
}

/********************************************************
  cell hover
/*******************************************************/
.SmilyCalendar__calendar[data-theme=basic] [data-hovered]:not([data-disabled=center]) {
  color: var(--smily-calendar-highlighted-color, rgb(55.25, 55.25, 55.25));
}
.SmilyCalendar__calendar[data-theme=basic] [data-hovered]:not([data-disabled=center])::after {
  background: var(--smily-calendar-highlighted-bg-color, rgb(183.2696629213, 202.4831460674, 250.7303370787));
  border-radius: var(--smily-calendar-cell-border-radius, 6px);
}

/********************************************************

    colors

********************************************************/
.SmilyCalendar__calendar {
  font: 1rem/1.4 Helvetica, Arial, sans-serif;
  position: relative;
  background: #fff;
  --calendar-weekdays-height: 25px;
}
.SmilyCalendar__calendar .SmilyCalendar__caption {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 3rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 0.8em;
  padding-top: 0;
  text-align: center;
}
.SmilyCalendar__calendar .SmilyCalendar__captionPicker {
  position: relative;
  display: inline-block;
  width: fit-content;
  max-width: 100%;
  flex: 0 0 auto;
  box-sizing: border-box;
  text-align: center;
}
.SmilyCalendar__calendar .SmilyCalendar__sprite {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}
.SmilyCalendar__calendar .SmilyCalendar__captionTrigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 100%;
  flex: 0 0 auto;
  box-sizing: border-box;
  border: 0;
  background: transparent;
  border-radius: 6px;
  color: #444444;
  font: inherit;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  padding: 0.35rem 0.55rem;
  text-align: center;
  cursor: pointer;
  gap: 0.45rem;
  transition: background-color 120ms ease;
}
.SmilyCalendar__calendar .SmilyCalendar__captionLabel {
  display: inline-block;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
  box-sizing: border-box;
  white-space: nowrap;
}
.SmilyCalendar__calendar .SmilyCalendar__captionChevron {
  display: inline-block;
  width: 0.95rem;
  height: 0.95rem;
  flex: 0 0 auto;
  box-sizing: border-box;
  vertical-align: middle;
  fill: currentColor;
}
.SmilyCalendar__calendar .SmilyCalendar__captionTrigger:hover,
.SmilyCalendar__calendar .SmilyCalendar__captionTrigger[aria-expanded=true] {
  background: rgba(0, 0, 0, 0.06);
}
.SmilyCalendar__calendar .SmilyCalendar__captionTrigger:focus-visible,
.SmilyCalendar__calendar .SmilyCalendar__yearPager:focus-visible,
.SmilyCalendar__calendar .SmilyCalendar__yearOption:focus-visible {
  outline: 2px solid #444444;
  outline-offset: 1px;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPickerPanel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  height: 100%;
  transform: none;
  width: auto;
  box-sizing: border-box;
  background: #fff;
  padding: 0.75rem;
  z-index: 20;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 0.6rem;
  overflow: hidden;
  align-content: start;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPickerClose {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  background: rgba(0, 0, 0, 0.03);
  color: #444444;
  font: inherit;
  font-weight: 600;
  line-height: 1.35;
  min-height: 2.7rem;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.6rem 0.75rem;
  text-align: center;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPickerHeader {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 0.5rem;
  align-items: stretch;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPager {
  display: block;
  align-self: stretch;
  flex: 0 0 auto;
  border: 0;
  background: rgba(0, 0, 0, 0.03);
  color: #444444;
  font: inherit;
  font-weight: 600;
  line-height: 1.35;
  width: 100%;
  box-sizing: border-box;
  min-height: 2.7rem;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.6rem 0.75rem;
  text-align: center;
  white-space: normal;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPager[disabled] {
  opacity: 0.45;
  cursor: default;
}
.SmilyCalendar__calendar .SmilyCalendar__yearGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(3.05rem, auto);
  gap: 0.4rem;
  align-self: stretch;
  overflow-y: auto;
  padding-right: 0.1rem;
}
.SmilyCalendar__calendar .SmilyCalendar__yearPickerClose:focus-visible {
  outline: 2px solid #444444;
  outline-offset: 1px;
}
.SmilyCalendar__calendar .SmilyCalendar__yearOption {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: #444444;
  border-radius: 6px;
  font: inherit;
  line-height: 1.35;
  padding: 0.45rem;
  cursor: pointer;
  text-align: center;
}
.SmilyCalendar__calendar .SmilyCalendar__yearOption[data-selected-year] {
  background: rgba(0, 0, 0, 0.06);
  font-weight: 700;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip {
  background: var(--smily-calendar-tooltip-bg-color, #333);
  color: var(--smily-calendar-tooltip-color, #fff);
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  z-index: 500;
  pointer-events: none;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip .SmilyCalendar__tooltipArrow {
  visibility: hidden;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip .SmilyCalendar__tooltipArrow, .SmilyCalendar__calendar .SmilyCalendar__tooltip .SmilyCalendar__tooltipArrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip .SmilyCalendar__tooltipArrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip[data-popper-placement^=top] > .SmilyCalendar__tooltipArrow {
  bottom: -4px;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip[data-popper-placement^=bottom] > .SmilyCalendar__tooltipArrow {
  top: -4px;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip[data-popper-placement^=left] > .SmilyCalendar__tooltipArrow {
  right: -4px;
}
.SmilyCalendar__calendar .SmilyCalendar__tooltip[data-popper-placement^=right] > .SmilyCalendar__tooltipArrow {
  left: -4px;
}
.SmilyCalendar__calendar .SmilyCalendar__monthsWrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 2em;
}
.SmilyCalendar__calendar .SmilyCalendar__pagination {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 2rem;
  z-index: 2;
}
.SmilyCalendar__calendar .SmilyCalendar__mobileWeekdays {
  display: none;
}
.SmilyCalendar__calendar .SmilyCalendar__mCell {
  font-size: 0.875em;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 25%;
  flex: 1 1 25%;
}
@media only screen and (max-width: 990px) {
  .SmilyCalendar__calendar .SmilyCalendar__mCell {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
  }
}
.SmilyCalendar__calendar .SmilyCalendar__month {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
}
.SmilyCalendar__calendar .SmilyCalendar__tableHeader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 0;
}
.SmilyCalendar__calendar .SmilyCalendar__body {
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  gap: 0.2em;
}
.SmilyCalendar__calendar .SmilyCalendar__weekRow {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.SmilyCalendar__calendar .SmilyCalendar__th,
.SmilyCalendar__calendar .SmilyCalendar__cell,
.SmilyCalendar__calendar .SmilyCalendar__placeholder {
  width: 30px;
  min-width: 30px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 30px;
  flex: 1 1 30px;
  box-sizing: border-box;
}
.SmilyCalendar__calendar .SmilyCalendar__th {
  font-size: 0.85em;
  color: #aaaaaa;
  height: 25px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.SmilyCalendar__calendar .SmilyCalendar__cell {
  text-align: center;
  padding: 0;
  position: relative;
  border: 0;
  color: #444444;
  background-clip: padding-box;
  overflow: hidden;
  height: auto;
  aspect-ratio: 1/1;
}
.SmilyCalendar__calendar .SmilyCalendar__cell:focus {
  outline: none;
}
.SmilyCalendar__calendar .SmilyCalendar__cell:focus-visible {
  outline: 2px solid #444444;
  outline-offset: -2px;
  z-index: 2;
}
.SmilyCalendar__calendar .SmilyCalendar__cell.SmilyCalendar__today {
  font-weight: bold;
}
.SmilyCalendar__calendar .SmilyCalendar__placeholder {
  height: auto;
  aspect-ratio: 1/1;
}
.SmilyCalendar__calendar .SmilyCalendar__cnt {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  font-size: 1em;
  font-weight: inherit;
}
.SmilyCalendar__calendar .SmilyCalendar__info {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.65em;
  padding: 1px 3px;
  color: rgba(60, 60, 60, 0.5);
  right: 0;
  line-height: 1.1;
  text-align: center;
}

.SmilyCalendar__calendar.SmilyCalendar__yearPickerOpen {
  overflow-y: hidden !important;
}

.SmilyCalendar__focus,
.SmilyCalendar__disabled,
.SmilyCalendar__selected,
.SmilyCalendar__reversed,
.SmilyCalendar__direct,
.SmilyCalendar__selectingReversed,
.SmilyCalendar__selectingDirect,
.SmilyCalendar__actionsEnabled,
.SmilyCalendar__highlighted,
.SmilyCalendar__invalid {
  color: inherit;
}

/********************************************************
  cell hover cursors
/*******************************************************/
.SmilyCalendar__calendar[data-selectable=true] .SmilyCalendar__cell * {
  cursor: pointer;
}

/********************************************************

    buttons

********************************************************/
.SmilyCalendar__calendar .SmilyCalendar__forward,
.SmilyCalendar__calendar .SmilyCalendar__back {
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  width: 23px;
  fill: #444444;
  padding: 0;
  border-radius: 1px;
  cursor: pointer;
  z-index: 2;
}
.SmilyCalendar__calendar .SmilyCalendar__forward svg,
.SmilyCalendar__calendar .SmilyCalendar__back svg {
  height: inherit;
  width: inherit;
}
.SmilyCalendar__calendar .SmilyCalendar__forward {
  right: 0;
  left: auto;
}
.SmilyCalendar__calendar .SmilyCalendar__forward:active,
.SmilyCalendar__calendar .SmilyCalendar__forward:focus,
.SmilyCalendar__calendar .SmilyCalendar__back:active,
.SmilyCalendar__calendar .SmilyCalendar__back:focus {
  outline: none;
}
.SmilyCalendar__calendar .SmilyCalendar__forward:focus-visible,
.SmilyCalendar__calendar .SmilyCalendar__back:focus-visible {
  outline: 2px solid #444444;
}
.SmilyCalendar__calendar .SmilyCalendar__forward:hover,
.SmilyCalendar__calendar .SmilyCalendar__back:hover {
  fill: #3895d9;
}
.SmilyCalendar__calendar .SmilyCalendar__forward[disabled],
.SmilyCalendar__calendar .SmilyCalendar__forward[disabled]:hover,
.SmilyCalendar__calendar .SmilyCalendar__back[disabled],
.SmilyCalendar__calendar .SmilyCalendar__back[disabled]:hover {
  opacity: 0.5;
  cursor: default;
  fill: #444444;
}

/********************************************************

    mobile mode

********************************************************/
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic),
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  max-height: 75vh;
  overflow-y: auto;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__pagination,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__pagination {
  position: sticky;
  grid-column: 1;
  grid-row: 1;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  min-height: 0;
  height: 0;
  pointer-events: none;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__monthsWrapper,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__monthsWrapper {
  grid-column: 1;
  grid-row: 1;
  flex-direction: column;
  gap: 1em;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__mobileWeekdays,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__mobileWeekdays {
  display: flex;
  position: sticky;
  grid-column: 1;
  grid-row: 1;
  top: 0;
  z-index: 5;
  background: #fff;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__mCell,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__mCell {
  flex: 1 1 100%;
  max-width: 100%;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__caption,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__caption {
  position: sticky;
  top: var(--calendar-weekdays-height);
  z-index: 4;
  background: #fff;
  margin-bottom: 0.8em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__month:first-child .SmilyCalendar__caption,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__month:first-child .SmilyCalendar__caption {
  margin-top: 0.35em;
  margin-bottom: 2.15em;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic) .SmilyCalendar__tableHeader,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible .SmilyCalendar__tableHeader {
  display: none;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic):not(.SmilyCalendar__mobilePaginationEnabled) .SmilyCalendar__forward,
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic):not(.SmilyCalendar__mobilePaginationEnabled) .SmilyCalendar__back,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible:not(.SmilyCalendar__mobilePaginationEnabled) .SmilyCalendar__forward,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible:not(.SmilyCalendar__mobilePaginationEnabled) .SmilyCalendar__back {
  display: none;
}
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic).SmilyCalendar__mobilePaginationEnabled .SmilyCalendar__forward,
.SmilyCalendar__calendar.SmilyCalendar__mobileMode:not(.SmilyCalendar__dropBasic).SmilyCalendar__mobilePaginationEnabled .SmilyCalendar__back,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible.SmilyCalendar__mobilePaginationEnabled .SmilyCalendar__forward,
.SmilyCalendar__calendar.SmilyCalendar__dropBasic.SmilyCalendar__mobileMode.SmilyCalendar__visible.SmilyCalendar__mobilePaginationEnabled .SmilyCalendar__back {
  display: block;
  top: var(--calendar-weekdays-height);
  pointer-events: auto;
}

.SmilyCalendar__srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  .SmilyCalendar__calendar * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/loading.scss","webpack://./src/styles/calendar.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/drop.scss","webpack://./src/styles/theme-basic.scss"],"names":[],"mappings":"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","sourcesContent":["/********************************************************\n\n    loader\n\n********************************************************/\n\n@-webkit-keyframes smily-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes smily-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.calendar {\n  &::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(#fff, .7);\n    content: '';\n  }\n\n  &::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n    background-image: $icon-spinner-svg;\n    height: 20px;\n    width: 20px;\n    margin: -10px 0 0 -10px;\n    content: '';\n    -webkit-animation: smily-spin 2s infinite linear;\n    animation: smily-spin 2s infinite linear;\n    animation-play-state: paused;\n  }\n\n  &::before,\n  &::after {\n    z-index: 1000;\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transition: $transition;\n    -o-transition: $transition;\n    transition: $transition;\n  }\n\n  &.loading {\n    &::before,\n    &::after {\n      opacity: 1;\n      visibility: visible;\n      animation-play-state: running;\n    }\n  }\n}\n","@import 'svg-uri';\n@import 'variables';\n@import 'loading';\n@import 'drop';\n@import 'theme-basic';\n\n/********************************************************\n\n    colors\n\n********************************************************/\n\n.calendar {\n  font: 1rem/1.4 Helvetica, Arial, sans-serif;\n  position: relative;\n  background: $calendar-bg-color;\n  --calendar-weekdays-height: 25px;\n\n  .caption {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    min-height: 3rem;\n    line-height: 1.2;\n    font-weight: 700;\n    margin-bottom: .8em;\n    padding-top: 0;\n    text-align: center;\n  }\n\n  .captionPicker {\n    position: relative;\n    display: inline-block;\n    width: fit-content;\n    max-width: 100%;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .sprite {\n    position: absolute;\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    pointer-events: none;\n  }\n\n  .captionTrigger {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    max-width: 100%;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    border: 0;\n    background: transparent;\n    border-radius: 6px;\n    color: $cell-color;\n    font: inherit;\n    font-weight: 700;\n    line-height: 1.2;\n    white-space: nowrap;\n    padding: 0.35rem 0.55rem;\n    text-align: center;\n    cursor: pointer;\n    gap: 0.45rem;\n    transition: background-color 120ms ease;\n  }\n\n  .captionLabel {\n    display: inline-block;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n    box-sizing: border-box;\n    white-space: nowrap;\n  }\n\n  .captionChevron {\n    display: inline-block;\n    width: 0.95rem;\n    height: 0.95rem;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    vertical-align: middle;\n    fill: currentColor;\n  }\n\n  .captionTrigger:hover,\n  .captionTrigger[aria-expanded='true'] {\n    background: rgba(0, 0, 0, 0.06);\n  }\n\n  .captionTrigger:focus-visible,\n  .yearPager:focus-visible,\n  .yearOption:focus-visible {\n    outline: 2px solid $btn-fill;\n    outline-offset: 1px;\n  }\n\n  .yearPickerPanel {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: auto;\n    height: 100%;\n    transform: none;\n    width: auto;\n    box-sizing: border-box;\n    background: $calendar-bg-color;\n    padding: 0.75rem;\n    z-index: 20;\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    gap: 0.6rem;\n    overflow: hidden;\n    align-content: start;\n  }\n\n  .yearPickerClose {\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    border: 0;\n    background: rgba(0, 0, 0, 0.03);\n    color: $btn-fill;\n    font: inherit;\n    font-weight: 600;\n    line-height: 1.35;\n    min-height: 2.7rem;\n    border-radius: 6px;\n    cursor: pointer;\n    padding: 0.6rem 0.75rem;\n    text-align: center;\n  }\n\n  .yearPickerHeader {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    gap: 0.5rem;\n    align-items: stretch;\n  }\n\n  .yearPager {\n    display: block;\n    align-self: stretch;\n    flex: 0 0 auto;\n    border: 0;\n    background: rgba(0, 0, 0, 0.03);\n    color: $btn-fill;\n    font: inherit;\n    font-weight: 600;\n    line-height: 1.35;\n    width: 100%;\n    box-sizing: border-box;\n    min-height: 2.7rem;\n    border-radius: 6px;\n    cursor: pointer;\n    padding: 0.6rem 0.75rem;\n    text-align: center;\n    white-space: normal;\n  }\n\n  .yearPager[disabled] {\n    opacity: 0.45;\n    cursor: default;\n  }\n\n  .yearGrid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    grid-auto-rows: minmax(3.05rem, auto);\n    gap: 0.4rem;\n    align-self: stretch;\n    overflow-y: auto;\n    padding-right: 0.1rem;\n  }\n\n  .yearPickerClose:focus-visible {\n    outline: 2px solid $btn-fill;\n    outline-offset: 1px;\n  }\n\n  .yearOption {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 0;\n    background: transparent;\n    color: $cell-color;\n    border-radius: 6px;\n    font: inherit;\n    line-height: 1.35;\n    padding: 0.45rem;\n    cursor: pointer;\n    text-align: center;\n  }\n\n  .yearOption[data-selected-year] {\n    background: rgba(0, 0, 0, 0.06);\n    font-weight: 700;\n  }\n\n  .tooltip {\n    background: $tooltip-bg-color;\n    color: $tooltip-color;\n    font-weight: bold;\n    padding: 4px 8px;\n    font-size: 13px;\n    border-radius: 4px;\n    z-index: 500;\n    pointer-events: none;\n\n    .tooltipArrow {\n      visibility: hidden;\n\n      &, &::before {\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        background: inherit;\n      }\n\n      &::before {\n        visibility: visible;\n        content: '';\n        transform: rotate(45deg);\n      }\n    }\n\n    &[data-popper-placement^='top'] > .tooltipArrow {\n      bottom: -4px;\n    }\n    \n    &[data-popper-placement^='bottom'] > .tooltipArrow {\n      top: -4px;\n    }\n    \n    &[data-popper-placement^='left'] > .tooltipArrow {\n      right: -4px;\n    }\n    \n    &[data-popper-placement^='right'] > .tooltipArrow {\n      left: -4px;\n    }\n  }\n\n  .monthsWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    gap: 2em;\n  }\n\n  .pagination {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    min-height: 2rem;\n    z-index: 2;\n  }\n\n  .mobileWeekdays {\n    display: none;\n  }\n\n  .mCell {\n    font-size: 0.875em;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n\n    @media only screen and (max-width: 990px) {\n      -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n      flex: 1 1 100%;\n    }\n  }\n\n  .month {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n  }\n\n  .tableHeader {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    margin: 0;\n  }\n\n  .body {\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    gap: 0.2em;\n  }\n\n  .weekRow {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n  }\n\n  .th,\n  .cell,\n  .placeholder {\n    width: $cell-width;\n    min-width: $cell-width;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 $cell-width;\n    flex: 1 1 $cell-width;\n    box-sizing: border-box;\n  }\n\n  .th {\n    font-size: 0.85em;\n    color: $th-color;\n    height: 25px;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .cell {\n    text-align: center;\n    padding: 0;\n    position: relative;\n    border: 0;\n    color: $cell-color;\n    background-clip: padding-box;\n    overflow: hidden;\n    height: auto;\n    aspect-ratio: 1 / 1;\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus-visible {\n      outline: 2px solid $btn-fill;\n      outline-offset: -2px;\n      z-index: 2;\n    }\n\n    &.today {\n      font-weight: bold;\n    }\n  }\n\n  .placeholder {\n    height: auto;\n    aspect-ratio: 1 / 1;\n  }\n\n  .cnt {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    font-size: 1em;\n    font-weight: inherit;\n  }\n\n  .info {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 0.65em;\n    padding: 1px 3px;\n    color: $info-color;\n    right: 0;\n    line-height: 1.1;\n    text-align: center;\n  }\n}\n\n.calendar.yearPickerOpen {\n  overflow-y: hidden !important;\n}\n\n.focus,\n.disabled,\n.selected,\n.reversed,\n.direct,\n.selectingReversed,\n.selectingDirect,\n.actionsEnabled,\n.highlighted,\n.invalid {\n  color: inherit;\n}\n\n/********************************************************\n  cell hover cursors\n/*******************************************************/\n\n.calendar {\n  // cursor pointer if calendar is selectable\n  &[data-selectable=\"true\"] .cell * {\n    cursor: pointer;\n  }\n}\n\n/********************************************************\n\n    buttons\n\n********************************************************/\n.calendar {\n\n  .forward,\n  .back {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 3rem;\n    width: 23px;\n    fill: $btn-fill;\n    padding: 0;\n    border-radius: 1px;\n    cursor: pointer;\n    z-index: 2;\n\n    svg {\n    height: inherit;\n    width: inherit;\n    }\n  }\n\n  .forward {\n    right: 0;\n    left: auto;\n  }\n\n  .forward:active,\n  .forward:focus,\n  .back:active,\n  .back:focus {\n    outline: none;\n  }\n\n  .forward:focus-visible,\n  .back:focus-visible {\n    outline: 2px solid $btn-fill;\n  }\n\n  .forward:hover,\n  .back:hover {\n    fill: $btn-fill-hover;\n  }\n\n  .forward[disabled],\n  .forward[disabled]:hover,\n  .back[disabled],\n  .back[disabled]:hover {\n    opacity: 0.5;\n    cursor: default;\n    fill: $btn-fill;\n  }\n}\n\n/********************************************************\n\n    mobile mode\n\n********************************************************/\n.calendar.mobileMode:not(.dropBasic),\n.calendar.dropBasic.mobileMode.visible {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: start;\n  max-height: 75vh;\n  overflow-y: auto;\n\n  .pagination {\n    position: sticky;\n    grid-column: 1;\n    grid-row: 1;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 9;\n    min-height: 0;\n    height: 0;\n    pointer-events: none;\n  }\n\n  .monthsWrapper {\n    grid-column: 1;\n    grid-row: 1;\n    flex-direction: column;\n    gap: 1em;\n  }\n\n  .mobileWeekdays {\n    display: flex;\n    position: sticky;\n    grid-column: 1;\n    grid-row: 1;\n    top: 0;\n    z-index: 5;\n    background: $calendar-bg-color;\n  }\n\n  .mCell {\n    flex: 1 1 100%;\n    max-width: 100%;\n  }\n\n  .caption {\n    position: sticky;\n    top: var(--calendar-weekdays-height);\n    z-index: 4;\n    background: $calendar-bg-color;\n    margin-bottom: .8em;\n    border-bottom: 1px solid rgba(0, 0, 0, .1);\n  }\n\n  .month:first-child .caption {\n    margin-top: .35em;\n    margin-bottom: 2.15em;\n  }\n\n  .tableHeader {\n    display: none;\n  }\n\n  &:not(.mobilePaginationEnabled) {\n    .forward,\n    .back {\n      display: none;\n    }\n  }\n\n  &.mobilePaginationEnabled {\n    .forward,\n    .back {\n      display: block;\n      top: var(--calendar-weekdays-height);\n      pointer-events: auto;\n    }\n  }\n}\n\n.srOnly {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .calendar {\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n}\n","$icon-spinner-svg:      svg-uri(\"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30.97'><path d='M32,15.48a16.52,16.52,0,0,1-1.37,6.28,16.35,16.35,0,0,1-9,8.63,15.87,15.87,0,0,1-17.3-3.78A15.43,15.43,0,0,1,4.72,4.72,15,15,0,0,1,15.49.52a14.76,14.76,0,0,1,10.4,4.56A14.77,14.77,0,0,1,29,9.9a14.45,14.45,0,0,1,.85,3.35h.13A2.06,2.06,0,0,1,32,15.31a.91.91,0,0,1,0,.17ZM28.72,10a14.27,14.27,0,0,0-3.2-4.55,14,14,0,0,0-10-3.9A13.72,13.72,0,0,0,3,10.3a13.43,13.43,0,0,0,.24,10.27,13.05,13.05,0,0,0,12.28,7.82,12.92,12.92,0,0,0,4.88-1.1,12.65,12.65,0,0,0,4.06-2.87,12.48,12.48,0,0,0,2.62-4.15,12.24,12.24,0,0,0,.82-4.79h0a.91.91,0,0,1,0-.17,2.07,2.07,0,0,1,1.84-2.05,14.27,14.27,0,0,0-1-3.26Z' transform='translate(0 -0.51)'/></svg>\");\n\n$breakpoint-xs:         900px;\n\n$transition:            opacity 0.25s ease-in-out;\n\n// tooltip\n\n$tooltip-bg-color:      var(--smily-calendar-tooltip-bg-color, #333);\n$tooltip-color:         var(--smily-calendar-tooltip-color, #fff);\n\n// calendar\n\n$calendar-bg-color:     #fff;\n\n// calendar cells\n\n$cell-width:            30px;\n\n$cell-color:            #444444;\n\n$disabled-bg-color:     var(--smily-calendar-disabled-bg-color, #f0f0f0);\n$disabled-color:        var(--smily-calendar-disabled-color, #bfbfbf);\n\n$highlighted-bg-color:  var(--smily-calendar-highlighted-bg-color, lighten(#5784F5, 20%));\n$highlighted-color:     var(--smily-calendar-highlighted-color, darken($cell-color, 5%));\n\n$invalid-bg-color:      var(--smily-calendar-invalid-bg-color, darken(#f0f0f0,  5%));\n$invalid-color:         var(--smily-calendar-invalid-color, darken(#bfbfbf, 5%));\n\n// calendar table\n\n$info-color:            rgba(60, 60, 60, 0.5);\n\n$th-border-bottom:      #cbcbcb;\n$th-color:              #aaaaaa;\n\n// form\n\n$btn-fill:              $cell-color;\n$btn-border:            $th-border-bottom;\n$btn-fill-hover:        #3895d9;\n","/********************************************************\n\n    dropdown\n\n********************************************************/\n\n.calendar.dropBasic {\n  position: absolute;\n  display: none;\n  max-width: 100%;\n  box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.2);\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  margin: 0;\n  padding: 1em;\n  font-family: inherit;\n  line-height: 1.5em;\n  z-index: 10;\n\n  &.visible {\n    display: block;\n  }\n\n  .caption {\n    margin-bottom: .7em;\n  }\n\n  .forward,\n  .back {\n    top: 1em;\n    left: 1em;\n  }\n\n  .forward {\n    left: auto;\n    right: 1em;\n  }\n}\n","$cell-border-radius: var(--smily-calendar-cell-border-radius, 6px);\n$cell-bg-opacity: var(--smily-calendar-cell-bg-opacity, .5);\n\n.calendar[data-theme=\"basic\"] {\n  .cell {\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      margin: 0;\n      content: '';\n      z-index: 0;\n    }\n  }\n}\n\n/********************************************************\n\n    selections, left - center - right\n\n********************************************************/\n\n/********************************************************\n  cells disabled\n/*******************************************************/\n\n.calendar[data-theme=\"basic\"] {\n  // [data-disabled=\"left\"] {\n  //   color: $disabled-color;\n  // }\n\n  [data-disabled=\"center\"] {\n    text-decoration: line-through;\n    color: $disabled-color;\n  }\n}\n\n/********************************************************\n  cells highlighted\n/*******************************************************/\n\n.calendar[data-theme=\"basic\"] {\n  [data-highlighted=\"left\"] {\n    color: $highlighted-color;\n\n    &::before {\n      background: $highlighted-bg-color;\n      opacity: $cell-bg-opacity;\n      width: 50%;\n      left: 50%;\n    }\n\n    &::after {\n      background: $highlighted-bg-color;\n      border-radius: $cell-border-radius;\n    }\n  }\n\n  [data-highlighted=\"center\"] {\n    color: $highlighted-color;\n\n    &::before {\n      background: $highlighted-bg-color;\n      opacity: $cell-bg-opacity;\n    }\n  }\n\n  [data-highlighted=\"right\"] {\n    color: $highlighted-color;\n\n    &::before {\n      background: $highlighted-bg-color;\n      opacity: $cell-bg-opacity;\n      width: 50%;\n      right: 50%;\n    }\n\n    &::after {\n      background: $highlighted-bg-color;\n      border-radius: $cell-border-radius;\n    }\n  }\n}\n\n/********************************************************\n  cells invalid\n/*******************************************************/\n\n.calendar[data-theme=\"basic\"] {\n  [data-invalid=\"left\"] {\n    color: $invalid-color;\n\n    &::before {\n      background: $invalid-bg-color;\n      opacity: $cell-bg-opacity;\n      width: 50%;\n      left: 50%;\n    }\n\n    &::after {\n      background: $invalid-bg-color;\n      border-radius: $cell-border-radius;\n    }\n  }\n\n  [data-invalid=\"center\"] {\n    color: $invalid-color;\n\n    &::before {\n      background: $invalid-bg-color;\n      opacity: $cell-bg-opacity;\n    }\n  }\n\n  [data-invalid=\"right\"] {\n    color: $invalid-color;\n\n    &::before {\n      background: $invalid-bg-color;\n      opacity: $cell-bg-opacity;\n      width: 50%;\n      right: 50%;\n    }\n\n    &::after {\n      background: $invalid-bg-color;\n      border-radius: $cell-border-radius;\n    }\n  }\n}\n\n/********************************************************\n  cell hover\n/*******************************************************/\n\n.calendar[data-theme=\"basic\"] {\n  [data-hovered]:not([data-disabled=\"center\"]) {\n    color: $highlighted-color;\n\n    &::after {\n      background: $highlighted-bg-color;\n      border-radius: $cell-border-radius;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"calendar": `SmilyCalendar__calendar`,
	"smilySpin": `SmilyCalendar__smily-spin`,
	"loading": `SmilyCalendar__loading`,
	"dropBasic": `SmilyCalendar__dropBasic`,
	"visible": `SmilyCalendar__visible`,
	"caption": `SmilyCalendar__caption`,
	"forward": `SmilyCalendar__forward`,
	"back": `SmilyCalendar__back`,
	"cell": `SmilyCalendar__cell`,
	"captionPicker": `SmilyCalendar__captionPicker`,
	"sprite": `SmilyCalendar__sprite`,
	"captionTrigger": `SmilyCalendar__captionTrigger`,
	"captionLabel": `SmilyCalendar__captionLabel`,
	"captionChevron": `SmilyCalendar__captionChevron`,
	"yearPager": `SmilyCalendar__yearPager`,
	"yearOption": `SmilyCalendar__yearOption`,
	"yearPickerPanel": `SmilyCalendar__yearPickerPanel`,
	"yearPickerClose": `SmilyCalendar__yearPickerClose`,
	"yearPickerHeader": `SmilyCalendar__yearPickerHeader`,
	"yearGrid": `SmilyCalendar__yearGrid`,
	"tooltip": `SmilyCalendar__tooltip`,
	"tooltipArrow": `SmilyCalendar__tooltipArrow`,
	"monthsWrapper": `SmilyCalendar__monthsWrapper`,
	"pagination": `SmilyCalendar__pagination`,
	"mobileWeekdays": `SmilyCalendar__mobileWeekdays`,
	"mCell": `SmilyCalendar__mCell`,
	"month": `SmilyCalendar__month`,
	"tableHeader": `SmilyCalendar__tableHeader`,
	"body": `SmilyCalendar__body`,
	"weekRow": `SmilyCalendar__weekRow`,
	"th": `SmilyCalendar__th`,
	"placeholder": `SmilyCalendar__placeholder`,
	"today": `SmilyCalendar__today`,
	"cnt": `SmilyCalendar__cnt`,
	"info": `SmilyCalendar__info`,
	"yearPickerOpen": `SmilyCalendar__yearPickerOpen`,
	"focus": `SmilyCalendar__focus`,
	"disabled": `SmilyCalendar__disabled`,
	"selected": `SmilyCalendar__selected`,
	"reversed": `SmilyCalendar__reversed`,
	"direct": `SmilyCalendar__direct`,
	"selectingReversed": `SmilyCalendar__selectingReversed`,
	"selectingDirect": `SmilyCalendar__selectingDirect`,
	"actionsEnabled": `SmilyCalendar__actionsEnabled`,
	"highlighted": `SmilyCalendar__highlighted`,
	"invalid": `SmilyCalendar__invalid`,
	"mobileMode": `SmilyCalendar__mobileMode`,
	"mobilePaginationEnabled": `SmilyCalendar__mobilePaginationEnabled`,
	"srOnly": `SmilyCalendar__srOnly`
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./reset.scss */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/styles/reset.scss");
/* harmony import */ var _css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ },

/***/ "./src/styles/calendar.scss"
/*!**********************************!*\
  !*** ./src/styles/calendar.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./calendar.scss */ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.105.4/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.99.0_webpack@5.105.4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/calendar.scss");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_105_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_pnpm_css_loader_7_1_4_webpack_5_105_4_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_sass_loader_16_0_7_sass_1_99_0_webpack_5_105_4_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_calendar_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \**************************************************************************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \****************************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \****************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*********************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.4/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \***************************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./package.json"
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"bookingsync-calendar-widget","version":"3.0.0","description":"Smily Calendar Widget (formerly BookingSync)","main":"dist/bookingsync-calendar-widget.js","module":"src/index.js","sideEffects":false,"files":["/dist","/src"],"scripts":{"dev":"JSON_SERVER_PORT=3000 node json-server.js --quiet & webpack serve --open --config webpack.dev.js","build:unminified":"webpack --config webpack.dev.js","build":"webpack --config webpack.prod.js","test":"JSON_SERVER_PORT=3000 node json-server.js --quiet & karma start karma.config.js --colors","test-ci":"JSON_SERVER_PORT=3000 node json-server.js --quiet & sleep 2 && curl http://localhost:3000/api/v2/public/maps.json >/dev/null && karma start karma.config.js --single-run true","lint:js":"eslint ./*.js src","mock-server":"JSON_SERVER_PORT=3000 node nodemon-start.js","preversion":"pnpm run lint:js && pnpm run test-ci","version":"pnpm run build && pnpm run build:unminified && git add -A dist","postversion":"git push && git push --tags && rm -rf build/temp"},"dependencies":{"strtime":"^1.1.2","widget-utils":"1.0.0"},"devDependencies":{"@babel/cli":"^7.28.6","@babel/core":"^7.29.0","@babel/preset-env":"^7.29.2","assert":"^2.1.0","babel-loader":"^10.1.1","chai":"^6.2.2","css-loader":"^7.1.4","eslint":"^10.2.0","eslint-webpack-plugin":"^6.0.0","json-server":"0.17.4","karma":"^6.4.4","karma-chrome-launcher":"^3.2.0","karma-mocha":"^2.0.1","karma-webpack":"5.0.1","mocha":"11.7.5","nodemon":"^3.1.14","sass":"^1.99.0","sass-loader":"^16.0.7","style-loader":"^4.0.0","tether":"3.0.2","timezone-mock":"1.4.2","util":"^0.12.5","webpack":"^5.105.4","webpack-cli":"^7.0.2","webpack-dev-server":"5.2.3","webpack-merge":"^6.0.1","yargs":"18.0.0"},"repository":{"type":"git","url":"git+https://github.com/BookingSync/calendar-widget.git"},"author":"BookingSync.com","license":"MIT","bugs":{"url":"https://github.com/BookingSync/calendar-widget/issues"},"homepage":"https://github.com/BookingSync/calendar-widget#readme","packageManager":"pnpm@10.33.0","engines":{"node":">=18.12.0","pnpm":">=10.0.0"}}');

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global document, require, window */
let Calendar = __webpack_require__(/*! ./calendar */ "./src/calendar.js");
Calendar = Calendar.default;
const widgetUtils = __webpack_require__(/*! widget-utils */ "./node_modules/.pnpm/widget-utils@1.0.0/node_modules/widget-utils/src/index.js");
const autoInitSelector = '[data-smily-calendar-widget]';

// Export WidgetUtils
window.SmilyWidgetUtils = widgetUtils;
Calendar.init = opts => {
  const initialized = [];
  const options = opts || {};
  const elements = document.querySelectorAll(autoInitSelector);
  elements.forEach(element => {
    options.el = element;
    const cal = new Calendar(options);
    initialized.push(cal);
  });
  Calendar.instances = initialized;
  return initialized;
};
Calendar.VERSION = (__webpack_require__(/*! ../package.json */ "./package.json").version);
if (document.readyState !== 'loading') {
  Calendar.init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    Calendar.init();
  });
}
window.SmilyCalendarWidget = Calendar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMs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O0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsT0FBTyxFQUFFLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLO0VBQ2YsT0FBTyxFQUFFLENBQUMsS0FBSztFQUNmLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxJQUFJO0VBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEdBQUc7RUFDWixLQUFLLEVBQUUsQ0FBQyxHQUFHO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLElBQUk7RUFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEdBQUc7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxJQUFJO0VBQ1osS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLElBQUksRUFBRSxDQUFDLEdBQUc7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRztFQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUM7RUFDUixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsR0FBRyxFQUFFO0FBQ1QsQ0FBQztBQUdELElBQUcsSUFBOEIsRUFBQztFQUM5QnJQLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHOFEsT0FBTztBQUM1QixDQUFDLE1BQUs7QUFBQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwb0RtQztBQUNFO0FBQ007QUFFakQsTUFBTTtFQUFFRixLQUFLO0VBQUUvTztBQUFVLENBQUMsR0FBR0QsSUFBSTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTRhLElBQUksR0FBR0EsQ0FBQ0MsTUFBTSxFQUFFQyxPQUFPLEVBQUVoRSxLQUFLLEVBQUVpRSxNQUFNLEVBQUVDLE1BQU0sR0FBRyxLQUFLLEtBQUs7RUFDL0QsTUFBTUMsT0FBTyxHQUFHLElBQUlDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BDLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxLQUFLLEtBQUssSUFBSUQsTUFBTSxHQUFHLEdBQUdGLE1BQU0sSUFBSUgsNkRBQVMsQ0FBQ0ssTUFBTSxFQUFFSiw0REFBWSxDQUFDLEVBQUUsR0FBR0UsTUFBTTtFQUNoRyxNQUFNTyxTQUFTLEdBQUlDLE1BQU0sSUFBTUEsTUFBTSxJQUFJLEdBQUcsSUFBSUEsTUFBTSxHQUFHLEdBQUcsSUFBS0EsTUFBTSxLQUFLLEdBQUc7RUFFL0VKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDTixNQUFNLEVBQUVHLEdBQUcsQ0FBQztFQUN6QkYsT0FBTyxDQUFDTSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsMEJBQTBCLENBQUM7RUFFcEVOLE9BQU8sQ0FBQ08sa0JBQWtCLEdBQUcsTUFBTTtJQUNqQyxJQUFJQyxRQUFRO0lBRVosSUFBSVIsT0FBTyxDQUFDUyxVQUFVLEtBQUssQ0FBQyxFQUFFO01BQzVCLElBQUlOLFNBQVMsQ0FBQ0gsT0FBTyxDQUFDSSxNQUFNLENBQUMsRUFBRTtRQUM3QixJQUFJO1VBQ0ZJLFFBQVEsR0FBR3pNLEtBQUssQ0FBQ2lNLE9BQU8sQ0FBQ1UsWUFBWSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7VUFDVkgsUUFBUSxHQUFHUixPQUFPO1FBQ3BCO1FBRUFILE9BQU8sQ0FBQ1csUUFBUSxDQUFDO01BQ25CLENBQUMsTUFBTTtRQUNMM0UsS0FBSyxDQUFDbUUsT0FBTyxDQUFDO01BQ2hCO0lBQ0Y7RUFDRixDQUFDO0VBRUQsSUFBSVIsNERBQVEsQ0FBQ00sTUFBTSxDQUFDLElBQUlDLE1BQU0sS0FBSyxLQUFLLEVBQUU7SUFDeENDLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDNWIsU0FBUyxDQUFDOGEsTUFBTSxDQUFDLENBQUM7RUFDakMsQ0FBQyxNQUFNO0lBQ0xFLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDLENBQUM7RUFDaEI7QUFDRixDQUFDO0FBRUQsaUVBQWVqQixJQUFJLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGE7QUFFaEMsaUVBQWVrQixnREFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNGdEIsTUFBTTtFQUFFbmIsU0FBUyxFQUFFO0lBQUVwQztFQUFTO0FBQUUsQ0FBQyxHQUFHbUMsTUFBTTtBQUUzQixTQUFTb2IsT0FBT0EsQ0FBQ3RLLENBQUMsRUFBRTtFQUNqQyxPQUFPalQsUUFBUSxDQUFDc0MsSUFBSSxDQUFDMlEsQ0FBQyxDQUFDLEtBQUssZ0JBQWdCO0FBQzlDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjREO0FBRTVELE1BQU11Syw2QkFBNkIsR0FBR0EsQ0FBQSxLQUFNLENBQUMsRUFBRSxPQUFPQyxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLElBQUksT0FBT0EsSUFBSSxDQUFDQyxZQUFZLEtBQUssVUFBVSxDQUFDO0FBRTVHLFNBQVNDLGlCQUFpQkEsQ0FDdkNuSSxLQUFLLEVBQ0xvSSxJQUFJLEVBQ0pDLFFBQVEsRUFDUkMscUJBQXFCLEdBQUcsQ0FBQyxFQUN6QkMscUJBQXFCLEdBQUcsQ0FBQyxFQUN6QjtFQUNBLElBQUlQLDZCQUE2QixDQUFDLENBQUMsSUFBSUssUUFBUSxFQUFFO0lBQy9DLE1BQU1HLFFBQVEsR0FBR0EsQ0FBQSxLQUFNamMsMEVBQXFCLENBQUM4YixRQUFRLENBQUMsS0FBSyxHQUFHO0lBQzlELE1BQU16UCxPQUFPLEdBQUc7TUFDZDZQLEtBQUssRUFBRSxVQUFVO01BQ2pCSixRQUFRO01BQ1JLLGVBQWUsRUFBRUYsUUFBUSxHQUFHLFFBQVEsR0FBRyxNQUFNO01BQzdDRixxQkFBcUI7TUFDckJDO0lBQ0YsQ0FBQztJQUVELE1BQU1JLFlBQVksR0FBRyxJQUFJVixJQUFJLENBQUNDLFlBQVksQ0FBQ0UsSUFBSSxFQUFFeFAsT0FBTyxDQUFDO0lBQ3pELE1BQU1nUSxHQUFHLEdBQUdELFlBQVksQ0FBQzlPLE1BQU0sQ0FBQ21HLEtBQUssQ0FBQztJQUV0QyxJQUFJd0ksUUFBUSxJQUFJLENBQUNqYywwRUFBcUIsQ0FBQzhiLFFBQVEsQ0FBQyxFQUFFO01BQ2hELE9BQU9PLEdBQUc7SUFDWjtJQUNBLE9BQU9BLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDUixRQUFRLEVBQUU5YiwwRUFBcUIsQ0FBQzhiLFFBQVEsQ0FBQyxDQUFDO0VBQy9EO0VBRUEsT0FBT3JJLEtBQUs7QUFDZCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JvRDtBQUVwRCxpRUFBZW1JLDBEQUFpQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDRlE7QUFFeEMsaUVBQWVXLG9EQUFXLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ3BFLE1BQU1yRixVQUFVLEdBQUk5RyxJQUFJLElBQU9BLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFNQSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUUsSUFBTUEsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFFO0FBRTVFLFNBQVNrTSxXQUFXQSxDQUFDbE0sSUFBSSxFQUFFRSxLQUFLLEVBQUU7RUFDL0MsSUFBSXVHLElBQUksR0FBRzBGLFdBQVcsQ0FBQ2pNLEtBQUssQ0FBQztFQUM3QixJQUFJQSxLQUFLLEtBQUssQ0FBQyxJQUFJNEcsVUFBVSxDQUFDOUcsSUFBSSxDQUFDLEVBQUU7SUFDbkN5RyxJQUFJLEdBQUcsRUFBRTtFQUNYO0VBRUEsT0FBT0EsSUFBSTtBQUNiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h3QztBQUNFO0FBQ0E7QUFFM0IsU0FBUzhGLFFBQVFBLENBQUNDLEVBQUUsRUFBRSxHQUFHQyxVQUFVLEVBQUU7RUFDbEQsTUFBTWpLLElBQUksR0FBR2lLLFVBQVU7RUFFdkIsSUFBSSxPQUFPRCxFQUFFLENBQUNFLFNBQVMsS0FBSyxXQUFXLEVBQUU7SUFDdkNsSyxJQUFJLENBQUNtSyxPQUFPLENBQUVDLEdBQUcsSUFBSztNQUNwQixJQUFJQSxHQUFHLENBQUNoRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ2Q0RCxFQUFFLENBQUNFLFNBQVMsQ0FBQ0csR0FBRyxDQUFDRCxHQUFHLENBQUM7TUFDdkI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLE1BQU07SUFDTFIsd0RBQVcsQ0FBQ0ksRUFBRSxFQUFFaEssSUFBSSxDQUFDO0lBQ3JCLE1BQU1vSyxHQUFHLEdBQUcsR0FBR04seURBQVksQ0FBQ0UsRUFBRSxDQUFDLElBQUloSyxJQUFJLENBQUNyVSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDbkRrZSx5REFBWSxDQUFDRyxFQUFFLEVBQUVJLEdBQUcsQ0FBQztFQUN2QjtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxNQUFNO0VBQUVFO0FBQUssQ0FBQyxHQUFHL2MsTUFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2dkLGFBQWFBLENBQUN2SyxJQUFJLEVBQUV3SyxLQUFLLEVBQUU7RUFDakQsTUFBTTVDLE1BQU0sR0FBRzRDLEtBQUssSUFBSSxDQUFDLENBQUM7RUFDMUIsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNILGFBQWEsQ0FBQ3ZLLElBQUksQ0FBQztFQUU1Q3NLLElBQUksQ0FBQzFDLE1BQU0sQ0FBQyxDQUFDdmMsR0FBRyxDQUFFTyxDQUFDLElBQUs2ZSxPQUFPLENBQUNFLFlBQVksQ0FBQy9lLENBQUMsRUFBRWdjLE1BQU0sQ0FBQ2hjLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFM0QsT0FBTzZlLE9BQU87QUFDaEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDZmUsU0FBU0csY0FBY0EsQ0FBQ0gsT0FBTyxFQUFFO0VBQzlDLElBQUlBLE9BQU8sQ0FBQ0ksVUFBVSxJQUFJSixPQUFPLENBQUNJLFVBQVUsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3hETCxPQUFPLENBQUNJLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDTCxPQUFPLENBQUM7RUFDekM7RUFDQSxPQUFPQSxPQUFPO0FBQ2hCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNEM7QUFFN0IsU0FBU00saUJBQWlCQSxDQUFDbE8sTUFBTSxFQUFFO0VBQ2hELE1BQU00TixPQUFPLEdBQUdGLDBEQUFhLENBQUMsS0FBSyxDQUFDO0VBRXBDRSxPQUFPLENBQUNPLFNBQVMsR0FBR25PLE1BQU07RUFFMUIsT0FBTzROLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM1QixDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZSxTQUFTQyxlQUFlQSxDQUFDQyxPQUFPLEVBQUVuTCxJQUFJLEVBQUU7RUFDckQsT0FBT21MLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLElBQUlwTCxJQUFJLEVBQUUsQ0FBQztBQUMxQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZSxTQUFTOEosWUFBWUEsQ0FBQ0UsRUFBRSxFQUFFO0VBQ3ZDO0VBQ0E7RUFDQSxJQUFJQSxFQUFFLENBQUNxQixTQUFTLFlBQVlyQixFQUFFLENBQUNzQixhQUFhLENBQUNDLFdBQVcsQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDMUUsT0FBT3hCLEVBQUUsQ0FBQ3FCLFNBQVMsQ0FBQ0ksT0FBTztFQUM3QjtFQUNBLE9BQU96QixFQUFFLENBQUNxQixTQUFTO0FBQ3JCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNNLGtCQUFrQkEsQ0FBQzNCLEVBQUUsRUFBRTRCLElBQUksRUFBRTtFQUNuRCxPQUFPRixxRUFBd0IsQ0FBQzFCLEVBQUUsRUFBRTRCLElBQUksQ0FBQyxDQUFDaEwsS0FBSztBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjBDO0FBRTNCLFNBQVNpTCxRQUFRQSxDQUFDN0IsRUFBRSxFQUFFaEssSUFBSSxFQUFFO0VBQ3pDLElBQUksT0FBT2dLLEVBQUUsQ0FBQ0UsU0FBUyxLQUFLLFdBQVcsRUFBRTtJQUN2QyxPQUFPRixFQUFFLENBQUNFLFNBQVMsQ0FBQzRCLFFBQVEsQ0FBQzlMLElBQUksQ0FBQztFQUNwQztFQUVBLE1BQU1xTCxTQUFTLEdBQUd2Qix5REFBWSxDQUFDRSxFQUFFLENBQUM7RUFFbEMsT0FBTyxJQUFJK0IsTUFBTSxDQUFDLFFBQVEvTCxJQUFJLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQ2dNLElBQUksQ0FBQ1gsU0FBUyxDQUFDO0FBQzlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrQztBQUNVO0FBQ0U7QUFDTTtBQUNKO0FBQ047QUFDWTtBQUNwQjtBQUNBO0FBQ007QUFDRTtBQUN3QjtBQUVsRSxpRUFBZTtFQUNidEIsUUFBUTtFQUNSUSxhQUFhO0VBQ2JLLGNBQWM7RUFDZEcsaUJBQWlCO0VBQ2pCRyxlQUFlO0VBQ2ZwQixZQUFZO0VBQ1o2QixrQkFBa0I7RUFDbEJFLFFBQVE7RUFDUkksUUFBUTtFQUNSckMsV0FBVztFQUNYQyxZQUFZO0VBQ1o2Qix3QkFBd0JBLG9FQUFBQTtBQUMxQixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTTyxRQUFRQSxDQUFDRSxLQUFLLEVBQUVDLE1BQU0sRUFBRTtFQUM5QyxJQUFJQyxPQUFPLEdBQUdGLEtBQUs7RUFFbkIsT0FBT0UsT0FBTyxLQUFLRCxNQUFNLEVBQUU7SUFDekIsSUFBSSxDQUFDRiwrQ0FBRSxDQUFDRyxPQUFPLENBQUMsSUFBSUEsT0FBTyxDQUFDQyxPQUFPLEtBQUssTUFBTSxJQUFJRCxPQUFPLENBQUNDLE9BQU8sS0FBSyxNQUFNLEVBQUU7TUFDNUUsT0FBTyxLQUFLO0lBQ2Q7SUFDQUQsT0FBTyxHQUFHQSxPQUFPLENBQUN4QixVQUFVO0VBQzlCO0VBQ0EsT0FBTyxJQUFJO0FBQ2IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjBDO0FBQ0E7QUFFM0IsU0FBU2pCLFdBQVdBLENBQUNJLEVBQUUsRUFBRSxHQUFHQyxVQUFVLEVBQUU7RUFDckQsTUFBTWpLLElBQUksR0FBR2lLLFVBQVU7RUFFdkIsSUFBSSxPQUFPRCxFQUFFLENBQUNFLFNBQVMsS0FBSyxXQUFXLEVBQUU7SUFDdkNsSyxJQUFJLENBQUNtSyxPQUFPLENBQUVDLEdBQUcsSUFBSztNQUNwQixJQUFJQSxHQUFHLENBQUNoRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ2Q0RCxFQUFFLENBQUNFLFNBQVMsQ0FBQ3FDLE1BQU0sQ0FBQ25DLEdBQUcsQ0FBQztNQUMxQjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNMLE1BQU1vQyxLQUFLLEdBQUcsSUFBSVQsTUFBTSxDQUFDLFFBQVEvTCxJQUFJLENBQUNyVSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDN0QsTUFBTTBmLFNBQVMsR0FBR3ZCLHlEQUFZLENBQUNFLEVBQUUsQ0FBQyxDQUFDUCxPQUFPLENBQUMrQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQ3REM0MseURBQVksQ0FBQ0csRUFBRSxFQUFFcUIsU0FBUyxDQUFDO0VBQzdCO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJlLFNBQVN4QixZQUFZQSxDQUFDRyxFQUFFLEVBQUVxQixTQUFTLEVBQUU7RUFDbERyQixFQUFFLENBQUNXLFlBQVksQ0FBQyxPQUFPLEVBQUVVLFNBQVMsQ0FBQztBQUNyQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnVCO0FBRVIsU0FBU0ssd0JBQXdCQSxDQUFDakIsT0FBTyxFQUFFZ0MsU0FBUyxFQUFFO0VBQ25FLElBQUlMLE1BQU0sR0FBRzNCLE9BQU87RUFDcEIsSUFBSTdKLEtBQUssR0FBRzZKLE9BQU8sQ0FBQ2lDLFlBQVksQ0FBQ0QsU0FBUyxDQUFDO0VBQzNDLE9BQU8sQ0FBQ1AsK0NBQUUsQ0FBQ3RMLEtBQUssQ0FBQyxFQUFFO0lBQ2pCd0wsTUFBTSxHQUFHQSxNQUFNLENBQUN2QixVQUFVO0lBQzFCLElBQUl1QixNQUFNLElBQUksT0FBT0EsTUFBTSxDQUFDTSxZQUFZLEtBQUssVUFBVSxFQUFFO01BQ3ZEOUwsS0FBSyxHQUFHd0wsTUFBTSxDQUFDTSxZQUFZLENBQUNELFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQU07TUFDTEwsTUFBTSxHQUFHLElBQUk7TUFDYjtJQUNGO0VBQ0Y7RUFDQSxPQUFPO0lBQ0x4TCxLQUFLO0lBQ0x3TDtFQUNGLENBQUM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmUsTUFBTU8sT0FBTyxDQUFDO0VBQzNCQyxFQUFFQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDQSxNQUFNLENBQUNGLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxDQUFDRixLQUFLLENBQUMsSUFBSSxFQUFFO0lBQzdDLElBQUksQ0FBQ0UsTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQ3RnQixJQUFJLENBQUN1Z0IsUUFBUSxDQUFDO0lBQ2pDLE9BQU8sSUFBSTtFQUNiO0VBRUFFLElBQUlBLENBQUNILEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1HLElBQUksR0FBRyxJQUFJO0lBRWpCLFNBQVNDLEVBQUVBLENBQUMsR0FBR0MsSUFBSSxFQUFFO01BQ25CRixJQUFJLENBQUNHLEdBQUcsQ0FBQ1AsS0FBSyxFQUFFSyxFQUFFLENBQUM7TUFDbkJKLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLElBQUksRUFBRUYsSUFBSSxDQUFDO0lBQzVCO0lBRUFELEVBQUUsQ0FBQ0osUUFBUSxHQUFHQSxRQUFRO0lBQ3RCLElBQUksQ0FBQ0YsRUFBRSxDQUFDQyxLQUFLLEVBQUVLLEVBQUUsQ0FBQztJQUNsQixPQUFPLElBQUk7RUFDYjtFQUVBRSxHQUFHQSxDQUFDUCxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUNuQixJQUFJUSxTQUFTO0lBRWIsSUFBSSxJQUFJLENBQUNQLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7TUFDckNTLFNBQVMsR0FBRyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO01BRTlCUyxTQUFTLENBQUNuRCxPQUFPLENBQUMsQ0FBQytDLEVBQUUsRUFBRXRoQixDQUFDLEtBQUs7UUFDM0IsSUFBSXNoQixFQUFFLEtBQUtKLFFBQVEsSUFBSUksRUFBRSxDQUFDSixRQUFRLEtBQUtBLFFBQVEsRUFBRTtVQUMvQ1EsU0FBUyxDQUFDQyxNQUFNLENBQUMzaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUkwaEIsU0FBUyxDQUFDNWhCLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUNxaEIsTUFBTSxDQUFDRixLQUFLLENBQUM7TUFDM0I7SUFDRjtJQUNBLE9BQU8sSUFBSTtFQUNiO0VBRUFXLElBQUlBLENBQUNYLEtBQUssRUFBRSxHQUFHTSxJQUFJLEVBQUU7SUFDbkIsSUFBSUcsU0FBUztJQUViLElBQUksSUFBSSxDQUFDUCxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNGLEtBQUssQ0FBQyxFQUFFO01BQ3JDUyxTQUFTLEdBQUcsSUFBSSxDQUFDUCxNQUFNLENBQUNGLEtBQUssQ0FBQztNQUU5QlMsU0FBUyxHQUFHQSxTQUFTLENBQUNuUCxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQzlCbVAsU0FBUyxDQUFDbkQsT0FBTyxDQUFFK0MsRUFBRSxJQUFLQSxFQUFFLENBQUNHLEtBQUssQ0FBQyxJQUFJLEVBQUVGLElBQUksQ0FBQyxDQUFDO0lBQ2pEO0lBQ0EsT0FBTyxJQUFJO0VBQ2I7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRzQztBQUV0QyxpRUFBZU0sbURBQVUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDRlYsU0FBU0EsVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3BDLE9BQU8sT0FBT0EsQ0FBQyxLQUFLLFVBQVU7QUFDaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjhCO0FBQ2E7QUFDVjtBQUNUO0FBQ1k7QUFDVjtBQUNJO0FBQ0E7QUFFSjtBQUNNO0FBQ1Y7QUFDWTtBQUVsQyxNQUFNO0VBQ0ozRCxRQUFRO0VBQ1JRLGFBQWE7RUFDYkssY0FBYztFQUNkRyxpQkFBaUI7RUFDakJHLGVBQWU7RUFDZnBCLFlBQVk7RUFDWjZCLGtCQUFrQjtFQUNsQkUsUUFBUTtFQUNSSSxRQUFRO0VBQ1JyQyxXQUFXO0VBQ1hDLFlBQVk7RUFDWjZCO0FBQ0YsQ0FBQyxHQUFHaUMsNENBQUc7QUFFUCxNQUFNO0VBQUVJLGFBQWE7RUFBRUM7QUFBVSxDQUFDLEdBQUdKLDZDQUFJO0FBRXpDLE1BQU07RUFDSkssYUFBYTtFQUNiM0csUUFBUTtFQUNSNEcsS0FBSztFQUNMQyxJQUFJO0VBQ0o1RyxTQUFTO0VBQ1Q2RztBQUNGLENBQUMsR0FBR1AsK0NBQU07QUFFVixNQUFNO0VBQ0pRLGFBQWE7RUFDYkMsUUFBUTtFQUNSOUcsWUFBWTtFQUNaK0c7QUFDRixDQUFDLEdBQUcxUiwrQ0FBTTtBQUVWLGlFQUFlO0VBQ2I7RUFDQThMLE9BQU87RUFDUDtFQUNBSSxpQkFBaUI7RUFDakI7RUFDQVcsV0FBVztFQUNYO0VBQ0FLLFFBQVE7RUFDUlEsYUFBYTtFQUNiSyxjQUFjO0VBQ2RHLGlCQUFpQjtFQUNqQkcsZUFBZTtFQUNmcEIsWUFBWTtFQUNaNkIsa0JBQWtCO0VBQ2xCRSxRQUFRO0VBQ1JJLFFBQVE7RUFDUnJDLFdBQVc7RUFDWEMsWUFBWTtFQUNaNkIsd0JBQXdCO0VBQ3hCO0VBQ0ErQixVQUFVO0VBQ1Y7RUFDQU0sYUFBYTtFQUNiQyxTQUFTO0VBQ1Q7RUFDQUMsYUFBYTtFQUNiM0csUUFBUTtFQUNSNEcsS0FBSztFQUNMQyxJQUFJO0VBQ0o1RyxTQUFTO0VBQ1Q2RyxXQUFXO0VBQ1g7RUFDQUMsYUFBYTtFQUNiQyxRQUFRO0VBQ1I5RyxZQUFZO0VBQ1orRyxtQkFBbUI7RUFDbkI7RUFDQTlHLElBQUk7RUFDSjtFQUNBa0YsT0FBTztFQUNQO0VBQ0FULEVBQUU7RUFDRjtFQUNBNEIsUUFBUUEsb0RBQUFBO0FBQ1YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZnRDtBQUVsQyxTQUFTNUIsRUFBRUEsQ0FBQ3NDLENBQUMsRUFBRTtFQUM1QixPQUFPLE9BQU9BLENBQUMsS0FBSyxXQUFXLElBQUlBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQ1QsK0RBQWEsQ0FBQ1MsQ0FBQyxDQUFDO0FBQ3BFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjRDO0FBQ1I7QUFFcEMsaUVBQWU7RUFDYlQsYUFBYTtFQUNiQyxTQUFTQSxvREFBQUE7QUFDWCxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05jLFNBQVNELGFBQWFBLENBQUNuTixLQUFLLEVBQUU7RUFDM0MsT0FBTyxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJakgsTUFBTSxDQUFDOFUsS0FBSyxDQUFDN04sS0FBSyxDQUFDO0FBQ3pELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjRDO0FBQ0w7QUFFeEIsU0FBU29OLFNBQVNBLENBQUNVLENBQUMsRUFBRTtFQUNuQyxPQUFPLENBQUMvRiwwREFBTyxDQUFDK0YsQ0FBQyxDQUFDLElBQUksQ0FBQ1gsMERBQWEsQ0FBQ1ksUUFBUSxDQUFDRCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHdDO0FBQ1k7QUFDWTtBQUVqRCxTQUFTVCxhQUFhQSxDQUFDVyxHQUFHLEVBQUU7RUFDekMsTUFBTWYsTUFBTSxHQUFHTyx3REFBVyxDQUFDUSxHQUFHLEVBQUVQLDZEQUFhLENBQUM7RUFDOUMsTUFBTVEsTUFBTSxHQUFHVCx3REFBVyxDQUFDUCxNQUFNLEVBQUVVLG1FQUFtQixDQUFDO0VBRXZELE9BQU9NLE1BQU07QUFDZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNEM7QUFDVjtBQUNOO0FBQ0Y7QUFDVTtBQUNJO0FBRXhDLGlFQUFlO0VBQ2JaLGFBQWE7RUFDYjNHLFFBQVE7RUFDUjRHLEtBQUs7RUFDTEMsSUFBSTtFQUNKNUcsU0FBUztFQUNUNkcsV0FBV0Esc0RBQUFBO0FBQ2IsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNkRCxNQUFNO0VBQUU1Z0IsU0FBUyxFQUFFO0lBQUVwQztFQUFTO0FBQUUsQ0FBQyxHQUFHbUMsTUFBTTtBQUUzQixTQUFTK1osUUFBUUEsQ0FBQ2tILENBQUMsRUFBRTtFQUNsQyxPQUFPcGpCLFFBQVEsQ0FBQ3NDLElBQUksQ0FBQzhnQixDQUFDLENBQUMsS0FBSyxpQkFBaUI7QUFDL0MsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0prQztBQUVsQyxNQUFNO0VBQUVsRTtBQUFLLENBQUMsR0FBRy9jLE1BQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBUzJnQixLQUFLQSxDQUFDWSxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFO0VBQ2hELE1BQU1DLElBQUksR0FBRyxDQUFDLENBQUM7RUFDZjNFLElBQUksQ0FBQ3dFLElBQUksQ0FBQyxDQUFDM0UsT0FBTyxDQUFFdmUsQ0FBQyxJQUFLO0lBQ3hCLElBQUlvakIsTUFBTSxJQUFJMUgscURBQVEsQ0FBQ3dILElBQUksQ0FBQ2xqQixDQUFDLENBQUMsQ0FBQyxFQUFFO01BQy9CcWpCLElBQUksQ0FBQ3JqQixDQUFDLENBQUMsR0FBR3NpQixLQUFLLENBQUNZLElBQUksQ0FBQ2xqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDcEMsQ0FBQyxNQUFNO01BQ0xxakIsSUFBSSxDQUFDcmpCLENBQUMsQ0FBQyxHQUFHa2pCLElBQUksQ0FBQ2xqQixDQUFDLENBQUM7SUFDbkI7RUFDRixDQUFDLENBQUM7RUFFRjBlLElBQUksQ0FBQ3lFLElBQUksQ0FBQyxDQUFDNUUsT0FBTyxDQUFFdmUsQ0FBQyxJQUFLO0lBQ3hCLElBQUlvakIsTUFBTSxJQUFJMUgscURBQVEsQ0FBQ3lILElBQUksQ0FBQ25qQixDQUFDLENBQUMsQ0FBQyxFQUFFO01BQy9CcWpCLElBQUksQ0FBQ3JqQixDQUFDLENBQUMsR0FBR3NpQixLQUFLLENBQUNlLElBQUksQ0FBQ3JqQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRW1qQixJQUFJLENBQUNuakIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNMcWpCLElBQUksQ0FBQ3JqQixDQUFDLENBQUMsR0FBR21qQixJQUFJLENBQUNuakIsQ0FBQyxDQUFDO0lBQ25CO0VBQ0YsQ0FBQyxDQUFDO0VBQ0YsT0FBT3FqQixJQUFJO0FBQ2IsQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2QsSUFBSUEsQ0FBQ1MsR0FBRyxFQUFFLEdBQUd6QixJQUFJLEVBQUU7RUFDekMsT0FBT0EsSUFBSSxDQUFDL08sTUFBTSxDQUFDLENBQUN4UyxDQUFDLEVBQUVzakIsQ0FBQyxLQUFLO0lBQzNCLE1BQU1DLFNBQVMsR0FBR3ZqQixDQUFDO0lBRW5CdWpCLFNBQVMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUdOLEdBQUcsQ0FBQ00sQ0FBQyxDQUFDO0lBRXJCLE9BQU9DLFNBQVM7RUFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1IsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU07RUFBRTdFO0FBQUssQ0FBQyxHQUFHL2MsTUFBTTtBQUVSLFNBQVNnYSxTQUFTQSxDQUFDcUgsR0FBRyxFQUFFMU4sU0FBUyxFQUFFO0VBQ2hELE1BQU1rTyxTQUFTLEdBQUc5RSxJQUFJLENBQUNzRSxHQUFHLENBQUMsQ0FBQ3ZqQixHQUFHLENBQUVna0IsQ0FBQyxJQUFLLEdBQUduTyxTQUFTLENBQUN0VSxrQkFBa0IsQ0FBQ3lpQixDQUFDLENBQUMsQ0FBQyxJQUFJemlCLGtCQUFrQixDQUFDZ2lCLEdBQUcsQ0FBQ1MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQzNHLE9BQU9ELFNBQVMsQ0FBQ3pqQixJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ0w7QUFFbEMsTUFBTTtFQUFFMmU7QUFBSyxDQUFDLEdBQUcvYyxNQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVM2Z0IsV0FBV0EsQ0FBQ1EsR0FBRyxFQUFFVSxLQUFLLEdBQUcsS0FBSyxFQUFFQyxPQUFPLEdBQUcsS0FBSyxFQUFFO0VBQ3ZFLElBQUksQ0FBQ2pJLHFEQUFRLENBQUNzSCxHQUFHLENBQUMsRUFBRSxPQUFPQSxHQUFHO0VBRTlCLE9BQU90RSxJQUFJLENBQUNzRSxHQUFHLENBQUMsQ0FBQ3hRLE1BQU0sQ0FBQyxDQUFDb1IsSUFBSSxFQUFFN0osSUFBSSxLQUFLO0lBQ3RDLElBQUk4SixZQUFZLEdBQUdiLEdBQUcsQ0FBQ2pKLElBQUksQ0FBQztJQUM1QixNQUFNNkksQ0FBQyxHQUFHZ0IsSUFBSTtJQUVkLElBQUk3RywwREFBTyxDQUFDOEcsWUFBWSxDQUFDLEVBQUU7TUFDekJBLFlBQVksR0FBR0EsWUFBWSxDQUFDcGtCLEdBQUcsQ0FBRU8sQ0FBQyxJQUFLd2lCLFdBQVcsQ0FBQ3hpQixDQUFDLEVBQUUwakIsS0FBSyxFQUFFQyxPQUFPLENBQUMsQ0FBQztJQUN4RTtJQUVBLElBQUlBLE9BQU8sRUFBRTtNQUNYZixDQUFDLENBQUNjLEtBQUssR0FBR0EsS0FBSyxDQUFDM0osSUFBSSxDQUFDLEdBQUdBLElBQUksQ0FBQyxHQUFHMkIscURBQVEsQ0FBQ21JLFlBQVksQ0FBQyxHQUNsRHJCLFdBQVcsQ0FBQ3FCLFlBQVksRUFBRUgsS0FBSyxFQUFFQyxPQUFPLENBQUMsR0FBR0EsT0FBTyxDQUFDRSxZQUFZLEVBQUU5SixJQUFJLENBQUM7SUFDN0UsQ0FBQyxNQUFNO01BQ0w2SSxDQUFDLENBQUNjLEtBQUssR0FBR0EsS0FBSyxDQUFDM0osSUFBSSxDQUFDLEdBQUdBLElBQUksQ0FBQyxHQUFHMkIscURBQVEsQ0FBQ21JLFlBQVksQ0FBQyxHQUNsRHJCLFdBQVcsQ0FBQ3FCLFlBQVksRUFBRUgsS0FBSyxDQUFDLEdBQUdHLFlBQVk7SUFDckQ7SUFFQSxPQUFPakIsQ0FBQztFQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNSLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZSxTQUFTSCxhQUFhQSxDQUFDN0UsR0FBRyxFQUFFO0VBQ3pDLE9BQU9BLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDaUcsS0FBSyxFQUFFQyxNQUFNLEtBQUtBLE1BQU0sQ0FBQ3JpQixXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzNFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNEM7QUFDVjtBQUNRO0FBQ2M7QUFFeEQsaUVBQWU7RUFDYitnQixhQUFhO0VBQ2JDLFFBQVE7RUFDUjlHLFlBQVk7RUFDWitHLG1CQUFtQkEsOERBQUFBO0FBQ3JCLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDVmMsU0FBU0QsUUFBUUEsQ0FBQ1osQ0FBQyxFQUFFO0VBQ2xDLE9BQU8sT0FBT0EsQ0FBQyxLQUFLLFFBQVE7QUFDOUIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmUsU0FBU2xHLFlBQVlBLENBQUNnQyxHQUFHLEVBQUU7RUFDeEMsT0FBT0EsR0FBRyxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFHbUcsQ0FBQyxJQUFLLElBQUlBLENBQUMsQ0FBQzNPLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM5RCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZSxTQUFTc04sbUJBQW1CQSxDQUFDL0UsR0FBRyxFQUFFO0VBQy9DLE9BQU9BLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDaUcsS0FBSyxFQUFFQyxNQUFNLEtBQUtBLE1BQU0sQ0FBQ3JpQixXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzNFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnNCO0FBQ21COztBQUV6QztBQUNBLE1BQU13Z0IsUUFBUSxHQUFHO0VBQ2YrQixPQUFPQSxDQUFDckIsQ0FBQyxFQUFFO0lBQ1QsT0FBT3RDLCtDQUFFLENBQUNzQyxDQUFDLENBQUM7RUFDZCxDQUFDO0VBQ0RSLFNBQVNBLENBQUNRLENBQUMsRUFBRTtJQUNYLE9BQU9SLDJEQUFTLENBQUNRLENBQUMsQ0FBQztFQUNyQixDQUFDO0VBQ0RzQixPQUFPQSxDQUFDdEIsQ0FBQyxFQUFFO0lBQ1QsT0FBTyxPQUFPQSxDQUFDLEtBQUssUUFBUSxJQUFJdEMsK0NBQUUsQ0FBQ3NDLENBQUMsQ0FBQ2tCLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0VBQzlFLENBQUM7RUFDREssV0FBV0EsQ0FBQ3ZCLENBQUMsRUFBRS9MLEdBQUcsRUFBRXVOLEdBQUcsRUFBRTtJQUN2QixPQUFPLE9BQU94QixDQUFDLEtBQUssUUFBUSxJQUFJQSxDQUFDLElBQUkvTCxHQUFHLElBQUkrTCxDQUFDLElBQUl3QixHQUFHO0VBQ3REO0FBQ0YsQ0FBQztBQUVELGlFQUFlbEMsUUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJVO0FBQ2pDLE1BQU07RUFBRTVCLEVBQUU7RUFBRWdDLEtBQUs7RUFBRXhFLFdBQVc7RUFBRTRFO0FBQVMsQ0FBQyxHQUFHMkIsb0RBQUs7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLEdBQUdBLENBQUM3UixDQUFDLEVBQUVDLENBQUMsS0FBSztFQUM5QixNQUFNblQsSUFBSSxHQUFHLEVBQUU7RUFDZixLQUFLLElBQUlTLENBQUMsR0FBR3lTLENBQUMsRUFBRXpTLENBQUMsSUFBSTBTLENBQUMsRUFBRTFTLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDOUJULElBQUksQ0FBQ29CLElBQUksQ0FBQ1gsQ0FBQyxDQUFDO0VBQ2Q7RUFDQSxPQUFPVCxJQUFJO0FBQ2IsQ0FBQztBQUVELE1BQU1nbEIsY0FBYyxHQUFHQSxDQUFDM0csR0FBRyxDQUFDLHFCQUFxQjtFQUMvQyxNQUFNNEcsTUFBTSxHQUFHNUcsR0FBRyxDQUFDNkcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDaGxCLEdBQUcsQ0FBQ2lsQixVQUFVLENBQUM7RUFDN0MsT0FBTztJQUNMOVMsSUFBSSxFQUFFNFMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNmMVMsS0FBSyxFQUFFMFMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEJ0VyxJQUFJLEVBQUVzVyxNQUFNLENBQUMsQ0FBQztFQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVjLE1BQU1HLFlBQVksQ0FBQztFQUNoQztBQUNGO0FBQ0E7QUFDQTtFQUNFcFIsV0FBV0EsQ0FBQ3FSLFlBQVksRUFBRUMsSUFBSSxFQUFFO0lBQzlCLElBQUksQ0FBQ0QsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsSUFBSSxHQUFXQSxJQUFJO0VBQzFCO0VBRUFDLE9BQU9BLENBQUM5QixHQUFHLEVBQUU7SUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDNkIsSUFBSSxFQUFFO01BQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUc3QixHQUFHO0lBQ2pCLENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQzZCLElBQUksR0FBR3ZDLEtBQUssQ0FBQyxJQUFJLENBQUN1QyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU3QixHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQy9DO0lBQ0EsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFK0IsV0FBV0EsQ0FBQ3hLLEtBQUssRUFBRXlLLEdBQUcsRUFBRTtJQUN0QixJQUFJQyxLQUFLLEdBQUcsRUFBRTtJQUVkLE1BQU14UyxDQUFDLEdBQUc4SCxLQUFLLENBQUNoSSxLQUFLLENBQUMsQ0FBQzs7SUFFdkI7SUFDQSxJQUFJRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUt1UyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUl2UyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUt1UyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDdENDLEtBQUssR0FBRyxJQUFJLENBQUNDLGlCQUFpQixDQUFDelMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRXVTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDLE1BQU07TUFDTCxNQUFNRyxTQUFTLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUNwUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUV2QztNQUNBd1MsS0FBSyxHQUFHQSxLQUFLLENBQUNwbEIsTUFBTSxDQUFDLElBQUksQ0FBQ3FsQixpQkFBaUIsQ0FBQ3pTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUwUyxTQUFTLENBQUNybEIsTUFBTSxDQUFDLENBQUM7O01BRWhGO01BQ0EyUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7TUFFVDtNQUNBO01BQ0E7TUFDQSxJQUFJdVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHekssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JCMEssS0FBSyxHQUFHQSxLQUFLLENBQUNwbEIsTUFBTSxDQUFDLElBQUksQ0FBQ3VsQixrQkFBa0IsQ0FBQzNTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdEO1FBQ0E7UUFDQSxDQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUN1UyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzVCOztNQUVBO01BQ0E7TUFDQSxJQUFJQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDakI7UUFDQXdTLEtBQUssR0FBR0EsS0FBSyxDQUFDcGxCLE1BQU0sQ0FBQyxJQUFJLENBQUN1bEIsa0JBQWtCLENBQUMzUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRXVTLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRXZTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3VTLEdBQUc7TUFDWjs7TUFFQTtNQUNBQyxLQUFLLEdBQUdBLEtBQUssQ0FBQ3BsQixNQUFNLENBQUMsSUFBSSxDQUFDcWxCLGlCQUFpQixDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFO0lBRUEsT0FBTztNQUNMQyxLQUFLO01BQ0xJLE9BQU8sRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQ0wsS0FBSztJQUNsQyxDQUFDO0VBQ0g7RUFFQUcsa0JBQWtCQSxDQUFDeFQsSUFBSSxFQUFFMkksS0FBSyxFQUFFeUssR0FBRyxFQUFFO0lBQ25DLElBQUlPLFNBQVMsR0FBTSxFQUFFO0lBQ3JCLE1BQU1DLFVBQVUsR0FBR2xCLGFBQWEsQ0FBQy9KLEtBQUssRUFBRXlLLEdBQUcsQ0FBQztJQUU1Q1EsVUFBVSxDQUFDakgsT0FBTyxDQUFFek0sS0FBSyxJQUFLO01BQzVCLE1BQU0wSixDQUFDLEdBQUcsSUFBSSxDQUFDcUosSUFBSSxDQUFDalQsSUFBSSxDQUFDO01BQ3pCLE1BQU02VCxDQUFDLEdBQUduRixFQUFFLENBQUM5RSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNxSixJQUFJLENBQUNqVCxJQUFJLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsSUFBSTtNQUUvQyxJQUFJMEosQ0FBQyxJQUFJaUssQ0FBQyxFQUFFO1FBQ1ZGLFNBQVMsR0FBR0EsU0FBUyxDQUFDMWxCLE1BQU0sQ0FBQyxJQUFJLENBQUNxbEIsaUJBQWlCLENBQUN0VCxJQUFJLEVBQUVFLEtBQUssRUFBRSxDQUFDLEVBQUUyVCxDQUFDLENBQUMzbEIsTUFBTSxDQUFDLENBQUM7TUFDaEY7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPeWxCLFNBQVM7RUFDbEI7RUFFQUwsaUJBQWlCQSxDQUFDdFQsSUFBSSxFQUFFRSxLQUFLLEVBQUU0VCxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUMvQyxNQUFNbkssQ0FBQyxHQUFHLElBQUksQ0FBQ3FKLElBQUksQ0FBQ2pULElBQUksQ0FBQztJQUN6QixNQUFNNlQsQ0FBQyxHQUFHbkYsRUFBRSxDQUFDOUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDcUosSUFBSSxDQUFDalQsSUFBSSxDQUFDLENBQUNFLEtBQUssQ0FBQyxHQUFHLElBQUk7SUFFL0MsSUFBSTBKLENBQUMsSUFBSWlLLENBQUMsRUFBRTtNQUNWLE9BQU9BLENBQUMsQ0FBQ2xULEtBQUssQ0FBRW1ULFFBQVEsR0FBRyxDQUFDLEVBQUdDLE1BQU0sQ0FBQztJQUN4QztJQUNBLE9BQU8sRUFBRTtFQUNYO0VBRUFDLFNBQVNBLENBQUNoVSxJQUFJLEVBQUVFLEtBQUssRUFBRUUsR0FBRyxFQUFFO0lBQzFCLE1BQU13SixDQUFDLEdBQUcsSUFBSSxDQUFDcUosSUFBSSxDQUFDalQsSUFBSSxDQUFDO0lBQ3pCLE1BQU02VCxDQUFDLEdBQUduRixFQUFFLENBQUM5RSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNxSixJQUFJLENBQUNqVCxJQUFJLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsSUFBSTtJQUUvQyxJQUFJMEosQ0FBQyxJQUFJaUssQ0FBQyxFQUFFO01BQ1YsT0FBT0EsQ0FBQyxDQUFDelQsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU8sSUFBSTtFQUNiO0VBRUFzVCxZQUFZQSxDQUFDTCxLQUFLLEVBQUUzRCxFQUFFLEVBQUU7SUFDdEIsTUFBTXNELFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksSUFBSXRELEVBQUU7SUFDNUMsSUFBSStELE9BQU8sR0FBVSxJQUFJO0lBRXpCLElBQUksT0FBT1QsWUFBWSxLQUFLLFVBQVUsRUFBRTtNQUN0QyxNQUFNaUIsWUFBWSxHQUFHWixLQUFLLENBQUNhLE1BQU0sQ0FBRUMsSUFBSSxJQUFLLElBQUksQ0FBQ25CLFlBQVksQ0FBQ21CLElBQUksQ0FBQyxDQUFDO01BQ3BFVixPQUFPLEdBQUdRLFlBQVksQ0FBQy9sQixNQUFNLElBQUltbEIsS0FBSyxDQUFDbmxCLE1BQU07SUFDL0M7SUFFQSxPQUFPdWxCLE9BQU87RUFDaEI7RUFFQVcsV0FBV0EsQ0FBQ3ZtQixHQUFHLEVBQUV3bUIsU0FBUyxFQUFFO0lBQzFCLElBQUksQ0FBQ3htQixHQUFHLEdBQUdrbEIsWUFBWSxDQUFDdUIsVUFBVSxDQUFDem1CLEdBQUcsRUFBRXdtQixTQUFTLENBQUM7SUFDbEQsT0FBTyxJQUFJO0VBQ2I7RUFFQUUsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDMW1CLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDYixPQUFPLElBQUk7RUFDYjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxPQUFPeW1CLFVBQVVBLENBQUNFLElBQUksRUFBRUMsVUFBVSxFQUFFO0lBQ2xDLElBQUksRUFBRTNELFFBQVEsQ0FBQzBELElBQUksQ0FBQ0UsWUFBWSxDQUFDLElBQzVCNUQsUUFBUSxDQUFDMEQsSUFBSSxDQUFDRyxhQUFhLENBQUMsSUFDNUI3RCxRQUFRLENBQUMwRCxJQUFJLENBQUNJLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFDbEMsT0FBTyxJQUFJO0lBQ2I7SUFFQSxNQUFNQyxLQUFLLEdBQUlMLElBQUksQ0FBQ0UsWUFBWSxDQUFDN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDaGxCLEdBQUcsQ0FBQ2lsQixVQUFVLENBQUM7SUFDMUQsTUFBTWdDLEtBQUssR0FBSU4sSUFBSSxDQUFDRyxhQUFhLENBQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNobEIsR0FBRyxDQUFDaWxCLFVBQVUsQ0FBQztJQUM1RCxNQUFNaUMsTUFBTSxHQUFHUCxJQUFJLENBQUNJLGFBQWEsQ0FBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ2hsQixHQUFHLENBQUNpbEIsVUFBVSxDQUFDO0lBQzVELElBQUkxUyxHQUFHLEdBQVEsQ0FBQztJQUVoQixJQUFJO01BQ0ZKLElBQUk7TUFDSkUsS0FBSztNQUNMNUQsSUFBSSxFQUFFMFk7SUFDUixDQUFDLEdBQUdyQyxjQUFjLENBQUM4QixVQUFVLENBQUM7O0lBRTlCO0lBQ0EsSUFBSUksS0FBSyxDQUFDQSxLQUFLLENBQUMzbUIsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUNqQzJtQixLQUFLLENBQUM5bEIsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNmO0lBRUEsSUFBSWttQixZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLE9BQU9KLEtBQUssQ0FBQ2pVLE1BQU0sQ0FBQyxDQUFDb1IsSUFBSSxFQUFFa0QsS0FBSyxFQUFFdFEsS0FBSyxFQUFFdVEsR0FBRyxLQUFLO01BQy9DLE1BQU1qbkIsTUFBTSxHQUFhZ2UsV0FBVyxDQUFDbE0sSUFBSSxFQUFFRSxLQUFLLENBQUM7TUFDakQsTUFBTStTLElBQUksR0FBZWpCLElBQUk7TUFDN0IsTUFBTW9ELE9BQU8sR0FBWUwsTUFBTSxDQUFDblEsS0FBSyxDQUFDO01BQ3RDLE1BQU15USxJQUFJLEdBQWVQLEtBQUssQ0FBQ2xRLEtBQUssQ0FBQztNQUNyQyxNQUFNMFEsV0FBVyxHQUFRSixLQUFLLEtBQUssQ0FBQztNQUNwQyxNQUFNSyxhQUFhLEdBQU1KLEdBQUcsQ0FBQ3ZRLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO01BQzdDLE1BQU00USxnQkFBZ0IsR0FBSUYsV0FBVyxJQUFJLENBQUNDLGFBQWEsR0FBSSxJQUFJLEdBQUcsSUFBSTtNQUN0RSxNQUFNRSxjQUFjLEdBQU1ELGdCQUFnQixHQUFJLElBQUksR0FBRyxJQUFJO01BRXpELElBQUksQ0FBQ3ZDLElBQUksQ0FBQ2pULElBQUksQ0FBQyxFQUFFO1FBQ2ZpVCxJQUFJLENBQUNqVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDakI7TUFFQSxJQUFJLENBQUNpVCxJQUFJLENBQUNqVCxJQUFJLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEVBQUU7UUFDdEIrUyxJQUFJLENBQUNqVCxJQUFJLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ3hCO01BRUEsSUFBSThVLFFBQVEsRUFBRTtRQUNaNVUsR0FBRyxHQUFRNFUsUUFBUTtRQUNuQkEsUUFBUSxHQUFHLElBQUk7TUFDakI7O01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQS9CLElBQUksQ0FBQ2pULElBQUksQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLEdBQUc7UUFDdkJpVixJQUFJO1FBQ0pELE9BQU87UUFDUEUsV0FBVztRQUNYRSxnQkFBZ0I7UUFDaEJDO01BQ0YsQ0FBQztNQUVELElBQUk7UUFDRixJQUFJRixhQUFhLElBQUksQ0FBQ0QsV0FBVyxFQUFFO1VBQ2pDckMsSUFBSSxDQUFDZ0MsWUFBWSxDQUFDalYsSUFBSSxDQUFDLENBQUNpVixZQUFZLENBQUMvVSxLQUFLLENBQUMsQ0FBQytVLFlBQVksQ0FBQzdVLEdBQUcsQ0FBQyxDQUFDcVYsY0FBYyxHQUFHLElBQUk7VUFDbkZ4QyxJQUFJLENBQUNqVCxJQUFJLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUFDb1YsZ0JBQWdCLEdBQUcsS0FBSztRQUNqRDtNQUNGLENBQUMsQ0FBQyxPQUFNdkssQ0FBQyxFQUFFO1FBQ1Q7TUFBQTtNQUdGZ0ssWUFBWSxHQUFHO1FBQ2JqVixJQUFJO1FBQ0pFLEtBQUs7UUFDTEU7TUFDRixDQUFDO01BRUQsSUFBSUEsR0FBRyxHQUFHbFMsTUFBTSxFQUFFO1FBQ2hCa1MsR0FBRyxJQUFJLENBQUM7TUFDVixDQUFDLE1BQU07UUFDTCxJQUFJRixLQUFLLEdBQUcsRUFBRSxFQUFFO1VBQ2RBLEtBQUssR0FBRyxDQUFDO1VBQ1RGLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxNQUFNO1VBQ0xFLEtBQUssSUFBSSxDQUFDO1FBQ1o7UUFDQUUsR0FBRyxHQUFHLENBQUM7TUFDVDtNQUVBLE9BQU82UyxJQUFJO0lBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ1I7RUFFQXlDLGNBQWNBLENBQUMxVixJQUFJLEVBQUVFLEtBQUssRUFBRUUsR0FBRyxFQUFFdVYsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQzdWLElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLENBQUM7SUFDN0MsT0FBT3dWLE9BQU8sR0FBR0EsT0FBTyxDQUFDRCxRQUFRLENBQUMsR0FBR2puQixTQUFTO0VBQ2hEO0VBRUFtbkIsTUFBTUEsQ0FBQzdWLElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQ3ZTLEdBQUcsRUFBRTtNQUNiLE9BQU8sSUFBSTtJQUNiO0lBRUEsTUFBTWlvQixRQUFRLEdBQUcsSUFBSSxDQUFDam9CLEdBQUcsQ0FBQ21TLElBQUksQ0FBQztJQUMvQixJQUFJLENBQUM4VixRQUFRLEVBQUU7TUFDYixPQUFPLElBQUk7SUFDYjtJQUVBLE1BQU1DLFNBQVMsR0FBR0QsUUFBUSxDQUFDNVYsS0FBSyxDQUFDO0lBQ2pDLElBQUksQ0FBQzZWLFNBQVMsRUFBRTtNQUNkLE9BQU8sSUFBSTtJQUNiO0lBRUEsT0FBT0EsU0FBUyxDQUFDM1YsR0FBRyxDQUFDLElBQUksSUFBSTtFQUMvQjtFQUVBNFYsYUFBYUEsQ0FBQ2hXLElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLEVBQUU7SUFDOUIsTUFBTXdWLE9BQU8sR0FBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQzdWLElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLENBQUM7SUFDN0MsT0FBTyxFQUFFd1YsT0FBTyxJQUFJQSxPQUFPLENBQUNOLFdBQVcsQ0FBQztFQUMxQztBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalRBO0FBQ2lDO0FBRVE7QUFDRTtBQUNiO0FBQ0U7QUFDYTtBQUVWO0FBSWxCO0FBRTJCO0FBRWlCO0FBRTdELE1BQU07RUFDSi9JLFFBQVE7RUFBRUgsV0FBVztFQUFFaUMsUUFBUTtFQUFFbEQsT0FBTztFQUFFckIsUUFBUTtFQUFFcUYsT0FBTztFQUMzRHVCLEtBQUs7RUFBRW5ELGlCQUFpQjtFQUFFVyx3QkFBd0I7RUFBRWQsY0FBYztFQUFFbEIsV0FBVztFQUFFd0MsRUFBRTtFQUFFdUIsVUFBVTtFQUMvRk8sU0FBUztFQUFFSSxXQUFXO0VBQUVuQyxRQUFRO0VBQUVsRDtBQUNwQyxDQUFDLEdBQUdrSCxvREFBSztBQUNNLE1BQU1xRSxRQUFRLFNBQVMzSCxPQUFPLENBQUM7RUFDNUN4TixXQUFXQSxDQUFDb1YsSUFBSSxFQUFFdkMsSUFBSSxFQUFFO0lBQ3RCLEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBSSxDQUFDaFMsSUFBSSxHQUFNMFQsK0NBQU0sQ0FBQzFULElBQUk7SUFDMUIsSUFBSSxDQUFDd1UsT0FBTyxHQUFHdG5CLHNFQUFrQztJQUNqRCxJQUFJLENBQUN3bkIsVUFBVSxHQUFHaEIsK0NBQU0sQ0FBQ2lCLFNBQVM7SUFFbEMsSUFBSXJOLFFBQVEsQ0FBQ2lOLElBQUksQ0FBQyxFQUFFO01BQ2xCLElBQUksQ0FBQ0EsSUFBSSxDQUFDdkssRUFBRSxFQUFFO1FBQ1osSUFBSSxDQUFDNEssTUFBTSxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQztRQUMvQztNQUNGO01BRUEsTUFBTUMsYUFBYSxHQUFHM0csS0FBSyxDQUFDd0YsK0NBQU0sRUFBRWEsSUFBSSxDQUFDdkssRUFBRSxDQUFDOEssT0FBTyxDQUFDO01BQ3BELElBQUksQ0FBQ1AsSUFBSSxHQUFhckcsS0FBSyxDQUFDMkcsYUFBYSxFQUFFTixJQUFJLENBQUM7TUFFaEQsSUFBSSxDQUFDQSxJQUFJLEdBQUduRyxXQUFXLENBQUMsSUFBSSxDQUFDbUcsSUFBSSxFQUFHbFcsQ0FBQyxJQUFLQSxDQUFDLEVBQUdDLENBQUMsSUFBSztRQUNsRCxJQUFJQSxDQUFDLEtBQUssTUFBTSxJQUFJQSxDQUFDLEtBQUssT0FBTyxFQUFFO1VBQ2pDLE9BQVFBLENBQUMsS0FBSyxNQUFNO1FBQ3RCO1FBQ0EsSUFBSTBQLFNBQVMsQ0FBQzFQLENBQUMsQ0FBQyxFQUFFO1VBQ2hCLE9BQU9xUSxRQUFRLENBQUNyUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hCO1FBQ0EsT0FBT0EsQ0FBQztNQUNWLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ2lXLElBQUksQ0FBQ3ZMLElBQUksR0FBVyxJQUFJLENBQUN1TCxJQUFJLENBQUN2TCxJQUFJLElBQUksSUFBSSxDQUFDdUwsSUFBSSxDQUFDdkwsSUFBSSxJQUFJMkssZ0RBQU8sR0FBSSxJQUFJLENBQUNZLElBQUksQ0FBQ3ZMLElBQUksR0FBRyxPQUFPO01BQ2hHLElBQUksQ0FBQytMLE1BQU0sR0FBYXBCLGdEQUFPLENBQUMsSUFBSSxDQUFDWSxJQUFJLENBQUN2TCxJQUFJLENBQUM7TUFDL0MsSUFBSSxDQUFDdk8sTUFBTSxHQUFhLElBQUksQ0FBQzhaLElBQUksQ0FBQ1MsVUFBVSxJQUFJLElBQUksQ0FBQ0QsTUFBTSxDQUFDQyxVQUFVLElBQUksVUFBVTtNQUNwRixJQUFJLENBQUNULElBQUksQ0FBQ1UsV0FBVyxHQUFHLElBQUksQ0FBQ1YsSUFBSSxDQUFDVSxXQUFXLElBQUksSUFBSSxDQUFDRixNQUFNLENBQUNFLFdBQVc7TUFFeEUsSUFBSTtRQUFFQztNQUFZLENBQUMsR0FBRyxJQUFJLENBQUNYLElBQUk7TUFDL0IsTUFBTS9XLElBQUksR0FBSTBYLFdBQVcsQ0FBQ2xRLFdBQVcsQ0FBQyxDQUFDO01BQ3ZDLE1BQU10SCxLQUFLLEdBQUd3WCxXQUFXLENBQUNDLFFBQVEsQ0FBQyxDQUFDO01BQ3BDLE1BQU12WCxHQUFHLEdBQUtzWCxXQUFXLENBQUNwWixPQUFPLENBQUMsQ0FBQztNQUVuQyxJQUFJLENBQUN5WSxJQUFJLENBQUNXLFdBQVcsR0FBRyxDQUFDMVgsSUFBSSxFQUFFRSxLQUFLLEVBQUVFLEdBQUcsQ0FBQztNQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDMlcsSUFBSSxDQUFDYSxTQUFTLEVBQUU7UUFDeEIsSUFBSSxDQUFDYixJQUFJLENBQUNhLFNBQVMsR0FBRzVYLElBQUk7TUFDNUI7TUFFQSxJQUFJLENBQUMsSUFBSSxDQUFDK1csSUFBSSxDQUFDYyxVQUFVLEVBQUU7UUFDekIsSUFBSSxDQUFDZCxJQUFJLENBQUNjLFVBQVUsR0FBRzNYLEtBQUs7TUFDOUI7TUFFQSxJQUFJLENBQUM0WCwwQkFBMEIsQ0FBQyxDQUFDO01BRWpDLElBQUksSUFBSSxDQUFDZixJQUFJLENBQUNnQixVQUFVLEVBQUU7UUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO01BQ3pCLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ3hMLEVBQUUsR0FBR3VLLElBQUksQ0FBQ3ZLLEVBQUU7TUFDbkI7SUFFRjtJQUNBO0lBQ0EsSUFBSSxDQUFDMkQsR0FBRyxHQUFLLENBQUMsQ0FBQztJQUNmO0lBQ0EsSUFBSSxDQUFDOEgsS0FBSyxHQUFHLElBQUlsRixzREFBWSxDQUFDeUQsb0RBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQ7SUFDQSxJQUFJMU0sUUFBUSxDQUFDMEssSUFBSSxDQUFDLEVBQUU7TUFDbEIsSUFBSSxDQUFDeUQsS0FBSyxDQUFDQyxPQUFPLENBQUMxRCxJQUFJLEVBQUVBLElBQUksQ0FBQzJELFVBQVUsSUFBSTlCLGlEQUFTLENBQUMsSUFBSSxDQUFDVSxJQUFJLENBQUNXLFdBQVcsQ0FBQyxDQUFDO0lBQy9FOztJQUVBO0lBQ0EsSUFBSSxDQUFDVSxXQUFXLEdBQVMsS0FBSztJQUM5QixJQUFJLENBQUNDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxhQUFhLEdBQU8sSUFBSTs7SUFFN0I7SUFDQTtJQUNBLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUcsSUFBSSxDQUFDeEIsSUFBSSxDQUFDd0IsbUJBQW1CO0lBQ3hELElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ3pCLElBQUksQ0FBQ3lCLGFBQWE7SUFDNUMsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSTtJQUMxQixJQUFJLENBQUNDLGtCQUFrQixHQUFHLElBQUk7SUFDOUIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSTtJQUMxQixJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUk7SUFDNUIsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSTtJQUMzQixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUk7SUFDN0IsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNiO0VBRUFBLElBQUlBLENBQUEsRUFBRztJQUNMeE0sUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFb0ssc0VBQWUsRUFBRUMsZ0ZBQWlCLENBQUM7SUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQ3JLLEVBQUUsQ0FBQzhLLE9BQU8sQ0FBQzRCLEtBQUssRUFBRTtNQUMxQixJQUFJLENBQUMxTSxFQUFFLENBQUM4SyxPQUFPLENBQUM0QixLQUFLLEdBQUcsSUFBSSxDQUFDbkMsSUFBSSxDQUFDbUMsS0FBSztJQUN6QztJQUVBLElBQUksQ0FBQzFNLEVBQUUsQ0FBQ1csWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDdEMsSUFBSSxDQUFDWCxFQUFFLENBQUNXLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDb0ssTUFBTSxDQUFDNEIsTUFBTSxDQUFDSCxRQUFRLENBQUM7SUFFL0QsSUFBSSxDQUFDN0ksR0FBRyxDQUFDaUosTUFBTSxHQUFHLElBQUksQ0FBQzVNLEVBQUUsQ0FBQzZNLFdBQVcsQ0FDbkM5TCxpQkFBaUIsQ0FBQzBJLGlEQUFtQixJQUFBaG9CLE1BQUEsQ0FBSSxJQUFJLENBQUNpcEIsVUFBVSxnQkFBYSxDQUFDLENBQ3hFLENBQUM7SUFDRCxJQUFJLENBQUMvRyxHQUFHLENBQUNvSixVQUFVLEdBQU0sSUFBSSxDQUFDL00sRUFBRSxDQUFDNk0sV0FBVyxDQUFDOUwsaUJBQWlCLENBQUMwSSxrREFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUM5RixHQUFHLENBQUNxSixjQUFjLEdBQUcsSUFBSSxDQUFDaE4sRUFBRSxDQUFDNk0sV0FBVyxDQUMzQzlMLGlCQUFpQixDQUFDMEksc0RBQXdCLENBQUMsSUFBSSxDQUFDd0Qsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQ3pFLENBQUM7SUFDRCxJQUFJLENBQUN0SixHQUFHLENBQUN1SixhQUFhLEdBQUcsSUFBSSxDQUFDbE4sRUFBRSxDQUFDNk0sV0FBVyxDQUFDOUwsaUJBQWlCLENBQUMwSSw0Q0FBYyxDQUFDLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQ3pZLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUcsSUFBSSxDQUFDeVAsR0FBRyxDQUFDeUosVUFBVSxHQUFHLElBQUksQ0FBQ3BOLEVBQUUsQ0FBQzZNLFdBQVcsQ0FBQzlMLGlCQUFpQixDQUFDMEksa0RBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsSUFBSSxDQUFDOUYsR0FBRyxDQUFDMEosZUFBZSxHQUFHLElBQUksQ0FBQ3JOLEVBQUUsQ0FBQzZNLFdBQVcsQ0FBQzlMLGlCQUFpQixDQUFDMEksNkRBQStCLENBQUM7TUFDL0Y4RCxVQUFVLEVBQUUsSUFBSSxDQUFDeEMsTUFBTSxDQUFDNEIsTUFBTSxDQUFDYSxLQUFLLElBQUksT0FBTztNQUMvQ0MsYUFBYSxFQUFFLElBQUksQ0FBQzFDLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQ2UsYUFBYSxJQUFJLGdCQUFnQjtNQUNuRUMsU0FBUyxFQUFFLElBQUksQ0FBQzVDLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQ2lCLFNBQVMsSUFBSTtJQUM3QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ0osSUFBSSxDQUFDakssR0FBRyxDQUFDa0ssT0FBTyxHQUFTLElBQUksQ0FBQ2xLLEdBQUcsQ0FBQ29KLFVBQVUsQ0FBQ0YsV0FBVyxDQUN0RDlMLGlCQUFpQixDQUFDMEksK0NBQWlCLENBQUMsSUFBSSxDQUFDc0IsTUFBTSxDQUFDNEIsTUFBTSxDQUFDbUIsYUFBYSxDQUFDLENBQ3ZFLENBQUM7SUFDRCxJQUFJLENBQUNuSyxHQUFHLENBQUNvSyxJQUFJLEdBQVksSUFBSSxDQUFDcEssR0FBRyxDQUFDb0osVUFBVSxDQUFDRixXQUFXLENBQ3REOUwsaUJBQWlCLENBQUMwSSw0Q0FBYyxDQUFDLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQ3FCLGNBQWMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUM1RCxJQUFJLENBQUNhLFNBQVMsRUFBRSxJQUFJLENBQUNiLElBQUksQ0FBQ2MsVUFBVSxDQUFDO0lBRTVELElBQUksQ0FBQytDLGFBQWEsQ0FBQyxDQUFDO0lBRXBCLElBQUksSUFBSSxDQUFDN0QsSUFBSSxDQUFDOEQsVUFBVSxJQUFJLElBQUksQ0FBQzlELElBQUksQ0FBQytELFNBQVMsSUFBSSxJQUFJLENBQUMvRCxJQUFJLENBQUNnRSxPQUFPLEVBQUU7TUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQ2hFLElBQUksQ0FBQ2lFLFFBQVEsRUFBRTtRQUN2QixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3ZCO01BRUEsSUFBSSxDQUFDN0wsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLElBQUksQ0FBQzZMLGNBQWMsQ0FBQyxDQUFDLENBQUM7TUFDbkQsSUFBSSxDQUFDbEUsSUFBSSxDQUFDK0QsU0FBUyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUNELGNBQWMsQ0FBQyxDQUFDLENBQUM7TUFDMUUsSUFBSSxDQUFDbEUsSUFBSSxDQUFDZ0UsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUNELGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDMUU7SUFFQSxJQUFJLElBQUksQ0FBQ2xFLElBQUksQ0FBQ2lFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQ2pFLElBQUksQ0FBQ2dCLFVBQVUsRUFBRTtNQUMvQyxJQUFJLENBQUNvRCxRQUFRLENBQUMsSUFBSSxDQUFDcEUsSUFBSSxDQUFDaUUsUUFBUSxDQUFDO0lBQ25DO0lBRUEsSUFBSSxDQUFDeE8sRUFBRSxDQUFDOEssT0FBTyxDQUFDdUQsVUFBVSxHQUFHLElBQUksQ0FBQzlELElBQUksQ0FBQzhELFVBQVU7SUFFakQsSUFBSSxDQUFDekQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQixJQUFJLENBQUNwSCxJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ25CO0VBRUFvTCxvQkFBb0JBLENBQUNDLFNBQVMsRUFBRTtJQUM5QixJQUFLQSxTQUFTLEtBQUssSUFBSSxDQUFDOUMsbUJBQW1CLElBQUssQ0FBQyxJQUFJLENBQUNILFdBQVcsRUFBRTtNQUNqRSxJQUFJLENBQUNHLG1CQUFtQixHQUFHOEMsU0FBUztNQUNwQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO01BQ3BCLElBQUksQ0FBQ1gsWUFBWSxDQUFDLElBQUksQ0FBQy9DLFNBQVMsRUFBRSxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUNwRDtFQUNGO0VBRUFDLDBCQUEwQkEsQ0FBQSxFQUFHO0lBQzNCLE1BQU15RCxxQkFBcUIsR0FBRyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUN6RSxJQUFJLENBQUN5QixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLElBQUksQ0FBQ3pCLElBQUksQ0FBQ3lCLGFBQWEsR0FBRytDLHFCQUFxQjtJQUMvQyxJQUFJLENBQUN4RSxJQUFJLENBQUMwRSxtQkFBbUIsR0FBRyxJQUFJLENBQUNELGFBQWEsQ0FDaEQsSUFBSSxDQUFDekUsSUFBSSxDQUFDMEUsbUJBQW1CLEVBQzdCRixxQkFDRixDQUFDO0lBQ0QsSUFBSSxDQUFDeEUsSUFBSSxDQUFDMkUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM1RSxJQUFJLENBQUMyRSxnQkFBZ0IsRUFBRSxHQUFHLENBQUM7RUFDckY7RUFFQUYsYUFBYUEsQ0FBQ3BZLEtBQUssRUFBRXdZLFFBQVEsRUFBRTtJQUM3QixJQUFJeFksS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLMVUsU0FBUyxJQUFJMFUsS0FBSyxLQUFLLEVBQUUsRUFBRTtNQUN6RCxPQUFPd1ksUUFBUTtJQUNqQjtJQUVBLE1BQU1DLE1BQU0sR0FBRzFLLFFBQVEsQ0FBQy9OLEtBQUssRUFBRSxFQUFFLENBQUM7SUFFbEMsSUFBSWpILE1BQU0sQ0FBQzhVLEtBQUssQ0FBQzRLLE1BQU0sQ0FBQyxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3RDLE9BQU9ELFFBQVE7SUFDakI7SUFFQSxPQUFPQyxNQUFNO0VBQ2Y7RUFFQUYsZ0JBQWdCQSxDQUFDdlksS0FBSyxFQUFFd1ksUUFBUSxFQUFFO0lBQ2hDLElBQUl4WSxLQUFLLEtBQUssSUFBSSxJQUFJQSxLQUFLLEtBQUsxVSxTQUFTLElBQUkwVSxLQUFLLEtBQUssRUFBRSxFQUFFO01BQ3pELE9BQU93WSxRQUFRO0lBQ2pCO0lBRUEsTUFBTUMsTUFBTSxHQUFHMUssUUFBUSxDQUFDL04sS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUVsQyxJQUFJakgsTUFBTSxDQUFDOFUsS0FBSyxDQUFDNEssTUFBTSxDQUFDLElBQUlBLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDdEMsT0FBT0QsUUFBUTtJQUNqQjtJQUVBLE9BQU9DLE1BQU07RUFDZjtFQUVBQyxnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLElBQUksQ0FBQ3JELGNBQWMsRUFBRTtNQUN2QixPQUFPLElBQUksQ0FBQ0EsY0FBYyxDQUFDc0QsT0FBTztJQUNwQztJQUVBLE1BQU1DLGFBQWEsR0FBSW5TLE1BQU0sSUFBSSxPQUFPQSxNQUFNLENBQUNvUyxVQUFVLEtBQUssUUFBUSxHQUNsRXBTLE1BQU0sQ0FBQ29TLFVBQVUsR0FDakIsSUFBSSxDQUFDbEYsSUFBSSxDQUFDMkUsZ0JBQWdCLEdBQUcsQ0FBQztJQUVsQyxPQUFPTSxhQUFhLElBQUksSUFBSSxDQUFDakYsSUFBSSxDQUFDMkUsZ0JBQWdCO0VBQ3BEO0VBRUFRLGlCQUFpQkEsQ0FBQ0osZ0JBQWdCLEVBQUU7SUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQ3RQLEVBQUUsRUFBRTtNQUNaO0lBQ0Y7SUFFQSxJQUFJc1AsZ0JBQWdCLEVBQUU7TUFDcEIsSUFBSSxDQUFDdFAsRUFBRSxDQUFDOEssT0FBTyxDQUFDNkUsUUFBUSxHQUFHLFFBQVE7TUFDbkM1UCxRQUFRLENBQUMsSUFBSSxDQUFDQyxFQUFFLEVBQUVvSyx3RUFBaUIsQ0FBQztNQUNwQyxJQUFJLElBQUksQ0FBQ0csSUFBSSxDQUFDc0Ysb0JBQW9CLEVBQUU7UUFDbEM5UCxRQUFRLENBQUMsSUFBSSxDQUFDQyxFQUFFLEVBQUVvSyxxRkFBOEIsQ0FBQztNQUNuRCxDQUFDLE1BQU07UUFDTHhLLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLHFGQUE4QixDQUFDO01BQ3REO0lBQ0YsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDcEssRUFBRSxDQUFDOEssT0FBTyxDQUFDNkUsUUFBUSxHQUFHLFNBQVM7TUFDcEMvUCxXQUFXLENBQUMsSUFBSSxDQUFDSSxFQUFFLEVBQUVvSyx3RUFBaUIsQ0FBQztNQUN2Q3hLLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLHFGQUE4QixDQUFDO0lBQ3REO0VBQ0Y7RUFFQTJGLDJCQUEyQkEsQ0FBQSxFQUFHO0lBQzVCLE1BQU1ULGdCQUFnQixHQUFHLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUMsQ0FBQztJQUVoRCxJQUFJLENBQUNJLGlCQUFpQixDQUFDSixnQkFBZ0IsQ0FBQztJQUV4QyxJQUFJQSxnQkFBZ0IsRUFBRTtNQUNwQixPQUFPLElBQUksQ0FBQy9FLElBQUksQ0FBQzBFLG1CQUFtQjtJQUN0QztJQUVBLE9BQU8sSUFBSSxDQUFDMUUsSUFBSSxDQUFDeUIsYUFBYTtFQUNoQztFQUVBZ0UsNEJBQTRCQSxDQUFBLEVBQUc7SUFDN0IsTUFBTUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDRiwyQkFBMkIsQ0FBQyxDQUFDO0lBQzVELE1BQU1HLFVBQVUsR0FBRyxJQUFJLENBQUNsRSxhQUFhLEtBQUtpRSxpQkFBaUI7SUFFM0QsSUFBSSxDQUFDakUsYUFBYSxHQUFHaUUsaUJBQWlCO0lBQ3RDLE9BQU9DLFVBQVU7RUFDbkI7RUFFQUMsb0JBQW9CQSxDQUFBLEVBQUc7SUFDckIsSUFBSSxJQUFJLENBQUNILDRCQUE0QixDQUFDLENBQUMsRUFBRTtNQUN2QyxJQUFJLENBQUNsQixhQUFhLENBQUMsQ0FBQztNQUNwQixJQUFJLENBQUNYLFlBQVksQ0FBQyxJQUFJLENBQUMvQyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxVQUFVLENBQUM7SUFDcEQ7RUFDRjtFQUVBNkMsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEIsSUFBSSxDQUFDa0Msb0JBQW9CLENBQUMsQ0FBQztJQUUzQixJQUFJL1MsTUFBTSxDQUFDZ1QsVUFBVSxFQUFFO01BQ3JCLElBQUksQ0FBQ3BFLGNBQWMsR0FBRzVPLE1BQU0sQ0FBQ2dULFVBQVUsZ0JBQUE1dUIsTUFBQSxDQUFnQixJQUFJLENBQUM4b0IsSUFBSSxDQUFDMkUsZ0JBQWdCLFFBQUssQ0FBQztNQUN2RixJQUFJLENBQUNoRCxrQkFBa0IsR0FBRyxNQUFNLElBQUksQ0FBQ2lFLG9CQUFvQixDQUFDLENBQUM7TUFFM0QsSUFBSSxJQUFJLENBQUNsRSxjQUFjLENBQUN5QyxnQkFBZ0IsRUFBRTtRQUN4QyxJQUFJLENBQUN6QyxjQUFjLENBQUN5QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDeEMsa0JBQWtCLENBQUM7TUFDekUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRCxjQUFjLENBQUNxRSxXQUFXLEVBQUU7UUFDMUMsSUFBSSxDQUFDckUsY0FBYyxDQUFDcUUsV0FBVyxDQUFDLElBQUksQ0FBQ3BFLGtCQUFrQixDQUFDO01BQzFEO01BQ0E7SUFDRjtJQUVBLElBQUksQ0FBQ0MsY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDZ0Usb0JBQW9CLENBQUMsQ0FBQztJQUN2RDlTLE1BQU0sQ0FBQ3FSLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN2QyxjQUFjLENBQUM7RUFDeEQ7RUFFQWlFLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQ3JCLElBQUksSUFBSSxDQUFDbkUsY0FBYyxJQUFJLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDbEQsSUFBSSxJQUFJLENBQUNELGNBQWMsQ0FBQ3NFLG1CQUFtQixFQUFFO1FBQzNDLElBQUksQ0FBQ3RFLGNBQWMsQ0FBQ3NFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNyRSxrQkFBa0IsQ0FBQztNQUM1RSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNELGNBQWMsQ0FBQ3VFLGNBQWMsRUFBRTtRQUM3QyxJQUFJLENBQUN2RSxjQUFjLENBQUN1RSxjQUFjLENBQUMsSUFBSSxDQUFDdEUsa0JBQWtCLENBQUM7TUFDN0Q7SUFDRjtJQUVBLElBQUksQ0FBQ0QsY0FBYyxHQUFHLElBQUk7SUFDMUIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJO0lBRTlCLElBQUksSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDdkI5TyxNQUFNLENBQUNrVCxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcEUsY0FBYyxDQUFDO01BQ3pELElBQUksQ0FBQ0EsY0FBYyxHQUFHLElBQUk7SUFDNUI7RUFDRjtFQUVBZ0MsWUFBWUEsQ0FBQy9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO0lBQ2xDLElBQUksQ0FBQzJFLDRCQUE0QixDQUFDLENBQUM7SUFFbkMsTUFBTVMsY0FBYyxHQUFHLElBQUksQ0FBQ3hELG9CQUFvQixDQUFDLENBQUM7SUFDbEQ7SUFDQSxNQUFNO01BQ0p4RyxJQUFJO01BQUVpSyxPQUFPO01BQUVDLFFBQVE7TUFBRXpjO0lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMwYyxVQUFVLENBQUN4RixTQUFTLEVBQUVDLFVBQVUsRUFBRSxJQUFJLENBQUNXLGFBQWEsRUFBRXlFLGNBQWMsQ0FBQztJQUU5RSxJQUFJLENBQUNoRixLQUFLLENBQUMvRSxPQUFPLENBQUNELElBQUksQ0FBQztJQUV4QixJQUFJLENBQUM0RSxVQUFVLEdBQUdBLFVBQVU7SUFDNUIsSUFBSSxDQUFDRCxTQUFTLEdBQUlBLFNBQVM7SUFFM0IsSUFBSSxDQUFDdUYsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0QsT0FBTyxHQUFJQSxPQUFPO0lBRXZCLElBQUksSUFBSSxDQUFDbkcsSUFBSSxDQUFDOEQsVUFBVSxFQUFFO01BQ3hCdE8sUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQytMLG1CQUFtQixHQUFHM0Isc0VBQWUsR0FBR0Esb0VBQWEsQ0FBQztNQUM3RXhLLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRSxJQUFJLENBQUMrTCxtQkFBbUIsR0FBRzNCLG9FQUFhLEdBQUdBLHNFQUFlLENBQUM7SUFDbEY7SUFFQSxJQUFJLENBQUN6RyxHQUFHLENBQUN6UCxNQUFNLEdBQUdBLE1BQU07SUFDeEIsTUFBTTZjLFFBQVEsR0FBR3JRLFFBQVEsQ0FBQ3NRLHNCQUFzQixDQUFDLENBQUM7SUFFbEQsSUFBSSxDQUFDck4sR0FBRyxDQUFDelAsTUFBTSxDQUFDaU0sT0FBTyxDQUFFa0gsQ0FBQyxJQUFLO01BQzdCLElBQUksSUFBSSxDQUFDa0QsSUFBSSxDQUFDOEQsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQzRDLGNBQWMsQ0FBQzVKLENBQUMsQ0FBQztNQUN4QjtNQUVBMEosUUFBUSxDQUFDbEUsV0FBVyxDQUFDeEYsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQzFELEdBQUcsQ0FBQ3VKLGFBQWEsQ0FBQ0wsV0FBVyxDQUFDa0UsUUFBUSxDQUFDO0lBRTVDLElBQUksSUFBSSxDQUFDeEcsSUFBSSxDQUFDOEQsVUFBVSxFQUFFO01BQ3hCdE8sUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFb0ssNEVBQXFCLENBQUM7SUFDMUM7SUFFQSxJQUFJLENBQUMsSUFBSSxDQUFDRyxJQUFJLENBQUM0RyxhQUFhLEVBQUU7TUFDNUIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN2QjtJQUVBLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztFQUMxQjtFQUVBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNsQixJQUFJLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0QsY0FBYyxFQUFFLElBQUksQ0FBQzdGLEtBQUssQ0FBQ2pFLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzhKLGNBQWMsQ0FBQyxDQUFDO0lBQ3JGO0lBRUEsSUFBSSxJQUFJLENBQUNFLFlBQVksRUFBRTtNQUNyQixJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNELFlBQVksRUFBRSxJQUFJLENBQUMvRixLQUFLLENBQUNqRSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUNnSyxZQUFZLENBQUMsQ0FBQztJQUMvRTtJQUVBLElBQUksSUFBSSxDQUFDRixjQUFjLElBQUksSUFBSSxDQUFDRSxZQUFZLEVBQUU7TUFDNUMsSUFBSSxJQUFJLENBQUMzRixpQkFBaUIsQ0FBQ25xQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDLElBQUksQ0FBQ2d3QixjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM3RixpQkFBaUIsQ0FBQztNQUNoRCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUM2RixjQUFjLENBQUMsSUFBSSxDQUFDSixjQUFjLEVBQUUsSUFBSSxDQUFDRSxZQUFZLENBQUM7TUFDN0Q7SUFDRjtFQUNGO0VBRUFKLGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksSUFBSSxDQUFDN0csSUFBSSxDQUFDb0gsY0FBYyxFQUFFO01BQzVCLE1BQU1DLFNBQVMsR0FBVS9ILGlEQUFTLENBQUMsSUFBSSxDQUFDdUIsU0FBUyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxFQUFFLENBQUMsQ0FBQztNQUN0RSxJQUFJO1FBQUVIO01BQVksQ0FBQyxHQUFNLElBQUksQ0FBQ1gsSUFBSTtNQUNsQ1csV0FBVyxHQUFjckIsaURBQVMsQ0FBQ3FCLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRUEsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNyRSxJQUFJLENBQUN2SCxHQUFHLENBQUNvSyxJQUFJLENBQUM4RCxRQUFRLEdBQUdELFNBQVMsSUFBSTFHLFdBQVc7SUFDbkQ7RUFDRjtFQUVBNEcsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDalEsUUFBUSxDQUFDLElBQUksQ0FBQzdCLEVBQUUsRUFBRW9LLHFFQUFjLENBQUMsRUFBRTtNQUN0Q3JLLFFBQVEsQ0FBQyxJQUFJLENBQUNDLEVBQUUsRUFBRW9LLHFFQUFjLENBQUM7TUFDakMsSUFBSSxDQUFDNUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMzQixDQUFDLE1BQU07TUFDTDVELFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLHFFQUFjLENBQUM7TUFDcEMsSUFBSSxDQUFDNUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMzQjtFQUNGO0VBRUFrSSxPQUFPQSxDQUFDMUQsSUFBSSxFQUFFO0lBQ1osSUFBSSxDQUFDeUQsS0FBSyxDQUFDN0QsV0FBVyxDQUFDSSxJQUFJLEVBQUVBLElBQUksQ0FBQzJELFVBQVUsQ0FBQztJQUM3QyxJQUFJLENBQUNtRCxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNYLFlBQVksQ0FDZixJQUFJLENBQUM1RCxJQUFJLENBQUNhLFNBQVMsSUFBSSxJQUFJLENBQUNBLFNBQVMsRUFDckMsSUFBSSxDQUFDYixJQUFJLENBQUNjLFVBQVUsSUFBSSxJQUFJLENBQUNBLFVBQy9CLENBQUM7RUFDSDtFQUVBK0MsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDekssR0FBRyxDQUFDa0ssT0FBTyxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdqUSxDQUFDLElBQUs7TUFDaEQsSUFBSSxDQUFDcVEsYUFBYSxDQUFDLENBQUM7TUFDcEIsTUFBTTtRQUNKdGIsSUFBSSxFQUFFd2UsWUFBWTtRQUNsQnRlLEtBQUssRUFBRXVlO01BQ1QsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQzlHLFNBQVMsRUFBRSxJQUFJLENBQUNDLFVBQVUsRUFBRSxJQUFJLENBQUNkLElBQUksQ0FBQzRILG9CQUFvQixJQUFJLElBQUksQ0FBQ25HLGFBQWEsQ0FBQztNQUUxRyxJQUFJLENBQUNtQyxZQUFZLENBQUM2RCxZQUFZLEVBQUVDLGFBQWEsQ0FBQztNQUM5Q3hULENBQUMsQ0FBQzJULGNBQWMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ3pPLEdBQUcsQ0FBQ29LLElBQUksQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFHalEsQ0FBQyxJQUFLO01BQzdDLElBQUksQ0FBQ3FRLGFBQWEsQ0FBQyxDQUFDO01BQ3BCLE1BQU07UUFDSnRiLElBQUksRUFBRXdlLFlBQVk7UUFDbEJ0ZSxLQUFLLEVBQUV1ZTtNQUNULENBQUMsR0FBRyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUM5RyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUNkLElBQUksQ0FBQzRILG9CQUFvQixJQUFJLElBQUksQ0FBQ25HLGFBQWEsQ0FBQyxDQUFDO01BRTdHLElBQUksQ0FBQ21DLFlBQVksQ0FBQzZELFlBQVksRUFBRUMsYUFBYSxDQUFDO01BQzlDeFQsQ0FBQyxDQUFDMlQsY0FBYyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQW5FLHNCQUFzQkEsQ0FBQSxFQUFHO0lBQ3ZCLElBQUksQ0FBQzVCLGVBQWUsR0FBSTVOLENBQUMsSUFBSztNQUM1QixNQUFNNFQscUJBQXFCLEdBQUcsSUFBSSxDQUFDclMsRUFBRSxDQUFDOEIsUUFBUSxDQUFDckQsQ0FBQyxDQUFDNlQsTUFBTSxDQUFDO01BQ3hELE1BQU1DLE9BQU8sR0FBRzdRLHdCQUF3QixDQUFDakQsQ0FBQyxDQUFDNlQsTUFBTSxFQUFFLDBCQUEwQixDQUFDLENBQUNsUSxNQUFNO01BQ3JGLE1BQU1vUSxVQUFVLEdBQUc5USx3QkFBd0IsQ0FBQ2pELENBQUMsQ0FBQzZULE1BQU0sRUFBRSxrQkFBa0IsQ0FBQztNQUN6RSxNQUFNRyxTQUFTLEdBQUcvUSx3QkFBd0IsQ0FBQ2pELENBQUMsQ0FBQzZULE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztNQUM3RSxNQUFNSSxXQUFXLEdBQUdoUix3QkFBd0IsQ0FBQ2pELENBQUMsQ0FBQzZULE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDbFEsTUFBTTtNQUV2RixJQUFJLENBQUNpUSxxQkFBcUIsRUFBRTtRQUMxQixJQUFJLElBQUksQ0FBQ2pHLGdCQUFnQixFQUFFO1VBQ3pCLElBQUksQ0FBQ3VHLGVBQWUsQ0FBQyxDQUFDO1FBQ3hCO1FBQ0E7TUFDRjtNQUVBLElBQUlELFdBQVcsRUFBRTtRQUNmLElBQUksQ0FBQ0MsZUFBZSxDQUFDO1VBQ25CQyxZQUFZLEVBQUVuVSxDQUFDLENBQUNvVSxNQUFNLEtBQUs7UUFDN0IsQ0FBQyxDQUFDO1FBQ0Y7TUFDRjtNQUVBLElBQUlMLFVBQVUsQ0FBQ3BRLE1BQU0sSUFBSW9RLFVBQVUsQ0FBQzViLEtBQUssRUFBRTtRQUN6QyxNQUFNa2MsWUFBWSxHQUFHbk8sUUFBUSxDQUFDNk4sVUFBVSxDQUFDNWIsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxNQUFNbWMsWUFBWSxHQUFHLElBQUksQ0FBQzNHLGdCQUFnQjtRQUMxQyxJQUFJLENBQUN1RyxlQUFlLENBQUMsQ0FBQztRQUN0QixJQUFJSSxZQUFZLEVBQUU7VUFDaEIsSUFBSSxDQUFDQyxjQUFjLENBQUNELFlBQVksRUFBRUQsWUFBWSxFQUFFQyxZQUFZLENBQUNyZixLQUFLLENBQUM7UUFDckU7UUFDQTtNQUNGO01BRUEsSUFBSStlLFNBQVMsQ0FBQ3JRLE1BQU0sSUFBSXFRLFNBQVMsQ0FBQzdiLEtBQUssRUFBRTtRQUN2QyxNQUFNbWMsWUFBWSxHQUFHLElBQUksQ0FBQzNHLGdCQUFnQjtRQUMxQyxNQUFNNkcsaUJBQWlCLEdBQUd0TyxRQUFRLENBQUMsSUFBSSxDQUFDaEIsR0FBRyxDQUFDMEosZUFBZSxDQUFDdkMsT0FBTyxDQUFDb0ksYUFBYSxJQUFJSCxZQUFZLENBQUN2ZixJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQ3ZHbVIsUUFBUSxDQUFDOE4sU0FBUyxDQUFDN2IsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNqQyxJQUFJbWMsWUFBWSxFQUFFO1VBQ2hCLElBQUksQ0FBQ0ksY0FBYyxDQUFDSixZQUFZLEVBQUVFLGlCQUFpQixDQUFDO1FBQ3REO1FBQ0E7TUFDRjtNQUVBLElBQUlWLE9BQU8sRUFBRTtRQUNYLE1BQU1RLFlBQVksR0FBR1IsT0FBTyxDQUFDYSxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDaEgsZ0JBQWdCLEtBQUsyRyxZQUFZLEVBQUU7VUFDMUMsSUFBSSxDQUFDSixlQUFlLENBQUM7WUFDbkJDLFlBQVksRUFBRW5VLENBQUMsQ0FBQ29VLE1BQU0sS0FBSztVQUM3QixDQUFDLENBQUM7UUFDSixDQUFDLE1BQU07VUFDTCxJQUFJLENBQUNRLGNBQWMsQ0FBQ04sWUFBWSxDQUFDO1FBQ25DO1FBQ0E7TUFDRjtNQUVBLElBQUksSUFBSSxDQUFDM0csZ0JBQWdCLElBQ3BCLENBQUMsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ3RLLFFBQVEsQ0FBQ3JELENBQUMsQ0FBQzZULE1BQU0sQ0FBQyxJQUN6QyxDQUFDLElBQUksQ0FBQzNPLEdBQUcsQ0FBQzBKLGVBQWUsQ0FBQ3ZMLFFBQVEsQ0FBQ3JELENBQUMsQ0FBQzZULE1BQU0sQ0FBQyxFQUFFO1FBQ2pELElBQUksQ0FBQ0ssZUFBZSxDQUFDLENBQUM7TUFDeEI7SUFDRixDQUFDO0lBRUQsSUFBSSxDQUFDckcsaUJBQWlCLEdBQUk3TixDQUFDLElBQUs7TUFDOUIsSUFBSUEsQ0FBQyxDQUFDOU0sR0FBRyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUN5YSxnQkFBZ0IsRUFBRTtRQUMvQyxJQUFJLENBQUN1RyxlQUFlLENBQUM7VUFDbkJDLFlBQVksRUFBRTtRQUNoQixDQUFDLENBQUM7UUFDRjtNQUNGOztNQUVBO01BQ0EsSUFBSSxJQUFJLENBQUN4RyxnQkFBZ0IsSUFBSSxJQUFJLENBQUN6SSxHQUFHLENBQUMwSixlQUFlLEVBQUU7UUFDckQsSUFBSSxDQUFDaUcsdUJBQXVCLENBQUM3VSxDQUFDLENBQUM7TUFDakM7SUFDRixDQUFDO0lBRURpQyxRQUFRLENBQUNnTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDckMsZUFBZSxDQUFDO0lBQ3hEM0wsUUFBUSxDQUFDZ08sZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3BDLGlCQUFpQixDQUFDO0VBQzlEO0VBRUErRyxjQUFjQSxDQUFDTixZQUFZLEVBQUU7SUFDM0IsSUFBSSxDQUFDQSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMvUyxFQUFFLENBQUM4QixRQUFRLENBQUNpUixZQUFZLENBQUMsRUFBRTtNQUNwRDtJQUNGO0lBRUEsSUFBSSxDQUFDSixlQUFlLENBQUMsQ0FBQztJQUN0QixNQUFNSixPQUFPLEdBQUdRLFlBQVksQ0FBQzNSLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUV4RSxJQUFJLENBQUMsSUFBSSxDQUFDdUMsR0FBRyxDQUFDMEosZUFBZSxJQUFJLENBQUNrRixPQUFPLEVBQUU7TUFDekM7SUFDRjtJQUVBLElBQUksQ0FBQ2dCLHVCQUF1QixDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDNVAsR0FBRyxDQUFDMEosZUFBZSxDQUFDbUcsTUFBTSxHQUFHLEtBQUs7SUFDdkMsSUFBSSxDQUFDN1AsR0FBRyxDQUFDMEosZUFBZSxDQUFDMU0sWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDdkQsSUFBSSxDQUFDZ0QsR0FBRyxDQUFDMEosZUFBZSxDQUFDMU0sWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDM0QsSUFBSSxDQUFDZ0QsR0FBRyxDQUFDMEosZUFBZSxDQUFDMU0sWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNvSyxNQUFNLENBQUM0QixNQUFNLENBQUNILFFBQVEsQ0FBQztJQUNoRitGLE9BQU8sQ0FBQzVSLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO0lBQzdDWixRQUFRLENBQUMsSUFBSSxDQUFDQyxFQUFFLEVBQUVvSyw0RUFBcUIsQ0FBQztJQUN4QyxJQUFJLENBQUNnQyxnQkFBZ0IsR0FBRzJHLFlBQVk7SUFDcEMsSUFBSSxDQUFDSSxjQUFjLENBQUNKLFlBQVksRUFBRUEsWUFBWSxDQUFDdmYsSUFBSSxHQUFHLENBQUMsQ0FBQzs7SUFFeEQ7SUFDQSxNQUFNa2dCLFdBQVcsR0FBRyxJQUFJLENBQUMvUCxHQUFHLENBQUMwSixlQUFlLENBQUNqTSxhQUFhLENBQUMsc0JBQXNCLENBQUM7SUFDbEYsTUFBTXVTLFFBQVEsR0FBRyxJQUFJLENBQUNoUSxHQUFHLENBQUMwSixlQUFlLENBQUNqTSxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFFN0UsSUFBSXNTLFdBQVcsRUFBRTtNQUNmQSxXQUFXLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUMsTUFBTSxJQUFJRCxRQUFRLEVBQUU7TUFDbkJBLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDbEI7RUFDRjtFQUVBakIsZUFBZUEsQ0FBQSxFQUVQO0lBQUEsSUFGUTtNQUNkQyxZQUFZLEdBQUc7SUFDakIsQ0FBQyxHQUFBaUIsU0FBQSxDQUFBbnlCLE1BQUEsUUFBQW15QixTQUFBLFFBQUEzeEIsU0FBQSxHQUFBMnhCLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDSixJQUFJLENBQUMsSUFBSSxDQUFDekgsZ0JBQWdCLEVBQUU7TUFDMUI7SUFDRjtJQUVBLE1BQU1tRyxPQUFPLEdBQUcsSUFBSSxDQUFDbkcsZ0JBQWdCLENBQUNoTCxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFFakYsSUFBSSxJQUFJLENBQUN1QyxHQUFHLENBQUMwSixlQUFlLEVBQUU7TUFDNUIsSUFBSSxDQUFDMUosR0FBRyxDQUFDMEosZUFBZSxDQUFDbUcsTUFBTSxHQUFHLElBQUk7SUFDeEM7SUFFQSxJQUFJakIsT0FBTyxFQUFFO01BQ1hBLE9BQU8sQ0FBQzVSLFlBQVksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO01BQzlDLElBQUlpUyxZQUFZLEVBQUU7UUFDaEJMLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDO01BQ2pCO0lBQ0Y7SUFFQWhVLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLDRFQUFxQixDQUFDO0lBQzNDLElBQUksQ0FBQ2dDLGdCQUFnQixHQUFHLElBQUk7RUFDOUI7RUFFQWtILHVCQUF1QkEsQ0FBQzdVLENBQUMsRUFBRTtJQUN6QixNQUFNcVYsS0FBSyxHQUFHLElBQUksQ0FBQ25RLEdBQUcsQ0FBQzBKLGVBQWU7SUFDdEMsTUFBTTBHLE9BQU8sR0FBR0QsS0FBSyxDQUFDMVMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUU3QyxJQUFJLENBQUMyUyxPQUFPLEVBQUU7TUFDWjtJQUNGO0lBRUEsTUFBTXBpQixHQUFHLEdBQUc4TSxDQUFDLENBQUM5TSxHQUFHLElBQUk4TSxDQUFDLENBQUN1VixPQUFPO0lBQzlCLE1BQU1DLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1RSxNQUFNQyxZQUFZLEdBQUdKLFdBQVcsQ0FBQy9kLE9BQU8sQ0FBQzZkLE9BQU8sQ0FBQzs7SUFFakQ7SUFDQSxNQUFNTyxJQUFJLEdBQUcsQ0FBQztJQUNkLE1BQU1DLFlBQVksR0FBRztNQUNuQkMsU0FBUyxFQUFFLENBQUMsQ0FBQztNQUFFQyxVQUFVLEVBQUUsQ0FBQztNQUM1QkMsT0FBTyxFQUFFLENBQUNKLElBQUk7TUFBRUssU0FBUyxFQUFFTCxJQUFJO01BQy9CLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFBRSxFQUFFLEVBQUUsQ0FBQztNQUFFLEVBQUUsRUFBRSxDQUFDQSxJQUFJO01BQUUsRUFBRSxFQUFFQTtJQUNoQyxDQUFDO0lBRUQsSUFBSUMsWUFBWSxDQUFDNWlCLEdBQUcsQ0FBQyxLQUFLelAsU0FBUyxJQUFJbXlCLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtNQUMxRDVWLENBQUMsQ0FBQzJULGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE1BQU13QyxXQUFXLEdBQUdQLFlBQVksR0FBR0UsWUFBWSxDQUFDNWlCLEdBQUcsQ0FBQztNQUVwRCxJQUFJaWpCLFdBQVcsSUFBSSxDQUFDLElBQUlBLFdBQVcsR0FBR1gsV0FBVyxDQUFDdnlCLE1BQU0sRUFBRTtRQUN4RHV5QixXQUFXLENBQUNXLFdBQVcsQ0FBQyxDQUFDaEIsS0FBSyxDQUFDLENBQUM7TUFDbEM7TUFFQTtJQUNGOztJQUVBO0lBQ0EsSUFBSWppQixHQUFHLEtBQUssS0FBSyxJQUFJQSxHQUFHLEtBQUssQ0FBQyxFQUFFO01BQzlCLE1BQU1rakIsU0FBUyxHQUFHWCxLQUFLLENBQUNDLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO01BRTVGLElBQUlTLFNBQVMsQ0FBQ256QixNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzFCO01BQ0Y7TUFFQSxNQUFNLENBQUNvekIsT0FBTyxDQUFDLEdBQUdELFNBQVM7TUFDM0IsTUFBTUUsTUFBTSxHQUFHRixTQUFTLENBQUNBLFNBQVMsQ0FBQ256QixNQUFNLEdBQUcsQ0FBQyxDQUFDO01BRTlDLElBQUkrYyxDQUFDLENBQUN1VyxRQUFRLElBQUlqQixPQUFPLEtBQUtlLE9BQU8sRUFBRTtRQUNyQ3JXLENBQUMsQ0FBQzJULGNBQWMsQ0FBQyxDQUFDO1FBQ2xCMkMsTUFBTSxDQUFDbkIsS0FBSyxDQUFDLENBQUM7TUFDaEIsQ0FBQyxNQUFNLElBQUksQ0FBQ25WLENBQUMsQ0FBQ3VXLFFBQVEsSUFBSWpCLE9BQU8sS0FBS2dCLE1BQU0sRUFBRTtRQUM1Q3RXLENBQUMsQ0FBQzJULGNBQWMsQ0FBQyxDQUFDO1FBQ2xCMEMsT0FBTyxDQUFDbEIsS0FBSyxDQUFDLENBQUM7TUFDakI7SUFDRjtFQUNGO0VBRUFULGNBQWNBLENBQUNKLFlBQVksRUFBRUcsYUFBYSxFQUFFO0lBQzFDLE1BQU1ZLEtBQUssR0FBRyxJQUFJLENBQUNuUSxHQUFHLENBQUMwSixlQUFlO0lBQ3RDLE1BQU00SCxJQUFJLEdBQUcsSUFBSSxDQUFDdFIsR0FBRyxDQUFDMEosZUFBZSxDQUFDak0sYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZFLE1BQU04VCxhQUFhLEdBQUcsSUFBSSxDQUFDdlIsR0FBRyxDQUFDMEosZUFBZSxDQUFDak0sYUFBYSxDQUFDLCtCQUErQixDQUFDO0lBQzdGLE1BQU0rVCxTQUFTLEdBQUcsSUFBSSxDQUFDeFIsR0FBRyxDQUFDMEosZUFBZSxDQUFDak0sYUFBYSxDQUFDLDhCQUE4QixDQUFDO0lBRXhGLElBQUksQ0FBQzBTLEtBQUssSUFBSSxDQUFDbUIsSUFBSSxFQUFFO01BQ25CO0lBQ0Y7SUFFQSxNQUFNRyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hELE1BQU1DLG9CQUFvQixHQUFHRixXQUFXLEtBQUssSUFBSSxHQUM3Q2xDLGFBQWEsR0FDYm5qQixJQUFJLENBQUNpVyxHQUFHLENBQUNrTixhQUFhLEVBQUVrQyxXQUFXLENBQUM7SUFDeEMsTUFBTUcsS0FBSyxHQUFHLEVBQUU7SUFFaEIsS0FBSyxJQUFJL2hCLElBQUksR0FBRzhoQixvQkFBb0IsRUFBRTloQixJQUFJLEdBQUc4aEIsb0JBQW9CLEdBQUcsRUFBRSxFQUFFOWhCLElBQUksSUFBSSxDQUFDLEVBQUU7TUFDakYraEIsS0FBSyxDQUFDaHpCLElBQUksQ0FBQ2tuQixrREFBb0IsQ0FBQ2pXLElBQUksRUFBRXVmLFlBQVksQ0FBQ3ZmLElBQUksQ0FBQyxDQUFDO0lBQzNEO0lBRUFzZ0IsS0FBSyxDQUFDaEosT0FBTyxDQUFDb0ksYUFBYSxHQUFHb0Msb0JBQW9CO0lBQ2xETCxJQUFJLENBQUNqVSxTQUFTLEdBQUd1VSxLQUFLLENBQUM1ekIsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUUvQixJQUFJdXpCLGFBQWEsRUFBRTtNQUNqQixNQUFNTSwwQkFBMEIsR0FBR0osV0FBVyxLQUFLLElBQUksSUFBSUUsb0JBQW9CLElBQUlGLFdBQVc7TUFDOUZGLGFBQWEsQ0FBQzFCLE1BQU0sR0FBRyxLQUFLO01BQzVCMEIsYUFBYSxDQUFDckQsUUFBUSxHQUFHMkQsMEJBQTBCO0lBQ3JEO0lBRUEsSUFBSUwsU0FBUyxFQUFFO01BQ2JBLFNBQVMsQ0FBQzNCLE1BQU0sR0FBRyxLQUFLO01BQ3hCMkIsU0FBUyxDQUFDdEQsUUFBUSxHQUFHLEtBQUs7SUFDNUI7RUFDRjtFQUVBMEIsdUJBQXVCQSxDQUFBLEVBQUc7SUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQzVQLEdBQUcsQ0FBQzBKLGVBQWUsRUFBRTtNQUM3QjtJQUNGO0lBRUEsTUFBTW9JLEdBQUcsR0FBRzFsQixJQUFJLENBQUNpVyxHQUFHLENBQUMsSUFBSSxDQUFDaEcsRUFBRSxDQUFDMFYsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxNQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDM1YsRUFBRSxDQUFDNFYsWUFBWSxJQUFJN2xCLElBQUksQ0FBQzhsQixLQUFLLENBQUMsSUFBSSxDQUFDN1YsRUFBRSxDQUFDOFYscUJBQXFCLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM7SUFFaEcsSUFBSSxDQUFDcFMsR0FBRyxDQUFDMEosZUFBZSxDQUFDaE8sS0FBSyxDQUFDb1csR0FBRyxNQUFBaDBCLE1BQUEsQ0FBTWcwQixHQUFHLE9BQUk7SUFDL0MsSUFBSSxDQUFDOVIsR0FBRyxDQUFDMEosZUFBZSxDQUFDaE8sS0FBSyxDQUFDMlcsSUFBSSxHQUFHLEdBQUc7SUFDekMsSUFBSSxDQUFDclMsR0FBRyxDQUFDMEosZUFBZSxDQUFDaE8sS0FBSyxDQUFDNFcsS0FBSyxHQUFHLEdBQUc7SUFDMUMsSUFBSSxDQUFDdFMsR0FBRyxDQUFDMEosZUFBZSxDQUFDaE8sS0FBSyxDQUFDNlcsTUFBTSxHQUFHLE1BQU07SUFDOUMsSUFBSSxDQUFDdlMsR0FBRyxDQUFDMEosZUFBZSxDQUFDaE8sS0FBSyxDQUFDMFcsTUFBTSxHQUFHSixhQUFhLE1BQUFsMEIsTUFBQSxDQUFNazBCLGFBQWEsVUFBTyxNQUFNO0VBQ3ZGO0VBRUEzQyxjQUFjQSxDQUFDRCxZQUFZLEVBQUV2ZixJQUFJLEVBQUVFLEtBQUssRUFBRTtJQUN4QyxJQUFJLENBQUNvYixhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJO01BQ0Z0YixJQUFJLEVBQUU0WCxTQUFTO01BQ2YxWCxLQUFLLEVBQUUyWDtJQUNULENBQUMsR0FBRyxJQUFJLENBQUM2RyxVQUFVLENBQUMxZSxJQUFJLEVBQUVFLEtBQUssRUFBRSxDQUFDcWYsWUFBWSxDQUFDb0QsU0FBUyxDQUFDO0lBRXpELENBQUM7TUFDQzNpQixJQUFJLEVBQUU0WCxTQUFTO01BQ2YxWCxLQUFLLEVBQUUyWDtJQUNULENBQUMsR0FBRyxJQUFJLENBQUMrSyxzQkFBc0IsQ0FBQ2hMLFNBQVMsRUFBRUMsVUFBVSxDQUFDO0lBRXRELElBQUksQ0FBQzhDLFlBQVksQ0FBQy9DLFNBQVMsRUFBRUMsVUFBVSxDQUFDO0VBQzFDO0VBRUE0RixjQUFjQSxDQUFDalIsRUFBRSxFQUFFO0lBQ2pCLE1BQU1xVyxnQkFBZ0IsR0FBSTVYLENBQUMsSUFBSztNQUM5QixNQUFNNlgsVUFBVSxHQUFHLElBQUksQ0FBQ3ZLLG1CQUFtQjtNQUMzQyxNQUFNO1FBQ0puVixLQUFLO1FBQ0x3TCxNQUFNLEVBQUV1RjtNQUNWLENBQUMsR0FBR2pHLHdCQUF3QixDQUFDakQsQ0FBQyxDQUFDNlQsTUFBTSxFQUFFLFlBQVksQ0FBQztNQUVwRCxJQUFJcFEsRUFBRSxDQUFDdEwsS0FBSyxDQUFDLElBQUkrUSxJQUFJLEVBQUU7UUFDckIsTUFBTTRPLFNBQVMsR0FBWSxDQUFDdlcsRUFBRSxDQUFDeE0sSUFBSSxFQUFFd00sRUFBRSxDQUFDdE0sS0FBSyxFQUFFaVIsUUFBUSxDQUFDZ0QsSUFBSSxDQUFDakYsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLE1BQU04VCxrQkFBa0IsR0FBRyxJQUFJLENBQUM1SyxXQUFXLElBQUk3QixpREFBUyxDQUFFdU0sVUFBVSxHQUFJLElBQUksQ0FBQzlFLFlBQVksR0FBRyxJQUFJLENBQUNGLGNBQWMsRUFBRWlGLFNBQVMsQ0FBQztRQUMzSCxNQUFNRSxhQUFhLEdBQVEsQ0FBQyxJQUFJLENBQUM3SyxXQUFXLElBQUksSUFBSSxDQUFDNEYsWUFBWSxJQUFJLElBQUksQ0FBQ0YsY0FBYztRQUN4RixNQUFNb0YsV0FBVyxHQUFVNU0sK0NBQU8sQ0FBQ3lNLFNBQVMsRUFBRSxJQUFJLENBQUNoTSxJQUFJLENBQUNXLFdBQVcsQ0FBQztRQUVwRSxJQUFJc0wsa0JBQWtCLElBQUlDLGFBQWEsSUFBSUMsV0FBVyxFQUFFO1VBQ3RELElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdkI7UUFFQSxJQUFJLENBQUNILGtCQUFrQixJQUFJLENBQUNFLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ25NLElBQUksQ0FBQzRHLGFBQWEsRUFBRTtVQUNuRSxJQUFJbUYsVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDTSxrQkFBa0IsQ0FBQ0wsU0FBUyxFQUFFNU8sSUFBSSxDQUFDO1VBQzFDLENBQUMsTUFBTTtZQUNMLElBQUksQ0FBQ2tQLG9CQUFvQixDQUFDTixTQUFTLEVBQUU1TyxJQUFJLENBQUM7VUFDNUM7UUFDRixDQUFDLE1BQU07VUFDTC9ILFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLDZFQUFzQixFQUFFQSwrRUFBd0IsQ0FBQztVQUN0RSxPQUFPekMsSUFBSSxDQUFDbUQsT0FBTyxDQUFDa00sV0FBVztRQUNqQztRQUVBLElBQUksSUFBSSxDQUFDeEYsWUFBWSxJQUFJLElBQUksQ0FBQ0YsY0FBYyxJQUFJLElBQUksQ0FBQ3hGLGFBQWEsRUFBRTtVQUNsRSxJQUFJLENBQUNtTCxpQkFBaUIsQ0FBQ1gsVUFBVSxFQUFFQyxTQUFTLEVBQUU1TyxJQUFJLENBQUM7VUFDbkQsSUFBSSxJQUFJLENBQUM0QyxJQUFJLENBQUNnQixVQUFVLElBQUksSUFBSSxDQUFDMkwsT0FBTyxFQUFFO1lBQ3hDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7VUFDNUI7UUFDRjtNQUNGO0lBQ0YsQ0FBQztJQUVELE1BQU1DLGdCQUFnQixHQUFLM1ksQ0FBQyxJQUFLO01BQy9CLE1BQU07UUFBRTdILEtBQUs7UUFBRXdMLE1BQU0sRUFBRXVGO01BQUssQ0FBQyxHQUFHakcsd0JBQXdCLENBQUNqRCxDQUFDLENBQUM2VCxNQUFNLEVBQUUsWUFBWSxDQUFDO01BRWhGLElBQUlwUSxFQUFFLENBQUN0TCxLQUFLLENBQUMsSUFBSStRLElBQUksRUFBRTtRQUNyQixNQUFNdEYsT0FBTyxHQUFZLENBQUNyQyxFQUFFLENBQUN4TSxJQUFJLEVBQUV3TSxFQUFFLENBQUN0TSxLQUFLLEVBQUVpUixRQUFRLENBQUNnRCxJQUFJLENBQUNqRixZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0YsTUFBTWdVLFdBQVcsR0FBUTVNLCtDQUFPLENBQUN6SCxPQUFPLEVBQUUsSUFBSSxDQUFDa0ksSUFBSSxDQUFDVyxXQUFXLENBQUM7UUFDaEUsTUFBTW9MLFVBQVUsR0FBUyxJQUFJLENBQUN2SyxtQkFBbUI7UUFFakQsSUFBSTJLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ25NLElBQUksQ0FBQzRHLGFBQWEsRUFBRTtVQUMzQztRQUNGO1FBRUEsSUFBSSxJQUFJLENBQUN2RixXQUFXLEVBQUU7VUFDcEIsSUFBSSxDQUFDeUwsZUFBZSxDQUFDLENBQUM7VUFFdEIsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ3RYLEVBQUUsQ0FBQ29VLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztVQUN0RGtELEtBQUssQ0FBQ25YLE9BQU8sQ0FBRUgsRUFBRSxJQUFLO1lBQ3BCLE9BQU9BLEVBQUUsQ0FBQzhLLE9BQU8sQ0FBQ3lNLE9BQU87WUFDekIsT0FBT3ZYLEVBQUUsQ0FBQzhLLE9BQU8sQ0FBQzBNLGFBQWE7VUFDakMsQ0FBQyxDQUFDOztVQUVGO1VBQ0EsSUFBSWxCLFVBQVUsSUFBSSxJQUFJLENBQUM5RSxZQUFZLElBQUksQ0FBQ3pILGlEQUFTLENBQUMxSCxPQUFPLEVBQUUsSUFBSSxDQUFDbVAsWUFBWSxDQUFDLEVBQUU7WUFDN0UsSUFBSTFILCtDQUFPLENBQUMsSUFBSSxDQUFDMEgsWUFBWSxFQUFFblAsT0FBTyxDQUFDLEVBQUU7Y0FDdkMsTUFBTW9WLEtBQUssR0FBRyxJQUFJLENBQUNDLEtBQUs7Y0FDeEIsTUFBTTtnQkFBRWxHO2NBQWEsQ0FBQyxHQUFHLElBQUk7Y0FFN0IsSUFBSSxDQUFDbUcsd0JBQXdCLENBQUMsS0FBSyxFQUFFbkcsWUFBWSxDQUFDO2NBQ2xELElBQUksQ0FBQ3FGLG9CQUFvQixDQUFDLElBQUksQ0FBQ3JGLFlBQVksRUFBRWlHLEtBQUssQ0FBQztZQUNyRDtVQUNGLENBQUMsTUFBTSxJQUFJLENBQUNuQixVQUFVLElBQUksSUFBSSxDQUFDaEYsY0FBYyxJQUFJLENBQUN2SCxpREFBUyxDQUFDMUgsT0FBTyxFQUFFLElBQUksQ0FBQ2lQLGNBQWMsQ0FBQyxFQUFFO1lBQ3pGLElBQUl4SCwrQ0FBTyxDQUFDekgsT0FBTyxFQUFFLElBQUksQ0FBQ2lQLGNBQWMsQ0FBQyxFQUFFO2NBQ3pDLE1BQU1vRyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLO2NBQ3hCLE1BQU07Z0JBQUVuRztjQUFlLENBQUMsR0FBRyxJQUFJO2NBRS9CLElBQUksQ0FBQ3FHLHdCQUF3QixDQUFDLElBQUksRUFBRXJHLGNBQWMsQ0FBQztjQUNuRCxJQUFJLENBQUNzRixrQkFBa0IsQ0FBQyxJQUFJLENBQUN0RixjQUFjLEVBQUVvRyxLQUFLLENBQUM7WUFDckQ7VUFDRjtVQUVBLElBQUksSUFBSSxDQUFDM0wsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDMkYsY0FBYyxDQUFDclAsT0FBTyxFQUFFLElBQUksQ0FBQ21QLFlBQVksQ0FBQztVQUNqRCxDQUFDLE1BQU07WUFDTCxJQUFJLENBQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUNKLGNBQWMsRUFBRWpQLE9BQU8sQ0FBQztVQUNuRDtRQUNGLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQ3NWLHdCQUF3QixDQUFDLElBQUksQ0FBQ3BOLElBQUksQ0FBQ3dCLG1CQUFtQixDQUFDO1VBRTVELE1BQU02TCxjQUFjLEdBQUtqUSxJQUFJLENBQUNtRCxPQUFPLENBQUMrRyxRQUFRLEtBQUssTUFBTTtVQUN6RCxNQUFNZ0csZ0JBQWdCLEdBQUdsUSxJQUFJLENBQUNtRCxPQUFPLENBQUMrRyxRQUFRLEtBQUssUUFBUTtVQUMzRCxNQUFNaUcsZUFBZSxHQUFJblEsSUFBSSxDQUFDbUQsT0FBTyxDQUFDK0csUUFBUSxLQUFLLE9BQU87VUFFMUQsSUFBSWtHLFNBQVMsR0FBRyxFQUFFO1VBRWxCLElBQUl6QixVQUFVLElBQUl3QixlQUFlLElBQUlELGdCQUFnQixJQUFJLENBQUN2QixVQUFVLElBQUlzQixjQUFjLEVBQUU7WUFDdEZHLFNBQVMsR0FBRyxTQUFTO1VBQ3ZCO1VBRUEsTUFBTVQsS0FBSyxHQUFHLElBQUksQ0FBQ3RYLEVBQUUsQ0FBQ29VLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztVQUN0RCxJQUFJNEQsVUFBVTtVQUVkVixLQUFLLENBQUNuWCxPQUFPLENBQUMsQ0FBQ0gsRUFBRSxFQUFFNUgsS0FBSyxLQUFLO1lBQzNCLE9BQU80SCxFQUFFLENBQUM4SyxPQUFPLENBQUN5TSxPQUFPO1lBQ3pCLE9BQU92WCxFQUFFLENBQUM4SyxPQUFPLENBQUMwTSxhQUFhO1lBRS9CLElBQUl4WCxFQUFFLEtBQUsySCxJQUFJLEVBQUU7Y0FDZnFRLFVBQVUsR0FBSSxJQUFJLENBQUN6TixJQUFJLENBQUN3QixtQkFBbUIsR0FBSXVMLEtBQUssQ0FBQ2xmLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBR2tmLEtBQUssQ0FBQ2xmLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEY7VUFDRixDQUFDLENBQUM7VUFFRixJQUFJOEosRUFBRSxDQUFDOFYsVUFBVSxDQUFDLEVBQUU7WUFDbEJBLFVBQVUsQ0FBQ2xOLE9BQU8sQ0FBQzBNLGFBQWEsR0FBRyxFQUFFO1VBQ3ZDO1VBRUE3UCxJQUFJLENBQUNtRCxPQUFPLENBQUN5TSxPQUFPLEdBQUdRLFNBQVM7UUFDbEM7TUFDRjtJQUNGLENBQUM7SUFFRC9YLEVBQUUsQ0FBQzBPLGdCQUFnQixDQUFDLFNBQVMsRUFBR2pRLENBQUMsSUFBSztNQUNwQyxNQUFNOU0sR0FBRyxHQUFHOE0sQ0FBQyxDQUFDOU0sR0FBRyxJQUFJOE0sQ0FBQyxDQUFDdVYsT0FBTztNQUU5QixJQUFJcmlCLEdBQUcsS0FBSyxPQUFPLElBQUlBLEdBQUcsS0FBSyxFQUFFLEVBQUU7UUFDakMwa0IsZ0JBQWdCLENBQUM1WCxDQUFDLENBQUM7TUFDckI7O01BRUE7TUFDQSxJQUFJOU0sR0FBRyxLQUFLLEtBQUssSUFBSUEsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLElBQUksQ0FBQ2lhLFdBQVcsRUFBRTtVQUNwQjtVQUNBcU0sVUFBVSxDQUFDLE1BQU07WUFDZixNQUFNWCxLQUFLLEdBQUcsSUFBSSxDQUFDdFgsRUFBRSxDQUFDb1UsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1lBQ3RELE1BQU16TSxJQUFJLEdBQUcsSUFBSSxDQUFDM0gsRUFBRSxDQUFDb0IsYUFBYSxDQUFDLG9CQUFvQixDQUFDO1lBQ3hELE1BQU1oSixLQUFLLEdBQUcsRUFBRSxDQUFDbEMsT0FBTyxDQUFDeFMsSUFBSSxDQUFDNHpCLEtBQUssRUFBRTNQLElBQUksQ0FBQztZQUUxQyxJQUFJdlAsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO2NBQ2hCO1lBQ0Y7WUFFQWdmLGdCQUFnQixDQUFDO2NBQUU5RSxNQUFNLEVBQUVnRixLQUFLLENBQUNsZixLQUFLO1lBQUUsQ0FBQyxDQUFDO1VBQzVDLENBQUMsQ0FBQztRQUNKO01BQ0Y7TUFFQSxJQUFJekcsR0FBRyxLQUFLLFFBQVEsSUFBSUEsR0FBRyxLQUFLLEtBQUssSUFBSUEsR0FBRyxLQUFLLEVBQUUsRUFBRTtRQUNuRCxJQUFJLElBQUksQ0FBQ2lhLFdBQVcsRUFBRTtVQUNwQixJQUFJLENBQUMrSyxjQUFjLENBQUMsQ0FBQztRQUN2QjtNQUNGOztNQUVBO01BQ0EsSUFBSSxDQUFDdUIscUJBQXFCLENBQUN6WixDQUFDLEVBQUU5TSxHQUFHLEVBQUV5bEIsZ0JBQWdCLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUZwWCxFQUFFLENBQUMwTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUySCxnQkFBZ0IsQ0FBQztJQUU5Q3JXLEVBQUUsQ0FBQzBPLGdCQUFnQixDQUFDLFdBQVcsRUFBRTBJLGdCQUFnQixDQUFDO0lBRWxEcFgsRUFBRSxDQUFDbVksSUFBSSxDQUFDekosZ0JBQWdCLENBQUMsVUFBVSxFQUFHalEsQ0FBQyxJQUFLO01BQzFDLE1BQU02WSxLQUFLLEdBQUcsSUFBSSxDQUFDdFgsRUFBRSxDQUFDb1UsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO01BQ3REa0QsS0FBSyxDQUFDblgsT0FBTyxDQUFFSCxFQUFFLElBQUs7UUFDcEIsT0FBT0EsRUFBRSxDQUFDOEssT0FBTyxDQUFDeU0sT0FBTztRQUN6QixPQUFPdlgsRUFBRSxDQUFDOEssT0FBTyxDQUFDME0sYUFBYTtNQUNqQyxDQUFDLENBQUM7O01BRUY7TUFDQTtNQUNBLElBQUksQ0FBQy9ZLENBQUMsQ0FBQzJaLGFBQWEsSUFDZDNaLENBQUMsQ0FBQzJaLGFBQWEsS0FBS3BZLEVBQUUsQ0FBQ21ZLElBQUksSUFBSSxFQUFFblksRUFBRSxDQUFDbVksSUFBSSxDQUFDRSx1QkFBdUIsQ0FBQzVaLENBQUMsQ0FBQzJaLGFBQWEsQ0FBQyxHQUNuRkUsSUFBSSxDQUFDQyw4QkFBOEIsQ0FBRSxFQUFFO1FBQ3pDLElBQUksSUFBSSxDQUFDM00sV0FBVyxFQUFFO1VBQ3BCLElBQUksQ0FBQ3lMLGVBQWUsQ0FBQyxDQUFDO1FBQ3hCO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBTSx3QkFBd0JBLENBQUM5SSxTQUFTLEVBQW9CO0lBQUEsSUFBbEIySixTQUFTLEdBQUEzRSxTQUFBLENBQUFueUIsTUFBQSxRQUFBbXlCLFNBQUEsUUFBQTN4QixTQUFBLEdBQUEyeEIsU0FBQSxNQUFHLElBQUk7SUFDbEQsSUFBSSxDQUFDOUgsbUJBQW1CLEdBQUc4QyxTQUFTO0lBRXBDLElBQUkySixTQUFTLEVBQUU7TUFDYixJQUFJLENBQUM3QixjQUFjLENBQUMsQ0FBQztNQUNyQixJQUFJLENBQUNyRixjQUFjLEdBQUl6QyxTQUFTLEdBQUkySixTQUFTLEdBQUcsSUFBSTtNQUNwRCxJQUFJLENBQUNoSCxZQUFZLEdBQU0zQyxTQUFTLEdBQUksSUFBSSxHQUFHMkosU0FBUztJQUN0RCxDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNsSCxjQUFjLEdBQUcsSUFBSSxDQUFDRSxZQUFZO01BQ3ZDLElBQUksQ0FBQ0EsWUFBWSxHQUFHLElBQUksQ0FBQ0YsY0FBYztJQUN6QztJQUVBLElBQUksSUFBSSxDQUFDL0csSUFBSSxDQUFDOEQsVUFBVSxFQUFFO01BQ3hCdE8sUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFNk8sU0FBUyxHQUFHekUsc0VBQWUsR0FBR0Esb0VBQWEsQ0FBQztNQUM5RHhLLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRTZPLFNBQVMsR0FBR3pFLG9FQUFhLEdBQUdBLHNFQUFlLENBQUM7SUFDbkU7RUFDRjtFQUVBeU0sb0JBQW9CQSxDQUFDTixTQUFTLEVBQUU1TyxJQUFJLEVBQUU7SUFDcEMsSUFBSSxJQUFJLENBQUNpRSxXQUFXLElBQUk5QiwrQ0FBTyxDQUFDLElBQUksQ0FBQ3dILGNBQWMsRUFBRWlGLFNBQVMsQ0FBQyxFQUFFO01BQy9ELElBQUksQ0FBQ2tDLGVBQWUsQ0FBQ2xDLFNBQVMsRUFBRTVPLElBQUksQ0FBQztNQUVyQyxNQUFNekUsRUFBRSxHQUFHQSxDQUFBLEtBQU07UUFDZnRELFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLDZFQUFzQixDQUFDO1FBQzVDekMsSUFBSSxDQUFDNEksbUJBQW1CLENBQUMsVUFBVSxFQUFFck4sRUFBRSxDQUFDO01BQzFDLENBQUM7TUFFRHlFLElBQUksQ0FBQytHLGdCQUFnQixDQUFDLFVBQVUsRUFBRXhMLEVBQUUsQ0FBQztNQUNyQyxJQUFJLENBQUMwSSxXQUFXLEdBQUcsS0FBSztJQUMxQixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUN5TCxlQUFlLENBQUMsQ0FBQztNQUN0QnRYLFFBQVEsQ0FBQyxJQUFJLENBQUNDLEVBQUUsRUFBRW9LLDZFQUFzQixDQUFDO01BQ3pDLElBQUksQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQzhNLGlCQUFpQixDQUFDbkMsU0FBUyxFQUFFNU8sSUFBSSxDQUFDO01BQ3ZDQSxJQUFJLENBQUNtRCxPQUFPLENBQUNrTSxXQUFXLEdBQUcsTUFBTTtJQUNuQztFQUNGO0VBRUFKLGtCQUFrQkEsQ0FBQ0wsU0FBUyxFQUFFNU8sSUFBSSxFQUFFO0lBQ2xDLElBQUksSUFBSSxDQUFDaUUsV0FBVyxJQUFJOUIsK0NBQU8sQ0FBQ3lNLFNBQVMsRUFBRSxJQUFJLENBQUMvRSxZQUFZLENBQUMsRUFBRTtNQUM3RCxJQUFJLENBQUNrSCxpQkFBaUIsQ0FBQ25DLFNBQVMsRUFBRTVPLElBQUksQ0FBQztNQUV2QyxNQUFNekUsRUFBRSxHQUFHQSxDQUFBLEtBQU07UUFDZnRELFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLCtFQUF3QixDQUFDO1FBQzlDekMsSUFBSSxDQUFDNEksbUJBQW1CLENBQUMsVUFBVSxFQUFFck4sRUFBRSxDQUFDO01BQzFDLENBQUM7TUFFRHlFLElBQUksQ0FBQytHLGdCQUFnQixDQUFDLFVBQVUsRUFBRXhMLEVBQUUsQ0FBQztNQUNyQyxJQUFJLENBQUMwSSxXQUFXLEdBQUcsS0FBSztJQUMxQixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUN5TCxlQUFlLENBQUMsQ0FBQztNQUN0QnRYLFFBQVEsQ0FBQyxJQUFJLENBQUNDLEVBQUUsRUFBRW9LLCtFQUF3QixDQUFDO01BQzNDLElBQUksQ0FBQ3dCLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQzZNLGVBQWUsQ0FBQ2xDLFNBQVMsRUFBRTVPLElBQUksQ0FBQztNQUNyQ0EsSUFBSSxDQUFDbUQsT0FBTyxDQUFDa00sV0FBVyxHQUFHLE9BQU87SUFDcEM7RUFDRjtFQUVBMEIsaUJBQWlCQSxDQUFDbkMsU0FBUyxFQUFFNU8sSUFBSSxFQUFFO0lBQ2pDLElBQUksQ0FBQzRKLFdBQVcsQ0FBQ2dGLFNBQVMsRUFBRTVPLElBQUksQ0FBQztJQUNqQyxJQUFJLENBQUNnUixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDNUIsSUFBSSxJQUFJLENBQUM3TSxhQUFhLEVBQUU7TUFDdEIsTUFBTThNLE9BQU8sR0FBR3BvQixpREFBUSxDQUFDcVosaURBQVMsQ0FBQyxHQUFHME0sU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDeEwsTUFBTSxDQUFDQyxVQUFVLEVBQUUsSUFBSSxDQUFDRCxNQUFNLENBQUM7TUFDdEYsTUFBTThOLEtBQUssR0FBRyxJQUFJLENBQUM5TixNQUFNLENBQUM0QixNQUFNLENBQUNtTSxhQUFhLElBQUksbUJBQW1CO01BQ3JFLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLEtBQUssQ0FBQ3BaLE9BQU8sQ0FBQyxPQUFPLEVBQUVtWixPQUFPLENBQUMsQ0FBQztNQUN4RCxJQUFJLENBQUNwVixJQUFJLENBQUMsaUJBQWlCLEVBQUVxRyxpREFBUyxDQUFDLEdBQUcwTSxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUxTSxpREFBUyxDQUFDLEdBQUcwTSxTQUFTLENBQUMsQ0FBQztNQUNwRixJQUFJOVMsVUFBVSxDQUFDLElBQUksQ0FBQzhHLElBQUksQ0FBQ3lPLGFBQWEsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQ3pPLElBQUksQ0FBQ3lPLGFBQWEsQ0FBQ25QLGlEQUFTLENBQUMsR0FBRzBNLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRTFNLGlEQUFTLENBQUMsR0FBRzBNLFNBQVMsQ0FBQyxDQUFDO01BQ2pGO0lBQ0Y7RUFDRjtFQUVBa0MsZUFBZUEsQ0FBQ2xDLFNBQVMsRUFBRTVPLElBQUksRUFBRTtJQUMvQixJQUFJLENBQUM4SixTQUFTLENBQUM4RSxTQUFTLEVBQUU1TyxJQUFJLENBQUM7SUFDL0IsSUFBSSxDQUFDZ1IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQzlCLElBQUksSUFBSSxDQUFDN00sYUFBYSxFQUFFO01BQ3RCLE1BQU04TSxPQUFPLEdBQUdwb0IsaURBQVEsQ0FBQ3FaLGlEQUFTLENBQUMsR0FBRzBNLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQ3hMLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQ0QsTUFBTSxDQUFDO01BQ3RGLE1BQU04TixLQUFLLEdBQUcsSUFBSSxDQUFDOU4sTUFBTSxDQUFDNEIsTUFBTSxDQUFDc00sV0FBVyxJQUFJLGlCQUFpQjtNQUNqRSxJQUFJLENBQUNGLGtCQUFrQixDQUFDRixLQUFLLENBQUNwWixPQUFPLENBQUMsT0FBTyxFQUFFbVosT0FBTyxDQUFDLENBQUM7TUFDeEQsSUFBSSxDQUFDcFYsSUFBSSxDQUFDLGVBQWUsRUFBRXFHLGlEQUFTLENBQUMsR0FBRzBNLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRTFNLGlEQUFTLENBQUMsR0FBRzBNLFNBQVMsQ0FBQyxDQUFDO01BQ2xGLElBQUk5UyxVQUFVLENBQUMsSUFBSSxDQUFDOEcsSUFBSSxDQUFDMk8sV0FBVyxDQUFDLEVBQUU7UUFDckMsSUFBSSxDQUFDM08sSUFBSSxDQUFDMk8sV0FBVyxDQUFDclAsaURBQVMsQ0FBQyxHQUFHME0sU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFMU0saURBQVMsQ0FBQyxHQUFHME0sU0FBUyxDQUFDLENBQUM7TUFDL0U7SUFDRjtFQUNGO0VBRUFjLGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFJLElBQUksQ0FBQ3hMLGlCQUFpQixDQUFDbnFCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDckMsTUFBTTtRQUFFbWxCO01BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQ0YsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDa0YsaUJBQWlCLENBQUM7TUFDN0RoRixLQUFLLENBQUN4bEIsR0FBRyxDQUFFc21CLElBQUksSUFBSztRQUNsQixPQUFPQSxJQUFJLENBQUNtRCxPQUFPLENBQUNrTSxXQUFXO1FBQy9CLE9BQU9yUCxJQUFJLENBQUNtRCxPQUFPLENBQUNxTyxPQUFPO01BQzdCLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFckIsSUFBSSxDQUFDdE4sYUFBYSxHQUFPLElBQUk7TUFDN0IsSUFBSSxDQUFDRCxpQkFBaUIsR0FBRyxFQUFFO0lBQzdCO0VBQ0Y7RUFFQXVOLGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksSUFBSSxDQUFDQyxhQUFhLElBQUk1VixVQUFVLENBQUMsSUFBSSxDQUFDNFYsYUFBYSxDQUFDQyxPQUFPLENBQUMsRUFBRTtNQUNoRSxJQUFJLENBQUNELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7TUFDNUIsSUFBSSxDQUFDRCxhQUFhLEdBQUcsSUFBSTtJQUMzQjtJQUVBLElBQUluWCxFQUFFLENBQUMsSUFBSSxDQUFDeUIsR0FBRyxDQUFDNFYsT0FBTyxDQUFDLEVBQUU7TUFDeEI7TUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDeFosRUFBRSxDQUFDb0IsYUFBYSxDQUFDLHVDQUF1QyxDQUFDO01BQ2hGLElBQUlvWSxTQUFTLEVBQUU7UUFDYkEsU0FBUyxDQUFDQyxlQUFlLENBQUMsa0JBQWtCLENBQUM7TUFDL0M7TUFDQTdZLGNBQWMsQ0FBQyxJQUFJLENBQUMrQyxHQUFHLENBQUM0VixPQUFPLENBQUM7SUFDbEM7RUFDRjtFQUVBUixrQkFBa0JBLENBQUN0ZixPQUFPLEVBQUU7SUFDMUIsSUFBSSxJQUFJLENBQUNrSyxHQUFHLENBQUN5SixVQUFVLEVBQUU7TUFDdkIsSUFBSSxDQUFDekosR0FBRyxDQUFDeUosVUFBVSxDQUFDc00sV0FBVyxHQUFHamdCLE9BQU87SUFDM0M7RUFDRjtFQUVBeWUscUJBQXFCQSxDQUFDelosQ0FBQyxFQUFFOU0sR0FBRyxFQUFFeWxCLGdCQUFnQixFQUFFO0lBQzlDLE1BQU11QyxXQUFXLEdBQUcsSUFBSSxDQUFDM1osRUFBRSxDQUFDb0IsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEtBQ3pEM0MsQ0FBQyxDQUFDNlQsTUFBTSxJQUFJLE9BQU83VCxDQUFDLENBQUM2VCxNQUFNLENBQUNjLE9BQU8sS0FBSyxVQUFVLEdBQUczVSxDQUFDLENBQUM2VCxNQUFNLENBQUNjLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFbkcsSUFBSSxDQUFDdUcsV0FBVyxFQUFFO01BQ2hCO0lBQ0Y7SUFFQSxNQUFNQyxTQUFTLEdBQUc7TUFDaEJwRixTQUFTLEVBQUUsQ0FBQyxDQUFDO01BQUVDLFVBQVUsRUFBRSxDQUFDO01BQzVCQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO01BQUVDLFNBQVMsRUFBRSxDQUFDO01BQ3pCLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFBRSxFQUFFLEVBQUUsQ0FBQztNQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFBRSxFQUFFLEVBQUU7SUFDN0IsQ0FBQztJQUNELE1BQU1rRixXQUFXLEdBQUc7TUFBRUMsSUFBSSxFQUFFLE1BQU07TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRSxFQUFFLEVBQUUsTUFBTTtNQUFFLEVBQUUsRUFBRTtJQUFNLENBQUM7SUFDdkUsTUFBTUMsUUFBUSxHQUFHO01BQUVDLE1BQU0sRUFBRSxDQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQUUsRUFBRSxFQUFFO0lBQUUsQ0FBQztJQUUzRCxJQUFJTixTQUFTLENBQUNqb0IsR0FBRyxDQUFDLEtBQUt6UCxTQUFTLEVBQUU7TUFDaEN1YyxDQUFDLENBQUMyVCxjQUFjLENBQUMsQ0FBQztNQUNsQixNQUFNa0YsS0FBSyxHQUFHcEQsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDblUsRUFBRSxDQUFDb1UsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7TUFDbEUsTUFBTUMsWUFBWSxHQUFHaUQsS0FBSyxDQUFDcGhCLE9BQU8sQ0FBQ3lqQixXQUFXLENBQUM7TUFDL0MsTUFBTS9FLFdBQVcsR0FBR1AsWUFBWSxHQUFHdUYsU0FBUyxDQUFDam9CLEdBQUcsQ0FBQztNQUVqRCxJQUFJaWpCLFdBQVcsSUFBSSxDQUFDLElBQUlBLFdBQVcsR0FBRzBDLEtBQUssQ0FBQzUxQixNQUFNLEVBQUU7UUFDbEQ0MUIsS0FBSyxDQUFDMUMsV0FBVyxDQUFDLENBQUNoQixLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQ2hJLFdBQVcsRUFBRTtVQUNwQndMLGdCQUFnQixDQUFDO1lBQUU5RSxNQUFNLEVBQUVnRixLQUFLLENBQUMxQyxXQUFXO1VBQUUsQ0FBQyxDQUFDO1FBQ2xEO01BQ0Y7SUFDRixDQUFDLE1BQU0sSUFBSWlGLFdBQVcsQ0FBQ2xvQixHQUFHLENBQUMsRUFBRTtNQUMzQjhNLENBQUMsQ0FBQzJULGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE1BQU0rSCxHQUFHLEdBQUdSLFdBQVcsQ0FBQ3ZHLE9BQU8sQ0FBQyxjQUFjLENBQUM7TUFFL0MsSUFBSStHLEdBQUcsRUFBRTtRQUNQLE1BQU1DLFFBQVEsR0FBR2xHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDZ0csR0FBRyxDQUFDL0YsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakUsSUFBSWdHLFFBQVEsQ0FBQzE0QixNQUFNLEVBQUU7VUFDbkIsTUFBTTR3QixNQUFNLEdBQUd1SCxXQUFXLENBQUNsb0IsR0FBRyxDQUFDLEtBQUssTUFBTSxHQUFHeW9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR0EsUUFBUSxDQUFDQSxRQUFRLENBQUMxNEIsTUFBTSxHQUFHLENBQUMsQ0FBQztVQUN4RjR3QixNQUFNLENBQUNzQixLQUFLLENBQUMsQ0FBQztVQUVkLElBQUksSUFBSSxDQUFDaEksV0FBVyxFQUFFO1lBQ3BCd0wsZ0JBQWdCLENBQUM7Y0FBRTlFO1lBQU8sQ0FBQyxDQUFDO1VBQzlCO1FBQ0Y7TUFDRjtJQUNGLENBQUMsTUFBTSxJQUFJMEgsUUFBUSxDQUFDcm9CLEdBQUcsQ0FBQyxLQUFLelAsU0FBUyxFQUFFO01BQ3RDdWMsQ0FBQyxDQUFDMlQsY0FBYyxDQUFDLENBQUM7TUFDbEIsTUFBTWlJLFFBQVEsR0FBR1YsV0FBVyxDQUFDalgsWUFBWSxDQUFDLFlBQVksQ0FBQztNQUN2RCxNQUFNNFgsWUFBWSxHQUFHWCxXQUFXLENBQUN2RyxPQUFPLENBQUMsV0FBVyxDQUFDO01BQ3JELE1BQU1tSCxlQUFlLEdBQUdELFlBQVksR0FBR0EsWUFBWSxDQUFDbkUsU0FBUyxHQUFHLElBQUk7TUFFcEUsSUFBSTZELFFBQVEsQ0FBQ3JvQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxDQUFDZ1MsR0FBRyxDQUFDa0ssT0FBTyxDQUFDMk0sS0FBSyxDQUFDLENBQUM7TUFDMUIsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDN1csR0FBRyxDQUFDb0ssSUFBSSxDQUFDeU0sS0FBSyxDQUFDLENBQUM7TUFDdkI7O01BRUE7TUFDQXZDLFVBQVUsQ0FBQyxNQUFNO1FBQ2YsSUFBSXdDLFdBQVcsR0FBRyxJQUFJO1FBQ3RCLElBQUluSSxNQUFNLEdBQUcsSUFBSTtRQUVqQixJQUFJaUksZUFBZSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUM1VyxHQUFHLENBQUN6UCxNQUFNLEVBQUU7VUFDL0N1bUIsV0FBVyxHQUFHLElBQUksQ0FBQzlXLEdBQUcsQ0FBQ3pQLE1BQU0sQ0FBQ3dtQixJQUFJLENBQUVDLE9BQU8sSUFBS0EsT0FBTyxDQUFDeEUsU0FBUyxLQUFLb0UsZUFBZSxDQUFDLElBQUksSUFBSTtRQUNoRztRQUVBLElBQUlFLFdBQVcsRUFBRTtVQUNmbkksTUFBTSxHQUFHbUksV0FBVyxDQUFDclosYUFBYSxrQkFBQTNmLE1BQUEsQ0FBaUI0NEIsUUFBUSxRQUFJLENBQUM7VUFFaEUsSUFBSSxDQUFDL0gsTUFBTSxFQUFFO1lBQ1gsTUFBTXNJLFVBQVUsR0FBR0gsV0FBVyxDQUFDckcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1lBRS9ELElBQUl3RyxVQUFVLENBQUNsNUIsTUFBTSxFQUFFO2NBQ3JCNHdCLE1BQU0sR0FBR3NJLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDbDVCLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDNUM7VUFDRjtRQUNGO1FBRUEsSUFBSSxDQUFDNHdCLE1BQU0sRUFBRTtVQUNYLE1BQU11SSxRQUFRLEdBQUcsSUFBSSxDQUFDN2EsRUFBRSxDQUFDb1UsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1VBRXpELEtBQUssSUFBSXh5QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpNUIsUUFBUSxDQUFDbjVCLE1BQU0sRUFBRUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxJQUFJaTVCLFFBQVEsQ0FBQ2o1QixDQUFDLENBQUMsQ0FBQzhnQixZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUsyWCxRQUFRLEVBQUU7Y0FDdkQvSCxNQUFNLEdBQUd1SSxRQUFRLENBQUNqNUIsQ0FBQyxDQUFDO2NBQ3BCO1lBQ0Y7VUFDRjtVQUVBLElBQUksQ0FBQzB3QixNQUFNLElBQUl1SSxRQUFRLENBQUNuNUIsTUFBTSxFQUFFO1lBQzlCNHdCLE1BQU0sR0FBR3VJLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDbjVCLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDeEM7UUFDRjtRQUVBLElBQUk0d0IsTUFBTSxFQUFFO1VBQ1ZBLE1BQU0sQ0FBQ3NCLEtBQUssQ0FBQyxDQUFDO1FBQ2hCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFbEMsY0FBY0EsQ0FBQ3ZWLEtBQUssRUFBRXlLLEdBQUcsRUFBRTtJQUN6QixNQUFNO01BQUVDLEtBQUs7TUFBRUk7SUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDTixXQUFXLENBQUN4SyxLQUFLLEVBQUV5SyxHQUFHLENBQUM7SUFDdkQsTUFBTTtNQUFFMkQ7SUFBSyxDQUFDLEdBQWEsSUFBSTtJQUMvQixJQUFJO01BQUUzQixPQUFPO01BQUVrUztJQUFRLENBQUMsR0FBR3ZRLElBQUk7SUFDL0IsSUFBSXdRLG1CQUFtQjtJQUV2QixJQUFJcGMsT0FBTyxDQUFDa0ksS0FBSyxDQUFDLEVBQUU7TUFDbEIsSUFBSTBELElBQUksQ0FBQ2lFLFFBQVEsRUFBRTtRQUNqQixNQUFNd00sZ0JBQWdCLEdBQUduVSxLQUFLLENBQUMxUyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQ29XLElBQUksQ0FBQzBRLDRCQUE0QixFQUFFO1VBQ3RDO1VBQ0EsTUFBTTNELEtBQUssR0FBRzBELGdCQUFnQixDQUFDMzVCLEdBQUcsQ0FBRXNtQixJQUFJLElBQUtBLElBQUksQ0FBQ21ELE9BQU8sQ0FBQ2xDLE9BQU8sSUFBSUEsT0FBTyxDQUFDO1VBQzdFQSxPQUFPLEdBQUc3WSxJQUFJLENBQUNpVyxHQUFHLENBQUMsR0FBR3NSLEtBQUssQ0FBQztRQUM5QjtRQUVBLElBQUksQ0FBQy9NLElBQUksQ0FBQzJRLDJCQUEyQixFQUFFO1VBQ3JDO1VBQ0EsTUFBTTVELEtBQUssR0FBRzBELGdCQUFnQixDQUFDMzVCLEdBQUcsQ0FBRXNtQixJQUFJLElBQUtBLElBQUksQ0FBQ21ELE9BQU8sQ0FBQ2dRLE9BQU8sSUFBSUEsT0FBTyxDQUFDO1VBQzdFQSxPQUFPLEdBQUcvcUIsSUFBSSxDQUFDaVcsR0FBRyxDQUFDLEdBQUdzUixLQUFLLENBQUM7UUFDOUI7TUFDRjs7TUFFQTtNQUNBLE1BQU02RCxZQUFZLEdBQU01USxJQUFJLENBQUNpRSxRQUFRLEdBQUd2SCxPQUFPLEdBQUcsSUFBSTtNQUN0RCxNQUFNbVUsZUFBZSxHQUFHdlUsS0FBSyxDQUFDbmxCLE1BQU0sR0FBR2tuQixPQUFPO01BQzlDLE1BQU15UyxlQUFlLEdBQUd4VSxLQUFLLENBQUNubEIsTUFBTSxHQUFHbzVCLE9BQU87TUFFOUMsSUFBSSxDQUFDaFAsYUFBYSxHQUFHcVAsWUFBWSxJQUFJQyxlQUFlLElBQUlDLGVBQWU7TUFFdkUsSUFBSSxDQUFDRCxlQUFlLEVBQUU7UUFDcEJMLG1CQUFtQixHQUFHOVEsa0RBQVUsQ0FBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUNtQyxNQUFNLENBQUN1USxpQkFBaUIsQ0FBQztNQUMxRTtNQUVBLElBQUksQ0FBQ0QsZUFBZSxFQUFFO1FBQ3BCTixtQkFBbUIsR0FBRzlRLGtEQUFVLENBQUM2USxPQUFPLEVBQUUsSUFBSSxDQUFDL1AsTUFBTSxDQUFDd1EsaUJBQWlCLENBQUM7TUFDMUU7TUFFQSxJQUFJLENBQUNKLFlBQVksRUFBRTtRQUNqQkosbUJBQW1CLEdBQUcsSUFBSSxDQUFDaFEsTUFBTSxDQUFDeVEsY0FBYztNQUNsRDtNQUVBM1UsS0FBSyxDQUFDeGxCLEdBQUcsQ0FBQyxDQUFDc21CLElBQUksRUFBRXZQLEtBQUssS0FBSztRQUN6QixNQUFNNGQsSUFBSSxHQUFHNWQsS0FBSyxLQUFLLENBQUM7UUFDeEIsTUFBTTZkLEtBQUssR0FBRzdkLEtBQUssR0FBRyxDQUFDLEtBQUt5TyxLQUFLLENBQUNubEIsTUFBTTtRQUV4QyxJQUFJLElBQUksQ0FBQ29xQixhQUFhLEVBQUU7VUFDdEIsSUFBSWtLLElBQUksRUFBRTtZQUNSck8sSUFBSSxDQUFDbUQsT0FBTyxDQUFDa00sV0FBVyxHQUFHLE1BQU07VUFDbkMsQ0FBQyxNQUFNLElBQUlmLEtBQUssRUFBRTtZQUNoQnRPLElBQUksQ0FBQ21ELE9BQU8sQ0FBQ2tNLFdBQVcsR0FBRyxPQUFPO1VBQ3BDLENBQUMsTUFBTTtZQUNMclAsSUFBSSxDQUFDbUQsT0FBTyxDQUFDa00sV0FBVyxHQUFHLFFBQVE7VUFDckM7UUFDRixDQUFDLE1BQU07VUFDTCxJQUFJaEIsSUFBSSxFQUFFO1lBQ1JyTyxJQUFJLENBQUNtRCxPQUFPLENBQUNxTyxPQUFPLEdBQUcsTUFBTTtVQUMvQixDQUFDLE1BQU0sSUFBSWxELEtBQUssRUFBRTtZQUNoQnRPLElBQUksQ0FBQ21ELE9BQU8sQ0FBQ3FPLE9BQU8sR0FBRyxPQUFPO1VBQ2hDLENBQUMsTUFBTTtZQUNMeFIsSUFBSSxDQUFDbUQsT0FBTyxDQUFDcU8sT0FBTyxHQUFHLFFBQVE7VUFDakM7UUFDRjtRQUVBLE1BQU1zQyxlQUFlLEdBQUksSUFBSSxDQUFDMVAsbUJBQW1CLEdBQUlpSyxJQUFJLEdBQUdDLEtBQUs7UUFFakUsSUFBSXdGLGVBQWUsSUFBSSxJQUFJLENBQUN6YixFQUFFLENBQUM4QixRQUFRLENBQUM2RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ21FLGFBQWEsRUFBRTtVQUNwRSxJQUFJLENBQUNuSSxHQUFHLENBQUM0VixPQUFPLEdBQUcsSUFBSSxDQUFDdlosRUFBRSxDQUFDNk0sV0FBVyxDQUFDOUwsaUJBQWlCLENBQUMwSSwrQ0FBaUIsQ0FBQyxDQUFDO1VBQzVFLElBQUksQ0FBQzlGLEdBQUcsQ0FBQzRWLE9BQU8sQ0FBQ2wzQixFQUFFLEdBQUcsa0JBQWtCO1VBQ3hDLElBQUksQ0FBQ3NoQixHQUFHLENBQUM0VixPQUFPLENBQUNuWSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNKLFNBQVMsR0FBRytaLG1CQUFtQjtVQUN0RXBULElBQUksQ0FBQ2hILFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztVQUV6RCxJQUFJLENBQUNpSyxNQUFNLHlCQUFBbnBCLE1BQUEsQ0FBeUJzNUIsbUJBQW1CLFFBQUF0NUIsTUFBQSxDQUFLMGEsS0FBSyxTQUFBMWEsTUFBQSxDQUFNbWxCLEdBQUcsUUFBSyxNQUFNLENBQUM7VUFFdEYsSUFBSSxDQUFDeVMsYUFBYSxHQUFHelAsd0RBQWdCLENBQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDaEUsR0FBRyxDQUFDNFYsT0FBTyxFQUFFO1lBQzVEbUMsU0FBUyxFQUFFLEtBQUs7WUFDaEJDLElBQUksRUFBRSxLQUFLO1lBQ1hyckIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7VUFDZixDQUFDLENBQUM7UUFDSjtRQUVBLE9BQU9xWCxJQUFJO01BQ2IsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDa0UsaUJBQWlCLEdBQUcsQ0FBQzFQLEtBQUssRUFBRXlLLEdBQUcsQ0FBQztJQUN2QztJQUVBLE9BQU8sSUFBSSxDQUFDa0YsYUFBYTtFQUMzQjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtFQUNFNkssY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDVSxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUN6TCxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNwSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDOE4sY0FBYyxFQUFFLElBQUksQ0FBQ0UsWUFBWSxDQUFDO0lBQ3BFLElBQUkvTixVQUFVLENBQUMsSUFBSSxDQUFDOEcsSUFBSSxDQUFDcVIsZ0JBQWdCLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUNyUixJQUFJLENBQUNxUixnQkFBZ0IsQ0FBQyxJQUFJLENBQUN0SyxjQUFjLEVBQUUsSUFBSSxDQUFDRSxZQUFZLENBQUM7SUFDcEU7SUFFQSxJQUFJLENBQUNGLGNBQWMsR0FBRyxJQUFJO0lBQzFCLElBQUksQ0FBQ0UsWUFBWSxHQUFLLElBQUk7SUFFMUIsSUFBSSxJQUFJLENBQUNpRyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJO0lBQ25CO0lBRUEsSUFBSSxJQUFJLENBQUNDLEtBQUssRUFBRTtNQUNkLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUk7SUFDbkI7SUFFQSxJQUFJLElBQUksQ0FBQ25OLElBQUksQ0FBQ2dCLFVBQVUsSUFBSSxJQUFJLENBQUNoQixJQUFJLENBQUMrRCxTQUFTLElBQUksSUFBSSxDQUFDL0QsSUFBSSxDQUFDZ0UsT0FBTyxFQUFFO01BQ3BFLElBQUksQ0FBQ2hFLElBQUksQ0FBQytELFNBQVMsQ0FBQzFYLEtBQUssR0FBRyxJQUFJO01BQ2hDLElBQUksQ0FBQzJULElBQUksQ0FBQ2dFLE9BQU8sQ0FBQzNYLEtBQUssR0FBSyxJQUFJO01BRWhDLElBQUksSUFBSSxDQUFDMlQsSUFBSSxDQUFDc1IsYUFBYSxFQUFFO1FBQzNCLElBQUksQ0FBQ3RSLElBQUksQ0FBQ3VSLGFBQWEsQ0FBQ2xsQixLQUFLLEdBQUcsSUFBSTtNQUN0QztJQUNGO0lBRUEsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRStQLFdBQVdBLENBQUN4SyxLQUFLLEVBQUV5SyxHQUFHLEVBQUU7SUFDdEIsSUFBSWtELCtDQUFPLENBQUMzTixLQUFLLEVBQUV5SyxHQUFHLENBQUMsRUFBRTtNQUN2QixPQUFPLElBQUksQ0FBQzZFLEtBQUssQ0FBQzlFLFdBQVcsQ0FBQ3hLLEtBQUssRUFBRXlLLEdBQUcsQ0FBQztJQUMzQztJQUNBLE9BQU87TUFDTEMsS0FBSyxFQUFFLElBQUk7TUFDWEksT0FBTyxFQUFFO0lBQ1gsQ0FBQztFQUNIO0VBRUFzSyxXQUFXQSxDQUFDZ0YsU0FBUyxFQUFFNU8sSUFBSSxFQUFFO0lBQzNCLElBQUksQ0FBQzJKLGNBQWMsR0FBR2lGLFNBQVM7SUFFL0IsSUFBSTVPLElBQUksRUFBRTtNQUNSLElBQUksQ0FBQzhQLEtBQUssR0FBRzlQLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNvVSxZQUFZLENBQUMsT0FBTyxFQUFFeEYsU0FBUyxDQUFDO0VBQ3ZDO0VBRUE5RSxTQUFTQSxDQUFDOEUsU0FBUyxFQUFFNU8sSUFBSSxFQUFFO0lBQ3pCLElBQUksQ0FBQzZKLFlBQVksR0FBRytFLFNBQVM7SUFFN0IsSUFBSTVPLElBQUksRUFBRTtNQUNSLElBQUksQ0FBQytQLEtBQUssR0FBRy9QLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNvVSxZQUFZLENBQUMsS0FBSyxFQUFFeEYsU0FBUyxDQUFDO0VBQ3JDO0VBRUEzRixVQUFVQSxDQUFDeEYsU0FBUyxFQUFFQyxVQUFVLEVBQUUyUSxLQUFLLEVBQUV2TCxjQUFjLEVBQUU7SUFDdkQsTUFBTXZjLE1BQU0sR0FBRyxFQUFFO0lBQ2pCLE1BQU11UyxJQUFJLEdBQUssQ0FBQyxDQUFDO0lBQ2pCLElBQUlrSyxRQUFRLEdBQUd0RixVQUFVO0lBQ3pCLElBQUlxRixPQUFPLEdBQUl0RixTQUFTO0lBRXhCLEtBQUssSUFBSXhwQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdvNkIsS0FBSyxFQUFFcDZCLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDakMsTUFBTXE2QixJQUFJLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUN4TCxPQUFPLEVBQUVDLFFBQVEsRUFBRUYsY0FBYyxFQUFFN3VCLENBQUMsQ0FBQztNQUVoRXNTLE1BQU0sQ0FBQzNSLElBQUksQ0FBQzA1QixJQUFJLENBQUM7TUFFakIsSUFBSSxDQUFDeFYsSUFBSSxDQUFDaUssT0FBTyxDQUFDLEVBQUU7UUFDbEJqSyxJQUFJLENBQUNpSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDcEI7TUFFQSxJQUFJLENBQUNqSyxJQUFJLENBQUNpSyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUU7UUFDNUJsSyxJQUFJLENBQUNpSyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEdBQUdzTCxJQUFJLENBQUNFLFdBQVcsSUFBSSxFQUFFO01BQ2xEO01BRUEsSUFBSXhMLFFBQVEsR0FBRyxFQUFFLEVBQUU7UUFDakJBLFFBQVEsR0FBRyxDQUFDO1FBQ1pELE9BQU8sSUFBSSxDQUFDO01BQ2QsQ0FBQyxNQUFNO1FBQ0xDLFFBQVEsSUFBSSxDQUFDO01BQ2Y7SUFDRjtJQUVBLE9BQU87TUFDTGxLLElBQUk7TUFDSmlLLE9BQU87TUFDUEMsUUFBUTtNQUNSemM7SUFDRixDQUFDO0VBQ0g7RUFFQWdvQixRQUFRQSxDQUFDMW9CLElBQUksRUFBRUUsS0FBSyxFQUFFK2MsY0FBYyxFQUFpQjtJQUFBLElBQWYwRixTQUFTLEdBQUF0QyxTQUFBLENBQUFueUIsTUFBQSxRQUFBbXlCLFNBQUEsUUFBQTN4QixTQUFBLEdBQUEyeEIsU0FBQSxNQUFHLENBQUM7SUFDakQsTUFBTXZoQixjQUFjLEdBQUcsSUFBSSxDQUFDeVksTUFBTSxDQUFDelksY0FBYyxDQUFDb0IsS0FBSyxDQUFDO0lBQ3hELE1BQU0wb0IsUUFBUSxHQUFHcmIsaUJBQWlCLENBQUMwSSw2Q0FBZSxDQUFDO01BQ2pEb1AsS0FBSyxFQUFFdm1CLGNBQWM7TUFDckIrcEIsT0FBTyxFQUFFLElBQUksQ0FBQ0MscUJBQXFCLENBQUM5b0IsSUFBSSxFQUFFRSxLQUFLLENBQUM7TUFDaEQ2b0IsTUFBTSxFQUFFOUwsY0FBYztNQUN0QjBILElBQUksRUFBRSxJQUFJLENBQUNxRSxrQkFBa0IsQ0FBQ2hwQixJQUFJLEVBQUVFLEtBQUs7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSDBvQixRQUFRLENBQUNqRSxJQUFJLEdBQUdpRSxRQUFRLENBQUNoYixhQUFhLEtBQUEzZixNQUFBLENBQUsyb0Isa0VBQVcsQ0FBRSxDQUFDO0lBRXpEZ1MsUUFBUSxDQUFDMW9CLEtBQUssR0FBU0EsS0FBSztJQUM1QjBvQixRQUFRLENBQUM1b0IsSUFBSSxHQUFVQSxJQUFJO0lBQzNCNG9CLFFBQVEsQ0FBQ2pHLFNBQVMsR0FBS0EsU0FBUztJQUNoQ2lHLFFBQVEsQ0FBQ0QsV0FBVyxHQUFHLEVBQUUsQ0FBQ2hvQixLQUFLLENBQUN6USxJQUFJLENBQUMwNEIsUUFBUSxDQUFDaEksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFL0UsT0FBT2dJLFFBQVE7RUFDakI7RUFFQUUscUJBQXFCQSxDQUFDOW9CLElBQUksRUFBRUUsS0FBSyxFQUFFO0lBQ2pDLE9BQU8rVixrREFBb0IsQ0FBQztNQUMxQm9QLEtBQUssS0FBQXAzQixNQUFBLENBQUssSUFBSSxDQUFDc3BCLE1BQU0sQ0FBQ3pZLGNBQWMsQ0FBQ29CLEtBQUssQ0FBQyxPQUFBalMsTUFBQSxDQUFJK1IsSUFBSSxDQUFFO01BQ3JEa3BCLGFBQWEsS0FBQWo3QixNQUFBLENBQUssSUFBSSxDQUFDaXBCLFVBQVU7SUFDbkMsQ0FBQyxDQUFDO0VBQ0o7RUFFQTJLLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQ3RCLE9BQU8sSUFBSSxDQUFDc0gsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3BTLElBQUksQ0FBQ1csV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7RUFDMUU7RUFFQTBSLHNCQUFzQkEsQ0FBQSxFQUFHO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDRCx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDcFMsSUFBSSxDQUFDVyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtFQUMxRTtFQUVBeVIsd0JBQXdCQSxDQUFBLEVBQUc7SUFDekIsT0FBTyxJQUFJLENBQUNwUyxJQUFJLENBQUNvSCxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUNwSCxJQUFJLENBQUM0RyxhQUFhO0VBQzdEO0VBRUFpRixzQkFBc0JBLENBQUM1aUIsSUFBSSxFQUFFRSxLQUFLLEVBQUU7SUFDbEMsTUFBTTBoQixXQUFXLEdBQUcsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hELE1BQU13SCxZQUFZLEdBQUcsSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQyxDQUFDO0lBRWxELElBQUl4SCxXQUFXLEtBQUssSUFBSSxJQUFJeUgsWUFBWSxLQUFLLElBQUksRUFBRTtNQUNqRCxPQUFPO1FBQUVycEIsSUFBSTtRQUFFRTtNQUFNLENBQUM7SUFDeEI7SUFFQSxJQUFJRixJQUFJLEdBQUc0aEIsV0FBVyxJQUFLNWhCLElBQUksS0FBSzRoQixXQUFXLElBQUkxaEIsS0FBSyxHQUFHbXBCLFlBQWEsRUFBRTtNQUN4RSxPQUFPO1FBQ0xycEIsSUFBSSxFQUFFNGhCLFdBQVc7UUFDakIxaEIsS0FBSyxFQUFFbXBCO01BQ1QsQ0FBQztJQUNIO0lBRUEsT0FBTztNQUFFcnBCLElBQUk7TUFBRUU7SUFBTSxDQUFDO0VBQ3hCO0VBRUF3ZSxVQUFVQSxDQUFDMWUsSUFBSSxFQUFFRSxLQUFLLEVBQUVwRCxNQUFNLEVBQUU7SUFDOUIsTUFBTXdzQixlQUFlLEdBQUdwcEIsS0FBSyxHQUFHcEQsTUFBTTtJQUV0QyxPQUFPO01BQ0xrRCxJQUFJLEVBQUVBLElBQUksR0FBR3pELElBQUksQ0FBQ0MsS0FBSyxDQUFDOHNCLGVBQWUsR0FBRyxFQUFFLENBQUM7TUFDN0NwcEIsS0FBSyxFQUFFLENBQUVvcEIsZUFBZSxHQUFHLEVBQUUsR0FBSSxFQUFFLElBQUk7SUFDekMsQ0FBQztFQUNIO0VBRUE3UCxvQkFBb0JBLENBQUEsRUFBRztJQUNyQjtJQUNBLE1BQU1zUCxNQUFNLEdBQW1CLEVBQUU7SUFDakMsTUFBTVEsc0JBQXNCLEdBQUcsSUFBSSxDQUFDaFMsTUFBTSxDQUFDNVksaUJBQWlCLENBQUMxUSxNQUFNLENBQUMsSUFBSSxDQUFDc3BCLE1BQU0sQ0FBQzVZLGlCQUFpQixDQUFDO0lBRWxHLEtBQUssSUFBSXZRLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUMyb0IsSUFBSSxDQUFDeVMsV0FBVyxFQUFFcDdCLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDakQyNkIsTUFBTSxDQUFDaDZCLElBQUksQ0FBQ2tuQixvREFBc0IsQ0FBQ3NULHNCQUFzQixDQUFDbjdCLENBQUMsR0FBRyxJQUFJLENBQUMyb0IsSUFBSSxDQUFDVSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hGO0lBQ0EsT0FBT3NSLE1BQU0sQ0FBQzU2QixJQUFJLENBQUMsRUFBRSxDQUFDO0VBQ3hCO0VBRUE2NkIsa0JBQWtCQSxDQUFDaHBCLElBQUksRUFBRUUsS0FBSyxFQUFFO0lBQzlCLE1BQU13cEIsWUFBWSxHQUFJLElBQUlqdEIsSUFBSSxDQUFDdUQsSUFBSSxFQUFFRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMyVixNQUFNLENBQUMsQ0FBQztJQUN2RCxNQUFNMUosV0FBVyxHQUFLRCxXQUFXLENBQUNsTSxJQUFJLEVBQUVFLEtBQUssQ0FBQztJQUM5QyxNQUFNeXBCLFdBQVcsR0FBSzFULCtDQUFpQjtJQUN2QyxNQUFNNFQsUUFBUSxHQUFRRixXQUFXLENBQUMsQ0FBQyxDQUFDM1AsS0FBSztJQUN6QyxNQUFNOFAsU0FBUyxHQUFRLElBQUksQ0FBQy9TLElBQUksQ0FBQ3lTLFdBQVcsR0FBRyxJQUFJLENBQUN6UyxJQUFJLENBQUNVLFdBQVk7SUFDckUsSUFBSXNTLGFBQWEsR0FBSyxFQUFFO0lBRXhCLElBQUlDLElBQUksR0FBaUIsQ0FBQztJQUMxQixJQUFJQyxrQkFBa0IsR0FBR1AsWUFBWSxHQUFHSSxTQUFTO0lBQ2pELElBQUlJLFVBQVUsR0FBVyxDQUFDO0lBQzFCLElBQUkvbEIsVUFBVSxHQUFXLENBQUM7O0lBRTFCO0lBQ0EsSUFBSThsQixrQkFBa0IsSUFBSSxJQUFJLENBQUNsVCxJQUFJLENBQUN5UyxXQUFXLEVBQUU7TUFDL0NTLGtCQUFrQixJQUFJLElBQUksQ0FBQ2xULElBQUksQ0FBQ3lTLFdBQVc7SUFDN0M7O0lBRUE7SUFDQSxJQUFJUSxJQUFJLEdBQUcsSUFBSSxDQUFDalQsSUFBSSxDQUFDeVMsV0FBVyxHQUFHUyxrQkFBa0IsR0FBRzlkLFdBQVcsRUFBRTtNQUNuRTZkLElBQUksR0FBRyxDQUFDO0lBQ1Y7O0lBRUE7SUFDQSxLQUFLLElBQUk1N0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNDdCLElBQUksRUFBRTU3QixDQUFDLElBQUksQ0FBQyxFQUFFO01BQ2hDLElBQUkrN0IsSUFBSSxHQUFHUixXQUFXLENBQUN2N0IsQ0FBQyxDQUFDLENBQUN1YyxJQUFJO01BQzlCOztNQUVBO01BQ0EsS0FBSyxJQUFJeEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQzROLElBQUksQ0FBQ3lTLFdBQVcsRUFBRXJnQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pEO1FBQ0EsSUFBSytnQixVQUFVLElBQUlELGtCQUFrQixJQUFLOWxCLFVBQVUsSUFBSWdJLFdBQVcsRUFBRTtVQUNuRWdlLElBQUksSUFBSSxJQUFJLENBQUNDLGlCQUFpQixDQUFDcHFCLElBQUksRUFBRUUsS0FBSyxFQUFFaUUsVUFBVSxDQUFDO1VBQ3ZEQSxVQUFVLElBQUksQ0FBQztVQUNmO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xnbUIsSUFBSSxJQUFJbFUsMERBQTRCO1FBQ3RDO1FBRUFpVSxVQUFVLElBQUksQ0FBQztNQUNqQjtNQUNBO01BQ0FDLElBQUksSUFBSU4sUUFBUTtNQUNoQjtNQUNBRSxhQUFhLElBQUlJLElBQUk7SUFDdkI7SUFFQSxPQUFPSixhQUFhO0VBQ3RCO0VBRUFLLGlCQUFpQkEsQ0FBQ3BxQixJQUFJLEVBQUVFLEtBQUssRUFBRWlFLFVBQVUsRUFBRTtJQUN6QyxNQUFNO01BQ0ppUixPQUFPO01BQ1BrUyxPQUFPO01BQ1BqUyxJQUFJLEVBQUVpVixPQUFPO01BQ2JoVixXQUFXO01BQ1hHLGNBQWMsRUFBRThVLGlCQUFpQjtNQUNqQy9VLGdCQUFnQixFQUFFZ1Y7SUFDcEIsQ0FBQyxHQUFHLElBQUksQ0FBQ3ZTLEtBQUssQ0FBQ3BDLE1BQU0sQ0FBQzdWLElBQUksRUFBRUUsS0FBSyxFQUFFaUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBELE1BQU1rUixJQUFJLEdBQUksSUFBSSxDQUFDMEIsSUFBSSxDQUFDMFQsU0FBUyxJQUFJSCxPQUFPLEdBQUlBLE9BQU8sR0FBRyxDQUFDO0lBRTNELElBQUlJLFVBQVUsR0FBRyxDQUFDcFYsV0FBVztJQUM3QixJQUFJRyxjQUFjLEdBQUc4VSxpQkFBaUI7SUFDdEMsSUFBSS9VLGdCQUFnQixHQUFHZ1YsbUJBQW1CO0lBRTFDLE1BQU07TUFBRTlTO0lBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ1gsSUFBSTtJQUNqQyxNQUFNaU8sU0FBUyxHQUFTLENBQUNobEIsSUFBSSxFQUFFRSxLQUFLLEVBQUVpRSxVQUFVLENBQUM7SUFDakQsTUFBTXdtQixZQUFZLEdBQU1wVSxpREFBUyxDQUFDeU8sU0FBUyxFQUFFdE4sV0FBVyxDQUFDOztJQUV6RDtJQUNBLElBQUlwQiwrQ0FBTyxDQUFDME8sU0FBUyxFQUFFdE4sV0FBVyxDQUFDLEVBQUU7TUFDbkNnVCxVQUFVLEdBQVUsSUFBSTtNQUN4QmxWLGdCQUFnQixHQUFJLElBQUk7TUFDeEJDLGNBQWMsR0FBTSxJQUFJO0lBQzFCOztJQUVBO0lBQ0EsSUFBSWtWLFlBQVksRUFBRTtNQUNoQixJQUFJLEVBQUVELFVBQVUsSUFBSWpWLGNBQWMsS0FBSyxJQUFJLElBQUlELGdCQUFnQixLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3pFQSxnQkFBZ0IsR0FBSSxJQUFJO1FBRXhCLElBQUlDLGNBQWMsS0FBSyxJQUFJLEVBQUU7VUFDM0JBLGNBQWMsR0FBRyxJQUFJO1FBQ3ZCO01BQ0Y7SUFDRjs7SUFFQTtJQUNBLElBQUksQ0FBQyxJQUFJLENBQUNzQixJQUFJLENBQUNpRSxRQUFRLElBQUksSUFBSSxDQUFDakUsSUFBSSxDQUFDNEcsYUFBYSxFQUFFO01BQ2xELElBQUlySCwrQ0FBTyxDQUFDb0IsV0FBVyxFQUFFc04sU0FBUyxDQUFDLEVBQUU7UUFDbkMwRixVQUFVLEdBQVUsS0FBSztRQUN6QmpWLGNBQWMsR0FBTSxJQUFJO1FBQ3hCRCxnQkFBZ0IsR0FBSSxLQUFLO01BQzNCO01BRUEsSUFBSW1WLFlBQVksRUFBRTtRQUNoQkQsVUFBVSxHQUFVLElBQUk7UUFDeEJsVixnQkFBZ0IsR0FBSSxJQUFJO01BQzFCO0lBQ0Y7SUFFQSxNQUFNb1YsYUFBYSxHQUFHcFYsZ0JBQWdCLElBQUksS0FBSztJQUUvQyxJQUFJa1YsVUFBVSxJQUFJRSxhQUFhLEVBQUU7TUFDL0JGLFVBQVUsR0FBRyxNQUFNO0lBQ3JCLENBQUMsTUFBTSxJQUFJbFYsZ0JBQWdCLEVBQUU7TUFDM0JrVixVQUFVLEdBQUcsT0FBTztJQUN0QixDQUFDLE1BQU0sSUFBSUEsVUFBVSxFQUFFO01BQ3JCQSxVQUFVLEdBQUcsUUFBUTtJQUN2QjtJQUVBLE1BQU10RixPQUFPLEdBQUdwb0IsaURBQVEsQ0FBQ3FaLGlEQUFTLENBQUNyVyxJQUFJLEVBQUVFLEtBQUssRUFBRWlFLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQ29ULE1BQU0sQ0FBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQ0QsTUFBTSxDQUFDO0lBQ2pHLE1BQU1zVCxLQUFLLEdBQUd4VixJQUFJLEdBQUc5SixpQkFBaUIsQ0FBQ2hQLElBQUksQ0FBQzhsQixLQUFLLENBQUNoTixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMwQixJQUFJLENBQUN2TCxJQUFJLEVBQUUsSUFBSSxDQUFDdUwsSUFBSSxDQUFDdEwsUUFBUSxJQUFJLElBQUksQ0FBQzhMLE1BQU0sQ0FBQzlMLFFBQVEsQ0FBQyxHQUFHLEtBQUs7SUFDNUgsTUFBTXFmLFFBQVEsR0FBSSxJQUFJLENBQUMvVCxJQUFJLENBQUNnVSxXQUFXLElBQUkzVixPQUFPLEdBQUlxQixrREFBVSxDQUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQ21DLE1BQU0sQ0FBQ25DLE9BQU8sQ0FBQyxHQUFHLEtBQUs7SUFDdEcsTUFBTTRWLFFBQVEsR0FBSSxJQUFJLENBQUNqVSxJQUFJLENBQUNrVSxXQUFXLElBQUkzRCxPQUFPLEdBQUk3USxrREFBVSxDQUFDNlEsT0FBTyxFQUFFLElBQUksQ0FBQy9QLE1BQU0sQ0FBQytQLE9BQU8sQ0FBQyxHQUFHLEtBQUs7O0lBRXRHO0lBQ0EsTUFBTTRELGNBQWMsR0FBRyxDQUFDOUYsT0FBTyxDQUFDO0lBRWhDLElBQUl1RixZQUFZLEVBQUU7TUFDaEJPLGNBQWMsQ0FBQ244QixJQUFJLENBQUMsSUFBSSxDQUFDd29CLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQ2dTLEtBQUssSUFBSSxPQUFPLENBQUM7SUFDMUQ7SUFFQSxJQUFJVCxVQUFVLEVBQUU7TUFDZFEsY0FBYyxDQUFDbjhCLElBQUksQ0FBQyxJQUFJLENBQUN3b0IsTUFBTSxDQUFDNEIsTUFBTSxDQUFDaVMsV0FBVyxJQUFJLGFBQWEsQ0FBQztJQUN0RTtJQUVBLElBQUlQLEtBQUssRUFBRTtNQUNUSyxjQUFjLENBQUNuOEIsSUFBSSxDQUFDODdCLEtBQUssQ0FBQztJQUM1QjtJQUVBLElBQUlDLFFBQVEsRUFBRTtNQUNaSSxjQUFjLENBQUNuOEIsSUFBSSxDQUFDKzdCLFFBQVEsQ0FBQztJQUMvQjtJQUVBLElBQUlFLFFBQVEsRUFBRTtNQUNaRSxjQUFjLENBQUNuOEIsSUFBSSxDQUFDaThCLFFBQVEsQ0FBQztJQUMvQjtJQUVBLE1BQU1odkIsT0FBTyxHQUFHO01BQ2RxcEIsS0FBSyxFQUFFbGhCLFVBQVU7TUFDakI3SCxJQUFJLEVBQUU4b0IsT0FBTztNQUNiaUcsU0FBUyxFQUFFSCxjQUFjLENBQUMvOEIsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwQ2t3QixRQUFRLEVBQUVxTSxVQUFVO01BQ3BCRSxhQUFhO01BQ2JuVixjQUFjO01BQ2RrVixZQUFZO01BQ1p2VixPQUFPO01BQ1AwVixRQUFRO01BQ1J4RCxPQUFPO01BQ1AwRCxRQUFRO01BQ1IzVixJQUFJO01BQ0p3VixLQUFLO01BQ0xTLFFBQVEsRUFBRSxJQUFJLENBQUN2VSxJQUFJLENBQUM4RCxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU81RSwrQ0FBaUIsQ0FBQ2phLE9BQU8sQ0FBQztFQUNuQztFQUVBc2YsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDNkQsZUFBZSxDQUFDLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUNoUCxHQUFHLElBQUloRixPQUFPLENBQUMsSUFBSSxDQUFDZ0YsR0FBRyxDQUFDelAsTUFBTSxDQUFDLEVBQUU7TUFDeEMsSUFBSSxDQUFDeVAsR0FBRyxDQUFDelAsTUFBTSxDQUFDaU0sT0FBTyxDQUFFa0gsQ0FBQyxJQUFLekcsY0FBYyxDQUFDeUcsQ0FBQyxDQUFDLENBQUM7TUFDakQsSUFBSSxDQUFDK1IsY0FBYyxDQUFDLENBQUM7SUFDdkI7RUFDRjtFQUVBRSxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUNsSixvQkFBb0IsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ3VDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ3lHLGNBQWMsQ0FBQyxDQUFDO0lBRXJCLElBQUksSUFBSSxDQUFDbEMsT0FBTyxJQUFJelQsVUFBVSxDQUFDLElBQUksQ0FBQ3lULE9BQU8sQ0FBQ29DLE9BQU8sQ0FBQyxFQUFFO01BQ3BELElBQUksQ0FBQ3BDLE9BQU8sQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDO01BQ3RCLElBQUksQ0FBQ3BDLE9BQU8sR0FBRyxJQUFJO0lBQ3JCO0lBRUEsSUFBSSxJQUFJLENBQUM3SyxlQUFlLEVBQUU7TUFDeEIzTCxRQUFRLENBQUM2UCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDbEUsZUFBZSxDQUFDO01BQzNELElBQUksQ0FBQ0EsZUFBZSxHQUFHLElBQUk7SUFDN0I7SUFFQSxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUU7TUFDMUI1TCxRQUFRLENBQUM2UCxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDakUsaUJBQWlCLENBQUM7TUFDL0QsSUFBSSxDQUFDQSxpQkFBaUIsR0FBRyxJQUFJO0lBQy9CO0lBRUEsT0FBTzFMLGNBQWMsQ0FBQyxJQUFJLENBQUNaLEVBQUUsQ0FBQztFQUNoQztFQUVBMk8sUUFBUUEsQ0FBQ3RzQixFQUFFLEVBQUU7SUFDWCxJQUFJLENBQUN1b0IsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMzQixJQUFJLENBQUNrSCxhQUFhLENBQUMsQ0FBQztJQUVwQixNQUFNa04sU0FBUyxHQUFJaFgsSUFBSSxJQUFLO01BQzFCLElBQUlySixPQUFPLENBQUNxSixJQUFJLENBQUNqbEIsSUFBSSxDQUFDLElBQUlpbEIsSUFBSSxDQUFDamxCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2s4QixVQUFVLEVBQUU7UUFDakQsSUFBSSxJQUFJLENBQUMxVSxJQUFJLENBQUMyVSxvQkFBb0IsRUFBRTtVQUNsQ2xYLElBQUksQ0FBQ2psQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNrOEIsVUFBVSxDQUFDL1csWUFBWSxHQUFHRixJQUFJLENBQUNqbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDazhCLFVBQVUsQ0FBQy9XLFlBQVksQ0FBQ3pJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1FBQ3BHO1FBQ0EsSUFBSSxDQUFDOEssSUFBSSxDQUFDdEwsUUFBUSxHQUFHLElBQUksQ0FBQ3NMLElBQUksQ0FBQ3RMLFFBQVEsSUFBSStJLElBQUksQ0FBQ2psQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNrOEIsVUFBVSxDQUFDaGdCLFFBQVE7UUFDM0UsSUFBSSxDQUFDeU0sT0FBTyxDQUFDMUQsSUFBSSxDQUFDamxCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2s4QixVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDRSxVQUFVLEdBQUcsSUFBSTtRQUN0QixJQUFJLENBQUNyTixhQUFhLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUN0TyxJQUFJLENBQUMsYUFBYSxFQUFFd0UsSUFBSSxDQUFDO01BQ2hDLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQzhKLGFBQWEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQ2xILE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxPQUFPLENBQUM7TUFDdEQ7SUFDRixDQUFDO0lBRUQsTUFBTXdVLE9BQU8sR0FBR0EsQ0FBQSxLQUFNO01BQ3BCLElBQUksQ0FBQ3ROLGFBQWEsQ0FBQyxDQUFDO01BQ3BCLElBQUksQ0FBQ3RPLElBQUksQ0FBQyxZQUFZLENBQUM7TUFDdkIsSUFBSSxDQUFDb0gsTUFBTSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQztJQUMvQyxDQUFDO0lBRUR5VSxLQUFLLENBQUMsSUFBSSxDQUFDOVUsSUFBSSxDQUFDK1UsU0FBUyxDQUFDajlCLEVBQUUsQ0FBQyxDQUFDLENBQzNCazlCLElBQUksQ0FBRWpoQixRQUFRLElBQUtBLFFBQVEsQ0FBQ2toQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ25DRCxJQUFJLENBQUNQLFNBQVMsQ0FBQyxDQUNmUyxLQUFLLENBQUNMLE9BQU8sQ0FBQztFQUNuQjtFQUVBbkksaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEIsSUFBSSxJQUFJLENBQUMxTSxJQUFJLENBQUNzUixhQUFhLEVBQUU7TUFDM0IsTUFBTTZELHFCQUFxQixHQUFHLElBQUksQ0FBQ25WLElBQUksQ0FBQ21WLHFCQUFxQixJQUFJLElBQUksQ0FBQzNVLE1BQU0sQ0FBQ0MsVUFBVTtNQUV2RixNQUFNMlUsU0FBUyxHQUFHbnZCLGlEQUFRLENBQUNxWixpREFBUyxDQUFDLEdBQUcsSUFBSSxDQUFDeUgsY0FBYyxDQUFDLEVBQUVvTyxxQkFBcUIsRUFBRSxJQUFJLENBQUMzVSxNQUFNLENBQUM7TUFDakcsTUFBTTZVLE9BQU8sR0FBS3B2QixpREFBUSxDQUFDcVosaURBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzJILFlBQVksQ0FBQyxFQUFFa08scUJBQXFCLEVBQUUsSUFBSSxDQUFDM1UsTUFBTSxDQUFDO01BRS9GLElBQUksQ0FBQ1IsSUFBSSxDQUFDdVIsYUFBYSxDQUFDbGxCLEtBQUssTUFBQW5WLE1BQUEsQ0FBTWsrQixTQUFTLE9BQUFsK0IsTUFBQSxDQUFJLElBQUksQ0FBQzhvQixJQUFJLENBQUNzVixvQkFBb0IsT0FBQXArQixNQUFBLENBQUltK0IsT0FBTyxDQUFFO0lBQzdGO0lBRUEsSUFBSSxDQUFDcGMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQzhOLGNBQWMsRUFBRSxJQUFJLENBQUNFLFlBQVksQ0FBQztJQUN4RSxJQUFJL04sVUFBVSxDQUFDLElBQUksQ0FBQzhHLElBQUksQ0FBQ3VWLG9CQUFvQixDQUFDLEVBQUU7TUFDOUMsSUFBSSxDQUFDdlYsSUFBSSxDQUFDdVYsb0JBQW9CLENBQzVCalcsaURBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQ3lILGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRXpILGlEQUFTLENBQUMsR0FBRyxJQUFJLENBQUMySCxZQUFZLEVBQUUsSUFBSSxDQUMvRSxDQUFDO0lBQ0g7RUFDRjtFQUVBaEcsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsTUFBTS9LLE9BQU8sR0FBR00saUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQ2hELElBQUksQ0FBQ2dmLFFBQVEsR0FBRyxJQUFJLENBQUN4VixJQUFJLENBQUN2SyxFQUFFO0lBQzVCLElBQUksQ0FBQ0EsRUFBRSxHQUFTUyxPQUFPO0lBRXZCQyxRQUFRLENBQUN5WCxJQUFJLENBQUN0TCxXQUFXLENBQUNwTSxPQUFPLENBQUM7SUFFbEMsSUFBSSxDQUFDOEosSUFBSSxDQUFDK0QsU0FBUyxHQUFPLElBQUksQ0FBQy9ELElBQUksQ0FBQytELFNBQVMsSUFBSTVOLFFBQVEsQ0FBQ1UsYUFBYSxLQUFBM2YsTUFBQSxDQUFLLElBQUksQ0FBQ2lwQixVQUFVLGVBQVksQ0FBQztJQUN4RyxJQUFJLENBQUNILElBQUksQ0FBQ2dFLE9BQU8sR0FBUyxJQUFJLENBQUNoRSxJQUFJLENBQUNnRSxPQUFPLElBQUk3TixRQUFRLENBQUNVLGFBQWEsS0FBQTNmLE1BQUEsQ0FBSyxJQUFJLENBQUNpcEIsVUFBVSxhQUFVLENBQUM7SUFDcEcsSUFBSSxDQUFDSCxJQUFJLENBQUN1UixhQUFhLEdBQUcsSUFBSSxDQUFDdlIsSUFBSSxDQUFDdVIsYUFBYSxJQUFJcGIsUUFBUSxDQUFDVSxhQUFhLEtBQUEzZixNQUFBLENBQUssSUFBSSxDQUFDaXBCLFVBQVUsbUJBQWdCLENBQUM7SUFFaEgsSUFBSSxJQUFJLENBQUNILElBQUksQ0FBQ3lWLGNBQWMsRUFBRTtNQUM1QixDQUFDLElBQUksQ0FBQ3pWLElBQUksQ0FBQytELFNBQVMsRUFBRSxJQUFJLENBQUMvRCxJQUFJLENBQUNnRSxPQUFPLENBQUMsQ0FBQ3BPLE9BQU8sQ0FBQyxDQUFDOGYsS0FBSyxFQUFFcitCLENBQUMsS0FBSztRQUM3RCxNQUFNcytCLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3pDRixLQUFLLENBQUNHLGFBQWEsQ0FBQ3ZULFdBQVcsQ0FBQ3FULFdBQVcsQ0FBQztRQUM1Q0QsS0FBSyxDQUFDeEcsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUM3QnlHLFdBQVcsQ0FBQzdlLFNBQVMsR0FBRyxFQUFFO1FBQzFCNmUsV0FBVyxDQUFDMU0sTUFBTSxHQUFNLElBQUk7UUFFM0I1eEIsQ0FBQyxHQUFJLElBQUksQ0FBQ3krQixhQUFhLEdBQUdILFdBQVcsR0FBRyxJQUFJLENBQUNJLGVBQWUsR0FBR0osV0FBVztNQUM3RSxDQUFDLENBQUM7SUFDSjtJQUVBLElBQUksSUFBSSxDQUFDM1YsSUFBSSxDQUFDc1IsYUFBYSxFQUFFO01BQzNCLElBQUksQ0FBQ3RSLElBQUksQ0FBQ3VSLGFBQWEsQ0FBQ3lFLFFBQVEsR0FBRyxJQUFJO01BRXZDLENBQUMsSUFBSSxDQUFDaFcsSUFBSSxDQUFDK0QsU0FBUyxFQUFFLElBQUksQ0FBQy9ELElBQUksQ0FBQ2dFLE9BQU8sQ0FBQyxDQUFDcE8sT0FBTyxDQUFFOGYsS0FBSyxJQUFLO1FBQzFEQSxLQUFLLENBQUN6TSxNQUFNLEdBQUcsSUFBSTtNQUNyQixDQUFDLENBQUM7SUFDSjtJQUVBelQsUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFb0ssdUVBQWdCLENBQUM7O0lBRW5DO0lBQ0EsSUFBSSxDQUFDcEssRUFBRSxDQUFDVyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztJQUN0QyxJQUFJLENBQUNYLEVBQUUsQ0FBQ1csWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDMUMsSUFBSSxDQUFDWCxFQUFFLENBQUNXLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDb0ssTUFBTSxDQUFDNEIsTUFBTSxDQUFDSCxRQUFRLENBQUM7SUFDL0QsSUFBSSxDQUFDeE0sRUFBRSxDQUFDVyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUUzQyxNQUFNOGYsUUFBUSxHQUFHQSxDQUFDUixLQUFLLEVBQUVTLFVBQVUsS0FBSztNQUN0QyxJQUFJLENBQUMvSCxnQkFBZ0IsQ0FBQ3NILEtBQUssQ0FBQztNQUM1QixJQUFJLENBQUNyUixvQkFBb0IsQ0FBQzhSLFVBQVUsQ0FBQztNQUVyQyxJQUFJLENBQUM3ZSxRQUFRLENBQUMsSUFBSSxDQUFDN0IsRUFBRSxFQUFFb0sscUVBQWMsQ0FBQyxFQUFFO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUM4TSxPQUFPLEVBQUU7VUFDakIsSUFBSSxDQUFDQSxPQUFPLEdBQUd0Tix3REFBZ0IsQ0FBQyxJQUFJLENBQUNtVyxRQUFRLEVBQUUsSUFBSSxDQUFDL2YsRUFBRSxFQUFFO1lBQ3REMGIsU0FBUyxFQUFFLElBQUksQ0FBQ25SLElBQUksQ0FBQ3FXLGFBQWE7WUFDbENDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLFdBQVcsRUFBRTtVQUNmLENBQUMsQ0FBQztRQUNKO1FBRUEvZ0IsUUFBUSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxFQUFFb0sscUVBQWMsQ0FBQztRQUNqQyxJQUFJLENBQUNwSyxFQUFFLENBQUNXLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQ3VXLE9BQU8sQ0FBQzZKLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQ3ZkLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEIsSUFBSSxDQUFDRyxHQUFHLENBQUN1SixhQUFhLENBQUM5TCxhQUFhLENBQUMsaUNBQWlDLENBQUMsQ0FBQ3dTLEtBQUssQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxJQUFJLENBQUN1TCxVQUFVLElBQUksSUFBSSxDQUFDNVUsSUFBSSxDQUFDaUUsUUFBUSxFQUFFO1VBQzFDLElBQUksQ0FBQ0csUUFBUSxDQUFDLElBQUksQ0FBQ3BFLElBQUksQ0FBQ2lFLFFBQVEsQ0FBQztRQUNuQztNQUNGO0lBQ0YsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDakUsSUFBSSxDQUFDc1IsYUFBYSxFQUFFO01BQzNCLElBQUksQ0FBQ21GLGdCQUFnQixDQUFDLElBQUksQ0FBQ3pXLElBQUksQ0FBQ3VSLGFBQWEsRUFBRSxNQUFNO1FBQ25EMkUsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6VyxJQUFJLENBQUMrRCxTQUFTLEVBQUUsTUFBTTtRQUMvQ21TLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO01BQzFCLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ08sZ0JBQWdCLENBQUMsSUFBSSxDQUFDelcsSUFBSSxDQUFDZ0UsT0FBTyxFQUFFLE1BQU07UUFDN0NrUyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDSjtJQUVBL2YsUUFBUSxDQUFDZ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3lJLFNBQVMsQ0FBQzhKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3RCxJQUFJLElBQUksQ0FBQzFXLElBQUksQ0FBQzJXLE9BQU8sRUFBRTtNQUNyQixJQUFJLENBQUMzVyxJQUFJLENBQUMyVyxPQUFPLENBQUN4UyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNoRCxJQUFJLENBQUNpSSxjQUFjLENBQUMsQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUFRLFNBQVNBLENBQUMxWSxDQUFDLEVBQUUwaUIsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxLQUFLbGYsUUFBUSxDQUFDeEQsQ0FBQyxDQUFDNlQsTUFBTSxFQUFFLElBQUksQ0FBQ3RTLEVBQUUsQ0FBQyxJQUFJaUMsUUFBUSxDQUFDeEQsQ0FBQyxDQUFDNlQsTUFBTSxFQUFFLElBQUksQ0FBQ3lOLFFBQVEsQ0FBQyxDQUFDLEVBQUU7TUFDaEZ0aEIsQ0FBQyxDQUFDMmlCLGVBQWUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsTUFBTTtNQUNMeGhCLFdBQVcsQ0FBQyxJQUFJLENBQUNJLEVBQUUsRUFBRW9LLHFFQUFjLENBQUM7TUFDcEMsSUFBSSxDQUFDcEssRUFBRSxDQUFDVyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztNQUMzQyxJQUFJLENBQUN5WSxjQUFjLENBQUMsQ0FBQztNQUNyQixJQUFJLENBQUM1VixJQUFJLENBQUMsWUFBWSxDQUFDO01BQ3ZCLElBQUksQ0FBQ21WLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUM5QjtFQUNGO0VBRUFvRCxZQUFZQSxDQUFDa0UsS0FBSyxFQUFFMUosU0FBUyxFQUFFO0lBQzdCLE1BQU07TUFBRWpJO0lBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQy9ELElBQUk7SUFDL0IsTUFBTTtNQUFFZ0U7SUFBUSxDQUFDLEdBQUssSUFBSSxDQUFDaEUsSUFBSTtJQUUvQixNQUFNemEsSUFBSSxHQUFJK1osaURBQVMsQ0FBQyxHQUFHME0sU0FBUyxDQUFDO0lBQ3JDLE1BQU0zZixLQUFLLEdBQUdwRyxpREFBUSxDQUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDVyxNQUFNLEVBQUUsSUFBSSxDQUFDc2EsTUFBTSxDQUFDO0lBQ3RELE1BQU1zVyxHQUFHLEdBQUszZ0IsUUFBUSxDQUFDNGdCLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFFM0NELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBRXBDLElBQUksSUFBSSxDQUFDaFgsSUFBSSxDQUFDeVYsY0FBYyxFQUFFO01BQzVCLE1BQU13QixXQUFXLEdBQUdoeEIsaURBQVEsQ0FBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQ3lhLElBQUksQ0FBQ3lWLGNBQWMsRUFBRSxJQUFJLENBQUNqVixNQUFNLENBQUM7TUFFekUsSUFBSWtWLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDSyxlQUFlLEVBQUU7UUFDN0MsSUFBSSxDQUFDQSxlQUFlLENBQUMxcEIsS0FBSyxHQUFHNHFCLFdBQVc7TUFDMUMsQ0FBQyxNQUFNLElBQUl2QixLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQ0ksYUFBYSxFQUFFO1FBQ2hELElBQUksQ0FBQ0EsYUFBYSxDQUFDenBCLEtBQUssR0FBRzRxQixXQUFXO01BQ3hDO0lBQ0Y7SUFFQSxJQUFJdkIsS0FBSyxLQUFLLE9BQU8sSUFBSTNSLFNBQVMsRUFBRTtNQUNsQ0EsU0FBUyxDQUFDMVgsS0FBSyxHQUFHQSxLQUFLO01BQ3ZCMFgsU0FBUyxDQUFDbVQsYUFBYSxDQUFDSixHQUFHLENBQUM7SUFDOUIsQ0FBQyxNQUFNLElBQUlwQixLQUFLLEtBQUssS0FBSyxJQUFJMVIsT0FBTyxFQUFFO01BQ3JDQSxPQUFPLENBQUMzWCxLQUFLLEdBQUdBLEtBQUs7TUFDckIyWCxPQUFPLENBQUNrVCxhQUFhLENBQUNKLEdBQUcsQ0FBQztJQUM1QjtFQUNGO0VBRUE1UyxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLElBQUksQ0FBQ2xFLElBQUksQ0FBQytELFNBQVMsQ0FBQzFYLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDMlQsSUFBSSxDQUFDZ0UsT0FBTyxDQUFDM1gsS0FBSyxLQUFLLEVBQUUsRUFBRTtNQUN0RTtJQUNGO0lBRUEsTUFBTTBhLGNBQWMsR0FBSXBILG1EQUFXLENBQUMsSUFBSSxDQUFDSyxJQUFJLENBQUMrRCxTQUFTLENBQUMxWCxLQUFLLEVBQUUsSUFBSSxDQUFDbkcsTUFBTSxFQUFFLElBQUksQ0FBQ3NhLE1BQU0sQ0FBQztJQUN4RixNQUFNeUcsWUFBWSxHQUFNdEgsbURBQVcsQ0FBQyxJQUFJLENBQUNLLElBQUksQ0FBQ2dFLE9BQU8sQ0FBQzNYLEtBQUssRUFBRSxJQUFJLENBQUNuRyxNQUFNLEVBQUUsSUFBSSxDQUFDc2EsTUFBTSxDQUFDO0lBQ3RGLE1BQU07TUFBRUc7SUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDWCxJQUFJO0lBRWpDLElBQUksQ0FBQ29NLGNBQWMsQ0FBQyxDQUFDO0lBRXJCLElBQUloWSxPQUFPLENBQUMyUyxjQUFjLENBQUMsSUFBSTNTLE9BQU8sQ0FBQzZTLFlBQVksQ0FBQyxFQUFFO01BQ3BELElBQUksQ0FBQzFILCtDQUFPLENBQUNvQixXQUFXLEVBQUVvRyxjQUFjLENBQUMsSUFBSXZILGlEQUFTLENBQUNtQixXQUFXLEVBQUVvRyxjQUFjLENBQUMsS0FBS3hILCtDQUFPLENBQUN3SCxjQUFjLEVBQUVFLFlBQVksQ0FBQyxFQUFFO1FBQzdILE1BQU1rUSxlQUFlLEdBQUd2WCxpREFBUyxDQUMvQk4saURBQVMsQ0FBQyxJQUFJLENBQUNVLElBQUksQ0FBQ2EsU0FBUyxFQUFFLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZEeEIsaURBQVMsQ0FBQyxHQUFHMkgsWUFBWSxDQUMzQixDQUFDO1FBRUQsTUFBTTtVQUFFL0s7UUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDbUssVUFBVSxDQUFDLElBQUksQ0FBQ3JHLElBQUksQ0FBQ2EsU0FBUyxFQUFFLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxVQUFVLEVBQUVxVyxlQUFlLENBQUM7UUFFNUYsSUFBSSxDQUFDalcsS0FBSyxDQUFDL0UsT0FBTyxDQUFDRCxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDNkssY0FBYyxHQUFHQSxjQUFjO1FBQ3BDLElBQUksQ0FBQ0UsWUFBWSxHQUFHQSxZQUFZO1FBQ2hDLElBQUksQ0FBQ0gsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUM0RixpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQ25JLGFBQWEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQ1gsWUFBWSxDQUFDcUQsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDckQsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDNUcsTUFBTSxzQkFBQW5wQixNQUFBLENBQXFCNnZCLGNBQWMsYUFBQTd2QixNQUFBLENBQVErdkIsWUFBWSxVQUFNLE1BQU0sQ0FBQztRQUMvRSxPQUFPLEtBQUs7TUFDZDtJQUNGLENBQUMsTUFBTSxJQUFJRixjQUFjLElBQUlFLFlBQVksRUFBRTtNQUN6QyxJQUFJLENBQUM1RyxNQUFNLHFCQUFBbnBCLE1BQUEsQ0FBb0I2dkIsY0FBYyxXQUFBN3ZCLE1BQUEsQ0FBTSt2QixZQUFZLFNBQUssTUFBTSxDQUFDO01BQzNFLE9BQU8sS0FBSztJQUNkO0VBQ0Y7RUFFQW1ILGdCQUFnQkEsQ0FBQ2dKLElBQUksRUFBRTtJQUNyQixJQUFJLElBQUksQ0FBQ3BYLElBQUksQ0FBQytELFNBQVMsSUFBSSxJQUFJLENBQUMvRCxJQUFJLENBQUNnRSxPQUFPLEVBQUU7TUFDNUMsSUFBSW9ULElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEI1aEIsUUFBUSxDQUFDLElBQUksQ0FBQ3dLLElBQUksQ0FBQytELFNBQVMsRUFBRWxFLG1FQUFZLENBQUM7UUFDM0N4SyxXQUFXLENBQUMsSUFBSSxDQUFDMkssSUFBSSxDQUFDZ0UsT0FBTyxFQUFFbkUsbUVBQVksQ0FBQztNQUM5QztNQUNBLElBQUl1WCxJQUFJLEtBQUssS0FBSyxFQUFFO1FBQ2xCNWhCLFFBQVEsQ0FBQyxJQUFJLENBQUN3SyxJQUFJLENBQUNnRSxPQUFPLEVBQUVuRSxtRUFBWSxDQUFDO1FBQ3pDeEssV0FBVyxDQUFDLElBQUksQ0FBQzJLLElBQUksQ0FBQytELFNBQVMsRUFBRWxFLG1FQUFZLENBQUM7TUFDaEQ7TUFDQSxJQUFJdVgsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNsQi9oQixXQUFXLENBQUMsSUFBSSxDQUFDMkssSUFBSSxDQUFDK0QsU0FBUyxFQUFFbEUsbUVBQVksQ0FBQztRQUM5Q3hLLFdBQVcsQ0FBQyxJQUFJLENBQUMySyxJQUFJLENBQUNnRSxPQUFPLEVBQUVuRSxtRUFBWSxDQUFDO01BQzlDO0lBQ0Y7RUFDRjtFQUVBNFcsZ0JBQWdCQSxDQUFDdmdCLE9BQU8sRUFBRW1oQixTQUFTLEVBQUU7SUFDbkMsSUFBSW5lLFVBQVUsQ0FBQ21lLFNBQVMsQ0FBQyxFQUFFO01BQ3pCbmhCLE9BQU8sQ0FBQ2lPLGdCQUFnQixDQUFDLFlBQVksRUFBRzdMLEtBQUssSUFBSztRQUNoREEsS0FBSyxDQUFDdVAsY0FBYyxDQUFDLENBQUM7UUFDdEJ3UCxTQUFTLENBQUMsQ0FBQztNQUNiLENBQUMsQ0FBQztNQUVGbmhCLE9BQU8sQ0FBQ2lPLGdCQUFnQixDQUFDLE9BQU8sRUFBRzdMLEtBQUssSUFBSztRQUMzQ0EsS0FBSyxDQUFDdVAsY0FBYyxDQUFDLENBQUM7UUFDdEJ3UCxTQUFTLENBQUMsQ0FBQztNQUNiLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQXhnQyxRQUFRQSxDQUFBLEVBQUc7SUFDVCxXQUFBSyxNQUFBLENBQVcsSUFBSSxDQUFDdVUsSUFBSSxPQUFBdlUsTUFBQSxDQUFJLElBQUksQ0FBQytvQixPQUFPO0VBQ3RDO0VBRUFJLE1BQU1BLENBQUNpWCxHQUFHLEVBQWdCO0lBQUEsSUFBZEYsSUFBSSxHQUFBOU4sU0FBQSxDQUFBbnlCLE1BQUEsUUFBQW15QixTQUFBLFFBQUEzeEIsU0FBQSxHQUFBMnhCLFNBQUEsTUFBRyxLQUFLO0lBQ3RCLElBQUlpTyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLEVBQUU7TUFDNUJHLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDdmdDLFFBQVEsQ0FBQyxDQUFDLEdBQUd5Z0MsR0FBRyxDQUFDO0lBQ3RDO0VBQ0Y7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7QUN2d0RBOztBQUVBLE1BQU03ckIsSUFBSSxHQUFHLHVCQUF1QjtBQUNwQyxNQUFNa1YsV0FBVyxHQUFHLElBQUlqYixJQUFJLENBQUMsQ0FBQztBQUU5QixpRUFBZTtFQUNiK0YsSUFBSTtFQUNKMlUsU0FBUyxFQUFFLGVBQWU7RUFDMUJvWCxPQUFPLEVBQUVDLEtBQXNDLEdBQUcsdUJBQXVCLEdBQUcsQ0FBMEI7RUFDdEdHLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUJDLFlBQVksRUFBRSx1Q0FBdUM7RUFDckRDLFdBQVcsRUFBRSxZQUFZO0VBQ3pCQyxXQUFXLEVBQUUsd0JBQXdCO0VBRXJDaEQsU0FBU0EsQ0FBQ2lELEdBQUcsRUFBRTtJQUNiLElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUNKLFlBQVksQ0FBQzNpQixPQUFPLENBQUMsZUFBZSxLQUFBaGUsTUFBQSxDQUFLLElBQUksQ0FBQzRnQyxXQUFXLEVBQUE1Z0MsTUFBQSxDQUFHOGdDLEdBQUcsQ0FBRSxDQUFDO0lBQ25GQyxLQUFLLEdBQUdBLEtBQUssQ0FBQy9pQixPQUFPLENBQUMsZUFBZSxFQUFHLElBQUksQ0FBQ1IsUUFBUSxNQUFBeGQsTUFBQSxDQUFPLElBQUksQ0FBQzZnQyxXQUFXLEVBQUE3Z0MsTUFBQSxDQUFHLElBQUksQ0FBQ3dkLFFBQVEsSUFBSyxFQUFFLENBQUM7SUFDcEcsVUFBQXhkLE1BQUEsQ0FBVSxJQUFJLENBQUNzZ0MsT0FBTyxFQUFBdGdDLE1BQUEsQ0FBRyxJQUFJLENBQUMwZ0MsWUFBWSxFQUFBMWdDLE1BQUEsQ0FBRytnQyxLQUFLO0VBQ3BELENBQUM7RUFFRHZYLFdBQVcsRUFBRSxDQUFDO0VBQUU7RUFDaEJyQyxPQUFPLEVBQUUsQ0FBQztFQUFFO0VBQ1prUyxPQUFPLEVBQUU3ZSxRQUFRO0VBQUU7RUFDbkJvUCxVQUFVLEVBQUUsSUFBSTtFQUFFO0VBQ2xCRCxTQUFTLEVBQUUsSUFBSTtFQUFFO0VBQ2pCNFIsV0FBVyxFQUFFLENBQUM7RUFBRTtFQUNoQmhSLGFBQWEsRUFBRSxDQUFDO0VBQ2hCaUQsbUJBQW1CLEVBQUUsSUFBSTtFQUFFO0VBQzNCQyxnQkFBZ0IsRUFBRSxHQUFHO0VBQUU7RUFDdkJXLG9CQUFvQixFQUFFLElBQUk7RUFDMUJzQyxvQkFBb0IsRUFBRSxDQUFDO0VBQ3ZCOUQsVUFBVSxFQUFFLEtBQUs7RUFDakI0UCxTQUFTLEVBQUUsS0FBSztFQUNoQmxTLG1CQUFtQixFQUFFLEtBQUs7RUFBRTtFQUM1QjRGLGNBQWMsRUFBRSxJQUFJO0VBQ3BCcEcsVUFBVSxFQUFFLEtBQUs7RUFDakJxVixhQUFhLEVBQUUsY0FBYztFQUM3QjVnQixFQUFFLEVBQUUsSUFBSTtFQUNSc08sU0FBUyxFQUFFLElBQUk7RUFDZkMsT0FBTyxFQUFFLElBQUk7RUFDYnVOLGFBQWEsRUFBRSxJQUFJO0VBQ25CRCxhQUFhLEVBQUUsSUFBSTtFQUNuQjZELHFCQUFxQixFQUFFLElBQUk7RUFDM0JHLG9CQUFvQixFQUFFLEdBQUc7RUFDekJxQixPQUFPLEVBQUUsSUFBSTtFQUNibFcsVUFBVSxFQUFFLElBQUk7RUFDaEJnVixjQUFjLEVBQUUsSUFBSTtFQUNwQnhSLFFBQVEsRUFBRSxJQUFJO0VBQ2R2UCxRQUFRLEVBQUUsSUFBSTtFQUNkaWdCLG9CQUFvQixFQUFFLEtBQUs7RUFDM0JqRSw0QkFBNEIsRUFBRSxLQUFLO0VBQ25DQywyQkFBMkIsRUFBRSxLQUFLO0VBQ2xDL0osYUFBYSxFQUFFLEtBQUs7RUFDcEJqRyxXQUFXO0VBQ1h3QixLQUFLLEVBQUU7QUFDVCxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERCxJQUFJL0MsT0FBTyxHQUFHO0VBQ1osT0FBTyxFQUFFO0lBQ1B4WCxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQ2tVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcERqVSxnQkFBZ0IsRUFBRSwwREFBMEQsQ0FBQ2lVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkYvVCxjQUFjLEVBQUUsdUZBQXVGLENBQUMrVCxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xIaFUsZUFBZSxFQUFFLGlEQUFpRCxDQUFDZ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RTJFLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCL0wsUUFBUSxFQUFFLEtBQUs7SUFDZjJKLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUJrUyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCUSxpQkFBaUIsRUFBRSw4QkFBOEI7SUFDakRDLGlCQUFpQixFQUFFLDhCQUE4QjtJQUNqREMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQ3ZRLFdBQVcsRUFBRSxDQUFDO0lBQ2QwQixNQUFNLEVBQUU7TUFDTkgsUUFBUSxFQUFFLFVBQVU7TUFDcEJ0WSxNQUFNLEVBQUUsUUFBUTtNQUNoQjRaLGFBQWEsRUFBRSxZQUFZO01BQzNCRSxjQUFjLEVBQUUsZ0JBQWdCO01BQ2hDUixLQUFLLEVBQUUsT0FBTztNQUNkRSxhQUFhLEVBQUUsZ0JBQWdCO01BQy9CRSxTQUFTLEVBQUUsWUFBWTtNQUN2QitRLEtBQUssRUFBRSxPQUFPO01BQ2RDLFdBQVcsRUFBRSxhQUFhO01BQzFCOUYsYUFBYSxFQUFFLG1CQUFtQjtNQUNsQ0csV0FBVyxFQUFFO0lBQ2Y7RUFDRixDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1A5bUIsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUNrVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BEalUsZ0JBQWdCLEVBQUUsMERBQTBELENBQUNpVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZGL1QsY0FBYyxFQUFFLHVGQUF1RixDQUFDK1QsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsSGhVLGVBQWUsRUFBRSxpREFBaUQsQ0FBQ2dVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0UyRSxVQUFVLEVBQUUsV0FBVztJQUN2Qi9MLFFBQVEsRUFBRSxLQUFLO0lBQ2YySixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCa1MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQlEsaUJBQWlCLEVBQUUsOEJBQThCO0lBQ2pEQyxpQkFBaUIsRUFBRSw4QkFBOEI7SUFDakRDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEN2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxVQUFVO01BQ3BCdFksTUFBTSxFQUFFLFFBQVE7TUFDaEI0WixhQUFhLEVBQUUsWUFBWTtNQUMzQkUsY0FBYyxFQUFFLGdCQUFnQjtNQUNoQ1IsS0FBSyxFQUFFLE9BQU87TUFDZEUsYUFBYSxFQUFFLGdCQUFnQjtNQUMvQkUsU0FBUyxFQUFFLFlBQVk7TUFDdkIrUSxLQUFLLEVBQUUsT0FBTztNQUNkQyxXQUFXLEVBQUUsYUFBYTtNQUMxQjlGLGFBQWEsRUFBRSxtQkFBbUI7TUFDbENHLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQOW1CLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDa1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRGpVLGdCQUFnQixFQUFFLDZEQUE2RCxDQUFDaVUsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRi9ULGNBQWMsRUFBRSxvRkFBb0YsQ0FBQytULEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0doVSxlQUFlLEVBQUUsaURBQWlELENBQUNnVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdFMkUsVUFBVSxFQUFFLFdBQVc7SUFDdkIvTCxRQUFRLEVBQUUsS0FBSztJQUNmMkosT0FBTyxFQUFFLGlCQUFpQjtJQUMxQmtTLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUJRLGlCQUFpQixFQUFFLG1DQUFtQztJQUN0REMsaUJBQWlCLEVBQUUsc0NBQXNDO0lBQ3pEQyxjQUFjLEVBQUUsZUFBZTtJQUMvQnZRLFdBQVcsRUFBRSxDQUFDO0lBQ2QwQixNQUFNLEVBQUU7TUFDTkgsUUFBUSxFQUFFLFVBQVU7TUFDcEJ0WSxNQUFNLEVBQUUsUUFBUTtNQUNoQjRaLGFBQWEsRUFBRSxnQkFBZ0I7TUFDL0JFLGNBQWMsRUFBRSxrQkFBa0I7TUFDbENSLEtBQUssRUFBRSxXQUFXO01BQ2xCRSxhQUFhLEVBQUUsaUJBQWlCO01BQ2hDRSxTQUFTLEVBQUUsZUFBZTtNQUMxQitRLEtBQUssRUFBRSxPQUFPO01BQ2RDLFdBQVcsRUFBRSxpQkFBaUI7TUFDOUI5RixhQUFhLEVBQUUsbUJBQW1CO01BQ2xDRyxXQUFXLEVBQUU7SUFDZjtFQUNGLENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUDltQixpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQ2tVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcERqVSxnQkFBZ0IsRUFBRSxzREFBc0QsQ0FBQ2lVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkYvVCxjQUFjLEVBQUUsMEZBQTBGLENBQUMrVCxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JIaFUsZUFBZSxFQUFFLGlEQUFpRCxDQUFDZ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RTJFLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCL0wsUUFBUSxFQUFFLEtBQUs7SUFDZjJKLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUJrUyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCUSxpQkFBaUIsRUFBRSxpQ0FBaUM7SUFDcERDLGlCQUFpQixFQUFFLGlDQUFpQztJQUNwREMsY0FBYyxFQUFFLGNBQWM7SUFDOUJ2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxZQUFZO01BQ3RCdFksTUFBTSxFQUFFLE9BQU87TUFDZjRaLGFBQWEsRUFBRSxhQUFhO01BQzVCRSxjQUFjLEVBQUUsY0FBYztNQUM5QlIsS0FBSyxFQUFFLFFBQVE7TUFDZkUsYUFBYSxFQUFFLGlCQUFpQjtNQUNoQ0UsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QitRLEtBQUssRUFBRSxLQUFLO01BQ1pDLFdBQVcsRUFBRSxlQUFlO01BQzVCOUYsYUFBYSxFQUFFLHdCQUF3QjtNQUN2Q0csV0FBVyxFQUFFO0lBQ2Y7RUFDRixDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1A5bUIsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUNrVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BEalUsZ0JBQWdCLEVBQUUscURBQXFELENBQUNpVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGL1QsY0FBYyxFQUFFLHNGQUFzRixDQUFDK1QsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqSGhVLGVBQWUsRUFBRSxtREFBbUQsQ0FBQ2dVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0UyRSxVQUFVLEVBQUUsV0FBVztJQUN2Qi9MLFFBQVEsRUFBRSxLQUFLO0lBQ2YySixPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCa1MsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QlEsaUJBQWlCLEVBQUUsZ0NBQWdDO0lBQ25EQyxpQkFBaUIsRUFBRSxnQ0FBZ0M7SUFDbkRDLGNBQWMsRUFBRSxjQUFjO0lBQzlCdlEsV0FBVyxFQUFFLENBQUM7SUFDZDBCLE1BQU0sRUFBRTtNQUNOSCxRQUFRLEVBQUUsWUFBWTtNQUN0QnRZLE1BQU0sRUFBRSxNQUFNO01BQ2Q0WixhQUFhLEVBQUUsY0FBYztNQUM3QkUsY0FBYyxFQUFFLGdCQUFnQjtNQUNoQ1IsS0FBSyxFQUFFLFFBQVE7TUFDZkUsYUFBYSxFQUFFLG9CQUFvQjtNQUNuQ0UsU0FBUyxFQUFFLGtCQUFrQjtNQUM3QitRLEtBQUssRUFBRSxhQUFhO01BQ3BCQyxXQUFXLEVBQUUsY0FBYztNQUMzQjlGLGFBQWEsRUFBRSx1QkFBdUI7TUFDdENHLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQOW1CLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDa1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRGpVLGdCQUFnQixFQUFFLDBEQUEwRCxDQUFDaVUsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2Ri9ULGNBQWMsRUFBRSwrRkFBK0YsQ0FBQytULEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUhoVSxlQUFlLEVBQUUsaURBQWlELENBQUNnVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdFMkUsVUFBVSxFQUFFLFdBQVc7SUFDdkIvTCxRQUFRLEVBQUUsS0FBSztJQUNmMkosT0FBTyxFQUFFLGlCQUFpQjtJQUMxQmtTLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekJRLGlCQUFpQixFQUFFLGdDQUFnQztJQUNuREMsaUJBQWlCLEVBQUUsa0NBQWtDO0lBQ3JEQyxjQUFjLEVBQUUsZUFBZTtJQUMvQnZRLFdBQVcsRUFBRSxDQUFDO0lBQ2QwQixNQUFNLEVBQUU7TUFDTkgsUUFBUSxFQUFFLFlBQVk7TUFDdEJ0WSxNQUFNLEVBQUUsTUFBTTtNQUNkNFosYUFBYSxFQUFFLGlCQUFpQjtNQUNoQ0UsY0FBYyxFQUFFLGlCQUFpQjtNQUNqQ1IsS0FBSyxFQUFFLFFBQVE7TUFDZkUsYUFBYSxFQUFFLGlCQUFpQjtNQUNoQ0UsU0FBUyxFQUFFLGlCQUFpQjtNQUM1QitRLEtBQUssRUFBRSxNQUFNO01BQ2JDLFdBQVcsRUFBRSxpQkFBaUI7TUFDOUI5RixhQUFhLEVBQUUsdUJBQXVCO01BQ3RDRyxXQUFXLEVBQUU7SUFDZjtFQUNGLENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUDltQixpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQ2tVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcERqVSxnQkFBZ0IsRUFBRSxtREFBbUQsQ0FBQ2lVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEYvVCxjQUFjLEVBQUUsdUZBQXVGLENBQUMrVCxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xIaFUsZUFBZSxFQUFFLGlEQUFpRCxDQUFDZ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RTJFLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCL0wsUUFBUSxFQUFFLEtBQUs7SUFDZjJKLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUJrUyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCUSxpQkFBaUIsRUFBRSxtQ0FBbUM7SUFDdERDLGlCQUFpQixFQUFFLGlDQUFpQztJQUNwREMsY0FBYyxFQUFFLGFBQWE7SUFDN0J2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxVQUFVO01BQ3BCdFksTUFBTSxFQUFFLFNBQVM7TUFDakI0WixhQUFhLEVBQUUsYUFBYTtNQUM1QkUsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQ1IsS0FBSyxFQUFFLE9BQU87TUFDZEUsYUFBYSxFQUFFLGVBQWU7TUFDOUJFLFNBQVMsRUFBRSxVQUFVO01BQ3JCK1EsS0FBSyxFQUFFLE1BQU07TUFDYkMsV0FBVyxFQUFFLGdCQUFnQjtNQUM3QjlGLGFBQWEsRUFBRSxtQkFBbUI7TUFDbENHLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQOW1CLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDa1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRGpVLGdCQUFnQixFQUFFLCtEQUErRCxDQUFDaVUsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1Ri9ULGNBQWMsRUFBRSxpRkFBaUYsQ0FBQytULEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUdoVSxlQUFlLEVBQUUsaURBQWlELENBQUNnVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdFMkUsVUFBVSxFQUFFLFVBQVU7SUFDdEIvTCxRQUFRLEVBQUUsS0FBSztJQUNmMkosT0FBTyxFQUFFLGVBQWU7SUFDeEJrUyxPQUFPLEVBQUUsZUFBZTtJQUN4QlEsaUJBQWlCLEVBQUUscUNBQXFDO0lBQ3hEQyxpQkFBaUIsRUFBRSx1Q0FBdUM7SUFDMURDLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkN2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxXQUFXO01BQ3JCdFksTUFBTSxFQUFFLFFBQVE7TUFDaEI0WixhQUFhLEVBQUUsaUJBQWlCO01BQ2hDRSxjQUFjLEVBQUUsa0JBQWtCO01BQ2xDUixLQUFLLEVBQUUsU0FBUztNQUNoQkUsYUFBYSxFQUFFLGlCQUFpQjtNQUNoQ0UsU0FBUyxFQUFFLGdCQUFnQjtNQUMzQitRLEtBQUssRUFBRSxTQUFTO01BQ2hCQyxXQUFXLEVBQUUsWUFBWTtNQUN6QjlGLGFBQWEsRUFBRSxvQkFBb0I7TUFDbkNHLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQOW1CLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDa1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRGpVLGdCQUFnQixFQUFFLDREQUE0RCxDQUFDaVUsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6Ri9ULGNBQWMsRUFBRSxrR0FBa0csQ0FBQytULEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0hoVSxlQUFlLEVBQUUsaURBQWlELENBQUNnVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdFMkUsVUFBVSxFQUFFLFVBQVU7SUFDdEIvTCxRQUFRLEVBQUUsS0FBSztJQUNmMkosT0FBTyxFQUFFLGVBQWU7SUFDeEJrUyxPQUFPLEVBQUUsZUFBZTtJQUN4QlEsaUJBQWlCLEVBQUUsOEJBQThCO0lBQ2pEQyxpQkFBaUIsRUFBRSxnQ0FBZ0M7SUFDbkRDLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkN2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxXQUFXO01BQ3JCdFksTUFBTSxFQUFFLFVBQVU7TUFDbEI0WixhQUFhLEVBQUUsa0JBQWtCO01BQ2pDRSxjQUFjLEVBQUUsbUJBQW1CO01BQ25DUixLQUFLLEVBQUUsU0FBUztNQUNoQkUsYUFBYSxFQUFFLGlCQUFpQjtNQUNoQ0UsU0FBUyxFQUFFLGVBQWU7TUFDMUIrUSxLQUFLLEVBQUUsU0FBUztNQUNoQkMsV0FBVyxFQUFFLGFBQWE7TUFDMUI5RixhQUFhLEVBQUUseUJBQXlCO01BQ3hDRyxXQUFXLEVBQUU7SUFDZjtFQUNGLENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUDltQixpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQ2tVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcERqVSxnQkFBZ0IsRUFBRSw0REFBNEQsQ0FBQ2lVLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekYvVCxjQUFjLEVBQUUseUZBQXlGLENBQUMrVCxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BIaFUsZUFBZSxFQUFFLGlEQUFpRCxDQUFDZ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RTJFLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCL0wsUUFBUSxFQUFFLEtBQUs7SUFDZjJKLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0JrUyxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCUSxpQkFBaUIsRUFBRSxvQ0FBb0M7SUFDdkRDLGlCQUFpQixFQUFFLG9DQUFvQztJQUN2REMsY0FBYyxFQUFFLFlBQVk7SUFDNUJ2USxXQUFXLEVBQUUsQ0FBQztJQUNkMEIsTUFBTSxFQUFFO01BQ05ILFFBQVEsRUFBRSxVQUFVO01BQ3BCdFksTUFBTSxFQUFFLFNBQVM7TUFDakI0WixhQUFhLEVBQUUsZ0JBQWdCO01BQy9CRSxjQUFjLEVBQUUsY0FBYztNQUM5QlIsS0FBSyxFQUFFLFNBQVM7TUFDaEJFLGFBQWEsRUFBRSxjQUFjO01BQzdCRSxTQUFTLEVBQUUsZ0JBQWdCO01BQzNCK1EsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLFdBQVcsRUFBRSxrQkFBa0I7TUFDL0I5RixhQUFhLEVBQUUsbUJBQW1CO01BQ2xDRyxXQUFXLEVBQUU7SUFDZjtFQUNGO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBdFAsT0FBTyxHQUFHcG1CLE1BQU0sQ0FBQ2svQixNQUFNLENBQUM7RUFDdEJDLEVBQUUsRUFBRS9ZLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDcEJnWixFQUFFLEVBQUVoWixPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3BCaVosRUFBRSxFQUFFalosT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUNwQmtaLEVBQUUsRUFBRWxaLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDcEJtWixFQUFFLEVBQUVuWixPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3BCb1osRUFBRSxFQUFFcFosT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUNwQnFaLEVBQUUsRUFBRXJaLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDcEJzWixFQUFFLEVBQUV0WixPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3BCdVosRUFBRSxFQUFFdlosT0FBTyxDQUFDLE9BQU87QUFDckIsQ0FBQyxFQUFFQSxPQUFPLENBQUM7QUFFWCxpRUFBZUEsT0FBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUM5UnRCOztBQUVBLE1BQU13WixVQUFVLEdBQUcsQ0FBQztBQUVwQixNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBUSxPQUFPL2xCLE1BQU0sS0FBSyxXQUFXLEdBQUlBLE1BQU0sR0FBRyxJQUFLO0FBRS9FLE1BQU1nbUIsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtFQUM3QixNQUFNQyxZQUFZLEdBQUdGLGVBQWUsQ0FBQyxDQUFDO0VBRXRDLElBQ0VFLFlBQVksSUFDVEEsWUFBWSxDQUFDQyxNQUFNLElBQ25CLE9BQU9ELFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLEtBQUssVUFBVSxFQUN6RDtJQUNBLE9BQU9GLFlBQVksQ0FBQ0MsTUFBTTtFQUM1QjtFQUVBLE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRCxNQUFNRSxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0VBQy9CLE1BQU1ILFlBQVksR0FBR0YsZUFBZSxDQUFDLENBQUM7RUFDdEMsTUFBTU0sT0FBTyxHQUFHSixZQUFZLEtBQ3RCQSxZQUFZLENBQUNLLGFBQWEsSUFBSUwsWUFBWSxDQUFDTSxVQUFVLElBQUlOLFlBQVksQ0FBQ08sVUFBVSxDQUFDO0VBRXZGLElBQUlILE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUNJLGVBQWUsS0FBSyxVQUFVLEVBQUU7SUFDNUQsT0FBT0osT0FBTztFQUNoQjtFQUVBLE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRCxNQUFNSyxlQUFlLEdBQUlDLFVBQVUsSUFBS0EsVUFBVSxDQUFDNWlCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUV2RixNQUFNNmlCLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUE2QjtFQUFBLElBQXpCdkksU0FBUyxHQUFBN0gsU0FBQSxDQUFBbnlCLE1BQUEsUUFBQW15QixTQUFBLFFBQUEzeEIsU0FBQSxHQUFBMnhCLFNBQUEsTUFBRyxRQUFRO0VBQzFDLE1BQU0sQ0FBQ3FRLGFBQWEsRUFBRUMsU0FBUyxDQUFDLEdBQUd6SSxTQUFTLENBQUNyVixLQUFLLENBQUMsR0FBRyxDQUFDO0VBRXZELE9BQU87SUFDTDZkLGFBQWEsRUFBRUEsYUFBYSxJQUFJLFFBQVE7SUFDeENDLFNBQVMsRUFBRUEsU0FBUyxJQUFJO0VBQzFCLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTUMsbUJBQW1CLEdBQUdBLENBQUMzakIsT0FBTyxFQUFFekssSUFBSSxFQUFFWSxLQUFLLEtBQUs7RUFDcEQsSUFBSSxDQUFDNkosT0FBTyxFQUFFO0lBQ1o7RUFDRjtFQUVBLElBQUk3SixLQUFLLEVBQUU7SUFDVDZKLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDM0ssSUFBSSxFQUFFLEVBQUUsQ0FBQztFQUNoQyxDQUFDLE1BQU07SUFDTHlLLE9BQU8sQ0FBQ2daLGVBQWUsQ0FBQ3pqQixJQUFJLENBQUM7RUFDL0I7QUFDRixDQUFDO0FBRUQsTUFBTXF1QixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlMLFVBQVUsRUFBRU0sQ0FBQyxFQUFFbG5CLENBQUMsRUFBRXNlLFNBQVMsRUFBNEI7RUFBQSxJQUExQjZJLFFBQVEsR0FBQTFRLFNBQUEsQ0FBQW55QixNQUFBLFFBQUFteUIsU0FBQSxRQUFBM3hCLFNBQUEsR0FBQTJ4QixTQUFBLE1BQUcsVUFBVTtFQUN2RW1RLFVBQVUsQ0FBQzNrQixLQUFLLENBQUNtbEIsUUFBUSxHQUFHRCxRQUFRO0VBQ3BDUCxVQUFVLENBQUMza0IsS0FBSyxDQUFDMlcsSUFBSSxNQUFBdjBCLE1BQUEsQ0FBTTZpQyxDQUFDLE9BQUk7RUFDaENOLFVBQVUsQ0FBQzNrQixLQUFLLENBQUNvVyxHQUFHLE1BQUFoMEIsTUFBQSxDQUFNMmIsQ0FBQyxPQUFJO0VBQy9CNG1CLFVBQVUsQ0FBQ3JqQixZQUFZLENBQUMsdUJBQXVCLEVBQUUrYSxTQUFTLENBQUM7QUFDN0QsQ0FBQztBQUVELE1BQU0rSSxrQkFBa0IsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFSixDQUFDLEVBQUVsbkIsQ0FBQyxLQUFLO0VBQzVDLElBQUksQ0FBQ3NuQixPQUFPLEVBQUU7SUFDWjtFQUNGO0VBRUFBLE9BQU8sQ0FBQ3JsQixLQUFLLENBQUMyVyxJQUFJLEdBQUcsRUFBRTtFQUN2QjBPLE9BQU8sQ0FBQ3JsQixLQUFLLENBQUNvVyxHQUFHLEdBQUcsRUFBRTtFQUV0QixJQUFJLE9BQU82TyxDQUFDLEtBQUssUUFBUSxFQUFFO0lBQ3pCSSxPQUFPLENBQUNybEIsS0FBSyxDQUFDMlcsSUFBSSxNQUFBdjBCLE1BQUEsQ0FBTTZpQyxDQUFDLE9BQUk7RUFDL0I7RUFFQSxJQUFJLE9BQU9sbkIsQ0FBQyxLQUFLLFFBQVEsRUFBRTtJQUN6QnNuQixPQUFPLENBQUNybEIsS0FBSyxDQUFDb1csR0FBRyxNQUFBaDBCLE1BQUEsQ0FBTTJiLENBQUMsT0FBSTtFQUM5QjtBQUNGLENBQUM7QUFFRCxNQUFNdW5CLEtBQUssR0FBR0EsQ0FBQy90QixLQUFLLEVBQUU2QixHQUFHLEVBQUV1TixHQUFHLEtBQUtqVyxJQUFJLENBQUMwSSxHQUFHLENBQUMxSSxJQUFJLENBQUNpVyxHQUFHLENBQUNwUCxLQUFLLEVBQUU2QixHQUFHLENBQUMsRUFBRXVOLEdBQUcsQ0FBQztBQUV0RSxNQUFNNGUsaUJBQWlCLEdBQUdBLENBQUNDLGFBQWEsRUFBRUMsWUFBWSxFQUFFWCxTQUFTLEtBQUs7RUFDcEUsSUFBSUEsU0FBUyxLQUFLLE9BQU8sRUFBRTtJQUN6QixPQUFPVSxhQUFhLENBQUM3TyxJQUFJO0VBQzNCO0VBRUEsSUFBSW1PLFNBQVMsS0FBSyxLQUFLLEVBQUU7SUFDdkIsT0FBT1UsYUFBYSxDQUFDNU8sS0FBSyxHQUFHNk8sWUFBWSxDQUFDQyxLQUFLO0VBQ2pEO0VBRUEsT0FBT0YsYUFBYSxDQUFDN08sSUFBSSxHQUFJLENBQUM2TyxhQUFhLENBQUNFLEtBQUssR0FBR0QsWUFBWSxDQUFDQyxLQUFLLElBQUksQ0FBRTtBQUM5RSxDQUFDO0FBRUQsTUFBTUMsZUFBZSxHQUFHQSxDQUFDSCxhQUFhLEVBQUVDLFlBQVksRUFBRVgsU0FBUyxLQUFLO0VBQ2xFLElBQUlBLFNBQVMsS0FBSyxPQUFPLEVBQUU7SUFDekIsT0FBT1UsYUFBYSxDQUFDcFAsR0FBRztFQUMxQjtFQUVBLElBQUkwTyxTQUFTLEtBQUssS0FBSyxFQUFFO0lBQ3ZCLE9BQU9VLGFBQWEsQ0FBQzNPLE1BQU0sR0FBRzRPLFlBQVksQ0FBQy9PLE1BQU07RUFDbkQ7RUFFQSxPQUFPOE8sYUFBYSxDQUFDcFAsR0FBRyxHQUFJLENBQUNvUCxhQUFhLENBQUM5TyxNQUFNLEdBQUcrTyxZQUFZLENBQUMvTyxNQUFNLElBQUksQ0FBRTtBQUMvRSxDQUFDO0FBRUQsTUFBTWtQLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUlKLGFBQWEsRUFBRUMsWUFBWSxFQUFFcEosU0FBUyxFQUFzQjtFQUFBLElBQXBCcHJCLE1BQU0sR0FBQXVqQixTQUFBLENBQUFueUIsTUFBQSxRQUFBbXlCLFNBQUEsUUFBQTN4QixTQUFBLEdBQUEyeEIsU0FBQSxNQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNyRixNQUFNO0lBQUVxUSxhQUFhO0lBQUVDO0VBQVUsQ0FBQyxHQUFHRixjQUFjLENBQUN2SSxTQUFTLENBQUM7RUFDOUQsTUFBTSxDQUFDd0osZUFBZSxHQUFHLENBQUMsRUFBRUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHNzBCLE1BQU07RUFFeEQsSUFBSTR6QixhQUFhLEtBQUssS0FBSyxFQUFFO0lBQzNCLE9BQU87TUFDTEksQ0FBQyxFQUFFTSxpQkFBaUIsQ0FBQ0MsYUFBYSxFQUFFQyxZQUFZLEVBQUVYLFNBQVMsQ0FBQyxHQUFHZSxlQUFlO01BQzlFOW5CLENBQUMsRUFBRXluQixhQUFhLENBQUNwUCxHQUFHLEdBQUdxUCxZQUFZLENBQUMvTyxNQUFNLEdBQUdvUDtJQUMvQyxDQUFDO0VBQ0g7RUFFQSxJQUFJakIsYUFBYSxLQUFLLFFBQVEsRUFBRTtJQUM5QixPQUFPO01BQ0xJLENBQUMsRUFBRU0saUJBQWlCLENBQUNDLGFBQWEsRUFBRUMsWUFBWSxFQUFFWCxTQUFTLENBQUMsR0FBR2UsZUFBZTtNQUM5RTluQixDQUFDLEVBQUV5bkIsYUFBYSxDQUFDM08sTUFBTSxHQUFHaVA7SUFDNUIsQ0FBQztFQUNIO0VBRUEsSUFBSWpCLGFBQWEsS0FBSyxNQUFNLEVBQUU7SUFDNUIsT0FBTztNQUNMSSxDQUFDLEVBQUVPLGFBQWEsQ0FBQzdPLElBQUksR0FBRzhPLFlBQVksQ0FBQ0MsS0FBSyxHQUFHSSxjQUFjO01BQzNEL25CLENBQUMsRUFBRTRuQixlQUFlLENBQUNILGFBQWEsRUFBRUMsWUFBWSxFQUFFWCxTQUFTLENBQUMsR0FBR2U7SUFDL0QsQ0FBQztFQUNIO0VBRUEsT0FBTztJQUNMWixDQUFDLEVBQUVPLGFBQWEsQ0FBQzVPLEtBQUssR0FBR2tQLGNBQWM7SUFDdkMvbkIsQ0FBQyxFQUFFNG5CLGVBQWUsQ0FBQ0gsYUFBYSxFQUFFQyxZQUFZLEVBQUVYLFNBQVMsQ0FBQyxHQUFHZTtFQUMvRCxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU1FLG1DQUFtQyxHQUFHQSxDQUFDcEIsVUFBVSxFQUFFcUIsU0FBUyxFQUFFQyxTQUFTLEtBQUs7RUFDaEYsTUFBTWhrQixhQUFhLEdBQUcwaUIsVUFBVSxDQUFDMWlCLGFBQWEsSUFBSVosUUFBUTtFQUMxRCxNQUFNNGlCLFlBQVksR0FBR2hpQixhQUFhLENBQUNDLFdBQVcsSUFBSTZoQixlQUFlLENBQUMsQ0FBQztFQUNuRSxNQUFNO0lBQUVtQztFQUFhLENBQUMsR0FBR3ZCLFVBQVU7RUFFbkMsSUFDRSxDQUFDdUIsWUFBWSxJQUNWQSxZQUFZLEtBQUtqa0IsYUFBYSxDQUFDNlcsSUFBSSxJQUNuQ29OLFlBQVksS0FBS2prQixhQUFhLENBQUNra0IsZUFBZSxFQUNqRDtJQUNBLE9BQU87TUFDTGxCLENBQUMsRUFBRWUsU0FBUyxJQUFJL0IsWUFBWSxHQUFHQSxZQUFZLENBQUNtQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO01BQzVEcm9CLENBQUMsRUFBRWtvQixTQUFTLElBQUloQyxZQUFZLEdBQUdBLFlBQVksQ0FBQ29DLFdBQVcsR0FBRyxDQUFDO0lBQzdELENBQUM7RUFDSDtFQUVBLE1BQU1DLFVBQVUsR0FBR0osWUFBWSxDQUFDelAscUJBQXFCLENBQUMsQ0FBQztFQUV2RCxPQUFPO0lBQ0x3TyxDQUFDLEVBQUVlLFNBQVMsR0FBR00sVUFBVSxDQUFDM1AsSUFBSSxHQUFHdVAsWUFBWSxDQUFDSyxVQUFVLEdBQUdMLFlBQVksQ0FBQ00sVUFBVTtJQUNsRnpvQixDQUFDLEVBQUVrb0IsU0FBUyxHQUFHSyxVQUFVLENBQUNsUSxHQUFHLEdBQUc4UCxZQUFZLENBQUNPLFNBQVMsR0FBR1AsWUFBWSxDQUFDN1A7RUFDeEUsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNcVEsbUJBQW1CLEdBQUdBLENBQUNsQixhQUFhLEVBQUVDLFlBQVksRUFBRU8sU0FBUyxFQUFFQyxTQUFTLEVBQUU1SixTQUFTLEVBQUVnSixPQUFPLEtBQUs7RUFDckcsSUFBSSxDQUFDQSxPQUFPLEVBQUU7SUFDWjtFQUNGO0VBRUEsTUFBTTtJQUFFUjtFQUFjLENBQUMsR0FBR0QsY0FBYyxDQUFDdkksU0FBUyxDQUFDO0VBQ25ELE1BQU1zSyxTQUFTLEdBQUc3QyxVQUFVLEdBQUcsQ0FBQztFQUVoQyxJQUFJZSxhQUFhLEtBQUssS0FBSyxJQUFJQSxhQUFhLEtBQUssUUFBUSxFQUFFO0lBQ3pELE1BQU0rQixTQUFTLEdBQUdsMkIsSUFBSSxDQUFDaVcsR0FBRyxDQUFDOGUsWUFBWSxDQUFDQyxLQUFLLEdBQUc1QixVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0rQyxNQUFNLEdBQUd2QixLQUFLLENBQ2xCRSxhQUFhLENBQUM3TyxJQUFJLEdBQUk2TyxhQUFhLENBQUNFLEtBQUssR0FBRyxDQUFFLEdBQUdNLFNBQVMsR0FBR1csU0FBUyxFQUN0RSxDQUFDLEVBQ0RDLFNBQ0YsQ0FBQztJQUVEeEIsa0JBQWtCLENBQUNDLE9BQU8sRUFBRXdCLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDekM7RUFDRjtFQUVBLE1BQU1DLFNBQVMsR0FBR3AyQixJQUFJLENBQUNpVyxHQUFHLENBQUM4ZSxZQUFZLENBQUMvTyxNQUFNLEdBQUdvTixVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBQy9ELE1BQU1pRCxNQUFNLEdBQUd6QixLQUFLLENBQ2xCRSxhQUFhLENBQUNwUCxHQUFHLEdBQUlvUCxhQUFhLENBQUM5TyxNQUFNLEdBQUcsQ0FBRSxHQUFHdVAsU0FBUyxHQUFHVSxTQUFTLEVBQ3RFLENBQUMsRUFDREcsU0FDRixDQUFDO0VBRUQxQixrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFLElBQUksRUFBRTBCLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTUMsd0JBQXdCLEdBQUl0RixNQUFNLElBQUs7RUFDM0MsTUFBTXVDLFlBQVksR0FBR0YsZUFBZSxDQUFDLENBQUM7RUFFdEMsSUFBSSxDQUFDRSxZQUFZLElBQUksT0FBT0EsWUFBWSxDQUFDNVUsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO0lBQ3hFLE9BQU8sTUFBTSxDQUFDLENBQUM7RUFDakI7RUFFQTRVLFlBQVksQ0FBQzVVLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFTLE1BQU0sQ0FBQztFQUMvQ3VDLFlBQVksQ0FBQzVVLGdCQUFnQixDQUFDLFFBQVEsRUFBRXFTLE1BQU0sRUFBRSxJQUFJLENBQUM7RUFFckQsT0FBTyxNQUFNO0lBQ1h1QyxZQUFZLENBQUMvUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUV3USxNQUFNLENBQUM7SUFDbER1QyxZQUFZLENBQUMvUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUV3USxNQUFNLEVBQUUsSUFBSSxDQUFDO0VBQzFELENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTXVGLHNCQUFzQixHQUFHQSxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsRUFBRXhDLFVBQVUsRUFBRXgwQixPQUFPLEtBQUs7RUFDbEYsTUFBTWkzQixTQUFTLEdBQUcsRUFBRTtFQUVwQixJQUFJajNCLE9BQU8sQ0FBQ21zQixJQUFJLEtBQUssS0FBSyxFQUFFO0lBQzFCOEssU0FBUyxDQUFDbGtDLElBQUksQ0FBQztNQUNieVQsSUFBSSxFQUFFLE1BQU07TUFDWjB3QixPQUFPLEVBQUU7SUFDWCxDQUFDLENBQUM7RUFDSjtFQUVBLElBQUl4UyxLQUFLLENBQUN2VixPQUFPLENBQUNuUCxPQUFPLENBQUNjLE1BQU0sQ0FBQyxFQUFFO0lBQ2pDbTJCLFNBQVMsQ0FBQ2xrQyxJQUFJLENBQUM7TUFDYnlULElBQUksRUFBRSxRQUFRO01BQ2R4RyxPQUFPLEVBQUU7UUFDUGMsTUFBTSxFQUFFZCxPQUFPLENBQUNjO01BQ2xCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxJQUFJZCxPQUFPLENBQUNxeEIsSUFBSSxFQUFFO0lBQ2hCNEYsU0FBUyxDQUFDbGtDLElBQUksQ0FBQztNQUNieVQsSUFBSSxFQUFFLE1BQU07TUFDWjB3QixPQUFPLEVBQUU7SUFDWCxDQUFDLENBQUM7RUFDSjtFQUVBLE9BQU9ILGFBQWEsQ0FBQy9DLFlBQVksQ0FBQ2dELFdBQVcsRUFBRXhDLFVBQVUsRUFBRTtJQUN6RHRJLFNBQVMsRUFBRWxzQixPQUFPLENBQUNrc0IsU0FBUztJQUM1QjZJLFFBQVEsRUFBRS8wQixPQUFPLENBQUMrMEIsUUFBUSxJQUFJLFVBQVU7SUFDeENrQztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNRSx3QkFBd0IsR0FBR0EsQ0FBQ0MsZUFBZSxFQUFFSixXQUFXLEVBQUV4QyxVQUFVLEVBQUV4MEIsT0FBTyxLQUFLO0VBQ3RGLE1BQU1rMUIsT0FBTyxHQUFHWCxlQUFlLENBQUNDLFVBQVUsQ0FBQztFQUMzQyxNQUFNNkMsVUFBVSxHQUFHLEVBQUU7RUFFckIsSUFBSTNTLEtBQUssQ0FBQ3ZWLE9BQU8sQ0FBQ25QLE9BQU8sQ0FBQ2MsTUFBTSxDQUFDLElBQUksT0FBT3MyQixlQUFlLENBQUN0MkIsTUFBTSxLQUFLLFVBQVUsRUFBRTtJQUNqRixNQUFNLENBQUN3MkIsU0FBUyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHdjNCLE9BQU8sQ0FBQ2MsTUFBTTtJQUVwRHUyQixVQUFVLENBQUN0a0MsSUFBSSxDQUFDcWtDLGVBQWUsQ0FBQ3QyQixNQUFNLENBQUM7TUFDckN5MkIsUUFBUTtNQUNSRDtJQUNGLENBQUMsQ0FBQyxDQUFDO0VBQ0w7RUFFQSxJQUFJdDNCLE9BQU8sQ0FBQ21zQixJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU9pTCxlQUFlLENBQUNqTCxJQUFJLEtBQUssVUFBVSxFQUFFO0lBQ3hFa0wsVUFBVSxDQUFDdGtDLElBQUksQ0FBQ3FrQyxlQUFlLENBQUNqTCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pDO0VBRUEsSUFBSW5zQixPQUFPLENBQUN3M0IsS0FBSyxLQUFLLEtBQUssSUFBSSxPQUFPSixlQUFlLENBQUNJLEtBQUssS0FBSyxVQUFVLEVBQUU7SUFDMUVILFVBQVUsQ0FBQ3RrQyxJQUFJLENBQUNxa0MsZUFBZSxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzFDO0VBRUEsSUFBSXgzQixPQUFPLENBQUNxeEIsSUFBSSxJQUFJLE9BQU8rRixlQUFlLENBQUMvRixJQUFJLEtBQUssVUFBVSxFQUFFO0lBQzlEZ0csVUFBVSxDQUFDdGtDLElBQUksQ0FBQ3FrQyxlQUFlLENBQUMvRixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pDO0VBRUEsSUFBSTZELE9BQU8sSUFBSSxPQUFPa0MsZUFBZSxDQUFDSyxLQUFLLEtBQUssVUFBVSxFQUFFO0lBQzFESixVQUFVLENBQUN0a0MsSUFBSSxDQUFDcWtDLGVBQWUsQ0FBQ0ssS0FBSyxDQUFDO01BQUV4bUIsT0FBTyxFQUFFaWtCO0lBQVEsQ0FBQyxDQUFDLENBQUM7RUFDOUQ7RUFFQSxNQUFNM0QsTUFBTSxHQUFHQSxDQUFBLEtBQU07SUFDbkJpRCxVQUFVLENBQUMza0IsS0FBSyxDQUFDbWxCLFFBQVEsR0FBR2gxQixPQUFPLENBQUMrMEIsUUFBUSxJQUFJLFVBQVU7SUFFMUQsT0FBT3FDLGVBQWUsQ0FBQzlDLGVBQWUsQ0FBQzBDLFdBQVcsRUFBRXhDLFVBQVUsRUFBRTtNQUM5RHRJLFNBQVMsRUFBRWxzQixPQUFPLENBQUNrc0IsU0FBUztNQUM1QjZJLFFBQVEsRUFBRS8wQixPQUFPLENBQUMrMEIsUUFBUSxJQUFJLFVBQVU7TUFDeENzQztJQUNGLENBQUMsQ0FBQyxDQUFDdEgsSUFBSSxDQUFDMkgsSUFBQSxJQUE4QztNQUFBLElBQTdDO1FBQUU1QyxDQUFDO1FBQUVsbkIsQ0FBQztRQUFFc2UsU0FBUztRQUFFeUwsY0FBYyxHQUFHLENBQUM7TUFBRSxDQUFDLEdBQUFELElBQUE7TUFDL0M3QyxhQUFhLENBQUNMLFVBQVUsRUFBRU0sQ0FBQyxFQUFFbG5CLENBQUMsRUFBRXNlLFNBQVMsRUFBRWxzQixPQUFPLENBQUMrMEIsUUFBUSxJQUFJLFVBQVUsQ0FBQztNQUMxRUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRXlDLGNBQWMsQ0FBQ0YsS0FBSyxJQUFJRSxjQUFjLENBQUNGLEtBQUssQ0FBQzNDLENBQUMsRUFBRTZDLGNBQWMsQ0FBQ0YsS0FBSyxJQUFJRSxjQUFjLENBQUNGLEtBQUssQ0FBQzdwQixDQUFDLENBQUM7TUFDM0hnbkIsbUJBQW1CLENBQ2pCSixVQUFVLEVBQ1YsOEJBQThCLEVBQzlCbUQsY0FBYyxDQUFDdEcsSUFBSSxJQUFJc0csY0FBYyxDQUFDdEcsSUFBSSxDQUFDdUcsZUFDN0MsQ0FBQztNQUNEaEQsbUJBQW1CLENBQ2pCSixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCbUQsY0FBYyxDQUFDdEcsSUFBSSxJQUFJc0csY0FBYyxDQUFDdEcsSUFBSSxDQUFDd0csT0FDN0MsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRCxNQUFNQyxPQUFPLEdBQUksT0FBT1YsZUFBZSxDQUFDVyxVQUFVLEtBQUssVUFBVSxHQUM3RFgsZUFBZSxDQUFDVyxVQUFVLENBQUNmLFdBQVcsRUFBRXhDLFVBQVUsRUFBRWpELE1BQU0sQ0FBQyxHQUMzRHNGLHdCQUF3QixDQUFDdEYsTUFBTSxDQUFDO0VBRXBDLElBQUksQ0FBQ3Z4QixPQUFPLENBQUNzeEIsV0FBVyxFQUFFO0lBQ3hCQyxNQUFNLENBQUMsQ0FBQztFQUNWO0VBRUEsT0FBTztJQUNMQSxNQUFNO0lBQ056SCxPQUFPQSxDQUFBLEVBQUc7TUFDUmdPLE9BQU8sQ0FBQyxDQUFDO0lBQ1g7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU1FLHNCQUFzQixHQUFHQSxDQUFDaEIsV0FBVyxFQUFFeEMsVUFBVSxFQUFFeDBCLE9BQU8sS0FBSztFQUNuRSxNQUFNazFCLE9BQU8sR0FBR1gsZUFBZSxDQUFDQyxVQUFVLENBQUM7RUFFM0MsTUFBTWpELE1BQU0sR0FBR0EsQ0FBQSxLQUFNO0lBQ25CaUQsVUFBVSxDQUFDM2tCLEtBQUssQ0FBQ21sQixRQUFRLEdBQUdoMUIsT0FBTyxDQUFDKzBCLFFBQVEsSUFBSSxVQUFVO0lBRTFELE1BQU1NLGFBQWEsR0FBRzJCLFdBQVcsQ0FBQzFRLHFCQUFxQixDQUFDLENBQUM7SUFDekQsTUFBTWdQLFlBQVksR0FBR2QsVUFBVSxDQUFDbE8scUJBQXFCLENBQUMsQ0FBQztJQUN2RCxNQUFNMlIsbUJBQW1CLEdBQUd4QyxzQkFBc0IsQ0FDaERKLGFBQWEsRUFDYkMsWUFBWSxFQUNadDFCLE9BQU8sQ0FBQ2tzQixTQUFTLEVBQ2pCbHNCLE9BQU8sQ0FBQ2MsTUFDVixDQUFDO0lBQ0QsTUFBTW8zQixxQkFBcUIsR0FBR3RDLG1DQUFtQyxDQUMvRHBCLFVBQVUsRUFDVnlELG1CQUFtQixDQUFDbkQsQ0FBQyxFQUNyQm1ELG1CQUFtQixDQUFDcnFCLENBQ3RCLENBQUM7SUFFRGluQixhQUFhLENBQ1hMLFVBQVUsRUFDVjBELHFCQUFxQixDQUFDcEQsQ0FBQyxFQUN2Qm9ELHFCQUFxQixDQUFDdHFCLENBQUMsRUFDdkI1TixPQUFPLENBQUNrc0IsU0FBUyxFQUNqQmxzQixPQUFPLENBQUMrMEIsUUFBUSxJQUFJLFVBQ3RCLENBQUM7SUFDRHdCLG1CQUFtQixDQUNqQmxCLGFBQWEsRUFDYkMsWUFBWSxFQUNaMkMsbUJBQW1CLENBQUNuRCxDQUFDLEVBQ3JCbUQsbUJBQW1CLENBQUNycUIsQ0FBQyxFQUNyQjVOLE9BQU8sQ0FBQ2tzQixTQUFTLEVBQ2pCZ0osT0FDRixDQUFDO0VBQ0gsQ0FBQztFQUVELE1BQU00QyxPQUFPLEdBQUdqQix3QkFBd0IsQ0FBQ3RGLE1BQU0sQ0FBQztFQUVoRCxJQUFJLENBQUN2eEIsT0FBTyxDQUFDc3hCLFdBQVcsRUFBRTtJQUN4QkMsTUFBTSxDQUFDLENBQUM7RUFDVjtFQUVBLE9BQU87SUFDTEEsTUFBTTtJQUNOekgsT0FBT0EsQ0FBQSxFQUFHO01BQ1JnTyxPQUFPLENBQUMsQ0FBQztJQUNYO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFYyxTQUFTMWQsZ0JBQWdCQSxDQUFDNGMsV0FBVyxFQUFFeEMsVUFBVSxFQUFnQjtFQUFBLElBQWR4MEIsT0FBTyxHQUFBcWtCLFNBQUEsQ0FBQW55QixNQUFBLFFBQUFteUIsU0FBQSxRQUFBM3hCLFNBQUEsR0FBQTJ4QixTQUFBLE1BQUcsQ0FBQyxDQUFDO0VBQzVFLE1BQU04VCxpQkFBaUIsR0FBRztJQUN4QmpNLFNBQVMsRUFBRWxzQixPQUFPLENBQUNrc0IsU0FBUyxJQUFJLFFBQVE7SUFDeEM2SSxRQUFRLEVBQUUvMEIsT0FBTyxDQUFDKzBCLFFBQVEsSUFBSSxVQUFVO0lBQ3hDajBCLE1BQU0sRUFBRWQsT0FBTyxDQUFDYyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDcXJCLElBQUksRUFBRW5zQixPQUFPLENBQUNtc0IsSUFBSSxLQUFLLEtBQUs7SUFDNUJxTCxLQUFLLEVBQUV4M0IsT0FBTyxDQUFDdzNCLEtBQUssS0FBSyxLQUFLO0lBQzlCbkcsSUFBSSxFQUFFcnhCLE9BQU8sQ0FBQ3F4QixJQUFJLEtBQUssSUFBSTtJQUMzQkMsV0FBVyxFQUFFdHhCLE9BQU8sQ0FBQ3N4QixXQUFXLEtBQUs7RUFDdkMsQ0FBQztFQUNELE1BQU15RixhQUFhLEdBQUdsRCxnQkFBZ0IsQ0FBQyxDQUFDO0VBRXhDLElBQUlrRCxhQUFhLEVBQUU7SUFDakIsT0FBT0Qsc0JBQXNCLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFeEMsVUFBVSxFQUFFMkQsaUJBQWlCLENBQUM7RUFDMUY7RUFFQSxNQUFNZixlQUFlLEdBQUduRCxrQkFBa0IsQ0FBQyxDQUFDO0VBRTVDLElBQUltRCxlQUFlLEVBQUU7SUFDbkIsT0FBT0Qsd0JBQXdCLENBQUNDLGVBQWUsRUFBRUosV0FBVyxFQUFFeEMsVUFBVSxFQUFFMkQsaUJBQWlCLENBQUM7RUFDOUY7RUFFQSxPQUFPSCxzQkFBc0IsQ0FBQ2hCLFdBQVcsRUFBRXhDLFVBQVUsRUFBRTJELGlCQUFpQixDQUFDO0FBQzNFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3WDRDO0FBRXJDLE1BQU14YSxJQUFJLEdBQUswTCxLQUFLLG9CQUFBcDNCLE1BQUEsQ0FBb0Iyb0IsMkVBQW9CLHdDQUFBM29CLE1BQUEsQ0FBaUNvM0IsS0FBSyxjQUFVO0FBQzVHLE1BQU16TCxVQUFVLEdBQUdBLENBQUEscUJBQUEzckIsTUFBQSxDQUFxQjJvQixvRUFBYSx5RUFBaUU7QUFDdEgsTUFBTTJDLFVBQVUsR0FBR0EsQ0FBQSxxQkFBQXRyQixNQUFBLENBQXFCMm9CLHdFQUFpQixjQUFVO0FBQ25FLE1BQU00QyxjQUFjLEdBQUl1UCxNQUFNLG9CQUFBOTZCLE1BQUEsQ0FBb0Iyb0IsNEVBQXFCLHNCQUFBM29CLE1BQUEsQ0FBZ0I4NkIsTUFBTSxXQUFRO0FBQ3JHLE1BQU16UCxTQUFTLEdBQUk0UCxhQUFhLHdCQUFBajdCLE1BQUEsQ0FDdkIyb0Isb0VBQWEsOEZBQUEzb0IsTUFBQSxDQUNYaTdCLGFBQWEseU5BSTlCO0FBRU0sTUFBTW5ELE9BQU8sbUJBQUE5M0IsTUFBQSxDQUFrQjJvQixxRUFBYyxvREFBQTNvQixNQUFBLENBQTZDMm9CLDBFQUFtQiwrQ0FBeUM7QUFFdEosTUFBTTFXLEtBQUssR0FBR3d6QixJQUFBO0VBQUEsSUFBQztJQUNwQnJPLEtBQUs7SUFDTHdELE9BQU87SUFDUEUsTUFBTTtJQUNOcEU7RUFDRixDQUFDLEdBQUErTyxJQUFBO0VBQUEsMkJBQUF6bEMsTUFBQSxDQUNlMm9CLG1FQUFZLE9BQUEzb0IsTUFBQSxDQUFJMm9CLG1FQUFZLDZDQUFBM29CLE1BQUEsQ0FBc0NvM0IsS0FBSyw0QkFBQXAzQixNQUFBLENBQ3JFMm9CLHFFQUFjLFNBQUEzb0IsTUFBQSxDQUFLNDZCLE9BQU8sK0JBQUE1NkIsTUFBQSxDQUMxQjJvQix5RUFBa0Isc0JBQUEzb0IsTUFBQSxDQUFnQjg2QixNQUFNLCtCQUFBOTZCLE1BQUEsQ0FDeEMyb0Isa0VBQVcsMkJBQUEzb0IsTUFBQSxDQUFxQjAyQixJQUFJO0FBQUEsQ0FFckQ7QUFFTSxNQUFNc0UsVUFBVSxHQUFHdUwsS0FBQTtFQUFBLElBQUM7SUFDekJuUCxLQUFLO0lBQ0w2RDtFQUNGLENBQUMsR0FBQXNMLEtBQUE7RUFBQSwyQkFBQXZtQyxNQUFBLENBQ2Uyb0IsMkVBQW9CLDZEQUFBM29CLE1BQUEsQ0FHckIyb0IsNEVBQXFCLDRIQUFBM29CLE1BQUEsQ0FJaEJvM0IsS0FBSyxxQ0FBQXAzQixNQUFBLENBRUoyb0IsMEVBQW1CLFNBQUEzb0IsTUFBQSxDQUFLbzNCLEtBQUssa0NBQUFwM0IsTUFBQSxDQUM5QjJvQiw0RUFBcUIsK0ZBQUEzb0IsTUFBQSxDQUNuQmk3QixhQUFhO0FBQUEsQ0FJbEM7QUFFTSxNQUFNcFAscUJBQXFCLEdBQUcrYSxLQUFBO0VBQUEsSUFBQztJQUNwQzlhLFVBQVU7SUFDVkUsYUFBYTtJQUNiRTtFQUNGLENBQUMsR0FBQTBhLEtBQUE7RUFBQSwyQkFBQTVtQyxNQUFBLENBQ2Uyb0IsNkVBQXNCLDZFQUFBM29CLE1BQUEsQ0FDSDJvQiw2RUFBc0IsNkNBQUEzb0IsTUFBQSxDQUF3QzhyQixVQUFVLFNBQUE5ckIsTUFBQSxDQUFLOHJCLFVBQVUsa0NBQUE5ckIsTUFBQSxDQUN4RzJvQixzRUFBZSxpREFBQTNvQixNQUFBLENBQ2Yyb0IsOEVBQXVCLGlEQUFBM29CLE1BQUEsQ0FDSjJvQix1RUFBZ0Isb0RBQUEzb0IsTUFBQSxDQUE2Q2dzQixhQUFhLFNBQUFoc0IsTUFBQSxDQUFLZ3NCLGFBQWEsdURBQUFoc0IsTUFBQSxDQUM1RjJvQix1RUFBZ0IsbURBQUEzb0IsTUFBQSxDQUE0Q2tzQixTQUFTLFNBQUFsc0IsTUFBQSxDQUFLa3NCLFNBQVM7QUFBQSxDQUd2SDtBQUVNLE1BQU02RSxVQUFVLEdBQUdBLENBQUNoZixJQUFJLEVBQUVzZixZQUFZLHNEQUFBcnhCLE1BQUEsQ0FHaEMyb0Isd0VBQWlCLGlDQUFBM29CLE1BQUEsQ0FDTitSLElBQUksY0FBQS9SLE1BQUEsQ0FDdEIrUixJQUFJLEtBQUtzZixZQUFZLEdBQUcsd0NBQXdDLEdBQUcsRUFBRSxpQkFBQXJ4QixNQUFBLENBRXJFK1IsSUFBSSxvQkFFVDtBQUVNLE1BQU15cEIsWUFBWSxHQUFJcEUsS0FBSyxvQkFBQXAzQixNQUFBLENBQW9CMm9CLGdFQUFTLCtCQUFBM29CLE1BQUEsQ0FBeUJvM0IsS0FBSyxXQUFRO0FBRTlGLE1BQU1rRyxPQUFPLEdBQUl2YSxDQUFDLElBQUs7RUFDNUIsTUFBTWtrQixTQUFTLEdBQUcsRUFBRTtFQUVwQixJQUFJbGtCLENBQUMsQ0FBQ3FFLElBQUksRUFBRTtJQUNWNmYsU0FBUyxDQUFDbm1DLElBQUksQ0FBQ2lpQixDQUFDLENBQUM2WixLQUFLLENBQUM7RUFDekI7RUFFQSxJQUFJN1osQ0FBQyxDQUFDb0UsT0FBTyxJQUFJcEUsQ0FBQyxDQUFDOFosUUFBUSxFQUFFO0lBQzNCb0ssU0FBUyxDQUFDbm1DLElBQUksQ0FBQ2lpQixDQUFDLENBQUM4WixRQUFRLENBQUM7RUFDNUI7RUFFQSxJQUFJOVosQ0FBQyxDQUFDc1csT0FBTyxJQUFJdFcsQ0FBQyxDQUFDZ2EsUUFBUSxFQUFFO0lBQzNCa0ssU0FBUyxDQUFDbm1DLElBQUksQ0FBQ2lpQixDQUFDLENBQUNnYSxRQUFRLENBQUM7RUFDNUI7RUFFQSxNQUFNbUssUUFBUSxHQUFHRCxTQUFTLENBQUNobkMsTUFBTSxtQkFBQUQsTUFBQSxDQUFrQjJvQixrRUFBVyxTQUFBM29CLE1BQUEsQ0FBS2luQyxTQUFTLENBQUMvbUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFXLEVBQUU7RUFFdEcsNEJBQUFGLE1BQUEsQ0FFTStpQixDQUFDLENBQUNxTixRQUFRLG9CQUFBcHdCLE1BQUEsQ0FBb0IraUIsQ0FBQyxDQUFDcU4sUUFBUSwrQkFBMEIsY0FBYyxjQUFBcHdCLE1BQUEsQ0FDaEYraUIsQ0FBQyxDQUFDeUUsY0FBYyxHQUFHLG9CQUFvQixHQUFHLEVBQUUsY0FBQXhuQixNQUFBLENBQzVDK2lCLENBQUMsQ0FBQzRaLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLGNBQUEzOEIsTUFBQSxDQUMxQytpQixDQUFDLENBQUNvRSxPQUFPLG9CQUFBbm5CLE1BQUEsQ0FBb0IraUIsQ0FBQyxDQUFDb0UsT0FBTyxJQUFLLEVBQUUsY0FBQW5uQixNQUFBLENBQzdDK2lCLENBQUMsQ0FBQ3NXLE9BQU8sb0JBQUFyNUIsTUFBQSxDQUFvQitpQixDQUFDLENBQUNzVyxPQUFPLElBQUssRUFBRSwyQkFBQXI1QixNQUFBLENBQ2pDK2lCLENBQUMsQ0FBQ3FVLEtBQUssd0JBQUFwM0IsTUFBQSxDQUNaMm9CLGtFQUFXLE9BQUEzb0IsTUFBQSxDQUFJK2lCLENBQUMsQ0FBQzJaLFlBQVksR0FBRy9ULG1FQUFZLEdBQUcsRUFBRSxvREFBQTNvQixNQUFBLENBRTlDK2lCLENBQUMsQ0FBQ3NhLFFBQVEsNkJBQUFyOUIsTUFBQSxDQUNSK2lCLENBQUMsQ0FBQ3FhLFNBQVMsZ0JBQUFwOUIsTUFBQSxDQUN2QitpQixDQUFDLENBQUMyWixZQUFZLEdBQUcscUJBQXFCLEdBQUcsRUFBRSxtQ0FBQTE4QixNQUFBLENBRTlCMm9CLGlFQUFVLFNBQUEzb0IsTUFBQSxDQUFLK2lCLENBQUMsQ0FBQ3FVLEtBQUsscUJBQUFwM0IsTUFBQSxDQUNuQ2tuQyxRQUFRO0FBR2hCLENBQUM7QUFFTSxNQUFNOWEsT0FBTyxHQUFJZ0wsS0FBSywyQkFBQXAzQixNQUFBLENBQ1Yyb0IscUVBQWMsc0JBQUEzb0IsTUFBQSxDQUFpQm8zQixLQUFLLGtRQUt0RDtBQUVNLE1BQU05SyxJQUFJLEdBQUk4SyxLQUFLLDJCQUFBcDNCLE1BQUEsQ0FDUDJvQixrRUFBVyxzQkFBQTNvQixNQUFBLENBQWlCbzNCLEtBQUssbVFBS25EO0FBRU0sTUFBTWdGLGtCQUFrQixtQkFBQXA4QixNQUFBLENBQWtCMm9CLHlFQUFrQixvREFBOEM7O0FBRWpIO0FBQ08sTUFBTWdULE9BQU8sR0FBSTJMLEdBQUcsSUFBSztFQUM5QixPQUFPO0lBQ0w1cUIsSUFBSSwyQ0FBQTFjLE1BQUEsQ0FBd0NzbkMsR0FBRyxPQUFBdG5DLE1BQUEsQ0FBSTJvQixxRUFBYyxRQUFJO0lBQ3JFb0QsS0FBSyxFQUFFO0VBQ1QsQ0FBQztBQUNILENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lEO0FBQzZDO0FBQ1o7QUFDakMsTUFBTTtFQUFFdEw7QUFBRyxDQUFDLEdBQUcrRCxvREFBSztBQUViLE1BQU00RCxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSXJXLElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLEVBQXVCO0VBQUEsSUFBckIwUSxRQUFRLEdBQUF1UCxTQUFBLENBQUFueUIsTUFBQSxRQUFBbXlCLFNBQUEsUUFBQTN4QixTQUFBLEdBQUEyeEIsU0FBQSxNQUFHLEtBQUs7RUFDMUQsU0FBU21WLEdBQUdBLENBQUN4MkIsTUFBTSxFQUFFO0lBQ25CLElBQUlBLE1BQU0sR0FBRyxFQUFFLEVBQUU7TUFDZixXQUFBL1EsTUFBQSxDQUFXK1EsTUFBTTtJQUNuQjtJQUNBLE9BQU9BLE1BQU07RUFDZjtFQUVBLElBQUk4UixRQUFRLEVBQUU7SUFDWixVQUFBN2lCLE1BQUEsQ0FBVStSLElBQUksT0FBQS9SLE1BQUEsQ0FBSXVuQyxHQUFHLENBQUN0MUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFBalMsTUFBQSxDQUFJdW5DLEdBQUcsQ0FBQ3AxQixHQUFHLENBQUM7RUFDOUM7RUFFQSxJQUFJOUQsSUFBSSxHQUFHLElBQUlHLElBQUksQ0FBQ3VELElBQUksRUFBRUUsS0FBSyxFQUFFRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDL0MsT0FBTzlELElBQUk7QUFDYixDQUFDO0FBRU0sTUFBTW9hLFdBQVcsR0FBR0EsQ0FBQytlLEdBQUcsRUFBRXg0QixNQUFNLEVBQUVzYSxNQUFNLEtBQUs7RUFDbEQsSUFBSTtJQUNGLE1BQU1qYixJQUFJLEdBQUcwQixpREFBUSxDQUFDeTNCLEdBQUcsRUFBRXg0QixNQUFNLEVBQUVzYSxNQUFNLENBQUM7SUFDMUMsTUFBTTFXLENBQUMsR0FBTTdELGlEQUFRLENBQUNWLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQ3VXLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFFbEQsT0FBTyxDQUNMMUIsUUFBUSxDQUFDdFEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUU7SUFDaEJzUSxRQUFRLENBQUN0USxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQUU7SUFDcEJzUSxRQUFRLENBQUN0USxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQ2hCO0VBQ0gsQ0FBQyxDQUFDLE9BQU1vSyxDQUFDLEVBQUU7SUFDVCxJQUFJeUQsRUFBRSxDQUFDekQsQ0FBQyxDQUFDaEYsT0FBTyxDQUFDLEVBQUU7TUFDakJxb0IsT0FBTyxDQUFDb0gsR0FBRyxDQUFDenFCLENBQUMsQ0FBQ2hGLE9BQU8sQ0FBQztJQUN4QjtJQUNBLE9BQU8sS0FBSztFQUNkO0FBQ0YsQ0FBQztBQUVNLE1BQU1xUSxPQUFPLEdBQUdBLENBQUMzTixLQUFLLEVBQUV5SyxHQUFHLEtBQUtpRCxTQUFTLENBQUMsR0FBRzFOLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRzBOLFNBQVMsQ0FBQyxHQUFHakQsR0FBRyxFQUFFLElBQUksQ0FBQztBQUVuRixNQUFNbUQsU0FBUyxHQUFHQSxDQUFDNU4sS0FBSyxFQUFFeUssR0FBRyxLQUFLaUQsU0FBUyxDQUFDLEdBQUcxTixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUkwTixTQUFTLENBQUMsR0FBR2pELEdBQUcsRUFBRSxJQUFJLENBQUM7QUFFdEYsTUFBTXVELFNBQVMsR0FBR0EsQ0FBQ2hPLEtBQUssRUFBRXlLLEdBQUcsS0FBSztFQUN2QyxPQUFPQSxHQUFHLENBQUN1RSxRQUFRLENBQUMsQ0FBQyxHQUFHaFAsS0FBSyxDQUFDZ1AsUUFBUSxDQUFDLENBQUMsR0FBSSxFQUFFLElBQUl2RSxHQUFHLENBQUM1TCxXQUFXLENBQUMsQ0FBQyxHQUFHbUIsS0FBSyxDQUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBRTtBQUM3RixDQUFDO0FBRU0sTUFBTWdQLGdCQUFnQixHQUFJckMsSUFBSSxJQUFLO0VBQ3hDLElBQUl6RixFQUFFLENBQUN5RixJQUFJLENBQUNtRCxPQUFPLENBQUM0YixPQUFPLENBQUMsSUFBSXhrQixFQUFFLENBQUN5RixJQUFJLENBQUNtRCxPQUFPLENBQUNxZSxXQUFXLENBQUMsSUFBSWpuQixFQUFFLENBQUN5RixJQUFJLENBQUNtRCxPQUFPLENBQUNzZSxZQUFZLENBQUMsRUFBRTtJQUM3RixPQUFPLElBQUk7RUFDYjtFQUVBLE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxNQUFNbmYsVUFBVSxHQUFHQSxDQUFDclQsS0FBSyxFQUFFNEksR0FBRyxLQUFLQSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUU3SSxLQUFLLENBQUMsQzs7Ozs7Ozs7OztBQ3ZEdkU7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxvTkFBb0c7QUFDeEosa0NBQWtDLG1CQUFPLENBQUMsc01BQTZGO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2SkFBNkosV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFX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O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMFBBQTBQLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsY0FBYyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGVBQWUsZUFBZSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxTQUFTLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLFFBQVEsT0FBTyxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLGNBQWMsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxTQUFTLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sUUFBUSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLGVBQWUsVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFV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SUFBSSxJQUFJLENBQUMsQ0FBQztFQUM5QixNQUFNbWYsUUFBUSxHQUFNaHBCLFFBQVEsQ0FBQzBULGdCQUFnQixDQUFDbVYsZ0JBQWdCLENBQUM7RUFFL0RHLFFBQVEsQ0FBQ3ZwQixPQUFPLENBQUVNLE9BQU8sSUFBSztJQUM1QmpSLE9BQU8sQ0FBQ3dRLEVBQUUsR0FBR1MsT0FBTztJQUNwQixNQUFNa3BCLEdBQUcsR0FBSSxJQUFJcmYsUUFBUSxDQUFDOWEsT0FBTyxDQUFDO0lBRWxDaTZCLFdBQVcsQ0FBQ2xuQyxJQUFJLENBQUNvbkMsR0FBRyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztFQUVGcmYsUUFBUSxDQUFDc2YsU0FBUyxHQUFHSCxXQUFXO0VBQ2hDLE9BQU9BLFdBQVc7QUFDcEIsQ0FBQztBQUVEbmYsUUFBUSxDQUFDRSxPQUFPLEdBQUd0bkIsc0VBQWtDO0FBRXJELElBQUl3ZCxRQUFRLENBQUNuQyxVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDK0wsUUFBUSxDQUFDaUMsSUFBSSxDQUFDLENBQUM7QUFDakIsQ0FBQyxNQUFNO0VBQ0w3TCxRQUFRLENBQUNnTyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0lBQ2xEcEUsUUFBUSxDQUFDaUMsSUFBSSxDQUFDLENBQUM7RUFDakIsQ0FBQyxDQUFDO0FBQ0o7QUFFQWxQLE1BQU0sQ0FBQ3dzQixtQkFBbUIsR0FBR3ZmLFFBQVE7QUFFckMsaUVBQWVBLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vY3VycmVuY3ktc3ltYm9sLW1hcEA1LjEuMC9ub2RlX21vZHVsZXMvY3VycmVuY3ktc3ltYm9sLW1hcC9jdXJyZW5jeS1zeW1ib2wtbWFwLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jdXJyZW5jeS1zeW1ib2wtbWFwQDUuMS4wL25vZGVfbW9kdWxlcy9jdXJyZW5jeS1zeW1ib2wtbWFwL21hcC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RydGltZUAxLjEuMi9ub2RlX21vZHVsZXMvc3RydGltZS9kaXN0L3N0cnRpbWUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hamF4LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hcnJheS9pc0FycmF5LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvY3VycmVuY3kvY3VycmVuY3lGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kYXRlL21vbnRoTGVuZ3RoLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2FkZENsYXNzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZGVzdHJveUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZWxlbWVudEZyb21TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZmluZEJ5Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9nZXRQYXJlbnRBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaXNJbnNpZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vc2V0Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2Z1bmN0aW9uL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2lzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOYU5Qb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOdW1lcmljLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvb2JqZWN0L2NhcGl0YWxpemVPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvcGljay5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvdHJhdmVyc2VPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvZGFzaFRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy90b1VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvdW5kZXJzY29yZVRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci10cmVlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9sb2NhbGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9zdHlsZXMvY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzPzcxOWUiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzP2VhOGYiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImNvbnN0IGN1cnJlbmN5U3ltYm9sTWFwID0gcmVxdWlyZSgnLi9tYXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFN5bWJvbEZyb21DdXJyZW5jeSAoY3VycmVuY3lDb2RlKSB7XG4gIGlmICh0eXBlb2YgY3VycmVuY3lDb2RlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IGNvZGUgPSBjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKVxuXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnJlbmN5U3ltYm9sTWFwLCBjb2RlKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeVN5bWJvbE1hcFtjb2RlXVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jdXJyZW5jeVN5bWJvbE1hcCA9IGN1cnJlbmN5U3ltYm9sTWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUVEOiAn2K8u2KUnLFxuICBBRk46ICfYiycsXG4gIEFMTDogJ0wnLFxuICBBTUQ6ICfWjycsXG4gIEFORzogJ8aSJyxcbiAgQU9BOiAnS3onLFxuICBBUlM6ICckJyxcbiAgQVVEOiAnJCcsXG4gIEFXRzogJ8aSJyxcbiAgQVpOOiAn4oK8JyxcbiAgQkFNOiAnS00nLFxuICBCQkQ6ICckJyxcbiAgQkRUOiAn4KezJyxcbiAgQkdOOiAn0LvQsicsXG4gIEJIRDogJy7Yry7YqCcsXG4gIEJJRjogJ0ZCdScsXG4gIEJNRDogJyQnLFxuICBCTkQ6ICckJyxcbiAgQk9COiAnJGInLFxuICBCT1Y6ICdCT1YnLFxuICBCUkw6ICdSJCcsXG4gIEJTRDogJyQnLFxuICBCVEM6ICfigr8nLFxuICBCVE46ICdOdS4nLFxuICBCV1A6ICdQJyxcbiAgQllOOiAnQnInLFxuICBCWVI6ICdCcicsXG4gIEJaRDogJ0JaJCcsXG4gIENBRDogJyQnLFxuICBDREY6ICdGQycsXG4gIENIRTogJ0NIRScsXG4gIENIRjogJ0NIRicsXG4gIENIVzogJ0NIVycsXG4gIENMRjogJ0NMRicsXG4gIENMUDogJyQnLFxuICBDTkg6ICfCpScsXG4gIENOWTogJ8KlJyxcbiAgQ09QOiAnJCcsXG4gIENPVTogJ0NPVScsXG4gIENSQzogJ+KCoScsXG4gIENVQzogJyQnLFxuICBDVVA6ICfigrEnLFxuICBDVkU6ICckJyxcbiAgQ1pLOiAnS8SNJyxcbiAgREpGOiAnRmRqJyxcbiAgREtLOiAna3InLFxuICBET1A6ICdSRCQnLFxuICBEWkQ6ICfYr9isJyxcbiAgRUVLOiAna3InLFxuICBFR1A6ICfCoycsXG4gIEVSTjogJ05maycsXG4gIEVUQjogJ0JyJyxcbiAgRVRIOiAnzp4nLFxuICBFVVI6ICfigqwnLFxuICBGSkQ6ICckJyxcbiAgRktQOiAnwqMnLFxuICBHQlA6ICfCoycsXG4gIEdFTDogJ+KCvicsXG4gIEdHUDogJ8KjJyxcbiAgR0hDOiAn4oK1JyxcbiAgR0hTOiAnR0jigrUnLFxuICBHSVA6ICfCoycsXG4gIEdNRDogJ0QnLFxuICBHTkY6ICdGRycsXG4gIEdUUTogJ1EnLFxuICBHWUQ6ICckJyxcbiAgSEtEOiAnJCcsXG4gIEhOTDogJ0wnLFxuICBIUks6ICdrbicsXG4gIEhURzogJ0cnLFxuICBIVUY6ICdGdCcsXG4gIElEUjogJ1JwJyxcbiAgSUxTOiAn4oKqJyxcbiAgSU1QOiAnwqMnLFxuICBJTlI6ICfigrknLFxuICBJUUQ6ICfYuS7YrycsXG4gIElSUjogJ++3vCcsXG4gIElTSzogJ2tyJyxcbiAgSkVQOiAnwqMnLFxuICBKTUQ6ICdKJCcsXG4gIEpPRDogJ0pEJyxcbiAgSlBZOiAnwqUnLFxuICBLRVM6ICdLU2gnLFxuICBLR1M6ICfQu9CyJyxcbiAgS0hSOiAn4Z+bJyxcbiAgS01GOiAnQ0YnLFxuICBLUFc6ICfigqknLFxuICBLUlc6ICfigqknLFxuICBLV0Q6ICdLRCcsXG4gIEtZRDogJyQnLFxuICBLWlQ6ICfigrgnLFxuICBMQUs6ICfigq0nLFxuICBMQlA6ICfCoycsXG4gIExLUjogJ+KCqCcsXG4gIExSRDogJyQnLFxuICBMU0w6ICdNJyxcbiAgTFRDOiAnxYEnLFxuICBMVEw6ICdMdCcsXG4gIExWTDogJ0xzJyxcbiAgTFlEOiAnTEQnLFxuICBNQUQ6ICdNQUQnLFxuICBNREw6ICdsZWknLFxuICBNR0E6ICdBcicsXG4gIE1LRDogJ9C00LXQvScsXG4gIE1NSzogJ0snLFxuICBNTlQ6ICfigq4nLFxuICBNT1A6ICdNT1AkJyxcbiAgTVJPOiAnVU0nLFxuICBNUlU6ICdVTScsXG4gIE1VUjogJ+KCqCcsXG4gIE1WUjogJ1JmJyxcbiAgTVdLOiAnTUsnLFxuICBNWE46ICckJyxcbiAgTVhWOiAnTVhWJyxcbiAgTVlSOiAnUk0nLFxuICBNWk46ICdNVCcsXG4gIE5BRDogJyQnLFxuICBOR046ICfigqYnLFxuICBOSU86ICdDJCcsXG4gIE5PSzogJ2tyJyxcbiAgTlBSOiAn4oKoJyxcbiAgTlpEOiAnJCcsXG4gIE9NUjogJ++3vCcsXG4gIFBBQjogJ0IvLicsXG4gIFBFTjogJ1MvLicsXG4gIFBHSzogJ0snLFxuICBQSFA6ICfigrEnLFxuICBQS1I6ICfigqgnLFxuICBQTE46ICd6xYInLFxuICBQWUc6ICdHcycsXG4gIFFBUjogJ++3vCcsXG4gIFJNQjogJ++/pScsXG4gIFJPTjogJ2xlaScsXG4gIFJTRDogJ9CU0LjQvS4nLFxuICBSVUI6ICfigr0nLFxuICBSV0Y6ICdS4oKjJyxcbiAgU0FSOiAn77e8JyxcbiAgU0JEOiAnJCcsXG4gIFNDUjogJ+KCqCcsXG4gIFNERzogJ9isLtizLicsXG4gIFNFSzogJ2tyJyxcbiAgU0dEOiAnUyQnLFxuICBTSFA6ICfCoycsXG4gIFNMTDogJ0xlJyxcbiAgU09TOiAnUycsXG4gIFNSRDogJyQnLFxuICBTU1A6ICfCoycsXG4gIFNURDogJ0RiJyxcbiAgU1ROOiAnRGInLFxuICBTVkM6ICckJyxcbiAgU1lQOiAnwqMnLFxuICBTWkw6ICdFJyxcbiAgVEhCOiAn4Li/JyxcbiAgVEpTOiAnU00nLFxuICBUTVQ6ICdUJyxcbiAgVE5EOiAn2K8u2KonLFxuICBUT1A6ICdUJCcsXG4gIFRSTDogJ+KCpCcsXG4gIFRSWTogJ+KCuicsXG4gIFRURDogJ1RUJCcsXG4gIFRWRDogJyQnLFxuICBUV0Q6ICdOVCQnLFxuICBUWlM6ICdUU2gnLFxuICBVQUg6ICfigrQnLFxuICBVR1g6ICdVU2gnLFxuICBVU0Q6ICckJyxcbiAgVVlJOiAnVVlJJyxcbiAgVVlVOiAnJFUnLFxuICBVWVc6ICdVWVcnLFxuICBVWlM6ICfQu9CyJyxcbiAgVkVGOiAnQnMnLFxuICBWRVM6ICdCcy5TJyxcbiAgVk5EOiAn4oKrJyxcbiAgVlVWOiAnVlQnLFxuICBXU1Q6ICdXUyQnLFxuICBYQUY6ICdGQ0ZBJyxcbiAgWEJUOiAnyYMnLFxuICBYQ0Q6ICckJyxcbiAgWE9GOiAnQ0ZBJyxcbiAgWFBGOiAn4oKjJyxcbiAgWFNVOiAnU3VjcmUnLFxuICBYVUE6ICdYVUEnLFxuICBZRVI6ICfvt7wnLFxuICBaQVI6ICdSJyxcbiAgWk1XOiAnWksnLFxuICBaV0Q6ICdaJCcsXG4gIFpXTDogJyQnXG59XG4iLCIvLyBnaXRodWIuY29tL3BpbmVhcHBsZW1hY2hpbmUvc3RydGltZS1qc1xuLy8gTUlUIGxpY2Vuc2UsIENvcHlyaWdodCAoYykgMjAxOCBTb3BoaWUgS2lyc2NobmVyIChzb3BoaWVrQHBpbmVhcHBsZW1hY2hpbmUuY29tKVxuLy8gUmVmZXJlbmNlczpcbi8vIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvZW4vc3N3X2libV9pXzcxL3J0cmVmL3N0cnB0aS5odG1cbi8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvbGliYy9tYW51YWwvaHRtbF9ub2RlL0Zvcm1hdHRpbmctQ2FsZW5kYXItVGltZS5odG1sXG4vLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2xpYmMvbWFudWFsL2h0bWxfbm9kZS9Mb3dfMDAyZExldmVsLVRpbWUtU3RyaW5nLVBhcnNpbmcuaHRtbFxuLy8gaHR0cDovL21hbjcub3JnL2xpbnV4L21hbi1wYWdlcy9tYW4zL3N0cnB0aW1lLjMuaHRtbFxuLy8gaHR0cHM6Ly9hcGlkb2NrLmNvbS9ydWJ5L0RhdGVUaW1lL3N0cmZ0aW1lXG4vLyBodHRwOi8vc3RyZnRpbWUub3JnL1xuXG5cbmZ1bmN0aW9uIGdldEZvcm1hdE9wdGlvbnModGltZXpvbmUsIG9wdGlvbnMpe1xuICAgIGxldCB1c2VPcHRpb25zO1xuICAgIGxldCB0eiA9IHVuZGVmaW5lZDtcbiAgICBpZihcbiAgICAgICAgdGltZXpvbmUgPT09IG51bGwgfHwgdGltZXpvbmUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBOdW1iZXIuaXNGaW5pdGUodGltZXpvbmUpIHx8IHR5cGVvZih0aW1lem9uZSkgPT09IFwic3RyaW5nXCJcbiAgICApe1xuICAgICAgICB0eiA9IHRpbWV6b25lO1xuICAgICAgICB1c2VPcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9ZWxzZSBpZih0aW1lem9uZSAmJiAhb3B0aW9ucyl7XG4gICAgICAgIHVzZU9wdGlvbnMgPSB0aW1lem9uZTtcbiAgICAgICAgdHogPSB1c2VPcHRpb25zLnR6O1xuICAgIH1lbHNle1xuICAgICAgICB1c2VPcHRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR6OiB0eixcbiAgICAgICAgb3B0aW9uczogdXNlT3B0aW9ucyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldE1pbnV0ZXMoZGF0ZSwgdHope1xuICAgIGlmKHR6ID09PSBudWxsIHx8IHR6ID09PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9ZWxzZSBpZih0eiA+PSAtMTYgJiYgdHogPD0gKzE2KXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoNjAgKiB0eik7XG4gICAgfWVsc2UgaWYoTnVtYmVyLmlzRmluaXRlKHR6KSl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHR6KTtcbiAgICB9ZWxzZSBpZih0eiA9PT0gXCJsb2NhbFwiKXtcbiAgICAgICAgcmV0dXJuIC0oZGF0ZSB8fCBuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1lbHNle1xuICAgICAgICBjb25zdCB0elVwcGVyID0gU3RyaW5nKHR6KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZih0elVwcGVyIGluIGRlZmF1bHRUaW1lem9uZU5hbWVzKXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguZmxvb3IoNjAgKiBkZWZhdWx0VGltZXpvbmVOYW1lc1t0elVwcGVyXSk7XG4gICAgICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUob2Zmc2V0KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0aW1lem9uZSBvcHRpb24gXCIke3R6fVwiLmApO1xufVxuXG5mdW5jdGlvbiBzdHJmdGltZShkYXRlLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBpZihOdW1iZXIuaXNGaW5pdGUoZGF0ZSkpe1xuICAgICAgICAvLyBBY2NlcHQgdW5peCB0aW1lc3RhbXBzIChtaWxsaXNlY29uZHMgc2luY2UgZXBvY2gpXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9ZWxzZSBpZighZGF0ZSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGUgaW5wdXQgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YoZGF0ZS50b0RhdGUpID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL21vbWVudFxuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2RheWpzXG4gICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpO1xuICAgIH1lbHNlIGlmKHR5cGVvZihkYXRlLnRvSlNEYXRlKSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgLy8gU3VwcG9ydCBkYXRlIG9iamVjdHMgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9sdXhvblxuICAgICAgICBkYXRlID0gZGF0ZS50b0pTRGF0ZSgpO1xuICAgIH1cbiAgICBpZighKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgRGF0ZSBpbnN0YW5jZSBmcm9tIGRhdGUgaW5wdXQuXCIpO1xuICAgIH1cbiAgICBjb25zdCB0b2tlbnMgPSBUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KTtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKGRhdGUsIHVzZU9wdGlvbnMudHopO1xuICAgIGNvbnN0IHR6RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGlmKHRpbWV6b25lT2Zmc2V0TWludXRlcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdHpEYXRlLnNldFVUQ01pbnV0ZXMoXG4gICAgICAgICAgICBkYXRlLmdldFVUQ01pbnV0ZXMoKSArXG4gICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yKGxldCB0b2tlbiBvZiB0b2tlbnMpe1xuICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZSl7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW4ud3JpdGUodHpEYXRlLCBcIlwiLCB1c2VPcHRpb25zLm9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgICAgIH1lbHNlIGlmKHRva2VuIGluc3RhbmNlb2YgRGlyZWN0aXZlLlRva2VuKXtcbiAgICAgICAgICAgIG91dHB1dCArPSB0b2tlbi53cml0ZSh0ekRhdGUsIHVzZU9wdGlvbnMub3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gc3RycHRpbWUodGltZXN0YW1wLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aW1lc3RhbXAsIGZvcm1hdCk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKHVuZGVmaW5lZCwgdXNlT3B0aW9ucy50eik7XG4gICAgaWYodGltZXpvbmVPZmZzZXRNaW51dGVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBwYXJzZXIudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGltZXpvbmVPZmZzZXRNaW51dGVzO1xuICAgIH1cbiAgICBpZih1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICBmb3IobGV0IGtleSBpbiB1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICAgICAgcGFyc2VyW2tleV0gPSB1c2VPcHRpb25zLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0LmdldERhdGUoKTtcbn1cblxuY29uc3Qgc3RydGltZSA9IHtcbiAgICBzdHJmdGltZTogc3RyZnRpbWUsXG4gICAgc3RycHRpbWU6IHN0cnB0aW1lLFxufTtcblxuY29uc3QgZW5nbGlzaCA9IHtcbiAgICBlcmFOYW1lczogW1xuICAgICAgICBcIkNFXCIsIFwiQkNFXCJcbiAgICBdLFxuICAgIG1lcmlkaWVtTmFtZXM6IFtcbiAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICBdLFxuICAgIHNob3J0V2Vla2RheU5hbWVzOiBbXG4gICAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJcbiAgICBdLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6IFtcbiAgICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgXSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIixcbiAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgIF0sXG4gICAgbG9uZ01vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXSxcbiAgICBvcmRpbmFsVHJhbnNmb3JtOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IobnVtYmVyICUgMTApO1xuICAgICAgICBpZihudW1iZXIgPiAzICYmIG51bWJlciA8PSAyMCkgcmV0dXJuIGAke251bWJlcn10aGA7XG4gICAgICAgIGlmKGRpZ2l0ID09PSAxKSByZXR1cm4gYCR7bnVtYmVyfXN0YDtcbiAgICAgICAgZWxzZSBpZihkaWdpdCA9PT0gMikgcmV0dXJuIGAke251bWJlcn1uZGA7XG4gICAgICAgIGVsc2UgaWYoZGlnaXQgPT09IDMpIHJldHVybiBgJHtudW1iZXJ9cmRgO1xuICAgICAgICBlbHNlIHJldHVybiBgJHtudW1iZXJ9dGhgO1xuICAgIH0sXG59O1xuXG5cbmZ1bmN0aW9uIGxlZnRQYWQoY2hhciwgbGVuZ3RoLCB0ZXh0KXtcbiAgICBsZXQgc3RyaW5nID0gU3RyaW5nKHRleHQpO1xuICAgIHdoaWxlKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICBzdHJpbmcgPSBjaGFyICsgc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRpbWV6b25lT2Zmc2V0KG9mZnNldE1pbnV0ZXMsIG1vZGlmaWVyKXtcbiAgICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXRNaW51dGVzKTtcbiAgICBjb25zdCBzaWduID0gKG9mZnNldE1pbnV0ZXMgPj0gMCA/IFwiK1wiIDogXCItXCIpO1xuICAgIGNvbnN0IGhvdXIgPSBsZWZ0UGFkKFwiMFwiLCAyLCBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSk7XG4gICAgY29uc3QgbWludXRlID0gbGVmdFBhZChcIjBcIiwgMiwgYWJzT2Zmc2V0ICUgNjApO1xuICAgIGlmKG1vZGlmaWVyID09PSBcIjo6XCIpe1xuICAgICAgICByZXR1cm4gc2lnbiArIGhvdXIgKyBcIjpcIiArIG1pbnV0ZSArIFwiOjAwXCI7XG4gICAgfWVsc2UgaWYobW9kaWZpZXIgPT09IFwiOlwiKXtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBob3VyICsgXCI6XCIgKyBtaW51dGU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBzaWduICsgaG91ciArIG1pbnV0ZTtcbiAgICB9XG59XG5cbi8vIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIGdpdmVuIGFuIGlucHV0IERhdGUuXG4vLyBSZXR1cm5zIDAgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4vLyBodHRwczovL3d3dy5xdW9yYS5jb20vSG93LWRvZXMtVG9tb2hpa28tU2FrYW1vdG9zLUFsZ29yaXRobS13b3JrL2Fuc3dlci9SYXppbWFuLVQtVj9zcmlkPXUySE5YXG5mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSl7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFswLCAzLCAyLCA1LCAwLCAzLCA1LCAxLCA0LCA2LCAyLCA0XTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGlmKG1vbnRoIDwgMil7XG4gICAgICAgIHllYXItLTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2Zmc2V0c1ttb250aF0gKyB5ZWFyICsgZGF5ICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG4vLyBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBhcyBhIG51bWJlciAoMS0zNjYpXG5mdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgbGVuZ3RocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3QgbW9udGhzID0gbGVuZ3Rocy5zbGljZSgwLCBkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKSArIChcbiAgICAgICAgKG1vbnRocy5sZW5ndGggJiYgbW9udGhzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpKSB8fCAwXG4gICAgKTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIFN1bmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZGF5T2ZZZWFyICsgKGZpcnN0RGF5T2ZXZWVrIHx8IDcpIC0gMSkgLyA3KTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIE1vbmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3Qgc3VuZGF5V2VlayA9IE1hdGguZmxvb3IoKGRheU9mWWVhciArIChmaXJzdERheU9mV2VlayB8fCA3KSAtIDEpIC8gNyk7XG4gICAgcmV0dXJuIHN1bmRheVdlZWsgLSAoZGF5T2ZXZWVrID09PSAwID8gMSA6IDApICsgKGZpcnN0RGF5T2ZXZWVrID09PSAxID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKXtcbiAgICBjb25zdCBwcmlvclllYXIgPSB5ZWFyIC0gMTtcbiAgICBjb25zdCBhID0gKHllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3IoeWVhciAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgY29uc3QgYiA9IChwcmlvclllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHByaW9yWWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgcmV0dXJuIGEgPT09IDQgfHwgYiA9PT0gMyA/IDUzIDogNTI7XG59XG5cbi8vIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIHllYXJcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldElTT1dlZWtPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKCgxMCArIGRheU9mWWVhciAtIChkYXlPZldlZWsgfHwgNykpIC8gNyk7XG4gICAgaWYod2Vla051bWJlciA8IDEpe1xuICAgICAgICByZXR1cm4gZ2V0SVNPV2Vla3NJblllYXIoeWVhciAtIDEpO1xuICAgIH1lbHNlIGlmKHdlZWtOdW1iZXIgPiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKSl7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gd2Vla051bWJlcjtcbiAgICB9XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbmZ1bmN0aW9uIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKXtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBnZXREYXlPZldlZWsoZGF0ZSk7XG4gICAgY29uc3Qgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKDEwICsgZGF5T2ZZZWFyIC0gKGRheU9mV2VlayB8fCA3KSkgLyA3KTtcbiAgICBpZih3ZWVrTnVtYmVyIDwgMSl7XG4gICAgICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgICB9ZWxzZSBpZih3ZWVrTnVtYmVyID4gZ2V0SVNPV2Vla3NJblllYXIoeWVhcikpe1xuICAgICAgICByZXR1cm4geWVhciArIDE7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cbn1cblxuY2xhc3MgRGlyZWN0aXZle1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgICAgICAvLyBMaXN0IG9mIHBvc3NpYmxlIG5hbWVzIGZvciB0aGlzIGRpcmVjdGl2ZVxuICAgICAgICB0aGlzLm5hbWVzID0gb3B0aW9ucy5uYW1lcztcbiAgICAgICAgLy8gUGFkIG51bWJlcnMgdG8gdGhpcyBsZW5ndGggKG5vcm1hbGx5KVxuICAgICAgICB0aGlzLnBhZExlbmd0aCA9IG9wdGlvbnMucGFkTGVuZ3RoO1xuICAgICAgICAvLyBBIGxpa2VseSAoYnV0IG5vdCBzdHJpY3QpIGxlbmd0aCB0byBiZSB1c2VkIHdoZW4gcmVzb2x2aW5nXG4gICAgICAgIC8vIGFtYmlndW91cyBwYXJzaW5nIGlucHV0c1xuICAgICAgICB0aGlzLmxpa2VseUxlbmd0aCA9IG9wdGlvbnMubGlrZWx5TGVuZ3RoO1xuICAgICAgICAvLyBJbmRpY2F0ZXMgdGhhdCB0aGlzIGRpcmVjdGl2ZSB1c2VzIHRleHQgKGFzIG9wcG9zZWQgdG8gbnVtYmVycylcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAvLyBUaGUgbWluaW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5taW5pbXVtID0gb3B0aW9ucy5taW5pbXVtO1xuICAgICAgICAvLyBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gb3B0aW9ucy5tYXhpbXVtO1xuICAgICAgICAvLyBXaGV0aGVyIHRoaXMgZGlyZWN0aXZlIHJlcHJlc2VudHMgYSBudW1iZXIgdGhhdCBjYW4gYmUgbmVnYXRpdmVcbiAgICAgICAgdGhpcy5jYW5CZU5lZ2F0aXZlID0gb3B0aW9ucy5jYW5CZU5lZ2F0aXZlO1xuICAgICAgICAvLyBUaGlzIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGJlIHJld3JpdHRlbiB1c2luZyBhIGNvbWJpbmF0aW9uIG9mXG4gICAgICAgIC8vIG90aGVyIGRpcmVjdGl2ZXNcbiAgICAgICAgdGhpcy5yZXdyaXRlID0gb3B0aW9ucy5yZXdyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBwYXJzZSBjb250ZW50IGZyb20gYSBzdHJpbmdcbiAgICAgICAgdGhpcy5wYXJzZUZ1bmN0aW9uID0gb3B0aW9ucy5wYXJzZTtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gd3JpdGUgY29udGVudCBhcyBhIHN0cmluZywgZ2l2ZW4gYSBkYXRlIHRvIGZvcm1hdFxuICAgICAgICB0aGlzLndyaXRlRnVuY3Rpb24gPSBvcHRpb25zLndyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBzdG9yZSBhIHBhcnNlZCBudW1lcmljIHZhbHVlXG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbiA9IG9wdGlvbnMuc3RvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRCeU5hbWUobmFtZSl7XG4gICAgICAgIGZvcihsZXQgZGlyZWN0aXZlIG9mIERpcmVjdGl2ZS5saXN0KXtcbiAgICAgICAgICAgIGlmKGRpcmVjdGl2ZS5uYW1lcy5pbmRleE9mKG5hbWUpID49IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5CZU5lZ2F0aXZlO1xuICAgIH1cbiAgICBnZXRMaWtlbHlMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlrZWx5TGVuZ3RoO1xuICAgIH1cbiAgICBnZXRSZXdyaXRlUGFyc2VkKHBhcnNlRm9ybWF0U3RyaW5nKXtcbiAgICAgICAgaWYoIXRoaXMucmV3cml0ZVBhcnNlZFZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlID0gcGFyc2VGb3JtYXRTdHJpbmcodGhpcy5yZXdyaXRlKTtcbiAgICAgICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdGhpcy5yZXdyaXRlUGFyc2VkVmFsdWUpe1xuICAgICAgICAgICAgICAgIHRva2VuLmV4cGFuZGVkRnJvbSA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlO1xuICAgIH1cbiAgICBoYXNQYXJzZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyc2VGdW5jdGlvbjtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gISF0aGlzLnN0b3JlRnVuY3Rpb247XG4gICAgfVxuICAgIHBhcnNlKHBhcnNlcil7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24uY2FsbChwYXJzZXIpO1xuICAgIH1cbiAgICBzdG9yZShwYXJzZXIsIG51bWJlcil7XG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyl7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgfVxuICAgIG51bWJlckluQm91bmRzKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICghTnVtYmVyLmlzRmluaXRlKHRoaXMubWluaW11bSkgfHwgdmFsdWUgPj0gdGhpcy5taW5pbXVtKSAmJlxuICAgICAgICAgICAgKCFOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSB8fCB2YWx1ZSA8PSB0aGlzLm1heGltdW0pXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldEJvdW5kc1N0cmluZygpe1xuICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sIC4uLl1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFsuLi4sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIFwiJVwiICsgdGhpcy5uYW1lc1swXTtcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5Ub2tlbiA9IGNsYXNzIERpcmVjdGl2ZVRva2Vue1xuICAgIGNvbnN0cnVjdG9yKG1vZGlmaWVyLCBkaXJlY3RpdmUpe1xuICAgICAgICB0aGlzLm1vZGlmaWVyID0gbW9kaWZpZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gZGlyZWN0aXZlO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWVyID09PSBcIjpcIjtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuY2FuQmVOZWdhdGl2ZTtcbiAgICB9XG4gICAgZ2V0TGlrZWx5TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZS5saWtlbHlMZW5ndGg7XG4gICAgfVxuICAgIGhhc1BhcnNlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmhhc1BhcnNlRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuaGFzU3RvcmVGdW5jdGlvbigpO1xuICAgIH1cbiAgICBwYXJzZShwYXJzZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUucGFyc2VGdW5jdGlvbi5jYWxsKHBhcnNlciwgdGhpcy5tb2RpZmllcik7XG4gICAgfVxuICAgIHN0b3JlKHBhcnNlciwgbnVtYmVyKXtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kaXJlY3RpdmUud3JpdGUoZGF0ZSwgdGhpcy5tb2RpZmllciwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgaWYodGhpcy5tb2RpZmllciA9PT0gXCJeXCIpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICBpZih0eXBlb2YocmVzdWx0KSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyID0gcmVzdWx0U3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdXBwZXIgIT09IHJlc3VsdFN0cmluZyA/IHVwcGVyIDogcmVzdWx0U3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kaWZpZXIgPT09IFwiX1wiICYmIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gbGVmdFBhZChcIiBcIiwgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoLCByZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIl9cIiAmJiB0aGlzLmRpcmVjdGl2ZS50ZXh0KXtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcocmVzdWx0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIi1cIiAmJiB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIjpcIiAmJiAhdGhpcy5kaXJlY3RpdmUudGV4dCl7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKG9wdGlvbnMgJiYgb3B0aW9ucy5vcmRpbmFsVHJhbnNmb3JtKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgfWVsc2UgaWYoIXRoaXMuZGlyZWN0aXZlLnRleHQgJiYgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID49IDAgP1xuICAgICAgICAgICAgICAgIGxlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgcmVzdWx0KSA6XG4gICAgICAgICAgICAgICAgYC0ke2xlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgLXJlc3VsdCl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbnVtYmVySW5Cb3VuZHModmFsdWUpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUubnVtYmVySW5Cb3VuZHModmFsdWUpO1xuICAgIH1cbiAgICBnZXRCb3VuZHNTdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmdldEJvdW5kc1N0cmluZygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpe1xuICAgICAgICByZXR1cm4gXCIlXCIgKyB0aGlzLm1vZGlmaWVyICsgdGhpcy5kaXJlY3RpdmUubmFtZXNbMF07XG4gICAgfVxufVxuXG5EaXJlY3RpdmUuU3RyaW5nVG9rZW4gPSBjbGFzcyBEaXJlY3RpdmVTdHJpbmdUb2tlbntcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmcpe1xuICAgICAgICB0aGlzLnN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYWRkQ2hhcmFjdGVyKGNoKXtcbiAgICAgICAgdGhpcy5zdHJpbmcgKz0gY2g7XG4gICAgfVxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5saXN0ID0gW1xuICAgIC8vIEFiYnJldmlhdGVkIHdlZWtkYXkgbmFtZVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiYVwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmRheU9mV2VlayA9IHRoaXMucGFyc2VXZWVrZGF5TmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMuc2hvcnRXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5zaG9ydFdlZWtkYXlOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ0RheSgpICUgN107XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyB3ZWVrZGF5IG5hbWVcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkFcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSB0aGlzLnBhcnNlV2Vla2RheU5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLmxvbmdXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nV2Vla2RheU5hbWVzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzW2RhdGUuZ2V0VVRDRGF5KCkgJSA3XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBYmJyZXZpYXRlZCBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJiXCIsIFwiaFwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gMSArIHRoaXMucGFyc2VNb250aE5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLnNob3J0TW9udGhOYW1lcykgfHxcbiAgICAgICAgICAgICAgICBlbmdsaXNoLnNob3J0TW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJCXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSAxICsgdGhpcy5wYXJzZU1vbnRoTmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMubG9uZ01vbnRoTmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nTW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gQ29tYmluYXRpb24gZGF0ZSBhbmQgdGltZSwgc2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImNcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVlcIixcbiAgICB9KSxcbiAgICAvLyBDZW50dXJ5IChjb21wbGVtZW50cyAleSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkNcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmNlbnR1cnkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSAvIDEwMCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IGRheSBvZiBtb250aFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZFwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDMxLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJW0vJWQvJXlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkRcIiwgXCJ4XCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVtLyVkLyV5XCIsXG4gICAgfSksXG4gICAgLy8gRGF5IG9mIG1vbnRoIHBhZGRlZCB3aXRoIHNwYWNlcyAoc2FtZSBhcyBcIiVfZFwiKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZVwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAzMSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmRheU9mTW9udGggPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBpZighbW9kaWZpZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0UGFkKFwiIFwiLCAyLCBkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2l4LWRpZ2l0IG1pY3Jvc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJmXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDYsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5OTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAxMDAwICogZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzICVZLSVtLSVkXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJGXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVZLSVtLSVkXCIsXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImdcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKSAlIDEwMDtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBGdWxsIElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkdcIl0sXG4gICAgICAgIHBhZExlbmd0aDogNCxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA0LFxuICAgICAgICBjYW5CZU5lZ2F0aXZlOiB0cnVlLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgaG91ciAoMC0yMylcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkhcIiwgXCJrXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogMjMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBob3VyICgxLTEyKSB0byBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggJXAgKEFNL1BNKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiSVwiLCBcImxcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAxMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRVVENIb3VycygpICUgMTIpIHx8IDEyO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIERheSBpbiB5ZWFyXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJqXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMzY2LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZZZWFyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFRocmVlLWRpZ2l0IG1pbGxpc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJMXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBtb250aCBudW1iZXIgKDEtMTIpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJtXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMTIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIDEgKyBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IG1pbnV0ZSAoMC01OSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIk1cIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICBtYXhpbXVtOiA1OSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEFNIG9yIFBNICh1cHBlcmNhc2UpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJwXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBTSBvciBQTSAobG93ZXJjYXNlKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiUFwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIE51bWJlciBvZiBtaXJjb3NlY29uZHMgc2luY2UgZXBvY2hcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlFcIl0sXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAqIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgXCIlSTolTTolUyAlcFwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJyXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVJOiVNOiVTICVwXCIsXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVIOiVNXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlJcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJUg6JU1cIixcbiAgICB9KSxcbiAgICAvLyBOdW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBlcG9jaFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wic1wiXSxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBzZWNvbmQgKDAtNjEpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJTXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNjEsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbig1OSwgZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJUg6JU06JVNcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlRcIiwgXCJYXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVIOiVNOiVTXCIsXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgxLTcpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ1XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDcsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpIHx8IDc7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2VlayBvZiB0aGUgeWVhciwgc3RhcnRpbmcgd2l0aCBTdW5kYXkgKDAtNTMpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJVXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNTMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldFdlZWtPZlllYXJGcm9tU3VuZGF5KGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFZNUyBkYXRlLCBzYW1lIGFzIFwiJWUtJWItJVlcIlxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1widlwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlZS0lYi0lWVwiLFxuICAgIH0pLFxuICAgIC8vIElTTyA4NjAxOjE5ODggd2VlayBudW1iZXIgKDEtNTMpLCBjb21wbGVtZW50cyAlZy8lR1xuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiVlwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvV2Vla09mWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtPZlllYXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggU3VuZGF5ICgwLTYpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ3XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDYsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFdlZWsgb2YgdGhlIHllYXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgwLTUzKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiV1wiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgeWVhclxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wieVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy50d29EaWdpdFllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDA7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRnVsbCB5ZWFyICh1c3VhbGx5IGZvdXItZGlnaXQsIGJ1dCBub3Qgc3RyaWN0bHkgc28pXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJZXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDQsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNCxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgLy8gTW9kaWZpZXIgXCJeXCIgcHJvZHVjZXMgdW5zaWduZWQgeWVhciwgZm9yIGNvbWJpbmF0aW9uIHdpdGggZXJhIFwiJSNcIlxuICAgICAgICAgICAgaWYoeWVhciA8PSAwICYmIG1vZGlmaWVyID09PSBcIl5cIikgcmV0dXJuIDEgLSB5ZWFyO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4geWVhcjtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUaW1lem9uZSBvZmZzZXQgZS5nLiArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wielwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKG1vZGlmaWVyKXtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVGltZXpvbmUgb2Zmc2V0IG9yIG5hbWUgZS5nLiBVVEMgb3IgR01UIG9yIEVTVCBvciArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiWlwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA1LFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24obW9kaWZpZXIpe1xuICAgICAgICAgICAgY29uc3QgdHpMaXN0ID0gdGhpcy5nZXRUaW1lem9uZU5hbWVMaXN0KCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyc2VJbmRleEluTGlzdCh0ekxpc3QpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXMgPSA2MCAqIHRoaXMudGltZXpvbmVOYW1lc1t0ekxpc3RbaW5kZXhdXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYob2Zmc2V0ID09PSAwKSByZXR1cm4gXCJVVENcIjtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVaICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIitcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVogJVlcIixcbiAgICB9KSxcbiAgICAvLyBFcmEgKEJDL0JDRSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIiNcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5lcmEgPSB0aGlzLnBhcnNlRXJhTmFtZSgpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPD0gMCA/IDEgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLmVyYU5hbWVzKSB8fCBlbmdsaXNoLmVyYU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbl07XG5cbi8vIFRoZSBhc3NlcnRpb24tZXJyb3IgcGFja2FnZSB3YXMgdXNlZCBhcyBhIGJhc2lzIGZvciB0aGUgVGltZXN0YW1wUGFyc2VFcnJvciB0eXBlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2hhaWpzL2Fzc2VydGlvbi1lcnJvci9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vLyBUaGUgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFRpbWVzdGFtcFBhcnNlRXJyb3IocmVhc29uLCBwYXJzZXIpe1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5mb3JtYXQgPSBwYXJzZXIuZm9ybWF0O1xuICAgIHRoaXMudGltZXN0YW1wID0gcGFyc2VyLnN0cmluZztcbiAgICB0aGlzLnRva2VuID0gcGFyc2VyLmN1cnJlbnRUb2tlbjtcbiAgICB0aGlzLmluZGV4ID0gcGFyc2VyLmluZGV4O1xuICAgIGlmKHRoaXMudG9rZW4gJiYgdGhpcy50b2tlbi5leHBhbmRlZEZyb20gJiYgdGhpcy5pbmRleCAhPT0gdW5kZWZpbmVkKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGAoZXhwYW5kZWQgZnJvbSBcIiR7dGhpcy50b2tlbi5leHBhbmRlZEZyb219XCIpIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuICYmIHRoaXMuaW5kZXggIT09IHVuZGVmaW5lZCkgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRva2VuIFwiJHt0aGlzLnRva2VufVwiIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGBpbiBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiAke3RoaXMucmVhc29ufWBcbiAgICApO1xuICAgIGVsc2UgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHdpdGggZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogJHt0aGlzLnJlYXNvbn1gXG4gICAgKTtcbiAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sI2Vycm9yc19lcnJvcl9jYXB0dXJlc3RhY2t0cmFjZV90YXJnZXRvYmplY3RfY29uc3RydWN0b3JvcHRcbiAgICBpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSl7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1lbHNle1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUHJvdG90eXBlIHdyYW5nbGluZ1xuVGltZXN0YW1wUGFyc2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJUaW1lc3RhbXBQYXJzZUVycm9yXCI7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRpbWVzdGFtcFBhcnNlRXJyb3I7XG5cblxuZnVuY3Rpb24gaXNEaWdpdChjaCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgY2ggPT09IFwiMFwiIHx8IGNoID09PSBcIjFcIiB8fCBjaCA9PT0gXCIyXCIgfHwgY2ggPT09IFwiM1wiIHx8IGNoID09PSBcIjRcIiB8fFxuICAgICAgICBjaCA9PT0gXCI1XCIgfHwgY2ggPT09IFwiNlwiIHx8IGNoID09PSBcIjdcIiB8fCBjaCA9PT0gXCI4XCIgfHwgY2ggPT09IFwiOVwiXG4gICAgKTtcbn1cblxuLy8gTWF0Y2hlcyBHTlUgQyBzdHJwdGltZSBiZWhhdmlvclxuLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9saWJjL21hbnVhbC9odG1sX25vZGUvTG93XzAwMmRMZXZlbC1UaW1lLVN0cmluZy1QYXJzaW5nLmh0bWxcbmZ1bmN0aW9uIGdldFllYXJGcm9tVHdvRGlnaXRzKHllYXIpe1xuICAgIHJldHVybiB5ZWFyICsgKHllYXIgPD0gNjggPyAyMDAwIDogMTkwMCk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5cyA+PSBkYXlPZlllYXIpIHJldHVybiBpO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIDEyO1xufVxuXG5mdW5jdGlvbiBnZXREYXlPZk1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5T2ZZZWFyIC0gZGF5cyA8PSBtb250aHNbaV0pIHJldHVybiBkYXlPZlllYXIgLSBkYXlzO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mWWVhciAtIGRheXM7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldERhdGVGcm9tSVNPV2Vla0RhdGUocGFyc2VyLCBpc29ZZWFyLCBpc29XZWVrT2ZZZWFyLCBkYXlPZldlZWspe1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGlzb1llYXIpO1xuICAgIGNvbnN0IHdlZWtkYXlPZkphbjQgPSAoKDMgKyBmaXJzdERheU9mV2VlaykgJSA3KSB8fCA3O1xuICAgIGNvbnN0IGRheXNJblllYXIgPSBpc0xlYXBZZWFyKGlzb1llYXIpID8gMzY2IDogMzY1O1xuICAgIGxldCBkYXlPZlllYXIgPSA3ICogaXNvV2Vla09mWWVhciArIChkYXlPZldlZWsgfHwgNykgLSB3ZWVrZGF5T2ZKYW40IC0gMztcbiAgICBpZihkYXlPZlllYXIgPCAxKXtcbiAgICAgICAgcGFyc2VyLnllYXIgPSBpc29ZZWFyIC0gMTtcbiAgICAgICAgZGF5T2ZZZWFyICs9IGRheXNJblllYXI7XG4gICAgfWVsc2UgaWYoZGF5T2ZZZWFyID4gZGF5c0luWWVhcil7XG4gICAgICAgIHBhcnNlci55ZWFyID0gMSArIGlzb1llYXI7XG4gICAgICAgIGRheU9mWWVhciAtPSBkYXlzSW5ZZWFyO1xuICAgIH1lbHNle1xuICAgICAgICBwYXJzZXIueWVhciA9IGlzb1llYXI7XG4gICAgfVxuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcihwYXJzZXIueWVhciwgZGF5T2ZZZWFyKTtcbiAgICBwYXJzZXIuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHBhcnNlci55ZWFyLCBkYXlPZlllYXIpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHBhcnNlciwgeWVhciwgd2Vla09mWWVhciwgZGF5T2ZXZWVrKXtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqIHdlZWtPZlllYXIgLSAoZmlyc3REYXlPZldlZWsgfHwgNykgKyBkYXlPZldlZWs7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZShwYXJzZXIsIHllYXIsIHdlZWtPZlllYXIsIGRheU9mV2Vlayl7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoeWVhcik7XG4gICAgY29uc3Qgc3VuZGF5RGF5T2ZZZWFyID0gMSArIDcgKiB3ZWVrT2ZZZWFyIC0gKGZpcnN0RGF5T2ZXZWVrIHx8IDcpICsgZGF5T2ZXZWVrO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IHN1bmRheURheU9mWWVhciArIChcbiAgICAgICAgKGRheU9mV2VlayA9PT0gMCA/IDcgOiAwKSAtIChmaXJzdERheU9mV2VlayA9PT0gMSA/IDcgOiAwKVxuICAgICk7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuY2xhc3MgVGltZXN0YW1wUGFyc2Vye1xuICAgIGNvbnN0cnVjdG9yKHRpbWVzdGFtcCwgZm9ybWF0LCB0b2tlbnMpe1xuICAgICAgICAvLyBQYXJzZXIgc3RhdGVcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gU3RyaW5nKHRpbWVzdGFtcCk7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gU3RyaW5nKGZvcm1hdCk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zIHx8IFRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyh0aGlzLmZvcm1hdCk7XG4gICAgICAgIHRoaXMuZm9ya0xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBQYXJzZXIgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zaG9ydFdlZWtkYXlOYW1lcyA9IGVuZ2xpc2guc2hvcnRXZWVrZGF5TmFtZXM7XG4gICAgICAgIHRoaXMubG9uZ1dlZWtkYXlOYW1lcyA9IGVuZ2xpc2gubG9uZ1dlZWtkYXlOYW1lcztcbiAgICAgICAgdGhpcy5zaG9ydE1vbnRoTmFtZXMgPSBlbmdsaXNoLnNob3J0TW9udGhOYW1lcztcbiAgICAgICAgdGhpcy5sb25nTW9udGhOYW1lcyA9IGVuZ2xpc2gubG9uZ01vbnRoTmFtZXM7XG4gICAgICAgIHRoaXMuZXJhTmFtZXMgPSBlbmdsaXNoLmVyYU5hbWVzO1xuICAgICAgICB0aGlzLm1lcmlkaWVtTmFtZXMgPSBlbmdsaXNoLm1lcmlkaWVtTmFtZXM7XG4gICAgICAgIHRoaXMub3JkaW5hbFRyYW5zZm9ybSA9IGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy50aW1lem9uZU5hbWVzID0gZGVmYXVsdFRpbWV6b25lTmFtZXM7XG4gICAgICAgIC8vIFN0b3JhZ2UgdmFsdWVzIGZyb20gcGFyc2luZyB0b2tlbnNcbiAgICAgICAgdGhpcy5lcmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2VudHVyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy55ZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnR3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29ZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb250aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29XZWVrT2ZZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tTW9uZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mWWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mV2VlayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ob3VyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSl7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgOlxuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0U2lnbiA9IG9mZnNldCA+PSAwID8gKzEgOiAtMTtcbiAgICAgICAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvdXI6IG9mZnNldFNpZ24gKiBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSxcbiAgICAgICAgICAgIG1pbnV0ZTogb2Zmc2V0U2lnbiAqIE1hdGguZmxvb3IoYWJzT2Zmc2V0ICUgNjApLFxuICAgICAgICAgICAgdG90YWxNaW51dGVzOiBvZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldERhdGUoKXtcbiAgICAgICAgaWYodGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYodGhpcy5taWxsaXNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2g7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAwMDAgKiB0aGlzLnNlY29uZHNTaW5jZUVwb2NoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSk7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ01pbnV0ZXMoZGF0ZS5nZXRVVENNaW51dGVzKCkgLSBvZmZzZXQudG90YWxNaW51dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZih0aGlzLnllYXIgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnR3b0RpZ2l0WWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2VudHVyeSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLnR3b0RpZ2l0WWVhcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSAxMDAgKiB0aGlzLmNlbnR1cnkgKyB0aGlzLnR3b0RpZ2l0WWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc29ZZWFyID09PSB1bmRlZmluZWQgJiYgdGhpcy5pc29Ud29EaWdpdFllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmlzb1llYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLmlzb1R3b0RpZ2l0WWVhcik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMueWVhciA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2VudHVyeSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMueWVhciA9IDEwMCAqIHRoaXMuY2VudHVyeTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVyYSAmJiB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSAxIC0gdGhpcy55ZWFyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaG91ciAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWVyaWRpZW0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyICUgMTIpICsgKHRoaXMubWVyaWRpZW0gPyAxMiA6IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pbGxpc2Vjb25kICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNvWWVhciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNvV2Vla09mWWVhciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21JU09XZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNvWWVhciwgdGhpcy5pc29XZWVrT2ZZZWFyLCB0aGlzLmRheU9mV2VlayB8fCAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmRheU9mWWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCA/IHRoaXMueWVhciA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCB0aGlzLmRheU9mWWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmRheU9mTW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgdGhpcy5kYXlPZlllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICh0aGlzLm1vbnRoID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXlPZk1vbnRoID09PSB1bmRlZmluZWQpXG4gICAgICAgICl7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy55ZWFyICE9PSB1bmRlZmluZWQgPyB0aGlzLnllYXIgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHRoaXMsXG4gICAgICAgICAgICAgICAgeWVhciwgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSwgdGhpcy5kYXlPZldlZWsgfHwgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy53ZWVrT2ZZZWFyRnJvbU1vbmRheSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMueWVhciAhPT0gdW5kZWZpbmVkID8gdGhpcy55ZWFyIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIsIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXksIHRoaXMuZGF5T2ZXZWVrIHx8IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy55ZWFyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih0aGlzLnllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubW9udGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGluZWFwcGxlbWFjaGluZS9zdHJ0aW1lLWpzL2lzc3Vlcy81XG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjY4MTMxMy9qYXZhc2NyaXB0LXNldHV0Y21vbnRoLWRvZXMtbm90LXdvcmstZm9yLW5vdmVtYmVyXG4gICAgICAgICAgICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENNb250aCh0aGlzLm1vbnRoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kYXlPZk1vbnRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENEYXRlKHRoaXMuZGF5T2ZNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRUaW1lem9uZU9mZnNldE9mRGF0ZShkYXRlKTtcbiAgICAgICAgaWYob2Zmc2V0LnRvdGFsTWludXRlcyl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyIHx8IDApIC0gb2Zmc2V0LmhvdXI7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9ICh0aGlzLm1pbnV0ZSB8fCAwKSAtIG9mZnNldC5taW51dGU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh0aGlzLmhvdXIgfHwgMCk7XG4gICAgICAgIGRhdGUuc2V0VVRDTWludXRlcyh0aGlzLm1pbnV0ZSB8fCAwKTtcbiAgICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHRoaXMuc2Vjb25kIHx8IDApO1xuICAgICAgICBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh0aGlzLm1pY3Jvc2Vjb25kID8gdGhpcy5taWNyb3NlY29uZCAvIDEwMDAgOiAwKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGNvcHkoKXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aGlzLnN0cmluZywgdGhpcy5mb3JtYXQsIHRoaXMudG9rZW5zKTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcyl7XG4gICAgICAgICAgICBwYXJzZXJba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VyO1xuICAgIH1cbiAgICBmb3JrKGxlbmd0aCwgc3RhcnRUb2tlbkluZGV4KXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gdGhpcy5jb3B5KCk7XG4gICAgICAgIHBhcnNlci5mb3JrTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGFyc2VyLnBhcnNlKHN0YXJ0VG9rZW5JbmRleCk7XG4gICAgfVxuICAgIHBhcnNlKHN0YXJ0VG9rZW5JbmRleCl7XG4gICAgICAgIGZvcihsZXQgaSA9IHN0YXJ0VG9rZW5JbmRleCB8fCAwOyBpIDwgdGhpcy50b2tlbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4ID49IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJUaW1lc3RhbXAgaXMgdG9vIHNob3J0IHRvIG1hdGNoIHRoZSB3aG9sZSBmb3JtYXQuXCIsIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZS5TdHJpbmdUb2tlbil7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVN0cmluZ1Rva2VuKHRva2VuLnN0cmluZyk7XG4gICAgICAgICAgICB9ZWxzZSBpZih0b2tlbi5oYXNQYXJzZUZ1bmN0aW9uKCkpe1xuICAgICAgICAgICAgICAgIHRva2VuLnBhcnNlKHRoaXMpO1xuICAgICAgICAgICAgfWVsc2UgaWYodG9rZW4uaGFzU3RvcmVGdW5jdGlvbigpICYmICF0b2tlbi50ZXh0KXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy50b2tlbnNbMSArIGldO1xuICAgICAgICAgICAgICAgIGlmKChuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlLlN0cmluZ1Rva2VuICYmIGlzRGlnaXQobmV4dC5zdHJpbmdbMF0pKSB8fCAoKFxuICAgICAgICAgICAgICAgICAgICBuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHQgaW5zdGFuY2VvZiBEaXJlY3RpdmUuVG9rZW5cbiAgICAgICAgICAgICAgICApICYmICFuZXh0LnRleHQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZUFtYmlndW91c051bWJlcih0b2tlbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uc3RvcmUodGhpcywgdGhpcy5wYXJzZU51bWJlcih0b2tlbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFwiSW52YWxpZCBkaXJlY3RpdmUuXCIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZigxICsgdGhpcy5pbmRleCA8IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBgVGltZXN0YW1wIGlzIHRvbyBsb25nIGZvciB0aGUgZ2l2ZW4gZm9ybWF0LiBUZXh0IHJlbWFpbmluZzogXCIke3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXgpfVwiLmAsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU3RyaW5nVG9rZW4odG9rZW4pe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gIT09IHRva2VuW2ldKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgU3RyaW5nIGxpdGVyYWwgXCIke3Rva2VufVwiIG5vdCBtYXRjaGVkLmAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlQW1iaWd1b3VzTnVtYmVyKHRva2VuLCB0b2tlbkluZGV4KXtcbiAgICAgICAgaWYodGhpcy5mb3JrTGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGxpa2VseUxlbmd0aCA9IHRva2VuLmdldExpa2VseUxlbmd0aCgpO1xuICAgICAgICAgICAgaWYobGlrZWx5TGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmsobGlrZWx5TGVuZ3RoLCB0b2tlbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZighKGVycm9yIGluc3RhbmNlb2YgVGltZXN0YW1wUGFyc2VFcnJvcikpIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsYXN0V2hvbGVFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLnN0cmluZy5sZW5ndGggLSB0aGlzLmluZGV4OyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGkgPT09IHRva2VuLmxpa2VseUxlbmd0aCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JrKGksIHRva2VuSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEoZXJyb3IgaW5zdGFuY2VvZiBUaW1lc3RhbXBQYXJzZUVycm9yKSkgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLm1lc3NhZ2UgPSBcIlRpbWVzdGFtcCBpcyB0b28gc2hvcnQgdG8gbWF0Y2ggdGhlIHdob2xlIGZvcm1hdC5cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0V2hvbGVFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGFzdFdob2xlRXJyb3Ipe1xuICAgICAgICAgICAgICAgIHRocm93IGxhc3RXaG9sZUVycm9yO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgYW1iaWd1b3VzIG51bWJlci5cIiwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy5wYXJzZU51bWJlcih0b2tlbiwgdGhpcy5mb3JrTGVuZ3RoKTtcbiAgICAgICAgICAgIHRva2VuLnN0b3JlKHRoaXMsIG51bWJlcik7XG4gICAgICAgICAgICB0aGlzLmZvcmtMZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlTnVtYmVyKGRpcmVjdGl2ZSwgbGVuZ3RoTGltaXQgPSBJbmZpbml0eSl7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gPT09IFwiLVwiO1xuICAgICAgICBpZihuZWdhdGl2ZSAmJiAhZGlyZWN0aXZlLmdldENhbkJlTmVnYXRpdmUoKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIk51bWJlciBjYW5ub3QgYmUgbmVnYXRpdmUuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZihuZWdhdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLnN0cmluZ1t0aGlzLmluZGV4XSA9PT0gXCIgXCJcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmluZGV4IC0gc3RhcnQgPCBsZW5ndGhMaW1pdCAmJiBpc0RpZ2l0KHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdKVxuICAgICAgICApe1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gK3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KS50cmltKCk7XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZighZGlyZWN0aXZlLm51bWJlckluQm91bmRzKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgTnVtYmVyIFske3ZhbHVlfV0gaXMgb3V0IG9mIGJvdW5kcyAke2RpcmVjdGl2ZS5nZXRCb3VuZHNTdHJpbmcoKX0uYCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmVnYXRpdmUgPyAtdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgaWYoZGlyZWN0aXZlLmlzT3JkaW5hbCgpKXtcbiAgICAgICAgICAgIGNvbnN0IG9yZGluYWwgPSB0aGlzLm9yZGluYWxUcmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gb3JkaW5hbC5sZW5ndGggLSAodGhpcy5pbmRleCAtIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwYXJzZU1vbnRoTmFtZSgpe1xuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc2hvcnRNb250aE5hbWVzLnNsaWNlKCk7XG4gICAgICAgIG5hbWVzLnB1c2goLi4udGhpcy5sb25nTW9udGhOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBtb250aCBuYW1lLlwiLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbmRleCAlIDEyO1xuICAgIH1cbiAgICBwYXJzZVdlZWtkYXlOYW1lKCl7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5zaG9ydFdlZWtkYXlOYW1lcy5zbGljZSgpO1xuICAgICAgICBuYW1lcy5wdXNoKC4uLnRoaXMubG9uZ1dlZWtkYXlOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSB3ZWVrZGF5IG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgNztcbiAgICB9XG4gICAgcGFyc2VNZXJpZGllbU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5tZXJpZGllbU5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBBTS9QTS5cIiwgdGhpc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5kZXggJSAyO1xuICAgIH1cbiAgICBwYXJzZUVyYU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5lcmFOYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgZXJhIG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgMjtcbiAgICB9XG4gICAgcGFyc2VJbmRleEluTGlzdChsaXN0KXtcbiAgICAgICAgY29uc3QgcG9zc2libGUgPSBsaXN0LnNsaWNlKCk7XG4gICAgICAgIGxldCBwb3NzaWJsZUNvdW50ID0gcG9zc2libGUubGVuZ3RoO1xuICAgICAgICBsZXQgbWF0Y2hJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IG1hdGNoTGVuZ3RoID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgcG9zc2libGVDb3VudCAmJiB0aGlzLmluZGV4ICsgaSA8IHRoaXMuc3RyaW5nLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIGldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcG9zc2libGUubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwb3NzaWJsZVtqXTtcbiAgICAgICAgICAgICAgICBpZighaXRlbSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYoaSA+PSBpdGVtLmxlbmd0aCB8fCBpdGVtW2ldLnRvTG93ZXJDYXNlKCkgIT09IGNoKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVbal0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNvdW50LS07XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoMSArIGkgPT09IGl0ZW0ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMSArIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKG1hdGNoSW5kZXggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gbWF0Y2hMZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUaW1lem9uZU5hbWVMaXN0KCl7XG4gICAgICAgIGlmKCF0aGlzLnRpbWV6b25lTmFtZUxpc3Qpe1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU5hbWVMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnRpbWV6b25lTmFtZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVOYW1lTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVOYW1lTGlzdDtcbiAgICB9XG4gICAgcGFyc2VUaW1lem9uZU9mZnNldChtb2RpZmllcil7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdO1xuICAgICAgICBjb25zdCBob3VycyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDMpO1xuICAgICAgICBsZXQgbWludXRlcztcbiAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIDNdID09PSBcIjpcIil7XG4gICAgICAgICAgICBtaW51dGVzID0gK3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXggKyA0LCB0aGlzLmluZGV4ICsgNik7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IDY7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWludXRlcyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMywgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSA1O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKGhvdXJzKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihtaW51dGVzKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRpbWV6b25lIG9mZnNldCBmcm9tIHN0cmluZyBgICtcbiAgICAgICAgICAgICAgICBgXCIke3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KX1cIi5gLCB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IG1pbnV0ZXMgKyA2MCAqIGhvdXJzO1xuICAgICAgICBpZihzaWduID09PSBcIitcIiB8fCBzaWduID09PSBcIsKxXCIpIHJldHVybiArb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKHNpZ24gPT09IFwiLVwiKSByZXR1cm4gLW9mZnNldDtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biB0aW1lem9uZSBvZmZzZXQgc2lnbiBcIiR7c2lnbn1cIi5gLCB0aGlzKTtcbiAgICB9XG59XG5cblRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCl7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgbGV0IGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCBtb2RpZmllciA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBmb3JtYXRTdHJpbmcgPSBTdHJpbmcoZm9ybWF0KTtcbiAgICBpZighZm9ybWF0U3RyaW5nKXtcbiAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYEVtcHR5IGZvcm1hdCBzdHJpbmcuYCwge1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRTdHJpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENoYXJhY3RlcihjaCl7XG4gICAgICAgIGlmKHRva2Vucy5sZW5ndGggJiYgKHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBEaXJlY3RpdmUuU3RyaW5nVG9rZW4pKXtcbiAgICAgICAgICAgIGlmKGlzRGlnaXQoY2gpID09PSBpc0RpZ2l0KHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uc3RyaW5nWzBdKSl7XG4gICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5hZGRDaGFyYWN0ZXIoY2gpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobmV3IERpcmVjdGl2ZS5TdHJpbmdUb2tlbihjaCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKG5ldyBEaXJlY3RpdmUuU3RyaW5nVG9rZW4oY2gpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGNoIG9mIGZvcm1hdFN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGl2ZSAmJiBjaCA9PT0gXCIlXCIpe1xuICAgICAgICAgICAgYWRkQ2hhcmFjdGVyKFwiJVwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwiblwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcblwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwidFwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcdFwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgIW1vZGlmaWVyICYmIChcbiAgICAgICAgICAgIGNoID09PSBcIi1cIiB8fCBjaCA9PT0gXCJfXCIgfHwgY2ggPT09IFwiXlwiIHx8IGNoID09PSBcIjpcIlxuICAgICAgICApKXtcbiAgICAgICAgICAgIG1vZGlmaWVyICs9IGNoO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUpe1xuICAgICAgICAgICAgY29uc3QgZGlyID0gRGlyZWN0aXZlLmdldEJ5TmFtZShjaCk7XG4gICAgICAgICAgICBpZighZGlyKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biBkaXJlY3RpdmUgXCIlJHttb2RpZmllcn0ke2NofVwiLmAsIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmKGRpci5yZXdyaXRlKSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICAuLi5kaXIuZ2V0UmV3cml0ZVBhcnNlZChUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aXZlLlRva2VuKG1vZGlmaWVyLCBkaXIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIlwiO1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1lbHNlIGlmKGNoID09PSBcIiVcIil7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihjaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoZGlyZWN0aXZlKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgXCJGb3VuZCB1bnRlcm1pbmF0ZWQgZGlyZWN0aXZlIGF0IHRoZSBlbmQgb2YgdGhlIGZvcm1hdCBzdHJpbmcuXCIsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0U3RyaW5nXG4gICAgICAgIH1cbiAgICApO1xuICAgIGlmKHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5zdHJpbmcgPT09IFwiWlwiKXtcbiAgICAgICAgdG9rZW5zLnp1bHVUaW1lem9uZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcil7XG4gICAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xufVxuXG5cbmNvbnN0IG1vbnRoTGVuZ3RocyA9IHtcbiAgICBjb21tb246IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICBsZWFwOiBbMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG4gICAgZm9yWWVhcjogZnVuY3Rpb24oeWVhcil7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gbW9udGhMZW5ndGhzLmxlYXAgOiBtb250aExlbmd0aHMuY29tbW9uO1xuICAgIH0sXG59O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc4OTkyLzQwOTkwMjJcbmZ1bmN0aW9uIGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKXtcbiAgICBjb25zdCB5ID0geWVhciAtIDE7XG4gICAgcmV0dXJuICh5ZWFyICogMzY1ICtcbiAgICAgICAgTWF0aC5mbG9vcih5IC8gNCkgLSBNYXRoLmZsb29yKHkgLyAxMDApICsgTWF0aC5mbG9vcih5IC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG5jb25zdCBkZWZhdWx0VGltZXpvbmVOYW1lcyA9IHtcbiAgICBcIkFDRFRcIjogKzEwLjUsXG4gICAgXCJBQ1NUXCI6ICs5LjUsXG4gICAgXCJBQ1RcIjogLTUsXG4gICAgXCJBQ1dTVFwiOiArOC43NSxcbiAgICBcIkFEVFwiOiAtMyxcbiAgICBcIkFFRFRcIjogKzExLFxuICAgIFwiQUVTVFwiOiArMTAsXG4gICAgXCJBRlRcIjogKzQuNSxcbiAgICBcIkFLRFRcIjogLTgsXG4gICAgXCJBS1NUXCI6IC05LFxuICAgIFwiQU1TVFwiOiAtMyxcbiAgICBcIkFNVFwiOiAtNCxcbiAgICBcIkFNVFwiOiArNCxcbiAgICBcIkFSVFwiOiAtMyxcbiAgICBcIkFTVFwiOiArMyxcbiAgICBcIkFTVFwiOiAtNCxcbiAgICBcIkFXU1RcIjogKzgsXG4gICAgXCJBWk9TVFwiOiAwLFxuICAgIFwiQVpPVFwiOiAtMSxcbiAgICBcIkFaVFwiOiArNCxcbiAgICBcIkJEVFwiOiArOCxcbiAgICBcIkJJT1RcIjogKzYsXG4gICAgXCJCSVRcIjogLTEyLFxuICAgIFwiQk9UXCI6IC00LFxuICAgIFwiQlJTVFwiOiAtMixcbiAgICBcIkJSVFwiOiAtMyxcbiAgICBcIkJTVFwiOiArNixcbiAgICBcIkJTVFwiOiArMTEsXG4gICAgXCJCU1RcIjogKzEsXG4gICAgXCJCVFRcIjogKzYsXG4gICAgXCJDQVRcIjogKzIsXG4gICAgXCJDQ1RcIjogKzYuNSxcbiAgICBcIkNEVFwiOiAtNSxcbiAgICBcIkNEVFwiOiAtNCxcbiAgICBcIkNFU1RcIjogKzIsXG4gICAgXCJDRVRcIjogKzEsXG4gICAgXCJDSEFEVFwiOiArMTMuNzUsXG4gICAgXCJDSEFTVFwiOiArMTIuNzUsXG4gICAgXCJDSE9UXCI6ICs4LFxuICAgIFwiQ0hPU1RcIjogKzksXG4gICAgXCJDSFNUXCI6ICsxMCxcbiAgICBcIkNIVVRcIjogKzEwLFxuICAgIFwiQ0lTVFwiOiAtOCxcbiAgICBcIkNJVFwiOiArOCxcbiAgICBcIkNLVFwiOiAtMTAsXG4gICAgXCJDTFNUXCI6IC0zLFxuICAgIFwiQ0xUXCI6IC00LFxuICAgIFwiQ09TVFwiOiAtNCxcbiAgICBcIkNPVFwiOiAtNSxcbiAgICBcIkNTVFwiOiAtNixcbiAgICBcIkNTVFwiOiArOCxcbiAgICBcIkNTVFwiOiAtNSxcbiAgICBcIkNUXCI6ICs4LFxuICAgIFwiQ1ZUXCI6IC0xLFxuICAgIFwiQ1dTVFwiOiArOC43NSxcbiAgICBcIkNYVFwiOiArNyxcbiAgICBcIkRBVlRcIjogKzcsXG4gICAgXCJERFVUXCI6ICsxMCxcbiAgICBcIkRGVFwiOiArMSxcbiAgICBcIkVBU1NUXCI6IC01LFxuICAgIFwiRUFTVFwiOiAtNixcbiAgICBcIkVBVFwiOiArMyxcbiAgICBcIkVDVFwiOiAtNCxcbiAgICBcIkVDVFwiOiAtNSxcbiAgICBcIkVEVFwiOiAtNCxcbiAgICBcIkVFU1RcIjogKzMsXG4gICAgXCJFRVRcIjogKzIsXG4gICAgXCJFR1NUXCI6IDAsXG4gICAgXCJFR1RcIjogLTEsXG4gICAgXCJFSVRcIjogKzksXG4gICAgXCJFU1RcIjogLTUsXG4gICAgXCJGRVRcIjogKzMsXG4gICAgXCJGSlRcIjogKzEyLFxuICAgIFwiRktTVFwiOiAtMyxcbiAgICBcIkZLVFwiOiAtNCxcbiAgICBcIkZOVFwiOiAtMixcbiAgICBcIkdBTFRcIjogLTYsXG4gICAgXCJHQU1UXCI6IC05LFxuICAgIFwiR0VUXCI6ICs0LFxuICAgIFwiR0ZUXCI6IC0zLFxuICAgIFwiR0lMVFwiOiArMTIsXG4gICAgXCJHSVRcIjogLTksXG4gICAgXCJHTVRcIjogMCxcbiAgICBcIkdTVFwiOiAtMixcbiAgICBcIkdTVFwiOiArNCxcbiAgICBcIkdZVFwiOiAtNCxcbiAgICBcIkhEVFwiOiAtOSxcbiAgICBcIkhBRUNcIjogKzIsXG4gICAgXCJIU1RcIjogLTEwLFxuICAgIFwiSEtUXCI6ICs4LFxuICAgIFwiSE1UXCI6ICs1LFxuICAgIFwiSE9WU1RcIjogKzgsXG4gICAgXCJIT1ZUXCI6ICs3LFxuICAgIFwiSUNUXCI6ICs3LFxuICAgIFwiSURMV1wiOiAtMTIsXG4gICAgXCJJRFRcIjogKzMsXG4gICAgXCJJT1RcIjogKzMsXG4gICAgXCJJUkRUXCI6ICs0LjUsXG4gICAgXCJJUktUXCI6ICs4LFxuICAgIFwiSVJTVFwiOiArMy41LFxuICAgIFwiSVNUXCI6ICs1LjUsXG4gICAgXCJJU1RcIjogKzEsXG4gICAgXCJJU1RcIjogKzIsXG4gICAgXCJKU1RcIjogKzksXG4gICAgXCJLR1RcIjogKzYsXG4gICAgXCJLT1NUXCI6ICsxMSxcbiAgICBcIktSQVRcIjogKzcsXG4gICAgXCJLU1RcIjogKzksXG4gICAgXCJMSFNUXCI6ICsxMC41LFxuICAgIFwiTEhTVFwiOiArMTEsXG4gICAgXCJMSU5UXCI6ICsxNCxcbiAgICBcIk1BR1RcIjogKzEyLFxuICAgIFwiTUFSVFwiOiAtOS41LFxuICAgIFwiTUFXVFwiOiArNSxcbiAgICBcIk1EVFwiOiAtNixcbiAgICBcIk1FVFwiOiArMSxcbiAgICBcIk1FU1RcIjogKzIsXG4gICAgXCJNSFRcIjogKzEyLFxuICAgIFwiTUlTVFwiOiArMTEsXG4gICAgXCJNSVRcIjogLTkuNSxcbiAgICBcIk1NVFwiOiArNi41LFxuICAgIFwiTVNLXCI6ICszLFxuICAgIFwiTVNUXCI6ICs4LFxuICAgIFwiTVNUXCI6IC03LFxuICAgIFwiTVVUXCI6ICs0LFxuICAgIFwiTVZUXCI6ICs1LFxuICAgIFwiTVlUXCI6ICs4LFxuICAgIFwiTkNUXCI6ICsxMSxcbiAgICBcIk5EVFwiOiAtMi41LFxuICAgIFwiTkZUXCI6ICsxMSxcbiAgICBcIk5QVFwiOiArNS43NSxcbiAgICBcIk5TVFwiOiAtMy41LFxuICAgIFwiTlRcIjogLTMuNSxcbiAgICBcIk5VVFwiOiAtMTEsXG4gICAgXCJOWkRUXCI6ICsxMyxcbiAgICBcIk5aU1RcIjogKzEyLFxuICAgIFwiT01TVFwiOiArNixcbiAgICBcIk9SQVRcIjogKzUsXG4gICAgXCJQRFRcIjogLTcsXG4gICAgXCJQRVRcIjogLTUsXG4gICAgXCJQRVRUXCI6ICsxMixcbiAgICBcIlBHVFwiOiArMTAsXG4gICAgXCJQSE9UXCI6ICsxMyxcbiAgICBcIlBIVFwiOiArOCxcbiAgICBcIlBLVFwiOiArNSxcbiAgICBcIlBNRFRcIjogLTIsXG4gICAgXCJQTVNUXCI6IC0zLFxuICAgIFwiUE9OVFwiOiArMTEsXG4gICAgXCJQU1RcIjogLTgsXG4gICAgXCJQU1RcIjogKzgsXG4gICAgXCJQWVNUXCI6IC0zLFxuICAgIFwiUFlUXCI6IC00LFxuICAgIFwiUkVUXCI6ICs0LFxuICAgIFwiUk9UVFwiOiAtMyxcbiAgICBcIlNBS1RcIjogKzExLFxuICAgIFwiU0FNVFwiOiArNCxcbiAgICBcIlNBU1RcIjogKzIsXG4gICAgXCJTQlRcIjogKzExLFxuICAgIFwiU0NUXCI6ICs0LFxuICAgIFwiU0RUXCI6IC0xMCxcbiAgICBcIlNHVFwiOiArOCxcbiAgICBcIlNMU1RcIjogKzUuNSxcbiAgICBcIlNSRVRcIjogKzExLFxuICAgIFwiU1JUXCI6IC0zLFxuICAgIFwiU1NUXCI6IC0xMSxcbiAgICBcIlNTVFwiOiArOCxcbiAgICBcIlNZT1RcIjogKzMsXG4gICAgXCJUQUhUXCI6IC0xMCxcbiAgICBcIlRIQVwiOiArNyxcbiAgICBcIlRGVFwiOiArNSxcbiAgICBcIlRKVFwiOiArNSxcbiAgICBcIlRLVFwiOiArMTMsXG4gICAgXCJUTFRcIjogKzksXG4gICAgXCJUTVRcIjogKzUsXG4gICAgXCJUUlRcIjogKzMsXG4gICAgXCJUT1RcIjogKzEzLFxuICAgIFwiVFZUXCI6ICsxMixcbiAgICBcIlVMQVNUXCI6ICs5LFxuICAgIFwiVUxBVFwiOiArOCxcbiAgICBcIlVTWlwiOiArMixcbiAgICBcIlVUQ1wiOiAwLFxuICAgIFwiVVlTVFwiOiAtMixcbiAgICBcIlVZVFwiOiAtMyxcbiAgICBcIlVaVFwiOiArNSxcbiAgICBcIlZFVFwiOiAtNCxcbiAgICBcIlZMQVRcIjogKzEwLFxuICAgIFwiVk9MVFwiOiArNCxcbiAgICBcIlZPU1RcIjogKzYsXG4gICAgXCJWVVRcIjogKzExLFxuICAgIFwiV0FLVFwiOiArMTIsXG4gICAgXCJXQVNUXCI6ICsyLFxuICAgIFwiV0FUXCI6ICsxLFxuICAgIFwiV0VTVFwiOiArMSxcbiAgICBcIldFVFwiOiAwLFxuICAgIFwiV0lUXCI6ICs3LFxuICAgIFwiV1NUXCI6ICs4LFxuICAgIFwiWUFLVFwiOiArOSxcbiAgICBcIllFS1RcIjogKzUsXG4gICAgXCJaXCI6IDAsXG59O1xuXG5cbmlmKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHN0cnRpbWU7XG59ZWxzZSBpZih0eXBlb2Yod2luZG93KSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luZG93LnN0cnRpbWUgPSBzdHJ0aW1lO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzT2JqZWN0JztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9vYmplY3Qvc2VyaWFsaXplJztcbmltcG9ydCB0b1VuZGVyc2NvcmUgZnJvbSAnLi9zdHJpbmcvdG9VbmRlcnNjb3JlJztcblxuY29uc3QgeyBwYXJzZSwgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG4vKipcbiAqIE1ha2VzIGFuIEFKQVggcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIEFQSSBlbmRwb2ludC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsIC0gVGhlIFVSTCBvZiB0aGUgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyAtIFRoZSBzdWNjZXNzIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgLSBUaGUgZXJyb3IgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZS5cbiAqL1xuY29uc3QgYWpheCA9IChhcGlVcmwsIHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMsIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGNvbnN0IHhtbEh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgdXJsID0gbWV0aG9kID09PSAnR0VUJyAmJiBwYXJhbXMgPyBgJHthcGlVcmx9PyR7c2VyaWFsaXplKHBhcmFtcywgdG9VbmRlcnNjb3JlKX1gIDogYXBpVXJsO1xuICBjb25zdCBpc1N1Y2Nlc3MgPSAoc3RhdHVzKSA9PiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG4gIHhtbEh0dHAub3BlbihtZXRob2QsIHVybCk7XG4gIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicpO1xuXG4gIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGxldCByZXNwb25zZTtcblxuICAgIGlmICh4bWxIdHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIGlmIChpc1N1Y2Nlc3MoeG1sSHR0cC5zdGF0dXMpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBwYXJzZSh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhtbEh0dHA7XG4gICAgICAgIH1cblxuICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKHhtbEh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoaXNPYmplY3QocGFyYW1zKSAmJiBtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgeG1sSHR0cC5zZW5kKHN0cmluZ2lmeShwYXJhbXMpKTtcbiAgfSBlbHNlIHtcbiAgICB4bWxIdHRwLnNlbmQoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWpheDtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiIsImltcG9ydCB7IGdldFN5bWJvbEZyb21DdXJyZW5jeSB9IGZyb20gJ2N1cnJlbmN5LXN5bWJvbC1tYXAnO1xuXG5jb25zdCB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9ICgpID0+ICEhKHR5cGVvZiBJbnRsID09PSAnb2JqZWN0JyAmJiBJbnRsICYmIHR5cGVvZiBJbnRsLk51bWJlckZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbmN5Rm9ybWF0dGVyKFxuICB2YWx1ZSxcbiAgbGFuZyxcbiAgY3VycmVuY3ksXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDAsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IDMsXG4pIHtcbiAgaWYgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkgJiYgY3VycmVuY3kpIHtcbiAgICBjb25zdCBpc0RvbGxhciA9ICgpID0+IGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkgPT09ICckJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogaXNEb2xsYXIgPyAnc3ltYm9sJyA6ICdjb2RlJyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICB9O1xuXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0ciA9IG51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpO1xuXG4gICAgaWYgKGlzRG9sbGFyIHx8ICFnZXRTeW1ib2xGcm9tQ3VycmVuY3koY3VycmVuY3kpKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY3VycmVuY3ksIGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IGN1cnJlbmN5Rm9ybWF0dGVyIGZyb20gJy4vY3VycmVuY3lGb3JtYXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW5jeUZvcm1hdHRlcjtcbiIsImltcG9ydCBtb250aExlbmd0aCBmcm9tICcuL21vbnRoTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQgbW9udGhMZW5ndGg7XG4iLCIvLyBEYXRlIHV0aWxzXG5jb25zdCBkYXlzSW5Nb250aCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmNvbnN0IGlzTGVhcFllYXIgPSAoeWVhcikgPT4gKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKSB7XG4gIGxldCBkYXlzID0gZGF5c0luTW9udGhbbW9udGhdO1xuICBpZiAobW9udGggPT09IDEgJiYgaXNMZWFwWWVhcih5ZWFyKSkge1xuICAgIGRheXMgPSAyOTtcbiAgfVxuXG4gIHJldHVybiBkYXlzO1xufVxuIiwiaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJy4vcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHNldENsYXNzTmFtZSBmcm9tICcuL3NldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgbmFtZSk7XG4gICAgY29uc3QgY2xzID0gYCR7Z2V0Q2xhc3NOYW1lKGVsKX0gJHtuYW1lLmpvaW4oJyAnKX1gO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xzKTtcbiAgfVxufVxuIiwiY29uc3QgeyBrZXlzIH0gPSBPYmplY3Q7XG5cbi8qKlxuICogQ3JlYXRlIEhUTUxFbGVtZW50IHdpdGggYXR0cmlidXRlc1xuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEBwYXJhbSBhdHRycyB7T2JqZWN0fVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IHBhcmFtcyA9IGF0dHJzIHx8IHt9O1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcblxuICBrZXlzKHBhcmFtcykubWFwKChpKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShpLCBwYXJhbXNbaV0pKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyaW5nO1xuXG4gIHJldHVybiBlbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEJ5Q2xhc3NOYW1lKGNvbnRleHQsIG5hbWUpIHtcbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShlbCkge1xuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcbiAgLy8gY29tcGxldGVseSBzZXBhcmF0ZWx5IFNWR0FuaW1hdGVkU3RyaW5nIGJhc2UgY2xhc3Nlc1xuICBpZiAoZWwuY2xhc3NOYW1lIGluc3RhbmNlb2YgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdBbmltYXRlZFN0cmluZykge1xuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgfVxuICByZXR1cm4gZWwuY2xhc3NOYW1lO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbi8qKlxuICogRmluZCBIVE1MRWxlbWVudCBhdHRyaWJ1dGUsIGluIHRoZSBkb20tdHJlZSwgYnViYmxlcyB1cFxuICogQHBhcmFtIGVsIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBhdHRyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRBdHRyaWJ1dGUoZWwsIGF0dHIpIHtcbiAgcmV0dXJuIHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlbCwgYXR0cikudmFsdWU7XG59XG4iLCJpbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChefCApJHtuYW1lfSggfCQpYCwgJ2dpJykudGVzdChjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vYWRkQ2xhc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBkZXN0cm95RWxlbWVudCBmcm9tICcuL2Rlc3Ryb3lFbGVtZW50JztcbmltcG9ydCBlbGVtZW50RnJvbVN0cmluZyBmcm9tICcuL2VsZW1lbnRGcm9tU3RyaW5nJztcbmltcG9ydCBmaW5kQnlDbGFzc05hbWUgZnJvbSAnLi9maW5kQnlDbGFzc05hbWUnO1xuaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0UGFyZW50QXR0cmlidXRlIGZyb20gJy4vZ2V0UGFyZW50QXR0cmlidXRlJztcbmltcG9ydCBoYXNDbGFzcyBmcm9tICcuL2hhc0NsYXNzJztcbmltcG9ydCBpc0luc2lkZSBmcm9tICcuL2lzSW5zaWRlJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICcuL3JlbW92ZUNsYXNzJztcbmltcG9ydCBzZXRDbGFzc05hbWUgZnJvbSAnLi9zZXRDbGFzc05hbWUnO1xuaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59O1xuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuLyoqXG4gKiBDaGVjayBpZiBzb21lIEhUTUxFbGVtZW50IGlzIGluc2lkZSBhbm90aGVyIG9uZVxuICogQHBhcmFtIGNoaWxkIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBwYXJlbnQge0hUTUxFbGVtZW50fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSW5zaWRlKGNoaWxkLCBwYXJlbnQpIHtcbiAgbGV0IGN1cnJlbnQgPSBjaGlsZDtcblxuICB3aGlsZSAoY3VycmVudCAhPT0gcGFyZW50KSB7XG4gICAgaWYgKCFpcyhjdXJyZW50KSB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdCT0RZJyB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgc2V0Q2xhc3NOYW1lIGZyb20gJy4vc2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYChefCApJHtuYW1lLmpvaW4oJ3wnKX0oIHwkKWAsICdnaScpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudDtcbiAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgd2hpbGUgKCFpcyh2YWx1ZSkpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50ICYmIHR5cGVvZiBwYXJlbnQuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIHBhcmVudCxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzIHx8IHt9O1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oLi4uYXJncykge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZuLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGxldCBsaXN0ZW5lcnM7XG5cbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF07XG5cbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChmbiwgaSkgPT4ge1xuICAgICAgICBpZiAoZm4gPT09IGxpc3RlbmVyIHx8IGZuLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgbGlzdGVuZXJzO1xuXG4gICAgaWYgKHRoaXMuZXZlbnRzICYmIHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgbGlzdGVuZXJzID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuXG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm4pID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGYpIHtcbiAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgY3VycmVuY3lGb3JtYXR0ZXIgZnJvbSAnLi9jdXJyZW5jeSc7XG5pbXBvcnQgbW9udGhMZW5ndGggZnJvbSAnLi9kYXRlJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgbWF0aCBmcm9tICcuL21hdGgnO1xuaW1wb3J0IG9iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuaW1wb3J0IGFqYXggZnJvbSAnLi9hamF4JztcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQgaXMgZnJvbSAnLi9pcyc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59ID0gZG9tO1xuXG5jb25zdCB7IGlzTmFOUG9seWZpbGwsIGlzTnVtZXJpYyB9ID0gbWF0aDtcblxuY29uc3Qge1xuICBjYXBpdGFsaXplT2JqLFxuICBpc09iamVjdCxcbiAgbWVyZ2UsXG4gIHBpY2ssXG4gIHNlcmlhbGl6ZSxcbiAgdHJhdmVyc2VPYmosXG59ID0gb2JqZWN0O1xuXG5jb25zdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59ID0gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGlzQXJyYXksXG4gIC8vIGN1cnJlbmN5XG4gIGN1cnJlbmN5Rm9ybWF0dGVyLFxuICAvLyBkYXRlXG4gIG1vbnRoTGVuZ3RoLFxuICAvLyBkb21cbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG4gIC8vIGZ1bmN0aW9uXG4gIGlzRnVuY3Rpb24sXG4gIC8vIG1hdGhcbiAgaXNOYU5Qb2x5ZmlsbCxcbiAgaXNOdW1lcmljLFxuICAvLyBvYmplY3RcbiAgY2FwaXRhbGl6ZU9iaixcbiAgaXNPYmplY3QsXG4gIG1lcmdlLFxuICBwaWNrLFxuICBzZXJpYWxpemUsXG4gIHRyYXZlcnNlT2JqLFxuICAvLyBzdHJpbmdcbiAgZGFzaFRvQ2FwaXRhbCxcbiAgaXNTdHJpbmcsXG4gIHRvVW5kZXJzY29yZSxcbiAgdW5kZXJzY29yZVRvQ2FwaXRhbCxcbiAgLy8gYWpheFxuICBhamF4LFxuICAvLyBlbWl0dGVyXG4gIEVtaXR0ZXIsXG4gIC8vIGlzXG4gIGlzLFxuICAvLyB2YWxpZGF0ZVxuICB2YWxpZGF0ZSxcbn07XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL21hdGgvaXNOYU5Qb2x5ZmlsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvICE9PSAndW5kZWZpbmVkJyAmJiBvICE9PSBudWxsICYmICFpc05hTlBvbHlmaWxsKG8pO1xufVxuIiwiaW1wb3J0IGlzTmFOUG9seWZpbGwgZnJvbSAnLi9pc05hTlBvbHlmaWxsJztcbmltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzTmFOUG9seWZpbGwsXG4gIGlzTnVtZXJpYyxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hTlBvbHlmaWxsKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSk7XG59XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL2lzTmFOUG9seWZpbGwnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiAhaXNBcnJheShuKSAmJiAhaXNOYU5Qb2x5ZmlsbChwYXJzZUludChuLCAxMCkpO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuaW1wb3J0IGRhc2hUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IHVuZGVyc2NvcmVUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplT2JqKG9iaikge1xuICBjb25zdCBvYmplY3QgPSB0cmF2ZXJzZU9iaihvYmosIGRhc2hUb0NhcGl0YWwpO1xuICBjb25zdCBuZXdPYmogPSB0cmF2ZXJzZU9iaihvYmplY3QsIHVuZGVyc2NvcmVUb0NhcGl0YWwpO1xuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJpbXBvcnQgY2FwaXRhbGl6ZU9iaiBmcm9tICcuL2NhcGl0YWxpemVPYmonO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi9waWNrJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhcGl0YWxpemVPYmosXG4gIGlzT2JqZWN0LFxuICBtZXJnZSxcbiAgcGljayxcbiAgc2VyaWFsaXplLFxuICB0cmF2ZXJzZU9iaixcbn07XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBNZXJnZSB0d28gb2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IG9iajFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVlcFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMiwgaXNEZWVwKSB7XG4gIGNvbnN0IG9iajMgPSB7fTtcbiAga2V5cyhvYmoxKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGlzRGVlcCAmJiBpc09iamVjdChvYmoxW2ldKSkge1xuICAgICAgb2JqM1tpXSA9IG1lcmdlKG9iajFbaV0sIHt9LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqM1tpXSA9IG9iajFbaV07XG4gICAgfVxuICB9KTtcblxuICBrZXlzKG9iajIpLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajJbaV0pKSB7XG4gICAgICBvYmozW2ldID0gbWVyZ2Uob2JqM1tpXSB8fCB7fSwgb2JqMltpXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iajNbaV0gPSBvYmoyW2ldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmozO1xufVxuIiwiLyoqXG4gKiBQaWNrIHByb3BlcnRpZXMgZnJvbSBvYmplY3RcbiAqIGxldCBhID0geyBuYW1lOiBcIlJvbWFuXCIsIHBob25lOiAxMjMsIGNvdW50cnk6IFwiYW55XCIgfTtcbiAqIHBpY2soYSwgJ25hbWUnLCAnY291bnRyeScpXG4gKiA9PiB7IG5hbWU6IFwiUm9tYW5cIiwgY291bnRyeTogXCJhbnlcIiB9XG4gKlxuICogQHBhcmFtIG9iaiB7T2JqZWN0fVxuICogQHBhcmFtIGFyZ3Mge1N0cmluZ31cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2sob2JqLCAuLi5hcmdzKSB7XG4gIHJldHVybiBhcmdzLnJlZHVjZSgoaSwgdCkgPT4ge1xuICAgIGNvbnN0IHBpY2tlZE9iaiA9IGk7XG5cbiAgICBwaWNrZWRPYmpbdF0gPSBvYmpbdF07XG5cbiAgICByZXR1cm4gcGlja2VkT2JqO1xuICB9LCB7fSk7XG59XG4iLCJjb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VyaWFsaXplKG9iaiwgdHJhbnNmb3JtKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGtleXMob2JqKS5tYXAoKHApID0+IGAke3RyYW5zZm9ybShlbmNvZGVVUklDb21wb25lbnQocCkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pfWApO1xuICByZXR1cm4gY29tcG9uZW50LmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzQXJyYXknO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBvYmplY3Qgb3duIHByb3BlcnRpZXMgYW5kIGFwcGx5IHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBrZXlzIG9yIHZhbHVlc1xuICogbGV0IGEgPSB7IGxhc3ROYW1lOiBcIlJvbWFuXCIsIGZpcnN0TmFtZTogXCJLaHVkeWFrb3ZcIiB9XG4gKiB0cmF2ZXJzZU9iaihhLCB0b1VuZGVyc2NvcmUpXG4gKiA9PiB7IGxhc3RfbmFtZTogXCJSb21hblwiLCBmaXJzdF9uYW1lOiBcIktodWR5YWtvdlwiIH1cbiAqXG4gKiBAcGFyYW0gb2JqIHtPYmplY3R9XG4gKiBAcGFyYW0gZm5LZXkge0Z1bmN0aW9uIHwgQm9vbGVhbn1cbiAqIEBwYXJhbSBmblZhbHVlIHtGdW5jdGlvbiB8IEJvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXZlcnNlT2JqKG9iaiwgZm5LZXkgPSBmYWxzZSwgZm5WYWx1ZSA9IGZhbHNlKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcblxuICByZXR1cm4ga2V5cyhvYmopLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4ge1xuICAgIGxldCBuZXh0UHJvcGVydHkgPSBvYmpbbmV4dF07XG4gICAgY29uc3QgbyA9IGN1cnI7XG5cbiAgICBpZiAoaXNBcnJheShuZXh0UHJvcGVydHkpKSB7XG4gICAgICBuZXh0UHJvcGVydHkgPSBuZXh0UHJvcGVydHkubWFwKChpKSA9PiB0cmF2ZXJzZU9iaihpLCBmbktleSwgZm5WYWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChmblZhbHVlKSB7XG4gICAgICBvW2ZuS2V5ID8gZm5LZXkobmV4dCkgOiBuZXh0XSA9IGlzT2JqZWN0KG5leHRQcm9wZXJ0eSlcbiAgICAgICAgPyB0cmF2ZXJzZU9iaihuZXh0UHJvcGVydHksIGZuS2V5LCBmblZhbHVlKSA6IGZuVmFsdWUobmV4dFByb3BlcnR5LCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb1tmbktleSA/IGZuS2V5KG5leHQpIDogbmV4dF0gPSBpc09iamVjdChuZXh0UHJvcGVydHkpXG4gICAgICAgID8gdHJhdmVyc2VPYmoobmV4dFByb3BlcnR5LCBmbktleSkgOiBuZXh0UHJvcGVydHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG87XG4gIH0sIHt9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hUb0NhcGl0YWwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvaWcsIChtYXRjaCwgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG59XG4iLCJpbXBvcnQgZGFzaFRvQ2FwaXRhbCBmcm9tICcuL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmcnO1xuaW1wb3J0IHRvVW5kZXJzY29yZSBmcm9tICcuL3RvVW5kZXJzY29yZSc7XG5pbXBvcnQgdW5kZXJzY29yZVRvQ2FwaXRhbCBmcm9tICcuL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdzdHJpbmcnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VbmRlcnNjb3JlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKHMpID0+IGBfJHtzLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmRlcnNjb3JlVG9DYXBpdGFsKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL18oW2Etel0pL2lnLCAobWF0Y2gsIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4vaXMnO1xuaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL21hdGgvaXNOdW1lcmljJztcblxuLy8gVmFsaWRhdGlvbnNcbmNvbnN0IHZhbGlkYXRlID0ge1xuICBpc0JsYW5rKG8pIHtcbiAgICByZXR1cm4gaXMobyk7XG4gIH0sXG4gIGlzTnVtZXJpYyhvKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyhvKTtcbiAgfSxcbiAgaXNFbWFpbChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBpcyhvLm1hdGNoKC9eW15AXFxzXStAKFteQFxcc10rXFwuKStbXkBcXFddKyQvKSk7XG4gIH0sXG4gIGlzQm91bmRlZEJ5KG8sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvID49IG1pbiAmJiBvIDw9IG1heDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ3dpZGdldC11dGlscyc7XG5jb25zdCB7IGlzLCBtZXJnZSwgbW9udGhMZW5ndGgsIGlzU3RyaW5nIH0gPSB1dGlscztcblxuLyoqXG4gKiAgcGxlYXNlIHJlZmVyIHRvIC90ZXN0cy91bml0L2NhbGVuZGFyVHJlZS5zcGVjcy5qcyBmb3IgdXNhZ2VcbiAqICBUT0RPIGRvY3MsIG1lcmdlIGF2YWlsYWJpbGl0eSB3aXRoIGNhbGVuZGFyIHRyZWUsIHVzZSBvbmUgZGF0YS1zdHJ1Y3R1cmVcbiAqICBUT0RPIG1pblN0YXkgKyBhdmFpbGFiaWxpdHkgbWFwIGNvbnNpZGVyYXRpb25zIGZvIGRpc2FibGluZyBkYXRlc1xuICovXG5jb25zdCBnZW5BcnJheVJhbmdlID0gKGEsIGIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gYTsgaSA8PSBiOyBpICs9IDEpIHtcbiAgICBsaXN0LnB1c2goaSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBwYXJzZUlTT1N0cmluZyA9IChzdHIgLyogeXl5eS1tbS1kZCAqLykgPT4ge1xuICBjb25zdCBhcnJTdHIgPSBzdHIuc3BsaXQoJy0nKS5tYXAocGFyc2VGbG9hdCk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogYXJyU3RyWzBdLFxuICAgIG1vbnRoOiBhcnJTdHJbMV0gLSAxLFxuICAgIGRhdGU6IGFyclN0clsyXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJUcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRlQ2VsbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsaWRhdGVDZWxsLCB0cmVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUNlbGwgPSB2YWxpZGF0ZUNlbGw7XG4gICAgdGhpcy50cmVlICAgICAgICAgPSB0cmVlO1xuICB9XG5cbiAgYWRkVHJlZShvYmopIHtcbiAgICBpZiAoIXRoaXMudHJlZSkge1xuICAgICAgdGhpcy50cmVlID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyZWUgPSBtZXJnZSh0aGlzLnRyZWUgfHwge30sIG9iaiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCByYW5nZSBmcm9tIHRoZSB0cmVlLCByZXR1cm5zIGFycmF5IGl0ZW1zXG4gICAqIHN0YXJ0IGRhdGUgaXMgQUxXQVlTIDwgdGhlbiBlbmQgZGF0ZSAsIGFzIHdlIGFyZSBzZWxlY3RpbmcgdGltZSByYW5nZSBpbiBkYXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFydCBlLmcuIFsyMDE2LCAwLCAxXVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbmQgWzIwMTYsIDEsIDNdXG4gICAqIEByZXR1cm5zIHt7cmFuZ2U6IEFycmF5LCBpc1ZhbGlkOiB7Qm9vbGVhbn19fVxuICAgKi9cbiAgc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGxldCByYW5nZSA9IFtdO1xuXG4gICAgY29uc3QgYSA9IHN0YXJ0LnNsaWNlKCk7XG5cbiAgICAvLyBpZiB5ZWFyIGFuZCBtb250aCB0aGUgc2FtZSwganVzdCBzbGljZSB0aGUgY3VycmVudCBtb250aFxuICAgIGlmIChhWzBdID09PSBlbmRbMF0gJiYgYVsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICByYW5nZSA9IHRoaXMuc2VsZWN0RGF5c0luTW9udGgoYVswXSwgYVsxXSwgYVsyXSwgZW5kWzJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGhEYXlzID0gdGhpcy50cmVlW2FbMF1dW2FbMV1dO1xuXG4gICAgICAvLyBzbGljZSB0aGUgcGllY2Ugb2YgY3VycmVudCBtb250aERheXMgZnJvbSBzdGFydCBvZiByYW5nZSB0aWxsIGVuZCBvZiB0aGUgbW9udGhEYXlzXG4gICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdERheXNJbk1vbnRoKGFbMF0sIGFbMV0sIGFbMl0sIG1vbnRoRGF5cy5sZW5ndGgpKTtcblxuICAgICAgLy8gc2hpZnQgc3RhcnQgbW9udGgsIGIvYyB3ZSBhbHJlYWR5IHNlbGVjdGVkIGRheXMgaW4gaXRcbiAgICAgIGFbMV0gKz0gMTtcblxuICAgICAgLy8gaWYgZW5kIGRhdGUgeWVhciA+IHN0YXJ0IGRhdGVcbiAgICAgIC8vIHNlbGVjdCBldmVyeXRoaW5nIGluIHN0YXJ0IHllYXIgdGlsbCB0aGUgZW5kIG9mIHN0YXJ0IHllYXJcbiAgICAgIC8vIGUuZy4gc3RhcnQgaXMgMjAgT2N0b2Jlciwgc28gc2VsZWN0IE5vdmVtYmVyIGFuZCBEZWNlbWJlciwgT2N0b2JlciB3YXMgc2VsZWN0ZWQgYWJvdmVcbiAgICAgIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdE1vbnRoc0luWWVhcihhWzBdLCBhWzFdLCAxMSkpO1xuICAgICAgICAvLyBhbmQgc2V0IHN0YXJ0IHllYXIgdG8gZW5kIHllYXJcbiAgICAgICAgLy8gbW9udGggdG8gMCAoSmFudWFyeSlcbiAgICAgICAgW2FbMF0sIGFbMV1dID0gW2VuZFswXSwgMF07XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB3ZSBhcmUgYXQgdGhlIHNhbWUgeWVhciBhbmQgaGF2ZSB0aGUgY2FzZSBpZiBlbmQgbW9udGggPiBzdGFydCBtb250aFxuICAgICAgLy8gdGhlbiBzZWxlY3QgZXZlcnl0aGluZyBiZXR3ZWVuIHRob3NlIG1vbnRoc1xuICAgICAgaWYgKGVuZFsxXSA+IGFbMV0pIHtcbiAgICAgICAgLy8gZS5nLiBzdGFydCAyMCBPY3RvYmVyIGVuZCAyMCBEZWNlbWJlciwgc2VsZWN0IGZ1bGwgTm92ZW1iZXJcbiAgICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3RNb250aHNJblllYXIoYVswXSwgYVsxXSwgZW5kWzFdIC0gMSkpO1xuICAgICAgICBhWzFdID0gZW5kO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbWlzc2luZyBwYXJ0IGlzIGRheXMgaW4gZW5kIHNlbGVjdGlvbiBtb250aFxuICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aChlbmRbMF0sIGVuZFsxXSwgMSwgZW5kWzJdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmdlLFxuICAgICAgaXNWYWxpZDogdGhpcy5pc1JhbmdlVmFsaWQocmFuZ2UpXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdE1vbnRoc0luWWVhcih5ZWFyLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IHNlbGVjdGlvbiAgICA9IFtdO1xuICAgIGNvbnN0IG1vbnRoUmFuZ2UgPSBnZW5BcnJheVJhbmdlKHN0YXJ0LCBlbmQpO1xuXG4gICAgbW9udGhSYW5nZS5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgICAgY29uc3QgeSA9IHRoaXMudHJlZVt5ZWFyXTtcbiAgICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgICBpZiAoeSAmJiBtKSB7XG4gICAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvbi5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgMSwgbS5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgc3RhcnREYXksIGVuZERheSkge1xuICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XG4gICAgY29uc3QgbSA9IGlzKHkpID8gdGhpcy50cmVlW3llYXJdW21vbnRoXSA6IG51bGw7XG5cbiAgICBpZiAoeSAmJiBtKSB7XG4gICAgICByZXR1cm4gbS5zbGljZSgoc3RhcnREYXkgLSAxKSwgZW5kRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2VsZWN0RGF5KHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICBjb25zdCB5ID0gdGhpcy50cmVlW3llYXJdO1xuICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgaWYgKHkgJiYgbSkge1xuICAgICAgcmV0dXJuIG1bZGF5IC0gMV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNSYW5nZVZhbGlkKHJhbmdlLCBmbikge1xuICAgIGNvbnN0IHZhbGlkYXRlQ2VsbCA9IHRoaXMudmFsaWRhdGVDZWxsIHx8IGZuO1xuICAgIGxldCBpc1ZhbGlkICAgICAgICA9IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRlQ2VsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyVmFsaWRzID0gcmFuZ2UuZmlsdGVyKChjZWxsKSA9PiB0aGlzLnZhbGlkYXRlQ2VsbChjZWxsKSk7XG4gICAgICBpc1ZhbGlkID0gZmlsdGVyVmFsaWRzLmxlbmd0aCA9PSByYW5nZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICByZXBsYWNlTWFwcyhtYXAsIHVwZGF0ZWRBdCkge1xuICAgIHRoaXMubWFwID0gQ2FsZW5kYXJUcmVlLm1hcHNUb1RyZWUobWFwLCB1cGRhdGVkQXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTWFwKCkge1xuICAgIHRoaXMubWFwID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogIENyZWF0ZSBhIHRyZWUgc3RydWN0dXJlIGZyb20gbWFwc1xuICAgKiAgZm9yIG4tdGltZSBkYXkgYWNjZXNzLCBlLmcuIHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldLmlzQXZhaWxhYmxlO1xuICAgKiB7XG4gICAqICAgMjEwNjoge1xuICAgKiAgICAgIDE6IHtcbiAgICogICAgICAgIDE6ICxcbiAgICogICAgICAgIDI6ICxcbiAgICogICAgICAgIDM6XG4gICAqICAgICAgICAuLi5cbiAgICogICAgICB9XG4gICAqICAgICAgLi4uXG4gICAqICAgICAgMTI6IHtcbiAgICpcbiAgICogICAgICB9XG4gICAqICAgIH1cbiAgICogfVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwc1xuICAgKiBAcGFyYW0ge1N0cmluZyB8IERhdGV9IG1hcFN0YXJ0QXRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBtYXBzVG9UcmVlKG1hcHMsIG1hcFN0YXJ0QXQpIHtcbiAgICBpZiAoIShpc1N0cmluZyhtYXBzLmF2YWlsYWJpbGl0eSlcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubmlnaHRseV9yYXRlcylcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubWluaW11bV9zdGF5cykpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbCAgPSBtYXBzLmF2YWlsYWJpbGl0eS5zcGxpdCgnJykubWFwKHBhcnNlRmxvYXQpO1xuICAgIGNvbnN0IHJhdGVzICA9IG1hcHMubmlnaHRseV9yYXRlcy5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBjb25zdCBtaW5NYXAgPSBtYXBzLm1pbmltdW1fc3RheXMuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgbGV0IGRheSAgICAgID0gMTtcblxuICAgIGxldCB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXRlOiBkYXlTaGlmdFxuICAgIH0gPSBwYXJzZUlTT1N0cmluZyhtYXBTdGFydEF0KTtcblxuICAgIC8vIHRyaWNrIHRvIGFkZCBleHRyYSB1bmF2YWlsYWJsZSBkYXRlIGZvciBwcm9wZXIgY2FsY3VsYXRpb25zIG9mIGNoZWNrLW91dCBkYXRlc1xuICAgIGlmIChhdmFpbFthdmFpbC5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgYXZhaWwucHVzaCgxKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNEYXRlID0ge307XG5cbiAgICByZXR1cm4gYXZhaWwucmVkdWNlKChjdXJyLCBzdGF0ZSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoICAgICAgICAgICA9IG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKTtcbiAgICAgIGNvbnN0IHRyZWUgICAgICAgICAgICAgPSBjdXJyO1xuICAgICAgY29uc3QgbWluU3RheSAgICAgICAgICA9IG1pbk1hcFtpbmRleF07XG4gICAgICBjb25zdCByYXRlICAgICAgICAgICAgID0gcmF0ZXNbaW5kZXhdO1xuICAgICAgY29uc3QgaXNBdmFpbGFibGUgICAgICA9IHN0YXRlID09PSAwO1xuICAgICAgY29uc3QgcHJldkF2YWlsYWJsZSAgICA9IGFycltpbmRleCAtIDFdID09PSAwO1xuICAgICAgY29uc3QgaXNNb3JuaW5nQmxvY2tlZCA9IChpc0F2YWlsYWJsZSAmJiAhcHJldkF2YWlsYWJsZSkgPyB0cnVlIDogbnVsbDtcbiAgICAgIGNvbnN0IGlzQXZhaWxhYmxlT3V0ICAgPSAoaXNNb3JuaW5nQmxvY2tlZCkgPyB0cnVlIDogbnVsbDtcblxuICAgICAgaWYgKCF0cmVlW3llYXJdKSB7XG4gICAgICAgIHRyZWVbeWVhcl0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmVlW3llYXJdW21vbnRoXSkge1xuICAgICAgICB0cmVlW3llYXJdW21vbnRoXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5U2hpZnQpIHtcbiAgICAgICAgZGF5ICAgICAgPSBkYXlTaGlmdDtcbiAgICAgICAgZGF5U2hpZnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBtaW5TdGF5ID4gYXZhaWxhYmxlIGRheXMgaW4gZnV0dXJlXG4gICAgICAvLyBjb25zaWRlciBjdXJyZW50IGRheSBhcyB1bmF2YWlsYWJsZSBhcyB3ZWxsXG4gICAgICAvLyBpZiAoaXNBdmFpbGFibGUgJiYgbWluU3RheSA+IDEpIHtcbiAgICAgIC8vICAgbGV0IGRheXNBdmFpbGFibGUgPSAxO1xuICAgICAgLy8gICBsZXQgaSAgICAgICAgICAgICA9IGluZGV4ICsgMTtcbiAgICAgIC8vICAgd2hpbGUgKGFycltpXSA9PT0gMCkge1xuICAgICAgLy8gICAgIGRheXNBdmFpbGFibGUgKz0gMTtcbiAgICAgIC8vICAgICBpICs9IDE7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vXG4gICAgICAvLyAgIGlmIChtaW5TdGF5ID4gZGF5c0F2YWlsYWJsZSkge1xuICAgICAgLy8gICAgIGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgdHJlZVt5ZWFyXVttb250aF1bZGF5XSA9IHtcbiAgICAgICAgcmF0ZSxcbiAgICAgICAgbWluU3RheSxcbiAgICAgICAgaXNBdmFpbGFibGUsXG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQsXG4gICAgICAgIGlzQXZhaWxhYmxlT3V0XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAocHJldkF2YWlsYWJsZSAmJiAhaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICB0cmVlW3ByZXZpb3VzRGF0ZS55ZWFyXVtwcmV2aW91c0RhdGUubW9udGhdW3ByZXZpb3VzRGF0ZS5kYXldLmlzQXZhaWxhYmxlT3V0ID0gdHJ1ZTtcbiAgICAgICAgICB0cmVlW3llYXJdW21vbnRoXVtkYXldLmlzTW9ybmluZ0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIC8vIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzRGF0ZSA9IHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheVxuICAgICAgfTtcblxuICAgICAgaWYgKGRheSA8IGxlbmd0aCkge1xuICAgICAgICBkYXkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtb250aCA+IDEwKSB7XG4gICAgICAgICAgbW9udGggPSAwO1xuICAgICAgICAgIHllYXIgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb250aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGRheSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXksIHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGF5RGF0YSA9IHRoaXMuZ2V0RGF5KHllYXIsIG1vbnRoLCBkYXkpO1xuICAgIHJldHVybiBkYXlEYXRhID8gZGF5RGF0YVtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXREYXkoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXJEYXRhID0gdGhpcy5tYXBbeWVhcl07XG4gICAgaWYgKCF5ZWFyRGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhEYXRhID0geWVhckRhdGFbbW9udGhdO1xuICAgIGlmICghbW9udGhEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhEYXRhW2RheV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlzRGF5RGlzYWJsZWQoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGNvbnN0IGRheURhdGEgPSB0aGlzLmdldERheSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICByZXR1cm4gIShkYXlEYXRhICYmIGRheURhdGEuaXNBdmFpbGFibGUpO1xuICB9XG59XG4iLCIvKiBnbG9iYWwgTm9kZSwgZG9jdW1lbnQsIHdpbmRvdywgY29uc29sZSwgcmVxdWlyZSwgZmV0Y2gsIHNldFRpbWVvdXQgKi9cbmltcG9ydCB1dGlscyBmcm9tICd3aWRnZXQtdXRpbHMnO1xuXG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IENhbGVuZGFyVHJlZSBmcm9tICcuL2NhbGVuZGFyLXRyZWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuL2xvY2FsZXMnO1xuaW1wb3J0IGNyZWF0ZVBvc2l0aW9uZXIgZnJvbSAnLi9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IHN0cmZ0aW1lIH0gZnJvbSAnc3RydGltZSc7XG5cbmltcG9ydCB7XG4gIGRhdGVUb0lzbywgaXNMYXRlciwgaXNDdXJyZW50LCB2YWxpZGF0aW9uT2ZDZWxsLCB0Rm9ybWF0dGVyLCBkYXRlVG9BcnJheSwgbW9udGhEaWZmXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnO1xuXG5pbXBvcnQgdXRpbHNTdHlsZXMgZnJvbSAnd2lkZ2V0LXV0aWxzL3NyYy9zdHlsZXMvcmVzZXQuc2Nzcyc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgaXNBcnJheSwgaXNPYmplY3QsIEVtaXR0ZXIsXG4gIG1lcmdlLCBlbGVtZW50RnJvbVN0cmluZywgdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyLCBkZXN0cm95RWxlbWVudCwgbW9udGhMZW5ndGgsIGlzLCBpc0Z1bmN0aW9uLFxuICBpc051bWVyaWMsIHRyYXZlcnNlT2JqLCBpc0luc2lkZSwgY3VycmVuY3lGb3JtYXR0ZXJcbn0gPSB1dGlscztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgRW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMsIG1hcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSAgICA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuVkVSU0lPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4gICAgdGhpcy5DU1NfUFJFRklYID0gY29uZmlnLmNzc1ByZWZpeDtcblxuICAgIGlmIChpc09iamVjdChvcHRzKSkge1xuICAgICAgaWYgKCFvcHRzLmVsKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyKCdlbCBtdXN0IGJlIEhUTUwgZWxlbWVudCcsICdlcnJvcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbmZpZ0RhdGFzZXQgPSBtZXJnZShjb25maWcsIG9wdHMuZWwuZGF0YXNldCk7XG4gICAgICB0aGlzLm9wdHMgICAgICAgICAgID0gbWVyZ2UoY29uZmlnRGF0YXNldCwgb3B0cyk7XG5cbiAgICAgIHRoaXMub3B0cyA9IHRyYXZlcnNlT2JqKHRoaXMub3B0cywgKGEpID0+IGEsIChiKSA9PiB7XG4gICAgICAgIGlmIChiID09PSAndHJ1ZScgfHwgYiA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJldHVybiAoYiA9PT0gJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1lcmljKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9wdHMubGFuZyAgICAgICAgPSAodGhpcy5vcHRzLmxhbmcgJiYgdGhpcy5vcHRzLmxhbmcgaW4gbG9jYWxlcykgPyB0aGlzLm9wdHMubGFuZyA6ICdlbi1VUyc7XG4gICAgICB0aGlzLmxvY2FsZSAgICAgICAgICAgPSBsb2NhbGVzW3RoaXMub3B0cy5sYW5nXTtcbiAgICAgIHRoaXMuZm9ybWF0ICAgICAgICAgICA9IHRoaXMub3B0cy5mb3JtYXREYXRlIHx8IHRoaXMubG9jYWxlLmZvcm1hdERhdGUgfHwgJyVtLyVkLyVZJztcbiAgICAgIHRoaXMub3B0cy5zdGFydE9mV2VlayA9IHRoaXMub3B0cy5zdGFydE9mV2VlayB8fCB0aGlzLmxvY2FsZS5zdGFydE9mV2VlaztcblxuICAgICAgbGV0IHsgY3VycmVudERhdGUgfSA9IHRoaXMub3B0cztcbiAgICAgIGNvbnN0IHllYXIgID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGRheSAgID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICB0aGlzLm9wdHMuY3VycmVudERhdGUgPSBbeWVhciwgbW9udGgsIGRheV07XG5cbiAgICAgIGlmICghdGhpcy5vcHRzLnllYXJTdGFydCkge1xuICAgICAgICB0aGlzLm9wdHMueWVhclN0YXJ0ID0geWVhcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdHMubW9udGhTdGFydCkge1xuICAgICAgICB0aGlzLm9wdHMubW9udGhTdGFydCA9IG1vbnRoO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5vcm1hbGl6ZVJlc3BvbnNpdmVPcHRpb25zKCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdHMuaXNEcm9wRG93bikge1xuICAgICAgICB0aGlzLmluaXRDYWxlbmRhckRyb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRzLmVsO1xuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIFRPRE86IHJlbmFtZSBkYXlzVHJlZVxuICAgIHRoaXMuZG9tICAgPSB7fTtcbiAgICAvLyBUT0RPOiByZW5hbWUgdG8gY2FsZW5kYXJUcmVlIG9yIGJvb2tpbmdzVHJlZVxuICAgIHRoaXMuY1RyZWUgPSBuZXcgQ2FsZW5kYXJUcmVlKHZhbGlkYXRpb25PZkNlbGwsIHt9KTtcbiAgICAvLyBUT0RPOiByZW5hbWUgdG8gYm9va2luZ3NEYXRhICYgYWRkRGF0YVxuICAgIGlmIChpc09iamVjdChtYXBzKSkge1xuICAgICAgdGhpcy5jVHJlZS5hZGRNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSB8fCBkYXRlVG9Jc28odGhpcy5vcHRzLmN1cnJlbnREYXRlKSk7XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0aW9uIGFuZCBoaWdobGlnaHRzXG4gICAgdGhpcy5pc1NlbGVjdGluZyAgICAgICA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMgPSBbXTtcbiAgICB0aGlzLmhhc1ZhbGlkUmFuZ2UgICAgID0gdHJ1ZTtcblxuICAgIC8vIFRPRE86IHJlbmFtZSBpc1JldmVyc2VTZWxlY3RhYmxlIHRvIHNlbGVjdGlvbkRlZmF1bHREaXJlY3Rpb24gLSBzaG91bGQgYmUgTFRSIG9yIFJUTFxuICAgIC8vIHVzZXIgc2VsZWN0cyBlbmQgZGF0ZSBmaXJzdFxuICAgIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA9IHRoaXMub3B0cy5pc1JldmVyc2VTZWxlY3RhYmxlO1xuICAgIHRoaXMuZGlzcGxheU1vbnRocyA9IHRoaXMub3B0cy5kaXNwbGF5TW9udGhzO1xuICAgIHRoaXMubWVkaWFRdWVyeUxpc3QgPSBudWxsO1xuICAgIHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gbnVsbDtcbiAgICB0aGlzLm9uRG9jdW1lbnRLZXlkb3duID0gbnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmNhbGVuZGFyLCB1dGlsc1N0eWxlcy5yZXNldCk7XG5cbiAgICBpZiAoIXRoaXMuZWwuZGF0YXNldC50aGVtZSkge1xuICAgICAgdGhpcy5lbC5kYXRhc2V0LnRoZW1lID0gdGhpcy5vcHRzLnRoZW1lO1xuICAgIH1cblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGUubGFiZWxzLmNhbGVuZGFyKTtcblxuICAgIHRoaXMuZG9tLnNwcml0ZSA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoXG4gICAgICBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuc3ZnU3ByaXRlKGAke3RoaXMuQ1NTX1BSRUZJWH1DaGV2cm9uRG93bmApKVxuICAgICk7XG4gICAgdGhpcy5kb20ucGFnaW5hdGlvbiAgICA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLnBhZ2luYXRpb24oKSkpO1xuICAgIHRoaXMuZG9tLm1vYmlsZVdlZWtkYXlzID0gdGhpcy5lbC5hcHBlbmRDaGlsZChcbiAgICAgIGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5tb2JpbGVXZWVrZGF5cyh0aGlzLmhlYWRlclRlbXBsYXRlU3RyaW5nKCkpKVxuICAgICk7XG4gICAgdGhpcy5kb20ubW9udGhzV3JhcHBlciA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLm1haW4odGhpcy5sb2NhbGUubGFiZWxzLm1vbnRocykpKTtcbiAgICB0aGlzLmRvbS5saXZlUmVnaW9uID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMubGl2ZVJlZ2lvbigpKSk7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuc2hhcmVkWWVhclBpY2tlclBhbmVsKHtcbiAgICAgIGNsb3NlTGFiZWw6IHRoaXMubG9jYWxlLmxhYmVscy5jbG9zZSB8fCAnQ2xvc2UnLFxuICAgICAgcHJldmlvdXNMYWJlbDogdGhpcy5sb2NhbGUubGFiZWxzLnByZXZpb3VzWWVhcnMgfHwgJ1ByZXZpb3VzIHllYXJzJyxcbiAgICAgIG5leHRMYWJlbDogdGhpcy5sb2NhbGUubGFiZWxzLm5leHRZZWFycyB8fCAnTmV4dCB5ZWFycydcbiAgICB9KSkpO1xuICAgIHRoaXMuZG9tLmZvcndhcmQgICAgICAgPSB0aGlzLmRvbS5wYWdpbmF0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLmZvcndhcmQodGhpcy5sb2NhbGUubGFiZWxzLm1vbnRoc0ZvcndhcmQpKVxuICAgICk7XG4gICAgdGhpcy5kb20uYmFjayAgICAgICAgICA9IHRoaXMuZG9tLnBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgICBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuYmFjayh0aGlzLmxvY2FsZS5sYWJlbHMubW9udGhzQmFja3dhcmQpKVxuICAgICk7XG4gICAgdGhpcy5hZGRDYXB0aW9uUGlja2VyRXZlbnRzKCk7XG4gICAgdGhpcy5hZGRWaWV3cG9ydEV2ZW50cygpO1xuICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMub3B0cy55ZWFyU3RhcnQsIHRoaXMub3B0cy5tb250aFN0YXJ0KTtcblxuICAgIHRoaXMuYWRkQnRuc0V2ZW50cygpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlICYmIHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIGlmICghdGhpcy5vcHRzLnJlbnRhbElkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzVG9WYWx1ZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbignbWFwcy1sb2FkZWQnLCAoKSA9PiB0aGlzLmlucHV0c1RvVmFsdWVzKCkpO1xuICAgICAgdGhpcy5vcHRzLmVsU3RhcnRBdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuaW5wdXRzVG9WYWx1ZXMoKSk7XG4gICAgICB0aGlzLm9wdHMuZWxFbmRBdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuaW5wdXRzVG9WYWx1ZXMoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5yZW50YWxJZCAmJiAhdGhpcy5vcHRzLmlzRHJvcERvd24pIHtcbiAgICAgIHRoaXMubG9hZE1hcHModGhpcy5vcHRzLnJlbnRhbElkKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmRhdGFzZXQuc2VsZWN0YWJsZSA9IHRoaXMub3B0cy5zZWxlY3RhYmxlO1xuXG4gICAgdGhpcy5sb2dnZXIoJ2luaXRlZCcpO1xuICAgIHRoaXMuZW1pdCgnaW5pdCcpO1xuICB9XG5cbiAgY2hhbmdlU2VsZWN0aW9uT3JkZXIoaXNSZXZlcnNlKSB7XG4gICAgaWYgKChpc1JldmVyc2UgIT09IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgJiYgIXRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA9IGlzUmV2ZXJzZTtcbiAgICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgICAgdGhpcy5yZW5kZXJNb250aHModGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCk7XG4gICAgfVxuICB9XG5cbiAgbm9ybWFsaXplUmVzcG9uc2l2ZU9wdGlvbnMoKSB7XG4gICAgY29uc3QgZmFsbGJhY2tEaXNwbGF5TW9udGhzID0gdGhpcy50b1Bvc2l0aXZlSW50KHRoaXMub3B0cy5kaXNwbGF5TW9udGhzLCAyKTtcbiAgICB0aGlzLm9wdHMuZGlzcGxheU1vbnRocyA9IGZhbGxiYWNrRGlzcGxheU1vbnRocztcbiAgICB0aGlzLm9wdHMuZGlzcGxheU1vbnRoc01vYmlsZSA9IHRoaXMudG9Qb3NpdGl2ZUludChcbiAgICAgIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzTW9iaWxlLFxuICAgICAgZmFsbGJhY2tEaXNwbGF5TW9udGhzXG4gICAgKTtcbiAgICB0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludCA9IHRoaXMudG9Ob25OZWdhdGl2ZUludCh0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludCwgNzY3KTtcbiAgfVxuXG4gIHRvUG9zaXRpdmVJbnQodmFsdWUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHRvTm9uTmVnYXRpdmVJbnQodmFsdWUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGlzTW9iaWxlVmlld3BvcnQoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lZGlhUXVlcnlMaXN0Lm1hdGNoZXM7XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9ICh3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5pbm5lcldpZHRoID09PSAnbnVtYmVyJylcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIDogdGhpcy5vcHRzLm1vYmlsZUJyZWFrcG9pbnQgKyAxO1xuXG4gICAgcmV0dXJuIHZpZXdwb3J0V2lkdGggPD0gdGhpcy5vcHRzLm1vYmlsZUJyZWFrcG9pbnQ7XG4gIH1cblxuICBhcHBseVZpZXdwb3J0TW9kZShpc01vYmlsZVZpZXdwb3J0KSB7XG4gICAgaWYgKCF0aGlzLmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzTW9iaWxlVmlld3BvcnQpIHtcbiAgICAgIHRoaXMuZWwuZGF0YXNldC52aWV3cG9ydCA9ICdtb2JpbGUnO1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZU1vZGUpO1xuICAgICAgaWYgKHRoaXMub3B0cy5zaG93UGFnaW5hdGlvbk1vYmlsZSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5kYXRhc2V0LnZpZXdwb3J0ID0gJ2Rlc2t0b3AnO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZU1vZGUpO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXREaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKSB7XG4gICAgY29uc3QgaXNNb2JpbGVWaWV3cG9ydCA9IHRoaXMuaXNNb2JpbGVWaWV3cG9ydCgpO1xuXG4gICAgdGhpcy5hcHBseVZpZXdwb3J0TW9kZShpc01vYmlsZVZpZXdwb3J0KTtcblxuICAgIGlmIChpc01vYmlsZVZpZXdwb3J0KSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmRpc3BsYXlNb250aHNNb2JpbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzO1xuICB9XG5cbiAgc3luY0Rpc3BsYXlNb250aHNGb3JWaWV3cG9ydCgpIHtcbiAgICBjb25zdCBuZXh0RGlzcGxheU1vbnRocyA9IHRoaXMuZ2V0RGlzcGxheU1vbnRoc0ZvclZpZXdwb3J0KCk7XG4gICAgY29uc3QgaGFzQ2hhbmdlZCA9IHRoaXMuZGlzcGxheU1vbnRocyAhPT0gbmV4dERpc3BsYXlNb250aHM7XG5cbiAgICB0aGlzLmRpc3BsYXlNb250aHMgPSBuZXh0RGlzcGxheU1vbnRocztcbiAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgfVxuXG4gIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnN5bmNEaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICB0aGlzLnJlbmRlck1vbnRocyh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0KTtcbiAgICB9XG4gIH1cblxuICBhZGRWaWV3cG9ydEV2ZW50cygpIHtcbiAgICB0aGlzLnJlbW92ZVZpZXdwb3J0RXZlbnRzKCk7XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludH1weClgKTtcbiAgICAgIHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlID0gKCkgPT4gdGhpcy5oYW5kbGVWaWV3cG9ydENoYW5nZSgpO1xuXG4gICAgICBpZiAodGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB0aGlzLmhhbmRsZVZpZXdwb3J0Q2hhbmdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICB9XG5cbiAgcmVtb3ZlVmlld3BvcnRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLm1lZGlhUXVlcnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdCA9IG51bGw7XG4gICAgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub25XaW5kb3dSZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1vbnRocyh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQpIHtcbiAgICB0aGlzLnN5bmNEaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKTtcblxuICAgIGNvbnN0IGhlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkZXJUZW1wbGF0ZVN0cmluZygpO1xuICAgIC8vIGNvbnN0cnVjdCBkb20gdHJlZVxuICAgIGNvbnN0IHtcbiAgICAgIHRyZWUsIHllYXJFbmQsIG1vbnRoRW5kLCBtb250aHNcbiAgICB9ID0gdGhpcy5jcmVhdGVUcmVlKHllYXJTdGFydCwgbW9udGhTdGFydCwgdGhpcy5kaXNwbGF5TW9udGhzLCBoZWFkZXJUZW1wbGF0ZSk7XG5cbiAgICB0aGlzLmNUcmVlLmFkZFRyZWUodHJlZSk7XG5cbiAgICB0aGlzLm1vbnRoU3RhcnQgPSBtb250aFN0YXJ0O1xuICAgIHRoaXMueWVhclN0YXJ0ICA9IHllYXJTdGFydDtcblxuICAgIHRoaXMubW9udGhFbmQgPSBtb250aEVuZDtcbiAgICB0aGlzLnllYXJFbmQgID0geWVhckVuZDtcblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID8gc3R5bGVzLnJldmVyc2VkIDogc3R5bGVzLmRpcmVjdCk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPyBzdHlsZXMuZGlyZWN0IDogc3R5bGVzLnJldmVyc2VkKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbS5tb250aHMgPSBtb250aHM7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICB0aGlzLmRvbS5tb250aHMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuYWRkTW9udGhFdmVudHMobSk7XG4gICAgICB9XG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kb20ubW9udGhzV3JhcHBlci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5hY3Rpb25zRW5hYmxlZCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cykge1xuICAgICAgdGhpcy5kaXNhYmxlQmFja0J0bigpO1xuICAgIH1cblxuICAgIHRoaXMucmVjb3ZlclNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIHJlY292ZXJTZWxlY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICB0aGlzLnNlbGVjdFN0YXJ0KHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuY1RyZWUuc2VsZWN0RGF5KC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgIHRoaXMuc2VsZWN0RW5kKHRoaXMuc2VsZWN0aW9uRW5kLCB0aGlzLmNUcmVlLnNlbGVjdERheSguLi50aGlzLnNlbGVjdGlvbkVuZCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICBpZiAodGhpcy5oaWdobGlnaHRlZEJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UoLi4udGhpcy5oaWdobGlnaHRlZEJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNhYmxlQmFja0J0bigpIHtcbiAgICBpZiAodGhpcy5vcHRzLmlzQmFja0Rpc2FibGVkKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgICAgICAgID0gZGF0ZVRvSXNvKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQsIDEpO1xuICAgICAgbGV0IHsgY3VycmVudERhdGUgfSAgICA9IHRoaXMub3B0cztcbiAgICAgIGN1cnJlbnREYXRlICAgICAgICAgICAgPSBkYXRlVG9Jc28oY3VycmVudERhdGVbMF0sIGN1cnJlbnREYXRlWzFdLCAxKTtcbiAgICAgIHRoaXMuZG9tLmJhY2suZGlzYWJsZWQgPSBzdGFydERhdGUgPD0gY3VycmVudERhdGU7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTG9hZGluZygpIHtcbiAgICBpZiAoIWhhc0NsYXNzKHRoaXMuZWwsIHN0eWxlcy5sb2FkaW5nKSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmxvYWRpbmcpO1xuICAgICAgdGhpcy5lbWl0KCdsb2FkaW5nLXNob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmxvYWRpbmcpO1xuICAgICAgdGhpcy5lbWl0KCdsb2FkaW5nLWhpZGUnKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXBzKG1hcHMpIHtcbiAgICB0aGlzLmNUcmVlLnJlcGxhY2VNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSk7XG4gICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgdGhpcy5yZW5kZXJNb250aHMoXG4gICAgICB0aGlzLm9wdHMueWVhclN0YXJ0IHx8IHRoaXMueWVhclN0YXJ0LFxuICAgICAgdGhpcy5vcHRzLm1vbnRoU3RhcnQgfHwgdGhpcy5tb250aFN0YXJ0XG4gICAgKTtcbiAgfVxuXG4gIGFkZEJ0bnNFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uZm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeWVhcjogeWVhclRvUmVuZGVyLFxuICAgICAgICBtb250aDogbW9udGhUb1JlbmRlclxuICAgICAgfSA9IHRoaXMuc2hpZnRNb250aCh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0LCB0aGlzLm9wdHMubW9udGhzUGFnaW5hdGlvbkp1bXAgfHwgdGhpcy5kaXNwbGF5TW9udGhzKTtcblxuICAgICAgdGhpcy5yZW5kZXJNb250aHMoeWVhclRvUmVuZGVyLCBtb250aFRvUmVuZGVyKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZG9tLmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHllYXI6IHllYXJUb1JlbmRlcixcbiAgICAgICAgbW9udGg6IG1vbnRoVG9SZW5kZXJcbiAgICAgIH0gPSB0aGlzLnNoaWZ0TW9udGgodGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCwgLSh0aGlzLm9wdHMubW9udGhzUGFnaW5hdGlvbkp1bXAgfHwgdGhpcy5kaXNwbGF5TW9udGhzKSk7XG5cbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHllYXJUb1JlbmRlciwgbW9udGhUb1JlbmRlcik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXB0aW9uUGlja2VyRXZlbnRzKCkge1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGVDYWxlbmRhciA9IHRoaXMuZWwuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgY29uc3QgdHJpZ2dlciA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgJ2RhdGEteWVhci1waWNrZXItdHJpZ2dlcicpLnBhcmVudDtcbiAgICAgIGNvbnN0IHllYXJPcHRpb24gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXllYXItb3B0aW9uJyk7XG4gICAgICBjb25zdCB5ZWFyUGFnZXIgPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXllYXItcGFnZS1vZmZzZXQnKTtcbiAgICAgIGNvbnN0IGNsb3NlUGlja2VyID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS15ZWFyLXBpY2tlci1jbG9zZScpLnBhcmVudDtcblxuICAgICAgaWYgKCFjbGlja2VkSW5zaWRlQ2FsZW5kYXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlWWVhclBpY2tlcikge1xuICAgICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xvc2VQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoe1xuICAgICAgICAgIGZvY3VzVHJpZ2dlcjogZS5kZXRhaWwgPT09IDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHllYXJPcHRpb24ucGFyZW50ICYmIHllYXJPcHRpb24udmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhck9wdGlvbi52YWx1ZSwgMTApO1xuICAgICAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVllYXJQaWNrZXI7XG4gICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgICAgIGlmIChtb250aEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckZyb21TbG90KG1vbnRoRWxlbWVudCwgc2VsZWN0ZWRZZWFyLCBtb250aEVsZW1lbnQubW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHllYXJQYWdlci5wYXJlbnQgJiYgeWVhclBhZ2VyLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRoaXMuYWN0aXZlWWVhclBpY2tlcjtcbiAgICAgICAgY29uc3QgbmV4dFllYXJQYWdlU3RhcnQgPSBwYXJzZUludCh0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuZGF0YXNldC55ZWFyUGFnZVN0YXJ0IHx8IG1vbnRoRWxlbWVudC55ZWFyLCAxMClcbiAgICAgICAgICArIHBhcnNlSW50KHllYXJQYWdlci52YWx1ZSwgMTApO1xuICAgICAgICBpZiAobW9udGhFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJZZWFyR3JpZChtb250aEVsZW1lbnQsIG5leHRZZWFyUGFnZVN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRyaWdnZXIuY2xvc2VzdCgnLmpzLW1vbnRoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlWWVhclBpY2tlciA9PT0gbW9udGhFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoe1xuICAgICAgICAgICAgZm9jdXNUcmlnZ2VyOiBlLmRldGFpbCA9PT0gMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3BlblllYXJQaWNrZXIobW9udGhFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVllYXJQaWNrZXJcbiAgICAgICAgJiYgIXRoaXMuYWN0aXZlWWVhclBpY2tlci5jb250YWlucyhlLnRhcmdldClcbiAgICAgICAgJiYgIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vbkRvY3VtZW50S2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuYWN0aXZlWWVhclBpY2tlcikge1xuICAgICAgICB0aGlzLmNsb3NlWWVhclBpY2tlcih7XG4gICAgICAgICAgZm9jdXNUcmlnZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFycm93IGtleSBuYXZpZ2F0aW9uIHdpdGhpbiB5ZWFyIHBpY2tlciBncmlkICgzIGNvbHVtbnMpXG4gICAgICBpZiAodGhpcy5hY3RpdmVZZWFyUGlja2VyICYmIHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgICB0aGlzLmhhbmRsZVllYXJQaWNrZXJLZXlkb3duKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkRvY3VtZW50S2V5ZG93bik7XG4gIH1cblxuICBvcGVuWWVhclBpY2tlcihtb250aEVsZW1lbnQpIHtcbiAgICBpZiAoIW1vbnRoRWxlbWVudCB8fCAhdGhpcy5lbC5jb250YWlucyhtb250aEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gbW9udGhFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItcGlja2VyLXRyaWdnZXJdJyk7XG5cbiAgICBpZiAoIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCB8fCAhdHJpZ2dlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb25ZZWFyUGlja2VyUGFuZWwoKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGUubGFiZWxzLmNhbGVuZGFyKTtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnllYXJQaWNrZXJPcGVuKTtcbiAgICB0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPSBtb250aEVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJZZWFyR3JpZChtb250aEVsZW1lbnQsIG1vbnRoRWxlbWVudC55ZWFyIC0gNSk7XG5cbiAgICAvLyBGb2N1cyB0aGUgc2VsZWN0ZWQgeWVhciBidXR0b24sIG9yIHRoZSBmaXJzdCB5ZWFyIGJ1dHRvblxuICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdGVkLXllYXJdJyk7XG4gICAgY29uc3QgZmlyc3RCdG4gPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1vcHRpb25dJyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRCdG4pIHtcbiAgICAgIHNlbGVjdGVkQnRuLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEJ0bikge1xuICAgICAgZmlyc3RCdG4uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVllYXJQaWNrZXIoe1xuICAgIGZvY3VzVHJpZ2dlciA9IGZhbHNlXG4gIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5hY3RpdmVZZWFyUGlja2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuYWN0aXZlWWVhclBpY2tlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS15ZWFyLXBpY2tlci10cmlnZ2VyXScpO1xuXG4gICAgaWYgKHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBpZiAoZm9jdXNUcmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMueWVhclBpY2tlck9wZW4pO1xuICAgIHRoaXMuYWN0aXZlWWVhclBpY2tlciA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVZZWFyUGlja2VyS2V5ZG93bihlKSB7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWw7XG4gICAgY29uc3QgZm9jdXNlZCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpO1xuXG4gICAgaWYgKCFmb2N1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gZS5rZXkgfHwgZS5rZXlDb2RlO1xuICAgIGNvbnN0IHllYXJCdXR0b25zID0gQXJyYXkuZnJvbShwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS15ZWFyLW9wdGlvbl0nKSk7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0geWVhckJ1dHRvbnMuaW5kZXhPZihmb2N1c2VkKTtcblxuICAgIC8vIEFycm93IG5hdmlnYXRpb24gd2l0aGluIHRoZSAzLWNvbHVtbiB5ZWFyIGdyaWRcbiAgICBjb25zdCBjb2xzID0gMztcbiAgICBjb25zdCBhcnJvd09mZnNldHMgPSB7XG4gICAgICBBcnJvd0xlZnQ6IC0xLCBBcnJvd1JpZ2h0OiAxLFxuICAgICAgQXJyb3dVcDogLWNvbHMsIEFycm93RG93bjogY29scyxcbiAgICAgIDM3OiAtMSwgMzk6IDEsIDM4OiAtY29scywgNDA6IGNvbHNcbiAgICB9O1xuXG4gICAgaWYgKGFycm93T2Zmc2V0c1trZXldICE9PSB1bmRlZmluZWQgJiYgY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBjdXJyZW50SW5kZXggKyBhcnJvd09mZnNldHNba2V5XTtcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID49IDAgJiYgdGFyZ2V0SW5kZXggPCB5ZWFyQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgeWVhckJ1dHRvbnNbdGFyZ2V0SW5kZXhdLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyB0cmFwOiBUYWIgY3ljbGVzIHdpdGhpbiB0aGUgeWVhciBwaWNrZXIgcGFuZWxcbiAgICBpZiAoa2V5ID09PSAnVGFiJyB8fCBrZXkgPT09IDkpIHtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZSA9IEFycmF5LmZyb20ocGFuZWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pJykpO1xuXG4gICAgICBpZiAoZm9jdXNhYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmaXJzdEVsXSA9IGZvY3VzYWJsZTtcbiAgICAgIGNvbnN0IGxhc3RFbCA9IGZvY3VzYWJsZVtmb2N1c2FibGUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWQgPT09IGZpcnN0RWwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsYXN0RWwuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZCA9PT0gbGFzdEVsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RFbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclllYXJHcmlkKG1vbnRoRWxlbWVudCwgeWVhclBhZ2VTdGFydCkge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsO1xuICAgIGNvbnN0IGdyaWQgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1ncmlkXScpO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZXIgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1wYWdlLW9mZnNldD1cIi0xMlwiXScpO1xuICAgIGNvbnN0IG5leHRQYWdlciA9IHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS15ZWFyLXBhZ2Utb2Zmc2V0PVwiMTJcIl0nKTtcblxuICAgIGlmICghcGFuZWwgfHwgIWdyaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5pbXVtWWVhciA9IHRoaXMubWluaW11bVNlbGVjdGFibGVZZWFyKCk7XG4gICAgY29uc3QgYm91bmRlZFllYXJQYWdlU3RhcnQgPSBtaW5pbXVtWWVhciA9PT0gbnVsbFxuICAgICAgPyB5ZWFyUGFnZVN0YXJ0XG4gICAgICA6IE1hdGgubWF4KHllYXJQYWdlU3RhcnQsIG1pbmltdW1ZZWFyKTtcbiAgICBjb25zdCB5ZWFycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeWVhciA9IGJvdW5kZWRZZWFyUGFnZVN0YXJ0OyB5ZWFyIDwgYm91bmRlZFllYXJQYWdlU3RhcnQgKyAxMjsgeWVhciArPSAxKSB7XG4gICAgICB5ZWFycy5wdXNoKHRlbXBsYXRlcy55ZWFyT3B0aW9uKHllYXIsIG1vbnRoRWxlbWVudC55ZWFyKSk7XG4gICAgfVxuXG4gICAgcGFuZWwuZGF0YXNldC55ZWFyUGFnZVN0YXJ0ID0gYm91bmRlZFllYXJQYWdlU3RhcnQ7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSB5ZWFycy5qb2luKCcnKTtcblxuICAgIGlmIChwcmV2aW91c1BhZ2VyKSB7XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlUHJldmlvdXNQYWdlciA9IG1pbmltdW1ZZWFyICE9PSBudWxsICYmIGJvdW5kZWRZZWFyUGFnZVN0YXJ0IDw9IG1pbmltdW1ZZWFyO1xuICAgICAgcHJldmlvdXNQYWdlci5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIHByZXZpb3VzUGFnZXIuZGlzYWJsZWQgPSBzaG91bGREaXNhYmxlUHJldmlvdXNQYWdlcjtcbiAgICB9XG5cbiAgICBpZiAobmV4dFBhZ2VyKSB7XG4gICAgICBuZXh0UGFnZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgICBuZXh0UGFnZXIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwb3NpdGlvblllYXJQaWNrZXJQYW5lbCgpIHtcbiAgICBpZiAoIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMuZWwuc2Nyb2xsVG9wLCAwKTtcbiAgICBjb25zdCB2aXNpYmxlSGVpZ2h0ID0gdGhpcy5lbC5jbGllbnRIZWlnaHQgfHwgTWF0aC5yb3VuZCh0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG5cbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUubGVmdCA9ICcwJztcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUucmlnaHQgPSAnMCc7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUuaGVpZ2h0ID0gdmlzaWJsZUhlaWdodCA/IGAke3Zpc2libGVIZWlnaHR9cHhgIDogJzEwMCUnO1xuICB9XG5cbiAgcmVuZGVyRnJvbVNsb3QobW9udGhFbGVtZW50LCB5ZWFyLCBtb250aCkge1xuICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgIGxldCB7XG4gICAgICB5ZWFyOiB5ZWFyU3RhcnQsXG4gICAgICBtb250aDogbW9udGhTdGFydFxuICAgIH0gPSB0aGlzLnNoaWZ0TW9udGgoeWVhciwgbW9udGgsIC1tb250aEVsZW1lbnQuc2xvdEluZGV4KTtcblxuICAgICh7XG4gICAgICB5ZWFyOiB5ZWFyU3RhcnQsXG4gICAgICBtb250aDogbW9udGhTdGFydFxuICAgIH0gPSB0aGlzLmNsYW1wVmlzaWJsZU1vbnRoU3RhcnQoeWVhclN0YXJ0LCBtb250aFN0YXJ0KSk7XG5cbiAgICB0aGlzLnJlbmRlck1vbnRocyh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQpO1xuICB9XG5cbiAgYWRkTW9udGhFdmVudHMoZWwpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25IYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRW5kRmlyc3QgPSB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBwYXJlbnQ6IGNlbGxcbiAgICAgIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgICAgICAgICAgPSBbZWwueWVhciwgZWwubW9udGgsIHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyksIDEwKV07XG4gICAgICAgIGNvbnN0IGRheUFscmVhZHlTZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNDdXJyZW50KChpc0VuZEZpcnN0KSA/IHRoaXMuc2VsZWN0aW9uRW5kIDogdGhpcy5zZWxlY3Rpb25TdGFydCwgZGF0ZVZhbHVlKTtcbiAgICAgICAgY29uc3QgcmFuZ2VTZWxlY3RlZCAgICAgID0gIXRoaXMuaXNTZWxlY3RpbmcgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgaXNQYXN0VG9kYXkgICAgICAgID0gaXNMYXRlcihkYXRlVmFsdWUsIHRoaXMub3B0cy5jdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgaWYgKGRheUFscmVhZHlTZWxlY3RlZCB8fCByYW5nZVNlbGVjdGVkIHx8IGlzUGFzdFRvZGF5KSB7XG4gICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXlBbHJlYWR5U2VsZWN0ZWQgJiYgIWlzUGFzdFRvZGF5ICYmICF0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cykge1xuICAgICAgICAgIGlmIChpc0VuZEZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmVuZERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZpcnN0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHN0eWxlcy5zZWxlY3RpbmdEaXJlY3QsIHN0eWxlcy5zZWxlY3RpbmdSZXZlcnNlZCk7XG4gICAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZWxlY3Rpb24oaXNFbmRGaXJzdCwgZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24gJiYgdGhpcy5jYWxEcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcChudWxsLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VvdmVySGFuZGxlciA9ICAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgcGFyZW50OiBjZWxsIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ICAgICAgICAgID0gW2VsLnllYXIsIGVsLm1vbnRoLCBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpLCAxMCldO1xuICAgICAgICBjb25zdCBpc1Bhc3RUb2RheSAgICAgID0gaXNMYXRlcihjdXJyZW50LCB0aGlzLm9wdHMuY3VycmVudERhdGUpO1xuICAgICAgICBjb25zdCBpc0VuZEZpcnN0ICAgICAgID0gdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlO1xuXG4gICAgICAgIGlmIChpc1Bhc3RUb2RheSAmJiAhdGhpcy5vcHRzLmVuYWJsZUFsbERheXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG5cbiAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICAgICAgY2VsbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LmhvdmVyZWQ7XG4gICAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkT2Zmc2V0O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gcmV2ZXJzZSBzZWxlY3Rpb24gZGlyZWN0aW9uXG4gICAgICAgICAgaWYgKGlzRW5kRmlyc3QgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgIWlzQ3VycmVudChjdXJyZW50LCB0aGlzLnNlbGVjdGlvbkVuZCkpIHtcbiAgICAgICAgICAgIGlmIChpc0xhdGVyKHRoaXMuc2VsZWN0aW9uRW5kLCBjdXJyZW50KSkge1xuICAgICAgICAgICAgICBjb25zdCBjZWxsQSA9IHRoaXMuY2VsbEI7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uRW5kIH0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlSGlnaGxpZ2h0RGlyZWN0aW9uKGZhbHNlLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZpcnN0QWN0aW9uKHRoaXMuc2VsZWN0aW9uRW5kLCBjZWxsQSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNFbmRGaXJzdCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmICFpc0N1cnJlbnQoY3VycmVudCwgdGhpcy5zZWxlY3Rpb25TdGFydCkpIHtcbiAgICAgICAgICAgIGlmIChpc0xhdGVyKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxCID0gdGhpcy5jZWxsQTtcbiAgICAgICAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCB9ID0gdGhpcztcblxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbih0cnVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZUZpcnN0QWN0aW9uKHRoaXMuc2VsZWN0aW9uU3RhcnQsIGNlbGxCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSh0aGlzLnNlbGVjdGlvblN0YXJ0LCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VIaWdobGlnaHREaXJlY3Rpb24odGhpcy5vcHRzLmlzUmV2ZXJzZVNlbGVjdGFibGUpO1xuXG4gICAgICAgICAgY29uc3QgaXNEaXNhYmxlZExlZnQgICA9IGNlbGwuZGF0YXNldC5kaXNhYmxlZCA9PT0gJ2xlZnQnO1xuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWRDZW50ZXIgPSBjZWxsLmRhdGFzZXQuZGlzYWJsZWQgPT09ICdjZW50ZXInO1xuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWRSaWdodCAgPSBjZWxsLmRhdGFzZXQuZGlzYWJsZWQgPT09ICdyaWdodCc7XG5cbiAgICAgICAgICBsZXQgaXNJbnZhbGlkID0gJyc7XG5cbiAgICAgICAgICBpZiAoaXNFbmRGaXJzdCAmJiBpc0Rpc2FibGVkUmlnaHQgfHwgaXNEaXNhYmxlZENlbnRlciB8fCAhaXNFbmRGaXJzdCAmJiBpc0Rpc2FibGVkTGVmdCkge1xuICAgICAgICAgICAgaXNJbnZhbGlkID0gJ2ludmFsaWQnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcbiAgICAgICAgICBsZXQgb2Zmc2V0Q2VsbDtcblxuICAgICAgICAgIGNlbGxzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQuaG92ZXJlZDtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LmhvdmVyZWRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmIChlbCA9PT0gY2VsbCkge1xuICAgICAgICAgICAgICBvZmZzZXRDZWxsID0gKHRoaXMub3B0cy5pc1JldmVyc2VTZWxlY3RhYmxlKSA/IGNlbGxzW2luZGV4IC0gMV0gOiBjZWxsc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzKG9mZnNldENlbGwpKSB7XG4gICAgICAgICAgICBvZmZzZXRDZWxsLmRhdGFzZXQuaG92ZXJlZE9mZnNldCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbGwuZGF0YXNldC5ob3ZlcmVkID0gaXNJbnZhbGlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZS5rZXkgfHwgZS5rZXlDb2RlO1xuXG4gICAgICBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gMTMpIHtcbiAgICAgICAgc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2VsZWN0IGRhdGVzIHdpdGggVGFiIGtleVxuICAgICAgaWYgKGtleSA9PT0gJ1RhYicgfHwga2V5ID09PSA5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgLy8gbWFnaWMgdHJpY2tcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbHVlXTpmb2N1cycpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwoY2VsbHMsIGNlbGwpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2VvdmVySGFuZGxlcih7IHRhcmdldDogY2VsbHNbaW5kZXhdIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5ID09PSAyNykge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBcnJvdyBrZXkgZ3JpZCBuYXZpZ2F0aW9uXG4gICAgICB0aGlzLmhhbmRsZUFycm93TmF2aWdhdGlvbihlLCBrZXksIG1vdXNlb3ZlckhhbmRsZXIpO1xuICAgIH0pO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Rpb25IYW5kbGVyKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3ZlckhhbmRsZXIpO1xuXG4gICAgZWwuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICBjZWxscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkO1xuICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkT2Zmc2V0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qIGVzbGludCBuby1iaXR3aXNlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiJlwiXSB9XSAqL1xuICAgICAgLy8gc2ltdWxhdGUgJ21vdXNlbGVhdmUnXG4gICAgICBpZiAoIWUucmVsYXRlZFRhcmdldFxuICAgICAgICB8fCAoZS5yZWxhdGVkVGFyZ2V0ICE9PSBlbC5ib2R5ICYmICEoZWwuYm9keS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlLnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpKSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbihpc1JldmVyc2UsIGRhdGVBcnJheSA9IG51bGwpIHtcbiAgICB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPSBpc1JldmVyc2U7XG5cbiAgICBpZiAoZGF0ZUFycmF5KSB7XG4gICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gKGlzUmV2ZXJzZSkgPyBkYXRlQXJyYXkgOiBudWxsO1xuICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgICA9IChpc1JldmVyc2UpID8gbnVsbCA6IGRhdGVBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xuICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgaXNSZXZlcnNlID8gc3R5bGVzLnJldmVyc2VkIDogc3R5bGVzLmRpcmVjdCk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBpc1JldmVyc2UgPyBzdHlsZXMuZGlyZWN0IDogc3R5bGVzLnJldmVyc2VkKTtcbiAgICB9XG4gIH1cblxuICBzdGFydERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGluZyAmJiBpc0xhdGVyKHRoaXMuc2VsZWN0aW9uU3RhcnQsIGRhdGVWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0KTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIH07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0KTtcbiAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ2xlZnQnO1xuICAgIH1cbiAgfVxuXG4gIGVuZERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGluZyAmJiBpc0xhdGVyKGRhdGVWYWx1ZSwgdGhpcy5zZWxlY3Rpb25FbmQpKSB7XG4gICAgICB0aGlzLnNlbGVjdFN0YXJ0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xuICAgICAgfTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5zZWxlY3RpbmdSZXZlcnNlZCk7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAncmlnaHQnO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFN0YXJ0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0U3RhcnQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ2VuZCcpO1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGVTdHIgPSBzdHJmdGltZShkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxvY2FsZS5sYWJlbHMuc2VsZWN0ZWRTdGFydCB8fCAnU3RhcnQgZGF0ZTogJWRhdGUnO1xuICAgICAgdGhpcy5hbm5vdW5jZUxpdmVSZWdpb24obGFiZWwucmVwbGFjZSgnJWRhdGUnLCBkYXRlU3RyKSk7XG4gICAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1zdGFydCcsIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25TZWxlY3RTdGFydCkpIHtcbiAgICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0U3RhcnQoZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RFbmRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgdGhpcy5zZWxlY3RFbmQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ3N0YXJ0Jyk7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IHN0cmZ0aW1lKGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpLCB0aGlzLmxvY2FsZS5mb3JtYXREYXRlLCB0aGlzLmxvY2FsZSk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMubG9jYWxlLmxhYmVscy5zZWxlY3RlZEVuZCB8fCAnRW5kIGRhdGU6ICVkYXRlJztcbiAgICAgIHRoaXMuYW5ub3VuY2VMaXZlUmVnaW9uKGxhYmVsLnJlcGxhY2UoJyVkYXRlJywgZGF0ZVN0cikpO1xuICAgICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vblNlbGVjdEVuZCkpIHtcbiAgICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0RW5kKGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSGlnaGxpZ2h0KCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkQm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMuc2VsZWN0UmFuZ2UoLi4udGhpcy5oaWdobGlnaHRlZEJvdW5kcyk7XG4gICAgICByYW5nZS5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZDtcbiAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5pbnZhbGlkO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgICAgdGhpcy5oYXNWYWxpZFJhbmdlICAgICA9IHRydWU7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkQm91bmRzID0gW107XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveVRvb2x0aXAoKSB7XG4gICAgaWYgKHRoaXMudG9vbHRpcFBvcHBlciAmJiBpc0Z1bmN0aW9uKHRoaXMudG9vbHRpcFBvcHBlci5kZXN0cm95KSkge1xuICAgICAgdGhpcy50b29sdGlwUG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMudG9vbHRpcFBvcHBlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzKHRoaXMuZG9tLnRvb2x0aXApKSB7XG4gICAgICAvLyBSZW1vdmUgYXJpYS1kZXNjcmliZWRieSBmcm9tIHRoZSBjZWxsIGxpbmtlZCB0byB0aGlzIHRvb2x0aXBcbiAgICAgIGNvbnN0IGRlc2NyaWJlZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2FyaWEtZGVzY3JpYmVkYnk9XCJjYWxlbmRhci10b29sdGlwXCJdJyk7XG4gICAgICBpZiAoZGVzY3JpYmVkKSB7XG4gICAgICAgIGRlc2NyaWJlZC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIH1cbiAgICAgIGRlc3Ryb3lFbGVtZW50KHRoaXMuZG9tLnRvb2x0aXApO1xuICAgIH1cbiAgfVxuXG4gIGFubm91bmNlTGl2ZVJlZ2lvbihtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuZG9tLmxpdmVSZWdpb24pIHtcbiAgICAgIHRoaXMuZG9tLmxpdmVSZWdpb24udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFycm93TmF2aWdhdGlvbihlLCBrZXksIG1vdXNlb3ZlckhhbmRsZXIpIHtcbiAgICBjb25zdCBmb2N1c2VkQ2VsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsdWVdOmZvY3VzJylcbiAgICAgIHx8IChlLnRhcmdldCAmJiB0eXBlb2YgZS50YXJnZXQuY2xvc2VzdCA9PT0gJ2Z1bmN0aW9uJyA/IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXZhbHVlXScpIDogbnVsbCk7XG5cbiAgICBpZiAoIWZvY3VzZWRDZWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJyb3dLZXlzID0ge1xuICAgICAgQXJyb3dMZWZ0OiAtMSwgQXJyb3dSaWdodDogMSxcbiAgICAgIEFycm93VXA6IC03LCBBcnJvd0Rvd246IDcsXG4gICAgICAzNzogLTEsIDM5OiAxLCAzODogLTcsIDQwOiA3XG4gICAgfTtcbiAgICBjb25zdCBob21lRW5kS2V5cyA9IHsgSG9tZTogJ2hvbWUnLCBFbmQ6ICdlbmQnLCAzNjogJ2hvbWUnLCAzNTogJ2VuZCcgfTtcbiAgICBjb25zdCBwYWdlS2V5cyA9IHsgUGFnZVVwOiAtMSwgUGFnZURvd246IDEsIDMzOiAtMSwgMzQ6IDEgfTtcblxuICAgIGlmIChhcnJvd0tleXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjZWxscyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKSk7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjZWxscy5pbmRleE9mKGZvY3VzZWRDZWxsKTtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gY3VycmVudEluZGV4ICsgYXJyb3dLZXlzW2tleV07XG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA+PSAwICYmIHRhcmdldEluZGV4IDwgY2VsbHMubGVuZ3RoKSB7XG4gICAgICAgIGNlbGxzW3RhcmdldEluZGV4XS5mb2N1cygpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgbW91c2VvdmVySGFuZGxlcih7IHRhcmdldDogY2VsbHNbdGFyZ2V0SW5kZXhdIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChob21lRW5kS2V5c1trZXldKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByb3cgPSBmb2N1c2VkQ2VsbC5jbG9zZXN0KCdbcm9sZT1cInJvd1wiXScpO1xuXG4gICAgICBpZiAocm93KSB7XG4gICAgICAgIGNvbnN0IHJvd0NlbGxzID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xuXG4gICAgICAgIGlmIChyb3dDZWxscy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBob21lRW5kS2V5c1trZXldID09PSAnaG9tZScgPyByb3dDZWxsc1swXSA6IHJvd0NlbGxzW3Jvd0NlbGxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgICAgICAgIG1vdXNlb3ZlckhhbmRsZXIoeyB0YXJnZXQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWdlS2V5c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRheVZhbHVlID0gZm9jdXNlZENlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICBjb25zdCBmb2N1c2VkTW9udGggPSBmb2N1c2VkQ2VsbC5jbG9zZXN0KCcuanMtbW9udGgnKTtcbiAgICAgIGNvbnN0IG9yaWdpblNsb3RJbmRleCA9IGZvY3VzZWRNb250aCA/IGZvY3VzZWRNb250aC5zbG90SW5kZXggOiBudWxsO1xuXG4gICAgICBpZiAocGFnZUtleXNba2V5XSA9PT0gMSkge1xuICAgICAgICB0aGlzLmRvbS5mb3J3YXJkLmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvbS5iYWNrLmNsaWNrKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFmdGVyIHJlLXJlbmRlciwgZm9jdXMgdGhlIHNhbWUgZGF5IG51bWJlciBvciBsYXN0IGF2YWlsYWJsZSBjZWxsXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldE1vbnRoID0gbnVsbDtcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgaWYgKG9yaWdpblNsb3RJbmRleCAhPT0gbnVsbCAmJiB0aGlzLmRvbS5tb250aHMpIHtcbiAgICAgICAgICB0YXJnZXRNb250aCA9IHRoaXMuZG9tLm1vbnRocy5maW5kKChtb250aEVsKSA9PiBtb250aEVsLnNsb3RJbmRleCA9PT0gb3JpZ2luU2xvdEluZGV4KSB8fCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldE1vbnRoKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0TW9udGgucXVlcnlTZWxlY3RvcihgW2RhdGEtdmFsdWU9XCIke2RheVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoQ2VsbHMgPSB0YXJnZXRNb250aC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcblxuICAgICAgICAgICAgaWYgKG1vbnRoQ2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IG1vbnRoQ2VsbHNbbW9udGhDZWxscy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IG5ld0NlbGxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSA9PT0gZGF5VmFsdWUpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gbmV3Q2VsbHNbaV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdGFyZ2V0ICYmIG5ld0NlbGxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3Q2VsbHNbbmV3Q2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0cyB0aGUgcmFuZ2Ugb2YgY2VsbHMgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcy5cbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFydCBlLmcuIFsyMDE2LCAwLCAxXVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbmQgWzIwMTYsIDEsIDNdXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIFdoZXRoZXIgdGhlIHJhbmdlIGlzIHZhbGlkIG9yIG5vdC5cbiAgICovXG4gIGhpZ2hMaWdodFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCB7IHJhbmdlLCBpc1ZhbGlkIH0gPSB0aGlzLnNlbGVjdFJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIGNvbnN0IHsgb3B0cyB9ICAgICAgICAgICA9IHRoaXM7XG4gICAgbGV0IHsgbWluU3RheSwgbWF4U3RheSB9ID0gb3B0cztcbiAgICBsZXQgaW52YWxpZFJhbmdlTWVzc2FnZTtcblxuICAgIGlmIChpc0FycmF5KHJhbmdlKSkge1xuICAgICAgaWYgKG9wdHMucmVudGFsSWQpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VXaXRob3V0TGFzdCA9IHJhbmdlLnNsaWNlKDAsIC0xKTtcblxuICAgICAgICBpZiAoIW9wdHMuYWxsb3dTaG9ydGVyTWluU3RheVNlbGVjdGlvbikge1xuICAgICAgICAgIC8vIGdldCB0aGUgYmlnZ2VzdCBtaW5TdGF5IHZhbHVlIGluIHRoZSByYW5nZVxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gcmFuZ2VXaXRob3V0TGFzdC5tYXAoKGNlbGwpID0+IGNlbGwuZGF0YXNldC5taW5TdGF5IHx8IG1pblN0YXkpO1xuICAgICAgICAgIG1pblN0YXkgPSBNYXRoLm1heCguLi5jZWxscyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdHMuYWxsb3dMb25nZXJNYXhTdGF5U2VsZWN0aW9uKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBiaWdnZXN0IG1heFN0YXkgdmFsdWUgaW4gdGhlIHJhbmdlXG4gICAgICAgICAgY29uc3QgY2VsbHMgPSByYW5nZVdpdGhvdXRMYXN0Lm1hcCgoY2VsbCkgPT4gY2VsbC5kYXRhc2V0Lm1heFN0YXkgfHwgbWF4U3RheSk7XG4gICAgICAgICAgbWF4U3RheSA9IE1hdGgubWF4KC4uLmNlbGxzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB0aGF0IHJhbmdlIGlzIHZhbGlkIGFuZCBsb25nZXIgdGhhbiBtaW5TdGF5IGFuZCBzaG9ydGVyIHRoYW4gbWF4U3RheVxuICAgICAgY29uc3QgaGFzVmFsaWREYXlzICAgID0gb3B0cy5yZW50YWxJZCA/IGlzVmFsaWQgOiB0cnVlO1xuICAgICAgY29uc3QgaGFzVmFsaWRNaW5TdGF5ID0gcmFuZ2UubGVuZ3RoID4gbWluU3RheTtcbiAgICAgIGNvbnN0IGhhc1ZhbGlkTWF4U3RheSA9IHJhbmdlLmxlbmd0aCA8IG1heFN0YXk7XG5cbiAgICAgIHRoaXMuaGFzVmFsaWRSYW5nZSA9IGhhc1ZhbGlkRGF5cyAmJiBoYXNWYWxpZE1pblN0YXkgJiYgaGFzVmFsaWRNYXhTdGF5O1xuXG4gICAgICBpZiAoIWhhc1ZhbGlkTWluU3RheSkge1xuICAgICAgICBpbnZhbGlkUmFuZ2VNZXNzYWdlID0gdEZvcm1hdHRlcihtaW5TdGF5LCB0aGlzLmxvY2FsZS5oYXNJbnZhbGlkTWluU3RheSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzVmFsaWRNYXhTdGF5KSB7XG4gICAgICAgIGludmFsaWRSYW5nZU1lc3NhZ2UgPSB0Rm9ybWF0dGVyKG1heFN0YXksIHRoaXMubG9jYWxlLmhhc0ludmFsaWRNYXhTdGF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNWYWxpZERheXMpIHtcbiAgICAgICAgaW52YWxpZFJhbmdlTWVzc2FnZSA9IHRoaXMubG9jYWxlLmhhc0ludmFsaWREYXlzO1xuICAgICAgfVxuXG4gICAgICByYW5nZS5tYXAoKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBpbmRleCArIDEgPT09IHJhbmdlLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5oYXNWYWxpZFJhbmdlKSB7XG4gICAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAnY2VudGVyJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5pbnZhbGlkID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5pbnZhbGlkID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmludmFsaWQgPSAnY2VudGVyJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sdGlwUG9zaXRpb24gPSAodGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlKSA/IGxlZnQgOiByaWdodDtcblxuICAgICAgICBpZiAodG9vbHRpcFBvc2l0aW9uICYmIHRoaXMuZWwuY29udGFpbnMoY2VsbCkgJiYgIXRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICAgIHRoaXMuZG9tLnRvb2x0aXAgPSB0aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy50b29sdGlwKSk7XG4gICAgICAgICAgdGhpcy5kb20udG9vbHRpcC5pZCA9ICdjYWxlbmRhci10b29sdGlwJztcbiAgICAgICAgICB0aGlzLmRvbS50b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUwgPSBpbnZhbGlkUmFuZ2VNZXNzYWdlO1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgJ2NhbGVuZGFyLXRvb2x0aXAnKTtcblxuICAgICAgICAgIHRoaXMubG9nZ2VyKGBpbnZhbGlkUmFuZ2VNZXNzYWdlOiAke2ludmFsaWRSYW5nZU1lc3NhZ2V9ICgke3N0YXJ0fSAtICR7ZW5kfSlgLCAnd2FybicpO1xuXG4gICAgICAgICAgdGhpcy50b29sdGlwUG9wcGVyID0gY3JlYXRlUG9zaXRpb25lcihjZWxsLCB0aGlzLmRvbS50b29sdGlwLCB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBvZmZzZXQ6IFswLCAwXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtzdGFydCwgZW5kXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oYXNWYWxpZFJhbmdlO1xuICB9XG5cbiAgLyoqIFJlc2V0cyBzZWxlY3Rpb24sIHJlbW92ZXMgaGlnaGxpZ2h0c1xuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtDYWxlbmRhcn1cbiAgICovXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgdGhpcy5pc1NlbGVjdGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tcmVzZXQnLCB0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uQ2xlYXJTZWxlY3Rpb24pKSB7XG4gICAgICB0aGlzLm9wdHMub25DbGVhclNlbGVjdGlvbih0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb25FbmQgICA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5jZWxsQSkge1xuICAgICAgdGhpcy5jZWxsQSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2VsbEIpIHtcbiAgICAgIHRoaXMuY2VsbEIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuaXNEcm9wRG93biAmJiB0aGlzLm9wdHMuZWxTdGFydEF0ICYmIHRoaXMub3B0cy5lbEVuZEF0KSB7XG4gICAgICB0aGlzLm9wdHMuZWxTdGFydEF0LnZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub3B0cy5lbEVuZEF0LnZhbHVlICAgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5vcHRzLmlzU2luZ2xlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCByYW5nZSBmcm9tIHRoZSB0cmVlXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YXJ0IGUuZy4gWzIwMTYsIDAsIDFdXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVuZCBbMjAxNiwgMSwgM11cbiAgICogQHJldHVybnMge3tyYW5nZTogQXJyYXksIGlzVmFsaWQ6IHtCb29sZWFufX19XG4gICAqL1xuICBzZWxlY3RSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgaWYgKGlzTGF0ZXIoc3RhcnQsIGVuZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNUcmVlLnNlbGVjdFJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmFuZ2U6IG51bGwsXG4gICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBzZWxlY3RTdGFydChkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gZGF0ZVZhbHVlO1xuXG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIHRoaXMuY2VsbEEgPSBjZWxsO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVUb0lucHV0KCdzdGFydCcsIGRhdGVWYWx1ZSk7XG4gIH1cblxuICBzZWxlY3RFbmQoZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBkYXRlVmFsdWU7XG5cbiAgICBpZiAoY2VsbCkge1xuICAgICAgdGhpcy5jZWxsQiA9IGNlbGw7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZVRvSW5wdXQoJ2VuZCcsIGRhdGVWYWx1ZSk7XG4gIH1cblxuICBjcmVhdGVUcmVlKHllYXJTdGFydCwgbW9udGhTdGFydCwgdGltZXMsIGhlYWRlclRlbXBsYXRlKSB7XG4gICAgY29uc3QgbW9udGhzID0gW107XG4gICAgY29uc3QgdHJlZSAgID0ge307XG4gICAgbGV0IG1vbnRoRW5kID0gbW9udGhTdGFydDtcbiAgICBsZXQgeWVhckVuZCAgPSB5ZWFyU3RhcnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG1Eb20gPSB0aGlzLmRvbU1vbnRoKHllYXJFbmQsIG1vbnRoRW5kLCBoZWFkZXJUZW1wbGF0ZSwgaSk7XG5cbiAgICAgIG1vbnRocy5wdXNoKG1Eb20pO1xuXG4gICAgICBpZiAoIXRyZWVbeWVhckVuZF0pIHtcbiAgICAgICAgdHJlZVt5ZWFyRW5kXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyZWVbeWVhckVuZF1bbW9udGhFbmRdKSB7XG4gICAgICAgIHRyZWVbeWVhckVuZF1bbW9udGhFbmRdID0gbURvbS5kYXlFbGVtZW50cyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vbnRoRW5kID4gMTApIHtcbiAgICAgICAgbW9udGhFbmQgPSAwO1xuICAgICAgICB5ZWFyRW5kICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb250aEVuZCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0cmVlLFxuICAgICAgeWVhckVuZCxcbiAgICAgIG1vbnRoRW5kLFxuICAgICAgbW9udGhzXG4gICAgfTtcbiAgfVxuXG4gIGRvbU1vbnRoKHllYXIsIG1vbnRoLCBoZWFkZXJUZW1wbGF0ZSwgc2xvdEluZGV4ID0gMCkge1xuICAgIGNvbnN0IGxvbmdNb250aE5hbWVzID0gdGhpcy5sb2NhbGUubG9uZ01vbnRoTmFtZXNbbW9udGhdO1xuICAgIGNvbnN0IG1vbnRoRG9tID0gZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLm1vbnRoKHtcbiAgICAgIGxhYmVsOiBsb25nTW9udGhOYW1lcyxcbiAgICAgIGNhcHRpb246IHRoaXMuY2FwdGlvblRlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoKSxcbiAgICAgIGhlYWRlcjogaGVhZGVyVGVtcGxhdGUsXG4gICAgICBib2R5OiB0aGlzLmRheXNUZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aClcbiAgICB9KSk7XG5cbiAgICBtb250aERvbS5ib2R5ID0gbW9udGhEb20ucXVlcnlTZWxlY3RvcihgLiR7c3R5bGVzLmJvZHl9YCk7XG5cbiAgICBtb250aERvbS5tb250aCAgICAgICA9IG1vbnRoO1xuICAgIG1vbnRoRG9tLnllYXIgICAgICAgID0geWVhcjtcbiAgICBtb250aERvbS5zbG90SW5kZXggICA9IHNsb3RJbmRleDtcbiAgICBtb250aERvbS5kYXlFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobW9udGhEb20ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xuXG4gICAgcmV0dXJuIG1vbnRoRG9tO1xuICB9XG5cbiAgY2FwdGlvblRlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlcy55ZWFyUGlja2VyKHtcbiAgICAgIGxhYmVsOiBgJHt0aGlzLmxvY2FsZS5sb25nTW9udGhOYW1lc1ttb250aF19ICR7eWVhcn1gLFxuICAgICAgY2hldnJvbkRvd25JZDogYCR7dGhpcy5DU1NfUFJFRklYfUNoZXZyb25Eb3duYFxuICAgIH0pO1xuICB9XG5cbiAgbWluaW11bVNlbGVjdGFibGVZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZENsYW1wVG9DdXJyZW50RGF0ZSgpID8gdGhpcy5vcHRzLmN1cnJlbnREYXRlWzBdIDogbnVsbDtcbiAgfVxuXG4gIG1pbmltdW1TZWxlY3RhYmxlTW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQ2xhbXBUb0N1cnJlbnREYXRlKCkgPyB0aGlzLm9wdHMuY3VycmVudERhdGVbMV0gOiBudWxsO1xuICB9XG5cbiAgc2hvdWxkQ2xhbXBUb0N1cnJlbnREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdHMuaXNCYWNrRGlzYWJsZWQgJiYgIXRoaXMub3B0cy5lbmFibGVBbGxEYXlzO1xuICB9XG5cbiAgY2xhbXBWaXNpYmxlTW9udGhTdGFydCh5ZWFyLCBtb250aCkge1xuICAgIGNvbnN0IG1pbmltdW1ZZWFyID0gdGhpcy5taW5pbXVtU2VsZWN0YWJsZVllYXIoKTtcbiAgICBjb25zdCBtaW5pbXVtTW9udGggPSB0aGlzLm1pbmltdW1TZWxlY3RhYmxlTW9udGgoKTtcblxuICAgIGlmIChtaW5pbXVtWWVhciA9PT0gbnVsbCB8fCBtaW5pbXVtTW9udGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7IHllYXIsIG1vbnRoIH07XG4gICAgfVxuXG4gICAgaWYgKHllYXIgPCBtaW5pbXVtWWVhciB8fCAoeWVhciA9PT0gbWluaW11bVllYXIgJiYgbW9udGggPCBtaW5pbXVtTW9udGgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBtaW5pbXVtWWVhcixcbiAgICAgICAgbW9udGg6IG1pbmltdW1Nb250aFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB5ZWFyLCBtb250aCB9O1xuICB9XG5cbiAgc2hpZnRNb250aCh5ZWFyLCBtb250aCwgb2Zmc2V0KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE1vbnRoID0gbW9udGggKyBvZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogeWVhciArIE1hdGguZmxvb3Iobm9ybWFsaXplZE1vbnRoIC8gMTIpLFxuICAgICAgbW9udGg6ICgobm9ybWFsaXplZE1vbnRoICUgMTIpICsgMTIpICUgMTJcbiAgICB9O1xuICB9XG5cbiAgaGVhZGVyVGVtcGxhdGVTdHJpbmcoKSB7XG4gICAgLy8ganVzdCB0byBtYWtlIGxpZmUgZWFzaWVyIHdpdGggc3RhcnQgb2YgdGhlIHdlZWsgY2FsY3VsYXRpb25cbiAgICBjb25zdCBoZWFkZXIgICAgICAgICAgICAgICAgID0gW107XG4gICAgY29uc3Qgd2Vla2RheXNMYWJlbHNFeHRlbmRlZCA9IHRoaXMubG9jYWxlLnNob3J0V2Vla2RheU5hbWVzLmNvbmNhdCh0aGlzLmxvY2FsZS5zaG9ydFdlZWtkYXlOYW1lcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0cy5kYXlzUGVyV2VlazsgaSArPSAxKSB7XG4gICAgICBoZWFkZXIucHVzaCh0ZW1wbGF0ZXMud2Vla0RheUxhYmVsKHdlZWtkYXlzTGFiZWxzRXh0ZW5kZWRbaSArIHRoaXMub3B0cy5zdGFydE9mV2Vla10pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlci5qb2luKCcnKTtcbiAgfVxuXG4gIGRheXNUZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZNb250aCAgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5c0luTW9udGggICA9IG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKTtcbiAgICBjb25zdCByb3dUZW1wbGF0ZSAgID0gdGVtcGxhdGVzLndlZWtSb3c7XG4gICAgY29uc3Qgcm93Q2xvc2UgICAgICA9IHJvd1RlbXBsYXRlKCkuY2xvc2U7XG4gICAgY29uc3Qgd2Vla1NoaWZ0ICAgICA9ICh0aGlzLm9wdHMuZGF5c1BlcldlZWsgLSB0aGlzLm9wdHMuc3RhcnRPZldlZWspO1xuICAgIGxldCBtb250aFRlbXBsYXRlICAgPSAnJztcblxuICAgIGxldCByb3dzICAgICAgICAgICAgICAgPSA1O1xuICAgIGxldCB3ZWVrU2hpZnRDb3JyZWN0ZWQgPSBzdGFydE9mTW9udGggKyB3ZWVrU2hpZnQ7XG4gICAgbGV0IGRheUNvdW50ZXIgICAgICAgICA9IDA7XG4gICAgbGV0IGRheU9mTW9udGggICAgICAgICA9IDE7XG5cbiAgICAvLyBkb24ndCByZW5kZXIgZnVsbCBlbXB0eSB3ZWVrXG4gICAgaWYgKHdlZWtTaGlmdENvcnJlY3RlZCA+PSB0aGlzLm9wdHMuZGF5c1BlcldlZWspIHtcbiAgICAgIHdlZWtTaGlmdENvcnJlY3RlZCAtPSB0aGlzLm9wdHMuZGF5c1BlcldlZWs7XG4gICAgfVxuXG4gICAgLy8gdHJ5IHRvIGZpZ3VyZSBvdXQgaWYgNSByb3dzIGlzIGVub3VnaCBmb3IgdGhlIG1vbnRoXG4gICAgaWYgKHJvd3MgKiB0aGlzLm9wdHMuZGF5c1BlcldlZWsgPCB3ZWVrU2hpZnRDb3JyZWN0ZWQgKyBkYXlzSW5Nb250aCkge1xuICAgICAgcm93cyA9IDY7XG4gICAgfVxuXG4gICAgLy8gZm9yIGVhY2ggd2VlayAoNSBvciA2KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSArPSAxKSB7XG4gICAgICBsZXQgd2VlayA9IHJvd1RlbXBsYXRlKGkpLm9wZW47XG4gICAgICAvLyBvcGVuIHRhZyA8dHI+XG5cbiAgICAgIC8vIHB1c2ggZGF5cyBpbiB3ZWVrXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMub3B0cy5kYXlzUGVyV2VlazsgaiArPSAxKSB7XG4gICAgICAgIC8vIHB1c2hpbmcgYWN0dWFsIGRheXMgMS4uLmRheXNJbk1vbnRoXG4gICAgICAgIGlmICgoZGF5Q291bnRlciA+PSB3ZWVrU2hpZnRDb3JyZWN0ZWQpICYmIGRheU9mTW9udGggPD0gZGF5c0luTW9udGgpIHtcbiAgICAgICAgICB3ZWVrICs9IHRoaXMuZGF5VGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgsIGRheU9mTW9udGgpO1xuICAgICAgICAgIGRheU9mTW9udGggKz0gMTtcbiAgICAgICAgICAvLyBwdXNoaW5nIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIGRheXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZWVrICs9IHRlbXBsYXRlcy53ZWVrRGF5UGxhY2Vob2xkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBkYXlDb3VudGVyICs9IDE7XG4gICAgICB9XG4gICAgICAvLyBjbG9zZSB0YWcgPC90cj4gb2Ygd2Vla1xuICAgICAgd2VlayArPSByb3dDbG9zZTtcbiAgICAgIC8vIHB1c2ggY29tcGxldGVkIHdlZWsgdG8gbW9udGggdGVtcGxhdGVcbiAgICAgIG1vbnRoVGVtcGxhdGUgKz0gd2VlaztcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhUZW1wbGF0ZTtcbiAgfVxuXG4gIGRheVRlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWluU3RheSxcbiAgICAgIG1heFN0YXksXG4gICAgICByYXRlOiBkYXlSYXRlLFxuICAgICAgaXNBdmFpbGFibGUsXG4gICAgICBpc0F2YWlsYWJsZU91dDogZGF5SXNBdmFpbGFibGVPdXQsXG4gICAgICBpc01vcm5pbmdCbG9ja2VkOiBkYXlJc01vcm5pbmdCbG9ja2VkXG4gICAgfSA9IHRoaXMuY1RyZWUuZ2V0RGF5KHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKSB8fCB7fTtcblxuICAgIGNvbnN0IHJhdGUgPSAodGhpcy5vcHRzLnNob3dSYXRlcyAmJiBkYXlSYXRlKSA/IGRheVJhdGUgOiAwO1xuXG4gICAgbGV0IGlzRGlzYWJsZWQgPSAhaXNBdmFpbGFibGU7XG4gICAgbGV0IGlzQXZhaWxhYmxlT3V0ID0gZGF5SXNBdmFpbGFibGVPdXQ7XG4gICAgbGV0IGlzTW9ybmluZ0Jsb2NrZWQgPSBkYXlJc01vcm5pbmdCbG9ja2VkO1xuXG4gICAgY29uc3QgeyBjdXJyZW50RGF0ZSB9ID0gdGhpcy5vcHRzO1xuICAgIGNvbnN0IGRhdGVBcnJheSAgICAgICA9IFt5ZWFyLCBtb250aCwgZGF5T2ZNb250aF07XG4gICAgY29uc3QgaXNDdXJyZW50RGF5ICAgID0gaXNDdXJyZW50KGRhdGVBcnJheSwgY3VycmVudERhdGUpO1xuXG4gICAgLy8gZGlzYWJsZSBwYXN0IGRhdGVzXG4gICAgaWYgKGlzTGF0ZXIoZGF0ZUFycmF5LCBjdXJyZW50RGF0ZSkpIHtcbiAgICAgIGlzRGlzYWJsZWQgICAgICAgID0gdHJ1ZTtcbiAgICAgIGlzTW9ybmluZ0Jsb2NrZWQgID0gbnVsbDtcbiAgICAgIGlzQXZhaWxhYmxlT3V0ICAgID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBkaXNhYmxlIGN1cnJlbnQgZGF5IG1vcm5pbmdcbiAgICBpZiAoaXNDdXJyZW50RGF5KSB7XG4gICAgICBpZiAoIShpc0Rpc2FibGVkICYmIGlzQXZhaWxhYmxlT3V0ID09PSBudWxsICYmIGlzTW9ybmluZ0Jsb2NrZWQgPT09IG51bGwpKSB7XG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQgID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaXNBdmFpbGFibGVPdXQgPT09IG51bGwpIHtcbiAgICAgICAgICBpc0F2YWlsYWJsZU91dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBub3QgcmVudGFsSWQgYW5kIG5vIG1hcHMsIGp1c3QgcmVuZGVyIHBsYWluIGNhbGVuZGFyXG4gICAgaWYgKCF0aGlzLm9wdHMucmVudGFsSWQgfHwgdGhpcy5vcHRzLmVuYWJsZUFsbERheXMpIHtcbiAgICAgIGlmIChpc0xhdGVyKGN1cnJlbnREYXRlLCBkYXRlQXJyYXkpKSB7XG4gICAgICAgIGlzRGlzYWJsZWQgICAgICAgID0gZmFsc2U7XG4gICAgICAgIGlzQXZhaWxhYmxlT3V0ICAgID0gdHJ1ZTtcbiAgICAgICAgaXNNb3JuaW5nQmxvY2tlZCAgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3VycmVudERheSkge1xuICAgICAgICBpc0Rpc2FibGVkICAgICAgICA9IHRydWU7XG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQgID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0F2YWlsYWJsZUluID0gaXNNb3JuaW5nQmxvY2tlZCA9PSBmYWxzZTtcblxuICAgIGlmIChpc0Rpc2FibGVkICYmIGlzQXZhaWxhYmxlSW4pIHtcbiAgICAgIGlzRGlzYWJsZWQgPSAnbGVmdCc7XG4gICAgfSBlbHNlIGlmIChpc01vcm5pbmdCbG9ja2VkKSB7XG4gICAgICBpc0Rpc2FibGVkID0gJ3JpZ2h0JztcbiAgICB9IGVsc2UgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIGlzRGlzYWJsZWQgPSAnY2VudGVyJztcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlU3RyID0gc3RyZnRpbWUoZGF0ZVRvSXNvKHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKSwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZSwgdGhpcy5sb2NhbGUpO1xuICAgIGNvbnN0IHJhdGVUID0gcmF0ZSA/IGN1cnJlbmN5Rm9ybWF0dGVyKE1hdGgucm91bmQocmF0ZSksIHRoaXMub3B0cy5sYW5nLCB0aGlzLm9wdHMuY3VycmVuY3kgfHwgdGhpcy5sb2NhbGUuY3VycmVuY3kpIDogZmFsc2U7XG4gICAgY29uc3QgbWluU3RheVQgPSAodGhpcy5vcHRzLnNob3dNaW5TdGF5ICYmIG1pblN0YXkpID8gdEZvcm1hdHRlcihtaW5TdGF5LCB0aGlzLmxvY2FsZS5taW5TdGF5KSA6IGZhbHNlO1xuICAgIGNvbnN0IG1heFN0YXlUID0gKHRoaXMub3B0cy5zaG93TWF4U3RheSAmJiBtYXhTdGF5KSA/IHRGb3JtYXR0ZXIobWF4U3RheSwgdGhpcy5sb2NhbGUubWF4U3RheSkgOiBmYWxzZTtcblxuICAgIC8vIEJ1aWxkIGVucmljaGVkIGFyaWEtbGFiZWwgZm9yIHNjcmVlbiByZWFkZXJzXG4gICAgY29uc3QgYXJpYUxhYmVsUGFydHMgPSBbZGF0ZVN0cl07XG5cbiAgICBpZiAoaXNDdXJyZW50RGF5KSB7XG4gICAgICBhcmlhTGFiZWxQYXJ0cy5wdXNoKHRoaXMubG9jYWxlLmxhYmVscy50b2RheSB8fCAndG9kYXknKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgYXJpYUxhYmVsUGFydHMucHVzaCh0aGlzLmxvY2FsZS5sYWJlbHMudW5hdmFpbGFibGUgfHwgJ3VuYXZhaWxhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHJhdGVUKSB7XG4gICAgICBhcmlhTGFiZWxQYXJ0cy5wdXNoKHJhdGVUKTtcbiAgICB9XG5cbiAgICBpZiAobWluU3RheVQpIHtcbiAgICAgIGFyaWFMYWJlbFBhcnRzLnB1c2gobWluU3RheVQpO1xuICAgIH1cblxuICAgIGlmIChtYXhTdGF5VCkge1xuICAgICAgYXJpYUxhYmVsUGFydHMucHVzaChtYXhTdGF5VCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxhYmVsOiBkYXlPZk1vbnRoLFxuICAgICAgZGF0ZTogZGF0ZVN0cixcbiAgICAgIGFyaWFMYWJlbDogYXJpYUxhYmVsUGFydHMuam9pbignLCAnKSxcbiAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgaXNBdmFpbGFibGVJbixcbiAgICAgIGlzQXZhaWxhYmxlT3V0LFxuICAgICAgaXNDdXJyZW50RGF5LFxuICAgICAgbWluU3RheSxcbiAgICAgIG1pblN0YXlULFxuICAgICAgbWF4U3RheSxcbiAgICAgIG1heFN0YXlULFxuICAgICAgcmF0ZSxcbiAgICAgIHJhdGVULFxuICAgICAgdGFiaW5kZXg6IHRoaXMub3B0cy5zZWxlY3RhYmxlID8gMCA6IC0xXG4gICAgfTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMud2Vla0RheShvcHRpb25zKTtcbiAgfVxuXG4gIGRlc3Ryb3lNb250aHMoKSB7XG4gICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcblxuICAgIGlmICh0aGlzLmRvbSAmJiBpc0FycmF5KHRoaXMuZG9tLm1vbnRocykpIHtcbiAgICAgIHRoaXMuZG9tLm1vbnRocy5mb3JFYWNoKChtKSA9PiBkZXN0cm95RWxlbWVudChtKSk7XG4gICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZVZpZXdwb3J0RXZlbnRzKCk7XG4gICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG5cbiAgICBpZiAodGhpcy5jYWxEcm9wICYmIGlzRnVuY3Rpb24odGhpcy5jYWxEcm9wLmRlc3Ryb3kpKSB7XG4gICAgICB0aGlzLmNhbERyb3AuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jYWxEcm9wID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbkRvY3VtZW50Q2xpY2spIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uRG9jdW1lbnRLZXlkb3duKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkRvY3VtZW50S2V5ZG93bik7XG4gICAgICB0aGlzLm9uRG9jdW1lbnRLZXlkb3duID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdHJveUVsZW1lbnQodGhpcy5lbCk7XG4gIH1cblxuICBsb2FkTWFwcyhpZCkge1xuICAgIHRoaXMubG9nZ2VyKCdsb2FkaW5nIG1hcHMnKTtcbiAgICB0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcblxuICAgIGNvbnN0IG9uU3VjY2VzcyA9IChtYXBzKSA9PiB7XG4gICAgICBpZiAoaXNBcnJheShtYXBzLmRhdGEpICYmIG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUF2YWlsYWJpdHlNYXApIHtcbiAgICAgICAgICBtYXBzLmRhdGFbMF0uYXR0cmlidXRlcy5hdmFpbGFiaWxpdHkgPSBtYXBzLmRhdGFbMF0uYXR0cmlidXRlcy5hdmFpbGFiaWxpdHkucmVwbGFjZSgvWzAtOV0vZywgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdHMuY3VycmVuY3kgPSB0aGlzLm9wdHMuY3VycmVuY3kgfHwgbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMuY3VycmVuY3k7XG4gICAgICAgIHRoaXMuYWRkTWFwcyhtYXBzLmRhdGFbMF0uYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMubWFwc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuICAgICAgICB0aGlzLmVtaXQoJ21hcHMtbG9hZGVkJywgbWFwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIoJ2V4cGVjdHMganNvbi1hcGkgZGF0YSBmb3JtYXQnLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuICAgICAgdGhpcy5lbWl0KCdtYXBzLWVycm9yJyk7XG4gICAgICB0aGlzLmxvZ2dlcignU2VydmVyIGVycm9yIGhhcHBlbmVkJywgJ2Vycm9yJyk7XG4gICAgfTtcblxuICAgIGZldGNoKHRoaXMub3B0cy5yZW50YWxVcmwoaWQpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihvblN1Y2Nlc3MpXG4gICAgICAuY2F0Y2gob25FcnJvcik7XG4gIH1cblxuICBjb21wbGV0ZVNlbGVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcHRzLmlzU2luZ2xlSW5wdXQpIHtcbiAgICAgIGNvbnN0IHNpbmdsZUlucHV0RGF0ZUZvcm1hdCA9IHRoaXMub3B0cy5zaW5nbGVJbnB1dERhdGVGb3JtYXQgfHwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZTtcblxuICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gc3RyZnRpbWUoZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQpLCBzaW5nbGVJbnB1dERhdGVGb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICAgIGNvbnN0IGRhdGVFbmQgICA9IHN0cmZ0aW1lKGRhdGVUb0lzbyguLi50aGlzLnNlbGVjdGlvbkVuZCksIHNpbmdsZUlucHV0RGF0ZUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuXG4gICAgICB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dC52YWx1ZSA9IGAke2RhdGVTdGFydH0gJHt0aGlzLm9wdHMuc2luZ2xlSW5wdXRTZXBhcmF0b3J9ICR7ZGF0ZUVuZH1gO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWNvbXBsZXRlZCcsIHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25TZWxlY3Rpb25Db21wbGV0ZWQpKSB7XG4gICAgICB0aGlzLm9wdHMub25TZWxlY3Rpb25Db21wbGV0ZWQoXG4gICAgICAgIGRhdGVUb0lzbyguLi50aGlzLnNlbGVjdGlvblN0YXJ0LCB0cnVlKSwgZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uRW5kLCB0cnVlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q2FsZW5kYXJEcm9wKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50RnJvbVN0cmluZygnPGRpdj48L2Rpdj4nKTtcbiAgICB0aGlzLmVsVGFyZ2V0ID0gdGhpcy5vcHRzLmVsO1xuICAgIHRoaXMuZWwgICAgICAgPSBlbGVtZW50O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMub3B0cy5lbFN0YXJ0QXQgICAgID0gdGhpcy5vcHRzLmVsU3RhcnRBdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLkNTU19QUkVGSVh9X19zdGFydC1hdGApO1xuICAgIHRoaXMub3B0cy5lbEVuZEF0ICAgICAgID0gdGhpcy5vcHRzLmVsRW5kQXQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5DU1NfUFJFRklYfV9fZW5kLWF0YCk7XG4gICAgdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQgPSB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLkNTU19QUkVGSVh9X19zaW5nbGUtaW5wdXRgKTtcblxuICAgIGlmICh0aGlzLm9wdHMuaGlkZGVuRWxGb3JtYXQpIHtcbiAgICAgIFt0aGlzLm9wdHMuZWxTdGFydEF0LCB0aGlzLm9wdHMuZWxFbmRBdF0uZm9yRWFjaCgoaW5wdXQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBpbnB1dC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXQpO1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgaGlkZGVuSW5wdXQuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIGhpZGRlbklucHV0LmhpZGRlbiAgICA9IHRydWU7XG5cbiAgICAgICAgKGkpID8gdGhpcy5oaWRkZW5FbEVuZEF0ID0gaGlkZGVuSW5wdXQgOiB0aGlzLmhpZGRlbkVsU3RhcnRBdCA9IGhpZGRlbklucHV0O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5pc1NpbmdsZUlucHV0KSB7XG4gICAgICB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dC5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgIFt0aGlzLm9wdHMuZWxTdGFydEF0LCB0aGlzLm9wdHMuZWxFbmRBdF0uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5kcm9wQmFzaWMpO1xuXG4gICAgLy8gQWRkIGFyaWEgYXR0cmlidXRlc1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxlLmxhYmVscy5jYWxlbmRhcik7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIGNvbnN0IG9wZW5Ecm9wID0gKGlucHV0LCBpc1JldmVyc2VkKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoaW5wdXQpO1xuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3Rpb25PcmRlcihpc1JldmVyc2VkKTtcblxuICAgICAgaWYgKCFoYXNDbGFzcyh0aGlzLmVsLCBzdHlsZXMudmlzaWJsZSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbERyb3ApIHtcbiAgICAgICAgICB0aGlzLmNhbERyb3AgPSBjcmVhdGVQb3NpdGlvbmVyKHRoaXMuZWxUYXJnZXQsIHRoaXMuZWwsIHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5vcHRzLmRyb3BQbGFjZW1lbnQsXG4gICAgICAgICAgICBoaWRlOiB0cnVlLFxuICAgICAgICAgICAgZGVmZXJVcGRhdGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy52aXNpYmxlKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMuY2FsRHJvcC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdkcm9wLW9wZW4nKTtcbiAgICAgICAgdGhpcy5kb20ubW9udGhzV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImdyaWRjZWxsXCJdW3RhYmluZGV4PVwiMFwiXScpLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLm1hcHNMb2FkZWQgJiYgdGhpcy5vcHRzLnJlbnRhbElkKSB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFwcyh0aGlzLm9wdHMucmVudGFsSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xuICAgICAgdGhpcy5mb2N1c1RvdWNoRXZlbnRzKHRoaXMub3B0cy5lbFNpbmdsZUlucHV0LCAoKSA9PiB7XG4gICAgICAgIG9wZW5Ecm9wKCdzdGFydCcsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzVG91Y2hFdmVudHModGhpcy5vcHRzLmVsU3RhcnRBdCwgKCkgPT4ge1xuICAgICAgICBvcGVuRHJvcCgnc3RhcnQnLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9jdXNUb3VjaEV2ZW50cyh0aGlzLm9wdHMuZWxFbmRBdCwgKCkgPT4ge1xuICAgICAgICBvcGVuRHJvcCgnZW5kJywgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wLmJpbmQodGhpcykpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5lbFJlc2V0KSB7XG4gICAgICB0aGlzLm9wdHMuZWxSZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wKGUsIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSAmJiAoaXNJbnNpZGUoZS50YXJnZXQsIHRoaXMuZWwpIHx8IGlzSW5zaWRlKGUudGFyZ2V0LCB0aGlzLmVsVGFyZ2V0KSkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHN0eWxlcy52aXNpYmxlKTtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG4gICAgICB0aGlzLmVtaXQoJ2Ryb3AtY2xvc2UnKTtcbiAgICAgIHRoaXMuc3dpdGNoSW5wdXRGb2N1cygnYW55Jyk7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVUb0lucHV0KGlucHV0LCBkYXRlVmFsdWUpIHtcbiAgICBjb25zdCB7IGVsU3RhcnRBdCB9ID0gdGhpcy5vcHRzO1xuICAgIGNvbnN0IHsgZWxFbmRBdCB9ICAgPSB0aGlzLm9wdHM7XG5cbiAgICBjb25zdCBkYXRlICA9IGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlID0gc3RyZnRpbWUoZGF0ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICBjb25zdCBldnQgICA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG4gICAgZXZ0LmluaXRFdmVudCgnY2hhbmdlJywgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5oaWRkZW5FbEZvcm1hdCkge1xuICAgICAgY29uc3QgaGlkZGVuVmFsdWUgPSBzdHJmdGltZShkYXRlLCB0aGlzLm9wdHMuaGlkZGVuRWxGb3JtYXQsIHRoaXMubG9jYWxlKTtcblxuICAgICAgaWYgKGlucHV0ID09PSAnc3RhcnQnICYmIHRoaXMuaGlkZGVuRWxTdGFydEF0KSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRWxTdGFydEF0LnZhbHVlID0gaGlkZGVuVmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAnZW5kJyAmJiB0aGlzLmhpZGRlbkVsRW5kQXQpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5FbEVuZEF0LnZhbHVlID0gaGlkZGVuVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlucHV0ID09PSAnc3RhcnQnICYmIGVsU3RhcnRBdCkge1xuICAgICAgZWxTdGFydEF0LnZhbHVlID0gdmFsdWU7XG4gICAgICBlbFN0YXJ0QXQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09ICdlbmQnICYmIGVsRW5kQXQpIHtcbiAgICAgIGVsRW5kQXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGVsRW5kQXQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0c1RvVmFsdWVzKCkge1xuICAgIGlmICh0aGlzLm9wdHMuZWxTdGFydEF0LnZhbHVlID09PSAnJyAmJiB0aGlzLm9wdHMuZWxFbmRBdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCAgPSBkYXRlVG9BcnJheSh0aGlzLm9wdHMuZWxTdGFydEF0LnZhbHVlLCB0aGlzLmZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIGNvbnN0IHNlbGVjdGlvbkVuZCAgICA9IGRhdGVUb0FycmF5KHRoaXMub3B0cy5lbEVuZEF0LnZhbHVlLCB0aGlzLmZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIGNvbnN0IHsgY3VycmVudERhdGUgfSA9IHRoaXMub3B0cztcblxuICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcblxuICAgIGlmIChpc0FycmF5KHNlbGVjdGlvblN0YXJ0KSAmJiBpc0FycmF5KHNlbGVjdGlvbkVuZCkpIHtcbiAgICAgIGlmICgoaXNMYXRlcihjdXJyZW50RGF0ZSwgc2VsZWN0aW9uU3RhcnQpIHx8IGlzQ3VycmVudChjdXJyZW50RGF0ZSwgc2VsZWN0aW9uU3RhcnQpKSAmJiBpc0xhdGVyKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRGlmZmVyZW5jZSA9IG1vbnRoRGlmZihcbiAgICAgICAgICBkYXRlVG9Jc28odGhpcy5vcHRzLnllYXJTdGFydCwgdGhpcy5vcHRzLm1vbnRoU3RhcnQsIDEpLFxuICAgICAgICAgIGRhdGVUb0lzbyguLi5zZWxlY3Rpb25FbmQpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgeyB0cmVlIH0gPSB0aGlzLmNyZWF0ZVRyZWUodGhpcy5vcHRzLnllYXJTdGFydCwgdGhpcy5vcHRzLm1vbnRoU3RhcnQsIG1vbnRoRGlmZmVyZW5jZSk7XG5cbiAgICAgICAgdGhpcy5jVHJlZS5hZGRUcmVlKHRyZWUpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kO1xuICAgICAgICB0aGlzLnJlY292ZXJTZWxlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9udGhzKHNlbGVjdGlvbkVuZFswXSwgc2VsZWN0aW9uRW5kWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyKGBpbnZhbGlkIHJhbmdlOiBcIlske3NlbGVjdGlvblN0YXJ0fV1cIiBcIlske3NlbGVjdGlvbkVuZH1dXCJgLCAnd2FybicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb25TdGFydCAmJiBzZWxlY3Rpb25FbmQpIHtcbiAgICAgIHRoaXMubG9nZ2VyKGBpbnZhbGlkIGRhdGVzOiBcIiR7c2VsZWN0aW9uU3RhcnR9XCIgXCIke3NlbGVjdGlvbkVuZH1cImAsICd3YXJuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5wdXRGb2N1cyh0eXBlKSB7XG4gICAgaWYgKHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIGlmICh0eXBlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMub3B0cy5lbFN0YXJ0QXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMub3B0cy5lbEVuZEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdlbmQnKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMub3B0cy5lbEVuZEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxTdGFydEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdhbnknKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMub3B0cy5lbFN0YXJ0QXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMub3B0cy5lbEVuZEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG91Y2hFdmVudHMoZWxlbWVudCwgX2NhbGxiYWNrKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oX2NhbGxiYWNrKSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9jYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX2NhbGxiYWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gJHt0aGlzLlZFUlNJT059XSBgO1xuICB9XG5cbiAgbG9nZ2VyKG1zZywgdHlwZSA9ICdsb2cnKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkge1xuICAgICAgY29uc29sZVt0eXBlXSh0aGlzLnRvU3RyaW5nKCkgKyBtc2cpO1xuICAgIH1cbiAgfVxufVxuIiwiLyogZ2xvYmFsIHByb2Nlc3MgKi9cblxuY29uc3QgbmFtZSA9ICdzbWlseS1jYWxlbmRhci13aWRnZXQnO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWUsXG4gIGNzc1ByZWZpeDogJ1NtaWx5Q2FsZW5kYXInLFxuICBhcGlIb3N0OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8vc2VjdXJlLnNtaWx5LmNvbScsXG4gIGFwaU5hbWVzcGFjZTogJy9hcGkvdjIvcHVibGljJyxcbiAgYXBpTWFwc1JvdXRlOiAnL21hcHMuanNvbj97YXBpUmVudGFsSWR9e2FwaUN1cnJlbmN5fScsXG4gIGFwaVJlbnRhbElkOiAncmVudGFsX2lkPScsXG4gIGFwaUN1cnJlbmN5OiAnJmV4Y2hhbmdlX3RvX2N1cnJlbmN5PScsXG5cbiAgcmVudGFsVXJsKGlkcykge1xuICAgIGxldCByb3V0ZSA9IHRoaXMuYXBpTWFwc1JvdXRlLnJlcGxhY2UoJ3thcGlSZW50YWxJZH0nLCBgJHt0aGlzLmFwaVJlbnRhbElkfSR7aWRzfWApO1xuICAgIHJvdXRlID0gcm91dGUucmVwbGFjZSgne2FwaUN1cnJlbmN5fScsICh0aGlzLmN1cnJlbmN5KSA/IGAke3RoaXMuYXBpQ3VycmVuY3l9JHt0aGlzLmN1cnJlbmN5fWAgOiAnJyk7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpSG9zdH0ke3RoaXMuYXBpTmFtZXNwYWNlfSR7cm91dGV9YDtcbiAgfSxcblxuICBzdGFydE9mV2VlazogMCwgLy8gMCBTdW4gMSBNb24uLi4uNiBTYXRcbiAgbWluU3RheTogMSwgLy8gY2FuIHNlbGVjdCBvbmUgbmlnaHRcbiAgbWF4U3RheTogSW5maW5pdHksIC8vIGNhbiBzZWxlY3QgaW5maW5pdGUgbmlnaHRzXG4gIG1vbnRoU3RhcnQ6IG51bGwsIC8vIHN0YXJ0IHdpdGggY3VycmVudCBtb250aCBieSBkZWZhdWx0IE0gJzAuLi4xMSdcbiAgeWVhclN0YXJ0OiBudWxsLCAvLyBzdGFydCB3aXRoIGN1cnJlbnQgeWVhciBZWVlZXG4gIGRheXNQZXJXZWVrOiA3LCAvLyBGSVhNRSBzdXBwb3J0IGNhbGVuZGFyIHJlbmRlcmluZ1xuICBkaXNwbGF5TW9udGhzOiAyLFxuICBkaXNwbGF5TW9udGhzTW9iaWxlOiBudWxsLCAvLyBmYWxscyBiYWNrIHRvIGRpc3BsYXlNb250aHNcbiAgbW9iaWxlQnJlYWtwb2ludDogNzY3LCAvLyBweCwgPD0gYnJlYWtwb2ludCBpcyBtb2JpbGVcbiAgc2hvd1BhZ2luYXRpb25Nb2JpbGU6IHRydWUsXG4gIG1vbnRoc1BhZ2luYXRpb25KdW1wOiAxLFxuICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgc2hvd1JhdGVzOiBmYWxzZSxcbiAgaXNSZXZlcnNlU2VsZWN0YWJsZTogZmFsc2UsIC8vIHNlbGVjdCBlbmQgZGF0ZSBmaXJzdFxuICBpc0JhY2tEaXNhYmxlZDogdHJ1ZSxcbiAgaXNEcm9wRG93bjogZmFsc2UsXG4gIGRyb3BQbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICBlbDogbnVsbCxcbiAgZWxTdGFydEF0OiBudWxsLFxuICBlbEVuZEF0OiBudWxsLFxuICBlbFNpbmdsZUlucHV0OiBudWxsLFxuICBpc1NpbmdsZUlucHV0OiBudWxsLFxuICBzaW5nbGVJbnB1dERhdGVGb3JtYXQ6IG51bGwsXG4gIHNpbmdsZUlucHV0U2VwYXJhdG9yOiAn4oaSJyxcbiAgZWxSZXNldDogbnVsbCxcbiAgZm9ybWF0RGF0ZTogbnVsbCxcbiAgaGlkZGVuRWxGb3JtYXQ6IG51bGwsXG4gIHJlbnRhbElkOiBudWxsLFxuICBjdXJyZW5jeTogbnVsbCxcbiAgZGlzYWJsZUF2YWlsYWJpdHlNYXA6IGZhbHNlLFxuICBhbGxvd1Nob3J0ZXJNaW5TdGF5U2VsZWN0aW9uOiBmYWxzZSxcbiAgYWxsb3dMb25nZXJNYXhTdGF5U2VsZWN0aW9uOiBmYWxzZSxcbiAgZW5hYmxlQWxsRGF5czogZmFsc2UsXG4gIGN1cnJlbnREYXRlLFxuICB0aGVtZTogJ2Jhc2ljJ1xufTtcbiIsImxldCBsb2NhbGVzID0ge1xuICAnZW4tR0InOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnR0JQJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbmlnaHRzJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ21pbmltdW0gc3RheTogJW51bWJlciBuaWdodHMnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWF4aW11bSBzdGF5OiAlbnVtYmVyIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZERheXM6ICdib29rZWQgYWxyZWFkeScsXG4gICAgc3RhcnRPZldlZWs6IDAsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0NhbGVuZGFyJyxcbiAgICAgIG1vbnRoczogJ01vbnRocycsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTmV4dCBtb250aCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ1ByZXZpb3VzIG1vbnRoJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgcHJldmlvdXNZZWFyczogJ1ByZXZpb3VzIHllYXJzJyxcbiAgICAgIG5leHRZZWFyczogJ05leHQgeWVhcnMnLFxuICAgICAgdG9kYXk6ICd0b2RheScsXG4gICAgICB1bmF2YWlsYWJsZTogJ3VuYXZhaWxhYmxlJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdTdGFydCBkYXRlOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0VuZCBkYXRlOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdlbi1VUyc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuaWdodHMnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuaWdodHMnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnbWluaW11bSBzdGF5OiAlbnVtYmVyIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYXhpbXVtIHN0YXk6ICVudW1iZXIgbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2Jvb2tlZCBhbHJlYWR5JyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuICAgICAgbW9udGhzOiAnTW9udGhzJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdOZXh0IG1vbnRoJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnUHJldmlvdXMgbW9udGgnLFxuICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICBwcmV2aW91c1llYXJzOiAnUHJldmlvdXMgeWVhcnMnLFxuICAgICAgbmV4dFllYXJzOiAnTmV4dCB5ZWFycycsXG4gICAgICB0b2RheTogJ3RvZGF5JyxcbiAgICAgIHVuYXZhaWxhYmxlOiAndW5hdmFpbGFibGUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ1N0YXJ0IGRhdGU6ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRW5kIGRhdGU6ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ2RlLURFJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ1Nvbm50YWdfTW9udGFnX0RpZW5zdGFnX01pdHR3b2NoX0Rvbm5lcnN0YWdfRnJlaXRhZ19TYW1zdGFnJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyX0ZlYnJ1YXJfTcOkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9Nw6RyX0Fwcl9NYWlfSnVuX0p1bF9BdWdfU2VwX09rdF9Ob3ZfRGV6Jy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbsOkY2h0ZScsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG7DpGNodGUnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnbWluZGVzdGF1ZmVudGhhbHQ6ICVudW1iZXIgTsOkY2h0ZScsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYXhpbWFsZXIgQXVmZW50aGFsdDogJW51bWJlciBOw6RjaHRlJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ3NjaG9uIGdlYnVjaHQnLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdLYWxlbmRlcicsXG4gICAgICBtb250aHM6ICdNb25hdGUnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ07DpGNoc3RlciBNb25hdCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ1ZvcmhlcmlnZXIgTW9uYXQnLFxuICAgICAgY2xvc2U6ICdTY2hsaWXDn2VuJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdWb3JoZXJpZ2UgSmFocmUnLFxuICAgICAgbmV4dFllYXJzOiAnTsOkY2hzdGUgSmFocmUnLFxuICAgICAgdG9kYXk6ICdoZXV0ZScsXG4gICAgICB1bmF2YWlsYWJsZTogJ25pY2h0IHZlcmbDvGdiYXInLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ1N0YXJ0ZGF0dW06ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRW5kZGF0dW06ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ2VzLUVTJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnRG9fTHVfTWFfTWlfSnVfVmlfU8OhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacOpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDoWJhZG8nLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbm9jaGVzJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbm9jaGVzJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ2VzdGFuY2lhIG3DrW5pbWE6ICVudW1iZXIgbm9jaGVzJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ2VzdGFuY2lhIG3DoXhpbWE6ICVudW1iZXIgbm9jaGVzJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ3lhIHJlc2VydmFkbycsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0NhbGVuZGFyaW8nLFxuICAgICAgbW9udGhzOiAnTWVzZXMnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ1Byw7N4aW1vIG1lcycsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ01lcyBhbnRlcmlvcicsXG4gICAgICBjbG9zZTogJ0NlcnJhcicsXG4gICAgICBwcmV2aW91c1llYXJzOiAnQcOxb3MgYW50ZXJpb3JlcycsXG4gICAgICBuZXh0WWVhcnM6ICdBw7FvcyBzaWd1aWVudGVzJyxcbiAgICAgIHRvZGF5OiAnaG95JyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnbm8gZGlzcG9uaWJsZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnRmVjaGEgZGUgaW5pY2lvOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0ZlY2hhIGRlIGZpbjogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnZnItRlInOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdEaV9MdV9NYV9NZV9KZV9WZV9TYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnamFudmllcl9mw6l2cmllcl9tYXJzX2F2cmlsX21haV9qdWluX2p1aWxsZXRfYW/Du3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMOpY2VtYnJlJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ2phbl9mw6l2X21hcl9hdnJfbWFpX2p1aW5fanVpbF9hb8O7X3NlcF9vY3Rfbm92X2TDqWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyVkICViLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBudWl0cycsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG51aXRzJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ3PDqWpvdXIgbWluaW11bSA6ICVudW1iZXIgbnVpdHMnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnc8Opam91ciBtYXhpbXVtIDogJW51bWJlciBudWl0cycsXG4gICAgaGFzSW52YWxpZERheXM6ICdkw6lqw6AgcsOpc2VydsOpJyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kcmllcicsXG4gICAgICBtb250aHM6ICdNb2lzJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdNb2lzIHN1aXZhbnQnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdNb2lzIHByw6ljw6lkZW50JyxcbiAgICAgIGNsb3NlOiAnRmVybWVyJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdBbm7DqWVzIHByw6ljw6lkZW50ZXMnLFxuICAgICAgbmV4dFllYXJzOiAnQW5uw6llcyBzdWl2YW50ZXMnLFxuICAgICAgdG9kYXk6IFwiYXVqb3VyZCdodWlcIixcbiAgICAgIHVuYXZhaWxhYmxlOiAnaW5kaXNwb25pYmxlJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdEYXRlIGRlIGTDqWJ1dCA6ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRGF0ZSBkZSBmaW4gOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdpdC1JVCc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ0RvX0x1X01hX01lX0dpX1ZlX1NhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdkb21lbmljYV9sdW5lZMOsX21hcnRlZMOsX21lcmNvbGVkw6xfZ2lvdmVkw6xfdmVuZXJkw6xfc2FiYXRvJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnZ2VubmFpb19mZWJicmFpb19tYXJ6b19hcHJpbGVfbWFnZ2lvX2dpdWdub19sdWdsaW9fYWdvc3RvX3NldHRlbWJyZV9vdHRvYnJlX25vdmVtYnJlX2RpY2VtYnJlJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ2dlbl9mZWJfbWFyX2Fwcl9tYWdfZ2l1X2x1Z19hZ29fc2V0X290dF9ub3ZfZGljJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbm90dGkuJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbm90dGknLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnc29nZ2lvcm5vIG1pbmltOiAlbnVtYmVyIG5vdHRpJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ3NvZ2dpb3JubyBtYXNzaW1vOiAlbnVtYmVyIG5vdHRpJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2dpw6AgcHJlbm90YXRvJyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXJpbycsXG4gICAgICBtb250aHM6ICdNZXNpJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdNZXNlIHN1Y2Nlc3Npdm8nLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdNZXNlIHByZWNlZGVudGUnLFxuICAgICAgY2xvc2U6ICdDaGl1ZGknLFxuICAgICAgcHJldmlvdXNZZWFyczogJ0FubmkgcHJlY2VkZW50aScsXG4gICAgICBuZXh0WWVhcnM6ICdBbm5pIHN1Y2Nlc3NpdmknLFxuICAgICAgdG9kYXk6ICdvZ2dpJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnbm9uIGRpc3BvbmliaWxlJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdEYXRhIGRpIGluaXppbzogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdEYXRhIGRpIGZpbmU6ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ3N2LVNFJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnc8O2X23DpV90aV9vbl90b19mcl9sw7YnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ3PDtm5kYWdfbcOlbmRhZ190aXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDtnJkYWcnLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdqYW51YXJpX2ZlYnJ1YXJpX21hcnNfYXByaWxfbWFqX2p1bmlfanVsaV9hdWd1c3RpX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ2phbl9mZWJfbWFyX2Fwcl9tYWpfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbsOkdHRlcicsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG7DpHR0ZXInLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAna29ydGFzdGUgdmlzdGVsc2U6ICVudW1iZXIgbsOkdHRlcicsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYXhpbcOhbG55IHBvYnl0OiAlbnVtYmVyIG7DpHR0ZXInLFxuICAgIGhhc0ludmFsaWREYXlzOiAncmVkYW4gYm9rYXQnLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdLYWxlbmRlcicsXG4gICAgICBtb250aHM6ICdNw6VuYWRlcicsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTsOkc3RhIG3DpW5hZCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ0bDtnJlZ8OlZW5kZSBtw6VuYWQnLFxuICAgICAgY2xvc2U6ICdTdMOkbmcnLFxuICAgICAgcHJldmlvdXNZZWFyczogJ0bDtnJlZ8OlZW5kZSDDpXInLFxuICAgICAgbmV4dFllYXJzOiAnTsOkc3RhIMOlcicsXG4gICAgICB0b2RheTogJ2lkYWcnLFxuICAgICAgdW5hdmFpbGFibGU6ICdlaiB0aWxsZ8OkbmdsaWcnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ1N0YXJ0ZGF0dW06ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnU2x1dGRhdHVtOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdydS1SVSc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ9CS0YFf0J/QvV/QktGCX9Ch0YBf0KfRgl/Qn9GCX9Ch0LEnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LVf0J/QvtC90LXQtNC10LvRjNC90LjQul/QktGC0L7RgNC90LjQul/QodGA0LXQtNCwX9Cn0LXRgtCy0LXRgNCzX9Cf0Y/RgtC90LjRhtCwX9Ch0YPQsdCx0L7RgtCwJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAn0K/QvdCy0LDRgNGMX9Ck0LXQstGA0LDQu9GMX9Cc0LDRgNGCX9CQ0L/RgNC10LvRjF/QnNCw0Llf0JjRjtC90Yxf0JjRjtC70Yxf0JDQstCz0YPRgdGCX9Ch0LXQvdGC0Y/QsdGA0Yxf0J7QutGC0Y/QsdGA0Yxf0J3QvtGP0LHRgNGMX9CU0LXQutCw0LHRgNGMJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ9Cv0L3Qsl/QpNC10LJf0JzQsNGAX9CQ0L/RgF/QnNCw0Llf0JjRjtC9X9CY0Y7Qu1/QkNCy0LNf0KHQtdC9X9Ce0LrRgl/QndC+0Y9f0JTQtdC6Jy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclZC4lYi4lWScsXG4gICAgY3VycmVuY3k6ICdSVUInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyDQvdC+0YcuJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0g0L3QvtGHLicsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICfQvNC40L3QuNC80LDQu9GM0L3QvtC1INC/0YDQtdCx0YvQstCw0L3QuDogJW51bWJlciDQvdC+0YfQuCcsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICfQvNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0L/RgNC10LHRi9Cy0LDQvdC40LU6ICVudW1iZXIg0L3QvtGH0LgnLFxuICAgIGhhc0ludmFsaWREYXlzOiAn0LfQsNCx0YDQvtC90LjRgNC+0LLQsNC90L4g0YPQttC1JyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAn0JrQsNC70LXQvdC00LDRgNGMJyxcbiAgICAgIG1vbnRoczogJ9Cc0LXRgdGP0YbRiycsXG4gICAgICBtb250aHNGb3J3YXJkOiAn0KHQu9C10LTRg9GO0YnQuNC5INC80LXRgdGP0YYnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDQvNC10YHRj9GGJyxcbiAgICAgIGNsb3NlOiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgcHJldmlvdXNZZWFyczogJ9Cf0YDQtdC00YvQtNGD0YnQuNC1INCz0L7QtNGLJyxcbiAgICAgIG5leHRZZWFyczogJ9Ch0LvQtdC00YPRjtGJ0LjQtSDQs9C+0LTRiycsXG4gICAgICB0b2RheTogJ9GB0LXQs9C+0LTQvdGPJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAn0L3QtdC00L7RgdGC0YPQv9C90L4nLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ9CU0LDRgtCwINC90LDRh9Cw0LvQsDogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICfQlNCw0YLQsCDQvtC60L7QvdGH0LDQvdC40Y86ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ3BsLVBMJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnTmRfUG5fV3RfxZpyX0N6X1B0X1NvJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICduaWVkemllbGFfcG9uaWVkemlhxYJla193dG9yZWtfxZtyb2RhX2N6d2FydGVrX3BpxIV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnc3R5Y3plxYRfbHV0eV9tYXJ6ZWNfa3dpZWNpZcWEX21hal9jemVyd2llY19saXBpZWNfc2llcnBpZcWEX3dyemVzaWXFhF9wYcW6ZHppZXJuaWtfbGlzdG9wYWRfZ3J1ZHppZcWEJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ3N0eV9sdXRfbWFyX2t3aV9tYWpfY3plX2xpcF9zaWVfd3J6X3BhxbpfbGlzX2dydScuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWQuJWIuJVknLFxuICAgIGN1cnJlbmN5OiAnUExOJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbm9jZScsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vY2UnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnbWluaW1hbG55IHBvYnk6ICVudW1iZXIgbm9jZScsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYWtzeW1hbG55IHBvYnl0OiAlbnVtYmVyIG5vY2UnLFxuICAgIGhhc0ludmFsaWREYXlzOiAnanXFvCB6YXJlemVyd293YW5lJyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnS2FsZW5kYXJ6JyxcbiAgICAgIG1vbnRoczogJ01pZXNpxIVjZScsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTmFzdMSZcG55IG1pZXNpxIVjJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnUG9wcnplZG5pIG1pZXNpxIVjJyxcbiAgICAgIGNsb3NlOiAnWmFta25paicsXG4gICAgICBwcmV2aW91c1llYXJzOiAnUG9wcnplZG5pZSBsYXRhJyxcbiAgICAgIG5leHRZZWFyczogJ05hc3TEmXBuZSBsYXRhJyxcbiAgICAgIHRvZGF5OiAnZHppc2lhaicsXG4gICAgICB1bmF2YWlsYWJsZTogJ25pZWRvc3TEmXBuZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnRGF0YSByb3pwb2N6xJljaWE6ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRGF0YSB6YWtvxYRjemVuaWE6ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ25sLU5MJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnWm9fTWFfRGlfV29fRG9fVnJfWmEnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ1pvbmRhZ19NYWFuZGFnX0RpbnNkYWdfV29lbnNkYWdfRG9uZGVyZGFnX1ZyaWpkYWdfWmF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdKYW51YXJpX0ZlYnJ1YXJpX01hYXJ0X0FwcmlsX01laV9KdW5pX0p1bGlfQXVndXN0dXNfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9NYWFfQXByX01laV9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuYWNodGVuJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbmFjaHRlbicsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdtaW5pbWFhbCB2ZXJibGlqZjogJW51bWJlciBuYWNodGVuJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21heGltYWFsIHZlcmJsaWpmOiAlbnVtYmVyIG5hY2h0ZW4nLFxuICAgIGhhc0ludmFsaWREYXlzOiAnYWwgZ2Vib2VrdCcsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0thbGVuZGVyJyxcbiAgICAgIG1vbnRoczogJ01hYW5kZW4nLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ1ZvbGdlbmRlIG1hYW5kJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnVm9yaWdlIG1hYW5kJyxcbiAgICAgIGNsb3NlOiAnU2x1aXRlbicsXG4gICAgICBwcmV2aW91c1llYXJzOiAnVm9yaWdlIGphcmVuJyxcbiAgICAgIG5leHRZZWFyczogJ1ZvbGdlbmRlIGphcmVuJyxcbiAgICAgIHRvZGF5OiAndmFuZGFhZycsXG4gICAgICB1bmF2YWlsYWJsZTogJ25pZXQgYmVzY2hpa2JhYXInLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ1N0YXJ0ZGF0dW06ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRWluZGRhdHVtOiAlZGF0ZSdcbiAgICB9XG4gIH1cbn07XG5cbi8vIEFkZCBhbGlhc2VzXG5sb2NhbGVzID0gT2JqZWN0LmFzc2lnbih7XG4gIGVuOiBsb2NhbGVzWydlbi1VUyddLFxuICBkZTogbG9jYWxlc1snZGUtREUnXSxcbiAgZXM6IGxvY2FsZXNbJ2VzLUVTJ10sXG4gIGZyOiBsb2NhbGVzWydmci1GUiddLFxuICBpdDogbG9jYWxlc1snaXQtSVQnXSxcbiAgc3Y6IGxvY2FsZXNbJ3N2LVNFJ10sXG4gIHJ1OiBsb2NhbGVzWydydS1SVSddLFxuICBwbDogbG9jYWxlc1sncGwtUEwnXSxcbiAgbmw6IGxvY2FsZXNbJ25sLU5MJ11cbn0sIGxvY2FsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGVzO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50LCB3aW5kb3cgKi9cblxuY29uc3QgQVJST1dfU0laRSA9IDg7XG5cbmNvbnN0IGdldEdsb2JhbE9iamVjdCA9ICgpID0+ICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogbnVsbCk7XG5cbmNvbnN0IGdldFBvcHBlclJ1bnRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpO1xuXG4gIGlmIChcbiAgICBnbG9iYWxPYmplY3RcbiAgICAmJiBnbG9iYWxPYmplY3QuUG9wcGVyXG4gICAgJiYgdHlwZW9mIGdsb2JhbE9iamVjdC5Qb3BwZXIuY3JlYXRlUG9wcGVyID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBnbG9iYWxPYmplY3QuUG9wcGVyO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRGbG9hdGluZ1J1bnRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpO1xuICBjb25zdCBydW50aW1lID0gZ2xvYmFsT2JqZWN0XG4gICAgJiYgKGdsb2JhbE9iamVjdC5GbG9hdGluZ1VJRE9NIHx8IGdsb2JhbE9iamVjdC5GbG9hdGluZ1VJIHx8IGdsb2JhbE9iamVjdC5mbG9hdGluZ1VJKTtcblxuICBpZiAocnVudGltZSAmJiB0eXBlb2YgcnVudGltZS5jb21wdXRlUG9zaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcnVudGltZTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0QXJyb3dFbGVtZW50ID0gKGZsb2F0aW5nRWwpID0+IGZsb2F0aW5nRWwucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wcGVyLWFycm93XScpO1xuXG5jb25zdCBzcGxpdFBsYWNlbWVudCA9IChwbGFjZW1lbnQgPSAnYm90dG9tJykgPT4ge1xuICBjb25zdCBbYmFzZVBsYWNlbWVudCwgYWxpZ25tZW50XSA9IHBsYWNlbWVudC5zcGxpdCgnLScpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZVBsYWNlbWVudDogYmFzZVBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICBhbGlnbm1lbnQ6IGFsaWdubWVudCB8fCBudWxsXG4gIH07XG59O1xuXG5jb25zdCBzZXRCb29sZWFuQXR0cmlidXRlID0gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxufTtcblxuY29uc3QgYXBwbHlQb3NpdGlvbiA9IChmbG9hdGluZ0VsLCB4LCB5LCBwbGFjZW1lbnQsIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJykgPT4ge1xuICBmbG9hdGluZ0VsLnN0eWxlLnBvc2l0aW9uID0gc3RyYXRlZ3k7XG4gIGZsb2F0aW5nRWwuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICBmbG9hdGluZ0VsLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICBmbG9hdGluZ0VsLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JywgcGxhY2VtZW50KTtcbn07XG5cbmNvbnN0IGFwcGx5QXJyb3dQb3NpdGlvbiA9IChhcnJvd0VsLCB4LCB5KSA9PiB7XG4gIGlmICghYXJyb3dFbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFycm93RWwuc3R5bGUubGVmdCA9ICcnO1xuICBhcnJvd0VsLnN0eWxlLnRvcCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICBhcnJvd0VsLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgeSA9PT0gJ251bWJlcicpIHtcbiAgICBhcnJvd0VsLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICB9XG59O1xuXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xuXG5jb25zdCBhbGlnbkhvcml6b250YWxseSA9IChyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgPT4ge1xuICBpZiAoYWxpZ25tZW50ID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZVJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZVJlY3QucmlnaHQgLSBmbG9hdGluZ1JlY3Qud2lkdGg7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlUmVjdC5sZWZ0ICsgKChyZWZlcmVuY2VSZWN0LndpZHRoIC0gZmxvYXRpbmdSZWN0LndpZHRoKSAvIDIpO1xufTtcblxuY29uc3QgYWxpZ25WZXJ0aWNhbGx5ID0gKHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSA9PiB7XG4gIGlmIChhbGlnbm1lbnQgPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlUmVjdC50b3A7XG4gIH1cblxuICBpZiAoYWxpZ25tZW50ID09PSAnZW5kJykge1xuICAgIHJldHVybiByZWZlcmVuY2VSZWN0LmJvdHRvbSAtIGZsb2F0aW5nUmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlUmVjdC50b3AgKyAoKHJlZmVyZW5jZVJlY3QuaGVpZ2h0IC0gZmxvYXRpbmdSZWN0LmhlaWdodCkgLyAyKTtcbn07XG5cbmNvbnN0IGdldFZpZXdwb3J0Q29vcmRpbmF0ZXMgPSAocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBwbGFjZW1lbnQsIG9mZnNldCA9IFswLCAwXSkgPT4ge1xuICBjb25zdCB7IGJhc2VQbGFjZW1lbnQsIGFsaWdubWVudCB9ID0gc3BsaXRQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgW2Nyb3NzQXhpc09mZnNldCA9IDAsIG1haW5BeGlzT2Zmc2V0ID0gMF0gPSBvZmZzZXQ7XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGFsaWduSG9yaXpvbnRhbGx5KHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSArIGNyb3NzQXhpc09mZnNldCxcbiAgICAgIHk6IHJlZmVyZW5jZVJlY3QudG9wIC0gZmxvYXRpbmdSZWN0LmhlaWdodCAtIG1haW5BeGlzT2Zmc2V0XG4gICAgfTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBhbGlnbkhvcml6b250YWxseShyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgKyBjcm9zc0F4aXNPZmZzZXQsXG4gICAgICB5OiByZWZlcmVuY2VSZWN0LmJvdHRvbSArIG1haW5BeGlzT2Zmc2V0XG4gICAgfTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVmZXJlbmNlUmVjdC5sZWZ0IC0gZmxvYXRpbmdSZWN0LndpZHRoIC0gbWFpbkF4aXNPZmZzZXQsXG4gICAgICB5OiBhbGlnblZlcnRpY2FsbHkocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpICsgY3Jvc3NBeGlzT2Zmc2V0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVmZXJlbmNlUmVjdC5yaWdodCArIG1haW5BeGlzT2Zmc2V0LFxuICAgIHk6IGFsaWduVmVydGljYWxseShyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgKyBjcm9zc0F4aXNPZmZzZXRcbiAgfTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUNvb3JkaW5hdGVzRm9yT2Zmc2V0UGFyZW50ID0gKGZsb2F0aW5nRWwsIHZpZXdwb3J0WCwgdmlld3BvcnRZKSA9PiB7XG4gIGNvbnN0IG93bmVyRG9jdW1lbnQgPSBmbG9hdGluZ0VsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgZ2V0R2xvYmFsT2JqZWN0KCk7XG4gIGNvbnN0IHsgb2Zmc2V0UGFyZW50IH0gPSBmbG9hdGluZ0VsO1xuXG4gIGlmIChcbiAgICAhb2Zmc2V0UGFyZW50XG4gICAgfHwgb2Zmc2V0UGFyZW50ID09PSBvd25lckRvY3VtZW50LmJvZHlcbiAgICB8fCBvZmZzZXRQYXJlbnQgPT09IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB2aWV3cG9ydFggKyAoZ2xvYmFsT2JqZWN0ID8gZ2xvYmFsT2JqZWN0LnBhZ2VYT2Zmc2V0IDogMCksXG4gICAgICB5OiB2aWV3cG9ydFkgKyAoZ2xvYmFsT2JqZWN0ID8gZ2xvYmFsT2JqZWN0LnBhZ2VZT2Zmc2V0IDogMClcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcGFyZW50UmVjdCA9IG9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4ge1xuICAgIHg6IHZpZXdwb3J0WCAtIHBhcmVudFJlY3QubGVmdCAtIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0ICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQsXG4gICAgeTogdmlld3BvcnRZIC0gcGFyZW50UmVjdC50b3AgLSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wICsgb2Zmc2V0UGFyZW50LnNjcm9sbFRvcFxuICB9O1xufTtcblxuY29uc3QgcG9zaXRpb25NYW51YWxBcnJvdyA9IChyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIHZpZXdwb3J0WCwgdmlld3BvcnRZLCBwbGFjZW1lbnQsIGFycm93RWwpID0+IHtcbiAgaWYgKCFhcnJvd0VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBiYXNlUGxhY2VtZW50IH0gPSBzcGxpdFBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBoYWxmQXJyb3cgPSBBUlJPV19TSVpFIC8gMjtcblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBjb25zdCBtYXhBcnJvd1ggPSBNYXRoLm1heChmbG9hdGluZ1JlY3Qud2lkdGggLSBBUlJPV19TSVpFLCAwKTtcbiAgICBjb25zdCBhcnJvd1ggPSBjbGFtcChcbiAgICAgIHJlZmVyZW5jZVJlY3QubGVmdCArIChyZWZlcmVuY2VSZWN0LndpZHRoIC8gMikgLSB2aWV3cG9ydFggLSBoYWxmQXJyb3csXG4gICAgICAwLFxuICAgICAgbWF4QXJyb3dYXG4gICAgKTtcblxuICAgIGFwcGx5QXJyb3dQb3NpdGlvbihhcnJvd0VsLCBhcnJvd1gsIG51bGwpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1heEFycm93WSA9IE1hdGgubWF4KGZsb2F0aW5nUmVjdC5oZWlnaHQgLSBBUlJPV19TSVpFLCAwKTtcbiAgY29uc3QgYXJyb3dZID0gY2xhbXAoXG4gICAgcmVmZXJlbmNlUmVjdC50b3AgKyAocmVmZXJlbmNlUmVjdC5oZWlnaHQgLyAyKSAtIHZpZXdwb3J0WSAtIGhhbGZBcnJvdyxcbiAgICAwLFxuICAgIG1heEFycm93WVxuICApO1xuXG4gIGFwcGx5QXJyb3dQb3NpdGlvbihhcnJvd0VsLCBudWxsLCBhcnJvd1kpO1xufTtcblxuY29uc3QgYXR0YWNoRmFsbGJhY2tBdXRvVXBkYXRlID0gKHVwZGF0ZSkgPT4ge1xuICBjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWxPYmplY3QoKTtcblxuICBpZiAoIWdsb2JhbE9iamVjdCB8fCB0eXBlb2YgZ2xvYmFsT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cblxuICBnbG9iYWxPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgZ2xvYmFsT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwgdHJ1ZSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBnbG9iYWxPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgICBnbG9iYWxPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlLCB0cnVlKTtcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBvcHBlclBvc2l0aW9uZXIgPSAocG9wcGVyUnVudGltZSwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgbW9kaWZpZXJzID0gW107XG5cbiAgaWYgKG9wdGlvbnMuZmxpcCA9PT0gZmFsc2UpIHtcbiAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5vZmZzZXQpKSB7XG4gICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhpZGUpIHtcbiAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICBuYW1lOiAnaGlkZScsXG4gICAgICBlbmFibGVkOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9wcGVyUnVudGltZS5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHtcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50LFxuICAgIHN0cmF0ZWd5OiBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzXG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRmxvYXRpbmdQb3NpdGlvbmVyID0gKGZsb2F0aW5nUnVudGltZSwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgYXJyb3dFbCA9IGdldEFycm93RWxlbWVudChmbG9hdGluZ0VsKTtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMub2Zmc2V0KSAmJiB0eXBlb2YgZmxvYXRpbmdSdW50aW1lLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IFtjcm9zc0F4aXMgPSAwLCBtYWluQXhpcyA9IDBdID0gb3B0aW9ucy5vZmZzZXQ7XG5cbiAgICBtaWRkbGV3YXJlLnB1c2goZmxvYXRpbmdSdW50aW1lLm9mZnNldCh7XG4gICAgICBtYWluQXhpcyxcbiAgICAgIGNyb3NzQXhpc1xuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmZsaXAgIT09IGZhbHNlICYmIHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUuZmxpcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1pZGRsZXdhcmUucHVzaChmbG9hdGluZ1J1bnRpbWUuZmxpcCgpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnNoaWZ0ICE9PSBmYWxzZSAmJiB0eXBlb2YgZmxvYXRpbmdSdW50aW1lLnNoaWZ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGZsb2F0aW5nUnVudGltZS5zaGlmdCgpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhpZGUgJiYgdHlwZW9mIGZsb2F0aW5nUnVudGltZS5oaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGZsb2F0aW5nUnVudGltZS5oaWRlKCkpO1xuICB9XG5cbiAgaWYgKGFycm93RWwgJiYgdHlwZW9mIGZsb2F0aW5nUnVudGltZS5hcnJvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1pZGRsZXdhcmUucHVzaChmbG9hdGluZ1J1bnRpbWUuYXJyb3coeyBlbGVtZW50OiBhcnJvd0VsIH0pKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBmbG9hdGluZ0VsLnN0eWxlLnBvc2l0aW9uID0gb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnO1xuXG4gICAgcmV0dXJuIGZsb2F0aW5nUnVudGltZS5jb21wdXRlUG9zaXRpb24ocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHtcbiAgICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnLFxuICAgICAgbWlkZGxld2FyZVxuICAgIH0pLnRoZW4oKHsgeCwgeSwgcGxhY2VtZW50LCBtaWRkbGV3YXJlRGF0YSA9IHt9IH0pID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oZmxvYXRpbmdFbCwgeCwgeSwgcGxhY2VtZW50LCBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScpO1xuICAgICAgYXBwbHlBcnJvd1Bvc2l0aW9uKGFycm93RWwsIG1pZGRsZXdhcmVEYXRhLmFycm93ICYmIG1pZGRsZXdhcmVEYXRhLmFycm93LngsIG1pZGRsZXdhcmVEYXRhLmFycm93ICYmIG1pZGRsZXdhcmVEYXRhLmFycm93LnkpO1xuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZShcbiAgICAgICAgZmxvYXRpbmdFbCxcbiAgICAgICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nLFxuICAgICAgICBtaWRkbGV3YXJlRGF0YS5oaWRlICYmIG1pZGRsZXdhcmVEYXRhLmhpZGUucmVmZXJlbmNlSGlkZGVuXG4gICAgICApO1xuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZShcbiAgICAgICAgZmxvYXRpbmdFbCxcbiAgICAgICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnLFxuICAgICAgICBtaWRkbGV3YXJlRGF0YS5oaWRlICYmIG1pZGRsZXdhcmVEYXRhLmhpZGUuZXNjYXBlZFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhbnVwID0gKHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUuYXV0b1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICA/IGZsb2F0aW5nUnVudGltZS5hdXRvVXBkYXRlKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB1cGRhdGUpXG4gICAgOiBhdHRhY2hGYWxsYmFja0F1dG9VcGRhdGUodXBkYXRlKTtcblxuICBpZiAoIW9wdGlvbnMuZGVmZXJVcGRhdGUpIHtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTWFudWFsUG9zaXRpb25lciA9IChyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBhcnJvd0VsID0gZ2V0QXJyb3dFbGVtZW50KGZsb2F0aW5nRWwpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBmbG9hdGluZ0VsLnN0eWxlLnBvc2l0aW9uID0gb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlUmVjdCA9IHJlZmVyZW5jZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGZsb2F0aW5nUmVjdCA9IGZsb2F0aW5nRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgdmlld3BvcnRDb29yZGluYXRlcyA9IGdldFZpZXdwb3J0Q29vcmRpbmF0ZXMoXG4gICAgICByZWZlcmVuY2VSZWN0LFxuICAgICAgZmxvYXRpbmdSZWN0LFxuICAgICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBvcHRpb25zLm9mZnNldFxuICAgICk7XG4gICAgY29uc3Qgbm9ybWFsaXplZENvb3JkaW5hdGVzID0gbm9ybWFsaXplQ29vcmRpbmF0ZXNGb3JPZmZzZXRQYXJlbnQoXG4gICAgICBmbG9hdGluZ0VsLFxuICAgICAgdmlld3BvcnRDb29yZGluYXRlcy54LFxuICAgICAgdmlld3BvcnRDb29yZGluYXRlcy55XG4gICAgKTtcblxuICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICBmbG9hdGluZ0VsLFxuICAgICAgbm9ybWFsaXplZENvb3JkaW5hdGVzLngsXG4gICAgICBub3JtYWxpemVkQ29vcmRpbmF0ZXMueSxcbiAgICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnXG4gICAgKTtcbiAgICBwb3NpdGlvbk1hbnVhbEFycm93KFxuICAgICAgcmVmZXJlbmNlUmVjdCxcbiAgICAgIGZsb2F0aW5nUmVjdCxcbiAgICAgIHZpZXdwb3J0Q29vcmRpbmF0ZXMueCxcbiAgICAgIHZpZXdwb3J0Q29vcmRpbmF0ZXMueSxcbiAgICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYXJyb3dFbFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2xlYW51cCA9IGF0dGFjaEZhbGxiYWNrQXV0b1VwZGF0ZSh1cGRhdGUpO1xuXG4gIGlmICghb3B0aW9ucy5kZWZlclVwZGF0ZSkge1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbmVyKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSB7XG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICBzdHJhdGVneTogb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnLFxuICAgIG9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgWzAsIDBdLFxuICAgIGZsaXA6IG9wdGlvbnMuZmxpcCAhPT0gZmFsc2UsXG4gICAgc2hpZnQ6IG9wdGlvbnMuc2hpZnQgIT09IGZhbHNlLFxuICAgIGhpZGU6IG9wdGlvbnMuaGlkZSA9PT0gdHJ1ZSxcbiAgICBkZWZlclVwZGF0ZTogb3B0aW9ucy5kZWZlclVwZGF0ZSA9PT0gdHJ1ZVxuICB9O1xuICBjb25zdCBwb3BwZXJSdW50aW1lID0gZ2V0UG9wcGVyUnVudGltZSgpO1xuXG4gIGlmIChwb3BwZXJSdW50aW1lKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBvcHBlclBvc2l0aW9uZXIocG9wcGVyUnVudGltZSwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG5vcm1hbGl6ZWRPcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0IGZsb2F0aW5nUnVudGltZSA9IGdldEZsb2F0aW5nUnVudGltZSgpO1xuXG4gIGlmIChmbG9hdGluZ1J1bnRpbWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRmxvYXRpbmdQb3NpdGlvbmVyKGZsb2F0aW5nUnVudGltZSwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG5vcm1hbGl6ZWRPcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVNYW51YWxQb3NpdGlvbmVyKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBub3JtYWxpemVkT3B0aW9ucyk7XG59XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgbWFpbiAgPSAobGFiZWwpID0+IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMubW9udGhzV3JhcHBlcn1cIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsPVwiJHtsYWJlbH1cIj48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IGxpdmVSZWdpb24gPSAoKSA9PiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnNyT25seX1cIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cInRydWVcIiBkYXRhLWxpdmUtcmVnaW9uPjwvZGl2PmA7XG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbiA9ICgpID0+IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMucGFnaW5hdGlvbn1cIj48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IG1vYmlsZVdlZWtkYXlzID0gKGhlYWRlcikgPT4gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5tb2JpbGVXZWVrZGF5c31cIiByb2xlPVwicm93XCI+JHtoZWFkZXJ9PC9kaXY+YDtcbmV4cG9ydCBjb25zdCBzdmdTcHJpdGUgPSAoY2hldnJvbkRvd25JZCkgPT4gYFxuICA8c3ZnIGNsYXNzPVwiJHtzdHlsZXMuc3ByaXRlfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiPlxuICAgIDxzeW1ib2wgaWQ9XCIke2NoZXZyb25Eb3duSWR9XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgPHBhdGggZD1cIk00LjIyIDYuOTdhLjc1Ljc1IDAgMCAxIDEuMDYgMEw4IDkuNjlsMi43Mi0yLjcyYS43NS43NSAwIDEgMSAxLjA2IDEuMDZsLTMuMjUgMy4yNWEuNzUuNzUgMCAwIDEtMS4wNiAwTDQuMjIgOC4wM2EuNzUuNzUgMCAwIDEgMC0xLjA2WlwiPjwvcGF0aD5cbiAgICA8L3N5bWJvbD5cbiAgPC9zdmc+XG5gO1xuXG5leHBvcnQgY29uc3QgdG9vbHRpcCA9IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMudG9vbHRpcH1cIiByb2xlPVwidG9vbHRpcFwiPjxzcGFuPjwvc3Bhbj48ZGl2IGNsYXNzPVwiJHtzdHlsZXMudG9vbHRpcEFycm93fVwiIGRhdGEtcG9wcGVyLWFycm93PVwidHJ1ZVwiPjwvZGl2PjwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCBtb250aCA9ICh7XG4gIGxhYmVsLFxuICBjYXB0aW9uLFxuICBoZWFkZXIsXG4gIGJvZHlcbn0pID0+IGBcbiAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLm1vbnRofSAke3N0eWxlcy5tQ2VsbH0ganMtbW9udGhcIiByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWw9XCIke2xhYmVsfVwiPlxuICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy5jYXB0aW9ufVwiPiR7Y2FwdGlvbn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMudGFibGVIZWFkZXJ9XCIgcm9sZT1cInJvd1wiPiR7aGVhZGVyfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy5ib2R5fVwiIHJvbGU9XCJyb3dncm91cFwiPiR7Ym9keX08L2Rpdj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgeWVhclBpY2tlciA9ICh7XG4gIGxhYmVsLFxuICBjaGV2cm9uRG93bklkXG59KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCIke3N0eWxlcy5jYXB0aW9uUGlja2VyfVwiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCIke3N0eWxlcy5jYXB0aW9uVHJpZ2dlcn1cIlxuICAgICAgZGF0YS15ZWFyLXBpY2tlci10cmlnZ2VyXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgYXJpYS1oYXNwb3B1cD1cImRpYWxvZ1wiXG4gICAgICBhcmlhLWxhYmVsPVwiJHtsYWJlbH1cIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHtzdHlsZXMuY2FwdGlvbkxhYmVsfVwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb25DaGV2cm9ufVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICA8dXNlIGhyZWY9XCIjJHtjaGV2cm9uRG93bklkfVwiPjwvdXNlPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHNoYXJlZFllYXJQaWNrZXJQYW5lbCA9ICh7XG4gIGNsb3NlTGFiZWwsXG4gIHByZXZpb3VzTGFiZWwsXG4gIG5leHRMYWJlbFxufSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMueWVhclBpY2tlclBhbmVsfVwiIGRhdGEteWVhci1waWNrZXItcGFuZWwgaGlkZGVuPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzdHlsZXMueWVhclBpY2tlckNsb3NlfVwiIGRhdGEteWVhci1waWNrZXItY2xvc2UgYXJpYS1sYWJlbD1cIiR7Y2xvc2VMYWJlbH1cIj4ke2Nsb3NlTGFiZWx9PC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnllYXJHcmlkfVwiIGRhdGEteWVhci1ncmlkPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy55ZWFyUGlja2VySGVhZGVyfVwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N0eWxlcy55ZWFyUGFnZXJ9XCIgZGF0YS15ZWFyLXBhZ2Utb2Zmc2V0PVwiLTEyXCIgYXJpYS1sYWJlbD1cIiR7cHJldmlvdXNMYWJlbH1cIj4ke3ByZXZpb3VzTGFiZWx9PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3R5bGVzLnllYXJQYWdlcn1cIiBkYXRhLXllYXItcGFnZS1vZmZzZXQ9XCIxMlwiIGFyaWEtbGFiZWw9XCIke25leHRMYWJlbH1cIj4ke25leHRMYWJlbH08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgeWVhck9wdGlvbiA9ICh5ZWFyLCBzZWxlY3RlZFllYXIpID0+IGBcbiAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzPVwiJHtzdHlsZXMueWVhck9wdGlvbn1cIlxuICAgIGRhdGEteWVhci1vcHRpb249XCIke3llYXJ9XCJcbiAgICAke3llYXIgPT09IHNlbGVjdGVkWWVhciA/ICdkYXRhLXNlbGVjdGVkLXllYXIgYXJpYS1jdXJyZW50PVwidHJ1ZVwiJyA6ICcnfVxuICA+XG4gICAgJHt5ZWFyfVxuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBjb25zdCB3ZWVrRGF5TGFiZWwgPSAobGFiZWwpID0+IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMudGh9XCIgcm9sZT1cImNvbHVtbmhlYWRlclwiPiR7bGFiZWx9PC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IHdlZWtEYXkgPSAobykgPT4ge1xuICBjb25zdCBpbmZvTGluZXMgPSBbXTtcblxuICBpZiAoby5yYXRlKSB7XG4gICAgaW5mb0xpbmVzLnB1c2goby5yYXRlVCk7XG4gIH1cblxuICBpZiAoby5taW5TdGF5ICYmIG8ubWluU3RheVQpIHtcbiAgICBpbmZvTGluZXMucHVzaChvLm1pblN0YXlUKTtcbiAgfVxuXG4gIGlmIChvLm1heFN0YXkgJiYgby5tYXhTdGF5VCkge1xuICAgIGluZm9MaW5lcy5wdXNoKG8ubWF4U3RheVQpO1xuICB9XG5cbiAgY29uc3QgaW5mb0h0bWwgPSBpbmZvTGluZXMubGVuZ3RoID8gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5pbmZvfVwiPiR7aW5mb0xpbmVzLmpvaW4oJzxicj4nKX08L2Rpdj5gIDogJyc7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2XG4gICAgICAke28uZGlzYWJsZWQgPyBgZGF0YS1kaXNhYmxlZD0ke28uZGlzYWJsZWR9IGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJgIDogJ2RhdGEtZW5hYmxlZCd9XG4gICAgICAke28uaXNBdmFpbGFibGVPdXQgPyAnZGF0YS1hdmFpbGFibGUtb3V0JyA6ICcnfVxuICAgICAgJHtvLmlzQXZhaWxhYmxlSW4gPyAnZGF0YS1hdmFpbGFibGUtaW4nIDogJyd9XG4gICAgICAke28ubWluU3RheSA/IGBkYXRhLW1pbi1zdGF5PSR7by5taW5TdGF5fWAgOiAnJ31cbiAgICAgICR7by5tYXhTdGF5ID8gYGRhdGEtbWF4LXN0YXk9JHtvLm1heFN0YXl9YCA6ICcnfVxuICAgICAgZGF0YS12YWx1ZT1cIiR7by5sYWJlbH1cIlxuICAgICAgY2xhc3M9XCIke3N0eWxlcy5jZWxsfSAke28uaXNDdXJyZW50RGF5ID8gc3R5bGVzLnRvZGF5IDogJyd9XCJcbiAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICB0YWJpbmRleD1cIiR7by50YWJpbmRleH1cIlxuICAgICAgYXJpYS1sYWJlbD1cIiR7by5hcmlhTGFiZWx9XCJcbiAgICAgICR7by5pc0N1cnJlbnREYXkgPyAnYXJpYS1jdXJyZW50PVwiZGF0ZVwiJyA6ICcnfVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHtzdHlsZXMuY250fVwiPiR7by5sYWJlbH08L3NwYW4+XG4gICAgICAke2luZm9IdG1sfVxuICAgIDwvZGl2PlxuICBgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcndhcmQgPSAobGFiZWwpID0+IGBcbiAgPGJ1dHRvbiBjbGFzcz1cIiR7c3R5bGVzLmZvcndhcmR9XCIgYXJpYS1sYWJlbD1cIiR7bGFiZWx9XCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxwYXRoIGQ9XCJtOSAxOCA2LTYtNi02XCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBjb25zdCBiYWNrID0gKGxhYmVsKSA9PiBgXG4gIDxidXR0b24gY2xhc3M9XCIke3N0eWxlcy5iYWNrfVwiIGFyaWEtbGFiZWw9XCIke2xhYmVsfVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICA8cGF0aCBkPVwibTE1IDE4LTYtNiA2LTZcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGNvbnN0IHdlZWtEYXlQbGFjZWhvbGRlciA9IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMucGxhY2Vob2xkZXJ9XCIgZGF0YS1wbGFjZWhvbGRlciBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Rpdj5gO1xuXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuZXhwb3J0IGNvbnN0IHdlZWtSb3cgPSAobnVtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb3BlbjogYDxkaXYgcm9sZT1cInJvd1wiIGNsYXNzPVwianMtYm9keS1yb3ctJHtudW19ICR7c3R5bGVzLndlZWtSb3d9XCI+YCxcbiAgICBjbG9zZTogJzwvZGl2PidcbiAgfTtcbn07XG4iLCIvKiBnbG9iYWwgY29uc29sZSAqL1xuaW1wb3J0IHsgc3RyZnRpbWUsIHN0cnB0aW1lIH0gZnJvbSAnc3RydGltZSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnd2lkZ2V0LXV0aWxzJztcbmNvbnN0IHsgaXMgfSA9IHV0aWxzO1xuXG5leHBvcnQgY29uc3QgZGF0ZVRvSXNvID0gKHllYXIsIG1vbnRoLCBkYXksIGlzU3RyaW5nID0gZmFsc2UpID0+IHtcbiAgZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAxMCkge1xuICAgICAgcmV0dXJuIGAwJHtudW1iZXJ9YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIGlmIChpc1N0cmluZykge1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke3BhZChtb250aCArIDEpfS0ke3BhZChkYXkpfWA7XG4gIH1cblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDEyLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgZGF0ZVRvQXJyYXkgPSAodmFsLCBmb3JtYXQsIGxvY2FsZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGUgPSBzdHJwdGltZSh2YWwsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICBjb25zdCBhICAgID0gc3RyZnRpbWUoZGF0ZSwgJyVZLSVtLSVkJykuc3BsaXQoJy0nKTtcblxuICAgIHJldHVybiBbXG4gICAgICBwYXJzZUludChhWzBdKSwgLy8geWVhclxuICAgICAgcGFyc2VJbnQoYVsxXSAtIDEpLCAvLyBtb250aCBpbmRleFxuICAgICAgcGFyc2VJbnQoYVsyXSkgLy8gZGF5XG4gICAgXTtcbiAgfSBjYXRjaChlKSB7XG4gICAgaWYgKGlzKGUubWVzc2FnZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzTGF0ZXIgPSAoc3RhcnQsIGVuZCkgPT4gZGF0ZVRvSXNvKC4uLnN0YXJ0LCB0cnVlKSA8IGRhdGVUb0lzbyguLi5lbmQsIHRydWUpO1xuXG5leHBvcnQgY29uc3QgaXNDdXJyZW50ID0gKHN0YXJ0LCBlbmQpID0+IGRhdGVUb0lzbyguLi5zdGFydCwgdHJ1ZSkgPT0gZGF0ZVRvSXNvKC4uLmVuZCwgdHJ1ZSk7XG5cbmV4cG9ydCBjb25zdCBtb250aERpZmYgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICByZXR1cm4gZW5kLmdldE1vbnRoKCkgLSBzdGFydC5nZXRNb250aCgpICsgKDEyICogKGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25PZkNlbGwgPSAoY2VsbCkgPT4ge1xuICBpZiAoaXMoY2VsbC5kYXRhc2V0LmVuYWJsZWQpIHx8IGlzKGNlbGwuZGF0YXNldC5hdmFpbGFibGVJbikgfHwgaXMoY2VsbC5kYXRhc2V0LmF2YWlsYWJsZU91dCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCB0Rm9ybWF0dGVyID0gKHZhbHVlLCBzdHIpID0+IHN0ci5yZXBsYWNlKCclbnVtYmVyJywgdmFsdWUpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5TbWlseUNhbGVuZGFyX19yZXNldCBkaXYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzcGFuLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXBwbGV0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgb2JqZWN0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaWZyYW1lLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDEsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGJsb2NrcXVvdGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBwcmUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhLFxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFiYnIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhY3JvbnltLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYWRkcmVzcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGJpZywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNpdGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjb2RlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGVsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGZuLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZW0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBpbWcsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpbnMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBrYmQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBxLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNhbXAsXG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgc21hbGwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdHJpa2UsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdHJvbmcsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdWIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdXAsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0dCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHZhciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGIsIC5TbWlseUNhbGVuZGFyX19yZXNldCB1LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNlbnRlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZHQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG9sLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdWwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBsaSxcbi5TbWlseUNhbGVuZGFyX19yZXNldCBmaWVsZHNldCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZvcm0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBkaXYuU21pbHlDYWxlbmRhcl9fZm9ybSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGxhYmVsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbGVnZW5kLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGFibGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjYXB0aW9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGJvZHksIC5TbWlseUNhbGVuZGFyX19yZXNldCB0Zm9vdCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRoZWFkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdHIsXG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGgsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0ZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFydGljbGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhc2lkZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNhbnZhcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRldGFpbHMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmaWdjYXB0aW9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZmlndXJlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZm9vdGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaGVhZGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaGdyb3VwLFxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG1lbnUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBuYXYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzZWN0aW9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3VtbWFyeSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRpbWUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBtYXJrLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXVkaW8sIC5TbWlseUNhbGVuZGFyX19yZXNldCB2aWRlbywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGJ1dHRvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRleHRhcmVhLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaW5wdXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCAuU21pbHlDYWxlbmRhcl9fYnV0dG9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgLlNtaWx5Q2FsZW5kYXJfX2xlZ2VuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgMTAwJSBcIk9wZW4gc2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC1tb3otdGV4dC1hbGlnbi1sYXN0OiBpbml0aWFsO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10ZXh0LWVtcGhhc2lzOiBub25lO1xuICB0ZXh0LWVtcGhhc2lzOiBub25lO1xuICB0ZXh0LWhlaWdodDogYXV0bztcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbiAgdGV4dC1vdXRsaW5lOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtd3JhcDogbm9ybWFsO1xuICBhbGlnbm1lbnQtYWRqdXN0OiBhdXRvO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IGJhc2VsaW5lO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcbiAgYW5pbWF0aW9uOiBub25lIDAgZWFzZSAwIDEgbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgYXBwZWFyYW5jZTogbm9ybWFsO1xuICBhemltdXRoOiBjZW50ZXI7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogbm9uZSAwIDAgYXV0byByZXBlYXQgc2Nyb2xsIHBhZGRpbmctYm94IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFzZWxpbmUtc2hpZnQ6IGJhc2VsaW5lO1xuICBiaW5kaW5nOiBub25lO1xuICBibGVlZDogNnB0O1xuICBib29rbWFyay1sYWJlbDogY29udGVudCgpO1xuICBib29rbWFyay1sZXZlbDogbm9uZTtcbiAgYm9va21hcmstc3RhdGU6IG9wZW47XG4gIGJvb2ttYXJrLXRhcmdldDogbm9uZTtcbiAgYm9yZGVyOiAwIG5vbmUgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgYm94LWFsaWduOiBzdHJldGNoO1xuICAtd2Via2l0LWJveC1kZWNvcmF0aW9uLWJyZWFrOiBzbGljZTtcbiAgYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xuICBib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXg6IDA7XG4gIGZsZXgtZ3JvdXA6IDE7XG4gIGJveC1saW5lczogc2luZ2xlO1xuICBib3gtb3JkaW5hbC1ncm91cDogMTtcbiAgYm94LW9yaWVudDogaW5saW5lLWF4aXM7XG4gIGJveC1wYWNrOiBzdGFydDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYnJlYWstYWZ0ZXI6IGF1dG87XG4gIC1tb3otYnJlYWstYWZ0ZXI6IGF1dG87XG4gIGJyZWFrLWFmdGVyOiBhdXRvO1xuICAtd2Via2l0LWJyZWFrLWJlZm9yZTogYXV0bztcbiAgLW1vei1icmVhay1iZWZvcmU6IGF1dG87XG4gIGJyZWFrLWJlZm9yZTogYXV0bztcbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdXRvO1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcbiAgYnJlYWstaW5zaWRlOiBhdXRvO1xuICBjYXB0aW9uLXNpZGU6IHRvcDtcbiAgY2xlYXI6IG5vbmU7XG4gIGNsaXA6IGF1dG87XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjb2xvci1wcm9maWxlOiBhdXRvO1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogYXV0bztcbiAgLW1vei1jb2x1bW4tY291bnQ6IGF1dG87XG4gIGNvbHVtbi1jb3VudDogYXV0bztcbiAgLXdlYmtpdC1jb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgLW1vei1jb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XG4gIC13ZWJraXQtY29sdW1uLWdhcDogbm9ybWFsO1xuICAtbW96LWNvbHVtbi1nYXA6IG5vcm1hbDtcbiAgY29sdW1uLWdhcDogbm9ybWFsO1xuICAtd2Via2l0LWNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XG4gIC1tb3otY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcbiAgY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcbiAgLXdlYmtpdC1jb2x1bW4tc3BhbjogMTtcbiAgLW1vei1jb2x1bW4tc3BhbjogMTtcbiAgY29sdW1uLXNwYW46IDE7XG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiBhdXRvO1xuICAtbW96LWNvbHVtbi13aWR0aDogYXV0bztcbiAgY29sdW1uLXdpZHRoOiBhdXRvO1xuICAtd2Via2l0LWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgLW1vei1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGNvbHVtbnM6IGF1dG8gYXV0bztcbiAgY29udGVudDogbm9ybWFsO1xuICBjb3VudGVyLWluY3JlbWVudDogbm9uZTtcbiAgY291bnRlci1yZXNldDogbm9uZTtcbiAgY3JvcDogYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkb21pbmFudC1iYXNlbGluZTogYXV0bztcbiAgZHJvcC1pbml0aWFsLWFmdGVyLWFkanVzdDogdGV4dC1hZnRlci1lZGdlO1xuICBkcm9wLWluaXRpYWwtYWZ0ZXItYWxpZ246IGJhc2VsaW5lO1xuICBkcm9wLWluaXRpYWwtYmVmb3JlLWFkanVzdDogdGV4dC1iZWZvcmUtZWRnZTtcbiAgZHJvcC1pbml0aWFsLWJlZm9yZS1hbGlnbjogY2Fwcy1oZWlnaHQ7XG4gIGRyb3AtaW5pdGlhbC1zaXplOiBhdXRvO1xuICBkcm9wLWluaXRpYWwtdmFsdWU6IGluaXRpYWw7XG4gIGVsZXZhdGlvbjogbGV2ZWw7XG4gIGVtcHR5LWNlbGxzOiBzaG93O1xuICBmaXQ6IGZpbGw7XG4gIGZpdC1wb3NpdGlvbjogMCUgMCU7XG4gIGZsb2F0OiBub25lO1xuICBmbG9hdC1vZmZzZXQ6IDAgMDtcbiAgZ3JpZC1jb2x1bW5zOiBub25lO1xuICBncmlkLXJvd3M6IG5vbmU7XG4gIGhhbmdpbmctcHVuY3R1YXRpb246IG5vbmU7XG4gIGhlaWdodDogYXV0bztcbiAgaHlwaGVuYXRlLWFmdGVyOiBhdXRvO1xuICBoeXBoZW5hdGUtYmVmb3JlOiBhdXRvO1xuICBoeXBoZW5hdGUtY2hhcmFjdGVyOiBhdXRvO1xuICBoeXBoZW5hdGUtbGluZXM6IG5vLWxpbWl0O1xuICBoeXBoZW5hdGUtcmVzb3VyY2U6IG5vbmU7XG4gIC13ZWJraXQtaHlwaGVuczogbWFudWFsO1xuICAtbW96LWh5cGhlbnM6IG1hbnVhbDtcbiAgLW1zLWh5cGhlbnM6IG1hbnVhbDtcbiAgaHlwaGVuczogbWFudWFsO1xuICBpY29uOiBhdXRvO1xuICBpbWFnZS1vcmllbnRhdGlvbjogYXV0bztcbiAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICBpbWFnZS1yZXNvbHV0aW9uOiBub3JtYWw7XG4gIGlubGluZS1ib3gtYWxpZ246IGxhc3Q7XG4gIGxlZnQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBsaW5lLXN0YWNraW5nOiBpbmxpbmUtbGluZS1oZWlnaHQgZXhjbHVkZS1ydWJ5IGNvbnNpZGVyLXNoaWZ0cztcbiAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlIG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgbWFya3M6IG5vbmU7XG4gIG1hcnF1ZWUtZGlyZWN0aW9uOiBmb3J3YXJkO1xuICBtYXJxdWVlLWxvb3A6IDE7XG4gIG1hcnF1ZWUtcGxheS1jb3VudDogMTtcbiAgbWFycXVlZS1zcGVlZDogbm9ybWFsO1xuICBtYXJxdWVlLXN0eWxlOiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgbWluLWhlaWdodDogMDtcbiAgbWluLXdpZHRoOiAwO1xuICBtb3ZlLXRvOiBub3JtYWw7XG4gIG5hdi1kb3duOiBhdXRvO1xuICBuYXYtaW5kZXg6IGF1dG87XG4gIG5hdi1sZWZ0OiBhdXRvO1xuICBuYXYtcmlnaHQ6IGF1dG87XG4gIG5hdi11cDogYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgb3JwaGFuczogMjtcbiAgb3V0bGluZTogaW52ZXJ0IG5vbmUgbWVkaXVtO1xuICBvdXRsaW5lLW9mZnNldDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93LXN0eWxlOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBwYWdlOiBhdXRvO1xuICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xuICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XG4gIHBhZ2UtcG9saWN5OiBzdGFydDtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogbm9uZTtcbiAgcGVyc3BlY3RpdmU6IG5vbmU7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHByZXNlbnRhdGlvbi1sZXZlbDogMDtcbiAgcHVuY3R1YXRpb24tdHJpbTogbm9uZTtcbiAgcXVvdGVzOiBub25lO1xuICByZW5kZXJpbmctaW50ZW50OiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIHJpZ2h0OiBhdXRvO1xuICByb3RhdGlvbjogMDtcbiAgcm90YXRpb24tcG9pbnQ6IDUwJSA1MCU7XG4gIHJ1YnktYWxpZ246IGF1dG87XG4gIHJ1Ynktb3Zlcmhhbmc6IG5vbmU7XG4gIHJ1YnktcG9zaXRpb246IGJlZm9yZTtcbiAgcnVieS1zcGFuOiBub25lO1xuICBzaXplOiBhdXRvO1xuICBzdHJpbmctc2V0OiBub25lO1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIC1tcy10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAgZWFzZSAwO1xuICB1bmljb2RlLWJpZGk6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZS1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZG93czogMjtcbiAgd2lkdGg6IGF1dG87XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB6LWluZGV4OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgLyogQW5kIGRpc2FibGUgTVMgZ3JhZGllbnRzICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBhZGRyZXNzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYmxvY2txdW90ZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGl2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkdCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZWxkc2V0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZm9ybSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRpdi5TbWlseUNhbGVuZGFyX19mb3JtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZnJhbWUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmcmFtZXNldCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgxLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG5vZnJhbWVzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgb2wsIC5TbWlseUNhbGVuZGFyX19yZXNldCBwLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdWwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjZW50ZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkaXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBociwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG1lbnUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBwcmUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhcnRpY2xlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXNpZGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjYW52YXMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZXRhaWxzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZmlnY2FwdGlvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZ3VyZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZvb3RlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGhlYWRlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGhncm91cCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG1lbnUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBuYXYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzZWN0aW9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGxpIHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdHIge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGhlYWQge1xuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGJvZHkge1xuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGZvb3Qge1xuICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgY29sIHtcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNvbGdyb3VwIHtcbiAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGgge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNhcHRpb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGlucHV0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBiID4gaSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN0cm9uZyA+IGksIC5TbWlseUNhbGVuZGFyX19yZXNldCBiID4gZW0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdHJvbmcgPiBlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgaSA+IGIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpID4gc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBlbSA+IGIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBlbSA+IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGV4dGFyZWEsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpbnB1dCB7XG4gIGN1cnNvcjogdGV4dDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0M7Ozs7OztFQU1HLHdFQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9GQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwrREFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FB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QUo7QUFFRTtFQUNFLHdCQUFBO0FBQUo7QUFFRTtFQUNFLDJCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLDJCQUFBO0FBQUo7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFFRTtFQUNFLHNCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBS0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFNRTtFQUNFLFlBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVzZXQge1xcblxcdGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLFxcblxcdGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcblxcdHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5cXHRmaWVsZHNldCwgZm9ybSwgZGl2LmZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0cixcXG5cXHR0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5cXHRtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIC5idXR0b24sIC5sZWdlbmQge1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gc2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgMTAwJSBcXFwiT3BlbiBzYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgLW1vei10ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XFxuICAgIHRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAtd2Via2l0LXRleHQtZW1waGFzaXM6IG5vbmU7XFxuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XFxuICAgIHRleHQtaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LWluZGVudDogMDtcXG4gICAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xcbiAgICB0ZXh0LW91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdGV4dC13cmFwOiBub3JtYWw7XFxuICAgIGFsaWdubWVudC1hZGp1c3Q6IGF1dG87XFxuICAgIGFsaWdubWVudC1iYXNlbGluZTogYmFzZWxpbmU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lIDAgZWFzZSAwIDEgbm9ybWFsO1xcbiAgICBhbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbiAgICBhcHBlYXJhbmNlOiBub3JtYWw7XFxuICAgIGF6aW11dGg6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lIDAgMCBhdXRvIHJlcGVhdCBzY3JvbGwgcGFkZGluZy1ib3ggdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBiYXNlbGluZS1zaGlmdDogYmFzZWxpbmU7XFxuICAgIGJpbmRpbmc6IG5vbmU7XFxuICAgIGJsZWVkOiA2cHQ7XFxuICAgIGJvb2ttYXJrLWxhYmVsOiBjb250ZW50KCk7XFxuICAgIGJvb2ttYXJrLWxldmVsOiBub25lO1xcbiAgICBib29rbWFyay1zdGF0ZTogb3BlbjtcXG4gICAgYm9va21hcmstdGFyZ2V0OiBub25lO1xcbiAgICBib3JkZXI6IDAgbm9uZSB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICBib3gtYWxpZ246IHN0cmV0Y2g7XFxuICAgIC13ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xcbiAgICBib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XFxuICAgIGJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgZmxleDogMC4wO1xcbiAgICBmbGV4LWdyb3VwOiAxO1xcbiAgICBib3gtbGluZXM6IHNpbmdsZTtcXG4gICAgYm94LW9yZGluYWwtZ3JvdXA6IDE7XFxuICAgIGJveC1vcmllbnQ6IGlubGluZS1heGlzO1xcbiAgICBib3gtcGFjazogc3RhcnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAtd2Via2l0LWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgICAtbW96LWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgICBicmVhay1hZnRlcjogYXV0bztcXG4gICAgLXdlYmtpdC1icmVhay1iZWZvcmU6IGF1dG87XFxuICAgIC1tb3otYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgICBicmVhay1iZWZvcmU6IGF1dG87XFxuICAgIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXV0bztcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XFxuICAgIGJyZWFrLWluc2lkZTogYXV0bztcXG4gICAgY2FwdGlvbi1zaWRlOiB0b3A7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBjbGlwOiBhdXRvO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3ItcHJvZmlsZTogYXV0bztcXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IGF1dG87XFxuICAgIC1tb3otY29sdW1uLWNvdW50OiBhdXRvO1xcbiAgICBjb2x1bW4tY291bnQ6IGF1dG87XFxuICAgIC13ZWJraXQtY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxuICAgIC1tb3otY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxuICAgIGNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgICAtd2Via2l0LWNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gICAgLW1vei1jb2x1bW4tZ2FwOiBub3JtYWw7XFxuICAgIGNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcbiAgICAtbW96LWNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxuICAgIGNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxuICAgIC13ZWJraXQtY29sdW1uLXNwYW46IDE7XFxuICAgIC1tb3otY29sdW1uLXNwYW46IDE7XFxuICAgIGNvbHVtbi1zcGFuOiAxO1xcbiAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogYXV0bztcXG4gICAgLW1vei1jb2x1bW4td2lkdGg6IGF1dG87XFxuICAgIGNvbHVtbi13aWR0aDogYXV0bztcXG4gICAgLXdlYmtpdC1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIC1tb3otY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBjb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGNvbnRlbnQ6IG5vcm1hbDtcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IG5vbmU7XFxuICAgIGNvdW50ZXItcmVzZXQ6IG5vbmU7XFxuICAgIGNyb3A6IGF1dG87XFxuICAgIGN1cnNvcjogYXV0bztcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgZG9taW5hbnQtYmFzZWxpbmU6IGF1dG87XFxuICAgIGRyb3AtaW5pdGlhbC1hZnRlci1hZGp1c3Q6IHRleHQtYWZ0ZXItZWRnZTtcXG4gICAgZHJvcC1pbml0aWFsLWFmdGVyLWFsaWduOiBiYXNlbGluZTtcXG4gICAgZHJvcC1pbml0aWFsLWJlZm9yZS1hZGp1c3Q6IHRleHQtYmVmb3JlLWVkZ2U7XFxuICAgIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWxpZ246IGNhcHMtaGVpZ2h0O1xcbiAgICBkcm9wLWluaXRpYWwtc2l6ZTogYXV0bztcXG4gICAgZHJvcC1pbml0aWFsLXZhbHVlOiBpbml0aWFsO1xcbiAgICBlbGV2YXRpb246IGxldmVsO1xcbiAgICBlbXB0eS1jZWxsczogc2hvdztcXG4gICAgZml0OiBmaWxsO1xcbiAgICBmaXQtcG9zaXRpb246IDAlIDAlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgZmxvYXQtb2Zmc2V0OiAwIDA7XFxuICAgIGdyaWQtY29sdW1uczogbm9uZTtcXG4gICAgZ3JpZC1yb3dzOiBub25lO1xcbiAgICBoYW5naW5nLXB1bmN0dWF0aW9uOiBub25lO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGh5cGhlbmF0ZS1hZnRlcjogYXV0bztcXG4gICAgaHlwaGVuYXRlLWJlZm9yZTogYXV0bztcXG4gICAgaHlwaGVuYXRlLWNoYXJhY3RlcjogYXV0bztcXG4gICAgaHlwaGVuYXRlLWxpbmVzOiBuby1saW1pdDtcXG4gICAgaHlwaGVuYXRlLXJlc291cmNlOiBub25lO1xcbiAgICAtd2Via2l0LWh5cGhlbnM6IG1hbnVhbDtcXG4gICAgLW1vei1oeXBoZW5zOiBtYW51YWw7XFxuICAgIC1tcy1oeXBoZW5zOiBtYW51YWw7XFxuICAgIGh5cGhlbnM6IG1hbnVhbDtcXG4gICAgaWNvbjogYXV0bztcXG4gICAgaW1hZ2Utb3JpZW50YXRpb246IGF1dG87XFxuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcXG4gICAgaW1hZ2UtcmVzb2x1dGlvbjogbm9ybWFsO1xcbiAgICBpbmxpbmUtYm94LWFsaWduOiBsYXN0O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgbGluZS1zdGFja2luZzogaW5saW5lLWxpbmUtaGVpZ2h0IGV4Y2x1ZGUtcnVieSBjb25zaWRlci1zaGlmdHM7XFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmtzOiBub25lO1xcbiAgICBtYXJxdWVlLWRpcmVjdGlvbjogZm9yd2FyZDtcXG4gICAgbWFycXVlZS1sb29wOiAxO1xcbiAgICBtYXJxdWVlLXBsYXktY291bnQ6IDE7XFxuICAgIG1hcnF1ZWUtc3BlZWQ6IG5vcm1hbDtcXG4gICAgbWFycXVlZS1zdHlsZTogc2Nyb2xsO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgbW92ZS10bzogbm9ybWFsO1xcbiAgICBuYXYtZG93bjogYXV0bztcXG4gICAgbmF2LWluZGV4OiBhdXRvO1xcbiAgICBuYXYtbGVmdDogYXV0bztcXG4gICAgbmF2LXJpZ2h0OiBhdXRvO1xcbiAgICBuYXYtdXA6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG9ycGhhbnM6IDI7XFxuICAgIG91dGxpbmU6IGludmVydCBub25lIG1lZGl1bTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDA7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBvdmVyZmxvdy1zdHlsZTogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFnZTogYXV0bztcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgICBwYWdlLXBvbGljeTogc3RhcnQ7XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IG5vbmU7XFxuICAgIHBlcnNwZWN0aXZlOiBub25lO1xcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBwcmVzZW50YXRpb24tbGV2ZWw6IDA7XFxuICAgIHB1bmN0dWF0aW9uLXRyaW06IG5vbmU7XFxuICAgIHF1b3Rlczogbm9uZTtcXG4gICAgcmVuZGVyaW5nLWludGVudDogYXV0bztcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgcm90YXRpb246IDA7XFxuICAgIHJvdGF0aW9uLXBvaW50OiA1MCUgNTAlO1xcbiAgICBydWJ5LWFsaWduOiBhdXRvO1xcbiAgICBydWJ5LW92ZXJoYW5nOiBub25lO1xcbiAgICBydWJ5LXBvc2l0aW9uOiBiZWZvcmU7XFxuICAgIHJ1Ynktc3Bhbjogbm9uZTtcXG4gICAgc2l6ZTogYXV0bztcXG4gICAgc3RyaW5nLXNldDogbm9uZTtcXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwIGVhc2UgMDtcXG4gICAgdW5pY29kZS1iaWRpOiBub3JtYWw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgd2hpdGUtc3BhY2UtY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICB3aWRvd3M6IDI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgei1pbmRleDogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIC8qIEFuZCBkaXNhYmxlIE1TIGdyYWRpZW50cyAqL1xcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICB9XFxuICBhZGRyZXNzLCBibG9ja3F1b3RlLCBkZCwgZGl2LCBkbCwgZHQsIGZpZWxkc2V0LCBmb3JtLCBkaXYuZm9ybSwgZnJhbWUsIGZyYW1lc2V0LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBub2ZyYW1lcywgb2wsIHAsIHVsLCBjZW50ZXIsIGRpciwgaHIsIG1lbnUsIHByZSwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIGxpIHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgdGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gIH1cXG4gIHRyIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgfVxcbiAgdGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICB9XFxuICB0Ym9keSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcXG4gIH1cXG4gIHRmb290IHtcXG4gICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xcbiAgfVxcbiAgY29sIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbiAgfVxcbiAgY29sZ3JvdXAge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7XFxuICB9XFxuICB0ZCwgdGgge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgfVxcbiAgY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxuICB9XFxuICBpbnB1dCwgc2VsZWN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgYiwgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBiID4gaSwgc3Ryb25nID4gaSwgYiA+IGVtLCBzdHJvbmcgPiBlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB9XFxuICBpID4ge1xcbiAgICBiLCBzdHJvbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgfVxcbiAgZW0gPiB7XFxuICAgIGIsIHN0cm9uZyB7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICB9XFxuICB0ZXh0YXJlYSwgaW5wdXQge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJlc2V0XCI6IGBTbWlseUNhbGVuZGFyX19yZXNldGAsXG5cdFwiZm9ybVwiOiBgU21pbHlDYWxlbmRhcl9fZm9ybWAsXG5cdFwiYnV0dG9uXCI6IGBTbWlseUNhbGVuZGFyX19idXR0b25gLFxuXHRcImxlZ2VuZFwiOiBgU21pbHlDYWxlbmRhcl9fbGVnZW5kYFxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGxvYWRlclxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkAtd2Via2l0LWtleWZyYW1lcyBTbWlseUNhbGVuZGFyX19zbWlseS1zcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21pbHlDYWxlbmRhcl9fc21pbHktc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXI6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXI6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIgMzAuOTcnJTNFJTNDcGF0aCBkPSdNMzIsMTUuNDhhMTYuNTIsMTYuNTIsMCwwLDEtMS4zNyw2LjI4LDE2LjM1LDE2LjM1LDAsMCwxLTksOC42MywxNS44NywxNS44NywwLDAsMS0xNy4zLTMuNzhBMTUuNDMsMTUuNDMsMCwwLDEsNC43Miw0LjcyLDE1LDE1LDAsMCwxLDE1LjQ5LjUyYTE0Ljc2LDE0Ljc2LDAsMCwxLDEwLjQsNC41NkExNC43NywxNC43NywwLDAsMSwyOSw5LjlhMTQuNDUsMTQuNDUsMCwwLDEsLjg1LDMuMzVoLjEzQTIuMDYsMi4wNiwwLDAsMSwzMiwxNS4zMWEuOTEuOTEsMCwwLDEsMCwuMTdaTTI4LjcyLDEwYTE0LjI3LDE0LjI3LDAsMCwwLTMuMi00LjU1LDE0LDE0LDAsMCwwLTEwLTMuOUExMy43MiwxMy43MiwwLDAsMCwzLDEwLjNhMTMuNDMsMTMuNDMsMCwwLDAsLjI0LDEwLjI3LDEzLjA1LDEzLjA1LDAsMCwwLDEyLjI4LDcuODIsMTIuOTIsMTIuOTIsMCwwLDAsNC44OC0xLjEsMTIuNjUsMTIuNjUsMCwwLDAsNC4wNi0yLjg3LDEyLjQ4LDEyLjQ4LDAsMCwwLDIuNjItNC4xNSwxMi4yNCwxMi4yNCwwLDAsMCwuODItNC43OWgwYS45MS45MSwwLDAsMSwwLS4xNywyLjA3LDIuMDcsMCwwLDEsMS44NC0yLjA1LDE0LjI3LDE0LjI3LDAsMCwwLTEtMy4yNlonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAgLTAuNTEpJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC1hbmltYXRpb246IFNtaWx5Q2FsZW5kYXJfX3NtaWx5LXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IFNtaWx5Q2FsZW5kYXJfX3NtaWx5LXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyOjpiZWZvcmUsIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhcjo6YWZ0ZXIge1xuICB6LWluZGV4OiAxMDAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19sb2FkaW5nOjpiZWZvcmUsIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19sb2FkaW5nOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGRyb3Bkb3duXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAxcHggNXB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgei1pbmRleDogMTA7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljIC5TbWlseUNhbGVuZGFyX19iYWNrIHtcbiAgdG9wOiAxZW07XG4gIGxlZnQ6IDFlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMWVtO1xufVxuXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gLlNtaWx5Q2FsZW5kYXJfX2NlbGw6OmJlZm9yZSwgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIC5TbWlseUNhbGVuZGFyX19jZWxsOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAwO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIHNlbGVjdGlvbnMsIGxlZnQgLSBjZW50ZXIgLSByaWdodFxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBjZWxscyBkaXNhYmxlZFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtZGlzYWJsZWQ9Y2VudGVyXSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItZGlzYWJsZWQtY29sb3IsICNiZmJmYmYpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY2VsbHMgaGlnaGxpZ2h0ZWRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPWxlZnRdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCByZ2IoNTUuMjUsIDU1LjI1LCA1NS4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPWxlZnRdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9bGVmdF06OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1jZW50ZXJdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCByZ2IoNTUuMjUsIDU1LjI1LCA1NS4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPWNlbnRlcl06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9cmlnaHRdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCByZ2IoNTUuMjUsIDU1LjI1LCA1NS4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPXJpZ2h0XTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbiAgd2lkdGg6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1yaWdodF06OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIGNlbGxzIGludmFsaWRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9bGVmdF0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1jb2xvciwgcmdiKDE3OC4yNSwgMTc4LjI1LCAxNzguMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPWxlZnRdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCByZ2IoMjI3LjI1LCAyMjcuMjUsIDIyNy4yNSkpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPWxlZnRdOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIHJnYigyMjcuMjUsIDIyNy4yNSwgMjI3LjI1KSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPWNlbnRlcl0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1jb2xvciwgcmdiKDE3OC4yNSwgMTc4LjI1LCAxNzguMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPWNlbnRlcl06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIHJnYigyMjcuMjUsIDIyNy4yNSwgMjI3LjI1KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPXJpZ2h0XSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWNvbG9yLCByZ2IoMTc4LjI1LCAxNzguMjUsIDE3OC4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9cmlnaHRdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCByZ2IoMjI3LjI1LCAyMjcuMjUsIDIyNy4yNSkpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG4gIHdpZHRoOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1yaWdodF06OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgcmdiKDIyNy4yNSwgMjI3LjI1LCAyMjcuMjUpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY2VsbCBob3ZlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaG92ZXJlZF06bm90KFtkYXRhLWRpc2FibGVkPWNlbnRlcl0pIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCByZ2IoNTUuMjUsIDU1LjI1LCA1NS4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhvdmVyZWRdOm5vdChbZGF0YS1kaXNhYmxlZD1jZW50ZXJdKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGNvbG9yc1xuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciB7XG4gIGZvbnQ6IDFyZW0vMS40IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQ6IDI1cHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIHBhZGRpbmctdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25QaWNrZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Nwcml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25UcmlnZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC41NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMjBtcyBlYXNlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uTGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uQ2hldnJvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDAuOTVyZW07XG4gIGhlaWdodDogMC45NXJlbTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvblRyaWdnZXI6aG92ZXIsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25UcmlnZ2VyW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uVHJpZ2dlcjpmb2N1cy12aXNpYmxlLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGFnZXI6Zm9jdXMtdmlzaWJsZSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhck9wdGlvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM0NDQ0NDQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAxcHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJQYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWlubWF4KDAsIDFmcikgYXV0bztcbiAgZ2FwOiAwLjZyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGlja2VyQ2xvc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBtaW4taGVpZ2h0OiAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGlja2VySGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGFnZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMi43cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC42cmVtIDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBhZ2VyW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNDU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhckdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMy4wNXJlbSwgYXV0byk7XG4gIGdhcDogMC40cmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJDbG9zZTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM0NDQ0NDQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAxcHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJPcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIHBhZGRpbmc6IDAuNDVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyT3B0aW9uW2RhdGEtc2VsZWN0ZWQteWVhcl0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItdG9vbHRpcC1iZy1jb2xvciwgIzMzMyk7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci10b29sdGlwLWNvbG9yLCAjZmZmKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA1MDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwIC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3cge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXAgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdywgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwIC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3c6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXAgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdzo6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49dG9wXSA+IC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3cge1xuICBib3R0b206IC00cHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1ib3R0b21dID4gLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdyB7XG4gIHRvcDogLTRweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWxlZnRdID4gLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdyB7XG4gIHJpZ2h0OiAtNHB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49cmlnaHRdID4gLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdyB7XG4gIGxlZnQ6IC00cHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX21vbnRoc1dyYXBwZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3BhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIHotaW5kZXg6IDI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVdlZWtkYXlzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fbUNlbGwge1xuICBmb250LXNpemU6IDAuODc1ZW07XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgMjUlO1xuICBmbGV4OiAxIDEgMjUlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX21DZWxsIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4OiAxIDEgMTAwJTtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgfVxufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19tb250aCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190YWJsZUhlYWRlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiAwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZ2FwOiAwLjJlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fd2Vla1JvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdGgsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NlbGwsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3BsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSAzMHB4O1xuICBmbGV4OiAxIDEgMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdGgge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jZWxsOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2VsbDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM0NDQ0NDQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB6LWluZGV4OiAyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jZWxsLlNtaWx5Q2FsZW5kYXJfX3RvZGF5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3BsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICBjb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAwLjUpO1xuICByaWdodDogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9feWVhclBpY2tlck9wZW4ge1xuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLlNtaWx5Q2FsZW5kYXJfX2ZvY3VzLFxuLlNtaWx5Q2FsZW5kYXJfX2Rpc2FibGVkLFxuLlNtaWx5Q2FsZW5kYXJfX3NlbGVjdGVkLFxuLlNtaWx5Q2FsZW5kYXJfX3JldmVyc2VkLFxuLlNtaWx5Q2FsZW5kYXJfX2RpcmVjdCxcbi5TbWlseUNhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCxcbi5TbWlseUNhbGVuZGFyX19zZWxlY3RpbmdEaXJlY3QsXG4uU21pbHlDYWxlbmRhcl9fYWN0aW9uc0VuYWJsZWQsXG4uU21pbHlDYWxlbmRhcl9faGlnaGxpZ2h0ZWQsXG4uU21pbHlDYWxlbmRhcl9faW52YWxpZCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY2VsbCBob3ZlciBjdXJzb3JzXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXNlbGVjdGFibGU9dHJ1ZV0gLlNtaWx5Q2FsZW5kYXJfX2NlbGwgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBidXR0b25zXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDIzcHg7XG4gIGZpbGw6ICM0NDQ0NDQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkIHN2Zyxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjayBzdmcge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQ6YWN0aXZlLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkOmZvY3VzLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrOmFjdGl2ZSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQ6Zm9jdXMtdmlzaWJsZSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjazpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM0NDQ0NDQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQ6aG92ZXIsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2s6aG92ZXIge1xuICBmaWxsOiAjMzg5NWQ5O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkW2Rpc2FibGVkXSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZFtkaXNhYmxlZF06aG92ZXIsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2tbZGlzYWJsZWRdLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrW2Rpc2FibGVkXTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmaWxsOiAjNDQ0NDQ0O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIG1vYmlsZSBtb2RlXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19wYWdpbmF0aW9uLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX3BhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX21vbnRoc1dyYXBwZXIsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fbW9udGhzV3JhcHBlciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVdlZWtkYXlzLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVdlZWtkYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX21DZWxsLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX21DZWxsIHtcbiAgZmxleDogMSAxIDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiB2YXIoLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQpO1xuICB6LWluZGV4OiA0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fbW9udGg6Zmlyc3QtY2hpbGQgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24sXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fbW9udGg6Zmlyc3QtY2hpbGQgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24ge1xuICBtYXJnaW4tdG9wOiAwLjM1ZW07XG4gIG1hcmdpbi1ib3R0b206IDIuMTVlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fdGFibGVIZWFkZXIsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fdGFibGVIZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpOm5vdCguU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpOm5vdCguU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpIC5TbWlseUNhbGVuZGFyX19iYWNrLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGU6bm90KC5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCkgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZTpub3QoLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkKSAuU21pbHlDYWxlbmRhcl9fYmFjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykuU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykuU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQgLlNtaWx5Q2FsZW5kYXJfX2JhY2ssXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZS5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkIC5TbWlseUNhbGVuZGFyX19iYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogdmFyKC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0KTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5TbWlseUNhbGVuZGFyX19zck9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyICoge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xvYWRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9kcm9wLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUtYmFzaWMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozt3REFBQTtBQU1BO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDQUY7RURHQTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNERjtBQUNGO0FESUE7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUNGRjtFRElBO0lBQ0UsaUNBQUE7SUFDQSx5QkFBQTtFQ0ZGO0FBQ0Y7QURNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaXdCRS9Db0I7RUZnRHBCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0RBQUE7RUFDQSx1REFBQTtFQUNBLDRCQUFBO0FDTEo7QURRRTtFQUVFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0UxRG9CO0VGMkRwQix3Q0UzRG9CO0VGNERwQixxQ0U1RG9CO0FEcUR4QjtBRFdJO0VBRUUsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNWTjs7QUU5REE7Ozs7d0RBQUE7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FGZ0VGO0FFOURFO0VBQ0UsY0FBQTtBRmdFSjtBRTdERTtFQUNFLG9CQUFBO0FGK0RKO0FFNURFOztFQUVFLFFBQUE7RUFDQSxTQUFBO0FGOERKO0FFM0RFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUY2REo7O0FHM0ZJO0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FINkZOOztBR3hGQTs7Ozt3REFBQTtBQU1BOzt3REFBQTtBQVNFO0VBQ0UsNkJBQUE7RUFDQSxvREZkb0I7QURrR3hCOztBR2hGQTs7d0RBQUE7QUFLRTtFQUNFLHdFRnJCb0I7QURzR3hCO0FHL0VJO0VBQ0UsMkdGekJrQjtFRTBCbEIsbURBakRZO0VBa0RaLFVBQUE7RUFDQSxTQUFBO0FIaUZOO0FHOUVJO0VBQ0UsMkdGaENrQjtFRWlDbEIsNERBekRlO0FIeUlyQjtBRzVFRTtFQUNFLHdFRnJDb0I7QURtSHhCO0FHNUVJO0VBQ0UsMkdGekNrQjtFRTBDbEIsbURBakVZO0FIK0lsQjtBRzFFRTtFQUNFLHdFRjlDb0I7QUQwSHhCO0FHMUVJO0VBQ0UsMkdGbERrQjtFRW1EbEIsbURBMUVZO0VBMkVaLFVBQUE7RUFDQSxVQUFBO0FINEVOO0FHekVJO0VBQ0UsMkdGekRrQjtFRTBEbEIsNERBbEZlO0FINkpyQjs7QUd0RUE7O3dEQUFBO0FBS0U7RUFDRSx1RUZqRW9CO0FEd0l4QjtBR3JFSTtFQUNFLCtFRnJFa0I7RUVzRWxCLG1EQWhHWTtFQWlHWixVQUFBO0VBQ0EsU0FBQTtBSHVFTjtBR3BFSTtFQUNFLCtFRjVFa0I7RUU2RWxCLDREQXhHZTtBSDhLckI7QUdsRUU7RUFDRSx1RUZqRm9CO0FEcUp4QjtBR2xFSTtFQUNFLCtFRnJGa0I7RUVzRmxCLG1EQWhIWTtBSG9MbEI7QUdoRUU7RUFDRSx1RUYxRm9CO0FENEp4QjtBR2hFSTtFQUNFLCtFRjlGa0I7RUUrRmxCLG1EQXpIWTtFQTBIWixVQUFBO0VBQ0EsVUFBQTtBSGtFTjtBRy9ESTtFQUNFLCtFRnJHa0I7RUVzR2xCLDREQWpJZTtBSGtNckI7O0FHNURBOzt3REFBQTtBQUtFO0VBQ0Usd0VGbkhvQjtBRGdMeEI7QUczREk7RUFDRSwyR0Z2SGtCO0VFd0hsQiw0REFoSmU7QUg2TXJCOztBQXZNQTs7Ozt3REFBQTtBQU1BO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQ0ZzQjtF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O0FBb0pOOztBQS9JQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFrSkY7O0FBL0lBO0VBRUk7SUFDRSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esc0NBQUE7RUFpSko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgbG9hZGVyXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNtaWx5LXNwaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc21pbHktc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICY6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC43KTtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuXFxuICAmOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRpY29uLXNwaW5uZXItc3ZnO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbWlseS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBzbWlseS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSxcXG4gICY6OmFmdGVyIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICB9XFxuXFxuICAmLmxvYWRpbmcge1xcbiAgICAmOjpiZWZvcmUsXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdzdmctdXJpJztcXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xcbkBpbXBvcnQgJ2xvYWRpbmcnO1xcbkBpbXBvcnQgJ2Ryb3AnO1xcbkBpbXBvcnQgJ3RoZW1lLWJhc2ljJztcXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgY29sb3JzXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyIHtcXG4gIGZvbnQ6IDFyZW0vMS40IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAkY2FsZW5kYXItYmctY29sb3I7XFxuICAtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodDogMjVweDtcXG5cXG4gIC5jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC44ZW07XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2FwdGlvblBpY2tlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zcHJpdGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgLmNhcHRpb25UcmlnZ2VyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6ICRjZWxsLWNvbG9yO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNTVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDAuNDVyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uTGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcblxcbiAgLmNhcHRpb25DaGV2cm9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMC45NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjk1cmVtO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgfVxcblxcbiAgLmNhcHRpb25UcmlnZ2VyOmhvdmVyLFxcbiAgLmNhcHRpb25UcmlnZ2VyW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICB9XFxuXFxuICAuY2FwdGlvblRyaWdnZXI6Zm9jdXMtdmlzaWJsZSxcXG4gIC55ZWFyUGFnZXI6Zm9jdXMtdmlzaWJsZSxcXG4gIC55ZWFyT3B0aW9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgJGJ0bi1maWxsO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMXB4O1xcbiAgfVxcblxcbiAgLnllYXJQaWNrZXJQYW5lbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6ICRjYWxlbmRhci1iZy1jb2xvcjtcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICB9XFxuXFxuICAueWVhclBpY2tlckNsb3NlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgIGNvbG9yOiAkYnRuLWZpbGw7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgICBtaW4taGVpZ2h0OiAyLjdyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnllYXJQaWNrZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICAueWVhclBhZ2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgIGNvbG9yOiAkYnRuLWZpbGw7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWluLWhlaWdodDogMi43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIH1cXG5cXG4gIC55ZWFyUGFnZXJbZGlzYWJsZWRdIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgfVxcblxcbiAgLnllYXJHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDMuMDVyZW0sIGF1dG8pO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xcbiAgfVxcblxcbiAgLnllYXJQaWNrZXJDbG9zZTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICRidG4tZmlsbDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDFweDtcXG4gIH1cXG5cXG4gIC55ZWFyT3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAkY2VsbC1jb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgcGFkZGluZzogMC40NXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAueWVhck9wdGlvbltkYXRhLXNlbGVjdGVkLXllYXJdIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIC50b29sdGlwIHtcXG4gICAgYmFja2dyb3VuZDogJHRvb2x0aXAtYmctY29sb3I7XFxuICAgIGNvbG9yOiAkdG9vbHRpcC1jb2xvcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgICAudG9vbHRpcEFycm93IHtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgICAgJiwgJjo6YmVmb3JlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiA4cHg7XFxuICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgICAgfVxcblxcbiAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj0ndG9wJ10gPiAudG9vbHRpcEFycm93IHtcXG4gICAgICBib3R0b206IC00cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj0nYm90dG9tJ10gPiAudG9vbHRpcEFycm93IHtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj0nbGVmdCddID4gLnRvb2x0aXBBcnJvdyB7XFxuICAgICAgcmlnaHQ6IC00cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj0ncmlnaHQnXSA+IC50b29sdGlwQXJyb3cge1xcbiAgICAgIGxlZnQ6IC00cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb250aHNXcmFwcGVyIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMmVtO1xcbiAgfVxcblxcbiAgLnBhZ2luYXRpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuXFxuICAubW9iaWxlV2Vla2RheXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1DZWxsIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleDogMSAxIDI1JTtcXG4gICAgZmxleDogMSAxIDI1JTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDEgMSAxMDAlO1xcbiAgICAgIGZsZXg6IDEgMSAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9udGgge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50YWJsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleDogMSAxIGF1dG87XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBnYXA6IDAuMmVtO1xcbiAgfVxcblxcbiAgLndlZWtSb3cge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICB9XFxuXFxuICAudGgsXFxuICAuY2VsbCxcXG4gIC5wbGFjZWhvbGRlciB7XFxuICAgIHdpZHRoOiAkY2VsbC13aWR0aDtcXG4gICAgbWluLXdpZHRoOiAkY2VsbC13aWR0aDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXg6IDEgMSAkY2VsbC13aWR0aDtcXG4gICAgZmxleDogMSAxICRjZWxsLXdpZHRoO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgLnRoIHtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGNvbG9yOiAkdGgtY29sb3I7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jZWxsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6ICRjZWxsLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJjpmb2N1cy12aXNpYmxlIHtcXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJGJ0bi1maWxsO1xcbiAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgJi50b2RheSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wbGFjZWhvbGRlciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIH1cXG5cXG4gIC5jbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDAuNjVlbTtcXG4gICAgcGFkZGluZzogMXB4IDNweDtcXG4gICAgY29sb3I6ICRpbmZvLWNvbG9yO1xcbiAgICByaWdodDogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uY2FsZW5kYXIueWVhclBpY2tlck9wZW4ge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb2N1cyxcXG4uZGlzYWJsZWQsXFxuLnNlbGVjdGVkLFxcbi5yZXZlcnNlZCxcXG4uZGlyZWN0LFxcbi5zZWxlY3RpbmdSZXZlcnNlZCxcXG4uc2VsZWN0aW5nRGlyZWN0LFxcbi5hY3Rpb25zRW5hYmxlZCxcXG4uaGlnaGxpZ2h0ZWQsXFxuLmludmFsaWQge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAgY2VsbCBob3ZlciBjdXJzb3JzXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyIHtcXG4gIC8vIGN1cnNvciBwb2ludGVyIGlmIGNhbGVuZGFyIGlzIHNlbGVjdGFibGVcXG4gICZbZGF0YS1zZWxlY3RhYmxlPVxcXCJ0cnVlXFxcIl0gLmNlbGwgKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIGJ1dHRvbnNcXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2FsZW5kYXIge1xcblxcbiAgLmZvcndhcmQsXFxuICAuYmFjayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBmaWxsOiAkYnRuLWZpbGw7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBzdmcge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICB9XFxuICB9XFxuXFxuICAuZm9yd2FyZCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmZvcndhcmQ6YWN0aXZlLFxcbiAgLmZvcndhcmQ6Zm9jdXMsXFxuICAuYmFjazphY3RpdmUsXFxuICAuYmFjazpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuICAuZm9yd2FyZDpmb2N1cy12aXNpYmxlLFxcbiAgLmJhY2s6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkYnRuLWZpbGw7XFxuICB9XFxuXFxuICAuZm9yd2FyZDpob3ZlcixcXG4gIC5iYWNrOmhvdmVyIHtcXG4gICAgZmlsbDogJGJ0bi1maWxsLWhvdmVyO1xcbiAgfVxcblxcbiAgLmZvcndhcmRbZGlzYWJsZWRdLFxcbiAgLmZvcndhcmRbZGlzYWJsZWRdOmhvdmVyLFxcbiAgLmJhY2tbZGlzYWJsZWRdLFxcbiAgLmJhY2tbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGZpbGw6ICRidG4tZmlsbDtcXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIG1vYmlsZSBtb2RlXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNhbGVuZGFyLm1vYmlsZU1vZGU6bm90KC5kcm9wQmFzaWMpLFxcbi5jYWxlbmRhci5kcm9wQmFzaWMubW9iaWxlTW9kZS52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgLnBhZ2luYXRpb24ge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxuXFxuICAubW9udGhzV3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuICB9XFxuXFxuICAubW9iaWxlV2Vla2RheXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgYmFja2dyb3VuZDogJGNhbGVuZGFyLWJnLWNvbG9yO1xcbiAgfVxcblxcbiAgLm1DZWxsIHtcXG4gICAgZmxleDogMSAxIDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiB2YXIoLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQpO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICBiYWNrZ3JvdW5kOiAkY2FsZW5kYXItYmctY29sb3I7XFxuICAgIG1hcmdpbi1ib3R0b206IC44ZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gIH1cXG5cXG4gIC5tb250aDpmaXJzdC1jaGlsZCAuY2FwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IC4zNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjE1ZW07XFxuICB9XFxuXFxuICAudGFibGVIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgJjpub3QoLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkKSB7XFxuICAgIC5mb3J3YXJkLFxcbiAgICAuYmFjayB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi5tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCB7XFxuICAgIC5mb3J3YXJkLFxcbiAgICAuYmFjayB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgdG9wOiB2YXIoLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQpO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zck9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC5jYWxlbmRhciB7XFxuICAgICoge1xcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGljb24tc3Bpbm5lci1zdmc6ICAgICAgc3ZnLXVyaShcXFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMC45Nyc+PHBhdGggZD0nTTMyLDE1LjQ4YTE2LjUyLDE2LjUyLDAsMCwxLTEuMzcsNi4yOCwxNi4zNSwxNi4zNSwwLDAsMS05LDguNjMsMTUuODcsMTUuODcsMCwwLDEtMTcuMy0zLjc4QTE1LjQzLDE1LjQzLDAsMCwxLDQuNzIsNC43MiwxNSwxNSwwLDAsMSwxNS40OS41MmExNC43NiwxNC43NiwwLDAsMSwxMC40LDQuNTZBMTQuNzcsMTQuNzcsMCwwLDEsMjksOS45YTE0LjQ1LDE0LjQ1LDAsMCwxLC44NSwzLjM1aC4xM0EyLjA2LDIuMDYsMCwwLDEsMzIsMTUuMzFhLjkxLjkxLDAsMCwxLDAsLjE3Wk0yOC43MiwxMGExNC4yNywxNC4yNywwLDAsMC0zLjItNC41NSwxNCwxNCwwLDAsMC0xMC0zLjlBMTMuNzIsMTMuNzIsMCwwLDAsMywxMC4zYTEzLjQzLDEzLjQzLDAsMCwwLC4yNCwxMC4yNywxMy4wNSwxMy4wNSwwLDAsMCwxMi4yOCw3LjgyLDEyLjkyLDEyLjkyLDAsMCwwLDQuODgtMS4xLDEyLjY1LDEyLjY1LDAsMCwwLDQuMDYtMi44NywxMi40OCwxMi40OCwwLDAsMCwyLjYyLTQuMTUsMTIuMjQsMTIuMjQsMCwwLDAsLjgyLTQuNzloMGEuOTEuOTEsMCwwLDEsMC0uMTcsMi4wNywyLjA3LDAsMCwxLDEuODQtMi4wNSwxNC4yNywxNC4yNywwLDAsMC0xLTMuMjZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0wLjUxKScvPjwvc3ZnPlxcXCIpO1xcblxcbiRicmVha3BvaW50LXhzOiAgICAgICAgIDkwMHB4O1xcblxcbiR0cmFuc2l0aW9uOiAgICAgICAgICAgIG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy8gdG9vbHRpcFxcblxcbiR0b29sdGlwLWJnLWNvbG9yOiAgICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLXRvb2x0aXAtYmctY29sb3IsICMzMzMpO1xcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLXRvb2x0aXAtY29sb3IsICNmZmYpO1xcblxcbi8vIGNhbGVuZGFyXFxuXFxuJGNhbGVuZGFyLWJnLWNvbG9yOiAgICAgI2ZmZjtcXG5cXG4vLyBjYWxlbmRhciBjZWxsc1xcblxcbiRjZWxsLXdpZHRoOiAgICAgICAgICAgIDMwcHg7XFxuXFxuJGNlbGwtY29sb3I6ICAgICAgICAgICAgIzQ0NDQ0NDtcXG5cXG4kZGlzYWJsZWQtYmctY29sb3I6ICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci1kaXNhYmxlZC1iZy1jb2xvciwgI2YwZjBmMCk7XFxuJGRpc2FibGVkLWNvbG9yOiAgICAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItZGlzYWJsZWQtY29sb3IsICNiZmJmYmYpO1xcblxcbiRoaWdobGlnaHRlZC1iZy1jb2xvcjogIHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCBsaWdodGVuKCM1Nzg0RjUsIDIwJSkpO1xcbiRoaWdobGlnaHRlZC1jb2xvcjogICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWNvbG9yLCBkYXJrZW4oJGNlbGwtY29sb3IsIDUlKSk7XFxuXFxuJGludmFsaWQtYmctY29sb3I6ICAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgZGFya2VuKCNmMGYwZjAsICA1JSkpO1xcbiRpbnZhbGlkLWNvbG9yOiAgICAgICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtY29sb3IsIGRhcmtlbigjYmZiZmJmLCA1JSkpO1xcblxcbi8vIGNhbGVuZGFyIHRhYmxlXFxuXFxuJGluZm8tY29sb3I6ICAgICAgICAgICAgcmdiYSg2MCwgNjAsIDYwLCAwLjUpO1xcblxcbiR0aC1ib3JkZXItYm90dG9tOiAgICAgICNjYmNiY2I7XFxuJHRoLWNvbG9yOiAgICAgICAgICAgICAgI2FhYWFhYTtcXG5cXG4vLyBmb3JtXFxuXFxuJGJ0bi1maWxsOiAgICAgICAgICAgICAgJGNlbGwtY29sb3I7XFxuJGJ0bi1ib3JkZXI6ICAgICAgICAgICAgJHRoLWJvcmRlci1ib3R0b207XFxuJGJ0bi1maWxsLWhvdmVyOiAgICAgICAgIzM4OTVkOTtcXG5cIixcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBkcm9wZG93blxcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhci5kcm9wQmFzaWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgei1pbmRleDogMTA7XFxuXFxuICAmLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5jYXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjdlbTtcXG4gIH1cXG5cXG4gIC5mb3J3YXJkLFxcbiAgLmJhY2sge1xcbiAgICB0b3A6IDFlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgfVxcblxcbiAgLmZvcndhcmQge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMWVtO1xcbiAgfVxcbn1cXG5cIixcIiRjZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcXG4kY2VsbC1iZy1vcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIC41KTtcXG5cXG4uY2FsZW5kYXJbZGF0YS10aGVtZT1cXFwiYmFzaWNcXFwiXSB7XFxuICAuY2VsbCB7XFxuICAgICY6OmJlZm9yZSxcXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBzZWxlY3Rpb25zLCBsZWZ0IC0gY2VudGVyIC0gcmlnaHRcXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gIGNlbGxzIGRpc2FibGVkXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyW2RhdGEtdGhlbWU9XFxcImJhc2ljXFxcIl0ge1xcbiAgLy8gW2RhdGEtZGlzYWJsZWQ9XFxcImxlZnRcXFwiXSB7XFxuICAvLyAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XFxuICAvLyB9XFxuXFxuICBbZGF0YS1kaXNhYmxlZD1cXFwiY2VudGVyXFxcIl0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICBjZWxscyBoaWdobGlnaHRlZFxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhcltkYXRhLXRoZW1lPVxcXCJiYXNpY1xcXCJdIHtcXG4gIFtkYXRhLWhpZ2hsaWdodGVkPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBjb2xvcjogJGhpZ2hsaWdodGVkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGNlbGwtYm9yZGVyLXJhZGl1cztcXG4gICAgfVxcbiAgfVxcblxcbiAgW2RhdGEtaGlnaGxpZ2h0ZWQ9XFxcImNlbnRlclxcXCJdIHtcXG4gICAgY29sb3I6ICRoaWdobGlnaHRlZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgfVxcbiAgfVxcblxcbiAgW2RhdGEtaGlnaGxpZ2h0ZWQ9XFxcInJpZ2h0XFxcIl0ge1xcbiAgICBjb2xvcjogJGhpZ2hsaWdodGVkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcmlnaHQ6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjZWxsLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICBjZWxscyBpbnZhbGlkXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyW2RhdGEtdGhlbWU9XFxcImJhc2ljXFxcIl0ge1xcbiAgW2RhdGEtaW52YWxpZD1cXFwibGVmdFxcXCJdIHtcXG4gICAgY29sb3I6ICRpbnZhbGlkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRpbnZhbGlkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRpbnZhbGlkLWJnLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjZWxsLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFtkYXRhLWludmFsaWQ9XFxcImNlbnRlclxcXCJdIHtcXG4gICAgY29sb3I6ICRpbnZhbGlkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRpbnZhbGlkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFtkYXRhLWludmFsaWQ9XFxcInJpZ2h0XFxcIl0ge1xcbiAgICBjb2xvcjogJGludmFsaWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGludmFsaWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHJpZ2h0OiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRpbnZhbGlkLWJnLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjZWxsLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICBjZWxsIGhvdmVyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyW2RhdGEtdGhlbWU9XFxcImJhc2ljXFxcIl0ge1xcbiAgW2RhdGEtaG92ZXJlZF06bm90KFtkYXRhLWRpc2FibGVkPVxcXCJjZW50ZXJcXFwiXSkge1xcbiAgICBjb2xvcjogJGhpZ2hsaWdodGVkLWNvbG9yO1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjZWxsLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY2FsZW5kYXJcIjogYFNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyYCxcblx0XCJzbWlseVNwaW5cIjogYFNtaWx5Q2FsZW5kYXJfX3NtaWx5LXNwaW5gLFxuXHRcImxvYWRpbmdcIjogYFNtaWx5Q2FsZW5kYXJfX2xvYWRpbmdgLFxuXHRcImRyb3BCYXNpY1wiOiBgU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljYCxcblx0XCJ2aXNpYmxlXCI6IGBTbWlseUNhbGVuZGFyX192aXNpYmxlYCxcblx0XCJjYXB0aW9uXCI6IGBTbWlseUNhbGVuZGFyX19jYXB0aW9uYCxcblx0XCJmb3J3YXJkXCI6IGBTbWlseUNhbGVuZGFyX19mb3J3YXJkYCxcblx0XCJiYWNrXCI6IGBTbWlseUNhbGVuZGFyX19iYWNrYCxcblx0XCJjZWxsXCI6IGBTbWlseUNhbGVuZGFyX19jZWxsYCxcblx0XCJjYXB0aW9uUGlja2VyXCI6IGBTbWlseUNhbGVuZGFyX19jYXB0aW9uUGlja2VyYCxcblx0XCJzcHJpdGVcIjogYFNtaWx5Q2FsZW5kYXJfX3Nwcml0ZWAsXG5cdFwiY2FwdGlvblRyaWdnZXJcIjogYFNtaWx5Q2FsZW5kYXJfX2NhcHRpb25UcmlnZ2VyYCxcblx0XCJjYXB0aW9uTGFiZWxcIjogYFNtaWx5Q2FsZW5kYXJfX2NhcHRpb25MYWJlbGAsXG5cdFwiY2FwdGlvbkNoZXZyb25cIjogYFNtaWx5Q2FsZW5kYXJfX2NhcHRpb25DaGV2cm9uYCxcblx0XCJ5ZWFyUGFnZXJcIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJQYWdlcmAsXG5cdFwieWVhck9wdGlvblwiOiBgU21pbHlDYWxlbmRhcl9feWVhck9wdGlvbmAsXG5cdFwieWVhclBpY2tlclBhbmVsXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyUGlja2VyUGFuZWxgLFxuXHRcInllYXJQaWNrZXJDbG9zZVwiOiBgU21pbHlDYWxlbmRhcl9feWVhclBpY2tlckNsb3NlYCxcblx0XCJ5ZWFyUGlja2VySGVhZGVyXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyUGlja2VySGVhZGVyYCxcblx0XCJ5ZWFyR3JpZFwiOiBgU21pbHlDYWxlbmRhcl9feWVhckdyaWRgLFxuXHRcInRvb2x0aXBcIjogYFNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBgLFxuXHRcInRvb2x0aXBBcnJvd1wiOiBgU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93YCxcblx0XCJtb250aHNXcmFwcGVyXCI6IGBTbWlseUNhbGVuZGFyX19tb250aHNXcmFwcGVyYCxcblx0XCJwYWdpbmF0aW9uXCI6IGBTbWlseUNhbGVuZGFyX19wYWdpbmF0aW9uYCxcblx0XCJtb2JpbGVXZWVrZGF5c1wiOiBgU21pbHlDYWxlbmRhcl9fbW9iaWxlV2Vla2RheXNgLFxuXHRcIm1DZWxsXCI6IGBTbWlseUNhbGVuZGFyX19tQ2VsbGAsXG5cdFwibW9udGhcIjogYFNtaWx5Q2FsZW5kYXJfX21vbnRoYCxcblx0XCJ0YWJsZUhlYWRlclwiOiBgU21pbHlDYWxlbmRhcl9fdGFibGVIZWFkZXJgLFxuXHRcImJvZHlcIjogYFNtaWx5Q2FsZW5kYXJfX2JvZHlgLFxuXHRcIndlZWtSb3dcIjogYFNtaWx5Q2FsZW5kYXJfX3dlZWtSb3dgLFxuXHRcInRoXCI6IGBTbWlseUNhbGVuZGFyX190aGAsXG5cdFwicGxhY2Vob2xkZXJcIjogYFNtaWx5Q2FsZW5kYXJfX3BsYWNlaG9sZGVyYCxcblx0XCJ0b2RheVwiOiBgU21pbHlDYWxlbmRhcl9fdG9kYXlgLFxuXHRcImNudFwiOiBgU21pbHlDYWxlbmRhcl9fY250YCxcblx0XCJpbmZvXCI6IGBTbWlseUNhbGVuZGFyX19pbmZvYCxcblx0XCJ5ZWFyUGlja2VyT3BlblwiOiBgU21pbHlDYWxlbmRhcl9feWVhclBpY2tlck9wZW5gLFxuXHRcImZvY3VzXCI6IGBTbWlseUNhbGVuZGFyX19mb2N1c2AsXG5cdFwiZGlzYWJsZWRcIjogYFNtaWx5Q2FsZW5kYXJfX2Rpc2FibGVkYCxcblx0XCJzZWxlY3RlZFwiOiBgU21pbHlDYWxlbmRhcl9fc2VsZWN0ZWRgLFxuXHRcInJldmVyc2VkXCI6IGBTbWlseUNhbGVuZGFyX19yZXZlcnNlZGAsXG5cdFwiZGlyZWN0XCI6IGBTbWlseUNhbGVuZGFyX19kaXJlY3RgLFxuXHRcInNlbGVjdGluZ1JldmVyc2VkXCI6IGBTbWlseUNhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZGAsXG5cdFwic2VsZWN0aW5nRGlyZWN0XCI6IGBTbWlseUNhbGVuZGFyX19zZWxlY3RpbmdEaXJlY3RgLFxuXHRcImFjdGlvbnNFbmFibGVkXCI6IGBTbWlseUNhbGVuZGFyX19hY3Rpb25zRW5hYmxlZGAsXG5cdFwiaGlnaGxpZ2h0ZWRcIjogYFNtaWx5Q2FsZW5kYXJfX2hpZ2hsaWdodGVkYCxcblx0XCJpbnZhbGlkXCI6IGBTbWlseUNhbGVuZGFyX19pbnZhbGlkYCxcblx0XCJtb2JpbGVNb2RlXCI6IGBTbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlYCxcblx0XCJtb2JpbGVQYWdpbmF0aW9uRW5hYmxlZFwiOiBgU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWRgLFxuXHRcInNyT25seVwiOiBgU21pbHlDYWxlbmRhcl9fc3JPbmx5YFxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9zYXNzLWxvYWRlckAxNi4wLjdfc2Fzc0AxLjk5LjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9zYXNzLWxvYWRlckAxNi4wLjdfc2Fzc0AxLjk5LjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjdfc2Fzc0AxLjk5LjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9jYWxlbmRhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuN19zYXNzQDEuOTkuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2NhbGVuZGFyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZ2xvYmFsIGRvY3VtZW50LCByZXF1aXJlLCB3aW5kb3cgKi9cbmxldCBDYWxlbmRhciA9IHJlcXVpcmUoJy4vY2FsZW5kYXInKTtcblxuQ2FsZW5kYXIgPSBDYWxlbmRhci5kZWZhdWx0O1xuXG5jb25zdCB3aWRnZXRVdGlscyA9IHJlcXVpcmUoJ3dpZGdldC11dGlscycpO1xuY29uc3QgYXV0b0luaXRTZWxlY3RvciA9ICdbZGF0YS1zbWlseS1jYWxlbmRhci13aWRnZXRdJztcblxuLy8gRXhwb3J0IFdpZGdldFV0aWxzXG53aW5kb3cuU21pbHlXaWRnZXRVdGlscyA9IHdpZGdldFV0aWxzO1xuXG5DYWxlbmRhci5pbml0ID0gKG9wdHMpID0+IHtcbiAgY29uc3QgaW5pdGlhbGl6ZWQgPSBbXTtcbiAgY29uc3Qgb3B0aW9ucyAgICAgPSBvcHRzIHx8IHt9O1xuICBjb25zdCBlbGVtZW50cyAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYXV0b0luaXRTZWxlY3Rvcik7XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgIGNvbnN0IGNhbCAgPSBuZXcgQ2FsZW5kYXIob3B0aW9ucyk7XG5cbiAgICBpbml0aWFsaXplZC5wdXNoKGNhbCk7XG4gIH0pO1xuXG4gIENhbGVuZGFyLmluc3RhbmNlcyA9IGluaXRpYWxpemVkO1xuICByZXR1cm4gaW5pdGlhbGl6ZWQ7XG59O1xuXG5DYWxlbmRhci5WRVJTSU9OID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICBDYWxlbmRhci5pbml0KCk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIENhbGVuZGFyLmluaXQoKTtcbiAgfSk7XG59XG5cbndpbmRvdy5TbWlseUNhbGVuZGFyV2lkZ2V0ID0gQ2FsZW5kYXI7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImN1cnJlbmN5U3ltYm9sTWFwIiwicmVxdWlyZSIsImdldFN5bWJvbEZyb21DdXJyZW5jeSIsImN1cnJlbmN5Q29kZSIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkFFRCIsIkFGTiIsIkFMTCIsIkFNRCIsIkFORyIsIkFPQSIsIkFSUyIsIkFVRCIsIkFXRyIsIkFaTiIsIkJBTSIsIkJCRCIsIkJEVCIsIkJHTiIsIkJIRCIsIkJJRiIsIkJNRCIsIkJORCIsIkJPQiIsIkJPViIsIkJSTCIsIkJTRCIsIkJUQyIsIkJUTiIsIkJXUCIsIkJZTiIsIkJZUiIsIkJaRCIsIkNBRCIsIkNERiIsIkNIRSIsIkNIRiIsIkNIVyIsIkNMRiIsIkNMUCIsIkNOSCIsIkNOWSIsIkNPUCIsIkNPVSIsIkNSQyIsIkNVQyIsIkNVUCIsIkNWRSIsIkNaSyIsIkRKRiIsIkRLSyIsIkRPUCIsIkRaRCIsIkVFSyIsIkVHUCIsIkVSTiIsIkVUQiIsIkVUSCIsIkVVUiIsIkZKRCIsIkZLUCIsIkdCUCIsIkdFTCIsIkdHUCIsIkdIQyIsIkdIUyIsIkdJUCIsIkdNRCIsIkdORiIsIkdUUSIsIkdZRCIsIkhLRCIsIkhOTCIsIkhSSyIsIkhURyIsIkhVRiIsIklEUiIsIklMUyIsIklNUCIsIklOUiIsIklRRCIsIklSUiIsIklTSyIsIkpFUCIsIkpNRCIsIkpPRCIsIkpQWSIsIktFUyIsIktHUyIsIktIUiIsIktNRiIsIktQVyIsIktSVyIsIktXRCIsIktZRCIsIktaVCIsIkxBSyIsIkxCUCIsIkxLUiIsIkxSRCIsIkxTTCIsIkxUQyIsIkxUTCIsIkxWTCIsIkxZRCIsIk1BRCIsIk1ETCIsIk1HQSIsIk1LRCIsIk1NSyIsIk1OVCIsIk1PUCIsIk1STyIsIk1SVSIsIk1VUiIsIk1WUiIsIk1XSyIsIk1YTiIsIk1YViIsIk1ZUiIsIk1aTiIsIk5BRCIsIk5HTiIsIk5JTyIsIk5PSyIsIk5QUiIsIk5aRCIsIk9NUiIsIlBBQiIsIlBFTiIsIlBHSyIsIlBIUCIsIlBLUiIsIlBMTiIsIlBZRyIsIlFBUiIsIlJNQiIsIlJPTiIsIlJTRCIsIlJVQiIsIlJXRiIsIlNBUiIsIlNCRCIsIlNDUiIsIlNERyIsIlNFSyIsIlNHRCIsIlNIUCIsIlNMTCIsIlNPUyIsIlNSRCIsIlNTUCIsIlNURCIsIlNUTiIsIlNWQyIsIlNZUCIsIlNaTCIsIlRIQiIsIlRKUyIsIlRNVCIsIlRORCIsIlRPUCIsIlRSTCIsIlRSWSIsIlRURCIsIlRWRCIsIlRXRCIsIlRaUyIsIlVBSCIsIlVHWCIsIlVTRCIsIlVZSSIsIlVZVSIsIlVZVyIsIlVaUyIsIlZFRiIsIlZFUyIsIlZORCIsIlZVViIsIldTVCIsIlhBRiIsIlhCVCIsIlhDRCIsIlhPRiIsIlhQRiIsIlhTVSIsIlhVQSIsIllFUiIsIlpBUiIsIlpNVyIsIlpXRCIsIlpXTCIsImdldEZvcm1hdE9wdGlvbnMiLCJ0aW1lem9uZSIsIm9wdGlvbnMiLCJ1c2VPcHRpb25zIiwidHoiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImdldFRpbWV6b25lT2Zmc2V0TWludXRlcyIsImRhdGUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0elVwcGVyIiwiU3RyaW5nIiwiZGVmYXVsdFRpbWV6b25lTmFtZXMiLCJvZmZzZXQiLCJFcnJvciIsInN0cmZ0aW1lIiwiZm9ybWF0IiwidG9EYXRlIiwidG9KU0RhdGUiLCJ0b2tlbnMiLCJUaW1lc3RhbXBQYXJzZXIiLCJwYXJzZUZvcm1hdFN0cmluZyIsInRpbWV6b25lT2Zmc2V0TWludXRlcyIsInR6RGF0ZSIsInNldFVUQ01pbnV0ZXMiLCJnZXRVVENNaW51dGVzIiwib3V0cHV0IiwidG9rZW4iLCJEaXJlY3RpdmUiLCJ3cml0ZSIsIlRva2VuIiwic3RycHRpbWUiLCJ0aW1lc3RhbXAiLCJwYXJzZXIiLCJrZXkiLCJyZXN1bHQiLCJwYXJzZSIsImdldERhdGUiLCJzdHJ0aW1lIiwiZW5nbGlzaCIsImVyYU5hbWVzIiwibWVyaWRpZW1OYW1lcyIsInNob3J0V2Vla2RheU5hbWVzIiwibG9uZ1dlZWtkYXlOYW1lcyIsInNob3J0TW9udGhOYW1lcyIsImxvbmdNb250aE5hbWVzIiwib3JkaW5hbFRyYW5zZm9ybSIsIm51bWJlciIsImRpZ2l0IiwibGVmdFBhZCIsImNoYXIiLCJ0ZXh0Iiwic3RyaW5nIiwid3JpdGVUaW1lem9uZU9mZnNldCIsIm9mZnNldE1pbnV0ZXMiLCJtb2RpZmllciIsImFic09mZnNldCIsImFicyIsInNpZ24iLCJob3VyIiwibWludXRlIiwiZ2V0RGF5T2ZXZWVrIiwib2Zmc2V0cyIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsIm1vbnRoIiwiZ2V0VVRDTW9udGgiLCJkYXkiLCJnZXRVVENEYXRlIiwiZ2V0RGF5T2ZZZWFyIiwibGVuZ3RocyIsIm1vbnRoTGVuZ3RocyIsImZvclllYXIiLCJtb250aHMiLCJzbGljZSIsInJlZHVjZSIsImEiLCJiIiwiZ2V0V2Vla09mWWVhckZyb21TdW5kYXkiLCJkYXlPZlllYXIiLCJmaXJzdERheU9mV2VlayIsImdldEZpcnN0V2Vla2RheUluWWVhciIsImdldFdlZWtPZlllYXJGcm9tTW9uZGF5IiwiZGF5T2ZXZWVrIiwic3VuZGF5V2VlayIsImdldElTT1dlZWtzSW5ZZWFyIiwicHJpb3JZZWFyIiwiZ2V0SVNPV2Vla09mWWVhciIsIndlZWtOdW1iZXIiLCJnZXRJU09XZWVrRGF0ZVllYXIiLCJjb25zdHJ1Y3RvciIsIm5hbWVzIiwicGFkTGVuZ3RoIiwibGlrZWx5TGVuZ3RoIiwibWluaW11bSIsIm1heGltdW0iLCJjYW5CZU5lZ2F0aXZlIiwicmV3cml0ZSIsInBhcnNlRnVuY3Rpb24iLCJ3cml0ZUZ1bmN0aW9uIiwic3RvcmVGdW5jdGlvbiIsInN0b3JlIiwiZ2V0QnlOYW1lIiwibmFtZSIsImRpcmVjdGl2ZSIsImluZGV4T2YiLCJpc09yZGluYWwiLCJnZXRDYW5CZU5lZ2F0aXZlIiwiZ2V0TGlrZWx5TGVuZ3RoIiwiZ2V0UmV3cml0ZVBhcnNlZCIsInJld3JpdGVQYXJzZWRWYWx1ZSIsImV4cGFuZGVkRnJvbSIsImhhc1BhcnNlRnVuY3Rpb24iLCJoYXNTdG9yZUZ1bmN0aW9uIiwibnVtYmVySW5Cb3VuZHMiLCJ2YWx1ZSIsImdldEJvdW5kc1N0cmluZyIsIkRpcmVjdGl2ZVRva2VuIiwicmVzdWx0U3RyaW5nIiwidXBwZXIiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybSIsIlN0cmluZ1Rva2VuIiwiRGlyZWN0aXZlU3RyaW5nVG9rZW4iLCJhZGRDaGFyYWN0ZXIiLCJjaCIsInBhcnNlV2Vla2RheU5hbWUiLCJnZXRVVENEYXkiLCJwYXJzZU1vbnRoTmFtZSIsImNlbnR1cnkiLCJkYXlPZk1vbnRoIiwibWljcm9zZWNvbmQiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJpc29Ud29EaWdpdFllYXIiLCJpc29ZZWFyIiwiZ2V0VVRDSG91cnMiLCJtaWxsaXNlY29uZCIsIm1lcmlkaWVtIiwicGFyc2VNZXJpZGllbU5hbWUiLCJpbmRleCIsIm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2giLCJnZXRUaW1lIiwic2Vjb25kc1NpbmNlRXBvY2giLCJzZWNvbmQiLCJtaW4iLCJnZXRVVENTZWNvbmRzIiwid2Vla09mWWVhckZyb21TdW5kYXkiLCJpc29XZWVrT2ZZZWFyIiwid2Vla09mWWVhckZyb21Nb25kYXkiLCJ0d29EaWdpdFllYXIiLCJwYXJzZVRpbWV6b25lT2Zmc2V0IiwidHpMaXN0IiwiZ2V0VGltZXpvbmVOYW1lTGlzdCIsInBhcnNlSW5kZXhJbkxpc3QiLCJ0aW1lem9uZU5hbWVzIiwiZXJhIiwicGFyc2VFcmFOYW1lIiwiVGltZXN0YW1wUGFyc2VFcnJvciIsInJlYXNvbiIsImN1cnJlbnRUb2tlbiIsIm1lc3NhZ2UiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImVycm9yIiwic3RhY2siLCJjcmVhdGUiLCJpc0RpZ2l0IiwiZ2V0WWVhckZyb21Ud29EaWdpdHMiLCJnZXRNb250aEZyb21EYXlPZlllYXIiLCJkYXlzIiwiZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIiLCJnZXREYXRlRnJvbUlTT1dlZWtEYXRlIiwid2Vla2RheU9mSmFuNCIsImRheXNJblllYXIiLCJpc0xlYXBZZWFyIiwiZ2V0RGF0ZUZyb21TdW5kYXlXZWVrRGF0ZSIsIndlZWtPZlllYXIiLCJnZXREYXRlRnJvbU1vbmRheVdlZWtEYXRlIiwic3VuZGF5RGF5T2ZZZWFyIiwiZm9ya0xlbmd0aCIsIm1pbGxpc2Vjb25kc1NpbmNlRXBvY2giLCJnZXRUaW1lem9uZU9mZnNldE9mRGF0ZSIsIm9mZnNldFNpZ24iLCJ0b3RhbE1pbnV0ZXMiLCJnZXRGdWxsWWVhciIsInNldFVUQ0Z1bGxZZWFyIiwic2V0VVRDTW9udGgiLCJzZXRVVENEYXRlIiwic2V0VVRDSG91cnMiLCJzZXRVVENTZWNvbmRzIiwic2V0VVRDTWlsbGlzZWNvbmRzIiwiY29weSIsImZvcmsiLCJzdGFydFRva2VuSW5kZXgiLCJwYXJzZVN0cmluZ1Rva2VuIiwibmV4dCIsInBhcnNlQW1iaWd1b3VzTnVtYmVyIiwicGFyc2VOdW1iZXIiLCJ0b2tlbkluZGV4IiwibGFzdFdob2xlRXJyb3IiLCJsZW5ndGhMaW1pdCIsIkluZmluaXR5IiwibmVnYXRpdmUiLCJzdGFydCIsInRyaW0iLCJpc0ludGVnZXIiLCJvcmRpbmFsIiwicG9zc2libGUiLCJwb3NzaWJsZUNvdW50IiwibWF0Y2hJbmRleCIsIm1hdGNoTGVuZ3RoIiwiaiIsInRpbWV6b25lTmFtZUxpc3QiLCJob3VycyIsIm1pbnV0ZXMiLCJmb3JtYXRTdHJpbmciLCJkaXIiLCJ6dWx1VGltZXpvbmUiLCJjb21tb24iLCJsZWFwIiwieSIsIndpbmRvdyIsImlzT2JqZWN0Iiwic2VyaWFsaXplIiwidG9VbmRlcnNjb3JlIiwiYWpheCIsImFwaVVybCIsInN1Y2Nlc3MiLCJwYXJhbXMiLCJtZXRob2QiLCJ4bWxIdHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJpc1N1Y2Nlc3MiLCJzdGF0dXMiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInJlc3BvbnNlVGV4dCIsImUiLCJzZW5kIiwiaXNBcnJheSIsInRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImN1cnJlbmN5Rm9ybWF0dGVyIiwibGFuZyIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiaXNEb2xsYXIiLCJzdHlsZSIsImN1cnJlbmN5RGlzcGxheSIsIm51bWJlckZvcm1hdCIsInN0ciIsInJlcGxhY2UiLCJtb250aExlbmd0aCIsImRheXNJbk1vbnRoIiwicmVtb3ZlQ2xhc3MiLCJzZXRDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJhZGRDbGFzcyIsImVsIiwiY2xhc3NOYW1lcyIsImNsYXNzTGlzdCIsImZvckVhY2giLCJjbHMiLCJhZGQiLCJrZXlzIiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwiZWxlbWVudCIsImRvY3VtZW50Iiwic2V0QXR0cmlidXRlIiwiZGVzdHJveUVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlbGVtZW50RnJvbVN0cmluZyIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZmluZEJ5Q2xhc3NOYW1lIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJTVkdBbmltYXRlZFN0cmluZyIsImJhc2VWYWwiLCJ0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIiLCJnZXRQYXJlbnRBdHRyaWJ1dGUiLCJhdHRyIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsIlJlZ0V4cCIsInRlc3QiLCJpc0luc2lkZSIsImlzIiwiY2hpbGQiLCJwYXJlbnQiLCJjdXJyZW50IiwidGFnTmFtZSIsInJlbW92ZSIsInJlZ2V4IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiRW1pdHRlciIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsImV2ZW50cyIsIm9uY2UiLCJzZWxmIiwiZm4iLCJhcmdzIiwib2ZmIiwiYXBwbHkiLCJsaXN0ZW5lcnMiLCJzcGxpY2UiLCJlbWl0IiwiaXNGdW5jdGlvbiIsImYiLCJkb20iLCJtYXRoIiwib2JqZWN0IiwidmFsaWRhdGUiLCJpc05hTlBvbHlmaWxsIiwiaXNOdW1lcmljIiwiY2FwaXRhbGl6ZU9iaiIsIm1lcmdlIiwicGljayIsInRyYXZlcnNlT2JqIiwiZGFzaFRvQ2FwaXRhbCIsImlzU3RyaW5nIiwidW5kZXJzY29yZVRvQ2FwaXRhbCIsIm8iLCJpc05hTiIsIm4iLCJwYXJzZUludCIsIm9iaiIsIm5ld09iaiIsIm9iajEiLCJvYmoyIiwiaXNEZWVwIiwib2JqMyIsInQiLCJwaWNrZWRPYmoiLCJjb21wb25lbnQiLCJwIiwiZm5LZXkiLCJmblZhbHVlIiwiY3VyciIsIm5leHRQcm9wZXJ0eSIsIm1hdGNoIiwibGV0dGVyIiwicyIsImlzQmxhbmsiLCJpc0VtYWlsIiwiaXNCb3VuZGVkQnkiLCJtYXgiLCJ1dGlscyIsImdlbkFycmF5UmFuZ2UiLCJwYXJzZUlTT1N0cmluZyIsImFyclN0ciIsInNwbGl0IiwicGFyc2VGbG9hdCIsIkNhbGVuZGFyVHJlZSIsInZhbGlkYXRlQ2VsbCIsInRyZWUiLCJhZGRUcmVlIiwic2VsZWN0UmFuZ2UiLCJlbmQiLCJyYW5nZSIsInNlbGVjdERheXNJbk1vbnRoIiwibW9udGhEYXlzIiwic2VsZWN0TW9udGhzSW5ZZWFyIiwiaXNWYWxpZCIsImlzUmFuZ2VWYWxpZCIsInNlbGVjdGlvbiIsIm1vbnRoUmFuZ2UiLCJtIiwic3RhcnREYXkiLCJlbmREYXkiLCJzZWxlY3REYXkiLCJmaWx0ZXJWYWxpZHMiLCJmaWx0ZXIiLCJjZWxsIiwicmVwbGFjZU1hcHMiLCJ1cGRhdGVkQXQiLCJtYXBzVG9UcmVlIiwicmVtb3ZlTWFwIiwibWFwcyIsIm1hcFN0YXJ0QXQiLCJhdmFpbGFiaWxpdHkiLCJuaWdodGx5X3JhdGVzIiwibWluaW11bV9zdGF5cyIsImF2YWlsIiwicmF0ZXMiLCJtaW5NYXAiLCJkYXlTaGlmdCIsInByZXZpb3VzRGF0ZSIsInN0YXRlIiwiYXJyIiwibWluU3RheSIsInJhdGUiLCJpc0F2YWlsYWJsZSIsInByZXZBdmFpbGFibGUiLCJpc01vcm5pbmdCbG9ja2VkIiwiaXNBdmFpbGFibGVPdXQiLCJnZXREYXlQcm9wZXJ0eSIsInByb3BlcnR5IiwiZGF5RGF0YSIsImdldERheSIsInllYXJEYXRhIiwibW9udGhEYXRhIiwiaXNEYXlEaXNhYmxlZCIsInRlbXBsYXRlcyIsImNvbmZpZyIsImxvY2FsZXMiLCJjcmVhdGVQb3NpdGlvbmVyIiwiZGF0ZVRvSXNvIiwiaXNMYXRlciIsImlzQ3VycmVudCIsInZhbGlkYXRpb25PZkNlbGwiLCJ0Rm9ybWF0dGVyIiwiZGF0ZVRvQXJyYXkiLCJtb250aERpZmYiLCJzdHlsZXMiLCJ1dGlsc1N0eWxlcyIsIkNhbGVuZGFyIiwib3B0cyIsIlZFUlNJT04iLCJ2ZXJzaW9uIiwiQ1NTX1BSRUZJWCIsImNzc1ByZWZpeCIsImxvZ2dlciIsImNvbmZpZ0RhdGFzZXQiLCJkYXRhc2V0IiwibG9jYWxlIiwiZm9ybWF0RGF0ZSIsInN0YXJ0T2ZXZWVrIiwiY3VycmVudERhdGUiLCJnZXRNb250aCIsInllYXJTdGFydCIsIm1vbnRoU3RhcnQiLCJub3JtYWxpemVSZXNwb25zaXZlT3B0aW9ucyIsImlzRHJvcERvd24iLCJpbml0Q2FsZW5kYXJEcm9wIiwiY1RyZWUiLCJhZGRNYXBzIiwic3RhcnRfZGF0ZSIsImlzU2VsZWN0aW5nIiwiaGlnaGxpZ2h0ZWRCb3VuZHMiLCJoYXNWYWxpZFJhbmdlIiwiaXNSZXZlcnNlU2VsZWN0YWJsZSIsImRpc3BsYXlNb250aHMiLCJtZWRpYVF1ZXJ5TGlzdCIsIm9uTWVkaWFRdWVyeUNoYW5nZSIsIm9uV2luZG93UmVzaXplIiwiYWN0aXZlWWVhclBpY2tlciIsIm9uRG9jdW1lbnRDbGljayIsIm9uRG9jdW1lbnRLZXlkb3duIiwiaW5pdCIsImNhbGVuZGFyIiwicmVzZXQiLCJ0aGVtZSIsImxhYmVscyIsInNwcml0ZSIsImFwcGVuZENoaWxkIiwic3ZnU3ByaXRlIiwicGFnaW5hdGlvbiIsIm1vYmlsZVdlZWtkYXlzIiwiaGVhZGVyVGVtcGxhdGVTdHJpbmciLCJtb250aHNXcmFwcGVyIiwibWFpbiIsImxpdmVSZWdpb24iLCJ5ZWFyUGlja2VyUGFuZWwiLCJzaGFyZWRZZWFyUGlja2VyUGFuZWwiLCJjbG9zZUxhYmVsIiwiY2xvc2UiLCJwcmV2aW91c0xhYmVsIiwicHJldmlvdXNZZWFycyIsIm5leHRMYWJlbCIsIm5leHRZZWFycyIsImZvcndhcmQiLCJtb250aHNGb3J3YXJkIiwiYmFjayIsIm1vbnRoc0JhY2t3YXJkIiwiYWRkQ2FwdGlvblBpY2tlckV2ZW50cyIsImFkZFZpZXdwb3J0RXZlbnRzIiwicmVuZGVyTW9udGhzIiwiYWRkQnRuc0V2ZW50cyIsInNlbGVjdGFibGUiLCJlbFN0YXJ0QXQiLCJlbEVuZEF0IiwicmVudGFsSWQiLCJpbnB1dHNUb1ZhbHVlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkTWFwcyIsImNoYW5nZVNlbGVjdGlvbk9yZGVyIiwiaXNSZXZlcnNlIiwiZGVzdHJveU1vbnRocyIsImZhbGxiYWNrRGlzcGxheU1vbnRocyIsInRvUG9zaXRpdmVJbnQiLCJkaXNwbGF5TW9udGhzTW9iaWxlIiwibW9iaWxlQnJlYWtwb2ludCIsInRvTm9uTmVnYXRpdmVJbnQiLCJmYWxsYmFjayIsInBhcnNlZCIsImlzTW9iaWxlVmlld3BvcnQiLCJtYXRjaGVzIiwidmlld3BvcnRXaWR0aCIsImlubmVyV2lkdGgiLCJhcHBseVZpZXdwb3J0TW9kZSIsInZpZXdwb3J0IiwibW9iaWxlTW9kZSIsInNob3dQYWdpbmF0aW9uTW9iaWxlIiwibW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQiLCJnZXREaXNwbGF5TW9udGhzRm9yVmlld3BvcnQiLCJzeW5jRGlzcGxheU1vbnRoc0ZvclZpZXdwb3J0IiwibmV4dERpc3BsYXlNb250aHMiLCJoYXNDaGFuZ2VkIiwiaGFuZGxlVmlld3BvcnRDaGFuZ2UiLCJyZW1vdmVWaWV3cG9ydEV2ZW50cyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImhlYWRlclRlbXBsYXRlIiwieWVhckVuZCIsIm1vbnRoRW5kIiwiY3JlYXRlVHJlZSIsInJldmVyc2VkIiwiZGlyZWN0IiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYWRkTW9udGhFdmVudHMiLCJhY3Rpb25zRW5hYmxlZCIsImVuYWJsZUFsbERheXMiLCJkaXNhYmxlQmFja0J0biIsInJlY292ZXJTZWxlY3Rpb25zIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3RTdGFydCIsInNlbGVjdGlvbkVuZCIsInNlbGVjdEVuZCIsImhpZ2hMaWdodFJhbmdlIiwiaXNCYWNrRGlzYWJsZWQiLCJzdGFydERhdGUiLCJkaXNhYmxlZCIsInRvZ2dsZUxvYWRpbmciLCJsb2FkaW5nIiwieWVhclRvUmVuZGVyIiwibW9udGhUb1JlbmRlciIsInNoaWZ0TW9udGgiLCJtb250aHNQYWdpbmF0aW9uSnVtcCIsInByZXZlbnREZWZhdWx0IiwiY2xpY2tlZEluc2lkZUNhbGVuZGFyIiwidGFyZ2V0IiwidHJpZ2dlciIsInllYXJPcHRpb24iLCJ5ZWFyUGFnZXIiLCJjbG9zZVBpY2tlciIsImNsb3NlWWVhclBpY2tlciIsImZvY3VzVHJpZ2dlciIsImRldGFpbCIsInNlbGVjdGVkWWVhciIsIm1vbnRoRWxlbWVudCIsInJlbmRlckZyb21TbG90IiwibmV4dFllYXJQYWdlU3RhcnQiLCJ5ZWFyUGFnZVN0YXJ0IiwicmVuZGVyWWVhckdyaWQiLCJjbG9zZXN0Iiwib3BlblllYXJQaWNrZXIiLCJoYW5kbGVZZWFyUGlja2VyS2V5ZG93biIsInBvc2l0aW9uWWVhclBpY2tlclBhbmVsIiwiaGlkZGVuIiwieWVhclBpY2tlck9wZW4iLCJzZWxlY3RlZEJ0biIsImZpcnN0QnRuIiwiZm9jdXMiLCJhcmd1bWVudHMiLCJwYW5lbCIsImZvY3VzZWQiLCJrZXlDb2RlIiwieWVhckJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEluZGV4IiwiY29scyIsImFycm93T2Zmc2V0cyIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwidGFyZ2V0SW5kZXgiLCJmb2N1c2FibGUiLCJmaXJzdEVsIiwibGFzdEVsIiwic2hpZnRLZXkiLCJncmlkIiwicHJldmlvdXNQYWdlciIsIm5leHRQYWdlciIsIm1pbmltdW1ZZWFyIiwibWluaW11bVNlbGVjdGFibGVZZWFyIiwiYm91bmRlZFllYXJQYWdlU3RhcnQiLCJ5ZWFycyIsInNob3VsZERpc2FibGVQcmV2aW91c1BhZ2VyIiwidG9wIiwic2Nyb2xsVG9wIiwidmlzaWJsZUhlaWdodCIsImNsaWVudEhlaWdodCIsInJvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwic2xvdEluZGV4IiwiY2xhbXBWaXNpYmxlTW9udGhTdGFydCIsInNlbGVjdGlvbkhhbmRsZXIiLCJpc0VuZEZpcnN0IiwiZGF0ZVZhbHVlIiwiZGF5QWxyZWFkeVNlbGVjdGVkIiwicmFuZ2VTZWxlY3RlZCIsImlzUGFzdFRvZGF5IiwicmVzZXRTZWxlY3Rpb24iLCJlbmREYXRlRmlyc3RBY3Rpb24iLCJzdGFydERhdGVGaXJzdEFjdGlvbiIsInNlbGVjdGluZ0RpcmVjdCIsInNlbGVjdGluZ1JldmVyc2VkIiwiaGlnaGxpZ2h0ZWQiLCJjb21wbGV0ZVNlbGVjdGlvbiIsImNhbERyb3AiLCJjbG9zZURyb3AiLCJtb3VzZW92ZXJIYW5kbGVyIiwicmVtb3ZlSGlnaGxpZ2h0IiwiY2VsbHMiLCJob3ZlcmVkIiwiaG92ZXJlZE9mZnNldCIsImNlbGxBIiwiY2VsbEIiLCJjaGFuZ2VIaWdobGlnaHREaXJlY3Rpb24iLCJpc0Rpc2FibGVkTGVmdCIsImlzRGlzYWJsZWRDZW50ZXIiLCJpc0Rpc2FibGVkUmlnaHQiLCJpc0ludmFsaWQiLCJvZmZzZXRDZWxsIiwic2V0VGltZW91dCIsImhhbmRsZUFycm93TmF2aWdhdGlvbiIsImJvZHkiLCJyZWxhdGVkVGFyZ2V0IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJOb2RlIiwiRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZIiwiZGF0ZUFycmF5Iiwic2VsZWN0RW5kQWN0aW9uIiwic2VsZWN0U3RhcnRBY3Rpb24iLCJzd2l0Y2hJbnB1dEZvY3VzIiwiZGF0ZVN0ciIsImxhYmVsIiwic2VsZWN0ZWRTdGFydCIsImFubm91bmNlTGl2ZVJlZ2lvbiIsIm9uU2VsZWN0U3RhcnQiLCJzZWxlY3RlZEVuZCIsIm9uU2VsZWN0RW5kIiwiaW52YWxpZCIsImRlc3Ryb3lUb29sdGlwIiwidG9vbHRpcFBvcHBlciIsImRlc3Ryb3kiLCJ0b29sdGlwIiwiZGVzY3JpYmVkIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJmb2N1c2VkQ2VsbCIsImFycm93S2V5cyIsImhvbWVFbmRLZXlzIiwiSG9tZSIsIkVuZCIsInBhZ2VLZXlzIiwiUGFnZVVwIiwiUGFnZURvd24iLCJyb3ciLCJyb3dDZWxscyIsImRheVZhbHVlIiwiZm9jdXNlZE1vbnRoIiwib3JpZ2luU2xvdEluZGV4IiwiY2xpY2siLCJ0YXJnZXRNb250aCIsImZpbmQiLCJtb250aEVsIiwibW9udGhDZWxscyIsIm5ld0NlbGxzIiwibWF4U3RheSIsImludmFsaWRSYW5nZU1lc3NhZ2UiLCJyYW5nZVdpdGhvdXRMYXN0IiwiYWxsb3dTaG9ydGVyTWluU3RheVNlbGVjdGlvbiIsImFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbiIsImhhc1ZhbGlkRGF5cyIsImhhc1ZhbGlkTWluU3RheSIsImhhc1ZhbGlkTWF4U3RheSIsImhhc0ludmFsaWRNaW5TdGF5IiwiaGFzSW52YWxpZE1heFN0YXkiLCJoYXNJbnZhbGlkRGF5cyIsInRvb2x0aXBQb3NpdGlvbiIsInBsYWNlbWVudCIsImZsaXAiLCJvbkNsZWFyU2VsZWN0aW9uIiwiaXNTaW5nbGVJbnB1dCIsImVsU2luZ2xlSW5wdXQiLCJ2YWx1ZVRvSW5wdXQiLCJ0aW1lcyIsIm1Eb20iLCJkb21Nb250aCIsImRheUVsZW1lbnRzIiwibW9udGhEb20iLCJjYXB0aW9uIiwiY2FwdGlvblRlbXBsYXRlU3RyaW5nIiwiaGVhZGVyIiwiZGF5c1RlbXBsYXRlU3RyaW5nIiwieWVhclBpY2tlciIsImNoZXZyb25Eb3duSWQiLCJzaG91bGRDbGFtcFRvQ3VycmVudERhdGUiLCJtaW5pbXVtU2VsZWN0YWJsZU1vbnRoIiwibWluaW11bU1vbnRoIiwibm9ybWFsaXplZE1vbnRoIiwid2Vla2RheXNMYWJlbHNFeHRlbmRlZCIsImRheXNQZXJXZWVrIiwid2Vla0RheUxhYmVsIiwic3RhcnRPZk1vbnRoIiwicm93VGVtcGxhdGUiLCJ3ZWVrUm93Iiwicm93Q2xvc2UiLCJ3ZWVrU2hpZnQiLCJtb250aFRlbXBsYXRlIiwicm93cyIsIndlZWtTaGlmdENvcnJlY3RlZCIsImRheUNvdW50ZXIiLCJ3ZWVrIiwiZGF5VGVtcGxhdGVTdHJpbmciLCJ3ZWVrRGF5UGxhY2Vob2xkZXIiLCJkYXlSYXRlIiwiZGF5SXNBdmFpbGFibGVPdXQiLCJkYXlJc01vcm5pbmdCbG9ja2VkIiwic2hvd1JhdGVzIiwiaXNEaXNhYmxlZCIsImlzQ3VycmVudERheSIsImlzQXZhaWxhYmxlSW4iLCJyYXRlVCIsIm1pblN0YXlUIiwic2hvd01pblN0YXkiLCJtYXhTdGF5VCIsInNob3dNYXhTdGF5IiwiYXJpYUxhYmVsUGFydHMiLCJ0b2RheSIsInVuYXZhaWxhYmxlIiwiYXJpYUxhYmVsIiwidGFiaW5kZXgiLCJ3ZWVrRGF5Iiwib25TdWNjZXNzIiwiYXR0cmlidXRlcyIsImRpc2FibGVBdmFpbGFiaXR5TWFwIiwibWFwc0xvYWRlZCIsIm9uRXJyb3IiLCJmZXRjaCIsInJlbnRhbFVybCIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJzaW5nbGVJbnB1dERhdGVGb3JtYXQiLCJkYXRlU3RhcnQiLCJkYXRlRW5kIiwic2luZ2xlSW5wdXRTZXBhcmF0b3IiLCJvblNlbGVjdGlvbkNvbXBsZXRlZCIsImVsVGFyZ2V0IiwiaGlkZGVuRWxGb3JtYXQiLCJpbnB1dCIsImhpZGRlbklucHV0IiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsImhpZGRlbkVsRW5kQXQiLCJoaWRkZW5FbFN0YXJ0QXQiLCJyZWFkT25seSIsImRyb3BCYXNpYyIsIm9wZW5Ecm9wIiwiaXNSZXZlcnNlZCIsInZpc2libGUiLCJkcm9wUGxhY2VtZW50IiwiaGlkZSIsImRlZmVyVXBkYXRlIiwidXBkYXRlIiwiZm9jdXNUb3VjaEV2ZW50cyIsImJpbmQiLCJlbFJlc2V0IiwiZm9yY2UiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImhpZGRlblZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIm1vbnRoRGlmZmVyZW5jZSIsInR5cGUiLCJfY2FsbGJhY2siLCJtc2ciLCJjb25zb2xlIiwiYXBpSG9zdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwaU5hbWVzcGFjZSIsImFwaU1hcHNSb3V0ZSIsImFwaVJlbnRhbElkIiwiYXBpQ3VycmVuY3kiLCJpZHMiLCJyb3V0ZSIsImFzc2lnbiIsImVuIiwiZGUiLCJlcyIsImZyIiwiaXQiLCJzdiIsInJ1IiwicGwiLCJubCIsIkFSUk9XX1NJWkUiLCJnZXRHbG9iYWxPYmplY3QiLCJnZXRQb3BwZXJSdW50aW1lIiwiZ2xvYmFsT2JqZWN0IiwiUG9wcGVyIiwiY3JlYXRlUG9wcGVyIiwiZ2V0RmxvYXRpbmdSdW50aW1lIiwicnVudGltZSIsIkZsb2F0aW5nVUlET00iLCJGbG9hdGluZ1VJIiwiZmxvYXRpbmdVSSIsImNvbXB1dGVQb3NpdGlvbiIsImdldEFycm93RWxlbWVudCIsImZsb2F0aW5nRWwiLCJzcGxpdFBsYWNlbWVudCIsImJhc2VQbGFjZW1lbnQiLCJhbGlnbm1lbnQiLCJzZXRCb29sZWFuQXR0cmlidXRlIiwiYXBwbHlQb3NpdGlvbiIsIngiLCJzdHJhdGVneSIsInBvc2l0aW9uIiwiYXBwbHlBcnJvd1Bvc2l0aW9uIiwiYXJyb3dFbCIsImNsYW1wIiwiYWxpZ25Ib3Jpem9udGFsbHkiLCJyZWZlcmVuY2VSZWN0IiwiZmxvYXRpbmdSZWN0Iiwid2lkdGgiLCJhbGlnblZlcnRpY2FsbHkiLCJnZXRWaWV3cG9ydENvb3JkaW5hdGVzIiwiY3Jvc3NBeGlzT2Zmc2V0IiwibWFpbkF4aXNPZmZzZXQiLCJub3JtYWxpemVDb29yZGluYXRlc0Zvck9mZnNldFBhcmVudCIsInZpZXdwb3J0WCIsInZpZXdwb3J0WSIsIm9mZnNldFBhcmVudCIsImRvY3VtZW50RWxlbWVudCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJwYXJlbnRSZWN0IiwiY2xpZW50TGVmdCIsInNjcm9sbExlZnQiLCJjbGllbnRUb3AiLCJwb3NpdGlvbk1hbnVhbEFycm93IiwiaGFsZkFycm93IiwibWF4QXJyb3dYIiwiYXJyb3dYIiwibWF4QXJyb3dZIiwiYXJyb3dZIiwiYXR0YWNoRmFsbGJhY2tBdXRvVXBkYXRlIiwiY3JlYXRlUG9wcGVyUG9zaXRpb25lciIsInBvcHBlclJ1bnRpbWUiLCJyZWZlcmVuY2VFbCIsIm1vZGlmaWVycyIsImVuYWJsZWQiLCJjcmVhdGVGbG9hdGluZ1Bvc2l0aW9uZXIiLCJmbG9hdGluZ1J1bnRpbWUiLCJtaWRkbGV3YXJlIiwiY3Jvc3NBeGlzIiwibWFpbkF4aXMiLCJzaGlmdCIsImFycm93IiwiX3JlZiIsIm1pZGRsZXdhcmVEYXRhIiwicmVmZXJlbmNlSGlkZGVuIiwiZXNjYXBlZCIsImNsZWFudXAiLCJhdXRvVXBkYXRlIiwiY3JlYXRlTWFudWFsUG9zaXRpb25lciIsInZpZXdwb3J0Q29vcmRpbmF0ZXMiLCJub3JtYWxpemVkQ29vcmRpbmF0ZXMiLCJub3JtYWxpemVkT3B0aW9ucyIsInNyT25seSIsInRvb2x0aXBBcnJvdyIsIm1DZWxsIiwidGFibGVIZWFkZXIiLCJfcmVmMiIsImNhcHRpb25QaWNrZXIiLCJjYXB0aW9uVHJpZ2dlciIsImNhcHRpb25MYWJlbCIsImNhcHRpb25DaGV2cm9uIiwiX3JlZjMiLCJ5ZWFyUGlja2VyQ2xvc2UiLCJ5ZWFyR3JpZCIsInllYXJQaWNrZXJIZWFkZXIiLCJ0aCIsImluZm9MaW5lcyIsImluZm9IdG1sIiwiaW5mbyIsImNudCIsInBsYWNlaG9sZGVyIiwibnVtIiwicGFkIiwidmFsIiwibG9nIiwiYXZhaWxhYmxlSW4iLCJhdmFpbGFibGVPdXQiLCJkZWZhdWx0Iiwid2lkZ2V0VXRpbHMiLCJhdXRvSW5pdFNlbGVjdG9yIiwiU21pbHlXaWRnZXRVdGlscyIsImluaXRpYWxpemVkIiwiZWxlbWVudHMiLCJjYWwiLCJpbnN0YW5jZXMiLCJTbWlseUNhbGVuZGFyV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==