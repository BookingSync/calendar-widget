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
          this.renderFromSlot(monthElement, selectedYear, monthElement.month, {
            focusTrigger: e.detail === 0
          });
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
    let {
      focusTrigger = false
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const focusSlotIndex = focusTrigger ? monthElement.slotIndex : null;
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
    if (focusSlotIndex !== null) {
      this.focusCaptionTriggerForSlot(focusSlotIndex);
    }
  }
  focusCaptionTriggerForSlot(slotIndex) {
    if (!isArray(this.dom.months)) {
      return;
    }
    const monthElement = this.dom.months.find(monthEl => monthEl.slotIndex === slotIndex);
    const trigger = monthElement && monthElement.querySelector('[data-year-picker-trigger]');
    if (trigger) {
      trigger.focus();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMs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O0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsT0FBTyxFQUFFLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLO0VBQ2YsT0FBTyxFQUFFLENBQUMsS0FBSztFQUNmLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxJQUFJO0VBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEdBQUc7RUFDWixLQUFLLEVBQUUsQ0FBQyxHQUFHO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLElBQUk7RUFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEdBQUc7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxJQUFJO0VBQ1osS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLElBQUksRUFBRSxDQUFDLEdBQUc7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRztFQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2SkFBNkosV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxL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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMFBBQTBQLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsY0FBYyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGVBQWUsZUFBZSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxTQUFTLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLFFBQVEsT0FBTyxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLGNBQWMsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxTQUFTLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sUUFBUSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLGVBQWUsVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sWUFBWSxRQUFRLFNBQVMsVUFBVSxVQUFVLFlBQVksU0FBUyxTQUFTLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLGNBQWMsUUFBUSxPQUFPLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxXQUFXLFVBQVUsY0FBYyxjQUFjLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sZ01BQWdNLFVBQVUsc0NBQXNDLDhCQUE4QixLQUFLLFVBQVUsd0NBQXdDLGdDQUFnQyxLQUFLLEdBQUcsMkJBQTJCLFVBQVUsc0NBQXNDLDhCQUE4QixLQUFLLFFBQVEsd0NBQXdDLGdDQUFnQyxLQUFLLEdBQUcsZUFBZSxlQUFlLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQix1Q0FBdUMsa0JBQWtCLEtBQUssZ0JBQWdCLHlCQUF5QixlQUFlLGdCQUFnQixtQ0FBbUMsNEJBQTRCLGtDQUFrQywwQ0FBMEMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsa0JBQWtCLHVEQUF1RCwrQ0FBK0MsbUNBQW1DLEtBQUssOEJBQThCLG9CQUFvQixpQkFBaUIseUJBQXlCLHNDQUFzQyxpQ0FBaUMsOEJBQThCLEtBQUssaUJBQWlCLGdDQUFnQyxtQkFBbUIsNEJBQTRCLHNDQUFzQyxPQUFPLEtBQUssR0FBRyx1QkFBdUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsd0JBQXdCLHVKQUF1SixnREFBZ0QsdUJBQXVCLG1DQUFtQyxxQ0FBcUMsZ0JBQWdCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLCtCQUErQiw0QkFBNEIsOEJBQThCLGdDQUFnQyw2QkFBNkIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLDBCQUEwQixxQkFBcUIseUJBQXlCLEtBQUssc0JBQXNCLHlCQUF5Qiw0QkFBNEIseUJBQXlCLHNCQUFzQixxQkFBcUIsNkJBQTZCLHlCQUF5QixLQUFLLGVBQWUseUJBQXlCLGVBQWUsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsS0FBSyx1QkFBdUIsMkJBQTJCLDBCQUEwQiw4QkFBOEIseUJBQXlCLHNCQUFzQixxQkFBcUIsNkJBQTZCLGdCQUFnQiw4QkFBOEIseUJBQXlCLHlCQUF5QixvQkFBb0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsK0JBQStCLHlCQUF5QixzQkFBc0IsbUJBQW1CLDhDQUE4QyxLQUFLLHFCQUFxQiw0QkFBNEIscUJBQXFCLGtCQUFrQixzQkFBc0IsNkJBQTZCLDBCQUEwQixLQUFLLHVCQUF1Qiw0QkFBNEIscUJBQXFCLHNCQUFzQixxQkFBcUIsNkJBQTZCLDZCQUE2Qix5QkFBeUIsS0FBSyx1RUFBdUUsc0NBQXNDLEtBQUssZ0dBQWdHLG1DQUFtQywwQkFBMEIsS0FBSyx3QkFBd0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLG1CQUFtQixtQkFBbUIsc0JBQXNCLGtCQUFrQiw2QkFBNkIscUNBQXFDLHVCQUF1QixrQkFBa0Isb0JBQW9CLG1EQUFtRCxrQkFBa0IsdUJBQXVCLDJCQUEyQixLQUFLLHdCQUF3QixxQkFBcUIsa0JBQWtCLDZCQUE2QixnQkFBZ0Isc0NBQXNDLHVCQUF1QixvQkFBb0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEtBQUsseUJBQXlCLG9CQUFvQiwyREFBMkQsa0JBQWtCLDJCQUEyQixLQUFLLGtCQUFrQixxQkFBcUIsMEJBQTBCLHFCQUFxQixnQkFBZ0Isc0NBQXNDLHVCQUF1QixvQkFBb0IsdUJBQXVCLHdCQUF3QixrQkFBa0IsNkJBQTZCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLEtBQUssNEJBQTRCLG9CQUFvQixzQkFBc0IsS0FBSyxpQkFBaUIsb0JBQW9CLHVEQUF1RCw0Q0FBNEMsa0JBQWtCLDBCQUEwQix1QkFBdUIsNEJBQTRCLEtBQUssc0NBQXNDLG1DQUFtQywwQkFBMEIsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLDhCQUE4Qix5QkFBeUIseUJBQXlCLG9CQUFvQix3QkFBd0IsdUJBQXVCLHNCQUFzQix5QkFBeUIsS0FBSyx1Q0FBdUMsc0NBQXNDLHVCQUF1QixLQUFLLGdCQUFnQixvQ0FBb0MsNEJBQTRCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLHlCQUF5QixtQkFBbUIsMkJBQTJCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLDZCQUE2QixxQkFBcUIsc0JBQXNCLDhCQUE4QixTQUFTLHFCQUFxQiw4QkFBOEIsc0JBQXNCLG1DQUFtQyxTQUFTLE9BQU8seURBQXlELHFCQUFxQixPQUFPLGdFQUFnRSxrQkFBa0IsT0FBTyw4REFBOEQsb0JBQW9CLE9BQU8sK0RBQStELG1CQUFtQixPQUFPLEtBQUssc0JBQXNCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQixzQkFBc0IsZUFBZSxLQUFLLG1CQUFtQix5QkFBeUIsYUFBYSxjQUFjLGVBQWUsdUJBQXVCLGlCQUFpQixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSyxjQUFjLHlCQUF5QiwwQkFBMEIsd0JBQXdCLG9CQUFvQixtREFBbUQsNEJBQTRCLDJCQUEyQix1QkFBdUIsT0FBTyxLQUFLLGNBQWMsMkJBQTJCLDJCQUEyQixvQkFBb0IsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLEtBQUssb0JBQW9CLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQix5QkFBeUIscUJBQXFCLGdCQUFnQixLQUFLLGFBQWEsZ0JBQWdCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLG1DQUFtQyxvQ0FBb0MsaUNBQWlDLDZCQUE2QiwwQkFBMEIseUJBQXlCLHFCQUFxQixpQkFBaUIsS0FBSyxnQkFBZ0IsMkJBQTJCLDJCQUEyQixvQkFBb0IsMEJBQTBCLHlCQUF5QixxQkFBcUIsS0FBSyxzQ0FBc0MseUJBQXlCLDZCQUE2QiwwQkFBMEIsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsS0FBSyxXQUFXLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHlCQUF5QiwyQkFBMkIsMkJBQTJCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLDhCQUE4QixnQ0FBZ0MsNkJBQTZCLDBCQUEwQixLQUFLLGFBQWEseUJBQXlCLGlCQUFpQix5QkFBeUIsZ0JBQWdCLHlCQUF5QixtQ0FBbUMsdUJBQXVCLG1CQUFtQiwwQkFBMEIsaUJBQWlCLHNCQUFzQixPQUFPLHlCQUF5QixxQ0FBcUMsNkJBQTZCLG1CQUFtQixPQUFPLGlCQUFpQiwwQkFBMEIsT0FBTyxLQUFLLG9CQUFvQixtQkFBbUIsMEJBQTBCLEtBQUssWUFBWSx5QkFBeUIsMkJBQTJCLDJCQUEyQixvQkFBb0IsK0JBQStCLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixpQkFBaUIscUJBQXFCLDJCQUEyQixLQUFLLGFBQWEseUJBQXlCLGdCQUFnQixjQUFjLHdCQUF3Qix1QkFBdUIseUJBQXlCLGVBQWUsdUJBQXVCLHlCQUF5QixLQUFLLEdBQUcsOEJBQThCLGtDQUFrQyxHQUFHLDhJQUE4SSxtQkFBbUIsR0FBRyw2SkFBNkosd0ZBQXdGLHNCQUFzQixLQUFLLEdBQUcsc0pBQXNKLDBCQUEwQix5QkFBeUIsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0Isc0JBQXNCLGlCQUFpQix5QkFBeUIsc0JBQXNCLGlCQUFpQixhQUFhLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLGdCQUFnQixlQUFlLGlCQUFpQixLQUFLLDJFQUEyRSxvQkFBb0IsS0FBSyxzREFBc0QsbUNBQW1DLEtBQUssc0NBQXNDLDRCQUE0QixLQUFLLHFHQUFxRyxtQkFBbUIsc0JBQXNCLHNCQUFzQixLQUFLLEdBQUcsOE5BQThOLGtCQUFrQiwrQkFBK0IsdUJBQXVCLHFCQUFxQixxQkFBcUIsbUJBQW1CLHVCQUF1QixxQkFBcUIsa0JBQWtCLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixvQkFBb0IsZ0JBQWdCLDJCQUEyQixLQUFLLHNCQUFzQixxQkFBcUIsa0JBQWtCLDZCQUE2QixlQUFlLEtBQUssdUJBQXVCLG9CQUFvQix1QkFBdUIscUJBQXFCLGtCQUFrQixhQUFhLGlCQUFpQixxQ0FBcUMsS0FBSyxjQUFjLHFCQUFxQixzQkFBc0IsS0FBSyxnQkFBZ0IsdUJBQXVCLDJDQUEyQyxpQkFBaUIscUNBQXFDLDBCQUEwQixpREFBaUQsS0FBSyxtQ0FBbUMsd0JBQXdCLDRCQUE0QixLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyx1Q0FBdUMsNEJBQTRCLHNCQUFzQixPQUFPLEtBQUssaUNBQWlDLDRCQUE0Qix1QkFBdUIsNkNBQTZDLDZCQUE2QixPQUFPLEtBQUssR0FBRyxhQUFhLHVCQUF1QixlQUFlLGdCQUFnQixlQUFlLGlCQUFpQixxQkFBcUIsMkJBQTJCLHdCQUF3QixjQUFjLEdBQUcsNkNBQTZDLGVBQWUsU0FBUyw4Q0FBOEMsZ0RBQWdELCtDQUErQyxPQUFPLEtBQUssR0FBRyx1dUJBQXV1QixrQ0FBa0Msc0RBQXNELHVGQUF1RixvRUFBb0UsZ0RBQWdELHNEQUFzRCxvQ0FBb0MsNkVBQTZFLHdFQUF3RSw4RkFBOEYsMkZBQTJGLHlGQUF5RixtRkFBbUYsdUVBQXVFLG9DQUFvQyxrQ0FBa0MsbURBQW1ELDRDQUE0QyxrQ0FBa0Msb0tBQW9LLHVCQUF1QixrQkFBa0Isb0JBQW9CLG1EQUFtRCw4QkFBOEIscUJBQXFCLGNBQWMsaUJBQWlCLHlCQUF5Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsS0FBSyxnQkFBZ0IsMEJBQTBCLEtBQUssMEJBQTBCLGVBQWUsZ0JBQWdCLEtBQUssZ0JBQWdCLGlCQUFpQixpQkFBaUIsS0FBSyxHQUFHLHdFQUF3RSw4REFBOEQscUNBQXFDLFdBQVcsZ0NBQWdDLDJCQUEyQix1QkFBdUIsb0JBQW9CLHFCQUFxQixlQUFlLGtCQUFrQixvQkFBb0IsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLGtWQUFrVixpQ0FBaUMsZ0NBQWdDLFFBQVEsa0NBQWtDLG9DQUFvQyw2QkFBNkIsS0FBSyxHQUFHLGtMQUFrTCxpQ0FBaUMsZ0NBQWdDLG1CQUFtQiwwQ0FBMEMsa0NBQWtDLG1CQUFtQixrQkFBa0IsT0FBTyxrQkFBa0IsMENBQTBDLDJDQUEyQyxPQUFPLEtBQUsscUNBQXFDLGdDQUFnQyxtQkFBbUIsMENBQTBDLGtDQUFrQyxPQUFPLEtBQUssb0NBQW9DLGdDQUFnQyxtQkFBbUIsMENBQTBDLGtDQUFrQyxtQkFBbUIsbUJBQW1CLE9BQU8sa0JBQWtCLDBDQUEwQywyQ0FBMkMsT0FBTyxLQUFLLEdBQUcsOEtBQThLLDZCQUE2Qiw0QkFBNEIsbUJBQW1CLHNDQUFzQyxrQ0FBa0MsbUJBQW1CLGtCQUFrQixPQUFPLGtCQUFrQixzQ0FBc0MsMkNBQTJDLE9BQU8sS0FBSyxpQ0FBaUMsNEJBQTRCLG1CQUFtQixzQ0FBc0Msa0NBQWtDLE9BQU8sS0FBSyxnQ0FBZ0MsNEJBQTRCLG1CQUFtQixzQ0FBc0Msa0NBQWtDLG1CQUFtQixtQkFBbUIsT0FBTyxrQkFBa0Isc0NBQXNDLDJDQUEyQyxPQUFPLEtBQUssR0FBRywyS0FBMkssb0RBQW9ELGdDQUFnQyxrQkFBa0IsMENBQTBDLDJDQUEyQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDLzR5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHpCQSxNQUE4STtBQUM5SSxNQUFvSTtBQUNwSSxNQUEySTtBQUMzSSxNQUE4SjtBQUM5SixNQUF1SjtBQUN2SixNQUF1SjtBQUN2SixNQUE0UztBQUM1UztBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix3SUFBbUI7QUFDL0Msd0JBQXdCLHFKQUFhO0FBQ3JDLGlCQUFpQiwwSUFBYTtBQUM5QixpQkFBaUIsa0lBQU07QUFDdkIsNkJBQTZCLHlJQUFrQjs7QUFFL0MsYUFBYSw2SUFBRyxDQUFDLDZQQUFPOzs7O0FBSXNQO0FBQzlRLE9BQU8saUVBQWUsNlBBQU8sSUFBSSxvUUFBYyxHQUFHLG9RQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBd0o7QUFDeEosTUFBOEk7QUFDOUksTUFBcUo7QUFDckosTUFBd0s7QUFDeEssTUFBaUs7QUFDakssTUFBaUs7QUFDakssTUFBbVU7QUFDblU7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsMEpBQW1CO0FBQy9DLHdCQUF3Qix1S0FBYTtBQUNyQyxpQkFBaUIsNEpBQWE7QUFDOUIsaUJBQWlCLG9KQUFNO0FBQ3ZCLDZCQUE2QiwySkFBa0I7O0FBRS9DLGFBQWEsK0pBQUcsQ0FBQyxvU0FBTzs7OztBQUk2UTtBQUNyUyxPQUFPLGlFQUFlLG9TQUFPLElBQUksMlNBQWMsR0FBRywyU0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFJMFQsUUFBUSxHQUFHcG5CLG1CQUFPLENBQUMscUNBQVksQ0FBQztBQUVwQ29uQixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2lmLE9BQU87QUFFM0IsTUFBTUMsV0FBVyxHQUFHdG1DLG1CQUFPLENBQUMsb0dBQWMsQ0FBQztBQUMzQyxNQUFNdW1DLGdCQUFnQixHQUFHLDhCQUE4Qjs7QUFFdkQ7QUFDQXBzQixNQUFNLENBQUNxc0IsZ0JBQWdCLEdBQUdGLFdBQVc7QUFFckNsZixRQUFRLENBQUNpQyxJQUFJLEdBQUloQyxJQUFJLElBQUs7RUFDeEIsTUFBTW9mLFdBQVcsR0FBRyxFQUFFO0VBQ3RCLE1BQU1uNkIsT0FBTyxHQUFPK2EsSUFBSSxJQUFJLENBQUMsQ0FBQztFQUM5QixNQUFNcWYsUUFBUSxHQUFNbHBCLFFBQVEsQ0FBQzBULGdCQUFnQixDQUFDcVYsZ0JBQWdCLENBQUM7RUFFL0RHLFFBQVEsQ0FBQ3pwQixPQUFPLENBQUVNLE9BQU8sSUFBSztJQUM1QmpSLE9BQU8sQ0FBQ3dRLEVBQUUsR0FBR1MsT0FBTztJQUNwQixNQUFNb3BCLEdBQUcsR0FBSSxJQUFJdmYsUUFBUSxDQUFDOWEsT0FBTyxDQUFDO0lBRWxDbTZCLFdBQVcsQ0FBQ3BuQyxJQUFJLENBQUNzbkMsR0FBRyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztFQUVGdmYsUUFBUSxDQUFDd2YsU0FBUyxHQUFHSCxXQUFXO0VBQ2hDLE9BQU9BLFdBQVc7QUFDcEIsQ0FBQztBQUVEcmYsUUFBUSxDQUFDRSxPQUFPLEdBQUd0bkIsc0VBQWtDO0FBRXJELElBQUl3ZCxRQUFRLENBQUNuQyxVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDK0wsUUFBUSxDQUFDaUMsSUFBSSxDQUFDLENBQUM7QUFDakIsQ0FBQyxNQUFNO0VBQ0w3TCxRQUFRLENBQUNnTyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0lBQ2xEcEUsUUFBUSxDQUFDaUMsSUFBSSxDQUFDLENBQUM7RUFDakIsQ0FBQyxDQUFDO0FBQ0o7QUFFQWxQLE1BQU0sQ0FBQzBzQixtQkFBbUIsR0FBR3pmLFFBQVE7QUFFckMsaUVBQWVBLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vY3VycmVuY3ktc3ltYm9sLW1hcEA1LjEuMC9ub2RlX21vZHVsZXMvY3VycmVuY3ktc3ltYm9sLW1hcC9jdXJyZW5jeS1zeW1ib2wtbWFwLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jdXJyZW5jeS1zeW1ib2wtbWFwQDUuMS4wL25vZGVfbW9kdWxlcy9jdXJyZW5jeS1zeW1ib2wtbWFwL21hcC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RydGltZUAxLjEuMi9ub2RlX21vZHVsZXMvc3RydGltZS9kaXN0L3N0cnRpbWUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hamF4LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hcnJheS9pc0FycmF5LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvY3VycmVuY3kvY3VycmVuY3lGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kYXRlL21vbnRoTGVuZ3RoLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2FkZENsYXNzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZGVzdHJveUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZWxlbWVudEZyb21TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZmluZEJ5Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9nZXRQYXJlbnRBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaXNJbnNpZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vc2V0Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2Z1bmN0aW9uL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2lzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOYU5Qb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOdW1lcmljLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvb2JqZWN0L2NhcGl0YWxpemVPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvcGljay5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvdHJhdmVyc2VPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvZGFzaFRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy90b1VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvdW5kZXJzY29yZVRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci10cmVlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9sb2NhbGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9zdHlsZXMvY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzPzcxOWUiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzP2VhOGYiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImNvbnN0IGN1cnJlbmN5U3ltYm9sTWFwID0gcmVxdWlyZSgnLi9tYXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFN5bWJvbEZyb21DdXJyZW5jeSAoY3VycmVuY3lDb2RlKSB7XG4gIGlmICh0eXBlb2YgY3VycmVuY3lDb2RlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IGNvZGUgPSBjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKVxuXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnJlbmN5U3ltYm9sTWFwLCBjb2RlKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeVN5bWJvbE1hcFtjb2RlXVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jdXJyZW5jeVN5bWJvbE1hcCA9IGN1cnJlbmN5U3ltYm9sTWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUVEOiAn2K8u2KUnLFxuICBBRk46ICfYiycsXG4gIEFMTDogJ0wnLFxuICBBTUQ6ICfWjycsXG4gIEFORzogJ8aSJyxcbiAgQU9BOiAnS3onLFxuICBBUlM6ICckJyxcbiAgQVVEOiAnJCcsXG4gIEFXRzogJ8aSJyxcbiAgQVpOOiAn4oK8JyxcbiAgQkFNOiAnS00nLFxuICBCQkQ6ICckJyxcbiAgQkRUOiAn4KezJyxcbiAgQkdOOiAn0LvQsicsXG4gIEJIRDogJy7Yry7YqCcsXG4gIEJJRjogJ0ZCdScsXG4gIEJNRDogJyQnLFxuICBCTkQ6ICckJyxcbiAgQk9COiAnJGInLFxuICBCT1Y6ICdCT1YnLFxuICBCUkw6ICdSJCcsXG4gIEJTRDogJyQnLFxuICBCVEM6ICfigr8nLFxuICBCVE46ICdOdS4nLFxuICBCV1A6ICdQJyxcbiAgQllOOiAnQnInLFxuICBCWVI6ICdCcicsXG4gIEJaRDogJ0JaJCcsXG4gIENBRDogJyQnLFxuICBDREY6ICdGQycsXG4gIENIRTogJ0NIRScsXG4gIENIRjogJ0NIRicsXG4gIENIVzogJ0NIVycsXG4gIENMRjogJ0NMRicsXG4gIENMUDogJyQnLFxuICBDTkg6ICfCpScsXG4gIENOWTogJ8KlJyxcbiAgQ09QOiAnJCcsXG4gIENPVTogJ0NPVScsXG4gIENSQzogJ+KCoScsXG4gIENVQzogJyQnLFxuICBDVVA6ICfigrEnLFxuICBDVkU6ICckJyxcbiAgQ1pLOiAnS8SNJyxcbiAgREpGOiAnRmRqJyxcbiAgREtLOiAna3InLFxuICBET1A6ICdSRCQnLFxuICBEWkQ6ICfYr9isJyxcbiAgRUVLOiAna3InLFxuICBFR1A6ICfCoycsXG4gIEVSTjogJ05maycsXG4gIEVUQjogJ0JyJyxcbiAgRVRIOiAnzp4nLFxuICBFVVI6ICfigqwnLFxuICBGSkQ6ICckJyxcbiAgRktQOiAnwqMnLFxuICBHQlA6ICfCoycsXG4gIEdFTDogJ+KCvicsXG4gIEdHUDogJ8KjJyxcbiAgR0hDOiAn4oK1JyxcbiAgR0hTOiAnR0jigrUnLFxuICBHSVA6ICfCoycsXG4gIEdNRDogJ0QnLFxuICBHTkY6ICdGRycsXG4gIEdUUTogJ1EnLFxuICBHWUQ6ICckJyxcbiAgSEtEOiAnJCcsXG4gIEhOTDogJ0wnLFxuICBIUks6ICdrbicsXG4gIEhURzogJ0cnLFxuICBIVUY6ICdGdCcsXG4gIElEUjogJ1JwJyxcbiAgSUxTOiAn4oKqJyxcbiAgSU1QOiAnwqMnLFxuICBJTlI6ICfigrknLFxuICBJUUQ6ICfYuS7YrycsXG4gIElSUjogJ++3vCcsXG4gIElTSzogJ2tyJyxcbiAgSkVQOiAnwqMnLFxuICBKTUQ6ICdKJCcsXG4gIEpPRDogJ0pEJyxcbiAgSlBZOiAnwqUnLFxuICBLRVM6ICdLU2gnLFxuICBLR1M6ICfQu9CyJyxcbiAgS0hSOiAn4Z+bJyxcbiAgS01GOiAnQ0YnLFxuICBLUFc6ICfigqknLFxuICBLUlc6ICfigqknLFxuICBLV0Q6ICdLRCcsXG4gIEtZRDogJyQnLFxuICBLWlQ6ICfigrgnLFxuICBMQUs6ICfigq0nLFxuICBMQlA6ICfCoycsXG4gIExLUjogJ+KCqCcsXG4gIExSRDogJyQnLFxuICBMU0w6ICdNJyxcbiAgTFRDOiAnxYEnLFxuICBMVEw6ICdMdCcsXG4gIExWTDogJ0xzJyxcbiAgTFlEOiAnTEQnLFxuICBNQUQ6ICdNQUQnLFxuICBNREw6ICdsZWknLFxuICBNR0E6ICdBcicsXG4gIE1LRDogJ9C00LXQvScsXG4gIE1NSzogJ0snLFxuICBNTlQ6ICfigq4nLFxuICBNT1A6ICdNT1AkJyxcbiAgTVJPOiAnVU0nLFxuICBNUlU6ICdVTScsXG4gIE1VUjogJ+KCqCcsXG4gIE1WUjogJ1JmJyxcbiAgTVdLOiAnTUsnLFxuICBNWE46ICckJyxcbiAgTVhWOiAnTVhWJyxcbiAgTVlSOiAnUk0nLFxuICBNWk46ICdNVCcsXG4gIE5BRDogJyQnLFxuICBOR046ICfigqYnLFxuICBOSU86ICdDJCcsXG4gIE5PSzogJ2tyJyxcbiAgTlBSOiAn4oKoJyxcbiAgTlpEOiAnJCcsXG4gIE9NUjogJ++3vCcsXG4gIFBBQjogJ0IvLicsXG4gIFBFTjogJ1MvLicsXG4gIFBHSzogJ0snLFxuICBQSFA6ICfigrEnLFxuICBQS1I6ICfigqgnLFxuICBQTE46ICd6xYInLFxuICBQWUc6ICdHcycsXG4gIFFBUjogJ++3vCcsXG4gIFJNQjogJ++/pScsXG4gIFJPTjogJ2xlaScsXG4gIFJTRDogJ9CU0LjQvS4nLFxuICBSVUI6ICfigr0nLFxuICBSV0Y6ICdS4oKjJyxcbiAgU0FSOiAn77e8JyxcbiAgU0JEOiAnJCcsXG4gIFNDUjogJ+KCqCcsXG4gIFNERzogJ9isLtizLicsXG4gIFNFSzogJ2tyJyxcbiAgU0dEOiAnUyQnLFxuICBTSFA6ICfCoycsXG4gIFNMTDogJ0xlJyxcbiAgU09TOiAnUycsXG4gIFNSRDogJyQnLFxuICBTU1A6ICfCoycsXG4gIFNURDogJ0RiJyxcbiAgU1ROOiAnRGInLFxuICBTVkM6ICckJyxcbiAgU1lQOiAnwqMnLFxuICBTWkw6ICdFJyxcbiAgVEhCOiAn4Li/JyxcbiAgVEpTOiAnU00nLFxuICBUTVQ6ICdUJyxcbiAgVE5EOiAn2K8u2KonLFxuICBUT1A6ICdUJCcsXG4gIFRSTDogJ+KCpCcsXG4gIFRSWTogJ+KCuicsXG4gIFRURDogJ1RUJCcsXG4gIFRWRDogJyQnLFxuICBUV0Q6ICdOVCQnLFxuICBUWlM6ICdUU2gnLFxuICBVQUg6ICfigrQnLFxuICBVR1g6ICdVU2gnLFxuICBVU0Q6ICckJyxcbiAgVVlJOiAnVVlJJyxcbiAgVVlVOiAnJFUnLFxuICBVWVc6ICdVWVcnLFxuICBVWlM6ICfQu9CyJyxcbiAgVkVGOiAnQnMnLFxuICBWRVM6ICdCcy5TJyxcbiAgVk5EOiAn4oKrJyxcbiAgVlVWOiAnVlQnLFxuICBXU1Q6ICdXUyQnLFxuICBYQUY6ICdGQ0ZBJyxcbiAgWEJUOiAnyYMnLFxuICBYQ0Q6ICckJyxcbiAgWE9GOiAnQ0ZBJyxcbiAgWFBGOiAn4oKjJyxcbiAgWFNVOiAnU3VjcmUnLFxuICBYVUE6ICdYVUEnLFxuICBZRVI6ICfvt7wnLFxuICBaQVI6ICdSJyxcbiAgWk1XOiAnWksnLFxuICBaV0Q6ICdaJCcsXG4gIFpXTDogJyQnXG59XG4iLCIvLyBnaXRodWIuY29tL3BpbmVhcHBsZW1hY2hpbmUvc3RydGltZS1qc1xuLy8gTUlUIGxpY2Vuc2UsIENvcHlyaWdodCAoYykgMjAxOCBTb3BoaWUgS2lyc2NobmVyIChzb3BoaWVrQHBpbmVhcHBsZW1hY2hpbmUuY29tKVxuLy8gUmVmZXJlbmNlczpcbi8vIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvZW4vc3N3X2libV9pXzcxL3J0cmVmL3N0cnB0aS5odG1cbi8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvbGliYy9tYW51YWwvaHRtbF9ub2RlL0Zvcm1hdHRpbmctQ2FsZW5kYXItVGltZS5odG1sXG4vLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2xpYmMvbWFudWFsL2h0bWxfbm9kZS9Mb3dfMDAyZExldmVsLVRpbWUtU3RyaW5nLVBhcnNpbmcuaHRtbFxuLy8gaHR0cDovL21hbjcub3JnL2xpbnV4L21hbi1wYWdlcy9tYW4zL3N0cnB0aW1lLjMuaHRtbFxuLy8gaHR0cHM6Ly9hcGlkb2NrLmNvbS9ydWJ5L0RhdGVUaW1lL3N0cmZ0aW1lXG4vLyBodHRwOi8vc3RyZnRpbWUub3JnL1xuXG5cbmZ1bmN0aW9uIGdldEZvcm1hdE9wdGlvbnModGltZXpvbmUsIG9wdGlvbnMpe1xuICAgIGxldCB1c2VPcHRpb25zO1xuICAgIGxldCB0eiA9IHVuZGVmaW5lZDtcbiAgICBpZihcbiAgICAgICAgdGltZXpvbmUgPT09IG51bGwgfHwgdGltZXpvbmUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBOdW1iZXIuaXNGaW5pdGUodGltZXpvbmUpIHx8IHR5cGVvZih0aW1lem9uZSkgPT09IFwic3RyaW5nXCJcbiAgICApe1xuICAgICAgICB0eiA9IHRpbWV6b25lO1xuICAgICAgICB1c2VPcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9ZWxzZSBpZih0aW1lem9uZSAmJiAhb3B0aW9ucyl7XG4gICAgICAgIHVzZU9wdGlvbnMgPSB0aW1lem9uZTtcbiAgICAgICAgdHogPSB1c2VPcHRpb25zLnR6O1xuICAgIH1lbHNle1xuICAgICAgICB1c2VPcHRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR6OiB0eixcbiAgICAgICAgb3B0aW9uczogdXNlT3B0aW9ucyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldE1pbnV0ZXMoZGF0ZSwgdHope1xuICAgIGlmKHR6ID09PSBudWxsIHx8IHR6ID09PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9ZWxzZSBpZih0eiA+PSAtMTYgJiYgdHogPD0gKzE2KXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoNjAgKiB0eik7XG4gICAgfWVsc2UgaWYoTnVtYmVyLmlzRmluaXRlKHR6KSl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHR6KTtcbiAgICB9ZWxzZSBpZih0eiA9PT0gXCJsb2NhbFwiKXtcbiAgICAgICAgcmV0dXJuIC0oZGF0ZSB8fCBuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1lbHNle1xuICAgICAgICBjb25zdCB0elVwcGVyID0gU3RyaW5nKHR6KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZih0elVwcGVyIGluIGRlZmF1bHRUaW1lem9uZU5hbWVzKXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguZmxvb3IoNjAgKiBkZWZhdWx0VGltZXpvbmVOYW1lc1t0elVwcGVyXSk7XG4gICAgICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUob2Zmc2V0KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0aW1lem9uZSBvcHRpb24gXCIke3R6fVwiLmApO1xufVxuXG5mdW5jdGlvbiBzdHJmdGltZShkYXRlLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBpZihOdW1iZXIuaXNGaW5pdGUoZGF0ZSkpe1xuICAgICAgICAvLyBBY2NlcHQgdW5peCB0aW1lc3RhbXBzIChtaWxsaXNlY29uZHMgc2luY2UgZXBvY2gpXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9ZWxzZSBpZighZGF0ZSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGUgaW5wdXQgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YoZGF0ZS50b0RhdGUpID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL21vbWVudFxuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2RheWpzXG4gICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpO1xuICAgIH1lbHNlIGlmKHR5cGVvZihkYXRlLnRvSlNEYXRlKSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgLy8gU3VwcG9ydCBkYXRlIG9iamVjdHMgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9sdXhvblxuICAgICAgICBkYXRlID0gZGF0ZS50b0pTRGF0ZSgpO1xuICAgIH1cbiAgICBpZighKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgRGF0ZSBpbnN0YW5jZSBmcm9tIGRhdGUgaW5wdXQuXCIpO1xuICAgIH1cbiAgICBjb25zdCB0b2tlbnMgPSBUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KTtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKGRhdGUsIHVzZU9wdGlvbnMudHopO1xuICAgIGNvbnN0IHR6RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGlmKHRpbWV6b25lT2Zmc2V0TWludXRlcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdHpEYXRlLnNldFVUQ01pbnV0ZXMoXG4gICAgICAgICAgICBkYXRlLmdldFVUQ01pbnV0ZXMoKSArXG4gICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yKGxldCB0b2tlbiBvZiB0b2tlbnMpe1xuICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZSl7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW4ud3JpdGUodHpEYXRlLCBcIlwiLCB1c2VPcHRpb25zLm9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgICAgIH1lbHNlIGlmKHRva2VuIGluc3RhbmNlb2YgRGlyZWN0aXZlLlRva2VuKXtcbiAgICAgICAgICAgIG91dHB1dCArPSB0b2tlbi53cml0ZSh0ekRhdGUsIHVzZU9wdGlvbnMub3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gc3RycHRpbWUodGltZXN0YW1wLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aW1lc3RhbXAsIGZvcm1hdCk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKHVuZGVmaW5lZCwgdXNlT3B0aW9ucy50eik7XG4gICAgaWYodGltZXpvbmVPZmZzZXRNaW51dGVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBwYXJzZXIudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGltZXpvbmVPZmZzZXRNaW51dGVzO1xuICAgIH1cbiAgICBpZih1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICBmb3IobGV0IGtleSBpbiB1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICAgICAgcGFyc2VyW2tleV0gPSB1c2VPcHRpb25zLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0LmdldERhdGUoKTtcbn1cblxuY29uc3Qgc3RydGltZSA9IHtcbiAgICBzdHJmdGltZTogc3RyZnRpbWUsXG4gICAgc3RycHRpbWU6IHN0cnB0aW1lLFxufTtcblxuY29uc3QgZW5nbGlzaCA9IHtcbiAgICBlcmFOYW1lczogW1xuICAgICAgICBcIkNFXCIsIFwiQkNFXCJcbiAgICBdLFxuICAgIG1lcmlkaWVtTmFtZXM6IFtcbiAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICBdLFxuICAgIHNob3J0V2Vla2RheU5hbWVzOiBbXG4gICAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJcbiAgICBdLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6IFtcbiAgICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgXSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIixcbiAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgIF0sXG4gICAgbG9uZ01vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXSxcbiAgICBvcmRpbmFsVHJhbnNmb3JtOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IobnVtYmVyICUgMTApO1xuICAgICAgICBpZihudW1iZXIgPiAzICYmIG51bWJlciA8PSAyMCkgcmV0dXJuIGAke251bWJlcn10aGA7XG4gICAgICAgIGlmKGRpZ2l0ID09PSAxKSByZXR1cm4gYCR7bnVtYmVyfXN0YDtcbiAgICAgICAgZWxzZSBpZihkaWdpdCA9PT0gMikgcmV0dXJuIGAke251bWJlcn1uZGA7XG4gICAgICAgIGVsc2UgaWYoZGlnaXQgPT09IDMpIHJldHVybiBgJHtudW1iZXJ9cmRgO1xuICAgICAgICBlbHNlIHJldHVybiBgJHtudW1iZXJ9dGhgO1xuICAgIH0sXG59O1xuXG5cbmZ1bmN0aW9uIGxlZnRQYWQoY2hhciwgbGVuZ3RoLCB0ZXh0KXtcbiAgICBsZXQgc3RyaW5nID0gU3RyaW5nKHRleHQpO1xuICAgIHdoaWxlKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICBzdHJpbmcgPSBjaGFyICsgc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRpbWV6b25lT2Zmc2V0KG9mZnNldE1pbnV0ZXMsIG1vZGlmaWVyKXtcbiAgICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXRNaW51dGVzKTtcbiAgICBjb25zdCBzaWduID0gKG9mZnNldE1pbnV0ZXMgPj0gMCA/IFwiK1wiIDogXCItXCIpO1xuICAgIGNvbnN0IGhvdXIgPSBsZWZ0UGFkKFwiMFwiLCAyLCBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSk7XG4gICAgY29uc3QgbWludXRlID0gbGVmdFBhZChcIjBcIiwgMiwgYWJzT2Zmc2V0ICUgNjApO1xuICAgIGlmKG1vZGlmaWVyID09PSBcIjo6XCIpe1xuICAgICAgICByZXR1cm4gc2lnbiArIGhvdXIgKyBcIjpcIiArIG1pbnV0ZSArIFwiOjAwXCI7XG4gICAgfWVsc2UgaWYobW9kaWZpZXIgPT09IFwiOlwiKXtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBob3VyICsgXCI6XCIgKyBtaW51dGU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBzaWduICsgaG91ciArIG1pbnV0ZTtcbiAgICB9XG59XG5cbi8vIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIGdpdmVuIGFuIGlucHV0IERhdGUuXG4vLyBSZXR1cm5zIDAgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4vLyBodHRwczovL3d3dy5xdW9yYS5jb20vSG93LWRvZXMtVG9tb2hpa28tU2FrYW1vdG9zLUFsZ29yaXRobS13b3JrL2Fuc3dlci9SYXppbWFuLVQtVj9zcmlkPXUySE5YXG5mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSl7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFswLCAzLCAyLCA1LCAwLCAzLCA1LCAxLCA0LCA2LCAyLCA0XTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGlmKG1vbnRoIDwgMil7XG4gICAgICAgIHllYXItLTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2Zmc2V0c1ttb250aF0gKyB5ZWFyICsgZGF5ICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG4vLyBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBhcyBhIG51bWJlciAoMS0zNjYpXG5mdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgbGVuZ3RocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3QgbW9udGhzID0gbGVuZ3Rocy5zbGljZSgwLCBkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKSArIChcbiAgICAgICAgKG1vbnRocy5sZW5ndGggJiYgbW9udGhzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpKSB8fCAwXG4gICAgKTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIFN1bmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZGF5T2ZZZWFyICsgKGZpcnN0RGF5T2ZXZWVrIHx8IDcpIC0gMSkgLyA3KTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIE1vbmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3Qgc3VuZGF5V2VlayA9IE1hdGguZmxvb3IoKGRheU9mWWVhciArIChmaXJzdERheU9mV2VlayB8fCA3KSAtIDEpIC8gNyk7XG4gICAgcmV0dXJuIHN1bmRheVdlZWsgLSAoZGF5T2ZXZWVrID09PSAwID8gMSA6IDApICsgKGZpcnN0RGF5T2ZXZWVrID09PSAxID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKXtcbiAgICBjb25zdCBwcmlvclllYXIgPSB5ZWFyIC0gMTtcbiAgICBjb25zdCBhID0gKHllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3IoeWVhciAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgY29uc3QgYiA9IChwcmlvclllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHByaW9yWWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgcmV0dXJuIGEgPT09IDQgfHwgYiA9PT0gMyA/IDUzIDogNTI7XG59XG5cbi8vIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIHllYXJcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldElTT1dlZWtPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKCgxMCArIGRheU9mWWVhciAtIChkYXlPZldlZWsgfHwgNykpIC8gNyk7XG4gICAgaWYod2Vla051bWJlciA8IDEpe1xuICAgICAgICByZXR1cm4gZ2V0SVNPV2Vla3NJblllYXIoeWVhciAtIDEpO1xuICAgIH1lbHNlIGlmKHdlZWtOdW1iZXIgPiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKSl7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gd2Vla051bWJlcjtcbiAgICB9XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbmZ1bmN0aW9uIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKXtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBnZXREYXlPZldlZWsoZGF0ZSk7XG4gICAgY29uc3Qgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKDEwICsgZGF5T2ZZZWFyIC0gKGRheU9mV2VlayB8fCA3KSkgLyA3KTtcbiAgICBpZih3ZWVrTnVtYmVyIDwgMSl7XG4gICAgICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgICB9ZWxzZSBpZih3ZWVrTnVtYmVyID4gZ2V0SVNPV2Vla3NJblllYXIoeWVhcikpe1xuICAgICAgICByZXR1cm4geWVhciArIDE7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cbn1cblxuY2xhc3MgRGlyZWN0aXZle1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgICAgICAvLyBMaXN0IG9mIHBvc3NpYmxlIG5hbWVzIGZvciB0aGlzIGRpcmVjdGl2ZVxuICAgICAgICB0aGlzLm5hbWVzID0gb3B0aW9ucy5uYW1lcztcbiAgICAgICAgLy8gUGFkIG51bWJlcnMgdG8gdGhpcyBsZW5ndGggKG5vcm1hbGx5KVxuICAgICAgICB0aGlzLnBhZExlbmd0aCA9IG9wdGlvbnMucGFkTGVuZ3RoO1xuICAgICAgICAvLyBBIGxpa2VseSAoYnV0IG5vdCBzdHJpY3QpIGxlbmd0aCB0byBiZSB1c2VkIHdoZW4gcmVzb2x2aW5nXG4gICAgICAgIC8vIGFtYmlndW91cyBwYXJzaW5nIGlucHV0c1xuICAgICAgICB0aGlzLmxpa2VseUxlbmd0aCA9IG9wdGlvbnMubGlrZWx5TGVuZ3RoO1xuICAgICAgICAvLyBJbmRpY2F0ZXMgdGhhdCB0aGlzIGRpcmVjdGl2ZSB1c2VzIHRleHQgKGFzIG9wcG9zZWQgdG8gbnVtYmVycylcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAvLyBUaGUgbWluaW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5taW5pbXVtID0gb3B0aW9ucy5taW5pbXVtO1xuICAgICAgICAvLyBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gb3B0aW9ucy5tYXhpbXVtO1xuICAgICAgICAvLyBXaGV0aGVyIHRoaXMgZGlyZWN0aXZlIHJlcHJlc2VudHMgYSBudW1iZXIgdGhhdCBjYW4gYmUgbmVnYXRpdmVcbiAgICAgICAgdGhpcy5jYW5CZU5lZ2F0aXZlID0gb3B0aW9ucy5jYW5CZU5lZ2F0aXZlO1xuICAgICAgICAvLyBUaGlzIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGJlIHJld3JpdHRlbiB1c2luZyBhIGNvbWJpbmF0aW9uIG9mXG4gICAgICAgIC8vIG90aGVyIGRpcmVjdGl2ZXNcbiAgICAgICAgdGhpcy5yZXdyaXRlID0gb3B0aW9ucy5yZXdyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBwYXJzZSBjb250ZW50IGZyb20gYSBzdHJpbmdcbiAgICAgICAgdGhpcy5wYXJzZUZ1bmN0aW9uID0gb3B0aW9ucy5wYXJzZTtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gd3JpdGUgY29udGVudCBhcyBhIHN0cmluZywgZ2l2ZW4gYSBkYXRlIHRvIGZvcm1hdFxuICAgICAgICB0aGlzLndyaXRlRnVuY3Rpb24gPSBvcHRpb25zLndyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBzdG9yZSBhIHBhcnNlZCBudW1lcmljIHZhbHVlXG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbiA9IG9wdGlvbnMuc3RvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRCeU5hbWUobmFtZSl7XG4gICAgICAgIGZvcihsZXQgZGlyZWN0aXZlIG9mIERpcmVjdGl2ZS5saXN0KXtcbiAgICAgICAgICAgIGlmKGRpcmVjdGl2ZS5uYW1lcy5pbmRleE9mKG5hbWUpID49IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5CZU5lZ2F0aXZlO1xuICAgIH1cbiAgICBnZXRMaWtlbHlMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlrZWx5TGVuZ3RoO1xuICAgIH1cbiAgICBnZXRSZXdyaXRlUGFyc2VkKHBhcnNlRm9ybWF0U3RyaW5nKXtcbiAgICAgICAgaWYoIXRoaXMucmV3cml0ZVBhcnNlZFZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlID0gcGFyc2VGb3JtYXRTdHJpbmcodGhpcy5yZXdyaXRlKTtcbiAgICAgICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdGhpcy5yZXdyaXRlUGFyc2VkVmFsdWUpe1xuICAgICAgICAgICAgICAgIHRva2VuLmV4cGFuZGVkRnJvbSA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlO1xuICAgIH1cbiAgICBoYXNQYXJzZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyc2VGdW5jdGlvbjtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gISF0aGlzLnN0b3JlRnVuY3Rpb247XG4gICAgfVxuICAgIHBhcnNlKHBhcnNlcil7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24uY2FsbChwYXJzZXIpO1xuICAgIH1cbiAgICBzdG9yZShwYXJzZXIsIG51bWJlcil7XG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyl7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgfVxuICAgIG51bWJlckluQm91bmRzKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICghTnVtYmVyLmlzRmluaXRlKHRoaXMubWluaW11bSkgfHwgdmFsdWUgPj0gdGhpcy5taW5pbXVtKSAmJlxuICAgICAgICAgICAgKCFOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSB8fCB2YWx1ZSA8PSB0aGlzLm1heGltdW0pXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldEJvdW5kc1N0cmluZygpe1xuICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sIC4uLl1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFsuLi4sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIFwiJVwiICsgdGhpcy5uYW1lc1swXTtcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5Ub2tlbiA9IGNsYXNzIERpcmVjdGl2ZVRva2Vue1xuICAgIGNvbnN0cnVjdG9yKG1vZGlmaWVyLCBkaXJlY3RpdmUpe1xuICAgICAgICB0aGlzLm1vZGlmaWVyID0gbW9kaWZpZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gZGlyZWN0aXZlO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWVyID09PSBcIjpcIjtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuY2FuQmVOZWdhdGl2ZTtcbiAgICB9XG4gICAgZ2V0TGlrZWx5TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZS5saWtlbHlMZW5ndGg7XG4gICAgfVxuICAgIGhhc1BhcnNlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmhhc1BhcnNlRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuaGFzU3RvcmVGdW5jdGlvbigpO1xuICAgIH1cbiAgICBwYXJzZShwYXJzZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUucGFyc2VGdW5jdGlvbi5jYWxsKHBhcnNlciwgdGhpcy5tb2RpZmllcik7XG4gICAgfVxuICAgIHN0b3JlKHBhcnNlciwgbnVtYmVyKXtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kaXJlY3RpdmUud3JpdGUoZGF0ZSwgdGhpcy5tb2RpZmllciwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgaWYodGhpcy5tb2RpZmllciA9PT0gXCJeXCIpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICBpZih0eXBlb2YocmVzdWx0KSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyID0gcmVzdWx0U3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdXBwZXIgIT09IHJlc3VsdFN0cmluZyA/IHVwcGVyIDogcmVzdWx0U3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kaWZpZXIgPT09IFwiX1wiICYmIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gbGVmdFBhZChcIiBcIiwgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoLCByZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIl9cIiAmJiB0aGlzLmRpcmVjdGl2ZS50ZXh0KXtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcocmVzdWx0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIi1cIiAmJiB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIjpcIiAmJiAhdGhpcy5kaXJlY3RpdmUudGV4dCl7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKG9wdGlvbnMgJiYgb3B0aW9ucy5vcmRpbmFsVHJhbnNmb3JtKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgfWVsc2UgaWYoIXRoaXMuZGlyZWN0aXZlLnRleHQgJiYgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID49IDAgP1xuICAgICAgICAgICAgICAgIGxlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgcmVzdWx0KSA6XG4gICAgICAgICAgICAgICAgYC0ke2xlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgLXJlc3VsdCl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbnVtYmVySW5Cb3VuZHModmFsdWUpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUubnVtYmVySW5Cb3VuZHModmFsdWUpO1xuICAgIH1cbiAgICBnZXRCb3VuZHNTdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmdldEJvdW5kc1N0cmluZygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpe1xuICAgICAgICByZXR1cm4gXCIlXCIgKyB0aGlzLm1vZGlmaWVyICsgdGhpcy5kaXJlY3RpdmUubmFtZXNbMF07XG4gICAgfVxufVxuXG5EaXJlY3RpdmUuU3RyaW5nVG9rZW4gPSBjbGFzcyBEaXJlY3RpdmVTdHJpbmdUb2tlbntcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmcpe1xuICAgICAgICB0aGlzLnN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYWRkQ2hhcmFjdGVyKGNoKXtcbiAgICAgICAgdGhpcy5zdHJpbmcgKz0gY2g7XG4gICAgfVxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5saXN0ID0gW1xuICAgIC8vIEFiYnJldmlhdGVkIHdlZWtkYXkgbmFtZVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiYVwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmRheU9mV2VlayA9IHRoaXMucGFyc2VXZWVrZGF5TmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMuc2hvcnRXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5zaG9ydFdlZWtkYXlOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ0RheSgpICUgN107XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyB3ZWVrZGF5IG5hbWVcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkFcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSB0aGlzLnBhcnNlV2Vla2RheU5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLmxvbmdXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nV2Vla2RheU5hbWVzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzW2RhdGUuZ2V0VVRDRGF5KCkgJSA3XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBYmJyZXZpYXRlZCBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJiXCIsIFwiaFwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gMSArIHRoaXMucGFyc2VNb250aE5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLnNob3J0TW9udGhOYW1lcykgfHxcbiAgICAgICAgICAgICAgICBlbmdsaXNoLnNob3J0TW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJCXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSAxICsgdGhpcy5wYXJzZU1vbnRoTmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMubG9uZ01vbnRoTmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nTW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gQ29tYmluYXRpb24gZGF0ZSBhbmQgdGltZSwgc2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImNcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVlcIixcbiAgICB9KSxcbiAgICAvLyBDZW50dXJ5IChjb21wbGVtZW50cyAleSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkNcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmNlbnR1cnkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSAvIDEwMCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IGRheSBvZiBtb250aFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZFwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDMxLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJW0vJWQvJXlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkRcIiwgXCJ4XCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVtLyVkLyV5XCIsXG4gICAgfSksXG4gICAgLy8gRGF5IG9mIG1vbnRoIHBhZGRlZCB3aXRoIHNwYWNlcyAoc2FtZSBhcyBcIiVfZFwiKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZVwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAzMSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmRheU9mTW9udGggPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBpZighbW9kaWZpZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0UGFkKFwiIFwiLCAyLCBkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2l4LWRpZ2l0IG1pY3Jvc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJmXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDYsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5OTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAxMDAwICogZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzICVZLSVtLSVkXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJGXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVZLSVtLSVkXCIsXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImdcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKSAlIDEwMDtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBGdWxsIElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkdcIl0sXG4gICAgICAgIHBhZExlbmd0aDogNCxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA0LFxuICAgICAgICBjYW5CZU5lZ2F0aXZlOiB0cnVlLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgaG91ciAoMC0yMylcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkhcIiwgXCJrXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogMjMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBob3VyICgxLTEyKSB0byBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggJXAgKEFNL1BNKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiSVwiLCBcImxcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAxMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRVVENIb3VycygpICUgMTIpIHx8IDEyO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIERheSBpbiB5ZWFyXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJqXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMzY2LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZZZWFyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFRocmVlLWRpZ2l0IG1pbGxpc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJMXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBtb250aCBudW1iZXIgKDEtMTIpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJtXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMTIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIDEgKyBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IG1pbnV0ZSAoMC01OSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIk1cIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICBtYXhpbXVtOiA1OSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEFNIG9yIFBNICh1cHBlcmNhc2UpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJwXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBTSBvciBQTSAobG93ZXJjYXNlKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiUFwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIE51bWJlciBvZiBtaXJjb3NlY29uZHMgc2luY2UgZXBvY2hcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlFcIl0sXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAqIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgXCIlSTolTTolUyAlcFwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJyXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVJOiVNOiVTICVwXCIsXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVIOiVNXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlJcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJUg6JU1cIixcbiAgICB9KSxcbiAgICAvLyBOdW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBlcG9jaFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wic1wiXSxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBzZWNvbmQgKDAtNjEpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJTXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNjEsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbig1OSwgZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJUg6JU06JVNcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlRcIiwgXCJYXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVIOiVNOiVTXCIsXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgxLTcpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ1XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDcsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpIHx8IDc7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2VlayBvZiB0aGUgeWVhciwgc3RhcnRpbmcgd2l0aCBTdW5kYXkgKDAtNTMpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJVXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNTMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldFdlZWtPZlllYXJGcm9tU3VuZGF5KGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFZNUyBkYXRlLCBzYW1lIGFzIFwiJWUtJWItJVlcIlxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1widlwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlZS0lYi0lWVwiLFxuICAgIH0pLFxuICAgIC8vIElTTyA4NjAxOjE5ODggd2VlayBudW1iZXIgKDEtNTMpLCBjb21wbGVtZW50cyAlZy8lR1xuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiVlwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvV2Vla09mWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtPZlllYXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggU3VuZGF5ICgwLTYpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ3XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDYsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFdlZWsgb2YgdGhlIHllYXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgwLTUzKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiV1wiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgeWVhclxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wieVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy50d29EaWdpdFllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDA7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRnVsbCB5ZWFyICh1c3VhbGx5IGZvdXItZGlnaXQsIGJ1dCBub3Qgc3RyaWN0bHkgc28pXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJZXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDQsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNCxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgLy8gTW9kaWZpZXIgXCJeXCIgcHJvZHVjZXMgdW5zaWduZWQgeWVhciwgZm9yIGNvbWJpbmF0aW9uIHdpdGggZXJhIFwiJSNcIlxuICAgICAgICAgICAgaWYoeWVhciA8PSAwICYmIG1vZGlmaWVyID09PSBcIl5cIikgcmV0dXJuIDEgLSB5ZWFyO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4geWVhcjtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUaW1lem9uZSBvZmZzZXQgZS5nLiArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wielwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKG1vZGlmaWVyKXtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVGltZXpvbmUgb2Zmc2V0IG9yIG5hbWUgZS5nLiBVVEMgb3IgR01UIG9yIEVTVCBvciArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiWlwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA1LFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24obW9kaWZpZXIpe1xuICAgICAgICAgICAgY29uc3QgdHpMaXN0ID0gdGhpcy5nZXRUaW1lem9uZU5hbWVMaXN0KCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyc2VJbmRleEluTGlzdCh0ekxpc3QpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXMgPSA2MCAqIHRoaXMudGltZXpvbmVOYW1lc1t0ekxpc3RbaW5kZXhdXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYob2Zmc2V0ID09PSAwKSByZXR1cm4gXCJVVENcIjtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVaICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIitcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVogJVlcIixcbiAgICB9KSxcbiAgICAvLyBFcmEgKEJDL0JDRSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIiNcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5lcmEgPSB0aGlzLnBhcnNlRXJhTmFtZSgpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPD0gMCA/IDEgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLmVyYU5hbWVzKSB8fCBlbmdsaXNoLmVyYU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbl07XG5cbi8vIFRoZSBhc3NlcnRpb24tZXJyb3IgcGFja2FnZSB3YXMgdXNlZCBhcyBhIGJhc2lzIGZvciB0aGUgVGltZXN0YW1wUGFyc2VFcnJvciB0eXBlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2hhaWpzL2Fzc2VydGlvbi1lcnJvci9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vLyBUaGUgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFRpbWVzdGFtcFBhcnNlRXJyb3IocmVhc29uLCBwYXJzZXIpe1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5mb3JtYXQgPSBwYXJzZXIuZm9ybWF0O1xuICAgIHRoaXMudGltZXN0YW1wID0gcGFyc2VyLnN0cmluZztcbiAgICB0aGlzLnRva2VuID0gcGFyc2VyLmN1cnJlbnRUb2tlbjtcbiAgICB0aGlzLmluZGV4ID0gcGFyc2VyLmluZGV4O1xuICAgIGlmKHRoaXMudG9rZW4gJiYgdGhpcy50b2tlbi5leHBhbmRlZEZyb20gJiYgdGhpcy5pbmRleCAhPT0gdW5kZWZpbmVkKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGAoZXhwYW5kZWQgZnJvbSBcIiR7dGhpcy50b2tlbi5leHBhbmRlZEZyb219XCIpIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuICYmIHRoaXMuaW5kZXggIT09IHVuZGVmaW5lZCkgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRva2VuIFwiJHt0aGlzLnRva2VufVwiIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGBpbiBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiAke3RoaXMucmVhc29ufWBcbiAgICApO1xuICAgIGVsc2UgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHdpdGggZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogJHt0aGlzLnJlYXNvbn1gXG4gICAgKTtcbiAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sI2Vycm9yc19lcnJvcl9jYXB0dXJlc3RhY2t0cmFjZV90YXJnZXRvYmplY3RfY29uc3RydWN0b3JvcHRcbiAgICBpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSl7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1lbHNle1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUHJvdG90eXBlIHdyYW5nbGluZ1xuVGltZXN0YW1wUGFyc2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJUaW1lc3RhbXBQYXJzZUVycm9yXCI7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRpbWVzdGFtcFBhcnNlRXJyb3I7XG5cblxuZnVuY3Rpb24gaXNEaWdpdChjaCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgY2ggPT09IFwiMFwiIHx8IGNoID09PSBcIjFcIiB8fCBjaCA9PT0gXCIyXCIgfHwgY2ggPT09IFwiM1wiIHx8IGNoID09PSBcIjRcIiB8fFxuICAgICAgICBjaCA9PT0gXCI1XCIgfHwgY2ggPT09IFwiNlwiIHx8IGNoID09PSBcIjdcIiB8fCBjaCA9PT0gXCI4XCIgfHwgY2ggPT09IFwiOVwiXG4gICAgKTtcbn1cblxuLy8gTWF0Y2hlcyBHTlUgQyBzdHJwdGltZSBiZWhhdmlvclxuLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9saWJjL21hbnVhbC9odG1sX25vZGUvTG93XzAwMmRMZXZlbC1UaW1lLVN0cmluZy1QYXJzaW5nLmh0bWxcbmZ1bmN0aW9uIGdldFllYXJGcm9tVHdvRGlnaXRzKHllYXIpe1xuICAgIHJldHVybiB5ZWFyICsgKHllYXIgPD0gNjggPyAyMDAwIDogMTkwMCk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5cyA+PSBkYXlPZlllYXIpIHJldHVybiBpO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIDEyO1xufVxuXG5mdW5jdGlvbiBnZXREYXlPZk1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5T2ZZZWFyIC0gZGF5cyA8PSBtb250aHNbaV0pIHJldHVybiBkYXlPZlllYXIgLSBkYXlzO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mWWVhciAtIGRheXM7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldERhdGVGcm9tSVNPV2Vla0RhdGUocGFyc2VyLCBpc29ZZWFyLCBpc29XZWVrT2ZZZWFyLCBkYXlPZldlZWspe1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGlzb1llYXIpO1xuICAgIGNvbnN0IHdlZWtkYXlPZkphbjQgPSAoKDMgKyBmaXJzdERheU9mV2VlaykgJSA3KSB8fCA3O1xuICAgIGNvbnN0IGRheXNJblllYXIgPSBpc0xlYXBZZWFyKGlzb1llYXIpID8gMzY2IDogMzY1O1xuICAgIGxldCBkYXlPZlllYXIgPSA3ICogaXNvV2Vla09mWWVhciArIChkYXlPZldlZWsgfHwgNykgLSB3ZWVrZGF5T2ZKYW40IC0gMztcbiAgICBpZihkYXlPZlllYXIgPCAxKXtcbiAgICAgICAgcGFyc2VyLnllYXIgPSBpc29ZZWFyIC0gMTtcbiAgICAgICAgZGF5T2ZZZWFyICs9IGRheXNJblllYXI7XG4gICAgfWVsc2UgaWYoZGF5T2ZZZWFyID4gZGF5c0luWWVhcil7XG4gICAgICAgIHBhcnNlci55ZWFyID0gMSArIGlzb1llYXI7XG4gICAgICAgIGRheU9mWWVhciAtPSBkYXlzSW5ZZWFyO1xuICAgIH1lbHNle1xuICAgICAgICBwYXJzZXIueWVhciA9IGlzb1llYXI7XG4gICAgfVxuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcihwYXJzZXIueWVhciwgZGF5T2ZZZWFyKTtcbiAgICBwYXJzZXIuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHBhcnNlci55ZWFyLCBkYXlPZlllYXIpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHBhcnNlciwgeWVhciwgd2Vla09mWWVhciwgZGF5T2ZXZWVrKXtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqIHdlZWtPZlllYXIgLSAoZmlyc3REYXlPZldlZWsgfHwgNykgKyBkYXlPZldlZWs7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZShwYXJzZXIsIHllYXIsIHdlZWtPZlllYXIsIGRheU9mV2Vlayl7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoeWVhcik7XG4gICAgY29uc3Qgc3VuZGF5RGF5T2ZZZWFyID0gMSArIDcgKiB3ZWVrT2ZZZWFyIC0gKGZpcnN0RGF5T2ZXZWVrIHx8IDcpICsgZGF5T2ZXZWVrO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IHN1bmRheURheU9mWWVhciArIChcbiAgICAgICAgKGRheU9mV2VlayA9PT0gMCA/IDcgOiAwKSAtIChmaXJzdERheU9mV2VlayA9PT0gMSA/IDcgOiAwKVxuICAgICk7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuY2xhc3MgVGltZXN0YW1wUGFyc2Vye1xuICAgIGNvbnN0cnVjdG9yKHRpbWVzdGFtcCwgZm9ybWF0LCB0b2tlbnMpe1xuICAgICAgICAvLyBQYXJzZXIgc3RhdGVcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gU3RyaW5nKHRpbWVzdGFtcCk7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gU3RyaW5nKGZvcm1hdCk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zIHx8IFRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyh0aGlzLmZvcm1hdCk7XG4gICAgICAgIHRoaXMuZm9ya0xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBQYXJzZXIgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zaG9ydFdlZWtkYXlOYW1lcyA9IGVuZ2xpc2guc2hvcnRXZWVrZGF5TmFtZXM7XG4gICAgICAgIHRoaXMubG9uZ1dlZWtkYXlOYW1lcyA9IGVuZ2xpc2gubG9uZ1dlZWtkYXlOYW1lcztcbiAgICAgICAgdGhpcy5zaG9ydE1vbnRoTmFtZXMgPSBlbmdsaXNoLnNob3J0TW9udGhOYW1lcztcbiAgICAgICAgdGhpcy5sb25nTW9udGhOYW1lcyA9IGVuZ2xpc2gubG9uZ01vbnRoTmFtZXM7XG4gICAgICAgIHRoaXMuZXJhTmFtZXMgPSBlbmdsaXNoLmVyYU5hbWVzO1xuICAgICAgICB0aGlzLm1lcmlkaWVtTmFtZXMgPSBlbmdsaXNoLm1lcmlkaWVtTmFtZXM7XG4gICAgICAgIHRoaXMub3JkaW5hbFRyYW5zZm9ybSA9IGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy50aW1lem9uZU5hbWVzID0gZGVmYXVsdFRpbWV6b25lTmFtZXM7XG4gICAgICAgIC8vIFN0b3JhZ2UgdmFsdWVzIGZyb20gcGFyc2luZyB0b2tlbnNcbiAgICAgICAgdGhpcy5lcmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2VudHVyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy55ZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnR3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29ZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb250aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29XZWVrT2ZZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tTW9uZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mWWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mV2VlayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ob3VyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSl7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgOlxuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0U2lnbiA9IG9mZnNldCA+PSAwID8gKzEgOiAtMTtcbiAgICAgICAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvdXI6IG9mZnNldFNpZ24gKiBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSxcbiAgICAgICAgICAgIG1pbnV0ZTogb2Zmc2V0U2lnbiAqIE1hdGguZmxvb3IoYWJzT2Zmc2V0ICUgNjApLFxuICAgICAgICAgICAgdG90YWxNaW51dGVzOiBvZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldERhdGUoKXtcbiAgICAgICAgaWYodGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYodGhpcy5taWxsaXNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2g7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAwMDAgKiB0aGlzLnNlY29uZHNTaW5jZUVwb2NoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSk7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ01pbnV0ZXMoZGF0ZS5nZXRVVENNaW51dGVzKCkgLSBvZmZzZXQudG90YWxNaW51dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZih0aGlzLnllYXIgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnR3b0RpZ2l0WWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2VudHVyeSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLnR3b0RpZ2l0WWVhcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSAxMDAgKiB0aGlzLmNlbnR1cnkgKyB0aGlzLnR3b0RpZ2l0WWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc29ZZWFyID09PSB1bmRlZmluZWQgJiYgdGhpcy5pc29Ud29EaWdpdFllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmlzb1llYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLmlzb1R3b0RpZ2l0WWVhcik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMueWVhciA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2VudHVyeSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMueWVhciA9IDEwMCAqIHRoaXMuY2VudHVyeTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVyYSAmJiB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSAxIC0gdGhpcy55ZWFyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaG91ciAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWVyaWRpZW0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyICUgMTIpICsgKHRoaXMubWVyaWRpZW0gPyAxMiA6IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pbGxpc2Vjb25kICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNvWWVhciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNvV2Vla09mWWVhciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21JU09XZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNvWWVhciwgdGhpcy5pc29XZWVrT2ZZZWFyLCB0aGlzLmRheU9mV2VlayB8fCAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmRheU9mWWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCA/IHRoaXMueWVhciA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCB0aGlzLmRheU9mWWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmRheU9mTW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgdGhpcy5kYXlPZlllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICh0aGlzLm1vbnRoID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXlPZk1vbnRoID09PSB1bmRlZmluZWQpXG4gICAgICAgICl7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy55ZWFyICE9PSB1bmRlZmluZWQgPyB0aGlzLnllYXIgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHRoaXMsXG4gICAgICAgICAgICAgICAgeWVhciwgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSwgdGhpcy5kYXlPZldlZWsgfHwgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy53ZWVrT2ZZZWFyRnJvbU1vbmRheSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMueWVhciAhPT0gdW5kZWZpbmVkID8gdGhpcy55ZWFyIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIsIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXksIHRoaXMuZGF5T2ZXZWVrIHx8IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy55ZWFyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih0aGlzLnllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubW9udGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGluZWFwcGxlbWFjaGluZS9zdHJ0aW1lLWpzL2lzc3Vlcy81XG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjY4MTMxMy9qYXZhc2NyaXB0LXNldHV0Y21vbnRoLWRvZXMtbm90LXdvcmstZm9yLW5vdmVtYmVyXG4gICAgICAgICAgICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENNb250aCh0aGlzLm1vbnRoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kYXlPZk1vbnRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENEYXRlKHRoaXMuZGF5T2ZNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRUaW1lem9uZU9mZnNldE9mRGF0ZShkYXRlKTtcbiAgICAgICAgaWYob2Zmc2V0LnRvdGFsTWludXRlcyl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyIHx8IDApIC0gb2Zmc2V0LmhvdXI7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9ICh0aGlzLm1pbnV0ZSB8fCAwKSAtIG9mZnNldC5taW51dGU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh0aGlzLmhvdXIgfHwgMCk7XG4gICAgICAgIGRhdGUuc2V0VVRDTWludXRlcyh0aGlzLm1pbnV0ZSB8fCAwKTtcbiAgICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHRoaXMuc2Vjb25kIHx8IDApO1xuICAgICAgICBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh0aGlzLm1pY3Jvc2Vjb25kID8gdGhpcy5taWNyb3NlY29uZCAvIDEwMDAgOiAwKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGNvcHkoKXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aGlzLnN0cmluZywgdGhpcy5mb3JtYXQsIHRoaXMudG9rZW5zKTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcyl7XG4gICAgICAgICAgICBwYXJzZXJba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VyO1xuICAgIH1cbiAgICBmb3JrKGxlbmd0aCwgc3RhcnRUb2tlbkluZGV4KXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gdGhpcy5jb3B5KCk7XG4gICAgICAgIHBhcnNlci5mb3JrTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGFyc2VyLnBhcnNlKHN0YXJ0VG9rZW5JbmRleCk7XG4gICAgfVxuICAgIHBhcnNlKHN0YXJ0VG9rZW5JbmRleCl7XG4gICAgICAgIGZvcihsZXQgaSA9IHN0YXJ0VG9rZW5JbmRleCB8fCAwOyBpIDwgdGhpcy50b2tlbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4ID49IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJUaW1lc3RhbXAgaXMgdG9vIHNob3J0IHRvIG1hdGNoIHRoZSB3aG9sZSBmb3JtYXQuXCIsIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZS5TdHJpbmdUb2tlbil7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVN0cmluZ1Rva2VuKHRva2VuLnN0cmluZyk7XG4gICAgICAgICAgICB9ZWxzZSBpZih0b2tlbi5oYXNQYXJzZUZ1bmN0aW9uKCkpe1xuICAgICAgICAgICAgICAgIHRva2VuLnBhcnNlKHRoaXMpO1xuICAgICAgICAgICAgfWVsc2UgaWYodG9rZW4uaGFzU3RvcmVGdW5jdGlvbigpICYmICF0b2tlbi50ZXh0KXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy50b2tlbnNbMSArIGldO1xuICAgICAgICAgICAgICAgIGlmKChuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlLlN0cmluZ1Rva2VuICYmIGlzRGlnaXQobmV4dC5zdHJpbmdbMF0pKSB8fCAoKFxuICAgICAgICAgICAgICAgICAgICBuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHQgaW5zdGFuY2VvZiBEaXJlY3RpdmUuVG9rZW5cbiAgICAgICAgICAgICAgICApICYmICFuZXh0LnRleHQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZUFtYmlndW91c051bWJlcih0b2tlbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uc3RvcmUodGhpcywgdGhpcy5wYXJzZU51bWJlcih0b2tlbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFwiSW52YWxpZCBkaXJlY3RpdmUuXCIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZigxICsgdGhpcy5pbmRleCA8IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBgVGltZXN0YW1wIGlzIHRvbyBsb25nIGZvciB0aGUgZ2l2ZW4gZm9ybWF0LiBUZXh0IHJlbWFpbmluZzogXCIke3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXgpfVwiLmAsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU3RyaW5nVG9rZW4odG9rZW4pe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gIT09IHRva2VuW2ldKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgU3RyaW5nIGxpdGVyYWwgXCIke3Rva2VufVwiIG5vdCBtYXRjaGVkLmAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlQW1iaWd1b3VzTnVtYmVyKHRva2VuLCB0b2tlbkluZGV4KXtcbiAgICAgICAgaWYodGhpcy5mb3JrTGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGxpa2VseUxlbmd0aCA9IHRva2VuLmdldExpa2VseUxlbmd0aCgpO1xuICAgICAgICAgICAgaWYobGlrZWx5TGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmsobGlrZWx5TGVuZ3RoLCB0b2tlbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZighKGVycm9yIGluc3RhbmNlb2YgVGltZXN0YW1wUGFyc2VFcnJvcikpIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsYXN0V2hvbGVFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLnN0cmluZy5sZW5ndGggLSB0aGlzLmluZGV4OyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGkgPT09IHRva2VuLmxpa2VseUxlbmd0aCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JrKGksIHRva2VuSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEoZXJyb3IgaW5zdGFuY2VvZiBUaW1lc3RhbXBQYXJzZUVycm9yKSkgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLm1lc3NhZ2UgPSBcIlRpbWVzdGFtcCBpcyB0b28gc2hvcnQgdG8gbWF0Y2ggdGhlIHdob2xlIGZvcm1hdC5cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0V2hvbGVFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGFzdFdob2xlRXJyb3Ipe1xuICAgICAgICAgICAgICAgIHRocm93IGxhc3RXaG9sZUVycm9yO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgYW1iaWd1b3VzIG51bWJlci5cIiwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy5wYXJzZU51bWJlcih0b2tlbiwgdGhpcy5mb3JrTGVuZ3RoKTtcbiAgICAgICAgICAgIHRva2VuLnN0b3JlKHRoaXMsIG51bWJlcik7XG4gICAgICAgICAgICB0aGlzLmZvcmtMZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlTnVtYmVyKGRpcmVjdGl2ZSwgbGVuZ3RoTGltaXQgPSBJbmZpbml0eSl7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gPT09IFwiLVwiO1xuICAgICAgICBpZihuZWdhdGl2ZSAmJiAhZGlyZWN0aXZlLmdldENhbkJlTmVnYXRpdmUoKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIk51bWJlciBjYW5ub3QgYmUgbmVnYXRpdmUuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZihuZWdhdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLnN0cmluZ1t0aGlzLmluZGV4XSA9PT0gXCIgXCJcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmluZGV4IC0gc3RhcnQgPCBsZW5ndGhMaW1pdCAmJiBpc0RpZ2l0KHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdKVxuICAgICAgICApe1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gK3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KS50cmltKCk7XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZighZGlyZWN0aXZlLm51bWJlckluQm91bmRzKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgTnVtYmVyIFske3ZhbHVlfV0gaXMgb3V0IG9mIGJvdW5kcyAke2RpcmVjdGl2ZS5nZXRCb3VuZHNTdHJpbmcoKX0uYCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmVnYXRpdmUgPyAtdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgaWYoZGlyZWN0aXZlLmlzT3JkaW5hbCgpKXtcbiAgICAgICAgICAgIGNvbnN0IG9yZGluYWwgPSB0aGlzLm9yZGluYWxUcmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gb3JkaW5hbC5sZW5ndGggLSAodGhpcy5pbmRleCAtIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwYXJzZU1vbnRoTmFtZSgpe1xuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc2hvcnRNb250aE5hbWVzLnNsaWNlKCk7XG4gICAgICAgIG5hbWVzLnB1c2goLi4udGhpcy5sb25nTW9udGhOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBtb250aCBuYW1lLlwiLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbmRleCAlIDEyO1xuICAgIH1cbiAgICBwYXJzZVdlZWtkYXlOYW1lKCl7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5zaG9ydFdlZWtkYXlOYW1lcy5zbGljZSgpO1xuICAgICAgICBuYW1lcy5wdXNoKC4uLnRoaXMubG9uZ1dlZWtkYXlOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSB3ZWVrZGF5IG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgNztcbiAgICB9XG4gICAgcGFyc2VNZXJpZGllbU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5tZXJpZGllbU5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBBTS9QTS5cIiwgdGhpc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5kZXggJSAyO1xuICAgIH1cbiAgICBwYXJzZUVyYU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5lcmFOYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgZXJhIG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgMjtcbiAgICB9XG4gICAgcGFyc2VJbmRleEluTGlzdChsaXN0KXtcbiAgICAgICAgY29uc3QgcG9zc2libGUgPSBsaXN0LnNsaWNlKCk7XG4gICAgICAgIGxldCBwb3NzaWJsZUNvdW50ID0gcG9zc2libGUubGVuZ3RoO1xuICAgICAgICBsZXQgbWF0Y2hJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IG1hdGNoTGVuZ3RoID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgcG9zc2libGVDb3VudCAmJiB0aGlzLmluZGV4ICsgaSA8IHRoaXMuc3RyaW5nLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIGldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcG9zc2libGUubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwb3NzaWJsZVtqXTtcbiAgICAgICAgICAgICAgICBpZighaXRlbSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYoaSA+PSBpdGVtLmxlbmd0aCB8fCBpdGVtW2ldLnRvTG93ZXJDYXNlKCkgIT09IGNoKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVbal0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNvdW50LS07XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoMSArIGkgPT09IGl0ZW0ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMSArIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKG1hdGNoSW5kZXggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gbWF0Y2hMZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUaW1lem9uZU5hbWVMaXN0KCl7XG4gICAgICAgIGlmKCF0aGlzLnRpbWV6b25lTmFtZUxpc3Qpe1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU5hbWVMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnRpbWV6b25lTmFtZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVOYW1lTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVOYW1lTGlzdDtcbiAgICB9XG4gICAgcGFyc2VUaW1lem9uZU9mZnNldChtb2RpZmllcil7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdO1xuICAgICAgICBjb25zdCBob3VycyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDMpO1xuICAgICAgICBsZXQgbWludXRlcztcbiAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIDNdID09PSBcIjpcIil7XG4gICAgICAgICAgICBtaW51dGVzID0gK3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXggKyA0LCB0aGlzLmluZGV4ICsgNik7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IDY7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWludXRlcyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMywgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSA1O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKGhvdXJzKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihtaW51dGVzKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRpbWV6b25lIG9mZnNldCBmcm9tIHN0cmluZyBgICtcbiAgICAgICAgICAgICAgICBgXCIke3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KX1cIi5gLCB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IG1pbnV0ZXMgKyA2MCAqIGhvdXJzO1xuICAgICAgICBpZihzaWduID09PSBcIitcIiB8fCBzaWduID09PSBcIsKxXCIpIHJldHVybiArb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKHNpZ24gPT09IFwiLVwiKSByZXR1cm4gLW9mZnNldDtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biB0aW1lem9uZSBvZmZzZXQgc2lnbiBcIiR7c2lnbn1cIi5gLCB0aGlzKTtcbiAgICB9XG59XG5cblRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCl7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgbGV0IGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCBtb2RpZmllciA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBmb3JtYXRTdHJpbmcgPSBTdHJpbmcoZm9ybWF0KTtcbiAgICBpZighZm9ybWF0U3RyaW5nKXtcbiAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYEVtcHR5IGZvcm1hdCBzdHJpbmcuYCwge1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRTdHJpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENoYXJhY3RlcihjaCl7XG4gICAgICAgIGlmKHRva2Vucy5sZW5ndGggJiYgKHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBEaXJlY3RpdmUuU3RyaW5nVG9rZW4pKXtcbiAgICAgICAgICAgIGlmKGlzRGlnaXQoY2gpID09PSBpc0RpZ2l0KHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uc3RyaW5nWzBdKSl7XG4gICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5hZGRDaGFyYWN0ZXIoY2gpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobmV3IERpcmVjdGl2ZS5TdHJpbmdUb2tlbihjaCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKG5ldyBEaXJlY3RpdmUuU3RyaW5nVG9rZW4oY2gpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGNoIG9mIGZvcm1hdFN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGl2ZSAmJiBjaCA9PT0gXCIlXCIpe1xuICAgICAgICAgICAgYWRkQ2hhcmFjdGVyKFwiJVwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwiblwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcblwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwidFwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcdFwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgIW1vZGlmaWVyICYmIChcbiAgICAgICAgICAgIGNoID09PSBcIi1cIiB8fCBjaCA9PT0gXCJfXCIgfHwgY2ggPT09IFwiXlwiIHx8IGNoID09PSBcIjpcIlxuICAgICAgICApKXtcbiAgICAgICAgICAgIG1vZGlmaWVyICs9IGNoO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUpe1xuICAgICAgICAgICAgY29uc3QgZGlyID0gRGlyZWN0aXZlLmdldEJ5TmFtZShjaCk7XG4gICAgICAgICAgICBpZighZGlyKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biBkaXJlY3RpdmUgXCIlJHttb2RpZmllcn0ke2NofVwiLmAsIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmKGRpci5yZXdyaXRlKSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICAuLi5kaXIuZ2V0UmV3cml0ZVBhcnNlZChUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aXZlLlRva2VuKG1vZGlmaWVyLCBkaXIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIlwiO1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1lbHNlIGlmKGNoID09PSBcIiVcIil7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihjaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoZGlyZWN0aXZlKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgXCJGb3VuZCB1bnRlcm1pbmF0ZWQgZGlyZWN0aXZlIGF0IHRoZSBlbmQgb2YgdGhlIGZvcm1hdCBzdHJpbmcuXCIsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0U3RyaW5nXG4gICAgICAgIH1cbiAgICApO1xuICAgIGlmKHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5zdHJpbmcgPT09IFwiWlwiKXtcbiAgICAgICAgdG9rZW5zLnp1bHVUaW1lem9uZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcil7XG4gICAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xufVxuXG5cbmNvbnN0IG1vbnRoTGVuZ3RocyA9IHtcbiAgICBjb21tb246IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICBsZWFwOiBbMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG4gICAgZm9yWWVhcjogZnVuY3Rpb24oeWVhcil7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gbW9udGhMZW5ndGhzLmxlYXAgOiBtb250aExlbmd0aHMuY29tbW9uO1xuICAgIH0sXG59O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc4OTkyLzQwOTkwMjJcbmZ1bmN0aW9uIGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKXtcbiAgICBjb25zdCB5ID0geWVhciAtIDE7XG4gICAgcmV0dXJuICh5ZWFyICogMzY1ICtcbiAgICAgICAgTWF0aC5mbG9vcih5IC8gNCkgLSBNYXRoLmZsb29yKHkgLyAxMDApICsgTWF0aC5mbG9vcih5IC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG5jb25zdCBkZWZhdWx0VGltZXpvbmVOYW1lcyA9IHtcbiAgICBcIkFDRFRcIjogKzEwLjUsXG4gICAgXCJBQ1NUXCI6ICs5LjUsXG4gICAgXCJBQ1RcIjogLTUsXG4gICAgXCJBQ1dTVFwiOiArOC43NSxcbiAgICBcIkFEVFwiOiAtMyxcbiAgICBcIkFFRFRcIjogKzExLFxuICAgIFwiQUVTVFwiOiArMTAsXG4gICAgXCJBRlRcIjogKzQuNSxcbiAgICBcIkFLRFRcIjogLTgsXG4gICAgXCJBS1NUXCI6IC05LFxuICAgIFwiQU1TVFwiOiAtMyxcbiAgICBcIkFNVFwiOiAtNCxcbiAgICBcIkFNVFwiOiArNCxcbiAgICBcIkFSVFwiOiAtMyxcbiAgICBcIkFTVFwiOiArMyxcbiAgICBcIkFTVFwiOiAtNCxcbiAgICBcIkFXU1RcIjogKzgsXG4gICAgXCJBWk9TVFwiOiAwLFxuICAgIFwiQVpPVFwiOiAtMSxcbiAgICBcIkFaVFwiOiArNCxcbiAgICBcIkJEVFwiOiArOCxcbiAgICBcIkJJT1RcIjogKzYsXG4gICAgXCJCSVRcIjogLTEyLFxuICAgIFwiQk9UXCI6IC00LFxuICAgIFwiQlJTVFwiOiAtMixcbiAgICBcIkJSVFwiOiAtMyxcbiAgICBcIkJTVFwiOiArNixcbiAgICBcIkJTVFwiOiArMTEsXG4gICAgXCJCU1RcIjogKzEsXG4gICAgXCJCVFRcIjogKzYsXG4gICAgXCJDQVRcIjogKzIsXG4gICAgXCJDQ1RcIjogKzYuNSxcbiAgICBcIkNEVFwiOiAtNSxcbiAgICBcIkNEVFwiOiAtNCxcbiAgICBcIkNFU1RcIjogKzIsXG4gICAgXCJDRVRcIjogKzEsXG4gICAgXCJDSEFEVFwiOiArMTMuNzUsXG4gICAgXCJDSEFTVFwiOiArMTIuNzUsXG4gICAgXCJDSE9UXCI6ICs4LFxuICAgIFwiQ0hPU1RcIjogKzksXG4gICAgXCJDSFNUXCI6ICsxMCxcbiAgICBcIkNIVVRcIjogKzEwLFxuICAgIFwiQ0lTVFwiOiAtOCxcbiAgICBcIkNJVFwiOiArOCxcbiAgICBcIkNLVFwiOiAtMTAsXG4gICAgXCJDTFNUXCI6IC0zLFxuICAgIFwiQ0xUXCI6IC00LFxuICAgIFwiQ09TVFwiOiAtNCxcbiAgICBcIkNPVFwiOiAtNSxcbiAgICBcIkNTVFwiOiAtNixcbiAgICBcIkNTVFwiOiArOCxcbiAgICBcIkNTVFwiOiAtNSxcbiAgICBcIkNUXCI6ICs4LFxuICAgIFwiQ1ZUXCI6IC0xLFxuICAgIFwiQ1dTVFwiOiArOC43NSxcbiAgICBcIkNYVFwiOiArNyxcbiAgICBcIkRBVlRcIjogKzcsXG4gICAgXCJERFVUXCI6ICsxMCxcbiAgICBcIkRGVFwiOiArMSxcbiAgICBcIkVBU1NUXCI6IC01LFxuICAgIFwiRUFTVFwiOiAtNixcbiAgICBcIkVBVFwiOiArMyxcbiAgICBcIkVDVFwiOiAtNCxcbiAgICBcIkVDVFwiOiAtNSxcbiAgICBcIkVEVFwiOiAtNCxcbiAgICBcIkVFU1RcIjogKzMsXG4gICAgXCJFRVRcIjogKzIsXG4gICAgXCJFR1NUXCI6IDAsXG4gICAgXCJFR1RcIjogLTEsXG4gICAgXCJFSVRcIjogKzksXG4gICAgXCJFU1RcIjogLTUsXG4gICAgXCJGRVRcIjogKzMsXG4gICAgXCJGSlRcIjogKzEyLFxuICAgIFwiRktTVFwiOiAtMyxcbiAgICBcIkZLVFwiOiAtNCxcbiAgICBcIkZOVFwiOiAtMixcbiAgICBcIkdBTFRcIjogLTYsXG4gICAgXCJHQU1UXCI6IC05LFxuICAgIFwiR0VUXCI6ICs0LFxuICAgIFwiR0ZUXCI6IC0zLFxuICAgIFwiR0lMVFwiOiArMTIsXG4gICAgXCJHSVRcIjogLTksXG4gICAgXCJHTVRcIjogMCxcbiAgICBcIkdTVFwiOiAtMixcbiAgICBcIkdTVFwiOiArNCxcbiAgICBcIkdZVFwiOiAtNCxcbiAgICBcIkhEVFwiOiAtOSxcbiAgICBcIkhBRUNcIjogKzIsXG4gICAgXCJIU1RcIjogLTEwLFxuICAgIFwiSEtUXCI6ICs4LFxuICAgIFwiSE1UXCI6ICs1LFxuICAgIFwiSE9WU1RcIjogKzgsXG4gICAgXCJIT1ZUXCI6ICs3LFxuICAgIFwiSUNUXCI6ICs3LFxuICAgIFwiSURMV1wiOiAtMTIsXG4gICAgXCJJRFRcIjogKzMsXG4gICAgXCJJT1RcIjogKzMsXG4gICAgXCJJUkRUXCI6ICs0LjUsXG4gICAgXCJJUktUXCI6ICs4LFxuICAgIFwiSVJTVFwiOiArMy41LFxuICAgIFwiSVNUXCI6ICs1LjUsXG4gICAgXCJJU1RcIjogKzEsXG4gICAgXCJJU1RcIjogKzIsXG4gICAgXCJKU1RcIjogKzksXG4gICAgXCJLR1RcIjogKzYsXG4gICAgXCJLT1NUXCI6ICsxMSxcbiAgICBcIktSQVRcIjogKzcsXG4gICAgXCJLU1RcIjogKzksXG4gICAgXCJMSFNUXCI6ICsxMC41LFxuICAgIFwiTEhTVFwiOiArMTEsXG4gICAgXCJMSU5UXCI6ICsxNCxcbiAgICBcIk1BR1RcIjogKzEyLFxuICAgIFwiTUFSVFwiOiAtOS41LFxuICAgIFwiTUFXVFwiOiArNSxcbiAgICBcIk1EVFwiOiAtNixcbiAgICBcIk1FVFwiOiArMSxcbiAgICBcIk1FU1RcIjogKzIsXG4gICAgXCJNSFRcIjogKzEyLFxuICAgIFwiTUlTVFwiOiArMTEsXG4gICAgXCJNSVRcIjogLTkuNSxcbiAgICBcIk1NVFwiOiArNi41LFxuICAgIFwiTVNLXCI6ICszLFxuICAgIFwiTVNUXCI6ICs4LFxuICAgIFwiTVNUXCI6IC03LFxuICAgIFwiTVVUXCI6ICs0LFxuICAgIFwiTVZUXCI6ICs1LFxuICAgIFwiTVlUXCI6ICs4LFxuICAgIFwiTkNUXCI6ICsxMSxcbiAgICBcIk5EVFwiOiAtMi41LFxuICAgIFwiTkZUXCI6ICsxMSxcbiAgICBcIk5QVFwiOiArNS43NSxcbiAgICBcIk5TVFwiOiAtMy41LFxuICAgIFwiTlRcIjogLTMuNSxcbiAgICBcIk5VVFwiOiAtMTEsXG4gICAgXCJOWkRUXCI6ICsxMyxcbiAgICBcIk5aU1RcIjogKzEyLFxuICAgIFwiT01TVFwiOiArNixcbiAgICBcIk9SQVRcIjogKzUsXG4gICAgXCJQRFRcIjogLTcsXG4gICAgXCJQRVRcIjogLTUsXG4gICAgXCJQRVRUXCI6ICsxMixcbiAgICBcIlBHVFwiOiArMTAsXG4gICAgXCJQSE9UXCI6ICsxMyxcbiAgICBcIlBIVFwiOiArOCxcbiAgICBcIlBLVFwiOiArNSxcbiAgICBcIlBNRFRcIjogLTIsXG4gICAgXCJQTVNUXCI6IC0zLFxuICAgIFwiUE9OVFwiOiArMTEsXG4gICAgXCJQU1RcIjogLTgsXG4gICAgXCJQU1RcIjogKzgsXG4gICAgXCJQWVNUXCI6IC0zLFxuICAgIFwiUFlUXCI6IC00LFxuICAgIFwiUkVUXCI6ICs0LFxuICAgIFwiUk9UVFwiOiAtMyxcbiAgICBcIlNBS1RcIjogKzExLFxuICAgIFwiU0FNVFwiOiArNCxcbiAgICBcIlNBU1RcIjogKzIsXG4gICAgXCJTQlRcIjogKzExLFxuICAgIFwiU0NUXCI6ICs0LFxuICAgIFwiU0RUXCI6IC0xMCxcbiAgICBcIlNHVFwiOiArOCxcbiAgICBcIlNMU1RcIjogKzUuNSxcbiAgICBcIlNSRVRcIjogKzExLFxuICAgIFwiU1JUXCI6IC0zLFxuICAgIFwiU1NUXCI6IC0xMSxcbiAgICBcIlNTVFwiOiArOCxcbiAgICBcIlNZT1RcIjogKzMsXG4gICAgXCJUQUhUXCI6IC0xMCxcbiAgICBcIlRIQVwiOiArNyxcbiAgICBcIlRGVFwiOiArNSxcbiAgICBcIlRKVFwiOiArNSxcbiAgICBcIlRLVFwiOiArMTMsXG4gICAgXCJUTFRcIjogKzksXG4gICAgXCJUTVRcIjogKzUsXG4gICAgXCJUUlRcIjogKzMsXG4gICAgXCJUT1RcIjogKzEzLFxuICAgIFwiVFZUXCI6ICsxMixcbiAgICBcIlVMQVNUXCI6ICs5LFxuICAgIFwiVUxBVFwiOiArOCxcbiAgICBcIlVTWlwiOiArMixcbiAgICBcIlVUQ1wiOiAwLFxuICAgIFwiVVlTVFwiOiAtMixcbiAgICBcIlVZVFwiOiAtMyxcbiAgICBcIlVaVFwiOiArNSxcbiAgICBcIlZFVFwiOiAtNCxcbiAgICBcIlZMQVRcIjogKzEwLFxuICAgIFwiVk9MVFwiOiArNCxcbiAgICBcIlZPU1RcIjogKzYsXG4gICAgXCJWVVRcIjogKzExLFxuICAgIFwiV0FLVFwiOiArMTIsXG4gICAgXCJXQVNUXCI6ICsyLFxuICAgIFwiV0FUXCI6ICsxLFxuICAgIFwiV0VTVFwiOiArMSxcbiAgICBcIldFVFwiOiAwLFxuICAgIFwiV0lUXCI6ICs3LFxuICAgIFwiV1NUXCI6ICs4LFxuICAgIFwiWUFLVFwiOiArOSxcbiAgICBcIllFS1RcIjogKzUsXG4gICAgXCJaXCI6IDAsXG59O1xuXG5cbmlmKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHN0cnRpbWU7XG59ZWxzZSBpZih0eXBlb2Yod2luZG93KSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luZG93LnN0cnRpbWUgPSBzdHJ0aW1lO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzT2JqZWN0JztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9vYmplY3Qvc2VyaWFsaXplJztcbmltcG9ydCB0b1VuZGVyc2NvcmUgZnJvbSAnLi9zdHJpbmcvdG9VbmRlcnNjb3JlJztcblxuY29uc3QgeyBwYXJzZSwgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG4vKipcbiAqIE1ha2VzIGFuIEFKQVggcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIEFQSSBlbmRwb2ludC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsIC0gVGhlIFVSTCBvZiB0aGUgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyAtIFRoZSBzdWNjZXNzIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgLSBUaGUgZXJyb3IgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZS5cbiAqL1xuY29uc3QgYWpheCA9IChhcGlVcmwsIHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMsIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGNvbnN0IHhtbEh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgdXJsID0gbWV0aG9kID09PSAnR0VUJyAmJiBwYXJhbXMgPyBgJHthcGlVcmx9PyR7c2VyaWFsaXplKHBhcmFtcywgdG9VbmRlcnNjb3JlKX1gIDogYXBpVXJsO1xuICBjb25zdCBpc1N1Y2Nlc3MgPSAoc3RhdHVzKSA9PiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG4gIHhtbEh0dHAub3BlbihtZXRob2QsIHVybCk7XG4gIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicpO1xuXG4gIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGxldCByZXNwb25zZTtcblxuICAgIGlmICh4bWxIdHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIGlmIChpc1N1Y2Nlc3MoeG1sSHR0cC5zdGF0dXMpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBwYXJzZSh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhtbEh0dHA7XG4gICAgICAgIH1cblxuICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKHhtbEh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoaXNPYmplY3QocGFyYW1zKSAmJiBtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgeG1sSHR0cC5zZW5kKHN0cmluZ2lmeShwYXJhbXMpKTtcbiAgfSBlbHNlIHtcbiAgICB4bWxIdHRwLnNlbmQoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWpheDtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiIsImltcG9ydCB7IGdldFN5bWJvbEZyb21DdXJyZW5jeSB9IGZyb20gJ2N1cnJlbmN5LXN5bWJvbC1tYXAnO1xuXG5jb25zdCB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9ICgpID0+ICEhKHR5cGVvZiBJbnRsID09PSAnb2JqZWN0JyAmJiBJbnRsICYmIHR5cGVvZiBJbnRsLk51bWJlckZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbmN5Rm9ybWF0dGVyKFxuICB2YWx1ZSxcbiAgbGFuZyxcbiAgY3VycmVuY3ksXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDAsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IDMsXG4pIHtcbiAgaWYgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkgJiYgY3VycmVuY3kpIHtcbiAgICBjb25zdCBpc0RvbGxhciA9ICgpID0+IGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkgPT09ICckJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogaXNEb2xsYXIgPyAnc3ltYm9sJyA6ICdjb2RlJyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICB9O1xuXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0ciA9IG51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpO1xuXG4gICAgaWYgKGlzRG9sbGFyIHx8ICFnZXRTeW1ib2xGcm9tQ3VycmVuY3koY3VycmVuY3kpKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY3VycmVuY3ksIGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IGN1cnJlbmN5Rm9ybWF0dGVyIGZyb20gJy4vY3VycmVuY3lGb3JtYXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW5jeUZvcm1hdHRlcjtcbiIsImltcG9ydCBtb250aExlbmd0aCBmcm9tICcuL21vbnRoTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQgbW9udGhMZW5ndGg7XG4iLCIvLyBEYXRlIHV0aWxzXG5jb25zdCBkYXlzSW5Nb250aCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmNvbnN0IGlzTGVhcFllYXIgPSAoeWVhcikgPT4gKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKSB7XG4gIGxldCBkYXlzID0gZGF5c0luTW9udGhbbW9udGhdO1xuICBpZiAobW9udGggPT09IDEgJiYgaXNMZWFwWWVhcih5ZWFyKSkge1xuICAgIGRheXMgPSAyOTtcbiAgfVxuXG4gIHJldHVybiBkYXlzO1xufVxuIiwiaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJy4vcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHNldENsYXNzTmFtZSBmcm9tICcuL3NldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgbmFtZSk7XG4gICAgY29uc3QgY2xzID0gYCR7Z2V0Q2xhc3NOYW1lKGVsKX0gJHtuYW1lLmpvaW4oJyAnKX1gO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xzKTtcbiAgfVxufVxuIiwiY29uc3QgeyBrZXlzIH0gPSBPYmplY3Q7XG5cbi8qKlxuICogQ3JlYXRlIEhUTUxFbGVtZW50IHdpdGggYXR0cmlidXRlc1xuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEBwYXJhbSBhdHRycyB7T2JqZWN0fVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IHBhcmFtcyA9IGF0dHJzIHx8IHt9O1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcblxuICBrZXlzKHBhcmFtcykubWFwKChpKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShpLCBwYXJhbXNbaV0pKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyaW5nO1xuXG4gIHJldHVybiBlbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEJ5Q2xhc3NOYW1lKGNvbnRleHQsIG5hbWUpIHtcbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShlbCkge1xuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcbiAgLy8gY29tcGxldGVseSBzZXBhcmF0ZWx5IFNWR0FuaW1hdGVkU3RyaW5nIGJhc2UgY2xhc3Nlc1xuICBpZiAoZWwuY2xhc3NOYW1lIGluc3RhbmNlb2YgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdBbmltYXRlZFN0cmluZykge1xuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgfVxuICByZXR1cm4gZWwuY2xhc3NOYW1lO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbi8qKlxuICogRmluZCBIVE1MRWxlbWVudCBhdHRyaWJ1dGUsIGluIHRoZSBkb20tdHJlZSwgYnViYmxlcyB1cFxuICogQHBhcmFtIGVsIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBhdHRyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRBdHRyaWJ1dGUoZWwsIGF0dHIpIHtcbiAgcmV0dXJuIHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlbCwgYXR0cikudmFsdWU7XG59XG4iLCJpbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChefCApJHtuYW1lfSggfCQpYCwgJ2dpJykudGVzdChjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vYWRkQ2xhc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBkZXN0cm95RWxlbWVudCBmcm9tICcuL2Rlc3Ryb3lFbGVtZW50JztcbmltcG9ydCBlbGVtZW50RnJvbVN0cmluZyBmcm9tICcuL2VsZW1lbnRGcm9tU3RyaW5nJztcbmltcG9ydCBmaW5kQnlDbGFzc05hbWUgZnJvbSAnLi9maW5kQnlDbGFzc05hbWUnO1xuaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0UGFyZW50QXR0cmlidXRlIGZyb20gJy4vZ2V0UGFyZW50QXR0cmlidXRlJztcbmltcG9ydCBoYXNDbGFzcyBmcm9tICcuL2hhc0NsYXNzJztcbmltcG9ydCBpc0luc2lkZSBmcm9tICcuL2lzSW5zaWRlJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICcuL3JlbW92ZUNsYXNzJztcbmltcG9ydCBzZXRDbGFzc05hbWUgZnJvbSAnLi9zZXRDbGFzc05hbWUnO1xuaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59O1xuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuLyoqXG4gKiBDaGVjayBpZiBzb21lIEhUTUxFbGVtZW50IGlzIGluc2lkZSBhbm90aGVyIG9uZVxuICogQHBhcmFtIGNoaWxkIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBwYXJlbnQge0hUTUxFbGVtZW50fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSW5zaWRlKGNoaWxkLCBwYXJlbnQpIHtcbiAgbGV0IGN1cnJlbnQgPSBjaGlsZDtcblxuICB3aGlsZSAoY3VycmVudCAhPT0gcGFyZW50KSB7XG4gICAgaWYgKCFpcyhjdXJyZW50KSB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdCT0RZJyB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgc2V0Q2xhc3NOYW1lIGZyb20gJy4vc2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYChefCApJHtuYW1lLmpvaW4oJ3wnKX0oIHwkKWAsICdnaScpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudDtcbiAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgd2hpbGUgKCFpcyh2YWx1ZSkpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50ICYmIHR5cGVvZiBwYXJlbnQuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIHBhcmVudCxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzIHx8IHt9O1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oLi4uYXJncykge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZuLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGxldCBsaXN0ZW5lcnM7XG5cbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF07XG5cbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChmbiwgaSkgPT4ge1xuICAgICAgICBpZiAoZm4gPT09IGxpc3RlbmVyIHx8IGZuLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgbGlzdGVuZXJzO1xuXG4gICAgaWYgKHRoaXMuZXZlbnRzICYmIHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgbGlzdGVuZXJzID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuXG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm4pID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGYpIHtcbiAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgY3VycmVuY3lGb3JtYXR0ZXIgZnJvbSAnLi9jdXJyZW5jeSc7XG5pbXBvcnQgbW9udGhMZW5ndGggZnJvbSAnLi9kYXRlJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgbWF0aCBmcm9tICcuL21hdGgnO1xuaW1wb3J0IG9iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuaW1wb3J0IGFqYXggZnJvbSAnLi9hamF4JztcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQgaXMgZnJvbSAnLi9pcyc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59ID0gZG9tO1xuXG5jb25zdCB7IGlzTmFOUG9seWZpbGwsIGlzTnVtZXJpYyB9ID0gbWF0aDtcblxuY29uc3Qge1xuICBjYXBpdGFsaXplT2JqLFxuICBpc09iamVjdCxcbiAgbWVyZ2UsXG4gIHBpY2ssXG4gIHNlcmlhbGl6ZSxcbiAgdHJhdmVyc2VPYmosXG59ID0gb2JqZWN0O1xuXG5jb25zdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59ID0gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGlzQXJyYXksXG4gIC8vIGN1cnJlbmN5XG4gIGN1cnJlbmN5Rm9ybWF0dGVyLFxuICAvLyBkYXRlXG4gIG1vbnRoTGVuZ3RoLFxuICAvLyBkb21cbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG4gIC8vIGZ1bmN0aW9uXG4gIGlzRnVuY3Rpb24sXG4gIC8vIG1hdGhcbiAgaXNOYU5Qb2x5ZmlsbCxcbiAgaXNOdW1lcmljLFxuICAvLyBvYmplY3RcbiAgY2FwaXRhbGl6ZU9iaixcbiAgaXNPYmplY3QsXG4gIG1lcmdlLFxuICBwaWNrLFxuICBzZXJpYWxpemUsXG4gIHRyYXZlcnNlT2JqLFxuICAvLyBzdHJpbmdcbiAgZGFzaFRvQ2FwaXRhbCxcbiAgaXNTdHJpbmcsXG4gIHRvVW5kZXJzY29yZSxcbiAgdW5kZXJzY29yZVRvQ2FwaXRhbCxcbiAgLy8gYWpheFxuICBhamF4LFxuICAvLyBlbWl0dGVyXG4gIEVtaXR0ZXIsXG4gIC8vIGlzXG4gIGlzLFxuICAvLyB2YWxpZGF0ZVxuICB2YWxpZGF0ZSxcbn07XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL21hdGgvaXNOYU5Qb2x5ZmlsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvICE9PSAndW5kZWZpbmVkJyAmJiBvICE9PSBudWxsICYmICFpc05hTlBvbHlmaWxsKG8pO1xufVxuIiwiaW1wb3J0IGlzTmFOUG9seWZpbGwgZnJvbSAnLi9pc05hTlBvbHlmaWxsJztcbmltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzTmFOUG9seWZpbGwsXG4gIGlzTnVtZXJpYyxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hTlBvbHlmaWxsKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSk7XG59XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL2lzTmFOUG9seWZpbGwnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiAhaXNBcnJheShuKSAmJiAhaXNOYU5Qb2x5ZmlsbChwYXJzZUludChuLCAxMCkpO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuaW1wb3J0IGRhc2hUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IHVuZGVyc2NvcmVUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplT2JqKG9iaikge1xuICBjb25zdCBvYmplY3QgPSB0cmF2ZXJzZU9iaihvYmosIGRhc2hUb0NhcGl0YWwpO1xuICBjb25zdCBuZXdPYmogPSB0cmF2ZXJzZU9iaihvYmplY3QsIHVuZGVyc2NvcmVUb0NhcGl0YWwpO1xuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJpbXBvcnQgY2FwaXRhbGl6ZU9iaiBmcm9tICcuL2NhcGl0YWxpemVPYmonO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi9waWNrJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhcGl0YWxpemVPYmosXG4gIGlzT2JqZWN0LFxuICBtZXJnZSxcbiAgcGljayxcbiAgc2VyaWFsaXplLFxuICB0cmF2ZXJzZU9iaixcbn07XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBNZXJnZSB0d28gb2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IG9iajFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVlcFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMiwgaXNEZWVwKSB7XG4gIGNvbnN0IG9iajMgPSB7fTtcbiAga2V5cyhvYmoxKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGlzRGVlcCAmJiBpc09iamVjdChvYmoxW2ldKSkge1xuICAgICAgb2JqM1tpXSA9IG1lcmdlKG9iajFbaV0sIHt9LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqM1tpXSA9IG9iajFbaV07XG4gICAgfVxuICB9KTtcblxuICBrZXlzKG9iajIpLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajJbaV0pKSB7XG4gICAgICBvYmozW2ldID0gbWVyZ2Uob2JqM1tpXSB8fCB7fSwgb2JqMltpXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iajNbaV0gPSBvYmoyW2ldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmozO1xufVxuIiwiLyoqXG4gKiBQaWNrIHByb3BlcnRpZXMgZnJvbSBvYmplY3RcbiAqIGxldCBhID0geyBuYW1lOiBcIlJvbWFuXCIsIHBob25lOiAxMjMsIGNvdW50cnk6IFwiYW55XCIgfTtcbiAqIHBpY2soYSwgJ25hbWUnLCAnY291bnRyeScpXG4gKiA9PiB7IG5hbWU6IFwiUm9tYW5cIiwgY291bnRyeTogXCJhbnlcIiB9XG4gKlxuICogQHBhcmFtIG9iaiB7T2JqZWN0fVxuICogQHBhcmFtIGFyZ3Mge1N0cmluZ31cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2sob2JqLCAuLi5hcmdzKSB7XG4gIHJldHVybiBhcmdzLnJlZHVjZSgoaSwgdCkgPT4ge1xuICAgIGNvbnN0IHBpY2tlZE9iaiA9IGk7XG5cbiAgICBwaWNrZWRPYmpbdF0gPSBvYmpbdF07XG5cbiAgICByZXR1cm4gcGlja2VkT2JqO1xuICB9LCB7fSk7XG59XG4iLCJjb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VyaWFsaXplKG9iaiwgdHJhbnNmb3JtKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGtleXMob2JqKS5tYXAoKHApID0+IGAke3RyYW5zZm9ybShlbmNvZGVVUklDb21wb25lbnQocCkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pfWApO1xuICByZXR1cm4gY29tcG9uZW50LmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzQXJyYXknO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBvYmplY3Qgb3duIHByb3BlcnRpZXMgYW5kIGFwcGx5IHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBrZXlzIG9yIHZhbHVlc1xuICogbGV0IGEgPSB7IGxhc3ROYW1lOiBcIlJvbWFuXCIsIGZpcnN0TmFtZTogXCJLaHVkeWFrb3ZcIiB9XG4gKiB0cmF2ZXJzZU9iaihhLCB0b1VuZGVyc2NvcmUpXG4gKiA9PiB7IGxhc3RfbmFtZTogXCJSb21hblwiLCBmaXJzdF9uYW1lOiBcIktodWR5YWtvdlwiIH1cbiAqXG4gKiBAcGFyYW0gb2JqIHtPYmplY3R9XG4gKiBAcGFyYW0gZm5LZXkge0Z1bmN0aW9uIHwgQm9vbGVhbn1cbiAqIEBwYXJhbSBmblZhbHVlIHtGdW5jdGlvbiB8IEJvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXZlcnNlT2JqKG9iaiwgZm5LZXkgPSBmYWxzZSwgZm5WYWx1ZSA9IGZhbHNlKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcblxuICByZXR1cm4ga2V5cyhvYmopLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4ge1xuICAgIGxldCBuZXh0UHJvcGVydHkgPSBvYmpbbmV4dF07XG4gICAgY29uc3QgbyA9IGN1cnI7XG5cbiAgICBpZiAoaXNBcnJheShuZXh0UHJvcGVydHkpKSB7XG4gICAgICBuZXh0UHJvcGVydHkgPSBuZXh0UHJvcGVydHkubWFwKChpKSA9PiB0cmF2ZXJzZU9iaihpLCBmbktleSwgZm5WYWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChmblZhbHVlKSB7XG4gICAgICBvW2ZuS2V5ID8gZm5LZXkobmV4dCkgOiBuZXh0XSA9IGlzT2JqZWN0KG5leHRQcm9wZXJ0eSlcbiAgICAgICAgPyB0cmF2ZXJzZU9iaihuZXh0UHJvcGVydHksIGZuS2V5LCBmblZhbHVlKSA6IGZuVmFsdWUobmV4dFByb3BlcnR5LCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb1tmbktleSA/IGZuS2V5KG5leHQpIDogbmV4dF0gPSBpc09iamVjdChuZXh0UHJvcGVydHkpXG4gICAgICAgID8gdHJhdmVyc2VPYmoobmV4dFByb3BlcnR5LCBmbktleSkgOiBuZXh0UHJvcGVydHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG87XG4gIH0sIHt9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hUb0NhcGl0YWwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvaWcsIChtYXRjaCwgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG59XG4iLCJpbXBvcnQgZGFzaFRvQ2FwaXRhbCBmcm9tICcuL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmcnO1xuaW1wb3J0IHRvVW5kZXJzY29yZSBmcm9tICcuL3RvVW5kZXJzY29yZSc7XG5pbXBvcnQgdW5kZXJzY29yZVRvQ2FwaXRhbCBmcm9tICcuL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdzdHJpbmcnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VbmRlcnNjb3JlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKHMpID0+IGBfJHtzLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmRlcnNjb3JlVG9DYXBpdGFsKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL18oW2Etel0pL2lnLCAobWF0Y2gsIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4vaXMnO1xuaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL21hdGgvaXNOdW1lcmljJztcblxuLy8gVmFsaWRhdGlvbnNcbmNvbnN0IHZhbGlkYXRlID0ge1xuICBpc0JsYW5rKG8pIHtcbiAgICByZXR1cm4gaXMobyk7XG4gIH0sXG4gIGlzTnVtZXJpYyhvKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyhvKTtcbiAgfSxcbiAgaXNFbWFpbChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBpcyhvLm1hdGNoKC9eW15AXFxzXStAKFteQFxcc10rXFwuKStbXkBcXFddKyQvKSk7XG4gIH0sXG4gIGlzQm91bmRlZEJ5KG8sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvID49IG1pbiAmJiBvIDw9IG1heDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ3dpZGdldC11dGlscyc7XG5jb25zdCB7IGlzLCBtZXJnZSwgbW9udGhMZW5ndGgsIGlzU3RyaW5nIH0gPSB1dGlscztcblxuLyoqXG4gKiAgcGxlYXNlIHJlZmVyIHRvIC90ZXN0cy91bml0L2NhbGVuZGFyVHJlZS5zcGVjcy5qcyBmb3IgdXNhZ2VcbiAqICBUT0RPIGRvY3MsIG1lcmdlIGF2YWlsYWJpbGl0eSB3aXRoIGNhbGVuZGFyIHRyZWUsIHVzZSBvbmUgZGF0YS1zdHJ1Y3R1cmVcbiAqICBUT0RPIG1pblN0YXkgKyBhdmFpbGFiaWxpdHkgbWFwIGNvbnNpZGVyYXRpb25zIGZvIGRpc2FibGluZyBkYXRlc1xuICovXG5jb25zdCBnZW5BcnJheVJhbmdlID0gKGEsIGIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gYTsgaSA8PSBiOyBpICs9IDEpIHtcbiAgICBsaXN0LnB1c2goaSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBwYXJzZUlTT1N0cmluZyA9IChzdHIgLyogeXl5eS1tbS1kZCAqLykgPT4ge1xuICBjb25zdCBhcnJTdHIgPSBzdHIuc3BsaXQoJy0nKS5tYXAocGFyc2VGbG9hdCk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogYXJyU3RyWzBdLFxuICAgIG1vbnRoOiBhcnJTdHJbMV0gLSAxLFxuICAgIGRhdGU6IGFyclN0clsyXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJUcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRlQ2VsbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsaWRhdGVDZWxsLCB0cmVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUNlbGwgPSB2YWxpZGF0ZUNlbGw7XG4gICAgdGhpcy50cmVlICAgICAgICAgPSB0cmVlO1xuICB9XG5cbiAgYWRkVHJlZShvYmopIHtcbiAgICBpZiAoIXRoaXMudHJlZSkge1xuICAgICAgdGhpcy50cmVlID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyZWUgPSBtZXJnZSh0aGlzLnRyZWUgfHwge30sIG9iaiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCByYW5nZSBmcm9tIHRoZSB0cmVlLCByZXR1cm5zIGFycmF5IGl0ZW1zXG4gICAqIHN0YXJ0IGRhdGUgaXMgQUxXQVlTIDwgdGhlbiBlbmQgZGF0ZSAsIGFzIHdlIGFyZSBzZWxlY3RpbmcgdGltZSByYW5nZSBpbiBkYXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFydCBlLmcuIFsyMDE2LCAwLCAxXVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbmQgWzIwMTYsIDEsIDNdXG4gICAqIEByZXR1cm5zIHt7cmFuZ2U6IEFycmF5LCBpc1ZhbGlkOiB7Qm9vbGVhbn19fVxuICAgKi9cbiAgc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGxldCByYW5nZSA9IFtdO1xuXG4gICAgY29uc3QgYSA9IHN0YXJ0LnNsaWNlKCk7XG5cbiAgICAvLyBpZiB5ZWFyIGFuZCBtb250aCB0aGUgc2FtZSwganVzdCBzbGljZSB0aGUgY3VycmVudCBtb250aFxuICAgIGlmIChhWzBdID09PSBlbmRbMF0gJiYgYVsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICByYW5nZSA9IHRoaXMuc2VsZWN0RGF5c0luTW9udGgoYVswXSwgYVsxXSwgYVsyXSwgZW5kWzJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGhEYXlzID0gdGhpcy50cmVlW2FbMF1dW2FbMV1dO1xuXG4gICAgICAvLyBzbGljZSB0aGUgcGllY2Ugb2YgY3VycmVudCBtb250aERheXMgZnJvbSBzdGFydCBvZiByYW5nZSB0aWxsIGVuZCBvZiB0aGUgbW9udGhEYXlzXG4gICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdERheXNJbk1vbnRoKGFbMF0sIGFbMV0sIGFbMl0sIG1vbnRoRGF5cy5sZW5ndGgpKTtcblxuICAgICAgLy8gc2hpZnQgc3RhcnQgbW9udGgsIGIvYyB3ZSBhbHJlYWR5IHNlbGVjdGVkIGRheXMgaW4gaXRcbiAgICAgIGFbMV0gKz0gMTtcblxuICAgICAgLy8gaWYgZW5kIGRhdGUgeWVhciA+IHN0YXJ0IGRhdGVcbiAgICAgIC8vIHNlbGVjdCBldmVyeXRoaW5nIGluIHN0YXJ0IHllYXIgdGlsbCB0aGUgZW5kIG9mIHN0YXJ0IHllYXJcbiAgICAgIC8vIGUuZy4gc3RhcnQgaXMgMjAgT2N0b2Jlciwgc28gc2VsZWN0IE5vdmVtYmVyIGFuZCBEZWNlbWJlciwgT2N0b2JlciB3YXMgc2VsZWN0ZWQgYWJvdmVcbiAgICAgIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdE1vbnRoc0luWWVhcihhWzBdLCBhWzFdLCAxMSkpO1xuICAgICAgICAvLyBhbmQgc2V0IHN0YXJ0IHllYXIgdG8gZW5kIHllYXJcbiAgICAgICAgLy8gbW9udGggdG8gMCAoSmFudWFyeSlcbiAgICAgICAgW2FbMF0sIGFbMV1dID0gW2VuZFswXSwgMF07XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB3ZSBhcmUgYXQgdGhlIHNhbWUgeWVhciBhbmQgaGF2ZSB0aGUgY2FzZSBpZiBlbmQgbW9udGggPiBzdGFydCBtb250aFxuICAgICAgLy8gdGhlbiBzZWxlY3QgZXZlcnl0aGluZyBiZXR3ZWVuIHRob3NlIG1vbnRoc1xuICAgICAgaWYgKGVuZFsxXSA+IGFbMV0pIHtcbiAgICAgICAgLy8gZS5nLiBzdGFydCAyMCBPY3RvYmVyIGVuZCAyMCBEZWNlbWJlciwgc2VsZWN0IGZ1bGwgTm92ZW1iZXJcbiAgICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3RNb250aHNJblllYXIoYVswXSwgYVsxXSwgZW5kWzFdIC0gMSkpO1xuICAgICAgICBhWzFdID0gZW5kO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbWlzc2luZyBwYXJ0IGlzIGRheXMgaW4gZW5kIHNlbGVjdGlvbiBtb250aFxuICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aChlbmRbMF0sIGVuZFsxXSwgMSwgZW5kWzJdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmdlLFxuICAgICAgaXNWYWxpZDogdGhpcy5pc1JhbmdlVmFsaWQocmFuZ2UpXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdE1vbnRoc0luWWVhcih5ZWFyLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IHNlbGVjdGlvbiAgICA9IFtdO1xuICAgIGNvbnN0IG1vbnRoUmFuZ2UgPSBnZW5BcnJheVJhbmdlKHN0YXJ0LCBlbmQpO1xuXG4gICAgbW9udGhSYW5nZS5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgICAgY29uc3QgeSA9IHRoaXMudHJlZVt5ZWFyXTtcbiAgICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgICBpZiAoeSAmJiBtKSB7XG4gICAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvbi5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgMSwgbS5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgc3RhcnREYXksIGVuZERheSkge1xuICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XG4gICAgY29uc3QgbSA9IGlzKHkpID8gdGhpcy50cmVlW3llYXJdW21vbnRoXSA6IG51bGw7XG5cbiAgICBpZiAoeSAmJiBtKSB7XG4gICAgICByZXR1cm4gbS5zbGljZSgoc3RhcnREYXkgLSAxKSwgZW5kRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2VsZWN0RGF5KHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICBjb25zdCB5ID0gdGhpcy50cmVlW3llYXJdO1xuICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgaWYgKHkgJiYgbSkge1xuICAgICAgcmV0dXJuIG1bZGF5IC0gMV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNSYW5nZVZhbGlkKHJhbmdlLCBmbikge1xuICAgIGNvbnN0IHZhbGlkYXRlQ2VsbCA9IHRoaXMudmFsaWRhdGVDZWxsIHx8IGZuO1xuICAgIGxldCBpc1ZhbGlkICAgICAgICA9IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRlQ2VsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyVmFsaWRzID0gcmFuZ2UuZmlsdGVyKChjZWxsKSA9PiB0aGlzLnZhbGlkYXRlQ2VsbChjZWxsKSk7XG4gICAgICBpc1ZhbGlkID0gZmlsdGVyVmFsaWRzLmxlbmd0aCA9PSByYW5nZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICByZXBsYWNlTWFwcyhtYXAsIHVwZGF0ZWRBdCkge1xuICAgIHRoaXMubWFwID0gQ2FsZW5kYXJUcmVlLm1hcHNUb1RyZWUobWFwLCB1cGRhdGVkQXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTWFwKCkge1xuICAgIHRoaXMubWFwID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogIENyZWF0ZSBhIHRyZWUgc3RydWN0dXJlIGZyb20gbWFwc1xuICAgKiAgZm9yIG4tdGltZSBkYXkgYWNjZXNzLCBlLmcuIHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldLmlzQXZhaWxhYmxlO1xuICAgKiB7XG4gICAqICAgMjEwNjoge1xuICAgKiAgICAgIDE6IHtcbiAgICogICAgICAgIDE6ICxcbiAgICogICAgICAgIDI6ICxcbiAgICogICAgICAgIDM6XG4gICAqICAgICAgICAuLi5cbiAgICogICAgICB9XG4gICAqICAgICAgLi4uXG4gICAqICAgICAgMTI6IHtcbiAgICpcbiAgICogICAgICB9XG4gICAqICAgIH1cbiAgICogfVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwc1xuICAgKiBAcGFyYW0ge1N0cmluZyB8IERhdGV9IG1hcFN0YXJ0QXRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBtYXBzVG9UcmVlKG1hcHMsIG1hcFN0YXJ0QXQpIHtcbiAgICBpZiAoIShpc1N0cmluZyhtYXBzLmF2YWlsYWJpbGl0eSlcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubmlnaHRseV9yYXRlcylcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubWluaW11bV9zdGF5cykpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbCAgPSBtYXBzLmF2YWlsYWJpbGl0eS5zcGxpdCgnJykubWFwKHBhcnNlRmxvYXQpO1xuICAgIGNvbnN0IHJhdGVzICA9IG1hcHMubmlnaHRseV9yYXRlcy5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBjb25zdCBtaW5NYXAgPSBtYXBzLm1pbmltdW1fc3RheXMuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgbGV0IGRheSAgICAgID0gMTtcblxuICAgIGxldCB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXRlOiBkYXlTaGlmdFxuICAgIH0gPSBwYXJzZUlTT1N0cmluZyhtYXBTdGFydEF0KTtcblxuICAgIC8vIHRyaWNrIHRvIGFkZCBleHRyYSB1bmF2YWlsYWJsZSBkYXRlIGZvciBwcm9wZXIgY2FsY3VsYXRpb25zIG9mIGNoZWNrLW91dCBkYXRlc1xuICAgIGlmIChhdmFpbFthdmFpbC5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgYXZhaWwucHVzaCgxKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNEYXRlID0ge307XG5cbiAgICByZXR1cm4gYXZhaWwucmVkdWNlKChjdXJyLCBzdGF0ZSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoICAgICAgICAgICA9IG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKTtcbiAgICAgIGNvbnN0IHRyZWUgICAgICAgICAgICAgPSBjdXJyO1xuICAgICAgY29uc3QgbWluU3RheSAgICAgICAgICA9IG1pbk1hcFtpbmRleF07XG4gICAgICBjb25zdCByYXRlICAgICAgICAgICAgID0gcmF0ZXNbaW5kZXhdO1xuICAgICAgY29uc3QgaXNBdmFpbGFibGUgICAgICA9IHN0YXRlID09PSAwO1xuICAgICAgY29uc3QgcHJldkF2YWlsYWJsZSAgICA9IGFycltpbmRleCAtIDFdID09PSAwO1xuICAgICAgY29uc3QgaXNNb3JuaW5nQmxvY2tlZCA9IChpc0F2YWlsYWJsZSAmJiAhcHJldkF2YWlsYWJsZSkgPyB0cnVlIDogbnVsbDtcbiAgICAgIGNvbnN0IGlzQXZhaWxhYmxlT3V0ICAgPSAoaXNNb3JuaW5nQmxvY2tlZCkgPyB0cnVlIDogbnVsbDtcblxuICAgICAgaWYgKCF0cmVlW3llYXJdKSB7XG4gICAgICAgIHRyZWVbeWVhcl0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmVlW3llYXJdW21vbnRoXSkge1xuICAgICAgICB0cmVlW3llYXJdW21vbnRoXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5U2hpZnQpIHtcbiAgICAgICAgZGF5ICAgICAgPSBkYXlTaGlmdDtcbiAgICAgICAgZGF5U2hpZnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBtaW5TdGF5ID4gYXZhaWxhYmxlIGRheXMgaW4gZnV0dXJlXG4gICAgICAvLyBjb25zaWRlciBjdXJyZW50IGRheSBhcyB1bmF2YWlsYWJsZSBhcyB3ZWxsXG4gICAgICAvLyBpZiAoaXNBdmFpbGFibGUgJiYgbWluU3RheSA+IDEpIHtcbiAgICAgIC8vICAgbGV0IGRheXNBdmFpbGFibGUgPSAxO1xuICAgICAgLy8gICBsZXQgaSAgICAgICAgICAgICA9IGluZGV4ICsgMTtcbiAgICAgIC8vICAgd2hpbGUgKGFycltpXSA9PT0gMCkge1xuICAgICAgLy8gICAgIGRheXNBdmFpbGFibGUgKz0gMTtcbiAgICAgIC8vICAgICBpICs9IDE7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vXG4gICAgICAvLyAgIGlmIChtaW5TdGF5ID4gZGF5c0F2YWlsYWJsZSkge1xuICAgICAgLy8gICAgIGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgdHJlZVt5ZWFyXVttb250aF1bZGF5XSA9IHtcbiAgICAgICAgcmF0ZSxcbiAgICAgICAgbWluU3RheSxcbiAgICAgICAgaXNBdmFpbGFibGUsXG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQsXG4gICAgICAgIGlzQXZhaWxhYmxlT3V0XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAocHJldkF2YWlsYWJsZSAmJiAhaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICB0cmVlW3ByZXZpb3VzRGF0ZS55ZWFyXVtwcmV2aW91c0RhdGUubW9udGhdW3ByZXZpb3VzRGF0ZS5kYXldLmlzQXZhaWxhYmxlT3V0ID0gdHJ1ZTtcbiAgICAgICAgICB0cmVlW3llYXJdW21vbnRoXVtkYXldLmlzTW9ybmluZ0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIC8vIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzRGF0ZSA9IHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheVxuICAgICAgfTtcblxuICAgICAgaWYgKGRheSA8IGxlbmd0aCkge1xuICAgICAgICBkYXkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtb250aCA+IDEwKSB7XG4gICAgICAgICAgbW9udGggPSAwO1xuICAgICAgICAgIHllYXIgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb250aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGRheSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXksIHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGF5RGF0YSA9IHRoaXMuZ2V0RGF5KHllYXIsIG1vbnRoLCBkYXkpO1xuICAgIHJldHVybiBkYXlEYXRhID8gZGF5RGF0YVtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXREYXkoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXJEYXRhID0gdGhpcy5tYXBbeWVhcl07XG4gICAgaWYgKCF5ZWFyRGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhEYXRhID0geWVhckRhdGFbbW9udGhdO1xuICAgIGlmICghbW9udGhEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhEYXRhW2RheV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlzRGF5RGlzYWJsZWQoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGNvbnN0IGRheURhdGEgPSB0aGlzLmdldERheSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICByZXR1cm4gIShkYXlEYXRhICYmIGRheURhdGEuaXNBdmFpbGFibGUpO1xuICB9XG59XG4iLCIvKiBnbG9iYWwgTm9kZSwgZG9jdW1lbnQsIHdpbmRvdywgY29uc29sZSwgcmVxdWlyZSwgZmV0Y2gsIHNldFRpbWVvdXQgKi9cbmltcG9ydCB1dGlscyBmcm9tICd3aWRnZXQtdXRpbHMnO1xuXG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IENhbGVuZGFyVHJlZSBmcm9tICcuL2NhbGVuZGFyLXRyZWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuL2xvY2FsZXMnO1xuaW1wb3J0IGNyZWF0ZVBvc2l0aW9uZXIgZnJvbSAnLi9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IHN0cmZ0aW1lIH0gZnJvbSAnc3RydGltZSc7XG5cbmltcG9ydCB7XG4gIGRhdGVUb0lzbywgaXNMYXRlciwgaXNDdXJyZW50LCB2YWxpZGF0aW9uT2ZDZWxsLCB0Rm9ybWF0dGVyLCBkYXRlVG9BcnJheSwgbW9udGhEaWZmXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnO1xuXG5pbXBvcnQgdXRpbHNTdHlsZXMgZnJvbSAnd2lkZ2V0LXV0aWxzL3NyYy9zdHlsZXMvcmVzZXQuc2Nzcyc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgaXNBcnJheSwgaXNPYmplY3QsIEVtaXR0ZXIsXG4gIG1lcmdlLCBlbGVtZW50RnJvbVN0cmluZywgdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyLCBkZXN0cm95RWxlbWVudCwgbW9udGhMZW5ndGgsIGlzLCBpc0Z1bmN0aW9uLFxuICBpc051bWVyaWMsIHRyYXZlcnNlT2JqLCBpc0luc2lkZSwgY3VycmVuY3lGb3JtYXR0ZXJcbn0gPSB1dGlscztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgRW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMsIG1hcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSAgICA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuVkVSU0lPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4gICAgdGhpcy5DU1NfUFJFRklYID0gY29uZmlnLmNzc1ByZWZpeDtcblxuICAgIGlmIChpc09iamVjdChvcHRzKSkge1xuICAgICAgaWYgKCFvcHRzLmVsKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyKCdlbCBtdXN0IGJlIEhUTUwgZWxlbWVudCcsICdlcnJvcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbmZpZ0RhdGFzZXQgPSBtZXJnZShjb25maWcsIG9wdHMuZWwuZGF0YXNldCk7XG4gICAgICB0aGlzLm9wdHMgICAgICAgICAgID0gbWVyZ2UoY29uZmlnRGF0YXNldCwgb3B0cyk7XG5cbiAgICAgIHRoaXMub3B0cyA9IHRyYXZlcnNlT2JqKHRoaXMub3B0cywgKGEpID0+IGEsIChiKSA9PiB7XG4gICAgICAgIGlmIChiID09PSAndHJ1ZScgfHwgYiA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJldHVybiAoYiA9PT0gJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1lcmljKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9wdHMubGFuZyAgICAgICAgPSAodGhpcy5vcHRzLmxhbmcgJiYgdGhpcy5vcHRzLmxhbmcgaW4gbG9jYWxlcykgPyB0aGlzLm9wdHMubGFuZyA6ICdlbi1VUyc7XG4gICAgICB0aGlzLmxvY2FsZSAgICAgICAgICAgPSBsb2NhbGVzW3RoaXMub3B0cy5sYW5nXTtcbiAgICAgIHRoaXMuZm9ybWF0ICAgICAgICAgICA9IHRoaXMub3B0cy5mb3JtYXREYXRlIHx8IHRoaXMubG9jYWxlLmZvcm1hdERhdGUgfHwgJyVtLyVkLyVZJztcbiAgICAgIHRoaXMub3B0cy5zdGFydE9mV2VlayA9IHRoaXMub3B0cy5zdGFydE9mV2VlayB8fCB0aGlzLmxvY2FsZS5zdGFydE9mV2VlaztcblxuICAgICAgbGV0IHsgY3VycmVudERhdGUgfSA9IHRoaXMub3B0cztcbiAgICAgIGNvbnN0IHllYXIgID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGRheSAgID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICB0aGlzLm9wdHMuY3VycmVudERhdGUgPSBbeWVhciwgbW9udGgsIGRheV07XG5cbiAgICAgIGlmICghdGhpcy5vcHRzLnllYXJTdGFydCkge1xuICAgICAgICB0aGlzLm9wdHMueWVhclN0YXJ0ID0geWVhcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdHMubW9udGhTdGFydCkge1xuICAgICAgICB0aGlzLm9wdHMubW9udGhTdGFydCA9IG1vbnRoO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5vcm1hbGl6ZVJlc3BvbnNpdmVPcHRpb25zKCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdHMuaXNEcm9wRG93bikge1xuICAgICAgICB0aGlzLmluaXRDYWxlbmRhckRyb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRzLmVsO1xuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIFRPRE86IHJlbmFtZSBkYXlzVHJlZVxuICAgIHRoaXMuZG9tICAgPSB7fTtcbiAgICAvLyBUT0RPOiByZW5hbWUgdG8gY2FsZW5kYXJUcmVlIG9yIGJvb2tpbmdzVHJlZVxuICAgIHRoaXMuY1RyZWUgPSBuZXcgQ2FsZW5kYXJUcmVlKHZhbGlkYXRpb25PZkNlbGwsIHt9KTtcbiAgICAvLyBUT0RPOiByZW5hbWUgdG8gYm9va2luZ3NEYXRhICYgYWRkRGF0YVxuICAgIGlmIChpc09iamVjdChtYXBzKSkge1xuICAgICAgdGhpcy5jVHJlZS5hZGRNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSB8fCBkYXRlVG9Jc28odGhpcy5vcHRzLmN1cnJlbnREYXRlKSk7XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0aW9uIGFuZCBoaWdobGlnaHRzXG4gICAgdGhpcy5pc1NlbGVjdGluZyAgICAgICA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMgPSBbXTtcbiAgICB0aGlzLmhhc1ZhbGlkUmFuZ2UgICAgID0gdHJ1ZTtcblxuICAgIC8vIFRPRE86IHJlbmFtZSBpc1JldmVyc2VTZWxlY3RhYmxlIHRvIHNlbGVjdGlvbkRlZmF1bHREaXJlY3Rpb24gLSBzaG91bGQgYmUgTFRSIG9yIFJUTFxuICAgIC8vIHVzZXIgc2VsZWN0cyBlbmQgZGF0ZSBmaXJzdFxuICAgIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA9IHRoaXMub3B0cy5pc1JldmVyc2VTZWxlY3RhYmxlO1xuICAgIHRoaXMuZGlzcGxheU1vbnRocyA9IHRoaXMub3B0cy5kaXNwbGF5TW9udGhzO1xuICAgIHRoaXMubWVkaWFRdWVyeUxpc3QgPSBudWxsO1xuICAgIHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gbnVsbDtcbiAgICB0aGlzLm9uRG9jdW1lbnRLZXlkb3duID0gbnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmNhbGVuZGFyLCB1dGlsc1N0eWxlcy5yZXNldCk7XG5cbiAgICBpZiAoIXRoaXMuZWwuZGF0YXNldC50aGVtZSkge1xuICAgICAgdGhpcy5lbC5kYXRhc2V0LnRoZW1lID0gdGhpcy5vcHRzLnRoZW1lO1xuICAgIH1cblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGUubGFiZWxzLmNhbGVuZGFyKTtcblxuICAgIHRoaXMuZG9tLnNwcml0ZSA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoXG4gICAgICBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuc3ZnU3ByaXRlKGAke3RoaXMuQ1NTX1BSRUZJWH1DaGV2cm9uRG93bmApKVxuICAgICk7XG4gICAgdGhpcy5kb20ucGFnaW5hdGlvbiAgICA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLnBhZ2luYXRpb24oKSkpO1xuICAgIHRoaXMuZG9tLm1vYmlsZVdlZWtkYXlzID0gdGhpcy5lbC5hcHBlbmRDaGlsZChcbiAgICAgIGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5tb2JpbGVXZWVrZGF5cyh0aGlzLmhlYWRlclRlbXBsYXRlU3RyaW5nKCkpKVxuICAgICk7XG4gICAgdGhpcy5kb20ubW9udGhzV3JhcHBlciA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLm1haW4odGhpcy5sb2NhbGUubGFiZWxzLm1vbnRocykpKTtcbiAgICB0aGlzLmRvbS5saXZlUmVnaW9uID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMubGl2ZVJlZ2lvbigpKSk7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuc2hhcmVkWWVhclBpY2tlclBhbmVsKHtcbiAgICAgIGNsb3NlTGFiZWw6IHRoaXMubG9jYWxlLmxhYmVscy5jbG9zZSB8fCAnQ2xvc2UnLFxuICAgICAgcHJldmlvdXNMYWJlbDogdGhpcy5sb2NhbGUubGFiZWxzLnByZXZpb3VzWWVhcnMgfHwgJ1ByZXZpb3VzIHllYXJzJyxcbiAgICAgIG5leHRMYWJlbDogdGhpcy5sb2NhbGUubGFiZWxzLm5leHRZZWFycyB8fCAnTmV4dCB5ZWFycydcbiAgICB9KSkpO1xuICAgIHRoaXMuZG9tLmZvcndhcmQgICAgICAgPSB0aGlzLmRvbS5wYWdpbmF0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLmZvcndhcmQodGhpcy5sb2NhbGUubGFiZWxzLm1vbnRoc0ZvcndhcmQpKVxuICAgICk7XG4gICAgdGhpcy5kb20uYmFjayAgICAgICAgICA9IHRoaXMuZG9tLnBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgICBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuYmFjayh0aGlzLmxvY2FsZS5sYWJlbHMubW9udGhzQmFja3dhcmQpKVxuICAgICk7XG4gICAgdGhpcy5hZGRDYXB0aW9uUGlja2VyRXZlbnRzKCk7XG4gICAgdGhpcy5hZGRWaWV3cG9ydEV2ZW50cygpO1xuICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMub3B0cy55ZWFyU3RhcnQsIHRoaXMub3B0cy5tb250aFN0YXJ0KTtcblxuICAgIHRoaXMuYWRkQnRuc0V2ZW50cygpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlICYmIHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIGlmICghdGhpcy5vcHRzLnJlbnRhbElkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzVG9WYWx1ZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbignbWFwcy1sb2FkZWQnLCAoKSA9PiB0aGlzLmlucHV0c1RvVmFsdWVzKCkpO1xuICAgICAgdGhpcy5vcHRzLmVsU3RhcnRBdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuaW5wdXRzVG9WYWx1ZXMoKSk7XG4gICAgICB0aGlzLm9wdHMuZWxFbmRBdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuaW5wdXRzVG9WYWx1ZXMoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5yZW50YWxJZCAmJiAhdGhpcy5vcHRzLmlzRHJvcERvd24pIHtcbiAgICAgIHRoaXMubG9hZE1hcHModGhpcy5vcHRzLnJlbnRhbElkKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmRhdGFzZXQuc2VsZWN0YWJsZSA9IHRoaXMub3B0cy5zZWxlY3RhYmxlO1xuXG4gICAgdGhpcy5sb2dnZXIoJ2luaXRlZCcpO1xuICAgIHRoaXMuZW1pdCgnaW5pdCcpO1xuICB9XG5cbiAgY2hhbmdlU2VsZWN0aW9uT3JkZXIoaXNSZXZlcnNlKSB7XG4gICAgaWYgKChpc1JldmVyc2UgIT09IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgJiYgIXRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA9IGlzUmV2ZXJzZTtcbiAgICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgICAgdGhpcy5yZW5kZXJNb250aHModGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCk7XG4gICAgfVxuICB9XG5cbiAgbm9ybWFsaXplUmVzcG9uc2l2ZU9wdGlvbnMoKSB7XG4gICAgY29uc3QgZmFsbGJhY2tEaXNwbGF5TW9udGhzID0gdGhpcy50b1Bvc2l0aXZlSW50KHRoaXMub3B0cy5kaXNwbGF5TW9udGhzLCAyKTtcbiAgICB0aGlzLm9wdHMuZGlzcGxheU1vbnRocyA9IGZhbGxiYWNrRGlzcGxheU1vbnRocztcbiAgICB0aGlzLm9wdHMuZGlzcGxheU1vbnRoc01vYmlsZSA9IHRoaXMudG9Qb3NpdGl2ZUludChcbiAgICAgIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzTW9iaWxlLFxuICAgICAgZmFsbGJhY2tEaXNwbGF5TW9udGhzXG4gICAgKTtcbiAgICB0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludCA9IHRoaXMudG9Ob25OZWdhdGl2ZUludCh0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludCwgNzY3KTtcbiAgfVxuXG4gIHRvUG9zaXRpdmVJbnQodmFsdWUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHRvTm9uTmVnYXRpdmVJbnQodmFsdWUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VkKSB8fCBwYXJzZWQgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGlzTW9iaWxlVmlld3BvcnQoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lZGlhUXVlcnlMaXN0Lm1hdGNoZXM7XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9ICh3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5pbm5lcldpZHRoID09PSAnbnVtYmVyJylcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIDogdGhpcy5vcHRzLm1vYmlsZUJyZWFrcG9pbnQgKyAxO1xuXG4gICAgcmV0dXJuIHZpZXdwb3J0V2lkdGggPD0gdGhpcy5vcHRzLm1vYmlsZUJyZWFrcG9pbnQ7XG4gIH1cblxuICBhcHBseVZpZXdwb3J0TW9kZShpc01vYmlsZVZpZXdwb3J0KSB7XG4gICAgaWYgKCF0aGlzLmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzTW9iaWxlVmlld3BvcnQpIHtcbiAgICAgIHRoaXMuZWwuZGF0YXNldC52aWV3cG9ydCA9ICdtb2JpbGUnO1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZU1vZGUpO1xuICAgICAgaWYgKHRoaXMub3B0cy5zaG93UGFnaW5hdGlvbk1vYmlsZSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5kYXRhc2V0LnZpZXdwb3J0ID0gJ2Rlc2t0b3AnO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZU1vZGUpO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXREaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKSB7XG4gICAgY29uc3QgaXNNb2JpbGVWaWV3cG9ydCA9IHRoaXMuaXNNb2JpbGVWaWV3cG9ydCgpO1xuXG4gICAgdGhpcy5hcHBseVZpZXdwb3J0TW9kZShpc01vYmlsZVZpZXdwb3J0KTtcblxuICAgIGlmIChpc01vYmlsZVZpZXdwb3J0KSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRzLmRpc3BsYXlNb250aHNNb2JpbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzO1xuICB9XG5cbiAgc3luY0Rpc3BsYXlNb250aHNGb3JWaWV3cG9ydCgpIHtcbiAgICBjb25zdCBuZXh0RGlzcGxheU1vbnRocyA9IHRoaXMuZ2V0RGlzcGxheU1vbnRoc0ZvclZpZXdwb3J0KCk7XG4gICAgY29uc3QgaGFzQ2hhbmdlZCA9IHRoaXMuZGlzcGxheU1vbnRocyAhPT0gbmV4dERpc3BsYXlNb250aHM7XG5cbiAgICB0aGlzLmRpc3BsYXlNb250aHMgPSBuZXh0RGlzcGxheU1vbnRocztcbiAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgfVxuXG4gIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnN5bmNEaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICB0aGlzLnJlbmRlck1vbnRocyh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0KTtcbiAgICB9XG4gIH1cblxuICBhZGRWaWV3cG9ydEV2ZW50cygpIHtcbiAgICB0aGlzLnJlbW92ZVZpZXdwb3J0RXZlbnRzKCk7XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludH1weClgKTtcbiAgICAgIHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlID0gKCkgPT4gdGhpcy5oYW5kbGVWaWV3cG9ydENoYW5nZSgpO1xuXG4gICAgICBpZiAodGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB0aGlzLmhhbmRsZVZpZXdwb3J0Q2hhbmdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICB9XG5cbiAgcmVtb3ZlVmlld3BvcnRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLm1lZGlhUXVlcnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdCA9IG51bGw7XG4gICAgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub25XaW5kb3dSZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1vbnRocyh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQpIHtcbiAgICB0aGlzLnN5bmNEaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKTtcblxuICAgIGNvbnN0IGhlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkZXJUZW1wbGF0ZVN0cmluZygpO1xuICAgIC8vIGNvbnN0cnVjdCBkb20gdHJlZVxuICAgIGNvbnN0IHtcbiAgICAgIHRyZWUsIHllYXJFbmQsIG1vbnRoRW5kLCBtb250aHNcbiAgICB9ID0gdGhpcy5jcmVhdGVUcmVlKHllYXJTdGFydCwgbW9udGhTdGFydCwgdGhpcy5kaXNwbGF5TW9udGhzLCBoZWFkZXJUZW1wbGF0ZSk7XG5cbiAgICB0aGlzLmNUcmVlLmFkZFRyZWUodHJlZSk7XG5cbiAgICB0aGlzLm1vbnRoU3RhcnQgPSBtb250aFN0YXJ0O1xuICAgIHRoaXMueWVhclN0YXJ0ICA9IHllYXJTdGFydDtcblxuICAgIHRoaXMubW9udGhFbmQgPSBtb250aEVuZDtcbiAgICB0aGlzLnllYXJFbmQgID0geWVhckVuZDtcblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID8gc3R5bGVzLnJldmVyc2VkIDogc3R5bGVzLmRpcmVjdCk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPyBzdHlsZXMuZGlyZWN0IDogc3R5bGVzLnJldmVyc2VkKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbS5tb250aHMgPSBtb250aHM7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICB0aGlzLmRvbS5tb250aHMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuYWRkTW9udGhFdmVudHMobSk7XG4gICAgICB9XG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kb20ubW9udGhzV3JhcHBlci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5hY3Rpb25zRW5hYmxlZCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cykge1xuICAgICAgdGhpcy5kaXNhYmxlQmFja0J0bigpO1xuICAgIH1cblxuICAgIHRoaXMucmVjb3ZlclNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIHJlY292ZXJTZWxlY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICB0aGlzLnNlbGVjdFN0YXJ0KHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuY1RyZWUuc2VsZWN0RGF5KC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgIHRoaXMuc2VsZWN0RW5kKHRoaXMuc2VsZWN0aW9uRW5kLCB0aGlzLmNUcmVlLnNlbGVjdERheSguLi50aGlzLnNlbGVjdGlvbkVuZCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICBpZiAodGhpcy5oaWdobGlnaHRlZEJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UoLi4udGhpcy5oaWdobGlnaHRlZEJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNhYmxlQmFja0J0bigpIHtcbiAgICBpZiAodGhpcy5vcHRzLmlzQmFja0Rpc2FibGVkKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgICAgICAgID0gZGF0ZVRvSXNvKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQsIDEpO1xuICAgICAgbGV0IHsgY3VycmVudERhdGUgfSAgICA9IHRoaXMub3B0cztcbiAgICAgIGN1cnJlbnREYXRlICAgICAgICAgICAgPSBkYXRlVG9Jc28oY3VycmVudERhdGVbMF0sIGN1cnJlbnREYXRlWzFdLCAxKTtcbiAgICAgIHRoaXMuZG9tLmJhY2suZGlzYWJsZWQgPSBzdGFydERhdGUgPD0gY3VycmVudERhdGU7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTG9hZGluZygpIHtcbiAgICBpZiAoIWhhc0NsYXNzKHRoaXMuZWwsIHN0eWxlcy5sb2FkaW5nKSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmxvYWRpbmcpO1xuICAgICAgdGhpcy5lbWl0KCdsb2FkaW5nLXNob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmxvYWRpbmcpO1xuICAgICAgdGhpcy5lbWl0KCdsb2FkaW5nLWhpZGUnKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXBzKG1hcHMpIHtcbiAgICB0aGlzLmNUcmVlLnJlcGxhY2VNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSk7XG4gICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgdGhpcy5yZW5kZXJNb250aHMoXG4gICAgICB0aGlzLm9wdHMueWVhclN0YXJ0IHx8IHRoaXMueWVhclN0YXJ0LFxuICAgICAgdGhpcy5vcHRzLm1vbnRoU3RhcnQgfHwgdGhpcy5tb250aFN0YXJ0XG4gICAgKTtcbiAgfVxuXG4gIGFkZEJ0bnNFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uZm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeWVhcjogeWVhclRvUmVuZGVyLFxuICAgICAgICBtb250aDogbW9udGhUb1JlbmRlclxuICAgICAgfSA9IHRoaXMuc2hpZnRNb250aCh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0LCB0aGlzLm9wdHMubW9udGhzUGFnaW5hdGlvbkp1bXAgfHwgdGhpcy5kaXNwbGF5TW9udGhzKTtcblxuICAgICAgdGhpcy5yZW5kZXJNb250aHMoeWVhclRvUmVuZGVyLCBtb250aFRvUmVuZGVyKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZG9tLmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHllYXI6IHllYXJUb1JlbmRlcixcbiAgICAgICAgbW9udGg6IG1vbnRoVG9SZW5kZXJcbiAgICAgIH0gPSB0aGlzLnNoaWZ0TW9udGgodGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCwgLSh0aGlzLm9wdHMubW9udGhzUGFnaW5hdGlvbkp1bXAgfHwgdGhpcy5kaXNwbGF5TW9udGhzKSk7XG5cbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHllYXJUb1JlbmRlciwgbW9udGhUb1JlbmRlcik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXB0aW9uUGlja2VyRXZlbnRzKCkge1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGVDYWxlbmRhciA9IHRoaXMuZWwuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgY29uc3QgdHJpZ2dlciA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgJ2RhdGEteWVhci1waWNrZXItdHJpZ2dlcicpLnBhcmVudDtcbiAgICAgIGNvbnN0IHllYXJPcHRpb24gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXllYXItb3B0aW9uJyk7XG4gICAgICBjb25zdCB5ZWFyUGFnZXIgPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXllYXItcGFnZS1vZmZzZXQnKTtcbiAgICAgIGNvbnN0IGNsb3NlUGlja2VyID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS15ZWFyLXBpY2tlci1jbG9zZScpLnBhcmVudDtcblxuICAgICAgaWYgKCFjbGlja2VkSW5zaWRlQ2FsZW5kYXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlWWVhclBpY2tlcikge1xuICAgICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xvc2VQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoe1xuICAgICAgICAgIGZvY3VzVHJpZ2dlcjogZS5kZXRhaWwgPT09IDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHllYXJPcHRpb24ucGFyZW50ICYmIHllYXJPcHRpb24udmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhck9wdGlvbi52YWx1ZSwgMTApO1xuICAgICAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVllYXJQaWNrZXI7XG4gICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgICAgIGlmIChtb250aEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckZyb21TbG90KG1vbnRoRWxlbWVudCwgc2VsZWN0ZWRZZWFyLCBtb250aEVsZW1lbnQubW9udGgsIHtcbiAgICAgICAgICAgIGZvY3VzVHJpZ2dlcjogZS5kZXRhaWwgPT09IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh5ZWFyUGFnZXIucGFyZW50ICYmIHllYXJQYWdlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVllYXJQaWNrZXI7XG4gICAgICAgIGNvbnN0IG5leHRZZWFyUGFnZVN0YXJ0ID0gcGFyc2VJbnQodGhpcy5kb20ueWVhclBpY2tlclBhbmVsLmRhdGFzZXQueWVhclBhZ2VTdGFydCB8fCBtb250aEVsZW1lbnQueWVhciwgMTApXG4gICAgICAgICAgKyBwYXJzZUludCh5ZWFyUGFnZXIudmFsdWUsIDEwKTtcbiAgICAgICAgaWYgKG1vbnRoRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyWWVhckdyaWQobW9udGhFbGVtZW50LCBuZXh0WWVhclBhZ2VTdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0cmlnZ2VyLmNsb3Nlc3QoJy5qcy1tb250aCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPT09IG1vbnRoRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKHtcbiAgICAgICAgICAgIGZvY3VzVHJpZ2dlcjogZS5kZXRhaWwgPT09IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW5ZZWFyUGlja2VyKG1vbnRoRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVZZWFyUGlja2VyXG4gICAgICAgICYmICF0aGlzLmFjdGl2ZVllYXJQaWNrZXIuY29udGFpbnMoZS50YXJnZXQpXG4gICAgICAgICYmICF0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub25Eb2N1bWVudEtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLmFjdGl2ZVllYXJQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoe1xuICAgICAgICAgIGZvY3VzVHJpZ2dlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBcnJvdyBrZXkgbmF2aWdhdGlvbiB3aXRoaW4geWVhciBwaWNrZXIgZ3JpZCAoMyBjb2x1bW5zKVxuICAgICAgaWYgKHRoaXMuYWN0aXZlWWVhclBpY2tlciAmJiB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVZZWFyUGlja2VyS2V5ZG93bihlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Eb2N1bWVudEtleWRvd24pO1xuICB9XG5cbiAgb3BlblllYXJQaWNrZXIobW9udGhFbGVtZW50KSB7XG4gICAgaWYgKCFtb250aEVsZW1lbnQgfHwgIXRoaXMuZWwuY29udGFpbnMobW9udGhFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgY29uc3QgdHJpZ2dlciA9IG1vbnRoRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS15ZWFyLXBpY2tlci10cmlnZ2VyXScpO1xuXG4gICAgaWYgKCF0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwgfHwgIXRyaWdnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBvc2l0aW9uWWVhclBpY2tlclBhbmVsKCk7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxlLmxhYmVscy5jYWxlbmRhcik7XG4gICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy55ZWFyUGlja2VyT3Blbik7XG4gICAgdGhpcy5hY3RpdmVZZWFyUGlja2VyID0gbW9udGhFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyWWVhckdyaWQobW9udGhFbGVtZW50LCBtb250aEVsZW1lbnQueWVhciAtIDUpO1xuXG4gICAgLy8gRm9jdXMgdGhlIHNlbGVjdGVkIHllYXIgYnV0dG9uLCBvciB0aGUgZmlyc3QgeWVhciBidXR0b25cbiAgICBjb25zdCBzZWxlY3RlZEJ0biA9IHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3RlZC15ZWFyXScpO1xuICAgIGNvbnN0IGZpcnN0QnRuID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItb3B0aW9uXScpO1xuXG4gICAgaWYgKHNlbGVjdGVkQnRuKSB7XG4gICAgICBzZWxlY3RlZEJ0bi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RCdG4pIHtcbiAgICAgIGZpcnN0QnRuLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VZZWFyUGlja2VyKHtcbiAgICBmb2N1c1RyaWdnZXIgPSBmYWxzZVxuICB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlWWVhclBpY2tlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLmFjdGl2ZVllYXJQaWNrZXIucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1waWNrZXItdHJpZ2dlcl0nKTtcblxuICAgIGlmICh0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwpIHtcbiAgICAgIHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgaWYgKGZvY3VzVHJpZ2dlcikge1xuICAgICAgICB0cmlnZ2VyLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnllYXJQaWNrZXJPcGVuKTtcbiAgICB0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlWWVhclBpY2tlcktleWRvd24oZSkge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsO1xuICAgIGNvbnN0IGZvY3VzZWQgPSBwYW5lbC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKTtcblxuICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IGUua2V5IHx8IGUua2V5Q29kZTtcbiAgICBjb25zdCB5ZWFyQnV0dG9ucyA9IEFycmF5LmZyb20ocGFuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEteWVhci1vcHRpb25dJykpO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHllYXJCdXR0b25zLmluZGV4T2YoZm9jdXNlZCk7XG5cbiAgICAvLyBBcnJvdyBuYXZpZ2F0aW9uIHdpdGhpbiB0aGUgMy1jb2x1bW4geWVhciBncmlkXG4gICAgY29uc3QgY29scyA9IDM7XG4gICAgY29uc3QgYXJyb3dPZmZzZXRzID0ge1xuICAgICAgQXJyb3dMZWZ0OiAtMSwgQXJyb3dSaWdodDogMSxcbiAgICAgIEFycm93VXA6IC1jb2xzLCBBcnJvd0Rvd246IGNvbHMsXG4gICAgICAzNzogLTEsIDM5OiAxLCAzODogLWNvbHMsIDQwOiBjb2xzXG4gICAgfTtcblxuICAgIGlmIChhcnJvd09mZnNldHNba2V5XSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gY3VycmVudEluZGV4ICsgYXJyb3dPZmZzZXRzW2tleV07XG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA+PSAwICYmIHRhcmdldEluZGV4IDwgeWVhckJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgIHllYXJCdXR0b25zW3RhcmdldEluZGV4XS5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9jdXMgdHJhcDogVGFiIGN5Y2xlcyB3aXRoaW4gdGhlIHllYXIgcGlja2VyIHBhbmVsXG4gICAgaWYgKGtleSA9PT0gJ1RhYicgfHwga2V5ID09PSA5KSB7XG4gICAgICBjb25zdCBmb2N1c2FibGUgPSBBcnJheS5mcm9tKHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbjpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKScpKTtcblxuICAgICAgaWYgKGZvY3VzYWJsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbZmlyc3RFbF0gPSBmb2N1c2FibGU7XG4gICAgICBjb25zdCBsYXN0RWwgPSBmb2N1c2FibGVbZm9jdXNhYmxlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkID09PSBmaXJzdEVsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdEVsLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWQgPT09IGxhc3RFbCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZpcnN0RWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJZZWFyR3JpZChtb250aEVsZW1lbnQsIHllYXJQYWdlU3RhcnQpIHtcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbDtcbiAgICBjb25zdCBncmlkID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItZ3JpZF0nKTtcbiAgICBjb25zdCBwcmV2aW91c1BhZ2VyID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItcGFnZS1vZmZzZXQ9XCItMTJcIl0nKTtcbiAgICBjb25zdCBuZXh0UGFnZXIgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1wYWdlLW9mZnNldD1cIjEyXCJdJyk7XG5cbiAgICBpZiAoIXBhbmVsIHx8ICFncmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWluaW11bVllYXIgPSB0aGlzLm1pbmltdW1TZWxlY3RhYmxlWWVhcigpO1xuICAgIGNvbnN0IGJvdW5kZWRZZWFyUGFnZVN0YXJ0ID0gbWluaW11bVllYXIgPT09IG51bGxcbiAgICAgID8geWVhclBhZ2VTdGFydFxuICAgICAgOiBNYXRoLm1heCh5ZWFyUGFnZVN0YXJ0LCBtaW5pbXVtWWVhcik7XG4gICAgY29uc3QgeWVhcnMgPSBbXTtcblxuICAgIGZvciAobGV0IHllYXIgPSBib3VuZGVkWWVhclBhZ2VTdGFydDsgeWVhciA8IGJvdW5kZWRZZWFyUGFnZVN0YXJ0ICsgMTI7IHllYXIgKz0gMSkge1xuICAgICAgeWVhcnMucHVzaCh0ZW1wbGF0ZXMueWVhck9wdGlvbih5ZWFyLCBtb250aEVsZW1lbnQueWVhcikpO1xuICAgIH1cblxuICAgIHBhbmVsLmRhdGFzZXQueWVhclBhZ2VTdGFydCA9IGJvdW5kZWRZZWFyUGFnZVN0YXJ0O1xuICAgIGdyaWQuaW5uZXJIVE1MID0geWVhcnMuam9pbignJyk7XG5cbiAgICBpZiAocHJldmlvdXNQYWdlcikge1xuICAgICAgY29uc3Qgc2hvdWxkRGlzYWJsZVByZXZpb3VzUGFnZXIgPSBtaW5pbXVtWWVhciAhPT0gbnVsbCAmJiBib3VuZGVkWWVhclBhZ2VTdGFydCA8PSBtaW5pbXVtWWVhcjtcbiAgICAgIHByZXZpb3VzUGFnZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgICBwcmV2aW91c1BhZ2VyLmRpc2FibGVkID0gc2hvdWxkRGlzYWJsZVByZXZpb3VzUGFnZXI7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQYWdlcikge1xuICAgICAgbmV4dFBhZ2VyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgbmV4dFBhZ2VyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcG9zaXRpb25ZZWFyUGlja2VyUGFuZWwoKSB7XG4gICAgaWYgKCF0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3AgPSBNYXRoLm1heCh0aGlzLmVsLnNjcm9sbFRvcCwgMCk7XG4gICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IHRoaXMuZWwuY2xpZW50SGVpZ2h0IHx8IE1hdGgucm91bmQodGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuXG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgIHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLmhlaWdodCA9IHZpc2libGVIZWlnaHQgPyBgJHt2aXNpYmxlSGVpZ2h0fXB4YCA6ICcxMDAlJztcbiAgfVxuXG4gIHJlbmRlckZyb21TbG90KG1vbnRoRWxlbWVudCwgeWVhciwgbW9udGgsIHtcbiAgICBmb2N1c1RyaWdnZXIgPSBmYWxzZVxuICB9ID0ge30pIHtcbiAgICBjb25zdCBmb2N1c1Nsb3RJbmRleCA9IGZvY3VzVHJpZ2dlciA/IG1vbnRoRWxlbWVudC5zbG90SW5kZXggOiBudWxsO1xuXG4gICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgbGV0IHtcbiAgICAgIHllYXI6IHllYXJTdGFydCxcbiAgICAgIG1vbnRoOiBtb250aFN0YXJ0XG4gICAgfSA9IHRoaXMuc2hpZnRNb250aCh5ZWFyLCBtb250aCwgLW1vbnRoRWxlbWVudC5zbG90SW5kZXgpO1xuXG4gICAgKHtcbiAgICAgIHllYXI6IHllYXJTdGFydCxcbiAgICAgIG1vbnRoOiBtb250aFN0YXJ0XG4gICAgfSA9IHRoaXMuY2xhbXBWaXNpYmxlTW9udGhTdGFydCh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQpKTtcblxuICAgIHRoaXMucmVuZGVyTW9udGhzKHllYXJTdGFydCwgbW9udGhTdGFydCk7XG5cbiAgICBpZiAoZm9jdXNTbG90SW5kZXggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZm9jdXNDYXB0aW9uVHJpZ2dlckZvclNsb3QoZm9jdXNTbG90SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzQ2FwdGlvblRyaWdnZXJGb3JTbG90KHNsb3RJbmRleCkge1xuICAgIGlmICghaXNBcnJheSh0aGlzLmRvbS5tb250aHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhFbGVtZW50ID0gdGhpcy5kb20ubW9udGhzLmZpbmQoKG1vbnRoRWwpID0+IG1vbnRoRWwuc2xvdEluZGV4ID09PSBzbG90SW5kZXgpO1xuICAgIGNvbnN0IHRyaWdnZXIgPSBtb250aEVsZW1lbnQgJiYgbW9udGhFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItcGlja2VyLXRyaWdnZXJdJyk7XG5cbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1vbnRoRXZlbnRzKGVsKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBjb25zdCBpc0VuZEZpcnN0ID0gdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcGFyZW50OiBjZWxsXG4gICAgICB9ID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAoaXModmFsdWUpICYmIGNlbGwpIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlICAgICAgICAgID0gW2VsLnllYXIsIGVsLm1vbnRoLCBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpLCAxMCldO1xuICAgICAgICBjb25zdCBkYXlBbHJlYWR5U2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0aW5nICYmIGlzQ3VycmVudCgoaXNFbmRGaXJzdCkgPyB0aGlzLnNlbGVjdGlvbkVuZCA6IHRoaXMuc2VsZWN0aW9uU3RhcnQsIGRhdGVWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHJhbmdlU2VsZWN0ZWQgICAgICA9ICF0aGlzLmlzU2VsZWN0aW5nICYmIHRoaXMuc2VsZWN0aW9uRW5kICYmIHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGNvbnN0IGlzUGFzdFRvZGF5ICAgICAgICA9IGlzTGF0ZXIoZGF0ZVZhbHVlLCB0aGlzLm9wdHMuY3VycmVudERhdGUpO1xuXG4gICAgICAgIGlmIChkYXlBbHJlYWR5U2VsZWN0ZWQgfHwgcmFuZ2VTZWxlY3RlZCB8fCBpc1Bhc3RUb2RheSkge1xuICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF5QWxyZWFkeVNlbGVjdGVkICYmICFpc1Bhc3RUb2RheSAmJiAhdGhpcy5vcHRzLmVuYWJsZUFsbERheXMpIHtcbiAgICAgICAgICBpZiAoaXNFbmRGaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5lbmREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0LCBzdHlsZXMuc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgICAgIGRlbGV0ZSBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlU2VsZWN0aW9uKGlzRW5kRmlyc3QsIGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5pc0Ryb3BEb3duICYmIHRoaXMuY2FsRHJvcCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3AobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlb3ZlckhhbmRsZXIgPSAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHBhcmVudDogY2VsbCB9ID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAoaXModmFsdWUpICYmIGNlbGwpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCAgICAgICAgICA9IFtlbC55ZWFyLCBlbC5tb250aCwgcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSwgMTApXTtcbiAgICAgICAgY29uc3QgaXNQYXN0VG9kYXkgICAgICA9IGlzTGF0ZXIoY3VycmVudCwgdGhpcy5vcHRzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgY29uc3QgaXNFbmRGaXJzdCAgICAgICA9IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZTtcblxuICAgICAgICBpZiAoaXNQYXN0VG9kYXkgJiYgIXRoaXMub3B0cy5lbmFibGVBbGxEYXlzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodCgpO1xuXG4gICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpO1xuICAgICAgICAgIGNlbGxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkO1xuICAgICAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQuaG92ZXJlZE9mZnNldDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHJldmVyc2Ugc2VsZWN0aW9uIGRpcmVjdGlvblxuICAgICAgICAgIGlmIChpc0VuZEZpcnN0ICYmIHRoaXMuc2VsZWN0aW9uRW5kICYmICFpc0N1cnJlbnQoY3VycmVudCwgdGhpcy5zZWxlY3Rpb25FbmQpKSB7XG4gICAgICAgICAgICBpZiAoaXNMYXRlcih0aGlzLnNlbGVjdGlvbkVuZCwgY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2VsbEEgPSB0aGlzLmNlbGxCO1xuICAgICAgICAgICAgICBjb25zdCB7IHNlbGVjdGlvbkVuZCB9ID0gdGhpcztcblxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbihmYWxzZSwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGVGaXJzdEFjdGlvbih0aGlzLnNlbGVjdGlvbkVuZCwgY2VsbEEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzRW5kRmlyc3QgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCAmJiAhaXNDdXJyZW50KGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICBpZiAoaXNMYXRlcihjdXJyZW50LCB0aGlzLnNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgICAgICBjb25zdCBjZWxsQiA9IHRoaXMuY2VsbEE7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQgfSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VIaWdobGlnaHREaXJlY3Rpb24odHJ1ZSwgc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICB0aGlzLmVuZERhdGVGaXJzdEFjdGlvbih0aGlzLnNlbGVjdGlvblN0YXJ0LCBjZWxsQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZShjdXJyZW50LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UodGhpcy5zZWxlY3Rpb25TdGFydCwgY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhbmdlSGlnaGxpZ2h0RGlyZWN0aW9uKHRoaXMub3B0cy5pc1JldmVyc2VTZWxlY3RhYmxlKTtcblxuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWRMZWZ0ICAgPSBjZWxsLmRhdGFzZXQuZGlzYWJsZWQgPT09ICdsZWZ0JztcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkQ2VudGVyID0gY2VsbC5kYXRhc2V0LmRpc2FibGVkID09PSAnY2VudGVyJztcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkUmlnaHQgID0gY2VsbC5kYXRhc2V0LmRpc2FibGVkID09PSAncmlnaHQnO1xuXG4gICAgICAgICAgbGV0IGlzSW52YWxpZCA9ICcnO1xuXG4gICAgICAgICAgaWYgKGlzRW5kRmlyc3QgJiYgaXNEaXNhYmxlZFJpZ2h0IHx8IGlzRGlzYWJsZWRDZW50ZXIgfHwgIWlzRW5kRmlyc3QgJiYgaXNEaXNhYmxlZExlZnQpIHtcbiAgICAgICAgICAgIGlzSW52YWxpZCA9ICdpbnZhbGlkJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICAgICAgbGV0IG9mZnNldENlbGw7XG5cbiAgICAgICAgICBjZWxscy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LmhvdmVyZWQ7XG4gICAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkT2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAoZWwgPT09IGNlbGwpIHtcbiAgICAgICAgICAgICAgb2Zmc2V0Q2VsbCA9ICh0aGlzLm9wdHMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgPyBjZWxsc1tpbmRleCAtIDFdIDogY2VsbHNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpcyhvZmZzZXRDZWxsKSkge1xuICAgICAgICAgICAgb2Zmc2V0Q2VsbC5kYXRhc2V0LmhvdmVyZWRPZmZzZXQgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjZWxsLmRhdGFzZXQuaG92ZXJlZCA9IGlzSW52YWxpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5IHx8IGUua2V5Q29kZTtcblxuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09IDEzKSB7XG4gICAgICAgIHNlbGVjdGlvbkhhbmRsZXIoZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNlbGVjdCBkYXRlcyB3aXRoIFRhYiBrZXlcbiAgICAgIGlmIChrZXkgPT09ICdUYWInIHx8IGtleSA9PT0gOSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIC8vIG1hZ2ljIHRyaWNrXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWx1ZV06Zm9jdXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gW10uaW5kZXhPZi5jYWxsKGNlbGxzLCBjZWxsKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlb3ZlckhhbmRsZXIoeyB0YXJnZXQ6IGNlbGxzW2luZGV4XSB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJyB8fCBrZXkgPT09ICdFc2MnIHx8IGtleSA9PT0gMjcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQXJyb3cga2V5IGdyaWQgbmF2aWdhdGlvblxuICAgICAgdGhpcy5oYW5kbGVBcnJvd05hdmlnYXRpb24oZSwga2V5LCBtb3VzZW92ZXJIYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0aW9uSGFuZGxlcik7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXJIYW5kbGVyKTtcblxuICAgIGVsLmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQuaG92ZXJlZDtcbiAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQuaG92ZXJlZE9mZnNldDtcbiAgICAgIH0pO1xuXG4gICAgICAvKiBlc2xpbnQgbm8tYml0d2lzZTogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIiZcIl0gfV0gKi9cbiAgICAgIC8vIHNpbXVsYXRlICdtb3VzZWxlYXZlJ1xuICAgICAgaWYgKCFlLnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgfHwgKGUucmVsYXRlZFRhcmdldCAhPT0gZWwuYm9keSAmJiAhKGVsLmJvZHkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZS5yZWxhdGVkVGFyZ2V0KVxuICAgICAgICAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VIaWdobGlnaHREaXJlY3Rpb24oaXNSZXZlcnNlLCBkYXRlQXJyYXkgPSBudWxsKSB7XG4gICAgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID0gaXNSZXZlcnNlO1xuXG4gICAgaWYgKGRhdGVBcnJheSkge1xuICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IChpc1JldmVyc2UpID8gZGF0ZUFycmF5IDogbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uRW5kICAgPSAoaXNSZXZlcnNlKSA/IG51bGwgOiBkYXRlQXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGlzUmV2ZXJzZSA/IHN0eWxlcy5yZXZlcnNlZCA6IHN0eWxlcy5kaXJlY3QpO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgaXNSZXZlcnNlID8gc3R5bGVzLmRpcmVjdCA6IHN0eWxlcy5yZXZlcnNlZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNMYXRlcih0aGlzLnNlbGVjdGlvblN0YXJ0LCBkYXRlVmFsdWUpKSB7XG4gICAgICB0aGlzLnNlbGVjdEVuZEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnNlbGVjdGluZ0RpcmVjdCk7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XG4gICAgICB9O1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnNlbGVjdGluZ0RpcmVjdCk7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0U3RhcnRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZCA9ICdsZWZ0JztcbiAgICB9XG4gIH1cblxuICBlbmREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNMYXRlcihkYXRlVmFsdWUsIHRoaXMuc2VsZWN0aW9uRW5kKSkge1xuICAgICAgdGhpcy5zZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnNlbGVjdGluZ1JldmVyc2VkKTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIH07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEVuZEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ3JpZ2h0JztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICB0aGlzLnNlbGVjdFN0YXJ0KGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgdGhpcy5zd2l0Y2hJbnB1dEZvY3VzKCdlbmQnKTtcbiAgICBpZiAodGhpcy5oYXNWYWxpZFJhbmdlKSB7XG4gICAgICBjb25zdCBkYXRlU3RyID0gc3RyZnRpbWUoZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSksIHRoaXMubG9jYWxlLmZvcm1hdERhdGUsIHRoaXMubG9jYWxlKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sb2NhbGUubGFiZWxzLnNlbGVjdGVkU3RhcnQgfHwgJ1N0YXJ0IGRhdGU6ICVkYXRlJztcbiAgICAgIHRoaXMuYW5ub3VuY2VMaXZlUmVnaW9uKGxhYmVsLnJlcGxhY2UoJyVkYXRlJywgZGF0ZVN0cikpO1xuICAgICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tc3RhcnQnLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlLCB0cnVlKSwgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSkpO1xuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uU2VsZWN0U3RhcnQpKSB7XG4gICAgICAgIHRoaXMub3B0cy5vblNlbGVjdFN0YXJ0KGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0RW5kKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgdGhpcy5zd2l0Y2hJbnB1dEZvY3VzKCdzdGFydCcpO1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGVTdHIgPSBzdHJmdGltZShkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxvY2FsZS5sYWJlbHMuc2VsZWN0ZWRFbmQgfHwgJ0VuZCBkYXRlOiAlZGF0ZSc7XG4gICAgICB0aGlzLmFubm91bmNlTGl2ZVJlZ2lvbihsYWJlbC5yZXBsYWNlKCclZGF0ZScsIGRhdGVTdHIpKTtcbiAgICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWVuZCcsIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25TZWxlY3RFbmQpKSB7XG4gICAgICAgIHRoaXMub3B0cy5vblNlbGVjdEVuZChkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlLCB0cnVlKSwgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodCgpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZEJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLnNlbGVjdFJhbmdlKC4uLnRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMpO1xuICAgICAgcmFuZ2UubWFwKChjZWxsKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQ7XG4gICAgICAgIGRlbGV0ZSBjZWxsLmRhdGFzZXQuaW52YWxpZDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG5cbiAgICAgIHRoaXMuaGFzVmFsaWRSYW5nZSAgICAgPSB0cnVlO1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3lUb29sdGlwKCkge1xuICAgIGlmICh0aGlzLnRvb2x0aXBQb3BwZXIgJiYgaXNGdW5jdGlvbih0aGlzLnRvb2x0aXBQb3BwZXIuZGVzdHJveSkpIHtcbiAgICAgIHRoaXMudG9vbHRpcFBvcHBlci5kZXN0cm95KCk7XG4gICAgICB0aGlzLnRvb2x0aXBQb3BwZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChpcyh0aGlzLmRvbS50b29sdGlwKSkge1xuICAgICAgLy8gUmVtb3ZlIGFyaWEtZGVzY3JpYmVkYnkgZnJvbSB0aGUgY2VsbCBsaW5rZWQgdG8gdGhpcyB0b29sdGlwXG4gICAgICBjb25zdCBkZXNjcmliZWQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWRlc2NyaWJlZGJ5PVwiY2FsZW5kYXItdG9vbHRpcFwiXScpO1xuICAgICAgaWYgKGRlc2NyaWJlZCkge1xuICAgICAgICBkZXNjcmliZWQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICB9XG4gICAgICBkZXN0cm95RWxlbWVudCh0aGlzLmRvbS50b29sdGlwKTtcbiAgICB9XG4gIH1cblxuICBhbm5vdW5jZUxpdmVSZWdpb24obWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmRvbS5saXZlUmVnaW9uKSB7XG4gICAgICB0aGlzLmRvbS5saXZlUmVnaW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBcnJvd05hdmlnYXRpb24oZSwga2V5LCBtb3VzZW92ZXJIYW5kbGVyKSB7XG4gICAgY29uc3QgZm9jdXNlZENlbGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbHVlXTpmb2N1cycpXG4gICAgICB8fCAoZS50YXJnZXQgJiYgdHlwZW9mIGUudGFyZ2V0LmNsb3Nlc3QgPT09ICdmdW5jdGlvbicgPyBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS12YWx1ZV0nKSA6IG51bGwpO1xuXG4gICAgaWYgKCFmb2N1c2VkQ2VsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFycm93S2V5cyA9IHtcbiAgICAgIEFycm93TGVmdDogLTEsIEFycm93UmlnaHQ6IDEsXG4gICAgICBBcnJvd1VwOiAtNywgQXJyb3dEb3duOiA3LFxuICAgICAgMzc6IC0xLCAzOTogMSwgMzg6IC03LCA0MDogN1xuICAgIH07XG4gICAgY29uc3QgaG9tZUVuZEtleXMgPSB7IEhvbWU6ICdob21lJywgRW5kOiAnZW5kJywgMzY6ICdob21lJywgMzU6ICdlbmQnIH07XG4gICAgY29uc3QgcGFnZUtleXMgPSB7IFBhZ2VVcDogLTEsIFBhZ2VEb3duOiAxLCAzMzogLTEsIDM0OiAxIH07XG5cbiAgICBpZiAoYXJyb3dLZXlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY2VsbHMuaW5kZXhPZihmb2N1c2VkQ2VsbCk7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGN1cnJlbnRJbmRleCArIGFycm93S2V5c1trZXldO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMCAmJiB0YXJnZXRJbmRleCA8IGNlbGxzLmxlbmd0aCkge1xuICAgICAgICBjZWxsc1t0YXJnZXRJbmRleF0uZm9jdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIG1vdXNlb3ZlckhhbmRsZXIoeyB0YXJnZXQ6IGNlbGxzW3RhcmdldEluZGV4XSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaG9tZUVuZEtleXNba2V5XSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgcm93ID0gZm9jdXNlZENlbGwuY2xvc2VzdCgnW3JvbGU9XCJyb3dcIl0nKTtcblxuICAgICAgaWYgKHJvdykge1xuICAgICAgICBjb25zdCByb3dDZWxscyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpKTtcblxuICAgICAgICBpZiAocm93Q2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gaG9tZUVuZEtleXNba2V5XSA9PT0gJ2hvbWUnID8gcm93Q2VsbHNbMF0gOiByb3dDZWxsc1tyb3dDZWxscy5sZW5ndGggLSAxXTtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgICBtb3VzZW92ZXJIYW5kbGVyKHsgdGFyZ2V0IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZUtleXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXlWYWx1ZSA9IGZvY3VzZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuICAgICAgY29uc3QgZm9jdXNlZE1vbnRoID0gZm9jdXNlZENlbGwuY2xvc2VzdCgnLmpzLW1vbnRoJyk7XG4gICAgICBjb25zdCBvcmlnaW5TbG90SW5kZXggPSBmb2N1c2VkTW9udGggPyBmb2N1c2VkTW9udGguc2xvdEluZGV4IDogbnVsbDtcblxuICAgICAgaWYgKHBhZ2VLZXlzW2tleV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5kb20uZm9yd2FyZC5jbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb20uYmFjay5jbGljaygpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZnRlciByZS1yZW5kZXIsIGZvY3VzIHRoZSBzYW1lIGRheSBudW1iZXIgb3IgbGFzdCBhdmFpbGFibGUgY2VsbFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRNb250aCA9IG51bGw7XG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xuXG4gICAgICAgIGlmIChvcmlnaW5TbG90SW5kZXggIT09IG51bGwgJiYgdGhpcy5kb20ubW9udGhzKSB7XG4gICAgICAgICAgdGFyZ2V0TW9udGggPSB0aGlzLmRvbS5tb250aHMuZmluZCgobW9udGhFbCkgPT4gbW9udGhFbC5zbG90SW5kZXggPT09IG9yaWdpblNsb3RJbmRleCkgfHwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRNb250aCkge1xuICAgICAgICAgIHRhcmdldCA9IHRhcmdldE1vbnRoLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXZhbHVlPVwiJHtkYXlWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtb250aENlbGxzID0gdGFyZ2V0TW9udGgucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIGlmIChtb250aENlbGxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSBtb250aENlbGxzW21vbnRoQ2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBuZXdDZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0NlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAobmV3Q2VsbHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykgPT09IGRheVZhbHVlKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IG5ld0NlbGxzW2ldO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXRhcmdldCAmJiBuZXdDZWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ld0NlbGxzW25ld0NlbGxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodHMgdGhlIHJhbmdlIG9mIGNlbGxzIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMuXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtBcnJheX0gc3RhcnQgZS5nLiBbMjAxNiwgMCwgMV1cbiAgICogQHBhcmFtIHtBcnJheX0gZW5kIFsyMDE2LCAxLCAzXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRoZSByYW5nZSBpcyB2YWxpZCBvciBub3QuXG4gICAqL1xuICBoaWdoTGlnaHRSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgeyByYW5nZSwgaXNWYWxpZCB9ID0gdGhpcy5zZWxlY3RSYW5nZShzdGFydCwgZW5kKTtcbiAgICBjb25zdCB7IG9wdHMgfSAgICAgICAgICAgPSB0aGlzO1xuICAgIGxldCB7IG1pblN0YXksIG1heFN0YXkgfSA9IG9wdHM7XG4gICAgbGV0IGludmFsaWRSYW5nZU1lc3NhZ2U7XG5cbiAgICBpZiAoaXNBcnJheShyYW5nZSkpIHtcbiAgICAgIGlmIChvcHRzLnJlbnRhbElkKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlV2l0aG91dExhc3QgPSByYW5nZS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgaWYgKCFvcHRzLmFsbG93U2hvcnRlck1pblN0YXlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGJpZ2dlc3QgbWluU3RheSB2YWx1ZSBpbiB0aGUgcmFuZ2VcbiAgICAgICAgICBjb25zdCBjZWxscyA9IHJhbmdlV2l0aG91dExhc3QubWFwKChjZWxsKSA9PiBjZWxsLmRhdGFzZXQubWluU3RheSB8fCBtaW5TdGF5KTtcbiAgICAgICAgICBtaW5TdGF5ID0gTWF0aC5tYXgoLi4uY2VsbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRzLmFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbikge1xuICAgICAgICAgIC8vIGdldCB0aGUgYmlnZ2VzdCBtYXhTdGF5IHZhbHVlIGluIHRoZSByYW5nZVxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gcmFuZ2VXaXRob3V0TGFzdC5tYXAoKGNlbGwpID0+IGNlbGwuZGF0YXNldC5tYXhTdGF5IHx8IG1heFN0YXkpO1xuICAgICAgICAgIG1heFN0YXkgPSBNYXRoLm1heCguLi5jZWxscyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhhdCByYW5nZSBpcyB2YWxpZCBhbmQgbG9uZ2VyIHRoYW4gbWluU3RheSBhbmQgc2hvcnRlciB0aGFuIG1heFN0YXlcbiAgICAgIGNvbnN0IGhhc1ZhbGlkRGF5cyAgICA9IG9wdHMucmVudGFsSWQgPyBpc1ZhbGlkIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGhhc1ZhbGlkTWluU3RheSA9IHJhbmdlLmxlbmd0aCA+IG1pblN0YXk7XG4gICAgICBjb25zdCBoYXNWYWxpZE1heFN0YXkgPSByYW5nZS5sZW5ndGggPCBtYXhTdGF5O1xuXG4gICAgICB0aGlzLmhhc1ZhbGlkUmFuZ2UgPSBoYXNWYWxpZERheXMgJiYgaGFzVmFsaWRNaW5TdGF5ICYmIGhhc1ZhbGlkTWF4U3RheTtcblxuICAgICAgaWYgKCFoYXNWYWxpZE1pblN0YXkpIHtcbiAgICAgICAgaW52YWxpZFJhbmdlTWVzc2FnZSA9IHRGb3JtYXR0ZXIobWluU3RheSwgdGhpcy5sb2NhbGUuaGFzSW52YWxpZE1pblN0YXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc1ZhbGlkTWF4U3RheSkge1xuICAgICAgICBpbnZhbGlkUmFuZ2VNZXNzYWdlID0gdEZvcm1hdHRlcihtYXhTdGF5LCB0aGlzLmxvY2FsZS5oYXNJbnZhbGlkTWF4U3RheSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzVmFsaWREYXlzKSB7XG4gICAgICAgIGludmFsaWRSYW5nZU1lc3NhZ2UgPSB0aGlzLmxvY2FsZS5oYXNJbnZhbGlkRGF5cztcbiAgICAgIH1cblxuICAgICAgcmFuZ2UubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gaW5kZXggKyAxID09PSByYW5nZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyaWdodCkge1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ2NlbnRlcic7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW52YWxpZCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW52YWxpZCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5pbnZhbGlkID0gJ2NlbnRlcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcFBvc2l0aW9uID0gKHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgPyBsZWZ0IDogcmlnaHQ7XG5cbiAgICAgICAgaWYgKHRvb2x0aXBQb3NpdGlvbiAmJiB0aGlzLmVsLmNvbnRhaW5zKGNlbGwpICYmICF0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmRvbS50b29sdGlwID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMudG9vbHRpcCkpO1xuICAgICAgICAgIHRoaXMuZG9tLnRvb2x0aXAuaWQgPSAnY2FsZW5kYXItdG9vbHRpcCc7XG4gICAgICAgICAgdGhpcy5kb20udG9vbHRpcC5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJIVE1MID0gaW52YWxpZFJhbmdlTWVzc2FnZTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsICdjYWxlbmRhci10b29sdGlwJyk7XG5cbiAgICAgICAgICB0aGlzLmxvZ2dlcihgaW52YWxpZFJhbmdlTWVzc2FnZTogJHtpbnZhbGlkUmFuZ2VNZXNzYWdlfSAoJHtzdGFydH0gLSAke2VuZH0pYCwgJ3dhcm4nKTtcblxuICAgICAgICAgIHRoaXMudG9vbHRpcFBvcHBlciA9IGNyZWF0ZVBvc2l0aW9uZXIoY2VsbCwgdGhpcy5kb20udG9vbHRpcCwge1xuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgb2Zmc2V0OiBbMCwgMF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMgPSBbc3RhcnQsIGVuZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGFzVmFsaWRSYW5nZTtcbiAgfVxuXG4gIC8qKiBSZXNldHMgc2VsZWN0aW9uLCByZW1vdmVzIGhpZ2hsaWdodHNcbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB7Q2FsZW5kYXJ9XG4gICAqL1xuICByZXNldFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLXJlc2V0JywgdGhpcy5zZWxlY3Rpb25TdGFydCwgdGhpcy5zZWxlY3Rpb25FbmQpO1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vbkNsZWFyU2VsZWN0aW9uKSkge1xuICAgICAgdGhpcy5vcHRzLm9uQ2xlYXJTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb25TdGFydCwgdGhpcy5zZWxlY3Rpb25FbmQpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uRW5kICAgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuY2VsbEEpIHtcbiAgICAgIHRoaXMuY2VsbEEgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNlbGxCKSB7XG4gICAgICB0aGlzLmNlbGxCID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24gJiYgdGhpcy5vcHRzLmVsU3RhcnRBdCAmJiB0aGlzLm9wdHMuZWxFbmRBdCkge1xuICAgICAgdGhpcy5vcHRzLmVsU3RhcnRBdC52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9wdHMuZWxFbmRBdC52YWx1ZSAgID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMub3B0cy5pc1NpbmdsZUlucHV0KSB7XG4gICAgICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3QgcmFuZ2UgZnJvbSB0aGUgdHJlZVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFydCBlLmcuIFsyMDE2LCAwLCAxXVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbmQgWzIwMTYsIDEsIDNdXG4gICAqIEByZXR1cm5zIHt7cmFuZ2U6IEFycmF5LCBpc1ZhbGlkOiB7Qm9vbGVhbn19fVxuICAgKi9cbiAgc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGlmIChpc0xhdGVyKHN0YXJ0LCBlbmQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jVHJlZS5zZWxlY3RSYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmdlOiBudWxsLFxuICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0U3RhcnQoZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IGRhdGVWYWx1ZTtcblxuICAgIGlmIChjZWxsKSB7XG4gICAgICB0aGlzLmNlbGxBID0gY2VsbDtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlVG9JbnB1dCgnc3RhcnQnLCBkYXRlVmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0RW5kKGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gZGF0ZVZhbHVlO1xuXG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIHRoaXMuY2VsbEIgPSBjZWxsO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVUb0lucHV0KCdlbmQnLCBkYXRlVmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlVHJlZSh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQsIHRpbWVzLCBoZWFkZXJUZW1wbGF0ZSkge1xuICAgIGNvbnN0IG1vbnRocyA9IFtdO1xuICAgIGNvbnN0IHRyZWUgICA9IHt9O1xuICAgIGxldCBtb250aEVuZCA9IG1vbnRoU3RhcnQ7XG4gICAgbGV0IHllYXJFbmQgID0geWVhclN0YXJ0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSArPSAxKSB7XG4gICAgICBjb25zdCBtRG9tID0gdGhpcy5kb21Nb250aCh5ZWFyRW5kLCBtb250aEVuZCwgaGVhZGVyVGVtcGxhdGUsIGkpO1xuXG4gICAgICBtb250aHMucHVzaChtRG9tKTtcblxuICAgICAgaWYgKCF0cmVlW3llYXJFbmRdKSB7XG4gICAgICAgIHRyZWVbeWVhckVuZF0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmVlW3llYXJFbmRdW21vbnRoRW5kXSkge1xuICAgICAgICB0cmVlW3llYXJFbmRdW21vbnRoRW5kXSA9IG1Eb20uZGF5RWxlbWVudHMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIGlmIChtb250aEVuZCA+IDEwKSB7XG4gICAgICAgIG1vbnRoRW5kID0gMDtcbiAgICAgICAgeWVhckVuZCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9udGhFbmQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJlZSxcbiAgICAgIHllYXJFbmQsXG4gICAgICBtb250aEVuZCxcbiAgICAgIG1vbnRoc1xuICAgIH07XG4gIH1cblxuICBkb21Nb250aCh5ZWFyLCBtb250aCwgaGVhZGVyVGVtcGxhdGUsIHNsb3RJbmRleCA9IDApIHtcbiAgICBjb25zdCBsb25nTW9udGhOYW1lcyA9IHRoaXMubG9jYWxlLmxvbmdNb250aE5hbWVzW21vbnRoXTtcbiAgICBjb25zdCBtb250aERvbSA9IGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5tb250aCh7XG4gICAgICBsYWJlbDogbG9uZ01vbnRoTmFtZXMsXG4gICAgICBjYXB0aW9uOiB0aGlzLmNhcHRpb25UZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aCksXG4gICAgICBoZWFkZXI6IGhlYWRlclRlbXBsYXRlLFxuICAgICAgYm9keTogdGhpcy5kYXlzVGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgpXG4gICAgfSkpO1xuXG4gICAgbW9udGhEb20uYm9keSA9IG1vbnRoRG9tLnF1ZXJ5U2VsZWN0b3IoYC4ke3N0eWxlcy5ib2R5fWApO1xuXG4gICAgbW9udGhEb20ubW9udGggICAgICAgPSBtb250aDtcbiAgICBtb250aERvbS55ZWFyICAgICAgICA9IHllYXI7XG4gICAgbW9udGhEb20uc2xvdEluZGV4ICAgPSBzbG90SW5kZXg7XG4gICAgbW9udGhEb20uZGF5RWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG1vbnRoRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpKTtcblxuICAgIHJldHVybiBtb250aERvbTtcbiAgfVxuXG4gIGNhcHRpb25UZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZXMueWVhclBpY2tlcih7XG4gICAgICBsYWJlbDogYCR7dGhpcy5sb2NhbGUubG9uZ01vbnRoTmFtZXNbbW9udGhdfSAke3llYXJ9YCxcbiAgICAgIGNoZXZyb25Eb3duSWQ6IGAke3RoaXMuQ1NTX1BSRUZJWH1DaGV2cm9uRG93bmBcbiAgICB9KTtcbiAgfVxuXG4gIG1pbmltdW1TZWxlY3RhYmxlWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRDbGFtcFRvQ3VycmVudERhdGUoKSA/IHRoaXMub3B0cy5jdXJyZW50RGF0ZVswXSA6IG51bGw7XG4gIH1cblxuICBtaW5pbXVtU2VsZWN0YWJsZU1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZENsYW1wVG9DdXJyZW50RGF0ZSgpID8gdGhpcy5vcHRzLmN1cnJlbnREYXRlWzFdIDogbnVsbDtcbiAgfVxuXG4gIHNob3VsZENsYW1wVG9DdXJyZW50RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRzLmlzQmFja0Rpc2FibGVkICYmICF0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cztcbiAgfVxuXG4gIGNsYW1wVmlzaWJsZU1vbnRoU3RhcnQoeWVhciwgbW9udGgpIHtcbiAgICBjb25zdCBtaW5pbXVtWWVhciA9IHRoaXMubWluaW11bVNlbGVjdGFibGVZZWFyKCk7XG4gICAgY29uc3QgbWluaW11bU1vbnRoID0gdGhpcy5taW5pbXVtU2VsZWN0YWJsZU1vbnRoKCk7XG5cbiAgICBpZiAobWluaW11bVllYXIgPT09IG51bGwgfHwgbWluaW11bU1vbnRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm4geyB5ZWFyLCBtb250aCB9O1xuICAgIH1cblxuICAgIGlmICh5ZWFyIDwgbWluaW11bVllYXIgfHwgKHllYXIgPT09IG1pbmltdW1ZZWFyICYmIG1vbnRoIDwgbWluaW11bU1vbnRoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogbWluaW11bVllYXIsXG4gICAgICAgIG1vbnRoOiBtaW5pbXVtTW9udGhcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeWVhciwgbW9udGggfTtcbiAgfVxuXG4gIHNoaWZ0TW9udGgoeWVhciwgbW9udGgsIG9mZnNldCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRNb250aCA9IG1vbnRoICsgb2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHllYXIgKyBNYXRoLmZsb29yKG5vcm1hbGl6ZWRNb250aCAvIDEyKSxcbiAgICAgIG1vbnRoOiAoKG5vcm1hbGl6ZWRNb250aCAlIDEyKSArIDEyKSAlIDEyXG4gICAgfTtcbiAgfVxuXG4gIGhlYWRlclRlbXBsYXRlU3RyaW5nKCkge1xuICAgIC8vIGp1c3QgdG8gbWFrZSBsaWZlIGVhc2llciB3aXRoIHN0YXJ0IG9mIHRoZSB3ZWVrIGNhbGN1bGF0aW9uXG4gICAgY29uc3QgaGVhZGVyICAgICAgICAgICAgICAgICA9IFtdO1xuICAgIGNvbnN0IHdlZWtkYXlzTGFiZWxzRXh0ZW5kZWQgPSB0aGlzLmxvY2FsZS5zaG9ydFdlZWtkYXlOYW1lcy5jb25jYXQodGhpcy5sb2NhbGUuc2hvcnRXZWVrZGF5TmFtZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdHMuZGF5c1BlcldlZWs7IGkgKz0gMSkge1xuICAgICAgaGVhZGVyLnB1c2godGVtcGxhdGVzLndlZWtEYXlMYWJlbCh3ZWVrZGF5c0xhYmVsc0V4dGVuZGVkW2kgKyB0aGlzLm9wdHMuc3RhcnRPZldlZWtdKSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXIuam9pbignJyk7XG4gIH1cblxuICBkYXlzVGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgpIHtcbiAgICBjb25zdCBzdGFydE9mTW9udGggID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoICAgPSBtb250aExlbmd0aCh5ZWFyLCBtb250aCk7XG4gICAgY29uc3Qgcm93VGVtcGxhdGUgICA9IHRlbXBsYXRlcy53ZWVrUm93O1xuICAgIGNvbnN0IHJvd0Nsb3NlICAgICAgPSByb3dUZW1wbGF0ZSgpLmNsb3NlO1xuICAgIGNvbnN0IHdlZWtTaGlmdCAgICAgPSAodGhpcy5vcHRzLmRheXNQZXJXZWVrIC0gdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrKTtcbiAgICBsZXQgbW9udGhUZW1wbGF0ZSAgID0gJyc7XG5cbiAgICBsZXQgcm93cyAgICAgICAgICAgICAgID0gNTtcbiAgICBsZXQgd2Vla1NoaWZ0Q29ycmVjdGVkID0gc3RhcnRPZk1vbnRoICsgd2Vla1NoaWZ0O1xuICAgIGxldCBkYXlDb3VudGVyICAgICAgICAgPSAwO1xuICAgIGxldCBkYXlPZk1vbnRoICAgICAgICAgPSAxO1xuXG4gICAgLy8gZG9uJ3QgcmVuZGVyIGZ1bGwgZW1wdHkgd2Vla1xuICAgIGlmICh3ZWVrU2hpZnRDb3JyZWN0ZWQgPj0gdGhpcy5vcHRzLmRheXNQZXJXZWVrKSB7XG4gICAgICB3ZWVrU2hpZnRDb3JyZWN0ZWQgLT0gdGhpcy5vcHRzLmRheXNQZXJXZWVrO1xuICAgIH1cblxuICAgIC8vIHRyeSB0byBmaWd1cmUgb3V0IGlmIDUgcm93cyBpcyBlbm91Z2ggZm9yIHRoZSBtb250aFxuICAgIGlmIChyb3dzICogdGhpcy5vcHRzLmRheXNQZXJXZWVrIDwgd2Vla1NoaWZ0Q29ycmVjdGVkICsgZGF5c0luTW9udGgpIHtcbiAgICAgIHJvd3MgPSA2O1xuICAgIH1cblxuICAgIC8vIGZvciBlYWNoIHdlZWsgKDUgb3IgNilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkgKz0gMSkge1xuICAgICAgbGV0IHdlZWsgPSByb3dUZW1wbGF0ZShpKS5vcGVuO1xuICAgICAgLy8gb3BlbiB0YWcgPHRyPlxuXG4gICAgICAvLyBwdXNoIGRheXMgaW4gd2Vla1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm9wdHMuZGF5c1BlcldlZWs7IGogKz0gMSkge1xuICAgICAgICAvLyBwdXNoaW5nIGFjdHVhbCBkYXlzIDEuLi5kYXlzSW5Nb250aFxuICAgICAgICBpZiAoKGRheUNvdW50ZXIgPj0gd2Vla1NoaWZ0Q29ycmVjdGVkKSAmJiBkYXlPZk1vbnRoIDw9IGRheXNJbk1vbnRoKSB7XG4gICAgICAgICAgd2VlayArPSB0aGlzLmRheVRlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoKTtcbiAgICAgICAgICBkYXlPZk1vbnRoICs9IDE7XG4gICAgICAgICAgLy8gcHVzaGluZyBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBkYXlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VlayArPSB0ZW1wbGF0ZXMud2Vla0RheVBsYWNlaG9sZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF5Q291bnRlciArPSAxO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2UgdGFnIDwvdHI+IG9mIHdlZWtcbiAgICAgIHdlZWsgKz0gcm93Q2xvc2U7XG4gICAgICAvLyBwdXNoIGNvbXBsZXRlZCB3ZWVrIHRvIG1vbnRoIHRlbXBsYXRlXG4gICAgICBtb250aFRlbXBsYXRlICs9IHdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoVGVtcGxhdGU7XG4gIH1cblxuICBkYXlUZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1pblN0YXksXG4gICAgICBtYXhTdGF5LFxuICAgICAgcmF0ZTogZGF5UmF0ZSxcbiAgICAgIGlzQXZhaWxhYmxlLFxuICAgICAgaXNBdmFpbGFibGVPdXQ6IGRheUlzQXZhaWxhYmxlT3V0LFxuICAgICAgaXNNb3JuaW5nQmxvY2tlZDogZGF5SXNNb3JuaW5nQmxvY2tlZFxuICAgIH0gPSB0aGlzLmNUcmVlLmdldERheSh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCkgfHwge307XG5cbiAgICBjb25zdCByYXRlID0gKHRoaXMub3B0cy5zaG93UmF0ZXMgJiYgZGF5UmF0ZSkgPyBkYXlSYXRlIDogMDtcblxuICAgIGxldCBpc0Rpc2FibGVkID0gIWlzQXZhaWxhYmxlO1xuICAgIGxldCBpc0F2YWlsYWJsZU91dCA9IGRheUlzQXZhaWxhYmxlT3V0O1xuICAgIGxldCBpc01vcm5pbmdCbG9ja2VkID0gZGF5SXNNb3JuaW5nQmxvY2tlZDtcblxuICAgIGNvbnN0IHsgY3VycmVudERhdGUgfSA9IHRoaXMub3B0cztcbiAgICBjb25zdCBkYXRlQXJyYXkgICAgICAgPSBbeWVhciwgbW9udGgsIGRheU9mTW9udGhdO1xuICAgIGNvbnN0IGlzQ3VycmVudERheSAgICA9IGlzQ3VycmVudChkYXRlQXJyYXksIGN1cnJlbnREYXRlKTtcblxuICAgIC8vIGRpc2FibGUgcGFzdCBkYXRlc1xuICAgIGlmIChpc0xhdGVyKGRhdGVBcnJheSwgY3VycmVudERhdGUpKSB7XG4gICAgICBpc0Rpc2FibGVkICAgICAgICA9IHRydWU7XG4gICAgICBpc01vcm5pbmdCbG9ja2VkICA9IG51bGw7XG4gICAgICBpc0F2YWlsYWJsZU91dCAgICA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gZGlzYWJsZSBjdXJyZW50IGRheSBtb3JuaW5nXG4gICAgaWYgKGlzQ3VycmVudERheSkge1xuICAgICAgaWYgKCEoaXNEaXNhYmxlZCAmJiBpc0F2YWlsYWJsZU91dCA9PT0gbnVsbCAmJiBpc01vcm5pbmdCbG9ja2VkID09PSBudWxsKSkge1xuICAgICAgICBpc01vcm5pbmdCbG9ja2VkICA9IHRydWU7XG5cbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlT3V0ID09PSBudWxsKSB7XG4gICAgICAgICAgaXNBdmFpbGFibGVPdXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm90IHJlbnRhbElkIGFuZCBubyBtYXBzLCBqdXN0IHJlbmRlciBwbGFpbiBjYWxlbmRhclxuICAgIGlmICghdGhpcy5vcHRzLnJlbnRhbElkIHx8IHRoaXMub3B0cy5lbmFibGVBbGxEYXlzKSB7XG4gICAgICBpZiAoaXNMYXRlcihjdXJyZW50RGF0ZSwgZGF0ZUFycmF5KSkge1xuICAgICAgICBpc0Rpc2FibGVkICAgICAgICA9IGZhbHNlO1xuICAgICAgICBpc0F2YWlsYWJsZU91dCAgICA9IHRydWU7XG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQgID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0N1cnJlbnREYXkpIHtcbiAgICAgICAgaXNEaXNhYmxlZCAgICAgICAgPSB0cnVlO1xuICAgICAgICBpc01vcm5pbmdCbG9ja2VkICA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdmFpbGFibGVJbiA9IGlzTW9ybmluZ0Jsb2NrZWQgPT0gZmFsc2U7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCAmJiBpc0F2YWlsYWJsZUluKSB7XG4gICAgICBpc0Rpc2FibGVkID0gJ2xlZnQnO1xuICAgIH0gZWxzZSBpZiAoaXNNb3JuaW5nQmxvY2tlZCkge1xuICAgICAgaXNEaXNhYmxlZCA9ICdyaWdodCc7XG4gICAgfSBlbHNlIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBpc0Rpc2FibGVkID0gJ2NlbnRlcic7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZVN0ciA9IHN0cmZ0aW1lKGRhdGVUb0lzbyh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCksIHRoaXMubG9jYWxlLmZvcm1hdERhdGUsIHRoaXMubG9jYWxlKTtcbiAgICBjb25zdCByYXRlVCA9IHJhdGUgPyBjdXJyZW5jeUZvcm1hdHRlcihNYXRoLnJvdW5kKHJhdGUpLCB0aGlzLm9wdHMubGFuZywgdGhpcy5vcHRzLmN1cnJlbmN5IHx8IHRoaXMubG9jYWxlLmN1cnJlbmN5KSA6IGZhbHNlO1xuICAgIGNvbnN0IG1pblN0YXlUID0gKHRoaXMub3B0cy5zaG93TWluU3RheSAmJiBtaW5TdGF5KSA/IHRGb3JtYXR0ZXIobWluU3RheSwgdGhpcy5sb2NhbGUubWluU3RheSkgOiBmYWxzZTtcbiAgICBjb25zdCBtYXhTdGF5VCA9ICh0aGlzLm9wdHMuc2hvd01heFN0YXkgJiYgbWF4U3RheSkgPyB0Rm9ybWF0dGVyKG1heFN0YXksIHRoaXMubG9jYWxlLm1heFN0YXkpIDogZmFsc2U7XG5cbiAgICAvLyBCdWlsZCBlbnJpY2hlZCBhcmlhLWxhYmVsIGZvciBzY3JlZW4gcmVhZGVyc1xuICAgIGNvbnN0IGFyaWFMYWJlbFBhcnRzID0gW2RhdGVTdHJdO1xuXG4gICAgaWYgKGlzQ3VycmVudERheSkge1xuICAgICAgYXJpYUxhYmVsUGFydHMucHVzaCh0aGlzLmxvY2FsZS5sYWJlbHMudG9kYXkgfHwgJ3RvZGF5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIGFyaWFMYWJlbFBhcnRzLnB1c2godGhpcy5sb2NhbGUubGFiZWxzLnVuYXZhaWxhYmxlIHx8ICd1bmF2YWlsYWJsZScpO1xuICAgIH1cblxuICAgIGlmIChyYXRlVCkge1xuICAgICAgYXJpYUxhYmVsUGFydHMucHVzaChyYXRlVCk7XG4gICAgfVxuXG4gICAgaWYgKG1pblN0YXlUKSB7XG4gICAgICBhcmlhTGFiZWxQYXJ0cy5wdXNoKG1pblN0YXlUKTtcbiAgICB9XG5cbiAgICBpZiAobWF4U3RheVQpIHtcbiAgICAgIGFyaWFMYWJlbFBhcnRzLnB1c2gobWF4U3RheVQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBsYWJlbDogZGF5T2ZNb250aCxcbiAgICAgIGRhdGU6IGRhdGVTdHIsXG4gICAgICBhcmlhTGFiZWw6IGFyaWFMYWJlbFBhcnRzLmpvaW4oJywgJyksXG4gICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzQXZhaWxhYmxlSW4sXG4gICAgICBpc0F2YWlsYWJsZU91dCxcbiAgICAgIGlzQ3VycmVudERheSxcbiAgICAgIG1pblN0YXksXG4gICAgICBtaW5TdGF5VCxcbiAgICAgIG1heFN0YXksXG4gICAgICBtYXhTdGF5VCxcbiAgICAgIHJhdGUsXG4gICAgICByYXRlVCxcbiAgICAgIHRhYmluZGV4OiB0aGlzLm9wdHMuc2VsZWN0YWJsZSA/IDAgOiAtMVxuICAgIH07XG5cbiAgICByZXR1cm4gdGVtcGxhdGVzLndlZWtEYXkob3B0aW9ucyk7XG4gIH1cblxuICBkZXN0cm95TW9udGhzKCkge1xuICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG5cbiAgICBpZiAodGhpcy5kb20gJiYgaXNBcnJheSh0aGlzLmRvbS5tb250aHMpKSB7XG4gICAgICB0aGlzLmRvbS5tb250aHMuZm9yRWFjaCgobSkgPT4gZGVzdHJveUVsZW1lbnQobSkpO1xuICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZW1vdmVWaWV3cG9ydEV2ZW50cygpO1xuICAgIHRoaXMuY2xvc2VZZWFyUGlja2VyKCk7XG4gICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuXG4gICAgaWYgKHRoaXMuY2FsRHJvcCAmJiBpc0Z1bmN0aW9uKHRoaXMuY2FsRHJvcC5kZXN0cm95KSkge1xuICAgICAgdGhpcy5jYWxEcm9wLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2FsRHJvcCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25Eb2N1bWVudENsaWNrKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbkRvY3VtZW50S2V5ZG93bikge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Eb2N1bWVudEtleWRvd24pO1xuICAgICAgdGhpcy5vbkRvY3VtZW50S2V5ZG93biA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Ryb3lFbGVtZW50KHRoaXMuZWwpO1xuICB9XG5cbiAgbG9hZE1hcHMoaWQpIHtcbiAgICB0aGlzLmxvZ2dlcignbG9hZGluZyBtYXBzJyk7XG4gICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XG5cbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAobWFwcykgPT4ge1xuICAgICAgaWYgKGlzQXJyYXkobWFwcy5kYXRhKSAmJiBtYXBzLmRhdGFbMF0uYXR0cmlidXRlcykge1xuICAgICAgICBpZiAodGhpcy5vcHRzLmRpc2FibGVBdmFpbGFiaXR5TWFwKSB7XG4gICAgICAgICAgbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5ID0gbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5LnJlcGxhY2UoL1swLTldL2csICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRzLmN1cnJlbmN5ID0gdGhpcy5vcHRzLmN1cnJlbmN5IHx8IG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzLmN1cnJlbmN5O1xuICAgICAgICB0aGlzLmFkZE1hcHMobWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtYXBzLWxvYWRlZCcsIG1hcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMubG9nZ2VyKCdleHBlY3RzIGpzb24tYXBpIGRhdGEgZm9ybWF0JywgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuZW1pdCgnbWFwcy1lcnJvcicpO1xuICAgICAgdGhpcy5sb2dnZXIoJ1NlcnZlciBlcnJvciBoYXBwZW5lZCcsICdlcnJvcicpO1xuICAgIH07XG5cbiAgICBmZXRjaCh0aGlzLm9wdHMucmVudGFsVXJsKGlkKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ob25TdWNjZXNzKVxuICAgICAgLmNhdGNoKG9uRXJyb3IpO1xuICB9XG5cbiAgY29tcGxldGVTZWxlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3B0cy5pc1NpbmdsZUlucHV0KSB7XG4gICAgICBjb25zdCBzaW5nbGVJbnB1dERhdGVGb3JtYXQgPSB0aGlzLm9wdHMuc2luZ2xlSW5wdXREYXRlRm9ybWF0IHx8IHRoaXMubG9jYWxlLmZvcm1hdERhdGU7XG5cbiAgICAgIGNvbnN0IGRhdGVTdGFydCA9IHN0cmZ0aW1lKGRhdGVUb0lzbyguLi50aGlzLnNlbGVjdGlvblN0YXJ0KSwgc2luZ2xlSW5wdXREYXRlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgICBjb25zdCBkYXRlRW5kICAgPSBzdHJmdGltZShkYXRlVG9Jc28oLi4udGhpcy5zZWxlY3Rpb25FbmQpLCBzaW5nbGVJbnB1dERhdGVGb3JtYXQsIHRoaXMubG9jYWxlKTtcblxuICAgICAgdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQudmFsdWUgPSBgJHtkYXRlU3RhcnR9ICR7dGhpcy5vcHRzLnNpbmdsZUlucHV0U2VwYXJhdG9yfSAke2RhdGVFbmR9YDtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1jb21wbGV0ZWQnLCB0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uU2VsZWN0aW9uQ29tcGxldGVkKSkge1xuICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0aW9uQ29tcGxldGVkKFxuICAgICAgICBkYXRlVG9Jc28oLi4udGhpcy5zZWxlY3Rpb25TdGFydCwgdHJ1ZSksIGRhdGVUb0lzbyguLi50aGlzLnNlbGVjdGlvbkVuZCwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaW5pdENhbGVuZGFyRHJvcCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21TdHJpbmcoJzxkaXY+PC9kaXY+Jyk7XG4gICAgdGhpcy5lbFRhcmdldCA9IHRoaXMub3B0cy5lbDtcbiAgICB0aGlzLmVsICAgICAgID0gZWxlbWVudDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLm9wdHMuZWxTdGFydEF0ICAgICA9IHRoaXMub3B0cy5lbFN0YXJ0QXQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5DU1NfUFJFRklYfV9fc3RhcnQtYXRgKTtcbiAgICB0aGlzLm9wdHMuZWxFbmRBdCAgICAgICA9IHRoaXMub3B0cy5lbEVuZEF0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuQ1NTX1BSRUZJWH1fX2VuZC1hdGApO1xuICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0ID0gdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5DU1NfUFJFRklYfV9fc2luZ2xlLWlucHV0YCk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmhpZGRlbkVsRm9ybWF0KSB7XG4gICAgICBbdGhpcy5vcHRzLmVsU3RhcnRBdCwgdGhpcy5vcHRzLmVsRW5kQXRdLmZvckVhY2goKGlucHV0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gaW5wdXQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhpZGRlbklucHV0KTtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgIGhpZGRlbklucHV0LmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICBoaWRkZW5JbnB1dC5oaWRkZW4gICAgPSB0cnVlO1xuXG4gICAgICAgIChpKSA/IHRoaXMuaGlkZGVuRWxFbmRBdCA9IGhpZGRlbklucHV0IDogdGhpcy5oaWRkZW5FbFN0YXJ0QXQgPSBoaWRkZW5JbnB1dDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xuICAgICAgdGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICBbdGhpcy5vcHRzLmVsU3RhcnRBdCwgdGhpcy5vcHRzLmVsRW5kQXRdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuZHJvcEJhc2ljKTtcblxuICAgIC8vIEFkZCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsZS5sYWJlbHMuY2FsZW5kYXIpO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICBjb25zdCBvcGVuRHJvcCA9IChpbnB1dCwgaXNSZXZlcnNlZCkgPT4ge1xuICAgICAgdGhpcy5zd2l0Y2hJbnB1dEZvY3VzKGlucHV0KTtcbiAgICAgIHRoaXMuY2hhbmdlU2VsZWN0aW9uT3JkZXIoaXNSZXZlcnNlZCk7XG5cbiAgICAgIGlmICghaGFzQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnZpc2libGUpKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWxEcm9wKSB7XG4gICAgICAgICAgdGhpcy5jYWxEcm9wID0gY3JlYXRlUG9zaXRpb25lcih0aGlzLmVsVGFyZ2V0LCB0aGlzLmVsLCB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMub3B0cy5kcm9wUGxhY2VtZW50LFxuICAgICAgICAgICAgaGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmVyVXBkYXRlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMudmlzaWJsZSk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB0aGlzLmNhbERyb3AudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnZHJvcC1vcGVuJyk7XG4gICAgICAgIHRoaXMuZG9tLm1vbnRoc1dyYXBwZXIucXVlcnlTZWxlY3RvcignW3JvbGU9XCJncmlkY2VsbFwiXVt0YWJpbmRleD1cIjBcIl0nKS5mb2N1cygpO1xuXG4gICAgICAgIGlmICghdGhpcy5tYXBzTG9hZGVkICYmIHRoaXMub3B0cy5yZW50YWxJZCkge1xuICAgICAgICAgIHRoaXMubG9hZE1hcHModGhpcy5vcHRzLnJlbnRhbElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRzLmlzU2luZ2xlSW5wdXQpIHtcbiAgICAgIHRoaXMuZm9jdXNUb3VjaEV2ZW50cyh0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dCwgKCkgPT4ge1xuICAgICAgICBvcGVuRHJvcCgnc3RhcnQnLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb2N1c1RvdWNoRXZlbnRzKHRoaXMub3B0cy5lbFN0YXJ0QXQsICgpID0+IHtcbiAgICAgICAgb3BlbkRyb3AoJ3N0YXJ0JywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmZvY3VzVG91Y2hFdmVudHModGhpcy5vcHRzLmVsRW5kQXQsICgpID0+IHtcbiAgICAgICAgb3BlbkRyb3AoJ2VuZCcsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcC5iaW5kKHRoaXMpKTtcblxuICAgIGlmICh0aGlzLm9wdHMuZWxSZXNldCkge1xuICAgICAgdGhpcy5vcHRzLmVsUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcChlLCBmb3JjZSkge1xuICAgIGlmICghZm9yY2UgJiYgKGlzSW5zaWRlKGUudGFyZ2V0LCB0aGlzLmVsKSB8fCBpc0luc2lkZShlLnRhcmdldCwgdGhpcy5lbFRhcmdldCkpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMudmlzaWJsZSk7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuICAgICAgdGhpcy5lbWl0KCdkcm9wLWNsb3NlJyk7XG4gICAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ2FueScpO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlVG9JbnB1dChpbnB1dCwgZGF0ZVZhbHVlKSB7XG4gICAgY29uc3QgeyBlbFN0YXJ0QXQgfSA9IHRoaXMub3B0cztcbiAgICBjb25zdCB7IGVsRW5kQXQgfSAgID0gdGhpcy5vcHRzO1xuXG4gICAgY29uc3QgZGF0ZSAgPSBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZSA9IHN0cmZ0aW1lKGRhdGUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgY29uc3QgZXZ0ICAgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblxuICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLm9wdHMuaGlkZGVuRWxGb3JtYXQpIHtcbiAgICAgIGNvbnN0IGhpZGRlblZhbHVlID0gc3RyZnRpbWUoZGF0ZSwgdGhpcy5vcHRzLmhpZGRlbkVsRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG5cbiAgICAgIGlmIChpbnB1dCA9PT0gJ3N0YXJ0JyAmJiB0aGlzLmhpZGRlbkVsU3RhcnRBdCkge1xuICAgICAgICB0aGlzLmhpZGRlbkVsU3RhcnRBdC52YWx1ZSA9IGhpZGRlblZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gJ2VuZCcgJiYgdGhpcy5oaWRkZW5FbEVuZEF0KSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRWxFbmRBdC52YWx1ZSA9IGhpZGRlblZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnB1dCA9PT0gJ3N0YXJ0JyAmJiBlbFN0YXJ0QXQpIHtcbiAgICAgIGVsU3RhcnRBdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgZWxTdGFydEF0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAnZW5kJyAmJiBlbEVuZEF0KSB7XG4gICAgICBlbEVuZEF0LnZhbHVlID0gdmFsdWU7XG4gICAgICBlbEVuZEF0LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH1cblxuICBpbnB1dHNUb1ZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5vcHRzLmVsU3RhcnRBdC52YWx1ZSA9PT0gJycgJiYgdGhpcy5vcHRzLmVsRW5kQXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgID0gZGF0ZVRvQXJyYXkodGhpcy5vcHRzLmVsU3RhcnRBdC52YWx1ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICBjb25zdCBzZWxlY3Rpb25FbmQgICAgPSBkYXRlVG9BcnJheSh0aGlzLm9wdHMuZWxFbmRBdC52YWx1ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSB0aGlzLm9wdHM7XG5cbiAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG5cbiAgICBpZiAoaXNBcnJheShzZWxlY3Rpb25TdGFydCkgJiYgaXNBcnJheShzZWxlY3Rpb25FbmQpKSB7XG4gICAgICBpZiAoKGlzTGF0ZXIoY3VycmVudERhdGUsIHNlbGVjdGlvblN0YXJ0KSB8fCBpc0N1cnJlbnQoY3VycmVudERhdGUsIHNlbGVjdGlvblN0YXJ0KSkgJiYgaXNMYXRlcihzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKSkge1xuICAgICAgICBjb25zdCBtb250aERpZmZlcmVuY2UgPSBtb250aERpZmYoXG4gICAgICAgICAgZGF0ZVRvSXNvKHRoaXMub3B0cy55ZWFyU3RhcnQsIHRoaXMub3B0cy5tb250aFN0YXJ0LCAxKSxcbiAgICAgICAgICBkYXRlVG9Jc28oLi4uc2VsZWN0aW9uRW5kKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHsgdHJlZSB9ID0gdGhpcy5jcmVhdGVUcmVlKHRoaXMub3B0cy55ZWFyU3RhcnQsIHRoaXMub3B0cy5tb250aFN0YXJ0LCBtb250aERpZmZlcmVuY2UpO1xuXG4gICAgICAgIHRoaXMuY1RyZWUuYWRkVHJlZSh0cmVlKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDtcbiAgICAgICAgdGhpcy5yZWNvdmVyU2VsZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgICAgICB0aGlzLnJlbmRlck1vbnRocyhzZWxlY3Rpb25FbmRbMF0sIHNlbGVjdGlvbkVuZFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlcihgaW52YWxpZCByYW5nZTogXCJbJHtzZWxlY3Rpb25TdGFydH1dXCIgXCJbJHtzZWxlY3Rpb25FbmR9XVwiYCwgJ3dhcm4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uU3RhcnQgJiYgc2VsZWN0aW9uRW5kKSB7XG4gICAgICB0aGlzLmxvZ2dlcihgaW52YWxpZCBkYXRlczogXCIke3NlbGVjdGlvblN0YXJ0fVwiIFwiJHtzZWxlY3Rpb25FbmR9XCJgLCAnd2FybicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaElucHV0Rm9jdXModHlwZSkge1xuICAgIGlmICh0aGlzLm9wdHMuZWxTdGFydEF0ICYmIHRoaXMub3B0cy5lbEVuZEF0KSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLm9wdHMuZWxTdGFydEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnZW5kJykge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsU3RhcnRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxTdGFydEF0LCBzdHlsZXMuZm9jdXMpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1c1RvdWNoRXZlbnRzKGVsZW1lbnQsIF9jYWxsYmFjaykge1xuICAgIGlmIChpc0Z1bmN0aW9uKF9jYWxsYmFjaykpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9jYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9ICR7dGhpcy5WRVJTSU9OfV0gYDtcbiAgfVxuXG4gIGxvZ2dlcihtc2csIHR5cGUgPSAnbG9nJykge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGVbdHlwZV0pIHtcbiAgICAgIGNvbnNvbGVbdHlwZV0odGhpcy50b1N0cmluZygpICsgbXNnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBwcm9jZXNzICovXG5cbmNvbnN0IG5hbWUgPSAnc21pbHktY2FsZW5kYXItd2lkZ2V0JztcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lLFxuICBjc3NQcmVmaXg6ICdTbWlseUNhbGVuZGFyJyxcbiAgYXBpSG9zdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyA6ICdodHRwczovL3NlY3VyZS5zbWlseS5jb20nLFxuICBhcGlOYW1lc3BhY2U6ICcvYXBpL3YyL3B1YmxpYycsXG4gIGFwaU1hcHNSb3V0ZTogJy9tYXBzLmpzb24/e2FwaVJlbnRhbElkfXthcGlDdXJyZW5jeX0nLFxuICBhcGlSZW50YWxJZDogJ3JlbnRhbF9pZD0nLFxuICBhcGlDdXJyZW5jeTogJyZleGNoYW5nZV90b19jdXJyZW5jeT0nLFxuXG4gIHJlbnRhbFVybChpZHMpIHtcbiAgICBsZXQgcm91dGUgPSB0aGlzLmFwaU1hcHNSb3V0ZS5yZXBsYWNlKCd7YXBpUmVudGFsSWR9JywgYCR7dGhpcy5hcGlSZW50YWxJZH0ke2lkc31gKTtcbiAgICByb3V0ZSA9IHJvdXRlLnJlcGxhY2UoJ3thcGlDdXJyZW5jeX0nLCAodGhpcy5jdXJyZW5jeSkgPyBgJHt0aGlzLmFwaUN1cnJlbmN5fSR7dGhpcy5jdXJyZW5jeX1gIDogJycpO1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUhvc3R9JHt0aGlzLmFwaU5hbWVzcGFjZX0ke3JvdXRlfWA7XG4gIH0sXG5cbiAgc3RhcnRPZldlZWs6IDAsIC8vIDAgU3VuIDEgTW9uLi4uLjYgU2F0XG4gIG1pblN0YXk6IDEsIC8vIGNhbiBzZWxlY3Qgb25lIG5pZ2h0XG4gIG1heFN0YXk6IEluZmluaXR5LCAvLyBjYW4gc2VsZWN0IGluZmluaXRlIG5pZ2h0c1xuICBtb250aFN0YXJ0OiBudWxsLCAvLyBzdGFydCB3aXRoIGN1cnJlbnQgbW9udGggYnkgZGVmYXVsdCBNICcwLi4uMTEnXG4gIHllYXJTdGFydDogbnVsbCwgLy8gc3RhcnQgd2l0aCBjdXJyZW50IHllYXIgWVlZWVxuICBkYXlzUGVyV2VlazogNywgLy8gRklYTUUgc3VwcG9ydCBjYWxlbmRhciByZW5kZXJpbmdcbiAgZGlzcGxheU1vbnRoczogMixcbiAgZGlzcGxheU1vbnRoc01vYmlsZTogbnVsbCwgLy8gZmFsbHMgYmFjayB0byBkaXNwbGF5TW9udGhzXG4gIG1vYmlsZUJyZWFrcG9pbnQ6IDc2NywgLy8gcHgsIDw9IGJyZWFrcG9pbnQgaXMgbW9iaWxlXG4gIHNob3dQYWdpbmF0aW9uTW9iaWxlOiB0cnVlLFxuICBtb250aHNQYWdpbmF0aW9uSnVtcDogMSxcbiAgc2VsZWN0YWJsZTogZmFsc2UsXG4gIHNob3dSYXRlczogZmFsc2UsXG4gIGlzUmV2ZXJzZVNlbGVjdGFibGU6IGZhbHNlLCAvLyBzZWxlY3QgZW5kIGRhdGUgZmlyc3RcbiAgaXNCYWNrRGlzYWJsZWQ6IHRydWUsXG4gIGlzRHJvcERvd246IGZhbHNlLFxuICBkcm9wUGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgZWw6IG51bGwsXG4gIGVsU3RhcnRBdDogbnVsbCxcbiAgZWxFbmRBdDogbnVsbCxcbiAgZWxTaW5nbGVJbnB1dDogbnVsbCxcbiAgaXNTaW5nbGVJbnB1dDogbnVsbCxcbiAgc2luZ2xlSW5wdXREYXRlRm9ybWF0OiBudWxsLFxuICBzaW5nbGVJbnB1dFNlcGFyYXRvcjogJ+KGkicsXG4gIGVsUmVzZXQ6IG51bGwsXG4gIGZvcm1hdERhdGU6IG51bGwsXG4gIGhpZGRlbkVsRm9ybWF0OiBudWxsLFxuICByZW50YWxJZDogbnVsbCxcbiAgY3VycmVuY3k6IG51bGwsXG4gIGRpc2FibGVBdmFpbGFiaXR5TWFwOiBmYWxzZSxcbiAgYWxsb3dTaG9ydGVyTWluU3RheVNlbGVjdGlvbjogZmFsc2UsXG4gIGFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbjogZmFsc2UsXG4gIGVuYWJsZUFsbERheXM6IGZhbHNlLFxuICBjdXJyZW50RGF0ZSxcbiAgdGhlbWU6ICdiYXNpYydcbn07XG4iLCJsZXQgbG9jYWxlcyA9IHtcbiAgJ2VuLUdCJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0dCUCcsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5pZ2h0cycsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdtaW5pbXVtIHN0YXk6ICVudW1iZXIgbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21heGltdW0gc3RheTogJW51bWJlciBuaWdodHMnLFxuICAgIGhhc0ludmFsaWREYXlzOiAnYm9va2VkIGFscmVhZHknLFxuICAgIHN0YXJ0T2ZXZWVrOiAwLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcicsXG4gICAgICBtb250aHM6ICdNb250aHMnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ05leHQgbW9udGgnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdQcmV2aW91cyBtb250aCcsXG4gICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdQcmV2aW91cyB5ZWFycycsXG4gICAgICBuZXh0WWVhcnM6ICdOZXh0IHllYXJzJyxcbiAgICAgIHRvZGF5OiAndG9kYXknLFxuICAgICAgdW5hdmFpbGFibGU6ICd1bmF2YWlsYWJsZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnU3RhcnQgZGF0ZTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdFbmQgZGF0ZTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnZW4tVVMnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbmlnaHRzJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ21pbmltdW0gc3RheTogJW51bWJlciBuaWdodHMnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWF4aW11bSBzdGF5OiAlbnVtYmVyIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZERheXM6ICdib29rZWQgYWxyZWFkeScsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0NhbGVuZGFyJyxcbiAgICAgIG1vbnRoczogJ01vbnRocycsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTmV4dCBtb250aCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ1ByZXZpb3VzIG1vbnRoJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgcHJldmlvdXNZZWFyczogJ1ByZXZpb3VzIHllYXJzJyxcbiAgICAgIG5leHRZZWFyczogJ05leHQgeWVhcnMnLFxuICAgICAgdG9kYXk6ICd0b2RheScsXG4gICAgICB1bmF2YWlsYWJsZTogJ3VuYXZhaWxhYmxlJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdTdGFydCBkYXRlOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0VuZCBkYXRlOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdkZS1ERSc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ1NvX01vX0RpX01pX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ0phbnVhcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ0phbl9GZWJfTcOkcl9BcHJfTWFpX0p1bl9KdWxfQXVnX1NlcF9Pa3RfTm92X0Rleicuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG7DpGNodGUnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuw6RjaHRlJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ21pbmRlc3RhdWZlbnRoYWx0OiAlbnVtYmVyIE7DpGNodGUnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWF4aW1hbGVyIEF1ZmVudGhhbHQ6ICVudW1iZXIgTsOkY2h0ZScsXG4gICAgaGFzSW52YWxpZERheXM6ICdzY2hvbiBnZWJ1Y2h0JyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnS2FsZW5kZXInLFxuICAgICAgbW9udGhzOiAnTW9uYXRlJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdOw6RjaHN0ZXIgTW9uYXQnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdWb3JoZXJpZ2VyIE1vbmF0JyxcbiAgICAgIGNsb3NlOiAnU2NobGllw59lbicsXG4gICAgICBwcmV2aW91c1llYXJzOiAnVm9yaGVyaWdlIEphaHJlJyxcbiAgICAgIG5leHRZZWFyczogJ07DpGNoc3RlIEphaHJlJyxcbiAgICAgIHRvZGF5OiAnaGV1dGUnLFxuICAgICAgdW5hdmFpbGFibGU6ICduaWNodCB2ZXJmw7xnYmFyJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdTdGFydGRhdHVtOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0VuZGRhdHVtOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdlcy1FUyc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ0RvX0x1X01hX01pX0p1X1ZpX1PDoScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5vY2hlcycsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vY2hlcycsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdlc3RhbmNpYSBtw61uaW1hOiAlbnVtYmVyIG5vY2hlcycsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdlc3RhbmNpYSBtw6F4aW1hOiAlbnVtYmVyIG5vY2hlcycsXG4gICAgaGFzSW52YWxpZERheXM6ICd5YSByZXNlcnZhZG8nLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcmlvJyxcbiAgICAgIG1vbnRoczogJ01lc2VzJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdQcsOzeGltbyBtZXMnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdNZXMgYW50ZXJpb3InLFxuICAgICAgY2xvc2U6ICdDZXJyYXInLFxuICAgICAgcHJldmlvdXNZZWFyczogJ0HDsW9zIGFudGVyaW9yZXMnLFxuICAgICAgbmV4dFllYXJzOiAnQcOxb3Mgc2lndWllbnRlcycsXG4gICAgICB0b2RheTogJ2hveScsXG4gICAgICB1bmF2YWlsYWJsZTogJ25vIGRpc3BvbmlibGUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ0ZlY2hhIGRlIGluaWNpbzogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdGZWNoYSBkZSBmaW46ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ2ZyLUZSJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnRGlfTHVfTWFfTWVfSmVfVmVfU2EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ2RpbWFuY2hlX2x1bmRpX21hcmRpX21lcmNyZWRpX2pldWRpX3ZlbmRyZWRpX3NhbWVkaScuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ2phbnZpZXJfZsOpdnJpZXJfbWFyc19hdnJpbF9tYWlfanVpbl9qdWlsbGV0X2Fvw7t0X3NlcHRlbWJyZV9vY3RvYnJlX25vdmVtYnJlX2TDqWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdqYW5fZsOpdl9tYXJfYXZyX21haV9qdWluX2p1aWxfYW/Du19zZXBfb2N0X25vdl9kw6ljJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclZCAlYiwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbnVpdHMnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBudWl0cycsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdzw6lqb3VyIG1pbmltdW0gOiAlbnVtYmVyIG51aXRzJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ3PDqWpvdXIgbWF4aW11bSA6ICVudW1iZXIgbnVpdHMnLFxuICAgIGhhc0ludmFsaWREYXlzOiAnZMOpasOgIHLDqXNlcnbDqScsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0NhbGVuZHJpZXInLFxuICAgICAgbW9udGhzOiAnTW9pcycsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTW9pcyBzdWl2YW50JyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnTW9pcyBwcsOpY8OpZGVudCcsXG4gICAgICBjbG9zZTogJ0Zlcm1lcicsXG4gICAgICBwcmV2aW91c1llYXJzOiAnQW5uw6llcyBwcsOpY8OpZGVudGVzJyxcbiAgICAgIG5leHRZZWFyczogJ0FubsOpZXMgc3VpdmFudGVzJyxcbiAgICAgIHRvZGF5OiBcImF1am91cmQnaHVpXCIsXG4gICAgICB1bmF2YWlsYWJsZTogJ2luZGlzcG9uaWJsZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnRGF0ZSBkZSBkw6lidXQgOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0RhdGUgZGUgZmluIDogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnaXQtSVQnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdEb19MdV9NYV9NZV9HaV9WZV9TYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnZG9tZW5pY2FfbHVuZWTDrF9tYXJ0ZWTDrF9tZXJjb2xlZMOsX2dpb3ZlZMOsX3ZlbmVyZMOsX3NhYmF0bycuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ2dlbm5haW9fZmViYnJhaW9fbWFyem9fYXByaWxlX21hZ2dpb19naXVnbm9fbHVnbGlvX2Fnb3N0b19zZXR0ZW1icmVfb3R0b2JyZV9ub3ZlbWJyZV9kaWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdnZW5fZmViX21hcl9hcHJfbWFnX2dpdV9sdWdfYWdvX3NldF9vdHRfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5vdHRpLicsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5vdHRpJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ3NvZ2dpb3JubyBtaW5pbTogJW51bWJlciBub3R0aScsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdzb2dnaW9ybm8gbWFzc2ltbzogJW51bWJlciBub3R0aScsXG4gICAgaGFzSW52YWxpZERheXM6ICdnacOgIHByZW5vdGF0bycsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0NhbGVuZGFyaW8nLFxuICAgICAgbW9udGhzOiAnTWVzaScsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTWVzZSBzdWNjZXNzaXZvJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnTWVzZSBwcmVjZWRlbnRlJyxcbiAgICAgIGNsb3NlOiAnQ2hpdWRpJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdBbm5pIHByZWNlZGVudGknLFxuICAgICAgbmV4dFllYXJzOiAnQW5uaSBzdWNjZXNzaXZpJyxcbiAgICAgIHRvZGF5OiAnb2dnaScsXG4gICAgICB1bmF2YWlsYWJsZTogJ25vbiBkaXNwb25pYmlsZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnRGF0YSBkaSBpbml6aW86ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRGF0YSBkaSBmaW5lOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdzdi1TRSc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ3PDtl9tw6VfdGlfb25fdG9fZnJfbMO2Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdzw7ZuZGFnX23DpW5kYWdfdGlzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7ZyZGFnJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG7DpHR0ZXInLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuw6R0dGVyJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ2tvcnRhc3RlIHZpc3RlbHNlOiAlbnVtYmVyIG7DpHR0ZXInLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWF4aW3DoWxueSBwb2J5dDogJW51bWJlciBuw6R0dGVyJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ3JlZGFuIGJva2F0JyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnS2FsZW5kZXInLFxuICAgICAgbW9udGhzOiAnTcOlbmFkZXInLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ07DpHN0YSBtw6VuYWQnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdGw7ZyZWfDpWVuZGUgbcOlbmFkJyxcbiAgICAgIGNsb3NlOiAnU3TDpG5nJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdGw7ZyZWfDpWVuZGUgw6VyJyxcbiAgICAgIG5leHRZZWFyczogJ07DpHN0YSDDpXInLFxuICAgICAgdG9kYXk6ICdpZGFnJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnZWogdGlsbGfDpG5nbGlnJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdTdGFydGRhdHVtOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ1NsdXRkYXR1bTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAncnUtUlUnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICfQktGBX9Cf0L1f0JLRgl/QodGAX9Cn0YJf0J/Rgl/QodCxJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICfQktC+0YHQutGA0LXRgdC10L3RjNC1X9Cf0L7QvdC10LTQtdC70YzQvdC40Lpf0JLRgtC+0YDQvdC40Lpf0KHRgNC10LTQsF/Qp9C10YLQstC10YDQs1/Qn9GP0YLQvdC40YbQsF/QodGD0LHQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ9Cv0L3QstCw0YDRjF/QpNC10LLRgNCw0LvRjF/QnNCw0YDRgl/QkNC/0YDQtdC70Yxf0JzQsNC5X9CY0Y7QvdGMX9CY0Y7Qu9GMX9CQ0LLQs9GD0YHRgl/QodC10L3RgtGP0LHRgNGMX9Ce0LrRgtGP0LHRgNGMX9Cd0L7Rj9Cx0YDRjF/QlNC10LrQsNCx0YDRjCcuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICfQr9C90LJf0KTQtdCyX9Cc0LDRgF/QkNC/0YBf0JzQsNC5X9CY0Y7QvV/QmNGO0Ltf0JDQstCzX9Ch0LXQvV/QntC60YJf0J3QvtGPX9CU0LXQuicuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWQuJWIuJVknLFxuICAgIGN1cnJlbmN5OiAnUlVCJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisg0L3QvtGHLicsXG4gICAgbWF4U3RheTogJyVudW1iZXItINC90L7Rhy4nLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAn0LzQuNC90LjQvNCw0LvRjNC90L7QtSDQv9GA0LXQsdGL0LLQsNC90Lg6ICVudW1iZXIg0L3QvtGH0LgnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAn0LzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC/0YDQtdCx0YvQstCw0L3QuNC1OiAlbnVtYmVyINC90L7Rh9C4JyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ9C30LDQsdGA0L7QvdC40YDQvtCy0LDQvdC+INGD0LbQtScsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ9Ca0LDQu9C10L3QtNCw0YDRjCcsXG4gICAgICBtb250aHM6ICfQnNC10YHRj9GG0YsnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ9Ch0LvQtdC00YPRjtGJ0LjQuSDQvNC10YHRj9GGJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAn0J/RgNC10LTRi9C00YPRidC40Lkg0LzQtdGB0Y/RhicsXG4gICAgICBjbG9zZTogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQtSDQs9C+0LTRiycsXG4gICAgICBuZXh0WWVhcnM6ICfQodC70LXQtNGD0Y7RidC40LUg0LPQvtC00YsnLFxuICAgICAgdG9kYXk6ICfRgdC10LPQvtC00L3RjycsXG4gICAgICB1bmF2YWlsYWJsZTogJ9C90LXQtNC+0YHRgtGD0L/QvdC+JyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICfQlNCw0YLQsCDQvdCw0YfQsNC70LA6ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAn0JTQsNGC0LAg0L7QutC+0L3Rh9Cw0L3QuNGPOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdwbC1QTCc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ05kX1BuX1d0X8Wacl9Del9QdF9Tbycuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnbmllZHppZWxhX3BvbmllZHppYcWCZWtfd3RvcmVrX8Wbcm9kYV9jendhcnRla19wacSFdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ3N0eWN6ZcWEX2x1dHlfbWFyemVjX2t3aWVjaWXFhF9tYWpfY3plcndpZWNfbGlwaWVjX3NpZXJwaWXFhF93cnplc2llxYRfcGHFumR6aWVybmlrX2xpc3RvcGFkX2dydWR6aWXFhCcuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdzdHlfbHV0X21hcl9rd2lfbWFqX2N6ZV9saXBfc2llX3dyel9wYcW6X2xpc19ncnUnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyVkLiViLiVZJyxcbiAgICBjdXJyZW5jeTogJ1BMTicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5vY2UnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBub2NlJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ21pbmltYWxueSBwb2J5OiAlbnVtYmVyIG5vY2UnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWFrc3ltYWxueSBwb2J5dDogJW51bWJlciBub2NlJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2p1xbwgemFyZXplcndvd2FuZScsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0thbGVuZGFyeicsXG4gICAgICBtb250aHM6ICdNaWVzacSFY2UnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ05hc3TEmXBueSBtaWVzacSFYycsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ1BvcHJ6ZWRuaSBtaWVzacSFYycsXG4gICAgICBjbG9zZTogJ1phbWtuaWonLFxuICAgICAgcHJldmlvdXNZZWFyczogJ1BvcHJ6ZWRuaWUgbGF0YScsXG4gICAgICBuZXh0WWVhcnM6ICdOYXN0xJlwbmUgbGF0YScsXG4gICAgICB0b2RheTogJ2R6aXNpYWonLFxuICAgICAgdW5hdmFpbGFibGU6ICduaWVkb3N0xJlwbmUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ0RhdGEgcm96cG9jesSZY2lhOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0RhdGEgemFrb8WEY3plbmlhOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdubC1OTCc6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ1pvX01hX0RpX1dvX0RvX1ZyX1phJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdab25kYWdfTWFhbmRhZ19EaW5zZGFnX1dvZW5zZGFnX0RvbmRlcmRhZ19WcmlqZGFnX1phdGVyZGFnJy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyaV9GZWJydWFyaV9NYWFydF9BcHJpbF9NZWlfSnVuaV9KdWxpX0F1Z3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIHNob3J0TW9udGhOYW1lczogJ0phbl9GZWJfTWFhX0Fwcl9NZWlfSnVuX0p1bF9BdWdfU2VwX09rdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclYiAlZCwgJVknLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBtaW5TdGF5OiAnJW51bWJlcisgbmFjaHRlbicsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5hY2h0ZW4nLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnbWluaW1hYWwgdmVyYmxpamY6ICVudW1iZXIgbmFjaHRlbicsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYXhpbWFhbCB2ZXJibGlqZjogJW51bWJlciBuYWNodGVuJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2FsIGdlYm9la3QnLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdLYWxlbmRlcicsXG4gICAgICBtb250aHM6ICdNYWFuZGVuJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdWb2xnZW5kZSBtYWFuZCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ1ZvcmlnZSBtYWFuZCcsXG4gICAgICBjbG9zZTogJ1NsdWl0ZW4nLFxuICAgICAgcHJldmlvdXNZZWFyczogJ1ZvcmlnZSBqYXJlbicsXG4gICAgICBuZXh0WWVhcnM6ICdWb2xnZW5kZSBqYXJlbicsXG4gICAgICB0b2RheTogJ3ZhbmRhYWcnLFxuICAgICAgdW5hdmFpbGFibGU6ICduaWV0IGJlc2NoaWtiYWFyJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdTdGFydGRhdHVtOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0VpbmRkYXR1bTogJWRhdGUnXG4gICAgfVxuICB9XG59O1xuXG4vLyBBZGQgYWxpYXNlc1xubG9jYWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICBlbjogbG9jYWxlc1snZW4tVVMnXSxcbiAgZGU6IGxvY2FsZXNbJ2RlLURFJ10sXG4gIGVzOiBsb2NhbGVzWydlcy1FUyddLFxuICBmcjogbG9jYWxlc1snZnItRlInXSxcbiAgaXQ6IGxvY2FsZXNbJ2l0LUlUJ10sXG4gIHN2OiBsb2NhbGVzWydzdi1TRSddLFxuICBydTogbG9jYWxlc1sncnUtUlUnXSxcbiAgcGw6IGxvY2FsZXNbJ3BsLVBMJ10sXG4gIG5sOiBsb2NhbGVzWydubC1OTCddXG59LCBsb2NhbGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlcztcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCwgd2luZG93ICovXG5cbmNvbnN0IEFSUk9XX1NJWkUgPSA4O1xuXG5jb25zdCBnZXRHbG9iYWxPYmplY3QgPSAoKSA9PiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IG51bGwpO1xuXG5jb25zdCBnZXRQb3BwZXJSdW50aW1lID0gKCkgPT4ge1xuICBjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWxPYmplY3QoKTtcblxuICBpZiAoXG4gICAgZ2xvYmFsT2JqZWN0XG4gICAgJiYgZ2xvYmFsT2JqZWN0LlBvcHBlclxuICAgICYmIHR5cGVvZiBnbG9iYWxPYmplY3QuUG9wcGVyLmNyZWF0ZVBvcHBlciA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gZ2xvYmFsT2JqZWN0LlBvcHBlcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0RmxvYXRpbmdSdW50aW1lID0gKCkgPT4ge1xuICBjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWxPYmplY3QoKTtcbiAgY29uc3QgcnVudGltZSA9IGdsb2JhbE9iamVjdFxuICAgICYmIChnbG9iYWxPYmplY3QuRmxvYXRpbmdVSURPTSB8fCBnbG9iYWxPYmplY3QuRmxvYXRpbmdVSSB8fCBnbG9iYWxPYmplY3QuZmxvYXRpbmdVSSk7XG5cbiAgaWYgKHJ1bnRpbWUgJiYgdHlwZW9mIHJ1bnRpbWUuY29tcHV0ZVBvc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWU7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldEFycm93RWxlbWVudCA9IChmbG9hdGluZ0VsKSA9PiBmbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHBlci1hcnJvd10nKTtcblxuY29uc3Qgc3BsaXRQbGFjZW1lbnQgPSAocGxhY2VtZW50ID0gJ2JvdHRvbScpID0+IHtcbiAgY29uc3QgW2Jhc2VQbGFjZW1lbnQsIGFsaWdubWVudF0gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcblxuICByZXR1cm4ge1xuICAgIGJhc2VQbGFjZW1lbnQ6IGJhc2VQbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgYWxpZ25tZW50OiBhbGlnbm1lbnQgfHwgbnVsbFxuICB9O1xufTtcblxuY29uc3Qgc2V0Qm9vbGVhbkF0dHJpYnV0ZSA9IChlbGVtZW50LCBuYW1lLCB2YWx1ZSkgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5UG9zaXRpb24gPSAoZmxvYXRpbmdFbCwgeCwgeSwgcGxhY2VtZW50LCBzdHJhdGVneSA9ICdhYnNvbHV0ZScpID0+IHtcbiAgZmxvYXRpbmdFbC5zdHlsZS5wb3NpdGlvbiA9IHN0cmF0ZWd5O1xuICBmbG9hdGluZ0VsLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgZmxvYXRpbmdFbC5zdHlsZS50b3AgPSBgJHt5fXB4YDtcbiAgZmxvYXRpbmdFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG59O1xuXG5jb25zdCBhcHBseUFycm93UG9zaXRpb24gPSAoYXJyb3dFbCwgeCwgeSkgPT4ge1xuICBpZiAoIWFycm93RWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhcnJvd0VsLnN0eWxlLmxlZnQgPSAnJztcbiAgYXJyb3dFbC5zdHlsZS50b3AgPSAnJztcblxuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgYXJyb3dFbC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gIH1cblxuICBpZiAodHlwZW9mIHkgPT09ICdudW1iZXInKSB7XG4gICAgYXJyb3dFbC5zdHlsZS50b3AgPSBgJHt5fXB4YDtcbiAgfVxufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcblxuY29uc3QgYWxpZ25Ib3Jpem9udGFsbHkgPSAocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpID0+IHtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiByZWZlcmVuY2VSZWN0LmxlZnQ7XG4gIH1cblxuICBpZiAoYWxpZ25tZW50ID09PSAnZW5kJykge1xuICAgIHJldHVybiByZWZlcmVuY2VSZWN0LnJpZ2h0IC0gZmxvYXRpbmdSZWN0LndpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVJlY3QubGVmdCArICgocmVmZXJlbmNlUmVjdC53aWR0aCAtIGZsb2F0aW5nUmVjdC53aWR0aCkgLyAyKTtcbn07XG5cbmNvbnN0IGFsaWduVmVydGljYWxseSA9IChyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgPT4ge1xuICBpZiAoYWxpZ25tZW50ID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZVJlY3QudG9wO1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlUmVjdC5ib3R0b20gLSBmbG9hdGluZ1JlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVJlY3QudG9wICsgKChyZWZlcmVuY2VSZWN0LmhlaWdodCAtIGZsb2F0aW5nUmVjdC5oZWlnaHQpIC8gMik7XG59O1xuXG5jb25zdCBnZXRWaWV3cG9ydENvb3JkaW5hdGVzID0gKHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgcGxhY2VtZW50LCBvZmZzZXQgPSBbMCwgMF0pID0+IHtcbiAgY29uc3QgeyBiYXNlUGxhY2VtZW50LCBhbGlnbm1lbnQgfSA9IHNwbGl0UGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IFtjcm9zc0F4aXNPZmZzZXQgPSAwLCBtYWluQXhpc09mZnNldCA9IDBdID0gb2Zmc2V0O1xuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBhbGlnbkhvcml6b250YWxseShyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgKyBjcm9zc0F4aXNPZmZzZXQsXG4gICAgICB5OiByZWZlcmVuY2VSZWN0LnRvcCAtIGZsb2F0aW5nUmVjdC5oZWlnaHQgLSBtYWluQXhpc09mZnNldFxuICAgIH07XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogYWxpZ25Ib3Jpem9udGFsbHkocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpICsgY3Jvc3NBeGlzT2Zmc2V0LFxuICAgICAgeTogcmVmZXJlbmNlUmVjdC5ib3R0b20gKyBtYWluQXhpc09mZnNldFxuICAgIH07XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJlZmVyZW5jZVJlY3QubGVmdCAtIGZsb2F0aW5nUmVjdC53aWR0aCAtIG1haW5BeGlzT2Zmc2V0LFxuICAgICAgeTogYWxpZ25WZXJ0aWNhbGx5KHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSArIGNyb3NzQXhpc09mZnNldFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlZmVyZW5jZVJlY3QucmlnaHQgKyBtYWluQXhpc09mZnNldCxcbiAgICB5OiBhbGlnblZlcnRpY2FsbHkocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpICsgY3Jvc3NBeGlzT2Zmc2V0XG4gIH07XG59O1xuXG5jb25zdCBub3JtYWxpemVDb29yZGluYXRlc0Zvck9mZnNldFBhcmVudCA9IChmbG9hdGluZ0VsLCB2aWV3cG9ydFgsIHZpZXdwb3J0WSkgPT4ge1xuICBjb25zdCBvd25lckRvY3VtZW50ID0gZmxvYXRpbmdFbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICBjb25zdCBnbG9iYWxPYmplY3QgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IGdldEdsb2JhbE9iamVjdCgpO1xuICBjb25zdCB7IG9mZnNldFBhcmVudCB9ID0gZmxvYXRpbmdFbDtcblxuICBpZiAoXG4gICAgIW9mZnNldFBhcmVudFxuICAgIHx8IG9mZnNldFBhcmVudCA9PT0gb3duZXJEb2N1bWVudC5ib2R5XG4gICAgfHwgb2Zmc2V0UGFyZW50ID09PSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdmlld3BvcnRYICsgKGdsb2JhbE9iamVjdCA/IGdsb2JhbE9iamVjdC5wYWdlWE9mZnNldCA6IDApLFxuICAgICAgeTogdmlld3BvcnRZICsgKGdsb2JhbE9iamVjdCA/IGdsb2JhbE9iamVjdC5wYWdlWU9mZnNldCA6IDApXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHBhcmVudFJlY3QgPSBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB2aWV3cG9ydFggLSBwYXJlbnRSZWN0LmxlZnQgLSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdCArIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0LFxuICAgIHk6IHZpZXdwb3J0WSAtIHBhcmVudFJlY3QudG9wIC0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcCArIG9mZnNldFBhcmVudC5zY3JvbGxUb3BcbiAgfTtcbn07XG5cbmNvbnN0IHBvc2l0aW9uTWFudWFsQXJyb3cgPSAocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCB2aWV3cG9ydFgsIHZpZXdwb3J0WSwgcGxhY2VtZW50LCBhcnJvd0VsKSA9PiB7XG4gIGlmICghYXJyb3dFbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYmFzZVBsYWNlbWVudCB9ID0gc3BsaXRQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgaGFsZkFycm93ID0gQVJST1dfU0laRSAvIDI7XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgY29uc3QgbWF4QXJyb3dYID0gTWF0aC5tYXgoZmxvYXRpbmdSZWN0LndpZHRoIC0gQVJST1dfU0laRSwgMCk7XG4gICAgY29uc3QgYXJyb3dYID0gY2xhbXAoXG4gICAgICByZWZlcmVuY2VSZWN0LmxlZnQgKyAocmVmZXJlbmNlUmVjdC53aWR0aCAvIDIpIC0gdmlld3BvcnRYIC0gaGFsZkFycm93LFxuICAgICAgMCxcbiAgICAgIG1heEFycm93WFxuICAgICk7XG5cbiAgICBhcHBseUFycm93UG9zaXRpb24oYXJyb3dFbCwgYXJyb3dYLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBtYXhBcnJvd1kgPSBNYXRoLm1heChmbG9hdGluZ1JlY3QuaGVpZ2h0IC0gQVJST1dfU0laRSwgMCk7XG4gIGNvbnN0IGFycm93WSA9IGNsYW1wKFxuICAgIHJlZmVyZW5jZVJlY3QudG9wICsgKHJlZmVyZW5jZVJlY3QuaGVpZ2h0IC8gMikgLSB2aWV3cG9ydFkgLSBoYWxmQXJyb3csXG4gICAgMCxcbiAgICBtYXhBcnJvd1lcbiAgKTtcblxuICBhcHBseUFycm93UG9zaXRpb24oYXJyb3dFbCwgbnVsbCwgYXJyb3dZKTtcbn07XG5cbmNvbnN0IGF0dGFjaEZhbGxiYWNrQXV0b1VwZGF0ZSA9ICh1cGRhdGUpID0+IHtcbiAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG5cbiAgaWYgKCFnbG9iYWxPYmplY3QgfHwgdHlwZW9mIGdsb2JhbE9iamVjdC5hZGRFdmVudExpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG5cbiAgZ2xvYmFsT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gIGdsb2JhbE9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUsIHRydWUpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZ2xvYmFsT2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gICAgZ2xvYmFsT2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwgdHJ1ZSk7XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVQb3BwZXJQb3NpdGlvbmVyID0gKHBvcHBlclJ1bnRpbWUsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG1vZGlmaWVycyA9IFtdO1xuXG4gIGlmIChvcHRpb25zLmZsaXAgPT09IGZhbHNlKSB7XG4gICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMub2Zmc2V0KSkge1xuICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oaWRlKSB7XG4gICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgbmFtZTogJ2hpZGUnLFxuICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlclJ1bnRpbWUuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB7XG4gICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCxcbiAgICBzdHJhdGVneTogb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnLFxuICAgIG1vZGlmaWVyc1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZsb2F0aW5nUG9zaXRpb25lciA9IChmbG9hdGluZ1J1bnRpbWUsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGFycm93RWwgPSBnZXRBcnJvd0VsZW1lbnQoZmxvYXRpbmdFbCk7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLm9mZnNldCkgJiYgdHlwZW9mIGZsb2F0aW5nUnVudGltZS5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBbY3Jvc3NBeGlzID0gMCwgbWFpbkF4aXMgPSAwXSA9IG9wdGlvbnMub2Zmc2V0O1xuXG4gICAgbWlkZGxld2FyZS5wdXNoKGZsb2F0aW5nUnVudGltZS5vZmZzZXQoe1xuICAgICAgbWFpbkF4aXMsXG4gICAgICBjcm9zc0F4aXNcbiAgICB9KSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5mbGlwICE9PSBmYWxzZSAmJiB0eXBlb2YgZmxvYXRpbmdSdW50aW1lLmZsaXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goZmxvYXRpbmdSdW50aW1lLmZsaXAoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5zaGlmdCAhPT0gZmFsc2UgJiYgdHlwZW9mIGZsb2F0aW5nUnVudGltZS5zaGlmdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1pZGRsZXdhcmUucHVzaChmbG9hdGluZ1J1bnRpbWUuc2hpZnQoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oaWRlICYmIHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUuaGlkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG1pZGRsZXdhcmUucHVzaChmbG9hdGluZ1J1bnRpbWUuaGlkZSgpKTtcbiAgfVxuXG4gIGlmIChhcnJvd0VsICYmIHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUuYXJyb3cgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goZmxvYXRpbmdSdW50aW1lLmFycm93KHsgZWxlbWVudDogYXJyb3dFbCB9KSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgZmxvYXRpbmdFbC5zdHlsZS5wb3NpdGlvbiA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJztcblxuICAgIHJldHVybiBmbG9hdGluZ1J1bnRpbWUuY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB7XG4gICAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJyxcbiAgICAgIG1pZGRsZXdhcmVcbiAgICB9KS50aGVuKCh7IHgsIHksIHBsYWNlbWVudCwgbWlkZGxld2FyZURhdGEgPSB7fSB9KSA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKGZsb2F0aW5nRWwsIHgsIHksIHBsYWNlbWVudCwgb3B0aW9ucy5zdHJhdGVneSB8fCAnYWJzb2x1dGUnKTtcbiAgICAgIGFwcGx5QXJyb3dQb3NpdGlvbihhcnJvd0VsLCBtaWRkbGV3YXJlRGF0YS5hcnJvdyAmJiBtaWRkbGV3YXJlRGF0YS5hcnJvdy54LCBtaWRkbGV3YXJlRGF0YS5hcnJvdyAmJiBtaWRkbGV3YXJlRGF0YS5hcnJvdy55KTtcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGUoXG4gICAgICAgIGZsb2F0aW5nRWwsXG4gICAgICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJyxcbiAgICAgICAgbWlkZGxld2FyZURhdGEuaGlkZSAmJiBtaWRkbGV3YXJlRGF0YS5oaWRlLnJlZmVyZW5jZUhpZGRlblxuICAgICAgKTtcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGUoXG4gICAgICAgIGZsb2F0aW5nRWwsXG4gICAgICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJyxcbiAgICAgICAgbWlkZGxld2FyZURhdGEuaGlkZSAmJiBtaWRkbGV3YXJlRGF0YS5oaWRlLmVzY2FwZWRcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYW51cCA9ICh0eXBlb2YgZmxvYXRpbmdSdW50aW1lLmF1dG9VcGRhdGUgPT09ICdmdW5jdGlvbicpXG4gICAgPyBmbG9hdGluZ1J1bnRpbWUuYXV0b1VwZGF0ZShyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgdXBkYXRlKVxuICAgIDogYXR0YWNoRmFsbGJhY2tBdXRvVXBkYXRlKHVwZGF0ZSk7XG5cbiAgaWYgKCFvcHRpb25zLmRlZmVyVXBkYXRlKSB7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1hbnVhbFBvc2l0aW9uZXIgPSAocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgYXJyb3dFbCA9IGdldEFycm93RWxlbWVudChmbG9hdGluZ0VsKTtcblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgZmxvYXRpbmdFbC5zdHlsZS5wb3NpdGlvbiA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJztcblxuICAgIGNvbnN0IHJlZmVyZW5jZVJlY3QgPSByZWZlcmVuY2VFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBmbG9hdGluZ1JlY3QgPSBmbG9hdGluZ0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHZpZXdwb3J0Q29vcmRpbmF0ZXMgPSBnZXRWaWV3cG9ydENvb3JkaW5hdGVzKFxuICAgICAgcmVmZXJlbmNlUmVjdCxcbiAgICAgIGZsb2F0aW5nUmVjdCxcbiAgICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgb3B0aW9ucy5vZmZzZXRcbiAgICApO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRDb29yZGluYXRlcyA9IG5vcm1hbGl6ZUNvb3JkaW5hdGVzRm9yT2Zmc2V0UGFyZW50KFxuICAgICAgZmxvYXRpbmdFbCxcbiAgICAgIHZpZXdwb3J0Q29vcmRpbmF0ZXMueCxcbiAgICAgIHZpZXdwb3J0Q29vcmRpbmF0ZXMueVxuICAgICk7XG5cbiAgICBhcHBseVBvc2l0aW9uKFxuICAgICAgZmxvYXRpbmdFbCxcbiAgICAgIG5vcm1hbGl6ZWRDb29yZGluYXRlcy54LFxuICAgICAgbm9ybWFsaXplZENvb3JkaW5hdGVzLnksXG4gICAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJ1xuICAgICk7XG4gICAgcG9zaXRpb25NYW51YWxBcnJvdyhcbiAgICAgIHJlZmVyZW5jZVJlY3QsXG4gICAgICBmbG9hdGluZ1JlY3QsXG4gICAgICB2aWV3cG9ydENvb3JkaW5hdGVzLngsXG4gICAgICB2aWV3cG9ydENvb3JkaW5hdGVzLnksXG4gICAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGFycm93RWxcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFudXAgPSBhdHRhY2hGYWxsYmFja0F1dG9VcGRhdGUodXBkYXRlKTtcblxuICBpZiAoIW9wdGlvbnMuZGVmZXJVcGRhdGUpIHtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25lcihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0ge1xuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgc3RyYXRlZ3k6IG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJyxcbiAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0IHx8IFswLCAwXSxcbiAgICBmbGlwOiBvcHRpb25zLmZsaXAgIT09IGZhbHNlLFxuICAgIHNoaWZ0OiBvcHRpb25zLnNoaWZ0ICE9PSBmYWxzZSxcbiAgICBoaWRlOiBvcHRpb25zLmhpZGUgPT09IHRydWUsXG4gICAgZGVmZXJVcGRhdGU6IG9wdGlvbnMuZGVmZXJVcGRhdGUgPT09IHRydWVcbiAgfTtcbiAgY29uc3QgcG9wcGVyUnVudGltZSA9IGdldFBvcHBlclJ1bnRpbWUoKTtcblxuICBpZiAocG9wcGVyUnVudGltZSkge1xuICAgIHJldHVybiBjcmVhdGVQb3BwZXJQb3NpdGlvbmVyKHBvcHBlclJ1bnRpbWUsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBub3JtYWxpemVkT3B0aW9ucyk7XG4gIH1cblxuICBjb25zdCBmbG9hdGluZ1J1bnRpbWUgPSBnZXRGbG9hdGluZ1J1bnRpbWUoKTtcblxuICBpZiAoZmxvYXRpbmdSdW50aW1lKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZsb2F0aW5nUG9zaXRpb25lcihmbG9hdGluZ1J1bnRpbWUsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBub3JtYWxpemVkT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlTWFudWFsUG9zaXRpb25lcihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgbm9ybWFsaXplZE9wdGlvbnMpO1xufVxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9jYWxlbmRhci5zY3NzJztcblxuZXhwb3J0IGNvbnN0IG1haW4gID0gKGxhYmVsKSA9PiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLm1vbnRoc1dyYXBwZXJ9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbD1cIiR7bGFiZWx9XCI+PC9kaXY+YDtcbmV4cG9ydCBjb25zdCBsaXZlUmVnaW9uID0gKCkgPT4gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5zck9ubHl9XCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgZGF0YS1saXZlLXJlZ2lvbj48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb24gPSAoKSA9PiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnBhZ2luYXRpb259XCI+PC9kaXY+YDtcbmV4cG9ydCBjb25zdCBtb2JpbGVXZWVrZGF5cyA9IChoZWFkZXIpID0+IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMubW9iaWxlV2Vla2RheXN9XCIgcm9sZT1cInJvd1wiPiR7aGVhZGVyfTwvZGl2PmA7XG5leHBvcnQgY29uc3Qgc3ZnU3ByaXRlID0gKGNoZXZyb25Eb3duSWQpID0+IGBcbiAgPHN2ZyBjbGFzcz1cIiR7c3R5bGVzLnNwcml0ZX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIj5cbiAgICA8c3ltYm9sIGlkPVwiJHtjaGV2cm9uRG93bklkfVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgIDxwYXRoIGQ9XCJNNC4yMiA2Ljk3YS43NS43NSAwIDAgMSAxLjA2IDBMOCA5LjY5bDIuNzItMi43MmEuNzUuNzUgMCAxIDEgMS4wNiAxLjA2bC0zLjI1IDMuMjVhLjc1Ljc1IDAgMCAxLTEuMDYgMEw0LjIyIDguMDNhLjc1Ljc1IDAgMCAxIDAtMS4wNlpcIj48L3BhdGg+XG4gICAgPC9zeW1ib2w+XG4gIDwvc3ZnPlxuYDtcblxuZXhwb3J0IGNvbnN0IHRvb2x0aXAgPSBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnRvb2x0aXB9XCIgcm9sZT1cInRvb2x0aXBcIj48c3Bhbj48L3NwYW4+PGRpdiBjbGFzcz1cIiR7c3R5bGVzLnRvb2x0aXBBcnJvd31cIiBkYXRhLXBvcHBlci1hcnJvdz1cInRydWVcIj48L2Rpdj48L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgbW9udGggPSAoe1xuICBsYWJlbCxcbiAgY2FwdGlvbixcbiAgaGVhZGVyLFxuICBib2R5XG59KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCIke3N0eWxlcy5tb250aH0gJHtzdHlsZXMubUNlbGx9IGpzLW1vbnRoXCIgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsPVwiJHtsYWJlbH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuY2FwdGlvbn1cIj4ke2NhcHRpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnRhYmxlSGVhZGVyfVwiIHJvbGU9XCJyb3dcIj4ke2hlYWRlcn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuYm9keX1cIiByb2xlPVwicm93Z3JvdXBcIj4ke2JvZHl9PC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHllYXJQaWNrZXIgPSAoe1xuICBsYWJlbCxcbiAgY2hldnJvbkRvd25JZFxufSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuY2FwdGlvblBpY2tlcn1cIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiJHtzdHlsZXMuY2FwdGlvblRyaWdnZXJ9XCJcbiAgICAgIGRhdGEteWVhci1waWNrZXItdHJpZ2dlclxuICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgIGFyaWEtaGFzcG9wdXA9XCJkaWFsb2dcIlxuICAgICAgYXJpYS1sYWJlbD1cIiR7bGFiZWx9XCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb25MYWJlbH1cIj4ke2xhYmVsfTwvc3Bhbj5cbiAgICAgIDxzdmcgY2xhc3M9XCIke3N0eWxlcy5jYXB0aW9uQ2hldnJvbn1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgPHVzZSBocmVmPVwiIyR7Y2hldnJvbkRvd25JZH1cIj48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBzaGFyZWRZZWFyUGlja2VyUGFuZWwgPSAoe1xuICBjbG9zZUxhYmVsLFxuICBwcmV2aW91c0xhYmVsLFxuICBuZXh0TGFiZWxcbn0pID0+IGBcbiAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnllYXJQaWNrZXJQYW5lbH1cIiBkYXRhLXllYXItcGlja2VyLXBhbmVsIGhpZGRlbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3R5bGVzLnllYXJQaWNrZXJDbG9zZX1cIiBkYXRhLXllYXItcGlja2VyLWNsb3NlIGFyaWEtbGFiZWw9XCIke2Nsb3NlTGFiZWx9XCI+JHtjbG9zZUxhYmVsfTwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy55ZWFyR3JpZH1cIiBkYXRhLXllYXItZ3JpZD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMueWVhclBpY2tlckhlYWRlcn1cIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzdHlsZXMueWVhclBhZ2VyfVwiIGRhdGEteWVhci1wYWdlLW9mZnNldD1cIi0xMlwiIGFyaWEtbGFiZWw9XCIke3ByZXZpb3VzTGFiZWx9XCI+JHtwcmV2aW91c0xhYmVsfTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N0eWxlcy55ZWFyUGFnZXJ9XCIgZGF0YS15ZWFyLXBhZ2Utb2Zmc2V0PVwiMTJcIiBhcmlhLWxhYmVsPVwiJHtuZXh0TGFiZWx9XCI+JHtuZXh0TGFiZWx9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHllYXJPcHRpb24gPSAoeWVhciwgc2VsZWN0ZWRZZWFyKSA9PiBgXG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cIiR7c3R5bGVzLnllYXJPcHRpb259XCJcbiAgICBkYXRhLXllYXItb3B0aW9uPVwiJHt5ZWFyfVwiXG4gICAgJHt5ZWFyID09PSBzZWxlY3RlZFllYXIgPyAnZGF0YS1zZWxlY3RlZC15ZWFyIGFyaWEtY3VycmVudD1cInRydWVcIicgOiAnJ31cbiAgPlxuICAgICR7eWVhcn1cbiAgPC9idXR0b24+XG5gO1xuXG5leHBvcnQgY29uc3Qgd2Vla0RheUxhYmVsID0gKGxhYmVsKSA9PiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnRofVwiIHJvbGU9XCJjb2x1bW5oZWFkZXJcIj4ke2xhYmVsfTwvZGl2PmA7XG5cbmV4cG9ydCBjb25zdCB3ZWVrRGF5ID0gKG8pID0+IHtcbiAgY29uc3QgaW5mb0xpbmVzID0gW107XG5cbiAgaWYgKG8ucmF0ZSkge1xuICAgIGluZm9MaW5lcy5wdXNoKG8ucmF0ZVQpO1xuICB9XG5cbiAgaWYgKG8ubWluU3RheSAmJiBvLm1pblN0YXlUKSB7XG4gICAgaW5mb0xpbmVzLnB1c2goby5taW5TdGF5VCk7XG4gIH1cblxuICBpZiAoby5tYXhTdGF5ICYmIG8ubWF4U3RheVQpIHtcbiAgICBpbmZvTGluZXMucHVzaChvLm1heFN0YXlUKTtcbiAgfVxuXG4gIGNvbnN0IGluZm9IdG1sID0gaW5mb0xpbmVzLmxlbmd0aCA/IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuaW5mb31cIj4ke2luZm9MaW5lcy5qb2luKCc8YnI+Jyl9PC9kaXY+YCA6ICcnO1xuXG4gIHJldHVybiBgXG4gICAgPGRpdlxuICAgICAgJHtvLmRpc2FibGVkID8gYGRhdGEtZGlzYWJsZWQ9JHtvLmRpc2FibGVkfSBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiYCA6ICdkYXRhLWVuYWJsZWQnfVxuICAgICAgJHtvLmlzQXZhaWxhYmxlT3V0ID8gJ2RhdGEtYXZhaWxhYmxlLW91dCcgOiAnJ31cbiAgICAgICR7by5pc0F2YWlsYWJsZUluID8gJ2RhdGEtYXZhaWxhYmxlLWluJyA6ICcnfVxuICAgICAgJHtvLm1pblN0YXkgPyBgZGF0YS1taW4tc3RheT0ke28ubWluU3RheX1gIDogJyd9XG4gICAgICAke28ubWF4U3RheSA/IGBkYXRhLW1heC1zdGF5PSR7by5tYXhTdGF5fWAgOiAnJ31cbiAgICAgIGRhdGEtdmFsdWU9XCIke28ubGFiZWx9XCJcbiAgICAgIGNsYXNzPVwiJHtzdHlsZXMuY2VsbH0gJHtvLmlzQ3VycmVudERheSA/IHN0eWxlcy50b2RheSA6ICcnfVwiXG4gICAgICByb2xlPVwiZ3JpZGNlbGxcIlxuICAgICAgdGFiaW5kZXg9XCIke28udGFiaW5kZXh9XCJcbiAgICAgIGFyaWEtbGFiZWw9XCIke28uYXJpYUxhYmVsfVwiXG4gICAgICAke28uaXNDdXJyZW50RGF5ID8gJ2FyaWEtY3VycmVudD1cImRhdGVcIicgOiAnJ31cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cIiR7c3R5bGVzLmNudH1cIj4ke28ubGFiZWx9PC9zcGFuPlxuICAgICAgJHtpbmZvSHRtbH1cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3J3YXJkID0gKGxhYmVsKSA9PiBgXG4gIDxidXR0b24gY2xhc3M9XCIke3N0eWxlcy5mb3J3YXJkfVwiIGFyaWEtbGFiZWw9XCIke2xhYmVsfVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICA8cGF0aCBkPVwibTkgMTggNi02LTYtNlwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9idXR0b24+XG5gO1xuXG5leHBvcnQgY29uc3QgYmFjayA9IChsYWJlbCkgPT4gYFxuICA8YnV0dG9uIGNsYXNzPVwiJHtzdHlsZXMuYmFja31cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbH1cIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgICAgPHBhdGggZD1cIm0xNSAxOC02LTYgNi02XCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBjb25zdCB3ZWVrRGF5UGxhY2Vob2xkZXIgPSBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnBsYWNlaG9sZGVyfVwiIGRhdGEtcGxhY2Vob2xkZXIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+YDtcblxuLyogZXNsaW50IGFycm93LWJvZHktc3R5bGU6IDAgKi9cbmV4cG9ydCBjb25zdCB3ZWVrUm93ID0gKG51bSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9wZW46IGA8ZGl2IHJvbGU9XCJyb3dcIiBjbGFzcz1cImpzLWJvZHktcm93LSR7bnVtfSAke3N0eWxlcy53ZWVrUm93fVwiPmAsXG4gICAgY2xvc2U6ICc8L2Rpdj4nXG4gIH07XG59O1xuIiwiLyogZ2xvYmFsIGNvbnNvbGUgKi9cbmltcG9ydCB7IHN0cmZ0aW1lLCBzdHJwdGltZSB9IGZyb20gJ3N0cnRpbWUnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ3dpZGdldC11dGlscyc7XG5jb25zdCB7IGlzIH0gPSB1dGlscztcblxuZXhwb3J0IGNvbnN0IGRhdGVUb0lzbyA9ICh5ZWFyLCBtb250aCwgZGF5LCBpc1N0cmluZyA9IGZhbHNlKSA9PiB7XG4gIGZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMTApIHtcbiAgICAgIHJldHVybiBgMCR7bnVtYmVyfWA7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHtwYWQobW9udGggKyAxKX0tJHtwYWQoZGF5KX1gO1xuICB9XG5cbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCAxMiwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGVUb0FycmF5ID0gKHZhbCwgZm9ybWF0LCBsb2NhbGUpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRlID0gc3RycHRpbWUodmFsLCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgY29uc3QgYSAgICA9IHN0cmZ0aW1lKGRhdGUsICclWS0lbS0lZCcpLnNwbGl0KCctJyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgcGFyc2VJbnQoYVswXSksIC8vIHllYXJcbiAgICAgIHBhcnNlSW50KGFbMV0gLSAxKSwgLy8gbW9udGggaW5kZXhcbiAgICAgIHBhcnNlSW50KGFbMl0pIC8vIGRheVxuICAgIF07XG4gIH0gY2F0Y2goZSkge1xuICAgIGlmIChpcyhlLm1lc3NhZ2UpKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0xhdGVyID0gKHN0YXJ0LCBlbmQpID0+IGRhdGVUb0lzbyguLi5zdGFydCwgdHJ1ZSkgPCBkYXRlVG9Jc28oLi4uZW5kLCB0cnVlKTtcblxuZXhwb3J0IGNvbnN0IGlzQ3VycmVudCA9IChzdGFydCwgZW5kKSA9PiBkYXRlVG9Jc28oLi4uc3RhcnQsIHRydWUpID09IGRhdGVUb0lzbyguLi5lbmQsIHRydWUpO1xuXG5leHBvcnQgY29uc3QgbW9udGhEaWZmID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGVuZC5nZXRNb250aCgpIC0gc3RhcnQuZ2V0TW9udGgoKSArICgxMiAqIChlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uT2ZDZWxsID0gKGNlbGwpID0+IHtcbiAgaWYgKGlzKGNlbGwuZGF0YXNldC5lbmFibGVkKSB8fCBpcyhjZWxsLmRhdGFzZXQuYXZhaWxhYmxlSW4pIHx8IGlzKGNlbGwuZGF0YXNldC5hdmFpbGFibGVPdXQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgdEZvcm1hdHRlciA9ICh2YWx1ZSwgc3RyKSA9PiBzdHIucmVwbGFjZSgnJW51bWJlcicsIHZhbHVlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGl2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3BhbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFwcGxldCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG9iamVjdCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGlmcmFtZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgxLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHAsIC5TbWlseUNhbGVuZGFyX19yZXNldCBibG9ja3F1b3RlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcHJlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYSxcbi5TbWlseUNhbGVuZGFyX19yZXNldCBhYmJyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYWNyb255bSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFkZHJlc3MsIC5TbWlseUNhbGVuZGFyX19yZXNldCBiaWcsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjaXRlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY29kZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRlbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRmbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGVtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaW1nLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaW5zLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQga2JkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzYW1wLFxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNtYWxsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3RyaWtlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3Ryb25nLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3ViLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3VwLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdHQsIC5TbWlseUNhbGVuZGFyX19yZXNldCB2YXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBiLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGksIC5TbWlseUNhbGVuZGFyX19yZXNldCBjZW50ZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGR0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBvbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHVsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbGksXG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgZmllbGRzZXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmb3JtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGl2LlNtaWx5Q2FsZW5kYXJfX2Zvcm0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBsYWJlbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGxlZ2VuZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRhYmxlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2FwdGlvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRib2R5LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGZvb3QsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0aGVhZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRyLFxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRoLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhcnRpY2xlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXNpZGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBjYW52YXMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZXRhaWxzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZmlnY2FwdGlvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZ3VyZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZvb3RlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGhlYWRlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGhncm91cCxcbi5TbWlseUNhbGVuZGFyX19yZXNldCBtZW51LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbmF2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc2VjdGlvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN1bW1hcnksIC5TbWlseUNhbGVuZGFyX19yZXNldCB0aW1lLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbWFyaywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGF1ZGlvLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdmlkZW8sIC5TbWlseUNhbGVuZGFyX19yZXNldCBidXR0b24sIC5TbWlseUNhbGVuZGFyX19yZXNldCB0ZXh0YXJlYSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGlucHV0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgLlNtaWx5Q2FsZW5kYXJfX2J1dHRvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IC5TbWlseUNhbGVuZGFyX19sZWdlbmQge1xuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemUtYWRqdXN0OiBub25lO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250OiBub3JtYWwgbm9ybWFsIDEwMCUgXCJPcGVuIHNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtbW96LXRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbi1sYXN0OiBpbml0aWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdGV4dC1lbXBoYXNpczogbm9uZTtcbiAgdGV4dC1lbXBoYXNpczogbm9uZTtcbiAgdGV4dC1oZWlnaHQ6IGF1dG87XG4gIHRleHQtaW5kZW50OiAwO1xuICB0ZXh0LWp1c3RpZnk6IGF1dG87XG4gIHRleHQtb3V0bGluZTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LXdyYXA6IG5vcm1hbDtcbiAgYWxpZ25tZW50LWFkanVzdDogYXV0bztcbiAgYWxpZ25tZW50LWJhc2VsaW5lOiBiYXNlbGluZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XG4gIGFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG4gIGFwcGVhcmFuY2U6IG5vcm1hbDtcbiAgYXppbXV0aDogY2VudGVyO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQ6IG5vbmUgMCAwIGF1dG8gcmVwZWF0IHNjcm9sbCBwYWRkaW5nLWJveCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhc2VsaW5lLXNoaWZ0OiBiYXNlbGluZTtcbiAgYmluZGluZzogbm9uZTtcbiAgYmxlZWQ6IDZwdDtcbiAgYm9va21hcmstbGFiZWw6IGNvbnRlbnQoKTtcbiAgYm9va21hcmstbGV2ZWw6IG5vbmU7XG4gIGJvb2ttYXJrLXN0YXRlOiBvcGVuO1xuICBib29rbWFyay10YXJnZXQ6IG5vbmU7XG4gIGJvcmRlcjogMCBub25lIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3R0b206IGF1dG87XG4gIGJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XG4gIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBzbGljZTtcbiAgYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICBmbGV4OiAwO1xuICBmbGV4LWdyb3VwOiAxO1xuICBib3gtbGluZXM6IHNpbmdsZTtcbiAgYm94LW9yZGluYWwtZ3JvdXA6IDE7XG4gIGJveC1vcmllbnQ6IGlubGluZS1heGlzO1xuICBib3gtcGFjazogc3RhcnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJyZWFrLWFmdGVyOiBhdXRvO1xuICAtbW96LWJyZWFrLWFmdGVyOiBhdXRvO1xuICBicmVhay1hZnRlcjogYXV0bztcbiAgLXdlYmtpdC1icmVhay1iZWZvcmU6IGF1dG87XG4gIC1tb3otYnJlYWstYmVmb3JlOiBhdXRvO1xuICBicmVhay1iZWZvcmU6IGF1dG87XG4gIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXV0bztcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XG4gIGJyZWFrLWluc2lkZTogYXV0bztcbiAgY2FwdGlvbi1zaWRlOiB0b3A7XG4gIGNsZWFyOiBub25lO1xuICBjbGlwOiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY29sb3ItcHJvZmlsZTogYXV0bztcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IGF1dG87XG4gIC1tb3otY29sdW1uLWNvdW50OiBhdXRvO1xuICBjb2x1bW4tY291bnQ6IGF1dG87XG4gIC13ZWJraXQtY29sdW1uLWZpbGw6IGJhbGFuY2U7XG4gIC1tb3otY29sdW1uLWZpbGw6IGJhbGFuY2U7XG4gIGNvbHVtbi1maWxsOiBiYWxhbmNlO1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IG5vcm1hbDtcbiAgLW1vei1jb2x1bW4tZ2FwOiBub3JtYWw7XG4gIGNvbHVtbi1nYXA6IG5vcm1hbDtcbiAgLXdlYmtpdC1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xuICAtbW96LWNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XG4gIGNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XG4gIC13ZWJraXQtY29sdW1uLXNwYW46IDE7XG4gIC1tb3otY29sdW1uLXNwYW46IDE7XG4gIGNvbHVtbi1zcGFuOiAxO1xuICAtd2Via2l0LWNvbHVtbi13aWR0aDogYXV0bztcbiAgLW1vei1jb2x1bW4td2lkdGg6IGF1dG87XG4gIGNvbHVtbi13aWR0aDogYXV0bztcbiAgLXdlYmtpdC1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIC1tb3otY29sdW1uczogYXV0byBhdXRvO1xuICBjb2x1bW5zOiBhdXRvIGF1dG87XG4gIGNvbnRlbnQ6IG5vcm1hbDtcbiAgY291bnRlci1pbmNyZW1lbnQ6IG5vbmU7XG4gIGNvdW50ZXItcmVzZXQ6IG5vbmU7XG4gIGNyb3A6IGF1dG87XG4gIGN1cnNvcjogYXV0bztcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZG9taW5hbnQtYmFzZWxpbmU6IGF1dG87XG4gIGRyb3AtaW5pdGlhbC1hZnRlci1hZGp1c3Q6IHRleHQtYWZ0ZXItZWRnZTtcbiAgZHJvcC1pbml0aWFsLWFmdGVyLWFsaWduOiBiYXNlbGluZTtcbiAgZHJvcC1pbml0aWFsLWJlZm9yZS1hZGp1c3Q6IHRleHQtYmVmb3JlLWVkZ2U7XG4gIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWxpZ246IGNhcHMtaGVpZ2h0O1xuICBkcm9wLWluaXRpYWwtc2l6ZTogYXV0bztcbiAgZHJvcC1pbml0aWFsLXZhbHVlOiBpbml0aWFsO1xuICBlbGV2YXRpb246IGxldmVsO1xuICBlbXB0eS1jZWxsczogc2hvdztcbiAgZml0OiBmaWxsO1xuICBmaXQtcG9zaXRpb246IDAlIDAlO1xuICBmbG9hdDogbm9uZTtcbiAgZmxvYXQtb2Zmc2V0OiAwIDA7XG4gIGdyaWQtY29sdW1uczogbm9uZTtcbiAgZ3JpZC1yb3dzOiBub25lO1xuICBoYW5naW5nLXB1bmN0dWF0aW9uOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG4gIGh5cGhlbmF0ZS1hZnRlcjogYXV0bztcbiAgaHlwaGVuYXRlLWJlZm9yZTogYXV0bztcbiAgaHlwaGVuYXRlLWNoYXJhY3RlcjogYXV0bztcbiAgaHlwaGVuYXRlLWxpbmVzOiBuby1saW1pdDtcbiAgaHlwaGVuYXRlLXJlc291cmNlOiBub25lO1xuICAtd2Via2l0LWh5cGhlbnM6IG1hbnVhbDtcbiAgLW1vei1oeXBoZW5zOiBtYW51YWw7XG4gIC1tcy1oeXBoZW5zOiBtYW51YWw7XG4gIGh5cGhlbnM6IG1hbnVhbDtcbiAgaWNvbjogYXV0bztcbiAgaW1hZ2Utb3JpZW50YXRpb246IGF1dG87XG4gIGltYWdlLXJlbmRlcmluZzogYXV0bztcbiAgaW1hZ2UtcmVzb2x1dGlvbjogbm9ybWFsO1xuICBpbmxpbmUtYm94LWFsaWduOiBsYXN0O1xuICBsZWZ0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbGluZS1zdGFja2luZzogaW5saW5lLWxpbmUtaGVpZ2h0IGV4Y2x1ZGUtcnVieSBjb25zaWRlci1zaGlmdHM7XG4gIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xuICBtYXJnaW46IDA7XG4gIG1hcmtzOiBub25lO1xuICBtYXJxdWVlLWRpcmVjdGlvbjogZm9yd2FyZDtcbiAgbWFycXVlZS1sb29wOiAxO1xuICBtYXJxdWVlLXBsYXktY291bnQ6IDE7XG4gIG1hcnF1ZWUtc3BlZWQ6IG5vcm1hbDtcbiAgbWFycXVlZS1zdHlsZTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMDtcbiAgbW92ZS10bzogbm9ybWFsO1xuICBuYXYtZG93bjogYXV0bztcbiAgbmF2LWluZGV4OiBhdXRvO1xuICBuYXYtbGVmdDogYXV0bztcbiAgbmF2LXJpZ2h0OiBhdXRvO1xuICBuYXYtdXA6IGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIG9ycGhhbnM6IDI7XG4gIG91dGxpbmU6IGludmVydCBub25lIG1lZGl1bTtcbiAgb3V0bGluZS1vZmZzZXQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy1zdHlsZTogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgcGFnZTogYXV0bztcbiAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcbiAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xuICBwYWdlLXBvbGljeTogc3RhcnQ7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IG5vbmU7XG4gIHBlcnNwZWN0aXZlOiBub25lO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwcmVzZW50YXRpb24tbGV2ZWw6IDA7XG4gIHB1bmN0dWF0aW9uLXRyaW06IG5vbmU7XG4gIHF1b3Rlczogbm9uZTtcbiAgcmVuZGVyaW5nLWludGVudDogYXV0bztcbiAgcmVzaXplOiBub25lO1xuICByaWdodDogYXV0bztcbiAgcm90YXRpb246IDA7XG4gIHJvdGF0aW9uLXBvaW50OiA1MCUgNTAlO1xuICBydWJ5LWFsaWduOiBhdXRvO1xuICBydWJ5LW92ZXJoYW5nOiBub25lO1xuICBydWJ5LXBvc2l0aW9uOiBiZWZvcmU7XG4gIHJ1Ynktc3Bhbjogbm9uZTtcbiAgc2l6ZTogYXV0bztcbiAgc3RyaW5nLXNldDogbm9uZTtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xuICB0b3A6IGF1dG87XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAtbXMtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwIGVhc2UgMDtcbiAgdW5pY29kZS1iaWRpOiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2UtY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWRvd3M6IDI7XG4gIHdpZHRoOiBhdXRvO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgei1pbmRleDogYXV0bztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIC8qIEFuZCBkaXNhYmxlIE1TIGdyYWRpZW50cyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgYWRkcmVzcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGJsb2NrcXVvdGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRpdiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZHQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmaWVsZHNldCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZvcm0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBkaXYuU21pbHlDYWxlbmRhcl9fZm9ybSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZyYW1lLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZnJhbWVzZXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg1LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBub2ZyYW1lcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG9sLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHVsLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2VudGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGlyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaHIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBtZW51LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgcHJlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXJ0aWNsZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFzaWRlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2FudmFzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGV0YWlscywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZ2NhcHRpb24sIC5TbWlseUNhbGVuZGFyX19yZXNldCBmaWd1cmUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmb290ZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoZWFkZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoZ3JvdXAsIC5TbWlseUNhbGVuZGFyX19yZXNldCBtZW51LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbmF2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc2VjdGlvbiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBsaSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRoZWFkIHtcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRib2R5IHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRmb290IHtcbiAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBjb2xncm91cCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0ZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRoIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBjYXB0aW9uIHtcbiAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBpbnB1dCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBiLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgYiA+IGksIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdHJvbmcgPiBpLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYiA+IGVtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3Ryb25nID4gZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGkgPiBiLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaSA+IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgZW0gPiBiLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZW0gPiBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRleHRhcmVhLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaW5wdXQge1xuICBjdXJzb3I6IHRleHQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDOzs7Ozs7RUFNRyx3RUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0RBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDhEQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBQUo7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtBQUFKO0FBRUU7RUFDRSx3QkFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUU7RUFDRSxZQUFBO0FBSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJlc2V0IHtcXG5cXHRkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSxcXG5cXHRhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5cXHRzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuXFx0ZmllbGRzZXQsIGZvcm0sIGRpdi5mb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsXFxuXFx0dGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxuXFx0bWVudSwgbmF2LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGJ1dHRvbiwgdGV4dGFyZWEsIGlucHV0LCAuYnV0dG9uLCAubGVnZW5kIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIHNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDEwMCUgXFxcIk9wZW4gc2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIC1tb3otdGV4dC1hbGlnbi1sYXN0OiBpbml0aWFsO1xcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLXdlYmtpdC10ZXh0LWVtcGhhc2lzOiBub25lO1xcbiAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xcbiAgICB0ZXh0LWhlaWdodDogYXV0bztcXG4gICAgdGV4dC1pbmRlbnQ6IDA7XFxuICAgIHRleHQtanVzdGlmeTogYXV0bztcXG4gICAgdGV4dC1vdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRleHQtd3JhcDogbm9ybWFsO1xcbiAgICBhbGlnbm1lbnQtYWRqdXN0OiBhdXRvO1xcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IGJhc2VsaW5lO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcXG4gICAgYW5pbWF0aW9uOiBub25lIDAgZWFzZSAwIDEgbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgYXBwZWFyYW5jZTogbm9ybWFsO1xcbiAgICBhemltdXRoOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZSAwIDAgYXV0byByZXBlYXQgc2Nyb2xsIHBhZGRpbmctYm94IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgYmFzZWxpbmUtc2hpZnQ6IGJhc2VsaW5lO1xcbiAgICBiaW5kaW5nOiBub25lO1xcbiAgICBibGVlZDogNnB0O1xcbiAgICBib29rbWFyay1sYWJlbDogY29udGVudCgpO1xcbiAgICBib29rbWFyay1sZXZlbDogbm9uZTtcXG4gICAgYm9va21hcmstc3RhdGU6IG9wZW47XFxuICAgIGJvb2ttYXJrLXRhcmdldDogbm9uZTtcXG4gICAgYm9yZGVyOiAwIG5vbmUgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgYm94LWFsaWduOiBzdHJldGNoO1xcbiAgICAtd2Via2l0LWJveC1kZWNvcmF0aW9uLWJyZWFrOiBzbGljZTtcXG4gICAgYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xcbiAgICBib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIGZsZXg6IDAuMDtcXG4gICAgZmxleC1ncm91cDogMTtcXG4gICAgYm94LWxpbmVzOiBzaW5nbGU7XFxuICAgIGJveC1vcmRpbmFsLWdyb3VwOiAxO1xcbiAgICBib3gtb3JpZW50OiBpbmxpbmUtYXhpcztcXG4gICAgYm94LXBhY2s6IHN0YXJ0O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLXdlYmtpdC1icmVhay1hZnRlcjogYXV0bztcXG4gICAgLW1vei1icmVhay1hZnRlcjogYXV0bztcXG4gICAgYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAgIC13ZWJraXQtYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgICAtbW96LWJyZWFrLWJlZm9yZTogYXV0bztcXG4gICAgYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF1dG87XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgICBicmVhay1pbnNpZGU6IGF1dG87XFxuICAgIGNhcHRpb24tc2lkZTogdG9wO1xcbiAgICBjbGVhcjogbm9uZTtcXG4gICAgY2xpcDogYXV0bztcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yLXByb2ZpbGU6IGF1dG87XFxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiBhdXRvO1xcbiAgICAtbW96LWNvbHVtbi1jb3VudDogYXV0bztcXG4gICAgY29sdW1uLWNvdW50OiBhdXRvO1xcbiAgICAtd2Via2l0LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgICAtbW96LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcXG4gICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBub3JtYWw7XFxuICAgIC1tb3otY29sdW1uLWdhcDogbm9ybWFsO1xcbiAgICBjb2x1bW4tZ2FwOiBub3JtYWw7XFxuICAgIC13ZWJraXQtY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gICAgLW1vei1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcbiAgICBjb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xcbiAgICAtd2Via2l0LWNvbHVtbi1zcGFuOiAxO1xcbiAgICAtbW96LWNvbHVtbi1zcGFuOiAxO1xcbiAgICBjb2x1bW4tc3BhbjogMTtcXG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IGF1dG87XFxuICAgIC1tb3otY29sdW1uLXdpZHRoOiBhdXRvO1xcbiAgICBjb2x1bW4td2lkdGg6IGF1dG87XFxuICAgIC13ZWJraXQtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICAtbW96LWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBjb250ZW50OiBub3JtYWw7XFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBub25lO1xcbiAgICBjb3VudGVyLXJlc2V0OiBub25lO1xcbiAgICBjcm9wOiBhdXRvO1xcbiAgICBjdXJzb3I6IGF1dG87XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGRvbWluYW50LWJhc2VsaW5lOiBhdXRvO1xcbiAgICBkcm9wLWluaXRpYWwtYWZ0ZXItYWRqdXN0OiB0ZXh0LWFmdGVyLWVkZ2U7XFxuICAgIGRyb3AtaW5pdGlhbC1hZnRlci1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWRqdXN0OiB0ZXh0LWJlZm9yZS1lZGdlO1xcbiAgICBkcm9wLWluaXRpYWwtYmVmb3JlLWFsaWduOiBjYXBzLWhlaWdodDtcXG4gICAgZHJvcC1pbml0aWFsLXNpemU6IGF1dG87XFxuICAgIGRyb3AtaW5pdGlhbC12YWx1ZTogaW5pdGlhbDtcXG4gICAgZWxldmF0aW9uOiBsZXZlbDtcXG4gICAgZW1wdHktY2VsbHM6IHNob3c7XFxuICAgIGZpdDogZmlsbDtcXG4gICAgZml0LXBvc2l0aW9uOiAwJSAwJTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGZsb2F0LW9mZnNldDogMCAwO1xcbiAgICBncmlkLWNvbHVtbnM6IG5vbmU7XFxuICAgIGdyaWQtcm93czogbm9uZTtcXG4gICAgaGFuZ2luZy1wdW5jdHVhdGlvbjogbm9uZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBoeXBoZW5hdGUtYWZ0ZXI6IGF1dG87XFxuICAgIGh5cGhlbmF0ZS1iZWZvcmU6IGF1dG87XFxuICAgIGh5cGhlbmF0ZS1jaGFyYWN0ZXI6IGF1dG87XFxuICAgIGh5cGhlbmF0ZS1saW5lczogbm8tbGltaXQ7XFxuICAgIGh5cGhlbmF0ZS1yZXNvdXJjZTogbm9uZTtcXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBtYW51YWw7XFxuICAgIC1tb3otaHlwaGVuczogbWFudWFsO1xcbiAgICAtbXMtaHlwaGVuczogbWFudWFsO1xcbiAgICBoeXBoZW5zOiBtYW51YWw7XFxuICAgIGljb246IGF1dG87XFxuICAgIGltYWdlLW9yaWVudGF0aW9uOiBhdXRvO1xcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XFxuICAgIGltYWdlLXJlc29sdXRpb246IG5vcm1hbDtcXG4gICAgaW5saW5lLWJveC1hbGlnbjogbGFzdDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtc3RhY2tpbmc6IGlubGluZS1saW5lLWhlaWdodCBleGNsdWRlLXJ1YnkgY29uc2lkZXItc2hpZnRzO1xcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGUgbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJrczogbm9uZTtcXG4gICAgbWFycXVlZS1kaXJlY3Rpb246IGZvcndhcmQ7XFxuICAgIG1hcnF1ZWUtbG9vcDogMTtcXG4gICAgbWFycXVlZS1wbGF5LWNvdW50OiAxO1xcbiAgICBtYXJxdWVlLXNwZWVkOiBub3JtYWw7XFxuICAgIG1hcnF1ZWUtc3R5bGU6IHNjcm9sbDtcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIG1vdmUtdG86IG5vcm1hbDtcXG4gICAgbmF2LWRvd246IGF1dG87XFxuICAgIG5hdi1pbmRleDogYXV0bztcXG4gICAgbmF2LWxlZnQ6IGF1dG87XFxuICAgIG5hdi1yaWdodDogYXV0bztcXG4gICAgbmF2LXVwOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBvcnBoYW5zOiAyO1xcbiAgICBvdXRsaW5lOiBpbnZlcnQgbm9uZSBtZWRpdW07XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAwO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgb3ZlcmZsb3ctc3R5bGU6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZ2U6IGF1dG87XFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcXG4gICAgcGFnZS1wb2xpY3k6IHN0YXJ0O1xcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiBub25lO1xcbiAgICBwZXJzcGVjdGl2ZTogbm9uZTtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgcHJlc2VudGF0aW9uLWxldmVsOiAwO1xcbiAgICBwdW5jdHVhdGlvbi10cmltOiBub25lO1xcbiAgICBxdW90ZXM6IG5vbmU7XFxuICAgIHJlbmRlcmluZy1pbnRlbnQ6IGF1dG87XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIHJvdGF0aW9uOiAwO1xcbiAgICByb3RhdGlvbi1wb2ludDogNTAlIDUwJTtcXG4gICAgcnVieS1hbGlnbjogYXV0bztcXG4gICAgcnVieS1vdmVyaGFuZzogbm9uZTtcXG4gICAgcnVieS1wb3NpdGlvbjogYmVmb3JlO1xcbiAgICBydWJ5LXNwYW46IG5vbmU7XFxuICAgIHNpemU6IGF1dG87XFxuICAgIHN0cmluZy1zZXQ6IG5vbmU7XFxuICAgIHRhYmxlLWxheW91dDogYXV0bztcXG4gICAgdG9wOiBhdXRvO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMCBlYXNlIDA7XFxuICAgIHVuaWNvZGUtYmlkaTogbm9ybWFsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHdoaXRlLXNwYWNlLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgd2lkb3dzOiAyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgIHotaW5kZXg6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAvKiBBbmQgZGlzYWJsZSBNUyBncmFkaWVudHMgKi9cXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZD1mYWxzZSk7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgfVxcbiAgYWRkcmVzcywgYmxvY2txdW90ZSwgZGQsIGRpdiwgZGwsIGR0LCBmaWVsZHNldCwgZm9ybSwgZGl2LmZvcm0sIGZyYW1lLCBmcmFtZXNldCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbm9mcmFtZXMsIG9sLCBwLCB1bCwgY2VudGVyLCBkaXIsIGhyLCBtZW51LCBwcmUsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uLCBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBsaSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIHRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICB9XFxuICB0ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcXG4gIH1cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgfVxcbiAgdGJvZHkge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XFxuICB9XFxuICB0Zm9vdCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcXG4gIH1cXG4gIGNvbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcXG4gIH1cXG4gIGNvbGdyb3VwIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xcbiAgfVxcbiAgdGQsIHRoIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIH1cXG4gIGNhcHRpb24ge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xcbiAgfVxcbiAgaW5wdXQsIHNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIGIsIHN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgYiA+IGksIHN0cm9uZyA+IGksIGIgPiBlbSwgc3Ryb25nID4gZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgfVxcbiAgaSA+IHtcXG4gICAgYiwgc3Ryb25nIHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gIH1cXG4gIGVtID4ge1xcbiAgICBiLCBzdHJvbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgfVxcbiAgdGV4dGFyZWEsIGlucHV0IHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyZXNldFwiOiBgU21pbHlDYWxlbmRhcl9fcmVzZXRgLFxuXHRcImZvcm1cIjogYFNtaWx5Q2FsZW5kYXJfX2Zvcm1gLFxuXHRcImJ1dHRvblwiOiBgU21pbHlDYWxlbmRhcl9fYnV0dG9uYCxcblx0XCJsZWdlbmRcIjogYFNtaWx5Q2FsZW5kYXJfX2xlZ2VuZGBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBsb2FkZXJcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5ALXdlYmtpdC1rZXlmcmFtZXMgU21pbHlDYWxlbmRhcl9fc21pbHktc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIFNtaWx5Q2FsZW5kYXJfX3NtaWx5LXNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyIDMwLjk3JyUzRSUzQ3BhdGggZD0nTTMyLDE1LjQ4YTE2LjUyLDE2LjUyLDAsMCwxLTEuMzcsNi4yOCwxNi4zNSwxNi4zNSwwLDAsMS05LDguNjMsMTUuODcsMTUuODcsMCwwLDEtMTcuMy0zLjc4QTE1LjQzLDE1LjQzLDAsMCwxLDQuNzIsNC43MiwxNSwxNSwwLDAsMSwxNS40OS41MmExNC43NiwxNC43NiwwLDAsMSwxMC40LDQuNTZBMTQuNzcsMTQuNzcsMCwwLDEsMjksOS45YTE0LjQ1LDE0LjQ1LDAsMCwxLC44NSwzLjM1aC4xM0EyLjA2LDIuMDYsMCwwLDEsMzIsMTUuMzFhLjkxLjkxLDAsMCwxLDAsLjE3Wk0yOC43MiwxMGExNC4yNywxNC4yNywwLDAsMC0zLjItNC41NSwxNCwxNCwwLDAsMC0xMC0zLjlBMTMuNzIsMTMuNzIsMCwwLDAsMywxMC4zYTEzLjQzLDEzLjQzLDAsMCwwLC4yNCwxMC4yNywxMy4wNSwxMy4wNSwwLDAsMCwxMi4yOCw3LjgyLDEyLjkyLDEyLjkyLDAsMCwwLDQuODgtMS4xLDEyLjY1LDEyLjY1LDAsMCwwLDQuMDYtMi44NywxMi40OCwxMi40OCwwLDAsMCwyLjYyLTQuMTUsMTIuMjQsMTIuMjQsMCwwLDAsLjgyLTQuNzloMGEuOTEuOTEsMCwwLDEsMC0uMTcsMi4wNywyLjA3LDAsMCwxLDEuODQtMi4wNSwxNC4yNywxNC4yNywwLDAsMC0xLTMuMjZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0wLjUxKScvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAtMTBweCAwIDAgLTEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBTbWlseUNhbGVuZGFyX19zbWlseS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBTbWlseUNhbGVuZGFyX19zbWlseS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcjo6YmVmb3JlLCAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXI6OmFmdGVyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbG9hZGluZzo6YmVmb3JlLCAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbG9hZGluZzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBkcm9wZG93blxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMXB4IDVweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHotaW5kZXg6IDEwO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX192aXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyAuU21pbHlDYWxlbmRhcl9fYmFjayB7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiAxZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDFlbTtcbn1cblxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIC5TbWlseUNhbGVuZGFyX19jZWxsOjpiZWZvcmUsIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSAuU21pbHlDYWxlbmRhcl9fY2VsbDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBzZWxlY3Rpb25zLCBsZWZ0IC0gY2VudGVyIC0gcmlnaHRcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY2VsbHMgZGlzYWJsZWRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWRpc2FibGVkPWNlbnRlcl0ge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWRpc2FibGVkLWNvbG9yLCAjYmZiZmJmKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIGNlbGxzIGhpZ2hsaWdodGVkXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1sZWZ0XSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1jb2xvciwgcmdiKDU1LjI1LCA1NS4yNSwgNTUuMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1sZWZ0XTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPWxlZnRdOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9Y2VudGVyXSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1jb2xvciwgcmdiKDU1LjI1LCA1NS4yNSwgNTUuMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1jZW50ZXJdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPXJpZ2h0XSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1jb2xvciwgcmdiKDU1LjI1LCA1NS4yNSwgNTUuMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1yaWdodF06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG4gIHdpZHRoOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9cmlnaHRdOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBjZWxscyBpbnZhbGlkXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPWxlZnRdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtY29sb3IsIHJnYigxNzguMjUsIDE3OC4yNSwgMTc4LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1sZWZ0XTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgcmdiKDIyNy4yNSwgMjI3LjI1LCAyMjcuMjUpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1sZWZ0XTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCByZ2IoMjI3LjI1LCAyMjcuMjUsIDIyNy4yNSkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1jZW50ZXJdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtY29sb3IsIHJnYigxNzguMjUsIDE3OC4yNSwgMTc4LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1jZW50ZXJdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCByZ2IoMjI3LjI1LCAyMjcuMjUsIDIyNy4yNSkpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1yaWdodF0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1jb2xvciwgcmdiKDE3OC4yNSwgMTc4LjI1LCAxNzguMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPXJpZ2h0XTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgcmdiKDIyNy4yNSwgMjI3LjI1LCAyMjcuMjUpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xuICB3aWR0aDogNTAlO1xuICByaWdodDogNTAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9cmlnaHRdOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIHJnYigyMjcuMjUsIDIyNy4yNSwgMjI3LjI1KSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIGNlbGwgaG92ZXJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhvdmVyZWRdOm5vdChbZGF0YS1kaXNhYmxlZD1jZW50ZXJdKSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1jb2xvciwgcmdiKDU1LjI1LCA1NS4yNSwgNTUuMjUpKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1ob3ZlcmVkXTpub3QoW2RhdGEtZGlzYWJsZWQ9Y2VudGVyXSk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYm9yZGVyLXJhZGl1cywgNnB4KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBjb2xvcnNcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIge1xuICBmb250OiAxcmVtLzEuNCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0OiAyNXB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uUGlja2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19zcHJpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uVHJpZ2dlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNTVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBnYXA6IDAuNDVyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXMgZWFzZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbkxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbkNoZXZyb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwLjk1cmVtO1xuICBoZWlnaHQ6IDAuOTVyZW07XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25UcmlnZ2VyOmhvdmVyLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uVHJpZ2dlclthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvblRyaWdnZXI6Zm9jdXMtdmlzaWJsZSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBhZ2VyOmZvY3VzLXZpc2libGUsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJPcHRpb246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNDQ0NDQ0O1xuICBvdXRsaW5lLW9mZnNldDogMXB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGlja2VyUGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB6LWluZGV4OiAyMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbm1heCgwLCAxZnIpIGF1dG87XG4gIGdhcDogMC42cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBpY2tlckNsb3NlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbWluLWhlaWdodDogMi43cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC42cmVtIDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBpY2tlckhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBhZ2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDIuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQYWdlcltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJHcmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDMuMDVyZW0sIGF1dG8pO1xuICBnYXA6IDAuNHJlbTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGlja2VyQ2xvc2U6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNDQ0NDQ0O1xuICBvdXRsaW5lLW9mZnNldDogMXB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyT3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBwYWRkaW5nOiAwLjQ1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhck9wdGlvbltkYXRhLXNlbGVjdGVkLXllYXJdIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLXRvb2x0aXAtYmctY29sb3IsICMzMzMpO1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItdG9vbHRpcC1jb2xvciwgI2ZmZik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgei1pbmRleDogNTAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcCAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwIC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3csIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcCAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwIC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3c6OmJlZm9yZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXRvcF0gPiAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93IHtcbiAgYm90dG9tOiAtNHB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49Ym90dG9tXSA+IC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3cge1xuICB0b3A6IC00cHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1sZWZ0XSA+IC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3cge1xuICByaWdodDogLTRweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePXJpZ2h0XSA+IC5TbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3cge1xuICBsZWZ0OiAtNHB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19tb250aHNXcmFwcGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMmVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4taGVpZ2h0OiAycmVtO1xuICB6LWluZGV4OiAyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19tb2JpbGVXZWVrZGF5cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX21DZWxsIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIDI1JTtcbiAgZmxleDogMSAxIDI1JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19tQ2VsbCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleDogMSAxIDEwMCU7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gIH1cbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fbW9udGgge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdGFibGVIZWFkZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbjogMDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIGdhcDogMC4yZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3dlZWtSb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgZmxleDogMCAwIGF1dG87XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3RoLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jZWxsLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgMzBweDtcbiAgZmxleDogMSAxIDMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3RoIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2VsbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NlbGw6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNDQ0NDQ0O1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgei1pbmRleDogMjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2VsbC5TbWlseUNhbGVuZGFyX190b2RheSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogYXV0bztcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDAuNjVlbTtcbiAgcGFkZGluZzogMXB4IDNweDtcbiAgY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC41KTtcbiAgcmlnaHQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJPcGVuIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5TbWlseUNhbGVuZGFyX19mb2N1cyxcbi5TbWlseUNhbGVuZGFyX19kaXNhYmxlZCxcbi5TbWlseUNhbGVuZGFyX19zZWxlY3RlZCxcbi5TbWlseUNhbGVuZGFyX19yZXZlcnNlZCxcbi5TbWlseUNhbGVuZGFyX19kaXJlY3QsXG4uU21pbHlDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWQsXG4uU21pbHlDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0LFxuLlNtaWx5Q2FsZW5kYXJfX2FjdGlvbnNFbmFibGVkLFxuLlNtaWx5Q2FsZW5kYXJfX2hpZ2hsaWdodGVkLFxuLlNtaWx5Q2FsZW5kYXJfX2ludmFsaWQge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIGNlbGwgaG92ZXIgY3Vyc29yc1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS1zZWxlY3RhYmxlPXRydWVdIC5TbWlseUNhbGVuZGFyX19jZWxsICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgYnV0dG9uc1xuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAyM3B4O1xuICBmaWxsOiAjNDQ0NDQ0O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCBzdmcsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2sgc3ZnIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkOmFjdGl2ZSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZDpmb2N1cyxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjazphY3RpdmUsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2s6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkOmZvY3VzLXZpc2libGUsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2s6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNDQ0NDQ0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkOmhvdmVyLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrOmhvdmVyIHtcbiAgZmlsbDogIzM4OTVkOTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZFtkaXNhYmxlZF0sXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmRbZGlzYWJsZWRdOmhvdmVyLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrW2Rpc2FibGVkXSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFja1tkaXNhYmxlZF06aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZmlsbDogIzQ0NDQ0NDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBtb2JpbGUgbW9kZVxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fcGFnaW5hdGlvbixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5O1xuICBtaW4taGVpZ2h0OiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19tb250aHNXcmFwcGVyLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX21vbnRoc1dyYXBwZXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMWVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19tb2JpbGVXZWVrZGF5cyxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19tb2JpbGVXZWVrZGF5cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19tQ2VsbCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19tQ2VsbCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24sXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogdmFyKC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0KTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX21vbnRoOmZpcnN0LWNoaWxkIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX21vbnRoOmZpcnN0LWNoaWxkIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMC4zNWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjE1ZW07XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX3RhYmxlSGVhZGVyLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX3RhYmxlSGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKTpub3QoLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkKSAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKTpub3QoLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkKSAuU21pbHlDYWxlbmRhcl9fYmFjayxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlOm5vdCguU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGU6bm90KC5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCkgLlNtaWx5Q2FsZW5kYXJfX2JhY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkIC5TbWlseUNhbGVuZGFyX19iYWNrLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUuU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZS5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCAuU21pbHlDYWxlbmRhcl9fYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IHZhcigtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uU21pbHlDYWxlbmRhcl9fc3JPbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDA7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sb2FkaW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY2FsZW5kYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZHJvcC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lLWJhc2ljLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7d0RBQUE7QUFNQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQ0FGO0VER0E7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDRkY7RURJQTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNGRjtBQUNGO0FETUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7QUNKSjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGl3QkUvQ29CO0VGZ0RwQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtEQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBQ0xKO0FEUUU7RUFFRSxhQUFBO0VBQ0EsVUFBQTtFQUNB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U0FBQTtFQUNBLG9CQUFBO0FBcUpKO0FBbEpFOztFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBcUpKO0FBbEpFOztFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQkM1aEJvQjtBRGlyQnhCO0FBbEpFOztFQUNFLGNBQUE7RUFDQSxlQUFBO0FBcUpKO0FBbEpFOztFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JDeGlCb0I7RUR5aUJwQixvQkFBQTtFQUNBLDJDQUFBO0FBcUpKO0FBbEpFOztFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFxSko7QUFsSkU7O0VBQ0UsYUFBQTtBQXFKSjtBQWpKSTs7OztFQUVFLGFBQUE7QUFxSk47QUFoSkk7Ozs7RUFFRSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQW9KTjs7QUEvSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBa0pGOztBQS9JQTtFQUVJO0lBQ0UscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0VBaUpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIGxvYWRlclxcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbWlseS1zcGluIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNtaWx5LXNwaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5jYWxlbmRhciB7XFxuICAmOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuNyk7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgfVxcblxcbiAgJjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkaWNvbi1zcGlubmVyLXN2ZztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbWFyZ2luOiAtMTBweCAwIDAgLTEwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc21pbHktc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogc21pbHktc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuICB9XFxuXFxuICAmOjpiZWZvcmUsXFxuICAmOjphZnRlciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcblxcbiAgJi5sb2FkaW5nIHtcXG4gICAgJjo6YmVmb3JlLFxcbiAgICAmOjphZnRlciB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnc3ZnLXVyaSc7XFxuQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdsb2FkaW5nJztcXG5AaW1wb3J0ICdkcm9wJztcXG5AaW1wb3J0ICd0aGVtZS1iYXNpYyc7XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIGNvbG9yc1xcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhciB7XFxuICBmb250OiAxcmVtLzEuNCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogJGNhbGVuZGFyLWJnLWNvbG9yO1xcbiAgLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQ6IDI1cHg7XFxuXFxuICAuY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcHRpb25QaWNrZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc3ByaXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uVHJpZ2dlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGNvbG9yOiAkY2VsbC1jb2xvcjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjU1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiAwLjQ1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2U7XFxuICB9XFxuXFxuICAuY2FwdGlvbkxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uQ2hldnJvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDAuOTVyZW07XFxuICAgIGhlaWdodDogMC45NXJlbTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uVHJpZ2dlcjpob3ZlcixcXG4gIC5jYXB0aW9uVHJpZ2dlclthcmlhLWV4cGFuZGVkPSd0cnVlJ10ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgfVxcblxcbiAgLmNhcHRpb25UcmlnZ2VyOmZvY3VzLXZpc2libGUsXFxuICAueWVhclBhZ2VyOmZvY3VzLXZpc2libGUsXFxuICAueWVhck9wdGlvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICRidG4tZmlsbDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDFweDtcXG4gIH1cXG5cXG4gIC55ZWFyUGlja2VyUGFuZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOiAkY2FsZW5kYXItYmctY29sb3I7XFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWlubWF4KDAsIDFmcikgYXV0bztcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLnllYXJQaWNrZXJDbG9zZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbiAgICBjb2xvcjogJGJ0bi1maWxsO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgbWluLWhlaWdodDogMi43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC55ZWFyUGlja2VySGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgfVxcblxcbiAgLnllYXJQYWdlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbiAgICBjb2xvcjogJGJ0bi1maWxsO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1pbi1oZWlnaHQ6IDIuN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB9XFxuXFxuICAueWVhclBhZ2VyW2Rpc2FibGVkXSB7XFxuICAgIG9wYWNpdHk6IDAuNDU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gIH1cXG5cXG4gIC55ZWFyR3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgzLjA1cmVtLCBhdXRvKTtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcXG4gIH1cXG5cXG4gIC55ZWFyUGlja2VyQ2xvc2U6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkYnRuLWZpbGw7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAxcHg7XFxuICB9XFxuXFxuICAueWVhck9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogJGNlbGwtY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICAgIHBhZGRpbmc6IDAuNDVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnllYXJPcHRpb25bZGF0YS1zZWxlY3RlZC15ZWFyXSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAudG9vbHRpcCB7XFxuICAgIGJhY2tncm91bmQ6ICR0b29sdGlwLWJnLWNvbG9yO1xcbiAgICBjb2xvcjogJHRvb2x0aXAtY29sb3I7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gICAgLnRvb2x0aXBBcnJvdyB7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICAgICYsICY6OmJlZm9yZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogOHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICAgIH1cXG5cXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J3RvcCddID4gLnRvb2x0aXBBcnJvdyB7XFxuICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J2JvdHRvbSddID4gLnRvb2x0aXBBcnJvdyB7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J2xlZnQnXSA+IC50b29sdGlwQXJyb3cge1xcbiAgICAgIHJpZ2h0OiAtNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J3JpZ2h0J10gPiAudG9vbHRpcEFycm93IHtcXG4gICAgICBsZWZ0OiAtNHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9udGhzV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJlbTtcXG4gIH1cXG5cXG4gIC5wYWdpbmF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLm1vYmlsZVdlZWtkYXlzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tQ2VsbCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXg6IDEgMSAyNSU7XFxuICAgIGZsZXg6IDEgMSAyNSU7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgMTAwJTtcXG4gICAgICBmbGV4OiAxIDEgMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vbnRoIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAudGFibGVIZWFkZXIge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZ2FwOiAwLjJlbTtcXG4gIH1cXG5cXG4gIC53ZWVrUm93IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgfVxcblxcbiAgLnRoLFxcbiAgLmNlbGwsXFxuICAucGxhY2Vob2xkZXIge1xcbiAgICB3aWR0aDogJGNlbGwtd2lkdGg7XFxuICAgIG1pbi13aWR0aDogJGNlbGwtd2lkdGg7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4OiAxIDEgJGNlbGwtd2lkdGg7XFxuICAgIGZsZXg6IDEgMSAkY2VsbC13aWR0aDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC50aCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBjb2xvcjogJHRoLWNvbG9yO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2VsbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiAkY2VsbC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcblxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuXFxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRidG4tZmlsbDtcXG4gICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgICYudG9kYXkge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICB9XFxuXFxuICAucGxhY2Vob2xkZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICB9XFxuXFxuICAuY250IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgfVxcblxcbiAgLmluZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiAwLjY1ZW07XFxuICAgIHBhZGRpbmc6IDFweCAzcHg7XFxuICAgIGNvbG9yOiAkaW5mby1jb2xvcjtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmNhbGVuZGFyLnllYXJQaWNrZXJPcGVuIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9jdXMsXFxuLmRpc2FibGVkLFxcbi5zZWxlY3RlZCxcXG4ucmV2ZXJzZWQsXFxuLmRpcmVjdCxcXG4uc2VsZWN0aW5nUmV2ZXJzZWQsXFxuLnNlbGVjdGluZ0RpcmVjdCxcXG4uYWN0aW9uc0VuYWJsZWQsXFxuLmhpZ2hsaWdodGVkLFxcbi5pbnZhbGlkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gIGNlbGwgaG92ZXIgY3Vyc29yc1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhciB7XFxuICAvLyBjdXJzb3IgcG9pbnRlciBpZiBjYWxlbmRhciBpcyBzZWxlY3RhYmxlXFxuICAmW2RhdGEtc2VsZWN0YWJsZT1cXFwidHJ1ZVxcXCJdIC5jZWxsICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBidXR0b25zXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNhbGVuZGFyIHtcXG5cXG4gIC5mb3J3YXJkLFxcbiAgLmJhY2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMjNweDtcXG4gICAgZmlsbDogJGJ0bi1maWxsO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgc3ZnIHtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmZvcndhcmQge1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG5cXG4gIC5mb3J3YXJkOmFjdGl2ZSxcXG4gIC5mb3J3YXJkOmZvY3VzLFxcbiAgLmJhY2s6YWN0aXZlLFxcbiAgLmJhY2s6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblxcbiAgLmZvcndhcmQ6Zm9jdXMtdmlzaWJsZSxcXG4gIC5iYWNrOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgJGJ0bi1maWxsO1xcbiAgfVxcblxcbiAgLmZvcndhcmQ6aG92ZXIsXFxuICAuYmFjazpob3ZlciB7XFxuICAgIGZpbGw6ICRidG4tZmlsbC1ob3ZlcjtcXG4gIH1cXG5cXG4gIC5mb3J3YXJkW2Rpc2FibGVkXSxcXG4gIC5mb3J3YXJkW2Rpc2FibGVkXTpob3ZlcixcXG4gIC5iYWNrW2Rpc2FibGVkXSxcXG4gIC5iYWNrW2Rpc2FibGVkXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmaWxsOiAkYnRuLWZpbGw7XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBtb2JpbGUgbW9kZVxcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYWxlbmRhci5tb2JpbGVNb2RlOm5vdCguZHJvcEJhc2ljKSxcXG4uY2FsZW5kYXIuZHJvcEJhc2ljLm1vYmlsZU1vZGUudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBtYXgtaGVpZ2h0OiA3NXZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gIC5wYWdpbmF0aW9uIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgLm1vbnRoc1dyYXBwZXIge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbiAgfVxcblxcbiAgLm1vYmlsZVdlZWtkYXlzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGJhY2tncm91bmQ6ICRjYWxlbmRhci1iZy1jb2xvcjtcXG4gIH1cXG5cXG4gIC5tQ2VsbCB7XFxuICAgIGZsZXg6IDEgMSAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY2FwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogdmFyKC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0KTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgYmFja2dyb3VuZDogJGNhbGVuZGFyLWJnLWNvbG9yO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XFxuICB9XFxuXFxuICAubW9udGg6Zmlyc3QtY2hpbGQgLmNhcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAuMzVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi4xNWVtO1xcbiAgfVxcblxcbiAgLnRhYmxlSGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICY6bm90KC5tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCkge1xcbiAgICAuZm9yd2FyZCxcXG4gICAgLmJhY2sge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQge1xcbiAgICAuZm9yd2FyZCxcXG4gICAgLmJhY2sge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHRvcDogdmFyKC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0KTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc3JPbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAuY2FsZW5kYXIge1xcbiAgICAqIHtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRpY29uLXNwaW5uZXItc3ZnOiAgICAgIHN2Zy11cmkoXFxcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIgMzAuOTcnPjxwYXRoIGQ9J00zMiwxNS40OGExNi41MiwxNi41MiwwLDAsMS0xLjM3LDYuMjgsMTYuMzUsMTYuMzUsMCwwLDEtOSw4LjYzLDE1Ljg3LDE1Ljg3LDAsMCwxLTE3LjMtMy43OEExNS40MywxNS40MywwLDAsMSw0LjcyLDQuNzIsMTUsMTUsMCwwLDEsMTUuNDkuNTJhMTQuNzYsMTQuNzYsMCwwLDEsMTAuNCw0LjU2QTE0Ljc3LDE0Ljc3LDAsMCwxLDI5LDkuOWExNC40NSwxNC40NSwwLDAsMSwuODUsMy4zNWguMTNBMi4wNiwyLjA2LDAsMCwxLDMyLDE1LjMxYS45MS45MSwwLDAsMSwwLC4xN1pNMjguNzIsMTBhMTQuMjcsMTQuMjcsMCwwLDAtMy4yLTQuNTUsMTQsMTQsMCwwLDAtMTAtMy45QTEzLjcyLDEzLjcyLDAsMCwwLDMsMTAuM2ExMy40MywxMy40MywwLDAsMCwuMjQsMTAuMjcsMTMuMDUsMTMuMDUsMCwwLDAsMTIuMjgsNy44MiwxMi45MiwxMi45MiwwLDAsMCw0Ljg4LTEuMSwxMi42NSwxMi42NSwwLDAsMCw0LjA2LTIuODcsMTIuNDgsMTIuNDgsMCwwLDAsMi42Mi00LjE1LDEyLjI0LDEyLjI0LDAsMCwwLC44Mi00Ljc5aDBhLjkxLjkxLDAsMCwxLDAtLjE3LDIuMDcsMi4wNywwLDAsMSwxLjg0LTIuMDUsMTQuMjcsMTQuMjcsMCwwLDAtMS0zLjI2WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMC41MSknLz48L3N2Zz5cXFwiKTtcXG5cXG4kYnJlYWtwb2ludC14czogICAgICAgICA5MDBweDtcXG5cXG4kdHJhbnNpdGlvbjogICAgICAgICAgICBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xcblxcbi8vIHRvb2x0aXBcXG5cXG4kdG9vbHRpcC1iZy1jb2xvcjogICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci10b29sdGlwLWJnLWNvbG9yLCAjMzMzKTtcXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci10b29sdGlwLWNvbG9yLCAjZmZmKTtcXG5cXG4vLyBjYWxlbmRhclxcblxcbiRjYWxlbmRhci1iZy1jb2xvcjogICAgICNmZmY7XFxuXFxuLy8gY2FsZW5kYXIgY2VsbHNcXG5cXG4kY2VsbC13aWR0aDogICAgICAgICAgICAzMHB4O1xcblxcbiRjZWxsLWNvbG9yOiAgICAgICAgICAgICM0NDQ0NDQ7XFxuXFxuJGRpc2FibGVkLWJnLWNvbG9yOiAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItZGlzYWJsZWQtYmctY29sb3IsICNmMGYwZjApO1xcbiRkaXNhYmxlZC1jb2xvcjogICAgICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLWRpc2FibGVkLWNvbG9yLCAjYmZiZmJmKTtcXG5cXG4kaGlnaGxpZ2h0ZWQtYmctY29sb3I6ICB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgbGlnaHRlbigjNTc4NEY1LCAyMCUpKTtcXG4kaGlnaGxpZ2h0ZWQtY29sb3I6ICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1jb2xvciwgZGFya2VuKCRjZWxsLWNvbG9yLCA1JSkpO1xcblxcbiRpbnZhbGlkLWJnLWNvbG9yOiAgICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIGRhcmtlbigjZjBmMGYwLCAgNSUpKTtcXG4kaW52YWxpZC1jb2xvcjogICAgICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWNvbG9yLCBkYXJrZW4oI2JmYmZiZiwgNSUpKTtcXG5cXG4vLyBjYWxlbmRhciB0YWJsZVxcblxcbiRpbmZvLWNvbG9yOiAgICAgICAgICAgIHJnYmEoNjAsIDYwLCA2MCwgMC41KTtcXG5cXG4kdGgtYm9yZGVyLWJvdHRvbTogICAgICAjY2JjYmNiO1xcbiR0aC1jb2xvcjogICAgICAgICAgICAgICNhYWFhYWE7XFxuXFxuLy8gZm9ybVxcblxcbiRidG4tZmlsbDogICAgICAgICAgICAgICRjZWxsLWNvbG9yO1xcbiRidG4tYm9yZGVyOiAgICAgICAgICAgICR0aC1ib3JkZXItYm90dG9tO1xcbiRidG4tZmlsbC1ob3ZlcjogICAgICAgICMzODk1ZDk7XFxuXCIsXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgZHJvcGRvd25cXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXIuZHJvcEJhc2ljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgJi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY2FwdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IC43ZW07XFxuICB9XFxuXFxuICAuZm9yd2FyZCxcXG4gIC5iYWNrIHtcXG4gICAgdG9wOiAxZW07XFxuICAgIGxlZnQ6IDFlbTtcXG4gIH1cXG5cXG4gIC5mb3J3YXJkIHtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcmlnaHQ6IDFlbTtcXG4gIH1cXG59XFxuXCIsXCIkY2VsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XFxuJGNlbGwtYmctb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAuNSk7XFxuXFxuLmNhbGVuZGFyW2RhdGEtdGhlbWU9XFxcImJhc2ljXFxcIl0ge1xcbiAgLmNlbGwge1xcbiAgICAmOjpiZWZvcmUsXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgei1pbmRleDogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgc2VsZWN0aW9ucywgbGVmdCAtIGNlbnRlciAtIHJpZ2h0XFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICBjZWxscyBkaXNhYmxlZFxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhcltkYXRhLXRoZW1lPVxcXCJiYXNpY1xcXCJdIHtcXG4gIC8vIFtkYXRhLWRpc2FibGVkPVxcXCJsZWZ0XFxcIl0ge1xcbiAgLy8gICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xcbiAgLy8gfVxcblxcbiAgW2RhdGEtZGlzYWJsZWQ9XFxcImNlbnRlclxcXCJdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAgY2VsbHMgaGlnaGxpZ2h0ZWRcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXJbZGF0YS10aGVtZT1cXFwiYmFzaWNcXFwiXSB7XFxuICBbZGF0YS1oaWdobGlnaHRlZD1cXFwibGVmdFxcXCJdIHtcXG4gICAgY29sb3I6ICRoaWdobGlnaHRlZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRjZWxsLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFtkYXRhLWhpZ2hsaWdodGVkPVxcXCJjZW50ZXJcXFwiXSB7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0ZWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFtkYXRhLWhpZ2hsaWdodGVkPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgY29sb3I6ICRoaWdobGlnaHRlZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHJpZ2h0OiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2VsbC1ib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAgY2VsbHMgaW52YWxpZFxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhcltkYXRhLXRoZW1lPVxcXCJiYXNpY1xcXCJdIHtcXG4gIFtkYXRhLWludmFsaWQ9XFxcImxlZnRcXFwiXSB7XFxuICAgIGNvbG9yOiAkaW52YWxpZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaW52YWxpZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaW52YWxpZC1iZy1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2VsbC1ib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICB9XFxuXFxuICBbZGF0YS1pbnZhbGlkPVxcXCJjZW50ZXJcXFwiXSB7XFxuICAgIGNvbG9yOiAkaW52YWxpZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaW52YWxpZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICB9XFxuICB9XFxuXFxuICBbZGF0YS1pbnZhbGlkPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgY29sb3I6ICRpbnZhbGlkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRpbnZhbGlkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICByaWdodDogNTAlO1xcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaW52YWxpZC1iZy1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2VsbC1ib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAgY2VsbCBob3Zlclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYWxlbmRhcltkYXRhLXRoZW1lPVxcXCJiYXNpY1xcXCJdIHtcXG4gIFtkYXRhLWhvdmVyZWRdOm5vdChbZGF0YS1kaXNhYmxlZD1cXFwiY2VudGVyXFxcIl0pIHtcXG4gICAgY29sb3I6ICRoaWdobGlnaHRlZC1jb2xvcjtcXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2VsbC1ib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNhbGVuZGFyXCI6IGBTbWlseUNhbGVuZGFyX19jYWxlbmRhcmAsXG5cdFwic21pbHlTcGluXCI6IGBTbWlseUNhbGVuZGFyX19zbWlseS1zcGluYCxcblx0XCJsb2FkaW5nXCI6IGBTbWlseUNhbGVuZGFyX19sb2FkaW5nYCxcblx0XCJkcm9wQmFzaWNcIjogYFNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpY2AsXG5cdFwidmlzaWJsZVwiOiBgU21pbHlDYWxlbmRhcl9fdmlzaWJsZWAsXG5cdFwiY2FwdGlvblwiOiBgU21pbHlDYWxlbmRhcl9fY2FwdGlvbmAsXG5cdFwiZm9yd2FyZFwiOiBgU21pbHlDYWxlbmRhcl9fZm9yd2FyZGAsXG5cdFwiYmFja1wiOiBgU21pbHlDYWxlbmRhcl9fYmFja2AsXG5cdFwiY2VsbFwiOiBgU21pbHlDYWxlbmRhcl9fY2VsbGAsXG5cdFwiY2FwdGlvblBpY2tlclwiOiBgU21pbHlDYWxlbmRhcl9fY2FwdGlvblBpY2tlcmAsXG5cdFwic3ByaXRlXCI6IGBTbWlseUNhbGVuZGFyX19zcHJpdGVgLFxuXHRcImNhcHRpb25UcmlnZ2VyXCI6IGBTbWlseUNhbGVuZGFyX19jYXB0aW9uVHJpZ2dlcmAsXG5cdFwiY2FwdGlvbkxhYmVsXCI6IGBTbWlseUNhbGVuZGFyX19jYXB0aW9uTGFiZWxgLFxuXHRcImNhcHRpb25DaGV2cm9uXCI6IGBTbWlseUNhbGVuZGFyX19jYXB0aW9uQ2hldnJvbmAsXG5cdFwieWVhclBhZ2VyXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyUGFnZXJgLFxuXHRcInllYXJPcHRpb25cIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJPcHRpb25gLFxuXHRcInllYXJQaWNrZXJQYW5lbFwiOiBgU21pbHlDYWxlbmRhcl9feWVhclBpY2tlclBhbmVsYCxcblx0XCJ5ZWFyUGlja2VyQ2xvc2VcIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJDbG9zZWAsXG5cdFwieWVhclBpY2tlckhlYWRlclwiOiBgU21pbHlDYWxlbmRhcl9feWVhclBpY2tlckhlYWRlcmAsXG5cdFwieWVhckdyaWRcIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJHcmlkYCxcblx0XCJ0b29sdGlwXCI6IGBTbWlseUNhbGVuZGFyX190b29sdGlwYCxcblx0XCJ0b29sdGlwQXJyb3dcIjogYFNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvd2AsXG5cdFwibW9udGhzV3JhcHBlclwiOiBgU21pbHlDYWxlbmRhcl9fbW9udGhzV3JhcHBlcmAsXG5cdFwicGFnaW5hdGlvblwiOiBgU21pbHlDYWxlbmRhcl9fcGFnaW5hdGlvbmAsXG5cdFwibW9iaWxlV2Vla2RheXNcIjogYFNtaWx5Q2FsZW5kYXJfX21vYmlsZVdlZWtkYXlzYCxcblx0XCJtQ2VsbFwiOiBgU21pbHlDYWxlbmRhcl9fbUNlbGxgLFxuXHRcIm1vbnRoXCI6IGBTbWlseUNhbGVuZGFyX19tb250aGAsXG5cdFwidGFibGVIZWFkZXJcIjogYFNtaWx5Q2FsZW5kYXJfX3RhYmxlSGVhZGVyYCxcblx0XCJib2R5XCI6IGBTbWlseUNhbGVuZGFyX19ib2R5YCxcblx0XCJ3ZWVrUm93XCI6IGBTbWlseUNhbGVuZGFyX193ZWVrUm93YCxcblx0XCJ0aFwiOiBgU21pbHlDYWxlbmRhcl9fdGhgLFxuXHRcInBsYWNlaG9sZGVyXCI6IGBTbWlseUNhbGVuZGFyX19wbGFjZWhvbGRlcmAsXG5cdFwidG9kYXlcIjogYFNtaWx5Q2FsZW5kYXJfX3RvZGF5YCxcblx0XCJjbnRcIjogYFNtaWx5Q2FsZW5kYXJfX2NudGAsXG5cdFwiaW5mb1wiOiBgU21pbHlDYWxlbmRhcl9faW5mb2AsXG5cdFwieWVhclBpY2tlck9wZW5cIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJPcGVuYCxcblx0XCJmb2N1c1wiOiBgU21pbHlDYWxlbmRhcl9fZm9jdXNgLFxuXHRcImRpc2FibGVkXCI6IGBTbWlseUNhbGVuZGFyX19kaXNhYmxlZGAsXG5cdFwic2VsZWN0ZWRcIjogYFNtaWx5Q2FsZW5kYXJfX3NlbGVjdGVkYCxcblx0XCJyZXZlcnNlZFwiOiBgU21pbHlDYWxlbmRhcl9fcmV2ZXJzZWRgLFxuXHRcImRpcmVjdFwiOiBgU21pbHlDYWxlbmRhcl9fZGlyZWN0YCxcblx0XCJzZWxlY3RpbmdSZXZlcnNlZFwiOiBgU21pbHlDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWRgLFxuXHRcInNlbGVjdGluZ0RpcmVjdFwiOiBgU21pbHlDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0YCxcblx0XCJhY3Rpb25zRW5hYmxlZFwiOiBgU21pbHlDYWxlbmRhcl9fYWN0aW9uc0VuYWJsZWRgLFxuXHRcImhpZ2hsaWdodGVkXCI6IGBTbWlseUNhbGVuZGFyX19oaWdobGlnaHRlZGAsXG5cdFwiaW52YWxpZFwiOiBgU21pbHlDYWxlbmRhcl9faW52YWxpZGAsXG5cdFwibW9iaWxlTW9kZVwiOiBgU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZWAsXG5cdFwibW9iaWxlUGFnaW5hdGlvbkVuYWJsZWRcIjogYFNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkYCxcblx0XCJzck9ubHlcIjogYFNtaWx5Q2FsZW5kYXJfX3NyT25seWBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vc2Fzcy1sb2FkZXJAMTYuMC43X3Nhc3NAMS45OS4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vc2Fzcy1sb2FkZXJAMTYuMC43X3Nhc3NAMS45OS4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2Fzcy1sb2FkZXJAMTYuMC43X3Nhc3NAMS45OS4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vY2FsZW5kYXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjdfc2Fzc0AxLjk5LjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9jYWxlbmRhci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGdsb2JhbCBkb2N1bWVudCwgcmVxdWlyZSwgd2luZG93ICovXG5sZXQgQ2FsZW5kYXIgPSByZXF1aXJlKCcuL2NhbGVuZGFyJyk7XG5cbkNhbGVuZGFyID0gQ2FsZW5kYXIuZGVmYXVsdDtcblxuY29uc3Qgd2lkZ2V0VXRpbHMgPSByZXF1aXJlKCd3aWRnZXQtdXRpbHMnKTtcbmNvbnN0IGF1dG9Jbml0U2VsZWN0b3IgPSAnW2RhdGEtc21pbHktY2FsZW5kYXItd2lkZ2V0XSc7XG5cbi8vIEV4cG9ydCBXaWRnZXRVdGlsc1xud2luZG93LlNtaWx5V2lkZ2V0VXRpbHMgPSB3aWRnZXRVdGlscztcblxuQ2FsZW5kYXIuaW5pdCA9IChvcHRzKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVkID0gW107XG4gIGNvbnN0IG9wdGlvbnMgICAgID0gb3B0cyB8fCB7fTtcbiAgY29uc3QgZWxlbWVudHMgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGF1dG9Jbml0U2VsZWN0b3IpO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcbiAgICBjb25zdCBjYWwgID0gbmV3IENhbGVuZGFyKG9wdGlvbnMpO1xuXG4gICAgaW5pdGlhbGl6ZWQucHVzaChjYWwpO1xuICB9KTtcblxuICBDYWxlbmRhci5pbnN0YW5jZXMgPSBpbml0aWFsaXplZDtcbiAgcmV0dXJuIGluaXRpYWxpemVkO1xufTtcblxuQ2FsZW5kYXIuVkVSU0lPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgQ2FsZW5kYXIuaW5pdCgpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBDYWxlbmRhci5pbml0KCk7XG4gIH0pO1xufVxuXG53aW5kb3cuU21pbHlDYWxlbmRhcldpZGdldCA9IENhbGVuZGFyO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJjdXJyZW5jeVN5bWJvbE1hcCIsInJlcXVpcmUiLCJnZXRTeW1ib2xGcm9tQ3VycmVuY3kiLCJjdXJyZW5jeUNvZGUiLCJjb2RlIiwidG9VcHBlckNhc2UiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJBRUQiLCJBRk4iLCJBTEwiLCJBTUQiLCJBTkciLCJBT0EiLCJBUlMiLCJBVUQiLCJBV0ciLCJBWk4iLCJCQU0iLCJCQkQiLCJCRFQiLCJCR04iLCJCSEQiLCJCSUYiLCJCTUQiLCJCTkQiLCJCT0IiLCJCT1YiLCJCUkwiLCJCU0QiLCJCVEMiLCJCVE4iLCJCV1AiLCJCWU4iLCJCWVIiLCJCWkQiLCJDQUQiLCJDREYiLCJDSEUiLCJDSEYiLCJDSFciLCJDTEYiLCJDTFAiLCJDTkgiLCJDTlkiLCJDT1AiLCJDT1UiLCJDUkMiLCJDVUMiLCJDVVAiLCJDVkUiLCJDWksiLCJESkYiLCJES0siLCJET1AiLCJEWkQiLCJFRUsiLCJFR1AiLCJFUk4iLCJFVEIiLCJFVEgiLCJFVVIiLCJGSkQiLCJGS1AiLCJHQlAiLCJHRUwiLCJHR1AiLCJHSEMiLCJHSFMiLCJHSVAiLCJHTUQiLCJHTkYiLCJHVFEiLCJHWUQiLCJIS0QiLCJITkwiLCJIUksiLCJIVEciLCJIVUYiLCJJRFIiLCJJTFMiLCJJTVAiLCJJTlIiLCJJUUQiLCJJUlIiLCJJU0siLCJKRVAiLCJKTUQiLCJKT0QiLCJKUFkiLCJLRVMiLCJLR1MiLCJLSFIiLCJLTUYiLCJLUFciLCJLUlciLCJLV0QiLCJLWUQiLCJLWlQiLCJMQUsiLCJMQlAiLCJMS1IiLCJMUkQiLCJMU0wiLCJMVEMiLCJMVEwiLCJMVkwiLCJMWUQiLCJNQUQiLCJNREwiLCJNR0EiLCJNS0QiLCJNTUsiLCJNTlQiLCJNT1AiLCJNUk8iLCJNUlUiLCJNVVIiLCJNVlIiLCJNV0siLCJNWE4iLCJNWFYiLCJNWVIiLCJNWk4iLCJOQUQiLCJOR04iLCJOSU8iLCJOT0siLCJOUFIiLCJOWkQiLCJPTVIiLCJQQUIiLCJQRU4iLCJQR0siLCJQSFAiLCJQS1IiLCJQTE4iLCJQWUciLCJRQVIiLCJSTUIiLCJST04iLCJSU0QiLCJSVUIiLCJSV0YiLCJTQVIiLCJTQkQiLCJTQ1IiLCJTREciLCJTRUsiLCJTR0QiLCJTSFAiLCJTTEwiLCJTT1MiLCJTUkQiLCJTU1AiLCJTVEQiLCJTVE4iLCJTVkMiLCJTWVAiLCJTWkwiLCJUSEIiLCJUSlMiLCJUTVQiLCJUTkQiLCJUT1AiLCJUUkwiLCJUUlkiLCJUVEQiLCJUVkQiLCJUV0QiLCJUWlMiLCJVQUgiLCJVR1giLCJVU0QiLCJVWUkiLCJVWVUiLCJVWVciLCJVWlMiLCJWRUYiLCJWRVMiLCJWTkQiLCJWVVYiLCJXU1QiLCJYQUYiLCJYQlQiLCJYQ0QiLCJYT0YiLCJYUEYiLCJYU1UiLCJYVUEiLCJZRVIiLCJaQVIiLCJaTVciLCJaV0QiLCJaV0wiLCJnZXRGb3JtYXRPcHRpb25zIiwidGltZXpvbmUiLCJvcHRpb25zIiwidXNlT3B0aW9ucyIsInR6IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJnZXRUaW1lem9uZU9mZnNldE1pbnV0ZXMiLCJkYXRlIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidHpVcHBlciIsIlN0cmluZyIsImRlZmF1bHRUaW1lem9uZU5hbWVzIiwib2Zmc2V0IiwiRXJyb3IiLCJzdHJmdGltZSIsImZvcm1hdCIsInRvRGF0ZSIsInRvSlNEYXRlIiwidG9rZW5zIiwiVGltZXN0YW1wUGFyc2VyIiwicGFyc2VGb3JtYXRTdHJpbmciLCJ0aW1lem9uZU9mZnNldE1pbnV0ZXMiLCJ0ekRhdGUiLCJzZXRVVENNaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsIm91dHB1dCIsInRva2VuIiwiRGlyZWN0aXZlIiwid3JpdGUiLCJUb2tlbiIsInN0cnB0aW1lIiwidGltZXN0YW1wIiwicGFyc2VyIiwia2V5IiwicmVzdWx0IiwicGFyc2UiLCJnZXREYXRlIiwic3RydGltZSIsImVuZ2xpc2giLCJlcmFOYW1lcyIsIm1lcmlkaWVtTmFtZXMiLCJzaG9ydFdlZWtkYXlOYW1lcyIsImxvbmdXZWVrZGF5TmFtZXMiLCJzaG9ydE1vbnRoTmFtZXMiLCJsb25nTW9udGhOYW1lcyIsIm9yZGluYWxUcmFuc2Zvcm0iLCJudW1iZXIiLCJkaWdpdCIsImxlZnRQYWQiLCJjaGFyIiwidGV4dCIsInN0cmluZyIsIndyaXRlVGltZXpvbmVPZmZzZXQiLCJvZmZzZXRNaW51dGVzIiwibW9kaWZpZXIiLCJhYnNPZmZzZXQiLCJhYnMiLCJzaWduIiwiaG91ciIsIm1pbnV0ZSIsImdldERheU9mV2VlayIsIm9mZnNldHMiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZGF5IiwiZ2V0VVRDRGF0ZSIsImdldERheU9mWWVhciIsImxlbmd0aHMiLCJtb250aExlbmd0aHMiLCJmb3JZZWFyIiwibW9udGhzIiwic2xpY2UiLCJyZWR1Y2UiLCJhIiwiYiIsImdldFdlZWtPZlllYXJGcm9tU3VuZGF5IiwiZGF5T2ZZZWFyIiwiZmlyc3REYXlPZldlZWsiLCJnZXRGaXJzdFdlZWtkYXlJblllYXIiLCJnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheSIsImRheU9mV2VlayIsInN1bmRheVdlZWsiLCJnZXRJU09XZWVrc0luWWVhciIsInByaW9yWWVhciIsImdldElTT1dlZWtPZlllYXIiLCJ3ZWVrTnVtYmVyIiwiZ2V0SVNPV2Vla0RhdGVZZWFyIiwiY29uc3RydWN0b3IiLCJuYW1lcyIsInBhZExlbmd0aCIsImxpa2VseUxlbmd0aCIsIm1pbmltdW0iLCJtYXhpbXVtIiwiY2FuQmVOZWdhdGl2ZSIsInJld3JpdGUiLCJwYXJzZUZ1bmN0aW9uIiwid3JpdGVGdW5jdGlvbiIsInN0b3JlRnVuY3Rpb24iLCJzdG9yZSIsImdldEJ5TmFtZSIsIm5hbWUiLCJkaXJlY3RpdmUiLCJpbmRleE9mIiwiaXNPcmRpbmFsIiwiZ2V0Q2FuQmVOZWdhdGl2ZSIsImdldExpa2VseUxlbmd0aCIsImdldFJld3JpdGVQYXJzZWQiLCJyZXdyaXRlUGFyc2VkVmFsdWUiLCJleHBhbmRlZEZyb20iLCJoYXNQYXJzZUZ1bmN0aW9uIiwiaGFzU3RvcmVGdW5jdGlvbiIsIm51bWJlckluQm91bmRzIiwidmFsdWUiLCJnZXRCb3VuZHNTdHJpbmciLCJEaXJlY3RpdmVUb2tlbiIsInJlc3VsdFN0cmluZyIsInVwcGVyIiwidG9Mb3dlckNhc2UiLCJ0cmFuc2Zvcm0iLCJTdHJpbmdUb2tlbiIsIkRpcmVjdGl2ZVN0cmluZ1Rva2VuIiwiYWRkQ2hhcmFjdGVyIiwiY2giLCJwYXJzZVdlZWtkYXlOYW1lIiwiZ2V0VVRDRGF5IiwicGFyc2VNb250aE5hbWUiLCJjZW50dXJ5IiwiZGF5T2ZNb250aCIsIm1pY3Jvc2Vjb25kIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwiaXNvVHdvRGlnaXRZZWFyIiwiaXNvWWVhciIsImdldFVUQ0hvdXJzIiwibWlsbGlzZWNvbmQiLCJtZXJpZGllbSIsInBhcnNlTWVyaWRpZW1OYW1lIiwiaW5kZXgiLCJtaWNyb3NlY29uZHNTaW5jZUVwb2NoIiwiZ2V0VGltZSIsInNlY29uZHNTaW5jZUVwb2NoIiwic2Vjb25kIiwibWluIiwiZ2V0VVRDU2Vjb25kcyIsIndlZWtPZlllYXJGcm9tU3VuZGF5IiwiaXNvV2Vla09mWWVhciIsIndlZWtPZlllYXJGcm9tTW9uZGF5IiwidHdvRGlnaXRZZWFyIiwicGFyc2VUaW1lem9uZU9mZnNldCIsInR6TGlzdCIsImdldFRpbWV6b25lTmFtZUxpc3QiLCJwYXJzZUluZGV4SW5MaXN0IiwidGltZXpvbmVOYW1lcyIsImVyYSIsInBhcnNlRXJhTmFtZSIsIlRpbWVzdGFtcFBhcnNlRXJyb3IiLCJyZWFzb24iLCJjdXJyZW50VG9rZW4iLCJtZXNzYWdlIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJlcnJvciIsInN0YWNrIiwiY3JlYXRlIiwiaXNEaWdpdCIsImdldFllYXJGcm9tVHdvRGlnaXRzIiwiZ2V0TW9udGhGcm9tRGF5T2ZZZWFyIiwiZGF5cyIsImdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyIiwiZ2V0RGF0ZUZyb21JU09XZWVrRGF0ZSIsIndlZWtkYXlPZkphbjQiLCJkYXlzSW5ZZWFyIiwiaXNMZWFwWWVhciIsImdldERhdGVGcm9tU3VuZGF5V2Vla0RhdGUiLCJ3ZWVrT2ZZZWFyIiwiZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZSIsInN1bmRheURheU9mWWVhciIsImZvcmtMZW5ndGgiLCJtaWxsaXNlY29uZHNTaW5jZUVwb2NoIiwiZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUiLCJvZmZzZXRTaWduIiwidG90YWxNaW51dGVzIiwiZ2V0RnVsbFllYXIiLCJzZXRVVENGdWxsWWVhciIsInNldFVUQ01vbnRoIiwic2V0VVRDRGF0ZSIsInNldFVUQ0hvdXJzIiwic2V0VVRDU2Vjb25kcyIsInNldFVUQ01pbGxpc2Vjb25kcyIsImNvcHkiLCJmb3JrIiwic3RhcnRUb2tlbkluZGV4IiwicGFyc2VTdHJpbmdUb2tlbiIsIm5leHQiLCJwYXJzZUFtYmlndW91c051bWJlciIsInBhcnNlTnVtYmVyIiwidG9rZW5JbmRleCIsImxhc3RXaG9sZUVycm9yIiwibGVuZ3RoTGltaXQiLCJJbmZpbml0eSIsIm5lZ2F0aXZlIiwic3RhcnQiLCJ0cmltIiwiaXNJbnRlZ2VyIiwib3JkaW5hbCIsInBvc3NpYmxlIiwicG9zc2libGVDb3VudCIsIm1hdGNoSW5kZXgiLCJtYXRjaExlbmd0aCIsImoiLCJ0aW1lem9uZU5hbWVMaXN0IiwiaG91cnMiLCJtaW51dGVzIiwiZm9ybWF0U3RyaW5nIiwiZGlyIiwienVsdVRpbWV6b25lIiwiY29tbW9uIiwibGVhcCIsInkiLCJ3aW5kb3ciLCJpc09iamVjdCIsInNlcmlhbGl6ZSIsInRvVW5kZXJzY29yZSIsImFqYXgiLCJhcGlVcmwiLCJzdWNjZXNzIiwicGFyYW1zIiwibWV0aG9kIiwieG1sSHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwiaXNTdWNjZXNzIiwic3RhdHVzIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVRleHQiLCJlIiwic2VuZCIsImlzQXJyYXkiLCJ0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJjdXJyZW5jeUZvcm1hdHRlciIsImxhbmciLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImlzRG9sbGFyIiwic3R5bGUiLCJjdXJyZW5jeURpc3BsYXkiLCJudW1iZXJGb3JtYXQiLCJzdHIiLCJyZXBsYWNlIiwibW9udGhMZW5ndGgiLCJkYXlzSW5Nb250aCIsInJlbW92ZUNsYXNzIiwic2V0Q2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJlbCIsImNsYXNzTmFtZXMiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiY2xzIiwiYWRkIiwia2V5cyIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsImVsZW1lbnQiLCJkb2N1bWVudCIsInNldEF0dHJpYnV0ZSIsImRlc3Ryb3lFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZWxlbWVudEZyb21TdHJpbmciLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsImZpbmRCeUNsYXNzTmFtZSIsImNvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiU1ZHQW5pbWF0ZWRTdHJpbmciLCJiYXNlVmFsIiwidHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyIiwiZ2V0UGFyZW50QXR0cmlidXRlIiwiYXR0ciIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJSZWdFeHAiLCJ0ZXN0IiwiaXNJbnNpZGUiLCJpcyIsImNoaWxkIiwicGFyZW50IiwiY3VycmVudCIsInRhZ05hbWUiLCJyZW1vdmUiLCJyZWdleCIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIkVtaXR0ZXIiLCJvbiIsImV2ZW50IiwibGlzdGVuZXIiLCJldmVudHMiLCJvbmNlIiwic2VsZiIsImZuIiwiYXJncyIsIm9mZiIsImFwcGx5IiwibGlzdGVuZXJzIiwic3BsaWNlIiwiZW1pdCIsImlzRnVuY3Rpb24iLCJmIiwiZG9tIiwibWF0aCIsIm9iamVjdCIsInZhbGlkYXRlIiwiaXNOYU5Qb2x5ZmlsbCIsImlzTnVtZXJpYyIsImNhcGl0YWxpemVPYmoiLCJtZXJnZSIsInBpY2siLCJ0cmF2ZXJzZU9iaiIsImRhc2hUb0NhcGl0YWwiLCJpc1N0cmluZyIsInVuZGVyc2NvcmVUb0NhcGl0YWwiLCJvIiwiaXNOYU4iLCJuIiwicGFyc2VJbnQiLCJvYmoiLCJuZXdPYmoiLCJvYmoxIiwib2JqMiIsImlzRGVlcCIsIm9iajMiLCJ0IiwicGlja2VkT2JqIiwiY29tcG9uZW50IiwicCIsImZuS2V5IiwiZm5WYWx1ZSIsImN1cnIiLCJuZXh0UHJvcGVydHkiLCJtYXRjaCIsImxldHRlciIsInMiLCJpc0JsYW5rIiwiaXNFbWFpbCIsImlzQm91bmRlZEJ5IiwibWF4IiwidXRpbHMiLCJnZW5BcnJheVJhbmdlIiwicGFyc2VJU09TdHJpbmciLCJhcnJTdHIiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJDYWxlbmRhclRyZWUiLCJ2YWxpZGF0ZUNlbGwiLCJ0cmVlIiwiYWRkVHJlZSIsInNlbGVjdFJhbmdlIiwiZW5kIiwicmFuZ2UiLCJzZWxlY3REYXlzSW5Nb250aCIsIm1vbnRoRGF5cyIsInNlbGVjdE1vbnRoc0luWWVhciIsImlzVmFsaWQiLCJpc1JhbmdlVmFsaWQiLCJzZWxlY3Rpb24iLCJtb250aFJhbmdlIiwibSIsInN0YXJ0RGF5IiwiZW5kRGF5Iiwic2VsZWN0RGF5IiwiZmlsdGVyVmFsaWRzIiwiZmlsdGVyIiwiY2VsbCIsInJlcGxhY2VNYXBzIiwidXBkYXRlZEF0IiwibWFwc1RvVHJlZSIsInJlbW92ZU1hcCIsIm1hcHMiLCJtYXBTdGFydEF0IiwiYXZhaWxhYmlsaXR5IiwibmlnaHRseV9yYXRlcyIsIm1pbmltdW1fc3RheXMiLCJhdmFpbCIsInJhdGVzIiwibWluTWFwIiwiZGF5U2hpZnQiLCJwcmV2aW91c0RhdGUiLCJzdGF0ZSIsImFyciIsIm1pblN0YXkiLCJyYXRlIiwiaXNBdmFpbGFibGUiLCJwcmV2QXZhaWxhYmxlIiwiaXNNb3JuaW5nQmxvY2tlZCIsImlzQXZhaWxhYmxlT3V0IiwiZ2V0RGF5UHJvcGVydHkiLCJwcm9wZXJ0eSIsImRheURhdGEiLCJnZXREYXkiLCJ5ZWFyRGF0YSIsIm1vbnRoRGF0YSIsImlzRGF5RGlzYWJsZWQiLCJ0ZW1wbGF0ZXMiLCJjb25maWciLCJsb2NhbGVzIiwiY3JlYXRlUG9zaXRpb25lciIsImRhdGVUb0lzbyIsImlzTGF0ZXIiLCJpc0N1cnJlbnQiLCJ2YWxpZGF0aW9uT2ZDZWxsIiwidEZvcm1hdHRlciIsImRhdGVUb0FycmF5IiwibW9udGhEaWZmIiwic3R5bGVzIiwidXRpbHNTdHlsZXMiLCJDYWxlbmRhciIsIm9wdHMiLCJWRVJTSU9OIiwidmVyc2lvbiIsIkNTU19QUkVGSVgiLCJjc3NQcmVmaXgiLCJsb2dnZXIiLCJjb25maWdEYXRhc2V0IiwiZGF0YXNldCIsImxvY2FsZSIsImZvcm1hdERhdGUiLCJzdGFydE9mV2VlayIsImN1cnJlbnREYXRlIiwiZ2V0TW9udGgiLCJ5ZWFyU3RhcnQiLCJtb250aFN0YXJ0Iiwibm9ybWFsaXplUmVzcG9uc2l2ZU9wdGlvbnMiLCJpc0Ryb3BEb3duIiwiaW5pdENhbGVuZGFyRHJvcCIsImNUcmVlIiwiYWRkTWFwcyIsInN0YXJ0X2RhdGUiLCJpc1NlbGVjdGluZyIsImhpZ2hsaWdodGVkQm91bmRzIiwiaGFzVmFsaWRSYW5nZSIsImlzUmV2ZXJzZVNlbGVjdGFibGUiLCJkaXNwbGF5TW9udGhzIiwibWVkaWFRdWVyeUxpc3QiLCJvbk1lZGlhUXVlcnlDaGFuZ2UiLCJvbldpbmRvd1Jlc2l6ZSIsImFjdGl2ZVllYXJQaWNrZXIiLCJvbkRvY3VtZW50Q2xpY2siLCJvbkRvY3VtZW50S2V5ZG93biIsImluaXQiLCJjYWxlbmRhciIsInJlc2V0IiwidGhlbWUiLCJsYWJlbHMiLCJzcHJpdGUiLCJhcHBlbmRDaGlsZCIsInN2Z1Nwcml0ZSIsInBhZ2luYXRpb24iLCJtb2JpbGVXZWVrZGF5cyIsImhlYWRlclRlbXBsYXRlU3RyaW5nIiwibW9udGhzV3JhcHBlciIsIm1haW4iLCJsaXZlUmVnaW9uIiwieWVhclBpY2tlclBhbmVsIiwic2hhcmVkWWVhclBpY2tlclBhbmVsIiwiY2xvc2VMYWJlbCIsImNsb3NlIiwicHJldmlvdXNMYWJlbCIsInByZXZpb3VzWWVhcnMiLCJuZXh0TGFiZWwiLCJuZXh0WWVhcnMiLCJmb3J3YXJkIiwibW9udGhzRm9yd2FyZCIsImJhY2siLCJtb250aHNCYWNrd2FyZCIsImFkZENhcHRpb25QaWNrZXJFdmVudHMiLCJhZGRWaWV3cG9ydEV2ZW50cyIsInJlbmRlck1vbnRocyIsImFkZEJ0bnNFdmVudHMiLCJzZWxlY3RhYmxlIiwiZWxTdGFydEF0IiwiZWxFbmRBdCIsInJlbnRhbElkIiwiaW5wdXRzVG9WYWx1ZXMiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZE1hcHMiLCJjaGFuZ2VTZWxlY3Rpb25PcmRlciIsImlzUmV2ZXJzZSIsImRlc3Ryb3lNb250aHMiLCJmYWxsYmFja0Rpc3BsYXlNb250aHMiLCJ0b1Bvc2l0aXZlSW50IiwiZGlzcGxheU1vbnRoc01vYmlsZSIsIm1vYmlsZUJyZWFrcG9pbnQiLCJ0b05vbk5lZ2F0aXZlSW50IiwiZmFsbGJhY2siLCJwYXJzZWQiLCJpc01vYmlsZVZpZXdwb3J0IiwibWF0Y2hlcyIsInZpZXdwb3J0V2lkdGgiLCJpbm5lcldpZHRoIiwiYXBwbHlWaWV3cG9ydE1vZGUiLCJ2aWV3cG9ydCIsIm1vYmlsZU1vZGUiLCJzaG93UGFnaW5hdGlvbk1vYmlsZSIsIm1vYmlsZVBhZ2luYXRpb25FbmFibGVkIiwiZ2V0RGlzcGxheU1vbnRoc0ZvclZpZXdwb3J0Iiwic3luY0Rpc3BsYXlNb250aHNGb3JWaWV3cG9ydCIsIm5leHREaXNwbGF5TW9udGhzIiwiaGFzQ2hhbmdlZCIsImhhbmRsZVZpZXdwb3J0Q2hhbmdlIiwicmVtb3ZlVmlld3BvcnRFdmVudHMiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJoZWFkZXJUZW1wbGF0ZSIsInllYXJFbmQiLCJtb250aEVuZCIsImNyZWF0ZVRyZWUiLCJyZXZlcnNlZCIsImRpcmVjdCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFkZE1vbnRoRXZlbnRzIiwiYWN0aW9uc0VuYWJsZWQiLCJlbmFibGVBbGxEYXlzIiwiZGlzYWJsZUJhY2tCdG4iLCJyZWNvdmVyU2VsZWN0aW9ucyIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0U3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3RFbmQiLCJoaWdoTGlnaHRSYW5nZSIsImlzQmFja0Rpc2FibGVkIiwic3RhcnREYXRlIiwiZGlzYWJsZWQiLCJ0b2dnbGVMb2FkaW5nIiwibG9hZGluZyIsInllYXJUb1JlbmRlciIsIm1vbnRoVG9SZW5kZXIiLCJzaGlmdE1vbnRoIiwibW9udGhzUGFnaW5hdGlvbkp1bXAiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrZWRJbnNpZGVDYWxlbmRhciIsInRhcmdldCIsInRyaWdnZXIiLCJ5ZWFyT3B0aW9uIiwieWVhclBhZ2VyIiwiY2xvc2VQaWNrZXIiLCJjbG9zZVllYXJQaWNrZXIiLCJmb2N1c1RyaWdnZXIiLCJkZXRhaWwiLCJzZWxlY3RlZFllYXIiLCJtb250aEVsZW1lbnQiLCJyZW5kZXJGcm9tU2xvdCIsIm5leHRZZWFyUGFnZVN0YXJ0IiwieWVhclBhZ2VTdGFydCIsInJlbmRlclllYXJHcmlkIiwiY2xvc2VzdCIsIm9wZW5ZZWFyUGlja2VyIiwiaGFuZGxlWWVhclBpY2tlcktleWRvd24iLCJwb3NpdGlvblllYXJQaWNrZXJQYW5lbCIsImhpZGRlbiIsInllYXJQaWNrZXJPcGVuIiwic2VsZWN0ZWRCdG4iLCJmaXJzdEJ0biIsImZvY3VzIiwiYXJndW1lbnRzIiwicGFuZWwiLCJmb2N1c2VkIiwia2V5Q29kZSIsInllYXJCdXR0b25zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRJbmRleCIsImNvbHMiLCJhcnJvd09mZnNldHMiLCJBcnJvd0xlZnQiLCJBcnJvd1JpZ2h0IiwiQXJyb3dVcCIsIkFycm93RG93biIsInRhcmdldEluZGV4IiwiZm9jdXNhYmxlIiwiZmlyc3RFbCIsImxhc3RFbCIsInNoaWZ0S2V5IiwiZ3JpZCIsInByZXZpb3VzUGFnZXIiLCJuZXh0UGFnZXIiLCJtaW5pbXVtWWVhciIsIm1pbmltdW1TZWxlY3RhYmxlWWVhciIsImJvdW5kZWRZZWFyUGFnZVN0YXJ0IiwieWVhcnMiLCJzaG91bGREaXNhYmxlUHJldmlvdXNQYWdlciIsInRvcCIsInNjcm9sbFRvcCIsInZpc2libGVIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyb3VuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImZvY3VzU2xvdEluZGV4Iiwic2xvdEluZGV4IiwiY2xhbXBWaXNpYmxlTW9udGhTdGFydCIsImZvY3VzQ2FwdGlvblRyaWdnZXJGb3JTbG90IiwiZmluZCIsIm1vbnRoRWwiLCJzZWxlY3Rpb25IYW5kbGVyIiwiaXNFbmRGaXJzdCIsImRhdGVWYWx1ZSIsImRheUFscmVhZHlTZWxlY3RlZCIsInJhbmdlU2VsZWN0ZWQiLCJpc1Bhc3RUb2RheSIsInJlc2V0U2VsZWN0aW9uIiwiZW5kRGF0ZUZpcnN0QWN0aW9uIiwic3RhcnREYXRlRmlyc3RBY3Rpb24iLCJzZWxlY3RpbmdEaXJlY3QiLCJzZWxlY3RpbmdSZXZlcnNlZCIsImhpZ2hsaWdodGVkIiwiY29tcGxldGVTZWxlY3Rpb24iLCJjYWxEcm9wIiwiY2xvc2VEcm9wIiwibW91c2VvdmVySGFuZGxlciIsInJlbW92ZUhpZ2hsaWdodCIsImNlbGxzIiwiaG92ZXJlZCIsImhvdmVyZWRPZmZzZXQiLCJjZWxsQSIsImNlbGxCIiwiY2hhbmdlSGlnaGxpZ2h0RGlyZWN0aW9uIiwiaXNEaXNhYmxlZExlZnQiLCJpc0Rpc2FibGVkQ2VudGVyIiwiaXNEaXNhYmxlZFJpZ2h0IiwiaXNJbnZhbGlkIiwib2Zmc2V0Q2VsbCIsInNldFRpbWVvdXQiLCJoYW5kbGVBcnJvd05hdmlnYXRpb24iLCJib2R5IiwicmVsYXRlZFRhcmdldCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiTm9kZSIsIkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSIsImRhdGVBcnJheSIsInNlbGVjdEVuZEFjdGlvbiIsInNlbGVjdFN0YXJ0QWN0aW9uIiwic3dpdGNoSW5wdXRGb2N1cyIsImRhdGVTdHIiLCJsYWJlbCIsInNlbGVjdGVkU3RhcnQiLCJhbm5vdW5jZUxpdmVSZWdpb24iLCJvblNlbGVjdFN0YXJ0Iiwic2VsZWN0ZWRFbmQiLCJvblNlbGVjdEVuZCIsImludmFsaWQiLCJkZXN0cm95VG9vbHRpcCIsInRvb2x0aXBQb3BwZXIiLCJkZXN0cm95IiwidG9vbHRpcCIsImRlc2NyaWJlZCIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiZm9jdXNlZENlbGwiLCJhcnJvd0tleXMiLCJob21lRW5kS2V5cyIsIkhvbWUiLCJFbmQiLCJwYWdlS2V5cyIsIlBhZ2VVcCIsIlBhZ2VEb3duIiwicm93Iiwicm93Q2VsbHMiLCJkYXlWYWx1ZSIsImZvY3VzZWRNb250aCIsIm9yaWdpblNsb3RJbmRleCIsImNsaWNrIiwidGFyZ2V0TW9udGgiLCJtb250aENlbGxzIiwibmV3Q2VsbHMiLCJtYXhTdGF5IiwiaW52YWxpZFJhbmdlTWVzc2FnZSIsInJhbmdlV2l0aG91dExhc3QiLCJhbGxvd1Nob3J0ZXJNaW5TdGF5U2VsZWN0aW9uIiwiYWxsb3dMb25nZXJNYXhTdGF5U2VsZWN0aW9uIiwiaGFzVmFsaWREYXlzIiwiaGFzVmFsaWRNaW5TdGF5IiwiaGFzVmFsaWRNYXhTdGF5IiwiaGFzSW52YWxpZE1pblN0YXkiLCJoYXNJbnZhbGlkTWF4U3RheSIsImhhc0ludmFsaWREYXlzIiwidG9vbHRpcFBvc2l0aW9uIiwicGxhY2VtZW50IiwiZmxpcCIsIm9uQ2xlYXJTZWxlY3Rpb24iLCJpc1NpbmdsZUlucHV0IiwiZWxTaW5nbGVJbnB1dCIsInZhbHVlVG9JbnB1dCIsInRpbWVzIiwibURvbSIsImRvbU1vbnRoIiwiZGF5RWxlbWVudHMiLCJtb250aERvbSIsImNhcHRpb24iLCJjYXB0aW9uVGVtcGxhdGVTdHJpbmciLCJoZWFkZXIiLCJkYXlzVGVtcGxhdGVTdHJpbmciLCJ5ZWFyUGlja2VyIiwiY2hldnJvbkRvd25JZCIsInNob3VsZENsYW1wVG9DdXJyZW50RGF0ZSIsIm1pbmltdW1TZWxlY3RhYmxlTW9udGgiLCJtaW5pbXVtTW9udGgiLCJub3JtYWxpemVkTW9udGgiLCJ3ZWVrZGF5c0xhYmVsc0V4dGVuZGVkIiwiZGF5c1BlcldlZWsiLCJ3ZWVrRGF5TGFiZWwiLCJzdGFydE9mTW9udGgiLCJyb3dUZW1wbGF0ZSIsIndlZWtSb3ciLCJyb3dDbG9zZSIsIndlZWtTaGlmdCIsIm1vbnRoVGVtcGxhdGUiLCJyb3dzIiwid2Vla1NoaWZ0Q29ycmVjdGVkIiwiZGF5Q291bnRlciIsIndlZWsiLCJkYXlUZW1wbGF0ZVN0cmluZyIsIndlZWtEYXlQbGFjZWhvbGRlciIsImRheVJhdGUiLCJkYXlJc0F2YWlsYWJsZU91dCIsImRheUlzTW9ybmluZ0Jsb2NrZWQiLCJzaG93UmF0ZXMiLCJpc0Rpc2FibGVkIiwiaXNDdXJyZW50RGF5IiwiaXNBdmFpbGFibGVJbiIsInJhdGVUIiwibWluU3RheVQiLCJzaG93TWluU3RheSIsIm1heFN0YXlUIiwic2hvd01heFN0YXkiLCJhcmlhTGFiZWxQYXJ0cyIsInRvZGF5IiwidW5hdmFpbGFibGUiLCJhcmlhTGFiZWwiLCJ0YWJpbmRleCIsIndlZWtEYXkiLCJvblN1Y2Nlc3MiLCJhdHRyaWJ1dGVzIiwiZGlzYWJsZUF2YWlsYWJpdHlNYXAiLCJtYXBzTG9hZGVkIiwib25FcnJvciIsImZldGNoIiwicmVudGFsVXJsIiwidGhlbiIsImpzb24iLCJjYXRjaCIsInNpbmdsZUlucHV0RGF0ZUZvcm1hdCIsImRhdGVTdGFydCIsImRhdGVFbmQiLCJzaW5nbGVJbnB1dFNlcGFyYXRvciIsIm9uU2VsZWN0aW9uQ29tcGxldGVkIiwiZWxUYXJnZXQiLCJoaWRkZW5FbEZvcm1hdCIsImlucHV0IiwiaGlkZGVuSW5wdXQiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiaGlkZGVuRWxFbmRBdCIsImhpZGRlbkVsU3RhcnRBdCIsInJlYWRPbmx5IiwiZHJvcEJhc2ljIiwib3BlbkRyb3AiLCJpc1JldmVyc2VkIiwidmlzaWJsZSIsImRyb3BQbGFjZW1lbnQiLCJoaWRlIiwiZGVmZXJVcGRhdGUiLCJ1cGRhdGUiLCJmb2N1c1RvdWNoRXZlbnRzIiwiYmluZCIsImVsUmVzZXQiLCJmb3JjZSIsInN0b3BQcm9wYWdhdGlvbiIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiaGlkZGVuVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwibW9udGhEaWZmZXJlbmNlIiwidHlwZSIsIl9jYWxsYmFjayIsIm1zZyIsImNvbnNvbGUiLCJhcGlIb3N0IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYXBpTmFtZXNwYWNlIiwiYXBpTWFwc1JvdXRlIiwiYXBpUmVudGFsSWQiLCJhcGlDdXJyZW5jeSIsImlkcyIsInJvdXRlIiwiYXNzaWduIiwiZW4iLCJkZSIsImVzIiwiZnIiLCJpdCIsInN2IiwicnUiLCJwbCIsIm5sIiwiQVJST1dfU0laRSIsImdldEdsb2JhbE9iamVjdCIsImdldFBvcHBlclJ1bnRpbWUiLCJnbG9iYWxPYmplY3QiLCJQb3BwZXIiLCJjcmVhdGVQb3BwZXIiLCJnZXRGbG9hdGluZ1J1bnRpbWUiLCJydW50aW1lIiwiRmxvYXRpbmdVSURPTSIsIkZsb2F0aW5nVUkiLCJmbG9hdGluZ1VJIiwiY29tcHV0ZVBvc2l0aW9uIiwiZ2V0QXJyb3dFbGVtZW50IiwiZmxvYXRpbmdFbCIsInNwbGl0UGxhY2VtZW50IiwiYmFzZVBsYWNlbWVudCIsImFsaWdubWVudCIsInNldEJvb2xlYW5BdHRyaWJ1dGUiLCJhcHBseVBvc2l0aW9uIiwieCIsInN0cmF0ZWd5IiwicG9zaXRpb24iLCJhcHBseUFycm93UG9zaXRpb24iLCJhcnJvd0VsIiwiY2xhbXAiLCJhbGlnbkhvcml6b250YWxseSIsInJlZmVyZW5jZVJlY3QiLCJmbG9hdGluZ1JlY3QiLCJ3aWR0aCIsImFsaWduVmVydGljYWxseSIsImdldFZpZXdwb3J0Q29vcmRpbmF0ZXMiLCJjcm9zc0F4aXNPZmZzZXQiLCJtYWluQXhpc09mZnNldCIsIm5vcm1hbGl6ZUNvb3JkaW5hdGVzRm9yT2Zmc2V0UGFyZW50Iiwidmlld3BvcnRYIiwidmlld3BvcnRZIiwib2Zmc2V0UGFyZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsInBhcmVudFJlY3QiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudFRvcCIsInBvc2l0aW9uTWFudWFsQXJyb3ciLCJoYWxmQXJyb3ciLCJtYXhBcnJvd1giLCJhcnJvd1giLCJtYXhBcnJvd1kiLCJhcnJvd1kiLCJhdHRhY2hGYWxsYmFja0F1dG9VcGRhdGUiLCJjcmVhdGVQb3BwZXJQb3NpdGlvbmVyIiwicG9wcGVyUnVudGltZSIsInJlZmVyZW5jZUVsIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsImNyZWF0ZUZsb2F0aW5nUG9zaXRpb25lciIsImZsb2F0aW5nUnVudGltZSIsIm1pZGRsZXdhcmUiLCJjcm9zc0F4aXMiLCJtYWluQXhpcyIsInNoaWZ0IiwiYXJyb3ciLCJfcmVmIiwibWlkZGxld2FyZURhdGEiLCJyZWZlcmVuY2VIaWRkZW4iLCJlc2NhcGVkIiwiY2xlYW51cCIsImF1dG9VcGRhdGUiLCJjcmVhdGVNYW51YWxQb3NpdGlvbmVyIiwidmlld3BvcnRDb29yZGluYXRlcyIsIm5vcm1hbGl6ZWRDb29yZGluYXRlcyIsIm5vcm1hbGl6ZWRPcHRpb25zIiwic3JPbmx5IiwidG9vbHRpcEFycm93IiwibUNlbGwiLCJ0YWJsZUhlYWRlciIsIl9yZWYyIiwiY2FwdGlvblBpY2tlciIsImNhcHRpb25UcmlnZ2VyIiwiY2FwdGlvbkxhYmVsIiwiY2FwdGlvbkNoZXZyb24iLCJfcmVmMyIsInllYXJQaWNrZXJDbG9zZSIsInllYXJHcmlkIiwieWVhclBpY2tlckhlYWRlciIsInRoIiwiaW5mb0xpbmVzIiwiaW5mb0h0bWwiLCJpbmZvIiwiY250IiwicGxhY2Vob2xkZXIiLCJudW0iLCJwYWQiLCJ2YWwiLCJsb2ciLCJhdmFpbGFibGVJbiIsImF2YWlsYWJsZU91dCIsImRlZmF1bHQiLCJ3aWRnZXRVdGlscyIsImF1dG9Jbml0U2VsZWN0b3IiLCJTbWlseVdpZGdldFV0aWxzIiwiaW5pdGlhbGl6ZWQiLCJlbGVtZW50cyIsImNhbCIsImluc3RhbmNlcyIsIlNtaWx5Q2FsZW5kYXJXaWRnZXQiXSwic291cmNlUm9vdCI6IiJ9