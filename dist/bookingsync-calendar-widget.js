(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bookingsyncCalendarWidget", [], factory);
	else if(typeof exports === 'object')
		exports["bookingsyncCalendarWidget"] = factory();
	else
		root["bookingsyncCalendarWidget"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/currency-symbol-map/currency-symbol-map.js
var currency_symbol_map = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/widget-utils/src/typechecks.js
const {
  prototype: {
    toString: typechecks_toString
  }
} = Object;

const isNaNPolyfill = value => typeof value === 'number' && Number.isNaN(value); // datatype checks


const isObject = o => {
  return typechecks_toString.call(o) === '[object Object]';
};
const isArray = a => {
  return typechecks_toString.call(a) === '[object Array]';
};
const isFunction = f => {
  return typeof f === 'function';
};
const isString = f => {
  return typeof f === 'string';
};
const isNumeric = n => {
  return !isArray(n) && !isNaNPolyfill(parseInt(n, 10));
};
const is = o => {
  return typeof o !== 'undefined' && o !== null && !isNaNPolyfill(o);
};
// CONCATENATED MODULE: ./node_modules/widget-utils/src/emitter.js
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
// CONCATENATED MODULE: ./node_modules/widget-utils/src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnderscore", function() { return toUnderscore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashToCapital", function() { return dashToCapital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underscoreToCapital", function() { return underscoreToCapital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormatter", function() { return currencyFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseObj", function() { return traverseObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeObj", function() { return capitalizeObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByClassName", function() { return findByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return getClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClassName", function() { return setClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementFromString", function() { return elementFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyElement", function() { return destroyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseToParentWithAttr", function() { return traverseToParentWithAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAttribute", function() { return getParentAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInside", function() { return isInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthLength", function() { return monthLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* concated harmony reexport isFunction */__webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* concated harmony reexport isString */__webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* concated harmony reexport isNumeric */__webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* concated harmony reexport is */__webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* concated harmony reexport Emitter */__webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* global XMLHttpRequest, document, Intl */



const {
  keys
} = Object;
const {
  parse,
  stringify
} = JSON; // string transforms

const toUnderscore = str => str.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`);
const dashToCapital = str => str.replace(/-([a-z])/ig, (s, i) => i.toUpperCase());
const underscoreToCapital = str => str.replace(/_([a-z])/ig, (s, i) => i.toUpperCase());

function toLocaleStringSupportsOptions() {
  return !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');
}

const currencyFormatter = (value, lang, currency, minimumFractionDigits = 0, maximumFractionDigits = 3) => {
  if (toLocaleStringSupportsOptions() && currency) {
    const isDollar = () => Object(currency_symbol_map["getSymbolFromCurrency"])(currency) === '$';

    const options = {
      style: 'currency',
      currency,
      currencyDisplay: isDollar ? 'symbol' : 'code',
      minimumFractionDigits,
      maximumFractionDigits
    };
    const numberFormat = new Intl.NumberFormat(lang, options);
    const str = numberFormat.format(value);

    if (isDollar || !Object(currency_symbol_map["getSymbolFromCurrency"])(currency)) {
      return str;
    }

    return str.replace(currency, Object(currency_symbol_map["getSymbolFromCurrency"])(currency));
  }

  return value;
}; // object helpers

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
  if (!isObject(obj)) {
    return obj;
  }

  return keys(obj).reduce((curr, next) => {
    let nextProperty = obj[next];
    const o = curr;

    if (isArray(nextProperty)) {
      nextProperty = nextProperty.map(i => traverseObj(i, fnKey, fnValue));
    }

    if (fnValue) {
      o[fnKey ? fnKey(next) : next] = isObject(nextProperty) ? traverseObj(nextProperty, fnKey, fnValue) : fnValue(nextProperty, next);
    } else {
      o[fnKey ? fnKey(next) : next] = isObject(nextProperty) ? traverseObj(nextProperty, fnKey) : nextProperty;
    }

    return o;
  }, {});
};
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
    if (isDeep && isObject(obj1[i])) {
      obj3[i] = merge(obj1[i], {}, true);
    } else {
      obj3[i] = obj1[i];
    }
  });
  keys(obj2).forEach(i => {
    if (isDeep && isObject(obj2[i])) {
      obj3[i] = merge(obj3[i] || {}, obj2[i], true);
    } else {
      obj3[i] = obj2[i];
    }
  });
  return obj3;
};
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
const capitalizeObj = object => {
  object = traverseObj(object, dashToCapital);
  object = traverseObj(object, underscoreToCapital);
  return object;
}; // serialize query params with additional transform function

const serialize = (obj, transform) => {
  const component = keys(obj).map(p => `${transform(encodeURIComponent(p))}=${encodeURIComponent(obj[p])}`);
  return component.join('&');
}; // DOM helpers

const findByClassName = (context, name) => context.querySelector(`.${name}`);
const getClassName = el => {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }

  return el.className;
};
const setClassName = (el, className) => {
  el.setAttribute('class', className);
};
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
const elementFromString = string => {
  const element = createElement('div');
  element.innerHTML = string;
  return element.children[0];
};
const destroyElement = element => {
  if (element.parentNode && element.parentNode.removeChild) {
    element.parentNode.removeChild(element);
  }

  return element;
};
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
    const className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
};
const addClass = (el, ...classNames) => {
  const name = classNames;

  if (typeof el.classList !== 'undefined') {
    name.forEach(cls => {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    const cls = `${getClassName(el)} ${name.join(' ')}`;
    setClassName(el, cls);
  }
};
const hasClass = (el, name) => {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }

  const className = getClassName(el);
  return new RegExp(`(^| )${name}( |$)`, 'gi').test(className);
};
const traverseToParentWithAttr = (element, attribute) => {
  let parent = element;
  let value = element.getAttribute(attribute);

  while (!is(value)) {
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
/**
 * Find HTMLElement attribute, in the dom-tree, bubbles up
 * @param el {HTMLElement}
 * @param attr
 * @returns {string}
 */

const getParentAttribute = (el, attr) => traverseToParentWithAttr(el, attr).value;
/**
 * Check if some HTMLElement is inside another one
 * @param child {HTMLElement}
 * @param parent {HTMLElement}
 * @returns {boolean}
 */

const isInside = (child, parent) => {
  let current = child;

  while (current !== parent) {
    if (!is(current) || current.tagName === 'BODY' || current.tagName === 'HTML') {
      return false;
    }

    current = current.parentNode;
  }

  return true;
}; // Date utils

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

const monthLength = (year, month) => {
  let days = daysInMonth[month];

  if (month === 1 && isLeapYear(year)) {
    days = 29;
  }

  return days;
}; // ajax wrapper

const ajax = (apiUrl, success, error, params, method = 'GET') => {
  const xmlHttp = new XMLHttpRequest();
  const url = method === 'GET' && params ? `${apiUrl}?${serialize(params, toUnderscore)}` : apiUrl;

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

  if (isObject(params) && method !== 'GET') {
    xmlHttp.send(stringify(params));
  } else {
    xmlHttp.send();
  }
}; // Validations

const validate = {
  isBlank(o) {
    return is(o);
  },

  isNumeric(o) {
    return isNumeric(o);
  },

  isEmail(o) {
    return typeof o === 'string' && is(o.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/));
  },

  isBoundedBy(o, min, max) {
    return typeof o === 'number' && o >= min && o <= max;
  }

};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

function getDateTimeFormat(tz) {
  return new Intl.DateTimeFormat("en-US", {
    hour12: false,
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function parseDateTimeFormatString(string) {
  const month = +string.slice(0, 2);
  const day = +string.slice(3, 5);
  const year = +string.slice(6, string.length - 10);
  const hour = +string.slice(string.length - 8, string.length - 6);
  const minute = +string.slice(string.length - 5, string.length - 3);
  const second = +string.slice(string.length - 2, string.length);
  const utcDate = new Date();
  utcDate.setUTCFullYear(year);
  utcDate.setUTCMonth(month - 1);
  utcDate.setUTCDate(day);
  utcDate.setUTCHours(hour);
  utcDate.setUTCMinutes(minute);
  utcDate.setUTCSeconds(second);
  return utcDate;
}

function getTimezoneOffsetAtIANADate(tz, date) {
  // Get the offset as though the input date was UTC
  const format = getDateTimeFormat(tz);
  const timestamp = format.format(date);
  const parsedDate = parseDateTimeFormatString(timestamp);
  parsedDate.setUTCMilliseconds(date.getUTCMilliseconds());
  const probableOffset = (parsedDate.getTime() - date.getTime()) / 60000; // If this offset is correct (and it *probably* is) then this is
  // the UTC date corresponding to the date input

  const probableDate = new Date(date);
  probableDate.setUTCMinutes(probableDate.getUTCMinutes() - probableOffset); // See whether reversing the operation gives the input date

  const checkTimestamp = format.format(probableDate);
  const checkedDate = parseDateTimeFormatString(checkTimestamp);
  checkedDate.setUTCMilliseconds(date.getUTCMilliseconds()); // This offset will be 0 if probableOffset was correct, otherwise it
  // will be the number of minutes that the offset was off by.

  const checkOffset = (checkedDate.getTime() - date.getTime()) / 60000;
  return probableOffset + checkOffset;
}

function getTimezoneOffsetAtUTCDate(tz, date) {
  const format = getDateTimeFormat(tz);
  const timestamp = format.format(date);
  const parsedDate = parseDateTimeFormatString(timestamp);
  parsedDate.setUTCMilliseconds(date.getUTCMilliseconds());
  const offset = parsedDate.getTime() - date.getTime();
  return offset / 60000; // millseconds => minutes
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
    const tzString = String(tz);

    if (tzString.startsWith("Etc/GMT")) {
      const offset = +tzString.slice(7);
      if (Number.isInteger(offset)) return 60 * -offset;
    } else if (typeof Intl !== "undefined" && tzString.indexOf("/") >= 0) {
      return {
        formatOffset: date => getTimezoneOffsetAtUTCDate(tz, date),
        parseOffset: date => getTimezoneOffsetAtIANADate(tz, date)
      };
    } else {
      const tzUpper = String(tz).toUpperCase();

      if (tzUpper in defaultTimezoneNames) {
        const offset = Math.floor(60 * defaultTimezoneNames[tzUpper]);
        if (Number.isFinite(offset)) return offset;
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

  if (!Number.isFinite(date.getTime())) {
    throw new Error("Can't format an invalid date.");
  }

  const tokens = TimestampParser.parseFormatString(format);
  const useOptions = getFormatOptions(timezone, options);
  const timezoneOffsetMinutes = getTimezoneOffsetMinutes(date, useOptions.tz);
  const tzDate = new Date(date);

  if (Number.isFinite(timezoneOffsetMinutes)) {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var currencySymbolMap = __webpack_require__(10);

module.exports = function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') return undefined;
  var code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined;
  return currencySymbolMap[code];
};

module.exports.currencySymbolMap = currencySymbolMap;

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"bookingsync-calendar-widget\",\"version\":\"1.4.0\",\"description\":\"BookingSync Calendar Widget\",\"main\":\"dist/bookingsync-calendar-widget.js\",\"module\":\"src/bookingsync-calendar-widget.js\",\"scripts\":{\"dev\":\"webpack --env.NODE_ENV=development\",\"build\":\"webpack --env.NODE_ENV=production --display-modules  && webpack --env.NODE_ENV=production --minimize=false --display-modules\",\"test\":\"karma start karma.config.js --colors --env.NODE_ENV=none\",\"test-ci\":\"karma start karma.config.js --single-run true --env.NODE_ENV=none\",\"lint:js\":\"eslint ./*.js src tests\",\"start\":\"webpack-dev-server --inline --hot --env.NODE_ENV=development --host 0.0.0.0\",\"mock-server\":\"node json-server.js\",\"publish-please\":\"publish-please\",\"prepublishOnly\":\"publish-please guard\",\"preversion\":\"npm run lint:js && npm run test-ci\",\"version\":\"npm run build && npm run dev && git add -A dist\",\"postversion\":\"git push && git push --tags && rm -rf build/temp\"},\"dependencies\":{\"popper.js\":\"^1.15.0\",\"strtime\":\"^1.1.1\",\"widget-utils\":\"0.3.2\"},\"devDependencies\":{\"sinon\":\"^7.3.2\",\"@babel/cli\":\"^7.5.0\",\"@babel/core\":\"^7.5.0\",\"@babel/polyfill\":\"^7.4.4\",\"@babel/preset-env\":\"^7.5.3\",\"babel-eslint\":\"^10.0.2\",\"babel-loader\":\"^8.0.6\",\"chai\":\"^4.2.0\",\"css-loader\":\"^3.0.0\",\"eslint\":\"^6.0.1\",\"eslint-loader\":\"2.2.1\",\"eslint-plugin-import\":\"^2.18.0\",\"json-server\":\"0.15.0\",\"karma\":\"^4.1.0\",\"karma-chai\":\"^0.1.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-mocha\":\"^1.3.0\",\"karma-webpack\":\"4.0.2\",\"mocha\":\"6.1.4\",\"node-sass\":\"^4.12.0\",\"publish-please\":\"^5.5.0\",\"sass-loader\":\"^7.1.0\",\"style-loader\":\"^0.23.1\",\"tether\":\"1.4.6\",\"webpack\":\"^4.35.3\",\"webpack-cli\":\"^3.3.5\",\"webpack-dev-server\":\"3.7.2\",\"yargs\":\"13.2.4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/BookingSync/calendar-widget.git\"},\"author\":\"BookingSync.com\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/BookingSync/calendar-widget/issues\"},\"homepage\":\"https://github.com/BookingSync/calendar-widget#readme\",\"engines\":{\"yarn\":\"YARN NO LONGER USED - use npm instead.\"}}");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
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
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

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
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
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
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

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
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
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

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
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


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* global document, module, require, window */
const Calendar = __webpack_require__(15); // Export WidgetUtils


window.BookingSyncWidgetUtils = __webpack_require__(0); // Export Popper

window.Popper = __webpack_require__(5); // in order to export clean constructor to global namespace "bookingsyncCalendarWidget"
// need to mix require with imports

const CalendarConst = Calendar.default;

CalendarConst.init = opts => {
  const initialized = [];
  const options = opts || {};
  const CalendarConstElements = document.querySelectorAll('[data-bookingsync-calendar-widget]');
  CalendarConstElements.forEach(element => {
    options.el = element;
    const cal = new CalendarConst(options);
    initialized.push(cal);
  });
  CalendarConst.instances = initialized;
  return initialized;
};

CalendarConst.VERSION = __webpack_require__(4).version;

if (CalendarConst.autoInit !== false) {
  if (document.readyState !== 'loading') {
    CalendarConst.init();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      CalendarConst.init();
    });
  }
} // Retro compatibility


window.BookingSyncCalendarWidget = CalendarConst;
module.exports = CalendarConst;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': '֏',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': '$b',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'Br',
  'BYN': 'Br',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'CHF',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': 'лв',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MRO': 'UM',
  'MRU': 'UM',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'STN': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);
// Module
exports.push([module.i, "/********************************************************\n\n\t\t\t\t     loader\n\n********************************************************/\n@-webkit-keyframes bookingsyncCalendarWidget__spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes bookingsyncCalendarWidget__spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes bookingsyncCalendarWidget__pulse {\n  50% {\n    background: white; } }\n\n@keyframes bookingsyncCalendarWidget__pulse {\n  50% {\n    background: white; } }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__loading {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  border: 0.25rem solid #cacaca;\n  border-top-color: #000;\n  -webkit-animation: bookingsyncCalendarWidget__spin 1s infinite linear;\n  animation: bookingsyncCalendarWidget__spin 1s infinite linear;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -12px;\n  margin-top: -12px; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__loadingLayer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.55);\n  right: 0;\n  z-index: 10; }\n\n.bookingsyncCalendarWidget__calendar.bookingsyncCalendarWidget__dropBasic {\n  position: absolute;\n  display: none;\n  max-width: 100%;\n  box-shadow: 1px 5px 9px 0px rgba(0, 0, 0, 0.2);\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  margin: 0;\n  padding-top: .5rem;\n  font-family: inherit;\n  line-height: 1.5em;\n  z-index: 10; }\n  .bookingsyncCalendarWidget__calendar.bookingsyncCalendarWidget__dropBasic.bookingsyncCalendarWidget__visible {\n    display: block; }\n  .bookingsyncCalendarWidget__calendar.bookingsyncCalendarWidget__dropBasic .bookingsyncCalendarWidget__mCell {\n    margin-bottom: 1rem; }\n\n/********************************************************\n\n\t\t\t\t      colors\n\n********************************************************/\n.bookingsyncCalendarWidget__calendar {\n  font: 1rem/1.4 \"Open Sans\", Helvetica, Arial, sans-serif;\n  position: relative;\n  margin: 0 -1rem 3rem;\n  padding-top: 0.5rem;\n  background: #ffffff; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__caption {\n    font-weight: 700;\n    margin-bottom: 1.3rem;\n    padding-top: 0.3rem;\n    text-align: center; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__monthsWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__mCell {\n    font-size: 0.875rem;\n    margin: 0 1rem 2rem;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%; }\n    @media (max-width: 767px) {\n      .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__mCell {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n        flex: 1 1 100%; } }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__month {\n    border-collapse: collapse;\n    padding: 0;\n    margin: 0;\n    width: 100%; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__tableHeader,\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__body {\n    margin: 0; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__th {\n    border-bottom: 1px solid #cbcbcb;\n    font-size: 0.85rem;\n    color: #aaaaaa;\n    height: 25px;\n    width: 30px;\n    text-align: center; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__cell {\n    text-align: center;\n    padding: 0;\n    position: relative;\n    border: 1px solid #dedfe2;\n    vertical-align: middle;\n    color: #444444;\n    background-clip: padding-box;\n    overflow: hidden;\n    width: 30px; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__cell:after {\n    content: '';\n    display: block;\n    margin-top: 100%; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__cnt {\n    position: absolute;\n    top: 50%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    line-height: 0; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__infoExtra,\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__info {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 0.6875rem;\n    padding: 1px 3px;\n    text-align: right;\n    color: rgba(60, 60, 60, 0.5);\n    right: 0; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__infoExtra {\n    left: 0;\n    text-align: left;\n    right: auto; }\n\n.bookingsyncCalendarWidget__focus {\n  border-color: #8acdf6; }\n\n/********************************************************\n\n\t\t\t\t  selections, start and ends\n\n\t\t\t\t  N.B. Edit at your own risk\n\t\t\t\t  one cell can have 10 states and lots of these combinations\n\n\t\t\t\t  enabled\n\n\t\t\t\t  disabled\n\t\t\t\t  morningDisabled\n\t\t\t\t  nightDisabled\n\n\t\t\t\t  highlighted\n\t\t\t\t  morningSelected\n\t\t\t\t  nightSelected\n\n\t\t\t\t  invalid\n\t\t\t\t  morningInvalid\n\t\t\t\t  nightInvalid\n\n\n********************************************************/\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selected {\n  color: inherit;\n  /* selected cell generic styles */ }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__reversed {\n  color: inherit;\n  /* selecting reversed (e.g. check-out first) */ }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__direct {\n  color: inherit; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectingReversed {\n  color: inherit; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectingDirect {\n  color: inherit; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__disabled,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__disabled:hover {\n  color: #bfbfbf;\n  cursor: default;\n  background-color: #f0f0f0; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__highlighted {\n  border-color: #bde3ff; }\n\n.bookingsyncCalendarWidget__direct [data-enabled]:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectedStart {\n  background: linear-gradient(to left top, transparent 50%, #ffffff 50%);\n  border-top-color: #dedfe2;\n  border-left-color: #dedfe2; }\n\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__highlighted:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectedEnd {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%);\n  border-bottom-color: #dedfe2;\n  border-right-color: #dedfe2; }\n\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%); }\n\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__highlighted:hover {\n  background: linear-gradient(to left top, transparent 50%, #ffffff 50%);\n  border-top-color: #dedfe2;\n  border-left-color: #dedfe2; }\n\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__selectedEnd,\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__selectedEnd:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%); }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__nightDisabled,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__nightDisabled:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #f0f0f0 50%);\n  color: #444444; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__morningDisabled,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__morningDisabled:hover {\n  background: linear-gradient(to left top, transparent 50%, #f0f0f0 50%); }\n\n.bookingsyncCalendarWidget__direct [data-enabled]:hover,\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover,\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__nightDisabled:hover,\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__morningDisabled:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectedStart,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__selectedEnd,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__highlighted {\n  background-color: #8acdf6;\n  cursor: pointer; }\n\n.bookingsyncCalendarWidget__direct [data-enabled]:hover,\n.bookingsyncCalendarWidget__direct [data-enabled]:hover .bookingsyncCalendarWidget__cnt,\n.bookingsyncCalendarWidget__direct [data-enabled]:hover .bookingsyncCalendarWidget__info,\n.bookingsyncCalendarWidget__direct [data-enabled]:hover .bookingsyncCalendarWidget__infoExtra {\n  cursor: pointer; }\n\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover,\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover .bookingsyncCalendarWidget__cnt,\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover .bookingsyncCalendarWidget__info,\n.bookingsyncCalendarWidget__reversed [data-available-out]:hover .bookingsyncCalendarWidget__infoExtra {\n  cursor: pointer; }\n\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__nightDisabled:hover,\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__nightDisabled:hover .bookingsyncCalendarWidget__cnt,\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__nightDisabled:hover .bookingsyncCalendarWidget__info,\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__nightDisabled:hover .bookingsyncCalendarWidget__infoExtra {\n  cursor: pointer; }\n\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__morningDisabled:hover,\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__morningDisabled:hover .bookingsyncCalendarWidget__cnt,\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__morningDisabled:hover .bookingsyncCalendarWidget__info,\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__morningDisabled:hover .bookingsyncCalendarWidget__infoExtra {\n  cursor: pointer; }\n\n.bookingsyncCalendarWidget__actionsEnabled .bookingsyncCalendarWidget__invalid:not(.bookingsyncCalendarWidget__selectedStart) {\n  background: #c0c0c0;\n  color: #ffffff;\n  border-color: #cacaca; }\n\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__invalid:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #c0c0c0 50%);\n  border-top-color: #dedfe2;\n  border-left-color: #dedfe2;\n  color: #444444; }\n\n.bookingsyncCalendarWidget__selectingReversed .bookingsyncCalendarWidget__invalid.bookingsyncCalendarWidget__selectedEnd,\n.bookingsyncCalendarWidget__selectingDirect .bookingsyncCalendarWidget__invalid:hover {\n  background: linear-gradient(to left top, transparent 50%, #c0c0c0 50%);\n  border-bottom-color: #dedfe2;\n  border-right-color: #dedfe2;\n  color: #444444; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid {\n  background-color: #c0c0c0;\n  border-bottom-color: #cacaca;\n  border-right-color: #cacaca; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid:hover .bookingsyncCalendarWidget__cnt,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid:hover .bookingsyncCalendarWidget__info,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid:hover .bookingsyncCalendarWidget__infoExtra {\n  cursor: default; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__invalid.bookingsyncCalendarWidget__disabled:hover {\n  background-color: #f0f0f0; }\n\n/********************************************************\n\n\t\t\t\t     buttons\n\n********************************************************/\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back {\n  cursor: pointer;\n  height: 23px;\n  width: 23px;\n  fill: #444444;\n  padding: 6px 10px;\n  border-radius: 1px;\n  top: .25rem;\n  left: 1rem;\n  z-index: 2;\n  position: absolute; }\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward svg,\n  .bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back svg {\n    height: inherit;\n    width: inherit; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward {\n  right: 1rem;\n  left: auto; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward:active,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward:focus,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back:active,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back:focus {\n  outline: none; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back:hover {\n  fill: #3895d9; }\n\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward[disabled],\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__forward[disabled]:hover,\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back[disabled],\n.bookingsyncCalendarWidget__calendar .bookingsyncCalendarWidget__back[disabled]:hover {\n  opacity: 0.5;\n  cursor: default;\n  fill: #444444; }\n\n/********************************************************\n\n\t\t\t\t     mods\n\n********************************************************/\n/* chunky layout */\n.bookingsyncCalendarWidget__chunky .bookingsyncCalendarWidget__cnt {\n  left: 0;\n  top: .8rem;\n  text-align: right;\n  margin-right: .5rem;\n  font-size: 0.6875rem;\n  color: rgba(60, 60, 60, 0.5); }\n\n.bookingsyncCalendarWidget__chunky .bookingsyncCalendarWidget__info {\n  top: 39%;\n  text-align: center;\n  font-size: 0.75rem;\n  color: #444444; }\n\n.bookingsyncCalendarWidget__chunky .bookingsyncCalendarWidget__infoExtra {\n  text-align: center;\n  right: 0;\n  bottom: 3px; }\n\n.bookingsyncCalendarWidget__chunky .bookingsyncCalendarWidget__mCell {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 46%;\n  flex: 1 1 46%; }\n", ""]);
// Exports
exports.locals = {
	"calendar": "bookingsyncCalendarWidget__calendar",
	"loading": "bookingsyncCalendarWidget__loading",
	"spin": "bookingsyncCalendarWidget__spin",
	"loadingLayer": "bookingsyncCalendarWidget__loadingLayer",
	"dropBasic": "bookingsyncCalendarWidget__dropBasic",
	"visible": "bookingsyncCalendarWidget__visible",
	"mCell": "bookingsyncCalendarWidget__mCell",
	"caption": "bookingsyncCalendarWidget__caption",
	"monthsWrapper": "bookingsyncCalendarWidget__monthsWrapper",
	"month": "bookingsyncCalendarWidget__month",
	"tableHeader": "bookingsyncCalendarWidget__tableHeader",
	"body": "bookingsyncCalendarWidget__body",
	"th": "bookingsyncCalendarWidget__th",
	"cell": "bookingsyncCalendarWidget__cell",
	"cnt": "bookingsyncCalendarWidget__cnt",
	"infoExtra": "bookingsyncCalendarWidget__infoExtra",
	"info": "bookingsyncCalendarWidget__info",
	"focus": "bookingsyncCalendarWidget__focus",
	"selected": "bookingsyncCalendarWidget__selected",
	"reversed": "bookingsyncCalendarWidget__reversed",
	"direct": "bookingsyncCalendarWidget__direct",
	"selectingReversed": "bookingsyncCalendarWidget__selectingReversed",
	"selectingDirect": "bookingsyncCalendarWidget__selectingDirect",
	"disabled": "bookingsyncCalendarWidget__disabled",
	"highlighted": "bookingsyncCalendarWidget__highlighted",
	"selectedStart": "bookingsyncCalendarWidget__selectedStart",
	"selectedEnd": "bookingsyncCalendarWidget__selectedEnd",
	"nightDisabled": "bookingsyncCalendarWidget__nightDisabled",
	"morningDisabled": "bookingsyncCalendarWidget__morningDisabled",
	"actionsEnabled": "bookingsyncCalendarWidget__actionsEnabled",
	"invalid": "bookingsyncCalendarWidget__invalid",
	"forward": "bookingsyncCalendarWidget__forward",
	"back": "bookingsyncCalendarWidget__back",
	"chunky": "bookingsyncCalendarWidget__chunky",
	"pulse": "bookingsyncCalendarWidget__pulse"
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, ".bookingsyncCalendarWidget__reset div, .bookingsyncCalendarWidget__reset span, .bookingsyncCalendarWidget__reset applet, .bookingsyncCalendarWidget__reset object, .bookingsyncCalendarWidget__reset iframe, .bookingsyncCalendarWidget__reset h1, .bookingsyncCalendarWidget__reset h2, .bookingsyncCalendarWidget__reset h3, .bookingsyncCalendarWidget__reset h4, .bookingsyncCalendarWidget__reset h5, .bookingsyncCalendarWidget__reset h6, .bookingsyncCalendarWidget__reset p, .bookingsyncCalendarWidget__reset blockquote, .bookingsyncCalendarWidget__reset pre, .bookingsyncCalendarWidget__reset a, .bookingsyncCalendarWidget__reset abbr, .bookingsyncCalendarWidget__reset acronym, .bookingsyncCalendarWidget__reset address, .bookingsyncCalendarWidget__reset big, .bookingsyncCalendarWidget__reset cite, .bookingsyncCalendarWidget__reset code, .bookingsyncCalendarWidget__reset del, .bookingsyncCalendarWidget__reset dfn, .bookingsyncCalendarWidget__reset em, .bookingsyncCalendarWidget__reset img, .bookingsyncCalendarWidget__reset ins, .bookingsyncCalendarWidget__reset kbd, .bookingsyncCalendarWidget__reset q, .bookingsyncCalendarWidget__reset s, .bookingsyncCalendarWidget__reset samp, .bookingsyncCalendarWidget__reset small, .bookingsyncCalendarWidget__reset strike, .bookingsyncCalendarWidget__reset strong, .bookingsyncCalendarWidget__reset sub, .bookingsyncCalendarWidget__reset sup, .bookingsyncCalendarWidget__reset tt, .bookingsyncCalendarWidget__reset var, .bookingsyncCalendarWidget__reset b, .bookingsyncCalendarWidget__reset u, .bookingsyncCalendarWidget__reset i, .bookingsyncCalendarWidget__reset center, .bookingsyncCalendarWidget__reset dl, .bookingsyncCalendarWidget__reset dt, .bookingsyncCalendarWidget__reset dd, .bookingsyncCalendarWidget__reset ol, .bookingsyncCalendarWidget__reset ul, .bookingsyncCalendarWidget__reset li, .bookingsyncCalendarWidget__reset fieldset, .bookingsyncCalendarWidget__reset form, .bookingsyncCalendarWidget__reset div.bookingsyncCalendarWidget__form, .bookingsyncCalendarWidget__reset label, .bookingsyncCalendarWidget__reset legend, .bookingsyncCalendarWidget__reset table, .bookingsyncCalendarWidget__reset caption, .bookingsyncCalendarWidget__reset tbody, .bookingsyncCalendarWidget__reset tfoot, .bookingsyncCalendarWidget__reset thead, .bookingsyncCalendarWidget__reset tr, .bookingsyncCalendarWidget__reset th, .bookingsyncCalendarWidget__reset td, .bookingsyncCalendarWidget__reset article, .bookingsyncCalendarWidget__reset aside, .bookingsyncCalendarWidget__reset canvas, .bookingsyncCalendarWidget__reset details, .bookingsyncCalendarWidget__reset figcaption, .bookingsyncCalendarWidget__reset figure, .bookingsyncCalendarWidget__reset footer, .bookingsyncCalendarWidget__reset header, .bookingsyncCalendarWidget__reset hgroup, .bookingsyncCalendarWidget__reset menu, .bookingsyncCalendarWidget__reset nav, .bookingsyncCalendarWidget__reset section, .bookingsyncCalendarWidget__reset summary, .bookingsyncCalendarWidget__reset time, .bookingsyncCalendarWidget__reset mark, .bookingsyncCalendarWidget__reset audio, .bookingsyncCalendarWidget__reset video, .bookingsyncCalendarWidget__reset button, .bookingsyncCalendarWidget__reset textarea, .bookingsyncCalendarWidget__reset input,\n.bookingsyncCalendarWidget__reset .bookingsyncCalendarWidget__button, .bookingsyncCalendarWidget__reset .bookingsyncCalendarWidget__legend {\n  font-family: \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size-adjust: none;\n  font-size: 100%;\n  font-style: normal;\n  letter-spacing: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font: normal normal 100% \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: left;\n  -moz-text-align-last: initial;\n  text-align-last: initial;\n  text-decoration: none;\n  -webkit-text-emphasis: none;\n  text-emphasis: none;\n  text-height: auto;\n  text-indent: 0;\n  text-justify: auto;\n  text-outline: none;\n  text-shadow: none;\n  text-transform: none;\n  text-wrap: normal;\n  alignment-adjust: auto;\n  alignment-baseline: baseline;\n  -webkit-animation: none 0 ease 0 1 normal;\n  animation: none 0 ease 0 1 normal;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n  appearance: normal;\n  azimuth: center;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  background: none 0 0 auto repeat scroll padding-box transparent;\n  background-color: transparent;\n  background-image: none;\n  baseline-shift: baseline;\n  binding: none;\n  bleed: 6pt;\n  bookmark-label: content();\n  bookmark-level: none;\n  bookmark-state: open;\n  bookmark-target: none;\n  border: 0 none transparent;\n  border-radius: 0;\n  bottom: auto;\n  box-align: stretch;\n  -webkit-box-decoration-break: slice;\n  box-decoration-break: slice;\n  box-direction: normal;\n  flex: 0.0;\n  flex-group: 1;\n  box-lines: single;\n  box-ordinal-group: 1;\n  box-orient: inline-axis;\n  box-pack: start;\n  box-shadow: none;\n  box-sizing: content-box;\n  -webkit-break-after: auto;\n  -moz-break-after: auto;\n  break-after: auto;\n  -webkit-break-before: auto;\n  -moz-break-before: auto;\n  break-before: auto;\n  -webkit-column-break-inside: auto;\n  page-break-inside: auto;\n  break-inside: auto;\n  caption-side: top;\n  clear: none;\n  clip: auto;\n  color: inherit;\n  color-profile: auto;\n  -webkit-column-count: auto;\n  -moz-column-count: auto;\n  column-count: auto;\n  -webkit-column-fill: balance;\n  -moz-column-fill: balance;\n  column-fill: balance;\n  -webkit-column-gap: normal;\n  -moz-column-gap: normal;\n  column-gap: normal;\n  -webkit-column-rule: medium medium #1f1f1f;\n  -moz-column-rule: medium medium #1f1f1f;\n  column-rule: medium medium #1f1f1f;\n  -webkit-column-span: 1;\n  -moz-column-span: 1;\n  column-span: 1;\n  -webkit-column-width: auto;\n  -moz-column-width: auto;\n  column-width: auto;\n  -webkit-columns: auto auto;\n  -moz-columns: auto auto;\n  columns: auto auto;\n  content: normal;\n  counter-increment: none;\n  counter-reset: none;\n  crop: auto;\n  cursor: auto;\n  direction: ltr;\n  display: inline;\n  dominant-baseline: auto;\n  drop-initial-after-adjust: text-after-edge;\n  drop-initial-after-align: baseline;\n  drop-initial-before-adjust: text-before-edge;\n  drop-initial-before-align: caps-height;\n  drop-initial-size: auto;\n  drop-initial-value: initial;\n  elevation: level;\n  empty-cells: show;\n  fit: fill;\n  fit-position: 0% 0%;\n  float: none;\n  float-offset: 0 0;\n  grid-columns: none;\n  grid-rows: none;\n  hanging-punctuation: none;\n  height: auto;\n  hyphenate-after: auto;\n  hyphenate-before: auto;\n  hyphenate-character: auto;\n  hyphenate-lines: no-limit;\n  hyphenate-resource: none;\n  -webkit-hyphens: manual;\n  -moz-hyphens: manual;\n  -ms-hyphens: manual;\n  hyphens: manual;\n  icon: auto;\n  image-orientation: auto;\n  image-rendering: auto;\n  image-resolution: normal;\n  inline-box-align: last;\n  left: auto;\n  line-height: inherit;\n  line-stacking: inline-line-height exclude-ruby consider-shifts;\n  list-style: disc outside none;\n  margin: 0;\n  marks: none;\n  marquee-direction: forward;\n  marquee-loop: 1;\n  marquee-play-count: 1;\n  marquee-speed: normal;\n  marquee-style: scroll;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  move-to: normal;\n  nav-down: auto;\n  nav-index: auto;\n  nav-left: auto;\n  nav-right: auto;\n  nav-up: auto;\n  opacity: 1;\n  orphans: 2;\n  outline: invert none medium;\n  outline-offset: 0;\n  overflow: visible;\n  overflow-style: auto;\n  padding: 0;\n  page: auto;\n  page-break-after: auto;\n  page-break-before: auto;\n  page-break-inside: auto;\n  page-policy: start;\n  -webkit-perspective: none;\n  perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  position: static;\n  presentation-level: 0;\n  punctuation-trim: none;\n  quotes: none;\n  rendering-intent: auto;\n  resize: none;\n  right: auto;\n  rotation: 0;\n  rotation-point: 50% 50%;\n  ruby-align: auto;\n  ruby-overhang: none;\n  ruby-position: before;\n  ruby-span: none;\n  size: auto;\n  string-set: none;\n  table-layout: auto;\n  top: auto;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transform-origin: 50% 50% 0;\n  -ms-transform-origin: 50% 50% 0;\n  transform-origin: 50% 50% 0;\n  -webkit-transform-style: flat;\n  transform-style: flat;\n  transition: all 0 ease 0;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  white-space: normal;\n  white-space-collapse: collapse;\n  widows: 2;\n  width: auto;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  z-index: auto;\n  text-align: start;\n  /* And disable MS gradients */\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.bookingsyncCalendarWidget__reset address, .bookingsyncCalendarWidget__reset blockquote, .bookingsyncCalendarWidget__reset dd, .bookingsyncCalendarWidget__reset div, .bookingsyncCalendarWidget__reset dl, .bookingsyncCalendarWidget__reset dt, .bookingsyncCalendarWidget__reset fieldset, .bookingsyncCalendarWidget__reset form, .bookingsyncCalendarWidget__reset div.bookingsyncCalendarWidget__form, .bookingsyncCalendarWidget__reset frame, .bookingsyncCalendarWidget__reset frameset, .bookingsyncCalendarWidget__reset h1, .bookingsyncCalendarWidget__reset h2, .bookingsyncCalendarWidget__reset h3, .bookingsyncCalendarWidget__reset h4, .bookingsyncCalendarWidget__reset h5, .bookingsyncCalendarWidget__reset h6, .bookingsyncCalendarWidget__reset noframes, .bookingsyncCalendarWidget__reset ol, .bookingsyncCalendarWidget__reset p, .bookingsyncCalendarWidget__reset ul, .bookingsyncCalendarWidget__reset center, .bookingsyncCalendarWidget__reset dir, .bookingsyncCalendarWidget__reset hr, .bookingsyncCalendarWidget__reset menu, .bookingsyncCalendarWidget__reset pre, .bookingsyncCalendarWidget__reset article, .bookingsyncCalendarWidget__reset aside, .bookingsyncCalendarWidget__reset canvas, .bookingsyncCalendarWidget__reset details, .bookingsyncCalendarWidget__reset figcaption, .bookingsyncCalendarWidget__reset figure, .bookingsyncCalendarWidget__reset footer, .bookingsyncCalendarWidget__reset header, .bookingsyncCalendarWidget__reset hgroup, .bookingsyncCalendarWidget__reset menu, .bookingsyncCalendarWidget__reset nav, .bookingsyncCalendarWidget__reset section, .bookingsyncCalendarWidget__reset summary {\n  display: block; }\n\n.bookingsyncCalendarWidget__reset li {\n  display: list-item; }\n\n.bookingsyncCalendarWidget__reset table {\n  display: table; }\n\n.bookingsyncCalendarWidget__reset tr {\n  display: table-row; }\n\n.bookingsyncCalendarWidget__reset thead {\n  display: table-header-group; }\n\n.bookingsyncCalendarWidget__reset tbody {\n  display: table-row-group; }\n\n.bookingsyncCalendarWidget__reset tfoot {\n  display: table-footer-group; }\n\n.bookingsyncCalendarWidget__reset col {\n  display: table-column; }\n\n.bookingsyncCalendarWidget__reset colgroup {\n  display: table-column-group; }\n\n.bookingsyncCalendarWidget__reset td, .bookingsyncCalendarWidget__reset th {\n  display: table-cell; }\n\n.bookingsyncCalendarWidget__reset caption {\n  display: table-caption; }\n\n.bookingsyncCalendarWidget__reset input, .bookingsyncCalendarWidget__reset select {\n  display: inline-block; }\n\n.bookingsyncCalendarWidget__reset b, .bookingsyncCalendarWidget__reset strong {\n  font-weight: bold; }\n\n.bookingsyncCalendarWidget__reset b > i, .bookingsyncCalendarWidget__reset strong > i, .bookingsyncCalendarWidget__reset b > em, .bookingsyncCalendarWidget__reset strong > em, .bookingsyncCalendarWidget__reset i > b, .bookingsyncCalendarWidget__reset i > strong, .bookingsyncCalendarWidget__reset em > b, .bookingsyncCalendarWidget__reset em > strong {\n  font-weight: bold;\n  font-style: italic; }\n\n.bookingsyncCalendarWidget__reset textarea, .bookingsyncCalendarWidget__reset input {\n  cursor: text; }\n", ""]);
// Exports
exports.locals = {
	"reset": "bookingsyncCalendarWidget__reset",
	"form": "bookingsyncCalendarWidget__form",
	"button": "bookingsyncCalendarWidget__button",
	"legend": "bookingsyncCalendarWidget__legend"
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/widget-utils/src/index.js + 2 modules
var src = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(5);

// EXTERNAL MODULE: ./src/styles/calendar.scss
var calendar = __webpack_require__(1);
var calendar_default = /*#__PURE__*/__webpack_require__.n(calendar);

// CONCATENATED MODULE: ./src/templates.js
/* eslint "max-len": ["error", 300] */

const {
  disabled,
  info,
  infoExtra,
  morningDisabled,
  nightDisabled,
  cnt
} = calendar_default.a;
const main = "<div class=\"".concat(calendar_default.a.monthsWrapper, "\"></div>");
const templates_month = "\n  <div class=\"".concat(calendar_default.a.mCell, " js-month\">\n    <table class=\"").concat(calendar_default.a.month, "\" role=\"month\">\n      <caption class=\"").concat(calendar_default.a.caption, "\"></caption>\n      <thead class=\"").concat(calendar_default.a.tableHeader, "\"><tr></tr></thead>\n      <tbody class=\"").concat(calendar_default.a.body, "\"></tbody>\n    </table>\n  </div>\n");
const weekDayLabel = label => "<th class=\"".concat(calendar_default.a.th, "\">").concat(label, "</th>");
/* eslint prefer-template: 0 */

const weekDay = (label, dis, disStart, isOutAvailable, rate, minStay, rateT, minStayT) => "\n  <td ".concat(dis ? 'data-disabled' : 'data-enabled', "\n       ").concat(isOutAvailable ? 'data-available-out' : '', "\n       data-value=\"").concat(label, "\"\n       class=\"").concat(calendar_default.a.cell, " ").concat(dis ? disabled : '').concat(disStart ? morningDisabled : '', " ").concat(dis && isOutAvailable ? nightDisabled : '', "\">\n       <div class=\"").concat(cnt, "\" role=\"day-value\">\n        ").concat(label, "\n      </div>\n      ").concat(rate ? '<span class="' + info + '">' + rateT + '</span>' : '', "\n      ").concat(minStay ? '<span class="' + infoExtra + '">' + minStayT + '</span>' : '', "\n  </td>\n");
const forward = "\n  <button class=\"".concat(calendar_default.a.forward, "\" role=\"button\">\n    <svg viewBox=\"0 0 1000 1000\" width=\"20\" height=\"20\">\n      <path d=\"M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z\"></path>\n    </svg>\n  </button>\n");
const back = "\n  <button class=\"".concat(calendar_default.a.back, "\" role=\"button\">\n    <svg viewBox=\"0 0 1000 1000\" width=\"20\" height=\"20\">\n      <path d=\"M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z\"></path>\n    </svg>\n  </button>\n");
const weekDayPlaceholder = '<td></td>';
/* eslint arrow-body-style: 0 */

const weekRow = num => {
  return {
    open: "<tr class=\"js-body-row-".concat(num, "\">"),
    close: '</tr>'
  };
};
const loading = "\n  <div class=\"".concat(calendar_default.a.loadingLayer, "\">\n    <div class=\"").concat(calendar_default.a.loading, "\"></div>\n  </div>\n");
// CONCATENATED MODULE: ./src/calendar-tree.js

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

class calendar_tree_CalendarTree {
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
      this.tree = Object(src["merge"])(this.tree || {}, obj, true);
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
      const m = Object(src["is"])(y) ? this.tree[year][month] : null;

      if (y && m) {
        selection = selection.concat(this.selectDaysInMonth(year, month, 1, m.length));
      }
    });
    return selection;
  }

  selectDaysInMonth(year, month, startDay, endDay) {
    const y = this.tree[year];
    const m = Object(src["is"])(y) ? this.tree[year][month] : null;

    if (y && m) {
      return m.slice(startDay - 1, endDay);
    }

    return [];
  }

  selectDay(year, month, day) {
    const y = this.tree[year];
    const m = Object(src["is"])(y) ? this.tree[year][month] : null;

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
    this.map = calendar_tree_CalendarTree.mapsToTree(map, updatedAt);
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
    if (!(Object(src["isString"])(maps.availability) || Object(src["isString"])(maps.nightly_rates) || Object(src["isString"])(maps.minimum_stays))) {
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
      const length = Object(src["monthLength"])(year, month);
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
// CONCATENATED MODULE: ./src/config.js
/* global NODE_ENV, require */

const currDate = new Date();

const {
  name: config_name
} = __webpack_require__(4);

/* harmony default export */ var config = ({
  name: config_name,
  cssPrefix: Object(src["dashToCapital"])(config_name),
  apiHost:  false ? undefined : 'https://www.bookingsync.com',
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
  isReverseSelectable: false,
  // select end date first
  isBackDisabled: true,
  isDropDown: false,
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
  enableAllDays: false,
  currDate
});
// CONCATENATED MODULE: ./src/locales.js
let locales = {
  'en-GB': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'GBP',
    minStay: '%number+ nights',
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
    startOfWeek: 1
  }
}; // Add aliases

locales = Object.assign({
  en: locales['en-US'],
  de: locales['de-DE'],
  es: locales['es-ES'],
  fr: locales['fr-FR'],
  it: locales['it-IT'],
  sv: locales['sv-SV']
}, locales);
/* harmony default export */ var src_locales = (locales);
// EXTERNAL MODULE: ./node_modules/strtime/dist/strtime.js
var strtime = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils.js

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

  let date = new Date(year, month, day + 1);

  if (date.getTimezoneOffset() > 0) {
    date = new Date(date - 3600 * 24 * 1000);
  }

  return date;
};
const dateToArray = (val, format, locale) => {
  try {
    const date = Object(strtime["strptime"])(val, format, locale);
    const a = Object(strtime["strftime"])(date, '%Y-%m-%d').split('-');
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
// EXTERNAL MODULE: ./src/styles/reset.scss
var styles_reset = __webpack_require__(8);

// CONCATENATED MODULE: ./src/calendar.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calendar_Calendar; });
/* global Node, document, console, require */










class calendar_Calendar extends src["Emitter"] {
  constructor(opts, maps) {
    super();
    this.name = config.name;
    this.VERSION = __webpack_require__(4).version;
    this.CSS_PREFIX = config.cssPrefix;

    if (Object(src["isObject"])(opts)) {
      if (!opts.el) {
        this.logger('el must be HTML element', 'error');
        return;
      }

      const configDataset = Object(src["merge"])(config, opts.el.dataset);
      this.opts = Object(src["merge"])(configDataset, opts);
      this.opts = Object(src["traverseObj"])(this.opts, a => a, b => {
        if (b === 'true' || b === 'false') {
          return b === 'true';
        }

        if (Object(src["isNumeric"])(b)) {
          return parseInt(b, 10);
        }

        return b;
      });

      if (this.opts.isDropDown) {
        this.initCalendarDrop();
      } else {
        this.el = opts.el;
      }

      this.opts.lang = this.opts.lang && this.opts.lang in src_locales ? this.opts.lang : 'en-US';
      this.locale = src_locales[this.opts.lang];
      this.format = this.opts.formatDate || this.locale.formatDate || '%D';
      this.opts.startOfWeek = this.opts.startOfWeek || this.locale.startOfWeek;
    }

    this.dom = {};
    this.cTree = new calendar_tree_CalendarTree(validationOfRange, {});

    if (Object(src["isObject"])(maps)) {
      this.cTree.addMaps(maps, maps.start_date || this.opts.currDate);
    } // selection and highlights


    this.isSelecting = false;
    this.highlightedBounds = [];
    this.hasValidRange = true; // user selects end date first

    this.isReverseSelectable = this.opts.isReverseSelectable;
    this.init();
  }

  init() {
    Object(src["addClass"])(this.el, calendar["calendar"], styles_reset["reset"]);

    if (this.opts.selectable && this.opts.elStartAt && this.opts.elEndAt) {
      if (this.opts.elStartAt.value && this.opts.elEndAt.value) {
        this.selectionStart = dateToArray(this.opts.elStartAt.value, this.format, this.locale);
        this.selectionEnd = dateToArray(this.opts.elEndAt.value, this.format, this.locale);
        this.completeSelection();
      }
    }

    this.dom.monthsWrapper = this.el.appendChild(Object(src["elementFromString"])(main));
    this.dom.forward = this.el.appendChild(Object(src["elementFromString"])(forward));
    this.dom.back = this.el.appendChild(Object(src["elementFromString"])(back));
    this.renderMonths(this.opts.yearStart, this.opts.monthStart);
    this.addBtnsEvents();

    if (this.opts.rentalId) {
      if (this.opts.showRates || this.opts.showMinStay) {
        Object(src["addClass"])(this.el, calendar["chunky"]);
      }

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
      Object(src["addClass"])(this.el, this.isReverseSelectable ? calendar["reversed"] : calendar["direct"]);
      Object(src["removeClass"])(this.el, this.isReverseSelectable ? calendar["direct"] : calendar["reversed"]);
    }

    this.dom.months = months;
    this.dom.months.forEach(m => {
      this.dom.monthsWrapper.appendChild(m);

      if (this.opts.selectable) {
        this.addMonthEvents(m);
        Object(src["addClass"])(this.el, calendar["actionsEnabled"]);
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
      const startDate = dateToIso(this.yearStart, this.monthStart, 1);
      const curr = dateToIso(this.opts.currDate.getFullYear(), this.opts.currDate.getMonth(), 1);
      this.dom.back.disabled = startDate <= curr;
    }
  }

  toggleLoading() {
    if (!this.loaderEl) {
      this.loaderEl = this.el.appendChild(Object(src["elementFromString"])(loading));
      this.emit('loading-show');
    } else {
      Object(src["destroyElement"])(this.loaderEl);
      this.loaderEl = null;
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
      const weekDayEl = Object(src["traverseToParentWithAttr"])(e.target, 'data-value').parent;
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


      if (weekDayEl && Object(src["hasClass"])(weekDayEl, calendar["invalid"])) {
        document.removeEventListener('keyup', resetSelectionOnEscape, true);
        this.resetSelection();
      }

      document.addEventListener('keyup', resetSelectionOnEscape, true);

      if (this.isSelecting) {
        ({
          value,
          parent: cell
        } = Object(src["traverseToParentWithAttr"])(e.target, isEndFirst ? 'data-enabled' : 'data-available-out'));
      } else {
        ({
          value,
          parent: cell
        } = Object(src["traverseToParentWithAttr"])(e.target, isEndFirst ? 'data-available-out' : 'data-enabled'));
      }

      if (Object(src["is"])(value) && cell) {
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
      } = Object(src["traverseToParentWithAttr"])(e.target, 'data-value');

      if (Object(src["is"])(value) && cell) {
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
    if (this.isSelecting && isLater(this.selectionStart, dateValue)) {
      if (!this.hasValidRange) {
        return;
      }

      this.selectEndAction(dateValue, cell);

      const fn = () => {
        Object(src["removeClass"])(this.el, calendar["selectingDirect"]);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      Object(src["addClass"])(this.el, calendar["selectingDirect"]);
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
        Object(src["removeClass"])(this.el, calendar["selectingReversed"]);
        cell.removeEventListener('mouseout', fn);
      };

      cell.addEventListener('mouseout', fn);
      this.isSelecting = false;
    } else {
      Object(src["addClass"])(this.el, calendar["selectingReversed"]);
      this.isSelecting = true;
      this.selectEndAction(dateValue, cell);
    }
  }

  selectStartAction(dateValue, cell) {
    this.selectStart(dateValue, cell);
    this.switchInputFocus('end');
    this.emit('selection-start', dateToIso(...dateValue, true), dateToIso(...dateValue));

    if (Object(src["isFunction"])(this.opts.onSelectStart)) {
      this.opts.onSelectStart(dateToIso(...dateValue, true), dateToIso(...dateValue));
    }
  }

  selectEndAction(dateValue, cell) {
    this.selectEnd(dateValue, cell);
    this.switchInputFocus('start');
    this.emit('selection-end', dateToIso(...dateValue, true), dateToIso(...dateValue));

    if (Object(src["isFunction"])(this.opts.onSelectEnd)) {
      this.opts.onSelectEnd(dateToIso(...dateValue, true), dateToIso(...dateValue));
    }
  }

  removeHighlight() {
    if (this.highlightedBounds.length > 0) {
      const {
        range
      } = this.selectRange(...this.highlightedBounds);
      range.map(a => Object(src["removeClass"])(a, calendar["highlighted"], calendar["invalid"]));
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

    if (Object(src["isArray"])(range)) {
      // check that range is valid and longer than minStay
      this.hasValidRange = hasValidRange = hasValidRange && range.length > minStay;
      range.map(a => {
        Object(src["removeClass"])(a, calendar["highlighted"], calendar["invalid"]);
        Object(src["addClass"])(a, hasValidRange ? calendar["highlighted"] : calendar["invalid"]);
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

    if (Object(src["isFunction"])(this.opts.onClearSelection)) {
      this.opts.onClearSelection(this.selectionStart, this.selectionEnd);
    }

    this.selectionStart = null;
    this.selectionEnd = null;

    if (this.cellA) {
      Object(src["removeClass"])(this.cellA, calendar["selected"], calendar["selectedStart"]);
      this.cellA = null;
    }

    if (this.cellB) {
      Object(src["removeClass"])(this.cellB, calendar["selected"], calendar["selectedEnd"]);
      this.cellB = null;
    }

    if (this.opts.isDropDown && this.opts.elStartAt && this.opts.elEndAt) {
      this.opts.elStartAt.value = null;
      this.opts.elEndAt.value = null;
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
      Object(src["removeClass"])(this.cellA, calendar["selected"], calendar["selectedStart"]);
    }

    if (cell) {
      Object(src["addClass"])(cell, calendar["selected"], calendar["selectedStart"]);
      this.cellA = cell;
    }

    this.valueToInput('start', dateValue);
  }

  selectEnd(dateValue, cell) {
    this.selectionEnd = dateValue;

    if (this.cellB) {
      Object(src["removeClass"])(this.cellB, calendar["selected"], calendar["selectedEnd"]);
    }

    if (cell) {
      Object(src["addClass"])(cell, calendar["selected"], calendar["selectedEnd"]);
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
    const monthDom = Object(src["elementFromString"])(templates_month);
    monthDom.querySelector(".".concat(calendar["tableHeader"], " tr")).innerHTML = this.headerTplString();
    monthDom.querySelector(".".concat(calendar["caption"])).innerHTML = "".concat(this.locale.longMonthNames[month], " ").concat(year);
    monthDom.body = monthDom.querySelector(".".concat(calendar["body"]));
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
      header.push(weekDayLabel(weekdaysLabelsExtended[i + this.opts.startOfWeek]));
    }

    return header.join('');
  }

  daysTplString(year, month) {
    const startOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = Object(src["monthLength"])(year, month);
    const rowTemplate = weekRow;
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
          week.push(weekDayPlaceholder);
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
    let isDisabled = cTree.isDayDisabled(year, month, dayOfMonth);
    let isOutAvailable = cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
    let isDisabledStart = cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');
    const cDate = this.opts.currDate;
    const cDateArray = [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()];
    const dateArray = [year, month, dayOfMonth]; // in the past any availability does not make sense

    if (isLater(dateArray, cDateArray)) {
      isDisabled = true;
      isDisabledStart = undefined;
      isOutAvailable = undefined;
    }

    if (isCurrent(dateArray, cDateArray)) {
      isDisabled = false;
      isDisabledStart = true;
    } // if there is not rentalId and no maps, just render plain calendar


    if (!this.opts.rentalId && isLater(cDateArray, dateArray) || this.opts.enableAllDays) {
      isDisabled = false;
      isOutAvailable = true;
      isDisabledStart = false;
    }

    return weekDay(dayOfMonth, isDisabled, isDisabledStart, isOutAvailable, rate, this.opts.allowShorterMinStaySelection ? 1 : minStay, Object(src["currencyFormatter"])(Math.round(rate), this.opts.lang, this.opts.currency || this.locale.currency), tFormatter(minStay, this.locale.minStay));
  }

  destroyMonths() {
    if (this.dom && Object(src["isArray"])(this.dom.months)) {
      this.dom.months.map(m => Object(src["destroyElement"])(m));
    }
  }

  destroy() {
    return Object(src["destroyElement"])(this.el);
  }

  loadMaps(id) {
    this.toggleLoading();

    const onSuccess = maps => {
      this.toggleLoading();

      if (Object(src["isArray"])(maps.data) && maps.data[0].attributes) {
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

    Object(src["ajax"])(this.opts.rentalUrl(id), onSuccess, onError);
  }

  completeSelection() {
    if (this.opts.isSingleInput) {
      const singleInputDateFormat = this.singleInputDateFormat || this.locale.formatDate;
      const dateStart = Object(strtime["strftime"])(dateToIso(...this.selectionStart), singleInputDateFormat, this.locale);
      const dateEnd = Object(strtime["strftime"])(dateToIso(...this.selectionEnd), singleInputDateFormat, this.locale);
      this.opts.elSingleInput.value = "".concat(dateStart, " ").concat(this.opts.singleInputSeparator, " ").concat(dateEnd);
    }

    this.emit('selection-completed', this.selectionStart, this.selectionEnd);

    if (Object(src["isFunction"])(this.opts.onSelectionCompleted)) {
      this.opts.onSelectionCompleted(dateToIso(...this.selectionStart, true), dateToIso(...this.selectionEnd, true));
    }
  }

  initCalendarDrop() {
    const element = Object(src["elementFromString"])('<div></div>');
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

    Object(src["addClass"])(this.el, calendar["dropBasic"]);
    const calDrop = new popper["default"](this.elTarget, this.el, {
      placement: this.opts.dropPlacement || 'bottom-start',
      hide: true
    });

    const openDrop = (input, isReversed) => {
      this.switchInputFocus(input);
      this.changeSelectionOrder(isReversed);

      if (!Object(src["hasClass"])(this.el, calendar["visible"])) {
        calDrop.update();
        this.emit('drop-open');
        Object(src["addClass"])(this.el, calendar["visible"]);

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
    const date = dateToIso(...dateValue);
    const value = Object(strtime["strftime"])(date, this.format, this.locale);
    const evt = document.createEvent('Event');
    evt.initEvent('change', false, true);

    if (this.opts.hiddenElFormat) {
      const hiddenValue = Object(strtime["strftime"])(date, this.opts.hiddenElFormat, this.locale);

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
        Object(src["addClass"])(this.opts.elStartAt, calendar["focus"]);
        Object(src["removeClass"])(this.opts.elEndAt, calendar["focus"]);
      }

      if (type === 'end') {
        Object(src["addClass"])(this.opts.elEndAt, calendar["focus"]);
        Object(src["removeClass"])(this.opts.elStartAt, calendar["focus"]);
      }

      if (type === 'any') {
        Object(src["removeClass"])(this.opts.elStartAt, calendar["focus"]);
        Object(src["removeClass"])(this.opts.elEndAt, calendar["focus"]);
      }
    }
  }

  closeDrop(e, force) {
    if (!force && (Object(src["isInside"])(e.target, this.el) || Object(src["isInside"])(e.target, this.elTarget))) {
      e.stopPropagation();
    } else {
      Object(src["removeClass"])(this.el, calendar["visible"]);
      this.emit('drop-close');
      this.switchInputFocus('any');
    }
  }

  focusTouchEvents(element, _callback) {
    if (Object(src["isFunction"])(_callback)) {
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

/***/ })
/******/ ]);
});