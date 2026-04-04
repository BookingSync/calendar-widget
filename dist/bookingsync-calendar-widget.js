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
let calendarInstanceCounter = 0;
class Calendar extends Emitter {
  constructor(opts, maps) {
    super();
    this.name = _config__WEBPACK_IMPORTED_MODULE_3__["default"].name;
    this.VERSION = (__webpack_require__(/*! ../package.json */ "./package.json").version);
    this.CSS_PREFIX = _config__WEBPACK_IMPORTED_MODULE_3__["default"].cssPrefix;
    this.instanceId = calendarInstanceCounter += 1;
    this.tooltipId = "".concat(this.CSS_PREFIX, "Tooltip-").concat(this.instanceId);
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
      const described = this.el.querySelector("[aria-describedby=\"".concat(this.tooltipId, "\"]"));
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
          this.dom.tooltip.id = this.tooltipId;
          this.dom.tooltip.querySelector('span').innerHTML = invalidRangeMessage;
          cell.setAttribute('aria-describedby', this.tooltipId);
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
module.exports = /*#__PURE__*/JSON.parse('{"name":"bookingsync-calendar-widget","version":"3.0.0","description":"Smily Calendar Widget (formerly BookingSync)","main":"dist/bookingsync-calendar-widget.js","module":"src/index.js","sideEffects":false,"files":["/dist","/src"],"scripts":{"dev":"JSON_SERVER_PORT=3000 node json-server.js --quiet & webpack serve --open --config webpack.dev.js","build:unminified":"webpack --config webpack.dev.js","build":"webpack --config webpack.prod.js","test":"JSON_SERVER_PORT=3000 node json-server.js --quiet & karma start karma.config.js --colors","test-ci":"JSON_SERVER_PORT=3000 node json-server.js --quiet & sleep 2 && curl http://localhost:3000/api/v2/public/maps.json >/dev/null && karma start karma.config.js --single-run true","lint:js":"eslint ./*.js src","mock-server":"JSON_SERVER_PORT=3000 node nodemon-start.js","preversion":"pnpm run lint:js && pnpm run test-ci","version":"pnpm run build && pnpm run build:unminified && git add -A dist","postversion":"git push && git push --tags && rm -rf build/temp"},"dependencies":{"strtime":"^1.1.2","widget-utils":"1.0.0"},"devDependencies":{"@babel/cli":"^7.28.6","@babel/core":"^7.29.0","@babel/preset-env":"^7.29.2","assert":"^2.1.0","babel-loader":"^10.1.1","chai":"^6.2.2","css-loader":"^7.1.4","eslint":"^10.2.0","eslint-webpack-plugin":"^6.0.0","json-server":"0.17.4","karma":"^6.4.4","karma-chrome-launcher":"^3.2.0","karma-mocha":"^2.0.1","karma-webpack":"5.0.1","mocha":"11.7.5","nodemon":"^3.1.14","sass":"^1.99.0","sass-loader":"^16.0.7","style-loader":"^4.0.0","tether":"3.0.2","timezone-mock":"1.4.2","util":"^0.12.5","webpack":"^5.105.4","webpack-cli":"^7.0.2","webpack-dev-server":"5.2.3","webpack-merge":"^6.0.1","yargs":"18.0.0"},"repository":{"type":"git","url":"git+https://github.com/BookingSync/calendar-widget.git"},"author":"BookingSync.com","license":"MIT","bugs":{"url":"https://github.com/BookingSync/calendar-widget/issues"},"homepage":"https://github.com/BookingSync/calendar-widget#readme","packageManager":"pnpm@10.33.0","engines":{"node":"^20.19.0 || ^22.13.0 || >=24","pnpm":">=10.0.0"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLElBQUk7RUFDVEMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMs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O0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsT0FBTyxFQUFFLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLO0VBQ2YsT0FBTyxFQUFFLENBQUMsS0FBSztFQUNmLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxJQUFJO0VBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEdBQUc7RUFDWixLQUFLLEVBQUUsQ0FBQyxHQUFHO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLElBQUk7RUFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxHQUFHO0VBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEdBQUc7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxJQUFJO0VBQ1osS0FBSyxFQUFFLENBQUMsR0FBRztFQUNYLElBQUksRUFBRSxDQUFDLEdBQUc7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVixLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRztFQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsRUFBRTtFQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFO0VBQ1YsS0FBSyxFQUFFLENBQUMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULEtBQUssRUFBRSxDQUFDO0VBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNULE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDVixNQUFNLEVBQUUsQ0FBQyxFQUFFO0VBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUNWLEtBQUssRUFBRSxDQUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2SkFBNkosV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVB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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMFBBQTBQLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsY0FBYyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGVBQWUsZUFBZSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxTQUFTLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLFFBQVEsT0FBTyxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLGNBQWMsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxTQUFTLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sUUFBUSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLGVBQWUsVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdB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T0FBTyxHQUFPZ2IsSUFBSSxJQUFJLENBQUMsQ0FBQztFQUM5QixNQUFNdWYsUUFBUSxHQUFNcnBCLFFBQVEsQ0FBQzZULGdCQUFnQixDQUFDcVYsZ0JBQWdCLENBQUM7RUFFL0RHLFFBQVEsQ0FBQzVwQixPQUFPLENBQUVNLE9BQU8sSUFBSztJQUM1QmpSLE9BQU8sQ0FBQ3dRLEVBQUUsR0FBR1MsT0FBTztJQUNwQixNQUFNdXBCLEdBQUcsR0FBSSxJQUFJemYsUUFBUSxDQUFDL2EsT0FBTyxDQUFDO0lBRWxDczZCLFdBQVcsQ0FBQ3ZuQyxJQUFJLENBQUN5bkMsR0FBRyxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztFQUVGemYsUUFBUSxDQUFDMGYsU0FBUyxHQUFHSCxXQUFXO0VBQ2hDLE9BQU9BLFdBQVc7QUFDcEIsQ0FBQztBQUVEdmYsUUFBUSxDQUFDRSxPQUFPLEdBQUd2bkIsc0VBQWtDO0FBRXJELElBQUl3ZCxRQUFRLENBQUNuQyxVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDZ00sUUFBUSxDQUFDbUMsSUFBSSxDQUFDLENBQUM7QUFDakIsQ0FBQyxNQUFNO0VBQ0xoTSxRQUFRLENBQUNtTyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0lBQ2xEdEUsUUFBUSxDQUFDbUMsSUFBSSxDQUFDLENBQUM7RUFDakIsQ0FBQyxDQUFDO0FBQ0o7QUFFQXJQLE1BQU0sQ0FBQzZzQixtQkFBbUIsR0FBRzNmLFFBQVE7QUFFckMsaUVBQWVBLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vY3VycmVuY3ktc3ltYm9sLW1hcEA1LjEuMC9ub2RlX21vZHVsZXMvY3VycmVuY3ktc3ltYm9sLW1hcC9jdXJyZW5jeS1zeW1ib2wtbWFwLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jdXJyZW5jeS1zeW1ib2wtbWFwQDUuMS4wL25vZGVfbW9kdWxlcy9jdXJyZW5jeS1zeW1ib2wtbWFwL21hcC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RydGltZUAxLjEuMi9ub2RlX21vZHVsZXMvc3RydGltZS9kaXN0L3N0cnRpbWUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hamF4LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9hcnJheS9pc0FycmF5LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvY3VycmVuY3kvY3VycmVuY3lGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9jdXJyZW5jeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kYXRlL21vbnRoTGVuZ3RoLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2FkZENsYXNzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZGVzdHJveUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZWxlbWVudEZyb21TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vZmluZEJ5Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL2dldENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2RvbS9nZXRQYXJlbnRBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vaXNJbnNpZGUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9kb20vc2V0Q2xhc3NOYW1lLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvZG9tL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2Z1bmN0aW9uL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL2lzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOYU5Qb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL21hdGgvaXNOdW1lcmljLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS93aWRnZXQtdXRpbHNAMS4wLjAvbm9kZV9tb2R1bGVzL3dpZGdldC11dGlscy9zcmMvb2JqZWN0L2NhcGl0YWxpemVPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvcGljay5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL29iamVjdC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9vYmplY3QvdHJhdmVyc2VPYmouanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvZGFzaFRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0cmluZy90b1VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHJpbmcvdW5kZXJzY29yZVRvQ2FwaXRhbC5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci10cmVlLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9sb2NhbGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL3NyYy9zdHlsZXMvY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vd2lkZ2V0LXV0aWxzQDEuMC4wL25vZGVfbW9kdWxlcy93aWRnZXQtdXRpbHMvc3JjL3N0eWxlcy9yZXNldC5zY3NzPzcxOWUiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzP2VhOGYiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va2luZ3N5bmMtY2FsZW5kYXItd2lkZ2V0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImNvbnN0IGN1cnJlbmN5U3ltYm9sTWFwID0gcmVxdWlyZSgnLi9tYXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFN5bWJvbEZyb21DdXJyZW5jeSAoY3VycmVuY3lDb2RlKSB7XG4gIGlmICh0eXBlb2YgY3VycmVuY3lDb2RlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IGNvZGUgPSBjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKVxuXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnJlbmN5U3ltYm9sTWFwLCBjb2RlKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeVN5bWJvbE1hcFtjb2RlXVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jdXJyZW5jeVN5bWJvbE1hcCA9IGN1cnJlbmN5U3ltYm9sTWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUVEOiAn2K8u2KUnLFxuICBBRk46ICfYiycsXG4gIEFMTDogJ0wnLFxuICBBTUQ6ICfWjycsXG4gIEFORzogJ8aSJyxcbiAgQU9BOiAnS3onLFxuICBBUlM6ICckJyxcbiAgQVVEOiAnJCcsXG4gIEFXRzogJ8aSJyxcbiAgQVpOOiAn4oK8JyxcbiAgQkFNOiAnS00nLFxuICBCQkQ6ICckJyxcbiAgQkRUOiAn4KezJyxcbiAgQkdOOiAn0LvQsicsXG4gIEJIRDogJy7Yry7YqCcsXG4gIEJJRjogJ0ZCdScsXG4gIEJNRDogJyQnLFxuICBCTkQ6ICckJyxcbiAgQk9COiAnJGInLFxuICBCT1Y6ICdCT1YnLFxuICBCUkw6ICdSJCcsXG4gIEJTRDogJyQnLFxuICBCVEM6ICfigr8nLFxuICBCVE46ICdOdS4nLFxuICBCV1A6ICdQJyxcbiAgQllOOiAnQnInLFxuICBCWVI6ICdCcicsXG4gIEJaRDogJ0JaJCcsXG4gIENBRDogJyQnLFxuICBDREY6ICdGQycsXG4gIENIRTogJ0NIRScsXG4gIENIRjogJ0NIRicsXG4gIENIVzogJ0NIVycsXG4gIENMRjogJ0NMRicsXG4gIENMUDogJyQnLFxuICBDTkg6ICfCpScsXG4gIENOWTogJ8KlJyxcbiAgQ09QOiAnJCcsXG4gIENPVTogJ0NPVScsXG4gIENSQzogJ+KCoScsXG4gIENVQzogJyQnLFxuICBDVVA6ICfigrEnLFxuICBDVkU6ICckJyxcbiAgQ1pLOiAnS8SNJyxcbiAgREpGOiAnRmRqJyxcbiAgREtLOiAna3InLFxuICBET1A6ICdSRCQnLFxuICBEWkQ6ICfYr9isJyxcbiAgRUVLOiAna3InLFxuICBFR1A6ICfCoycsXG4gIEVSTjogJ05maycsXG4gIEVUQjogJ0JyJyxcbiAgRVRIOiAnzp4nLFxuICBFVVI6ICfigqwnLFxuICBGSkQ6ICckJyxcbiAgRktQOiAnwqMnLFxuICBHQlA6ICfCoycsXG4gIEdFTDogJ+KCvicsXG4gIEdHUDogJ8KjJyxcbiAgR0hDOiAn4oK1JyxcbiAgR0hTOiAnR0jigrUnLFxuICBHSVA6ICfCoycsXG4gIEdNRDogJ0QnLFxuICBHTkY6ICdGRycsXG4gIEdUUTogJ1EnLFxuICBHWUQ6ICckJyxcbiAgSEtEOiAnJCcsXG4gIEhOTDogJ0wnLFxuICBIUks6ICdrbicsXG4gIEhURzogJ0cnLFxuICBIVUY6ICdGdCcsXG4gIElEUjogJ1JwJyxcbiAgSUxTOiAn4oKqJyxcbiAgSU1QOiAnwqMnLFxuICBJTlI6ICfigrknLFxuICBJUUQ6ICfYuS7YrycsXG4gIElSUjogJ++3vCcsXG4gIElTSzogJ2tyJyxcbiAgSkVQOiAnwqMnLFxuICBKTUQ6ICdKJCcsXG4gIEpPRDogJ0pEJyxcbiAgSlBZOiAnwqUnLFxuICBLRVM6ICdLU2gnLFxuICBLR1M6ICfQu9CyJyxcbiAgS0hSOiAn4Z+bJyxcbiAgS01GOiAnQ0YnLFxuICBLUFc6ICfigqknLFxuICBLUlc6ICfigqknLFxuICBLV0Q6ICdLRCcsXG4gIEtZRDogJyQnLFxuICBLWlQ6ICfigrgnLFxuICBMQUs6ICfigq0nLFxuICBMQlA6ICfCoycsXG4gIExLUjogJ+KCqCcsXG4gIExSRDogJyQnLFxuICBMU0w6ICdNJyxcbiAgTFRDOiAnxYEnLFxuICBMVEw6ICdMdCcsXG4gIExWTDogJ0xzJyxcbiAgTFlEOiAnTEQnLFxuICBNQUQ6ICdNQUQnLFxuICBNREw6ICdsZWknLFxuICBNR0E6ICdBcicsXG4gIE1LRDogJ9C00LXQvScsXG4gIE1NSzogJ0snLFxuICBNTlQ6ICfigq4nLFxuICBNT1A6ICdNT1AkJyxcbiAgTVJPOiAnVU0nLFxuICBNUlU6ICdVTScsXG4gIE1VUjogJ+KCqCcsXG4gIE1WUjogJ1JmJyxcbiAgTVdLOiAnTUsnLFxuICBNWE46ICckJyxcbiAgTVhWOiAnTVhWJyxcbiAgTVlSOiAnUk0nLFxuICBNWk46ICdNVCcsXG4gIE5BRDogJyQnLFxuICBOR046ICfigqYnLFxuICBOSU86ICdDJCcsXG4gIE5PSzogJ2tyJyxcbiAgTlBSOiAn4oKoJyxcbiAgTlpEOiAnJCcsXG4gIE9NUjogJ++3vCcsXG4gIFBBQjogJ0IvLicsXG4gIFBFTjogJ1MvLicsXG4gIFBHSzogJ0snLFxuICBQSFA6ICfigrEnLFxuICBQS1I6ICfigqgnLFxuICBQTE46ICd6xYInLFxuICBQWUc6ICdHcycsXG4gIFFBUjogJ++3vCcsXG4gIFJNQjogJ++/pScsXG4gIFJPTjogJ2xlaScsXG4gIFJTRDogJ9CU0LjQvS4nLFxuICBSVUI6ICfigr0nLFxuICBSV0Y6ICdS4oKjJyxcbiAgU0FSOiAn77e8JyxcbiAgU0JEOiAnJCcsXG4gIFNDUjogJ+KCqCcsXG4gIFNERzogJ9isLtizLicsXG4gIFNFSzogJ2tyJyxcbiAgU0dEOiAnUyQnLFxuICBTSFA6ICfCoycsXG4gIFNMTDogJ0xlJyxcbiAgU09TOiAnUycsXG4gIFNSRDogJyQnLFxuICBTU1A6ICfCoycsXG4gIFNURDogJ0RiJyxcbiAgU1ROOiAnRGInLFxuICBTVkM6ICckJyxcbiAgU1lQOiAnwqMnLFxuICBTWkw6ICdFJyxcbiAgVEhCOiAn4Li/JyxcbiAgVEpTOiAnU00nLFxuICBUTVQ6ICdUJyxcbiAgVE5EOiAn2K8u2KonLFxuICBUT1A6ICdUJCcsXG4gIFRSTDogJ+KCpCcsXG4gIFRSWTogJ+KCuicsXG4gIFRURDogJ1RUJCcsXG4gIFRWRDogJyQnLFxuICBUV0Q6ICdOVCQnLFxuICBUWlM6ICdUU2gnLFxuICBVQUg6ICfigrQnLFxuICBVR1g6ICdVU2gnLFxuICBVU0Q6ICckJyxcbiAgVVlJOiAnVVlJJyxcbiAgVVlVOiAnJFUnLFxuICBVWVc6ICdVWVcnLFxuICBVWlM6ICfQu9CyJyxcbiAgVkVGOiAnQnMnLFxuICBWRVM6ICdCcy5TJyxcbiAgVk5EOiAn4oKrJyxcbiAgVlVWOiAnVlQnLFxuICBXU1Q6ICdXUyQnLFxuICBYQUY6ICdGQ0ZBJyxcbiAgWEJUOiAnyYMnLFxuICBYQ0Q6ICckJyxcbiAgWE9GOiAnQ0ZBJyxcbiAgWFBGOiAn4oKjJyxcbiAgWFNVOiAnU3VjcmUnLFxuICBYVUE6ICdYVUEnLFxuICBZRVI6ICfvt7wnLFxuICBaQVI6ICdSJyxcbiAgWk1XOiAnWksnLFxuICBaV0Q6ICdaJCcsXG4gIFpXTDogJyQnXG59XG4iLCIvLyBnaXRodWIuY29tL3BpbmVhcHBsZW1hY2hpbmUvc3RydGltZS1qc1xuLy8gTUlUIGxpY2Vuc2UsIENvcHlyaWdodCAoYykgMjAxOCBTb3BoaWUgS2lyc2NobmVyIChzb3BoaWVrQHBpbmVhcHBsZW1hY2hpbmUuY29tKVxuLy8gUmVmZXJlbmNlczpcbi8vIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvZW4vc3N3X2libV9pXzcxL3J0cmVmL3N0cnB0aS5odG1cbi8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvbGliYy9tYW51YWwvaHRtbF9ub2RlL0Zvcm1hdHRpbmctQ2FsZW5kYXItVGltZS5odG1sXG4vLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2xpYmMvbWFudWFsL2h0bWxfbm9kZS9Mb3dfMDAyZExldmVsLVRpbWUtU3RyaW5nLVBhcnNpbmcuaHRtbFxuLy8gaHR0cDovL21hbjcub3JnL2xpbnV4L21hbi1wYWdlcy9tYW4zL3N0cnB0aW1lLjMuaHRtbFxuLy8gaHR0cHM6Ly9hcGlkb2NrLmNvbS9ydWJ5L0RhdGVUaW1lL3N0cmZ0aW1lXG4vLyBodHRwOi8vc3RyZnRpbWUub3JnL1xuXG5cbmZ1bmN0aW9uIGdldEZvcm1hdE9wdGlvbnModGltZXpvbmUsIG9wdGlvbnMpe1xuICAgIGxldCB1c2VPcHRpb25zO1xuICAgIGxldCB0eiA9IHVuZGVmaW5lZDtcbiAgICBpZihcbiAgICAgICAgdGltZXpvbmUgPT09IG51bGwgfHwgdGltZXpvbmUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBOdW1iZXIuaXNGaW5pdGUodGltZXpvbmUpIHx8IHR5cGVvZih0aW1lem9uZSkgPT09IFwic3RyaW5nXCJcbiAgICApe1xuICAgICAgICB0eiA9IHRpbWV6b25lO1xuICAgICAgICB1c2VPcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9ZWxzZSBpZih0aW1lem9uZSAmJiAhb3B0aW9ucyl7XG4gICAgICAgIHVzZU9wdGlvbnMgPSB0aW1lem9uZTtcbiAgICAgICAgdHogPSB1c2VPcHRpb25zLnR6O1xuICAgIH1lbHNle1xuICAgICAgICB1c2VPcHRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR6OiB0eixcbiAgICAgICAgb3B0aW9uczogdXNlT3B0aW9ucyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldE1pbnV0ZXMoZGF0ZSwgdHope1xuICAgIGlmKHR6ID09PSBudWxsIHx8IHR6ID09PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9ZWxzZSBpZih0eiA+PSAtMTYgJiYgdHogPD0gKzE2KXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoNjAgKiB0eik7XG4gICAgfWVsc2UgaWYoTnVtYmVyLmlzRmluaXRlKHR6KSl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHR6KTtcbiAgICB9ZWxzZSBpZih0eiA9PT0gXCJsb2NhbFwiKXtcbiAgICAgICAgcmV0dXJuIC0oZGF0ZSB8fCBuZXcgRGF0ZSgpKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1lbHNle1xuICAgICAgICBjb25zdCB0elVwcGVyID0gU3RyaW5nKHR6KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZih0elVwcGVyIGluIGRlZmF1bHRUaW1lem9uZU5hbWVzKXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguZmxvb3IoNjAgKiBkZWZhdWx0VGltZXpvbmVOYW1lc1t0elVwcGVyXSk7XG4gICAgICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUob2Zmc2V0KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0aW1lem9uZSBvcHRpb24gXCIke3R6fVwiLmApO1xufVxuXG5mdW5jdGlvbiBzdHJmdGltZShkYXRlLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBpZihOdW1iZXIuaXNGaW5pdGUoZGF0ZSkpe1xuICAgICAgICAvLyBBY2NlcHQgdW5peCB0aW1lc3RhbXBzIChtaWxsaXNlY29uZHMgc2luY2UgZXBvY2gpXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9ZWxzZSBpZighZGF0ZSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGUgaW5wdXQgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YoZGF0ZS50b0RhdGUpID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL21vbWVudFxuICAgICAgICAvLyBTdXBwb3J0IGRhdGUgb2JqZWN0cyBmcm9tIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2RheWpzXG4gICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpO1xuICAgIH1lbHNlIGlmKHR5cGVvZihkYXRlLnRvSlNEYXRlKSA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgLy8gU3VwcG9ydCBkYXRlIG9iamVjdHMgZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9sdXhvblxuICAgICAgICBkYXRlID0gZGF0ZS50b0pTRGF0ZSgpO1xuICAgIH1cbiAgICBpZighKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgRGF0ZSBpbnN0YW5jZSBmcm9tIGRhdGUgaW5wdXQuXCIpO1xuICAgIH1cbiAgICBjb25zdCB0b2tlbnMgPSBUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KTtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKGRhdGUsIHVzZU9wdGlvbnMudHopO1xuICAgIGNvbnN0IHR6RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGlmKHRpbWV6b25lT2Zmc2V0TWludXRlcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdHpEYXRlLnNldFVUQ01pbnV0ZXMoXG4gICAgICAgICAgICBkYXRlLmdldFVUQ01pbnV0ZXMoKSArXG4gICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yKGxldCB0b2tlbiBvZiB0b2tlbnMpe1xuICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZSl7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW4ud3JpdGUodHpEYXRlLCBcIlwiLCB1c2VPcHRpb25zLm9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgICAgIH1lbHNlIGlmKHRva2VuIGluc3RhbmNlb2YgRGlyZWN0aXZlLlRva2VuKXtcbiAgICAgICAgICAgIG91dHB1dCArPSB0b2tlbi53cml0ZSh0ekRhdGUsIHVzZU9wdGlvbnMub3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gc3RycHRpbWUodGltZXN0YW1wLCBmb3JtYXQsIHRpbWV6b25lLCBvcHRpb25zKXtcbiAgICBjb25zdCB1c2VPcHRpb25zID0gZ2V0Rm9ybWF0T3B0aW9ucyh0aW1lem9uZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aW1lc3RhbXAsIGZvcm1hdCk7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXRNaW51dGVzID0gZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzKHVuZGVmaW5lZCwgdXNlT3B0aW9ucy50eik7XG4gICAgaWYodGltZXpvbmVPZmZzZXRNaW51dGVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBwYXJzZXIudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGltZXpvbmVPZmZzZXRNaW51dGVzO1xuICAgIH1cbiAgICBpZih1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICBmb3IobGV0IGtleSBpbiB1c2VPcHRpb25zLm9wdGlvbnMpe1xuICAgICAgICAgICAgcGFyc2VyW2tleV0gPSB1c2VPcHRpb25zLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0LmdldERhdGUoKTtcbn1cblxuY29uc3Qgc3RydGltZSA9IHtcbiAgICBzdHJmdGltZTogc3RyZnRpbWUsXG4gICAgc3RycHRpbWU6IHN0cnB0aW1lLFxufTtcblxuY29uc3QgZW5nbGlzaCA9IHtcbiAgICBlcmFOYW1lczogW1xuICAgICAgICBcIkNFXCIsIFwiQkNFXCJcbiAgICBdLFxuICAgIG1lcmlkaWVtTmFtZXM6IFtcbiAgICAgICAgXCJBTVwiLCBcIlBNXCJcbiAgICBdLFxuICAgIHNob3J0V2Vla2RheU5hbWVzOiBbXG4gICAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJcbiAgICBdLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6IFtcbiAgICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgXSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIixcbiAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgIF0sXG4gICAgbG9uZ01vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXSxcbiAgICBvcmRpbmFsVHJhbnNmb3JtOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IobnVtYmVyICUgMTApO1xuICAgICAgICBpZihudW1iZXIgPiAzICYmIG51bWJlciA8PSAyMCkgcmV0dXJuIGAke251bWJlcn10aGA7XG4gICAgICAgIGlmKGRpZ2l0ID09PSAxKSByZXR1cm4gYCR7bnVtYmVyfXN0YDtcbiAgICAgICAgZWxzZSBpZihkaWdpdCA9PT0gMikgcmV0dXJuIGAke251bWJlcn1uZGA7XG4gICAgICAgIGVsc2UgaWYoZGlnaXQgPT09IDMpIHJldHVybiBgJHtudW1iZXJ9cmRgO1xuICAgICAgICBlbHNlIHJldHVybiBgJHtudW1iZXJ9dGhgO1xuICAgIH0sXG59O1xuXG5cbmZ1bmN0aW9uIGxlZnRQYWQoY2hhciwgbGVuZ3RoLCB0ZXh0KXtcbiAgICBsZXQgc3RyaW5nID0gU3RyaW5nKHRleHQpO1xuICAgIHdoaWxlKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICBzdHJpbmcgPSBjaGFyICsgc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRpbWV6b25lT2Zmc2V0KG9mZnNldE1pbnV0ZXMsIG1vZGlmaWVyKXtcbiAgICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXRNaW51dGVzKTtcbiAgICBjb25zdCBzaWduID0gKG9mZnNldE1pbnV0ZXMgPj0gMCA/IFwiK1wiIDogXCItXCIpO1xuICAgIGNvbnN0IGhvdXIgPSBsZWZ0UGFkKFwiMFwiLCAyLCBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSk7XG4gICAgY29uc3QgbWludXRlID0gbGVmdFBhZChcIjBcIiwgMiwgYWJzT2Zmc2V0ICUgNjApO1xuICAgIGlmKG1vZGlmaWVyID09PSBcIjo6XCIpe1xuICAgICAgICByZXR1cm4gc2lnbiArIGhvdXIgKyBcIjpcIiArIG1pbnV0ZSArIFwiOjAwXCI7XG4gICAgfWVsc2UgaWYobW9kaWZpZXIgPT09IFwiOlwiKXtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBob3VyICsgXCI6XCIgKyBtaW51dGU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBzaWduICsgaG91ciArIG1pbnV0ZTtcbiAgICB9XG59XG5cbi8vIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIGdpdmVuIGFuIGlucHV0IERhdGUuXG4vLyBSZXR1cm5zIDAgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4vLyBodHRwczovL3d3dy5xdW9yYS5jb20vSG93LWRvZXMtVG9tb2hpa28tU2FrYW1vdG9zLUFsZ29yaXRobS13b3JrL2Fuc3dlci9SYXppbWFuLVQtVj9zcmlkPXUySE5YXG5mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSl7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFswLCAzLCAyLCA1LCAwLCAzLCA1LCAxLCA0LCA2LCAyLCA0XTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGlmKG1vbnRoIDwgMil7XG4gICAgICAgIHllYXItLTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2Zmc2V0c1ttb250aF0gKyB5ZWFyICsgZGF5ICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih5ZWFyIC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG4vLyBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBhcyBhIG51bWJlciAoMS0zNjYpXG5mdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgbGVuZ3RocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3QgbW9udGhzID0gbGVuZ3Rocy5zbGljZSgwLCBkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKSArIChcbiAgICAgICAgKG1vbnRocy5sZW5ndGggJiYgbW9udGhzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpKSB8fCAwXG4gICAgKTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIFN1bmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZGF5T2ZZZWFyICsgKGZpcnN0RGF5T2ZXZWVrIHx8IDcpIC0gMSkgLyA3KTtcbn1cblxuLy8gR2V0IHRoZSB3ZWVrIG9mIHRoZSB5ZWFyIChzdGFydGluZyB3aXRoIE1vbmRheSkgKDAtNTMpXG5mdW5jdGlvbiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKXtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgY29uc3Qgc3VuZGF5V2VlayA9IE1hdGguZmxvb3IoKGRheU9mWWVhciArIChmaXJzdERheU9mV2VlayB8fCA3KSAtIDEpIC8gNyk7XG4gICAgcmV0dXJuIHN1bmRheVdlZWsgLSAoZGF5T2ZXZWVrID09PSAwID8gMSA6IDApICsgKGZpcnN0RGF5T2ZXZWVrID09PSAxID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKXtcbiAgICBjb25zdCBwcmlvclllYXIgPSB5ZWFyIC0gMTtcbiAgICBjb25zdCBhID0gKHllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3IoeWVhciAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKHllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgY29uc3QgYiA9IChwcmlvclllYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHByaW9yWWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcihwcmlvclllYXIgLyA0MDApXG4gICAgKSAlIDc7XG4gICAgcmV0dXJuIGEgPT09IDQgfHwgYiA9PT0gMyA/IDUzIDogNTI7XG59XG5cbi8vIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIHllYXJcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldElTT1dlZWtPZlllYXIoZGF0ZSl7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKCgxMCArIGRheU9mWWVhciAtIChkYXlPZldlZWsgfHwgNykpIC8gNyk7XG4gICAgaWYod2Vla051bWJlciA8IDEpe1xuICAgICAgICByZXR1cm4gZ2V0SVNPV2Vla3NJblllYXIoeWVhciAtIDEpO1xuICAgIH1lbHNlIGlmKHdlZWtOdW1iZXIgPiBnZXRJU09XZWVrc0luWWVhcih5ZWFyKSl7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gd2Vla051bWJlcjtcbiAgICB9XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbmZ1bmN0aW9uIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKXtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBnZXREYXlPZldlZWsoZGF0ZSk7XG4gICAgY29uc3Qgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKDEwICsgZGF5T2ZZZWFyIC0gKGRheU9mV2VlayB8fCA3KSkgLyA3KTtcbiAgICBpZih3ZWVrTnVtYmVyIDwgMSl7XG4gICAgICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgICB9ZWxzZSBpZih3ZWVrTnVtYmVyID4gZ2V0SVNPV2Vla3NJblllYXIoeWVhcikpe1xuICAgICAgICByZXR1cm4geWVhciArIDE7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cbn1cblxuY2xhc3MgRGlyZWN0aXZle1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgICAgICAvLyBMaXN0IG9mIHBvc3NpYmxlIG5hbWVzIGZvciB0aGlzIGRpcmVjdGl2ZVxuICAgICAgICB0aGlzLm5hbWVzID0gb3B0aW9ucy5uYW1lcztcbiAgICAgICAgLy8gUGFkIG51bWJlcnMgdG8gdGhpcyBsZW5ndGggKG5vcm1hbGx5KVxuICAgICAgICB0aGlzLnBhZExlbmd0aCA9IG9wdGlvbnMucGFkTGVuZ3RoO1xuICAgICAgICAvLyBBIGxpa2VseSAoYnV0IG5vdCBzdHJpY3QpIGxlbmd0aCB0byBiZSB1c2VkIHdoZW4gcmVzb2x2aW5nXG4gICAgICAgIC8vIGFtYmlndW91cyBwYXJzaW5nIGlucHV0c1xuICAgICAgICB0aGlzLmxpa2VseUxlbmd0aCA9IG9wdGlvbnMubGlrZWx5TGVuZ3RoO1xuICAgICAgICAvLyBJbmRpY2F0ZXMgdGhhdCB0aGlzIGRpcmVjdGl2ZSB1c2VzIHRleHQgKGFzIG9wcG9zZWQgdG8gbnVtYmVycylcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAvLyBUaGUgbWluaW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5taW5pbXVtID0gb3B0aW9ucy5taW5pbXVtO1xuICAgICAgICAvLyBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgbnVtZXJpYyB2YWx1ZSBmb3IgYSBkaXJlY3RpdmVcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gb3B0aW9ucy5tYXhpbXVtO1xuICAgICAgICAvLyBXaGV0aGVyIHRoaXMgZGlyZWN0aXZlIHJlcHJlc2VudHMgYSBudW1iZXIgdGhhdCBjYW4gYmUgbmVnYXRpdmVcbiAgICAgICAgdGhpcy5jYW5CZU5lZ2F0aXZlID0gb3B0aW9ucy5jYW5CZU5lZ2F0aXZlO1xuICAgICAgICAvLyBUaGlzIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGJlIHJld3JpdHRlbiB1c2luZyBhIGNvbWJpbmF0aW9uIG9mXG4gICAgICAgIC8vIG90aGVyIGRpcmVjdGl2ZXNcbiAgICAgICAgdGhpcy5yZXdyaXRlID0gb3B0aW9ucy5yZXdyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBwYXJzZSBjb250ZW50IGZyb20gYSBzdHJpbmdcbiAgICAgICAgdGhpcy5wYXJzZUZ1bmN0aW9uID0gb3B0aW9ucy5wYXJzZTtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gd3JpdGUgY29udGVudCBhcyBhIHN0cmluZywgZ2l2ZW4gYSBkYXRlIHRvIGZvcm1hdFxuICAgICAgICB0aGlzLndyaXRlRnVuY3Rpb24gPSBvcHRpb25zLndyaXRlO1xuICAgICAgICAvLyBGdW5jdGlvbiB0byBzdG9yZSBhIHBhcnNlZCBudW1lcmljIHZhbHVlXG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbiA9IG9wdGlvbnMuc3RvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRCeU5hbWUobmFtZSl7XG4gICAgICAgIGZvcihsZXQgZGlyZWN0aXZlIG9mIERpcmVjdGl2ZS5saXN0KXtcbiAgICAgICAgICAgIGlmKGRpcmVjdGl2ZS5uYW1lcy5pbmRleE9mKG5hbWUpID49IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5CZU5lZ2F0aXZlO1xuICAgIH1cbiAgICBnZXRMaWtlbHlMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlrZWx5TGVuZ3RoO1xuICAgIH1cbiAgICBnZXRSZXdyaXRlUGFyc2VkKHBhcnNlRm9ybWF0U3RyaW5nKXtcbiAgICAgICAgaWYoIXRoaXMucmV3cml0ZVBhcnNlZFZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlID0gcGFyc2VGb3JtYXRTdHJpbmcodGhpcy5yZXdyaXRlKTtcbiAgICAgICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdGhpcy5yZXdyaXRlUGFyc2VkVmFsdWUpe1xuICAgICAgICAgICAgICAgIHRva2VuLmV4cGFuZGVkRnJvbSA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmV3cml0ZVBhcnNlZFZhbHVlO1xuICAgIH1cbiAgICBoYXNQYXJzZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAhIXRoaXMucGFyc2VGdW5jdGlvbjtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gISF0aGlzLnN0b3JlRnVuY3Rpb247XG4gICAgfVxuICAgIHBhcnNlKHBhcnNlcil7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24uY2FsbChwYXJzZXIpO1xuICAgIH1cbiAgICBzdG9yZShwYXJzZXIsIG51bWJlcil7XG4gICAgICAgIHRoaXMuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyl7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMsIHRpbWV6b25lT2Zmc2V0TWludXRlcyk7XG4gICAgfVxuICAgIG51bWJlckluQm91bmRzKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICghTnVtYmVyLmlzRmluaXRlKHRoaXMubWluaW11bSkgfHwgdmFsdWUgPj0gdGhpcy5taW5pbXVtKSAmJlxuICAgICAgICAgICAgKCFOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSB8fCB2YWx1ZSA8PSB0aGlzLm1heGltdW0pXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldEJvdW5kc1N0cmluZygpe1xuICAgICAgICBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5taW5pbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFske3RoaXMubWluaW11bX0sIC4uLl1gO1xuICAgICAgICB9ZWxzZSBpZihOdW1iZXIuaXNGaW5pdGUodGhpcy5tYXhpbXVtKSl7XG4gICAgICAgICAgICByZXR1cm4gYFsuLi4sICR7dGhpcy5tYXhpbXVtfV1gO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIFwiJVwiICsgdGhpcy5uYW1lc1swXTtcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5Ub2tlbiA9IGNsYXNzIERpcmVjdGl2ZVRva2Vue1xuICAgIGNvbnN0cnVjdG9yKG1vZGlmaWVyLCBkaXJlY3RpdmUpe1xuICAgICAgICB0aGlzLm1vZGlmaWVyID0gbW9kaWZpZXI7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gZGlyZWN0aXZlO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaXNPcmRpbmFsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWVyID09PSBcIjpcIjtcbiAgICB9XG4gICAgZ2V0Q2FuQmVOZWdhdGl2ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuY2FuQmVOZWdhdGl2ZTtcbiAgICB9XG4gICAgZ2V0TGlrZWx5TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZS5saWtlbHlMZW5ndGg7XG4gICAgfVxuICAgIGhhc1BhcnNlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmhhc1BhcnNlRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaGFzU3RvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUuaGFzU3RvcmVGdW5jdGlvbigpO1xuICAgIH1cbiAgICBwYXJzZShwYXJzZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUucGFyc2VGdW5jdGlvbi5jYWxsKHBhcnNlciwgdGhpcy5tb2RpZmllcik7XG4gICAgfVxuICAgIHN0b3JlKHBhcnNlciwgbnVtYmVyKXtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUuc3RvcmVGdW5jdGlvbi5jYWxsKHBhcnNlciwgbnVtYmVyKTtcbiAgICB9XG4gICAgd3JpdGUoZGF0ZSwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kaXJlY3RpdmUud3JpdGUoZGF0ZSwgdGhpcy5tb2RpZmllciwgb3B0aW9ucywgdGltZXpvbmVPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgaWYodGhpcy5tb2RpZmllciA9PT0gXCJeXCIpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICBpZih0eXBlb2YocmVzdWx0KSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyID0gcmVzdWx0U3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gdXBwZXIgIT09IHJlc3VsdFN0cmluZyA/IHVwcGVyIDogcmVzdWx0U3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kaWZpZXIgPT09IFwiX1wiICYmIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gbGVmdFBhZChcIiBcIiwgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoLCByZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIl9cIiAmJiB0aGlzLmRpcmVjdGl2ZS50ZXh0KXtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcocmVzdWx0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIi1cIiAmJiB0aGlzLmRpcmVjdGl2ZS5wYWRMZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhyZXN1bHQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGlmaWVyID09PSBcIjpcIiAmJiAhdGhpcy5kaXJlY3RpdmUudGV4dCl7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKG9wdGlvbnMgJiYgb3B0aW9ucy5vcmRpbmFsVHJhbnNmb3JtKSB8fFxuICAgICAgICAgICAgICAgIGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgfWVsc2UgaWYoIXRoaXMuZGlyZWN0aXZlLnRleHQgJiYgdGhpcy5kaXJlY3RpdmUucGFkTGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID49IDAgP1xuICAgICAgICAgICAgICAgIGxlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgcmVzdWx0KSA6XG4gICAgICAgICAgICAgICAgYC0ke2xlZnRQYWQoXCIwXCIsIHRoaXMuZGlyZWN0aXZlLnBhZExlbmd0aCwgLXJlc3VsdCl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbnVtYmVySW5Cb3VuZHModmFsdWUpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUubnVtYmVySW5Cb3VuZHModmFsdWUpO1xuICAgIH1cbiAgICBnZXRCb3VuZHNTdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlLmdldEJvdW5kc1N0cmluZygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpe1xuICAgICAgICByZXR1cm4gXCIlXCIgKyB0aGlzLm1vZGlmaWVyICsgdGhpcy5kaXJlY3RpdmUubmFtZXNbMF07XG4gICAgfVxufVxuXG5EaXJlY3RpdmUuU3RyaW5nVG9rZW4gPSBjbGFzcyBEaXJlY3RpdmVTdHJpbmdUb2tlbntcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmcpe1xuICAgICAgICB0aGlzLnN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRnJvbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYWRkQ2hhcmFjdGVyKGNoKXtcbiAgICAgICAgdGhpcy5zdHJpbmcgKz0gY2g7XG4gICAgfVxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgICB9XG59XG5cbkRpcmVjdGl2ZS5saXN0ID0gW1xuICAgIC8vIEFiYnJldmlhdGVkIHdlZWtkYXkgbmFtZVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiYVwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmRheU9mV2VlayA9IHRoaXMucGFyc2VXZWVrZGF5TmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMuc2hvcnRXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5zaG9ydFdlZWtkYXlOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ0RheSgpICUgN107XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyB3ZWVrZGF5IG5hbWVcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkFcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSB0aGlzLnBhcnNlV2Vla2RheU5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLmxvbmdXZWVrZGF5TmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nV2Vla2RheU5hbWVzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzW2RhdGUuZ2V0VVRDRGF5KCkgJSA3XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBYmJyZXZpYXRlZCBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJiXCIsIFwiaFwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gMSArIHRoaXMucGFyc2VNb250aE5hbWUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9ICgob3B0aW9ucyAmJiBvcHRpb25zLnNob3J0TW9udGhOYW1lcykgfHxcbiAgICAgICAgICAgICAgICBlbmdsaXNoLnNob3J0TW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gTG9uZyBtb250aCBuYW1lXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJCXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSAxICsgdGhpcy5wYXJzZU1vbnRoTmFtZSh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zKXtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gKChvcHRpb25zICYmIG9wdGlvbnMubG9uZ01vbnRoTmFtZXMpIHx8XG4gICAgICAgICAgICAgICAgZW5nbGlzaC5sb25nTW9udGhOYW1lc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lc1tkYXRlLmdldFVUQ01vbnRoKCkgJSAxMl07XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gQ29tYmluYXRpb24gZGF0ZSBhbmQgdGltZSwgc2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImNcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVlcIixcbiAgICB9KSxcbiAgICAvLyBDZW50dXJ5IChjb21wbGVtZW50cyAleSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkNcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmNlbnR1cnkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSAvIDEwMCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IGRheSBvZiBtb250aFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZFwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDMxLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJW0vJWQvJXlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkRcIiwgXCJ4XCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVtLyVkLyV5XCIsXG4gICAgfSksXG4gICAgLy8gRGF5IG9mIG1vbnRoIHBhZGRlZCB3aXRoIHNwYWNlcyAoc2FtZSBhcyBcIiVfZFwiKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiZVwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAzMSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmRheU9mTW9udGggPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBpZighbW9kaWZpZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0UGFkKFwiIFwiLCAyLCBkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2l4LWRpZ2l0IG1pY3Jvc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJmXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDYsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5OTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAxMDAwICogZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBTYW1lIGFzICVZLSVtLSVkXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJGXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVZLSVtLSVkXCIsXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcImdcIl0sXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKSAlIDEwMDtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBGdWxsIElTTyB3ZWVrIHllYXJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkdcIl0sXG4gICAgICAgIHBhZExlbmd0aDogNCxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA0LFxuICAgICAgICBjYW5CZU5lZ2F0aXZlOiB0cnVlLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtEYXRlWWVhcihkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgaG91ciAoMC0yMylcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIkhcIiwgXCJrXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogMjMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5ob3VyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBob3VyICgxLTEyKSB0byBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggJXAgKEFNL1BNKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiSVwiLCBcImxcIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICBtYXhpbXVtOiAxMixcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRVVENIb3VycygpICUgMTIpIHx8IDEyO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIERheSBpbiB5ZWFyXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJqXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMzY2LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuZGF5T2ZZZWFyID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFRocmVlLWRpZ2l0IG1pbGxpc2Vjb25kXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJMXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDMsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMyxcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogOTk5LFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBtb250aCBudW1iZXIgKDEtMTIpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJtXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgbWF4aW11bTogMTIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIDEgKyBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVHdvLWRpZ2l0IG1pbnV0ZSAoMC01OSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIk1cIl0sXG4gICAgICAgIHBhZExlbmd0aDogMixcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICBtaW5pbXVtOiAwLFxuICAgICAgICBtYXhpbXVtOiA1OSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEFNIG9yIFBNICh1cHBlcmNhc2UpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJwXCJdLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBBTSBvciBQTSAobG93ZXJjYXNlKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiUFwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiAyLFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnBhcnNlTWVyaWRpZW1OYW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllciwgb3B0aW9ucyl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGUuZ2V0VVRDSG91cnMoKSA8IDEyID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMubWVyaWRpZW1OYW1lcykgfHwgZW5nbGlzaC5tZXJpZGllbU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIE51bWJlciBvZiBtaXJjb3NlY29uZHMgc2luY2UgZXBvY2hcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlFcIl0sXG4gICAgICAgIGNhbkJlTmVnYXRpdmU6IHRydWUsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAqIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgXCIlSTolTTolUyAlcFwiXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJyXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVJOiVNOiVTICVwXCIsXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVIOiVNXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlJcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJUg6JU1cIixcbiAgICB9KSxcbiAgICAvLyBOdW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBlcG9jaFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wic1wiXSxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gbnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFR3by1kaWdpdCBzZWNvbmQgKDAtNjEpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJTXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNjEsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbig1OSwgZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFNhbWUgYXMgJUg6JU06JVNcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIlRcIiwgXCJYXCJdLFxuICAgICAgICByZXdyaXRlOiBcIiVIOiVNOiVTXCIsXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgxLTcpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ1XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDcsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpIHx8IDc7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2VlayBvZiB0aGUgeWVhciwgc3RhcnRpbmcgd2l0aCBTdW5kYXkgKDAtNTMpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJVXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDIsXG4gICAgICAgIGxpa2VseUxlbmd0aDogMixcbiAgICAgICAgbWluaW11bTogMCxcbiAgICAgICAgbWF4aW11bTogNTMsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldFdlZWtPZlllYXJGcm9tU3VuZGF5KGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFZNUyBkYXRlLCBzYW1lIGFzIFwiJWUtJWItJVlcIlxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1widlwiXSxcbiAgICAgICAgcmV3cml0ZTogXCIlZS0lYi0lWVwiLFxuICAgIH0pLFxuICAgIC8vIElTTyA4NjAxOjE5ODggd2VlayBudW1iZXIgKDEtNTMpLCBjb21wbGVtZW50cyAlZy8lR1xuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiVlwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDEsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuaXNvV2Vla09mWWVhciA9IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIGdldElTT1dlZWtPZlllYXIoZGF0ZSk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gV2Vla2RheSBudW1iZXIsIHN0YXJ0aW5nIHdpdGggU3VuZGF5ICgwLTYpXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJ3XCJdLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDEsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDYsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5kYXlPZldlZWsgPSBudW1iZXIgJSA3O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFdlZWsgb2YgdGhlIHllYXIsIHN0YXJ0aW5nIHdpdGggTW9uZGF5ICgwLTUzKVxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiV1wiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgIG1heGltdW06IDUzLFxuICAgICAgICBzdG9yZTogZnVuY3Rpb24obnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXkgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBnZXRXZWVrT2ZZZWFyRnJvbU1vbmRheShkYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUd28tZGlnaXQgeWVhclxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wieVwiXSxcbiAgICAgICAgcGFkTGVuZ3RoOiAyLFxuICAgICAgICBsaWtlbHlMZW5ndGg6IDIsXG4gICAgICAgIHN0b3JlOiBmdW5jdGlvbihudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy50d29EaWdpdFllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDA7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRnVsbCB5ZWFyICh1c3VhbGx5IGZvdXItZGlnaXQsIGJ1dCBub3Qgc3RyaWN0bHkgc28pXG4gICAgbmV3IERpcmVjdGl2ZSh7XG4gICAgICAgIG5hbWVzOiBbXCJZXCJdLFxuICAgICAgICBwYWRMZW5ndGg6IDQsXG4gICAgICAgIGxpa2VseUxlbmd0aDogNCxcbiAgICAgICAgY2FuQmVOZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgc3RvcmU6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbihkYXRlLCBtb2RpZmllcil7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgLy8gTW9kaWZpZXIgXCJeXCIgcHJvZHVjZXMgdW5zaWduZWQgeWVhciwgZm9yIGNvbWJpbmF0aW9uIHdpdGggZXJhIFwiJSNcIlxuICAgICAgICAgICAgaWYoeWVhciA8PSAwICYmIG1vZGlmaWVyID09PSBcIl5cIikgcmV0dXJuIDEgLSB5ZWFyO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4geWVhcjtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBUaW1lem9uZSBvZmZzZXQgZS5nLiArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wielwiXSxcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKG1vZGlmaWVyKXtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gVGltZXpvbmUgb2Zmc2V0IG9yIG5hbWUgZS5nLiBVVEMgb3IgR01UIG9yIEVTVCBvciArMDUwMCBvciAtMTIwMFxuICAgIG5ldyBEaXJlY3RpdmUoe1xuICAgICAgICBuYW1lczogW1wiWlwiXSxcbiAgICAgICAgbGlrZWx5TGVuZ3RoOiA1LFxuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24obW9kaWZpZXIpe1xuICAgICAgICAgICAgY29uc3QgdHpMaXN0ID0gdGhpcy5nZXRUaW1lem9uZU5hbWVMaXN0KCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyc2VJbmRleEluTGlzdCh0ekxpc3QpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXMgPSA2MCAqIHRoaXMudGltZXpvbmVOYW1lc1t0ekxpc3RbaW5kZXhdXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdGhpcy5wYXJzZVRpbWV6b25lT2Zmc2V0KG1vZGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uKGRhdGUsIG1vZGlmaWVyLCBvcHRpb25zLCB0aW1lem9uZU9mZnNldE1pbnV0ZXMpe1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlci5pc0Zpbml0ZSh0aW1lem9uZU9mZnNldE1pbnV0ZXMpID9cbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldE1pbnV0ZXMgOiAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYob2Zmc2V0ID09PSAwKSByZXR1cm4gXCJVVENcIjtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyaXRlVGltZXpvbmVPZmZzZXQob2Zmc2V0LCBtb2RpZmllcik7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gU2FtZSBhcyBcIiVhICViICVlICVIOiVNOiVTICVaICVZXCJcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIitcIl0sXG4gICAgICAgIHJld3JpdGU6IFwiJWEgJWIgJWUgJUg6JU06JVMgJVogJVlcIixcbiAgICB9KSxcbiAgICAvLyBFcmEgKEJDL0JDRSlcbiAgICBuZXcgRGlyZWN0aXZlKHtcbiAgICAgICAgbmFtZXM6IFtcIiNcIl0sXG4gICAgICAgIHRleHQ6IHRydWUsXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5lcmEgPSB0aGlzLnBhcnNlRXJhTmFtZSgpO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZTogZnVuY3Rpb24oZGF0ZSwgbW9kaWZpZXIsIG9wdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPD0gMCA/IDEgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLmVyYU5hbWVzKSB8fCBlbmdsaXNoLmVyYU5hbWVzXG4gICAgICAgICAgICApW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICB9KSxcbl07XG5cbi8vIFRoZSBhc3NlcnRpb24tZXJyb3IgcGFja2FnZSB3YXMgdXNlZCBhcyBhIGJhc2lzIGZvciB0aGUgVGltZXN0YW1wUGFyc2VFcnJvciB0eXBlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2hhaWpzL2Fzc2VydGlvbi1lcnJvci9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vLyBUaGUgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFRpbWVzdGFtcFBhcnNlRXJyb3IocmVhc29uLCBwYXJzZXIpe1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5mb3JtYXQgPSBwYXJzZXIuZm9ybWF0O1xuICAgIHRoaXMudGltZXN0YW1wID0gcGFyc2VyLnN0cmluZztcbiAgICB0aGlzLnRva2VuID0gcGFyc2VyLmN1cnJlbnRUb2tlbjtcbiAgICB0aGlzLmluZGV4ID0gcGFyc2VyLmluZGV4O1xuICAgIGlmKHRoaXMudG9rZW4gJiYgdGhpcy50b2tlbi5leHBhbmRlZEZyb20gJiYgdGhpcy5pbmRleCAhPT0gdW5kZWZpbmVkKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGAoZXhwYW5kZWQgZnJvbSBcIiR7dGhpcy50b2tlbi5leHBhbmRlZEZyb219XCIpIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuICYmIHRoaXMuaW5kZXggIT09IHVuZGVmaW5lZCkgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRva2VuIFwiJHt0aGlzLnRva2VufVwiIGF0IHBvc2l0aW9uIFske3RoaXMuaW5kZXh9XSBgICtcbiAgICAgICAgYGluIHRpbWVzdGFtcCBcIiR7dGhpcy50aW1lc3RhbXB9XCIgd2l0aCBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiBgICtcbiAgICAgICAgYCR7dGhpcy5yZWFzb259YFxuICAgICk7XG4gICAgZWxzZSBpZih0aGlzLnRva2VuKSB0aGlzLm1lc3NhZ2UgPSAoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgdG9rZW4gXCIke3RoaXMudG9rZW59XCIgYCArXG4gICAgICAgIGBpbiBmb3JtYXQgXCIke3RoaXMuZm9ybWF0fVwiOiAke3RoaXMucmVhc29ufWBcbiAgICApO1xuICAgIGVsc2UgdGhpcy5tZXNzYWdlID0gKFxuICAgICAgICBgRmFpbGVkIHdpdGggZm9ybWF0IFwiJHt0aGlzLmZvcm1hdH1cIjogJHt0aGlzLnJlYXNvbn1gXG4gICAgKTtcbiAgICAvLyBodHRwczovL25vZGVqcy5vcmcvYXBpL2Vycm9ycy5odG1sI2Vycm9yc19lcnJvcl9jYXB0dXJlc3RhY2t0cmFjZV90YXJnZXRvYmplY3RfY29uc3RydWN0b3JvcHRcbiAgICBpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSl7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1lbHNle1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUHJvdG90eXBlIHdyYW5nbGluZ1xuVGltZXN0YW1wUGFyc2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJUaW1lc3RhbXBQYXJzZUVycm9yXCI7XG5UaW1lc3RhbXBQYXJzZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRpbWVzdGFtcFBhcnNlRXJyb3I7XG5cblxuZnVuY3Rpb24gaXNEaWdpdChjaCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgY2ggPT09IFwiMFwiIHx8IGNoID09PSBcIjFcIiB8fCBjaCA9PT0gXCIyXCIgfHwgY2ggPT09IFwiM1wiIHx8IGNoID09PSBcIjRcIiB8fFxuICAgICAgICBjaCA9PT0gXCI1XCIgfHwgY2ggPT09IFwiNlwiIHx8IGNoID09PSBcIjdcIiB8fCBjaCA9PT0gXCI4XCIgfHwgY2ggPT09IFwiOVwiXG4gICAgKTtcbn1cblxuLy8gTWF0Y2hlcyBHTlUgQyBzdHJwdGltZSBiZWhhdmlvclxuLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9saWJjL21hbnVhbC9odG1sX25vZGUvTG93XzAwMmRMZXZlbC1UaW1lLVN0cmluZy1QYXJzaW5nLmh0bWxcbmZ1bmN0aW9uIGdldFllYXJGcm9tVHdvRGlnaXRzKHllYXIpe1xuICAgIHJldHVybiB5ZWFyICsgKHllYXIgPD0gNjggPyAyMDAwIDogMTkwMCk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5cyA+PSBkYXlPZlllYXIpIHJldHVybiBpO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIDEyO1xufVxuXG5mdW5jdGlvbiBnZXREYXlPZk1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpe1xuICAgIGNvbnN0IG1vbnRocyA9IG1vbnRoTGVuZ3Rocy5mb3JZZWFyKHllYXIpO1xuICAgIGxldCBkYXlzID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZGF5T2ZZZWFyIC0gZGF5cyA8PSBtb250aHNbaV0pIHJldHVybiBkYXlPZlllYXIgLSBkYXlzO1xuICAgICAgICBkYXlzICs9IG1vbnRoc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mWWVhciAtIGRheXM7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1dlZWtfZGF0ZXNcbmZ1bmN0aW9uIGdldERhdGVGcm9tSVNPV2Vla0RhdGUocGFyc2VyLCBpc29ZZWFyLCBpc29XZWVrT2ZZZWFyLCBkYXlPZldlZWspe1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyKGlzb1llYXIpO1xuICAgIGNvbnN0IHdlZWtkYXlPZkphbjQgPSAoKDMgKyBmaXJzdERheU9mV2VlaykgJSA3KSB8fCA3O1xuICAgIGNvbnN0IGRheXNJblllYXIgPSBpc0xlYXBZZWFyKGlzb1llYXIpID8gMzY2IDogMzY1O1xuICAgIGxldCBkYXlPZlllYXIgPSA3ICogaXNvV2Vla09mWWVhciArIChkYXlPZldlZWsgfHwgNykgLSB3ZWVrZGF5T2ZKYW40IC0gMztcbiAgICBpZihkYXlPZlllYXIgPCAxKXtcbiAgICAgICAgcGFyc2VyLnllYXIgPSBpc29ZZWFyIC0gMTtcbiAgICAgICAgZGF5T2ZZZWFyICs9IGRheXNJblllYXI7XG4gICAgfWVsc2UgaWYoZGF5T2ZZZWFyID4gZGF5c0luWWVhcil7XG4gICAgICAgIHBhcnNlci55ZWFyID0gMSArIGlzb1llYXI7XG4gICAgICAgIGRheU9mWWVhciAtPSBkYXlzSW5ZZWFyO1xuICAgIH1lbHNle1xuICAgICAgICBwYXJzZXIueWVhciA9IGlzb1llYXI7XG4gICAgfVxuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcihwYXJzZXIueWVhciwgZGF5T2ZZZWFyKTtcbiAgICBwYXJzZXIuZGF5T2ZNb250aCA9IGdldERheU9mTW9udGhGcm9tRGF5T2ZZZWFyKHBhcnNlci55ZWFyLCBkYXlPZlllYXIpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHBhcnNlciwgeWVhciwgd2Vla09mWWVhciwgZGF5T2ZXZWVrKXtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKTtcbiAgICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqIHdlZWtPZlllYXIgLSAoZmlyc3REYXlPZldlZWsgfHwgNykgKyBkYXlPZldlZWs7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZShwYXJzZXIsIHllYXIsIHdlZWtPZlllYXIsIGRheU9mV2Vlayl7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBnZXRGaXJzdFdlZWtkYXlJblllYXIoeWVhcik7XG4gICAgY29uc3Qgc3VuZGF5RGF5T2ZZZWFyID0gMSArIDcgKiB3ZWVrT2ZZZWFyIC0gKGZpcnN0RGF5T2ZXZWVrIHx8IDcpICsgZGF5T2ZXZWVrO1xuICAgIGNvbnN0IGRheU9mWWVhciA9IHN1bmRheURheU9mWWVhciArIChcbiAgICAgICAgKGRheU9mV2VlayA9PT0gMCA/IDcgOiAwKSAtIChmaXJzdERheU9mV2VlayA9PT0gMSA/IDcgOiAwKVxuICAgICk7XG4gICAgcGFyc2VyLnllYXIgPSB5ZWFyO1xuICAgIHBhcnNlci5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCBkYXlPZlllYXIpO1xuICAgIHBhcnNlci5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgZGF5T2ZZZWFyKTtcbn1cblxuY2xhc3MgVGltZXN0YW1wUGFyc2Vye1xuICAgIGNvbnN0cnVjdG9yKHRpbWVzdGFtcCwgZm9ybWF0LCB0b2tlbnMpe1xuICAgICAgICAvLyBQYXJzZXIgc3RhdGVcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gU3RyaW5nKHRpbWVzdGFtcCk7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gU3RyaW5nKGZvcm1hdCk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zIHx8IFRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyh0aGlzLmZvcm1hdCk7XG4gICAgICAgIHRoaXMuZm9ya0xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBQYXJzZXIgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zaG9ydFdlZWtkYXlOYW1lcyA9IGVuZ2xpc2guc2hvcnRXZWVrZGF5TmFtZXM7XG4gICAgICAgIHRoaXMubG9uZ1dlZWtkYXlOYW1lcyA9IGVuZ2xpc2gubG9uZ1dlZWtkYXlOYW1lcztcbiAgICAgICAgdGhpcy5zaG9ydE1vbnRoTmFtZXMgPSBlbmdsaXNoLnNob3J0TW9udGhOYW1lcztcbiAgICAgICAgdGhpcy5sb25nTW9udGhOYW1lcyA9IGVuZ2xpc2gubG9uZ01vbnRoTmFtZXM7XG4gICAgICAgIHRoaXMuZXJhTmFtZXMgPSBlbmdsaXNoLmVyYU5hbWVzO1xuICAgICAgICB0aGlzLm1lcmlkaWVtTmFtZXMgPSBlbmdsaXNoLm1lcmlkaWVtTmFtZXM7XG4gICAgICAgIHRoaXMub3JkaW5hbFRyYW5zZm9ybSA9IGVuZ2xpc2gub3JkaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy50aW1lem9uZU5hbWVzID0gZGVmYXVsdFRpbWV6b25lTmFtZXM7XG4gICAgICAgIC8vIFN0b3JhZ2UgdmFsdWVzIGZyb20gcGFyc2luZyB0b2tlbnNcbiAgICAgICAgdGhpcy5lcmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2VudHVyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy55ZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnR3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29ZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzb1R3b0RpZ2l0WWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb250aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc29XZWVrT2ZZZWFyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlZWtPZlllYXJGcm9tTW9uZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mWWVhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRheU9mV2VlayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ob3VyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNlY29uZHNTaW5jZUVwb2NoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSl7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLnRpbWV6b25lT2Zmc2V0TWludXRlcyA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgOlxuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldE1pbnV0ZXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0U2lnbiA9IG9mZnNldCA+PSAwID8gKzEgOiAtMTtcbiAgICAgICAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvdXI6IG9mZnNldFNpZ24gKiBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSxcbiAgICAgICAgICAgIG1pbnV0ZTogb2Zmc2V0U2lnbiAqIE1hdGguZmxvb3IoYWJzT2Zmc2V0ICUgNjApLFxuICAgICAgICAgICAgdG90YWxNaW51dGVzOiBvZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldERhdGUoKXtcbiAgICAgICAgaWYodGhpcy5taWNyb3NlY29uZHNTaW5jZUVwb2NoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYodGhpcy5taWxsaXNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kc1NpbmNlRXBvY2g7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNlY29uZHNTaW5jZUVwb2NoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCA9IDEwMDAwMDAgKiB0aGlzLnNlY29uZHNTaW5jZUVwb2NoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmRzU2luY2VFcG9jaCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1pY3Jvc2Vjb25kc1NpbmNlRXBvY2ggLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VGltZXpvbmVPZmZzZXRPZkRhdGUoZGF0ZSk7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ01pbnV0ZXMoZGF0ZS5nZXRVVENNaW51dGVzKCkgLSBvZmZzZXQudG90YWxNaW51dGVzKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZih0aGlzLnllYXIgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnR3b0RpZ2l0WWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2VudHVyeSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLnR3b0RpZ2l0WWVhcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSAxMDAgKiB0aGlzLmNlbnR1cnkgKyB0aGlzLnR3b0RpZ2l0WWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc29ZZWFyID09PSB1bmRlZmluZWQgJiYgdGhpcy5pc29Ud29EaWdpdFllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmlzb1llYXIgPSBnZXRZZWFyRnJvbVR3b0RpZ2l0cyh0aGlzLmlzb1R3b0RpZ2l0WWVhcik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMueWVhciA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2VudHVyeSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMueWVhciA9IDEwMCAqIHRoaXMuY2VudHVyeTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVyYSAmJiB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSAxIC0gdGhpcy55ZWFyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaG91ciAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWVyaWRpZW0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyICUgMTIpICsgKHRoaXMubWVyaWRpZW0gPyAxMiA6IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubWljcm9zZWNvbmQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pbGxpc2Vjb25kICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5taWNyb3NlY29uZCA9IDEwMDAgKiB0aGlzLm1pbGxpc2Vjb25kO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNvWWVhciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNvV2Vla09mWWVhciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21JU09XZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNvWWVhciwgdGhpcy5pc29XZWVrT2ZZZWFyLCB0aGlzLmRheU9mV2VlayB8fCAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmRheU9mWWVhciAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLnllYXIgIT09IHVuZGVmaW5lZCA/IHRoaXMueWVhciA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCA9IGdldE1vbnRoRnJvbURheU9mWWVhcih5ZWFyLCB0aGlzLmRheU9mWWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmRheU9mTW9udGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlPZk1vbnRoID0gZ2V0RGF5T2ZNb250aEZyb21EYXlPZlllYXIoeWVhciwgdGhpcy5kYXlPZlllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLndlZWtPZlllYXJGcm9tU3VuZGF5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICh0aGlzLm1vbnRoID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXlPZk1vbnRoID09PSB1bmRlZmluZWQpXG4gICAgICAgICl7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy55ZWFyICE9PSB1bmRlZmluZWQgPyB0aGlzLnllYXIgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlKHRoaXMsXG4gICAgICAgICAgICAgICAgeWVhciwgdGhpcy53ZWVrT2ZZZWFyRnJvbVN1bmRheSwgdGhpcy5kYXlPZldlZWsgfHwgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy53ZWVrT2ZZZWFyRnJvbU1vbmRheSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF5T2ZNb250aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApe1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMueWVhciAhPT0gdW5kZWZpbmVkID8gdGhpcy55ZWFyIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZ2V0RGF0ZUZyb21Nb25kYXlXZWVrRGF0ZSh0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIsIHRoaXMud2Vla09mWWVhckZyb21Nb25kYXksIHRoaXMuZGF5T2ZXZWVrIHx8IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy55ZWFyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih0aGlzLnllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubW9udGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGluZWFwcGxlbWFjaGluZS9zdHJ0aW1lLWpzL2lzc3Vlcy81XG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjY4MTMxMy9qYXZhc2NyaXB0LXNldHV0Y21vbnRoLWRvZXMtbm90LXdvcmstZm9yLW5vdmVtYmVyXG4gICAgICAgICAgICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENNb250aCh0aGlzLm1vbnRoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kYXlPZk1vbnRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENEYXRlKHRoaXMuZGF5T2ZNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRUaW1lem9uZU9mZnNldE9mRGF0ZShkYXRlKTtcbiAgICAgICAgaWYob2Zmc2V0LnRvdGFsTWludXRlcyl7XG4gICAgICAgICAgICB0aGlzLmhvdXIgPSAodGhpcy5ob3VyIHx8IDApIC0gb2Zmc2V0LmhvdXI7XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZSA9ICh0aGlzLm1pbnV0ZSB8fCAwKSAtIG9mZnNldC5taW51dGU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh0aGlzLmhvdXIgfHwgMCk7XG4gICAgICAgIGRhdGUuc2V0VVRDTWludXRlcyh0aGlzLm1pbnV0ZSB8fCAwKTtcbiAgICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHRoaXMuc2Vjb25kIHx8IDApO1xuICAgICAgICBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh0aGlzLm1pY3Jvc2Vjb25kID8gdGhpcy5taWNyb3NlY29uZCAvIDEwMDAgOiAwKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIGNvcHkoKXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFRpbWVzdGFtcFBhcnNlcih0aGlzLnN0cmluZywgdGhpcy5mb3JtYXQsIHRoaXMudG9rZW5zKTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcyl7XG4gICAgICAgICAgICBwYXJzZXJba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VyO1xuICAgIH1cbiAgICBmb3JrKGxlbmd0aCwgc3RhcnRUb2tlbkluZGV4KXtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gdGhpcy5jb3B5KCk7XG4gICAgICAgIHBhcnNlci5mb3JrTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGFyc2VyLnBhcnNlKHN0YXJ0VG9rZW5JbmRleCk7XG4gICAgfVxuICAgIHBhcnNlKHN0YXJ0VG9rZW5JbmRleCl7XG4gICAgICAgIGZvcihsZXQgaSA9IHN0YXJ0VG9rZW5JbmRleCB8fCAwOyBpIDwgdGhpcy50b2tlbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4ID49IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJUaW1lc3RhbXAgaXMgdG9vIHNob3J0IHRvIG1hdGNoIHRoZSB3aG9sZSBmb3JtYXQuXCIsIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZih0b2tlbiBpbnN0YW5jZW9mIERpcmVjdGl2ZS5TdHJpbmdUb2tlbil7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVN0cmluZ1Rva2VuKHRva2VuLnN0cmluZyk7XG4gICAgICAgICAgICB9ZWxzZSBpZih0b2tlbi5oYXNQYXJzZUZ1bmN0aW9uKCkpe1xuICAgICAgICAgICAgICAgIHRva2VuLnBhcnNlKHRoaXMpO1xuICAgICAgICAgICAgfWVsc2UgaWYodG9rZW4uaGFzU3RvcmVGdW5jdGlvbigpICYmICF0b2tlbi50ZXh0KXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy50b2tlbnNbMSArIGldO1xuICAgICAgICAgICAgICAgIGlmKChuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlLlN0cmluZ1Rva2VuICYmIGlzRGlnaXQobmV4dC5zdHJpbmdbMF0pKSB8fCAoKFxuICAgICAgICAgICAgICAgICAgICBuZXh0IGluc3RhbmNlb2YgRGlyZWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHQgaW5zdGFuY2VvZiBEaXJlY3RpdmUuVG9rZW5cbiAgICAgICAgICAgICAgICApICYmICFuZXh0LnRleHQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZUFtYmlndW91c051bWJlcih0b2tlbiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uc3RvcmUodGhpcywgdGhpcy5wYXJzZU51bWJlcih0b2tlbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFwiSW52YWxpZCBkaXJlY3RpdmUuXCIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZigxICsgdGhpcy5pbmRleCA8IHRoaXMuc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBgVGltZXN0YW1wIGlzIHRvbyBsb25nIGZvciB0aGUgZ2l2ZW4gZm9ybWF0LiBUZXh0IHJlbWFpbmluZzogXCIke3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXgpfVwiLmAsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU3RyaW5nVG9rZW4odG9rZW4pe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gIT09IHRva2VuW2ldKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgU3RyaW5nIGxpdGVyYWwgXCIke3Rva2VufVwiIG5vdCBtYXRjaGVkLmAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlQW1iaWd1b3VzTnVtYmVyKHRva2VuLCB0b2tlbkluZGV4KXtcbiAgICAgICAgaWYodGhpcy5mb3JrTGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGxpa2VseUxlbmd0aCA9IHRva2VuLmdldExpa2VseUxlbmd0aCgpO1xuICAgICAgICAgICAgaWYobGlrZWx5TGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmsobGlrZWx5TGVuZ3RoLCB0b2tlbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZighKGVycm9yIGluc3RhbmNlb2YgVGltZXN0YW1wUGFyc2VFcnJvcikpIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsYXN0V2hvbGVFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLnN0cmluZy5sZW5ndGggLSB0aGlzLmluZGV4OyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGkgPT09IHRva2VuLmxpa2VseUxlbmd0aCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JrKGksIHRva2VuSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEoZXJyb3IgaW5zdGFuY2VvZiBUaW1lc3RhbXBQYXJzZUVycm9yKSkgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yLm1lc3NhZ2UgPSBcIlRpbWVzdGFtcCBpcyB0b28gc2hvcnQgdG8gbWF0Y2ggdGhlIHdob2xlIGZvcm1hdC5cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0V2hvbGVFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGFzdFdob2xlRXJyb3Ipe1xuICAgICAgICAgICAgICAgIHRocm93IGxhc3RXaG9sZUVycm9yO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgYW1iaWd1b3VzIG51bWJlci5cIiwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy5wYXJzZU51bWJlcih0b2tlbiwgdGhpcy5mb3JrTGVuZ3RoKTtcbiAgICAgICAgICAgIHRva2VuLnN0b3JlKHRoaXMsIG51bWJlcik7XG4gICAgICAgICAgICB0aGlzLmZvcmtMZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcnNlTnVtYmVyKGRpcmVjdGl2ZSwgbGVuZ3RoTGltaXQgPSBJbmZpbml0eSl7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleF0gPT09IFwiLVwiO1xuICAgICAgICBpZihuZWdhdGl2ZSAmJiAhZGlyZWN0aXZlLmdldENhbkJlTmVnYXRpdmUoKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIk51bWJlciBjYW5ub3QgYmUgbmVnYXRpdmUuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZihuZWdhdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLnN0cmluZ1t0aGlzLmluZGV4XSA9PT0gXCIgXCJcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh0aGlzLmluZGV4IDwgdGhpcy5zdHJpbmcubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmluZGV4IC0gc3RhcnQgPCBsZW5ndGhMaW1pdCAmJiBpc0RpZ2l0KHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdKVxuICAgICAgICApe1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gK3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KS50cmltKCk7XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIuXCIsIHRoaXMpO1xuICAgICAgICB9ZWxzZSBpZighZGlyZWN0aXZlLm51bWJlckluQm91bmRzKHZhbHVlKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgTnVtYmVyIFske3ZhbHVlfV0gaXMgb3V0IG9mIGJvdW5kcyAke2RpcmVjdGl2ZS5nZXRCb3VuZHNTdHJpbmcoKX0uYCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmVnYXRpdmUgPyAtdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgaWYoZGlyZWN0aXZlLmlzT3JkaW5hbCgpKXtcbiAgICAgICAgICAgIGNvbnN0IG9yZGluYWwgPSB0aGlzLm9yZGluYWxUcmFuc2Zvcm0ocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gb3JkaW5hbC5sZW5ndGggLSAodGhpcy5pbmRleCAtIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwYXJzZU1vbnRoTmFtZSgpe1xuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc2hvcnRNb250aE5hbWVzLnNsaWNlKCk7XG4gICAgICAgIG5hbWVzLnB1c2goLi4udGhpcy5sb25nTW9udGhOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBtb250aCBuYW1lLlwiLCB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbmRleCAlIDEyO1xuICAgIH1cbiAgICBwYXJzZVdlZWtkYXlOYW1lKCl7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5zaG9ydFdlZWtkYXlOYW1lcy5zbGljZSgpO1xuICAgICAgICBuYW1lcy5wdXNoKC4uLnRoaXMubG9uZ1dlZWtkYXlOYW1lcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJzZUluZGV4SW5MaXN0KG5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSB3ZWVrZGF5IG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgNztcbiAgICB9XG4gICAgcGFyc2VNZXJpZGllbU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5tZXJpZGllbU5hbWVzKTtcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWxlZCB0byBwYXJzZSBBTS9QTS5cIiwgdGhpc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5kZXggJSAyO1xuICAgIH1cbiAgICBwYXJzZUVyYU5hbWUoKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcnNlSW5kZXhJbkxpc3QodGhpcy5lcmFOYW1lcyk7XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUaW1lc3RhbXBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gcGFyc2UgZXJhIG5hbWUuXCIsIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgMjtcbiAgICB9XG4gICAgcGFyc2VJbmRleEluTGlzdChsaXN0KXtcbiAgICAgICAgY29uc3QgcG9zc2libGUgPSBsaXN0LnNsaWNlKCk7XG4gICAgICAgIGxldCBwb3NzaWJsZUNvdW50ID0gcG9zc2libGUubGVuZ3RoO1xuICAgICAgICBsZXQgbWF0Y2hJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IG1hdGNoTGVuZ3RoID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgcG9zc2libGVDb3VudCAmJiB0aGlzLmluZGV4ICsgaSA8IHRoaXMuc3RyaW5nLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIGldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcG9zc2libGUubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwb3NzaWJsZVtqXTtcbiAgICAgICAgICAgICAgICBpZighaXRlbSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYoaSA+PSBpdGVtLmxlbmd0aCB8fCBpdGVtW2ldLnRvTG93ZXJDYXNlKCkgIT09IGNoKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVbal0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNvdW50LS07XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoMSArIGkgPT09IGl0ZW0ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMSArIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKG1hdGNoSW5kZXggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gbWF0Y2hMZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUaW1lem9uZU5hbWVMaXN0KCl7XG4gICAgICAgIGlmKCF0aGlzLnRpbWV6b25lTmFtZUxpc3Qpe1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU5hbWVMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnRpbWV6b25lTmFtZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXpvbmVOYW1lTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVOYW1lTGlzdDtcbiAgICB9XG4gICAgcGFyc2VUaW1lem9uZU9mZnNldChtb2RpZmllcil7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuc3RyaW5nW3RoaXMuaW5kZXhdO1xuICAgICAgICBjb25zdCBob3VycyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDMpO1xuICAgICAgICBsZXQgbWludXRlcztcbiAgICAgICAgaWYodGhpcy5zdHJpbmdbdGhpcy5pbmRleCArIDNdID09PSBcIjpcIil7XG4gICAgICAgICAgICBtaW51dGVzID0gK3RoaXMuc3RyaW5nLnNsaWNlKHRoaXMuaW5kZXggKyA0LCB0aGlzLmluZGV4ICsgNik7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IDY7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbWludXRlcyA9ICt0aGlzLnN0cmluZy5zbGljZSh0aGlzLmluZGV4ICsgMywgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCArPSA1O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFOdW1iZXIuaXNJbnRlZ2VyKGhvdXJzKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihtaW51dGVzKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHRpbWV6b25lIG9mZnNldCBmcm9tIHN0cmluZyBgICtcbiAgICAgICAgICAgICAgICBgXCIke3RoaXMuc3RyaW5nLnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KX1cIi5gLCB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IG1pbnV0ZXMgKyA2MCAqIGhvdXJzO1xuICAgICAgICBpZihzaWduID09PSBcIitcIiB8fCBzaWduID09PSBcIsKxXCIpIHJldHVybiArb2Zmc2V0O1xuICAgICAgICBlbHNlIGlmKHNpZ24gPT09IFwiLVwiKSByZXR1cm4gLW9mZnNldDtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biB0aW1lem9uZSBvZmZzZXQgc2lnbiBcIiR7c2lnbn1cIi5gLCB0aGlzKTtcbiAgICB9XG59XG5cblRpbWVzdGFtcFBhcnNlci5wYXJzZUZvcm1hdFN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCl7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgbGV0IGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCBtb2RpZmllciA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBmb3JtYXRTdHJpbmcgPSBTdHJpbmcoZm9ybWF0KTtcbiAgICBpZighZm9ybWF0U3RyaW5nKXtcbiAgICAgICAgdGhyb3cgbmV3IFRpbWVzdGFtcFBhcnNlRXJyb3IoYEVtcHR5IGZvcm1hdCBzdHJpbmcuYCwge1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRTdHJpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENoYXJhY3RlcihjaCl7XG4gICAgICAgIGlmKHRva2Vucy5sZW5ndGggJiYgKHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBEaXJlY3RpdmUuU3RyaW5nVG9rZW4pKXtcbiAgICAgICAgICAgIGlmKGlzRGlnaXQoY2gpID09PSBpc0RpZ2l0KHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uc3RyaW5nWzBdKSl7XG4gICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5hZGRDaGFyYWN0ZXIoY2gpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobmV3IERpcmVjdGl2ZS5TdHJpbmdUb2tlbihjaCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKG5ldyBEaXJlY3RpdmUuU3RyaW5nVG9rZW4oY2gpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGNoIG9mIGZvcm1hdFN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGl2ZSAmJiBjaCA9PT0gXCIlXCIpe1xuICAgICAgICAgICAgYWRkQ2hhcmFjdGVyKFwiJVwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwiblwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcblwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgY2ggPT09IFwidFwiKXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihcIlxcdFwiKTtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJcIjtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUgJiYgIW1vZGlmaWVyICYmIChcbiAgICAgICAgICAgIGNoID09PSBcIi1cIiB8fCBjaCA9PT0gXCJfXCIgfHwgY2ggPT09IFwiXlwiIHx8IGNoID09PSBcIjpcIlxuICAgICAgICApKXtcbiAgICAgICAgICAgIG1vZGlmaWVyICs9IGNoO1xuICAgICAgICB9ZWxzZSBpZihkaXJlY3RpdmUpe1xuICAgICAgICAgICAgY29uc3QgZGlyID0gRGlyZWN0aXZlLmdldEJ5TmFtZShjaCk7XG4gICAgICAgICAgICBpZighZGlyKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihgVW5rbm93biBkaXJlY3RpdmUgXCIlJHttb2RpZmllcn0ke2NofVwiLmAsIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmKGRpci5yZXdyaXRlKSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICAuLi5kaXIuZ2V0UmV3cml0ZVBhcnNlZChUaW1lc3RhbXBQYXJzZXIucGFyc2VGb3JtYXRTdHJpbmcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSB0b2tlbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aXZlLlRva2VuKG1vZGlmaWVyLCBkaXIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIlwiO1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1lbHNlIGlmKGNoID09PSBcIiVcIil7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwiXCI7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFkZENoYXJhY3RlcihjaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoZGlyZWN0aXZlKSB0aHJvdyBuZXcgVGltZXN0YW1wUGFyc2VFcnJvcihcbiAgICAgICAgXCJGb3VuZCB1bnRlcm1pbmF0ZWQgZGlyZWN0aXZlIGF0IHRoZSBlbmQgb2YgdGhlIGZvcm1hdCBzdHJpbmcuXCIsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0U3RyaW5nXG4gICAgICAgIH1cbiAgICApO1xuICAgIGlmKHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5zdHJpbmcgPT09IFwiWlwiKXtcbiAgICAgICAgdG9rZW5zLnp1bHVUaW1lem9uZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcil7XG4gICAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xufVxuXG5cbmNvbnN0IG1vbnRoTGVuZ3RocyA9IHtcbiAgICBjb21tb246IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICBsZWFwOiBbMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG4gICAgZm9yWWVhcjogZnVuY3Rpb24oeWVhcil7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gbW9udGhMZW5ndGhzLmxlYXAgOiBtb250aExlbmd0aHMuY29tbW9uO1xuICAgIH0sXG59O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc4OTkyLzQwOTkwMjJcbmZ1bmN0aW9uIGdldEZpcnN0V2Vla2RheUluWWVhcih5ZWFyKXtcbiAgICBjb25zdCB5ID0geWVhciAtIDE7XG4gICAgcmV0dXJuICh5ZWFyICogMzY1ICtcbiAgICAgICAgTWF0aC5mbG9vcih5IC8gNCkgLSBNYXRoLmZsb29yKHkgLyAxMDApICsgTWF0aC5mbG9vcih5IC8gNDAwKVxuICAgICkgJSA3O1xufVxuXG5jb25zdCBkZWZhdWx0VGltZXpvbmVOYW1lcyA9IHtcbiAgICBcIkFDRFRcIjogKzEwLjUsXG4gICAgXCJBQ1NUXCI6ICs5LjUsXG4gICAgXCJBQ1RcIjogLTUsXG4gICAgXCJBQ1dTVFwiOiArOC43NSxcbiAgICBcIkFEVFwiOiAtMyxcbiAgICBcIkFFRFRcIjogKzExLFxuICAgIFwiQUVTVFwiOiArMTAsXG4gICAgXCJBRlRcIjogKzQuNSxcbiAgICBcIkFLRFRcIjogLTgsXG4gICAgXCJBS1NUXCI6IC05LFxuICAgIFwiQU1TVFwiOiAtMyxcbiAgICBcIkFNVFwiOiAtNCxcbiAgICBcIkFNVFwiOiArNCxcbiAgICBcIkFSVFwiOiAtMyxcbiAgICBcIkFTVFwiOiArMyxcbiAgICBcIkFTVFwiOiAtNCxcbiAgICBcIkFXU1RcIjogKzgsXG4gICAgXCJBWk9TVFwiOiAwLFxuICAgIFwiQVpPVFwiOiAtMSxcbiAgICBcIkFaVFwiOiArNCxcbiAgICBcIkJEVFwiOiArOCxcbiAgICBcIkJJT1RcIjogKzYsXG4gICAgXCJCSVRcIjogLTEyLFxuICAgIFwiQk9UXCI6IC00LFxuICAgIFwiQlJTVFwiOiAtMixcbiAgICBcIkJSVFwiOiAtMyxcbiAgICBcIkJTVFwiOiArNixcbiAgICBcIkJTVFwiOiArMTEsXG4gICAgXCJCU1RcIjogKzEsXG4gICAgXCJCVFRcIjogKzYsXG4gICAgXCJDQVRcIjogKzIsXG4gICAgXCJDQ1RcIjogKzYuNSxcbiAgICBcIkNEVFwiOiAtNSxcbiAgICBcIkNEVFwiOiAtNCxcbiAgICBcIkNFU1RcIjogKzIsXG4gICAgXCJDRVRcIjogKzEsXG4gICAgXCJDSEFEVFwiOiArMTMuNzUsXG4gICAgXCJDSEFTVFwiOiArMTIuNzUsXG4gICAgXCJDSE9UXCI6ICs4LFxuICAgIFwiQ0hPU1RcIjogKzksXG4gICAgXCJDSFNUXCI6ICsxMCxcbiAgICBcIkNIVVRcIjogKzEwLFxuICAgIFwiQ0lTVFwiOiAtOCxcbiAgICBcIkNJVFwiOiArOCxcbiAgICBcIkNLVFwiOiAtMTAsXG4gICAgXCJDTFNUXCI6IC0zLFxuICAgIFwiQ0xUXCI6IC00LFxuICAgIFwiQ09TVFwiOiAtNCxcbiAgICBcIkNPVFwiOiAtNSxcbiAgICBcIkNTVFwiOiAtNixcbiAgICBcIkNTVFwiOiArOCxcbiAgICBcIkNTVFwiOiAtNSxcbiAgICBcIkNUXCI6ICs4LFxuICAgIFwiQ1ZUXCI6IC0xLFxuICAgIFwiQ1dTVFwiOiArOC43NSxcbiAgICBcIkNYVFwiOiArNyxcbiAgICBcIkRBVlRcIjogKzcsXG4gICAgXCJERFVUXCI6ICsxMCxcbiAgICBcIkRGVFwiOiArMSxcbiAgICBcIkVBU1NUXCI6IC01LFxuICAgIFwiRUFTVFwiOiAtNixcbiAgICBcIkVBVFwiOiArMyxcbiAgICBcIkVDVFwiOiAtNCxcbiAgICBcIkVDVFwiOiAtNSxcbiAgICBcIkVEVFwiOiAtNCxcbiAgICBcIkVFU1RcIjogKzMsXG4gICAgXCJFRVRcIjogKzIsXG4gICAgXCJFR1NUXCI6IDAsXG4gICAgXCJFR1RcIjogLTEsXG4gICAgXCJFSVRcIjogKzksXG4gICAgXCJFU1RcIjogLTUsXG4gICAgXCJGRVRcIjogKzMsXG4gICAgXCJGSlRcIjogKzEyLFxuICAgIFwiRktTVFwiOiAtMyxcbiAgICBcIkZLVFwiOiAtNCxcbiAgICBcIkZOVFwiOiAtMixcbiAgICBcIkdBTFRcIjogLTYsXG4gICAgXCJHQU1UXCI6IC05LFxuICAgIFwiR0VUXCI6ICs0LFxuICAgIFwiR0ZUXCI6IC0zLFxuICAgIFwiR0lMVFwiOiArMTIsXG4gICAgXCJHSVRcIjogLTksXG4gICAgXCJHTVRcIjogMCxcbiAgICBcIkdTVFwiOiAtMixcbiAgICBcIkdTVFwiOiArNCxcbiAgICBcIkdZVFwiOiAtNCxcbiAgICBcIkhEVFwiOiAtOSxcbiAgICBcIkhBRUNcIjogKzIsXG4gICAgXCJIU1RcIjogLTEwLFxuICAgIFwiSEtUXCI6ICs4LFxuICAgIFwiSE1UXCI6ICs1LFxuICAgIFwiSE9WU1RcIjogKzgsXG4gICAgXCJIT1ZUXCI6ICs3LFxuICAgIFwiSUNUXCI6ICs3LFxuICAgIFwiSURMV1wiOiAtMTIsXG4gICAgXCJJRFRcIjogKzMsXG4gICAgXCJJT1RcIjogKzMsXG4gICAgXCJJUkRUXCI6ICs0LjUsXG4gICAgXCJJUktUXCI6ICs4LFxuICAgIFwiSVJTVFwiOiArMy41LFxuICAgIFwiSVNUXCI6ICs1LjUsXG4gICAgXCJJU1RcIjogKzEsXG4gICAgXCJJU1RcIjogKzIsXG4gICAgXCJKU1RcIjogKzksXG4gICAgXCJLR1RcIjogKzYsXG4gICAgXCJLT1NUXCI6ICsxMSxcbiAgICBcIktSQVRcIjogKzcsXG4gICAgXCJLU1RcIjogKzksXG4gICAgXCJMSFNUXCI6ICsxMC41LFxuICAgIFwiTEhTVFwiOiArMTEsXG4gICAgXCJMSU5UXCI6ICsxNCxcbiAgICBcIk1BR1RcIjogKzEyLFxuICAgIFwiTUFSVFwiOiAtOS41LFxuICAgIFwiTUFXVFwiOiArNSxcbiAgICBcIk1EVFwiOiAtNixcbiAgICBcIk1FVFwiOiArMSxcbiAgICBcIk1FU1RcIjogKzIsXG4gICAgXCJNSFRcIjogKzEyLFxuICAgIFwiTUlTVFwiOiArMTEsXG4gICAgXCJNSVRcIjogLTkuNSxcbiAgICBcIk1NVFwiOiArNi41LFxuICAgIFwiTVNLXCI6ICszLFxuICAgIFwiTVNUXCI6ICs4LFxuICAgIFwiTVNUXCI6IC03LFxuICAgIFwiTVVUXCI6ICs0LFxuICAgIFwiTVZUXCI6ICs1LFxuICAgIFwiTVlUXCI6ICs4LFxuICAgIFwiTkNUXCI6ICsxMSxcbiAgICBcIk5EVFwiOiAtMi41LFxuICAgIFwiTkZUXCI6ICsxMSxcbiAgICBcIk5QVFwiOiArNS43NSxcbiAgICBcIk5TVFwiOiAtMy41LFxuICAgIFwiTlRcIjogLTMuNSxcbiAgICBcIk5VVFwiOiAtMTEsXG4gICAgXCJOWkRUXCI6ICsxMyxcbiAgICBcIk5aU1RcIjogKzEyLFxuICAgIFwiT01TVFwiOiArNixcbiAgICBcIk9SQVRcIjogKzUsXG4gICAgXCJQRFRcIjogLTcsXG4gICAgXCJQRVRcIjogLTUsXG4gICAgXCJQRVRUXCI6ICsxMixcbiAgICBcIlBHVFwiOiArMTAsXG4gICAgXCJQSE9UXCI6ICsxMyxcbiAgICBcIlBIVFwiOiArOCxcbiAgICBcIlBLVFwiOiArNSxcbiAgICBcIlBNRFRcIjogLTIsXG4gICAgXCJQTVNUXCI6IC0zLFxuICAgIFwiUE9OVFwiOiArMTEsXG4gICAgXCJQU1RcIjogLTgsXG4gICAgXCJQU1RcIjogKzgsXG4gICAgXCJQWVNUXCI6IC0zLFxuICAgIFwiUFlUXCI6IC00LFxuICAgIFwiUkVUXCI6ICs0LFxuICAgIFwiUk9UVFwiOiAtMyxcbiAgICBcIlNBS1RcIjogKzExLFxuICAgIFwiU0FNVFwiOiArNCxcbiAgICBcIlNBU1RcIjogKzIsXG4gICAgXCJTQlRcIjogKzExLFxuICAgIFwiU0NUXCI6ICs0LFxuICAgIFwiU0RUXCI6IC0xMCxcbiAgICBcIlNHVFwiOiArOCxcbiAgICBcIlNMU1RcIjogKzUuNSxcbiAgICBcIlNSRVRcIjogKzExLFxuICAgIFwiU1JUXCI6IC0zLFxuICAgIFwiU1NUXCI6IC0xMSxcbiAgICBcIlNTVFwiOiArOCxcbiAgICBcIlNZT1RcIjogKzMsXG4gICAgXCJUQUhUXCI6IC0xMCxcbiAgICBcIlRIQVwiOiArNyxcbiAgICBcIlRGVFwiOiArNSxcbiAgICBcIlRKVFwiOiArNSxcbiAgICBcIlRLVFwiOiArMTMsXG4gICAgXCJUTFRcIjogKzksXG4gICAgXCJUTVRcIjogKzUsXG4gICAgXCJUUlRcIjogKzMsXG4gICAgXCJUT1RcIjogKzEzLFxuICAgIFwiVFZUXCI6ICsxMixcbiAgICBcIlVMQVNUXCI6ICs5LFxuICAgIFwiVUxBVFwiOiArOCxcbiAgICBcIlVTWlwiOiArMixcbiAgICBcIlVUQ1wiOiAwLFxuICAgIFwiVVlTVFwiOiAtMixcbiAgICBcIlVZVFwiOiAtMyxcbiAgICBcIlVaVFwiOiArNSxcbiAgICBcIlZFVFwiOiAtNCxcbiAgICBcIlZMQVRcIjogKzEwLFxuICAgIFwiVk9MVFwiOiArNCxcbiAgICBcIlZPU1RcIjogKzYsXG4gICAgXCJWVVRcIjogKzExLFxuICAgIFwiV0FLVFwiOiArMTIsXG4gICAgXCJXQVNUXCI6ICsyLFxuICAgIFwiV0FUXCI6ICsxLFxuICAgIFwiV0VTVFwiOiArMSxcbiAgICBcIldFVFwiOiAwLFxuICAgIFwiV0lUXCI6ICs3LFxuICAgIFwiV1NUXCI6ICs4LFxuICAgIFwiWUFLVFwiOiArOSxcbiAgICBcIllFS1RcIjogKzUsXG4gICAgXCJaXCI6IDAsXG59O1xuXG5cbmlmKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHN0cnRpbWU7XG59ZWxzZSBpZih0eXBlb2Yod2luZG93KSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luZG93LnN0cnRpbWUgPSBzdHJ0aW1lO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzT2JqZWN0JztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9vYmplY3Qvc2VyaWFsaXplJztcbmltcG9ydCB0b1VuZGVyc2NvcmUgZnJvbSAnLi9zdHJpbmcvdG9VbmRlcnNjb3JlJztcblxuY29uc3QgeyBwYXJzZSwgc3RyaW5naWZ5IH0gPSBKU09OO1xuXG4vKipcbiAqIE1ha2VzIGFuIEFKQVggcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIEFQSSBlbmRwb2ludC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsIC0gVGhlIFVSTCBvZiB0aGUgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyAtIFRoZSBzdWNjZXNzIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3IgLSBUaGUgZXJyb3IgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZS5cbiAqL1xuY29uc3QgYWpheCA9IChhcGlVcmwsIHN1Y2Nlc3MsIGVycm9yLCBwYXJhbXMsIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGNvbnN0IHhtbEh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgdXJsID0gbWV0aG9kID09PSAnR0VUJyAmJiBwYXJhbXMgPyBgJHthcGlVcmx9PyR7c2VyaWFsaXplKHBhcmFtcywgdG9VbmRlcnNjb3JlKX1gIDogYXBpVXJsO1xuICBjb25zdCBpc1N1Y2Nlc3MgPSAoc3RhdHVzKSA9PiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG4gIHhtbEh0dHAub3BlbihtZXRob2QsIHVybCk7XG4gIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicpO1xuXG4gIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGxldCByZXNwb25zZTtcblxuICAgIGlmICh4bWxIdHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIGlmIChpc1N1Y2Nlc3MoeG1sSHR0cC5zdGF0dXMpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBwYXJzZSh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhtbEh0dHA7XG4gICAgICAgIH1cblxuICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKHhtbEh0dHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoaXNPYmplY3QocGFyYW1zKSAmJiBtZXRob2QgIT09ICdHRVQnKSB7XG4gICAgeG1sSHR0cC5zZW5kKHN0cmluZ2lmeShwYXJhbXMpKTtcbiAgfSBlbHNlIHtcbiAgICB4bWxIdHRwLnNlbmQoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWpheDtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiIsImltcG9ydCB7IGdldFN5bWJvbEZyb21DdXJyZW5jeSB9IGZyb20gJ2N1cnJlbmN5LXN5bWJvbC1tYXAnO1xuXG5jb25zdCB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9ICgpID0+ICEhKHR5cGVvZiBJbnRsID09PSAnb2JqZWN0JyAmJiBJbnRsICYmIHR5cGVvZiBJbnRsLk51bWJlckZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbmN5Rm9ybWF0dGVyKFxuICB2YWx1ZSxcbiAgbGFuZyxcbiAgY3VycmVuY3ksXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDAsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IDMsXG4pIHtcbiAgaWYgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkgJiYgY3VycmVuY3kpIHtcbiAgICBjb25zdCBpc0RvbGxhciA9ICgpID0+IGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkgPT09ICckJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogaXNEb2xsYXIgPyAnc3ltYm9sJyA6ICdjb2RlJyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICB9O1xuXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0ciA9IG51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpO1xuXG4gICAgaWYgKGlzRG9sbGFyIHx8ICFnZXRTeW1ib2xGcm9tQ3VycmVuY3koY3VycmVuY3kpKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY3VycmVuY3ksIGdldFN5bWJvbEZyb21DdXJyZW5jeShjdXJyZW5jeSkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IGN1cnJlbmN5Rm9ybWF0dGVyIGZyb20gJy4vY3VycmVuY3lGb3JtYXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW5jeUZvcm1hdHRlcjtcbiIsImltcG9ydCBtb250aExlbmd0aCBmcm9tICcuL21vbnRoTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQgbW9udGhMZW5ndGg7XG4iLCIvLyBEYXRlIHV0aWxzXG5jb25zdCBkYXlzSW5Nb250aCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmNvbnN0IGlzTGVhcFllYXIgPSAoeWVhcikgPT4gKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKSB7XG4gIGxldCBkYXlzID0gZGF5c0luTW9udGhbbW9udGhdO1xuICBpZiAobW9udGggPT09IDEgJiYgaXNMZWFwWWVhcih5ZWFyKSkge1xuICAgIGRheXMgPSAyOTtcbiAgfVxuXG4gIHJldHVybiBkYXlzO1xufVxuIiwiaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJy4vcmVtb3ZlQ2xhc3MnO1xuaW1wb3J0IHNldENsYXNzTmFtZSBmcm9tICcuL3NldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgbmFtZSk7XG4gICAgY29uc3QgY2xzID0gYCR7Z2V0Q2xhc3NOYW1lKGVsKX0gJHtuYW1lLmpvaW4oJyAnKX1gO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xzKTtcbiAgfVxufVxuIiwiY29uc3QgeyBrZXlzIH0gPSBPYmplY3Q7XG5cbi8qKlxuICogQ3JlYXRlIEhUTUxFbGVtZW50IHdpdGggYXR0cmlidXRlc1xuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEBwYXJhbSBhdHRycyB7T2JqZWN0fVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IHBhcmFtcyA9IGF0dHJzIHx8IHt9O1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcblxuICBrZXlzKHBhcmFtcykubWFwKChpKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShpLCBwYXJhbXNbaV0pKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyaW5nO1xuXG4gIHJldHVybiBlbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEJ5Q2xhc3NOYW1lKGNvbnRleHQsIG5hbWUpIHtcbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShlbCkge1xuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcbiAgLy8gY29tcGxldGVseSBzZXBhcmF0ZWx5IFNWR0FuaW1hdGVkU3RyaW5nIGJhc2UgY2xhc3Nlc1xuICBpZiAoZWwuY2xhc3NOYW1lIGluc3RhbmNlb2YgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdBbmltYXRlZFN0cmluZykge1xuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgfVxuICByZXR1cm4gZWwuY2xhc3NOYW1lO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbi8qKlxuICogRmluZCBIVE1MRWxlbWVudCBhdHRyaWJ1dGUsIGluIHRoZSBkb20tdHJlZSwgYnViYmxlcyB1cFxuICogQHBhcmFtIGVsIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBhdHRyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRBdHRyaWJ1dGUoZWwsIGF0dHIpIHtcbiAgcmV0dXJuIHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlbCwgYXR0cikudmFsdWU7XG59XG4iLCJpbXBvcnQgZ2V0Q2xhc3NOYW1lIGZyb20gJy4vZ2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChefCApJHtuYW1lfSggfCQpYCwgJ2dpJykudGVzdChjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vYWRkQ2xhc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBkZXN0cm95RWxlbWVudCBmcm9tICcuL2Rlc3Ryb3lFbGVtZW50JztcbmltcG9ydCBlbGVtZW50RnJvbVN0cmluZyBmcm9tICcuL2VsZW1lbnRGcm9tU3RyaW5nJztcbmltcG9ydCBmaW5kQnlDbGFzc05hbWUgZnJvbSAnLi9maW5kQnlDbGFzc05hbWUnO1xuaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgZ2V0UGFyZW50QXR0cmlidXRlIGZyb20gJy4vZ2V0UGFyZW50QXR0cmlidXRlJztcbmltcG9ydCBoYXNDbGFzcyBmcm9tICcuL2hhc0NsYXNzJztcbmltcG9ydCBpc0luc2lkZSBmcm9tICcuL2lzSW5zaWRlJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICcuL3JlbW92ZUNsYXNzJztcbmltcG9ydCBzZXRDbGFzc05hbWUgZnJvbSAnLi9zZXRDbGFzc05hbWUnO1xuaW1wb3J0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciBmcm9tICcuL3RyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59O1xuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuLyoqXG4gKiBDaGVjayBpZiBzb21lIEhUTUxFbGVtZW50IGlzIGluc2lkZSBhbm90aGVyIG9uZVxuICogQHBhcmFtIGNoaWxkIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBwYXJlbnQge0hUTUxFbGVtZW50fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSW5zaWRlKGNoaWxkLCBwYXJlbnQpIHtcbiAgbGV0IGN1cnJlbnQgPSBjaGlsZDtcblxuICB3aGlsZSAoY3VycmVudCAhPT0gcGFyZW50KSB7XG4gICAgaWYgKCFpcyhjdXJyZW50KSB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdCT0RZJyB8fCBjdXJyZW50LnRhZ05hbWUgPT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldENsYXNzTmFtZSc7XG5pbXBvcnQgc2V0Q2xhc3NOYW1lIGZyb20gJy4vc2V0Q2xhc3NOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIC4uLmNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmFtZSA9IGNsYXNzTmFtZXM7XG5cbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYChefCApJHtuYW1lLmpvaW4oJ3wnKX0oIHwkKWAsICdnaScpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4uL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudDtcbiAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgd2hpbGUgKCFpcyh2YWx1ZSkpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50ICYmIHR5cGVvZiBwYXJlbnQuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIHBhcmVudCxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzIHx8IHt9O1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oLi4uYXJncykge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZuLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGxldCBsaXN0ZW5lcnM7XG5cbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF07XG5cbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChmbiwgaSkgPT4ge1xuICAgICAgICBpZiAoZm4gPT09IGxpc3RlbmVyIHx8IGZuLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgbGlzdGVuZXJzO1xuXG4gICAgaWYgKHRoaXMuZXZlbnRzICYmIHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgbGlzdGVuZXJzID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuXG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm4pID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGYpIHtcbiAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgY3VycmVuY3lGb3JtYXR0ZXIgZnJvbSAnLi9jdXJyZW5jeSc7XG5pbXBvcnQgbW9udGhMZW5ndGggZnJvbSAnLi9kYXRlJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgbWF0aCBmcm9tICcuL21hdGgnO1xuaW1wb3J0IG9iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuaW1wb3J0IGFqYXggZnJvbSAnLi9hamF4JztcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQgaXMgZnJvbSAnLi9pcyc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG59ID0gZG9tO1xuXG5jb25zdCB7IGlzTmFOUG9seWZpbGwsIGlzTnVtZXJpYyB9ID0gbWF0aDtcblxuY29uc3Qge1xuICBjYXBpdGFsaXplT2JqLFxuICBpc09iamVjdCxcbiAgbWVyZ2UsXG4gIHBpY2ssXG4gIHNlcmlhbGl6ZSxcbiAgdHJhdmVyc2VPYmosXG59ID0gb2JqZWN0O1xuXG5jb25zdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59ID0gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGlzQXJyYXksXG4gIC8vIGN1cnJlbmN5XG4gIGN1cnJlbmN5Rm9ybWF0dGVyLFxuICAvLyBkYXRlXG4gIG1vbnRoTGVuZ3RoLFxuICAvLyBkb21cbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBlbGVtZW50RnJvbVN0cmluZyxcbiAgZmluZEJ5Q2xhc3NOYW1lLFxuICBnZXRDbGFzc05hbWUsXG4gIGdldFBhcmVudEF0dHJpYnV0ZSxcbiAgaGFzQ2xhc3MsXG4gIGlzSW5zaWRlLFxuICByZW1vdmVDbGFzcyxcbiAgc2V0Q2xhc3NOYW1lLFxuICB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIsXG4gIC8vIGZ1bmN0aW9uXG4gIGlzRnVuY3Rpb24sXG4gIC8vIG1hdGhcbiAgaXNOYU5Qb2x5ZmlsbCxcbiAgaXNOdW1lcmljLFxuICAvLyBvYmplY3RcbiAgY2FwaXRhbGl6ZU9iaixcbiAgaXNPYmplY3QsXG4gIG1lcmdlLFxuICBwaWNrLFxuICBzZXJpYWxpemUsXG4gIHRyYXZlcnNlT2JqLFxuICAvLyBzdHJpbmdcbiAgZGFzaFRvQ2FwaXRhbCxcbiAgaXNTdHJpbmcsXG4gIHRvVW5kZXJzY29yZSxcbiAgdW5kZXJzY29yZVRvQ2FwaXRhbCxcbiAgLy8gYWpheFxuICBhamF4LFxuICAvLyBlbWl0dGVyXG4gIEVtaXR0ZXIsXG4gIC8vIGlzXG4gIGlzLFxuICAvLyB2YWxpZGF0ZVxuICB2YWxpZGF0ZSxcbn07XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL21hdGgvaXNOYU5Qb2x5ZmlsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvICE9PSAndW5kZWZpbmVkJyAmJiBvICE9PSBudWxsICYmICFpc05hTlBvbHlmaWxsKG8pO1xufVxuIiwiaW1wb3J0IGlzTmFOUG9seWZpbGwgZnJvbSAnLi9pc05hTlBvbHlmaWxsJztcbmltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzTmFOUG9seWZpbGwsXG4gIGlzTnVtZXJpYyxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hTlBvbHlmaWxsKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSk7XG59XG4iLCJpbXBvcnQgaXNOYU5Qb2x5ZmlsbCBmcm9tICcuL2lzTmFOUG9seWZpbGwnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vYXJyYXkvaXNBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiAhaXNBcnJheShuKSAmJiAhaXNOYU5Qb2x5ZmlsbChwYXJzZUludChuLCAxMCkpO1xufVxuIiwiaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuaW1wb3J0IGRhc2hUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IHVuZGVyc2NvcmVUb0NhcGl0YWwgZnJvbSAnLi4vc3RyaW5nL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplT2JqKG9iaikge1xuICBjb25zdCBvYmplY3QgPSB0cmF2ZXJzZU9iaihvYmosIGRhc2hUb0NhcGl0YWwpO1xuICBjb25zdCBuZXdPYmogPSB0cmF2ZXJzZU9iaihvYmplY3QsIHVuZGVyc2NvcmVUb0NhcGl0YWwpO1xuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJpbXBvcnQgY2FwaXRhbGl6ZU9iaiBmcm9tICcuL2NhcGl0YWxpemVPYmonO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi9waWNrJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHRyYXZlcnNlT2JqIGZyb20gJy4vdHJhdmVyc2VPYmonO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhcGl0YWxpemVPYmosXG4gIGlzT2JqZWN0LFxuICBtZXJnZSxcbiAgcGljayxcbiAgc2VyaWFsaXplLFxuICB0cmF2ZXJzZU9iaixcbn07XG4iLCJjb25zdCB7IHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBNZXJnZSB0d28gb2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IG9iajFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRGVlcFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMiwgaXNEZWVwKSB7XG4gIGNvbnN0IG9iajMgPSB7fTtcbiAga2V5cyhvYmoxKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGlzRGVlcCAmJiBpc09iamVjdChvYmoxW2ldKSkge1xuICAgICAgb2JqM1tpXSA9IG1lcmdlKG9iajFbaV0sIHt9LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqM1tpXSA9IG9iajFbaV07XG4gICAgfVxuICB9KTtcblxuICBrZXlzKG9iajIpLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajJbaV0pKSB7XG4gICAgICBvYmozW2ldID0gbWVyZ2Uob2JqM1tpXSB8fCB7fSwgb2JqMltpXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iajNbaV0gPSBvYmoyW2ldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmozO1xufVxuIiwiLyoqXG4gKiBQaWNrIHByb3BlcnRpZXMgZnJvbSBvYmplY3RcbiAqIGxldCBhID0geyBuYW1lOiBcIlJvbWFuXCIsIHBob25lOiAxMjMsIGNvdW50cnk6IFwiYW55XCIgfTtcbiAqIHBpY2soYSwgJ25hbWUnLCAnY291bnRyeScpXG4gKiA9PiB7IG5hbWU6IFwiUm9tYW5cIiwgY291bnRyeTogXCJhbnlcIiB9XG4gKlxuICogQHBhcmFtIG9iaiB7T2JqZWN0fVxuICogQHBhcmFtIGFyZ3Mge1N0cmluZ31cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2sob2JqLCAuLi5hcmdzKSB7XG4gIHJldHVybiBhcmdzLnJlZHVjZSgoaSwgdCkgPT4ge1xuICAgIGNvbnN0IHBpY2tlZE9iaiA9IGk7XG5cbiAgICBwaWNrZWRPYmpbdF0gPSBvYmpbdF07XG5cbiAgICByZXR1cm4gcGlja2VkT2JqO1xuICB9LCB7fSk7XG59XG4iLCJjb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VyaWFsaXplKG9iaiwgdHJhbnNmb3JtKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGtleXMob2JqKS5tYXAoKHApID0+IGAke3RyYW5zZm9ybShlbmNvZGVVUklDb21wb25lbnQocCkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pfWApO1xuICByZXR1cm4gY29tcG9uZW50LmpvaW4oJyYnKTtcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzQXJyYXknO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QnO1xuXG5jb25zdCB7IGtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBvYmplY3Qgb3duIHByb3BlcnRpZXMgYW5kIGFwcGx5IHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBrZXlzIG9yIHZhbHVlc1xuICogbGV0IGEgPSB7IGxhc3ROYW1lOiBcIlJvbWFuXCIsIGZpcnN0TmFtZTogXCJLaHVkeWFrb3ZcIiB9XG4gKiB0cmF2ZXJzZU9iaihhLCB0b1VuZGVyc2NvcmUpXG4gKiA9PiB7IGxhc3RfbmFtZTogXCJSb21hblwiLCBmaXJzdF9uYW1lOiBcIktodWR5YWtvdlwiIH1cbiAqXG4gKiBAcGFyYW0gb2JqIHtPYmplY3R9XG4gKiBAcGFyYW0gZm5LZXkge0Z1bmN0aW9uIHwgQm9vbGVhbn1cbiAqIEBwYXJhbSBmblZhbHVlIHtGdW5jdGlvbiB8IEJvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXZlcnNlT2JqKG9iaiwgZm5LZXkgPSBmYWxzZSwgZm5WYWx1ZSA9IGZhbHNlKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcblxuICByZXR1cm4ga2V5cyhvYmopLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4ge1xuICAgIGxldCBuZXh0UHJvcGVydHkgPSBvYmpbbmV4dF07XG4gICAgY29uc3QgbyA9IGN1cnI7XG5cbiAgICBpZiAoaXNBcnJheShuZXh0UHJvcGVydHkpKSB7XG4gICAgICBuZXh0UHJvcGVydHkgPSBuZXh0UHJvcGVydHkubWFwKChpKSA9PiB0cmF2ZXJzZU9iaihpLCBmbktleSwgZm5WYWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChmblZhbHVlKSB7XG4gICAgICBvW2ZuS2V5ID8gZm5LZXkobmV4dCkgOiBuZXh0XSA9IGlzT2JqZWN0KG5leHRQcm9wZXJ0eSlcbiAgICAgICAgPyB0cmF2ZXJzZU9iaihuZXh0UHJvcGVydHksIGZuS2V5LCBmblZhbHVlKSA6IGZuVmFsdWUobmV4dFByb3BlcnR5LCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb1tmbktleSA/IGZuS2V5KG5leHQpIDogbmV4dF0gPSBpc09iamVjdChuZXh0UHJvcGVydHkpXG4gICAgICAgID8gdHJhdmVyc2VPYmoobmV4dFByb3BlcnR5LCBmbktleSkgOiBuZXh0UHJvcGVydHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG87XG4gIH0sIHt9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhc2hUb0NhcGl0YWwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvaWcsIChtYXRjaCwgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG59XG4iLCJpbXBvcnQgZGFzaFRvQ2FwaXRhbCBmcm9tICcuL2Rhc2hUb0NhcGl0YWwnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmcnO1xuaW1wb3J0IHRvVW5kZXJzY29yZSBmcm9tICcuL3RvVW5kZXJzY29yZSc7XG5pbXBvcnQgdW5kZXJzY29yZVRvQ2FwaXRhbCBmcm9tICcuL3VuZGVyc2NvcmVUb0NhcGl0YWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhc2hUb0NhcGl0YWwsXG4gIGlzU3RyaW5nLFxuICB0b1VuZGVyc2NvcmUsXG4gIHVuZGVyc2NvcmVUb0NhcGl0YWwsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdzdHJpbmcnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VbmRlcnNjb3JlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKHMpID0+IGBfJHtzLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmRlcnNjb3JlVG9DYXBpdGFsKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL18oW2Etel0pL2lnLCAobWF0Y2gsIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufVxuIiwiaW1wb3J0IGlzIGZyb20gJy4vaXMnO1xuaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL21hdGgvaXNOdW1lcmljJztcblxuLy8gVmFsaWRhdGlvbnNcbmNvbnN0IHZhbGlkYXRlID0ge1xuICBpc0JsYW5rKG8pIHtcbiAgICByZXR1cm4gaXMobyk7XG4gIH0sXG4gIGlzTnVtZXJpYyhvKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyhvKTtcbiAgfSxcbiAgaXNFbWFpbChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBpcyhvLm1hdGNoKC9eW15AXFxzXStAKFteQFxcc10rXFwuKStbXkBcXFddKyQvKSk7XG4gIH0sXG4gIGlzQm91bmRlZEJ5KG8sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvID49IG1pbiAmJiBvIDw9IG1heDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ3dpZGdldC11dGlscyc7XG5jb25zdCB7IGlzLCBtZXJnZSwgbW9udGhMZW5ndGgsIGlzU3RyaW5nIH0gPSB1dGlscztcblxuLyoqXG4gKiAgcGxlYXNlIHJlZmVyIHRvIC90ZXN0cy91bml0L2NhbGVuZGFyVHJlZS5zcGVjcy5qcyBmb3IgdXNhZ2VcbiAqICBUT0RPIGRvY3MsIG1lcmdlIGF2YWlsYWJpbGl0eSB3aXRoIGNhbGVuZGFyIHRyZWUsIHVzZSBvbmUgZGF0YS1zdHJ1Y3R1cmVcbiAqICBUT0RPIG1pblN0YXkgKyBhdmFpbGFiaWxpdHkgbWFwIGNvbnNpZGVyYXRpb25zIGZvIGRpc2FibGluZyBkYXRlc1xuICovXG5jb25zdCBnZW5BcnJheVJhbmdlID0gKGEsIGIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gYTsgaSA8PSBiOyBpICs9IDEpIHtcbiAgICBsaXN0LnB1c2goaSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBwYXJzZUlTT1N0cmluZyA9IChzdHIgLyogeXl5eS1tbS1kZCAqLykgPT4ge1xuICBjb25zdCBhcnJTdHIgPSBzdHIuc3BsaXQoJy0nKS5tYXAocGFyc2VGbG9hdCk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogYXJyU3RyWzBdLFxuICAgIG1vbnRoOiBhcnJTdHJbMV0gLSAxLFxuICAgIGRhdGU6IGFyclN0clsyXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJUcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRlQ2VsbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsaWRhdGVDZWxsLCB0cmVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUNlbGwgPSB2YWxpZGF0ZUNlbGw7XG4gICAgdGhpcy50cmVlICAgICAgICAgPSB0cmVlO1xuICB9XG5cbiAgYWRkVHJlZShvYmopIHtcbiAgICBpZiAoIXRoaXMudHJlZSkge1xuICAgICAgdGhpcy50cmVlID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyZWUgPSBtZXJnZSh0aGlzLnRyZWUgfHwge30sIG9iaiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCByYW5nZSBmcm9tIHRoZSB0cmVlLCByZXR1cm5zIGFycmF5IGl0ZW1zXG4gICAqIHN0YXJ0IGRhdGUgaXMgQUxXQVlTIDwgdGhlbiBlbmQgZGF0ZSAsIGFzIHdlIGFyZSBzZWxlY3RpbmcgdGltZSByYW5nZSBpbiBkYXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFydCBlLmcuIFsyMDE2LCAwLCAxXVxuICAgKiBAcGFyYW0ge0FycmF5fSBlbmQgWzIwMTYsIDEsIDNdXG4gICAqIEByZXR1cm5zIHt7cmFuZ2U6IEFycmF5LCBpc1ZhbGlkOiB7Qm9vbGVhbn19fVxuICAgKi9cbiAgc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGxldCByYW5nZSA9IFtdO1xuXG4gICAgY29uc3QgYSA9IHN0YXJ0LnNsaWNlKCk7XG5cbiAgICAvLyBpZiB5ZWFyIGFuZCBtb250aCB0aGUgc2FtZSwganVzdCBzbGljZSB0aGUgY3VycmVudCBtb250aFxuICAgIGlmIChhWzBdID09PSBlbmRbMF0gJiYgYVsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICByYW5nZSA9IHRoaXMuc2VsZWN0RGF5c0luTW9udGgoYVswXSwgYVsxXSwgYVsyXSwgZW5kWzJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9udGhEYXlzID0gdGhpcy50cmVlW2FbMF1dW2FbMV1dO1xuXG4gICAgICAvLyBzbGljZSB0aGUgcGllY2Ugb2YgY3VycmVudCBtb250aERheXMgZnJvbSBzdGFydCBvZiByYW5nZSB0aWxsIGVuZCBvZiB0aGUgbW9udGhEYXlzXG4gICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdERheXNJbk1vbnRoKGFbMF0sIGFbMV0sIGFbMl0sIG1vbnRoRGF5cy5sZW5ndGgpKTtcblxuICAgICAgLy8gc2hpZnQgc3RhcnQgbW9udGgsIGIvYyB3ZSBhbHJlYWR5IHNlbGVjdGVkIGRheXMgaW4gaXRcbiAgICAgIGFbMV0gKz0gMTtcblxuICAgICAgLy8gaWYgZW5kIGRhdGUgeWVhciA+IHN0YXJ0IGRhdGVcbiAgICAgIC8vIHNlbGVjdCBldmVyeXRoaW5nIGluIHN0YXJ0IHllYXIgdGlsbCB0aGUgZW5kIG9mIHN0YXJ0IHllYXJcbiAgICAgIC8vIGUuZy4gc3RhcnQgaXMgMjAgT2N0b2Jlciwgc28gc2VsZWN0IE5vdmVtYmVyIGFuZCBEZWNlbWJlciwgT2N0b2JlciB3YXMgc2VsZWN0ZWQgYWJvdmVcbiAgICAgIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdE1vbnRoc0luWWVhcihhWzBdLCBhWzFdLCAxMSkpO1xuICAgICAgICAvLyBhbmQgc2V0IHN0YXJ0IHllYXIgdG8gZW5kIHllYXJcbiAgICAgICAgLy8gbW9udGggdG8gMCAoSmFudWFyeSlcbiAgICAgICAgW2FbMF0sIGFbMV1dID0gW2VuZFswXSwgMF07XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB3ZSBhcmUgYXQgdGhlIHNhbWUgeWVhciBhbmQgaGF2ZSB0aGUgY2FzZSBpZiBlbmQgbW9udGggPiBzdGFydCBtb250aFxuICAgICAgLy8gdGhlbiBzZWxlY3QgZXZlcnl0aGluZyBiZXR3ZWVuIHRob3NlIG1vbnRoc1xuICAgICAgaWYgKGVuZFsxXSA+IGFbMV0pIHtcbiAgICAgICAgLy8gZS5nLiBzdGFydCAyMCBPY3RvYmVyIGVuZCAyMCBEZWNlbWJlciwgc2VsZWN0IGZ1bGwgTm92ZW1iZXJcbiAgICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3RNb250aHNJblllYXIoYVswXSwgYVsxXSwgZW5kWzFdIC0gMSkpO1xuICAgICAgICBhWzFdID0gZW5kO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbWlzc2luZyBwYXJ0IGlzIGRheXMgaW4gZW5kIHNlbGVjdGlvbiBtb250aFxuICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aChlbmRbMF0sIGVuZFsxXSwgMSwgZW5kWzJdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmdlLFxuICAgICAgaXNWYWxpZDogdGhpcy5pc1JhbmdlVmFsaWQocmFuZ2UpXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdE1vbnRoc0luWWVhcih5ZWFyLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IHNlbGVjdGlvbiAgICA9IFtdO1xuICAgIGNvbnN0IG1vbnRoUmFuZ2UgPSBnZW5BcnJheVJhbmdlKHN0YXJ0LCBlbmQpO1xuXG4gICAgbW9udGhSYW5nZS5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgICAgY29uc3QgeSA9IHRoaXMudHJlZVt5ZWFyXTtcbiAgICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgICBpZiAoeSAmJiBtKSB7XG4gICAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvbi5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgMSwgbS5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzZWxlY3REYXlzSW5Nb250aCh5ZWFyLCBtb250aCwgc3RhcnREYXksIGVuZERheSkge1xuICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XG4gICAgY29uc3QgbSA9IGlzKHkpID8gdGhpcy50cmVlW3llYXJdW21vbnRoXSA6IG51bGw7XG5cbiAgICBpZiAoeSAmJiBtKSB7XG4gICAgICByZXR1cm4gbS5zbGljZSgoc3RhcnREYXkgLSAxKSwgZW5kRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2VsZWN0RGF5KHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICBjb25zdCB5ID0gdGhpcy50cmVlW3llYXJdO1xuICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgaWYgKHkgJiYgbSkge1xuICAgICAgcmV0dXJuIG1bZGF5IC0gMV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNSYW5nZVZhbGlkKHJhbmdlLCBmbikge1xuICAgIGNvbnN0IHZhbGlkYXRlQ2VsbCA9IHRoaXMudmFsaWRhdGVDZWxsIHx8IGZuO1xuICAgIGxldCBpc1ZhbGlkICAgICAgICA9IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRlQ2VsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyVmFsaWRzID0gcmFuZ2UuZmlsdGVyKChjZWxsKSA9PiB0aGlzLnZhbGlkYXRlQ2VsbChjZWxsKSk7XG4gICAgICBpc1ZhbGlkID0gZmlsdGVyVmFsaWRzLmxlbmd0aCA9PSByYW5nZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICByZXBsYWNlTWFwcyhtYXAsIHVwZGF0ZWRBdCkge1xuICAgIHRoaXMubWFwID0gQ2FsZW5kYXJUcmVlLm1hcHNUb1RyZWUobWFwLCB1cGRhdGVkQXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTWFwKCkge1xuICAgIHRoaXMubWFwID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogIENyZWF0ZSBhIHRyZWUgc3RydWN0dXJlIGZyb20gbWFwc1xuICAgKiAgZm9yIG4tdGltZSBkYXkgYWNjZXNzLCBlLmcuIHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldLmlzQXZhaWxhYmxlO1xuICAgKiB7XG4gICAqICAgMjEwNjoge1xuICAgKiAgICAgIDE6IHtcbiAgICogICAgICAgIDE6ICxcbiAgICogICAgICAgIDI6ICxcbiAgICogICAgICAgIDM6XG4gICAqICAgICAgICAuLi5cbiAgICogICAgICB9XG4gICAqICAgICAgLi4uXG4gICAqICAgICAgMTI6IHtcbiAgICpcbiAgICogICAgICB9XG4gICAqICAgIH1cbiAgICogfVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwc1xuICAgKiBAcGFyYW0ge1N0cmluZyB8IERhdGV9IG1hcFN0YXJ0QXRcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBtYXBzVG9UcmVlKG1hcHMsIG1hcFN0YXJ0QXQpIHtcbiAgICBpZiAoIShpc1N0cmluZyhtYXBzLmF2YWlsYWJpbGl0eSlcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubmlnaHRseV9yYXRlcylcbiAgICAgIHx8IGlzU3RyaW5nKG1hcHMubWluaW11bV9zdGF5cykpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbCAgPSBtYXBzLmF2YWlsYWJpbGl0eS5zcGxpdCgnJykubWFwKHBhcnNlRmxvYXQpO1xuICAgIGNvbnN0IHJhdGVzICA9IG1hcHMubmlnaHRseV9yYXRlcy5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBjb25zdCBtaW5NYXAgPSBtYXBzLm1pbmltdW1fc3RheXMuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgbGV0IGRheSAgICAgID0gMTtcblxuICAgIGxldCB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXRlOiBkYXlTaGlmdFxuICAgIH0gPSBwYXJzZUlTT1N0cmluZyhtYXBTdGFydEF0KTtcblxuICAgIC8vIHRyaWNrIHRvIGFkZCBleHRyYSB1bmF2YWlsYWJsZSBkYXRlIGZvciBwcm9wZXIgY2FsY3VsYXRpb25zIG9mIGNoZWNrLW91dCBkYXRlc1xuICAgIGlmIChhdmFpbFthdmFpbC5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgYXZhaWwucHVzaCgxKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNEYXRlID0ge307XG5cbiAgICByZXR1cm4gYXZhaWwucmVkdWNlKChjdXJyLCBzdGF0ZSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoICAgICAgICAgICA9IG1vbnRoTGVuZ3RoKHllYXIsIG1vbnRoKTtcbiAgICAgIGNvbnN0IHRyZWUgICAgICAgICAgICAgPSBjdXJyO1xuICAgICAgY29uc3QgbWluU3RheSAgICAgICAgICA9IG1pbk1hcFtpbmRleF07XG4gICAgICBjb25zdCByYXRlICAgICAgICAgICAgID0gcmF0ZXNbaW5kZXhdO1xuICAgICAgY29uc3QgaXNBdmFpbGFibGUgICAgICA9IHN0YXRlID09PSAwO1xuICAgICAgY29uc3QgcHJldkF2YWlsYWJsZSAgICA9IGFycltpbmRleCAtIDFdID09PSAwO1xuICAgICAgY29uc3QgaXNNb3JuaW5nQmxvY2tlZCA9IChpc0F2YWlsYWJsZSAmJiAhcHJldkF2YWlsYWJsZSkgPyB0cnVlIDogbnVsbDtcbiAgICAgIGNvbnN0IGlzQXZhaWxhYmxlT3V0ICAgPSAoaXNNb3JuaW5nQmxvY2tlZCkgPyB0cnVlIDogbnVsbDtcblxuICAgICAgaWYgKCF0cmVlW3llYXJdKSB7XG4gICAgICAgIHRyZWVbeWVhcl0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmVlW3llYXJdW21vbnRoXSkge1xuICAgICAgICB0cmVlW3llYXJdW21vbnRoXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5U2hpZnQpIHtcbiAgICAgICAgZGF5ICAgICAgPSBkYXlTaGlmdDtcbiAgICAgICAgZGF5U2hpZnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBtaW5TdGF5ID4gYXZhaWxhYmxlIGRheXMgaW4gZnV0dXJlXG4gICAgICAvLyBjb25zaWRlciBjdXJyZW50IGRheSBhcyB1bmF2YWlsYWJsZSBhcyB3ZWxsXG4gICAgICAvLyBpZiAoaXNBdmFpbGFibGUgJiYgbWluU3RheSA+IDEpIHtcbiAgICAgIC8vICAgbGV0IGRheXNBdmFpbGFibGUgPSAxO1xuICAgICAgLy8gICBsZXQgaSAgICAgICAgICAgICA9IGluZGV4ICsgMTtcbiAgICAgIC8vICAgd2hpbGUgKGFycltpXSA9PT0gMCkge1xuICAgICAgLy8gICAgIGRheXNBdmFpbGFibGUgKz0gMTtcbiAgICAgIC8vICAgICBpICs9IDE7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vXG4gICAgICAvLyAgIGlmIChtaW5TdGF5ID4gZGF5c0F2YWlsYWJsZSkge1xuICAgICAgLy8gICAgIGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgdHJlZVt5ZWFyXVttb250aF1bZGF5XSA9IHtcbiAgICAgICAgcmF0ZSxcbiAgICAgICAgbWluU3RheSxcbiAgICAgICAgaXNBdmFpbGFibGUsXG4gICAgICAgIGlzTW9ybmluZ0Jsb2NrZWQsXG4gICAgICAgIGlzQXZhaWxhYmxlT3V0XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAocHJldkF2YWlsYWJsZSAmJiAhaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICB0cmVlW3ByZXZpb3VzRGF0ZS55ZWFyXVtwcmV2aW91c0RhdGUubW9udGhdW3ByZXZpb3VzRGF0ZS5kYXldLmlzQXZhaWxhYmxlT3V0ID0gdHJ1ZTtcbiAgICAgICAgICB0cmVlW3llYXJdW21vbnRoXVtkYXldLmlzTW9ybmluZ0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIC8vIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzRGF0ZSA9IHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheVxuICAgICAgfTtcblxuICAgICAgaWYgKGRheSA8IGxlbmd0aCkge1xuICAgICAgICBkYXkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtb250aCA+IDEwKSB7XG4gICAgICAgICAgbW9udGggPSAwO1xuICAgICAgICAgIHllYXIgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb250aCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGRheSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmVlO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXksIHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGF5RGF0YSA9IHRoaXMuZ2V0RGF5KHllYXIsIG1vbnRoLCBkYXkpO1xuICAgIHJldHVybiBkYXlEYXRhID8gZGF5RGF0YVtwcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXREYXkoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXJEYXRhID0gdGhpcy5tYXBbeWVhcl07XG4gICAgaWYgKCF5ZWFyRGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhEYXRhID0geWVhckRhdGFbbW9udGhdO1xuICAgIGlmICghbW9udGhEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhEYXRhW2RheV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlzRGF5RGlzYWJsZWQoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGNvbnN0IGRheURhdGEgPSB0aGlzLmdldERheSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICByZXR1cm4gIShkYXlEYXRhICYmIGRheURhdGEuaXNBdmFpbGFibGUpO1xuICB9XG59XG4iLCIvKiBnbG9iYWwgTm9kZSwgZG9jdW1lbnQsIHdpbmRvdywgY29uc29sZSwgcmVxdWlyZSwgZmV0Y2gsIHNldFRpbWVvdXQgKi9cbmltcG9ydCB1dGlscyBmcm9tICd3aWRnZXQtdXRpbHMnO1xuXG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IENhbGVuZGFyVHJlZSBmcm9tICcuL2NhbGVuZGFyLXRyZWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgbG9jYWxlcyBmcm9tICcuL2xvY2FsZXMnO1xuaW1wb3J0IGNyZWF0ZVBvc2l0aW9uZXIgZnJvbSAnLi9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IHN0cmZ0aW1lIH0gZnJvbSAnc3RydGltZSc7XG5cbmltcG9ydCB7XG4gIGRhdGVUb0lzbywgaXNMYXRlciwgaXNDdXJyZW50LCB2YWxpZGF0aW9uT2ZDZWxsLCB0Rm9ybWF0dGVyLCBkYXRlVG9BcnJheSwgbW9udGhEaWZmXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnO1xuXG5pbXBvcnQgdXRpbHNTdHlsZXMgZnJvbSAnd2lkZ2V0LXV0aWxzL3NyYy9zdHlsZXMvcmVzZXQuc2Nzcyc7XG5cbmNvbnN0IHtcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgaXNBcnJheSwgaXNPYmplY3QsIEVtaXR0ZXIsXG4gIG1lcmdlLCBlbGVtZW50RnJvbVN0cmluZywgdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyLCBkZXN0cm95RWxlbWVudCwgbW9udGhMZW5ndGgsIGlzLCBpc0Z1bmN0aW9uLFxuICBpc051bWVyaWMsIHRyYXZlcnNlT2JqLCBpc0luc2lkZSwgY3VycmVuY3lGb3JtYXR0ZXJcbn0gPSB1dGlscztcblxubGV0IGNhbGVuZGFySW5zdGFuY2VDb3VudGVyID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Iob3B0cywgbWFwcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lICAgID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5WRVJTSU9OID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICB0aGlzLkNTU19QUkVGSVggPSBjb25maWcuY3NzUHJlZml4O1xuICAgIHRoaXMuaW5zdGFuY2VJZCA9IGNhbGVuZGFySW5zdGFuY2VDb3VudGVyICs9IDE7XG4gICAgdGhpcy50b29sdGlwSWQgPSBgJHt0aGlzLkNTU19QUkVGSVh9VG9vbHRpcC0ke3RoaXMuaW5zdGFuY2VJZH1gO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9wdHMpKSB7XG4gICAgICBpZiAoIW9wdHMuZWwpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIoJ2VsIG11c3QgYmUgSFRNTCBlbGVtZW50JywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZmlnRGF0YXNldCA9IG1lcmdlKGNvbmZpZywgb3B0cy5lbC5kYXRhc2V0KTtcbiAgICAgIHRoaXMub3B0cyAgICAgICAgICAgPSBtZXJnZShjb25maWdEYXRhc2V0LCBvcHRzKTtcblxuICAgICAgdGhpcy5vcHRzID0gdHJhdmVyc2VPYmoodGhpcy5vcHRzLCAoYSkgPT4gYSwgKGIpID0+IHtcbiAgICAgICAgaWYgKGIgPT09ICd0cnVlJyB8fCBiID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgcmV0dXJuIChiID09PSAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWVyaWMoYikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYiwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3B0cy5sYW5nICAgICAgICA9ICh0aGlzLm9wdHMubGFuZyAmJiB0aGlzLm9wdHMubGFuZyBpbiBsb2NhbGVzKSA/IHRoaXMub3B0cy5sYW5nIDogJ2VuLVVTJztcbiAgICAgIHRoaXMubG9jYWxlICAgICAgICAgICA9IGxvY2FsZXNbdGhpcy5vcHRzLmxhbmddO1xuICAgICAgdGhpcy5mb3JtYXQgICAgICAgICAgID0gdGhpcy5vcHRzLmZvcm1hdERhdGUgfHwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZSB8fCAnJW0vJWQvJVknO1xuICAgICAgdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrID0gdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrIHx8IHRoaXMubG9jYWxlLnN0YXJ0T2ZXZWVrO1xuXG4gICAgICBsZXQgeyBjdXJyZW50RGF0ZSB9ID0gdGhpcy5vcHRzO1xuICAgICAgY29uc3QgeWVhciAgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZGF5ICAgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgIHRoaXMub3B0cy5jdXJyZW50RGF0ZSA9IFt5ZWFyLCBtb250aCwgZGF5XTtcblxuICAgICAgaWYgKCF0aGlzLm9wdHMueWVhclN0YXJ0KSB7XG4gICAgICAgIHRoaXMub3B0cy55ZWFyU3RhcnQgPSB5ZWFyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0cy5tb250aFN0YXJ0KSB7XG4gICAgICAgIHRoaXMub3B0cy5tb250aFN0YXJ0ID0gbW9udGg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm9ybWFsaXplUmVzcG9uc2l2ZU9wdGlvbnMoKTtcblxuICAgICAgaWYgKHRoaXMub3B0cy5pc0Ryb3BEb3duKSB7XG4gICAgICAgIHRoaXMuaW5pdENhbGVuZGFyRHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdHMuZWw7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLy8gVE9ETzogcmVuYW1lIGRheXNUcmVlXG4gICAgdGhpcy5kb20gICA9IHt9O1xuICAgIC8vIFRPRE86IHJlbmFtZSB0byBjYWxlbmRhclRyZWUgb3IgYm9va2luZ3NUcmVlXG4gICAgdGhpcy5jVHJlZSA9IG5ldyBDYWxlbmRhclRyZWUodmFsaWRhdGlvbk9mQ2VsbCwge30pO1xuICAgIC8vIFRPRE86IHJlbmFtZSB0byBib29raW5nc0RhdGEgJiBhZGREYXRhXG4gICAgaWYgKGlzT2JqZWN0KG1hcHMpKSB7XG4gICAgICB0aGlzLmNUcmVlLmFkZE1hcHMobWFwcywgbWFwcy5zdGFydF9kYXRlIHx8IGRhdGVUb0lzbyh0aGlzLm9wdHMuY3VycmVudERhdGUpKTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3Rpb24gYW5kIGhpZ2hsaWdodHNcbiAgICB0aGlzLmlzU2VsZWN0aW5nICAgICAgID0gZmFsc2U7XG4gICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtdO1xuICAgIHRoaXMuaGFzVmFsaWRSYW5nZSAgICAgPSB0cnVlO1xuXG4gICAgLy8gVE9ETzogcmVuYW1lIGlzUmV2ZXJzZVNlbGVjdGFibGUgdG8gc2VsZWN0aW9uRGVmYXVsdERpcmVjdGlvbiAtIHNob3VsZCBiZSBMVFIgb3IgUlRMXG4gICAgLy8gdXNlciBzZWxlY3RzIGVuZCBkYXRlIGZpcnN0XG4gICAgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID0gdGhpcy5vcHRzLmlzUmV2ZXJzZVNlbGVjdGFibGU7XG4gICAgdGhpcy5kaXNwbGF5TW9udGhzID0gdGhpcy5vcHRzLmRpc3BsYXlNb250aHM7XG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdCA9IG51bGw7XG4gICAgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlWWVhclBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBudWxsO1xuICAgIHRoaXMub25Eb2N1bWVudEtleWRvd24gPSBudWxsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuY2FsZW5kYXIsIHV0aWxzU3R5bGVzLnJlc2V0KTtcblxuICAgIGlmICghdGhpcy5lbC5kYXRhc2V0LnRoZW1lKSB7XG4gICAgICB0aGlzLmVsLmRhdGFzZXQudGhlbWUgPSB0aGlzLm9wdHMudGhlbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncmVnaW9uJyk7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsZS5sYWJlbHMuY2FsZW5kYXIpO1xuXG4gICAgdGhpcy5kb20uc3ByaXRlID0gdGhpcy5lbC5hcHBlbmRDaGlsZChcbiAgICAgIGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5zdmdTcHJpdGUoYCR7dGhpcy5DU1NfUFJFRklYfUNoZXZyb25Eb3duYCkpXG4gICAgKTtcbiAgICB0aGlzLmRvbS5wYWdpbmF0aW9uICAgID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMucGFnaW5hdGlvbigpKSk7XG4gICAgdGhpcy5kb20ubW9iaWxlV2Vla2RheXMgPSB0aGlzLmVsLmFwcGVuZENoaWxkKFxuICAgICAgZWxlbWVudEZyb21TdHJpbmcodGVtcGxhdGVzLm1vYmlsZVdlZWtkYXlzKHRoaXMuaGVhZGVyVGVtcGxhdGVTdHJpbmcoKSkpXG4gICAgKTtcbiAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMubWFpbih0aGlzLmxvY2FsZS5sYWJlbHMubW9udGhzKSkpO1xuICAgIHRoaXMuZG9tLmxpdmVSZWdpb24gPSB0aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5saXZlUmVnaW9uKCkpKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwgPSB0aGlzLmVsLmFwcGVuZENoaWxkKGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5zaGFyZWRZZWFyUGlja2VyUGFuZWwoe1xuICAgICAgY2xvc2VMYWJlbDogdGhpcy5sb2NhbGUubGFiZWxzLmNsb3NlIHx8ICdDbG9zZScsXG4gICAgICBwcmV2aW91c0xhYmVsOiB0aGlzLmxvY2FsZS5sYWJlbHMucHJldmlvdXNZZWFycyB8fCAnUHJldmlvdXMgeWVhcnMnLFxuICAgICAgbmV4dExhYmVsOiB0aGlzLmxvY2FsZS5sYWJlbHMubmV4dFllYXJzIHx8ICdOZXh0IHllYXJzJ1xuICAgIH0pKSk7XG4gICAgdGhpcy5kb20uZm9yd2FyZCAgICAgICA9IHRoaXMuZG9tLnBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgICBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMuZm9yd2FyZCh0aGlzLmxvY2FsZS5sYWJlbHMubW9udGhzRm9yd2FyZCkpXG4gICAgKTtcbiAgICB0aGlzLmRvbS5iYWNrICAgICAgICAgID0gdGhpcy5kb20ucGFnaW5hdGlvbi5hcHBlbmRDaGlsZChcbiAgICAgIGVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlcy5iYWNrKHRoaXMubG9jYWxlLmxhYmVscy5tb250aHNCYWNrd2FyZCkpXG4gICAgKTtcbiAgICB0aGlzLmFkZENhcHRpb25QaWNrZXJFdmVudHMoKTtcbiAgICB0aGlzLmFkZFZpZXdwb3J0RXZlbnRzKCk7XG4gICAgdGhpcy5yZW5kZXJNb250aHModGhpcy5vcHRzLnllYXJTdGFydCwgdGhpcy5vcHRzLm1vbnRoU3RhcnQpO1xuXG4gICAgdGhpcy5hZGRCdG5zRXZlbnRzKCk7XG5cbiAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUgJiYgdGhpcy5vcHRzLmVsU3RhcnRBdCAmJiB0aGlzLm9wdHMuZWxFbmRBdCkge1xuICAgICAgaWYgKCF0aGlzLm9wdHMucmVudGFsSWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dHNUb1ZhbHVlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uKCdtYXBzLWxvYWRlZCcsICgpID0+IHRoaXMuaW5wdXRzVG9WYWx1ZXMoKSk7XG4gICAgICB0aGlzLm9wdHMuZWxTdGFydEF0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy5pbnB1dHNUb1ZhbHVlcygpKTtcbiAgICAgIHRoaXMub3B0cy5lbEVuZEF0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy5pbnB1dHNUb1ZhbHVlcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnJlbnRhbElkICYmICF0aGlzLm9wdHMuaXNEcm9wRG93bikge1xuICAgICAgdGhpcy5sb2FkTWFwcyh0aGlzLm9wdHMucmVudGFsSWQpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuZGF0YXNldC5zZWxlY3RhYmxlID0gdGhpcy5vcHRzLnNlbGVjdGFibGU7XG5cbiAgICB0aGlzLmxvZ2dlcignaW5pdGVkJyk7XG4gICAgdGhpcy5lbWl0KCdpbml0Jyk7XG4gIH1cblxuICBjaGFuZ2VTZWxlY3Rpb25PcmRlcihpc1JldmVyc2UpIHtcbiAgICBpZiAoKGlzUmV2ZXJzZSAhPT0gdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlKSAmJiAhdGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID0gaXNSZXZlcnNlO1xuICAgICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgICB0aGlzLnJlbmRlck1vbnRocyh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0KTtcbiAgICB9XG4gIH1cblxuICBub3JtYWxpemVSZXNwb25zaXZlT3B0aW9ucygpIHtcbiAgICBjb25zdCBmYWxsYmFja0Rpc3BsYXlNb250aHMgPSB0aGlzLnRvUG9zaXRpdmVJbnQodGhpcy5vcHRzLmRpc3BsYXlNb250aHMsIDIpO1xuICAgIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzID0gZmFsbGJhY2tEaXNwbGF5TW9udGhzO1xuICAgIHRoaXMub3B0cy5kaXNwbGF5TW9udGhzTW9iaWxlID0gdGhpcy50b1Bvc2l0aXZlSW50KFxuICAgICAgdGhpcy5vcHRzLmRpc3BsYXlNb250aHNNb2JpbGUsXG4gICAgICBmYWxsYmFja0Rpc3BsYXlNb250aHNcbiAgICApO1xuICAgIHRoaXMub3B0cy5tb2JpbGVCcmVha3BvaW50ID0gdGhpcy50b05vbk5lZ2F0aXZlSW50KHRoaXMub3B0cy5tb2JpbGVCcmVha3BvaW50LCA3NjcpO1xuICB9XG5cbiAgdG9Qb3NpdGl2ZUludCh2YWx1ZSwgZmFsbGJhY2spIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQpIHx8IHBhcnNlZCA8IDEpIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgdG9Ob25OZWdhdGl2ZUludCh2YWx1ZSwgZmFsbGJhY2spIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQpIHx8IHBhcnNlZCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgaXNNb2JpbGVWaWV3cG9ydCgpIHtcbiAgICBpZiAodGhpcy5tZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVkaWFRdWVyeUxpc3QubWF0Y2hlcztcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gKHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LmlubmVyV2lkdGggPT09ICdudW1iZXInKVxuICAgICAgPyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgOiB0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludCArIDE7XG5cbiAgICByZXR1cm4gdmlld3BvcnRXaWR0aCA8PSB0aGlzLm9wdHMubW9iaWxlQnJlYWtwb2ludDtcbiAgfVxuXG4gIGFwcGx5Vmlld3BvcnRNb2RlKGlzTW9iaWxlVmlld3BvcnQpIHtcbiAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2JpbGVWaWV3cG9ydCkge1xuICAgICAgdGhpcy5lbC5kYXRhc2V0LnZpZXdwb3J0ID0gJ21vYmlsZSc7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlTW9kZSk7XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dQYWdpbmF0aW9uTW9iaWxlKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLmRhdGFzZXQudmlld3BvcnQgPSAnZGVza3RvcCc7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlTW9kZSk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldERpc3BsYXlNb250aHNGb3JWaWV3cG9ydCgpIHtcbiAgICBjb25zdCBpc01vYmlsZVZpZXdwb3J0ID0gdGhpcy5pc01vYmlsZVZpZXdwb3J0KCk7XG5cbiAgICB0aGlzLmFwcGx5Vmlld3BvcnRNb2RlKGlzTW9iaWxlVmlld3BvcnQpO1xuXG4gICAgaWYgKGlzTW9iaWxlVmlld3BvcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMuZGlzcGxheU1vbnRoc01vYmlsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHRzLmRpc3BsYXlNb250aHM7XG4gIH1cblxuICBzeW5jRGlzcGxheU1vbnRoc0ZvclZpZXdwb3J0KCkge1xuICAgIGNvbnN0IG5leHREaXNwbGF5TW9udGhzID0gdGhpcy5nZXREaXNwbGF5TW9udGhzRm9yVmlld3BvcnQoKTtcbiAgICBjb25zdCBoYXNDaGFuZ2VkID0gdGhpcy5kaXNwbGF5TW9udGhzICE9PSBuZXh0RGlzcGxheU1vbnRocztcblxuICAgIHRoaXMuZGlzcGxheU1vbnRocyA9IG5leHREaXNwbGF5TW9udGhzO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICB9XG5cbiAgaGFuZGxlVmlld3BvcnRDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuc3luY0Rpc3BsYXlNb250aHNGb3JWaWV3cG9ydCgpKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZpZXdwb3J0RXZlbnRzKCkge1xuICAgIHRoaXMucmVtb3ZlVmlld3BvcnRFdmVudHMoKTtcblxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMub3B0cy5tb2JpbGVCcmVha3BvaW50fXB4KWApO1xuICAgICAgdGhpcy5vbk1lZGlhUXVlcnlDaGFuZ2UgPSAoKSA9PiB0aGlzLmhhbmRsZVZpZXdwb3J0Q2hhbmdlKCk7XG5cbiAgICAgIGlmICh0aGlzLm1lZGlhUXVlcnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHRoaXMuaGFuZGxlVmlld3BvcnRDaGFuZ2UoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gIH1cblxuICByZW1vdmVWaWV3cG9ydEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5tZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSkge1xuICAgICAgaWYgKHRoaXMubWVkaWFRdWVyeUxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm1lZGlhUXVlcnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25NZWRpYVF1ZXJ5Q2hhbmdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1lZGlhUXVlcnlMaXN0ID0gbnVsbDtcbiAgICB0aGlzLm9uTWVkaWFRdWVyeUNoYW5nZSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vbldpbmRvd1Jlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTW9udGhzKHllYXJTdGFydCwgbW9udGhTdGFydCkge1xuICAgIHRoaXMuc3luY0Rpc3BsYXlNb250aHNGb3JWaWV3cG9ydCgpO1xuXG4gICAgY29uc3QgaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmhlYWRlclRlbXBsYXRlU3RyaW5nKCk7XG4gICAgLy8gY29uc3RydWN0IGRvbSB0cmVlXG4gICAgY29uc3Qge1xuICAgICAgdHJlZSwgeWVhckVuZCwgbW9udGhFbmQsIG1vbnRoc1xuICAgIH0gPSB0aGlzLmNyZWF0ZVRyZWUoeWVhclN0YXJ0LCBtb250aFN0YXJ0LCB0aGlzLmRpc3BsYXlNb250aHMsIGhlYWRlclRlbXBsYXRlKTtcblxuICAgIHRoaXMuY1RyZWUuYWRkVHJlZSh0cmVlKTtcblxuICAgIHRoaXMubW9udGhTdGFydCA9IG1vbnRoU3RhcnQ7XG4gICAgdGhpcy55ZWFyU3RhcnQgID0geWVhclN0YXJ0O1xuXG4gICAgdGhpcy5tb250aEVuZCA9IG1vbnRoRW5kO1xuICAgIHRoaXMueWVhckVuZCAgPSB5ZWFyRW5kO1xuXG4gICAgaWYgKHRoaXMub3B0cy5zZWxlY3RhYmxlKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPyBzdHlsZXMucmV2ZXJzZWQgOiBzdHlsZXMuZGlyZWN0KTtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSA/IHN0eWxlcy5kaXJlY3QgOiBzdHlsZXMucmV2ZXJzZWQpO1xuICAgIH1cblxuICAgIHRoaXMuZG9tLm1vbnRocyA9IG1vbnRocztcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIHRoaXMuZG9tLm1vbnRocy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5hZGRNb250aEV2ZW50cyhtKTtcbiAgICAgIH1cblxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmFjdGlvbnNFbmFibGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5lbmFibGVBbGxEYXlzKSB7XG4gICAgICB0aGlzLmRpc2FibGVCYWNrQnRuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWNvdmVyU2VsZWN0aW9ucygpO1xuICB9XG5cbiAgcmVjb3ZlclNlbGVjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0U3RhcnQodGhpcy5zZWxlY3Rpb25TdGFydCwgdGhpcy5jVHJlZS5zZWxlY3REYXkoLi4udGhpcy5zZWxlY3Rpb25TdGFydCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgdGhpcy5zZWxlY3RFbmQodGhpcy5zZWxlY3Rpb25FbmQsIHRoaXMuY1RyZWUuc2VsZWN0RGF5KC4uLnRoaXMuc2VsZWN0aW9uRW5kKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkQm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSguLi50aGlzLmhpZ2hsaWdodGVkQm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlnaExpZ2h0UmFuZ2UodGhpcy5zZWxlY3Rpb25TdGFydCwgdGhpcy5zZWxlY3Rpb25FbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc2FibGVCYWNrQnRuKCkge1xuICAgIGlmICh0aGlzLm9wdHMuaXNCYWNrRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSAgICAgICAgPSBkYXRlVG9Jc28odGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCwgMSk7XG4gICAgICBsZXQgeyBjdXJyZW50RGF0ZSB9ICAgID0gdGhpcy5vcHRzO1xuICAgICAgY3VycmVudERhdGUgICAgICAgICAgICA9IGRhdGVUb0lzbyhjdXJyZW50RGF0ZVswXSwgY3VycmVudERhdGVbMV0sIDEpO1xuICAgICAgdGhpcy5kb20uYmFjay5kaXNhYmxlZCA9IHN0YXJ0RGF0ZSA8PSBjdXJyZW50RGF0ZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVMb2FkaW5nKCkge1xuICAgIGlmICghaGFzQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmxvYWRpbmcpKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMubG9hZGluZyk7XG4gICAgICB0aGlzLmVtaXQoJ2xvYWRpbmctc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMubG9hZGluZyk7XG4gICAgICB0aGlzLmVtaXQoJ2xvYWRpbmctaGlkZScpO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1hcHMobWFwcykge1xuICAgIHRoaXMuY1RyZWUucmVwbGFjZU1hcHMobWFwcywgbWFwcy5zdGFydF9kYXRlKTtcbiAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICB0aGlzLnJlbmRlck1vbnRocyhcbiAgICAgIHRoaXMub3B0cy55ZWFyU3RhcnQgfHwgdGhpcy55ZWFyU3RhcnQsXG4gICAgICB0aGlzLm9wdHMubW9udGhTdGFydCB8fCB0aGlzLm1vbnRoU3RhcnRcbiAgICApO1xuICB9XG5cbiAgYWRkQnRuc0V2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5mb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB5ZWFyOiB5ZWFyVG9SZW5kZXIsXG4gICAgICAgIG1vbnRoOiBtb250aFRvUmVuZGVyXG4gICAgICB9ID0gdGhpcy5zaGlmdE1vbnRoKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQsIHRoaXMub3B0cy5tb250aHNQYWdpbmF0aW9uSnVtcCB8fCB0aGlzLmRpc3BsYXlNb250aHMpO1xuXG4gICAgICB0aGlzLnJlbmRlck1vbnRocyh5ZWFyVG9SZW5kZXIsIG1vbnRoVG9SZW5kZXIpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kb20uYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeWVhcjogeWVhclRvUmVuZGVyLFxuICAgICAgICBtb250aDogbW9udGhUb1JlbmRlclxuICAgICAgfSA9IHRoaXMuc2hpZnRNb250aCh0aGlzLnllYXJTdGFydCwgdGhpcy5tb250aFN0YXJ0LCAtKHRoaXMub3B0cy5tb250aHNQYWdpbmF0aW9uSnVtcCB8fCB0aGlzLmRpc3BsYXlNb250aHMpKTtcblxuICAgICAgdGhpcy5yZW5kZXJNb250aHMoeWVhclRvUmVuZGVyLCBtb250aFRvUmVuZGVyKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENhcHRpb25QaWNrZXJFdmVudHMoKSB7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tlZEluc2lkZUNhbGVuZGFyID0gdGhpcy5lbC5jb250YWlucyhlLnRhcmdldCk7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS15ZWFyLXBpY2tlci10cmlnZ2VyJykucGFyZW50O1xuICAgICAgY29uc3QgeWVhck9wdGlvbiA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgJ2RhdGEteWVhci1vcHRpb24nKTtcbiAgICAgIGNvbnN0IHllYXJQYWdlciA9IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0cihlLnRhcmdldCwgJ2RhdGEteWVhci1wYWdlLW9mZnNldCcpO1xuICAgICAgY29uc3QgY2xvc2VQaWNrZXIgPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXllYXItcGlja2VyLWNsb3NlJykucGFyZW50O1xuXG4gICAgICBpZiAoIWNsaWNrZWRJbnNpZGVDYWxlbmRhcikge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVZZWFyUGlja2VyKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjbG9zZVBpY2tlcikge1xuICAgICAgICB0aGlzLmNsb3NlWWVhclBpY2tlcih7XG4gICAgICAgICAgZm9jdXNUcmlnZ2VyOiBlLmRldGFpbCA9PT0gMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoeWVhck9wdGlvbi5wYXJlbnQgJiYgeWVhck9wdGlvbi52YWx1ZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFllYXIgPSBwYXJzZUludCh5ZWFyT3B0aW9uLnZhbHVlLCAxMCk7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRoaXMuYWN0aXZlWWVhclBpY2tlcjtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICAgICAgaWYgKG1vbnRoRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyRnJvbVNsb3QobW9udGhFbGVtZW50LCBzZWxlY3RlZFllYXIsIG1vbnRoRWxlbWVudC5tb250aCwge1xuICAgICAgICAgICAgZm9jdXNUcmlnZ2VyOiBlLmRldGFpbCA9PT0gMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHllYXJQYWdlci5wYXJlbnQgJiYgeWVhclBhZ2VyLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRoaXMuYWN0aXZlWWVhclBpY2tlcjtcbiAgICAgICAgY29uc3QgbmV4dFllYXJQYWdlU3RhcnQgPSBwYXJzZUludCh0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuZGF0YXNldC55ZWFyUGFnZVN0YXJ0IHx8IG1vbnRoRWxlbWVudC55ZWFyLCAxMClcbiAgICAgICAgICArIHBhcnNlSW50KHllYXJQYWdlci52YWx1ZSwgMTApO1xuICAgICAgICBpZiAobW9udGhFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJZZWFyR3JpZChtb250aEVsZW1lbnQsIG5leHRZZWFyUGFnZVN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRyaWdnZXIuY2xvc2VzdCgnLmpzLW1vbnRoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlWWVhclBpY2tlciA9PT0gbW9udGhFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoe1xuICAgICAgICAgICAgZm9jdXNUcmlnZ2VyOiBlLmRldGFpbCA9PT0gMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3BlblllYXJQaWNrZXIobW9udGhFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVllYXJQaWNrZXJcbiAgICAgICAgJiYgIXRoaXMuYWN0aXZlWWVhclBpY2tlci5jb250YWlucyhlLnRhcmdldClcbiAgICAgICAgJiYgIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vbkRvY3VtZW50S2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuYWN0aXZlWWVhclBpY2tlcikge1xuICAgICAgICB0aGlzLmNsb3NlWWVhclBpY2tlcih7XG4gICAgICAgICAgZm9jdXNUcmlnZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFycm93IGtleSBuYXZpZ2F0aW9uIHdpdGhpbiB5ZWFyIHBpY2tlciBncmlkICgzIGNvbHVtbnMpXG4gICAgICBpZiAodGhpcy5hY3RpdmVZZWFyUGlja2VyICYmIHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgICB0aGlzLmhhbmRsZVllYXJQaWNrZXJLZXlkb3duKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkRvY3VtZW50S2V5ZG93bik7XG4gIH1cblxuICBvcGVuWWVhclBpY2tlcihtb250aEVsZW1lbnQpIHtcbiAgICBpZiAoIW1vbnRoRWxlbWVudCB8fCAhdGhpcy5lbC5jb250YWlucyhtb250aEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZVllYXJQaWNrZXIoKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gbW9udGhFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXllYXItcGlja2VyLXRyaWdnZXJdJyk7XG5cbiAgICBpZiAoIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCB8fCAhdHJpZ2dlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb25ZZWFyUGlja2VyUGFuZWwoKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGUubGFiZWxzLmNhbGVuZGFyKTtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnllYXJQaWNrZXJPcGVuKTtcbiAgICB0aGlzLmFjdGl2ZVllYXJQaWNrZXIgPSBtb250aEVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJZZWFyR3JpZChtb250aEVsZW1lbnQsIG1vbnRoRWxlbWVudC55ZWFyIC0gNSk7XG5cbiAgICAvLyBGb2N1cyB0aGUgc2VsZWN0ZWQgeWVhciBidXR0b24sIG9yIHRoZSBmaXJzdCB5ZWFyIGJ1dHRvblxuICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdGVkLXllYXJdJyk7XG4gICAgY29uc3QgZmlyc3RCdG4gPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1vcHRpb25dJyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRCdG4pIHtcbiAgICAgIHNlbGVjdGVkQnRuLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEJ0bikge1xuICAgICAgZmlyc3RCdG4uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVllYXJQaWNrZXIoe1xuICAgIGZvY3VzVHJpZ2dlciA9IGZhbHNlXG4gIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5hY3RpdmVZZWFyUGlja2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuYWN0aXZlWWVhclBpY2tlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS15ZWFyLXBpY2tlci10cmlnZ2VyXScpO1xuXG4gICAgaWYgKHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBpZiAoZm9jdXNUcmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMueWVhclBpY2tlck9wZW4pO1xuICAgIHRoaXMuYWN0aXZlWWVhclBpY2tlciA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVZZWFyUGlja2VyS2V5ZG93bihlKSB7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWw7XG4gICAgY29uc3QgZm9jdXNlZCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpO1xuXG4gICAgaWYgKCFmb2N1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gZS5rZXkgfHwgZS5rZXlDb2RlO1xuICAgIGNvbnN0IHllYXJCdXR0b25zID0gQXJyYXkuZnJvbShwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS15ZWFyLW9wdGlvbl0nKSk7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0geWVhckJ1dHRvbnMuaW5kZXhPZihmb2N1c2VkKTtcblxuICAgIC8vIEFycm93IG5hdmlnYXRpb24gd2l0aGluIHRoZSAzLWNvbHVtbiB5ZWFyIGdyaWRcbiAgICBjb25zdCBjb2xzID0gMztcbiAgICBjb25zdCBhcnJvd09mZnNldHMgPSB7XG4gICAgICBBcnJvd0xlZnQ6IC0xLCBBcnJvd1JpZ2h0OiAxLFxuICAgICAgQXJyb3dVcDogLWNvbHMsIEFycm93RG93bjogY29scyxcbiAgICAgIDM3OiAtMSwgMzk6IDEsIDM4OiAtY29scywgNDA6IGNvbHNcbiAgICB9O1xuXG4gICAgaWYgKGFycm93T2Zmc2V0c1trZXldICE9PSB1bmRlZmluZWQgJiYgY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBjdXJyZW50SW5kZXggKyBhcnJvd09mZnNldHNba2V5XTtcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID49IDAgJiYgdGFyZ2V0SW5kZXggPCB5ZWFyQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgeWVhckJ1dHRvbnNbdGFyZ2V0SW5kZXhdLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyB0cmFwOiBUYWIgY3ljbGVzIHdpdGhpbiB0aGUgeWVhciBwaWNrZXIgcGFuZWxcbiAgICBpZiAoa2V5ID09PSAnVGFiJyB8fCBrZXkgPT09IDkpIHtcbiAgICAgIGNvbnN0IGZvY3VzYWJsZSA9IEFycmF5LmZyb20ocGFuZWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pJykpO1xuXG4gICAgICBpZiAoZm9jdXNhYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmaXJzdEVsXSA9IGZvY3VzYWJsZTtcbiAgICAgIGNvbnN0IGxhc3RFbCA9IGZvY3VzYWJsZVtmb2N1c2FibGUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWQgPT09IGZpcnN0RWwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsYXN0RWwuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZCA9PT0gbGFzdEVsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RFbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclllYXJHcmlkKG1vbnRoRWxlbWVudCwgeWVhclBhZ2VTdGFydCkge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5kb20ueWVhclBpY2tlclBhbmVsO1xuICAgIGNvbnN0IGdyaWQgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1ncmlkXScpO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZXIgPSB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1wYWdlLW9mZnNldD1cIi0xMlwiXScpO1xuICAgIGNvbnN0IG5leHRQYWdlciA9IHRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS15ZWFyLXBhZ2Utb2Zmc2V0PVwiMTJcIl0nKTtcblxuICAgIGlmICghcGFuZWwgfHwgIWdyaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5pbXVtWWVhciA9IHRoaXMubWluaW11bVNlbGVjdGFibGVZZWFyKCk7XG4gICAgY29uc3QgYm91bmRlZFllYXJQYWdlU3RhcnQgPSBtaW5pbXVtWWVhciA9PT0gbnVsbFxuICAgICAgPyB5ZWFyUGFnZVN0YXJ0XG4gICAgICA6IE1hdGgubWF4KHllYXJQYWdlU3RhcnQsIG1pbmltdW1ZZWFyKTtcbiAgICBjb25zdCB5ZWFycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeWVhciA9IGJvdW5kZWRZZWFyUGFnZVN0YXJ0OyB5ZWFyIDwgYm91bmRlZFllYXJQYWdlU3RhcnQgKyAxMjsgeWVhciArPSAxKSB7XG4gICAgICB5ZWFycy5wdXNoKHRlbXBsYXRlcy55ZWFyT3B0aW9uKHllYXIsIG1vbnRoRWxlbWVudC55ZWFyKSk7XG4gICAgfVxuXG4gICAgcGFuZWwuZGF0YXNldC55ZWFyUGFnZVN0YXJ0ID0gYm91bmRlZFllYXJQYWdlU3RhcnQ7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSB5ZWFycy5qb2luKCcnKTtcblxuICAgIGlmIChwcmV2aW91c1BhZ2VyKSB7XG4gICAgICBjb25zdCBzaG91bGREaXNhYmxlUHJldmlvdXNQYWdlciA9IG1pbmltdW1ZZWFyICE9PSBudWxsICYmIGJvdW5kZWRZZWFyUGFnZVN0YXJ0IDw9IG1pbmltdW1ZZWFyO1xuICAgICAgcHJldmlvdXNQYWdlci5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIHByZXZpb3VzUGFnZXIuZGlzYWJsZWQgPSBzaG91bGREaXNhYmxlUHJldmlvdXNQYWdlcjtcbiAgICB9XG5cbiAgICBpZiAobmV4dFBhZ2VyKSB7XG4gICAgICBuZXh0UGFnZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgICBuZXh0UGFnZXIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwb3NpdGlvblllYXJQaWNrZXJQYW5lbCgpIHtcbiAgICBpZiAoIXRoaXMuZG9tLnllYXJQaWNrZXJQYW5lbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMuZWwuc2Nyb2xsVG9wLCAwKTtcbiAgICBjb25zdCB2aXNpYmxlSGVpZ2h0ID0gdGhpcy5lbC5jbGllbnRIZWlnaHQgfHwgTWF0aC5yb3VuZCh0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG5cbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUubGVmdCA9ICcwJztcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUucmlnaHQgPSAnMCc7XG4gICAgdGhpcy5kb20ueWVhclBpY2tlclBhbmVsLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICB0aGlzLmRvbS55ZWFyUGlja2VyUGFuZWwuc3R5bGUuaGVpZ2h0ID0gdmlzaWJsZUhlaWdodCA/IGAke3Zpc2libGVIZWlnaHR9cHhgIDogJzEwMCUnO1xuICB9XG5cbiAgcmVuZGVyRnJvbVNsb3QobW9udGhFbGVtZW50LCB5ZWFyLCBtb250aCwge1xuICAgIGZvY3VzVHJpZ2dlciA9IGZhbHNlXG4gIH0gPSB7fSkge1xuICAgIGNvbnN0IGZvY3VzU2xvdEluZGV4ID0gZm9jdXNUcmlnZ2VyID8gbW9udGhFbGVtZW50LnNsb3RJbmRleCA6IG51bGw7XG5cbiAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICBsZXQge1xuICAgICAgeWVhcjogeWVhclN0YXJ0LFxuICAgICAgbW9udGg6IG1vbnRoU3RhcnRcbiAgICB9ID0gdGhpcy5zaGlmdE1vbnRoKHllYXIsIG1vbnRoLCAtbW9udGhFbGVtZW50LnNsb3RJbmRleCk7XG5cbiAgICAoe1xuICAgICAgeWVhcjogeWVhclN0YXJ0LFxuICAgICAgbW9udGg6IG1vbnRoU3RhcnRcbiAgICB9ID0gdGhpcy5jbGFtcFZpc2libGVNb250aFN0YXJ0KHllYXJTdGFydCwgbW9udGhTdGFydCkpO1xuXG4gICAgdGhpcy5yZW5kZXJNb250aHMoeWVhclN0YXJ0LCBtb250aFN0YXJ0KTtcblxuICAgIGlmIChmb2N1c1Nsb3RJbmRleCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mb2N1c0NhcHRpb25UcmlnZ2VyRm9yU2xvdChmb2N1c1Nsb3RJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNDYXB0aW9uVHJpZ2dlckZvclNsb3Qoc2xvdEluZGV4KSB7XG4gICAgaWYgKCFpc0FycmF5KHRoaXMuZG9tLm1vbnRocykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLmRvbS5tb250aHMuZmluZCgobW9udGhFbCkgPT4gbW9udGhFbC5zbG90SW5kZXggPT09IHNsb3RJbmRleCk7XG4gICAgY29uc3QgdHJpZ2dlciA9IG1vbnRoRWxlbWVudCAmJiBtb250aEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEteWVhci1waWNrZXItdHJpZ2dlcl0nKTtcblxuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkTW9udGhFdmVudHMoZWwpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25IYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRW5kRmlyc3QgPSB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBwYXJlbnQ6IGNlbGxcbiAgICAgIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgICAgICAgICAgPSBbZWwueWVhciwgZWwubW9udGgsIHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyksIDEwKV07XG4gICAgICAgIGNvbnN0IGRheUFscmVhZHlTZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNDdXJyZW50KChpc0VuZEZpcnN0KSA/IHRoaXMuc2VsZWN0aW9uRW5kIDogdGhpcy5zZWxlY3Rpb25TdGFydCwgZGF0ZVZhbHVlKTtcbiAgICAgICAgY29uc3QgcmFuZ2VTZWxlY3RlZCAgICAgID0gIXRoaXMuaXNTZWxlY3RpbmcgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgaXNQYXN0VG9kYXkgICAgICAgID0gaXNMYXRlcihkYXRlVmFsdWUsIHRoaXMub3B0cy5jdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgaWYgKGRheUFscmVhZHlTZWxlY3RlZCB8fCByYW5nZVNlbGVjdGVkIHx8IGlzUGFzdFRvZGF5KSB7XG4gICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXlBbHJlYWR5U2VsZWN0ZWQgJiYgIWlzUGFzdFRvZGF5ICYmICF0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cykge1xuICAgICAgICAgIGlmIChpc0VuZEZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmVuZERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZpcnN0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHN0eWxlcy5zZWxlY3RpbmdEaXJlY3QsIHN0eWxlcy5zZWxlY3RpbmdSZXZlcnNlZCk7XG4gICAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZWxlY3Rpb24oaXNFbmRGaXJzdCwgZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24gJiYgdGhpcy5jYWxEcm9wKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcChudWxsLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VvdmVySGFuZGxlciA9ICAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgcGFyZW50OiBjZWxsIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsICdkYXRhLXZhbHVlJyk7XG5cbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ICAgICAgICAgID0gW2VsLnllYXIsIGVsLm1vbnRoLCBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpLCAxMCldO1xuICAgICAgICBjb25zdCBpc1Bhc3RUb2RheSAgICAgID0gaXNMYXRlcihjdXJyZW50LCB0aGlzLm9wdHMuY3VycmVudERhdGUpO1xuICAgICAgICBjb25zdCBpc0VuZEZpcnN0ICAgICAgID0gdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlO1xuXG4gICAgICAgIGlmIChpc1Bhc3RUb2RheSAmJiAhdGhpcy5vcHRzLmVuYWJsZUFsbERheXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG5cbiAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICAgICAgY2VsbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LmhvdmVyZWQ7XG4gICAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkT2Zmc2V0O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gcmV2ZXJzZSBzZWxlY3Rpb24gZGlyZWN0aW9uXG4gICAgICAgICAgaWYgKGlzRW5kRmlyc3QgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgIWlzQ3VycmVudChjdXJyZW50LCB0aGlzLnNlbGVjdGlvbkVuZCkpIHtcbiAgICAgICAgICAgIGlmIChpc0xhdGVyKHRoaXMuc2VsZWN0aW9uRW5kLCBjdXJyZW50KSkge1xuICAgICAgICAgICAgICBjb25zdCBjZWxsQSA9IHRoaXMuY2VsbEI7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uRW5kIH0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlSGlnaGxpZ2h0RGlyZWN0aW9uKGZhbHNlLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZpcnN0QWN0aW9uKHRoaXMuc2VsZWN0aW9uRW5kLCBjZWxsQSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNFbmRGaXJzdCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmICFpc0N1cnJlbnQoY3VycmVudCwgdGhpcy5zZWxlY3Rpb25TdGFydCkpIHtcbiAgICAgICAgICAgIGlmIChpc0xhdGVyKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxCID0gdGhpcy5jZWxsQTtcbiAgICAgICAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCB9ID0gdGhpcztcblxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbih0cnVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZUZpcnN0QWN0aW9uKHRoaXMuc2VsZWN0aW9uU3RhcnQsIGNlbGxCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSh0aGlzLnNlbGVjdGlvblN0YXJ0LCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VIaWdobGlnaHREaXJlY3Rpb24odGhpcy5vcHRzLmlzUmV2ZXJzZVNlbGVjdGFibGUpO1xuXG4gICAgICAgICAgY29uc3QgaXNEaXNhYmxlZExlZnQgICA9IGNlbGwuZGF0YXNldC5kaXNhYmxlZCA9PT0gJ2xlZnQnO1xuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWRDZW50ZXIgPSBjZWxsLmRhdGFzZXQuZGlzYWJsZWQgPT09ICdjZW50ZXInO1xuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWRSaWdodCAgPSBjZWxsLmRhdGFzZXQuZGlzYWJsZWQgPT09ICdyaWdodCc7XG5cbiAgICAgICAgICBsZXQgaXNJbnZhbGlkID0gJyc7XG5cbiAgICAgICAgICBpZiAoaXNFbmRGaXJzdCAmJiBpc0Rpc2FibGVkUmlnaHQgfHwgaXNEaXNhYmxlZENlbnRlciB8fCAhaXNFbmRGaXJzdCAmJiBpc0Rpc2FibGVkTGVmdCkge1xuICAgICAgICAgICAgaXNJbnZhbGlkID0gJ2ludmFsaWQnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcbiAgICAgICAgICBsZXQgb2Zmc2V0Q2VsbDtcblxuICAgICAgICAgIGNlbGxzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQuaG92ZXJlZDtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LmhvdmVyZWRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmIChlbCA9PT0gY2VsbCkge1xuICAgICAgICAgICAgICBvZmZzZXRDZWxsID0gKHRoaXMub3B0cy5pc1JldmVyc2VTZWxlY3RhYmxlKSA/IGNlbGxzW2luZGV4IC0gMV0gOiBjZWxsc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzKG9mZnNldENlbGwpKSB7XG4gICAgICAgICAgICBvZmZzZXRDZWxsLmRhdGFzZXQuaG92ZXJlZE9mZnNldCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbGwuZGF0YXNldC5ob3ZlcmVkID0gaXNJbnZhbGlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZS5rZXkgfHwgZS5rZXlDb2RlO1xuXG4gICAgICBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gMTMpIHtcbiAgICAgICAgc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2VsZWN0IGRhdGVzIHdpdGggVGFiIGtleVxuICAgICAgaWYgKGtleSA9PT0gJ1RhYicgfHwga2V5ID09PSA5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgLy8gbWFnaWMgdHJpY2tcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbHVlXTpmb2N1cycpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwoY2VsbHMsIGNlbGwpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2VvdmVySGFuZGxlcih7IHRhcmdldDogY2VsbHNbaW5kZXhdIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5ID09PSAyNykge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBcnJvdyBrZXkgZ3JpZCBuYXZpZ2F0aW9uXG4gICAgICB0aGlzLmhhbmRsZUFycm93TmF2aWdhdGlvbihlLCBrZXksIG1vdXNlb3ZlckhhbmRsZXIpO1xuICAgIH0pO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Rpb25IYW5kbGVyKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlb3ZlckhhbmRsZXIpO1xuXG4gICAgZWwuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBjZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG4gICAgICBjZWxscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkO1xuICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5ob3ZlcmVkT2Zmc2V0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qIGVzbGludCBuby1iaXR3aXNlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiJlwiXSB9XSAqL1xuICAgICAgLy8gc2ltdWxhdGUgJ21vdXNlbGVhdmUnXG4gICAgICBpZiAoIWUucmVsYXRlZFRhcmdldFxuICAgICAgICB8fCAoZS5yZWxhdGVkVGFyZ2V0ICE9PSBlbC5ib2R5ICYmICEoZWwuYm9keS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlLnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpKSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbihpc1JldmVyc2UsIGRhdGVBcnJheSA9IG51bGwpIHtcbiAgICB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPSBpc1JldmVyc2U7XG5cbiAgICBpZiAoZGF0ZUFycmF5KSB7XG4gICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gKGlzUmV2ZXJzZSkgPyBkYXRlQXJyYXkgOiBudWxsO1xuICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgICA9IChpc1JldmVyc2UpID8gbnVsbCA6IGRhdGVBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xuICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgaXNSZXZlcnNlID8gc3R5bGVzLnJldmVyc2VkIDogc3R5bGVzLmRpcmVjdCk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBpc1JldmVyc2UgPyBzdHlsZXMuZGlyZWN0IDogc3R5bGVzLnJldmVyc2VkKTtcbiAgICB9XG4gIH1cblxuICBzdGFydERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGluZyAmJiBpc0xhdGVyKHRoaXMuc2VsZWN0aW9uU3RhcnQsIGRhdGVWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0KTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIH07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nRGlyZWN0KTtcbiAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ2xlZnQnO1xuICAgIH1cbiAgfVxuXG4gIGVuZERhdGVGaXJzdEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGluZyAmJiBpc0xhdGVyKGRhdGVWYWx1ZSwgdGhpcy5zZWxlY3Rpb25FbmQpKSB7XG4gICAgICB0aGlzLnNlbGVjdFN0YXJ0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBzdHlsZXMuc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xuICAgICAgfTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHN0eWxlcy5zZWxlY3RpbmdSZXZlcnNlZCk7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RW5kQWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAncmlnaHQnO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFN0YXJ0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0U3RhcnQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ2VuZCcpO1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGVTdHIgPSBzdHJmdGltZShkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSwgdGhpcy5sb2NhbGUuZm9ybWF0RGF0ZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxvY2FsZS5sYWJlbHMuc2VsZWN0ZWRTdGFydCB8fCAnU3RhcnQgZGF0ZTogJWRhdGUnO1xuICAgICAgdGhpcy5hbm5vdW5jZUxpdmVSZWdpb24obGFiZWwucmVwbGFjZSgnJWRhdGUnLCBkYXRlU3RyKSk7XG4gICAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1zdGFydCcsIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25TZWxlY3RTdGFydCkpIHtcbiAgICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0U3RhcnQoZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RFbmRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgdGhpcy5zZWxlY3RFbmQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ3N0YXJ0Jyk7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IHN0cmZ0aW1lKGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpLCB0aGlzLmxvY2FsZS5mb3JtYXREYXRlLCB0aGlzLmxvY2FsZSk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMubG9jYWxlLmxhYmVscy5zZWxlY3RlZEVuZCB8fCAnRW5kIGRhdGU6ICVkYXRlJztcbiAgICAgIHRoaXMuYW5ub3VuY2VMaXZlUmVnaW9uKGxhYmVsLnJlcGxhY2UoJyVkYXRlJywgZGF0ZVN0cikpO1xuICAgICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSwgdHJ1ZSksIGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpKTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vblNlbGVjdEVuZCkpIHtcbiAgICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0RW5kKGRhdGVUb0lzbyguLi5kYXRlVmFsdWUsIHRydWUpLCBkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSGlnaGxpZ2h0KCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkQm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMuc2VsZWN0UmFuZ2UoLi4udGhpcy5oaWdobGlnaHRlZEJvdW5kcyk7XG4gICAgICByYW5nZS5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5oaWdobGlnaHRlZDtcbiAgICAgICAgZGVsZXRlIGNlbGwuZGF0YXNldC5pbnZhbGlkO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgICAgdGhpcy5oYXNWYWxpZFJhbmdlICAgICA9IHRydWU7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkQm91bmRzID0gW107XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveVRvb2x0aXAoKSB7XG4gICAgaWYgKHRoaXMudG9vbHRpcFBvcHBlciAmJiBpc0Z1bmN0aW9uKHRoaXMudG9vbHRpcFBvcHBlci5kZXN0cm95KSkge1xuICAgICAgdGhpcy50b29sdGlwUG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMudG9vbHRpcFBvcHBlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzKHRoaXMuZG9tLnRvb2x0aXApKSB7XG4gICAgICAvLyBSZW1vdmUgYXJpYS1kZXNjcmliZWRieSBmcm9tIHRoZSBjZWxsIGxpbmtlZCB0byB0aGlzIHRvb2x0aXBcbiAgICAgIGNvbnN0IGRlc2NyaWJlZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihgW2FyaWEtZGVzY3JpYmVkYnk9XCIke3RoaXMudG9vbHRpcElkfVwiXWApO1xuICAgICAgaWYgKGRlc2NyaWJlZCkge1xuICAgICAgICBkZXNjcmliZWQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICB9XG4gICAgICBkZXN0cm95RWxlbWVudCh0aGlzLmRvbS50b29sdGlwKTtcbiAgICB9XG4gIH1cblxuICBhbm5vdW5jZUxpdmVSZWdpb24obWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmRvbS5saXZlUmVnaW9uKSB7XG4gICAgICB0aGlzLmRvbS5saXZlUmVnaW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBcnJvd05hdmlnYXRpb24oZSwga2V5LCBtb3VzZW92ZXJIYW5kbGVyKSB7XG4gICAgY29uc3QgZm9jdXNlZENlbGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbHVlXTpmb2N1cycpXG4gICAgICB8fCAoZS50YXJnZXQgJiYgdHlwZW9mIGUudGFyZ2V0LmNsb3Nlc3QgPT09ICdmdW5jdGlvbicgPyBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS12YWx1ZV0nKSA6IG51bGwpO1xuXG4gICAgaWYgKCFmb2N1c2VkQ2VsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFycm93S2V5cyA9IHtcbiAgICAgIEFycm93TGVmdDogLTEsIEFycm93UmlnaHQ6IDEsXG4gICAgICBBcnJvd1VwOiAtNywgQXJyb3dEb3duOiA3LFxuICAgICAgMzc6IC0xLCAzOTogMSwgMzg6IC03LCA0MDogN1xuICAgIH07XG4gICAgY29uc3QgaG9tZUVuZEtleXMgPSB7IEhvbWU6ICdob21lJywgRW5kOiAnZW5kJywgMzY6ICdob21lJywgMzU6ICdlbmQnIH07XG4gICAgY29uc3QgcGFnZUtleXMgPSB7IFBhZ2VVcDogLTEsIFBhZ2VEb3duOiAxLCAzMzogLTEsIDM0OiAxIH07XG5cbiAgICBpZiAoYXJyb3dLZXlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY2VsbHMuaW5kZXhPZihmb2N1c2VkQ2VsbCk7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGN1cnJlbnRJbmRleCArIGFycm93S2V5c1trZXldO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMCAmJiB0YXJnZXRJbmRleCA8IGNlbGxzLmxlbmd0aCkge1xuICAgICAgICBjZWxsc1t0YXJnZXRJbmRleF0uZm9jdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIG1vdXNlb3ZlckhhbmRsZXIoeyB0YXJnZXQ6IGNlbGxzW3RhcmdldEluZGV4XSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaG9tZUVuZEtleXNba2V5XSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgcm93ID0gZm9jdXNlZENlbGwuY2xvc2VzdCgnW3JvbGU9XCJyb3dcIl0nKTtcblxuICAgICAgaWYgKHJvdykge1xuICAgICAgICBjb25zdCByb3dDZWxscyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpKTtcblxuICAgICAgICBpZiAocm93Q2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gaG9tZUVuZEtleXNba2V5XSA9PT0gJ2hvbWUnID8gcm93Q2VsbHNbMF0gOiByb3dDZWxsc1tyb3dDZWxscy5sZW5ndGggLSAxXTtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgICBtb3VzZW92ZXJIYW5kbGVyKHsgdGFyZ2V0IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZUtleXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXlWYWx1ZSA9IGZvY3VzZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuICAgICAgY29uc3QgZm9jdXNlZE1vbnRoID0gZm9jdXNlZENlbGwuY2xvc2VzdCgnLmpzLW1vbnRoJyk7XG4gICAgICBjb25zdCBvcmlnaW5TbG90SW5kZXggPSBmb2N1c2VkTW9udGggPyBmb2N1c2VkTW9udGguc2xvdEluZGV4IDogbnVsbDtcblxuICAgICAgaWYgKHBhZ2VLZXlzW2tleV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5kb20uZm9yd2FyZC5jbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb20uYmFjay5jbGljaygpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZnRlciByZS1yZW5kZXIsIGZvY3VzIHRoZSBzYW1lIGRheSBudW1iZXIgb3IgbGFzdCBhdmFpbGFibGUgY2VsbFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRNb250aCA9IG51bGw7XG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xuXG4gICAgICAgIGlmIChvcmlnaW5TbG90SW5kZXggIT09IG51bGwgJiYgdGhpcy5kb20ubW9udGhzKSB7XG4gICAgICAgICAgdGFyZ2V0TW9udGggPSB0aGlzLmRvbS5tb250aHMuZmluZCgobW9udGhFbCkgPT4gbW9udGhFbC5zbG90SW5kZXggPT09IG9yaWdpblNsb3RJbmRleCkgfHwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRNb250aCkge1xuICAgICAgICAgIHRhcmdldCA9IHRhcmdldE1vbnRoLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXZhbHVlPVwiJHtkYXlWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtb250aENlbGxzID0gdGFyZ2V0TW9udGgucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIGlmIChtb250aENlbGxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSBtb250aENlbGxzW21vbnRoQ2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBuZXdDZWxscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJyk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0NlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAobmV3Q2VsbHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykgPT09IGRheVZhbHVlKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IG5ld0NlbGxzW2ldO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXRhcmdldCAmJiBuZXdDZWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ld0NlbGxzW25ld0NlbGxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodHMgdGhlIHJhbmdlIG9mIGNlbGxzIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMuXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtBcnJheX0gc3RhcnQgZS5nLiBbMjAxNiwgMCwgMV1cbiAgICogQHBhcmFtIHtBcnJheX0gZW5kIFsyMDE2LCAxLCAzXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRoZSByYW5nZSBpcyB2YWxpZCBvciBub3QuXG4gICAqL1xuICBoaWdoTGlnaHRSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgeyByYW5nZSwgaXNWYWxpZCB9ID0gdGhpcy5zZWxlY3RSYW5nZShzdGFydCwgZW5kKTtcbiAgICBjb25zdCB7IG9wdHMgfSAgICAgICAgICAgPSB0aGlzO1xuICAgIGxldCB7IG1pblN0YXksIG1heFN0YXkgfSA9IG9wdHM7XG4gICAgbGV0IGludmFsaWRSYW5nZU1lc3NhZ2U7XG5cbiAgICBpZiAoaXNBcnJheShyYW5nZSkpIHtcbiAgICAgIGlmIChvcHRzLnJlbnRhbElkKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlV2l0aG91dExhc3QgPSByYW5nZS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgaWYgKCFvcHRzLmFsbG93U2hvcnRlck1pblN0YXlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGJpZ2dlc3QgbWluU3RheSB2YWx1ZSBpbiB0aGUgcmFuZ2VcbiAgICAgICAgICBjb25zdCBjZWxscyA9IHJhbmdlV2l0aG91dExhc3QubWFwKChjZWxsKSA9PiBjZWxsLmRhdGFzZXQubWluU3RheSB8fCBtaW5TdGF5KTtcbiAgICAgICAgICBtaW5TdGF5ID0gTWF0aC5tYXgoLi4uY2VsbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRzLmFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbikge1xuICAgICAgICAgIC8vIGdldCB0aGUgYmlnZ2VzdCBtYXhTdGF5IHZhbHVlIGluIHRoZSByYW5nZVxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gcmFuZ2VXaXRob3V0TGFzdC5tYXAoKGNlbGwpID0+IGNlbGwuZGF0YXNldC5tYXhTdGF5IHx8IG1heFN0YXkpO1xuICAgICAgICAgIG1heFN0YXkgPSBNYXRoLm1heCguLi5jZWxscyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgdGhhdCByYW5nZSBpcyB2YWxpZCBhbmQgbG9uZ2VyIHRoYW4gbWluU3RheSBhbmQgc2hvcnRlciB0aGFuIG1heFN0YXlcbiAgICAgIGNvbnN0IGhhc1ZhbGlkRGF5cyAgICA9IG9wdHMucmVudGFsSWQgPyBpc1ZhbGlkIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGhhc1ZhbGlkTWluU3RheSA9IHJhbmdlLmxlbmd0aCA+IG1pblN0YXk7XG4gICAgICBjb25zdCBoYXNWYWxpZE1heFN0YXkgPSByYW5nZS5sZW5ndGggPCBtYXhTdGF5O1xuXG4gICAgICB0aGlzLmhhc1ZhbGlkUmFuZ2UgPSBoYXNWYWxpZERheXMgJiYgaGFzVmFsaWRNaW5TdGF5ICYmIGhhc1ZhbGlkTWF4U3RheTtcblxuICAgICAgaWYgKCFoYXNWYWxpZE1pblN0YXkpIHtcbiAgICAgICAgaW52YWxpZFJhbmdlTWVzc2FnZSA9IHRGb3JtYXR0ZXIobWluU3RheSwgdGhpcy5sb2NhbGUuaGFzSW52YWxpZE1pblN0YXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc1ZhbGlkTWF4U3RheSkge1xuICAgICAgICBpbnZhbGlkUmFuZ2VNZXNzYWdlID0gdEZvcm1hdHRlcihtYXhTdGF5LCB0aGlzLmxvY2FsZS5oYXNJbnZhbGlkTWF4U3RheSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFzVmFsaWREYXlzKSB7XG4gICAgICAgIGludmFsaWRSYW5nZU1lc3NhZ2UgPSB0aGlzLmxvY2FsZS5oYXNJbnZhbGlkRGF5cztcbiAgICAgIH1cblxuICAgICAgcmFuZ2UubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gaW5kZXggKyAxID09PSByYW5nZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaGlnaGxpZ2h0ZWQgPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyaWdodCkge1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmhpZ2hsaWdodGVkID0gJ2NlbnRlcic7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW52YWxpZCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW52YWxpZCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5pbnZhbGlkID0gJ2NlbnRlcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcFBvc2l0aW9uID0gKHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZSkgPyBsZWZ0IDogcmlnaHQ7XG5cbiAgICAgICAgaWYgKHRvb2x0aXBQb3NpdGlvbiAmJiB0aGlzLmVsLmNvbnRhaW5zKGNlbGwpICYmICF0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmRvbS50b29sdGlwID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMudG9vbHRpcCkpO1xuICAgICAgICAgIHRoaXMuZG9tLnRvb2x0aXAuaWQgPSB0aGlzLnRvb2x0aXBJZDtcbiAgICAgICAgICB0aGlzLmRvbS50b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUwgPSBpbnZhbGlkUmFuZ2VNZXNzYWdlO1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGhpcy50b29sdGlwSWQpO1xuXG4gICAgICAgICAgdGhpcy5sb2dnZXIoYGludmFsaWRSYW5nZU1lc3NhZ2U6ICR7aW52YWxpZFJhbmdlTWVzc2FnZX0gKCR7c3RhcnR9IC0gJHtlbmR9KWAsICd3YXJuJyk7XG5cbiAgICAgICAgICB0aGlzLnRvb2x0aXBQb3BwZXIgPSBjcmVhdGVQb3NpdGlvbmVyKGNlbGwsIHRoaXMuZG9tLnRvb2x0aXAsIHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIG9mZnNldDogWzAsIDBdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmhpZ2hsaWdodGVkQm91bmRzID0gW3N0YXJ0LCBlbmRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmhhc1ZhbGlkUmFuZ2U7XG4gIH1cblxuICAvKiogUmVzZXRzIHNlbGVjdGlvbiwgcmVtb3ZlcyBoaWdobGlnaHRzXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge0NhbGVuZGFyfVxuICAgKi9cbiAgcmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmVtaXQoJ3NlbGVjdGlvbi1yZXNldCcsIHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMub25DbGVhclNlbGVjdGlvbikpIHtcbiAgICAgIHRoaXMub3B0cy5vbkNsZWFyU2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGlvbkVuZCAgID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmNlbGxBKSB7XG4gICAgICB0aGlzLmNlbGxBID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jZWxsQikge1xuICAgICAgdGhpcy5jZWxsQiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5pc0Ryb3BEb3duICYmIHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIHRoaXMub3B0cy5lbFN0YXJ0QXQudmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vcHRzLmVsRW5kQXQudmFsdWUgICA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xuICAgICAgICB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IHJhbmdlIGZyb20gdGhlIHRyZWVcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc3RhcnQgZS5nLiBbMjAxNiwgMCwgMV1cbiAgICogQHBhcmFtIHtBcnJheX0gZW5kIFsyMDE2LCAxLCAzXVxuICAgKiBAcmV0dXJucyB7e3JhbmdlOiBBcnJheSwgaXNWYWxpZDoge0Jvb2xlYW59fX1cbiAgICovXG4gIHNlbGVjdFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoaXNMYXRlcihzdGFydCwgZW5kKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY1RyZWUuc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByYW5nZTogbnVsbCxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdFN0YXJ0KGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBkYXRlVmFsdWU7XG5cbiAgICBpZiAoY2VsbCkge1xuICAgICAgdGhpcy5jZWxsQSA9IGNlbGw7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZVRvSW5wdXQoJ3N0YXJ0JywgZGF0ZVZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdEVuZChkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IGRhdGVWYWx1ZTtcblxuICAgIGlmIChjZWxsKSB7XG4gICAgICB0aGlzLmNlbGxCID0gY2VsbDtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlVG9JbnB1dCgnZW5kJywgZGF0ZVZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZVRyZWUoeWVhclN0YXJ0LCBtb250aFN0YXJ0LCB0aW1lcywgaGVhZGVyVGVtcGxhdGUpIHtcbiAgICBjb25zdCBtb250aHMgPSBbXTtcbiAgICBjb25zdCB0cmVlICAgPSB7fTtcbiAgICBsZXQgbW9udGhFbmQgPSBtb250aFN0YXJ0O1xuICAgIGxldCB5ZWFyRW5kICA9IHllYXJTdGFydDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbURvbSA9IHRoaXMuZG9tTW9udGgoeWVhckVuZCwgbW9udGhFbmQsIGhlYWRlclRlbXBsYXRlLCBpKTtcblxuICAgICAgbW9udGhzLnB1c2gobURvbSk7XG5cbiAgICAgIGlmICghdHJlZVt5ZWFyRW5kXSkge1xuICAgICAgICB0cmVlW3llYXJFbmRdID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJlZVt5ZWFyRW5kXVttb250aEVuZF0pIHtcbiAgICAgICAgdHJlZVt5ZWFyRW5kXVttb250aEVuZF0gPSBtRG9tLmRheUVsZW1lbnRzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9udGhFbmQgPiAxMCkge1xuICAgICAgICBtb250aEVuZCA9IDA7XG4gICAgICAgIHllYXJFbmQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vbnRoRW5kICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWUsXG4gICAgICB5ZWFyRW5kLFxuICAgICAgbW9udGhFbmQsXG4gICAgICBtb250aHNcbiAgICB9O1xuICB9XG5cbiAgZG9tTW9udGgoeWVhciwgbW9udGgsIGhlYWRlclRlbXBsYXRlLCBzbG90SW5kZXggPSAwKSB7XG4gICAgY29uc3QgbG9uZ01vbnRoTmFtZXMgPSB0aGlzLmxvY2FsZS5sb25nTW9udGhOYW1lc1ttb250aF07XG4gICAgY29uc3QgbW9udGhEb20gPSBlbGVtZW50RnJvbVN0cmluZyh0ZW1wbGF0ZXMubW9udGgoe1xuICAgICAgbGFiZWw6IGxvbmdNb250aE5hbWVzLFxuICAgICAgY2FwdGlvbjogdGhpcy5jYXB0aW9uVGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgpLFxuICAgICAgaGVhZGVyOiBoZWFkZXJUZW1wbGF0ZSxcbiAgICAgIGJvZHk6IHRoaXMuZGF5c1RlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoKVxuICAgIH0pKTtcblxuICAgIG1vbnRoRG9tLmJvZHkgPSBtb250aERvbS5xdWVyeVNlbGVjdG9yKGAuJHtzdHlsZXMuYm9keX1gKTtcblxuICAgIG1vbnRoRG9tLm1vbnRoICAgICAgID0gbW9udGg7XG4gICAgbW9udGhEb20ueWVhciAgICAgICAgPSB5ZWFyO1xuICAgIG1vbnRoRG9tLnNsb3RJbmRleCAgID0gc2xvdEluZGV4O1xuICAgIG1vbnRoRG9tLmRheUVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChtb250aERvbS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWx1ZV0nKSk7XG5cbiAgICByZXR1cm4gbW9udGhEb207XG4gIH1cblxuICBjYXB0aW9uVGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzLnllYXJQaWNrZXIoe1xuICAgICAgbGFiZWw6IGAke3RoaXMubG9jYWxlLmxvbmdNb250aE5hbWVzW21vbnRoXX0gJHt5ZWFyfWAsXG4gICAgICBjaGV2cm9uRG93bklkOiBgJHt0aGlzLkNTU19QUkVGSVh9Q2hldnJvbkRvd25gXG4gICAgfSk7XG4gIH1cblxuICBtaW5pbXVtU2VsZWN0YWJsZVllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQ2xhbXBUb0N1cnJlbnREYXRlKCkgPyB0aGlzLm9wdHMuY3VycmVudERhdGVbMF0gOiBudWxsO1xuICB9XG5cbiAgbWluaW11bVNlbGVjdGFibGVNb250aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRDbGFtcFRvQ3VycmVudERhdGUoKSA/IHRoaXMub3B0cy5jdXJyZW50RGF0ZVsxXSA6IG51bGw7XG4gIH1cblxuICBzaG91bGRDbGFtcFRvQ3VycmVudERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0cy5pc0JhY2tEaXNhYmxlZCAmJiAhdGhpcy5vcHRzLmVuYWJsZUFsbERheXM7XG4gIH1cblxuICBjbGFtcFZpc2libGVNb250aFN0YXJ0KHllYXIsIG1vbnRoKSB7XG4gICAgY29uc3QgbWluaW11bVllYXIgPSB0aGlzLm1pbmltdW1TZWxlY3RhYmxlWWVhcigpO1xuICAgIGNvbnN0IG1pbmltdW1Nb250aCA9IHRoaXMubWluaW11bVNlbGVjdGFibGVNb250aCgpO1xuXG4gICAgaWYgKG1pbmltdW1ZZWFyID09PSBudWxsIHx8IG1pbmltdW1Nb250aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHsgeWVhciwgbW9udGggfTtcbiAgICB9XG5cbiAgICBpZiAoeWVhciA8IG1pbmltdW1ZZWFyIHx8ICh5ZWFyID09PSBtaW5pbXVtWWVhciAmJiBtb250aCA8IG1pbmltdW1Nb250aCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IG1pbmltdW1ZZWFyLFxuICAgICAgICBtb250aDogbWluaW11bU1vbnRoXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHllYXIsIG1vbnRoIH07XG4gIH1cblxuICBzaGlmdE1vbnRoKHllYXIsIG1vbnRoLCBvZmZzZXQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTW9udGggPSBtb250aCArIG9mZnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiB5ZWFyICsgTWF0aC5mbG9vcihub3JtYWxpemVkTW9udGggLyAxMiksXG4gICAgICBtb250aDogKChub3JtYWxpemVkTW9udGggJSAxMikgKyAxMikgJSAxMlxuICAgIH07XG4gIH1cblxuICBoZWFkZXJUZW1wbGF0ZVN0cmluZygpIHtcbiAgICAvLyBqdXN0IHRvIG1ha2UgbGlmZSBlYXNpZXIgd2l0aCBzdGFydCBvZiB0aGUgd2VlayBjYWxjdWxhdGlvblxuICAgIGNvbnN0IGhlYWRlciAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICBjb25zdCB3ZWVrZGF5c0xhYmVsc0V4dGVuZGVkID0gdGhpcy5sb2NhbGUuc2hvcnRXZWVrZGF5TmFtZXMuY29uY2F0KHRoaXMubG9jYWxlLnNob3J0V2Vla2RheU5hbWVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRzLmRheXNQZXJXZWVrOyBpICs9IDEpIHtcbiAgICAgIGhlYWRlci5wdXNoKHRlbXBsYXRlcy53ZWVrRGF5TGFiZWwod2Vla2RheXNMYWJlbHNFeHRlbmRlZFtpICsgdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrXSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyLmpvaW4oJycpO1xuICB9XG5cbiAgZGF5c1RlbXBsYXRlU3RyaW5nKHllYXIsIG1vbnRoKSB7XG4gICAgY29uc3Qgc3RhcnRPZk1vbnRoICA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCAgID0gbW9udGhMZW5ndGgoeWVhciwgbW9udGgpO1xuICAgIGNvbnN0IHJvd1RlbXBsYXRlICAgPSB0ZW1wbGF0ZXMud2Vla1JvdztcbiAgICBjb25zdCByb3dDbG9zZSAgICAgID0gcm93VGVtcGxhdGUoKS5jbG9zZTtcbiAgICBjb25zdCB3ZWVrU2hpZnQgICAgID0gKHRoaXMub3B0cy5kYXlzUGVyV2VlayAtIHRoaXMub3B0cy5zdGFydE9mV2Vlayk7XG4gICAgbGV0IG1vbnRoVGVtcGxhdGUgICA9ICcnO1xuXG4gICAgbGV0IHJvd3MgICAgICAgICAgICAgICA9IDU7XG4gICAgbGV0IHdlZWtTaGlmdENvcnJlY3RlZCA9IHN0YXJ0T2ZNb250aCArIHdlZWtTaGlmdDtcbiAgICBsZXQgZGF5Q291bnRlciAgICAgICAgID0gMDtcbiAgICBsZXQgZGF5T2ZNb250aCAgICAgICAgID0gMTtcblxuICAgIC8vIGRvbid0IHJlbmRlciBmdWxsIGVtcHR5IHdlZWtcbiAgICBpZiAod2Vla1NoaWZ0Q29ycmVjdGVkID49IHRoaXMub3B0cy5kYXlzUGVyV2Vlaykge1xuICAgICAgd2Vla1NoaWZ0Q29ycmVjdGVkIC09IHRoaXMub3B0cy5kYXlzUGVyV2VlaztcbiAgICB9XG5cbiAgICAvLyB0cnkgdG8gZmlndXJlIG91dCBpZiA1IHJvd3MgaXMgZW5vdWdoIGZvciB0aGUgbW9udGhcbiAgICBpZiAocm93cyAqIHRoaXMub3B0cy5kYXlzUGVyV2VlayA8IHdlZWtTaGlmdENvcnJlY3RlZCArIGRheXNJbk1vbnRoKSB7XG4gICAgICByb3dzID0gNjtcbiAgICB9XG5cbiAgICAvLyBmb3IgZWFjaCB3ZWVrICg1IG9yIDYpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICs9IDEpIHtcbiAgICAgIGxldCB3ZWVrID0gcm93VGVtcGxhdGUoaSkub3BlbjtcbiAgICAgIC8vIG9wZW4gdGFnIDx0cj5cblxuICAgICAgLy8gcHVzaCBkYXlzIGluIHdlZWtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHRzLmRheXNQZXJXZWVrOyBqICs9IDEpIHtcbiAgICAgICAgLy8gcHVzaGluZyBhY3R1YWwgZGF5cyAxLi4uZGF5c0luTW9udGhcbiAgICAgICAgaWYgKChkYXlDb3VudGVyID49IHdlZWtTaGlmdENvcnJlY3RlZCkgJiYgZGF5T2ZNb250aCA8PSBkYXlzSW5Nb250aCkge1xuICAgICAgICAgIHdlZWsgKz0gdGhpcy5kYXlUZW1wbGF0ZVN0cmluZyh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCk7XG4gICAgICAgICAgZGF5T2ZNb250aCArPSAxO1xuICAgICAgICAgIC8vIHB1c2hpbmcgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgZGF5c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWsgKz0gdGVtcGxhdGVzLndlZWtEYXlQbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRheUNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGNsb3NlIHRhZyA8L3RyPiBvZiB3ZWVrXG4gICAgICB3ZWVrICs9IHJvd0Nsb3NlO1xuICAgICAgLy8gcHVzaCBjb21wbGV0ZWQgd2VlayB0byBtb250aCB0ZW1wbGF0ZVxuICAgICAgbW9udGhUZW1wbGF0ZSArPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aFRlbXBsYXRlO1xuICB9XG5cbiAgZGF5VGVtcGxhdGVTdHJpbmcoeWVhciwgbW9udGgsIGRheU9mTW9udGgpIHtcbiAgICBjb25zdCB7XG4gICAgICBtaW5TdGF5LFxuICAgICAgbWF4U3RheSxcbiAgICAgIHJhdGU6IGRheVJhdGUsXG4gICAgICBpc0F2YWlsYWJsZSxcbiAgICAgIGlzQXZhaWxhYmxlT3V0OiBkYXlJc0F2YWlsYWJsZU91dCxcbiAgICAgIGlzTW9ybmluZ0Jsb2NrZWQ6IGRheUlzTW9ybmluZ0Jsb2NrZWRcbiAgICB9ID0gdGhpcy5jVHJlZS5nZXREYXkoeWVhciwgbW9udGgsIGRheU9mTW9udGgpIHx8IHt9O1xuXG4gICAgY29uc3QgcmF0ZSA9ICh0aGlzLm9wdHMuc2hvd1JhdGVzICYmIGRheVJhdGUpID8gZGF5UmF0ZSA6IDA7XG5cbiAgICBsZXQgaXNEaXNhYmxlZCA9ICFpc0F2YWlsYWJsZTtcbiAgICBsZXQgaXNBdmFpbGFibGVPdXQgPSBkYXlJc0F2YWlsYWJsZU91dDtcbiAgICBsZXQgaXNNb3JuaW5nQmxvY2tlZCA9IGRheUlzTW9ybmluZ0Jsb2NrZWQ7XG5cbiAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSB0aGlzLm9wdHM7XG4gICAgY29uc3QgZGF0ZUFycmF5ICAgICAgID0gW3llYXIsIG1vbnRoLCBkYXlPZk1vbnRoXTtcbiAgICBjb25zdCBpc0N1cnJlbnREYXkgICAgPSBpc0N1cnJlbnQoZGF0ZUFycmF5LCBjdXJyZW50RGF0ZSk7XG5cbiAgICAvLyBkaXNhYmxlIHBhc3QgZGF0ZXNcbiAgICBpZiAoaXNMYXRlcihkYXRlQXJyYXksIGN1cnJlbnREYXRlKSkge1xuICAgICAgaXNEaXNhYmxlZCAgICAgICAgPSB0cnVlO1xuICAgICAgaXNNb3JuaW5nQmxvY2tlZCAgPSBudWxsO1xuICAgICAgaXNBdmFpbGFibGVPdXQgICAgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGRpc2FibGUgY3VycmVudCBkYXkgbW9ybmluZ1xuICAgIGlmIChpc0N1cnJlbnREYXkpIHtcbiAgICAgIGlmICghKGlzRGlzYWJsZWQgJiYgaXNBdmFpbGFibGVPdXQgPT09IG51bGwgJiYgaXNNb3JuaW5nQmxvY2tlZCA9PT0gbnVsbCkpIHtcbiAgICAgICAgaXNNb3JuaW5nQmxvY2tlZCAgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc0F2YWlsYWJsZU91dCA9PT0gbnVsbCkge1xuICAgICAgICAgIGlzQXZhaWxhYmxlT3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vdCByZW50YWxJZCBhbmQgbm8gbWFwcywganVzdCByZW5kZXIgcGxhaW4gY2FsZW5kYXJcbiAgICBpZiAoIXRoaXMub3B0cy5yZW50YWxJZCB8fCB0aGlzLm9wdHMuZW5hYmxlQWxsRGF5cykge1xuICAgICAgaWYgKGlzTGF0ZXIoY3VycmVudERhdGUsIGRhdGVBcnJheSkpIHtcbiAgICAgICAgaXNEaXNhYmxlZCAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgaXNBdmFpbGFibGVPdXQgICAgPSB0cnVlO1xuICAgICAgICBpc01vcm5pbmdCbG9ja2VkICA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDdXJyZW50RGF5KSB7XG4gICAgICAgIGlzRGlzYWJsZWQgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgaXNNb3JuaW5nQmxvY2tlZCAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQXZhaWxhYmxlSW4gPSBpc01vcm5pbmdCbG9ja2VkID09IGZhbHNlO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQgJiYgaXNBdmFpbGFibGVJbikge1xuICAgICAgaXNEaXNhYmxlZCA9ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKGlzTW9ybmluZ0Jsb2NrZWQpIHtcbiAgICAgIGlzRGlzYWJsZWQgPSAncmlnaHQnO1xuICAgIH0gZWxzZSBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgaXNEaXNhYmxlZCA9ICdjZW50ZXInO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVTdHIgPSBzdHJmdGltZShkYXRlVG9Jc28oeWVhciwgbW9udGgsIGRheU9mTW9udGgpLCB0aGlzLmxvY2FsZS5mb3JtYXREYXRlLCB0aGlzLmxvY2FsZSk7XG4gICAgY29uc3QgcmF0ZVQgPSByYXRlID8gY3VycmVuY3lGb3JtYXR0ZXIoTWF0aC5yb3VuZChyYXRlKSwgdGhpcy5vcHRzLmxhbmcsIHRoaXMub3B0cy5jdXJyZW5jeSB8fCB0aGlzLmxvY2FsZS5jdXJyZW5jeSkgOiBmYWxzZTtcbiAgICBjb25zdCBtaW5TdGF5VCA9ICh0aGlzLm9wdHMuc2hvd01pblN0YXkgJiYgbWluU3RheSkgPyB0Rm9ybWF0dGVyKG1pblN0YXksIHRoaXMubG9jYWxlLm1pblN0YXkpIDogZmFsc2U7XG4gICAgY29uc3QgbWF4U3RheVQgPSAodGhpcy5vcHRzLnNob3dNYXhTdGF5ICYmIG1heFN0YXkpID8gdEZvcm1hdHRlcihtYXhTdGF5LCB0aGlzLmxvY2FsZS5tYXhTdGF5KSA6IGZhbHNlO1xuXG4gICAgLy8gQnVpbGQgZW5yaWNoZWQgYXJpYS1sYWJlbCBmb3Igc2NyZWVuIHJlYWRlcnNcbiAgICBjb25zdCBhcmlhTGFiZWxQYXJ0cyA9IFtkYXRlU3RyXTtcblxuICAgIGlmIChpc0N1cnJlbnREYXkpIHtcbiAgICAgIGFyaWFMYWJlbFBhcnRzLnB1c2godGhpcy5sb2NhbGUubGFiZWxzLnRvZGF5IHx8ICd0b2RheScpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBhcmlhTGFiZWxQYXJ0cy5wdXNoKHRoaXMubG9jYWxlLmxhYmVscy51bmF2YWlsYWJsZSB8fCAndW5hdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAocmF0ZVQpIHtcbiAgICAgIGFyaWFMYWJlbFBhcnRzLnB1c2gocmF0ZVQpO1xuICAgIH1cblxuICAgIGlmIChtaW5TdGF5VCkge1xuICAgICAgYXJpYUxhYmVsUGFydHMucHVzaChtaW5TdGF5VCk7XG4gICAgfVxuXG4gICAgaWYgKG1heFN0YXlUKSB7XG4gICAgICBhcmlhTGFiZWxQYXJ0cy5wdXNoKG1heFN0YXlUKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbGFiZWw6IGRheU9mTW9udGgsXG4gICAgICBkYXRlOiBkYXRlU3RyLFxuICAgICAgYXJpYUxhYmVsOiBhcmlhTGFiZWxQYXJ0cy5qb2luKCcsICcpLFxuICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBpc0F2YWlsYWJsZUluLFxuICAgICAgaXNBdmFpbGFibGVPdXQsXG4gICAgICBpc0N1cnJlbnREYXksXG4gICAgICBtaW5TdGF5LFxuICAgICAgbWluU3RheVQsXG4gICAgICBtYXhTdGF5LFxuICAgICAgbWF4U3RheVQsXG4gICAgICByYXRlLFxuICAgICAgcmF0ZVQsXG4gICAgICB0YWJpbmRleDogdGhpcy5vcHRzLnNlbGVjdGFibGUgPyAwIDogLTFcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlcy53ZWVrRGF5KG9wdGlvbnMpO1xuICB9XG5cbiAgZGVzdHJveU1vbnRocygpIHtcbiAgICB0aGlzLmNsb3NlWWVhclBpY2tlcigpO1xuXG4gICAgaWYgKHRoaXMuZG9tICYmIGlzQXJyYXkodGhpcy5kb20ubW9udGhzKSkge1xuICAgICAgdGhpcy5kb20ubW9udGhzLmZvckVhY2goKG0pID0+IGRlc3Ryb3lFbGVtZW50KG0pKTtcbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlVmlld3BvcnRFdmVudHMoKTtcbiAgICB0aGlzLmNsb3NlWWVhclBpY2tlcigpO1xuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgIGlmICh0aGlzLmNhbERyb3AgJiYgaXNGdW5jdGlvbih0aGlzLmNhbERyb3AuZGVzdHJveSkpIHtcbiAgICAgIHRoaXMuY2FsRHJvcC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNhbERyb3AgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uRG9jdW1lbnRDbGljaykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25Eb2N1bWVudEtleWRvd24pIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRG9jdW1lbnRLZXlkb3duKTtcbiAgICAgIHRoaXMub25Eb2N1bWVudEtleWRvd24gPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0cm95RWxlbWVudCh0aGlzLmVsKTtcbiAgfVxuXG4gIGxvYWRNYXBzKGlkKSB7XG4gICAgdGhpcy5sb2dnZXIoJ2xvYWRpbmcgbWFwcycpO1xuICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuXG4gICAgY29uc3Qgb25TdWNjZXNzID0gKG1hcHMpID0+IHtcbiAgICAgIGlmIChpc0FycmF5KG1hcHMuZGF0YSkgJiYgbWFwcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5kaXNhYmxlQXZhaWxhYml0eU1hcCkge1xuICAgICAgICAgIG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzLmF2YWlsYWJpbGl0eSA9IG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzLmF2YWlsYWJpbGl0eS5yZXBsYWNlKC9bMC05XS9nLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0cy5jdXJyZW5jeSA9IHRoaXMub3B0cy5jdXJyZW5jeSB8fCBtYXBzLmRhdGFbMF0uYXR0cmlidXRlcy5jdXJyZW5jeTtcbiAgICAgICAgdGhpcy5hZGRNYXBzKG1hcHMuZGF0YVswXS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5tYXBzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnbWFwcy1sb2FkZWQnLCBtYXBzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuICAgICAgICB0aGlzLmxvZ2dlcignZXhwZWN0cyBqc29uLWFwaSBkYXRhIGZvcm1hdCcsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XG4gICAgICB0aGlzLmVtaXQoJ21hcHMtZXJyb3InKTtcbiAgICAgIHRoaXMubG9nZ2VyKCdTZXJ2ZXIgZXJyb3IgaGFwcGVuZWQnLCAnZXJyb3InKTtcbiAgICB9O1xuXG4gICAgZmV0Y2godGhpcy5vcHRzLnJlbnRhbFVybChpZCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKG9uU3VjY2VzcylcbiAgICAgIC5jYXRjaChvbkVycm9yKTtcbiAgfVxuXG4gIGNvbXBsZXRlU2VsZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wdHMuaXNTaW5nbGVJbnB1dCkge1xuICAgICAgY29uc3Qgc2luZ2xlSW5wdXREYXRlRm9ybWF0ID0gdGhpcy5vcHRzLnNpbmdsZUlucHV0RGF0ZUZvcm1hdCB8fCB0aGlzLmxvY2FsZS5mb3JtYXREYXRlO1xuXG4gICAgICBjb25zdCBkYXRlU3RhcnQgPSBzdHJmdGltZShkYXRlVG9Jc28oLi4udGhpcy5zZWxlY3Rpb25TdGFydCksIHNpbmdsZUlucHV0RGF0ZUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgICAgY29uc3QgZGF0ZUVuZCAgID0gc3RyZnRpbWUoZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uRW5kKSwgc2luZ2xlSW5wdXREYXRlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG5cbiAgICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0LnZhbHVlID0gYCR7ZGF0ZVN0YXJ0fSAke3RoaXMub3B0cy5zaW5nbGVJbnB1dFNlcGFyYXRvcn0gJHtkYXRlRW5kfWA7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tY29tcGxldGVkJywgdGhpcy5zZWxlY3Rpb25TdGFydCwgdGhpcy5zZWxlY3Rpb25FbmQpO1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy5vblNlbGVjdGlvbkNvbXBsZXRlZCkpIHtcbiAgICAgIHRoaXMub3B0cy5vblNlbGVjdGlvbkNvbXBsZXRlZChcbiAgICAgICAgZGF0ZVRvSXNvKC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQsIHRydWUpLCBkYXRlVG9Jc28oLi4udGhpcy5zZWxlY3Rpb25FbmQsIHRydWUpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDYWxlbmRhckRyb3AoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRGcm9tU3RyaW5nKCc8ZGl2PjwvZGl2PicpO1xuICAgIHRoaXMuZWxUYXJnZXQgPSB0aGlzLm9wdHMuZWw7XG4gICAgdGhpcy5lbCAgICAgICA9IGVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5vcHRzLmVsU3RhcnRBdCAgICAgPSB0aGlzLm9wdHMuZWxTdGFydEF0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuQ1NTX1BSRUZJWH1fX3N0YXJ0LWF0YCk7XG4gICAgdGhpcy5vcHRzLmVsRW5kQXQgICAgICAgPSB0aGlzLm9wdHMuZWxFbmRBdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLkNTU19QUkVGSVh9X19lbmQtYXRgKTtcbiAgICB0aGlzLm9wdHMuZWxTaW5nbGVJbnB1dCA9IHRoaXMub3B0cy5lbFNpbmdsZUlucHV0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuQ1NTX1BSRUZJWH1fX3NpbmdsZS1pbnB1dGApO1xuXG4gICAgaWYgKHRoaXMub3B0cy5oaWRkZW5FbEZvcm1hdCkge1xuICAgICAgW3RoaXMub3B0cy5lbFN0YXJ0QXQsIHRoaXMub3B0cy5lbEVuZEF0XS5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGlucHV0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dCk7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICBoaWRkZW5JbnB1dC5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgaGlkZGVuSW5wdXQuaGlkZGVuICAgID0gdHJ1ZTtcblxuICAgICAgICAoaSkgPyB0aGlzLmhpZGRlbkVsRW5kQXQgPSBoaWRkZW5JbnB1dCA6IHRoaXMuaGlkZGVuRWxTdGFydEF0ID0gaGlkZGVuSW5wdXQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmlzU2luZ2xlSW5wdXQpIHtcbiAgICAgIHRoaXMub3B0cy5lbFNpbmdsZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgW3RoaXMub3B0cy5lbFN0YXJ0QXQsIHRoaXMub3B0cy5lbEVuZEF0XS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLmRyb3BCYXNpYyk7XG5cbiAgICAvLyBBZGQgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGUubGFiZWxzLmNhbGVuZGFyKTtcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3Qgb3BlbkRyb3AgPSAoaW5wdXQsIGlzUmV2ZXJzZWQpID0+IHtcbiAgICAgIHRoaXMuc3dpdGNoSW5wdXRGb2N1cyhpbnB1dCk7XG4gICAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbk9yZGVyKGlzUmV2ZXJzZWQpO1xuXG4gICAgICBpZiAoIWhhc0NsYXNzKHRoaXMuZWwsIHN0eWxlcy52aXNpYmxlKSkge1xuICAgICAgICBpZiAoIXRoaXMuY2FsRHJvcCkge1xuICAgICAgICAgIHRoaXMuY2FsRHJvcCA9IGNyZWF0ZVBvc2l0aW9uZXIodGhpcy5lbFRhcmdldCwgdGhpcy5lbCwge1xuICAgICAgICAgICAgcGxhY2VtZW50OiB0aGlzLm9wdHMuZHJvcFBsYWNlbWVudCxcbiAgICAgICAgICAgIGhpZGU6IHRydWUsXG4gICAgICAgICAgICBkZWZlclVwZGF0ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnZpc2libGUpO1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5jYWxEcm9wLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmVtaXQoJ2Ryb3Atb3BlbicpO1xuICAgICAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiZ3JpZGNlbGxcIl1bdGFiaW5kZXg9XCIwXCJdJykuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMubWFwc0xvYWRlZCAmJiB0aGlzLm9wdHMucmVudGFsSWQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRNYXBzKHRoaXMub3B0cy5yZW50YWxJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3B0cy5pc1NpbmdsZUlucHV0KSB7XG4gICAgICB0aGlzLmZvY3VzVG91Y2hFdmVudHModGhpcy5vcHRzLmVsU2luZ2xlSW5wdXQsICgpID0+IHtcbiAgICAgICAgb3BlbkRyb3AoJ3N0YXJ0JywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9jdXNUb3VjaEV2ZW50cyh0aGlzLm9wdHMuZWxTdGFydEF0LCAoKSA9PiB7XG4gICAgICAgIG9wZW5Ecm9wKCdzdGFydCcsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb2N1c1RvdWNoRXZlbnRzKHRoaXMub3B0cy5lbEVuZEF0LCAoKSA9PiB7XG4gICAgICAgIG9wZW5Ecm9wKCdlbmQnLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKSk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmVsUmVzZXQpIHtcbiAgICAgIHRoaXMub3B0cy5lbFJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3AoZSwgZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlICYmIChpc0luc2lkZShlLnRhcmdldCwgdGhpcy5lbCkgfHwgaXNJbnNpZGUoZS50YXJnZXQsIHRoaXMuZWxUYXJnZXQpKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc3R5bGVzLnZpc2libGUpO1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcbiAgICAgIHRoaXMuZW1pdCgnZHJvcC1jbG9zZScpO1xuICAgICAgdGhpcy5zd2l0Y2hJbnB1dEZvY3VzKCdhbnknKTtcbiAgICB9XG4gIH1cblxuICB2YWx1ZVRvSW5wdXQoaW5wdXQsIGRhdGVWYWx1ZSkge1xuICAgIGNvbnN0IHsgZWxTdGFydEF0IH0gPSB0aGlzLm9wdHM7XG4gICAgY29uc3QgeyBlbEVuZEF0IH0gICA9IHRoaXMub3B0cztcblxuICAgIGNvbnN0IGRhdGUgID0gZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSk7XG4gICAgY29uc3QgdmFsdWUgPSBzdHJmdGltZShkYXRlLCB0aGlzLmZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIGNvbnN0IGV2dCAgID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cbiAgICBldnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmhpZGRlbkVsRm9ybWF0KSB7XG4gICAgICBjb25zdCBoaWRkZW5WYWx1ZSA9IHN0cmZ0aW1lKGRhdGUsIHRoaXMub3B0cy5oaWRkZW5FbEZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuXG4gICAgICBpZiAoaW5wdXQgPT09ICdzdGFydCcgJiYgdGhpcy5oaWRkZW5FbFN0YXJ0QXQpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5FbFN0YXJ0QXQudmFsdWUgPSBoaWRkZW5WYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09ICdlbmQnICYmIHRoaXMuaGlkZGVuRWxFbmRBdCkge1xuICAgICAgICB0aGlzLmhpZGRlbkVsRW5kQXQudmFsdWUgPSBoaWRkZW5WYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgPT09ICdzdGFydCcgJiYgZWxTdGFydEF0KSB7XG4gICAgICBlbFN0YXJ0QXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGVsU3RhcnRBdC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gJ2VuZCcgJiYgZWxFbmRBdCkge1xuICAgICAgZWxFbmRBdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgZWxFbmRBdC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRzVG9WYWx1ZXMoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5lbFN0YXJ0QXQudmFsdWUgPT09ICcnICYmIHRoaXMub3B0cy5lbEVuZEF0LnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ICA9IGRhdGVUb0FycmF5KHRoaXMub3B0cy5lbFN0YXJ0QXQudmFsdWUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgY29uc3Qgc2VsZWN0aW9uRW5kICAgID0gZGF0ZVRvQXJyYXkodGhpcy5vcHRzLmVsRW5kQXQudmFsdWUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgY29uc3QgeyBjdXJyZW50RGF0ZSB9ID0gdGhpcy5vcHRzO1xuXG4gICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuXG4gICAgaWYgKGlzQXJyYXkoc2VsZWN0aW9uU3RhcnQpICYmIGlzQXJyYXkoc2VsZWN0aW9uRW5kKSkge1xuICAgICAgaWYgKChpc0xhdGVyKGN1cnJlbnREYXRlLCBzZWxlY3Rpb25TdGFydCkgfHwgaXNDdXJyZW50KGN1cnJlbnREYXRlLCBzZWxlY3Rpb25TdGFydCkpICYmIGlzTGF0ZXIoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCkpIHtcbiAgICAgICAgY29uc3QgbW9udGhEaWZmZXJlbmNlID0gbW9udGhEaWZmKFxuICAgICAgICAgIGRhdGVUb0lzbyh0aGlzLm9wdHMueWVhclN0YXJ0LCB0aGlzLm9wdHMubW9udGhTdGFydCwgMSksXG4gICAgICAgICAgZGF0ZVRvSXNvKC4uLnNlbGVjdGlvbkVuZClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7IHRyZWUgfSA9IHRoaXMuY3JlYXRlVHJlZSh0aGlzLm9wdHMueWVhclN0YXJ0LCB0aGlzLm9wdHMubW9udGhTdGFydCwgbW9udGhEaWZmZXJlbmNlKTtcblxuICAgICAgICB0aGlzLmNUcmVlLmFkZFRyZWUodHJlZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7XG4gICAgICAgIHRoaXMucmVjb3ZlclNlbGVjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNb250aHMoc2VsZWN0aW9uRW5kWzBdLCBzZWxlY3Rpb25FbmRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIoYGludmFsaWQgcmFuZ2U6IFwiWyR7c2VsZWN0aW9uU3RhcnR9XVwiIFwiWyR7c2VsZWN0aW9uRW5kfV1cImAsICd3YXJuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblN0YXJ0ICYmIHNlbGVjdGlvbkVuZCkge1xuICAgICAgdGhpcy5sb2dnZXIoYGludmFsaWQgZGF0ZXM6IFwiJHtzZWxlY3Rpb25TdGFydH1cIiBcIiR7c2VsZWN0aW9uRW5kfVwiYCwgJ3dhcm4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnB1dEZvY3VzKHR5cGUpIHtcbiAgICBpZiAodGhpcy5vcHRzLmVsU3RhcnRBdCAmJiB0aGlzLm9wdHMuZWxFbmRBdCkge1xuICAgICAgaWYgKHR5cGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5vcHRzLmVsU3RhcnRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsRW5kQXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5vcHRzLmVsRW5kQXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMub3B0cy5lbFN0YXJ0QXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsU3RhcnRBdCwgc3R5bGVzLmZvY3VzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsRW5kQXQsIHN0eWxlcy5mb2N1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXNUb3VjaEV2ZW50cyhlbGVtZW50LCBfY2FsbGJhY2spIHtcbiAgICBpZiAoaXNGdW5jdGlvbihfY2FsbGJhY2spKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX2NhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSAke3RoaXMuVkVSU0lPTn1dIGA7XG4gIH1cblxuICBsb2dnZXIobXNnLCB0eXBlID0gJ2xvZycpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlW3R5cGVdKSB7XG4gICAgICBjb25zb2xlW3R5cGVdKHRoaXMudG9TdHJpbmcoKSArIG1zZyk7XG4gICAgfVxuICB9XG59XG4iLCIvKiBnbG9iYWwgcHJvY2VzcyAqL1xuXG5jb25zdCBuYW1lID0gJ3NtaWx5LWNhbGVuZGFyLXdpZGdldCc7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZSxcbiAgY3NzUHJlZml4OiAnU21pbHlDYWxlbmRhcicsXG4gIGFwaUhvc3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgOiAnaHR0cHM6Ly9zZWN1cmUuc21pbHkuY29tJyxcbiAgYXBpTmFtZXNwYWNlOiAnL2FwaS92Mi9wdWJsaWMnLFxuICBhcGlNYXBzUm91dGU6ICcvbWFwcy5qc29uP3thcGlSZW50YWxJZH17YXBpQ3VycmVuY3l9JyxcbiAgYXBpUmVudGFsSWQ6ICdyZW50YWxfaWQ9JyxcbiAgYXBpQ3VycmVuY3k6ICcmZXhjaGFuZ2VfdG9fY3VycmVuY3k9JyxcblxuICByZW50YWxVcmwoaWRzKSB7XG4gICAgbGV0IHJvdXRlID0gdGhpcy5hcGlNYXBzUm91dGUucmVwbGFjZSgne2FwaVJlbnRhbElkfScsIGAke3RoaXMuYXBpUmVudGFsSWR9JHtpZHN9YCk7XG4gICAgcm91dGUgPSByb3V0ZS5yZXBsYWNlKCd7YXBpQ3VycmVuY3l9JywgKHRoaXMuY3VycmVuY3kpID8gYCR7dGhpcy5hcGlDdXJyZW5jeX0ke3RoaXMuY3VycmVuY3l9YCA6ICcnKTtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlIb3N0fSR7dGhpcy5hcGlOYW1lc3BhY2V9JHtyb3V0ZX1gO1xuICB9LFxuXG4gIHN0YXJ0T2ZXZWVrOiAwLCAvLyAwIFN1biAxIE1vbi4uLi42IFNhdFxuICBtaW5TdGF5OiAxLCAvLyBjYW4gc2VsZWN0IG9uZSBuaWdodFxuICBtYXhTdGF5OiBJbmZpbml0eSwgLy8gY2FuIHNlbGVjdCBpbmZpbml0ZSBuaWdodHNcbiAgbW9udGhTdGFydDogbnVsbCwgLy8gc3RhcnQgd2l0aCBjdXJyZW50IG1vbnRoIGJ5IGRlZmF1bHQgTSAnMC4uLjExJ1xuICB5ZWFyU3RhcnQ6IG51bGwsIC8vIHN0YXJ0IHdpdGggY3VycmVudCB5ZWFyIFlZWVlcbiAgZGF5c1BlcldlZWs6IDcsIC8vIEZJWE1FIHN1cHBvcnQgY2FsZW5kYXIgcmVuZGVyaW5nXG4gIGRpc3BsYXlNb250aHM6IDIsXG4gIGRpc3BsYXlNb250aHNNb2JpbGU6IG51bGwsIC8vIGZhbGxzIGJhY2sgdG8gZGlzcGxheU1vbnRoc1xuICBtb2JpbGVCcmVha3BvaW50OiA3NjcsIC8vIHB4LCA8PSBicmVha3BvaW50IGlzIG1vYmlsZVxuICBzaG93UGFnaW5hdGlvbk1vYmlsZTogdHJ1ZSxcbiAgbW9udGhzUGFnaW5hdGlvbkp1bXA6IDEsXG4gIHNlbGVjdGFibGU6IGZhbHNlLFxuICBzaG93UmF0ZXM6IGZhbHNlLFxuICBpc1JldmVyc2VTZWxlY3RhYmxlOiBmYWxzZSwgLy8gc2VsZWN0IGVuZCBkYXRlIGZpcnN0XG4gIGlzQmFja0Rpc2FibGVkOiB0cnVlLFxuICBpc0Ryb3BEb3duOiBmYWxzZSxcbiAgZHJvcFBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gIGVsOiBudWxsLFxuICBlbFN0YXJ0QXQ6IG51bGwsXG4gIGVsRW5kQXQ6IG51bGwsXG4gIGVsU2luZ2xlSW5wdXQ6IG51bGwsXG4gIGlzU2luZ2xlSW5wdXQ6IG51bGwsXG4gIHNpbmdsZUlucHV0RGF0ZUZvcm1hdDogbnVsbCxcbiAgc2luZ2xlSW5wdXRTZXBhcmF0b3I6ICfihpInLFxuICBlbFJlc2V0OiBudWxsLFxuICBmb3JtYXREYXRlOiBudWxsLFxuICBoaWRkZW5FbEZvcm1hdDogbnVsbCxcbiAgcmVudGFsSWQ6IG51bGwsXG4gIGN1cnJlbmN5OiBudWxsLFxuICBkaXNhYmxlQXZhaWxhYml0eU1hcDogZmFsc2UsXG4gIGFsbG93U2hvcnRlck1pblN0YXlTZWxlY3Rpb246IGZhbHNlLFxuICBhbGxvd0xvbmdlck1heFN0YXlTZWxlY3Rpb246IGZhbHNlLFxuICBlbmFibGVBbGxEYXlzOiBmYWxzZSxcbiAgY3VycmVudERhdGUsXG4gIHRoZW1lOiAnYmFzaWMnXG59O1xuIiwibGV0IGxvY2FsZXMgPSB7XG4gICdlbi1HQic6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdHQlAnLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuaWdodHMnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuaWdodHMnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnbWluaW11bSBzdGF5OiAlbnVtYmVyIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdtYXhpbXVtIHN0YXk6ICVudW1iZXIgbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2Jvb2tlZCBhbHJlYWR5JyxcbiAgICBzdGFydE9mV2VlazogMCxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuICAgICAgbW9udGhzOiAnTW9udGhzJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdOZXh0IG1vbnRoJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnUHJldmlvdXMgbW9udGgnLFxuICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICBwcmV2aW91c1llYXJzOiAnUHJldmlvdXMgeWVhcnMnLFxuICAgICAgbmV4dFllYXJzOiAnTmV4dCB5ZWFycycsXG4gICAgICB0b2RheTogJ3RvZGF5JyxcbiAgICAgIHVuYXZhaWxhYmxlOiAndW5hdmFpbGFibGUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ1N0YXJ0IGRhdGU6ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRW5kIGRhdGU6ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ2VuLVVTJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdNb250aE5hbWVzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5pZ2h0cycsXG4gICAgbWF4U3RheTogJyVudW1iZXItIG5pZ2h0cycsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdtaW5pbXVtIHN0YXk6ICVudW1iZXIgbmlnaHRzJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21heGltdW0gc3RheTogJW51bWJlciBuaWdodHMnLFxuICAgIGhhc0ludmFsaWREYXlzOiAnYm9va2VkIGFscmVhZHknLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcicsXG4gICAgICBtb250aHM6ICdNb250aHMnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ05leHQgbW9udGgnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdQcmV2aW91cyBtb250aCcsXG4gICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdQcmV2aW91cyB5ZWFycycsXG4gICAgICBuZXh0WWVhcnM6ICdOZXh0IHllYXJzJyxcbiAgICAgIHRvZGF5OiAndG9kYXknLFxuICAgICAgdW5hdmFpbGFibGU6ICd1bmF2YWlsYWJsZScsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnU3RhcnQgZGF0ZTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdFbmQgZGF0ZTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnZGUtREUnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdKYW51YXJfRmVicnVhcl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdKYW5fRmViX03DpHJfQXByX01haV9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZXonLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuw6RjaHRlJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbsOkY2h0ZScsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdtaW5kZXN0YXVmZW50aGFsdDogJW51bWJlciBOw6RjaHRlJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21heGltYWxlciBBdWZlbnRoYWx0OiAlbnVtYmVyIE7DpGNodGUnLFxuICAgIGhhc0ludmFsaWREYXlzOiAnc2Nob24gZ2VidWNodCcsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0thbGVuZGVyJyxcbiAgICAgIG1vbnRoczogJ01vbmF0ZScsXG4gICAgICBtb250aHNGb3J3YXJkOiAnTsOkY2hzdGVyIE1vbmF0JyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnVm9yaGVyaWdlciBNb25hdCcsXG4gICAgICBjbG9zZTogJ1NjaGxpZcOfZW4nLFxuICAgICAgcHJldmlvdXNZZWFyczogJ1ZvcmhlcmlnZSBKYWhyZScsXG4gICAgICBuZXh0WWVhcnM6ICdOw6RjaHN0ZSBKYWhyZScsXG4gICAgICB0b2RheTogJ2hldXRlJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnbmljaHQgdmVyZsO8Z2JhcicsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnU3RhcnRkYXR1bTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdFbmRkYXR1bTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnZXMtRVMnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdEb19MdV9NYV9NaV9KdV9WaV9Tw6EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw6lyY29sZXNfanVldmVzX3ZpZXJuZXNfc8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBub2NoZXMnLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBub2NoZXMnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnZXN0YW5jaWEgbcOtbmltYTogJW51bWJlciBub2NoZXMnLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnZXN0YW5jaWEgbcOheGltYTogJW51bWJlciBub2NoZXMnLFxuICAgIGhhc0ludmFsaWREYXlzOiAneWEgcmVzZXJ2YWRvJyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXJpbycsXG4gICAgICBtb250aHM6ICdNZXNlcycsXG4gICAgICBtb250aHNGb3J3YXJkOiAnUHLDs3hpbW8gbWVzJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnTWVzIGFudGVyaW9yJyxcbiAgICAgIGNsb3NlOiAnQ2VycmFyJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdBw7FvcyBhbnRlcmlvcmVzJyxcbiAgICAgIG5leHRZZWFyczogJ0HDsW9zIHNpZ3VpZW50ZXMnLFxuICAgICAgdG9kYXk6ICdob3knLFxuICAgICAgdW5hdmFpbGFibGU6ICdubyBkaXNwb25pYmxlJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdGZWNoYSBkZSBpbmljaW86ICVkYXRlJyxcbiAgICAgIHNlbGVjdGVkRW5kOiAnRmVjaGEgZGUgZmluOiAlZGF0ZSdcbiAgICB9XG4gIH0sXG4gICdmci1GUic6IHtcbiAgICBzaG9ydFdlZWtkYXlOYW1lczogJ0RpX0x1X01hX01lX0plX1ZlX1NhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdXZWVrZGF5TmFtZXM6ICdkaW1hbmNoZV9sdW5kaV9tYXJkaV9tZXJjcmVkaV9qZXVkaV92ZW5kcmVkaV9zYW1lZGknLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdqYW52aWVyX2bDqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8O7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw6ljZW1icmUnLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnamFuX2bDqXZfbWFyX2F2cl9tYWlfanVpbl9qdWlsX2Fvw7tfc2VwX29jdF9ub3ZfZMOpYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWQgJWIsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG51aXRzJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbnVpdHMnLFxuICAgIGhhc0ludmFsaWRNaW5TdGF5OiAnc8Opam91ciBtaW5pbXVtIDogJW51bWJlciBudWl0cycsXG4gICAgaGFzSW52YWxpZE1heFN0YXk6ICdzw6lqb3VyIG1heGltdW0gOiAlbnVtYmVyIG51aXRzJyxcbiAgICBoYXNJbnZhbGlkRGF5czogJ2TDqWrDoCByw6lzZXJ2w6knLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdDYWxlbmRyaWVyJyxcbiAgICAgIG1vbnRoczogJ01vaXMnLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ01vaXMgc3VpdmFudCcsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ01vaXMgcHLDqWPDqWRlbnQnLFxuICAgICAgY2xvc2U6ICdGZXJtZXInLFxuICAgICAgcHJldmlvdXNZZWFyczogJ0FubsOpZXMgcHLDqWPDqWRlbnRlcycsXG4gICAgICBuZXh0WWVhcnM6ICdBbm7DqWVzIHN1aXZhbnRlcycsXG4gICAgICB0b2RheTogXCJhdWpvdXJkJ2h1aVwiLFxuICAgICAgdW5hdmFpbGFibGU6ICdpbmRpc3BvbmlibGUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ0RhdGUgZGUgZMOpYnV0IDogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdEYXRlIGRlIGZpbiA6ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ2l0LUlUJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAnRG9fTHVfTWFfTWVfR2lfVmVfU2EnLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ2RvbWVuaWNhX2x1bmVkw6xfbWFydGVkw6xfbWVyY29sZWTDrF9naW92ZWTDrF92ZW5lcmTDrF9zYWJhdG8nLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBub3R0aS4nLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBub3R0aScsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdzb2dnaW9ybm8gbWluaW06ICVudW1iZXIgbm90dGknLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnc29nZ2lvcm5vIG1hc3NpbW86ICVudW1iZXIgbm90dGknLFxuICAgIGhhc0ludmFsaWREYXlzOiAnZ2nDoCBwcmVub3RhdG8nLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcmlvJyxcbiAgICAgIG1vbnRoczogJ01lc2knLFxuICAgICAgbW9udGhzRm9yd2FyZDogJ01lc2Ugc3VjY2Vzc2l2bycsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ01lc2UgcHJlY2VkZW50ZScsXG4gICAgICBjbG9zZTogJ0NoaXVkaScsXG4gICAgICBwcmV2aW91c1llYXJzOiAnQW5uaSBwcmVjZWRlbnRpJyxcbiAgICAgIG5leHRZZWFyczogJ0Fubmkgc3VjY2Vzc2l2aScsXG4gICAgICB0b2RheTogJ29nZ2knLFxuICAgICAgdW5hdmFpbGFibGU6ICdub24gZGlzcG9uaWJpbGUnLFxuICAgICAgc2VsZWN0ZWRTdGFydDogJ0RhdGEgZGkgaW5pemlvOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ0RhdGEgZGkgZmluZTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnc3YtU0UnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdzw7ZfbcOlX3RpX29uX3RvX2ZyX2zDticuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnc8O2bmRhZ19tw6VuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMO2cmRhZycuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnamFuX2ZlYl9tYXJfYXByX21hal9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyViICVkLCAlWScsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBuw6R0dGVyJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbsOkdHRlcicsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdrb3J0YXN0ZSB2aXN0ZWxzZTogJW51bWJlciBuw6R0dGVyJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21heGltw6FsbnkgcG9ieXQ6ICVudW1iZXIgbsOkdHRlcicsXG4gICAgaGFzSW52YWxpZERheXM6ICdyZWRhbiBib2thdCcsXG4gICAgc3RhcnRPZldlZWs6IDEsXG4gICAgbGFiZWxzOiB7XG4gICAgICBjYWxlbmRhcjogJ0thbGVuZGVyJyxcbiAgICAgIG1vbnRoczogJ03DpW5hZGVyJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdOw6RzdGEgbcOlbmFkJyxcbiAgICAgIG1vbnRoc0JhY2t3YXJkOiAnRsO2cmVnw6VlbmRlIG3DpW5hZCcsXG4gICAgICBjbG9zZTogJ1N0w6RuZycsXG4gICAgICBwcmV2aW91c1llYXJzOiAnRsO2cmVnw6VlbmRlIMOlcicsXG4gICAgICBuZXh0WWVhcnM6ICdOw6RzdGEgw6VyJyxcbiAgICAgIHRvZGF5OiAnaWRhZycsXG4gICAgICB1bmF2YWlsYWJsZTogJ2VqIHRpbGxnw6RuZ2xpZycsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnU3RhcnRkYXR1bTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdTbHV0ZGF0dW06ICVkYXRlJ1xuICAgIH1cbiAgfSxcbiAgJ3J1LVJVJzoge1xuICAgIHNob3J0V2Vla2RheU5hbWVzOiAn0JLRgV/Qn9C9X9CS0YJf0KHRgF/Qp9GCX9Cf0YJf0KHQsScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAn0JLQvtGB0LrRgNC10YHQtdC90YzQtV/Qn9C+0L3QtdC00LXQu9GM0L3QuNC6X9CS0YLQvtGA0L3QuNC6X9Ch0YDQtdC00LBf0KfQtdGC0LLQtdGA0LNf0J/Rj9GC0L3QuNGG0LBf0KHRg9Cx0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICfQr9C90LLQsNGA0Yxf0KTQtdCy0YDQsNC70Yxf0JzQsNGA0YJf0JDQv9GA0LXQu9GMX9Cc0LDQuV/QmNGO0L3RjF/QmNGO0LvRjF/QkNCy0LPRg9GB0YJf0KHQtdC90YLRj9Cx0YDRjF/QntC60YLRj9Cx0YDRjF/QndC+0Y/QsdGA0Yxf0JTQtdC60LDQsdGA0YwnLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAn0K/QvdCyX9Ck0LXQsl/QnNCw0YBf0JDQv9GAX9Cc0LDQuV/QmNGO0L1f0JjRjtC7X9CQ0LLQs1/QodC10L1f0J7QutGCX9Cd0L7Rj1/QlNC10LonLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0RGF0ZTogJyVkLiViLiVZJyxcbiAgICBjdXJyZW5jeTogJ1JVQicsXG4gICAgbWluU3RheTogJyVudW1iZXIrINC90L7Rhy4nLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSDQvdC+0YcuJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ9C80LjQvdC40LzQsNC70YzQvdC+0LUg0L/RgNC10LHRi9Cy0LDQvdC4OiAlbnVtYmVyINC90L7Rh9C4JyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ9C80LDQutGB0LjQvNCw0LvRjNC90L7QtSDQv9GA0LXQsdGL0LLQsNC90LjQtTogJW51bWJlciDQvdC+0YfQuCcsXG4gICAgaGFzSW52YWxpZERheXM6ICfQt9Cw0LHRgNC+0L3QuNGA0L7QstCw0L3QviDRg9C20LUnLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICfQmtCw0LvQtdC90LTQsNGA0YwnLFxuICAgICAgbW9udGhzOiAn0JzQtdGB0Y/RhtGLJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICfQodC70LXQtNGD0Y7RidC40Lkg0LzQtdGB0Y/RhicsXG4gICAgICBtb250aHNCYWNrd2FyZDogJ9Cf0YDQtdC00YvQtNGD0YnQuNC5INC80LXRgdGP0YYnLFxuICAgICAgY2xvc2U6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gICAgICBwcmV2aW91c1llYXJzOiAn0J/RgNC10LTRi9C00YPRidC40LUg0LPQvtC00YsnLFxuICAgICAgbmV4dFllYXJzOiAn0KHQu9C10LTRg9GO0YnQuNC1INCz0L7QtNGLJyxcbiAgICAgIHRvZGF5OiAn0YHQtdCz0L7QtNC90Y8nLFxuICAgICAgdW5hdmFpbGFibGU6ICfQvdC10LTQvtGB0YLRg9C/0L3QvicsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAn0JTQsNGC0LAg0L3QsNGH0LDQu9CwOiAlZGF0ZScsXG4gICAgICBzZWxlY3RlZEVuZDogJ9CU0LDRgtCwINC+0LrQvtC90YfQsNC90LjRjzogJWRhdGUnXG4gICAgfVxuICB9LFxuICAncGwtUEwnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdOZF9Qbl9XdF/FmnJfQ3pfUHRfU28nLnNwbGl0KCdfJyksXG4gICAgbG9uZ1dlZWtkYXlOYW1lczogJ25pZWR6aWVsYV9wb25pZWR6aWHFgmVrX3d0b3Jla1/Fm3JvZGFfY3p3YXJ0ZWtfcGnEhXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gICAgbG9uZ01vbnRoTmFtZXM6ICdzdHljemXFhF9sdXR5X21hcnplY19rd2llY2llxYRfbWFqX2N6ZXJ3aWVjX2xpcGllY19zaWVycGllxYRfd3J6ZXNpZcWEX3Bhxbpkemllcm5pa19saXN0b3BhZF9ncnVkemllxYQnLnNwbGl0KCdfJyksXG4gICAgc2hvcnRNb250aE5hbWVzOiAnc3R5X2x1dF9tYXJfa3dpX21hal9jemVfbGlwX3NpZV93cnpfcGHFul9saXNfZ3J1Jy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdERhdGU6ICclZC4lYi4lWScsXG4gICAgY3VycmVuY3k6ICdQTE4nLFxuICAgIG1pblN0YXk6ICclbnVtYmVyKyBub2NlJyxcbiAgICBtYXhTdGF5OiAnJW51bWJlci0gbm9jZScsXG4gICAgaGFzSW52YWxpZE1pblN0YXk6ICdtaW5pbWFsbnkgcG9ieTogJW51bWJlciBub2NlJyxcbiAgICBoYXNJbnZhbGlkTWF4U3RheTogJ21ha3N5bWFsbnkgcG9ieXQ6ICVudW1iZXIgbm9jZScsXG4gICAgaGFzSW52YWxpZERheXM6ICdqdcW8IHphcmV6ZXJ3b3dhbmUnLFxuICAgIHN0YXJ0T2ZXZWVrOiAxLFxuICAgIGxhYmVsczoge1xuICAgICAgY2FsZW5kYXI6ICdLYWxlbmRhcnonLFxuICAgICAgbW9udGhzOiAnTWllc2nEhWNlJyxcbiAgICAgIG1vbnRoc0ZvcndhcmQ6ICdOYXN0xJlwbnkgbWllc2nEhWMnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdQb3ByemVkbmkgbWllc2nEhWMnLFxuICAgICAgY2xvc2U6ICdaYW1rbmlqJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdQb3ByemVkbmllIGxhdGEnLFxuICAgICAgbmV4dFllYXJzOiAnTmFzdMSZcG5lIGxhdGEnLFxuICAgICAgdG9kYXk6ICdkemlzaWFqJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnbmllZG9zdMSZcG5lJyxcbiAgICAgIHNlbGVjdGVkU3RhcnQ6ICdEYXRhIHJvenBvY3rEmWNpYTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdEYXRhIHpha2/FhGN6ZW5pYTogJWRhdGUnXG4gICAgfVxuICB9LFxuICAnbmwtTkwnOiB7XG4gICAgc2hvcnRXZWVrZGF5TmFtZXM6ICdab19NYV9EaV9Xb19Eb19Wcl9aYScuc3BsaXQoJ18nKSxcbiAgICBsb25nV2Vla2RheU5hbWVzOiAnWm9uZGFnX01hYW5kYWdfRGluc2RhZ19Xb2Vuc2RhZ19Eb25kZXJkYWdfVnJpamRhZ19aYXRlcmRhZycuc3BsaXQoJ18nKSxcbiAgICBsb25nTW9udGhOYW1lczogJ0phbnVhcmlfRmVicnVhcmlfTWFhcnRfQXByaWxfTWVpX0p1bmlfSnVsaV9BdWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBzaG9ydE1vbnRoTmFtZXM6ICdKYW5fRmViX01hYV9BcHJfTWVpX0p1bl9KdWxfQXVnX1NlcF9Pa3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICBmb3JtYXREYXRlOiAnJWIgJWQsICVZJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgbWluU3RheTogJyVudW1iZXIrIG5hY2h0ZW4nLFxuICAgIG1heFN0YXk6ICclbnVtYmVyLSBuYWNodGVuJyxcbiAgICBoYXNJbnZhbGlkTWluU3RheTogJ21pbmltYWFsIHZlcmJsaWpmOiAlbnVtYmVyIG5hY2h0ZW4nLFxuICAgIGhhc0ludmFsaWRNYXhTdGF5OiAnbWF4aW1hYWwgdmVyYmxpamY6ICVudW1iZXIgbmFjaHRlbicsXG4gICAgaGFzSW52YWxpZERheXM6ICdhbCBnZWJvZWt0JyxcbiAgICBzdGFydE9mV2VlazogMSxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGNhbGVuZGFyOiAnS2FsZW5kZXInLFxuICAgICAgbW9udGhzOiAnTWFhbmRlbicsXG4gICAgICBtb250aHNGb3J3YXJkOiAnVm9sZ2VuZGUgbWFhbmQnLFxuICAgICAgbW9udGhzQmFja3dhcmQ6ICdWb3JpZ2UgbWFhbmQnLFxuICAgICAgY2xvc2U6ICdTbHVpdGVuJyxcbiAgICAgIHByZXZpb3VzWWVhcnM6ICdWb3JpZ2UgamFyZW4nLFxuICAgICAgbmV4dFllYXJzOiAnVm9sZ2VuZGUgamFyZW4nLFxuICAgICAgdG9kYXk6ICd2YW5kYWFnJyxcbiAgICAgIHVuYXZhaWxhYmxlOiAnbmlldCBiZXNjaGlrYmFhcicsXG4gICAgICBzZWxlY3RlZFN0YXJ0OiAnU3RhcnRkYXR1bTogJWRhdGUnLFxuICAgICAgc2VsZWN0ZWRFbmQ6ICdFaW5kZGF0dW06ICVkYXRlJ1xuICAgIH1cbiAgfVxufTtcblxuLy8gQWRkIGFsaWFzZXNcbmxvY2FsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgZW46IGxvY2FsZXNbJ2VuLVVTJ10sXG4gIGRlOiBsb2NhbGVzWydkZS1ERSddLFxuICBlczogbG9jYWxlc1snZXMtRVMnXSxcbiAgZnI6IGxvY2FsZXNbJ2ZyLUZSJ10sXG4gIGl0OiBsb2NhbGVzWydpdC1JVCddLFxuICBzdjogbG9jYWxlc1snc3YtU0UnXSxcbiAgcnU6IGxvY2FsZXNbJ3J1LVJVJ10sXG4gIHBsOiBsb2NhbGVzWydwbC1QTCddLFxuICBubDogbG9jYWxlc1snbmwtTkwnXVxufSwgbG9jYWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZXM7XG4iLCIvKiBnbG9iYWwgZG9jdW1lbnQsIHdpbmRvdyAqL1xuXG5jb25zdCBBUlJPV19TSVpFID0gODtcblxuY29uc3QgZ2V0R2xvYmFsT2JqZWN0ID0gKCkgPT4gKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiBudWxsKTtcblxuY29uc3QgZ2V0UG9wcGVyUnVudGltZSA9ICgpID0+IHtcbiAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG5cbiAgaWYgKFxuICAgIGdsb2JhbE9iamVjdFxuICAgICYmIGdsb2JhbE9iamVjdC5Qb3BwZXJcbiAgICAmJiB0eXBlb2YgZ2xvYmFsT2JqZWN0LlBvcHBlci5jcmVhdGVQb3BwZXIgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIGdsb2JhbE9iamVjdC5Qb3BwZXI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldEZsb2F0aW5nUnVudGltZSA9ICgpID0+IHtcbiAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gIGNvbnN0IHJ1bnRpbWUgPSBnbG9iYWxPYmplY3RcbiAgICAmJiAoZ2xvYmFsT2JqZWN0LkZsb2F0aW5nVUlET00gfHwgZ2xvYmFsT2JqZWN0LkZsb2F0aW5nVUkgfHwgZ2xvYmFsT2JqZWN0LmZsb2F0aW5nVUkpO1xuXG4gIGlmIChydW50aW1lICYmIHR5cGVvZiBydW50aW1lLmNvbXB1dGVQb3NpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBydW50aW1lO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRBcnJvd0VsZW1lbnQgPSAoZmxvYXRpbmdFbCkgPT4gZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3BwZXItYXJyb3ddJyk7XG5cbmNvbnN0IHNwbGl0UGxhY2VtZW50ID0gKHBsYWNlbWVudCA9ICdib3R0b20nKSA9PiB7XG4gIGNvbnN0IFtiYXNlUGxhY2VtZW50LCBhbGlnbm1lbnRdID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlUGxhY2VtZW50OiBiYXNlUGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgIGFsaWdubWVudDogYWxpZ25tZW50IHx8IG51bGxcbiAgfTtcbn07XG5cbmNvbnN0IHNldEJvb2xlYW5BdHRyaWJ1dGUgPSAoZWxlbWVudCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9XG59O1xuXG5jb25zdCBhcHBseVBvc2l0aW9uID0gKGZsb2F0aW5nRWwsIHgsIHksIHBsYWNlbWVudCwgc3RyYXRlZ3kgPSAnYWJzb2x1dGUnKSA9PiB7XG4gIGZsb2F0aW5nRWwuc3R5bGUucG9zaXRpb24gPSBzdHJhdGVneTtcbiAgZmxvYXRpbmdFbC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gIGZsb2F0aW5nRWwuc3R5bGUudG9wID0gYCR7eX1weGA7XG4gIGZsb2F0aW5nRWwuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xufTtcblxuY29uc3QgYXBwbHlBcnJvd1Bvc2l0aW9uID0gKGFycm93RWwsIHgsIHkpID0+IHtcbiAgaWYgKCFhcnJvd0VsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXJyb3dFbC5zdHlsZS5sZWZ0ID0gJyc7XG4gIGFycm93RWwuc3R5bGUudG9wID0gJyc7XG5cbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIGFycm93RWwuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB5ID09PSAnbnVtYmVyJykge1xuICAgIGFycm93RWwuc3R5bGUudG9wID0gYCR7eX1weGA7XG4gIH1cbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG5cbmNvbnN0IGFsaWduSG9yaXpvbnRhbGx5ID0gKHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSA9PiB7XG4gIGlmIChhbGlnbm1lbnQgPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlUmVjdC5sZWZ0O1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlUmVjdC5yaWdodCAtIGZsb2F0aW5nUmVjdC53aWR0aDtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2VSZWN0LmxlZnQgKyAoKHJlZmVyZW5jZVJlY3Qud2lkdGggLSBmbG9hdGluZ1JlY3Qud2lkdGgpIC8gMik7XG59O1xuXG5jb25zdCBhbGlnblZlcnRpY2FsbHkgPSAocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpID0+IHtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiByZWZlcmVuY2VSZWN0LnRvcDtcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZVJlY3QuYm90dG9tIC0gZmxvYXRpbmdSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2VSZWN0LnRvcCArICgocmVmZXJlbmNlUmVjdC5oZWlnaHQgLSBmbG9hdGluZ1JlY3QuaGVpZ2h0KSAvIDIpO1xufTtcblxuY29uc3QgZ2V0Vmlld3BvcnRDb29yZGluYXRlcyA9IChyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIHBsYWNlbWVudCwgb2Zmc2V0ID0gWzAsIDBdKSA9PiB7XG4gIGNvbnN0IHsgYmFzZVBsYWNlbWVudCwgYWxpZ25tZW50IH0gPSBzcGxpdFBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBbY3Jvc3NBeGlzT2Zmc2V0ID0gMCwgbWFpbkF4aXNPZmZzZXQgPSAwXSA9IG9mZnNldDtcblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogYWxpZ25Ib3Jpem9udGFsbHkocmVmZXJlbmNlUmVjdCwgZmxvYXRpbmdSZWN0LCBhbGlnbm1lbnQpICsgY3Jvc3NBeGlzT2Zmc2V0LFxuICAgICAgeTogcmVmZXJlbmNlUmVjdC50b3AgLSBmbG9hdGluZ1JlY3QuaGVpZ2h0IC0gbWFpbkF4aXNPZmZzZXRcbiAgICB9O1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGFsaWduSG9yaXpvbnRhbGx5KHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSArIGNyb3NzQXhpc09mZnNldCxcbiAgICAgIHk6IHJlZmVyZW5jZVJlY3QuYm90dG9tICsgbWFpbkF4aXNPZmZzZXRcbiAgICB9O1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiByZWZlcmVuY2VSZWN0LmxlZnQgLSBmbG9hdGluZ1JlY3Qud2lkdGggLSBtYWluQXhpc09mZnNldCxcbiAgICAgIHk6IGFsaWduVmVydGljYWxseShyZWZlcmVuY2VSZWN0LCBmbG9hdGluZ1JlY3QsIGFsaWdubWVudCkgKyBjcm9zc0F4aXNPZmZzZXRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWZlcmVuY2VSZWN0LnJpZ2h0ICsgbWFpbkF4aXNPZmZzZXQsXG4gICAgeTogYWxpZ25WZXJ0aWNhbGx5KHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgYWxpZ25tZW50KSArIGNyb3NzQXhpc09mZnNldFxuICB9O1xufTtcblxuY29uc3Qgbm9ybWFsaXplQ29vcmRpbmF0ZXNGb3JPZmZzZXRQYXJlbnQgPSAoZmxvYXRpbmdFbCwgdmlld3BvcnRYLCB2aWV3cG9ydFkpID0+IHtcbiAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGZsb2F0aW5nRWwub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCBnZXRHbG9iYWxPYmplY3QoKTtcbiAgY29uc3QgeyBvZmZzZXRQYXJlbnQgfSA9IGZsb2F0aW5nRWw7XG5cbiAgaWYgKFxuICAgICFvZmZzZXRQYXJlbnRcbiAgICB8fCBvZmZzZXRQYXJlbnQgPT09IG93bmVyRG9jdW1lbnQuYm9keVxuICAgIHx8IG9mZnNldFBhcmVudCA9PT0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZpZXdwb3J0WCArIChnbG9iYWxPYmplY3QgPyBnbG9iYWxPYmplY3QucGFnZVhPZmZzZXQgOiAwKSxcbiAgICAgIHk6IHZpZXdwb3J0WSArIChnbG9iYWxPYmplY3QgPyBnbG9iYWxPYmplY3QucGFnZVlPZmZzZXQgOiAwKVxuICAgIH07XG4gIH1cblxuICBjb25zdCBwYXJlbnRSZWN0ID0gb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB7XG4gICAgeDogdmlld3BvcnRYIC0gcGFyZW50UmVjdC5sZWZ0IC0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQgKyBvZmZzZXRQYXJlbnQuc2Nyb2xsTGVmdCxcbiAgICB5OiB2aWV3cG9ydFkgLSBwYXJlbnRSZWN0LnRvcCAtIG9mZnNldFBhcmVudC5jbGllbnRUb3AgKyBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wXG4gIH07XG59O1xuXG5jb25zdCBwb3NpdGlvbk1hbnVhbEFycm93ID0gKHJlZmVyZW5jZVJlY3QsIGZsb2F0aW5nUmVjdCwgdmlld3BvcnRYLCB2aWV3cG9ydFksIHBsYWNlbWVudCwgYXJyb3dFbCkgPT4ge1xuICBpZiAoIWFycm93RWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGJhc2VQbGFjZW1lbnQgfSA9IHNwbGl0UGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGhhbGZBcnJvdyA9IEFSUk9XX1NJWkUgLyAyO1xuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJyB8fCBiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIGNvbnN0IG1heEFycm93WCA9IE1hdGgubWF4KGZsb2F0aW5nUmVjdC53aWR0aCAtIEFSUk9XX1NJWkUsIDApO1xuICAgIGNvbnN0IGFycm93WCA9IGNsYW1wKFxuICAgICAgcmVmZXJlbmNlUmVjdC5sZWZ0ICsgKHJlZmVyZW5jZVJlY3Qud2lkdGggLyAyKSAtIHZpZXdwb3J0WCAtIGhhbGZBcnJvdyxcbiAgICAgIDAsXG4gICAgICBtYXhBcnJvd1hcbiAgICApO1xuXG4gICAgYXBwbHlBcnJvd1Bvc2l0aW9uKGFycm93RWwsIGFycm93WCwgbnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWF4QXJyb3dZID0gTWF0aC5tYXgoZmxvYXRpbmdSZWN0LmhlaWdodCAtIEFSUk9XX1NJWkUsIDApO1xuICBjb25zdCBhcnJvd1kgPSBjbGFtcChcbiAgICByZWZlcmVuY2VSZWN0LnRvcCArIChyZWZlcmVuY2VSZWN0LmhlaWdodCAvIDIpIC0gdmlld3BvcnRZIC0gaGFsZkFycm93LFxuICAgIDAsXG4gICAgbWF4QXJyb3dZXG4gICk7XG5cbiAgYXBwbHlBcnJvd1Bvc2l0aW9uKGFycm93RWwsIG51bGwsIGFycm93WSk7XG59O1xuXG5jb25zdCBhdHRhY2hGYWxsYmFja0F1dG9VcGRhdGUgPSAodXBkYXRlKSA9PiB7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9IGdldEdsb2JhbE9iamVjdCgpO1xuXG4gIGlmICghZ2xvYmFsT2JqZWN0IHx8IHR5cGVvZiBnbG9iYWxPYmplY3QuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfVxuXG4gIGdsb2JhbE9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICBnbG9iYWxPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlLCB0cnVlKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGdsb2JhbE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICAgIGdsb2JhbE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUsIHRydWUpO1xuICB9O1xufTtcblxuY29uc3QgY3JlYXRlUG9wcGVyUG9zaXRpb25lciA9IChwb3BwZXJSdW50aW1lLCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBtb2RpZmllcnMgPSBbXTtcblxuICBpZiAob3B0aW9ucy5mbGlwID09PSBmYWxzZSkge1xuICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLm9mZnNldCkpIHtcbiAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGlkZSkge1xuICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgIG5hbWU6ICdoaWRlJyxcbiAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJSdW50aW1lLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwge1xuICAgIHBsYWNlbWVudDogb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgc3RyYXRlZ3k6IG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJyxcbiAgICBtb2RpZmllcnNcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVGbG9hdGluZ1Bvc2l0aW9uZXIgPSAoZmxvYXRpbmdSdW50aW1lLCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBhcnJvd0VsID0gZ2V0QXJyb3dFbGVtZW50KGZsb2F0aW5nRWwpO1xuICBjb25zdCBtaWRkbGV3YXJlID0gW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5vZmZzZXQpICYmIHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgW2Nyb3NzQXhpcyA9IDAsIG1haW5BeGlzID0gMF0gPSBvcHRpb25zLm9mZnNldDtcblxuICAgIG1pZGRsZXdhcmUucHVzaChmbG9hdGluZ1J1bnRpbWUub2Zmc2V0KHtcbiAgICAgIG1haW5BeGlzLFxuICAgICAgY3Jvc3NBeGlzXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZmxpcCAhPT0gZmFsc2UgJiYgdHlwZW9mIGZsb2F0aW5nUnVudGltZS5mbGlwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGZsb2F0aW5nUnVudGltZS5mbGlwKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuc2hpZnQgIT09IGZhbHNlICYmIHR5cGVvZiBmbG9hdGluZ1J1bnRpbWUuc2hpZnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goZmxvYXRpbmdSdW50aW1lLnNoaWZ0KCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGlkZSAmJiB0eXBlb2YgZmxvYXRpbmdSdW50aW1lLmhpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtaWRkbGV3YXJlLnB1c2goZmxvYXRpbmdSdW50aW1lLmhpZGUoKSk7XG4gIH1cblxuICBpZiAoYXJyb3dFbCAmJiB0eXBlb2YgZmxvYXRpbmdSdW50aW1lLmFycm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGZsb2F0aW5nUnVudGltZS5hcnJvdyh7IGVsZW1lbnQ6IGFycm93RWwgfSkpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGZsb2F0aW5nRWwuc3R5bGUucG9zaXRpb24gPSBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZSc7XG5cbiAgICByZXR1cm4gZmxvYXRpbmdSdW50aW1lLmNvbXB1dGVQb3NpdGlvbihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwge1xuICAgICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5OiBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScsXG4gICAgICBtaWRkbGV3YXJlXG4gICAgfSkudGhlbigoeyB4LCB5LCBwbGFjZW1lbnQsIG1pZGRsZXdhcmVEYXRhID0ge30gfSkgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbihmbG9hdGluZ0VsLCB4LCB5LCBwbGFjZW1lbnQsIG9wdGlvbnMuc3RyYXRlZ3kgfHwgJ2Fic29sdXRlJyk7XG4gICAgICBhcHBseUFycm93UG9zaXRpb24oYXJyb3dFbCwgbWlkZGxld2FyZURhdGEuYXJyb3cgJiYgbWlkZGxld2FyZURhdGEuYXJyb3cueCwgbWlkZGxld2FyZURhdGEuYXJyb3cgJiYgbWlkZGxld2FyZURhdGEuYXJyb3cueSk7XG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlKFxuICAgICAgICBmbG9hdGluZ0VsLFxuICAgICAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbicsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLmhpZGUgJiYgbWlkZGxld2FyZURhdGEuaGlkZS5yZWZlcmVuY2VIaWRkZW5cbiAgICAgICk7XG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlKFxuICAgICAgICBmbG9hdGluZ0VsLFxuICAgICAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCcsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLmhpZGUgJiYgbWlkZGxld2FyZURhdGEuaGlkZS5lc2NhcGVkXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFudXAgPSAodHlwZW9mIGZsb2F0aW5nUnVudGltZS5hdXRvVXBkYXRlID09PSAnZnVuY3Rpb24nKVxuICAgID8gZmxvYXRpbmdSdW50aW1lLmF1dG9VcGRhdGUocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHVwZGF0ZSlcbiAgICA6IGF0dGFjaEZhbGxiYWNrQXV0b1VwZGF0ZSh1cGRhdGUpO1xuXG4gIGlmICghb3B0aW9ucy5kZWZlclVwZGF0ZSkge1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVNYW51YWxQb3NpdGlvbmVyID0gKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGFycm93RWwgPSBnZXRBcnJvd0VsZW1lbnQoZmxvYXRpbmdFbCk7XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGZsb2F0aW5nRWwuc3R5bGUucG9zaXRpb24gPSBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZSc7XG5cbiAgICBjb25zdCByZWZlcmVuY2VSZWN0ID0gcmVmZXJlbmNlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZmxvYXRpbmdSZWN0ID0gZmxvYXRpbmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB2aWV3cG9ydENvb3JkaW5hdGVzID0gZ2V0Vmlld3BvcnRDb29yZGluYXRlcyhcbiAgICAgIHJlZmVyZW5jZVJlY3QsXG4gICAgICBmbG9hdGluZ1JlY3QsXG4gICAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIG9wdGlvbnMub2Zmc2V0XG4gICAgKTtcbiAgICBjb25zdCBub3JtYWxpemVkQ29vcmRpbmF0ZXMgPSBub3JtYWxpemVDb29yZGluYXRlc0Zvck9mZnNldFBhcmVudChcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICB2aWV3cG9ydENvb3JkaW5hdGVzLngsXG4gICAgICB2aWV3cG9ydENvb3JkaW5hdGVzLnlcbiAgICApO1xuXG4gICAgYXBwbHlQb3NpdGlvbihcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICBub3JtYWxpemVkQ29vcmRpbmF0ZXMueCxcbiAgICAgIG5vcm1hbGl6ZWRDb29yZGluYXRlcy55LFxuICAgICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZSdcbiAgICApO1xuICAgIHBvc2l0aW9uTWFudWFsQXJyb3coXG4gICAgICByZWZlcmVuY2VSZWN0LFxuICAgICAgZmxvYXRpbmdSZWN0LFxuICAgICAgdmlld3BvcnRDb29yZGluYXRlcy54LFxuICAgICAgdmlld3BvcnRDb29yZGluYXRlcy55LFxuICAgICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBhcnJvd0VsXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjbGVhbnVwID0gYXR0YWNoRmFsbGJhY2tBdXRvVXBkYXRlKHVwZGF0ZSk7XG5cbiAgaWYgKCFvcHRpb25zLmRlZmVyVXBkYXRlKSB7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uZXIocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IHtcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5OiBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScsXG4gICAgb2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCBbMCwgMF0sXG4gICAgZmxpcDogb3B0aW9ucy5mbGlwICE9PSBmYWxzZSxcbiAgICBzaGlmdDogb3B0aW9ucy5zaGlmdCAhPT0gZmFsc2UsXG4gICAgaGlkZTogb3B0aW9ucy5oaWRlID09PSB0cnVlLFxuICAgIGRlZmVyVXBkYXRlOiBvcHRpb25zLmRlZmVyVXBkYXRlID09PSB0cnVlXG4gIH07XG4gIGNvbnN0IHBvcHBlclJ1bnRpbWUgPSBnZXRQb3BwZXJSdW50aW1lKCk7XG5cbiAgaWYgKHBvcHBlclJ1bnRpbWUpIHtcbiAgICByZXR1cm4gY3JlYXRlUG9wcGVyUG9zaXRpb25lcihwb3BwZXJSdW50aW1lLCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgbm9ybWFsaXplZE9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3QgZmxvYXRpbmdSdW50aW1lID0gZ2V0RmxvYXRpbmdSdW50aW1lKCk7XG5cbiAgaWYgKGZsb2F0aW5nUnVudGltZSkge1xuICAgIHJldHVybiBjcmVhdGVGbG9hdGluZ1Bvc2l0aW9uZXIoZmxvYXRpbmdSdW50aW1lLCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgbm9ybWFsaXplZE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU1hbnVhbFBvc2l0aW9uZXIocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIG5vcm1hbGl6ZWRPcHRpb25zKTtcbn1cbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvY2FsZW5kYXIuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBtYWluICA9IChsYWJlbCkgPT4gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5tb250aHNXcmFwcGVyfVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWw9XCIke2xhYmVsfVwiPjwvZGl2PmA7XG5leHBvcnQgY29uc3QgbGl2ZVJlZ2lvbiA9ICgpID0+IGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMuc3JPbmx5fVwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIGRhdGEtbGl2ZS1yZWdpb24+PC9kaXY+YDtcbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uID0gKCkgPT4gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5wYWdpbmF0aW9ufVwiPjwvZGl2PmA7XG5leHBvcnQgY29uc3QgbW9iaWxlV2Vla2RheXMgPSAoaGVhZGVyKSA9PiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLm1vYmlsZVdlZWtkYXlzfVwiIHJvbGU9XCJyb3dcIj4ke2hlYWRlcn08L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IHN2Z1Nwcml0ZSA9IChjaGV2cm9uRG93bklkKSA9PiBgXG4gIDxzdmcgY2xhc3M9XCIke3N0eWxlcy5zcHJpdGV9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCI+XG4gICAgPHN5bWJvbCBpZD1cIiR7Y2hldnJvbkRvd25JZH1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICA8cGF0aCBkPVwiTTQuMjIgNi45N2EuNzUuNzUgMCAwIDEgMS4wNiAwTDggOS42OWwyLjcyLTIuNzJhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNmwtMy4yNSAzLjI1YS43NS43NSAwIDAgMS0xLjA2IDBMNC4yMiA4LjAzYS43NS43NSAwIDAgMSAwLTEuMDZaXCI+PC9wYXRoPlxuICAgIDwvc3ltYm9sPlxuICA8L3N2Zz5cbmA7XG5cbmV4cG9ydCBjb25zdCB0b29sdGlwID0gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy50b29sdGlwfVwiIHJvbGU9XCJ0b29sdGlwXCI+PHNwYW4+PC9zcGFuPjxkaXYgY2xhc3M9XCIke3N0eWxlcy50b29sdGlwQXJyb3d9XCIgZGF0YS1wb3BwZXItYXJyb3c9XCJ0cnVlXCI+PC9kaXY+PC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IG1vbnRoID0gKHtcbiAgbGFiZWwsXG4gIGNhcHRpb24sXG4gIGhlYWRlcixcbiAgYm9keVxufSkgPT4gYFxuICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMubW9udGh9ICR7c3R5bGVzLm1DZWxsfSBqcy1tb250aFwiIHJvbGU9XCJncmlkXCIgYXJpYS1sYWJlbD1cIiR7bGFiZWx9XCI+XG4gICAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb259XCI+JHtjYXB0aW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIke3N0eWxlcy50YWJsZUhlYWRlcn1cIiByb2xlPVwicm93XCI+JHtoZWFkZXJ9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLmJvZHl9XCIgcm9sZT1cInJvd2dyb3VwXCI+JHtib2R5fTwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCB5ZWFyUGlja2VyID0gKHtcbiAgbGFiZWwsXG4gIGNoZXZyb25Eb3duSWRcbn0pID0+IGBcbiAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb25QaWNrZXJ9XCI+XG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cIiR7c3R5bGVzLmNhcHRpb25UcmlnZ2VyfVwiXG4gICAgICBkYXRhLXllYXItcGlja2VyLXRyaWdnZXJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICBhcmlhLWhhc3BvcHVwPVwiZGlhbG9nXCJcbiAgICAgIGFyaWEtbGFiZWw9XCIke2xhYmVsfVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCIke3N0eWxlcy5jYXB0aW9uTGFiZWx9XCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICA8c3ZnIGNsYXNzPVwiJHtzdHlsZXMuY2FwdGlvbkNoZXZyb259XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgIDx1c2UgaHJlZj1cIiMke2NoZXZyb25Eb3duSWR9XCI+PC91c2U+XG4gICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3Qgc2hhcmVkWWVhclBpY2tlclBhbmVsID0gKHtcbiAgY2xvc2VMYWJlbCxcbiAgcHJldmlvdXNMYWJlbCxcbiAgbmV4dExhYmVsXG59KSA9PiBgXG4gIDxkaXYgY2xhc3M9XCIke3N0eWxlcy55ZWFyUGlja2VyUGFuZWx9XCIgZGF0YS15ZWFyLXBpY2tlci1wYW5lbCBoaWRkZW4+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N0eWxlcy55ZWFyUGlja2VyQ2xvc2V9XCIgZGF0YS15ZWFyLXBpY2tlci1jbG9zZSBhcmlhLWxhYmVsPVwiJHtjbG9zZUxhYmVsfVwiPiR7Y2xvc2VMYWJlbH08L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtzdHlsZXMueWVhckdyaWR9XCIgZGF0YS15ZWFyLWdyaWQ+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLnllYXJQaWNrZXJIZWFkZXJ9XCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3R5bGVzLnllYXJQYWdlcn1cIiBkYXRhLXllYXItcGFnZS1vZmZzZXQ9XCItMTJcIiBhcmlhLWxhYmVsPVwiJHtwcmV2aW91c0xhYmVsfVwiPiR7cHJldmlvdXNMYWJlbH08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzdHlsZXMueWVhclBhZ2VyfVwiIGRhdGEteWVhci1wYWdlLW9mZnNldD1cIjEyXCIgYXJpYS1sYWJlbD1cIiR7bmV4dExhYmVsfVwiPiR7bmV4dExhYmVsfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCB5ZWFyT3B0aW9uID0gKHllYXIsIHNlbGVjdGVkWWVhcikgPT4gYFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCIke3N0eWxlcy55ZWFyT3B0aW9ufVwiXG4gICAgZGF0YS15ZWFyLW9wdGlvbj1cIiR7eWVhcn1cIlxuICAgICR7eWVhciA9PT0gc2VsZWN0ZWRZZWFyID8gJ2RhdGEtc2VsZWN0ZWQteWVhciBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCInIDogJyd9XG4gID5cbiAgICAke3llYXJ9XG4gIDwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGNvbnN0IHdlZWtEYXlMYWJlbCA9IChsYWJlbCkgPT4gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy50aH1cIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+JHtsYWJlbH08L2Rpdj5gO1xuXG5leHBvcnQgY29uc3Qgd2Vla0RheSA9IChvKSA9PiB7XG4gIGNvbnN0IGluZm9MaW5lcyA9IFtdO1xuXG4gIGlmIChvLnJhdGUpIHtcbiAgICBpbmZvTGluZXMucHVzaChvLnJhdGVUKTtcbiAgfVxuXG4gIGlmIChvLm1pblN0YXkgJiYgby5taW5TdGF5VCkge1xuICAgIGluZm9MaW5lcy5wdXNoKG8ubWluU3RheVQpO1xuICB9XG5cbiAgaWYgKG8ubWF4U3RheSAmJiBvLm1heFN0YXlUKSB7XG4gICAgaW5mb0xpbmVzLnB1c2goby5tYXhTdGF5VCk7XG4gIH1cblxuICBjb25zdCBpbmZvSHRtbCA9IGluZm9MaW5lcy5sZW5ndGggPyBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzLmluZm99XCI+JHtpbmZvTGluZXMuam9pbignPGJyPicpfTwvZGl2PmAgOiAnJztcblxuICByZXR1cm4gYFxuICAgIDxkaXZcbiAgICAgICR7by5kaXNhYmxlZCA/IGBkYXRhLWRpc2FibGVkPSR7by5kaXNhYmxlZH0gYXJpYS1kaXNhYmxlZD1cInRydWVcImAgOiAnZGF0YS1lbmFibGVkJ31cbiAgICAgICR7by5pc0F2YWlsYWJsZU91dCA/ICdkYXRhLWF2YWlsYWJsZS1vdXQnIDogJyd9XG4gICAgICAke28uaXNBdmFpbGFibGVJbiA/ICdkYXRhLWF2YWlsYWJsZS1pbicgOiAnJ31cbiAgICAgICR7by5taW5TdGF5ID8gYGRhdGEtbWluLXN0YXk9JHtvLm1pblN0YXl9YCA6ICcnfVxuICAgICAgJHtvLm1heFN0YXkgPyBgZGF0YS1tYXgtc3RheT0ke28ubWF4U3RheX1gIDogJyd9XG4gICAgICBkYXRhLXZhbHVlPVwiJHtvLmxhYmVsfVwiXG4gICAgICBjbGFzcz1cIiR7c3R5bGVzLmNlbGx9ICR7by5pc0N1cnJlbnREYXkgPyBzdHlsZXMudG9kYXkgOiAnJ31cIlxuICAgICAgcm9sZT1cImdyaWRjZWxsXCJcbiAgICAgIHRhYmluZGV4PVwiJHtvLnRhYmluZGV4fVwiXG4gICAgICBhcmlhLWxhYmVsPVwiJHtvLmFyaWFMYWJlbH1cIlxuICAgICAgJHtvLmlzQ3VycmVudERheSA/ICdhcmlhLWN1cnJlbnQ9XCJkYXRlXCInIDogJyd9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCIke3N0eWxlcy5jbnR9XCI+JHtvLmxhYmVsfTwvc3Bhbj5cbiAgICAgICR7aW5mb0h0bWx9XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuXG5leHBvcnQgY29uc3QgZm9yd2FyZCA9IChsYWJlbCkgPT4gYFxuICA8YnV0dG9uIGNsYXNzPVwiJHtzdHlsZXMuZm9yd2FyZH1cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbH1cIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgICAgPHBhdGggZD1cIm05IDE4IDYtNi02LTZcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGNvbnN0IGJhY2sgPSAobGFiZWwpID0+IGBcbiAgPGJ1dHRvbiBjbGFzcz1cIiR7c3R5bGVzLmJhY2t9XCIgYXJpYS1sYWJlbD1cIiR7bGFiZWx9XCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxwYXRoIGQ9XCJtMTUgMTgtNi02IDYtNlwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9idXR0b24+XG5gO1xuXG5leHBvcnQgY29uc3Qgd2Vla0RheVBsYWNlaG9sZGVyID0gYDxkaXYgY2xhc3M9XCIke3N0eWxlcy5wbGFjZWhvbGRlcn1cIiBkYXRhLXBsYWNlaG9sZGVyIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PmA7XG5cbi8qIGVzbGludCBhcnJvdy1ib2R5LXN0eWxlOiAwICovXG5leHBvcnQgY29uc3Qgd2Vla1JvdyA9IChudW0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvcGVuOiBgPGRpdiByb2xlPVwicm93XCIgY2xhc3M9XCJqcy1ib2R5LXJvdy0ke251bX0gJHtzdHlsZXMud2Vla1Jvd31cIj5gLFxuICAgIGNsb3NlOiAnPC9kaXY+J1xuICB9O1xufTtcbiIsIi8qIGdsb2JhbCBjb25zb2xlICovXG5pbXBvcnQgeyBzdHJmdGltZSwgc3RycHRpbWUgfSBmcm9tICdzdHJ0aW1lJztcbmltcG9ydCB1dGlscyBmcm9tICd3aWRnZXQtdXRpbHMnO1xuY29uc3QgeyBpcyB9ID0gdXRpbHM7XG5cbmV4cG9ydCBjb25zdCBkYXRlVG9Jc28gPSAoeWVhciwgbW9udGgsIGRheSwgaXNTdHJpbmcgPSBmYWxzZSkgPT4ge1xuICBmdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDEwKSB7XG4gICAgICByZXR1cm4gYDAke251bWJlcn1gO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7cGFkKG1vbnRoICsgMSl9LSR7cGFkKGRheSl9YDtcbiAgfVxuXG4gIGxldCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgMTIsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRlVG9BcnJheSA9ICh2YWwsIGZvcm1hdCwgbG9jYWxlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0ZSA9IHN0cnB0aW1lKHZhbCwgZm9ybWF0LCBsb2NhbGUpO1xuICAgIGNvbnN0IGEgICAgPSBzdHJmdGltZShkYXRlLCAnJVktJW0tJWQnKS5zcGxpdCgnLScpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHBhcnNlSW50KGFbMF0pLCAvLyB5ZWFyXG4gICAgICBwYXJzZUludChhWzFdIC0gMSksIC8vIG1vbnRoIGluZGV4XG4gICAgICBwYXJzZUludChhWzJdKSAvLyBkYXlcbiAgICBdO1xuICB9IGNhdGNoKGUpIHtcbiAgICBpZiAoaXMoZS5tZXNzYWdlKSkge1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNMYXRlciA9IChzdGFydCwgZW5kKSA9PiBkYXRlVG9Jc28oLi4uc3RhcnQsIHRydWUpIDwgZGF0ZVRvSXNvKC4uLmVuZCwgdHJ1ZSk7XG5cbmV4cG9ydCBjb25zdCBpc0N1cnJlbnQgPSAoc3RhcnQsIGVuZCkgPT4gZGF0ZVRvSXNvKC4uLnN0YXJ0LCB0cnVlKSA9PSBkYXRlVG9Jc28oLi4uZW5kLCB0cnVlKTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoRGlmZiA9IChzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQuZ2V0TW9udGgoKSAtIHN0YXJ0LmdldE1vbnRoKCkgKyAoMTIgKiAoZW5kLmdldEZ1bGxZZWFyKCkgLSBzdGFydC5nZXRGdWxsWWVhcigpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk9mQ2VsbCA9IChjZWxsKSA9PiB7XG4gIGlmIChpcyhjZWxsLmRhdGFzZXQuZW5hYmxlZCkgfHwgaXMoY2VsbC5kYXRhc2V0LmF2YWlsYWJsZUluKSB8fCBpcyhjZWxsLmRhdGFzZXQuYXZhaWxhYmxlT3V0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHRGb3JtYXR0ZXIgPSAodmFsdWUsIHN0cikgPT4gc3RyLnJlcGxhY2UoJyVudW1iZXInLCB2YWx1ZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRpdiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNwYW4sIC5TbWlseUNhbGVuZGFyX19yZXNldCBhcHBsZXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBvYmplY3QsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpZnJhbWUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg1LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBwLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYmxvY2txdW90ZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHByZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGEsXG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgYWJiciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFjcm9ueW0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBhZGRyZXNzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYmlnLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2l0ZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNvZGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZWwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkZm4sIC5TbWlseUNhbGVuZGFyX19yZXNldCBlbSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGltZywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGlucywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGtiZCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHEsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc2FtcCxcbi5TbWlseUNhbGVuZGFyX19yZXNldCBzbWFsbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN0cmlrZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN0cm9uZywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN1YiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN1cCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHR0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdmFyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2VudGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkdCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgb2wsIC5TbWlseUNhbGVuZGFyX19yZXNldCB1bCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGxpLFxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZWxkc2V0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZm9ybSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRpdi5TbWlseUNhbGVuZGFyX19mb3JtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbGFiZWwsIC5TbWlseUNhbGVuZGFyX19yZXNldCBsZWdlbmQsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0YWJsZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNhcHRpb24sIC5TbWlseUNhbGVuZGFyX19yZXNldCB0Ym9keSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRmb290LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGhlYWQsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0cixcbi5TbWlseUNhbGVuZGFyX19yZXNldCB0aCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHRkLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYXJ0aWNsZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFzaWRlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgY2FudmFzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGV0YWlscywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZpZ2NhcHRpb24sIC5TbWlseUNhbGVuZGFyX19yZXNldCBmaWd1cmUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmb290ZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoZWFkZXIsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoZ3JvdXAsXG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgbWVudSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG5hdiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNlY3Rpb24sIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdW1tYXJ5LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGltZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG1hcmssIC5TbWlseUNhbGVuZGFyX19yZXNldCBhdWRpbywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHZpZGVvLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgYnV0dG9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgdGV4dGFyZWEsIC5TbWlseUNhbGVuZGFyX19yZXNldCBpbnB1dCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IC5TbWlseUNhbGVuZGFyX19idXR0b24sIC5TbWlseUNhbGVuZGFyX19yZXNldCAuU21pbHlDYWxlbmRhcl9fbGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplLWFkanVzdDogbm9uZTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCAxMDAlIFwiT3BlbiBzYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLW1vei10ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XG4gIHRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRleHQtZW1waGFzaXM6IG5vbmU7XG4gIHRleHQtZW1waGFzaXM6IG5vbmU7XG4gIHRleHQtaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWluZGVudDogMDtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xuICB0ZXh0LW91dGxpbmU6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC13cmFwOiBub3JtYWw7XG4gIGFsaWdubWVudC1hZGp1c3Q6IGF1dG87XG4gIGFsaWdubWVudC1iYXNlbGluZTogYmFzZWxpbmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lIDAgZWFzZSAwIDEgbm9ybWFsO1xuICBhbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICBhcHBlYXJhbmNlOiBub3JtYWw7XG4gIGF6aW11dGg6IGNlbnRlcjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kOiBub25lIDAgMCBhdXRvIHJlcGVhdCBzY3JvbGwgcGFkZGluZy1ib3ggdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYXNlbGluZS1zaGlmdDogYmFzZWxpbmU7XG4gIGJpbmRpbmc6IG5vbmU7XG4gIGJsZWVkOiA2cHQ7XG4gIGJvb2ttYXJrLWxhYmVsOiBjb250ZW50KCk7XG4gIGJvb2ttYXJrLWxldmVsOiBub25lO1xuICBib29rbWFyay1zdGF0ZTogb3BlbjtcbiAgYm9va21hcmstdGFyZ2V0OiBub25lO1xuICBib3JkZXI6IDAgbm9uZSB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBib3gtYWxpZ246IHN0cmV0Y2g7XG4gIC13ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xuICBib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XG4gIGJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleDogMDtcbiAgZmxleC1ncm91cDogMTtcbiAgYm94LWxpbmVzOiBzaW5nbGU7XG4gIGJveC1vcmRpbmFsLWdyb3VwOiAxO1xuICBib3gtb3JpZW50OiBpbmxpbmUtYXhpcztcbiAgYm94LXBhY2s6IHN0YXJ0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1icmVhay1hZnRlcjogYXV0bztcbiAgLW1vei1icmVhay1hZnRlcjogYXV0bztcbiAgYnJlYWstYWZ0ZXI6IGF1dG87XG4gIC13ZWJraXQtYnJlYWstYmVmb3JlOiBhdXRvO1xuICAtbW96LWJyZWFrLWJlZm9yZTogYXV0bztcbiAgYnJlYWstYmVmb3JlOiBhdXRvO1xuICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF1dG87XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xuICBicmVhay1pbnNpZGU6IGF1dG87XG4gIGNhcHRpb24tc2lkZTogdG9wO1xuICBjbGVhcjogbm9uZTtcbiAgY2xpcDogYXV0bztcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yLXByb2ZpbGU6IGF1dG87XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiBhdXRvO1xuICAtbW96LWNvbHVtbi1jb3VudDogYXV0bztcbiAgY29sdW1uLWNvdW50OiBhdXRvO1xuICAtd2Via2l0LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xuICAtbW96LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xuICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBub3JtYWw7XG4gIC1tb3otY29sdW1uLWdhcDogbm9ybWFsO1xuICBjb2x1bW4tZ2FwOiBub3JtYWw7XG4gIC13ZWJraXQtY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcbiAgLW1vei1jb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xuICBjb2x1bW4tcnVsZTogbWVkaXVtIG1lZGl1bSAjMWYxZjFmO1xuICAtd2Via2l0LWNvbHVtbi1zcGFuOiAxO1xuICAtbW96LWNvbHVtbi1zcGFuOiAxO1xuICBjb2x1bW4tc3BhbjogMTtcbiAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IGF1dG87XG4gIC1tb3otY29sdW1uLXdpZHRoOiBhdXRvO1xuICBjb2x1bW4td2lkdGg6IGF1dG87XG4gIC13ZWJraXQtY29sdW1uczogYXV0byBhdXRvO1xuICAtbW96LWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgY29sdW1uczogYXV0byBhdXRvO1xuICBjb250ZW50OiBub3JtYWw7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBub25lO1xuICBjb3VudGVyLXJlc2V0OiBub25lO1xuICBjcm9wOiBhdXRvO1xuICBjdXJzb3I6IGF1dG87XG4gIGRpcmVjdGlvbjogbHRyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRvbWluYW50LWJhc2VsaW5lOiBhdXRvO1xuICBkcm9wLWluaXRpYWwtYWZ0ZXItYWRqdXN0OiB0ZXh0LWFmdGVyLWVkZ2U7XG4gIGRyb3AtaW5pdGlhbC1hZnRlci1hbGlnbjogYmFzZWxpbmU7XG4gIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWRqdXN0OiB0ZXh0LWJlZm9yZS1lZGdlO1xuICBkcm9wLWluaXRpYWwtYmVmb3JlLWFsaWduOiBjYXBzLWhlaWdodDtcbiAgZHJvcC1pbml0aWFsLXNpemU6IGF1dG87XG4gIGRyb3AtaW5pdGlhbC12YWx1ZTogaW5pdGlhbDtcbiAgZWxldmF0aW9uOiBsZXZlbDtcbiAgZW1wdHktY2VsbHM6IHNob3c7XG4gIGZpdDogZmlsbDtcbiAgZml0LXBvc2l0aW9uOiAwJSAwJTtcbiAgZmxvYXQ6IG5vbmU7XG4gIGZsb2F0LW9mZnNldDogMCAwO1xuICBncmlkLWNvbHVtbnM6IG5vbmU7XG4gIGdyaWQtcm93czogbm9uZTtcbiAgaGFuZ2luZy1wdW5jdHVhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBoeXBoZW5hdGUtYWZ0ZXI6IGF1dG87XG4gIGh5cGhlbmF0ZS1iZWZvcmU6IGF1dG87XG4gIGh5cGhlbmF0ZS1jaGFyYWN0ZXI6IGF1dG87XG4gIGh5cGhlbmF0ZS1saW5lczogbm8tbGltaXQ7XG4gIGh5cGhlbmF0ZS1yZXNvdXJjZTogbm9uZTtcbiAgLXdlYmtpdC1oeXBoZW5zOiBtYW51YWw7XG4gIC1tb3otaHlwaGVuczogbWFudWFsO1xuICAtbXMtaHlwaGVuczogbWFudWFsO1xuICBoeXBoZW5zOiBtYW51YWw7XG4gIGljb246IGF1dG87XG4gIGltYWdlLW9yaWVudGF0aW9uOiBhdXRvO1xuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG4gIGltYWdlLXJlc29sdXRpb246IG5vcm1hbDtcbiAgaW5saW5lLWJveC1hbGlnbjogbGFzdDtcbiAgbGVmdDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGxpbmUtc3RhY2tpbmc6IGlubGluZS1saW5lLWhlaWdodCBleGNsdWRlLXJ1YnkgY29uc2lkZXItc2hpZnRzO1xuICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGUgbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJrczogbm9uZTtcbiAgbWFycXVlZS1kaXJlY3Rpb246IGZvcndhcmQ7XG4gIG1hcnF1ZWUtbG9vcDogMTtcbiAgbWFycXVlZS1wbGF5LWNvdW50OiAxO1xuICBtYXJxdWVlLXNwZWVkOiBub3JtYWw7XG4gIG1hcnF1ZWUtc3R5bGU6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDA7XG4gIG1vdmUtdG86IG5vcm1hbDtcbiAgbmF2LWRvd246IGF1dG87XG4gIG5hdi1pbmRleDogYXV0bztcbiAgbmF2LWxlZnQ6IGF1dG87XG4gIG5hdi1yaWdodDogYXV0bztcbiAgbmF2LXVwOiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICBvcnBoYW5zOiAyO1xuICBvdXRsaW5lOiBpbnZlcnQgbm9uZSBtZWRpdW07XG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgb3ZlcmZsb3ctc3R5bGU6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIHBhZ2U6IGF1dG87XG4gIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XG4gIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcbiAgcGFnZS1wb2xpY3k6IHN0YXJ0O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBub25lO1xuICBwZXJzcGVjdGl2ZTogbm9uZTtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XG4gIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcHJlc2VudGF0aW9uLWxldmVsOiAwO1xuICBwdW5jdHVhdGlvbi10cmltOiBub25lO1xuICBxdW90ZXM6IG5vbmU7XG4gIHJlbmRlcmluZy1pbnRlbnQ6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgcmlnaHQ6IGF1dG87XG4gIHJvdGF0aW9uOiAwO1xuICByb3RhdGlvbi1wb2ludDogNTAlIDUwJTtcbiAgcnVieS1hbGlnbjogYXV0bztcbiAgcnVieS1vdmVyaGFuZzogbm9uZTtcbiAgcnVieS1wb3NpdGlvbjogYmVmb3JlO1xuICBydWJ5LXNwYW46IG5vbmU7XG4gIHNpemU6IGF1dG87XG4gIHN0cmluZy1zZXQ6IG5vbmU7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbiAgdG9wOiBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICB0cmFuc2l0aW9uOiBhbGwgMCBlYXNlIDA7XG4gIHVuaWNvZGUtYmlkaTogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkb3dzOiAyO1xuICB3aWR0aDogYXV0bztcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHotaW5kZXg6IGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICAvKiBBbmQgZGlzYWJsZSBNUyBncmFkaWVudHMgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZD1mYWxzZSk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFkZHJlc3MsIC5TbWlseUNhbGVuZGFyX19yZXNldCBibG9ja3F1b3RlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkaXYsIC5TbWlseUNhbGVuZGFyX19yZXNldCBkbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGR0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZmllbGRzZXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmb3JtLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZGl2LlNtaWx5Q2FsZW5kYXJfX2Zvcm0sIC5TbWlseUNhbGVuZGFyX19yZXNldCBmcmFtZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGZyYW1lc2V0LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDEsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoMiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGgzLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaDQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBoNSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGg2LCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbm9mcmFtZXMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBvbCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHAsIC5TbWlseUNhbGVuZGFyX19yZXNldCB1bCwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNlbnRlciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRpciwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGhyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbWVudSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHByZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGFydGljbGUsIC5TbWlseUNhbGVuZGFyX19yZXNldCBhc2lkZSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGNhbnZhcywgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGRldGFpbHMsIC5TbWlseUNhbGVuZGFyX19yZXNldCBmaWdjYXB0aW9uLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZmlndXJlLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgZm9vdGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaGVhZGVyLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgaGdyb3VwLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgbWVudSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IG5hdiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHNlY3Rpb24sIC5TbWlseUNhbGVuZGFyX19yZXNldCBzdW1tYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgbGkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0aGVhZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0Ym9keSB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0Zm9vdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBjb2wge1xuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgY29sZ3JvdXAge1xuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgdGQsIC5TbWlseUNhbGVuZGFyX19yZXNldCB0aCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgY2FwdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgaW5wdXQsIC5TbWlseUNhbGVuZGFyX19yZXNldCBzZWxlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uU21pbHlDYWxlbmRhcl9fcmVzZXQgYiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGIgPiBpLCAuU21pbHlDYWxlbmRhcl9fcmVzZXQgc3Ryb25nID4gaSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGIgPiBlbSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IHN0cm9uZyA+IGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCBpID4gYiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGkgPiBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGVtID4gYiwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGVtID4gc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5TbWlseUNhbGVuZGFyX19yZXNldCB0ZXh0YXJlYSwgLlNtaWx5Q2FsZW5kYXJfX3Jlc2V0IGlucHV0IHtcbiAgY3Vyc29yOiB0ZXh0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpZGdldC11dGlsc0AxLjAuMC9ub2RlX21vZHVsZXMvd2lkZ2V0LXV0aWxzL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQzs7Ozs7O0VBTUcsd0VBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0ZBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtEQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlC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SjtBQUVFO0VBQ0Usc0JBQUE7QUFBSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFLSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFITjtBQU1FO0VBQ0UsWUFBQTtBQUpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yZXNldCB7XFxuXFx0ZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsXFxuXFx0YWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuXFx0c21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcblxcdGZpZWxkc2V0LCBmb3JtLCBkaXYuZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLFxcblxcdHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcblxcdG1lbnUsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgLmJ1dHRvbiwgLmxlZ2VuZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplLWFkanVzdDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCAxMDAlIFxcXCJPcGVuIHNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAtbW96LXRleHQtYWxpZ24tbGFzdDogaW5pdGlhbDtcXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBpbml0aWFsO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdGV4dC1lbXBoYXNpczogbm9uZTtcXG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcXG4gICAgdGV4dC1oZWlnaHQ6IGF1dG87XFxuICAgIHRleHQtaW5kZW50OiAwO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XFxuICAgIHRleHQtb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0ZXh0LXdyYXA6IG5vcm1hbDtcXG4gICAgYWxpZ25tZW50LWFkanVzdDogYXV0bztcXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBiYXNlbGluZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XFxuICAgIGFuaW1hdGlvbjogbm9uZSAwIGVhc2UgMCAxIG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgIGFwcGVhcmFuY2U6IG5vcm1hbDtcXG4gICAgYXppbXV0aDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmUgMCAwIGF1dG8gcmVwZWF0IHNjcm9sbCBwYWRkaW5nLWJveCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIGJhc2VsaW5lLXNoaWZ0OiBiYXNlbGluZTtcXG4gICAgYmluZGluZzogbm9uZTtcXG4gICAgYmxlZWQ6IDZwdDtcXG4gICAgYm9va21hcmstbGFiZWw6IGNvbnRlbnQoKTtcXG4gICAgYm9va21hcmstbGV2ZWw6IG5vbmU7XFxuICAgIGJvb2ttYXJrLXN0YXRlOiBvcGVuO1xcbiAgICBib29rbWFyay10YXJnZXQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMCBub25lIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIGJveC1hbGlnbjogc3RyZXRjaDtcXG4gICAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogc2xpY2U7XFxuICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBzbGljZTtcXG4gICAgYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICBmbGV4OiAwLjA7XFxuICAgIGZsZXgtZ3JvdXA6IDE7XFxuICAgIGJveC1saW5lczogc2luZ2xlO1xcbiAgICBib3gtb3JkaW5hbC1ncm91cDogMTtcXG4gICAgYm94LW9yaWVudDogaW5saW5lLWF4aXM7XFxuICAgIGJveC1wYWNrOiBzdGFydDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAgIC1tb3otYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAgIGJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgICAtd2Via2l0LWJyZWFrLWJlZm9yZTogYXV0bztcXG4gICAgLW1vei1icmVhay1iZWZvcmU6IGF1dG87XFxuICAgIGJyZWFrLWJlZm9yZTogYXV0bztcXG4gICAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcXG4gICAgYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgICBjYXB0aW9uLXNpZGU6IHRvcDtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICAgIGNsaXA6IGF1dG87XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvci1wcm9maWxlOiBhdXRvO1xcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogYXV0bztcXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IGF1dG87XFxuICAgIGNvbHVtbi1jb3VudDogYXV0bztcXG4gICAgLXdlYmtpdC1jb2x1bW4tZmlsbDogYmFsYW5jZTtcXG4gICAgLW1vei1jb2x1bW4tZmlsbDogYmFsYW5jZTtcXG4gICAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XFxuICAgIC13ZWJraXQtY29sdW1uLWdhcDogbm9ybWFsO1xcbiAgICAtbW96LWNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gICAgY29sdW1uLWdhcDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxuICAgIC1tb3otY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gICAgY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gICAgLXdlYmtpdC1jb2x1bW4tc3BhbjogMTtcXG4gICAgLW1vei1jb2x1bW4tc3BhbjogMTtcXG4gICAgY29sdW1uLXNwYW46IDE7XFxuICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiBhdXRvO1xcbiAgICAtbW96LWNvbHVtbi13aWR0aDogYXV0bztcXG4gICAgY29sdW1uLXdpZHRoOiBhdXRvO1xcbiAgICAtd2Via2l0LWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgLW1vei1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgY29udGVudDogbm9ybWFsO1xcbiAgICBjb3VudGVyLWluY3JlbWVudDogbm9uZTtcXG4gICAgY291bnRlci1yZXNldDogbm9uZTtcXG4gICAgY3JvcDogYXV0bztcXG4gICAgY3Vyc29yOiBhdXRvO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBkb21pbmFudC1iYXNlbGluZTogYXV0bztcXG4gICAgZHJvcC1pbml0aWFsLWFmdGVyLWFkanVzdDogdGV4dC1hZnRlci1lZGdlO1xcbiAgICBkcm9wLWluaXRpYWwtYWZ0ZXItYWxpZ246IGJhc2VsaW5lO1xcbiAgICBkcm9wLWluaXRpYWwtYmVmb3JlLWFkanVzdDogdGV4dC1iZWZvcmUtZWRnZTtcXG4gICAgZHJvcC1pbml0aWFsLWJlZm9yZS1hbGlnbjogY2Fwcy1oZWlnaHQ7XFxuICAgIGRyb3AtaW5pdGlhbC1zaXplOiBhdXRvO1xcbiAgICBkcm9wLWluaXRpYWwtdmFsdWU6IGluaXRpYWw7XFxuICAgIGVsZXZhdGlvbjogbGV2ZWw7XFxuICAgIGVtcHR5LWNlbGxzOiBzaG93O1xcbiAgICBmaXQ6IGZpbGw7XFxuICAgIGZpdC1wb3NpdGlvbjogMCUgMCU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBmbG9hdC1vZmZzZXQ6IDAgMDtcXG4gICAgZ3JpZC1jb2x1bW5zOiBub25lO1xcbiAgICBncmlkLXJvd3M6IG5vbmU7XFxuICAgIGhhbmdpbmctcHVuY3R1YXRpb246IG5vbmU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgaHlwaGVuYXRlLWFmdGVyOiBhdXRvO1xcbiAgICBoeXBoZW5hdGUtYmVmb3JlOiBhdXRvO1xcbiAgICBoeXBoZW5hdGUtY2hhcmFjdGVyOiBhdXRvO1xcbiAgICBoeXBoZW5hdGUtbGluZXM6IG5vLWxpbWl0O1xcbiAgICBoeXBoZW5hdGUtcmVzb3VyY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtaHlwaGVuczogbWFudWFsO1xcbiAgICAtbW96LWh5cGhlbnM6IG1hbnVhbDtcXG4gICAgLW1zLWh5cGhlbnM6IG1hbnVhbDtcXG4gICAgaHlwaGVuczogbWFudWFsO1xcbiAgICBpY29uOiBhdXRvO1xcbiAgICBpbWFnZS1vcmllbnRhdGlvbjogYXV0bztcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xcbiAgICBpbWFnZS1yZXNvbHV0aW9uOiBub3JtYWw7XFxuICAgIGlubGluZS1ib3gtYWxpZ246IGxhc3Q7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLXN0YWNraW5nOiBpbmxpbmUtbGluZS1oZWlnaHQgZXhjbHVkZS1ydWJ5IGNvbnNpZGVyLXNoaWZ0cztcXG4gICAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlIG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFya3M6IG5vbmU7XFxuICAgIG1hcnF1ZWUtZGlyZWN0aW9uOiBmb3J3YXJkO1xcbiAgICBtYXJxdWVlLWxvb3A6IDE7XFxuICAgIG1hcnF1ZWUtcGxheS1jb3VudDogMTtcXG4gICAgbWFycXVlZS1zcGVlZDogbm9ybWFsO1xcbiAgICBtYXJxdWVlLXN0eWxlOiBzY3JvbGw7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtb3ZlLXRvOiBub3JtYWw7XFxuICAgIG5hdi1kb3duOiBhdXRvO1xcbiAgICBuYXYtaW5kZXg6IGF1dG87XFxuICAgIG5hdi1sZWZ0OiBhdXRvO1xcbiAgICBuYXYtcmlnaHQ6IGF1dG87XFxuICAgIG5hdi11cDogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3JwaGFuczogMjtcXG4gICAgb3V0bGluZTogaW52ZXJ0IG5vbmUgbWVkaXVtO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIG92ZXJmbG93LXN0eWxlOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwYWdlOiBhdXRvO1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XFxuICAgIHBhZ2UtcG9saWN5OiBzdGFydDtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogbm9uZTtcXG4gICAgcGVyc3BlY3RpdmU6IG5vbmU7XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHByZXNlbnRhdGlvbi1sZXZlbDogMDtcXG4gICAgcHVuY3R1YXRpb24tdHJpbTogbm9uZTtcXG4gICAgcXVvdGVzOiBub25lO1xcbiAgICByZW5kZXJpbmctaW50ZW50OiBhdXRvO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICByb3RhdGlvbjogMDtcXG4gICAgcm90YXRpb24tcG9pbnQ6IDUwJSA1MCU7XFxuICAgIHJ1YnktYWxpZ246IGF1dG87XFxuICAgIHJ1Ynktb3Zlcmhhbmc6IG5vbmU7XFxuICAgIHJ1YnktcG9zaXRpb246IGJlZm9yZTtcXG4gICAgcnVieS1zcGFuOiBub25lO1xcbiAgICBzaXplOiBhdXRvO1xcbiAgICBzdHJpbmctc2V0OiBub25lO1xcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XFxuICAgIHRvcDogYXV0bztcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAgZWFzZSAwO1xcbiAgICB1bmljb2RlLWJpZGk6IG5vcm1hbDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB3aGl0ZS1zcGFjZS1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIHdpZG93czogMjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICB6LWluZGV4OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgLyogQW5kIGRpc2FibGUgTVMgZ3JhZGllbnRzICovXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIH1cXG4gIGFkZHJlc3MsIGJsb2NrcXVvdGUsIGRkLCBkaXYsIGRsLCBkdCwgZmllbGRzZXQsIGZvcm0sIGRpdi5mb3JtLCBmcmFtZSwgZnJhbWVzZXQsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIG5vZnJhbWVzLCBvbCwgcCwgdWwsIGNlbnRlciwgZGlyLCBociwgbWVudSwgcHJlLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgbGkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICB9XFxuICB0YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgfVxcbiAgdHIge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxuICB9XFxuICB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gIH1cXG4gIHRib2R5IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xcbiAgfVxcbiAgdGZvb3Qge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XFxuICB9XFxuICBjb2wge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XFxuICB9XFxuICBjb2xncm91cCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcXG4gIH1cXG4gIHRkLCB0aCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB9XFxuICBjYXB0aW9uIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcXG4gIH1cXG4gIGlucHV0LCBzZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICBiLCBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIGIgPiBpLCBzdHJvbmcgPiBpLCBiID4gZW0sIHN0cm9uZyA+IGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIH1cXG4gIGkgPiB7XFxuICAgIGIsIHN0cm9uZyB7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICB9XFxuICBlbSA+IHtcXG4gICAgYiwgc3Ryb25nIHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gIH1cXG4gIHRleHRhcmVhLCBpbnB1dCB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicmVzZXRcIjogYFNtaWx5Q2FsZW5kYXJfX3Jlc2V0YCxcblx0XCJmb3JtXCI6IGBTbWlseUNhbGVuZGFyX19mb3JtYCxcblx0XCJidXR0b25cIjogYFNtaWx5Q2FsZW5kYXJfX2J1dHRvbmAsXG5cdFwibGVnZW5kXCI6IGBTbWlseUNhbGVuZGFyX19sZWdlbmRgXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgbG9hZGVyXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQC13ZWJraXQta2V5ZnJhbWVzIFNtaWx5Q2FsZW5kYXJfX3NtaWx5LXNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBTbWlseUNhbGVuZGFyX19zbWlseS1zcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgY29udGVudDogXCJcIjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMC45NyclM0UlM0NwYXRoIGQ9J00zMiwxNS40OGExNi41MiwxNi41MiwwLDAsMS0xLjM3LDYuMjgsMTYuMzUsMTYuMzUsMCwwLDEtOSw4LjYzLDE1Ljg3LDE1Ljg3LDAsMCwxLTE3LjMtMy43OEExNS40MywxNS40MywwLDAsMSw0LjcyLDQuNzIsMTUsMTUsMCwwLDEsMTUuNDkuNTJhMTQuNzYsMTQuNzYsMCwwLDEsMTAuNCw0LjU2QTE0Ljc3LDE0Ljc3LDAsMCwxLDI5LDkuOWExNC40NSwxNC40NSwwLDAsMSwuODUsMy4zNWguMTNBMi4wNiwyLjA2LDAsMCwxLDMyLDE1LjMxYS45MS45MSwwLDAsMSwwLC4xN1pNMjguNzIsMTBhMTQuMjcsMTQuMjcsMCwwLDAtMy4yLTQuNTUsMTQsMTQsMCwwLDAtMTAtMy45QTEzLjcyLDEzLjcyLDAsMCwwLDMsMTAuM2ExMy40MywxMy40MywwLDAsMCwuMjQsMTAuMjcsMTMuMDUsMTMuMDUsMCwwLDAsMTIuMjgsNy44MiwxMi45MiwxMi45MiwwLDAsMCw0Ljg4LTEuMSwxMi42NSwxMi42NSwwLDAsMCw0LjA2LTIuODcsMTIuNDgsMTIuNDgsMCwwLDAsMi42Mi00LjE1LDEyLjI0LDEyLjI0LDAsMCwwLC44Mi00Ljc5aDBhLjkxLjkxLDAsMCwxLDAtLjE3LDIuMDcsMi4wNywwLDAsMSwxLjg0LTIuMDUsMTQuMjcsMTQuMjcsMCwwLDAtMS0zLjI2WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMC41MSknLyUzRSUzQy9zdmclM0VcIik7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogLTEwcHggMCAwIC0xMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogU21pbHlDYWxlbmRhcl9fc21pbHktc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogU21pbHlDYWxlbmRhcl9fc21pbHktc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXI6OmJlZm9yZSwgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyOjphZnRlciB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2xvYWRpbmc6OmJlZm9yZSwgLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2xvYWRpbmc6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgZHJvcGRvd25cblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB6LWluZGV4OiAxMDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMgLlNtaWx5Q2FsZW5kYXJfX2JhY2sge1xuICB0b3A6IDFlbTtcbiAgbGVmdDogMWVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxZW07XG59XG5cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSAuU21pbHlDYWxlbmRhcl9fY2VsbDo6YmVmb3JlLCAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gLlNtaWx5Q2FsZW5kYXJfX2NlbGw6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgc2VsZWN0aW9ucywgbGVmdCAtIGNlbnRlciAtIHJpZ2h0XG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIGNlbGxzIGRpc2FibGVkXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1kaXNhYmxlZD1jZW50ZXJdIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1kaXNhYmxlZC1jb2xvciwgI2JmYmZiZik7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBjZWxscyBoaWdobGlnaHRlZFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9bGVmdF0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtY29sb3IsIHJnYig1NS4yNSwgNTUuMjUsIDU1LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9bGVmdF06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBvcGFjaXR5OiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJnLW9wYWNpdHksIDAuNSk7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1sZWZ0XTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPWNlbnRlcl0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtY29sb3IsIHJnYig1NS4yNSwgNTUuMjUsIDU1LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9Y2VudGVyXTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIHJnYigxODMuMjY5NjYyOTIxMywgMjAyLjQ4MzE0NjA2NzQsIDI1MC43MzAzMzcwNzg3KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1oaWdobGlnaHRlZD1yaWdodF0ge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtY29sb3IsIHJnYig1NS4yNSwgNTUuMjUsIDU1LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaGlnaGxpZ2h0ZWQ9cmlnaHRdOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xuICB3aWR0aDogNTAlO1xuICByaWdodDogNTAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWhpZ2hsaWdodGVkPXJpZ2h0XTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1oaWdobGlnaHRlZC1iZy1jb2xvciwgcmdiKDE4My4yNjk2NjI5MjEzLCAyMDIuNDgzMTQ2MDY3NCwgMjUwLjczMDMzNzA3ODcpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY2VsbHMgaW52YWxpZFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1sZWZ0XSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWNvbG9yLCByZ2IoMTc4LjI1LCAxNzguMjUsIDE3OC4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9bGVmdF06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIHJnYigyMjcuMjUsIDIyNy4yNSwgMjI3LjI1KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9bGVmdF06OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgcmdiKDIyNy4yNSwgMjI3LjI1LCAyMjcuMjUpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9Y2VudGVyXSB7XG4gIGNvbG9yOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWNvbG9yLCByZ2IoMTc4LjI1LCAxNzguMjUsIDE3OC4yNSkpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9Y2VudGVyXTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1iZy1jb2xvciwgcmdiKDIyNy4yNSwgMjI3LjI1LCAyMjcuMjUpKTtcbiAgb3BhY2l0eTogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1iZy1vcGFjaXR5LCAwLjUpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtdGhlbWU9YmFzaWNdIFtkYXRhLWludmFsaWQ9cmlnaHRdIHtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtY29sb3IsIHJnYigxNzguMjUsIDE3OC4yNSwgMTc4LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaW52YWxpZD1yaWdodF06OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWludmFsaWQtYmctY29sb3IsIHJnYigyMjcuMjUsIDIyNy4yNSwgMjI3LjI1KSk7XG4gIG9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgMC41KTtcbiAgd2lkdGg6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1pbnZhbGlkPXJpZ2h0XTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCByZ2IoMjI3LjI1LCAyMjcuMjUsIDIyNy4yNSkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBjZWxsIGhvdmVyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhcltkYXRhLXRoZW1lPWJhc2ljXSBbZGF0YS1ob3ZlcmVkXTpub3QoW2RhdGEtZGlzYWJsZWQ9Y2VudGVyXSkge1xuICBjb2xvcjogdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtY29sb3IsIHJnYig1NS4yNSwgNTUuMjUsIDU1LjI1KSk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJbZGF0YS10aGVtZT1iYXNpY10gW2RhdGEtaG92ZXJlZF06bm90KFtkYXRhLWRpc2FibGVkPWNlbnRlcl0pOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWhpZ2hsaWdodGVkLWJnLWNvbG9yLCByZ2IoMTgzLjI2OTY2MjkyMTMsIDIwMi40ODMxNDYwNjc0LCAyNTAuNzMwMzM3MDc4NykpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWlseS1jYWxlbmRhci1jZWxsLWJvcmRlci1yYWRpdXMsIDZweCk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgY29sb3JzXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIHtcbiAgZm9udDogMXJlbS8xLjQgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodDogMjVweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvblBpY2tlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fc3ByaXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvblRyaWdnZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjU1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2U7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25MYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25DaGV2cm9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMC45NXJlbTtcbiAgaGVpZ2h0OiAwLjk1cmVtO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uVHJpZ2dlcjpob3Zlcixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2FwdGlvblRyaWdnZXJbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb25UcmlnZ2VyOmZvY3VzLXZpc2libGUsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQYWdlcjpmb2N1cy12aXNpYmxlLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyT3B0aW9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgIzQ0NDQ0NDtcbiAgb3V0bGluZS1vZmZzZXQ6IDFweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBpY2tlclBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICBnYXA6IDAuNnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJDbG9zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIG1pbi1oZWlnaHQ6IDIuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJIZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJQYWdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyUGFnZXJbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC40NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX195ZWFyR3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgzLjA1cmVtLCBhdXRvKTtcbiAgZ2FwOiAwLjRyZW07XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhclBpY2tlckNsb3NlOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgIzQ0NDQ0NDtcbiAgb3V0bGluZS1vZmZzZXQ6IDFweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9feWVhck9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgcGFkZGluZzogMC40NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3llYXJPcHRpb25bZGF0YS1zZWxlY3RlZC15ZWFyXSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zbWlseS1jYWxlbmRhci10b29sdGlwLWJnLWNvbG9yLCAjMzMzKTtcbiAgY29sb3I6IHZhcigtLXNtaWx5LWNhbGVuZGFyLXRvb2x0aXAtY29sb3IsICNmZmYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDUwMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXAgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcCAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93LCAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXAgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcCAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93OjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj10b3BdID4gLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBBcnJvdyB7XG4gIGJvdHRvbTogLTRweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcFtkYXRhLXBvcHBlci1wbGFjZW1lbnRePWJvdHRvbV0gPiAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93IHtcbiAgdG9wOiAtNHB4O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190b29sdGlwW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49bGVmdF0gPiAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93IHtcbiAgcmlnaHQ6IC00cHg7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3Rvb2x0aXBbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1yaWdodF0gPiAuU21pbHlDYWxlbmRhcl9fdG9vbHRpcEFycm93IHtcbiAgbGVmdDogLTRweDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fbW9udGhzV3JhcHBlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWluLWhlaWdodDogMnJlbTtcbiAgei1pbmRleDogMjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fbW9iaWxlV2Vla2RheXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19tQ2VsbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSAyNSU7XG4gIGZsZXg6IDEgMSAyNSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fbUNlbGwge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSAxMDAlO1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICB9XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX21vbnRoIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX3RhYmxlSGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDA7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBnYXA6IDAuMmVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX193ZWVrUm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190aCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fY2VsbCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fcGxhY2Vob2xkZXIge1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIDMwcHg7XG4gIGZsZXg6IDEgMSAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX190aCB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjb2xvcjogI2FhYWFhYTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NlbGw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jZWxsOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgIzQ0NDQ0NDtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIHotaW5kZXg6IDI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2NlbGwuU21pbHlDYWxlbmRhcl9fdG9kYXkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fcGxhY2Vob2xkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19jbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2luZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIHBhZGRpbmc6IDFweCAzcHg7XG4gIGNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNSk7XG4gIHJpZ2h0OiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX195ZWFyUGlja2VyT3BlbiB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uU21pbHlDYWxlbmRhcl9fZm9jdXMsXG4uU21pbHlDYWxlbmRhcl9fZGlzYWJsZWQsXG4uU21pbHlDYWxlbmRhcl9fc2VsZWN0ZWQsXG4uU21pbHlDYWxlbmRhcl9fcmV2ZXJzZWQsXG4uU21pbHlDYWxlbmRhcl9fZGlyZWN0LFxuLlNtaWx5Q2FsZW5kYXJfX3NlbGVjdGluZ1JldmVyc2VkLFxuLlNtaWx5Q2FsZW5kYXJfX3NlbGVjdGluZ0RpcmVjdCxcbi5TbWlseUNhbGVuZGFyX19hY3Rpb25zRW5hYmxlZCxcbi5TbWlseUNhbGVuZGFyX19oaWdobGlnaHRlZCxcbi5TbWlseUNhbGVuZGFyX19pbnZhbGlkIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBjZWxsIGhvdmVyIGN1cnNvcnNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyW2RhdGEtc2VsZWN0YWJsZT10cnVlXSAuU21pbHlDYWxlbmRhcl9fY2VsbCAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGJ1dHRvbnNcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogMjNweDtcbiAgZmlsbDogIzQ0NDQ0NDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQgc3ZnLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrIHN2ZyB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZDphY3RpdmUsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQ6Zm9jdXMsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2s6YWN0aXZlLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZDpmb2N1cy12aXNpYmxlLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19iYWNrOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgIzQ0NDQ0NDtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZDpob3Zlcixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFjazpob3ZlciB7XG4gIGZpbGw6ICMzODk1ZDk7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmRbZGlzYWJsZWRdLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkW2Rpc2FibGVkXTpob3Zlcixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhciAuU21pbHlDYWxlbmRhcl9fYmFja1tkaXNhYmxlZF0sXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgLlNtaWx5Q2FsZW5kYXJfX2JhY2tbZGlzYWJsZWRdOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZpbGw6ICM0NDQ0NDQ7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgbW9iaWxlIG1vZGVcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyksXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIG1heC1oZWlnaHQ6IDc1dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYykgLlNtaWx5Q2FsZW5kYXJfX3BhZ2luYXRpb24sXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTtcbiAgbWluLWhlaWdodDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fbW9udGhzV3JhcHBlcixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19tb250aHNXcmFwcGVyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFlbTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fbW9iaWxlV2Vla2RheXMsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fbW9iaWxlV2Vla2RheXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKSAuU21pbHlDYWxlbmRhcl9fbUNlbGwsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZSAuU21pbHlDYWxlbmRhcl9fbUNlbGwge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19jYXB0aW9uLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUgLlNtaWx5Q2FsZW5kYXJfX2NhcHRpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IHZhcigtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodCk7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX19tb250aDpmaXJzdC1jaGlsZCAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX19tb250aDpmaXJzdC1jaGlsZCAuU21pbHlDYWxlbmRhcl9fY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDAuMzVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi4xNWVtO1xufVxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGU6bm90KC5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMpIC5TbWlseUNhbGVuZGFyX190YWJsZUhlYWRlcixcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlIC5TbWlseUNhbGVuZGFyX190YWJsZUhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyk6bm90KC5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCkgLlNtaWx5Q2FsZW5kYXJfX2ZvcndhcmQsXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZTpub3QoLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYyk6bm90KC5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCkgLlNtaWx5Q2FsZW5kYXJfX2JhY2ssXG4uU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIuU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljLlNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGUuU21pbHlDYWxlbmRhcl9fdmlzaWJsZTpub3QoLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkKSAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlOm5vdCguU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpIC5TbWlseUNhbGVuZGFyX19iYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKS5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCAuU21pbHlDYWxlbmRhcl9fZm9yd2FyZCxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlOm5vdCguU21pbHlDYWxlbmRhcl9fZHJvcEJhc2ljKS5TbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCAuU21pbHlDYWxlbmRhcl9fYmFjayxcbi5TbWlseUNhbGVuZGFyX19jYWxlbmRhci5TbWlseUNhbGVuZGFyX19kcm9wQmFzaWMuU21pbHlDYWxlbmRhcl9fbW9iaWxlTW9kZS5TbWlseUNhbGVuZGFyX192aXNpYmxlLlNtaWx5Q2FsZW5kYXJfX21vYmlsZVBhZ2luYXRpb25FbmFibGVkIC5TbWlseUNhbGVuZGFyX19mb3J3YXJkLFxuLlNtaWx5Q2FsZW5kYXJfX2NhbGVuZGFyLlNtaWx5Q2FsZW5kYXJfX2Ryb3BCYXNpYy5TbWlseUNhbGVuZGFyX19tb2JpbGVNb2RlLlNtaWx5Q2FsZW5kYXJfX3Zpc2libGUuU21pbHlDYWxlbmRhcl9fbW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQgLlNtaWx5Q2FsZW5kYXJfX2JhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiB2YXIoLS1jYWxlbmRhci13ZWVrZGF5cy1oZWlnaHQpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLlNtaWx5Q2FsZW5kYXJfX3NyT25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAwO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuU21pbHlDYWxlbmRhcl9fY2FsZW5kYXIgKiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9hZGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NhbGVuZGFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Ryb3Auc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS1iYXNpYy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O3dEQUFBO0FBTUE7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUNB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QTtBQWtKRjs7QUEvSUE7RUFFSTtJQUNFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtFQWlKSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBsb2FkZXJcXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc21pbHktc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbWlseS1zcGluIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgJjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjcpO1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGljb24tc3Bpbm5lci1zdmc7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIG1hcmdpbjogLTEwcHggMCAwIC0xMHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNtaWx5LXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IHNtaWx5LXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbiAgfVxcblxcbiAgJjo6YmVmb3JlLFxcbiAgJjo6YWZ0ZXIge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG5cXG4gICYubG9hZGluZyB7XFxuICAgICY6OmJlZm9yZSxcXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ3N2Zy11cmknO1xcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnbG9hZGluZyc7XFxuQGltcG9ydCAnZHJvcCc7XFxuQGltcG9ydCAndGhlbWUtYmFzaWMnO1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbiAgICBjb2xvcnNcXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgZm9udDogMXJlbS8xLjQgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICRjYWxlbmRhci1iZy1jb2xvcjtcXG4gIC0tY2FsZW5kYXItd2Vla2RheXMtaGVpZ2h0OiAyNXB4O1xcblxcbiAgLmNhcHRpb24ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhlbTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uUGlja2VyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNwcml0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxuXFxuICAuY2FwdGlvblRyaWdnZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjb2xvcjogJGNlbGwtY29sb3I7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC41NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMC40NXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMjBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmNhcHRpb25MYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuXFxuICAuY2FwdGlvbkNoZXZyb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAwLjk1cmVtO1xcbiAgICBoZWlnaHQ6IDAuOTVyZW07XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICB9XFxuXFxuICAuY2FwdGlvblRyaWdnZXI6aG92ZXIsXFxuICAuY2FwdGlvblRyaWdnZXJbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIH1cXG5cXG4gIC5jYXB0aW9uVHJpZ2dlcjpmb2N1cy12aXNpYmxlLFxcbiAgLnllYXJQYWdlcjpmb2N1cy12aXNpYmxlLFxcbiAgLnllYXJPcHRpb246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkYnRuLWZpbGw7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAxcHg7XFxuICB9XFxuXFxuICAueWVhclBpY2tlclBhbmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogJGNhbGVuZGFyLWJnLWNvbG9yO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbm1heCgwLCAxZnIpIGF1dG87XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIH1cXG5cXG4gIC55ZWFyUGlja2VyQ2xvc2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gICAgY29sb3I6ICRidG4tZmlsbDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICAgIG1pbi1oZWlnaHQ6IDIuN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAueWVhclBpY2tlckhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIH1cXG5cXG4gIC55ZWFyUGFnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gICAgY29sb3I6ICRidG4tZmlsbDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtaW4taGVpZ2h0OiAyLjdyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgfVxcblxcbiAgLnllYXJQYWdlcltkaXNhYmxlZF0ge1xcbiAgICBvcGFjaXR5OiAwLjQ1O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB9XFxuXFxuICAueWVhckdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMy4wNXJlbSwgYXV0byk7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XFxuICB9XFxuXFxuICAueWVhclBpY2tlckNsb3NlOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgJGJ0bi1maWxsO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMXB4O1xcbiAgfVxcblxcbiAgLnllYXJPcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICRjZWxsLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgICBwYWRkaW5nOiAwLjQ1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC55ZWFyT3B0aW9uW2RhdGEtc2VsZWN0ZWQteWVhcl0ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcblxcbiAgLnRvb2x0aXAge1xcbiAgICBiYWNrZ3JvdW5kOiAkdG9vbHRpcC1iZy1jb2xvcjtcXG4gICAgY29sb3I6ICR0b29sdGlwLWNvbG9yO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHotaW5kZXg6IDUwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICAgIC50b29sdGlwQXJyb3cge1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gICAgICAmLCAmOjpiZWZvcmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDhweDtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgICB9XFxuXFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJltkYXRhLXBvcHBlci1wbGFjZW1lbnRePSd0b3AnXSA+IC50b29sdGlwQXJyb3cge1xcbiAgICAgIGJvdHRvbTogLTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgJltkYXRhLXBvcHBlci1wbGFjZW1lbnRePSdib3R0b20nXSA+IC50b29sdGlwQXJyb3cge1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgJltkYXRhLXBvcHBlci1wbGFjZW1lbnRePSdsZWZ0J10gPiAudG9vbHRpcEFycm93IHtcXG4gICAgICByaWdodDogLTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgJltkYXRhLXBvcHBlci1wbGFjZW1lbnRePSdyaWdodCddID4gLnRvb2x0aXBBcnJvdyB7XFxuICAgICAgbGVmdDogLTRweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vbnRoc1dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyZW07XFxuICB9XFxuXFxuICAucGFnaW5hdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMnJlbTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5tb2JpbGVXZWVrZGF5cyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubUNlbGwge1xcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4OiAxIDEgMjUlO1xcbiAgICBmbGV4OiAxIDEgMjUlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XFxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMSAxIDEwMCU7XFxuICAgICAgZmxleDogMSAxIDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb250aCB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnRhYmxlSGVhZGVyIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGdhcDogMC4yZW07XFxuICB9XFxuXFxuICAud2Vla1JvdyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gIH1cXG5cXG4gIC50aCxcXG4gIC5jZWxsLFxcbiAgLnBsYWNlaG9sZGVyIHtcXG4gICAgd2lkdGg6ICRjZWxsLXdpZHRoO1xcbiAgICBtaW4td2lkdGg6ICRjZWxsLXdpZHRoO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleDogMSAxICRjZWxsLXdpZHRoO1xcbiAgICBmbGV4OiAxIDEgJGNlbGwtd2lkdGg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAudGgge1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgY29sb3I6ICR0aC1jb2xvcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNlbGwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogJGNlbGwtY29sb3I7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG5cXG4gICAgJjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmOmZvY3VzLXZpc2libGUge1xcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkYnRuLWZpbGw7XFxuICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAmLnRvZGF5IHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnBsYWNlaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgfVxcblxcbiAgLmNudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xcbiAgICBjb2xvcjogJGluZm8tY29sb3I7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5jYWxlbmRhci55ZWFyUGlja2VyT3BlbiB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmZvY3VzLFxcbi5kaXNhYmxlZCxcXG4uc2VsZWN0ZWQsXFxuLnJldmVyc2VkLFxcbi5kaXJlY3QsXFxuLnNlbGVjdGluZ1JldmVyc2VkLFxcbi5zZWxlY3RpbmdEaXJlY3QsXFxuLmFjdGlvbnNFbmFibGVkLFxcbi5oaWdobGlnaHRlZCxcXG4uaW52YWxpZCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICBjZWxsIGhvdmVyIGN1cnNvcnNcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgLy8gY3Vyc29yIHBvaW50ZXIgaWYgY2FsZW5kYXIgaXMgc2VsZWN0YWJsZVxcbiAgJltkYXRhLXNlbGVjdGFibGU9XFxcInRydWVcXFwiXSAuY2VsbCAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgYnV0dG9uc1xcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYWxlbmRhciB7XFxuXFxuICAuZm9yd2FyZCxcXG4gIC5iYWNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDIzcHg7XFxuICAgIGZpbGw6ICRidG4tZmlsbDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIHN2ZyB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3J3YXJkIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IGF1dG87XFxuICB9XFxuXFxuICAuZm9yd2FyZDphY3RpdmUsXFxuICAuZm9yd2FyZDpmb2N1cyxcXG4gIC5iYWNrOmFjdGl2ZSxcXG4gIC5iYWNrOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5mb3J3YXJkOmZvY3VzLXZpc2libGUsXFxuICAuYmFjazpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICRidG4tZmlsbDtcXG4gIH1cXG5cXG4gIC5mb3J3YXJkOmhvdmVyLFxcbiAgLmJhY2s6aG92ZXIge1xcbiAgICBmaWxsOiAkYnRuLWZpbGwtaG92ZXI7XFxuICB9XFxuXFxuICAuZm9yd2FyZFtkaXNhYmxlZF0sXFxuICAuZm9yd2FyZFtkaXNhYmxlZF06aG92ZXIsXFxuICAuYmFja1tkaXNhYmxlZF0sXFxuICAuYmFja1tkaXNhYmxlZF06aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZmlsbDogJGJ0bi1maWxsO1xcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG4gICAgbW9iaWxlIG1vZGVcXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2FsZW5kYXIubW9iaWxlTW9kZTpub3QoLmRyb3BCYXNpYyksXFxuLmNhbGVuZGFyLmRyb3BCYXNpYy5tb2JpbGVNb2RlLnZpc2libGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgbWF4LWhlaWdodDogNzV2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICAucGFnaW5hdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogOTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIC5tb250aHNXcmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC5tb2JpbGVXZWVrZGF5cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBiYWNrZ3JvdW5kOiAkY2FsZW5kYXItYmctY29sb3I7XFxuICB9XFxuXFxuICAubUNlbGwge1xcbiAgICBmbGV4OiAxIDEgMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNhcHRpb24ge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IHZhcigtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodCk7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIGJhY2tncm91bmQ6ICRjYWxlbmRhci1iZy1jb2xvcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgfVxcblxcbiAgLm1vbnRoOmZpcnN0LWNoaWxkIC5jYXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogLjM1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIuMTVlbTtcXG4gIH1cXG5cXG4gIC50YWJsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAmOm5vdCgubW9iaWxlUGFnaW5hdGlvbkVuYWJsZWQpIHtcXG4gICAgLmZvcndhcmQsXFxuICAgIC5iYWNrIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLm1vYmlsZVBhZ2luYXRpb25FbmFibGVkIHtcXG4gICAgLmZvcndhcmQsXFxuICAgIC5iYWNrIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB0b3A6IHZhcigtLWNhbGVuZGFyLXdlZWtkYXlzLWhlaWdodCk7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNyT25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLmNhbGVuZGFyIHtcXG4gICAgKiB7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkaWNvbi1zcGlubmVyLXN2ZzogICAgICBzdmctdXJpKFxcXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyIDMwLjk3Jz48cGF0aCBkPSdNMzIsMTUuNDhhMTYuNTIsMTYuNTIsMCwwLDEtMS4zNyw2LjI4LDE2LjM1LDE2LjM1LDAsMCwxLTksOC42MywxNS44NywxNS44NywwLDAsMS0xNy4zLTMuNzhBMTUuNDMsMTUuNDMsMCwwLDEsNC43Miw0LjcyLDE1LDE1LDAsMCwxLDE1LjQ5LjUyYTE0Ljc2LDE0Ljc2LDAsMCwxLDEwLjQsNC41NkExNC43NywxNC43NywwLDAsMSwyOSw5LjlhMTQuNDUsMTQuNDUsMCwwLDEsLjg1LDMuMzVoLjEzQTIuMDYsMi4wNiwwLDAsMSwzMiwxNS4zMWEuOTEuOTEsMCwwLDEsMCwuMTdaTTI4LjcyLDEwYTE0LjI3LDE0LjI3LDAsMCwwLTMuMi00LjU1LDE0LDE0LDAsMCwwLTEwLTMuOUExMy43MiwxMy43MiwwLDAsMCwzLDEwLjNhMTMuNDMsMTMuNDMsMCwwLDAsLjI0LDEwLjI3LDEzLjA1LDEzLjA1LDAsMCwwLDEyLjI4LDcuODIsMTIuOTIsMTIuOTIsMCwwLDAsNC44OC0xLjEsMTIuNjUsMTIuNjUsMCwwLDAsNC4wNi0yLjg3LDEyLjQ4LDEyLjQ4LDAsMCwwLDIuNjItNC4xNSwxMi4yNCwxMi4yNCwwLDAsMCwuODItNC43OWgwYS45MS45MSwwLDAsMSwwLS4xNywyLjA3LDIuMDcsMCwwLDEsMS44NC0yLjA1LDE0LjI3LDE0LjI3LDAsMCwwLTEtMy4yNlonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAgLTAuNTEpJy8+PC9zdmc+XFxcIik7XFxuXFxuJGJyZWFrcG9pbnQteHM6ICAgICAgICAgOTAwcHg7XFxuXFxuJHRyYW5zaXRpb246ICAgICAgICAgICAgb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG5cXG4vLyB0b29sdGlwXFxuXFxuJHRvb2x0aXAtYmctY29sb3I6ICAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItdG9vbHRpcC1iZy1jb2xvciwgIzMzMyk7XFxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItdG9vbHRpcC1jb2xvciwgI2ZmZik7XFxuXFxuLy8gY2FsZW5kYXJcXG5cXG4kY2FsZW5kYXItYmctY29sb3I6ICAgICAjZmZmO1xcblxcbi8vIGNhbGVuZGFyIGNlbGxzXFxuXFxuJGNlbGwtd2lkdGg6ICAgICAgICAgICAgMzBweDtcXG5cXG4kY2VsbC1jb2xvcjogICAgICAgICAgICAjNDQ0NDQ0O1xcblxcbiRkaXNhYmxlZC1iZy1jb2xvcjogICAgIHZhcigtLXNtaWx5LWNhbGVuZGFyLWRpc2FibGVkLWJnLWNvbG9yLCAjZjBmMGYwKTtcXG4kZGlzYWJsZWQtY29sb3I6ICAgICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci1kaXNhYmxlZC1jb2xvciwgI2JmYmZiZik7XFxuXFxuJGhpZ2hsaWdodGVkLWJnLWNvbG9yOiAgdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtYmctY29sb3IsIGxpZ2h0ZW4oIzU3ODRGNSwgMjAlKSk7XFxuJGhpZ2hsaWdodGVkLWNvbG9yOiAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItaGlnaGxpZ2h0ZWQtY29sb3IsIGRhcmtlbigkY2VsbC1jb2xvciwgNSUpKTtcXG5cXG4kaW52YWxpZC1iZy1jb2xvcjogICAgICB2YXIoLS1zbWlseS1jYWxlbmRhci1pbnZhbGlkLWJnLWNvbG9yLCBkYXJrZW4oI2YwZjBmMCwgIDUlKSk7XFxuJGludmFsaWQtY29sb3I6ICAgICAgICAgdmFyKC0tc21pbHktY2FsZW5kYXItaW52YWxpZC1jb2xvciwgZGFya2VuKCNiZmJmYmYsIDUlKSk7XFxuXFxuLy8gY2FsZW5kYXIgdGFibGVcXG5cXG4kaW5mby1jb2xvcjogICAgICAgICAgICByZ2JhKDYwLCA2MCwgNjAsIDAuNSk7XFxuXFxuJHRoLWJvcmRlci1ib3R0b206ICAgICAgI2NiY2JjYjtcXG4kdGgtY29sb3I6ICAgICAgICAgICAgICAjYWFhYWFhO1xcblxcbi8vIGZvcm1cXG5cXG4kYnRuLWZpbGw6ICAgICAgICAgICAgICAkY2VsbC1jb2xvcjtcXG4kYnRuLWJvcmRlcjogICAgICAgICAgICAkdGgtYm9yZGVyLWJvdHRvbTtcXG4kYnRuLWZpbGwtaG92ZXI6ICAgICAgICAjMzg5NWQ5O1xcblwiLFwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIGRyb3Bkb3duXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyLmRyb3BCYXNpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gICYudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmNhcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuN2VtO1xcbiAgfVxcblxcbiAgLmZvcndhcmQsXFxuICAuYmFjayB7XFxuICAgIHRvcDogMWVtO1xcbiAgICBsZWZ0OiAxZW07XFxuICB9XFxuXFxuICAuZm9yd2FyZCB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHJpZ2h0OiAxZW07XFxuICB9XFxufVxcblwiLFwiJGNlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tc21pbHktY2FsZW5kYXItY2VsbC1ib3JkZXItcmFkaXVzLCA2cHgpO1xcbiRjZWxsLWJnLW9wYWNpdHk6IHZhcigtLXNtaWx5LWNhbGVuZGFyLWNlbGwtYmctb3BhY2l0eSwgLjUpO1xcblxcbi5jYWxlbmRhcltkYXRhLXRoZW1lPVxcXCJiYXNpY1xcXCJdIHtcXG4gIC5jZWxsIHtcXG4gICAgJjo6YmVmb3JlLFxcbiAgICAmOjphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHotaW5kZXg6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuICAgIHNlbGVjdGlvbnMsIGxlZnQgLSBjZW50ZXIgLSByaWdodFxcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAgY2VsbHMgZGlzYWJsZWRcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXJbZGF0YS10aGVtZT1cXFwiYmFzaWNcXFwiXSB7XFxuICAvLyBbZGF0YS1kaXNhYmxlZD1cXFwibGVmdFxcXCJdIHtcXG4gIC8vICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcXG4gIC8vIH1cXG5cXG4gIFtkYXRhLWRpc2FibGVkPVxcXCJjZW50ZXJcXFwiXSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gIGNlbGxzIGhpZ2hsaWdodGVkXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmNhbGVuZGFyW2RhdGEtdGhlbWU9XFxcImJhc2ljXFxcIl0ge1xcbiAgW2RhdGEtaGlnaGxpZ2h0ZWQ9XFxcImxlZnRcXFwiXSB7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0ZWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgIH1cXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkY2VsbC1ib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICB9XFxuXFxuICBbZGF0YS1oaWdobGlnaHRlZD1cXFwiY2VudGVyXFxcIl0ge1xcbiAgICBjb2xvcjogJGhpZ2hsaWdodGVkLWNvbG9yO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICB9XFxuICB9XFxuXFxuICBbZGF0YS1oaWdobGlnaHRlZD1cXFwicmlnaHRcXFwiXSB7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0ZWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkLWJnLWNvbG9yO1xcbiAgICAgIG9wYWNpdHk6ICRjZWxsLWJnLW9wYWNpdHk7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICByaWdodDogNTAlO1xcbiAgICB9XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGNlbGwtYm9yZGVyLXJhZGl1cztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gIGNlbGxzIGludmFsaWRcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXJbZGF0YS10aGVtZT1cXFwiYmFzaWNcXFwiXSB7XFxuICBbZGF0YS1pbnZhbGlkPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBjb2xvcjogJGludmFsaWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGludmFsaWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJGludmFsaWQtYmctY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGNlbGwtYm9yZGVyLXJhZGl1cztcXG4gICAgfVxcbiAgfVxcblxcbiAgW2RhdGEtaW52YWxpZD1cXFwiY2VudGVyXFxcIl0ge1xcbiAgICBjb2xvcjogJGludmFsaWQtY29sb3I7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogJGludmFsaWQtYmctY29sb3I7XFxuICAgICAgb3BhY2l0eTogJGNlbGwtYmctb3BhY2l0eTtcXG4gICAgfVxcbiAgfVxcblxcbiAgW2RhdGEtaW52YWxpZD1cXFwicmlnaHRcXFwiXSB7XFxuICAgIGNvbG9yOiAkaW52YWxpZC1jb2xvcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaW52YWxpZC1iZy1jb2xvcjtcXG4gICAgICBvcGFjaXR5OiAkY2VsbC1iZy1vcGFjaXR5O1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcmlnaHQ6IDUwJTtcXG4gICAgfVxcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJGludmFsaWQtYmctY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGNlbGwtYm9yZGVyLXJhZGl1cztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gIGNlbGwgaG92ZXJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY2FsZW5kYXJbZGF0YS10aGVtZT1cXFwiYmFzaWNcXFwiXSB7XFxuICBbZGF0YS1ob3ZlcmVkXTpub3QoW2RhdGEtZGlzYWJsZWQ9XFxcImNlbnRlclxcXCJdKSB7XFxuICAgIGNvbG9yOiAkaGlnaGxpZ2h0ZWQtY29sb3I7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0ZWQtYmctY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGNlbGwtYm9yZGVyLXJhZGl1cztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYWxlbmRhclwiOiBgU21pbHlDYWxlbmRhcl9fY2FsZW5kYXJgLFxuXHRcInNtaWx5U3BpblwiOiBgU21pbHlDYWxlbmRhcl9fc21pbHktc3BpbmAsXG5cdFwibG9hZGluZ1wiOiBgU21pbHlDYWxlbmRhcl9fbG9hZGluZ2AsXG5cdFwiZHJvcEJhc2ljXCI6IGBTbWlseUNhbGVuZGFyX19kcm9wQmFzaWNgLFxuXHRcInZpc2libGVcIjogYFNtaWx5Q2FsZW5kYXJfX3Zpc2libGVgLFxuXHRcImNhcHRpb25cIjogYFNtaWx5Q2FsZW5kYXJfX2NhcHRpb25gLFxuXHRcImZvcndhcmRcIjogYFNtaWx5Q2FsZW5kYXJfX2ZvcndhcmRgLFxuXHRcImJhY2tcIjogYFNtaWx5Q2FsZW5kYXJfX2JhY2tgLFxuXHRcImNlbGxcIjogYFNtaWx5Q2FsZW5kYXJfX2NlbGxgLFxuXHRcImNhcHRpb25QaWNrZXJcIjogYFNtaWx5Q2FsZW5kYXJfX2NhcHRpb25QaWNrZXJgLFxuXHRcInNwcml0ZVwiOiBgU21pbHlDYWxlbmRhcl9fc3ByaXRlYCxcblx0XCJjYXB0aW9uVHJpZ2dlclwiOiBgU21pbHlDYWxlbmRhcl9fY2FwdGlvblRyaWdnZXJgLFxuXHRcImNhcHRpb25MYWJlbFwiOiBgU21pbHlDYWxlbmRhcl9fY2FwdGlvbkxhYmVsYCxcblx0XCJjYXB0aW9uQ2hldnJvblwiOiBgU21pbHlDYWxlbmRhcl9fY2FwdGlvbkNoZXZyb25gLFxuXHRcInllYXJQYWdlclwiOiBgU21pbHlDYWxlbmRhcl9feWVhclBhZ2VyYCxcblx0XCJ5ZWFyT3B0aW9uXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyT3B0aW9uYCxcblx0XCJ5ZWFyUGlja2VyUGFuZWxcIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJQYW5lbGAsXG5cdFwieWVhclBpY2tlckNsb3NlXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyUGlja2VyQ2xvc2VgLFxuXHRcInllYXJQaWNrZXJIZWFkZXJcIjogYFNtaWx5Q2FsZW5kYXJfX3llYXJQaWNrZXJIZWFkZXJgLFxuXHRcInllYXJHcmlkXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyR3JpZGAsXG5cdFwidG9vbHRpcFwiOiBgU21pbHlDYWxlbmRhcl9fdG9vbHRpcGAsXG5cdFwidG9vbHRpcEFycm93XCI6IGBTbWlseUNhbGVuZGFyX190b29sdGlwQXJyb3dgLFxuXHRcIm1vbnRoc1dyYXBwZXJcIjogYFNtaWx5Q2FsZW5kYXJfX21vbnRoc1dyYXBwZXJgLFxuXHRcInBhZ2luYXRpb25cIjogYFNtaWx5Q2FsZW5kYXJfX3BhZ2luYXRpb25gLFxuXHRcIm1vYmlsZVdlZWtkYXlzXCI6IGBTbWlseUNhbGVuZGFyX19tb2JpbGVXZWVrZGF5c2AsXG5cdFwibUNlbGxcIjogYFNtaWx5Q2FsZW5kYXJfX21DZWxsYCxcblx0XCJtb250aFwiOiBgU21pbHlDYWxlbmRhcl9fbW9udGhgLFxuXHRcInRhYmxlSGVhZGVyXCI6IGBTbWlseUNhbGVuZGFyX190YWJsZUhlYWRlcmAsXG5cdFwiYm9keVwiOiBgU21pbHlDYWxlbmRhcl9fYm9keWAsXG5cdFwid2Vla1Jvd1wiOiBgU21pbHlDYWxlbmRhcl9fd2Vla1Jvd2AsXG5cdFwidGhcIjogYFNtaWx5Q2FsZW5kYXJfX3RoYCxcblx0XCJwbGFjZWhvbGRlclwiOiBgU21pbHlDYWxlbmRhcl9fcGxhY2Vob2xkZXJgLFxuXHRcInRvZGF5XCI6IGBTbWlseUNhbGVuZGFyX190b2RheWAsXG5cdFwiY250XCI6IGBTbWlseUNhbGVuZGFyX19jbnRgLFxuXHRcImluZm9cIjogYFNtaWx5Q2FsZW5kYXJfX2luZm9gLFxuXHRcInllYXJQaWNrZXJPcGVuXCI6IGBTbWlseUNhbGVuZGFyX195ZWFyUGlja2VyT3BlbmAsXG5cdFwiZm9jdXNcIjogYFNtaWx5Q2FsZW5kYXJfX2ZvY3VzYCxcblx0XCJkaXNhYmxlZFwiOiBgU21pbHlDYWxlbmRhcl9fZGlzYWJsZWRgLFxuXHRcInNlbGVjdGVkXCI6IGBTbWlseUNhbGVuZGFyX19zZWxlY3RlZGAsXG5cdFwicmV2ZXJzZWRcIjogYFNtaWx5Q2FsZW5kYXJfX3JldmVyc2VkYCxcblx0XCJkaXJlY3RcIjogYFNtaWx5Q2FsZW5kYXJfX2RpcmVjdGAsXG5cdFwic2VsZWN0aW5nUmV2ZXJzZWRcIjogYFNtaWx5Q2FsZW5kYXJfX3NlbGVjdGluZ1JldmVyc2VkYCxcblx0XCJzZWxlY3RpbmdEaXJlY3RcIjogYFNtaWx5Q2FsZW5kYXJfX3NlbGVjdGluZ0RpcmVjdGAsXG5cdFwiYWN0aW9uc0VuYWJsZWRcIjogYFNtaWx5Q2FsZW5kYXJfX2FjdGlvbnNFbmFibGVkYCxcblx0XCJoaWdobGlnaHRlZFwiOiBgU21pbHlDYWxlbmRhcl9faGlnaGxpZ2h0ZWRgLFxuXHRcImludmFsaWRcIjogYFNtaWx5Q2FsZW5kYXJfX2ludmFsaWRgLFxuXHRcIm1vYmlsZU1vZGVcIjogYFNtaWx5Q2FsZW5kYXJfX21vYmlsZU1vZGVgLFxuXHRcIm1vYmlsZVBhZ2luYXRpb25FbmFibGVkXCI6IGBTbWlseUNhbGVuZGFyX19tb2JpbGVQYWdpbmF0aW9uRW5hYmxlZGAsXG5cdFwic3JPbmx5XCI6IGBTbWlseUNhbGVuZGFyX19zck9ubHlgXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyQDE2LjAuN19zYXNzQDEuOTkuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3Jlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA3LjEuNF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyQDE2LjAuN19zYXNzQDEuOTkuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3Jlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS40X3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuN19zYXNzQDEuOTkuMF93ZWJwYWNrQDUuMTA1LjQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2NhbGVuZGFyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjRfd2VicGFja0A1LjEwNS40L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2Fzcy1sb2FkZXJAMTYuMC43X3Nhc3NAMS45OS4wX3dlYnBhY2tANS4xMDUuNC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vY2FsZW5kYXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBnbG9iYWwgZG9jdW1lbnQsIHJlcXVpcmUsIHdpbmRvdyAqL1xubGV0IENhbGVuZGFyID0gcmVxdWlyZSgnLi9jYWxlbmRhcicpO1xuXG5DYWxlbmRhciA9IENhbGVuZGFyLmRlZmF1bHQ7XG5cbmNvbnN0IHdpZGdldFV0aWxzID0gcmVxdWlyZSgnd2lkZ2V0LXV0aWxzJyk7XG5jb25zdCBhdXRvSW5pdFNlbGVjdG9yID0gJ1tkYXRhLXNtaWx5LWNhbGVuZGFyLXdpZGdldF0nO1xuXG4vLyBFeHBvcnQgV2lkZ2V0VXRpbHNcbndpbmRvdy5TbWlseVdpZGdldFV0aWxzID0gd2lkZ2V0VXRpbHM7XG5cbkNhbGVuZGFyLmluaXQgPSAob3B0cykgPT4ge1xuICBjb25zdCBpbml0aWFsaXplZCA9IFtdO1xuICBjb25zdCBvcHRpb25zICAgICA9IG9wdHMgfHwge307XG4gIGNvbnN0IGVsZW1lbnRzICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhdXRvSW5pdFNlbGVjdG9yKTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgY2FsICA9IG5ldyBDYWxlbmRhcihvcHRpb25zKTtcblxuICAgIGluaXRpYWxpemVkLnB1c2goY2FsKTtcbiAgfSk7XG5cbiAgQ2FsZW5kYXIuaW5zdGFuY2VzID0gaW5pdGlhbGl6ZWQ7XG4gIHJldHVybiBpbml0aWFsaXplZDtcbn07XG5cbkNhbGVuZGFyLlZFUlNJT04gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gIENhbGVuZGFyLmluaXQoKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgQ2FsZW5kYXIuaW5pdCgpO1xuICB9KTtcbn1cblxud2luZG93LlNtaWx5Q2FsZW5kYXJXaWRnZXQgPSBDYWxlbmRhcjtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiY3VycmVuY3lTeW1ib2xNYXAiLCJyZXF1aXJlIiwiZ2V0U3ltYm9sRnJvbUN1cnJlbmN5IiwiY3VycmVuY3lDb2RlIiwiY29kZSIsInRvVXBwZXJDYXNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiQUVEIiwiQUZOIiwiQUxMIiwiQU1EIiwiQU5HIiwiQU9BIiwiQVJTIiwiQVVEIiwiQVdHIiwiQVpOIiwiQkFNIiwiQkJEIiwiQkRUIiwiQkdOIiwiQkhEIiwiQklGIiwiQk1EIiwiQk5EIiwiQk9CIiwiQk9WIiwiQlJMIiwiQlNEIiwiQlRDIiwiQlROIiwiQldQIiwiQllOIiwiQllSIiwiQlpEIiwiQ0FEIiwiQ0RGIiwiQ0hFIiwiQ0hGIiwiQ0hXIiwiQ0xGIiwiQ0xQIiwiQ05IIiwiQ05ZIiwiQ09QIiwiQ09VIiwiQ1JDIiwiQ1VDIiwiQ1VQIiwiQ1ZFIiwiQ1pLIiwiREpGIiwiREtLIiwiRE9QIiwiRFpEIiwiRUVLIiwiRUdQIiwiRVJOIiwiRVRCIiwiRVRIIiwiRVVSIiwiRkpEIiwiRktQIiwiR0JQIiwiR0VMIiwiR0dQIiwiR0hDIiwiR0hTIiwiR0lQIiwiR01EIiwiR05GIiwiR1RRIiwiR1lEIiwiSEtEIiwiSE5MIiwiSFJLIiwiSFRHIiwiSFVGIiwiSURSIiwiSUxTIiwiSU1QIiwiSU5SIiwiSVFEIiwiSVJSIiwiSVNLIiwiSkVQIiwiSk1EIiwiSk9EIiwiSlBZIiwiS0VTIiwiS0dTIiwiS0hSIiwiS01GIiwiS1BXIiwiS1JXIiwiS1dEIiwiS1lEIiwiS1pUIiwiTEFLIiwiTEJQIiwiTEtSIiwiTFJEIiwiTFNMIiwiTFRDIiwiTFRMIiwiTFZMIiwiTFlEIiwiTUFEIiwiTURMIiwiTUdBIiwiTUtEIiwiTU1LIiwiTU5UIiwiTU9QIiwiTVJPIiwiTVJVIiwiTVVSIiwiTVZSIiwiTVdLIiwiTVhOIiwiTVhWIiwiTVlSIiwiTVpOIiwiTkFEIiwiTkdOIiwiTklPIiwiTk9LIiwiTlBSIiwiTlpEIiwiT01SIiwiUEFCIiwiUEVOIiwiUEdLIiwiUEhQIiwiUEtSIiwiUExOIiwiUFlHIiwiUUFSIiwiUk1CIiwiUk9OIiwiUlNEIiwiUlVCIiwiUldGIiwiU0FSIiwiU0JEIiwiU0NSIiwiU0RHIiwiU0VLIiwiU0dEIiwiU0hQIiwiU0xMIiwiU09TIiwiU1JEIiwiU1NQIiwiU1REIiwiU1ROIiwiU1ZDIiwiU1lQIiwiU1pMIiwiVEhCIiwiVEpTIiwiVE1UIiwiVE5EIiwiVE9QIiwiVFJMIiwiVFJZIiwiVFREIiwiVFZEIiwiVFdEIiwiVFpTIiwiVUFIIiwiVUdYIiwiVVNEIiwiVVlJIiwiVVlVIiwiVVlXIiwiVVpTIiwiVkVGIiwiVkVTIiwiVk5EIiwiVlVWIiwiV1NUIiwiWEFGIiwiWEJUIiwiWENEIiwiWE9GIiwiWFBGIiwiWFNVIiwiWFVBIiwiWUVSIiwiWkFSIiwiWk1XIiwiWldEIiwiWldMIiwiZ2V0Rm9ybWF0T3B0aW9ucyIsInRpbWV6b25lIiwib3B0aW9ucyIsInVzZU9wdGlvbnMiLCJ0eiIsIk51bWJlciIsImlzRmluaXRlIiwiZ2V0VGltZXpvbmVPZmZzZXRNaW51dGVzIiwiZGF0ZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsInR6VXBwZXIiLCJTdHJpbmciLCJkZWZhdWx0VGltZXpvbmVOYW1lcyIsIm9mZnNldCIsIkVycm9yIiwic3RyZnRpbWUiLCJmb3JtYXQiLCJ0b0RhdGUiLCJ0b0pTRGF0ZSIsInRva2VucyIsIlRpbWVzdGFtcFBhcnNlciIsInBhcnNlRm9ybWF0U3RyaW5nIiwidGltZXpvbmVPZmZzZXRNaW51dGVzIiwidHpEYXRlIiwic2V0VVRDTWludXRlcyIsImdldFVUQ01pbnV0ZXMiLCJvdXRwdXQiLCJ0b2tlbiIsIkRpcmVjdGl2ZSIsIndyaXRlIiwiVG9rZW4iLCJzdHJwdGltZSIsInRpbWVzdGFtcCIsInBhcnNlciIsImtleSIsInJlc3VsdCIsInBhcnNlIiwiZ2V0RGF0ZSIsInN0cnRpbWUiLCJlbmdsaXNoIiwiZXJhTmFtZXMiLCJtZXJpZGllbU5hbWVzIiwic2hvcnRXZWVrZGF5TmFtZXMiLCJsb25nV2Vla2RheU5hbWVzIiwic2hvcnRNb250aE5hbWVzIiwibG9uZ01vbnRoTmFtZXMiLCJvcmRpbmFsVHJhbnNmb3JtIiwibnVtYmVyIiwiZGlnaXQiLCJsZWZ0UGFkIiwiY2hhciIsInRleHQiLCJzdHJpbmciLCJ3cml0ZVRpbWV6b25lT2Zmc2V0Iiwib2Zmc2V0TWludXRlcyIsIm1vZGlmaWVyIiwiYWJzT2Zmc2V0IiwiYWJzIiwic2lnbiIsImhvdXIiLCJtaW51dGUiLCJnZXREYXlPZldlZWsiLCJvZmZzZXRzIiwieWVhciIsImdldFVUQ0Z1bGxZZWFyIiwibW9udGgiLCJnZXRVVENNb250aCIsImRheSIsImdldFVUQ0RhdGUiLCJnZXREYXlPZlllYXIiLCJsZW5ndGhzIiwibW9udGhMZW5ndGhzIiwiZm9yWWVhciIsIm1vbnRocyIsInNsaWNlIiwicmVkdWNlIiwiYSIsImIiLCJnZXRXZWVrT2ZZZWFyRnJvbVN1bmRheSIsImRheU9mWWVhciIsImZpcnN0RGF5T2ZXZWVrIiwiZ2V0Rmlyc3RXZWVrZGF5SW5ZZWFyIiwiZ2V0V2Vla09mWWVhckZyb21Nb25kYXkiLCJkYXlPZldlZWsiLCJzdW5kYXlXZWVrIiwiZ2V0SVNPV2Vla3NJblllYXIiLCJwcmlvclllYXIiLCJnZXRJU09XZWVrT2ZZZWFyIiwid2Vla051bWJlciIsImdldElTT1dlZWtEYXRlWWVhciIsImNvbnN0cnVjdG9yIiwibmFtZXMiLCJwYWRMZW5ndGgiLCJsaWtlbHlMZW5ndGgiLCJtaW5pbXVtIiwibWF4aW11bSIsImNhbkJlTmVnYXRpdmUiLCJyZXdyaXRlIiwicGFyc2VGdW5jdGlvbiIsIndyaXRlRnVuY3Rpb24iLCJzdG9yZUZ1bmN0aW9uIiwic3RvcmUiLCJnZXRCeU5hbWUiLCJuYW1lIiwiZGlyZWN0aXZlIiwiaW5kZXhPZiIsImlzT3JkaW5hbCIsImdldENhbkJlTmVnYXRpdmUiLCJnZXRMaWtlbHlMZW5ndGgiLCJnZXRSZXdyaXRlUGFyc2VkIiwicmV3cml0ZVBhcnNlZFZhbHVlIiwiZXhwYW5kZWRGcm9tIiwiaGFzUGFyc2VGdW5jdGlvbiIsImhhc1N0b3JlRnVuY3Rpb24iLCJudW1iZXJJbkJvdW5kcyIsInZhbHVlIiwiZ2V0Qm91bmRzU3RyaW5nIiwiRGlyZWN0aXZlVG9rZW4iLCJyZXN1bHRTdHJpbmciLCJ1cHBlciIsInRvTG93ZXJDYXNlIiwidHJhbnNmb3JtIiwiU3RyaW5nVG9rZW4iLCJEaXJlY3RpdmVTdHJpbmdUb2tlbiIsImFkZENoYXJhY3RlciIsImNoIiwicGFyc2VXZWVrZGF5TmFtZSIsImdldFVUQ0RheSIsInBhcnNlTW9udGhOYW1lIiwiY2VudHVyeSIsImRheU9mTW9udGgiLCJtaWNyb3NlY29uZCIsImdldFVUQ01pbGxpc2Vjb25kcyIsImlzb1R3b0RpZ2l0WWVhciIsImlzb1llYXIiLCJnZXRVVENIb3VycyIsIm1pbGxpc2Vjb25kIiwibWVyaWRpZW0iLCJwYXJzZU1lcmlkaWVtTmFtZSIsImluZGV4IiwibWljcm9zZWNvbmRzU2luY2VFcG9jaCIsImdldFRpbWUiLCJzZWNvbmRzU2luY2VFcG9jaCIsInNlY29uZCIsIm1pbiIsImdldFVUQ1NlY29uZHMiLCJ3ZWVrT2ZZZWFyRnJvbVN1bmRheSIsImlzb1dlZWtPZlllYXIiLCJ3ZWVrT2ZZZWFyRnJvbU1vbmRheSIsInR3b0RpZ2l0WWVhciIsInBhcnNlVGltZXpvbmVPZmZzZXQiLCJ0ekxpc3QiLCJnZXRUaW1lem9uZU5hbWVMaXN0IiwicGFyc2VJbmRleEluTGlzdCIsInRpbWV6b25lTmFtZXMiLCJlcmEiLCJwYXJzZUVyYU5hbWUiLCJUaW1lc3RhbXBQYXJzZUVycm9yIiwicmVhc29uIiwiY3VycmVudFRva2VuIiwibWVzc2FnZSIsImNhcHR1cmVTdGFja1RyYWNlIiwiZXJyb3IiLCJzdGFjayIsImNyZWF0ZSIsImlzRGlnaXQiLCJnZXRZZWFyRnJvbVR3b0RpZ2l0cyIsImdldE1vbnRoRnJvbURheU9mWWVhciIsImRheXMiLCJnZXREYXlPZk1vbnRoRnJvbURheU9mWWVhciIsImdldERhdGVGcm9tSVNPV2Vla0RhdGUiLCJ3ZWVrZGF5T2ZKYW40IiwiZGF5c0luWWVhciIsImlzTGVhcFllYXIiLCJnZXREYXRlRnJvbVN1bmRheVdlZWtEYXRlIiwid2Vla09mWWVhciIsImdldERhdGVGcm9tTW9uZGF5V2Vla0RhdGUiLCJzdW5kYXlEYXlPZlllYXIiLCJmb3JrTGVuZ3RoIiwibWlsbGlzZWNvbmRzU2luY2VFcG9jaCIsImdldFRpbWV6b25lT2Zmc2V0T2ZEYXRlIiwib2Zmc2V0U2lnbiIsInRvdGFsTWludXRlcyIsImdldEZ1bGxZZWFyIiwic2V0VVRDRnVsbFllYXIiLCJzZXRVVENNb250aCIsInNldFVUQ0RhdGUiLCJzZXRVVENIb3VycyIsInNldFVUQ1NlY29uZHMiLCJzZXRVVENNaWxsaXNlY29uZHMiLCJjb3B5IiwiZm9yayIsInN0YXJ0VG9rZW5JbmRleCIsInBhcnNlU3RyaW5nVG9rZW4iLCJuZXh0IiwicGFyc2VBbWJpZ3VvdXNOdW1iZXIiLCJwYXJzZU51bWJlciIsInRva2VuSW5kZXgiLCJsYXN0V2hvbGVFcnJvciIsImxlbmd0aExpbWl0IiwiSW5maW5pdHkiLCJuZWdhdGl2ZSIsInN0YXJ0IiwidHJpbSIsImlzSW50ZWdlciIsIm9yZGluYWwiLCJwb3NzaWJsZSIsInBvc3NpYmxlQ291bnQiLCJtYXRjaEluZGV4IiwibWF0Y2hMZW5ndGgiLCJqIiwidGltZXpvbmVOYW1lTGlzdCIsImhvdXJzIiwibWludXRlcyIsImZvcm1hdFN0cmluZyIsImRpciIsInp1bHVUaW1lem9uZSIsImNvbW1vbiIsImxlYXAiLCJ5Iiwid2luZG93IiwiaXNPYmplY3QiLCJzZXJpYWxpemUiLCJ0b1VuZGVyc2NvcmUiLCJhamF4IiwiYXBpVXJsIiwic3VjY2VzcyIsInBhcmFtcyIsIm1ldGhvZCIsInhtbEh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsImlzU3VjY2VzcyIsInN0YXR1cyIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2VUZXh0IiwiZSIsInNlbmQiLCJpc0FycmF5IiwidG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJsYW5nIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJpc0RvbGxhciIsInN0eWxlIiwiY3VycmVuY3lEaXNwbGF5IiwibnVtYmVyRm9ybWF0Iiwic3RyIiwicmVwbGFjZSIsIm1vbnRoTGVuZ3RoIiwiZGF5c0luTW9udGgiLCJyZW1vdmVDbGFzcyIsInNldENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImFkZENsYXNzIiwiZWwiLCJjbGFzc05hbWVzIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsImNscyIsImFkZCIsImtleXMiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkZXN0cm95RWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnRGcm9tU3RyaW5nIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJmaW5kQnlDbGFzc05hbWUiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsIlNWR0FuaW1hdGVkU3RyaW5nIiwiYmFzZVZhbCIsInRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciIsImdldFBhcmVudEF0dHJpYnV0ZSIsImF0dHIiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiUmVnRXhwIiwidGVzdCIsImlzSW5zaWRlIiwiaXMiLCJjaGlsZCIsInBhcmVudCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwicmVtb3ZlIiwicmVnZXgiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJFbWl0dGVyIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwiZXZlbnRzIiwib25jZSIsInNlbGYiLCJmbiIsImFyZ3MiLCJvZmYiLCJhcHBseSIsImxpc3RlbmVycyIsInNwbGljZSIsImVtaXQiLCJpc0Z1bmN0aW9uIiwiZiIsImRvbSIsIm1hdGgiLCJvYmplY3QiLCJ2YWxpZGF0ZSIsImlzTmFOUG9seWZpbGwiLCJpc051bWVyaWMiLCJjYXBpdGFsaXplT2JqIiwibWVyZ2UiLCJwaWNrIiwidHJhdmVyc2VPYmoiLCJkYXNoVG9DYXBpdGFsIiwiaXNTdHJpbmciLCJ1bmRlcnNjb3JlVG9DYXBpdGFsIiwibyIsImlzTmFOIiwibiIsInBhcnNlSW50Iiwib2JqIiwibmV3T2JqIiwib2JqMSIsIm9iajIiLCJpc0RlZXAiLCJvYmozIiwidCIsInBpY2tlZE9iaiIsImNvbXBvbmVudCIsInAiLCJmbktleSIsImZuVmFsdWUiLCJjdXJyIiwibmV4dFByb3BlcnR5IiwibWF0Y2giLCJsZXR0ZXIiLCJzIiwiaXNCbGFuayIsImlzRW1haWwiLCJpc0JvdW5kZWRCeSIsIm1heCIsInV0aWxzIiwiZ2VuQXJyYXlSYW5nZSIsInBhcnNlSVNPU3RyaW5nIiwiYXJyU3RyIiwic3BsaXQiLCJwYXJzZUZsb2F0IiwiQ2FsZW5kYXJUcmVlIiwidmFsaWRhdGVDZWxsIiwidHJlZSIsImFkZFRyZWUiLCJzZWxlY3RSYW5nZSIsImVuZCIsInJhbmdlIiwic2VsZWN0RGF5c0luTW9udGgiLCJtb250aERheXMiLCJzZWxlY3RNb250aHNJblllYXIiLCJpc1ZhbGlkIiwiaXNSYW5nZVZhbGlkIiwic2VsZWN0aW9uIiwibW9udGhSYW5nZSIsIm0iLCJzdGFydERheSIsImVuZERheSIsInNlbGVjdERheSIsImZpbHRlclZhbGlkcyIsImZpbHRlciIsImNlbGwiLCJyZXBsYWNlTWFwcyIsInVwZGF0ZWRBdCIsIm1hcHNUb1RyZWUiLCJyZW1vdmVNYXAiLCJtYXBzIiwibWFwU3RhcnRBdCIsImF2YWlsYWJpbGl0eSIsIm5pZ2h0bHlfcmF0ZXMiLCJtaW5pbXVtX3N0YXlzIiwiYXZhaWwiLCJyYXRlcyIsIm1pbk1hcCIsImRheVNoaWZ0IiwicHJldmlvdXNEYXRlIiwic3RhdGUiLCJhcnIiLCJtaW5TdGF5IiwicmF0ZSIsImlzQXZhaWxhYmxlIiwicHJldkF2YWlsYWJsZSIsImlzTW9ybmluZ0Jsb2NrZWQiLCJpc0F2YWlsYWJsZU91dCIsImdldERheVByb3BlcnR5IiwicHJvcGVydHkiLCJkYXlEYXRhIiwiZ2V0RGF5IiwieWVhckRhdGEiLCJtb250aERhdGEiLCJpc0RheURpc2FibGVkIiwidGVtcGxhdGVzIiwiY29uZmlnIiwibG9jYWxlcyIsImNyZWF0ZVBvc2l0aW9uZXIiLCJkYXRlVG9Jc28iLCJpc0xhdGVyIiwiaXNDdXJyZW50IiwidmFsaWRhdGlvbk9mQ2VsbCIsInRGb3JtYXR0ZXIiLCJkYXRlVG9BcnJheSIsIm1vbnRoRGlmZiIsInN0eWxlcyIsInV0aWxzU3R5bGVzIiwiY2FsZW5kYXJJbnN0YW5jZUNvdW50ZXIiLCJDYWxlbmRhciIsIm9wdHMiLCJWRVJTSU9OIiwidmVyc2lvbiIsIkNTU19QUkVGSVgiLCJjc3NQcmVmaXgiLCJpbnN0YW5jZUlkIiwidG9vbHRpcElkIiwibG9nZ2VyIiwiY29uZmlnRGF0YXNldCIsImRhdGFzZXQiLCJsb2NhbGUiLCJmb3JtYXREYXRlIiwic3RhcnRPZldlZWsiLCJjdXJyZW50RGF0ZSIsImdldE1vbnRoIiwieWVhclN0YXJ0IiwibW9udGhTdGFydCIsIm5vcm1hbGl6ZVJlc3BvbnNpdmVPcHRpb25zIiwiaXNEcm9wRG93biIsImluaXRDYWxlbmRhckRyb3AiLCJjVHJlZSIsImFkZE1hcHMiLCJzdGFydF9kYXRlIiwiaXNTZWxlY3RpbmciLCJoaWdobGlnaHRlZEJvdW5kcyIsImhhc1ZhbGlkUmFuZ2UiLCJpc1JldmVyc2VTZWxlY3RhYmxlIiwiZGlzcGxheU1vbnRocyIsIm1lZGlhUXVlcnlMaXN0Iiwib25NZWRpYVF1ZXJ5Q2hhbmdlIiwib25XaW5kb3dSZXNpemUiLCJhY3RpdmVZZWFyUGlja2VyIiwib25Eb2N1bWVudENsaWNrIiwib25Eb2N1bWVudEtleWRvd24iLCJpbml0IiwiY2FsZW5kYXIiLCJyZXNldCIsInRoZW1lIiwibGFiZWxzIiwic3ByaXRlIiwiYXBwZW5kQ2hpbGQiLCJzdmdTcHJpdGUiLCJwYWdpbmF0aW9uIiwibW9iaWxlV2Vla2RheXMiLCJoZWFkZXJUZW1wbGF0ZVN0cmluZyIsIm1vbnRoc1dyYXBwZXIiLCJtYWluIiwibGl2ZVJlZ2lvbiIsInllYXJQaWNrZXJQYW5lbCIsInNoYXJlZFllYXJQaWNrZXJQYW5lbCIsImNsb3NlTGFiZWwiLCJjbG9zZSIsInByZXZpb3VzTGFiZWwiLCJwcmV2aW91c1llYXJzIiwibmV4dExhYmVsIiwibmV4dFllYXJzIiwiZm9yd2FyZCIsIm1vbnRoc0ZvcndhcmQiLCJiYWNrIiwibW9udGhzQmFja3dhcmQiLCJhZGRDYXB0aW9uUGlja2VyRXZlbnRzIiwiYWRkVmlld3BvcnRFdmVudHMiLCJyZW5kZXJNb250aHMiLCJhZGRCdG5zRXZlbnRzIiwic2VsZWN0YWJsZSIsImVsU3RhcnRBdCIsImVsRW5kQXQiLCJyZW50YWxJZCIsImlucHV0c1RvVmFsdWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRNYXBzIiwiY2hhbmdlU2VsZWN0aW9uT3JkZXIiLCJpc1JldmVyc2UiLCJkZXN0cm95TW9udGhzIiwiZmFsbGJhY2tEaXNwbGF5TW9udGhzIiwidG9Qb3NpdGl2ZUludCIsImRpc3BsYXlNb250aHNNb2JpbGUiLCJtb2JpbGVCcmVha3BvaW50IiwidG9Ob25OZWdhdGl2ZUludCIsImZhbGxiYWNrIiwicGFyc2VkIiwiaXNNb2JpbGVWaWV3cG9ydCIsIm1hdGNoZXMiLCJ2aWV3cG9ydFdpZHRoIiwiaW5uZXJXaWR0aCIsImFwcGx5Vmlld3BvcnRNb2RlIiwidmlld3BvcnQiLCJtb2JpbGVNb2RlIiwic2hvd1BhZ2luYXRpb25Nb2JpbGUiLCJtb2JpbGVQYWdpbmF0aW9uRW5hYmxlZCIsImdldERpc3BsYXlNb250aHNGb3JWaWV3cG9ydCIsInN5bmNEaXNwbGF5TW9udGhzRm9yVmlld3BvcnQiLCJuZXh0RGlzcGxheU1vbnRocyIsImhhc0NoYW5nZWQiLCJoYW5kbGVWaWV3cG9ydENoYW5nZSIsInJlbW92ZVZpZXdwb3J0RXZlbnRzIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiaGVhZGVyVGVtcGxhdGUiLCJ5ZWFyRW5kIiwibW9udGhFbmQiLCJjcmVhdGVUcmVlIiwicmV2ZXJzZWQiLCJkaXJlY3QiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhZGRNb250aEV2ZW50cyIsImFjdGlvbnNFbmFibGVkIiwiZW5hYmxlQWxsRGF5cyIsImRpc2FibGVCYWNrQnRuIiwicmVjb3ZlclNlbGVjdGlvbnMiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdFN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2VsZWN0RW5kIiwiaGlnaExpZ2h0UmFuZ2UiLCJpc0JhY2tEaXNhYmxlZCIsInN0YXJ0RGF0ZSIsImRpc2FibGVkIiwidG9nZ2xlTG9hZGluZyIsImxvYWRpbmciLCJ5ZWFyVG9SZW5kZXIiLCJtb250aFRvUmVuZGVyIiwic2hpZnRNb250aCIsIm1vbnRoc1BhZ2luYXRpb25KdW1wIiwicHJldmVudERlZmF1bHQiLCJjbGlja2VkSW5zaWRlQ2FsZW5kYXIiLCJ0YXJnZXQiLCJ0cmlnZ2VyIiwieWVhck9wdGlvbiIsInllYXJQYWdlciIsImNsb3NlUGlja2VyIiwiY2xvc2VZZWFyUGlja2VyIiwiZm9jdXNUcmlnZ2VyIiwiZGV0YWlsIiwic2VsZWN0ZWRZZWFyIiwibW9udGhFbGVtZW50IiwicmVuZGVyRnJvbVNsb3QiLCJuZXh0WWVhclBhZ2VTdGFydCIsInllYXJQYWdlU3RhcnQiLCJyZW5kZXJZZWFyR3JpZCIsImNsb3Nlc3QiLCJvcGVuWWVhclBpY2tlciIsImhhbmRsZVllYXJQaWNrZXJLZXlkb3duIiwicG9zaXRpb25ZZWFyUGlja2VyUGFuZWwiLCJoaWRkZW4iLCJ5ZWFyUGlja2VyT3BlbiIsInNlbGVjdGVkQnRuIiwiZmlyc3RCdG4iLCJmb2N1cyIsImFyZ3VtZW50cyIsInBhbmVsIiwiZm9jdXNlZCIsImtleUNvZGUiLCJ5ZWFyQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50SW5kZXgiLCJjb2xzIiwiYXJyb3dPZmZzZXRzIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJ0YXJnZXRJbmRleCIsImZvY3VzYWJsZSIsImZpcnN0RWwiLCJsYXN0RWwiLCJzaGlmdEtleSIsImdyaWQiLCJwcmV2aW91c1BhZ2VyIiwibmV4dFBhZ2VyIiwibWluaW11bVllYXIiLCJtaW5pbXVtU2VsZWN0YWJsZVllYXIiLCJib3VuZGVkWWVhclBhZ2VTdGFydCIsInllYXJzIiwic2hvdWxkRGlzYWJsZVByZXZpb3VzUGFnZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ2aXNpYmxlSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwicm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJmb2N1c1Nsb3RJbmRleCIsInNsb3RJbmRleCIsImNsYW1wVmlzaWJsZU1vbnRoU3RhcnQiLCJmb2N1c0NhcHRpb25UcmlnZ2VyRm9yU2xvdCIsImZpbmQiLCJtb250aEVsIiwic2VsZWN0aW9uSGFuZGxlciIsImlzRW5kRmlyc3QiLCJkYXRlVmFsdWUiLCJkYXlBbHJlYWR5U2VsZWN0ZWQiLCJyYW5nZVNlbGVjdGVkIiwiaXNQYXN0VG9kYXkiLCJyZXNldFNlbGVjdGlvbiIsImVuZERhdGVGaXJzdEFjdGlvbiIsInN0YXJ0RGF0ZUZpcnN0QWN0aW9uIiwic2VsZWN0aW5nRGlyZWN0Iiwic2VsZWN0aW5nUmV2ZXJzZWQiLCJoaWdobGlnaHRlZCIsImNvbXBsZXRlU2VsZWN0aW9uIiwiY2FsRHJvcCIsImNsb3NlRHJvcCIsIm1vdXNlb3ZlckhhbmRsZXIiLCJyZW1vdmVIaWdobGlnaHQiLCJjZWxscyIsImhvdmVyZWQiLCJob3ZlcmVkT2Zmc2V0IiwiY2VsbEEiLCJjZWxsQiIsImNoYW5nZUhpZ2hsaWdodERpcmVjdGlvbiIsImlzRGlzYWJsZWRMZWZ0IiwiaXNEaXNhYmxlZENlbnRlciIsImlzRGlzYWJsZWRSaWdodCIsImlzSW52YWxpZCIsIm9mZnNldENlbGwiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQXJyb3dOYXZpZ2F0aW9uIiwiYm9keSIsInJlbGF0ZWRUYXJnZXQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkiLCJkYXRlQXJyYXkiLCJzZWxlY3RFbmRBY3Rpb24iLCJzZWxlY3RTdGFydEFjdGlvbiIsInN3aXRjaElucHV0Rm9jdXMiLCJkYXRlU3RyIiwibGFiZWwiLCJzZWxlY3RlZFN0YXJ0IiwiYW5ub3VuY2VMaXZlUmVnaW9uIiwib25TZWxlY3RTdGFydCIsInNlbGVjdGVkRW5kIiwib25TZWxlY3RFbmQiLCJpbnZhbGlkIiwiZGVzdHJveVRvb2x0aXAiLCJ0b29sdGlwUG9wcGVyIiwiZGVzdHJveSIsInRvb2x0aXAiLCJkZXNjcmliZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImZvY3VzZWRDZWxsIiwiYXJyb3dLZXlzIiwiaG9tZUVuZEtleXMiLCJIb21lIiwiRW5kIiwicGFnZUtleXMiLCJQYWdlVXAiLCJQYWdlRG93biIsInJvdyIsInJvd0NlbGxzIiwiZGF5VmFsdWUiLCJmb2N1c2VkTW9udGgiLCJvcmlnaW5TbG90SW5kZXgiLCJjbGljayIsInRhcmdldE1vbnRoIiwibW9udGhDZWxscyIsIm5ld0NlbGxzIiwibWF4U3RheSIsImludmFsaWRSYW5nZU1lc3NhZ2UiLCJyYW5nZVdpdGhvdXRMYXN0IiwiYWxsb3dTaG9ydGVyTWluU3RheVNlbGVjdGlvbiIsImFsbG93TG9uZ2VyTWF4U3RheVNlbGVjdGlvbiIsImhhc1ZhbGlkRGF5cyIsImhhc1ZhbGlkTWluU3RheSIsImhhc1ZhbGlkTWF4U3RheSIsImhhc0ludmFsaWRNaW5TdGF5IiwiaGFzSW52YWxpZE1heFN0YXkiLCJoYXNJbnZhbGlkRGF5cyIsInRvb2x0aXBQb3NpdGlvbiIsInBsYWNlbWVudCIsImZsaXAiLCJvbkNsZWFyU2VsZWN0aW9uIiwiaXNTaW5nbGVJbnB1dCIsImVsU2luZ2xlSW5wdXQiLCJ2YWx1ZVRvSW5wdXQiLCJ0aW1lcyIsIm1Eb20iLCJkb21Nb250aCIsImRheUVsZW1lbnRzIiwibW9udGhEb20iLCJjYXB0aW9uIiwiY2FwdGlvblRlbXBsYXRlU3RyaW5nIiwiaGVhZGVyIiwiZGF5c1RlbXBsYXRlU3RyaW5nIiwieWVhclBpY2tlciIsImNoZXZyb25Eb3duSWQiLCJzaG91bGRDbGFtcFRvQ3VycmVudERhdGUiLCJtaW5pbXVtU2VsZWN0YWJsZU1vbnRoIiwibWluaW11bU1vbnRoIiwibm9ybWFsaXplZE1vbnRoIiwid2Vla2RheXNMYWJlbHNFeHRlbmRlZCIsImRheXNQZXJXZWVrIiwid2Vla0RheUxhYmVsIiwic3RhcnRPZk1vbnRoIiwicm93VGVtcGxhdGUiLCJ3ZWVrUm93Iiwicm93Q2xvc2UiLCJ3ZWVrU2hpZnQiLCJtb250aFRlbXBsYXRlIiwicm93cyIsIndlZWtTaGlmdENvcnJlY3RlZCIsImRheUNvdW50ZXIiLCJ3ZWVrIiwiZGF5VGVtcGxhdGVTdHJpbmciLCJ3ZWVrRGF5UGxhY2Vob2xkZXIiLCJkYXlSYXRlIiwiZGF5SXNBdmFpbGFibGVPdXQiLCJkYXlJc01vcm5pbmdCbG9ja2VkIiwic2hvd1JhdGVzIiwiaXNEaXNhYmxlZCIsImlzQ3VycmVudERheSIsImlzQXZhaWxhYmxlSW4iLCJyYXRlVCIsIm1pblN0YXlUIiwic2hvd01pblN0YXkiLCJtYXhTdGF5VCIsInNob3dNYXhTdGF5IiwiYXJpYUxhYmVsUGFydHMiLCJ0b2RheSIsInVuYXZhaWxhYmxlIiwiYXJpYUxhYmVsIiwidGFiaW5kZXgiLCJ3ZWVrRGF5Iiwib25TdWNjZXNzIiwiYXR0cmlidXRlcyIsImRpc2FibGVBdmFpbGFiaXR5TWFwIiwibWFwc0xvYWRlZCIsIm9uRXJyb3IiLCJmZXRjaCIsInJlbnRhbFVybCIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJzaW5nbGVJbnB1dERhdGVGb3JtYXQiLCJkYXRlU3RhcnQiLCJkYXRlRW5kIiwic2luZ2xlSW5wdXRTZXBhcmF0b3IiLCJvblNlbGVjdGlvbkNvbXBsZXRlZCIsImVsVGFyZ2V0IiwiaGlkZGVuRWxGb3JtYXQiLCJpbnB1dCIsImhpZGRlbklucHV0IiwiY2xvbmVOb2RlIiwicGFyZW50RWxlbWVudCIsImhpZGRlbkVsRW5kQXQiLCJoaWRkZW5FbFN0YXJ0QXQiLCJyZWFkT25seSIsImRyb3BCYXNpYyIsIm9wZW5Ecm9wIiwiaXNSZXZlcnNlZCIsInZpc2libGUiLCJkcm9wUGxhY2VtZW50IiwiaGlkZSIsImRlZmVyVXBkYXRlIiwidXBkYXRlIiwiZm9jdXNUb3VjaEV2ZW50cyIsImJpbmQiLCJlbFJlc2V0IiwiZm9yY2UiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImhpZGRlblZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIm1vbnRoRGlmZmVyZW5jZSIsInR5cGUiLCJfY2FsbGJhY2siLCJtc2ciLCJjb25zb2xlIiwiYXBpSG9zdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwaU5hbWVzcGFjZSIsImFwaU1hcHNSb3V0ZSIsImFwaVJlbnRhbElkIiwiYXBpQ3VycmVuY3kiLCJpZHMiLCJyb3V0ZSIsImFzc2lnbiIsImVuIiwiZGUiLCJlcyIsImZyIiwiaXQiLCJzdiIsInJ1IiwicGwiLCJubCIsIkFSUk9XX1NJWkUiLCJnZXRHbG9iYWxPYmplY3QiLCJnZXRQb3BwZXJSdW50aW1lIiwiZ2xvYmFsT2JqZWN0IiwiUG9wcGVyIiwiY3JlYXRlUG9wcGVyIiwiZ2V0RmxvYXRpbmdSdW50aW1lIiwicnVudGltZSIsIkZsb2F0aW5nVUlET00iLCJGbG9hdGluZ1VJIiwiZmxvYXRpbmdVSSIsImNvbXB1dGVQb3NpdGlvbiIsImdldEFycm93RWxlbWVudCIsImZsb2F0aW5nRWwiLCJzcGxpdFBsYWNlbWVudCIsImJhc2VQbGFjZW1lbnQiLCJhbGlnbm1lbnQiLCJzZXRCb29sZWFuQXR0cmlidXRlIiwiYXBwbHlQb3NpdGlvbiIsIngiLCJzdHJhdGVneSIsInBvc2l0aW9uIiwiYXBwbHlBcnJvd1Bvc2l0aW9uIiwiYXJyb3dFbCIsImNsYW1wIiwiYWxpZ25Ib3Jpem9udGFsbHkiLCJyZWZlcmVuY2VSZWN0IiwiZmxvYXRpbmdSZWN0Iiwid2lkdGgiLCJhbGlnblZlcnRpY2FsbHkiLCJnZXRWaWV3cG9ydENvb3JkaW5hdGVzIiwiY3Jvc3NBeGlzT2Zmc2V0IiwibWFpbkF4aXNPZmZzZXQiLCJub3JtYWxpemVDb29yZGluYXRlc0Zvck9mZnNldFBhcmVudCIsInZpZXdwb3J0WCIsInZpZXdwb3J0WSIsIm9mZnNldFBhcmVudCIsImRvY3VtZW50RWxlbWVudCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJwYXJlbnRSZWN0IiwiY2xpZW50TGVmdCIsInNjcm9sbExlZnQiLCJjbGllbnRUb3AiLCJwb3NpdGlvbk1hbnVhbEFycm93IiwiaGFsZkFycm93IiwibWF4QXJyb3dYIiwiYXJyb3dYIiwibWF4QXJyb3dZIiwiYXJyb3dZIiwiYXR0YWNoRmFsbGJhY2tBdXRvVXBkYXRlIiwiY3JlYXRlUG9wcGVyUG9zaXRpb25lciIsInBvcHBlclJ1bnRpbWUiLCJyZWZlcmVuY2VFbCIsIm1vZGlmaWVycyIsImVuYWJsZWQiLCJjcmVhdGVGbG9hdGluZ1Bvc2l0aW9uZXIiLCJmbG9hdGluZ1J1bnRpbWUiLCJtaWRkbGV3YXJlIiwiY3Jvc3NBeGlzIiwibWFpbkF4aXMiLCJzaGlmdCIsImFycm93IiwiX3JlZiIsIm1pZGRsZXdhcmVEYXRhIiwicmVmZXJlbmNlSGlkZGVuIiwiZXNjYXBlZCIsImNsZWFudXAiLCJhdXRvVXBkYXRlIiwiY3JlYXRlTWFudWFsUG9zaXRpb25lciIsInZpZXdwb3J0Q29vcmRpbmF0ZXMiLCJub3JtYWxpemVkQ29vcmRpbmF0ZXMiLCJub3JtYWxpemVkT3B0aW9ucyIsInNyT25seSIsInRvb2x0aXBBcnJvdyIsIm1DZWxsIiwidGFibGVIZWFkZXIiLCJfcmVmMiIsImNhcHRpb25QaWNrZXIiLCJjYXB0aW9uVHJpZ2dlciIsImNhcHRpb25MYWJlbCIsImNhcHRpb25DaGV2cm9uIiwiX3JlZjMiLCJ5ZWFyUGlja2VyQ2xvc2UiLCJ5ZWFyR3JpZCIsInllYXJQaWNrZXJIZWFkZXIiLCJ0aCIsImluZm9MaW5lcyIsImluZm9IdG1sIiwiaW5mbyIsImNudCIsInBsYWNlaG9sZGVyIiwibnVtIiwicGFkIiwidmFsIiwibG9nIiwiYXZhaWxhYmxlSW4iLCJhdmFpbGFibGVPdXQiLCJkZWZhdWx0Iiwid2lkZ2V0VXRpbHMiLCJhdXRvSW5pdFNlbGVjdG9yIiwiU21pbHlXaWRnZXRVdGlscyIsImluaXRpYWxpemVkIiwiZWxlbWVudHMiLCJjYWwiLCJpbnN0YW5jZXMiLCJTbWlseUNhbGVuZGFyV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==