(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("BookingSyncCalendarWidget", [], factory);
	else if(typeof exports === 'object')
		exports["BookingSyncCalendarWidget"] = factory();
	else
		root["BookingSyncCalendarWidget"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return _isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return is; });
/* unused harmony export toUnderscore */
/* unused harmony export dashToCapital */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return traverseObj; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return merge; });
/* unused harmony export pick */
/* unused harmony export capitalizeObj */
/* unused harmony export serialize */
/* unused harmony export findByClassName */
/* unused harmony export getClassName */
/* unused harmony export setClassName */
/* unused harmony export createElement */
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return elementFromString; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return destroyElement; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return addClass; });
/* unused harmony export hasClass */
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return traverseToParentWithAttr; });
/* unused harmony export getParentAttribute */
/* harmony export (binding) */ __webpack_require__.d(exports, "p", function() { return isInside; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return monthLength; });
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return ajax; });
/* unused harmony export validate */
/* harmony export (binding) */ __webpack_require__.d(exports, "q", function() { return Emitter; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global XMLHttpRequest, document, window, isNaN */
var keys = Object.keys,
    toString = Object.prototype.toString;
var parse = JSON.parse,
    stringify = JSON.stringify;


var isNaNPolyfill = function isNaNPolyfill(value) {
  return typeof value === 'number' && isNaN(value);
};

// datatype checks
var isObject = function isObject(o) {
  return toString.call(o) === '[object Object]';
};
var isArray = function isArray(a) {
  return toString.call(a) === '[object Array]';
};
var isFunction = function isFunction(f) {
  return typeof f === 'function';
};
var isString = function isString(f) {
  return typeof f === 'string';
};
var _isNumeric = function _isNumeric(n) {
  return !isNaNPolyfill(parseInt(n, 10));
};

var is = function is(o) {
  return typeof o !== 'undefined' && o !== null && !isNaNPolyfill(o);
};

// string transforms
var toUnderscore = function toUnderscore(str) {
  return str.replace(/([A-Z])/g, function (s) {
    return '_' + s.toLowerCase();
  });
};
var dashToCapital = function dashToCapital(str) {
  return str.replace(/-([a-z])/ig, function (s, i) {
    return i.toUpperCase();
  });
};

// object helpers

/**
 * Recursively traverse object own properties and apply transform function on keys
 * let a = { lastName: "Roman", firstName: "Khudyakov" }
 * traverseObj(a, toUnderscore)
 * => { last_name: "Roman", first_name: "Khudyakov" }
 *
 * @param obj {Object}
 * @param fnKey {Function}
 * @param fnValue {Function}
 */
var traverseObj = function traverseObj(obj, fnKey, fnValue) {
  return keys(obj).reduce(function (curr, next) {
    var nextProperty = obj[next];
    var o = curr;

    if (isArray(nextProperty)) {
      nextProperty = nextProperty.map(function (i) {
        return traverseObj(i, fnKey, fnValue);
      });
    }

    o[fnKey(next)] = isObject(nextProperty) ? traverseObj(nextProperty, fnKey, fnValue) : fnValue(nextProperty);

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
var merge = function merge(obj1, obj2, isDeep) {
  var obj3 = {};
  keys(obj1).forEach(function (i) {
    if (isDeep && isObject(obj1[i])) {
      obj3[i] = merge(obj1[i], {}, true);
    } else {
      obj3[i] = obj1[i];
    }
  });

  keys(obj2).forEach(function (i) {
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
var pick = function pick(obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.reduce(function (i, t) {
    var pickedObj = i;
    pickedObj[t] = obj[t];
    return pickedObj;
  }, {});
};

var capitalizeObj = function capitalizeObj(o) {
  return traverseObj(o, dashToCapital);
};

// serialize query params with additional transform function
var serialize = function serialize(obj, transform) {
  var component = keys(obj).map(function (p) {
    return transform(encodeURIComponent(p)) + '=' + encodeURIComponent(obj[p]);
  });
  return component.join('&');
};

// DOM helpers
var findByClassName = function findByClassName(context, name) {
  return context.querySelector('.' + name);
};

var getClassName = function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
};

var setClassName = function setClassName(el, className) {
  el.setAttribute('class', className);
};

/**
 * Create HTMLElement with attributes
 * @param name {String}
 * @param attrs {Object}
 * @returns {HTMLElement}
 */
var createElement = function createElement(name, attrs) {
  var params = attrs || {};
  var element = document.createElement(name);
  keys(params).map(function (i) {
    return element.setAttribute(i, params[i]);
  });
  return element;
};

var elementFromString = function elementFromString(string) {
  var element = createElement('div');
  element.innerHTML = string;
  return element.children[0];
};

var destroyElement = function destroyElement(element) {
  element.parentNode.removeChild(element);
  return element;
};

var removeClass = function removeClass(el) {
  for (var _len2 = arguments.length, classNames = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classNames[_key2 - 1] = arguments[_key2];
  }

  var name = classNames;

  if (typeof el.classList !== 'undefined') {
    name.forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
};

var addClass = function addClass(el) {
  for (var _len3 = arguments.length, classNames = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    classNames[_key3 - 1] = arguments[_key3];
  }

  var name = classNames;

  if (typeof el.classList !== 'undefined') {
    name.forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name.join(' '));
    setClassName(el, cls);
  }
};

var hasClass = function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
};

var traverseToParentWithAttr = function traverseToParentWithAttr(element, attribute) {
  var parent = element;
  var value = element.getAttribute(attribute);
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
    value: value,
    parent: parent
  };
};

/**
 * Find HTMLElement attribute, in the dom-tree, bubbles up
 * @param element {HTMLElement}
 * @param attribute
 * @returns {string}
 */
var getParentAttribute = function getParentAttribute(element, attribute) {
  return traverseToParentWithAttr(element, attribute).value;
};

/**
 * Check if some HTMLElement is inside another one
 * @param child {HTMLElement}
 * @param parent {HTMLElement}
 * @returns {boolean}
 */
var isInside = function isInside(child, parent) {
  var current = child;

  while (current !== parent) {
    if (!is(current) || current.tagName === 'BODY' || current.tagName === 'HTML') {
      return false;
    }
    current = current.parentNode;
  }
  return true;
};

// Date utils

var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var isLeapYear = function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};

var monthLength = function monthLength(year, month) {
  var days = daysInMonth[month];
  if (month === 1 && isLeapYear(year)) {
    days = 29;
  }

  return days;
};

// ajax wrapper
var ajax = function ajax(apiUrl, success, error, params, method) {
  var serverMethod = method || 'GET';
  var xmlHttp = new XMLHttpRequest();
  var url = method === 'GET' && params ? apiUrl + '?' + serialize(params, toUnderscore) : apiUrl;
  var isSuccess = function isSuccess(status) {
    return status >= 200 && status < 300 || status === 304;
  };

  xmlHttp.open(serverMethod, url);
  xmlHttp.setRequestHeader('Content-type', 'application/vnd.api+json');

  xmlHttp.onreadystatechange = function () {
    var response = void 0;

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

  if (isObject(params)) {
    xmlHttp.send(stringify(params));
  } else {
    xmlHttp.send();
  }
};

// Validations
var validate = {
  isBlank: function isBlank(o) {
    return is(o);
  },
  isNumeric: function isNumeric(o) {
    return _isNumeric(o);
  },
  isEmail: function isEmail(o) {
    return typeof o === 'string' && is(o.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/));
  },
  isBoundedBy: function isBoundedBy(o, min, max) {
    return typeof o === 'number' && o >= min && o <= max;
  }
};

var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: 'on',


    /**
     * Adds a listener to the collection for the specified event.
     * @memberof! Emitter.prototype
     * @function
     * @param {String} event - The event name.
     * @param {Function} listener - A listener function to add.
     * @returns {Object} Returns an instance of Emitter.
     * @example
     * // Add an event listener to "foo" event.
     * emitter.on('foo', listener);
     */
    value: function on(event, listener) {
      // Use the current collection or create it.
      this.events = this.events || {};

      // Use the current collection of an event or create it.
      this.events[event] = this.events[event] || [];

      // Appends the listener into the collection of the given event
      this.events[event].push(listener);

      return this;
    }

    /**
     * Adds a listener to the collection for the specified event that will be called only once.
     * @memberof! Emitter.prototype
     * @function
     * @param {String} event - The event name.
     * @param {Function} listener - A listener function to add.
     * @returns {Object} Returns an instance of Emitter.
     * @example
     * // Will add an event handler to "foo" event once.
     * emitter.once('foo', listener);
     */

  }, {
    key: 'once',
    value: function once(event, listener) {
      var self = this;

      function fn() {
        self.off(event, fn);
        listener.apply(this, arguments);
      }

      fn.listener = listener;

      this.on(event, fn);

      return this;
    }

    /**
     * Removes a listener from the collection for the specified event.
     * @memberof! Emitter.prototype
     * @function
     * @param {String} event - The event name.
     * @param {Function} listener - A listener function to remove.
     * @returns {Object} Returns an instance of Emitter.
     * @example
     * // Remove a given listener.
     * emitter.off('foo', listener);
     */

  }, {
    key: 'off',
    value: function off(event, listener) {
      var listeners = void 0;

      // Defines listeners value.
      if (!this.events || !(listeners = this.events[event])) {
        return this;
      }

      listeners.forEach(function (fn, i) {
        if (fn === listener || fn.listener === listener) {
          // Removes the given listener.
          listeners.splice(i, 1);
        }
      });

      // Removes an empty event collection.
      if (listeners.length === 0) {
        delete this.events[event];
      }

      return this;
    }

    /**
     * Execute each item in the listener collection in order with the specified data.
     * @memberof! Emitter.prototype
     * @function
     * @param {String} event - The name of the event you want to emit.
     * @param {...Object} args - Data to pass to the listeners.
     * @returns {Object} Returns an instance of Emitter.
     * @example
     * // Emits the "foo" event with 'param1' and 'param2' as arguments.
     * emitter.emit('foo', 'param1', 'param2');
     */

  }, {
    key: 'emit',
    value: function emit(event) {
      var _this = this;

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      var listeners = void 0;

      // Defines listeners value.
      if (!this.events || !(listeners = this.events[event])) {
        return this;
      }

      // Clone listeners
      listeners = listeners.slice(0);

      listeners.forEach(function (fn) {
        return fn.apply(_this, args);
      });

      return this;
    }
  }]);

  return Emitter;
}();

/***/ },
/* 2 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {"insertAt":"top","singleton":true});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js?modules=true&localIdentName=BookingSyncCalendar__[Local]!./../../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap&sourceMapContents!./calendar.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js?modules=true&localIdentName=BookingSyncCalendar__[Local]!./../../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap&sourceMapContents!./calendar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar__ = __webpack_require__(6);
/* global document, module */


__WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].init = function () {
  var initialized = [];
  var calendarElements = document.querySelectorAll('[data-bookingsync-calendar-widget]');
  var len = calendarElements.length;

  for (var i = 0; i < len; i += 1) {
    var el = calendarElements[i];

    var cal = new __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */]({ el: el });

    if (el.dataset.rentalId) {
      cal.loadMaps(el.dataset.rentalId);
    }
    initialized.push(cal);
  }

  __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].instances = initialized;
};

document.addEventListener('DOMContentLoaded', function () {
  if (__WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].autoInit !== false) {
    __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */].init();
  }
});

module.exports = __WEBPACK_IMPORTED_MODULE_0__calendar__["a" /* default */];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widget_utils__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 *  please refer to /tests/unit/calendarTree.specs.js for usage
 *  TODO docs, merge availability with calendar tree, use one data-structure
 *  TODO minStay + availability map considerations fo disabling dates
 */
var genArrayRange = function genArrayRange(a, b) {
  var list = [];
  for (var i = a; i <= b; i += 1) {
    list.push(i);
  }
  return list;
};

var CalendarTree = function () {
  /**
   * @param {Function} validateCell
   * @param {Object} tree
   */
  function CalendarTree(validateCell, tree) {
    _classCallCheck(this, CalendarTree);

    this.validateCell = validateCell;
    this.tree = tree;
  }

  _createClass(CalendarTree, [{
    key: 'addTree',
    value: function addTree(obj) {
      if (!this.tree) {
        this.tree = obj;
      } else {
        this.tree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["a" /* merge */])(this.tree || {}, obj, true);
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

  }, {
    key: 'selectRange',
    value: function selectRange(start, end) {
      var range = [];

      var a = start.slice();

      // if year and month the same, just slice the current month
      if (a[0] === end[0] && a[1] === end[1]) {
        range = this.selectDaysInMonth(a[0], a[1], a[2], end[2]);
      } else {
        var monthDays = this.tree[a[0]][a[1]];

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
          a[0] = end[0];
          a[1] = 0;
        }

        // now we are at the same year and have the case if end month > start month
        // then select everything between those months
        if (end[1] > a[1]) {
          // e.g. start 20 October end 20 December, select full November
          range = range.concat(this.selectMonthsInYear(a[0], a[1], end[1] - 1));
          a[1] = end[1];
        }

        // the missing part is days in end selection month
        range = range.concat(this.selectDaysInMonth(end[0], end[1], 1, end[2]));
      }

      return {
        range: range,
        isValid: this.isRangeValid(range)
      };
    }
  }, {
    key: 'selectMonthsInYear',
    value: function selectMonthsInYear(year, start, end) {
      var _this = this;

      var selection = [];
      var monthRange = genArrayRange(start, end);

      monthRange.forEach(function (month) {
        var y = _this.tree[year];
        var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["b" /* is */])(y) ? _this.tree[year][month] : null;

        if (y && m) {
          selection = selection.concat(_this.selectDaysInMonth(year, month, 1, m.length));
        }
      });

      return selection;
    }
  }, {
    key: 'selectDaysInMonth',
    value: function selectDaysInMonth(year, month, startDay, endDay) {
      var y = this.tree[year];
      var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["b" /* is */])(y) ? this.tree[year][month] : null;

      if (y && m) {
        return m.slice(startDay - 1, endDay);
      }
      return [];
    }
  }, {
    key: 'selectDay',
    value: function selectDay(year, month, day) {
      var y = this.tree[year];
      var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["b" /* is */])(y) ? this.tree[year][month] : null;

      if (y && m) {
        return m[day - 1];
      }
      return null;
    }
  }, {
    key: 'isRangeValid',
    value: function isRangeValid(range, fn) {
      var _this2 = this;

      var validateCell = this.validateCell || fn;
      var isValid = true;

      if (typeof validateCell === 'function') {
        isValid = range.filter(function (a, i) {
          return _this2.validateCell(a, i, range);
        }).length === 0;
      }

      return isValid;
    }
  }, {
    key: 'replaceMaps',
    value: function replaceMaps(map, updatedAt) {
      this.map = CalendarTree.mapsToTree(map, updatedAt);
      return this;
    }
  }, {
    key: 'removeMap',
    value: function removeMap() {
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

  }, {
    key: 'getDayProperty',
    value: function getDayProperty(year, month, day, property) {
      var prop = void 0;

      if (this.map) {
        try {
          prop = this.map[year][month][day][property];
        } catch (e) {
          // continue regardless of error
        }
      }

      return prop;
    }
  }, {
    key: 'isDayDisabled',
    value: function isDayDisabled(year, month, day) {
      return !this.getDayProperty(year, month, day, 'isAvailable');
    }
  }], [{
    key: 'mapsToTree',
    value: function mapsToTree(maps, mapStartAt) {
      if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["c" /* isString */])(maps.availability) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["c" /* isString */])(maps.nightly_rates) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["c" /* isString */])(maps.minimum_stays))) {
        return null;
      }

      var avail = maps.availability.split('').map(parseFloat);
      var rates = maps.nightly_rates.split(',').map(parseFloat);
      var minMap = maps.minimum_stays.split(',').map(parseFloat);
      var date = new Date(mapStartAt);

      var year = date.getFullYear();
      var month = date.getMonth();
      var dayShift = date.getDate();
      var day = 1;

      // trick to add extra unavailable date for proper calculations of check-out dates

      if (avail[avail.length - 1] === 0) {
        avail.push(1);
      }

      return avail.reduce(function (curr, state, index, arr) {
        var length = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["d" /* monthLength */])(year, month);
        var tree = curr;
        var minStay = minMap[index];
        var rate = rates[index];
        var isAvailable = state === 0;
        var prevAvailable = arr[index - 1] === 0;
        var isMorningBlocked = isAvailable && !prevAvailable;

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
          rate: rate,
          minStay: minStay,
          isAvailable: isAvailable,
          isMorningBlocked: isMorningBlocked,
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
  }]);

  return CalendarTree;
}();

/* harmony default export */ exports["a"] = CalendarTree;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widget_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tether_drop__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tether_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tether_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_tree__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locales__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_reset_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_reset_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_reset_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* global VERSION, Node, document, require */












var _document = document,
    lang = _document.documentElement.lang;

var formatDate = function formatDate(format, year, month, day) {
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return format.replace('dd', pad(day)).replace('mm', pad(month + 1)).replace('yyyy', year);
};

var dateToIso = function dateToIso(year, month, day) {
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return new Date(year + '-' + pad(month + 1) + '-' + pad(day));
};

var isLater = function isLater(start, end) {
  return dateToIso.apply(undefined, _toConsumableArray(start)) < dateToIso.apply(undefined, _toConsumableArray(end));
};

var validationOfRange = function validationOfRange(cell, index, range) {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }
  return cell.getAttribute('data-disabled') === '';
};

var Calendar = function (_Emitter) {
  _inherits(Calendar, _Emitter);

  function Calendar(opts, maps) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

    _this.name = 'BookingSync Calendar Widget';
    _this.VERSION = "0.0.0";

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["e" /* isObject */])(opts)) {
      if (!opts.el) {
        console.error('el must be HTML element');
        return _possibleConstructorReturn(_this);
      }

      var configDataset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["a" /* merge */])(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */], opts.el.dataset);
      _this.opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["a" /* merge */])(configDataset, opts);

      _this.opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["f" /* traverseObj */])(_this.opts, function (a) {
        return a;
      }, function (b) {
        if (b === 'true' || b === 'false') {
          return b === 'true';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["g" /* isNumeric */])(b)) {
          return parseInt(b, 10);
        }
        return b;
      });

      if (_this.opts.isDropDown) {
        _this.initCalendarDrop();
      } else {
        _this.el = opts.el;
      }

      _this.opts.lang = Calendar.widgetLang(_this.opts.lang, lang);
      _this.locale = __WEBPACK_IMPORTED_MODULE_5__locales__["a" /* default */][_this.opts.lang || 'en'];
    }

    _this.dom = {};
    _this.cTree = new __WEBPACK_IMPORTED_MODULE_3__calendar_tree__["a" /* default */](validationOfRange, {});

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["e" /* isObject */])(maps)) {
      _this.cTree.addMaps(maps, maps.start_date || _this.opts.currDate);
    }

    // selection and highlights
    _this.isSelecting = false;
    _this.highlightedBounds = [];
    _this.hasValidRange = true;

    // user selects end date first
    _this.isReverseSelectable = _this.opts.isReverseSelectable;
    _this.init();
    return _this;
  }

  _createClass(Calendar, [{
    key: 'init',
    value: function init() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["calendar"], __WEBPACK_IMPORTED_MODULE_6__styles_reset_scss__["reset"]);

      if (this.opts.showRates || this.opts.showMinStay) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["chunky"]);
      }

      this.dom.monthsWrapper = this.el.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])(__WEBPACK_IMPORTED_MODULE_2__templates__["a" /* main */]));
      this.dom.forward = this.el.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])(__WEBPACK_IMPORTED_MODULE_2__templates__["b" /* forward */]));
      this.dom.back = this.el.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])(__WEBPACK_IMPORTED_MODULE_2__templates__["c" /* back */]));
      this.renderMonths(this.opts.yearStart, this.opts.monthStart);

      this.addBtnsEvents();
      this.emit('init');
    }
  }, {
    key: 'changeSelectionOrder',
    value: function changeSelectionOrder(isReverse) {
      if (isReverse !== this.isReverseSelectable && !this.isSelecting) {
        this.isReverseSelectable = isReverse;
        this.destroyMonths();
        this.renderMonths(this.yearStart, this.monthStart);
      }
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths(yearStart, monthStart) {
      var _this2 = this;

      // construct dom tree
      var _createTree = this.createTree(yearStart, monthStart, this.opts.displayMonths),
          tree = _createTree.tree,
          yearEnd = _createTree.yearEnd,
          monthEnd = _createTree.monthEnd,
          months = _createTree.months;

      this.cTree.addTree(tree);

      this.monthStart = monthStart;
      this.yearStart = yearStart;

      this.monthEnd = monthEnd;
      this.yearEnd = yearEnd;

      this.recoverSelections();

      if (this.opts.selectable) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.el, this.isReverseSelectable ? __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["reversed"] : __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["direct"]);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.el, this.isReverseSelectable ? __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["direct"] : __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["reversed"]);
      }

      this.dom.months = months;
      this.dom.months.forEach(function (m) {
        _this2.dom.monthsWrapper.appendChild(m);
        if (_this2.opts.selectable) {
          _this2.addMonthEvents(m);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(_this2.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["actionsEnabled"]);
        }
      });

      this.disableBackBtn();
    }
  }, {
    key: 'recoverSelections',
    value: function recoverSelections() {
      if (this.selectionStart) {
        var _cTree;

        this.selectStart(this.selectionStart, (_cTree = this.cTree).selectDay.apply(_cTree, _toConsumableArray(this.selectionStart)));
      }

      if (this.selectionEnd) {
        var _cTree2;

        this.selectEnd(this.selectionEnd, (_cTree2 = this.cTree).selectDay.apply(_cTree2, _toConsumableArray(this.selectionEnd)));
      }

      if (this.selectionStart && this.selectionEnd) {
        if (this.highlightedBounds.length > 0) {
          this.highLightRange.apply(this, _toConsumableArray(this.highlightedBounds));
        } else {
          this.highLightRange(this.selectionStart, this.selectionEnd);
        }
      }
    }
  }, {
    key: 'disableBackBtn',
    value: function disableBackBtn() {
      if (this.opts.isBackDisabled) {
        var startDate = dateToIso(this.yearStart, this.monthStart, 1);
        var curr = dateToIso(this.opts.currDate.getFullYear(), this.opts.currDate.getMonth(), 1);
        this.dom.back.disabled = startDate <= curr;
      }
    }
  }, {
    key: 'toggleLoading',
    value: function toggleLoading() {
      if (!this.loaderEl) {
        this.loaderEl = this.el.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])(__WEBPACK_IMPORTED_MODULE_2__templates__["d" /* loading */]));
        this.emit('loading-starts');
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["k" /* destroyElement */])(this.loaderEl);
        this.loaderEl = null;
        this.emit('loading-ended');
      }
    }
  }, {
    key: 'addMaps',
    value: function addMaps(maps) {
      this.cTree.replaceMaps(maps, maps.start_date);
      this.destroyMonths();
      this.renderMonths(this.opts.yearStart || this.yearStart, this.opts.monthStart || this.monthStart);
    }
  }, {
    key: 'addBtnsEvents',
    value: function addBtnsEvents() {
      var _this3 = this;

      this.dom.forward.addEventListener('click', function (e) {
        _this3.destroyMonths();
        _this3.renderMonths(_this3.yearEnd, _this3.monthEnd);
        e.preventDefault();
      });

      this.dom.back.addEventListener('click', function (e) {
        _this3.destroyMonths();
        var monthToRender = _this3.monthStart - _this3.opts.displayMonths;
        var yearToRender = _this3.yearStart;

        if (monthToRender < 0) {
          monthToRender += 12;
          yearToRender -= 1;
        }

        _this3.renderMonths(yearToRender, monthToRender);
        e.preventDefault();
      });
    }
  }, {
    key: 'addMonthEvents',
    value: function addMonthEvents(el) {
      var _this4 = this;

      el.addEventListener('click', function (e) {
        var isEndFirst = _this4.isReverseSelectable;
        var value = void 0;
        var cell = void 0;

        if (_this4.isSelecting) {
          var _traverseToParentWith = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["l" /* traverseToParentWithAttr */])(e.target, isEndFirst ? 'data-enabled' : 'data-available-out');

          value = _traverseToParentWith.value;
          cell = _traverseToParentWith.parent;
        } else {
          var _traverseToParentWith2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["l" /* traverseToParentWithAttr */])(e.target, isEndFirst ? 'data-available-out' : 'data-enabled');

          value = _traverseToParentWith2.value;
          cell = _traverseToParentWith2.parent;
        }

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["b" /* is */])(value) && cell) {
          var dateValue = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

          // for simplicity just reset selection when user interacts again
          if (!_this4.isSelecting && _this4.selectionEnd && _this4.selectionStart) {
            _this4.resetSelection();
          }

          if (isEndFirst) {
            _this4.endDateFirstAction(dateValue, cell);
          } else {
            _this4.startDateFirstAction(dateValue, cell);
          }

          if (_this4.opts.isDropDown && _this4.selectionEnd && _this4.selectionStart) {
            _this4.completeSelection(isEndFirst, dateValue, cell);
          }
        }
      });

      el.addEventListener('mouseover', function (e) {
        var _traverseToParentWith3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["l" /* traverseToParentWithAttr */])(e.target, 'data-value'),
            value = _traverseToParentWith3.value,
            cell = _traverseToParentWith3.parent;

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["b" /* is */])(value) && cell) {
          var current = [el.year, el.month, parseInt(cell.getAttribute('data-value'), 10)];

          if (_this4.isSelecting) {
            _this4.removeHighlight();

            if (_this4.isReverseSelectable && _this4.selectionEnd) {
              _this4.highLightRange(current, _this4.selectionEnd);
            } else {
              _this4.highLightRange(_this4.selectionStart, current);
            }
          }
        }
      });

      el.body.addEventListener('mouseout', function (e) {
        /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
        // simulate 'mouseleave'
        if (!e.relatedTarget || e.relatedTarget !== el.body && !(el.body.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
          if (_this4.isSelecting) {
            _this4.removeHighlight();
          }
        }
      });
    }
  }, {
    key: 'startDateFirstAction',
    value: function startDateFirstAction(dateValue, cell) {
      var _this5 = this;

      if (this.isSelecting && isLater(this.selectionStart, dateValue)) {
        var _ret = function () {
          if (!_this5.hasValidRange) {
            return {
              v: void 0
            };
          }
          _this5.selectEndAction(dateValue, cell);

          var fn = function fn() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(_this5.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectingDirect"]);
            cell.removeEventListener('mouseout', fn);
          };

          cell.addEventListener('mouseout', fn);
          _this5.isSelecting = false;
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectingDirect"]);
        this.isSelecting = true;
        this.selectStartAction(dateValue, cell);
      }
    }
  }, {
    key: 'endDateFirstAction',
    value: function endDateFirstAction(dateValue, cell) {
      var _this6 = this;

      if (this.isSelecting && isLater(dateValue, this.selectionEnd)) {
        var _ret2 = function () {
          if (!_this6.hasValidRange) {
            return {
              v: void 0
            };
          }
          _this6.selectStartAction(dateValue, cell);

          var fn = function fn() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(_this6.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectingReversed"]);
            cell.removeEventListener('mouseout', fn);
          };

          cell.addEventListener('mouseout', fn);
          _this6.isSelecting = false;
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.el, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectingReversed"]);
        this.isSelecting = true;
        this.selectEndAction(dateValue, cell);
      }
    }
  }, {
    key: 'selectStartAction',
    value: function selectStartAction(dateValue, cell) {
      this.selectStart(dateValue, cell);
      this.switchInputFocus('end');
      this.emit('selection-start', dateToIso.apply(undefined, _toConsumableArray(dateValue)), dateValue);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["m" /* isFunction */])(this.opts.onSelectStart)) {
        this.opts.onSelectStart(dateToIso.apply(undefined, _toConsumableArray(dateValue)), dateValue);
      }
    }
  }, {
    key: 'selectEndAction',
    value: function selectEndAction(dateValue, cell) {
      this.selectEnd(dateValue, cell);
      this.switchInputFocus('start');
      this.emit('selection-end', dateToIso.apply(undefined, _toConsumableArray(dateValue)), dateValue);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["m" /* isFunction */])(this.opts.onSelectEnd)) {
        this.opts.onSelectEnd(dateToIso.apply(undefined, _toConsumableArray(dateValue)), dateValue);
      }
    }
  }, {
    key: 'removeHighlight',
    value: function removeHighlight() {
      if (this.highlightedBounds.length > 0) {
        var _selectRange = this.selectRange.apply(this, _toConsumableArray(this.highlightedBounds)),
            range = _selectRange.range;

        range.map(function (a) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(a, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["highlighted"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["invalid"]);
        });

        this.hasValidRange = true;
        this.highlightedBounds = [];
      }
    }
  }, {
    key: 'highLightRange',
    value: function highLightRange(start, end) {
      var _selectRange2 = this.selectRange(start, end),
          range = _selectRange2.range,
          isValid = _selectRange2.isValid;

      var hasValidRange = isValid;

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["n" /* isArray */])(range)) {
        var _cTree3;

        // if selected range less than minimum stay at start
        if (range.length <= (_cTree3 = this.cTree).getDayProperty.apply(_cTree3, _toConsumableArray(start).concat(['minStay']))) {
          hasValidRange = false;
        }

        range.map(function (a) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(a, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["highlighted"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["invalid"]);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(a, hasValidRange ? __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["highlighted"] : __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["invalid"]);
          return a;
        });

        this.hasValidRange = hasValidRange;
        this.highlightedBounds = [start, end];
      }

      return hasValidRange;
    }
  }, {
    key: 'resetSelection',
    value: function resetSelection() {
      this.removeHighlight();
      this.isSelecting = false;

      this.emit('clear-selection', this.selectionStart, this.selectionEnd);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["m" /* isFunction */])(this.opts.onClearSelection)) {
        this.opts.onClearSelection(this.selectionStart, this.selectionEnd);
      }

      this.selectionStart = null;
      this.selectionEnd = null;

      if (this.cellA) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.cellA, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedStart"]);
        this.cellA = null;
      }

      if (this.cellB) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.cellB, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedEnd"]);
        this.cellB = null;
      }

      if (this.opts.isDropDown && this.opts.elStartAt && this.opts.elEndAt) {
        this.opts.elStartAt.value = null;
        this.opts.elEndAt.value = null;
      }

      return this;
    }
  }, {
    key: 'selectRange',
    value: function selectRange(start, end) {
      if (isLater(start, end)) {
        return this.cTree.selectRange(start, end);
      }
      return {
        range: null,
        isValid: false
      };
    }
  }, {
    key: 'selectStart',
    value: function selectStart(dateValue, cell) {
      this.selectionStart = dateValue;

      if (this.cellA) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.cellA, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedStart"]);
      }

      if (cell) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(cell, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedStart"]);
        this.cellA = cell;
      }
      this.valueToInput('start', dateValue);
    }
  }, {
    key: 'selectEnd',
    value: function selectEnd(dateValue, cell) {
      this.selectionEnd = dateValue;

      if (this.cellB) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.cellB, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedEnd"]);
      }

      if (cell) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(cell, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selected"], __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["selectedEnd"]);
        this.cellB = cell;
      }
      this.valueToInput('end', dateValue);
    }
  }, {
    key: 'createTree',
    value: function createTree(yearStart, monthStart, times) {
      var months = [];
      var tree = {};
      var monthEnd = monthStart;
      var yearEnd = yearStart;

      for (var i = 0; i < times; i += 1) {
        var mDom = this.domMonth(yearEnd, monthEnd);

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
        tree: tree,
        yearEnd: yearEnd,
        monthEnd: monthEnd,
        months: months
      };
    }
  }, {
    key: 'domMonth',
    value: function domMonth(year, month) {
      var monthDom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])(__WEBPACK_IMPORTED_MODULE_2__templates__["e" /* month */]);
      monthDom.querySelector('.' + __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["tableHeader"] + ' tr').innerHTML = this.headerTplString();
      monthDom.querySelector('.' + __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["caption"]).innerHTML = this.locale.months[month] + ' ' + year;

      monthDom.body = monthDom.querySelector('.' + __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["body"]);
      monthDom.body.innerHTML = this.daysTplString(year, month);

      monthDom.month = month;
      monthDom.year = year;
      monthDom.dayElements = [].slice.call(monthDom.querySelectorAll('[data-value]'));

      return monthDom;
    }
  }, {
    key: 'headerTplString',
    value: function headerTplString() {
      // just to make life easier with start of the week calculation
      var header = [];
      var weekdaysLabelsExtended = this.locale.weekdaysLabels.concat(this.locale.weekdaysLabels);

      for (var i = 0; i < this.opts.daysPerWeek; i += 1) {
        header.push(__WEBPACK_IMPORTED_MODULE_2__templates__["f" /* weekDayLabel */](weekdaysLabelsExtended[i + this.opts.startOfWeek]));
      }
      return header.join('');
    }
  }, {
    key: 'daysTplString',
    value: function daysTplString(year, month) {
      var startOfMonth = new Date(year, month, 1).getUTCDay();
      var daysInMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["d" /* monthLength */])(year, month);
      var rowTemplate = __WEBPACK_IMPORTED_MODULE_2__templates__["g" /* weekRow */];
      var monthTpl = [];
      var weekShift = this.opts.daysPerWeek - this.opts.startOfWeek;

      var rows = 5;
      var weekShiftCorrected = startOfMonth + weekShift;
      var dayCounter = 0;
      var dayOfMonth = 1;

      // don't render full empty week
      if (weekShiftCorrected >= this.opts.daysPerWeek) {
        weekShiftCorrected -= this.opts.daysPerWeek;
      }

      // try to figure out if 5 rows is enough for the month
      if (rows * this.opts.daysPerWeek < weekShiftCorrected + daysInMonth) {
        rows = 6;
      }

      // for each week (5 or 6)
      for (var i = 0; i < rows; i += 1) {
        var week = [];
        // open tag <tr>
        week.push(rowTemplate.open);

        // push days in week
        for (var j = 0; j < this.opts.daysPerWeek; j += 1) {
          // pushing actual days 1...daysInMonth
          if (dayCounter >= weekShiftCorrected && dayOfMonth <= daysInMonth) {
            var rate = this.opts.showRates ? this.cTree.getDayProperty(year, month, dayOfMonth, 'rate') : null;
            var minStay = this.opts.showMinStay ? this.cTree.getDayProperty(year, month, dayOfMonth, 'minStay') : null;

            var isDisabled = this.cTree.isDayDisabled(year, month, dayOfMonth);
            var isOutAvailable = this.cTree.getDayProperty(year, month, dayOfMonth, 'isOutAvailable');
            var isDisabledStart = this.cTree.getDayProperty(year, month, dayOfMonth, 'isMorningBlocked');
            var cDate = this.opts.currDate;

            // in the past any availability does not make sense
            if (isLater([year, month, dayOfMonth], [cDate.getUTCFullYear(), cDate.getUTCMonth(), cDate.getDate()])) {
              isDisabled = true;
              isDisabledStart = undefined;
              isOutAvailable = undefined;
            }

            week.push(__WEBPACK_IMPORTED_MODULE_2__templates__["h" /* weekDay */](dayOfMonth, isDisabled, isDisabledStart, isOutAvailable, rate, minStay, this.locale.rate, this.locale.minStay));

            dayOfMonth += 1;
            // pushing placeholders instead of days
          } else {
            week.push(__WEBPACK_IMPORTED_MODULE_2__templates__["i" /* weekDayPlaceholder */]);
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
  }, {
    key: 'destroyMonths',
    value: function destroyMonths() {
      this.dom.months.map(function (m) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["k" /* destroyElement */])(m);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["k" /* destroyElement */])(this.el);
    }
  }, {
    key: 'loadMaps',
    value: function loadMaps(id) {
      var _this7 = this;

      this.toggleLoading();
      var onSuccess = function onSuccess(rental) {
        _this7.toggleLoading();
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["n" /* isArray */])(rental.data) && rental.data[0].attributes) {
          _this7.addMaps(rental.data[0].attributes);
          _this7.mapsLoaded = true;
        } else {
          console.error('expects json-api data format');
        }
      };

      var onError = function onError() {
        _this7.toggleLoading();
        console.error('Server error happened');
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["o" /* ajax */])(this.opts.rentalUrl(id), onSuccess, onError);
    }
  }, {
    key: 'completeSelection',
    value: function completeSelection() {
      this.emit('selection-completed', this.selectionStart, this.selectionEnd);
      this.closeDrop(null, true);
    }
  }, {
    key: 'initCalendarDrop',
    value: function initCalendarDrop() {
      var _this8 = this;

      var element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["i" /* elementFromString */])('<div></div>');
      this.elTarget = this.opts.el;
      this.el = element;

      document.body.appendChild(element);

      var MyDrop = __WEBPACK_IMPORTED_MODULE_1_tether_drop___default.a.createContext({
        classPrefix: 'BookingSyncCalendar__drop'
      });

      var calDrop = new MyDrop({
        content: element,
        target: this.elTarget,
        classes: __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["dropBasic"],
        openOn: null,
        targetAttachment: 'bottom left',
        constrainToWindow: false,
        constrainToScrollParent: false
      });

      var onFocus = function onFocus(input, isReversed) {
        _this8.switchInputFocus(input);
        _this8.changeSelectionOrder(isReversed);
        if (!calDrop.isOpened()) {
          calDrop.open();
          if (!_this8.mapsLoaded) {
            _this8.loadMaps(_this8.opts.rentalId);
          }
        }
      };

      this.opts.elStartAt.addEventListener('focus', function () {
        onFocus('start', false);
      });

      this.opts.elEndAt.addEventListener('focus', function () {
        onFocus('end', true);
      });

      if (this.opts.elReset) {
        this.opts.elReset.addEventListener('click', function () {
          _this8.resetSelection();
        });
      }

      document.addEventListener('click', this.closeDrop.bind(this));
      this.calDrop = calDrop;
    }
  }, {
    key: 'valueToInput',
    value: function valueToInput(input, dateValue) {
      var format = this.opts.formatDate;
      var value = formatDate.apply(undefined, [format].concat(_toConsumableArray(dateValue)));

      if (input === 'start' && this.opts.elStartAt) {
        this.opts.elStartAt.value = value;
      } else if (input === 'end' && this.opts.elEndAt) {
        this.opts.elEndAt.value = value;
      }
    }
  }, {
    key: 'switchInputFocus',
    value: function switchInputFocus(type) {
      if (this.opts.elStartAt && this.opts.elEndAt) {
        if (type === 'start') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.opts.elStartAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.opts.elEndAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
        }
        if (type === 'end') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["h" /* addClass */])(this.opts.elEndAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.opts.elStartAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
        }
        if (type === 'any') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.opts.elStartAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["j" /* removeClass */])(this.opts.elEndAt, __WEBPACK_IMPORTED_MODULE_7__styles_calendar_scss__["focus"]);
        }
      }
    }
  }, {
    key: 'closeDrop',
    value: function closeDrop(e, force) {
      if (!force && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["p" /* isInside */])(e.target, this.el) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["p" /* isInside */])(e.target, this.elTarget))) {
        e.stopPropagation();
      } else {
        this.switchInputFocus('any');
        this.calDrop.close();
      }
    }
  }], [{
    key: 'widgetLang',
    value: function widgetLang(elLang, documentLang) {
      var langFallback = elLang || documentLang;

      if (Object.keys(__WEBPACK_IMPORTED_MODULE_5__locales__["a" /* default */]).indexOf(langFallback) === -1) {
        console.warn('this language is not supported yet');
        langFallback = 'en';
      }

      return langFallback;
    }
  }]);

  return Calendar;
}(__WEBPACK_IMPORTED_MODULE_0_widget_utils__["q" /* Emitter */]);

/* harmony default export */ exports["a"] = Calendar;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* global NODE_ENV, Date */
var currDate = new Date();

/* harmony default export */ exports["a"] = {
  name: 'Calendar Widget',
  apiHost: undefined === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?rental_id={params}',

  rentalUrl: function rentalUrl(ids) {
    var route = this.apiMapsRoute.replace('{params}', ids);
    return undefined === 'development' ? this.apiHost + '/rental' : '' + this.apiHost + this.apiNamespace + route;
  },


  startOfWeek: 0, // 0 Mo ... 6 Su, by ISO
  minRange: 1, // can select one night
  monthStart: currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart: currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek: 7, // FIXME support calendar rendering
  displayMonths: 2,
  selectable: false,
  showRates: false,
  showMinStay: false,
  isReverseSelectable: false, // select end date first
  isBackDisabled: true,
  isDropDown: false,
  el: null,
  elStartAt: null,
  elEndAt: null,
  elReset: null,
  formatDate: 'dd/mm/yyyy',
  rentalId: null,
  currDate: currDate
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  en: {
    weekdaysLabels: 'Mo_Tu_We_Th_Fr_Sa_Su'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    rate: '&euro;',
    minStay: 'Min'
  },
  fr: {
    weekdaysLabels: 'Lu_Ma_Me_Je_Ve_Sa_Di'.split('_'),
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    rate: '&euro;',
    minStay: 'Min.'
  },
  de: {
    weekdaysLabels: 'Mo_Di_Mi_Do_Fr_Sa_So'.split('_'),
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    rate: '&euro;',
    minStay: 'Min.'
  },
  sv: {
    weekdaysLabels: 'må_ti_on_to_fr_lö_sö'.split('_'),
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    rate: '&euro;',
    minStay: 'Min.'
  },
  it: {
    weekdaysLabels: 'Lun_Mar_Mer_Gio_Ven_Sab_Dom'.split('_'),
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    rate: '&euro;',
    minStay: 'Min.'
  },
  es: {
    weekdaysLabels: 'lun._mar._mié._jue._vie._sáb._dom.'.split('_'),
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    rate: '&euro;',
    minStay: 'Min.'
  }
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return weekDayLabel; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return weekDay; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return weekDayPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return weekRow; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return loading; });


var disabled = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.disabled,
    info = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.info,
    infoExtra = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.infoExtra,
    morningDisabled = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.morningDisabled,
    nightDisabled = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.nightDisabled,
    cnt = __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.cnt;


var main = '<div class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.monthsWrapper + '"></div>';

var month = '<div class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.mCell + '">\n                        <table class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.month + '" role="month">\n                          <caption class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.caption + '"></caption>\n                          <thead class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.tableHeader + '"><tr></tr></thead>\n                          <tbody class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.body + '"></tbody>\n                        </table>\n                      </div>';

var weekDayLabel = function weekDayLabel(label) {
  return '<th class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.th + '">' + label + '</th>';
};

/* eslint prefer-template: 0 */
var weekDay = function weekDay(label, dis, disStart, isOutAvailable, rate, minStay, rateT, minStayT) {
  return '<td ' + (dis ? 'data-disabled' : 'data-enabled') + '             \n                           ' + (isOutAvailable ? 'data-available-out' : '') + '\n                           data-value="' + label + '"\n                           class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.cell + ' ' + (dis ? disabled : '') + (disStart ? morningDisabled : '') + ' ' + (dis && isOutAvailable ? nightDisabled : '') + '">\n                           <div class="' + cnt + '" role="day-value">\n                            ' + label + '\n                          </div>\n                          ' + (rate ? '<span class="' + info + '">' + rateT + rate + '</span>' : '') + '\n                          ' + (minStay ? '<span class="' + infoExtra + '">' + minStayT + minStay + '</span>' : '') + '\n                       </td>';
};

var forward = '<button class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.forward + '" role="button">\n                          <svg viewBox="0 0 1000 1000">\n                            <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>\n                          </svg>\n                        </button>';

var back = '<button class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.back + '" role="button">\n                          <svg viewBox="0 0 1000 1000">\n                            <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"></path>\n                          </svg>\n                        </button>';

var weekDayPlaceholder = '<td></td>';

var weekRow = { open: '<tr>', close: '</tr>' };

var loading = '<div class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.loadingLayer + '">\n                          <div class="' + __WEBPACK_IMPORTED_MODULE_0__styles_calendar_scss___default.a.loading + '"></div>\n                        </div>';

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! tether-drop 1.4.1 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require('tether'));
  } else {
    root.Drop = factory(root.Tether);
  }
})(this, function (Tether) {

  /* global Tether */
  'use strict';

  var _bind = Function.prototype.bind;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = function get(_x2, _x3, _x4) {
    var _again = true;_function: while (_again) {
      var object = _x2,
          property = _x3,
          receiver = _x4;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _Tether$Utils = Tether.Utils;
  var extend = _Tether$Utils.extend;
  var addClass = _Tether$Utils.addClass;
  var removeClass = _Tether$Utils.removeClass;
  var hasClass = _Tether$Utils.hasClass;
  var Evented = _Tether$Utils.Evented;

  function sortAttach(str) {
    var _str$split = str.split(' ');

    var _str$split2 = _slicedToArray(_str$split, 2);

    var first = _str$split2[0];
    var second = _str$split2[1];

    if (['left', 'right'].indexOf(first) >= 0) {
      var _ref = [second, first];
      first = _ref[0];
      second = _ref[1];
    }
    return [first, second].join(' ');
  }

  function removeFromArray(arr, item) {
    var index = undefined;
    var results = [];
    while ((index = arr.indexOf(item)) !== -1) {
      results.push(arr.splice(index, 1));
    }
    return results;
  }

  var clickEvents = ['click'];
  if ('ontouchstart' in document.documentElement) {
    clickEvents.push('touchstart');
  }

  var transitionEndEvents = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend',
    'transition': 'transitionend'
  };

  var transitionEndEvent = '';
  for (var _name in transitionEndEvents) {
    if ({}.hasOwnProperty.call(transitionEndEvents, _name)) {
      var tempEl = document.createElement('p');
      if (typeof tempEl.style[_name] !== 'undefined') {
        transitionEndEvent = transitionEndEvents[_name];
      }
    }
  }

  var MIRROR_ATTACH = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top',
    middle: 'middle',
    center: 'center'
  };

  var allDrops = {};

  // Drop can be included in external libraries.  Calling createContext gives you a fresh
  // copy of drop which won't interact with other copies on the page (beyond calling the document events).

  function createContext() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var drop = function drop() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (_bind.apply(DropInstance, [null].concat(args)))();
    };

    extend(drop, {
      createContext: createContext,
      drops: [],
      defaults: {}
    });

    var defaultOptions = {
      classPrefix: 'drop',
      defaults: {
        position: 'bottom left',
        openOn: 'click',
        beforeClose: null,
        constrainToScrollParent: true,
        constrainToWindow: true,
        classes: '',
        remove: false,
        openDelay: 0,
        closeDelay: 50,
        // inherited from openDelay and closeDelay if not explicitly defined
        focusDelay: null,
        blurDelay: null,
        hoverOpenDelay: null,
        hoverCloseDelay: null,
        tetherOptions: {}
      }
    };

    extend(drop, defaultOptions, options);
    extend(drop.defaults, defaultOptions.defaults, options.defaults);

    if (typeof allDrops[drop.classPrefix] === 'undefined') {
      allDrops[drop.classPrefix] = [];
    }

    drop.updateBodyClasses = function () {
      // There is only one body, so despite the context concept, we still iterate through all
      // drops which share our classPrefix.

      var anyOpen = false;
      var drops = allDrops[drop.classPrefix];
      var len = drops.length;
      for (var i = 0; i < len; ++i) {
        if (drops[i].isOpened()) {
          anyOpen = true;
          break;
        }
      }

      if (anyOpen) {
        addClass(document.body, drop.classPrefix + '-open');
      } else {
        removeClass(document.body, drop.classPrefix + '-open');
      }
    };

    var DropInstance = function (_Evented) {
      _inherits(DropInstance, _Evented);

      function DropInstance(opts) {
        _classCallCheck(this, DropInstance);

        _get(Object.getPrototypeOf(DropInstance.prototype), 'constructor', this).call(this);
        this.options = extend({}, drop.defaults, opts);
        this.target = this.options.target;

        if (typeof this.target === 'undefined') {
          throw new Error('Drop Error: You must provide a target.');
        }

        var dataPrefix = 'data-' + drop.classPrefix;

        var contentAttr = this.target.getAttribute(dataPrefix);
        if (contentAttr && this.options.content == null) {
          this.options.content = contentAttr;
        }

        var attrsOverride = ['position', 'openOn'];
        for (var i = 0; i < attrsOverride.length; ++i) {

          var override = this.target.getAttribute(dataPrefix + '-' + attrsOverride[i]);
          if (override && this.options[attrsOverride[i]] == null) {
            this.options[attrsOverride[i]] = override;
          }
        }

        if (this.options.classes && this.options.addTargetClasses !== false) {
          addClass(this.target, this.options.classes);
        }

        drop.drops.push(this);
        allDrops[drop.classPrefix].push(this);

        this._boundEvents = [];
        this.bindMethods();
        this.setupElements();
        this.setupEvents();
        this.setupTether();
      }

      _createClass(DropInstance, [{
        key: '_on',
        value: function _on(element, event, handler) {
          this._boundEvents.push({ element: element, event: event, handler: handler });
          element.addEventListener(event, handler);
        }
      }, {
        key: 'bindMethods',
        value: function bindMethods() {
          this.transitionEndHandler = this._transitionEndHandler.bind(this);
        }
      }, {
        key: 'setupElements',
        value: function setupElements() {
          var _this = this;

          this.drop = document.createElement('div');
          addClass(this.drop, drop.classPrefix);

          if (this.options.classes) {
            addClass(this.drop, this.options.classes);
          }

          this.content = document.createElement('div');
          addClass(this.content, drop.classPrefix + '-content');

          if (typeof this.options.content === 'function') {
            var generateAndSetContent = function generateAndSetContent() {
              // content function might return a string or an element
              var contentElementOrHTML = _this.options.content.call(_this, _this);

              if (typeof contentElementOrHTML === 'string') {
                _this.content.innerHTML = contentElementOrHTML;
              } else if ((typeof contentElementOrHTML === 'undefined' ? 'undefined' : _typeof(contentElementOrHTML)) === 'object') {
                _this.content.innerHTML = '';
                _this.content.appendChild(contentElementOrHTML);
              } else {
                throw new Error('Drop Error: Content function should return a string or HTMLElement.');
              }
            };

            generateAndSetContent();
            this.on('open', generateAndSetContent.bind(this));
          } else if (_typeof(this.options.content) === 'object') {
            this.content.appendChild(this.options.content);
          } else {
            this.content.innerHTML = this.options.content;
          }

          this.drop.appendChild(this.content);
        }
      }, {
        key: 'setupTether',
        value: function setupTether() {
          // Tether expects two attachment points, one in the target element, one in the
          // drop.  We use a single one, and use the order as well, to allow us to put
          // the drop on either side of any of the four corners.  This magic converts between
          // the two:
          var dropAttach = this.options.position.split(' ');
          dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
          dropAttach = dropAttach.join(' ');

          var constraints = [];
          if (this.options.constrainToScrollParent) {
            constraints.push({
              to: 'scrollParent',
              pin: 'top, bottom',
              attachment: 'together none'
            });
          } else {
            // To get 'out of bounds' classes
            constraints.push({
              to: 'scrollParent'
            });
          }

          if (this.options.constrainToWindow !== false) {
            constraints.push({
              to: 'window',
              attachment: 'together'
            });
          } else {
            // To get 'out of bounds' classes
            constraints.push({
              to: 'window'
            });
          }

          var opts = {
            element: this.drop,
            target: this.target,
            attachment: sortAttach(dropAttach),
            targetAttachment: sortAttach(this.options.position),
            classPrefix: drop.classPrefix,
            offset: '0 0',
            targetOffset: '0 0',
            enabled: false,
            constraints: constraints,
            addTargetClasses: this.options.addTargetClasses
          };

          if (this.options.tetherOptions !== false) {
            this.tether = new Tether(extend({}, opts, this.options.tetherOptions));
          }
        }
      }, {
        key: 'setupEvents',
        value: function setupEvents() {
          var _this2 = this;

          if (!this.options.openOn) {
            return;
          }

          if (this.options.openOn === 'always') {
            setTimeout(this.open.bind(this));
            return;
          }

          var events = this.options.openOn.split(' ');

          if (events.indexOf('click') >= 0) {
            var openHandler = function openHandler(event) {
              _this2.toggle(event);
              event.preventDefault();
            };

            var closeHandler = function closeHandler(event) {
              if (!_this2.isOpened()) {
                return;
              }

              // Clicking inside dropdown
              if (event.target === _this2.drop || _this2.drop.contains(event.target)) {
                return;
              }

              // Clicking target
              if (event.target === _this2.target || _this2.target.contains(event.target)) {
                return;
              }

              _this2.close(event);
            };

            for (var i = 0; i < clickEvents.length; ++i) {
              var clickEvent = clickEvents[i];
              this._on(this.target, clickEvent, openHandler);
              this._on(document, clickEvent, closeHandler);
            }
          }

          var inTimeout = null;
          var outTimeout = null;

          var inHandler = function inHandler(event) {
            if (outTimeout !== null) {
              clearTimeout(outTimeout);
            } else {
              inTimeout = setTimeout(function () {
                _this2.open(event);
                inTimeout = null;
              }, (event.type === 'focus' ? _this2.options.focusDelay : _this2.options.hoverOpenDelay) || _this2.options.openDelay);
            }
          };

          var outHandler = function outHandler(event) {
            if (inTimeout !== null) {
              clearTimeout(inTimeout);
            } else {
              outTimeout = setTimeout(function () {
                _this2.close(event);
                outTimeout = null;
              }, (event.type === 'blur' ? _this2.options.blurDelay : _this2.options.hoverCloseDelay) || _this2.options.closeDelay);
            }
          };

          if (events.indexOf('hover') >= 0) {
            this._on(this.target, 'mouseover', inHandler);
            this._on(this.drop, 'mouseover', inHandler);
            this._on(this.target, 'mouseout', outHandler);
            this._on(this.drop, 'mouseout', outHandler);
          }

          if (events.indexOf('focus') >= 0) {
            this._on(this.target, 'focus', inHandler);
            this._on(this.drop, 'focus', inHandler);
            this._on(this.target, 'blur', outHandler);
            this._on(this.drop, 'blur', outHandler);
          }
        }
      }, {
        key: 'isOpened',
        value: function isOpened() {
          if (this.drop) {
            return hasClass(this.drop, drop.classPrefix + '-open');
          }
        }
      }, {
        key: 'toggle',
        value: function toggle(event) {
          if (this.isOpened()) {
            this.close(event);
          } else {
            this.open(event);
          }
        }
      }, {
        key: 'open',
        value: function open(event) {
          var _this3 = this;

          /* eslint no-unused-vars: 0 */
          if (this.isOpened()) {
            return;
          }

          if (!this.drop.parentNode) {
            document.body.appendChild(this.drop);
          }

          if (typeof this.tether !== 'undefined') {
            this.tether.enable();
          }

          addClass(this.drop, drop.classPrefix + '-open');
          addClass(this.drop, drop.classPrefix + '-open-transitionend');

          setTimeout(function () {
            if (_this3.drop) {
              addClass(_this3.drop, drop.classPrefix + '-after-open');
            }
          });

          if (typeof this.tether !== 'undefined') {
            this.tether.position();
          }

          this.trigger('open');

          drop.updateBodyClasses();
        }
      }, {
        key: '_transitionEndHandler',
        value: function _transitionEndHandler(e) {
          if (e.target !== e.currentTarget) {
            return;
          }

          if (!hasClass(this.drop, drop.classPrefix + '-open')) {
            removeClass(this.drop, drop.classPrefix + '-open-transitionend');
          }
          this.drop.removeEventListener(transitionEndEvent, this.transitionEndHandler);
        }
      }, {
        key: 'beforeCloseHandler',
        value: function beforeCloseHandler(event) {
          var shouldClose = true;

          if (!this.isClosing && typeof this.options.beforeClose === 'function') {
            this.isClosing = true;
            shouldClose = this.options.beforeClose(event, this) !== false;
          }

          this.isClosing = false;

          return shouldClose;
        }
      }, {
        key: 'close',
        value: function close(event) {
          if (!this.isOpened()) {
            return;
          }

          if (!this.beforeCloseHandler(event)) {
            return;
          }

          removeClass(this.drop, drop.classPrefix + '-open');
          removeClass(this.drop, drop.classPrefix + '-after-open');

          this.drop.addEventListener(transitionEndEvent, this.transitionEndHandler);

          this.trigger('close');

          if (typeof this.tether !== 'undefined') {
            this.tether.disable();
          }

          drop.updateBodyClasses();

          if (this.options.remove) {
            this.remove(event);
          }
        }
      }, {
        key: 'remove',
        value: function remove(event) {
          this.close(event);
          if (this.drop.parentNode) {
            this.drop.parentNode.removeChild(this.drop);
          }
        }
      }, {
        key: 'position',
        value: function position() {
          if (this.isOpened() && typeof this.tether !== 'undefined') {
            this.tether.position();
          }
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.remove();

          if (typeof this.tether !== 'undefined') {
            this.tether.destroy();
          }

          for (var i = 0; i < this._boundEvents.length; ++i) {
            var _boundEvents$i = this._boundEvents[i];
            var element = _boundEvents$i.element;
            var _event = _boundEvents$i.event;
            var handler = _boundEvents$i.handler;

            element.removeEventListener(_event, handler);
          }

          this._boundEvents = [];

          this.tether = null;
          this.drop = null;
          this.content = null;
          this.target = null;

          removeFromArray(allDrops[drop.classPrefix], this);
          removeFromArray(drop.drops, this);
        }
      }]);

      return DropInstance;
    }(Evented);

    return drop;
  }

  var Drop = createContext();

  document.addEventListener('DOMContentLoaded', function () {
    Drop.updateBodyClasses();
  });
  return Drop;
});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! tether 1.4.0 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
})(this, function (require, exports, module) {

  'use strict';

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var TetherBase = undefined;
  if (typeof TetherBase === 'undefined') {
    TetherBase = { modules: [] };
  }

  var zeroElement = null;

  // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
  // if the element lies within a nested document (<frame> or <iframe>-like).
  function getActualBoundingClientRect(node) {
    var boundingRect = node.getBoundingClientRect();

    // The original object returned by getBoundingClientRect is immutable, so we clone it
    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
    var rect = {};
    for (var k in boundingRect) {
      rect[k] = boundingRect[k];
    }

    if (node.ownerDocument !== document) {
      var _frameElement = node.ownerDocument.defaultView.frameElement;
      if (_frameElement) {
        var frameRect = getActualBoundingClientRect(_frameElement);
        rect.top += frameRect.top;
        rect.bottom += frameRect.top;
        rect.left += frameRect.left;
        rect.right += frameRect.left;
      }
    }

    return rect;
  }

  function getScrollParents(el) {
    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = getComputedStyle(el) || {};
    var position = computedStyle.position;
    var parents = [];

    if (position === 'fixed') {
      return [el];
    }

    var parent = el;
    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
      var style = undefined;
      try {
        style = getComputedStyle(parent);
      } catch (err) {}

      if (typeof style === 'undefined' || style === null) {
        parents.push(parent);
        return parents;
      }

      var _style = style;
      var overflow = _style.overflow;
      var overflowX = _style.overflowX;
      var overflowY = _style.overflowY;

      if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
          parents.push(parent);
        }
      }
    }

    parents.push(el.ownerDocument.body);

    // If the node is within a frame, account for the parent window scroll
    if (el.ownerDocument !== document) {
      parents.push(el.ownerDocument.defaultView);
    }

    return parents;
  }

  var uniqueId = function () {
    var id = 0;
    return function () {
      return ++id;
    };
  }();

  var zeroPosCache = {};
  var getOrigin = function getOrigin() {
    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
    // jitter as the user scrolls that messes with our ability to detect if two positions
    // are equivilant or not.  We place an element at the top left of the page that will
    // get the same jitter, so we can cancel the two out.
    var node = zeroElement;
    if (!node || !document.body.contains(node)) {
      node = document.createElement('div');
      node.setAttribute('data-tether-id', uniqueId());
      extend(node.style, {
        top: 0,
        left: 0,
        position: 'absolute'
      });

      document.body.appendChild(node);

      zeroElement = node;
    }

    var id = node.getAttribute('data-tether-id');
    if (typeof zeroPosCache[id] === 'undefined') {
      zeroPosCache[id] = getActualBoundingClientRect(node);

      // Clear the cache when this position call is done
      defer(function () {
        delete zeroPosCache[id];
      });
    }

    return zeroPosCache[id];
  };

  function removeUtilElements() {
    if (zeroElement) {
      document.body.removeChild(zeroElement);
    }
    zeroElement = null;
  };

  function getBounds(el) {
    var doc = undefined;
    if (el === document) {
      doc = document;
      el = document.documentElement;
    } else {
      doc = el.ownerDocument;
    }

    var docEl = doc.documentElement;

    var box = getActualBoundingClientRect(el);

    var origin = getOrigin();

    box.top -= origin.top;
    box.left -= origin.left;

    if (typeof box.width === 'undefined') {
      box.width = document.body.scrollWidth - box.left - box.right;
    }
    if (typeof box.height === 'undefined') {
      box.height = document.body.scrollHeight - box.top - box.bottom;
    }

    box.top = box.top - docEl.clientTop;
    box.left = box.left - docEl.clientLeft;
    box.right = doc.body.clientWidth - box.width - box.left;
    box.bottom = doc.body.clientHeight - box.height - box.top;

    return box;
  }

  function getOffsetParent(el) {
    return el.offsetParent || document.documentElement;
  }

  var _scrollBarSize = null;
  function getScrollBarSize() {
    if (_scrollBarSize) {
      return _scrollBarSize;
    }
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    extend(outer.style, {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden'
    });

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    var width = widthContained - widthScroll;

    _scrollBarSize = { width: width, height: width };
    return _scrollBarSize;
  }

  function extend() {
    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var args = [];

    Array.prototype.push.apply(args, arguments);

    args.slice(1).forEach(function (obj) {
      if (obj) {
        for (var key in obj) {
          if ({}.hasOwnProperty.call(obj, key)) {
            out[key] = obj[key];
          }
        }
      }
    });

    return out;
  }

  function removeClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.remove(cls);
        }
      });
    } else {
      var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
      var className = getClassName(el).replace(regex, ' ');
      setClassName(el, className);
    }
  }

  function addClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.add(cls);
        }
      });
    } else {
      removeClass(el, name);
      var cls = getClassName(el) + (' ' + name);
      setClassName(el, cls);
    }
  }

  function hasClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      return el.classList.contains(name);
    }
    var className = getClassName(el);
    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
  }

  function getClassName(el) {
    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
    // completely separately SVGAnimatedString base classes
    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
      return el.className.baseVal;
    }
    return el.className;
  }

  function setClassName(el, className) {
    el.setAttribute('class', className);
  }

  function updateClasses(el, add, all) {
    // Of the set of 'all' classes, we need the 'add' classes, and only the
    // 'add' classes to be set.
    all.forEach(function (cls) {
      if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
        removeClass(el, cls);
      }
    });

    add.forEach(function (cls) {
      if (!hasClass(el, cls)) {
        addClass(el, cls);
      }
    });
  }

  var deferred = [];

  var defer = function defer(fn) {
    deferred.push(fn);
  };

  var flush = function flush() {
    var fn = undefined;
    while (fn = deferred.pop()) {
      fn();
    }
  };

  var Evented = function () {
    function Evented() {
      _classCallCheck(this, Evented);
    }

    _createClass(Evented, [{
      key: 'on',
      value: function on(event, handler, ctx) {
        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

        if (typeof this.bindings === 'undefined') {
          this.bindings = {};
        }
        if (typeof this.bindings[event] === 'undefined') {
          this.bindings[event] = [];
        }
        this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
      }
    }, {
      key: 'once',
      value: function once(event, handler, ctx) {
        this.on(event, handler, ctx, true);
      }
    }, {
      key: 'off',
      value: function off(event, handler) {
        if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
          return;
        }

        if (typeof handler === 'undefined') {
          delete this.bindings[event];
        } else {
          var i = 0;
          while (i < this.bindings[event].length) {
            if (this.bindings[event][i].handler === handler) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }, {
      key: 'trigger',
      value: function trigger(event) {
        if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
          var i = 0;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          while (i < this.bindings[event].length) {
            var _bindings$event$i = this.bindings[event][i];
            var handler = _bindings$event$i.handler;
            var ctx = _bindings$event$i.ctx;
            var once = _bindings$event$i.once;

            var context = ctx;
            if (typeof context === 'undefined') {
              context = this;
            }

            handler.apply(context, args);

            if (once) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }]);

    return Evented;
  }();

  TetherBase.Utils = {
    getActualBoundingClientRect: getActualBoundingClientRect,
    getScrollParents: getScrollParents,
    getBounds: getBounds,
    getOffsetParent: getOffsetParent,
    extend: extend,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    updateClasses: updateClasses,
    defer: defer,
    flush: flush,
    uniqueId: uniqueId,
    Evented: Evented,
    getScrollBarSize: getScrollBarSize,
    removeUtilElements: removeUtilElements
  };
  /* globals TetherBase, performance */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = function get(_x6, _x7, _x8) {
    var _again = true;_function: while (_again) {
      var object = _x6,
          property = _x7,
          receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  if (typeof TetherBase === 'undefined') {
    throw new Error('You must include the utils.js file before tether.js');
  }

  var _TetherBase$Utils = TetherBase.Utils;
  var getScrollParents = _TetherBase$Utils.getScrollParents;
  var getBounds = _TetherBase$Utils.getBounds;
  var getOffsetParent = _TetherBase$Utils.getOffsetParent;
  var extend = _TetherBase$Utils.extend;
  var addClass = _TetherBase$Utils.addClass;
  var removeClass = _TetherBase$Utils.removeClass;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;
  var flush = _TetherBase$Utils.flush;
  var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
  var removeUtilElements = _TetherBase$Utils.removeUtilElements;

  function within(a, b) {
    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

    return a + diff >= b && b >= a - diff;
  }

  var transformKey = function () {
    if (typeof document === 'undefined') {
      return '';
    }
    var el = document.createElement('div');

    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
    for (var i = 0; i < transforms.length; ++i) {
      var key = transforms[i];
      if (el.style[key] !== undefined) {
        return key;
      }
    }
  }();

  var tethers = [];

  var position = function position() {
    tethers.forEach(function (tether) {
      tether.position(false);
    });
    flush();
  };

  function now() {
    if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
      return performance.now();
    }
    return +new Date();
  }

  (function () {
    var lastCall = null;
    var lastDuration = null;
    var pendingTimeout = null;

    var tick = function tick() {
      if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
        // We voluntarily throttle ourselves if we can't manage 60fps
        lastDuration = Math.min(lastDuration - 16, 250);

        // Just in case this is the last event, remember to position just once more
        pendingTimeout = setTimeout(tick, 250);
        return;
      }

      if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }

      if (pendingTimeout != null) {
        clearTimeout(pendingTimeout);
        pendingTimeout = null;
      }

      lastCall = now();
      position();
      lastDuration = now() - lastCall;
    };

    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        window.addEventListener(event, tick);
      });
    }
  })();

  var MIRROR_LR = {
    center: 'center',
    left: 'right',
    right: 'left'
  };

  var MIRROR_TB = {
    middle: 'middle',
    top: 'bottom',
    bottom: 'top'
  };

  var OFFSET_MAP = {
    top: 0,
    left: 0,
    middle: '50%',
    center: '50%',
    bottom: '100%',
    right: '100%'
  };

  var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (left === 'auto') {
      left = MIRROR_LR[relativeToAttachment.left];
    }

    if (top === 'auto') {
      top = MIRROR_TB[relativeToAttachment.top];
    }

    return { left: left, top: top };
  };

  var attachmentToOffset = function attachmentToOffset(attachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
      left = OFFSET_MAP[attachment.left];
    }

    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
      top = OFFSET_MAP[attachment.top];
    }

    return { left: left, top: top };
  };

  function addOffset() {
    var out = { top: 0, left: 0 };

    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
      offsets[_key] = arguments[_key];
    }

    offsets.forEach(function (_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (typeof top === 'string') {
        top = parseFloat(top, 10);
      }
      if (typeof left === 'string') {
        left = parseFloat(left, 10);
      }

      out.top += top;
      out.left += left;
    });

    return out;
  }

  function offsetToPx(offset, size) {
    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
    }
    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
    }

    return offset;
  }

  var parseOffset = function parseOffset(value) {
    var _value$split = value.split(' ');

    var _value$split2 = _slicedToArray(_value$split, 2);

    var top = _value$split2[0];
    var left = _value$split2[1];

    return { top: top, left: left };
  };
  var parseAttachment = parseOffset;

  var TetherClass = function (_Evented) {
    _inherits(TetherClass, _Evented);

    function TetherClass(options) {
      var _this = this;

      _classCallCheck(this, TetherClass);

      _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
      this.position = this.position.bind(this);

      tethers.push(this);

      this.history = [];

      this.setOptions(options, false);

      TetherBase.modules.forEach(function (module) {
        if (typeof module.initialize !== 'undefined') {
          module.initialize.call(_this);
        }
      });

      this.position();
    }

    _createClass(TetherClass, [{
      key: 'getClass',
      value: function getClass() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var classes = this.options.classes;

        if (typeof classes !== 'undefined' && classes[key]) {
          return this.options.classes[key];
        } else if (this.options.classPrefix) {
          return this.options.classPrefix + '-' + key;
        } else {
          return key;
        }
      }
    }, {
      key: 'setOptions',
      value: function setOptions(options) {
        var _this2 = this;

        var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var defaults = {
          offset: '0 0',
          targetOffset: '0 0',
          targetAttachment: 'auto auto',
          classPrefix: 'tether'
        };

        this.options = extend(defaults, options);

        var _options = this.options;
        var element = _options.element;
        var target = _options.target;
        var targetModifier = _options.targetModifier;

        this.element = element;
        this.target = target;
        this.targetModifier = targetModifier;

        if (this.target === 'viewport') {
          this.target = document.body;
          this.targetModifier = 'visible';
        } else if (this.target === 'scroll-handle') {
          this.target = document.body;
          this.targetModifier = 'scroll-handle';
        }

        ['element', 'target'].forEach(function (key) {
          if (typeof _this2[key] === 'undefined') {
            throw new Error('Tether Error: Both element and target must be defined');
          }

          if (typeof _this2[key].jquery !== 'undefined') {
            _this2[key] = _this2[key][0];
          } else if (typeof _this2[key] === 'string') {
            _this2[key] = document.querySelector(_this2[key]);
          }
        });

        addClass(this.element, this.getClass('element'));
        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('target'));
        }

        if (!this.options.attachment) {
          throw new Error('Tether Error: You must provide an attachment');
        }

        this.targetAttachment = parseAttachment(this.options.targetAttachment);
        this.attachment = parseAttachment(this.options.attachment);
        this.offset = parseOffset(this.options.offset);
        this.targetOffset = parseOffset(this.options.targetOffset);

        if (typeof this.scrollParents !== 'undefined') {
          this.disable();
        }

        if (this.targetModifier === 'scroll-handle') {
          this.scrollParents = [this.target];
        } else {
          this.scrollParents = getScrollParents(this.target);
        }

        if (!(this.options.enabled === false)) {
          this.enable(pos);
        }
      }
    }, {
      key: 'getTargetBounds',
      value: function getTargetBounds() {
        if (typeof this.targetModifier !== 'undefined') {
          if (this.targetModifier === 'visible') {
            if (this.target === document.body) {
              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
            } else {
              var bounds = getBounds(this.target);

              var out = {
                height: bounds.height,
                width: bounds.width,
                top: bounds.top,
                left: bounds.left
              };

              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
              out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
              out.height = Math.min(innerHeight, out.height);
              out.height -= 2;

              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
              out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
              out.width = Math.min(innerWidth, out.width);
              out.width -= 2;

              if (out.top < pageYOffset) {
                out.top = pageYOffset;
              }
              if (out.left < pageXOffset) {
                out.left = pageXOffset;
              }

              return out;
            }
          } else if (this.targetModifier === 'scroll-handle') {
            var bounds = undefined;
            var target = this.target;
            if (target === document.body) {
              target = document.documentElement;

              bounds = {
                left: pageXOffset,
                top: pageYOffset,
                height: innerHeight,
                width: innerWidth
              };
            } else {
              bounds = getBounds(target);
            }

            var style = getComputedStyle(target);

            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

            var scrollBottom = 0;
            if (hasBottomScroll) {
              scrollBottom = 15;
            }

            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

            var out = {
              width: 15,
              height: height * 0.975 * (height / target.scrollHeight),
              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
            };

            var fitAdj = 0;
            if (height < 408 && this.target === document.body) {
              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
            }

            if (this.target !== document.body) {
              out.height = Math.max(out.height, 24);
            }

            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

            if (this.target === document.body) {
              out.height = Math.max(out.height, 24);
            }

            return out;
          }
        } else {
          return getBounds(this.target);
        }
      }
    }, {
      key: 'clearCache',
      value: function clearCache() {
        this._cache = {};
      }
    }, {
      key: 'cache',
      value: function cache(k, getter) {
        // More than one module will often need the same DOM info, so
        // we keep a cache which is cleared on each position call
        if (typeof this._cache === 'undefined') {
          this._cache = {};
        }

        if (typeof this._cache[k] === 'undefined') {
          this._cache[k] = getter.call(this);
        }

        return this._cache[k];
      }
    }, {
      key: 'enable',
      value: function enable() {
        var _this3 = this;

        var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('enabled'));
        }
        addClass(this.element, this.getClass('enabled'));
        this.enabled = true;

        this.scrollParents.forEach(function (parent) {
          if (parent !== _this3.target.ownerDocument) {
            parent.addEventListener('scroll', _this3.position);
          }
        });

        if (pos) {
          this.position();
        }
      }
    }, {
      key: 'disable',
      value: function disable() {
        var _this4 = this;

        removeClass(this.target, this.getClass('enabled'));
        removeClass(this.element, this.getClass('enabled'));
        this.enabled = false;

        if (typeof this.scrollParents !== 'undefined') {
          this.scrollParents.forEach(function (parent) {
            parent.removeEventListener('scroll', _this4.position);
          });
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this5 = this;

        this.disable();

        tethers.forEach(function (tether, i) {
          if (tether === _this5) {
            tethers.splice(i, 1);
          }
        });

        // Remove any elements we were using for convenience from the DOM
        if (tethers.length === 0) {
          removeUtilElements();
        }
      }
    }, {
      key: 'updateAttachClasses',
      value: function updateAttachClasses(elementAttach, targetAttach) {
        var _this6 = this;

        elementAttach = elementAttach || this.attachment;
        targetAttach = targetAttach || this.targetAttachment;
        var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

        if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
          // updateAttachClasses can be called more than once in a position call, so
          // we need to clean up after ourselves such that when the last defer gets
          // ran it doesn't add any extra classes from previous calls.
          this._addAttachClasses.splice(0, this._addAttachClasses.length);
        }

        if (typeof this._addAttachClasses === 'undefined') {
          this._addAttachClasses = [];
        }
        var add = this._addAttachClasses;

        if (elementAttach.top) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.top);
        }
        if (elementAttach.left) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.left);
        }
        if (targetAttach.top) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.top);
        }
        if (targetAttach.left) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.left);
        }

        var all = [];
        sides.forEach(function (side) {
          all.push(_this6.getClass('element-attached') + '-' + side);
          all.push(_this6.getClass('target-attached') + '-' + side);
        });

        defer(function () {
          if (!(typeof _this6._addAttachClasses !== 'undefined')) {
            return;
          }

          updateClasses(_this6.element, _this6._addAttachClasses, all);
          if (!(_this6.options.addTargetClasses === false)) {
            updateClasses(_this6.target, _this6._addAttachClasses, all);
          }

          delete _this6._addAttachClasses;
        });
      }
    }, {
      key: 'position',
      value: function position() {
        var _this7 = this;

        var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        // flushChanges commits the changes immediately, leave true unless you are positioning multiple
        // tethers (in which case call Tether.Utils.flush yourself when you're done)

        if (!this.enabled) {
          return;
        }

        this.clearCache();

        // Turn 'auto' attachments into the appropriate corner or edge
        var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

        this.updateAttachClasses(this.attachment, targetAttachment);

        var elementPos = this.cache('element-bounds', function () {
          return getBounds(_this7.element);
        });

        var width = elementPos.width;
        var height = elementPos.height;

        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
          var _lastSize = this.lastSize;

          // We cache the height and width to make it possible to position elements that are
          // getting hidden.
          width = _lastSize.width;
          height = _lastSize.height;
        } else {
          this.lastSize = { width: width, height: height };
        }

        var targetPos = this.cache('target-bounds', function () {
          return _this7.getTargetBounds();
        });
        var targetSize = targetPos;

        // Get an actual px offset from the attachment
        var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
        var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

        var manualOffset = offsetToPx(this.offset, { width: width, height: height });
        var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

        // Add the manually provided offset
        offset = addOffset(offset, manualOffset);
        targetOffset = addOffset(targetOffset, manualTargetOffset);

        // It's now our goal to make (element position + offset) == (target position + target offset)
        var left = targetPos.left + targetOffset.left - offset.left;
        var top = targetPos.top + targetOffset.top - offset.top;

        for (var i = 0; i < TetherBase.modules.length; ++i) {
          var _module2 = TetherBase.modules[i];
          var ret = _module2.position.call(this, {
            left: left,
            top: top,
            targetAttachment: targetAttachment,
            targetPos: targetPos,
            elementPos: elementPos,
            offset: offset,
            targetOffset: targetOffset,
            manualOffset: manualOffset,
            manualTargetOffset: manualTargetOffset,
            scrollbarSize: scrollbarSize,
            attachment: this.attachment
          });

          if (ret === false) {
            return false;
          } else if (typeof ret === 'undefined' || (typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) !== 'object') {
            continue;
          } else {
            top = ret.top;
            left = ret.left;
          }
        }

        // We describe the position three different ways to give the optimizer
        // a chance to decide the best possible way to position the element
        // with the fewest repaints.
        var next = {
          // It's position relative to the page (absolute positioning when
          // the element is a child of the body)
          page: {
            top: top,
            left: left
          },

          // It's position relative to the viewport (fixed positioning)
          viewport: {
            top: top - pageYOffset,
            bottom: pageYOffset - top - height + innerHeight,
            left: left - pageXOffset,
            right: pageXOffset - left - width + innerWidth
          }
        };

        var doc = this.target.ownerDocument;
        var win = doc.defaultView;

        var scrollbarSize = undefined;
        if (win.innerHeight > doc.documentElement.clientHeight) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.bottom -= scrollbarSize.height;
        }

        if (win.innerWidth > doc.documentElement.clientWidth) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.right -= scrollbarSize.width;
        }

        if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
          // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
          next.page.bottom = doc.body.scrollHeight - top - height;
          next.page.right = doc.body.scrollWidth - left - width;
        }

        if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
          (function () {
            var offsetParent = _this7.cache('target-offsetparent', function () {
              return getOffsetParent(_this7.target);
            });
            var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
              return getBounds(offsetParent);
            });
            var offsetParentStyle = getComputedStyle(offsetParent);
            var offsetParentSize = offsetPosition;

            var offsetBorder = {};
            ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
              offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
            });

            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
              if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                // We're within the visible part of the target's scroll parent
                var scrollTop = offsetParent.scrollTop;
                var scrollLeft = offsetParent.scrollLeft;

                // It's position relative to the target's offset parent (absolute positioning when
                // the element is moved to be a child of the target's offset parent).
                next.offset = {
                  top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                  left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                };
              }
            }
          })();
        }

        // We could also travel up the DOM and try each containing context, rather than only
        // looking at the body, but we're gonna get diminishing returns.

        this.move(next);

        this.history.unshift(next);

        if (this.history.length > 3) {
          this.history.pop();
        }

        if (flushChanges) {
          flush();
        }

        return true;
      }

      // THE ISSUE
    }, {
      key: 'move',
      value: function move(pos) {
        var _this8 = this;

        if (!(typeof this.element.parentNode !== 'undefined')) {
          return;
        }

        var same = {};

        for (var type in pos) {
          same[type] = {};

          for (var key in pos[type]) {
            var found = false;

            for (var i = 0; i < this.history.length; ++i) {
              var point = this.history[i];
              if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                found = true;
                break;
              }
            }

            if (!found) {
              same[type][key] = true;
            }
          }
        }

        var css = { top: '', left: '', right: '', bottom: '' };

        var transcribe = function transcribe(_same, _pos) {
          var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
          var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
          if (gpu !== false) {
            var yPos = undefined,
                xPos = undefined;
            if (_same.top) {
              css.top = 0;
              yPos = _pos.top;
            } else {
              css.bottom = 0;
              yPos = -_pos.bottom;
            }

            if (_same.left) {
              css.left = 0;
              xPos = _pos.left;
            } else {
              css.right = 0;
              xPos = -_pos.right;
            }

            if (window.matchMedia) {
              // HubSpot/tether#207
              var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
              if (!retina) {
                xPos = Math.round(xPos);
                yPos = Math.round(yPos);
              }
            }

            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

            if (transformKey !== 'msTransform') {
              // The Z transform will keep this in the GPU (faster, and prevents artifacts),
              // but IE9 doesn't support 3d transforms and will choke.
              css[transformKey] += " translateZ(0)";
            }
          } else {
            if (_same.top) {
              css.top = _pos.top + 'px';
            } else {
              css.bottom = _pos.bottom + 'px';
            }

            if (_same.left) {
              css.left = _pos.left + 'px';
            } else {
              css.right = _pos.right + 'px';
            }
          }
        };

        var moved = false;
        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
          css.position = 'absolute';
          transcribe(same.page, pos.page);
        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
          css.position = 'fixed';
          transcribe(same.viewport, pos.viewport);
        } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
          (function () {
            css.position = 'absolute';
            var offsetParent = _this8.cache('target-offsetparent', function () {
              return getOffsetParent(_this8.target);
            });

            if (getOffsetParent(_this8.element) !== offsetParent) {
              defer(function () {
                _this8.element.parentNode.removeChild(_this8.element);
                offsetParent.appendChild(_this8.element);
              });
            }

            transcribe(same.offset, pos.offset);
            moved = true;
          })();
        } else {
          css.position = 'absolute';
          transcribe({ top: true, left: true }, pos.page);
        }

        if (!moved) {
          if (this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          } else {
            var offsetParentIsBody = true;
            var currentNode = this.element.parentNode;
            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
              if (getComputedStyle(currentNode).position !== 'static') {
                offsetParentIsBody = false;
                break;
              }

              currentNode = currentNode.parentNode;
            }

            if (!offsetParentIsBody) {
              this.element.parentNode.removeChild(this.element);
              this.element.ownerDocument.body.appendChild(this.element);
            }
          }
        }

        // Any css change will trigger a repaint, so let's avoid one if nothing changed
        var writeCSS = {};
        var write = false;
        for (var key in css) {
          var val = css[key];
          var elVal = this.element.style[key];

          if (elVal !== val) {
            write = true;
            writeCSS[key] = val;
          }
        }

        if (write) {
          defer(function () {
            extend(_this8.element.style, writeCSS);
            _this8.trigger('repositioned');
          });
        }
      }
    }]);

    return TetherClass;
  }(Evented);

  TetherClass.modules = [];

  TetherBase.position = position;

  var Tether = extend(TetherClass, TetherBase);
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var extend = _TetherBase$Utils.extend;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

  function getBoundingRect(tether, to) {
    if (to === 'scrollParent') {
      to = tether.scrollParents[0];
    } else if (to === 'window') {
      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
    }

    if (to === document) {
      to = to.documentElement;
    }

    if (typeof to.nodeType !== 'undefined') {
      (function () {
        var node = to;
        var size = getBounds(to);
        var pos = size;
        var style = getComputedStyle(to);

        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

        // Account any parent Frames scroll offset
        if (node.ownerDocument !== document) {
          var win = node.ownerDocument.defaultView;
          to[0] += win.pageXOffset;
          to[1] += win.pageYOffset;
          to[2] += win.pageXOffset;
          to[3] += win.pageYOffset;
        }

        BOUNDS_FORMAT.forEach(function (side, i) {
          side = side[0].toUpperCase() + side.substr(1);
          if (side === 'Top' || side === 'Left') {
            to[i] += parseFloat(style['border' + side + 'Width']);
          } else {
            to[i] -= parseFloat(style['border' + side + 'Width']);
          }
        });
      })();
    }

    return to;
  }

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;
      var targetAttachment = _ref.targetAttachment;

      if (!this.options.constraints) {
        return true;
      }

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // Handle the item getting hidden as a result of our positioning without glitching
        // the classes in and out
        width = _lastSize.width;
        height = _lastSize.height;
      }

      var targetSize = this.cache('target-bounds', function () {
        return _this.getTargetBounds();
      });

      var targetHeight = targetSize.height;
      var targetWidth = targetSize.width;

      var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

      this.options.constraints.forEach(function (constraint) {
        var outOfBoundsClass = constraint.outOfBoundsClass;
        var pinnedClass = constraint.pinnedClass;

        if (outOfBoundsClass) {
          allClasses.push(outOfBoundsClass);
        }
        if (pinnedClass) {
          allClasses.push(pinnedClass);
        }
      });

      allClasses.forEach(function (cls) {
        ['left', 'top', 'right', 'bottom'].forEach(function (side) {
          allClasses.push(cls + '-' + side);
        });
      });

      var addClasses = [];

      var tAttachment = extend({}, targetAttachment);
      var eAttachment = extend({}, this.attachment);

      this.options.constraints.forEach(function (constraint) {
        var to = constraint.to;
        var attachment = constraint.attachment;
        var pin = constraint.pin;

        if (typeof attachment === 'undefined') {
          attachment = '';
        }

        var changeAttachX = undefined,
            changeAttachY = undefined;
        if (attachment.indexOf(' ') >= 0) {
          var _attachment$split = attachment.split(' ');

          var _attachment$split2 = _slicedToArray(_attachment$split, 2);

          changeAttachY = _attachment$split2[0];
          changeAttachX = _attachment$split2[1];
        } else {
          changeAttachX = changeAttachY = attachment;
        }

        var bounds = getBoundingRect(_this, to);

        if (changeAttachY === 'target' || changeAttachY === 'both') {
          if (top < bounds[1] && tAttachment.top === 'top') {
            top += targetHeight;
            tAttachment.top = 'bottom';
          }

          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
            top -= targetHeight;
            tAttachment.top = 'top';
          }
        }

        if (changeAttachY === 'together') {
          if (tAttachment.top === 'top') {
            if (eAttachment.top === 'bottom' && top < bounds[1]) {
              top += targetHeight;
              tAttachment.top = 'bottom';

              top += height;
              eAttachment.top = 'top';
            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
              top -= height - targetHeight;
              tAttachment.top = 'bottom';

              eAttachment.top = 'bottom';
            }
          }

          if (tAttachment.top === 'bottom') {
            if (eAttachment.top === 'top' && top + height > bounds[3]) {
              top -= targetHeight;
              tAttachment.top = 'top';

              top -= height;
              eAttachment.top = 'bottom';
            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
              top += height - targetHeight;
              tAttachment.top = 'top';

              eAttachment.top = 'top';
            }
          }

          if (tAttachment.top === 'middle') {
            if (top + height > bounds[3] && eAttachment.top === 'top') {
              top -= height;
              eAttachment.top = 'bottom';
            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
              top += height;
              eAttachment.top = 'top';
            }
          }
        }

        if (changeAttachX === 'target' || changeAttachX === 'both') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
          }

          if (left + width > bounds[2] && tAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
          }
        }

        if (changeAttachX === 'together') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            if (eAttachment.left === 'right') {
              left += targetWidth;
              tAttachment.left = 'right';

              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'left') {
              left += targetWidth;
              tAttachment.left = 'right';

              left -= width;
              eAttachment.left = 'right';
            }
          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
            if (eAttachment.left === 'left') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'right') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left += width;
              eAttachment.left = 'left';
            }
          } else if (tAttachment.left === 'center') {
            if (left + width > bounds[2] && eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (left < bounds[0] && eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            }
          }
        }

        if (changeAttachY === 'element' || changeAttachY === 'both') {
          if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }

          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          }
        }

        if (changeAttachX === 'element' || changeAttachX === 'both') {
          if (left < bounds[0]) {
            if (eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'center') {
              left += width / 2;
              eAttachment.left = 'left';
            }
          }

          if (left + width > bounds[2]) {
            if (eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'center') {
              left -= width / 2;
              eAttachment.left = 'right';
            }
          }
        }

        if (typeof pin === 'string') {
          pin = pin.split(',').map(function (p) {
            return p.trim();
          });
        } else if (pin === true) {
          pin = ['top', 'left', 'right', 'bottom'];
        }

        pin = pin || [];

        var pinned = [];
        var oob = [];

        if (top < bounds[1]) {
          if (pin.indexOf('top') >= 0) {
            top = bounds[1];
            pinned.push('top');
          } else {
            oob.push('top');
          }
        }

        if (top + height > bounds[3]) {
          if (pin.indexOf('bottom') >= 0) {
            top = bounds[3] - height;
            pinned.push('bottom');
          } else {
            oob.push('bottom');
          }
        }

        if (left < bounds[0]) {
          if (pin.indexOf('left') >= 0) {
            left = bounds[0];
            pinned.push('left');
          } else {
            oob.push('left');
          }
        }

        if (left + width > bounds[2]) {
          if (pin.indexOf('right') >= 0) {
            left = bounds[2] - width;
            pinned.push('right');
          } else {
            oob.push('right');
          }
        }

        if (pinned.length) {
          (function () {
            var pinnedClass = undefined;
            if (typeof _this.options.pinnedClass !== 'undefined') {
              pinnedClass = _this.options.pinnedClass;
            } else {
              pinnedClass = _this.getClass('pinned');
            }

            addClasses.push(pinnedClass);
            pinned.forEach(function (side) {
              addClasses.push(pinnedClass + '-' + side);
            });
          })();
        }

        if (oob.length) {
          (function () {
            var oobClass = undefined;
            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
              oobClass = _this.options.outOfBoundsClass;
            } else {
              oobClass = _this.getClass('out-of-bounds');
            }

            addClasses.push(oobClass);
            oob.forEach(function (side) {
              addClasses.push(oobClass + '-' + side);
            });
          })();
        }

        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
          eAttachment.left = tAttachment.left = false;
        }
        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
          eAttachment.top = tAttachment.top = false;
        }

        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
          _this.updateAttachClasses(eAttachment, tAttachment);
          _this.trigger('update', {
            attachment: eAttachment,
            targetAttachment: tAttachment
          });
        }
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return { top: top, left: left };
    }
  });
  /* globals TetherBase */

  'use strict';

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      var targetPos = this.getTargetBounds();

      var bottom = top + height;
      var right = left + width;

      var abutted = [];
      if (top <= targetPos.bottom && bottom >= targetPos.top) {
        ['left', 'right'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === left || targetPosSide === right) {
            abutted.push(side);
          }
        });
      }

      if (left <= targetPos.right && right >= targetPos.left) {
        ['top', 'bottom'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === top || targetPosSide === bottom) {
            abutted.push(side);
          }
        });
      }

      var allClasses = [];
      var addClasses = [];

      var sides = ['left', 'top', 'right', 'bottom'];
      allClasses.push(this.getClass('abutted'));
      sides.forEach(function (side) {
        allClasses.push(_this.getClass('abutted') + '-' + side);
      });

      if (abutted.length) {
        addClasses.push(this.getClass('abutted'));
      }

      abutted.forEach(function (side) {
        addClasses.push(_this.getClass('abutted') + '-' + side);
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return true;
    }
  });
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  TetherBase.modules.push({
    position: function position(_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (!this.options.shift) {
        return;
      }

      var shift = this.options.shift;
      if (typeof this.options.shift === 'function') {
        shift = this.options.shift.call(this, { top: top, left: left });
      }

      var shiftTop = undefined,
          shiftLeft = undefined;
      if (typeof shift === 'string') {
        shift = shift.split(' ');
        shift[1] = shift[1] || shift[0];

        var _shift = shift;

        var _shift2 = _slicedToArray(_shift, 2);

        shiftTop = _shift2[0];
        shiftLeft = _shift2[1];

        shiftTop = parseFloat(shiftTop, 10);
        shiftLeft = parseFloat(shiftLeft, 10);
      } else {
        shiftTop = shift.top;
        shiftLeft = shift.left;
      }

      top += shiftTop;
      left += shiftLeft;

      return { top: top, left: left };
    }
  });
  return Tether;
});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "/********************************************************\n\n\t\t\t\t     loader\n\n********************************************************/\n@-webkit-keyframes BookingSyncCalendar__spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes BookingSyncCalendar__spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes BookingSyncCalendar__pulse {\n  50% {\n    background: white;\n  }\n}\n\n@keyframes BookingSyncCalendar__pulse {\n  50% {\n    background: white;\n  }\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__loading {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  border: 0.25rem solid #cacaca;\n  border-top-color: #000;\n  -webkit-animation: BookingSyncCalendar__spin 1s infinite linear;\n  animation: BookingSyncCalendar__spin 1s infinite linear;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -12px;\n  margin-top: -12px;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__loadingLayer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.55);\n  right: 0;\n  z-index: 10;\n}\n\n.BookingSyncCalendar__drop-element {\n  position: absolute;\n  display: none;\n  z-index: 10;\n}\n\n.BookingSyncCalendar__drop-element.BookingSyncCalendar__drop-open {\n  display: block;\n}\n\n.BookingSyncCalendar__drop-element.BookingSyncCalendar__dropBasic {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.BookingSyncCalendar__drop-element.BookingSyncCalendar__dropBasic .BookingSyncCalendar__drop-content {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  font-family: inherit;\n  background: #eee;\n  line-height: 1.5em;\n}\n\n.BookingSyncCalendar__dropBasic .BookingSyncCalendar__calendar {\n  margin: 0;\n  padding: 2rem 0 0 0;\n}\n\n.BookingSyncCalendar__dropBasic .BookingSyncCalendar__calendar .BookingSyncCalendar__forward {\n  right: 1rem;\n}\n\n.BookingSyncCalendar__dropBasic .BookingSyncCalendar__calendar .BookingSyncCalendar__back {\n  left: 1rem;\n}\n\n.BookingSyncCalendar__dropBasic .BookingSyncCalendar__calendar .BookingSyncCalendar__mCell {\n  margin-bottom: 1rem;\n}\n\n/********************************************************\n\n\t\t\t\t      colors\n\n********************************************************/\n.BookingSyncCalendar__calendar {\n  font: 0.875rem/1.4 \"Open Sans\", Helvetica, Arial, sans-serif;\n  position: relative;\n  margin: 0 -1rem 3rem;\n  background: #ffffff;\n  padding: 2rem;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__caption {\n  font-weight: 700;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__monthsWrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__mCell {\n  margin: 0 1rem 2rem;\n  min-width: 14rem;\n  flex: 1 1 25%;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__month {\n  border-collapse: collapse;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__tableHeader,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__body {\n  margin: 0;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__th {\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.85rem;\n  color: #aaaaaa;\n  height: 25px;\n  width: 30px;\n  text-align: center;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__cell {\n  text-align: center;\n  padding: 0;\n  position: relative;\n  border: 1px solid #eaecf0;\n  vertical-align: middle;\n  color: #444444;\n  background-clip: padding-box;\n  overflow: hidden;\n  width: 30px;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__cell:after {\n  content: '';\n  display: block;\n  margin-top: 100%;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__cnt {\n  position: absolute;\n  top: 50%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  line-height: 0;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__infoExtra,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 0.7rem;\n  padding: 1px 3px;\n  text-align: right;\n  color: rgba(60, 60, 60, 0.5);\n  right: 0;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__infoExtra {\n  left: 0;\n  text-align: left;\n  right: auto;\n}\n\n.BookingSyncCalendar__focus {\n  border-color: #8acdf6;\n}\n\n/********************************************************\n\n\t\t\t\t  selections, start and ends\n\n\t\t\t\t  N.B. Edit at your own risk\n\t\t\t\t  one cell can have 10 states and lots of these combinations\n\n\t\t\t\t  enabled\n\n\t\t\t\t  disabled\n\t\t\t\t  morningDisabled\n\t\t\t\t  nightDisabled\n\n\t\t\t\t  highlighted\n\t\t\t\t  morningSelected\n\t\t\t\t  nightSelected\n\n\t\t\t\t  invalid\n\t\t\t\t  morningInvalid\n\t\t\t\t  nightInvalid\n\n\n********************************************************/\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selected {\n  color: inherit;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__reversed {\n  color: inherit;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__direct {\n  color: inherit;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectingReversed {\n  color: inherit;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectingDirect {\n  color: inherit;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__disabled,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__disabled:hover {\n  color: #bfbfbf;\n  cursor: default;\n  background-color: #f0f0f0;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__highlighted {\n  border-color: #bde3ff;\n}\n\n.BookingSyncCalendar__direct [data-enabled]:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectedStart {\n  background: linear-gradient(to left top, transparent 50%, #ffffff 50%);\n  border-top-color: #eaecf0;\n  border-left-color: #eaecf0;\n}\n\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__highlighted:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectedEnd {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%);\n  border-bottom-color: #eaecf0;\n  border-right-color: #eaecf0;\n}\n\n.BookingSyncCalendar__reversed [data-available-out]:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%);\n}\n\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__highlighted:hover {\n  background: linear-gradient(to left top, transparent 50%, #ffffff 50%);\n  border-top-color: #eaecf0;\n  border-left-color: #eaecf0;\n}\n\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__selectedEnd,\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__selectedEnd:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #ffffff 50%);\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__nightDisabled,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__nightDisabled:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #f0f0f0 50%);\n  color: #444444;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__morningDisabled,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__morningDisabled:hover {\n  background: linear-gradient(to left top, transparent 50%, #f0f0f0 50%);\n}\n\n.BookingSyncCalendar__direct [data-enabled]:hover,\n.BookingSyncCalendar__reversed [data-available-out]:hover,\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__nightDisabled:hover,\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__morningDisabled:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectedStart,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__selectedEnd,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__highlighted {\n  background-color: #8acdf6;\n  cursor: pointer;\n}\n\n.BookingSyncCalendar__direct [data-enabled]:hover,\n.BookingSyncCalendar__direct [data-enabled]:hover .BookingSyncCalendar__cnt,\n.BookingSyncCalendar__direct [data-enabled]:hover .BookingSyncCalendar__info,\n.BookingSyncCalendar__direct [data-enabled]:hover .BookingSyncCalendar__infoExtra {\n  cursor: pointer;\n}\n\n.BookingSyncCalendar__reversed [data-available-out]:hover,\n.BookingSyncCalendar__reversed [data-available-out]:hover .BookingSyncCalendar__cnt,\n.BookingSyncCalendar__reversed [data-available-out]:hover .BookingSyncCalendar__info,\n.BookingSyncCalendar__reversed [data-available-out]:hover .BookingSyncCalendar__infoExtra {\n  cursor: pointer;\n}\n\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__nightDisabled:hover,\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__nightDisabled:hover .BookingSyncCalendar__cnt,\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__nightDisabled:hover .BookingSyncCalendar__info,\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__nightDisabled:hover .BookingSyncCalendar__infoExtra {\n  cursor: pointer;\n}\n\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__morningDisabled:hover,\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__morningDisabled:hover .BookingSyncCalendar__cnt,\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__morningDisabled:hover .BookingSyncCalendar__info,\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__morningDisabled:hover .BookingSyncCalendar__infoExtra {\n  cursor: pointer;\n}\n\n.BookingSyncCalendar__actionsEnabled .BookingSyncCalendar__invalid:not(.BookingSyncCalendar__selectedStart) {\n  background: #c0c0c0;\n  color: #ffffff;\n  border-color: #cacaca;\n}\n\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__invalid:hover {\n  background: linear-gradient(to right bottom, transparent 50%, #c0c0c0 50%);\n  border-top-color: #eaecf0;\n  border-left-color: #eaecf0;\n  color: #444444;\n}\n\n.BookingSyncCalendar__selectingReversed .BookingSyncCalendar__invalid.BookingSyncCalendar__selectedEnd,\n.BookingSyncCalendar__selectingDirect .BookingSyncCalendar__invalid:hover {\n  background: linear-gradient(to left top, transparent 50%, #c0c0c0 50%);\n  border-bottom-color: #eaecf0;\n  border-right-color: #eaecf0;\n  color: #444444;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid {\n  background-color: #c0c0c0;\n  border-bottom-color: #cacaca;\n  border-right-color: #cacaca;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid:hover .BookingSyncCalendar__cnt,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid:hover .BookingSyncCalendar__info,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid:hover .BookingSyncCalendar__infoExtra {\n  cursor: default;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__invalid.BookingSyncCalendar__disabled:hover {\n  background-color: #f0f0f0;\n}\n\n/********************************************************\n\n\t\t\t\t     buttons\n\n********************************************************/\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward, .BookingSyncCalendar__calendar .BookingSyncCalendar__back {\n  cursor: pointer;\n  height: 23px;\n  width: 23px;\n  fill: #444444;\n  border: 1px solid #eaecf0;\n  padding: 6px 9px;\n  top: 1.4rem;\n  left: 3rem;\n  z-index: 2;\n  position: absolute;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward {\n  right: 3rem;\n  left: auto;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward:active,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward:focus,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__back:active,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__back:focus {\n  outline: none;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__back:hover {\n  border-color: #8acdf6;\n}\n\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward[disabled],\n.BookingSyncCalendar__calendar .BookingSyncCalendar__forward[disabled]:hover,\n.BookingSyncCalendar__calendar .BookingSyncCalendar__back[disabled],\n.BookingSyncCalendar__calendar .BookingSyncCalendar__back[disabled]:hover {\n  opacity: 0.5;\n  cursor: default;\n  border-color: #eaecf0;\n}\n\n/********************************************************\n\n\t\t\t\t     mods\n\n********************************************************/\n/* chunky layout */\n.BookingSyncCalendar__chunky .BookingSyncCalendar__mCell {\n  min-width: 20rem;\n}\n", ""]);

// exports
exports.locals = {
	"calendar": "BookingSyncCalendar__calendar",
	"loading": "BookingSyncCalendar__loading",
	"spin": "BookingSyncCalendar__spin",
	"loadingLayer": "BookingSyncCalendar__loadingLayer",
	"drop-element": "BookingSyncCalendar__drop-element",
	"drop-open": "BookingSyncCalendar__drop-open",
	"dropBasic": "BookingSyncCalendar__dropBasic",
	"drop-content": "BookingSyncCalendar__drop-content",
	"forward": "BookingSyncCalendar__forward",
	"back": "BookingSyncCalendar__back",
	"mCell": "BookingSyncCalendar__mCell",
	"caption": "BookingSyncCalendar__caption",
	"monthsWrapper": "BookingSyncCalendar__monthsWrapper",
	"month": "BookingSyncCalendar__month",
	"tableHeader": "BookingSyncCalendar__tableHeader",
	"body": "BookingSyncCalendar__body",
	"th": "BookingSyncCalendar__th",
	"cell": "BookingSyncCalendar__cell",
	"cnt": "BookingSyncCalendar__cnt",
	"infoExtra": "BookingSyncCalendar__infoExtra",
	"info": "BookingSyncCalendar__info",
	"focus": "BookingSyncCalendar__focus",
	"selected": "BookingSyncCalendar__selected",
	"reversed": "BookingSyncCalendar__reversed",
	"direct": "BookingSyncCalendar__direct",
	"selectingReversed": "BookingSyncCalendar__selectingReversed",
	"selectingDirect": "BookingSyncCalendar__selectingDirect",
	"disabled": "BookingSyncCalendar__disabled",
	"highlighted": "BookingSyncCalendar__highlighted",
	"selectedStart": "BookingSyncCalendar__selectedStart",
	"selectedEnd": "BookingSyncCalendar__selectedEnd",
	"nightDisabled": "BookingSyncCalendar__nightDisabled",
	"morningDisabled": "BookingSyncCalendar__morningDisabled",
	"actionsEnabled": "BookingSyncCalendar__actionsEnabled",
	"invalid": "BookingSyncCalendar__invalid",
	"chunky": "BookingSyncCalendar__chunky",
	"pulse": "BookingSyncCalendar__pulse"
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".BookingSyncCalendar__reset div, .BookingSyncCalendar__reset span, .BookingSyncCalendar__reset applet, .BookingSyncCalendar__reset object, .BookingSyncCalendar__reset iframe, .BookingSyncCalendar__reset h1, .BookingSyncCalendar__reset h2, .BookingSyncCalendar__reset h3, .BookingSyncCalendar__reset h4, .BookingSyncCalendar__reset h5, .BookingSyncCalendar__reset h6, .BookingSyncCalendar__reset p, .BookingSyncCalendar__reset blockquote, .BookingSyncCalendar__reset pre, .BookingSyncCalendar__reset a, .BookingSyncCalendar__reset abbr, .BookingSyncCalendar__reset acronym, .BookingSyncCalendar__reset address, .BookingSyncCalendar__reset big, .BookingSyncCalendar__reset cite, .BookingSyncCalendar__reset code, .BookingSyncCalendar__reset del, .BookingSyncCalendar__reset dfn, .BookingSyncCalendar__reset em, .BookingSyncCalendar__reset img, .BookingSyncCalendar__reset ins, .BookingSyncCalendar__reset kbd, .BookingSyncCalendar__reset q, .BookingSyncCalendar__reset s, .BookingSyncCalendar__reset samp, .BookingSyncCalendar__reset small, .BookingSyncCalendar__reset strike, .BookingSyncCalendar__reset strong, .BookingSyncCalendar__reset sub, .BookingSyncCalendar__reset sup, .BookingSyncCalendar__reset tt, .BookingSyncCalendar__reset var, .BookingSyncCalendar__reset b, .BookingSyncCalendar__reset u, .BookingSyncCalendar__reset i, .BookingSyncCalendar__reset center, .BookingSyncCalendar__reset dl, .BookingSyncCalendar__reset dt, .BookingSyncCalendar__reset dd, .BookingSyncCalendar__reset ol, .BookingSyncCalendar__reset ul, .BookingSyncCalendar__reset li, .BookingSyncCalendar__reset fieldset, .BookingSyncCalendar__reset form, .BookingSyncCalendar__reset div.BookingSyncCalendar__form, .BookingSyncCalendar__reset label, .BookingSyncCalendar__reset legend, .BookingSyncCalendar__reset table, .BookingSyncCalendar__reset caption, .BookingSyncCalendar__reset tbody, .BookingSyncCalendar__reset tfoot, .BookingSyncCalendar__reset thead, .BookingSyncCalendar__reset tr, .BookingSyncCalendar__reset th, .BookingSyncCalendar__reset td, .BookingSyncCalendar__reset article, .BookingSyncCalendar__reset aside, .BookingSyncCalendar__reset canvas, .BookingSyncCalendar__reset details, .BookingSyncCalendar__reset figcaption, .BookingSyncCalendar__reset figure, .BookingSyncCalendar__reset footer, .BookingSyncCalendar__reset header, .BookingSyncCalendar__reset hgroup, .BookingSyncCalendar__reset menu, .BookingSyncCalendar__reset nav, .BookingSyncCalendar__reset section, .BookingSyncCalendar__reset summary, .BookingSyncCalendar__reset time, .BookingSyncCalendar__reset mark, .BookingSyncCalendar__reset audio, .BookingSyncCalendar__reset video, .BookingSyncCalendar__reset button, .BookingSyncCalendar__reset textarea, .BookingSyncCalendar__reset input,\n.BookingSyncCalendar__reset .BookingSyncCalendar__button, .BookingSyncCalendar__reset .BookingSyncCalendar__legend {\n  font-family: \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size-adjust: none;\n  font-size: 100%;\n  font-style: normal;\n  letter-spacing: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font: normal normal 100% \"Open sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: left;\n  -moz-text-align-last: initial;\n  text-align-last: initial;\n  text-decoration: none;\n  -webkit-text-emphasis: none;\n  text-emphasis: none;\n  text-height: auto;\n  text-indent: 0;\n  text-justify: auto;\n  text-outline: none;\n  text-shadow: none;\n  text-transform: none;\n  text-wrap: normal;\n  alignment-adjust: auto;\n  alignment-baseline: baseline;\n  -webkit-animation: none 0 ease 0 1 normal;\n  animation: none 0 ease 0 1 normal;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n  appearance: normal;\n  azimuth: center;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  background: none 0 0 auto repeat scroll padding-box transparent;\n  background-color: transparent;\n  background-image: none;\n  baseline-shift: baseline;\n  binding: none;\n  bleed: 6pt;\n  bookmark-label: content();\n  bookmark-level: none;\n  bookmark-state: open;\n  bookmark-target: none;\n  border: 0 none transparent;\n  border-radius: 0;\n  bottom: auto;\n  box-align: stretch;\n  -webkit-box-decoration-break: slice;\n  box-decoration-break: slice;\n  box-direction: normal;\n  flex: 0.0;\n  flex-group: 1;\n  box-lines: single;\n  box-ordinal-group: 1;\n  box-orient: inline-axis;\n  box-pack: start;\n  box-shadow: none;\n  box-sizing: content-box;\n  -webkit-break-after: auto;\n  -moz-break-after: auto;\n  break-after: auto;\n  -webkit-break-before: auto;\n  -moz-break-before: auto;\n  break-before: auto;\n  -webkit-column-break-inside: auto;\n  page-break-inside: auto;\n  break-inside: auto;\n  caption-side: top;\n  clear: none;\n  clip: auto;\n  color: inherit;\n  color-profile: auto;\n  -webkit-column-count: auto;\n  -moz-column-count: auto;\n  column-count: auto;\n  -webkit-column-fill: balance;\n  -moz-column-fill: balance;\n  column-fill: balance;\n  -webkit-column-gap: normal;\n  -moz-column-gap: normal;\n  column-gap: normal;\n  -webkit-column-rule: medium medium #1f1f1f;\n  -moz-column-rule: medium medium #1f1f1f;\n  column-rule: medium medium #1f1f1f;\n  -webkit-column-span: 1;\n  -moz-column-span: 1;\n  column-span: 1;\n  -webkit-column-width: auto;\n  -moz-column-width: auto;\n  column-width: auto;\n  -webkit-columns: auto auto;\n  -moz-columns: auto auto;\n  columns: auto auto;\n  content: normal;\n  counter-increment: none;\n  counter-reset: none;\n  crop: auto;\n  cursor: auto;\n  direction: ltr;\n  display: inline;\n  dominant-baseline: auto;\n  drop-initial-after-adjust: text-after-edge;\n  drop-initial-after-align: baseline;\n  drop-initial-before-adjust: text-before-edge;\n  drop-initial-before-align: caps-height;\n  drop-initial-size: auto;\n  drop-initial-value: initial;\n  elevation: level;\n  empty-cells: show;\n  fit: fill;\n  fit-position: 0% 0%;\n  float: none;\n  float-offset: 0 0;\n  grid-columns: none;\n  grid-rows: none;\n  hanging-punctuation: none;\n  height: auto;\n  hyphenate-after: auto;\n  hyphenate-before: auto;\n  hyphenate-character: auto;\n  hyphenate-lines: no-limit;\n  hyphenate-resource: none;\n  -webkit-hyphens: manual;\n  -moz-hyphens: manual;\n  -ms-hyphens: manual;\n  hyphens: manual;\n  icon: auto;\n  image-orientation: auto;\n  image-rendering: auto;\n  image-resolution: normal;\n  inline-box-align: last;\n  left: auto;\n  line-height: inherit;\n  line-stacking: inline-line-height exclude-ruby consider-shifts;\n  list-style: disc outside none;\n  margin: 0;\n  marks: none;\n  marquee-direction: forward;\n  marquee-loop: 1;\n  marquee-play-count: 1;\n  marquee-speed: normal;\n  marquee-style: scroll;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  move-to: normal;\n  nav-down: auto;\n  nav-index: auto;\n  nav-left: auto;\n  nav-right: auto;\n  nav-up: auto;\n  opacity: 1;\n  orphans: 2;\n  outline: invert none medium;\n  outline-offset: 0;\n  overflow: visible;\n  overflow-style: auto;\n  padding: 0;\n  page: auto;\n  page-break-after: auto;\n  page-break-before: auto;\n  page-break-inside: auto;\n  page-policy: start;\n  -webkit-perspective: none;\n  perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  position: static;\n  presentation-level: 0;\n  punctuation-trim: none;\n  quotes: none;\n  rendering-intent: auto;\n  resize: none;\n  right: auto;\n  rotation: 0;\n  rotation-point: 50% 50%;\n  ruby-align: auto;\n  ruby-overhang: none;\n  ruby-position: before;\n  ruby-span: none;\n  size: auto;\n  string-set: none;\n  table-layout: auto;\n  top: auto;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transform-origin: 50% 50% 0;\n  -ms-transform-origin: 50% 50% 0;\n  transform-origin: 50% 50% 0;\n  -webkit-transform-style: flat;\n  transform-style: flat;\n  transition: all 0 ease 0;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  white-space: normal;\n  white-space-collapse: collapse;\n  widows: 2;\n  width: auto;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  z-index: auto;\n  text-align: start;\n  /* And disable MS gradients */\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.BookingSyncCalendar__reset address, .BookingSyncCalendar__reset blockquote, .BookingSyncCalendar__reset dd, .BookingSyncCalendar__reset div, .BookingSyncCalendar__reset dl, .BookingSyncCalendar__reset dt, .BookingSyncCalendar__reset fieldset, .BookingSyncCalendar__reset form, .BookingSyncCalendar__reset div.BookingSyncCalendar__form, .BookingSyncCalendar__reset frame, .BookingSyncCalendar__reset frameset, .BookingSyncCalendar__reset h1, .BookingSyncCalendar__reset h2, .BookingSyncCalendar__reset h3, .BookingSyncCalendar__reset h4, .BookingSyncCalendar__reset h5, .BookingSyncCalendar__reset h6, .BookingSyncCalendar__reset noframes, .BookingSyncCalendar__reset ol, .BookingSyncCalendar__reset p, .BookingSyncCalendar__reset ul, .BookingSyncCalendar__reset center, .BookingSyncCalendar__reset dir, .BookingSyncCalendar__reset hr, .BookingSyncCalendar__reset menu, .BookingSyncCalendar__reset pre, .BookingSyncCalendar__reset article, .BookingSyncCalendar__reset aside, .BookingSyncCalendar__reset canvas, .BookingSyncCalendar__reset details, .BookingSyncCalendar__reset figcaption, .BookingSyncCalendar__reset figure, .BookingSyncCalendar__reset footer, .BookingSyncCalendar__reset header, .BookingSyncCalendar__reset hgroup, .BookingSyncCalendar__reset menu, .BookingSyncCalendar__reset nav, .BookingSyncCalendar__reset section, .BookingSyncCalendar__reset summary {\n  display: block;\n}\n\n.BookingSyncCalendar__reset li {\n  display: list-item;\n}\n\n.BookingSyncCalendar__reset table {\n  display: table;\n}\n\n.BookingSyncCalendar__reset tr {\n  display: table-row;\n}\n\n.BookingSyncCalendar__reset thead {\n  display: table-header-group;\n}\n\n.BookingSyncCalendar__reset tbody {\n  display: table-row-group;\n}\n\n.BookingSyncCalendar__reset tfoot {\n  display: table-footer-group;\n}\n\n.BookingSyncCalendar__reset col {\n  display: table-column;\n}\n\n.BookingSyncCalendar__reset colgroup {\n  display: table-column-group;\n}\n\n.BookingSyncCalendar__reset td, .BookingSyncCalendar__reset th {\n  display: table-cell;\n}\n\n.BookingSyncCalendar__reset caption {\n  display: table-caption;\n}\n\n.BookingSyncCalendar__reset input, .BookingSyncCalendar__reset select {\n  display: inline-block;\n}\n\n.BookingSyncCalendar__reset b, .BookingSyncCalendar__reset strong {\n  font-weight: bold;\n}\n\n.BookingSyncCalendar__reset b > i, .BookingSyncCalendar__reset strong > i, .BookingSyncCalendar__reset b > em, .BookingSyncCalendar__reset strong > em, .BookingSyncCalendar__reset i > b, .BookingSyncCalendar__reset i > strong, .BookingSyncCalendar__reset em > b, .BookingSyncCalendar__reset em > strong {\n  font-weight: bold;\n  font-style: italic;\n}\n\n.BookingSyncCalendar__reset textarea, .BookingSyncCalendar__reset input {\n  cursor: text;\n}\n", ""]);

// exports
exports.locals = {
	"reset": "BookingSyncCalendar__reset",
	"form": "BookingSyncCalendar__form",
	"button": "BookingSyncCalendar__button",
	"legend": "BookingSyncCalendar__legend"
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {"insertAt":"top","singleton":true});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js?modules=true&localIdentName=BookingSyncCalendar__[Local]!./../../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap&sourceMapContents!./reset.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js?modules=true&localIdentName=BookingSyncCalendar__[Local]!./../../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap&sourceMapContents!./reset.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMzAyMzc2NDE3OTliMTI3ZDI3ZCIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vd2lkZ2V0LXV0aWxzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jYWxlbmRhci5zY3NzP2UzNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXItdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL34vdGV0aGVyLWRyb3AvZGlzdC9qcy9kcm9wLmpzIiwid2VicGFjazovLy8uL34vdGV0aGVyL2Rpc3QvanMvdGV0aGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzPzE0ZGUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxpc3QiLCJ0b1N0cmluZyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJpdGVtIiwicHVzaCIsImpvaW4iLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJpZCIsImtleXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJwYXJzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc05hTlBvbHlmaWxsIiwidmFsdWUiLCJpc05hTiIsImlzT2JqZWN0IiwiY2FsbCIsIm8iLCJpc0FycmF5IiwiYSIsImlzRnVuY3Rpb24iLCJmIiwiaXNTdHJpbmciLCJpc051bWVyaWMiLCJwYXJzZUludCIsIm4iLCJpcyIsInRvVW5kZXJzY29yZSIsInN0ciIsInJlcGxhY2UiLCJzIiwidG9Mb3dlckNhc2UiLCJkYXNoVG9DYXBpdGFsIiwidG9VcHBlckNhc2UiLCJ0cmF2ZXJzZU9iaiIsIm9iaiIsImZuS2V5IiwiZm5WYWx1ZSIsInJlZHVjZSIsImN1cnIiLCJuZXh0IiwibmV4dFByb3BlcnR5IiwibWFwIiwibWVyZ2UiLCJvYmoxIiwib2JqMiIsImlzRGVlcCIsIm9iajMiLCJmb3JFYWNoIiwicGljayIsImFyZ3MiLCJ0IiwicGlja2VkT2JqIiwiY2FwaXRhbGl6ZU9iaiIsInNlcmlhbGl6ZSIsInRyYW5zZm9ybSIsImNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInAiLCJmaW5kQnlDbGFzc05hbWUiLCJjb250ZXh0IiwibmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDbGFzc05hbWUiLCJlbCIsImNsYXNzTmFtZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsIlNWR0FuaW1hdGVkU3RyaW5nIiwiYmFzZVZhbCIsInNldENsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsInBhcmFtcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImVsZW1lbnRGcm9tU3RyaW5nIiwic3RyaW5nIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJkZXN0cm95RWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUNsYXNzIiwiY2xhc3NOYW1lcyIsImNsYXNzTGlzdCIsImNscyIsInRyaW0iLCJyZW1vdmUiLCJyZWdleCIsIlJlZ0V4cCIsImFkZENsYXNzIiwiYWRkIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsInRlc3QiLCJ0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIiLCJhdHRyaWJ1dGUiLCJwYXJlbnQiLCJnZXRBdHRyaWJ1dGUiLCJnZXRQYXJlbnRBdHRyaWJ1dGUiLCJpc0luc2lkZSIsImNoaWxkIiwiY3VycmVudCIsInRhZ05hbWUiLCJkYXlzSW5Nb250aCIsImlzTGVhcFllYXIiLCJ5ZWFyIiwibW9udGhMZW5ndGgiLCJtb250aCIsImRheXMiLCJhamF4IiwiYXBpVXJsIiwic3VjY2VzcyIsImVycm9yIiwibWV0aG9kIiwic2VydmVyTWV0aG9kIiwieG1sSHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwiaXNTdWNjZXNzIiwic3RhdHVzIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVRleHQiLCJlIiwic2VuZCIsInZhbGlkYXRlIiwiaXNCbGFuayIsImlzRW1haWwiLCJtYXRjaCIsImlzQm91bmRlZEJ5IiwibWluIiwibWF4IiwiRW1pdHRlciIsImV2ZW50IiwibGlzdGVuZXIiLCJldmVudHMiLCJzZWxmIiwiZm4iLCJvZmYiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9uIiwibGlzdGVuZXJzIiwic3BsaWNlIiwic2xpY2UiLCJDYWxlbmRhciIsImluaXQiLCJpbml0aWFsaXplZCIsImNhbGVuZGFyRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuIiwiY2FsIiwiZGF0YXNldCIsInJlbnRhbElkIiwibG9hZE1hcHMiLCJpbnN0YW5jZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYXV0b0luaXQiLCJnZW5BcnJheVJhbmdlIiwiYiIsIkNhbGVuZGFyVHJlZSIsInZhbGlkYXRlQ2VsbCIsInRyZWUiLCJzdGFydCIsImVuZCIsInJhbmdlIiwic2VsZWN0RGF5c0luTW9udGgiLCJtb250aERheXMiLCJjb25jYXQiLCJzZWxlY3RNb250aHNJblllYXIiLCJpc1ZhbGlkIiwiaXNSYW5nZVZhbGlkIiwic2VsZWN0aW9uIiwibW9udGhSYW5nZSIsInkiLCJtIiwic3RhcnREYXkiLCJlbmREYXkiLCJkYXkiLCJmaWx0ZXIiLCJ1cGRhdGVkQXQiLCJtYXBzVG9UcmVlIiwicHJvcGVydHkiLCJwcm9wIiwiZ2V0RGF5UHJvcGVydHkiLCJtYXBzIiwibWFwU3RhcnRBdCIsImF2YWlsYWJpbGl0eSIsIm5pZ2h0bHlfcmF0ZXMiLCJtaW5pbXVtX3N0YXlzIiwiYXZhaWwiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJyYXRlcyIsIm1pbk1hcCIsImRhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImRheVNoaWZ0IiwiZ2V0RGF0ZSIsInN0YXRlIiwiaW5kZXgiLCJhcnIiLCJtaW5TdGF5IiwicmF0ZSIsImlzQXZhaWxhYmxlIiwicHJldkF2YWlsYWJsZSIsImlzTW9ybmluZ0Jsb2NrZWQiLCJpc091dEF2YWlsYWJsZSIsImxhbmciLCJkb2N1bWVudEVsZW1lbnQiLCJmb3JtYXREYXRlIiwiZm9ybWF0IiwicGFkIiwibnVtYmVyIiwiZGF0ZVRvSXNvIiwiaXNMYXRlciIsInZhbGlkYXRpb25PZlJhbmdlIiwiY2VsbCIsIm9wdHMiLCJWRVJTSU9OIiwiY29uc29sZSIsImNvbmZpZ0RhdGFzZXQiLCJpc0Ryb3BEb3duIiwiaW5pdENhbGVuZGFyRHJvcCIsIndpZGdldExhbmciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZG9tIiwiY1RyZWUiLCJhZGRNYXBzIiwic3RhcnRfZGF0ZSIsImN1cnJEYXRlIiwiaXNTZWxlY3RpbmciLCJoaWdobGlnaHRlZEJvdW5kcyIsImhhc1ZhbGlkUmFuZ2UiLCJpc1JldmVyc2VTZWxlY3RhYmxlIiwic2hvd1JhdGVzIiwic2hvd01pblN0YXkiLCJtb250aHNXcmFwcGVyIiwiYXBwZW5kQ2hpbGQiLCJmb3J3YXJkIiwiYmFjayIsInJlbmRlck1vbnRocyIsInllYXJTdGFydCIsIm1vbnRoU3RhcnQiLCJhZGRCdG5zRXZlbnRzIiwiZW1pdCIsImlzUmV2ZXJzZSIsImRlc3Ryb3lNb250aHMiLCJjcmVhdGVUcmVlIiwiZGlzcGxheU1vbnRocyIsInllYXJFbmQiLCJtb250aEVuZCIsIm1vbnRocyIsImFkZFRyZWUiLCJyZWNvdmVyU2VsZWN0aW9ucyIsInNlbGVjdGFibGUiLCJhZGRNb250aEV2ZW50cyIsImRpc2FibGVCYWNrQnRuIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3RTdGFydCIsInNlbGVjdERheSIsInNlbGVjdGlvbkVuZCIsInNlbGVjdEVuZCIsImhpZ2hMaWdodFJhbmdlIiwiaXNCYWNrRGlzYWJsZWQiLCJzdGFydERhdGUiLCJkaXNhYmxlZCIsImxvYWRlckVsIiwicmVwbGFjZU1hcHMiLCJwcmV2ZW50RGVmYXVsdCIsIm1vbnRoVG9SZW5kZXIiLCJ5ZWFyVG9SZW5kZXIiLCJpc0VuZEZpcnN0IiwidGFyZ2V0IiwiZGF0ZVZhbHVlIiwicmVzZXRTZWxlY3Rpb24iLCJlbmREYXRlRmlyc3RBY3Rpb24iLCJzdGFydERhdGVGaXJzdEFjdGlvbiIsImNvbXBsZXRlU2VsZWN0aW9uIiwicmVtb3ZlSGlnaGxpZ2h0IiwiYm9keSIsInJlbGF0ZWRUYXJnZXQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkiLCJzZWxlY3RFbmRBY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0U3RhcnRBY3Rpb24iLCJzd2l0Y2hJbnB1dEZvY3VzIiwib25TZWxlY3RTdGFydCIsIm9uU2VsZWN0RW5kIiwic2VsZWN0UmFuZ2UiLCJvbkNsZWFyU2VsZWN0aW9uIiwiY2VsbEEiLCJjZWxsQiIsImVsU3RhcnRBdCIsImVsRW5kQXQiLCJ2YWx1ZVRvSW5wdXQiLCJ0aW1lcyIsIm1Eb20iLCJkb21Nb250aCIsImRheUVsZW1lbnRzIiwibW9udGhEb20iLCJoZWFkZXJUcGxTdHJpbmciLCJkYXlzVHBsU3RyaW5nIiwiaGVhZGVyIiwid2Vla2RheXNMYWJlbHNFeHRlbmRlZCIsIndlZWtkYXlzTGFiZWxzIiwiZGF5c1BlcldlZWsiLCJzdGFydE9mV2VlayIsInN0YXJ0T2ZNb250aCIsImdldFVUQ0RheSIsInJvd1RlbXBsYXRlIiwibW9udGhUcGwiLCJ3ZWVrU2hpZnQiLCJyb3dzIiwid2Vla1NoaWZ0Q29ycmVjdGVkIiwiZGF5Q291bnRlciIsImRheU9mTW9udGgiLCJ3ZWVrIiwiaiIsImlzRGlzYWJsZWQiLCJpc0RheURpc2FibGVkIiwiaXNEaXNhYmxlZFN0YXJ0IiwiY0RhdGUiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwidW5kZWZpbmVkIiwiY2xvc2UiLCJ0b2dnbGVMb2FkaW5nIiwib25TdWNjZXNzIiwicmVudGFsIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJtYXBzTG9hZGVkIiwib25FcnJvciIsInJlbnRhbFVybCIsImNsb3NlRHJvcCIsImVsVGFyZ2V0IiwiTXlEcm9wIiwiRHJvcCIsImNyZWF0ZUNvbnRleHQiLCJjbGFzc1ByZWZpeCIsImNhbERyb3AiLCJjb250ZW50IiwiY2xhc3NlcyIsIm9wZW5PbiIsInRhcmdldEF0dGFjaG1lbnQiLCJjb25zdHJhaW5Ub1dpbmRvdyIsImNvbnN0cmFpblRvU2Nyb2xsUGFyZW50Iiwib25Gb2N1cyIsImlucHV0IiwiaXNSZXZlcnNlZCIsImNoYW5nZVNlbGVjdGlvbk9yZGVyIiwiaXNPcGVuZWQiLCJlbFJlc2V0IiwiYmluZCIsInR5cGUiLCJmb3JjZSIsInN0b3BQcm9wYWdhdGlvbiIsImVsTGFuZyIsImRvY3VtZW50TGFuZyIsImxhbmdGYWxsYmFjayIsImluZGV4T2YiLCJ3YXJuIiwiYXBpSG9zdCIsIk5PREVfRU5WIiwiYXBpTmFtZXNwYWNlIiwiYXBpTWFwc1JvdXRlIiwiaWRzIiwicm91dGUiLCJtaW5SYW5nZSIsImVuIiwiZnIiLCJkZSIsInN2IiwiaXQiLCJlcyIsImluZm8iLCJpbmZvRXh0cmEiLCJtb3JuaW5nRGlzYWJsZWQiLCJuaWdodERpc2FibGVkIiwiY250IiwibWFpbiIsIm1DZWxsIiwiY2FwdGlvbiIsInRhYmxlSGVhZGVyIiwid2Vla0RheUxhYmVsIiwidGgiLCJsYWJlbCIsIndlZWtEYXkiLCJkaXMiLCJkaXNTdGFydCIsInJhdGVUIiwibWluU3RheVQiLCJ3ZWVrRGF5UGxhY2Vob2xkZXIiLCJ3ZWVrUm93IiwibG9hZGluZyIsImxvYWRpbmdMYXllciIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwicmVxdWlyZSIsIlRldGhlciIsIl9iaW5kIiwiRnVuY3Rpb24iLCJfc2xpY2VkVG9BcnJheSIsInNsaWNlSXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiZG9uZSIsImVyciIsIkFycmF5IiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZ2V0IiwiZ2V0IiwiX3gyIiwiX3gzIiwiX3g0IiwiX2FnYWluIiwiX2Z1bmN0aW9uIiwib2JqZWN0IiwicmVjZWl2ZXIiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXR0ZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfVGV0aGVyJFV0aWxzIiwiVXRpbHMiLCJleHRlbmQiLCJFdmVudGVkIiwic29ydEF0dGFjaCIsIl9zdHIkc3BsaXQiLCJfc3RyJHNwbGl0MiIsImZpcnN0Iiwic2Vjb25kIiwiX3JlZiIsInJlbW92ZUZyb21BcnJheSIsInJlc3VsdHMiLCJjbGlja0V2ZW50cyIsInRyYW5zaXRpb25FbmRFdmVudHMiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJfbmFtZSIsImhhc093blByb3BlcnR5IiwidGVtcEVsIiwic3R5bGUiLCJNSVJST1JfQVRUQUNIIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwibWlkZGxlIiwiY2VudGVyIiwiYWxsRHJvcHMiLCJvcHRpb25zIiwiZHJvcCIsIl9sZW4iLCJfa2V5IiwiRHJvcEluc3RhbmNlIiwiZHJvcHMiLCJkZWZhdWx0cyIsImRlZmF1bHRPcHRpb25zIiwicG9zaXRpb24iLCJiZWZvcmVDbG9zZSIsIm9wZW5EZWxheSIsImNsb3NlRGVsYXkiLCJmb2N1c0RlbGF5IiwiYmx1ckRlbGF5IiwiaG92ZXJPcGVuRGVsYXkiLCJob3ZlckNsb3NlRGVsYXkiLCJ0ZXRoZXJPcHRpb25zIiwidXBkYXRlQm9keUNsYXNzZXMiLCJhbnlPcGVuIiwiX0V2ZW50ZWQiLCJFcnJvciIsImRhdGFQcmVmaXgiLCJjb250ZW50QXR0ciIsImF0dHJzT3ZlcnJpZGUiLCJvdmVycmlkZSIsImFkZFRhcmdldENsYXNzZXMiLCJfYm91bmRFdmVudHMiLCJiaW5kTWV0aG9kcyIsInNldHVwRWxlbWVudHMiLCJzZXR1cEV2ZW50cyIsInNldHVwVGV0aGVyIiwiX29uIiwiaGFuZGxlciIsInRyYW5zaXRpb25FbmRIYW5kbGVyIiwiX3RyYW5zaXRpb25FbmRIYW5kbGVyIiwiX3RoaXMiLCJnZW5lcmF0ZUFuZFNldENvbnRlbnQiLCJjb250ZW50RWxlbWVudE9ySFRNTCIsImRyb3BBdHRhY2giLCJjb25zdHJhaW50cyIsInRvIiwicGluIiwiYXR0YWNobWVudCIsIm9mZnNldCIsInRhcmdldE9mZnNldCIsImVuYWJsZWQiLCJ0ZXRoZXIiLCJfdGhpczIiLCJzZXRUaW1lb3V0Iiwib3BlbkhhbmRsZXIiLCJ0b2dnbGUiLCJjbG9zZUhhbmRsZXIiLCJjbGlja0V2ZW50IiwiaW5UaW1lb3V0Iiwib3V0VGltZW91dCIsImluSGFuZGxlciIsImNsZWFyVGltZW91dCIsIm91dEhhbmRsZXIiLCJfdGhpczMiLCJlbmFibGUiLCJ0cmlnZ2VyIiwiY3VycmVudFRhcmdldCIsImJlZm9yZUNsb3NlSGFuZGxlciIsInNob3VsZENsb3NlIiwiaXNDbG9zaW5nIiwiZGlzYWJsZSIsImRlc3Ryb3kiLCJfYm91bmRFdmVudHMkaSIsIl9ldmVudCIsIlRldGhlckJhc2UiLCJ6ZXJvRWxlbWVudCIsImdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5vZGUiLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiayIsIl9mcmFtZUVsZW1lbnQiLCJmcmFtZUVsZW1lbnQiLCJmcmFtZVJlY3QiLCJnZXRTY3JvbGxQYXJlbnRzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnRzIiwibm9kZVR5cGUiLCJfc3R5bGUiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInVuaXF1ZUlkIiwiemVyb1Bvc0NhY2hlIiwiZ2V0T3JpZ2luIiwiZGVmZXIiLCJyZW1vdmVVdGlsRWxlbWVudHMiLCJnZXRCb3VuZHMiLCJkb2MiLCJkb2NFbCIsImJveCIsIm9yaWdpbiIsIndpZHRoIiwic2Nyb2xsV2lkdGgiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRPZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJfc2Nyb2xsQmFyU2l6ZSIsImdldFNjcm9sbEJhclNpemUiLCJpbm5lciIsIm91dGVyIiwicG9pbnRlckV2ZW50cyIsInZpc2liaWxpdHkiLCJ3aWR0aENvbnRhaW5lZCIsIm9mZnNldFdpZHRoIiwid2lkdGhTY3JvbGwiLCJvdXQiLCJ1cGRhdGVDbGFzc2VzIiwiYWxsIiwiZGVmZXJyZWQiLCJmbHVzaCIsInBvcCIsImN0eCIsIm9uY2UiLCJiaW5kaW5ncyIsIl9iaW5kaW5ncyRldmVudCRpIiwiX3g2IiwiX3g3IiwiX3g4IiwiX1RldGhlckJhc2UkVXRpbHMiLCJ3aXRoaW4iLCJkaWZmIiwidHJhbnNmb3JtS2V5IiwidHJhbnNmb3JtcyIsInRldGhlcnMiLCJub3ciLCJwZXJmb3JtYW5jZSIsImxhc3RDYWxsIiwibGFzdER1cmF0aW9uIiwicGVuZGluZ1RpbWVvdXQiLCJ0aWNrIiwiTWF0aCIsIndpbmRvdyIsIk1JUlJPUl9MUiIsIk1JUlJPUl9UQiIsIk9GRlNFVF9NQVAiLCJhdXRvVG9GaXhlZEF0dGFjaG1lbnQiLCJyZWxhdGl2ZVRvQXR0YWNobWVudCIsImF0dGFjaG1lbnRUb09mZnNldCIsImFkZE9mZnNldCIsIm9mZnNldHMiLCJvZmZzZXRUb1B4Iiwic2l6ZSIsInBhcnNlT2Zmc2V0IiwiX3ZhbHVlJHNwbGl0IiwiX3ZhbHVlJHNwbGl0MiIsInBhcnNlQXR0YWNobWVudCIsIlRldGhlckNsYXNzIiwiaGlzdG9yeSIsInNldE9wdGlvbnMiLCJpbml0aWFsaXplIiwiZ2V0Q2xhc3MiLCJwb3MiLCJfb3B0aW9ucyIsInRhcmdldE1vZGlmaWVyIiwianF1ZXJ5Iiwic2Nyb2xsUGFyZW50cyIsImdldFRhcmdldEJvdW5kcyIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJib3VuZHMiLCJoYXNCb3R0b21TY3JvbGwiLCJzY3JvbGxCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiZml0QWRqIiwicG93Iiwic2Nyb2xsUGVyY2VudGFnZSIsInNjcm9sbFRvcCIsImNsZWFyQ2FjaGUiLCJfY2FjaGUiLCJjYWNoZSIsIl90aGlzNCIsIl90aGlzNSIsInVwZGF0ZUF0dGFjaENsYXNzZXMiLCJlbGVtZW50QXR0YWNoIiwidGFyZ2V0QXR0YWNoIiwiX3RoaXM2Iiwic2lkZXMiLCJfYWRkQXR0YWNoQ2xhc3NlcyIsInNpZGUiLCJfdGhpczciLCJmbHVzaENoYW5nZXMiLCJlbGVtZW50UG9zIiwibGFzdFNpemUiLCJfbGFzdFNpemUiLCJ0YXJnZXRQb3MiLCJ0YXJnZXRTaXplIiwibWFudWFsT2Zmc2V0IiwibWFudWFsVGFyZ2V0T2Zmc2V0IiwiX21vZHVsZTIiLCJyZXQiLCJzY3JvbGxiYXJTaXplIiwicGFnZSIsInZpZXdwb3J0Iiwid2luIiwicGFyZW50RWxlbWVudCIsIm9wdGltaXphdGlvbnMiLCJtb3ZlRWxlbWVudCIsIm9mZnNldFBvc2l0aW9uIiwib2Zmc2V0UGFyZW50U3R5bGUiLCJvZmZzZXRQYXJlbnRTaXplIiwib2Zmc2V0Qm9yZGVyIiwic2Nyb2xsTGVmdCIsIm1vdmUiLCJ1bnNoaWZ0IiwiX3RoaXM4Iiwic2FtZSIsImZvdW5kIiwicG9pbnQiLCJjc3MiLCJ0cmFuc2NyaWJlIiwiX3NhbWUiLCJfcG9zIiwiaGFzT3B0aW1pemF0aW9ucyIsImdwdSIsInlQb3MiLCJ4UG9zIiwibWF0Y2hNZWRpYSIsInJldGluYSIsIm1hdGNoZXMiLCJyb3VuZCIsIm1vdmVkIiwiYm9keUVsZW1lbnQiLCJvZmZzZXRQYXJlbnRJc0JvZHkiLCJjdXJyZW50Tm9kZSIsIndyaXRlQ1NTIiwid3JpdGUiLCJ2YWwiLCJlbFZhbCIsIkJPVU5EU19GT1JNQVQiLCJnZXRCb3VuZGluZ1JlY3QiLCJzdWJzdHIiLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRXaWR0aCIsImFsbENsYXNzZXMiLCJjb25zdHJhaW50Iiwib3V0T2ZCb3VuZHNDbGFzcyIsInBpbm5lZENsYXNzIiwiYWRkQ2xhc3NlcyIsInRBdHRhY2htZW50IiwiZUF0dGFjaG1lbnQiLCJjaGFuZ2VBdHRhY2hYIiwiY2hhbmdlQXR0YWNoWSIsIl9hdHRhY2htZW50JHNwbGl0IiwiX2F0dGFjaG1lbnQkc3BsaXQyIiwicGlubmVkIiwib29iIiwib29iQ2xhc3MiLCJhYnV0dGVkIiwidGFyZ2V0UG9zU2lkZSIsInNoaWZ0Iiwic2hpZnRUb3AiLCJzaGlmdExlZnQiLCJfc2hpZnQiLCJfc2hpZnQyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qs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Yyw0QkFBNEIsd0JBQXdCLG9CQUFvQix3Q0FBd0Msb0NBQW9DLGdDQUFnQyxrQ0FBa0MsMEJBQTBCLDZCQUE2Qix5QkFBeUIsNkJBQTZCLHdCQUF3QixtQ0FBbUMsY0FBYyxnQkFBZ0IsdUJBQXVCLHlCQUF5QixzQkFBc0Isa0JBQWtCLHNCQUFzQix3R0FBd0csd0NBQXdDLHVDQUF1QyxHQUFHLGkyQ0FBaTJDLG1CQUFtQixHQUFHLG9DQUFvQyx1QkFBdUIsR0FBRyx1Q0FBdUMsbUJBQW1CLEdBQUcsb0NBQW9DLHVCQUF1QixHQUFHLHVDQUF1QyxnQ0FBZ0MsR0FBRyx1Q0FBdUMsNkJBQTZCLEdBQUcsdUNBQXVDLGdDQUFnQyxHQUFHLHFDQUFxQywwQkFBMEIsR0FBRywwQ0FBMEMsZ0NBQWdDLEdBQUcsb0VBQW9FLHdCQUF3QixHQUFHLHlDQUF5QywyQkFBMkIsR0FBRywyRUFBMkUsMEJBQTBCLEdBQUcsdUVBQXVFLHNCQUFzQixHQUFHLG9UQUFvVCxzQkFBc0IsdUJBQXVCLEdBQUcsNkVBQTZFLGlCQUFpQixHQUFHOztBQUV2OVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBa0Ysa0NBQWtDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImJvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQm9va2luZ1N5bmNDYWxlbmRhcldpZGdldFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCb29raW5nU3luY0NhbGVuZGFyV2lkZ2V0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJvb2tpbmdTeW5jQ2FsZW5kYXJXaWRnZXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzMDIzNzY0MTc5OWIxMjdkMjdkIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QsIGRvY3VtZW50LCB3aW5kb3csIGlzTmFOICovXG5jb25zdCB7IGtleXMsIHByb3RvdHlwZTogeyB0b1N0cmluZyB9IH0gPSBPYmplY3Q7XG5jb25zdCB7IHBhcnNlLCBzdHJpbmdpZnkgfSAgICAgICAgICAgICAgPSBKU09OO1xuXG5jb25zdCBpc05hTlBvbHlmaWxsID0gdmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSk7XG5cbi8vIGRhdGF0eXBlIGNoZWNrc1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ICAgPSBvID0+IHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgICAgPSBhID0+IHRvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IGYgPT4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG5leHBvcnQgY29uc3QgaXNTdHJpbmcgICA9IGYgPT4gdHlwZW9mIGYgPT09ICdzdHJpbmcnO1xuZXhwb3J0IGNvbnN0IGlzTnVtZXJpYyAgPSBuID0+ICFpc05hTlBvbHlmaWxsKHBhcnNlSW50KG4sIDEwKSk7XG5leHBvcnQgY29uc3QgaXMgICAgICAgICA9IG8gPT4gdHlwZW9mIG8gIT09ICd1bmRlZmluZWQnICYmIG8gIT09IG51bGwgJiYgIWlzTmFOUG9seWZpbGwobyk7XG5cbi8vIHN0cmluZyB0cmFuc2Zvcm1zXG5leHBvcnQgY29uc3QgdG9VbmRlcnNjb3JlICA9IHN0ciA9PiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBzID0+IGBfJHtzLnRvTG93ZXJDYXNlKCl9YCk7XG5leHBvcnQgY29uc3QgZGFzaFRvQ2FwaXRhbCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLShbYS16XSkvaWcsIChzLCBpKSA9PiBpLnRvVXBwZXJDYXNlKCkpO1xuXG4vLyBvYmplY3QgaGVscGVyc1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIG9iamVjdCBvd24gcHJvcGVydGllcyBhbmQgYXBwbHkgdHJhbnNmb3JtIGZ1bmN0aW9uIG9uIGtleXNcbiAqIGxldCBhID0geyBsYXN0TmFtZTogXCJSb21hblwiLCBmaXJzdE5hbWU6IFwiS2h1ZHlha292XCIgfVxuICogdHJhdmVyc2VPYmooYSwgdG9VbmRlcnNjb3JlKVxuICogPT4geyBsYXN0X25hbWU6IFwiUm9tYW5cIiwgZmlyc3RfbmFtZTogXCJLaHVkeWFrb3ZcIiB9XG4gKlxuICogQHBhcmFtIG9iaiB7T2JqZWN0fVxuICogQHBhcmFtIGZuS2V5IHtGdW5jdGlvbn1cbiAqIEBwYXJhbSBmblZhbHVlIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlT2JqID0gKG9iaiwgZm5LZXksIGZuVmFsdWUpID0+XG4gIGtleXMob2JqKS5yZWR1Y2UoKGN1cnIsIG5leHQpID0+IHtcbiAgICBsZXQgbmV4dFByb3BlcnR5ID0gb2JqW25leHRdO1xuICAgIGNvbnN0IG8gICAgICAgICAgPSBjdXJyO1xuXG4gICAgaWYgKGlzQXJyYXkobmV4dFByb3BlcnR5KSkge1xuICAgICAgbmV4dFByb3BlcnR5ID0gbmV4dFByb3BlcnR5Lm1hcChpID0+IHRyYXZlcnNlT2JqKGksIGZuS2V5LCBmblZhbHVlKSk7XG4gICAgfVxuXG4gICAgb1tmbktleShuZXh0KV0gPSBpc09iamVjdChuZXh0UHJvcGVydHkpID8gdHJhdmVyc2VPYmoobmV4dFByb3BlcnR5LCBmbktleSwgZm5WYWx1ZSkgOiBmblZhbHVlKG5leHRQcm9wZXJ0eSk7XG5cbiAgICByZXR1cm4gbztcbiAgfSwge30pO1xuXG4vKipcbiAqIE1lcmdlIHR3byBvYmplY3RzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMVxuICogQHBhcmFtIHtPYmplY3R9IG9iajJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNEZWVwXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgbWVyZ2UgPSAob2JqMSwgb2JqMiwgaXNEZWVwKSA9PiB7XG4gIGNvbnN0IG9iajMgPSB7fTtcbiAga2V5cyhvYmoxKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGlzRGVlcCAmJiBpc09iamVjdChvYmoxW2ldKSkge1xuICAgICAgb2JqM1tpXSA9IG1lcmdlKG9iajFbaV0sIHt9LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqM1tpXSA9IG9iajFbaV07XG4gICAgfVxuICB9KTtcblxuICBrZXlzKG9iajIpLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaXNEZWVwICYmIGlzT2JqZWN0KG9iajJbaV0pKSB7XG4gICAgICBvYmozW2ldID0gbWVyZ2Uob2JqM1tpXSB8fCB7fSwgb2JqMltpXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iajNbaV0gPSBvYmoyW2ldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmozO1xufTtcblxuLyoqXG4gKiBQaWNrIHByb3BlcnRpZXMgZnJvbSBvYmplY3RcbiAqIGxldCBhID0geyBuYW1lOiBcIlJvbWFuXCIsIHBob25lOiAxMjMsIGNvdW50cnk6IFwiYW55XCIgfTtcbiAqIHBpY2soYSwgJ25hbWUnLCAnY291bnRyeScpXG4gKiA9PiB7IG5hbWU6IFwiUm9tYW5cIiwgY291bnRyeTogXCJhbnlcIiB9XG4gKlxuICogQHBhcmFtIG9iaiB7T2JqZWN0fVxuICogQHBhcmFtIGFyZ3Mge1N0cmluZ31cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrID0gKG9iaiwgLi4uYXJncykgPT4gYXJncy5yZWR1Y2UoKGksIHQpID0+IHtcbiAgY29uc3QgcGlja2VkT2JqID0gaTtcbiAgcGlja2VkT2JqW3RdICAgID0gb2JqW3RdO1xuICByZXR1cm4gcGlja2VkT2JqO1xufSwge30pO1xuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZU9iaiA9IG8gPT4gdHJhdmVyc2VPYmoobywgZGFzaFRvQ2FwaXRhbCk7XG5cbi8vIHNlcmlhbGl6ZSBxdWVyeSBwYXJhbXMgd2l0aCBhZGRpdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZSA9IChvYmosIHRyYW5zZm9ybSkgPT4ge1xuICBjb25zdCBjb21wb25lbnQgPSBrZXlzKG9iaikubWFwKHAgPT4gYCR7dHJhbnNmb3JtKGVuY29kZVVSSUNvbXBvbmVudChwKSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9ialtwXSl9YCk7XG4gIHJldHVybiBjb21wb25lbnQuam9pbignJicpO1xufTtcblxuLy8gRE9NIGhlbHBlcnNcbmV4cG9ydCBjb25zdCBmaW5kQnlDbGFzc05hbWUgPSAoY29udGV4dCwgbmFtZSkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfWApO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRDbGFzc05hbWUgPSAoZWwpID0+IHtcbiAgLy8gQ2FuJ3QgdXNlIGp1c3QgU1ZHQW5pbWF0ZWRTdHJpbmcgaGVyZSBzaW5jZSBub2RlcyB3aXRoaW4gYSBGcmFtZSBpbiBJRSBoYXZlXG4gIC8vIGNvbXBsZXRlbHkgc2VwYXJhdGVseSBTVkdBbmltYXRlZFN0cmluZyBiYXNlIGNsYXNzZXNcbiAgaWYgKGVsLmNsYXNzTmFtZSBpbnN0YW5jZW9mIGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuU1ZHQW5pbWF0ZWRTdHJpbmcpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NOYW1lLmJhc2VWYWw7XG4gIH1cbiAgcmV0dXJuIGVsLmNsYXNzTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDbGFzc05hbWUgPSAoZWwsIGNsYXNzTmFtZSkgPT4ge1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIEhUTUxFbGVtZW50IHdpdGggYXR0cmlidXRlc1xuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEBwYXJhbSBhdHRycyB7T2JqZWN0fVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChuYW1lLCBhdHRycykgPT4ge1xuICBjb25zdCBwYXJhbXMgID0gYXR0cnMgfHwge307XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBrZXlzKHBhcmFtcykubWFwKGkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgcGFyYW1zW2ldKSk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRGcm9tU3RyaW5nID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBlbGVtZW50ICAgICA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IHN0cmluZztcbiAgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW5bMF07XG59O1xuXG5leHBvcnQgY29uc3QgZGVzdHJveUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsLCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBjbGFzc05hbWVzO1xuXG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWUuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICBpZiAoY2xzLnRyaW0oKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVnZXggICAgID0gbmV3IFJlZ0V4cChgKF58ICkke25hbWUuam9pbignfCcpfSggfCQpYCwgJ2dpJyk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKGVsKS5yZXBsYWNlKHJlZ2V4LCAnICcpO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsLCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBjbGFzc05hbWVzO1xuXG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWUuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICBpZiAoY2xzLnRyaW0oKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWwsIG5hbWUpO1xuICAgIGNvbnN0IGNscyA9IGdldENsYXNzTmFtZShlbCkgKyBgICR7bmFtZS5qb2luKCcgJyl9YDtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNscyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYXNDbGFzcyA9IChlbCwgbmFtZSkgPT4ge1xuICBpZiAodHlwZW9mIGVsLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpO1xuICB9XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCk7XG4gIHJldHVybiBuZXcgUmVnRXhwKGAoXnwgKSR7bmFtZX0oIHwkKWAsICdnaScpLnRlc3QoY2xhc3NOYW1lKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciA9IChlbGVtZW50LCBhdHRyaWJ1dGUpID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQ7XG4gIGxldCB2YWx1ZSAgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICB3aGlsZSAoIWlzKHZhbHVlKSkge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnQgJiYgdHlwZW9mIHBhcmVudC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbHVlID0gcGFyZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgcGFyZW50LFxuICB9O1xufTtcblxuLyoqXG4gKiBGaW5kIEhUTUxFbGVtZW50IGF0dHJpYnV0ZSwgaW4gdGhlIGRvbS10cmVlLCBidWJibGVzIHVwXG4gKiBAcGFyYW0gZWxlbWVudCB7SFRNTEVsZW1lbnR9XG4gKiBAcGFyYW0gYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZ2V0UGFyZW50QXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSkgPT5cbiAgdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGVsZW1lbnQsIGF0dHJpYnV0ZSkudmFsdWU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBzb21lIEhUTUxFbGVtZW50IGlzIGluc2lkZSBhbm90aGVyIG9uZVxuICogQHBhcmFtIGNoaWxkIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBwYXJlbnQge0hUTUxFbGVtZW50fVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc0luc2lkZSA9IChjaGlsZCwgcGFyZW50KSA9PiB7XG4gIGxldCBjdXJyZW50ID0gY2hpbGQ7XG5cbiAgd2hpbGUgKGN1cnJlbnQgIT09IHBhcmVudCkge1xuICAgIGlmICghaXMoY3VycmVudCkgfHwgY3VycmVudC50YWdOYW1lID09PSAnQk9EWScgfHwgY3VycmVudC50YWdOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIERhdGUgdXRpbHNcblxuY29uc3QgZGF5c0luTW9udGggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5jb25zdCBpc0xlYXBZZWFyICA9IHllYXIgPT4gKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XG5cbmV4cG9ydCBjb25zdCBtb250aExlbmd0aCA9ICh5ZWFyLCBtb250aCkgPT4ge1xuICBsZXQgZGF5cyA9IGRheXNJbk1vbnRoW21vbnRoXTtcbiAgaWYgKG1vbnRoID09PSAxICYmIGlzTGVhcFllYXIoeWVhcikpIHtcbiAgICBkYXlzID0gMjk7XG4gIH1cblxuICByZXR1cm4gZGF5cztcbn07XG5cbi8vIGFqYXggd3JhcHBlclxuZXhwb3J0IGNvbnN0IGFqYXggPSAoYXBpVXJsLCBzdWNjZXNzLCBlcnJvciwgcGFyYW1zLCBtZXRob2QpID0+IHtcbiAgY29uc3Qgc2VydmVyTWV0aG9kID0gbWV0aG9kIHx8ICdHRVQnO1xuICBjb25zdCB4bWxIdHRwICAgICAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgdXJsICAgICAgICAgID0gKG1ldGhvZCA9PT0gJ0dFVCcgJiYgcGFyYW1zKSA/IGAke2FwaVVybH0/JHsoc2VyaWFsaXplKHBhcmFtcywgdG9VbmRlcnNjb3JlKSl9YCA6IGFwaVVybDtcbiAgY29uc3QgaXNTdWNjZXNzICAgID0gc3RhdHVzID0+ICgoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHx8IHN0YXR1cyA9PT0gMzA0KTtcblxuICB4bWxIdHRwLm9wZW4oc2VydmVyTWV0aG9kLCB1cmwpO1xuICB4bWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nKTtcblxuICB4bWxIdHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBpZiAoaXNTdWNjZXNzKHhtbEh0dHAuc3RhdHVzKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gcGFyc2UoeG1sSHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSB4bWxIdHRwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcih4bWxIdHRwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKGlzT2JqZWN0KHBhcmFtcykpIHtcbiAgICB4bWxIdHRwLnNlbmQoc3RyaW5naWZ5KHBhcmFtcykpO1xuICB9IGVsc2Uge1xuICAgIHhtbEh0dHAuc2VuZCgpO1xuICB9XG59O1xuXG4vLyBWYWxpZGF0aW9uc1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0ge1xuICBpc0JsYW5rKG8pIHtcbiAgICByZXR1cm4gaXMobyk7XG4gIH0sXG4gIGlzTnVtZXJpYyhvKSB7XG4gICAgcmV0dXJuIGlzTnVtZXJpYyhvKTtcbiAgfSxcbiAgaXNFbWFpbChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBpcyhvLm1hdGNoKC9eW15AXFxzXStAKFteQFxcc10rXFwuKStbXkBcXFddKyQvKSk7XG4gIH0sXG4gIGlzQm91bmRlZEJ5KG8sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvID49IG1pbiAmJiBvIDw9IG1heDtcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyIHtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cbiAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgLy8gVXNlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24gb3IgY3JlYXRlIGl0LlxuICAgIHRoaXMuZXZlbnRzID0gdGhpcy5ldmVudHMgfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuXG4gICAgLy8gQXBwZW5kcyB0aGUgbGlzdGVuZXIgaW50byB0aGUgY29sbGVjdGlvbiBvZiB0aGUgZ2l2ZW4gZXZlbnRcbiAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFdpbGwgYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gXCJmb29cIiBldmVudCBvbmNlLlxuICAgKiBlbWl0dGVyLm9uY2UoJ2ZvbycsIGxpc3RlbmVyKTtcbiAgICovXG4gIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBmbigpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50LCBmbik7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZuLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICB0aGlzLm9uKGV2ZW50LCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuICBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgbGV0IGxpc3RlbmVycztcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5ldmVudHMgfHwgIShsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm4sIGkpID0+IHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgZWFjaCBpdGVtIGluIHRoZSBsaXN0ZW5lciBjb2xsZWN0aW9uIGluIG9yZGVyIHdpdGggdGhlIHNwZWNpZmllZCBkYXRhLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgeW91IHdhbnQgdG8gZW1pdC5cbiAgICogQHBhcmFtIHsuLi5PYmplY3R9IGFyZ3MgLSBEYXRhIHRvIHBhc3MgdG8gdGhlIGxpc3RlbmVycy5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBFbWl0cyB0aGUgXCJmb29cIiBldmVudCB3aXRoICdwYXJhbTEnIGFuZCAncGFyYW0yJyBhcyBhcmd1bWVudHMuXG4gICAqIGVtaXR0ZXIuZW1pdCgnZm9vJywgJ3BhcmFtMScsICdwYXJhbTInKTtcbiAgICovXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgbGlzdGVuZXJzO1xuXG4gICAgLy8gRGVmaW5lcyBsaXN0ZW5lcnMgdmFsdWUuXG4gICAgaWYgKCF0aGlzLmV2ZW50cyB8fCAhKGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENsb25lIGxpc3RlbmVyc1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dpZGdldC11dGlscy9zcmMvaW5kZXguanMiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSZsb2NhbElkZW50TmFtZT1Cb29raW5nU3luY0NhbGVuZGFyX19bTG9jYWxdIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP291dHB1dFN0eWxlPWV4cGFuZGVkJnNvdXJjZU1hcCZzb3VyY2VNYXBDb250ZW50cyEuL2NhbGVuZGFyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwic2luZ2xldG9uXCI6dHJ1ZX0pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSZsb2NhbElkZW50TmFtZT1Cb29raW5nU3luY0NhbGVuZGFyX19bTG9jYWxdIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP291dHB1dFN0eWxlPWV4cGFuZGVkJnNvdXJjZU1hcCZzb3VyY2VNYXBDb250ZW50cyEuL2NhbGVuZGFyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlJmxvY2FsSWRlbnROYW1lPUJvb2tpbmdTeW5jQ2FsZW5kYXJfX1tMb2NhbF0hLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/b3V0cHV0U3R5bGU9ZXhwYW5kZWQmc291cmNlTWFwJnNvdXJjZU1hcENvbnRlbnRzIS4vY2FsZW5kYXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2NhbGVuZGFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIGRvY3VtZW50LCBtb2R1bGUgKi9cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyJztcblxuQ2FsZW5kYXIuaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbGl6ZWQgPSBbXTtcbiAgY29uc3QgY2FsZW5kYXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJvb2tpbmdzeW5jLWNhbGVuZGFyLXdpZGdldF0nKTtcbiAgY29uc3QgbGVuICAgICAgICAgICAgICA9IGNhbGVuZGFyRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCAgID0gY2FsZW5kYXJFbGVtZW50c1tpXTtcblxuICAgIGNvbnN0IGNhbCA9IG5ldyBDYWxlbmRhcih7IGVsIH0pO1xuXG4gICAgaWYgKGVsLmRhdGFzZXQucmVudGFsSWQpIHtcbiAgICAgIGNhbC5sb2FkTWFwcyhlbC5kYXRhc2V0LnJlbnRhbElkKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZWQucHVzaChjYWwpO1xuICB9XG5cbiAgQ2FsZW5kYXIuaW5zdGFuY2VzID0gaW5pdGlhbGl6ZWQ7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBpZiAoQ2FsZW5kYXIuYXV0b0luaXQgIT09IGZhbHNlKSB7XG4gICAgQ2FsZW5kYXIuaW5pdCgpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxlbmRhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9ib29raW5nc3luYy1jYWxlbmRhci13aWRnZXQuanMiLCJpbXBvcnQgeyBpcywgbWVyZ2UsIG1vbnRoTGVuZ3RoLCBpc1N0cmluZyB9IGZyb20gJ3dpZGdldC11dGlscyc7XG5cbi8qKlxuICogIHBsZWFzZSByZWZlciB0byAvdGVzdHMvdW5pdC9jYWxlbmRhclRyZWUuc3BlY3MuanMgZm9yIHVzYWdlXG4gKiAgVE9ETyBkb2NzLCBtZXJnZSBhdmFpbGFiaWxpdHkgd2l0aCBjYWxlbmRhciB0cmVlLCB1c2Ugb25lIGRhdGEtc3RydWN0dXJlXG4gKiAgVE9ETyBtaW5TdGF5ICsgYXZhaWxhYmlsaXR5IG1hcCBjb25zaWRlcmF0aW9ucyBmbyBkaXNhYmxpbmcgZGF0ZXNcbiAqL1xuY29uc3QgZ2VuQXJyYXlSYW5nZSA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IGE7IGkgPD0gYjsgaSArPSAxKSB7XG4gICAgbGlzdC5wdXNoKGkpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJUcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRlQ2VsbFxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsaWRhdGVDZWxsLCB0cmVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUNlbGwgPSB2YWxpZGF0ZUNlbGw7XG4gICAgdGhpcy50cmVlICAgICAgICAgPSB0cmVlO1xuICB9XG5cbiAgYWRkVHJlZShvYmopIHtcbiAgICBpZiAoIXRoaXMudHJlZSkge1xuICAgICAgdGhpcy50cmVlID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyZWUgPSBtZXJnZSh0aGlzLnRyZWUgfHwge30sIG9iaiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3QgcmFuZ2UgZnJvbSB0aGUgdHJlZSwgcmV0dXJucyBhcnJheSBpdGVtc1xuICAgKiBzdGFydCBkYXRlIGlzIEFMV0FZUyA8IHRoZW4gZW5kIGRhdGUgLCBhcyB3ZSBhcmUgc2VsZWN0aW5nIHRpbWUgcmFuZ2UgaW4gZGF5cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc3RhcnQgZS5nLiBbMjAxNiwgMCwgMV1cbiAgICogQHBhcmFtIHtBcnJheX0gZW5kICAgICAgICBbMjAxNiwgMSwgM11cbiAgICogQHJldHVybnMge3tyYW5nZTogQXJyYXksIGlzVmFsaWQ6IHtCb29sZWFufX19XG4gICAqL1xuICBzZWxlY3RSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgbGV0IHJhbmdlID0gW107XG5cbiAgICBjb25zdCBhID0gc3RhcnQuc2xpY2UoKTtcblxuICAgIC8vIGlmIHllYXIgYW5kIG1vbnRoIHRoZSBzYW1lLCBqdXN0IHNsaWNlIHRoZSBjdXJyZW50IG1vbnRoXG4gICAgaWYgKGFbMF0gPT09IGVuZFswXSAmJiBhWzFdID09PSBlbmRbMV0pIHtcbiAgICAgIHJhbmdlID0gdGhpcy5zZWxlY3REYXlzSW5Nb250aChhWzBdLCBhWzFdLCBhWzJdLCBlbmRbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtb250aERheXMgPSB0aGlzLnRyZWVbYVswXV1bYVsxXV07XG5cbiAgICAgIC8vIHNsaWNlIHRoZSBwaWVjZSBvZiBjdXJyZW50IG1vbnRoRGF5cyBmcm9tIHN0YXJ0IG9mIHJhbmdlIHRpbGwgZW5kIG9mIHRoZSBtb250aERheXNcbiAgICAgIHJhbmdlID0gcmFuZ2UuY29uY2F0KHRoaXMuc2VsZWN0RGF5c0luTW9udGgoYVswXSwgYVsxXSwgYVsyXSwgbW9udGhEYXlzLmxlbmd0aCkpO1xuXG4gICAgICAvLyBzaGlmdCBzdGFydCBtb250aCwgYi9jIHdlIGFscmVhZHkgc2VsZWN0ZWQgZGF5cyBpbiBpdFxuICAgICAgYVsxXSArPSAxO1xuXG4gICAgICAvLyBpZiBlbmQgZGF0ZSB5ZWFyID4gc3RhcnQgZGF0ZVxuICAgICAgLy8gc2VsZWN0IGV2ZXJ5dGhpbmcgaW4gc3RhcnQgeWVhciB0aWxsIHRoZSBlbmQgb2Ygc3RhcnQgeWVhclxuICAgICAgLy8gZS5nLiBzdGFydCBpcyAyMCBPY3RvYmVyLCBzbyBzZWxlY3QgTm92ZW1iZXIgYW5kIERlY2VtYmVyLCBPY3RvYmVyIHdhcyBzZWxlY3RlZCBhYm92ZVxuICAgICAgaWYgKGVuZFswXSA+IHN0YXJ0WzBdKSB7XG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY29uY2F0KHRoaXMuc2VsZWN0TW9udGhzSW5ZZWFyKGFbMF0sIGFbMV0sIDExKSk7XG4gICAgICAgIC8vIGFuZCBzZXQgc3RhcnQgeWVhciB0byBlbmQgeWVhclxuICAgICAgICAvLyBtb250aCB0byAwIChKYW51YXJ5KVxuICAgICAgICBhWzBdID0gZW5kWzBdO1xuICAgICAgICBhWzFdID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gbm93IHdlIGFyZSBhdCB0aGUgc2FtZSB5ZWFyIGFuZCBoYXZlIHRoZSBjYXNlIGlmIGVuZCBtb250aCA+IHN0YXJ0IG1vbnRoXG4gICAgICAvLyB0aGVuIHNlbGVjdCBldmVyeXRoaW5nIGJldHdlZW4gdGhvc2UgbW9udGhzXG4gICAgICBpZiAoZW5kWzFdID4gYVsxXSkge1xuICAgICAgICAvLyBlLmcuIHN0YXJ0IDIwIE9jdG9iZXIgZW5kIDIwIERlY2VtYmVyLCBzZWxlY3QgZnVsbCBOb3ZlbWJlclxuICAgICAgICByYW5nZSA9IHJhbmdlLmNvbmNhdCh0aGlzLnNlbGVjdE1vbnRoc0luWWVhcihhWzBdLCBhWzFdLCBlbmRbMV0gLSAxKSk7XG4gICAgICAgIGFbMV0gID0gZW5kWzFdO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbWlzc2luZyBwYXJ0IGlzIGRheXMgaW4gZW5kIHNlbGVjdGlvbiBtb250aFxuICAgICAgcmFuZ2UgPSByYW5nZS5jb25jYXQodGhpcy5zZWxlY3REYXlzSW5Nb250aChlbmRbMF0sIGVuZFsxXSwgMSwgZW5kWzJdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmdlLFxuICAgICAgaXNWYWxpZDogdGhpcy5pc1JhbmdlVmFsaWQocmFuZ2UpLFxuICAgIH07XG4gIH1cblxuICBzZWxlY3RNb250aHNJblllYXIoeWVhciwgc3RhcnQsIGVuZCkge1xuICAgIGxldCBzZWxlY3Rpb24gICAgPSBbXTtcbiAgICBjb25zdCBtb250aFJhbmdlID0gZ2VuQXJyYXlSYW5nZShzdGFydCwgZW5kKTtcblxuICAgIG1vbnRoUmFuZ2UuZm9yRWFjaCgobW9udGgpID0+IHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnRyZWVbeWVhcl07XG4gICAgICBjb25zdCBtID0gaXMoeSkgPyB0aGlzLnRyZWVbeWVhcl1bbW9udGhdIDogbnVsbDtcblxuICAgICAgaWYgKHkgJiYgbSkge1xuICAgICAgICBzZWxlY3Rpb24gPSBzZWxlY3Rpb24uY29uY2F0KHRoaXMuc2VsZWN0RGF5c0luTW9udGgoeWVhciwgbW9udGgsIDEsIG0ubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG5cbiAgc2VsZWN0RGF5c0luTW9udGgoeWVhciwgbW9udGgsIHN0YXJ0RGF5LCBlbmREYXkpIHtcbiAgICBjb25zdCB5ID0gdGhpcy50cmVlW3llYXJdO1xuICAgIGNvbnN0IG0gPSBpcyh5KSA/IHRoaXMudHJlZVt5ZWFyXVttb250aF0gOiBudWxsO1xuXG4gICAgaWYgKHkgJiYgbSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoKHN0YXJ0RGF5IC0gMSksIGVuZERheSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNlbGVjdERheSh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgY29uc3QgeSA9IHRoaXMudHJlZVt5ZWFyXTtcbiAgICBjb25zdCBtID0gaXMoeSkgPyB0aGlzLnRyZWVbeWVhcl1bbW9udGhdIDogbnVsbDtcblxuICAgIGlmICh5ICYmIG0pIHtcbiAgICAgIHJldHVybiBtW2RheSAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzUmFuZ2VWYWxpZChyYW5nZSwgZm4pIHtcbiAgICBjb25zdCB2YWxpZGF0ZUNlbGwgPSB0aGlzLnZhbGlkYXRlQ2VsbCB8fCBmbjtcbiAgICBsZXQgaXNWYWxpZCAgICAgICAgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWxpZGF0ZUNlbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlzVmFsaWQgPSByYW5nZS5maWx0ZXIoKGEsIGkpID0+IHRoaXMudmFsaWRhdGVDZWxsKGEsIGksIHJhbmdlKSkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgcmVwbGFjZU1hcHMobWFwLCB1cGRhdGVkQXQpIHtcbiAgICB0aGlzLm1hcCA9IENhbGVuZGFyVHJlZS5tYXBzVG9UcmVlKG1hcCwgdXBkYXRlZEF0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZU1hcCgpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqICBDcmVhdGUgYSB0cmVlIHN0cnVjdHVyZSBmcm9tIG1hcHNcbiAgICogIGZvciBuLXRpbWUgZGF5IGFjY2VzcywgZS5nLiB0aGlzLm1hcFt5ZWFyXVttb250aF1bZGF5XS5pc0F2YWlsYWJsZTtcbiAgICoge1xuICAgKiAgIDIxMDY6IHtcbiAgICogICAgICAxOiB7XG4gICAqICAgICAgICAxOiAsXG4gICAqICAgICAgICAyOiAsXG4gICAqICAgICAgICAzOlxuICAgKiAgICAgICAgLi4uXG4gICAqICAgICAgfVxuICAgKiAgICAgIC4uLlxuICAgKiAgICAgIDEyOiB7XG4gICAqXG4gICAqICAgICAgfVxuICAgKiAgICB9XG4gICAqIH1cbiAgICogQHBhcmFtIHtPYmplY3R9IG1hcHNcbiAgICogQHBhcmFtIHtTdHJpbmcgfCBEYXRlfSBtYXBTdGFydEF0XG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgbWFwc1RvVHJlZShtYXBzLCBtYXBTdGFydEF0KSB7XG4gICAgaWYgKCEoaXNTdHJpbmcobWFwcy5hdmFpbGFiaWxpdHkpIHx8XG4gICAgICBpc1N0cmluZyhtYXBzLm5pZ2h0bHlfcmF0ZXMpIHx8XG4gICAgICBpc1N0cmluZyhtYXBzLm1pbmltdW1fc3RheXMpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgYXZhaWwgID0gbWFwcy5hdmFpbGFiaWxpdHkuc3BsaXQoJycpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBjb25zdCByYXRlcyAgPSBtYXBzLm5pZ2h0bHlfcmF0ZXMuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgY29uc3QgbWluTWFwID0gbWFwcy5taW5pbXVtX3N0YXlzLnNwbGl0KCcsJykubWFwKHBhcnNlRmxvYXQpO1xuICAgIGNvbnN0IGRhdGUgICA9IG5ldyBEYXRlKG1hcFN0YXJ0QXQpO1xuXG4gICAgbGV0IHllYXIgICAgID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCAgICA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgZGF5U2hpZnQgPSBkYXRlLmdldERhdGUoKTtcbiAgICBsZXQgZGF5ICAgICAgPSAxO1xuXG4gICAgLy8gdHJpY2sgdG8gYWRkIGV4dHJhIHVuYXZhaWxhYmxlIGRhdGUgZm9yIHByb3BlciBjYWxjdWxhdGlvbnMgb2YgY2hlY2stb3V0IGRhdGVzXG5cbiAgICBpZiAoYXZhaWxbYXZhaWwubGVuZ3RoIC0gMV0gPT09IDApIHtcbiAgICAgIGF2YWlsLnB1c2goMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsLnJlZHVjZSgoY3Vyciwgc3RhdGUsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aCAgICAgICAgICAgPSBtb250aExlbmd0aCh5ZWFyLCBtb250aCk7XG4gICAgICBjb25zdCB0cmVlICAgICAgICAgICAgID0gY3VycjtcbiAgICAgIGNvbnN0IG1pblN0YXkgICAgICAgICAgPSBtaW5NYXBbaW5kZXhdO1xuICAgICAgY29uc3QgcmF0ZSAgICAgICAgICAgICA9IHJhdGVzW2luZGV4XTtcbiAgICAgIGNvbnN0IGlzQXZhaWxhYmxlICAgICAgPSBzdGF0ZSA9PT0gMDtcbiAgICAgIGNvbnN0IHByZXZBdmFpbGFibGUgICAgPSBhcnJbaW5kZXggLSAxXSA9PT0gMDtcbiAgICAgIGNvbnN0IGlzTW9ybmluZ0Jsb2NrZWQgPSAoaXNBdmFpbGFibGUgJiYgIXByZXZBdmFpbGFibGUpO1xuXG4gICAgICBpZiAoIXRyZWVbeWVhcl0pIHtcbiAgICAgICAgdHJlZVt5ZWFyXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyZWVbeWVhcl1bbW9udGhdKSB7XG4gICAgICAgIHRyZWVbeWVhcl1bbW9udGhdID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlTaGlmdCkge1xuICAgICAgICBkYXkgICAgICA9IGRheVNoaWZ0O1xuICAgICAgICBkYXlTaGlmdCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIG1pblN0YXkgPiBhdmFpbGFibGUgZGF5cyBpbiBmdXR1cmVcbiAgICAgIC8vIGNvbnNpZGVyIGN1cnJlbnQgZGF5IGFzIHVuYXZhaWxhYmxlIGFzIHdlbGxcbiAgICAgIC8vIGlmIChpc0F2YWlsYWJsZSAmJiBtaW5TdGF5ID4gMSkge1xuICAgICAgLy8gICBsZXQgZGF5c0F2YWlsYWJsZSA9IDE7XG4gICAgICAvLyAgIGxldCBpICAgICAgICAgICAgID0gaW5kZXggKyAxO1xuICAgICAgLy8gICB3aGlsZSAoYXJyW2ldID09PSAwKSB7XG4gICAgICAvLyAgICAgZGF5c0F2YWlsYWJsZSArPSAxO1xuICAgICAgLy8gICAgIGkgKz0gMTtcbiAgICAgIC8vICAgfVxuICAgICAgLy9cbiAgICAgIC8vICAgaWYgKG1pblN0YXkgPiBkYXlzQXZhaWxhYmxlKSB7XG4gICAgICAvLyAgICAgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICB0cmVlW3llYXJdW21vbnRoXVtkYXldID0ge1xuICAgICAgICByYXRlLFxuICAgICAgICBtaW5TdGF5LFxuICAgICAgICBpc0F2YWlsYWJsZSxcbiAgICAgICAgaXNNb3JuaW5nQmxvY2tlZCxcbiAgICAgICAgaXNPdXRBdmFpbGFibGU6ICghaXNNb3JuaW5nQmxvY2tlZCAmJiBpc0F2YWlsYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghaXNBdmFpbGFibGUgJiYgcHJldkF2YWlsYWJsZSA9PT0gdHJ1ZSksXG4gICAgICB9O1xuXG4gICAgICBpZiAoZGF5IDwgbGVuZ3RoKSB7XG4gICAgICAgIGRheSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vbnRoID4gMTApIHtcbiAgICAgICAgICBtb250aCA9IDA7XG4gICAgICAgICAgeWVhciArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vbnRoICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZGF5ID0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZ2V0RGF5UHJvcGVydHkoeWVhciwgbW9udGgsIGRheSwgcHJvcGVydHkpIHtcbiAgICBsZXQgcHJvcDtcblxuICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvcCA9IHRoaXMubWFwW3llYXJdW21vbnRoXVtkYXldW3Byb3BlcnR5XTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgaXNEYXlEaXNhYmxlZCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgcmV0dXJuICF0aGlzLmdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXksICdpc0F2YWlsYWJsZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jYWxlbmRhci10cmVlLmpzIiwiLyogZ2xvYmFsIFZFUlNJT04sIE5vZGUsIGRvY3VtZW50LCByZXF1aXJlICovXG5pbXBvcnQge1xuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGlzQXJyYXksIGlzT2JqZWN0LCBFbWl0dGVyLFxuICBtZXJnZSwgZWxlbWVudEZyb21TdHJpbmcsIHRyYXZlcnNlVG9QYXJlbnRXaXRoQXR0ciwgZGVzdHJveUVsZW1lbnQsIG1vbnRoTGVuZ3RoLCBpcywgaXNGdW5jdGlvbixcbiAgaXNOdW1lcmljLCB0cmF2ZXJzZU9iaiwgYWpheCwgaXNJbnNpZGUsXG59IGZyb20gJ3dpZGdldC11dGlscyc7XG5cbmltcG9ydCBEcm9wIGZyb20gJ3RldGhlci1kcm9wJztcblxuaW1wb3J0ICogYXMgdHBscyBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgQ2FsZW5kYXJUcmVlIGZyb20gJy4vY2FsZW5kYXItdHJlZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBsb2NhbGVzIGZyb20gJy4vbG9jYWxlcyc7XG5pbXBvcnQgeyByZXNldCB9IGZyb20gJy4vc3R5bGVzL3Jlc2V0LnNjc3MnO1xuXG5pbXBvcnQge1xuICBjYWxlbmRhciwgY2h1bmt5LCBoaWdobGlnaHRlZCwgaW52YWxpZCxcbiAgc2VsZWN0ZWQsIGFjdGlvbnNFbmFibGVkLCBib2R5LCB0YWJsZUhlYWRlciwgY2FwdGlvbiwgc2VsZWN0ZWRTdGFydCwgc2VsZWN0ZWRFbmQsXG4gIHJldmVyc2VkLCBkaXJlY3QsIHNlbGVjdGluZ1JldmVyc2VkLCBzZWxlY3RpbmdEaXJlY3QsIGRyb3BCYXNpYywgZm9jdXMsXG59IGZyb20gJy4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnO1xuXG5jb25zdCB7IGRvY3VtZW50RWxlbWVudDogeyBsYW5nIH0gfSA9IGRvY3VtZW50O1xuY29uc3QgZm9ybWF0RGF0ZSAgICAgICAgICAgICAgICAgICAgPSAoZm9ybWF0LCB5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gIGZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMTApIHtcbiAgICAgIHJldHVybiBgMCR7bnVtYmVyfWA7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0XG4gICAgLnJlcGxhY2UoJ2RkJywgcGFkKGRheSkpXG4gICAgLnJlcGxhY2UoJ21tJywgcGFkKG1vbnRoICsgMSkpXG4gICAgLnJlcGxhY2UoJ3l5eXknLCB5ZWFyKTtcbn07XG5cbmNvbnN0IGRhdGVUb0lzbyA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gIGZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMTApIHtcbiAgICAgIHJldHVybiBgMCR7bnVtYmVyfWA7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUoYCR7eWVhcn0tJHtwYWQobW9udGggKyAxKX0tJHtwYWQoZGF5KX1gKTtcbn07XG5cbmNvbnN0IGlzTGF0ZXIgPSAoc3RhcnQsIGVuZCkgPT4gZGF0ZVRvSXNvKC4uLnN0YXJ0KSA8IGRhdGVUb0lzbyguLi5lbmQpO1xuXG5jb25zdCB2YWxpZGF0aW9uT2ZSYW5nZSA9IChjZWxsLCBpbmRleCwgcmFuZ2UpID0+IHtcbiAgaWYgKGluZGV4ID09PSByYW5nZS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWF2YWlsYWJsZS1vdXQnKSAhPT0gJyc7XG4gIH1cbiAgcmV0dXJuIGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc2FibGVkJykgPT09ICcnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Iob3B0cywgbWFwcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lICAgID0gJ0Jvb2tpbmdTeW5jIENhbGVuZGFyIFdpZGdldCc7XG4gICAgdGhpcy5WRVJTSU9OID0gVkVSU0lPTjtcblxuICAgIGlmIChpc09iamVjdChvcHRzKSkge1xuICAgICAgaWYgKCFvcHRzLmVsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2VsIG11c3QgYmUgSFRNTCBlbGVtZW50Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZmlnRGF0YXNldCA9IG1lcmdlKGNvbmZpZywgb3B0cy5lbC5kYXRhc2V0KTtcbiAgICAgIHRoaXMub3B0cyAgICAgICAgICAgPSBtZXJnZShjb25maWdEYXRhc2V0LCBvcHRzKTtcblxuICAgICAgdGhpcy5vcHRzID0gdHJhdmVyc2VPYmoodGhpcy5vcHRzLCBhID0+IGEsIChiKSA9PiB7XG4gICAgICAgIGlmIChiID09PSAndHJ1ZScgfHwgYiA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJldHVybiAoYiA9PT0gJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1lcmljKGIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24pIHtcbiAgICAgICAgdGhpcy5pbml0Q2FsZW5kYXJEcm9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsID0gb3B0cy5lbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRzLmxhbmcgPSBDYWxlbmRhci53aWRnZXRMYW5nKHRoaXMub3B0cy5sYW5nLCBsYW5nKTtcbiAgICAgIHRoaXMubG9jYWxlICAgID0gbG9jYWxlc1t0aGlzLm9wdHMubGFuZyB8fCAnZW4nXTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbSAgID0ge307XG4gICAgdGhpcy5jVHJlZSA9IG5ldyBDYWxlbmRhclRyZWUodmFsaWRhdGlvbk9mUmFuZ2UsIHt9KTtcblxuICAgIGlmIChpc09iamVjdChtYXBzKSkge1xuICAgICAgdGhpcy5jVHJlZS5hZGRNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSB8fCB0aGlzLm9wdHMuY3VyckRhdGUpO1xuICAgIH1cblxuICAgIC8vIHNlbGVjdGlvbiBhbmQgaGlnaGxpZ2h0c1xuICAgIHRoaXMuaXNTZWxlY3RpbmcgICAgICAgPSBmYWxzZTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkQm91bmRzID0gW107XG4gICAgdGhpcy5oYXNWYWxpZFJhbmdlICAgICA9IHRydWU7XG5cbiAgICAvLyB1c2VyIHNlbGVjdHMgZW5kIGRhdGUgZmlyc3RcbiAgICB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPSB0aGlzLm9wdHMuaXNSZXZlcnNlU2VsZWN0YWJsZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgY2FsZW5kYXIsIHJlc2V0KTtcblxuICAgIGlmICh0aGlzLm9wdHMuc2hvd1JhdGVzIHx8IHRoaXMub3B0cy5zaG93TWluU3RheSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgY2h1bmt5KTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbS5tb250aHNXcmFwcGVyID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0cGxzLm1haW4pKTtcbiAgICB0aGlzLmRvbS5mb3J3YXJkICAgICAgID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0cGxzLmZvcndhcmQpKTtcbiAgICB0aGlzLmRvbS5iYWNrICAgICAgICAgID0gdGhpcy5lbC5hcHBlbmRDaGlsZChlbGVtZW50RnJvbVN0cmluZyh0cGxzLmJhY2spKTtcbiAgICB0aGlzLnJlbmRlck1vbnRocyh0aGlzLm9wdHMueWVhclN0YXJ0LCB0aGlzLm9wdHMubW9udGhTdGFydCk7XG5cbiAgICB0aGlzLmFkZEJ0bnNFdmVudHMoKTtcbiAgICB0aGlzLmVtaXQoJ2luaXQnKTtcbiAgfVxuXG4gIGNoYW5nZVNlbGVjdGlvbk9yZGVyKGlzUmV2ZXJzZSkge1xuICAgIGlmICgoaXNSZXZlcnNlICE9PSB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUpICYmICF0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLmlzUmV2ZXJzZVNlbGVjdGFibGUgPSBpc1JldmVyc2U7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMueWVhclN0YXJ0LCB0aGlzLm1vbnRoU3RhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1vbnRocyh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQpIHtcbiAgICAvLyBjb25zdHJ1Y3QgZG9tIHRyZWVcbiAgICBjb25zdCB7XG4gICAgICAgICAgICB0cmVlLCB5ZWFyRW5kLCBtb250aEVuZCwgbW9udGhzLFxuICAgICAgICAgIH0gPSB0aGlzLmNyZWF0ZVRyZWUoeWVhclN0YXJ0LCBtb250aFN0YXJ0LCB0aGlzLm9wdHMuZGlzcGxheU1vbnRocyk7XG5cbiAgICB0aGlzLmNUcmVlLmFkZFRyZWUodHJlZSk7XG5cbiAgICB0aGlzLm1vbnRoU3RhcnQgPSBtb250aFN0YXJ0O1xuICAgIHRoaXMueWVhclN0YXJ0ICA9IHllYXJTdGFydDtcblxuICAgIHRoaXMubW9udGhFbmQgPSBtb250aEVuZDtcbiAgICB0aGlzLnllYXJFbmQgID0geWVhckVuZDtcblxuICAgIHRoaXMucmVjb3ZlclNlbGVjdGlvbnMoKTtcblxuICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID8gcmV2ZXJzZWQgOiBkaXJlY3QpO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlID8gZGlyZWN0IDogcmV2ZXJzZWQpO1xuICAgIH1cblxuICAgIHRoaXMuZG9tLm1vbnRocyA9IG1vbnRocztcbiAgICB0aGlzLmRvbS5tb250aHMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgdGhpcy5kb20ubW9udGhzV3JhcHBlci5hcHBlbmRDaGlsZChtKTtcbiAgICAgIGlmICh0aGlzLm9wdHMuc2VsZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmFkZE1vbnRoRXZlbnRzKG0pO1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCBhY3Rpb25zRW5hYmxlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpc2FibGVCYWNrQnRuKCk7XG4gIH1cblxuICByZWNvdmVyU2VsZWN0aW9ucygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgdGhpcy5zZWxlY3RTdGFydCh0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLmNUcmVlLnNlbGVjdERheSguLi50aGlzLnNlbGVjdGlvblN0YXJ0KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICB0aGlzLnNlbGVjdEVuZCh0aGlzLnNlbGVjdGlvbkVuZCwgdGhpcy5jVHJlZS5zZWxlY3REYXkoLi4udGhpcy5zZWxlY3Rpb25FbmQpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKC4uLnRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSh0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZUJhY2tCdG4oKSB7XG4gICAgaWYgKHRoaXMub3B0cy5pc0JhY2tEaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc3RhcnREYXRlICAgICAgICA9IGRhdGVUb0lzbyhcbiAgICAgICAgdGhpcy55ZWFyU3RhcnQsIHRoaXMubW9udGhTdGFydCwgMVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGN1cnIgICAgICAgICAgICAgPSBkYXRlVG9Jc28oXG4gICAgICAgIHRoaXMub3B0cy5jdXJyRGF0ZS5nZXRGdWxsWWVhcigpLCB0aGlzLm9wdHMuY3VyckRhdGUuZ2V0TW9udGgoKSwgMVxuICAgICAgKTtcbiAgICAgIHRoaXMuZG9tLmJhY2suZGlzYWJsZWQgPSBzdGFydERhdGUgPD0gY3VycjtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5sb2FkZXJFbCkge1xuICAgICAgdGhpcy5sb2FkZXJFbCA9IHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZyb21TdHJpbmcodHBscy5sb2FkaW5nKSk7XG4gICAgICB0aGlzLmVtaXQoJ2xvYWRpbmctc3RhcnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3Ryb3lFbGVtZW50KHRoaXMubG9hZGVyRWwpO1xuICAgICAgdGhpcy5sb2FkZXJFbCA9IG51bGw7XG4gICAgICB0aGlzLmVtaXQoJ2xvYWRpbmctZW5kZWQnKTtcbiAgICB9XG4gIH1cblxuICBhZGRNYXBzKG1hcHMpIHtcbiAgICB0aGlzLmNUcmVlLnJlcGxhY2VNYXBzKG1hcHMsIG1hcHMuc3RhcnRfZGF0ZSk7XG4gICAgdGhpcy5kZXN0cm95TW9udGhzKCk7XG4gICAgdGhpcy5yZW5kZXJNb250aHMoXG4gICAgICB0aGlzLm9wdHMueWVhclN0YXJ0IHx8IHRoaXMueWVhclN0YXJ0LFxuICAgICAgdGhpcy5vcHRzLm1vbnRoU3RhcnQgfHwgdGhpcy5tb250aFN0YXJ0XG4gICAgKTtcbiAgfVxuXG4gIGFkZEJ0bnNFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uZm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lNb250aHMoKTtcbiAgICAgIHRoaXMucmVuZGVyTW9udGhzKHRoaXMueWVhckVuZCwgdGhpcy5tb250aEVuZCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRvbS5iYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveU1vbnRocygpO1xuICAgICAgbGV0IG1vbnRoVG9SZW5kZXIgPSB0aGlzLm1vbnRoU3RhcnQgLSB0aGlzLm9wdHMuZGlzcGxheU1vbnRocztcbiAgICAgIGxldCB5ZWFyVG9SZW5kZXIgID0gdGhpcy55ZWFyU3RhcnQ7XG5cbiAgICAgIGlmIChtb250aFRvUmVuZGVyIDwgMCkge1xuICAgICAgICBtb250aFRvUmVuZGVyICs9IDEyO1xuICAgICAgICB5ZWFyVG9SZW5kZXIgLT0gMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJNb250aHMoeWVhclRvUmVuZGVyLCBtb250aFRvUmVuZGVyKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1vbnRoRXZlbnRzKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaXNFbmRGaXJzdCA9IHRoaXMuaXNSZXZlcnNlU2VsZWN0YWJsZTtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGxldCBjZWxsO1xuXG4gICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAoe1xuICAgICAgICAgIHZhbHVlLCBwYXJlbnQ6IGNlbGwsXG4gICAgICAgIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsIGlzRW5kRmlyc3QgPyAnZGF0YS1lbmFibGVkJyA6ICdkYXRhLWF2YWlsYWJsZS1vdXQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoe1xuICAgICAgICAgIHZhbHVlLCBwYXJlbnQ6IGNlbGwsXG4gICAgICAgIH0gPSB0cmF2ZXJzZVRvUGFyZW50V2l0aEF0dHIoZS50YXJnZXQsIGlzRW5kRmlyc3QgPyAnZGF0YS1hdmFpbGFibGUtb3V0JyA6ICdkYXRhLWVuYWJsZWQnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpcyh2YWx1ZSkgJiYgY2VsbCkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgPSBbZWwueWVhciwgZWwubW9udGgsIHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyksIDEwKV07XG5cbiAgICAgICAgLy8gZm9yIHNpbXBsaWNpdHkganVzdCByZXNldCBzZWxlY3Rpb24gd2hlbiB1c2VyIGludGVyYWN0cyBhZ2FpblxuICAgICAgICBpZiAoIXRoaXMuaXNTZWxlY3RpbmcgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VuZEZpcnN0KSB7XG4gICAgICAgICAgdGhpcy5lbmREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZpcnN0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24gJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZWxlY3Rpb24oaXNFbmRGaXJzdCwgZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHBhcmVudDogY2VsbCB9ID0gdHJhdmVyc2VUb1BhcmVudFdpdGhBdHRyKGUudGFyZ2V0LCAnZGF0YS12YWx1ZScpO1xuXG4gICAgICBpZiAoaXModmFsdWUpICYmIGNlbGwpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IFtlbC55ZWFyLCBlbC5tb250aCwgcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSwgMTApXTtcblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGluZykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc1JldmVyc2VTZWxlY3RhYmxlICYmIHRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hMaWdodFJhbmdlKGN1cnJlbnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRSYW5nZSh0aGlzLnNlbGVjdGlvblN0YXJ0LCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsLmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCImXCJdIH1dICovXG4gICAgICAvLyBzaW11bGF0ZSAnbW91c2VsZWF2ZSdcbiAgICAgIGlmICghZS5yZWxhdGVkVGFyZ2V0IHx8XG4gICAgICAgIChlLnJlbGF0ZWRUYXJnZXQgIT09IGVsLmJvZHkgJiYgIShlbC5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkgJlxuICAgICAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNMYXRlcih0aGlzLnNlbGVjdGlvblN0YXJ0LCBkYXRlVmFsdWUpKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzVmFsaWRSYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdEVuZEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc2VsZWN0aW5nRGlyZWN0KTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIH07XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmbik7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHNlbGVjdGluZ0RpcmVjdCk7XG4gICAgICB0aGlzLmlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0U3RhcnRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB9XG4gIH1cblxuICBlbmREYXRlRmlyc3RBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RpbmcgJiYgaXNMYXRlcihkYXRlVmFsdWUsIHRoaXMuc2VsZWN0aW9uRW5kKSkge1xuICAgICAgaWYgKCF0aGlzLmhhc1ZhbGlkUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RTdGFydEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZm4pO1xuICAgICAgfTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZuKTtcbiAgICAgIHRoaXMuaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgc2VsZWN0aW5nUmV2ZXJzZWQpO1xuICAgICAgdGhpcy5pc1NlbGVjdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEVuZEFjdGlvbihkYXRlVmFsdWUsIGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFN0YXJ0QWN0aW9uKGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0U3RhcnQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ2VuZCcpO1xuICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLXN0YXJ0JywgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSksIGRhdGVWYWx1ZSk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uU2VsZWN0U3RhcnQpKSB7XG4gICAgICB0aGlzLm9wdHMub25TZWxlY3RTdGFydChkYXRlVG9Jc28oLi4uZGF0ZVZhbHVlKSwgZGF0ZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RFbmRBY3Rpb24oZGF0ZVZhbHVlLCBjZWxsKSB7XG4gICAgdGhpcy5zZWxlY3RFbmQoZGF0ZVZhbHVlLCBjZWxsKTtcbiAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ3N0YXJ0Jyk7XG4gICAgdGhpcy5lbWl0KCdzZWxlY3Rpb24tZW5kJywgZGF0ZVRvSXNvKC4uLmRhdGVWYWx1ZSksIGRhdGVWYWx1ZSk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uU2VsZWN0RW5kKSkge1xuICAgICAgdGhpcy5vcHRzLm9uU2VsZWN0RW5kKGRhdGVUb0lzbyguLi5kYXRlVmFsdWUpLCBkYXRlVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodCgpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZEJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLnNlbGVjdFJhbmdlKC4uLnRoaXMuaGlnaGxpZ2h0ZWRCb3VuZHMpO1xuICAgICAgcmFuZ2UubWFwKGEgPT4gcmVtb3ZlQ2xhc3MoYSwgaGlnaGxpZ2h0ZWQsIGludmFsaWQpKTtcblxuICAgICAgdGhpcy5oYXNWYWxpZFJhbmdlICAgICA9IHRydWU7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkQm91bmRzID0gW107XG4gICAgfVxuICB9XG5cbiAgaGlnaExpZ2h0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IHsgcmFuZ2UsIGlzVmFsaWQgfSA9IHRoaXMuc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgbGV0IGhhc1ZhbGlkUmFuZ2UgICAgICAgID0gaXNWYWxpZDtcblxuICAgIGlmIChpc0FycmF5KHJhbmdlKSkge1xuICAgICAgLy8gaWYgc2VsZWN0ZWQgcmFuZ2UgbGVzcyB0aGFuIG1pbmltdW0gc3RheSBhdCBzdGFydFxuICAgICAgaWYgKHJhbmdlLmxlbmd0aCA8PSB0aGlzLmNUcmVlLmdldERheVByb3BlcnR5KC4uLnN0YXJ0LCAnbWluU3RheScpKSB7XG4gICAgICAgIGhhc1ZhbGlkUmFuZ2UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmFuZ2UubWFwKChhKSA9PiB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGEsIGhpZ2hsaWdodGVkLCBpbnZhbGlkKTtcbiAgICAgICAgYWRkQ2xhc3MoYSwgaGFzVmFsaWRSYW5nZSA/IGhpZ2hsaWdodGVkIDogaW52YWxpZCk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaGFzVmFsaWRSYW5nZSAgICAgPSBoYXNWYWxpZFJhbmdlO1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEJvdW5kcyA9IFtzdGFydCwgZW5kXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzVmFsaWRSYW5nZTtcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgdGhpcy5pc1NlbGVjdGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbWl0KCdjbGVhci1zZWxlY3Rpb24nLCB0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLm9uQ2xlYXJTZWxlY3Rpb24pKSB7XG4gICAgICB0aGlzLm9wdHMub25DbGVhclNlbGVjdGlvbih0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvbkVuZCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb25FbmQgICA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5jZWxsQSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jZWxsQSwgc2VsZWN0ZWQsIHNlbGVjdGVkU3RhcnQpO1xuICAgICAgdGhpcy5jZWxsQSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2VsbEIpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY2VsbEIsIHNlbGVjdGVkLCBzZWxlY3RlZEVuZCk7XG4gICAgICB0aGlzLmNlbGxCID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmlzRHJvcERvd24gJiYgdGhpcy5vcHRzLmVsU3RhcnRBdCAmJiB0aGlzLm9wdHMuZWxFbmRBdCkge1xuICAgICAgdGhpcy5vcHRzLmVsU3RhcnRBdC52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9wdHMuZWxFbmRBdC52YWx1ZSAgID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbGVjdFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoaXNMYXRlcihzdGFydCwgZW5kKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY1RyZWUuc2VsZWN0UmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByYW5nZTogICBudWxsLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdFN0YXJ0KGRhdGVWYWx1ZSwgY2VsbCkge1xuICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBkYXRlVmFsdWU7XG5cbiAgICBpZiAodGhpcy5jZWxsQSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jZWxsQSwgc2VsZWN0ZWQsIHNlbGVjdGVkU3RhcnQpO1xuICAgIH1cblxuICAgIGlmIChjZWxsKSB7XG4gICAgICBhZGRDbGFzcyhjZWxsLCBzZWxlY3RlZCwgc2VsZWN0ZWRTdGFydCk7XG4gICAgICB0aGlzLmNlbGxBID0gY2VsbDtcbiAgICB9XG4gICAgdGhpcy52YWx1ZVRvSW5wdXQoJ3N0YXJ0JywgZGF0ZVZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdEVuZChkYXRlVmFsdWUsIGNlbGwpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IGRhdGVWYWx1ZTtcblxuICAgIGlmICh0aGlzLmNlbGxCKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmNlbGxCLCBzZWxlY3RlZCwgc2VsZWN0ZWRFbmQpO1xuICAgIH1cblxuICAgIGlmIChjZWxsKSB7XG4gICAgICBhZGRDbGFzcyhjZWxsLCBzZWxlY3RlZCwgc2VsZWN0ZWRFbmQpO1xuICAgICAgdGhpcy5jZWxsQiA9IGNlbGw7XG4gICAgfVxuICAgIHRoaXMudmFsdWVUb0lucHV0KCdlbmQnLCBkYXRlVmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlVHJlZSh5ZWFyU3RhcnQsIG1vbnRoU3RhcnQsIHRpbWVzKSB7XG4gICAgY29uc3QgbW9udGhzID0gW107XG4gICAgY29uc3QgdHJlZSAgID0ge307XG4gICAgbGV0IG1vbnRoRW5kID0gbW9udGhTdGFydDtcbiAgICBsZXQgeWVhckVuZCAgPSB5ZWFyU3RhcnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG1Eb20gPSB0aGlzLmRvbU1vbnRoKHllYXJFbmQsIG1vbnRoRW5kKTtcblxuICAgICAgbW9udGhzLnB1c2gobURvbSk7XG5cbiAgICAgIGlmICghdHJlZVt5ZWFyRW5kXSkge1xuICAgICAgICB0cmVlW3llYXJFbmRdID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJlZVt5ZWFyRW5kXVttb250aEVuZF0pIHtcbiAgICAgICAgdHJlZVt5ZWFyRW5kXVttb250aEVuZF0gPSBtRG9tLmRheUVsZW1lbnRzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9udGhFbmQgPiAxMCkge1xuICAgICAgICBtb250aEVuZCA9IDA7XG4gICAgICAgIHllYXJFbmQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vbnRoRW5kICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWUsXG4gICAgICB5ZWFyRW5kLFxuICAgICAgbW9udGhFbmQsXG4gICAgICBtb250aHMsXG4gICAgfTtcbiAgfVxuXG4gIGRvbU1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgY29uc3QgbW9udGhEb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZWxlbWVudEZyb21TdHJpbmcodHBscy5tb250aCk7XG4gICAgbW9udGhEb20ucXVlcnlTZWxlY3RvcihgLiR7dGFibGVIZWFkZXJ9IHRyYCkuaW5uZXJIVE1MID0gdGhpcy5oZWFkZXJUcGxTdHJpbmcoKTtcbiAgICBtb250aERvbS5xdWVyeVNlbGVjdG9yKGAuJHtjYXB0aW9ufWApLmlubmVySFRNTCAgICAgICAgPSBgJHt0aGlzLmxvY2FsZS5tb250aHNbbW9udGhdfSAke3llYXJ9YDtcblxuICAgIG1vbnRoRG9tLmJvZHkgICAgICAgICAgID0gbW9udGhEb20ucXVlcnlTZWxlY3RvcihgLiR7Ym9keX1gKTtcbiAgICBtb250aERvbS5ib2R5LmlubmVySFRNTCA9IHRoaXMuZGF5c1RwbFN0cmluZyh5ZWFyLCBtb250aCk7XG5cbiAgICBtb250aERvbS5tb250aCAgICAgICA9IG1vbnRoO1xuICAgIG1vbnRoRG9tLnllYXIgICAgICAgID0geWVhcjtcbiAgICBtb250aERvbS5kYXlFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobW9udGhEb20ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWVdJykpO1xuXG4gICAgcmV0dXJuIG1vbnRoRG9tO1xuICB9XG5cbiAgaGVhZGVyVHBsU3RyaW5nKCkge1xuICAgIC8vIGp1c3QgdG8gbWFrZSBsaWZlIGVhc2llciB3aXRoIHN0YXJ0IG9mIHRoZSB3ZWVrIGNhbGN1bGF0aW9uXG4gICAgY29uc3QgaGVhZGVyICAgICAgICAgICAgICAgICA9IFtdO1xuICAgIGNvbnN0IHdlZWtkYXlzTGFiZWxzRXh0ZW5kZWQgPSB0aGlzLmxvY2FsZS53ZWVrZGF5c0xhYmVscy5jb25jYXQodGhpcy5sb2NhbGUud2Vla2RheXNMYWJlbHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdHMuZGF5c1BlcldlZWs7IGkgKz0gMSkge1xuICAgICAgaGVhZGVyLnB1c2godHBscy53ZWVrRGF5TGFiZWwod2Vla2RheXNMYWJlbHNFeHRlbmRlZFtpICsgdGhpcy5vcHRzLnN0YXJ0T2ZXZWVrXSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyLmpvaW4oJycpO1xuICB9XG5cbiAgZGF5c1RwbFN0cmluZyh5ZWFyLCBtb250aCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXRVVENEYXkoKTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCAgPSBtb250aExlbmd0aCh5ZWFyLCBtb250aCk7XG4gICAgY29uc3Qgcm93VGVtcGxhdGUgID0gdHBscy53ZWVrUm93O1xuICAgIGNvbnN0IG1vbnRoVHBsICAgICA9IFtdO1xuICAgIGNvbnN0IHdlZWtTaGlmdCAgICA9ICh0aGlzLm9wdHMuZGF5c1BlcldlZWsgLSB0aGlzLm9wdHMuc3RhcnRPZldlZWspO1xuXG4gICAgbGV0IHJvd3MgICAgICAgICAgICAgICA9IDU7XG4gICAgbGV0IHdlZWtTaGlmdENvcnJlY3RlZCA9IHN0YXJ0T2ZNb250aCArIHdlZWtTaGlmdDtcbiAgICBsZXQgZGF5Q291bnRlciAgICAgICAgID0gMDtcbiAgICBsZXQgZGF5T2ZNb250aCAgICAgICAgID0gMTtcblxuICAgIC8vIGRvbid0IHJlbmRlciBmdWxsIGVtcHR5IHdlZWtcbiAgICBpZiAod2Vla1NoaWZ0Q29ycmVjdGVkID49IHRoaXMub3B0cy5kYXlzUGVyV2Vlaykge1xuICAgICAgd2Vla1NoaWZ0Q29ycmVjdGVkIC09IHRoaXMub3B0cy5kYXlzUGVyV2VlaztcbiAgICB9XG5cbiAgICAvLyB0cnkgdG8gZmlndXJlIG91dCBpZiA1IHJvd3MgaXMgZW5vdWdoIGZvciB0aGUgbW9udGhcbiAgICBpZiAocm93cyAqIHRoaXMub3B0cy5kYXlzUGVyV2VlayA8IHdlZWtTaGlmdENvcnJlY3RlZCArIGRheXNJbk1vbnRoKSB7XG4gICAgICByb3dzID0gNjtcbiAgICB9XG5cbiAgICAvLyBmb3IgZWFjaCB3ZWVrICg1IG9yIDYpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHdlZWsgPSBbXTtcbiAgICAgIC8vIG9wZW4gdGFnIDx0cj5cbiAgICAgIHdlZWsucHVzaChyb3dUZW1wbGF0ZS5vcGVuKTtcblxuICAgICAgLy8gcHVzaCBkYXlzIGluIHdlZWtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHRzLmRheXNQZXJXZWVrOyBqICs9IDEpIHtcbiAgICAgICAgLy8gcHVzaGluZyBhY3R1YWwgZGF5cyAxLi4uZGF5c0luTW9udGhcbiAgICAgICAgaWYgKChkYXlDb3VudGVyID49IHdlZWtTaGlmdENvcnJlY3RlZCkgJiYgZGF5T2ZNb250aCA8PSBkYXlzSW5Nb250aCkge1xuICAgICAgICAgIGNvbnN0IHJhdGUgICAgPSB0aGlzLm9wdHMuc2hvd1JhdGVzID8gdGhpcy5jVHJlZS5nZXREYXlQcm9wZXJ0eSh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCwgJ3JhdGUnKSA6IG51bGw7XG4gICAgICAgICAgY29uc3QgbWluU3RheSA9IHRoaXMub3B0cy5zaG93TWluU3RheSA/IHRoaXMuY1RyZWUuZ2V0RGF5UHJvcGVydHkoeWVhciwgbW9udGgsIGRheU9mTW9udGgsICdtaW5TdGF5JykgOiBudWxsO1xuXG4gICAgICAgICAgbGV0IGlzRGlzYWJsZWQgICAgICA9IHRoaXMuY1RyZWUuaXNEYXlEaXNhYmxlZCh5ZWFyLCBtb250aCwgZGF5T2ZNb250aCk7XG4gICAgICAgICAgbGV0IGlzT3V0QXZhaWxhYmxlICA9IHRoaXMuY1RyZWUuZ2V0RGF5UHJvcGVydHkoeWVhciwgbW9udGgsIGRheU9mTW9udGgsICdpc091dEF2YWlsYWJsZScpO1xuICAgICAgICAgIGxldCBpc0Rpc2FibGVkU3RhcnQgPSB0aGlzLmNUcmVlLmdldERheVByb3BlcnR5KHllYXIsIG1vbnRoLCBkYXlPZk1vbnRoLCAnaXNNb3JuaW5nQmxvY2tlZCcpO1xuICAgICAgICAgIGNvbnN0IGNEYXRlICAgICAgICAgPSB0aGlzLm9wdHMuY3VyckRhdGU7XG5cbiAgICAgICAgICAvLyBpbiB0aGUgcGFzdCBhbnkgYXZhaWxhYmlsaXR5IGRvZXMgbm90IG1ha2Ugc2Vuc2VcbiAgICAgICAgICBpZiAoaXNMYXRlcihcbiAgICAgICAgICAgICAgW3llYXIsIG1vbnRoLCBkYXlPZk1vbnRoXSxcbiAgICAgICAgICAgICAgW2NEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGNEYXRlLmdldFVUQ01vbnRoKCksIGNEYXRlLmdldERhdGUoKV0pKSB7XG4gICAgICAgICAgICBpc0Rpc2FibGVkICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgaXNEaXNhYmxlZFN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaXNPdXRBdmFpbGFibGUgID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdlZWsucHVzaCh0cGxzLndlZWtEYXkoXG4gICAgICAgICAgICBkYXlPZk1vbnRoLCBpc0Rpc2FibGVkLCBpc0Rpc2FibGVkU3RhcnQsIGlzT3V0QXZhaWxhYmxlLFxuICAgICAgICAgICAgcmF0ZSwgbWluU3RheSwgdGhpcy5sb2NhbGUucmF0ZSwgdGhpcy5sb2NhbGUubWluU3RheVxuICAgICAgICAgICkpO1xuXG4gICAgICAgICAgZGF5T2ZNb250aCArPSAxO1xuICAgICAgICAgIC8vIHB1c2hpbmcgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgZGF5c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWsucHVzaCh0cGxzLndlZWtEYXlQbGFjZWhvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXlDb3VudGVyICs9IDE7XG4gICAgICB9XG4gICAgICAvLyBjbG9zZSB0YWcgPC90cj4gb2Ygd2Vla1xuICAgICAgd2Vlay5wdXNoKHJvd1RlbXBsYXRlLmNsb3NlKTtcbiAgICAgIC8vIHB1c2ggY29tcGxldGVkIHdlZWsgdG8gbW9udGggdGVtcGxhdGVcbiAgICAgIG1vbnRoVHBsLnB1c2god2Vlay5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbnRoVHBsLmpvaW4oJycpO1xuICB9XG5cbiAgZGVzdHJveU1vbnRocygpIHtcbiAgICB0aGlzLmRvbS5tb250aHMubWFwKG0gPT4gZGVzdHJveUVsZW1lbnQobSkpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gZGVzdHJveUVsZW1lbnQodGhpcy5lbCk7XG4gIH1cblxuICBsb2FkTWFwcyhpZCkge1xuICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuICAgIGNvbnN0IG9uU3VjY2VzcyA9IChyZW50YWwpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlTG9hZGluZygpO1xuICAgICAgaWYgKGlzQXJyYXkocmVudGFsLmRhdGEpICYmIHJlbnRhbC5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5hZGRNYXBzKHJlbnRhbC5kYXRhWzBdLmF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLm1hcHNMb2FkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignZXhwZWN0cyBqc29uLWFwaSBkYXRhIGZvcm1hdCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVMb2FkaW5nKCk7XG4gICAgICBjb25zb2xlLmVycm9yKCdTZXJ2ZXIgZXJyb3IgaGFwcGVuZWQnKTtcbiAgICB9O1xuXG4gICAgYWpheCh0aGlzLm9wdHMucmVudGFsVXJsKGlkKSwgb25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfVxuXG4gIGNvbXBsZXRlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuZW1pdCgnc2VsZWN0aW9uLWNvbXBsZXRlZCcsIHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMuc2VsZWN0aW9uRW5kKTtcbiAgICB0aGlzLmNsb3NlRHJvcChudWxsLCB0cnVlKTtcbiAgfVxuXG4gIGluaXRDYWxlbmRhckRyb3AoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRGcm9tU3RyaW5nKCc8ZGl2PjwvZGl2PicpO1xuICAgIHRoaXMuZWxUYXJnZXQgPSB0aGlzLm9wdHMuZWw7XG4gICAgdGhpcy5lbCAgICAgICA9IGVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgTXlEcm9wID0gRHJvcC5jcmVhdGVDb250ZXh0KHtcbiAgICAgIGNsYXNzUHJlZml4OiAnQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjYWxEcm9wID0gbmV3IE15RHJvcCh7XG4gICAgICBjb250ZW50OiAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgIHRhcmdldDogICAgICAgICAgICAgICAgICB0aGlzLmVsVGFyZ2V0LFxuICAgICAgY2xhc3NlczogICAgICAgICAgICAgICAgIGRyb3BCYXNpYyxcbiAgICAgIG9wZW5PbjogICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgdGFyZ2V0QXR0YWNobWVudDogICAgICAgICdib3R0b20gbGVmdCcsXG4gICAgICBjb25zdHJhaW5Ub1dpbmRvdzogICAgICAgZmFsc2UsXG4gICAgICBjb25zdHJhaW5Ub1Njcm9sbFBhcmVudDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKGlucHV0LCBpc1JldmVyc2VkKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoaW5wdXQpO1xuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3Rpb25PcmRlcihpc1JldmVyc2VkKTtcbiAgICAgIGlmICghY2FsRHJvcC5pc09wZW5lZCgpKSB7XG4gICAgICAgIGNhbERyb3Aub3BlbigpO1xuICAgICAgICBpZiAoIXRoaXMubWFwc0xvYWRlZCkge1xuICAgICAgICAgIHRoaXMubG9hZE1hcHModGhpcy5vcHRzLnJlbnRhbElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9wdHMuZWxTdGFydEF0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgb25Gb2N1cygnc3RhcnQnLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdHMuZWxFbmRBdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIG9uRm9jdXMoJ2VuZCcsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMub3B0cy5lbFJlc2V0KSB7XG4gICAgICB0aGlzLm9wdHMuZWxSZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbERyb3AgPSBjYWxEcm9wO1xuICB9XG5cbiAgdmFsdWVUb0lucHV0KGlucHV0LCBkYXRlVmFsdWUpIHtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLm9wdHMuZm9ybWF0RGF0ZTtcbiAgICBjb25zdCB2YWx1ZSAgPSBmb3JtYXREYXRlKGZvcm1hdCwgLi4uZGF0ZVZhbHVlKTtcblxuICAgIGlmIChpbnB1dCA9PT0gJ3N0YXJ0JyAmJiB0aGlzLm9wdHMuZWxTdGFydEF0KSB7XG4gICAgICB0aGlzLm9wdHMuZWxTdGFydEF0LnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gJ2VuZCcgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIHRoaXMub3B0cy5lbEVuZEF0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5wdXRGb2N1cyh0eXBlKSB7XG4gICAgaWYgKHRoaXMub3B0cy5lbFN0YXJ0QXQgJiYgdGhpcy5vcHRzLmVsRW5kQXQpIHtcbiAgICAgIGlmICh0eXBlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMub3B0cy5lbFN0YXJ0QXQsIGZvY3VzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsRW5kQXQsIGZvY3VzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnZW5kJykge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgZm9jdXMpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxTdGFydEF0LCBmb2N1cyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5vcHRzLmVsU3RhcnRBdCwgZm9jdXMpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLm9wdHMuZWxFbmRBdCwgZm9jdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcChlLCBmb3JjZSkge1xuICAgIGlmICghZm9yY2UgJiYgKGlzSW5zaWRlKGUudGFyZ2V0LCB0aGlzLmVsKSB8fCBpc0luc2lkZShlLnRhcmdldCwgdGhpcy5lbFRhcmdldCkpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN3aXRjaElucHV0Rm9jdXMoJ2FueScpO1xuICAgICAgdGhpcy5jYWxEcm9wLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHdpZGdldExhbmcoZWxMYW5nLCBkb2N1bWVudExhbmcpIHtcbiAgICBsZXQgbGFuZ0ZhbGxiYWNrID0gZWxMYW5nIHx8IGRvY3VtZW50TGFuZztcblxuICAgIGlmIChPYmplY3Qua2V5cyhsb2NhbGVzKS5pbmRleE9mKGxhbmdGYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3RoaXMgbGFuZ3VhZ2UgaXMgbm90IHN1cHBvcnRlZCB5ZXQnKTtcbiAgICAgIGxhbmdGYWxsYmFjayA9ICdlbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmdGYWxsYmFjaztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NhbGVuZGFyLmpzIiwiLyogZ2xvYmFsIE5PREVfRU5WLCBEYXRlICovXG5jb25zdCBjdXJyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogICAgICAgICAnQ2FsZW5kYXIgV2lkZ2V0JyxcbiAgYXBpSG9zdDogICAgICBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8vd3d3LmJvb2tpbmdzeW5jLmNvbScsXG4gIGFwaU5hbWVzcGFjZTogJy9hcGkvdjIvcHVibGljJyxcbiAgYXBpTWFwc1JvdXRlOiAnL21hcHMuanNvbj9yZW50YWxfaWQ9e3BhcmFtc30nLFxuXG4gIHJlbnRhbFVybChpZHMpIHtcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuYXBpTWFwc1JvdXRlLnJlcGxhY2UoJ3twYXJhbXN9JywgaWRzKTtcbiAgICByZXR1cm4gTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBgJHt0aGlzLmFwaUhvc3R9L3JlbnRhbGAgOiBgJHt0aGlzLmFwaUhvc3R9JHt0aGlzLmFwaU5hbWVzcGFjZX0ke3JvdXRlfWA7XG4gIH0sXG5cbiAgc3RhcnRPZldlZWs6ICAgICAgICAgMCwgLy8gMCBNbyAuLi4gNiBTdSwgYnkgSVNPXG4gIG1pblJhbmdlOiAgICAgICAgICAgIDEsIC8vIGNhbiBzZWxlY3Qgb25lIG5pZ2h0XG4gIG1vbnRoU3RhcnQ6ICAgICAgICAgIGN1cnJEYXRlLmdldFVUQ01vbnRoKCksIC8vIHN0YXJ0IHdpdGggY3VycmVudCBtb250aCBieSBkZWZhdWx0IE0gJzAuLi4xMidcbiAgeWVhclN0YXJ0OiAgICAgICAgICAgY3VyckRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgLy8gc3RhcnQgd2l0aCBjdXJyZW50IHllYXIgWVlZWVxuICBkYXlzUGVyV2VlazogICAgICAgICA3LCAvLyBGSVhNRSBzdXBwb3J0IGNhbGVuZGFyIHJlbmRlcmluZ1xuICBkaXNwbGF5TW9udGhzOiAgICAgICAyLFxuICBzZWxlY3RhYmxlOiAgICAgICAgICBmYWxzZSxcbiAgc2hvd1JhdGVzOiAgICAgICAgICAgZmFsc2UsXG4gIHNob3dNaW5TdGF5OiAgICAgICAgIGZhbHNlLFxuICBpc1JldmVyc2VTZWxlY3RhYmxlOiBmYWxzZSwgLy8gc2VsZWN0IGVuZCBkYXRlIGZpcnN0XG4gIGlzQmFja0Rpc2FibGVkOiAgICAgIHRydWUsXG4gIGlzRHJvcERvd246ICAgICAgICAgIGZhbHNlLFxuICBlbDogICAgICAgICAgICAgICAgICBudWxsLFxuICBlbFN0YXJ0QXQ6ICAgICAgICAgICBudWxsLFxuICBlbEVuZEF0OiAgICAgICAgICAgICBudWxsLFxuICBlbFJlc2V0OiAgICAgICAgICAgICBudWxsLFxuICBmb3JtYXREYXRlOiAgICAgICAgICAnZGQvbW0veXl5eScsXG4gIHJlbnRhbElkOiAgICAgICAgICAgIG51bGwsXG4gIGN1cnJEYXRlLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVuOiB7XG4gICAgd2Vla2RheXNMYWJlbHM6ICdNb19UdV9XZV9UaF9Gcl9TYV9TdScuc3BsaXQoJ18nKSxcbiAgICBtb250aHM6ICAgICAgICAgJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgcmF0ZTogICAgICAgICAgICcmZXVybzsnLFxuICAgIG1pblN0YXk6ICAgICAgICAnTWluJyxcbiAgfSxcbiAgZnI6IHtcbiAgICB3ZWVrZGF5c0xhYmVsczogJ0x1X01hX01lX0plX1ZlX1NhX0RpJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoczogICAgICAgICAnamFudmllcl9mw6l2cmllcl9tYXJzX2F2cmlsX21haV9qdWluX2p1aWxsZXRfYW/Du3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMOpY2VtYnJlJy5zcGxpdCgnXycpLFxuICAgIHJhdGU6ICAgICAgICAgICAnJmV1cm87JyxcbiAgICBtaW5TdGF5OiAgICAgICAgJ01pbi4nLFxuICB9LFxuICBkZToge1xuICAgIHdlZWtkYXlzTGFiZWxzOiAnTW9fRGlfTWlfRG9fRnJfU2FfU28nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzOiAgICAgICAgICdKYW51YXJfRmVicnVhcl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgICByYXRlOiAgICAgICAgICAgJyZldXJvOycsXG4gICAgbWluU3RheTogICAgICAgICdNaW4uJyxcbiAgfSxcbiAgc3Y6IHtcbiAgICB3ZWVrZGF5c0xhYmVsczogJ23DpV90aV9vbl90b19mcl9sw7Zfc8O2Jy5zcGxpdCgnXycpLFxuICAgIG1vbnRoczogICAgICAgICAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICByYXRlOiAgICAgICAgICAgJyZldXJvOycsXG4gICAgbWluU3RheTogICAgICAgICdNaW4uJyxcbiAgfSxcbiAgaXQ6IHtcbiAgICB3ZWVrZGF5c0xhYmVsczogJ0x1bl9NYXJfTWVyX0dpb19WZW5fU2FiX0RvbScuc3BsaXQoJ18nKSxcbiAgICBtb250aHM6ICAgICAgICAgJ2dlbm5haW9fZmViYnJhaW9fbWFyem9fYXByaWxlX21hZ2dpb19naXVnbm9fbHVnbGlvX2Fnb3N0b19zZXR0ZW1icmVfb3R0b2JyZV9ub3ZlbWJyZV9kaWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgICByYXRlOiAgICAgICAgICAgJyZldXJvOycsXG4gICAgbWluU3RheTogICAgICAgICdNaW4uJyxcbiAgfSxcbiAgZXM6IHtcbiAgICB3ZWVrZGF5c0xhYmVsczogJ2x1bi5fbWFyLl9tacOpLl9qdWUuX3ZpZS5fc8OhYi5fZG9tLicuc3BsaXQoJ18nKSxcbiAgICBtb250aHM6ICAgICAgICAgJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gICAgcmF0ZTogICAgICAgICAgICcmZXVybzsnLFxuICAgIG1pblN0YXk6ICAgICAgICAnTWluLicsXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2xvY2FsZXMuanMiLCJpbXBvcnQgcyBmcm9tICcuL3N0eWxlcy9jYWxlbmRhci5zY3NzJztcblxuY29uc3QgeyBkaXNhYmxlZCwgaW5mbywgaW5mb0V4dHJhLCBtb3JuaW5nRGlzYWJsZWQsIG5pZ2h0RGlzYWJsZWQsIGNudCB9ID0gcztcblxuZXhwb3J0IGNvbnN0IG1haW4gID0gYDxkaXYgY2xhc3M9XCIke3MubW9udGhzV3JhcHBlcn1cIj48L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgbW9udGggPSBgPGRpdiBjbGFzcz1cIiR7cy5tQ2VsbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiR7cy5tb250aH1cIiByb2xlPVwibW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCIke3MuY2FwdGlvbn1cIj48L2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cIiR7cy50YWJsZUhlYWRlcn1cIj48dHI+PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCIke3MuYm9keX1cIj48L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3Qgd2Vla0RheUxhYmVsID0gbGFiZWwgPT4gYDx0aCBjbGFzcz1cIiR7cy50aH1cIj4ke2xhYmVsfTwvdGg+YDtcblxuLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuZXhwb3J0IGNvbnN0IHdlZWtEYXkgPSAobGFiZWwsIGRpcywgZGlzU3RhcnQsIGlzT3V0QXZhaWxhYmxlLCByYXRlLCBtaW5TdGF5LCByYXRlVCwgbWluU3RheVQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgYDx0ZCAke2RpcyA/ICdkYXRhLWRpc2FibGVkJyA6ICdkYXRhLWVuYWJsZWQnfSAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXNPdXRBdmFpbGFibGUgPyAnZGF0YS1hdmFpbGFibGUtb3V0JyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cIiR7bGFiZWx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtzLmNlbGx9ICR7ZGlzID8gZGlzYWJsZWQgOiAnJ30ke2Rpc1N0YXJ0ID8gbW9ybmluZ0Rpc2FibGVkIDogJyd9ICR7ZGlzICYmIGlzT3V0QXZhaWxhYmxlID8gbmlnaHREaXNhYmxlZCA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y250fVwiIHJvbGU9XCJkYXktdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtyYXRlID8gJzxzcGFuIGNsYXNzPVwiJyArIGluZm8gKyAnXCI+JyArIHJhdGVUICsgcmF0ZSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAke21pblN0YXkgPyAnPHNwYW4gY2xhc3M9XCInICsgaW5mb0V4dHJhICsgJ1wiPicgKyBtaW5TdGF5VCArIG1pblN0YXkgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xuXG5leHBvcnQgY29uc3QgZm9yd2FyZCA9IGA8YnV0dG9uIGNsYXNzPVwiJHtzLmZvcndhcmR9XCIgcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02OTQuNCAyNDIuNGwyNDkuMSAyNDkuMWMxMSAxMSAxMSAyMSAwIDMyTDY5NC40IDc3Mi43Yy01IDUtMTAgNy0xNiA3cy0xMS0yLTE2LTdjLTExLTExLTExLTIxIDAtMzJsMjEwLjEtMjEwLjFINjcuMWMtMTMgMC0yMy0xMC0yMy0yM3MxMC0yMyAyMy0yM2g4MDUuNEw2NjIuNCAyNzQuNWMtMjEtMjEuMSAxMS01My4xIDMyLTMyLjF6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBiYWNrICAgID0gYDxidXR0b24gY2xhc3M9XCIke3MuYmFja31cIiByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMzNi4yIDI3NC41bC0yMTAuMSAyMTBoODA1LjRjMTMgMCAyMyAxMCAyMyAyM3MtMTAgMjMtMjMgMjNIMTI2LjFsMjEwLjEgMjEwLjFjMTEgMTEgMTEgMjEgMCAzMi01IDUtMTAgNy0xNiA3cy0xMS0yLTE2LTdsLTI0OS4xLTI0OWMtMTEtMTEtMTEtMjEgMC0zMmwyNDkuMS0yNDkuMWMyMS0yMS4xIDUzIDEwLjkgMzIgMzJ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCB3ZWVrRGF5UGxhY2Vob2xkZXIgPSAnPHRkPjwvdGQ+JztcblxuZXhwb3J0IGNvbnN0IHdlZWtSb3cgPSB7IG9wZW46ICc8dHI+JywgY2xvc2U6ICc8L3RyPicgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSBgPGRpdiBjbGFzcz1cIiR7cy5sb2FkaW5nTGF5ZXJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3MubG9hZGluZ31cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvdGVtcGxhdGVzLmpzIiwiLyohIHRldGhlci1kcm9wIDEuNC4xICovXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1widGV0aGVyXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgndGV0aGVyJykpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuRHJvcCA9IGZhY3Rvcnkocm9vdC5UZXRoZXIpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKFRldGhlcikge1xuXG4vKiBnbG9iYWwgVGV0aGVyICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVsncmV0dXJuJ10pIF9pWydyZXR1cm4nXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlJyk7IH0gfTsgfSkoKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9UZXRoZXIkVXRpbHMgPSBUZXRoZXIuVXRpbHM7XG52YXIgZXh0ZW5kID0gX1RldGhlciRVdGlscy5leHRlbmQ7XG52YXIgYWRkQ2xhc3MgPSBfVGV0aGVyJFV0aWxzLmFkZENsYXNzO1xudmFyIHJlbW92ZUNsYXNzID0gX1RldGhlciRVdGlscy5yZW1vdmVDbGFzcztcbnZhciBoYXNDbGFzcyA9IF9UZXRoZXIkVXRpbHMuaGFzQ2xhc3M7XG52YXIgRXZlbnRlZCA9IF9UZXRoZXIkVXRpbHMuRXZlbnRlZDtcblxuZnVuY3Rpb24gc29ydEF0dGFjaChzdHIpIHtcbiAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJyAnKTtcblxuICB2YXIgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAyKTtcblxuICB2YXIgZmlyc3QgPSBfc3RyJHNwbGl0MlswXTtcbiAgdmFyIHNlY29uZCA9IF9zdHIkc3BsaXQyWzFdO1xuXG4gIGlmIChbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGZpcnN0KSA+PSAwKSB7XG4gICAgdmFyIF9yZWYgPSBbc2Vjb25kLCBmaXJzdF07XG4gICAgZmlyc3QgPSBfcmVmWzBdO1xuICAgIHNlY29uZCA9IF9yZWZbMV07XG4gIH1cbiAgcmV0dXJuIFtmaXJzdCwgc2Vjb25kXS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShhcnIsIGl0ZW0pIHtcbiAgdmFyIGluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB3aGlsZSAoKGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSkpICE9PSAtMSkge1xuICAgIHJlc3VsdHMucHVzaChhcnIuc3BsaWNlKGluZGV4LCAxKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbnZhciBjbGlja0V2ZW50cyA9IFsnY2xpY2snXTtcbmlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgY2xpY2tFdmVudHMucHVzaCgndG91Y2hzdGFydCcpO1xufVxuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50cyA9IHtcbiAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAnT1RyYW5zaXRpb24nOiAnb3RyYW5zaXRpb25lbmQnLFxuICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJ1xufTtcblxudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICcnO1xuZm9yICh2YXIgX25hbWUgaW4gdHJhbnNpdGlvbkVuZEV2ZW50cykge1xuICBpZiAoKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRyYW5zaXRpb25FbmRFdmVudHMsIF9uYW1lKSkge1xuICAgIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKHR5cGVvZiB0ZW1wRWwuc3R5bGVbX25hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gdHJhbnNpdGlvbkVuZEV2ZW50c1tfbmFtZV07XG4gICAgfVxuICB9XG59XG5cbnZhciBNSVJST1JfQVRUQUNIID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICB0b3A6ICdib3R0b20nLFxuICBib3R0b206ICd0b3AnLFxuICBtaWRkbGU6ICdtaWRkbGUnLFxuICBjZW50ZXI6ICdjZW50ZXInXG59O1xuXG52YXIgYWxsRHJvcHMgPSB7fTtcblxuLy8gRHJvcCBjYW4gYmUgaW5jbHVkZWQgaW4gZXh0ZXJuYWwgbGlicmFyaWVzLiAgQ2FsbGluZyBjcmVhdGVDb250ZXh0IGdpdmVzIHlvdSBhIGZyZXNoXG4vLyBjb3B5IG9mIGRyb3Agd2hpY2ggd29uJ3QgaW50ZXJhY3Qgd2l0aCBvdGhlciBjb3BpZXMgb24gdGhlIHBhZ2UgKGJleW9uZCBjYWxsaW5nIHRoZSBkb2N1bWVudCBldmVudHMpLlxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gIHZhciBkcm9wID0gZnVuY3Rpb24gZHJvcCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChfYmluZC5hcHBseShEcm9wSW5zdGFuY2UsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xuICB9O1xuXG4gIGV4dGVuZChkcm9wLCB7XG4gICAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgICBkcm9wczogW10sXG4gICAgZGVmYXVsdHM6IHt9XG4gIH0pO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBjbGFzc1ByZWZpeDogJ2Ryb3AnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgIG9wZW5PbjogJ2NsaWNrJyxcbiAgICAgIGJlZm9yZUNsb3NlOiBudWxsLFxuICAgICAgY29uc3RyYWluVG9TY3JvbGxQYXJlbnQ6IHRydWUsXG4gICAgICBjb25zdHJhaW5Ub1dpbmRvdzogdHJ1ZSxcbiAgICAgIGNsYXNzZXM6ICcnLFxuICAgICAgcmVtb3ZlOiBmYWxzZSxcbiAgICAgIG9wZW5EZWxheTogMCxcbiAgICAgIGNsb3NlRGVsYXk6IDUwLFxuICAgICAgLy8gaW5oZXJpdGVkIGZyb20gb3BlbkRlbGF5IGFuZCBjbG9zZURlbGF5IGlmIG5vdCBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgIGZvY3VzRGVsYXk6IG51bGwsXG4gICAgICBibHVyRGVsYXk6IG51bGwsXG4gICAgICBob3Zlck9wZW5EZWxheTogbnVsbCxcbiAgICAgIGhvdmVyQ2xvc2VEZWxheTogbnVsbCxcbiAgICAgIHRldGhlck9wdGlvbnM6IHt9XG4gICAgfVxuICB9O1xuXG4gIGV4dGVuZChkcm9wLCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gIGV4dGVuZChkcm9wLmRlZmF1bHRzLCBkZWZhdWx0T3B0aW9ucy5kZWZhdWx0cywgb3B0aW9ucy5kZWZhdWx0cyk7XG5cbiAgaWYgKHR5cGVvZiBhbGxEcm9wc1tkcm9wLmNsYXNzUHJlZml4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhbGxEcm9wc1tkcm9wLmNsYXNzUHJlZml4XSA9IFtdO1xuICB9XG5cbiAgZHJvcC51cGRhdGVCb2R5Q2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGVyZSBpcyBvbmx5IG9uZSBib2R5LCBzbyBkZXNwaXRlIHRoZSBjb250ZXh0IGNvbmNlcHQsIHdlIHN0aWxsIGl0ZXJhdGUgdGhyb3VnaCBhbGxcbiAgICAvLyBkcm9wcyB3aGljaCBzaGFyZSBvdXIgY2xhc3NQcmVmaXguXG5cbiAgICB2YXIgYW55T3BlbiA9IGZhbHNlO1xuICAgIHZhciBkcm9wcyA9IGFsbERyb3BzW2Ryb3AuY2xhc3NQcmVmaXhdO1xuICAgIHZhciBsZW4gPSBkcm9wcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgaWYgKGRyb3BzW2ldLmlzT3BlbmVkKCkpIHtcbiAgICAgICAgYW55T3BlbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbnlPcGVuKSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBkcm9wLmNsYXNzUHJlZml4ICsgJy1vcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIGRyb3AuY2xhc3NQcmVmaXggKyAnLW9wZW4nKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIERyb3BJbnN0YW5jZSA9IChmdW5jdGlvbiAoX0V2ZW50ZWQpIHtcbiAgICBfaW5oZXJpdHMoRHJvcEluc3RhbmNlLCBfRXZlbnRlZCk7XG5cbiAgICBmdW5jdGlvbiBEcm9wSW5zdGFuY2Uob3B0cykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3BJbnN0YW5jZSk7XG5cbiAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3BJbnN0YW5jZS5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKHt9LCBkcm9wLmRlZmF1bHRzLCBvcHRzKTtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5vcHRpb25zLnRhcmdldDtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcm9wIEVycm9yOiBZb3UgbXVzdCBwcm92aWRlIGEgdGFyZ2V0LicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YVByZWZpeCA9ICdkYXRhLScgKyBkcm9wLmNsYXNzUHJlZml4O1xuXG4gICAgICB2YXIgY29udGVudEF0dHIgPSB0aGlzLnRhcmdldC5nZXRBdHRyaWJ1dGUoZGF0YVByZWZpeCk7XG4gICAgICBpZiAoY29udGVudEF0dHIgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29udGVudCA9IGNvbnRlbnRBdHRyO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cnNPdmVycmlkZSA9IFsncG9zaXRpb24nLCAnb3Blbk9uJ107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzT3ZlcnJpZGUubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICB2YXIgb3ZlcnJpZGUgPSB0aGlzLnRhcmdldC5nZXRBdHRyaWJ1dGUoZGF0YVByZWZpeCArICctJyArIGF0dHJzT3ZlcnJpZGVbaV0pO1xuICAgICAgICBpZiAob3ZlcnJpZGUgJiYgdGhpcy5vcHRpb25zW2F0dHJzT3ZlcnJpZGVbaV1dID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbYXR0cnNPdmVycmlkZVtpXV0gPSBvdmVycmlkZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNsYXNzZXMgJiYgdGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgIT09IGZhbHNlKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLm9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICB9XG5cbiAgICAgIGRyb3AuZHJvcHMucHVzaCh0aGlzKTtcbiAgICAgIGFsbERyb3BzW2Ryb3AuY2xhc3NQcmVmaXhdLnB1c2godGhpcyk7XG5cbiAgICAgIHRoaXMuX2JvdW5kRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJpbmRNZXRob2RzKCk7XG4gICAgICB0aGlzLnNldHVwRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcbiAgICAgIHRoaXMuc2V0dXBUZXRoZXIoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJvcEluc3RhbmNlLCBbe1xuICAgICAga2V5OiAnX29uJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRFdmVudHMucHVzaCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGV2ZW50OiBldmVudCwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdiaW5kTWV0aG9kcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIgPSB0aGlzLl90cmFuc2l0aW9uRW5kSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldHVwRWxlbWVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwRWxlbWVudHMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5kcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZHJvcCwgZHJvcC5jbGFzc1ByZWZpeCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5kcm9wLCB0aGlzLm9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5jb250ZW50LCBkcm9wLmNsYXNzUHJlZml4ICsgJy1jb250ZW50Jyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBnZW5lcmF0ZUFuZFNldENvbnRlbnQgPSBmdW5jdGlvbiBnZW5lcmF0ZUFuZFNldENvbnRlbnQoKSB7XG4gICAgICAgICAgICAvLyBjb250ZW50IGZ1bmN0aW9uIG1pZ2h0IHJldHVybiBhIHN0cmluZyBvciBhbiBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY29udGVudEVsZW1lbnRPckhUTUwgPSBfdGhpcy5vcHRpb25zLmNvbnRlbnQuY2FsbChfdGhpcywgX3RoaXMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnRFbGVtZW50T3JIVE1MID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnRFbGVtZW50T3JIVE1MO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGVudEVsZW1lbnRPckhUTUwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnRPckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcm9wIEVycm9yOiBDb250ZW50IGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgb3IgSFRNTEVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGdlbmVyYXRlQW5kU2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMub24oJ29wZW4nLCBnZW5lcmF0ZUFuZFNldENvbnRlbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb250ZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcm9wLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0dXBUZXRoZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwVGV0aGVyKCkge1xuICAgICAgICAvLyBUZXRoZXIgZXhwZWN0cyB0d28gYXR0YWNobWVudCBwb2ludHMsIG9uZSBpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIG9uZSBpbiB0aGVcbiAgICAgICAgLy8gZHJvcC4gIFdlIHVzZSBhIHNpbmdsZSBvbmUsIGFuZCB1c2UgdGhlIG9yZGVyIGFzIHdlbGwsIHRvIGFsbG93IHVzIHRvIHB1dFxuICAgICAgICAvLyB0aGUgZHJvcCBvbiBlaXRoZXIgc2lkZSBvZiBhbnkgb2YgdGhlIGZvdXIgY29ybmVycy4gIFRoaXMgbWFnaWMgY29udmVydHMgYmV0d2VlblxuICAgICAgICAvLyB0aGUgdHdvOlxuICAgICAgICB2YXIgZHJvcEF0dGFjaCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBkcm9wQXR0YWNoWzBdID0gTUlSUk9SX0FUVEFDSFtkcm9wQXR0YWNoWzBdXTtcbiAgICAgICAgZHJvcEF0dGFjaCA9IGRyb3BBdHRhY2guam9pbignICcpO1xuXG4gICAgICAgIHZhciBjb25zdHJhaW50cyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnN0cmFpblRvU2Nyb2xsUGFyZW50KSB7XG4gICAgICAgICAgY29uc3RyYWludHMucHVzaCh7XG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgICBwaW46ICd0b3AsIGJvdHRvbScsXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXIgbm9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUbyBnZXQgJ291dCBvZiBib3VuZHMnIGNsYXNzZXNcbiAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb25zdHJhaW5Ub1dpbmRvdyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUbyBnZXQgJ291dCBvZiBib3VuZHMnIGNsYXNzZXNcbiAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgZWxlbWVudDogdGhpcy5kcm9wLFxuICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICAgICAgYXR0YWNobWVudDogc29ydEF0dGFjaChkcm9wQXR0YWNoKSxcbiAgICAgICAgICB0YXJnZXRBdHRhY2htZW50OiBzb3J0QXR0YWNoKHRoaXMub3B0aW9ucy5wb3NpdGlvbiksXG4gICAgICAgICAgY2xhc3NQcmVmaXg6IGRyb3AuY2xhc3NQcmVmaXgsXG4gICAgICAgICAgb2Zmc2V0OiAnMCAwJyxcbiAgICAgICAgICB0YXJnZXRPZmZzZXQ6ICcwIDAnLFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cmFpbnRzOiBjb25zdHJhaW50cyxcbiAgICAgICAgICBhZGRUYXJnZXRDbGFzc2VzOiB0aGlzLm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3Nlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGV0aGVyT3B0aW9ucyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnRldGhlciA9IG5ldyBUZXRoZXIoZXh0ZW5kKHt9LCBvcHRzLCB0aGlzLm9wdGlvbnMudGV0aGVyT3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0dXBFdmVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwRXZlbnRzKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5vcGVuT24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9wZW5PbiA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5vcHRpb25zLm9wZW5Pbi5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChldmVudHMuaW5kZXhPZignY2xpY2snKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIG9wZW5IYW5kbGVyID0gZnVuY3Rpb24gb3BlbkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzMi50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGNsb3NlSGFuZGxlciA9IGZ1bmN0aW9uIGNsb3NlSGFuZGxlcihldmVudCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpczIuaXNPcGVuZWQoKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsaWNraW5nIGluc2lkZSBkcm9wZG93blxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gX3RoaXMyLmRyb3AgfHwgX3RoaXMyLmRyb3AuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsaWNraW5nIHRhcmdldFxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gX3RoaXMyLnRhcmdldCB8fCBfdGhpczIudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczIuY2xvc2UoZXZlbnQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsaWNrRXZlbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgY2xpY2tFdmVudCA9IGNsaWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5fb24odGhpcy50YXJnZXQsIGNsaWNrRXZlbnQsIG9wZW5IYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuX29uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBjbG9zZUhhbmRsZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB2YXIgb3V0VGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgdmFyIGluSGFuZGxlciA9IGZ1bmN0aW9uIGluSGFuZGxlcihldmVudCkge1xuICAgICAgICAgIGlmIChvdXRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQob3V0VGltZW91dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczIub3BlbihldmVudCk7XG4gICAgICAgICAgICAgIGluVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9LCAoZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJyA/IF90aGlzMi5vcHRpb25zLmZvY3VzRGVsYXkgOiBfdGhpczIub3B0aW9ucy5ob3Zlck9wZW5EZWxheSkgfHwgX3RoaXMyLm9wdGlvbnMub3BlbkRlbGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG91dEhhbmRsZXIgPSBmdW5jdGlvbiBvdXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGluVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluVGltZW91dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLmNsb3NlKGV2ZW50KTtcbiAgICAgICAgICAgICAgb3V0VGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9LCAoZXZlbnQudHlwZSA9PT0gJ2JsdXInID8gX3RoaXMyLm9wdGlvbnMuYmx1ckRlbGF5IDogX3RoaXMyLm9wdGlvbnMuaG92ZXJDbG9zZURlbGF5KSB8fCBfdGhpczIub3B0aW9ucy5jbG9zZURlbGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5pbmRleE9mKCdob3ZlcicpID49IDApIHtcbiAgICAgICAgICB0aGlzLl9vbih0aGlzLnRhcmdldCwgJ21vdXNlb3ZlcicsIGluSGFuZGxlcik7XG4gICAgICAgICAgdGhpcy5fb24odGhpcy5kcm9wLCAnbW91c2VvdmVyJywgaW5IYW5kbGVyKTtcbiAgICAgICAgICB0aGlzLl9vbih0aGlzLnRhcmdldCwgJ21vdXNlb3V0Jywgb3V0SGFuZGxlcik7XG4gICAgICAgICAgdGhpcy5fb24odGhpcy5kcm9wLCAnbW91c2VvdXQnLCBvdXRIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudHMuaW5kZXhPZignZm9jdXMnKSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fb24odGhpcy50YXJnZXQsICdmb2N1cycsIGluSGFuZGxlcik7XG4gICAgICAgICAgdGhpcy5fb24odGhpcy5kcm9wLCAnZm9jdXMnLCBpbkhhbmRsZXIpO1xuICAgICAgICAgIHRoaXMuX29uKHRoaXMudGFyZ2V0LCAnYmx1cicsIG91dEhhbmRsZXIpO1xuICAgICAgICAgIHRoaXMuX29uKHRoaXMuZHJvcCwgJ2JsdXInLCBvdXRIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzT3BlbmVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wZW5lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcCkge1xuICAgICAgICAgIHJldHVybiBoYXNDbGFzcyh0aGlzLmRyb3AsIGRyb3AuY2xhc3NQcmVmaXggKyAnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3RvZ2dsZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbmVkKCkpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW4oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb3BlbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5kcm9wLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGV0aGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudGV0aGVyLmVuYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQ2xhc3ModGhpcy5kcm9wLCBkcm9wLmNsYXNzUHJlZml4ICsgJy1vcGVuJyk7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZHJvcCwgZHJvcC5jbGFzc1ByZWZpeCArICctb3Blbi10cmFuc2l0aW9uZW5kJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMy5kcm9wKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhfdGhpczMuZHJvcCwgZHJvcC5jbGFzc1ByZWZpeCArICctYWZ0ZXItb3BlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRldGhlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRldGhlci5wb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdvcGVuJyk7XG5cbiAgICAgICAgZHJvcC51cGRhdGVCb2R5Q2xhc3NlcygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ190cmFuc2l0aW9uRW5kSGFuZGxlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3RyYW5zaXRpb25FbmRIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0NsYXNzKHRoaXMuZHJvcCwgZHJvcC5jbGFzc1ByZWZpeCArICctb3BlbicpKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5kcm9wLCBkcm9wLmNsYXNzUHJlZml4ICsgJy1vcGVuLXRyYW5zaXRpb25lbmQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3AucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2JlZm9yZUNsb3NlSGFuZGxlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlQ2xvc2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBzaG91bGRDbG9zZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQ2xvc2luZyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmJlZm9yZUNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pc0Nsb3NpbmcgPSB0cnVlO1xuICAgICAgICAgIHNob3VsZENsb3NlID0gdGhpcy5vcHRpb25zLmJlZm9yZUNsb3NlKGV2ZW50LCB0aGlzKSAhPT0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBzaG91bGRDbG9zZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjbG9zZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYmVmb3JlQ2xvc2VIYW5kbGVyKGV2ZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZHJvcCwgZHJvcC5jbGFzc1ByZWZpeCArICctb3BlbicpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmRyb3AsIGRyb3AuY2xhc3NQcmVmaXggKyAnLWFmdGVyLW9wZW4nKTtcblxuICAgICAgICB0aGlzLmRyb3AuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xvc2UnKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGV0aGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudGV0aGVyLmRpc2FibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyb3AudXBkYXRlQm9keUNsYXNzZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5kcm9wLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aGlzLmRyb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncG9zaXRpb24nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW5lZCgpICYmIHR5cGVvZiB0aGlzLnRldGhlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRldGhlci5wb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGV0aGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudGV0aGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYm91bmRFdmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICB2YXIgX2JvdW5kRXZlbnRzJGkgPSB0aGlzLl9ib3VuZEV2ZW50c1tpXTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9ib3VuZEV2ZW50cyRpLmVsZW1lbnQ7XG4gICAgICAgICAgdmFyIF9ldmVudCA9IF9ib3VuZEV2ZW50cyRpLmV2ZW50O1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gX2JvdW5kRXZlbnRzJGkuaGFuZGxlcjtcblxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihfZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYm91bmRFdmVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLnRldGhlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJvcCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICByZW1vdmVGcm9tQXJyYXkoYWxsRHJvcHNbZHJvcC5jbGFzc1ByZWZpeF0sIHRoaXMpO1xuICAgICAgICByZW1vdmVGcm9tQXJyYXkoZHJvcC5kcm9wcywgdGhpcyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyb3BJbnN0YW5jZTtcbiAgfSkoRXZlbnRlZCk7XG5cbiAgcmV0dXJuIGRyb3A7XG59XG5cbnZhciBEcm9wID0gY3JlYXRlQ29udGV4dCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBEcm9wLnVwZGF0ZUJvZHlDbGFzc2VzKCk7XG59KTtcbnJldHVybiBEcm9wO1xuXG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RldGhlci1kcm9wL2Rpc3QvanMvZHJvcC5qcyIsIi8qISB0ZXRoZXIgMS40LjAgKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlRldGhlciA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFRldGhlckJhc2UgPSB1bmRlZmluZWQ7XG5pZiAodHlwZW9mIFRldGhlckJhc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIFRldGhlckJhc2UgPSB7IG1vZHVsZXM6IFtdIH07XG59XG5cbnZhciB6ZXJvRWxlbWVudCA9IG51bGw7XG5cbi8vIFNhbWUgYXMgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCwgZXhjZXB0IGl0IHRha2VzIGludG8gYWNjb3VudCBwYXJlbnQgPGZyYW1lPiBvZmZzZXRzXG4vLyBpZiB0aGUgZWxlbWVudCBsaWVzIHdpdGhpbiBhIG5lc3RlZCBkb2N1bWVudCAoPGZyYW1lPiBvciA8aWZyYW1lPi1saWtlKS5cbmZ1bmN0aW9uIGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdChub2RlKSB7XG4gIHZhciBib3VuZGluZ1JlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIFRoZSBvcmlnaW5hbCBvYmplY3QgcmV0dXJuZWQgYnkgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGltbXV0YWJsZSwgc28gd2UgY2xvbmUgaXRcbiAgLy8gV2UgY2FuJ3QgdXNlIGV4dGVuZCBiZWNhdXNlIHRoZSBwcm9wZXJ0aWVzIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBvYmplY3QgYnkgaGFzT3duUHJvcGVydHkgaW4gSUU5XG4gIHZhciByZWN0ID0ge307XG4gIGZvciAodmFyIGsgaW4gYm91bmRpbmdSZWN0KSB7XG4gICAgcmVjdFtrXSA9IGJvdW5kaW5nUmVjdFtrXTtcbiAgfVxuXG4gIGlmIChub2RlLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgdmFyIF9mcmFtZUVsZW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50O1xuICAgIGlmIChfZnJhbWVFbGVtZW50KSB7XG4gICAgICB2YXIgZnJhbWVSZWN0ID0gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KF9mcmFtZUVsZW1lbnQpO1xuICAgICAgcmVjdC50b3AgKz0gZnJhbWVSZWN0LnRvcDtcbiAgICAgIHJlY3QuYm90dG9tICs9IGZyYW1lUmVjdC50b3A7XG4gICAgICByZWN0LmxlZnQgKz0gZnJhbWVSZWN0LmxlZnQ7XG4gICAgICByZWN0LnJpZ2h0ICs9IGZyYW1lUmVjdC5sZWZ0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnRzKGVsKSB7XG4gIC8vIEluIGZpcmVmb3ggaWYgdGhlIGVsIGlzIGluc2lkZSBhbiBpZnJhbWUgd2l0aCBkaXNwbGF5OiBub25lOyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgpIHdpbGwgcmV0dXJuIG51bGw7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpIHx8IHt9O1xuICB2YXIgcG9zaXRpb24gPSBjb21wdXRlZFN0eWxlLnBvc2l0aW9uO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBbZWxdO1xuICB9XG5cbiAgdmFyIHBhcmVudCA9IGVsO1xuICB3aGlsZSAoKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSAmJiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgdmFyIHN0eWxlID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyB8fCBzdHlsZSA9PT0gbnVsbCkge1xuICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG5cbiAgICB2YXIgX3N0eWxlID0gc3R5bGU7XG4gICAgdmFyIG92ZXJmbG93ID0gX3N0eWxlLm92ZXJmbG93O1xuICAgIHZhciBvdmVyZmxvd1ggPSBfc3R5bGUub3ZlcmZsb3dYO1xuICAgIHZhciBvdmVyZmxvd1kgPSBfc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgaWYgKC8oYXV0b3xzY3JvbGwpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgICAgaWYgKHBvc2l0aW9uICE9PSAnYWJzb2x1dGUnIHx8IFsncmVsYXRpdmUnLCAnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKHN0eWxlLnBvc2l0aW9uKSA+PSAwKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcmVudHMucHVzaChlbC5vd25lckRvY3VtZW50LmJvZHkpO1xuXG4gIC8vIElmIHRoZSBub2RlIGlzIHdpdGhpbiBhIGZyYW1lLCBhY2NvdW50IGZvciB0aGUgcGFyZW50IHdpbmRvdyBzY3JvbGxcbiAgaWYgKGVsLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgcGFyZW50cy5wdXNoKGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbnZhciB1bmlxdWVJZCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsraWQ7XG4gIH07XG59KSgpO1xuXG52YXIgemVyb1Bvc0NhY2hlID0ge307XG52YXIgZ2V0T3JpZ2luID0gZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgdW5mb3J0dW5hdGVseSB0b28gYWNjdXJhdGUuICBJdCBpbnRyb2R1Y2VzIGEgcGl4ZWwgb3IgdHdvIG9mXG4gIC8vIGppdHRlciBhcyB0aGUgdXNlciBzY3JvbGxzIHRoYXQgbWVzc2VzIHdpdGggb3VyIGFiaWxpdHkgdG8gZGV0ZWN0IGlmIHR3byBwb3NpdGlvbnNcbiAgLy8gYXJlIGVxdWl2aWxhbnQgb3Igbm90LiAgV2UgcGxhY2UgYW4gZWxlbWVudCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsXG4gIC8vIGdldCB0aGUgc2FtZSBqaXR0ZXIsIHNvIHdlIGNhbiBjYW5jZWwgdGhlIHR3byBvdXQuXG4gIHZhciBub2RlID0gemVyb0VsZW1lbnQ7XG4gIGlmICghbm9kZSB8fCAhZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlKSkge1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS10ZXRoZXItaWQnLCB1bmlxdWVJZCgpKTtcbiAgICBleHRlbmQobm9kZS5zdHlsZSwge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgemVyb0VsZW1lbnQgPSBub2RlO1xuICB9XG5cbiAgdmFyIGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV0aGVyLWlkJyk7XG4gIGlmICh0eXBlb2YgemVyb1Bvc0NhY2hlW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB6ZXJvUG9zQ2FjaGVbaWRdID0gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KG5vZGUpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGNhY2hlIHdoZW4gdGhpcyBwb3NpdGlvbiBjYWxsIGlzIGRvbmVcbiAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgemVyb1Bvc0NhY2hlW2lkXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB6ZXJvUG9zQ2FjaGVbaWRdO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlVXRpbEVsZW1lbnRzKCkge1xuICBpZiAoemVyb0VsZW1lbnQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHplcm9FbGVtZW50KTtcbiAgfVxuICB6ZXJvRWxlbWVudCA9IG51bGw7XG59O1xuXG5mdW5jdGlvbiBnZXRCb3VuZHMoZWwpIHtcbiAgdmFyIGRvYyA9IHVuZGVmaW5lZDtcbiAgaWYgKGVsID09PSBkb2N1bWVudCkge1xuICAgIGRvYyA9IGRvY3VtZW50O1xuICAgIGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICB2YXIgZG9jRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHZhciBib3ggPSBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3QoZWwpO1xuXG4gIHZhciBvcmlnaW4gPSBnZXRPcmlnaW4oKTtcblxuICBib3gudG9wIC09IG9yaWdpbi50b3A7XG4gIGJveC5sZWZ0IC09IG9yaWdpbi5sZWZ0O1xuXG4gIGlmICh0eXBlb2YgYm94LndpZHRoID09PSAndW5kZWZpbmVkJykge1xuICAgIGJveC53aWR0aCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBib3gubGVmdCAtIGJveC5yaWdodDtcbiAgfVxuICBpZiAodHlwZW9mIGJveC5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYm94LmhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gYm94LnRvcCAtIGJveC5ib3R0b207XG4gIH1cblxuICBib3gudG9wID0gYm94LnRvcCAtIGRvY0VsLmNsaWVudFRvcDtcbiAgYm94LmxlZnQgPSBib3gubGVmdCAtIGRvY0VsLmNsaWVudExlZnQ7XG4gIGJveC5yaWdodCA9IGRvYy5ib2R5LmNsaWVudFdpZHRoIC0gYm94LndpZHRoIC0gYm94LmxlZnQ7XG4gIGJveC5ib3R0b20gPSBkb2MuYm9keS5jbGllbnRIZWlnaHQgLSBib3guaGVpZ2h0IC0gYm94LnRvcDtcblxuICByZXR1cm4gYm94O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWwpIHtcbiAgcmV0dXJuIGVsLm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbnZhciBfc2Nyb2xsQmFyU2l6ZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKCkge1xuICBpZiAoX3Njcm9sbEJhclNpemUpIHtcbiAgICByZXR1cm4gX3Njcm9sbEJhclNpemU7XG4gIH1cbiAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHRlbmQob3V0ZXIuc3R5bGUsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgd2lkdGg6ICcyMDBweCcsXG4gICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9KTtcblxuICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgdmFyIHdpZHRoQ29udGFpbmVkID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIHZhciB3aWR0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gIGlmICh3aWR0aENvbnRhaW5lZCA9PT0gd2lkdGhTY3JvbGwpIHtcbiAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgdmFyIHdpZHRoID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcblxuICBfc2Nyb2xsQmFyU2l6ZSA9IHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IHdpZHRoIH07XG4gIHJldHVybiBfc2Nyb2xsQmFyU2l6ZTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgdmFyIGFyZ3MgPSBbXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuXG4gIGFyZ3Muc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcoXnwgKScgKyBuYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyggfCQpJywgJ2dpJyk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgaWYgKGNscy50cmltKCkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBuYW1lKTtcbiAgICB2YXIgY2xzID0gZ2V0Q2xhc3NOYW1lKGVsKSArICgnICcgKyBuYW1lKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNscyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgfVxuICB2YXIgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKGVsKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefCApJyArIG5hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShlbCkge1xuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcbiAgLy8gY29tcGxldGVseSBzZXBhcmF0ZWx5IFNWR0FuaW1hdGVkU3RyaW5nIGJhc2UgY2xhc3Nlc1xuICBpZiAoZWwuY2xhc3NOYW1lIGluc3RhbmNlb2YgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdBbmltYXRlZFN0cmluZykge1xuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgfVxuICByZXR1cm4gZWwuY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSkge1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3NlcyhlbCwgYWRkLCBhbGwpIHtcbiAgLy8gT2YgdGhlIHNldCBvZiAnYWxsJyBjbGFzc2VzLCB3ZSBuZWVkIHRoZSAnYWRkJyBjbGFzc2VzLCBhbmQgb25seSB0aGVcbiAgLy8gJ2FkZCcgY2xhc3NlcyB0byBiZSBzZXQuXG4gIGFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICBpZiAoYWRkLmluZGV4T2YoY2xzKSA9PT0gLTEgJiYgaGFzQ2xhc3MoZWwsIGNscykpIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgIGlmICghaGFzQ2xhc3MoZWwsIGNscykpIHtcbiAgICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBkZWZlcnJlZCA9IFtdO1xuXG52YXIgZGVmZXIgPSBmdW5jdGlvbiBkZWZlcihmbikge1xuICBkZWZlcnJlZC5wdXNoKGZuKTtcbn07XG5cbnZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgZm4gPSB1bmRlZmluZWQ7XG4gIHdoaWxlIChmbiA9IGRlZmVycmVkLnBvcCgpKSB7XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIEV2ZW50ZWQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudGVkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudGVkKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudGVkLCBbe1xuICAgIGtleTogJ29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgICAgdmFyIG9uY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpbmRpbmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3NbZXZlbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7IGhhbmRsZXI6IGhhbmRsZXIsIGN0eDogY3R4LCBvbmNlOiBvbmNlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHRoaXMub24oZXZlbnQsIGhhbmRsZXIsIGN0eCwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3MgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW2V2ZW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1tldmVudF1baV0uaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJpZ2dlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5iaW5kaW5ncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5iaW5kaW5nc1tldmVudF0pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgX2JpbmRpbmdzJGV2ZW50JGkgPSB0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXTtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IF9iaW5kaW5ncyRldmVudCRpLmhhbmRsZXI7XG4gICAgICAgICAgdmFyIGN0eCA9IF9iaW5kaW5ncyRldmVudCRpLmN0eDtcbiAgICAgICAgICB2YXIgb25jZSA9IF9iaW5kaW5ncyRldmVudCRpLm9uY2U7XG5cbiAgICAgICAgICB2YXIgY29udGV4dCA9IGN0eDtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXG4gICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudGVkO1xufSkoKTtcblxuVGV0aGVyQmFzZS5VdGlscyA9IHtcbiAgZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0OiBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3QsXG4gIGdldFNjcm9sbFBhcmVudHM6IGdldFNjcm9sbFBhcmVudHMsXG4gIGdldEJvdW5kczogZ2V0Qm91bmRzLFxuICBnZXRPZmZzZXRQYXJlbnQ6IGdldE9mZnNldFBhcmVudCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIHVwZGF0ZUNsYXNzZXM6IHVwZGF0ZUNsYXNzZXMsXG4gIGRlZmVyOiBkZWZlcixcbiAgZmx1c2g6IGZsdXNoLFxuICB1bmlxdWVJZDogdW5pcXVlSWQsXG4gIEV2ZW50ZWQ6IEV2ZW50ZWQsXG4gIGdldFNjcm9sbEJhclNpemU6IGdldFNjcm9sbEJhclNpemUsXG4gIHJlbW92ZVV0aWxFbGVtZW50czogcmVtb3ZlVXRpbEVsZW1lbnRzXG59O1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlLCBwZXJmb3JtYW5jZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeDYsIF94NywgX3g4KSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94NiwgcHJvcGVydHkgPSBfeDcsIHJlY2VpdmVyID0gX3g4OyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94NiA9IHBhcmVudDsgX3g3ID0gcHJvcGVydHk7IF94OCA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pZiAodHlwZW9mIFRldGhlckJhc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgaW5jbHVkZSB0aGUgdXRpbHMuanMgZmlsZSBiZWZvcmUgdGV0aGVyLmpzJyk7XG59XG5cbnZhciBfVGV0aGVyQmFzZSRVdGlscyA9IFRldGhlckJhc2UuVXRpbHM7XG52YXIgZ2V0U2Nyb2xsUGFyZW50cyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldFNjcm9sbFBhcmVudHM7XG52YXIgZ2V0Qm91bmRzID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0Qm91bmRzO1xudmFyIGdldE9mZnNldFBhcmVudCA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldE9mZnNldFBhcmVudDtcbnZhciBleHRlbmQgPSBfVGV0aGVyQmFzZSRVdGlscy5leHRlbmQ7XG52YXIgYWRkQ2xhc3MgPSBfVGV0aGVyQmFzZSRVdGlscy5hZGRDbGFzcztcbnZhciByZW1vdmVDbGFzcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnJlbW92ZUNsYXNzO1xudmFyIHVwZGF0ZUNsYXNzZXMgPSBfVGV0aGVyQmFzZSRVdGlscy51cGRhdGVDbGFzc2VzO1xudmFyIGRlZmVyID0gX1RldGhlckJhc2UkVXRpbHMuZGVmZXI7XG52YXIgZmx1c2ggPSBfVGV0aGVyQmFzZSRVdGlscy5mbHVzaDtcbnZhciBnZXRTY3JvbGxCYXJTaXplID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0U2Nyb2xsQmFyU2l6ZTtcbnZhciByZW1vdmVVdGlsRWxlbWVudHMgPSBfVGV0aGVyQmFzZSRVdGlscy5yZW1vdmVVdGlsRWxlbWVudHM7XG5cbmZ1bmN0aW9uIHdpdGhpbihhLCBiKSB7XG4gIHZhciBkaWZmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1syXTtcblxuICByZXR1cm4gYSArIGRpZmYgPj0gYiAmJiBiID49IGEgLSBkaWZmO1xufVxuXG52YXIgdHJhbnNmb3JtS2V5ID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgdmFyIHRyYW5zZm9ybXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFuc2Zvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGtleSA9IHRyYW5zZm9ybXNbaV07XG4gICAgaWYgKGVsLnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbnZhciB0ZXRoZXJzID0gW107XG5cbnZhciBwb3NpdGlvbiA9IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICB0ZXRoZXJzLmZvckVhY2goZnVuY3Rpb24gKHRldGhlcikge1xuICAgIHRldGhlci5wb3NpdGlvbihmYWxzZSk7XG4gIH0pO1xuICBmbHVzaCgpO1xufTtcblxuZnVuY3Rpb24gbm93KCkge1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgfVxuICByZXR1cm4gK25ldyBEYXRlKCk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0Q2FsbCA9IG51bGw7XG4gIHZhciBsYXN0RHVyYXRpb24gPSBudWxsO1xuICB2YXIgcGVuZGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gIHZhciB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAodHlwZW9mIGxhc3REdXJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbGFzdER1cmF0aW9uID4gMTYpIHtcbiAgICAgIC8vIFdlIHZvbHVudGFyaWx5IHRocm90dGxlIG91cnNlbHZlcyBpZiB3ZSBjYW4ndCBtYW5hZ2UgNjBmcHNcbiAgICAgIGxhc3REdXJhdGlvbiA9IE1hdGgubWluKGxhc3REdXJhdGlvbiAtIDE2LCAyNTApO1xuXG4gICAgICAvLyBKdXN0IGluIGNhc2UgdGhpcyBpcyB0aGUgbGFzdCBldmVudCwgcmVtZW1iZXIgdG8gcG9zaXRpb24ganVzdCBvbmNlIG1vcmVcbiAgICAgIHBlbmRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCh0aWNrLCAyNTApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGFzdENhbGwgIT09ICd1bmRlZmluZWQnICYmIG5vdygpIC0gbGFzdENhbGwgPCAxMCkge1xuICAgICAgLy8gU29tZSBicm93c2VycyBjYWxsIGV2ZW50cyBhIGxpdHRsZSB0b28gZnJlcXVlbnRseSwgcmVmdXNlIHRvIHJ1biBtb3JlIHRoYW4gaXMgcmVhc29uYWJsZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwZW5kaW5nVGltZW91dCAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQocGVuZGluZ1RpbWVvdXQpO1xuICAgICAgcGVuZGluZ1RpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGxhc3RDYWxsID0gbm93KCk7XG4gICAgcG9zaXRpb24oKTtcbiAgICBsYXN0RHVyYXRpb24gPSBub3coKSAtIGxhc3RDYWxsO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgWydyZXNpemUnLCAnc2Nyb2xsJywgJ3RvdWNobW92ZSddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGljayk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbnZhciBNSVJST1JfTFIgPSB7XG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCdcbn07XG5cbnZhciBNSVJST1JfVEIgPSB7XG4gIG1pZGRsZTogJ21pZGRsZScsXG4gIHRvcDogJ2JvdHRvbScsXG4gIGJvdHRvbTogJ3RvcCdcbn07XG5cbnZhciBPRkZTRVRfTUFQID0ge1xuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIG1pZGRsZTogJzUwJScsXG4gIGNlbnRlcjogJzUwJScsXG4gIGJvdHRvbTogJzEwMCUnLFxuICByaWdodDogJzEwMCUnXG59O1xuXG52YXIgYXV0b1RvRml4ZWRBdHRhY2htZW50ID0gZnVuY3Rpb24gYXV0b1RvRml4ZWRBdHRhY2htZW50KGF0dGFjaG1lbnQsIHJlbGF0aXZlVG9BdHRhY2htZW50KSB7XG4gIHZhciBsZWZ0ID0gYXR0YWNobWVudC5sZWZ0O1xuICB2YXIgdG9wID0gYXR0YWNobWVudC50b3A7XG5cbiAgaWYgKGxlZnQgPT09ICdhdXRvJykge1xuICAgIGxlZnQgPSBNSVJST1JfTFJbcmVsYXRpdmVUb0F0dGFjaG1lbnQubGVmdF07XG4gIH1cblxuICBpZiAodG9wID09PSAnYXV0bycpIHtcbiAgICB0b3AgPSBNSVJST1JfVEJbcmVsYXRpdmVUb0F0dGFjaG1lbnQudG9wXTtcbiAgfVxuXG4gIHJldHVybiB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wIH07XG59O1xuXG52YXIgYXR0YWNobWVudFRvT2Zmc2V0ID0gZnVuY3Rpb24gYXR0YWNobWVudFRvT2Zmc2V0KGF0dGFjaG1lbnQpIHtcbiAgdmFyIGxlZnQgPSBhdHRhY2htZW50LmxlZnQ7XG4gIHZhciB0b3AgPSBhdHRhY2htZW50LnRvcDtcblxuICBpZiAodHlwZW9mIE9GRlNFVF9NQVBbYXR0YWNobWVudC5sZWZ0XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZWZ0ID0gT0ZGU0VUX01BUFthdHRhY2htZW50LmxlZnRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBPRkZTRVRfTUFQW2F0dGFjaG1lbnQudG9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0b3AgPSBPRkZTRVRfTUFQW2F0dGFjaG1lbnQudG9wXTtcbiAgfVxuXG4gIHJldHVybiB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wIH07XG59O1xuXG5mdW5jdGlvbiBhZGRPZmZzZXQoKSB7XG4gIHZhciBvdXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvZmZzZXRzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2Zmc2V0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG9mZnNldHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0b3AgPSBfcmVmLnRvcDtcbiAgICB2YXIgbGVmdCA9IF9yZWYubGVmdDtcblxuICAgIGlmICh0eXBlb2YgdG9wID09PSAnc3RyaW5nJykge1xuICAgICAgdG9wID0gcGFyc2VGbG9hdCh0b3AsIDEwKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgbGVmdCA9IHBhcnNlRmxvYXQobGVmdCwgMTApO1xuICAgIH1cblxuICAgIG91dC50b3AgKz0gdG9wO1xuICAgIG91dC5sZWZ0ICs9IGxlZnQ7XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG9mZnNldFRvUHgob2Zmc2V0LCBzaXplKSB7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0LmxlZnQgPT09ICdzdHJpbmcnICYmIG9mZnNldC5sZWZ0LmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICBvZmZzZXQubGVmdCA9IHBhcnNlRmxvYXQob2Zmc2V0LmxlZnQsIDEwKSAvIDEwMCAqIHNpemUud2lkdGg7XG4gIH1cbiAgaWYgKHR5cGVvZiBvZmZzZXQudG9wID09PSAnc3RyaW5nJyAmJiBvZmZzZXQudG9wLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICBvZmZzZXQudG9wID0gcGFyc2VGbG9hdChvZmZzZXQudG9wLCAxMCkgLyAxMDAgKiBzaXplLmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbnZhciBwYXJzZU9mZnNldCA9IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KHZhbHVlKSB7XG4gIHZhciBfdmFsdWUkc3BsaXQgPSB2YWx1ZS5zcGxpdCgnICcpO1xuXG4gIHZhciBfdmFsdWUkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0LCAyKTtcblxuICB2YXIgdG9wID0gX3ZhbHVlJHNwbGl0MlswXTtcbiAgdmFyIGxlZnQgPSBfdmFsdWUkc3BsaXQyWzFdO1xuXG4gIHJldHVybiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH07XG59O1xudmFyIHBhcnNlQXR0YWNobWVudCA9IHBhcnNlT2Zmc2V0O1xuXG52YXIgVGV0aGVyQ2xhc3MgPSAoZnVuY3Rpb24gKF9FdmVudGVkKSB7XG4gIF9pbmhlcml0cyhUZXRoZXJDbGFzcywgX0V2ZW50ZWQpO1xuXG4gIGZ1bmN0aW9uIFRldGhlckNsYXNzKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRldGhlckNsYXNzKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFRldGhlckNsYXNzLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIHRldGhlcnMucHVzaCh0aGlzKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMsIGZhbHNlKTtcblxuICAgIFRldGhlckJhc2UubW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmluaXRpYWxpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5pbml0aWFsaXplLmNhbGwoX3RoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5wb3NpdGlvbigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRldGhlckNsYXNzLCBbe1xuICAgIGtleTogJ2dldENsYXNzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xhc3MoKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzO1xuXG4gICAgICBpZiAodHlwZW9mIGNsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIGNsYXNzZXNba2V5XSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzZXNba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNsYXNzUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3NQcmVmaXggKyAnLScgKyBrZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcG9zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBvZmZzZXQ6ICcwIDAnLFxuICAgICAgICB0YXJnZXRPZmZzZXQ6ICcwIDAnLFxuICAgICAgICB0YXJnZXRBdHRhY2htZW50OiAnYXV0byBhdXRvJyxcbiAgICAgICAgY2xhc3NQcmVmaXg6ICd0ZXRoZXInXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgX29wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB2YXIgZWxlbWVudCA9IF9vcHRpb25zLmVsZW1lbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gX29wdGlvbnMudGFyZ2V0O1xuICAgICAgdmFyIHRhcmdldE1vZGlmaWVyID0gX29wdGlvbnMudGFyZ2V0TW9kaWZpZXI7XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRoaXMudGFyZ2V0TW9kaWZpZXIgPSB0YXJnZXRNb2RpZmllcjtcblxuICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy50YXJnZXRNb2RpZmllciA9ICd2aXNpYmxlJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQgPT09ICdzY3JvbGwtaGFuZGxlJykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMudGFyZ2V0TW9kaWZpZXIgPSAnc2Nyb2xsLWhhbmRsZSc7XG4gICAgICB9XG5cbiAgICAgIFsnZWxlbWVudCcsICd0YXJnZXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczJba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RldGhlciBFcnJvcjogQm90aCBlbGVtZW50IGFuZCB0YXJnZXQgbXVzdCBiZSBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzMltrZXldLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBfdGhpczJba2V5XSA9IF90aGlzMltrZXldWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczJba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBfdGhpczJba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX3RoaXMyW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLmdldENsYXNzKCdlbGVtZW50JykpO1xuICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5nZXRDbGFzcygndGFyZ2V0JykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdHRhY2htZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGV0aGVyIEVycm9yOiBZb3UgbXVzdCBwcm92aWRlIGFuIGF0dGFjaG1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50YXJnZXRBdHRhY2htZW50ID0gcGFyc2VBdHRhY2htZW50KHRoaXMub3B0aW9ucy50YXJnZXRBdHRhY2htZW50KTtcbiAgICAgIHRoaXMuYXR0YWNobWVudCA9IHBhcnNlQXR0YWNobWVudCh0aGlzLm9wdGlvbnMuYXR0YWNobWVudCk7XG4gICAgICB0aGlzLm9mZnNldCA9IHBhcnNlT2Zmc2V0KHRoaXMub3B0aW9ucy5vZmZzZXQpO1xuICAgICAgdGhpcy50YXJnZXRPZmZzZXQgPSBwYXJzZU9mZnNldCh0aGlzLm9wdGlvbnMudGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjcm9sbFBhcmVudHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50YXJnZXRNb2RpZmllciA9PT0gJ3Njcm9sbC1oYW5kbGUnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cyA9IFt0aGlzLnRhcmdldF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudHMgPSBnZXRTY3JvbGxQYXJlbnRzKHRoaXMudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlKSkge1xuICAgICAgICB0aGlzLmVuYWJsZShwb3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRhcmdldEJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldEJvdW5kcygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy50YXJnZXRNb2RpZmllciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kaWZpZXIgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiBwYWdlWU9mZnNldCwgbGVmdDogcGFnZVhPZmZzZXQsIGhlaWdodDogaW5uZXJIZWlnaHQsIHdpZHRoOiBpbm5lcldpZHRoIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSBnZXRCb3VuZHModGhpcy50YXJnZXQpO1xuXG4gICAgICAgICAgICB2YXIgb3V0ID0ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGJvdW5kcy5oZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBib3VuZHMud2lkdGgsXG4gICAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogYm91bmRzLmxlZnRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1pbihvdXQuaGVpZ2h0LCBib3VuZHMuaGVpZ2h0IC0gKHBhZ2VZT2Zmc2V0IC0gYm91bmRzLnRvcCkpO1xuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWluKG91dC5oZWlnaHQsIGJvdW5kcy5oZWlnaHQgLSAoYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSAocGFnZVlPZmZzZXQgKyBpbm5lckhlaWdodCkpKTtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1pbihpbm5lckhlaWdodCwgb3V0LmhlaWdodCk7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0IC09IDI7XG5cbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKG91dC53aWR0aCwgYm91bmRzLndpZHRoIC0gKHBhZ2VYT2Zmc2V0IC0gYm91bmRzLmxlZnQpKTtcbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKG91dC53aWR0aCwgYm91bmRzLndpZHRoIC0gKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gKHBhZ2VYT2Zmc2V0ICsgaW5uZXJXaWR0aCkpKTtcbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKGlubmVyV2lkdGgsIG91dC53aWR0aCk7XG4gICAgICAgICAgICBvdXQud2lkdGggLT0gMjtcblxuICAgICAgICAgICAgaWYgKG91dC50b3AgPCBwYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICBvdXQudG9wID0gcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3V0LmxlZnQgPCBwYWdlWE9mZnNldCkge1xuICAgICAgICAgICAgICBvdXQubGVmdCA9IHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldE1vZGlmaWVyID09PSAnc2Nyb2xsLWhhbmRsZScpIHtcbiAgICAgICAgICB2YXIgYm91bmRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgbGVmdDogcGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgIHRvcDogcGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgIGhlaWdodDogaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBpbm5lcldpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib3VuZHMgPSBnZXRCb3VuZHModGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG5cbiAgICAgICAgICB2YXIgaGFzQm90dG9tU2Nyb2xsID0gdGFyZ2V0LnNjcm9sbFdpZHRoID4gdGFyZ2V0LmNsaWVudFdpZHRoIHx8IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYXS5pbmRleE9mKCdzY3JvbGwnKSA+PSAwIHx8IHRoaXMudGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IDA7XG4gICAgICAgICAgaWYgKGhhc0JvdHRvbVNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsQm90dG9tID0gMTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpIC0gc2Nyb2xsQm90dG9tO1xuXG4gICAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogMC45NzUgKiAoaGVpZ2h0IC8gdGFyZ2V0LnNjcm9sbEhlaWdodCksXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAtIDE1XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBmaXRBZGogPSAwO1xuICAgICAgICAgIGlmIChoZWlnaHQgPCA0MDggJiYgdGhpcy50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGZpdEFkaiA9IC0wLjAwMDExICogTWF0aC5wb3coaGVpZ2h0LCAyKSAtIDAuMDA3MjcgKiBoZWlnaHQgKyAyMi41ODtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heChvdXQuaGVpZ2h0LCAyNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNjcm9sbFBlcmNlbnRhZ2UgPSB0aGlzLnRhcmdldC5zY3JvbGxUb3AgLyAodGFyZ2V0LnNjcm9sbEhlaWdodCAtIGhlaWdodCk7XG4gICAgICAgICAgb3V0LnRvcCA9IHNjcm9sbFBlcmNlbnRhZ2UgKiAoaGVpZ2h0IC0gb3V0LmhlaWdodCAtIGZpdEFkaikgKyBib3VuZHMudG9wICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG5cbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heChvdXQuaGVpZ2h0LCAyNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldEJvdW5kcyh0aGlzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXJDYWNoZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyQ2FjaGUoKSB7XG4gICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhY2hlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGUoaywgZ2V0dGVyKSB7XG4gICAgICAvLyBNb3JlIHRoYW4gb25lIG1vZHVsZSB3aWxsIG9mdGVuIG5lZWQgdGhlIHNhbWUgRE9NIGluZm8sIHNvXG4gICAgICAvLyB3ZSBrZWVwIGEgY2FjaGUgd2hpY2ggaXMgY2xlYXJlZCBvbiBlYWNoIHBvc2l0aW9uIGNhbGxcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2FjaGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2FjaGVba10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tdID0gZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIGlmICghKHRoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IF90aGlzMy50YXJnZXQub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpczMucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBvcykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjcm9sbFBhcmVudHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXM0LnBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgICAgIHRldGhlcnMuZm9yRWFjaChmdW5jdGlvbiAodGV0aGVyLCBpKSB7XG4gICAgICAgIGlmICh0ZXRoZXIgPT09IF90aGlzNSkge1xuICAgICAgICAgIHRldGhlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBlbGVtZW50cyB3ZSB3ZXJlIHVzaW5nIGZvciBjb252ZW5pZW5jZSBmcm9tIHRoZSBET01cbiAgICAgIGlmICh0ZXRoZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVVdGlsRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVBdHRhY2hDbGFzc2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQXR0YWNoQ2xhc3NlcyhlbGVtZW50QXR0YWNoLCB0YXJnZXRBdHRhY2gpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBlbGVtZW50QXR0YWNoID0gZWxlbWVudEF0dGFjaCB8fCB0aGlzLmF0dGFjaG1lbnQ7XG4gICAgICB0YXJnZXRBdHRhY2ggPSB0YXJnZXRBdHRhY2ggfHwgdGhpcy50YXJnZXRBdHRhY2htZW50O1xuICAgICAgdmFyIHNpZGVzID0gWydsZWZ0JywgJ3RvcCcsICdib3R0b20nLCAncmlnaHQnLCAnbWlkZGxlJywgJ2NlbnRlciddO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIHVwZGF0ZUF0dGFjaENsYXNzZXMgY2FuIGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZSBpbiBhIHBvc2l0aW9uIGNhbGwsIHNvXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY2xlYW4gdXAgYWZ0ZXIgb3Vyc2VsdmVzIHN1Y2ggdGhhdCB3aGVuIHRoZSBsYXN0IGRlZmVyIGdldHNcbiAgICAgICAgLy8gcmFuIGl0IGRvZXNuJ3QgYWRkIGFueSBleHRyYSBjbGFzc2VzIGZyb20gcHJldmlvdXMgY2FsbHMuXG4gICAgICAgIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMuc3BsaWNlKDAsIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzID0gW107XG4gICAgICB9XG4gICAgICB2YXIgYWRkID0gdGhpcy5fYWRkQXR0YWNoQ2xhc3NlcztcblxuICAgICAgaWYgKGVsZW1lbnRBdHRhY2gudG9wKSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ2VsZW1lbnQtYXR0YWNoZWQnKSArICctJyArIGVsZW1lbnRBdHRhY2gudG9wKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50QXR0YWNoLmxlZnQpIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygnZWxlbWVudC1hdHRhY2hlZCcpICsgJy0nICsgZWxlbWVudEF0dGFjaC5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRBdHRhY2gudG9wKSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ3RhcmdldC1hdHRhY2hlZCcpICsgJy0nICsgdGFyZ2V0QXR0YWNoLnRvcCk7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0QXR0YWNoLmxlZnQpIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygndGFyZ2V0LWF0dGFjaGVkJykgKyAnLScgKyB0YXJnZXRBdHRhY2gubGVmdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbGwgPSBbXTtcbiAgICAgIHNpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgYWxsLnB1c2goX3RoaXM2LmdldENsYXNzKCdlbGVtZW50LWF0dGFjaGVkJykgKyAnLScgKyBzaWRlKTtcbiAgICAgICAgYWxsLnB1c2goX3RoaXM2LmdldENsYXNzKCd0YXJnZXQtYXR0YWNoZWQnKSArICctJyArIHNpZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcyAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpczYuZWxlbWVudCwgX3RoaXM2Ll9hZGRBdHRhY2hDbGFzc2VzLCBhbGwpO1xuICAgICAgICBpZiAoIShfdGhpczYub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzNi50YXJnZXQsIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcywgYWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBfdGhpczYuX2FkZEF0dGFjaENsYXNzZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciBmbHVzaENoYW5nZXMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAvLyBmbHVzaENoYW5nZXMgY29tbWl0cyB0aGUgY2hhbmdlcyBpbW1lZGlhdGVseSwgbGVhdmUgdHJ1ZSB1bmxlc3MgeW91IGFyZSBwb3NpdGlvbmluZyBtdWx0aXBsZVxuICAgICAgLy8gdGV0aGVycyAoaW4gd2hpY2ggY2FzZSBjYWxsIFRldGhlci5VdGlscy5mbHVzaCB5b3Vyc2VsZiB3aGVuIHlvdSdyZSBkb25lKVxuXG4gICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuXG4gICAgICAvLyBUdXJuICdhdXRvJyBhdHRhY2htZW50cyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBjb3JuZXIgb3IgZWRnZVxuICAgICAgdmFyIHRhcmdldEF0dGFjaG1lbnQgPSBhdXRvVG9GaXhlZEF0dGFjaG1lbnQodGhpcy50YXJnZXRBdHRhY2htZW50LCB0aGlzLmF0dGFjaG1lbnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZUF0dGFjaENsYXNzZXModGhpcy5hdHRhY2htZW50LCB0YXJnZXRBdHRhY2htZW50KTtcblxuICAgICAgdmFyIGVsZW1lbnRQb3MgPSB0aGlzLmNhY2hlKCdlbGVtZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEJvdW5kcyhfdGhpczcuZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gZWxlbWVudFBvcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50UG9zLmhlaWdodDtcblxuICAgICAgaWYgKHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMCAmJiB0eXBlb2YgdGhpcy5sYXN0U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIF9sYXN0U2l6ZSA9IHRoaXMubGFzdFNpemU7XG5cbiAgICAgICAgLy8gV2UgY2FjaGUgdGhlIGhlaWdodCBhbmQgd2lkdGggdG8gbWFrZSBpdCBwb3NzaWJsZSB0byBwb3NpdGlvbiBlbGVtZW50cyB0aGF0IGFyZVxuICAgICAgICAvLyBnZXR0aW5nIGhpZGRlbi5cbiAgICAgICAgd2lkdGggPSBfbGFzdFNpemUud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IF9sYXN0U2l6ZS5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RTaXplID0geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRQb3MgPSB0aGlzLmNhY2hlKCd0YXJnZXQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM3LmdldFRhcmdldEJvdW5kcygpO1xuICAgICAgfSk7XG4gICAgICB2YXIgdGFyZ2V0U2l6ZSA9IHRhcmdldFBvcztcblxuICAgICAgLy8gR2V0IGFuIGFjdHVhbCBweCBvZmZzZXQgZnJvbSB0aGUgYXR0YWNobWVudFxuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldFRvUHgoYXR0YWNobWVudFRvT2Zmc2V0KHRoaXMuYXR0YWNobWVudCksIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgICAgIHZhciB0YXJnZXRPZmZzZXQgPSBvZmZzZXRUb1B4KGF0dGFjaG1lbnRUb09mZnNldCh0YXJnZXRBdHRhY2htZW50KSwgdGFyZ2V0U2l6ZSk7XG5cbiAgICAgIHZhciBtYW51YWxPZmZzZXQgPSBvZmZzZXRUb1B4KHRoaXMub2Zmc2V0LCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICB2YXIgbWFudWFsVGFyZ2V0T2Zmc2V0ID0gb2Zmc2V0VG9QeCh0aGlzLnRhcmdldE9mZnNldCwgdGFyZ2V0U2l6ZSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbWFudWFsbHkgcHJvdmlkZWQgb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBhZGRPZmZzZXQob2Zmc2V0LCBtYW51YWxPZmZzZXQpO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWRkT2Zmc2V0KHRhcmdldE9mZnNldCwgbWFudWFsVGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgLy8gSXQncyBub3cgb3VyIGdvYWwgdG8gbWFrZSAoZWxlbWVudCBwb3NpdGlvbiArIG9mZnNldCkgPT0gKHRhcmdldCBwb3NpdGlvbiArIHRhcmdldCBvZmZzZXQpXG4gICAgICB2YXIgbGVmdCA9IHRhcmdldFBvcy5sZWZ0ICsgdGFyZ2V0T2Zmc2V0LmxlZnQgLSBvZmZzZXQubGVmdDtcbiAgICAgIHZhciB0b3AgPSB0YXJnZXRQb3MudG9wICsgdGFyZ2V0T2Zmc2V0LnRvcCAtIG9mZnNldC50b3A7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGV0aGVyQmFzZS5tb2R1bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBfbW9kdWxlMiA9IFRldGhlckJhc2UubW9kdWxlc1tpXTtcbiAgICAgICAgdmFyIHJldCA9IF9tb2R1bGUyLnBvc2l0aW9uLmNhbGwodGhpcywge1xuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgdGFyZ2V0QXR0YWNobWVudDogdGFyZ2V0QXR0YWNobWVudCxcbiAgICAgICAgICB0YXJnZXRQb3M6IHRhcmdldFBvcyxcbiAgICAgICAgICBlbGVtZW50UG9zOiBlbGVtZW50UG9zLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0LFxuICAgICAgICAgIG1hbnVhbE9mZnNldDogbWFudWFsT2Zmc2V0LFxuICAgICAgICAgIG1hbnVhbFRhcmdldE9mZnNldDogbWFudWFsVGFyZ2V0T2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbGJhclNpemU6IHNjcm9sbGJhclNpemUsXG4gICAgICAgICAgYXR0YWNobWVudDogdGhpcy5hdHRhY2htZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiByZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wID0gcmV0LnRvcDtcbiAgICAgICAgICBsZWZ0ID0gcmV0LmxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2UgZGVzY3JpYmUgdGhlIHBvc2l0aW9uIHRocmVlIGRpZmZlcmVudCB3YXlzIHRvIGdpdmUgdGhlIG9wdGltaXplclxuICAgICAgLy8gYSBjaGFuY2UgdG8gZGVjaWRlIHRoZSBiZXN0IHBvc3NpYmxlIHdheSB0byBwb3NpdGlvbiB0aGUgZWxlbWVudFxuICAgICAgLy8gd2l0aCB0aGUgZmV3ZXN0IHJlcGFpbnRzLlxuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIC8vIEl0J3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHBhZ2UgKGFic29sdXRlIHBvc2l0aW9uaW5nIHdoZW5cbiAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgYm9keSlcbiAgICAgICAgcGFnZToge1xuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJdCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAoZml4ZWQgcG9zaXRpb25pbmcpXG4gICAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgICAgdG9wOiB0b3AgLSBwYWdlWU9mZnNldCxcbiAgICAgICAgICBib3R0b206IHBhZ2VZT2Zmc2V0IC0gdG9wIC0gaGVpZ2h0ICsgaW5uZXJIZWlnaHQsXG4gICAgICAgICAgbGVmdDogbGVmdCAtIHBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIHJpZ2h0OiBwYWdlWE9mZnNldCAtIGxlZnQgLSB3aWR0aCArIGlubmVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGRvYyA9IHRoaXMudGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3O1xuXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh3aW4uaW5uZXJIZWlnaHQgPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICBzY3JvbGxiYXJTaXplID0gdGhpcy5jYWNoZSgnc2Nyb2xsYmFyLXNpemUnLCBnZXRTY3JvbGxCYXJTaXplKTtcbiAgICAgICAgbmV4dC52aWV3cG9ydC5ib3R0b20gLT0gc2Nyb2xsYmFyU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW4uaW5uZXJXaWR0aCA+IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsYmFyU2l6ZSA9IHRoaXMuY2FjaGUoJ3Njcm9sbGJhci1zaXplJywgZ2V0U2Nyb2xsQmFyU2l6ZSk7XG4gICAgICAgIG5leHQudmlld3BvcnQucmlnaHQgLT0gc2Nyb2xsYmFyU2l6ZS53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKFsnJywgJ3N0YXRpYyddLmluZGV4T2YoZG9jLmJvZHkuc3R5bGUucG9zaXRpb24pID09PSAtMSB8fCBbJycsICdzdGF0aWMnXS5pbmRleE9mKGRvYy5ib2R5LnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24pID09PSAtMSkge1xuICAgICAgICAvLyBBYnNvbHV0ZSBwb3NpdGlvbmluZyBpbiB0aGUgYm9keSB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoZSBwYWdlLCBub3QgdGhlICdpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2snXG4gICAgICAgIG5leHQucGFnZS5ib3R0b20gPSBkb2MuYm9keS5zY3JvbGxIZWlnaHQgLSB0b3AgLSBoZWlnaHQ7XG4gICAgICAgIG5leHQucGFnZS5yaWdodCA9IGRvYy5ib2R5LnNjcm9sbFdpZHRoIC0gbGVmdCAtIHdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vcHRpbWl6YXRpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm9wdGlvbnMub3B0aW1pemF0aW9ucy5tb3ZlRWxlbWVudCAhPT0gZmFsc2UgJiYgISh0eXBlb2YgdGhpcy50YXJnZXRNb2RpZmllciAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IF90aGlzNy5jYWNoZSgndGFyZ2V0LW9mZnNldHBhcmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoX3RoaXM3LnRhcmdldCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIG9mZnNldFBvc2l0aW9uID0gX3RoaXM3LmNhY2hlKCd0YXJnZXQtb2Zmc2V0cGFyZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCb3VuZHMob2Zmc2V0UGFyZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCk7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudFNpemUgPSBvZmZzZXRQb3NpdGlvbjtcblxuICAgICAgICAgIHZhciBvZmZzZXRCb3JkZXIgPSB7fTtcbiAgICAgICAgICBbJ1RvcCcsICdMZWZ0JywgJ0JvdHRvbScsICdSaWdodCddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIG9mZnNldEJvcmRlcltzaWRlLnRvTG93ZXJDYXNlKCldID0gcGFyc2VGbG9hdChvZmZzZXRQYXJlbnRTdHlsZVsnYm9yZGVyJyArIHNpZGUgKyAnV2lkdGgnXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbi5yaWdodCA9IGRvYy5ib2R5LnNjcm9sbFdpZHRoIC0gb2Zmc2V0UG9zaXRpb24ubGVmdCAtIG9mZnNldFBhcmVudFNpemUud2lkdGggKyBvZmZzZXRCb3JkZXIucmlnaHQ7XG4gICAgICAgICAgb2Zmc2V0UG9zaXRpb24uYm90dG9tID0gZG9jLmJvZHkuc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0UG9zaXRpb24udG9wIC0gb2Zmc2V0UGFyZW50U2l6ZS5oZWlnaHQgKyBvZmZzZXRCb3JkZXIuYm90dG9tO1xuXG4gICAgICAgICAgaWYgKG5leHQucGFnZS50b3AgPj0gb2Zmc2V0UG9zaXRpb24udG9wICsgb2Zmc2V0Qm9yZGVyLnRvcCAmJiBuZXh0LnBhZ2UuYm90dG9tID49IG9mZnNldFBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgaWYgKG5leHQucGFnZS5sZWZ0ID49IG9mZnNldFBvc2l0aW9uLmxlZnQgKyBvZmZzZXRCb3JkZXIubGVmdCAmJiBuZXh0LnBhZ2UucmlnaHQgPj0gb2Zmc2V0UG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICAgICAgLy8gV2UncmUgd2l0aGluIHRoZSB2aXNpYmxlIHBhcnQgb2YgdGhlIHRhcmdldCdzIHNjcm9sbCBwYXJlbnRcbiAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IG9mZnNldFBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgICAgICAgLy8gSXQncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0J3Mgb2Zmc2V0IHBhcmVudCAoYWJzb2x1dGUgcG9zaXRpb25pbmcgd2hlblxuICAgICAgICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBtb3ZlZCB0byBiZSBhIGNoaWxkIG9mIHRoZSB0YXJnZXQncyBvZmZzZXQgcGFyZW50KS5cbiAgICAgICAgICAgICAgbmV4dC5vZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiBuZXh0LnBhZ2UudG9wIC0gb2Zmc2V0UG9zaXRpb24udG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0Qm9yZGVyLnRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBuZXh0LnBhZ2UubGVmdCAtIG9mZnNldFBvc2l0aW9uLmxlZnQgKyBzY3JvbGxMZWZ0IC0gb2Zmc2V0Qm9yZGVyLmxlZnRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGNvdWxkIGFsc28gdHJhdmVsIHVwIHRoZSBET00gYW5kIHRyeSBlYWNoIGNvbnRhaW5pbmcgY29udGV4dCwgcmF0aGVyIHRoYW4gb25seVxuICAgICAgLy8gbG9va2luZyBhdCB0aGUgYm9keSwgYnV0IHdlJ3JlIGdvbm5hIGdldCBkaW1pbmlzaGluZyByZXR1cm5zLlxuXG4gICAgICB0aGlzLm1vdmUobmV4dCk7XG5cbiAgICAgIHRoaXMuaGlzdG9yeS51bnNoaWZ0KG5leHQpO1xuXG4gICAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDMpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmx1c2hDaGFuZ2VzKSB7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRIRSBJU1NVRVxuICB9LCB7XG4gICAga2V5OiAnbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmUocG9zKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgaWYgKCEodHlwZW9mIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2FtZSA9IHt9O1xuXG4gICAgICBmb3IgKHZhciB0eXBlIGluIHBvcykge1xuICAgICAgICBzYW1lW3R5cGVdID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBvc1t0eXBlXSkge1xuICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhpc3RvcnkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHRoaXMuaGlzdG9yeVtpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnRbdHlwZV0gIT09ICd1bmRlZmluZWQnICYmICF3aXRoaW4ocG9pbnRbdHlwZV1ba2V5XSwgcG9zW3R5cGVdW2tleV0pKSB7XG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgc2FtZVt0eXBlXVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNzcyA9IHsgdG9wOiAnJywgbGVmdDogJycsIHJpZ2h0OiAnJywgYm90dG9tOiAnJyB9O1xuXG4gICAgICB2YXIgdHJhbnNjcmliZSA9IGZ1bmN0aW9uIHRyYW5zY3JpYmUoX3NhbWUsIF9wb3MpIHtcbiAgICAgICAgdmFyIGhhc09wdGltaXphdGlvbnMgPSB0eXBlb2YgX3RoaXM4Lm9wdGlvbnMub3B0aW1pemF0aW9ucyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIHZhciBncHUgPSBoYXNPcHRpbWl6YXRpb25zID8gX3RoaXM4Lm9wdGlvbnMub3B0aW1pemF0aW9ucy5ncHUgOiBudWxsO1xuICAgICAgICBpZiAoZ3B1ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHZhciB5UG9zID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB4UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChfc2FtZS50b3ApIHtcbiAgICAgICAgICAgIGNzcy50b3AgPSAwO1xuICAgICAgICAgICAgeVBvcyA9IF9wb3MudG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MuYm90dG9tID0gMDtcbiAgICAgICAgICAgIHlQb3MgPSAtX3Bvcy5ib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9zYW1lLmxlZnQpIHtcbiAgICAgICAgICAgIGNzcy5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHhQb3MgPSBfcG9zLmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5yaWdodCA9IDA7XG4gICAgICAgICAgICB4UG9zID0gLV9wb3MucmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgICAgICAvLyBIdWJTcG90L3RldGhlciMyMDdcbiAgICAgICAgICAgIHZhciByZXRpbmEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS4zZHBweCknKS5tYXRjaGVzIHx8IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKScpLm1hdGNoZXM7XG4gICAgICAgICAgICBpZiAoIXJldGluYSkge1xuICAgICAgICAgICAgICB4UG9zID0gTWF0aC5yb3VuZCh4UG9zKTtcbiAgICAgICAgICAgICAgeVBvcyA9IE1hdGgucm91bmQoeVBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3NzW3RyYW5zZm9ybUtleV0gPSAndHJhbnNsYXRlWCgnICsgeFBvcyArICdweCkgdHJhbnNsYXRlWSgnICsgeVBvcyArICdweCknO1xuXG4gICAgICAgICAgaWYgKHRyYW5zZm9ybUtleSAhPT0gJ21zVHJhbnNmb3JtJykge1xuICAgICAgICAgICAgLy8gVGhlIFogdHJhbnNmb3JtIHdpbGwga2VlcCB0aGlzIGluIHRoZSBHUFUgKGZhc3RlciwgYW5kIHByZXZlbnRzIGFydGlmYWN0cyksXG4gICAgICAgICAgICAvLyBidXQgSUU5IGRvZXNuJ3Qgc3VwcG9ydCAzZCB0cmFuc2Zvcm1zIGFuZCB3aWxsIGNob2tlLlxuICAgICAgICAgICAgY3NzW3RyYW5zZm9ybUtleV0gKz0gXCIgdHJhbnNsYXRlWigwKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX3NhbWUudG9wKSB7XG4gICAgICAgICAgICBjc3MudG9wID0gX3Bvcy50b3AgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MuYm90dG9tID0gX3Bvcy5ib3R0b20gKyAncHgnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfc2FtZS5sZWZ0KSB7XG4gICAgICAgICAgICBjc3MubGVmdCA9IF9wb3MubGVmdCArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5yaWdodCA9IF9wb3MucmlnaHQgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG1vdmVkID0gZmFsc2U7XG4gICAgICBpZiAoKHNhbWUucGFnZS50b3AgfHwgc2FtZS5wYWdlLmJvdHRvbSkgJiYgKHNhbWUucGFnZS5sZWZ0IHx8IHNhbWUucGFnZS5yaWdodCkpIHtcbiAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdHJhbnNjcmliZShzYW1lLnBhZ2UsIHBvcy5wYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoKHNhbWUudmlld3BvcnQudG9wIHx8IHNhbWUudmlld3BvcnQuYm90dG9tKSAmJiAoc2FtZS52aWV3cG9ydC5sZWZ0IHx8IHNhbWUudmlld3BvcnQucmlnaHQpKSB7XG4gICAgICAgIGNzcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHRyYW5zY3JpYmUoc2FtZS52aWV3cG9ydCwgcG9zLnZpZXdwb3J0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNhbWUub2Zmc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBzYW1lLm9mZnNldC50b3AgJiYgc2FtZS5vZmZzZXQubGVmdCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IF90aGlzOC5jYWNoZSgndGFyZ2V0LW9mZnNldHBhcmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoX3RoaXM4LnRhcmdldCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoZ2V0T2Zmc2V0UGFyZW50KF90aGlzOC5lbGVtZW50KSAhPT0gb2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzOC5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3RoaXM4LmVsZW1lbnQpO1xuICAgICAgICAgICAgICBvZmZzZXRQYXJlbnQuYXBwZW5kQ2hpbGQoX3RoaXM4LmVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJhbnNjcmliZShzYW1lLm9mZnNldCwgcG9zLm9mZnNldCk7XG4gICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICB9KSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdHJhbnNjcmliZSh7IHRvcDogdHJ1ZSwgbGVmdDogdHJ1ZSB9LCBwb3MucGFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW92ZWQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ib2R5RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5ib2R5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnRJc0JvZHkgPSB0cnVlO1xuICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBjdXJyZW50Tm9kZS50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICAgICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50SXNCb2R5ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFvZmZzZXRQYXJlbnRJc0JvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFueSBjc3MgY2hhbmdlIHdpbGwgdHJpZ2dlciBhIHJlcGFpbnQsIHNvIGxldCdzIGF2b2lkIG9uZSBpZiBub3RoaW5nIGNoYW5nZWRcbiAgICAgIHZhciB3cml0ZUNTUyA9IHt9O1xuICAgICAgdmFyIHdyaXRlID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY3NzKSB7XG4gICAgICAgIHZhciB2YWwgPSBjc3Nba2V5XTtcbiAgICAgICAgdmFyIGVsVmFsID0gdGhpcy5lbGVtZW50LnN0eWxlW2tleV07XG5cbiAgICAgICAgaWYgKGVsVmFsICE9PSB2YWwpIHtcbiAgICAgICAgICB3cml0ZSA9IHRydWU7XG4gICAgICAgICAgd3JpdGVDU1Nba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAod3JpdGUpIHtcbiAgICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGV4dGVuZChfdGhpczguZWxlbWVudC5zdHlsZSwgd3JpdGVDU1MpO1xuICAgICAgICAgIF90aGlzOC50cmlnZ2VyKCdyZXBvc2l0aW9uZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRldGhlckNsYXNzO1xufSkoRXZlbnRlZCk7XG5cblRldGhlckNsYXNzLm1vZHVsZXMgPSBbXTtcblxuVGV0aGVyQmFzZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG52YXIgVGV0aGVyID0gZXh0ZW5kKFRldGhlckNsYXNzLCBUZXRoZXJCYXNlKTtcbi8qIGdsb2JhbHMgVGV0aGVyQmFzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgX1RldGhlckJhc2UkVXRpbHMgPSBUZXRoZXJCYXNlLlV0aWxzO1xudmFyIGdldEJvdW5kcyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldEJvdW5kcztcbnZhciBleHRlbmQgPSBfVGV0aGVyQmFzZSRVdGlscy5leHRlbmQ7XG52YXIgdXBkYXRlQ2xhc3NlcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnVwZGF0ZUNsYXNzZXM7XG52YXIgZGVmZXIgPSBfVGV0aGVyQmFzZSRVdGlscy5kZWZlcjtcblxudmFyIEJPVU5EU19GT1JNQVQgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddO1xuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ1JlY3QodGV0aGVyLCB0bykge1xuICBpZiAodG8gPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgdG8gPSB0ZXRoZXIuc2Nyb2xsUGFyZW50c1swXTtcbiAgfSBlbHNlIGlmICh0byA9PT0gJ3dpbmRvdycpIHtcbiAgICB0byA9IFtwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQsIGlubmVyV2lkdGggKyBwYWdlWE9mZnNldCwgaW5uZXJIZWlnaHQgKyBwYWdlWU9mZnNldF07XG4gIH1cblxuICBpZiAodG8gPT09IGRvY3VtZW50KSB7XG4gICAgdG8gPSB0by5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHRvLm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbm9kZSA9IHRvO1xuICAgICAgdmFyIHNpemUgPSBnZXRCb3VuZHModG8pO1xuICAgICAgdmFyIHBvcyA9IHNpemU7XG4gICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRvKTtcblxuICAgICAgdG8gPSBbcG9zLmxlZnQsIHBvcy50b3AsIHNpemUud2lkdGggKyBwb3MubGVmdCwgc2l6ZS5oZWlnaHQgKyBwb3MudG9wXTtcblxuICAgICAgLy8gQWNjb3VudCBhbnkgcGFyZW50IEZyYW1lcyBzY3JvbGwgb2Zmc2V0XG4gICAgICBpZiAobm9kZS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICB2YXIgd2luID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB0b1swXSArPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgICAgIHRvWzFdICs9IHdpbi5wYWdlWU9mZnNldDtcbiAgICAgICAgdG9bMl0gKz0gd2luLnBhZ2VYT2Zmc2V0O1xuICAgICAgICB0b1szXSArPSB3aW4ucGFnZVlPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIEJPVU5EU19GT1JNQVQuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSwgaSkge1xuICAgICAgICBzaWRlID0gc2lkZVswXS50b1VwcGVyQ2FzZSgpICsgc2lkZS5zdWJzdHIoMSk7XG4gICAgICAgIGlmIChzaWRlID09PSAnVG9wJyB8fCBzaWRlID09PSAnTGVmdCcpIHtcbiAgICAgICAgICB0b1tpXSArPSBwYXJzZUZsb2F0KHN0eWxlWydib3JkZXInICsgc2lkZSArICdXaWR0aCddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b1tpXSAtPSBwYXJzZUZsb2F0KHN0eWxlWydib3JkZXInICsgc2lkZSArICdXaWR0aCddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuVGV0aGVyQmFzZS5tb2R1bGVzLnB1c2goe1xuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG4gICAgdmFyIHRhcmdldEF0dGFjaG1lbnQgPSBfcmVmLnRhcmdldEF0dGFjaG1lbnQ7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jb25zdHJhaW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIF9jYWNoZSA9IHRoaXMuY2FjaGUoJ2VsZW1lbnQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJvdW5kcyhfdGhpcy5lbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHZhciBoZWlnaHQgPSBfY2FjaGUuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IF9jYWNoZS53aWR0aDtcblxuICAgIGlmICh3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDAgJiYgdHlwZW9mIHRoaXMubGFzdFNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgX2xhc3RTaXplID0gdGhpcy5sYXN0U2l6ZTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBpdGVtIGdldHRpbmcgaGlkZGVuIGFzIGEgcmVzdWx0IG9mIG91ciBwb3NpdGlvbmluZyB3aXRob3V0IGdsaXRjaGluZ1xuICAgICAgLy8gdGhlIGNsYXNzZXMgaW4gYW5kIG91dFxuICAgICAgd2lkdGggPSBfbGFzdFNpemUud2lkdGg7XG4gICAgICBoZWlnaHQgPSBfbGFzdFNpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTaXplID0gdGhpcy5jYWNoZSgndGFyZ2V0LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRUYXJnZXRCb3VuZHMoKTtcbiAgICB9KTtcblxuICAgIHZhciB0YXJnZXRIZWlnaHQgPSB0YXJnZXRTaXplLmhlaWdodDtcbiAgICB2YXIgdGFyZ2V0V2lkdGggPSB0YXJnZXRTaXplLndpZHRoO1xuXG4gICAgdmFyIGFsbENsYXNzZXMgPSBbdGhpcy5nZXRDbGFzcygncGlubmVkJyksIHRoaXMuZ2V0Q2xhc3MoJ291dC1vZi1ib3VuZHMnKV07XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc3RyYWludHMuZm9yRWFjaChmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgdmFyIG91dE9mQm91bmRzQ2xhc3MgPSBjb25zdHJhaW50Lm91dE9mQm91bmRzQ2xhc3M7XG4gICAgICB2YXIgcGlubmVkQ2xhc3MgPSBjb25zdHJhaW50LnBpbm5lZENsYXNzO1xuXG4gICAgICBpZiAob3V0T2ZCb3VuZHNDbGFzcykge1xuICAgICAgICBhbGxDbGFzc2VzLnB1c2gob3V0T2ZCb3VuZHNDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocGlubmVkQ2xhc3MpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKHBpbm5lZENsYXNzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFsbENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGNscyArICctJyArIHNpZGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgYWRkQ2xhc3NlcyA9IFtdO1xuXG4gICAgdmFyIHRBdHRhY2htZW50ID0gZXh0ZW5kKHt9LCB0YXJnZXRBdHRhY2htZW50KTtcbiAgICB2YXIgZUF0dGFjaG1lbnQgPSBleHRlbmQoe30sIHRoaXMuYXR0YWNobWVudCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc3RyYWludHMuZm9yRWFjaChmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgdmFyIHRvID0gY29uc3RyYWludC50bztcbiAgICAgIHZhciBhdHRhY2htZW50ID0gY29uc3RyYWludC5hdHRhY2htZW50O1xuICAgICAgdmFyIHBpbiA9IGNvbnN0cmFpbnQucGluO1xuXG4gICAgICBpZiAodHlwZW9mIGF0dGFjaG1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGF0dGFjaG1lbnQgPSAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZUF0dGFjaFggPSB1bmRlZmluZWQsXG4gICAgICAgICAgY2hhbmdlQXR0YWNoWSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChhdHRhY2htZW50LmluZGV4T2YoJyAnKSA+PSAwKSB7XG4gICAgICAgIHZhciBfYXR0YWNobWVudCRzcGxpdCA9IGF0dGFjaG1lbnQuc3BsaXQoJyAnKTtcblxuICAgICAgICB2YXIgX2F0dGFjaG1lbnQkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2F0dGFjaG1lbnQkc3BsaXQsIDIpO1xuXG4gICAgICAgIGNoYW5nZUF0dGFjaFkgPSBfYXR0YWNobWVudCRzcGxpdDJbMF07XG4gICAgICAgIGNoYW5nZUF0dGFjaFggPSBfYXR0YWNobWVudCRzcGxpdDJbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VBdHRhY2hYID0gY2hhbmdlQXR0YWNoWSA9IGF0dGFjaG1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZHMgPSBnZXRCb3VuZGluZ1JlY3QoX3RoaXMsIHRvKTtcblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFkgPT09ICd0YXJnZXQnIHx8IGNoYW5nZUF0dGFjaFkgPT09ICdib3RoJykge1xuICAgICAgICBpZiAodG9wIDwgYm91bmRzWzFdICYmIHRBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0b3AgKz0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiB0QXR0YWNobWVudC50b3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgdG9wIC09IHRhcmdldEhlaWdodDtcbiAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWSA9PT0gJ3RvZ2V0aGVyJykge1xuICAgICAgICBpZiAodEF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC50b3AgPT09ICdib3R0b20nICYmIHRvcCA8IGJvdW5kc1sxXSkge1xuICAgICAgICAgICAgdG9wICs9IHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuXG4gICAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC50b3AgPT09ICd0b3AnICYmIHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiB0b3AgLSAoaGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0KSA+PSBib3VuZHNbMV0pIHtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQgLSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcblxuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAndG9wJyAmJiB0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10pIHtcbiAgICAgICAgICAgIHRvcCAtPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAndG9wJztcblxuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJyAmJiB0b3AgPCBib3VuZHNbMV0gJiYgdG9wICsgKGhlaWdodCAqIDIgLSB0YXJnZXRIZWlnaHQpIDw9IGJvdW5kc1szXSkge1xuICAgICAgICAgICAgdG9wICs9IGhlaWdodCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuXG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodEF0dGFjaG1lbnQudG9wID09PSAnbWlkZGxlJykge1xuICAgICAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10gJiYgZUF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9wIDwgYm91bmRzWzFdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHRvcCArPSBoZWlnaHQ7XG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFggPT09ICd0YXJnZXQnIHx8IGNoYW5nZUF0dGFjaFggPT09ICdib3RoJykge1xuICAgICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgbGVmdCAtPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hYID09PSAndG9nZXRoZXInKSB7XG4gICAgICAgIGlmIChsZWZ0IDwgYm91bmRzWzBdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcblxuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgbGVmdCAtPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG5cbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0QXR0YWNobWVudC5sZWZ0ID09PSAnY2VudGVyJykge1xuICAgICAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0gJiYgZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChsZWZ0IDwgYm91bmRzWzBdICYmIGVBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWSA9PT0gJ2VsZW1lbnQnIHx8IGNoYW5nZUF0dGFjaFkgPT09ICdib3RoJykge1xuICAgICAgICBpZiAodG9wIDwgYm91bmRzWzFdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiBlQXR0YWNobWVudC50b3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWCA9PT0gJ2VsZW1lbnQnIHx8IGNoYW5nZUF0dGFjaFggPT09ICdib3RoJykge1xuICAgICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSkge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSkge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBpbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGluID0gcGluLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHAudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocGluID09PSB0cnVlKSB7XG4gICAgICAgIHBpbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJ107XG4gICAgICB9XG5cbiAgICAgIHBpbiA9IHBpbiB8fCBbXTtcblxuICAgICAgdmFyIHBpbm5lZCA9IFtdO1xuICAgICAgdmFyIG9vYiA9IFtdO1xuXG4gICAgICBpZiAodG9wIDwgYm91bmRzWzFdKSB7XG4gICAgICAgIGlmIChwaW4uaW5kZXhPZigndG9wJykgPj0gMCkge1xuICAgICAgICAgIHRvcCA9IGJvdW5kc1sxXTtcbiAgICAgICAgICBwaW5uZWQucHVzaCgndG9wJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICAgICAgdG9wID0gYm91bmRzWzNdIC0gaGVpZ2h0O1xuICAgICAgICAgIHBpbm5lZC5wdXNoKCdib3R0b20nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgnYm90dG9tJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnQgPCBib3VuZHNbMF0pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdsZWZ0JykgPj0gMCkge1xuICAgICAgICAgIGxlZnQgPSBib3VuZHNbMF07XG4gICAgICAgICAgcGlubmVkLnB1c2goJ2xlZnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdyaWdodCcpID49IDApIHtcbiAgICAgICAgICBsZWZ0ID0gYm91bmRzWzJdIC0gd2lkdGg7XG4gICAgICAgICAgcGlubmVkLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBpbm5lZC5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcGlubmVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRpb25zLnBpbm5lZENsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGlubmVkQ2xhc3MgPSBfdGhpcy5vcHRpb25zLnBpbm5lZENsYXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaW5uZWRDbGFzcyA9IF90aGlzLmdldENsYXNzKCdwaW5uZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gocGlubmVkQ2xhc3MpO1xuICAgICAgICAgIHBpbm5lZC5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gocGlubmVkQ2xhc3MgKyAnLScgKyBzaWRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9vYi5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb29iQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRpb25zLm91dE9mQm91bmRzQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvb2JDbGFzcyA9IF90aGlzLm9wdGlvbnMub3V0T2ZCb3VuZHNDbGFzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb29iQ2xhc3MgPSBfdGhpcy5nZXRDbGFzcygnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZENsYXNzZXMucHVzaChvb2JDbGFzcyk7XG4gICAgICAgICAgb29iLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIGFkZENsYXNzZXMucHVzaChvb2JDbGFzcyArICctJyArIHNpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGlubmVkLmluZGV4T2YoJ2xlZnQnKSA+PSAwIHx8IHBpbm5lZC5pbmRleE9mKCdyaWdodCcpID49IDApIHtcbiAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9IHRBdHRhY2htZW50LmxlZnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChwaW5uZWQuaW5kZXhPZigndG9wJykgPj0gMCB8fCBwaW5uZWQuaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgICBlQXR0YWNobWVudC50b3AgPSB0QXR0YWNobWVudC50b3AgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCAhPT0gdGFyZ2V0QXR0YWNobWVudC50b3AgfHwgdEF0dGFjaG1lbnQubGVmdCAhPT0gdGFyZ2V0QXR0YWNobWVudC5sZWZ0IHx8IGVBdHRhY2htZW50LnRvcCAhPT0gX3RoaXMuYXR0YWNobWVudC50b3AgfHwgZUF0dGFjaG1lbnQubGVmdCAhPT0gX3RoaXMuYXR0YWNobWVudC5sZWZ0KSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZUF0dGFjaENsYXNzZXMoZUF0dGFjaG1lbnQsIHRBdHRhY2htZW50KTtcbiAgICAgICAgX3RoaXMudHJpZ2dlcigndXBkYXRlJywge1xuICAgICAgICAgIGF0dGFjaG1lbnQ6IGVBdHRhY2htZW50LFxuICAgICAgICAgIHRhcmdldEF0dGFjaG1lbnQ6IHRBdHRhY2htZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEoX3RoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy50YXJnZXQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgICAgfVxuICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy5lbGVtZW50LCBhZGRDbGFzc2VzLCBhbGxDbGFzc2VzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH07XG4gIH1cbn0pO1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9UZXRoZXJCYXNlJFV0aWxzID0gVGV0aGVyQmFzZS5VdGlscztcbnZhciBnZXRCb3VuZHMgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRCb3VuZHM7XG52YXIgdXBkYXRlQ2xhc3NlcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnVwZGF0ZUNsYXNzZXM7XG52YXIgZGVmZXIgPSBfVGV0aGVyQmFzZSRVdGlscy5kZWZlcjtcblxuVGV0aGVyQmFzZS5tb2R1bGVzLnB1c2goe1xuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICB2YXIgX2NhY2hlID0gdGhpcy5jYWNoZSgnZWxlbWVudC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Qm91bmRzKF90aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhlaWdodCA9IF9jYWNoZS5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gX2NhY2hlLndpZHRoO1xuXG4gICAgdmFyIHRhcmdldFBvcyA9IHRoaXMuZ2V0VGFyZ2V0Qm91bmRzKCk7XG5cbiAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgIHZhciByaWdodCA9IGxlZnQgKyB3aWR0aDtcblxuICAgIHZhciBhYnV0dGVkID0gW107XG4gICAgaWYgKHRvcCA8PSB0YXJnZXRQb3MuYm90dG9tICYmIGJvdHRvbSA+PSB0YXJnZXRQb3MudG9wKSB7XG4gICAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB0YXJnZXRQb3NTaWRlID0gdGFyZ2V0UG9zW3NpZGVdO1xuICAgICAgICBpZiAodGFyZ2V0UG9zU2lkZSA9PT0gbGVmdCB8fCB0YXJnZXRQb3NTaWRlID09PSByaWdodCkge1xuICAgICAgICAgIGFidXR0ZWQucHVzaChzaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPD0gdGFyZ2V0UG9zLnJpZ2h0ICYmIHJpZ2h0ID49IHRhcmdldFBvcy5sZWZ0KSB7XG4gICAgICBbJ3RvcCcsICdib3R0b20nXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB0YXJnZXRQb3NTaWRlID0gdGFyZ2V0UG9zW3NpZGVdO1xuICAgICAgICBpZiAodGFyZ2V0UG9zU2lkZSA9PT0gdG9wIHx8IHRhcmdldFBvc1NpZGUgPT09IGJvdHRvbSkge1xuICAgICAgICAgIGFidXR0ZWQucHVzaChzaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGFsbENsYXNzZXMgPSBbXTtcbiAgICB2YXIgYWRkQ2xhc3NlcyA9IFtdO1xuXG4gICAgdmFyIHNpZGVzID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXTtcbiAgICBhbGxDbGFzc2VzLnB1c2godGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpKTtcbiAgICBzaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICBhbGxDbGFzc2VzLnB1c2goX3RoaXMuZ2V0Q2xhc3MoJ2FidXR0ZWQnKSArICctJyArIHNpZGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFidXR0ZWQubGVuZ3RoKSB7XG4gICAgICBhZGRDbGFzc2VzLnB1c2godGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpKTtcbiAgICB9XG5cbiAgICBhYnV0dGVkLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgIGFkZENsYXNzZXMucHVzaChfdGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpICsgJy0nICsgc2lkZSk7XG4gICAgfSk7XG5cbiAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIShfdGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLnRhcmdldCwgYWRkQ2xhc3NlcywgYWxsQ2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLmVsZW1lbnQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cblRldGhlckJhc2UubW9kdWxlcy5wdXNoKHtcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKF9yZWYpIHtcbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zaGlmdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzaGlmdCA9IHRoaXMub3B0aW9ucy5zaGlmdDtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zaGlmdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2hpZnQgPSB0aGlzLm9wdGlvbnMuc2hpZnQuY2FsbCh0aGlzLCB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0pO1xuICAgIH1cblxuICAgIHZhciBzaGlmdFRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2hpZnRMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2Ygc2hpZnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzaGlmdCA9IHNoaWZ0LnNwbGl0KCcgJyk7XG4gICAgICBzaGlmdFsxXSA9IHNoaWZ0WzFdIHx8IHNoaWZ0WzBdO1xuXG4gICAgICB2YXIgX3NoaWZ0ID0gc2hpZnQ7XG5cbiAgICAgIHZhciBfc2hpZnQyID0gX3NsaWNlZFRvQXJyYXkoX3NoaWZ0LCAyKTtcblxuICAgICAgc2hpZnRUb3AgPSBfc2hpZnQyWzBdO1xuICAgICAgc2hpZnRMZWZ0ID0gX3NoaWZ0MlsxXTtcblxuICAgICAgc2hpZnRUb3AgPSBwYXJzZUZsb2F0KHNoaWZ0VG9wLCAxMCk7XG4gICAgICBzaGlmdExlZnQgPSBwYXJzZUZsb2F0KHNoaWZ0TGVmdCwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlmdFRvcCA9IHNoaWZ0LnRvcDtcbiAgICAgIHNoaWZ0TGVmdCA9IHNoaWZ0LmxlZnQ7XG4gICAgfVxuXG4gICAgdG9wICs9IHNoaWZ0VG9wO1xuICAgIGxlZnQgKz0gc2hpZnRMZWZ0O1xuXG4gICAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfTtcbiAgfVxufSk7XG5yZXR1cm4gVGV0aGVyO1xuXG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RldGhlci9kaXN0L2pzL3RldGhlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG5cXHRcXHRcXHRcXHQgICAgIGxvYWRlclxcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBCb29raW5nU3luY0NhbGVuZGFyX19zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBCb29raW5nU3luY0NhbGVuZGFyX19wdWxzZSB7XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBCb29raW5nU3luY0NhbGVuZGFyX19wdWxzZSB7XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19sb2FkaW5nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkICNjYWNhY2E7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IEJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBCb29raW5nU3luY0NhbGVuZGFyX19zcGluIDFzIGluZmluaXRlIGxpbmVhcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbG9hZGluZ0xheWVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3AtZWxlbWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19kcm9wLWVsZW1lbnQuQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcC1vcGVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcC1lbGVtZW50LkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3BCYXNpYyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcC1lbGVtZW50LkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3BCYXNpYyAuQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcC1jb250ZW50IHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19kcm9wQmFzaWMgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDJyZW0gMCAwIDA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19kcm9wQmFzaWMgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19mb3J3YXJkIHtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcEJhc2ljIC5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fYmFjayB7XFxuICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZHJvcEJhc2ljIC5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbUNlbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuXFx0XFx0XFx0XFx0ICAgICAgY29sb3JzXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIHtcXG4gIGZvbnQ6IDAuODc1cmVtLzEuNCBcXFwiT3BlbiBTYW5zXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCAtMXJlbSAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FwdGlvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19tb250aHNXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbUNlbGwge1xcbiAgbWFyZ2luOiAwIDFyZW0gMnJlbTtcXG4gIG1pbi13aWR0aDogMTRyZW07XFxuICBmbGV4OiAxIDEgMjUlO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21vbnRoIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fdGFibGVIZWFkZXIsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX190aCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fY2VsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWNmMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fY2VsbDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMTAwJTtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19jbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHBhZGRpbmc6IDFweCAzcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNSk7XFxuICByaWdodDogMDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEge1xcbiAgbGVmdDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICByaWdodDogYXV0bztcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzhhY2RmNjtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuXFx0XFx0XFx0XFx0ICBzZWxlY3Rpb25zLCBzdGFydCBhbmQgZW5kc1xcblxcblxcdFxcdFxcdFxcdCAgTi5CLiBFZGl0IGF0IHlvdXIgb3duIHJpc2tcXG5cXHRcXHRcXHRcXHQgIG9uZSBjZWxsIGNhbiBoYXZlIDEwIHN0YXRlcyBhbmQgbG90cyBvZiB0aGVzZSBjb21iaW5hdGlvbnNcXG5cXG5cXHRcXHRcXHRcXHQgIGVuYWJsZWRcXG5cXG5cXHRcXHRcXHRcXHQgIGRpc2FibGVkXFxuXFx0XFx0XFx0XFx0ICBtb3JuaW5nRGlzYWJsZWRcXG5cXHRcXHRcXHRcXHQgIG5pZ2h0RGlzYWJsZWRcXG5cXG5cXHRcXHRcXHRcXHQgIGhpZ2hsaWdodGVkXFxuXFx0XFx0XFx0XFx0ICBtb3JuaW5nU2VsZWN0ZWRcXG5cXHRcXHRcXHRcXHQgIG5pZ2h0U2VsZWN0ZWRcXG5cXG5cXHRcXHRcXHRcXHQgIGludmFsaWRcXG5cXHRcXHRcXHRcXHQgIG1vcm5pbmdJbnZhbGlkXFxuXFx0XFx0XFx0XFx0ICBuaWdodEludmFsaWRcXG5cXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGVkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3JldmVyc2VkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2RpcmVjdCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdEaXJlY3Qge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlzYWJsZWQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19kaXNhYmxlZDpob3ZlciB7XFxuICBjb2xvcjogI2JmYmZiZjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faGlnaGxpZ2h0ZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmRlM2ZmO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlyZWN0IFtkYXRhLWVuYWJsZWRdOmhvdmVyLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0ZWRTdGFydCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsIHRyYW5zcGFyZW50IDUwJSwgI2ZmZmZmZiA1MCUpO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2VhZWNmMDtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZWFlY2YwO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyX19oaWdobGlnaHRlZDpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGVkRW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHRyYW5zcGFyZW50IDUwJSwgI2ZmZmZmZiA1MCUpO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VhZWNmMDtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2VhZWNmMDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3JldmVyc2VkIFtkYXRhLWF2YWlsYWJsZS1vdXRdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHRyYW5zcGFyZW50IDUwJSwgI2ZmZmZmZiA1MCUpO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2hpZ2hsaWdodGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgdHJhbnNwYXJlbnQgNTAlLCAjZmZmZmZmIDUwJSk7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZWFlY2YwO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNlYWVjZjA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0ZWRFbmQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGluZ1JldmVyc2VkIC5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RlZEVuZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCB0cmFuc3BhcmVudCA1MCUsICNmZmZmZmYgNTAlKTtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19uaWdodERpc2FibGVkLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbmlnaHREaXNhYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCB0cmFuc3BhcmVudCA1MCUsICNmMGYwZjAgNTAlKTtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21vcm5pbmdEaXNhYmxlZCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21vcm5pbmdEaXNhYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsIHRyYW5zcGFyZW50IDUwJSwgI2YwZjBmMCA1MCUpO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlyZWN0IFtkYXRhLWVuYWJsZWRdOmhvdmVyLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXZlcnNlZCBbZGF0YS1hdmFpbGFibGUtb3V0XTpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyX19uaWdodERpc2FibGVkOmhvdmVyLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9ybmluZ0Rpc2FibGVkOmhvdmVyLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0ZWRTdGFydCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGVkRW5kLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhY2RmNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2RpcmVjdCBbZGF0YS1lbmFibGVkXTpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlyZWN0IFtkYXRhLWVuYWJsZWRdOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19jbnQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2RpcmVjdCBbZGF0YS1lbmFibGVkXTpob3ZlciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW5mbyxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlyZWN0IFtkYXRhLWVuYWJsZWRdOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmV2ZXJzZWQgW2RhdGEtYXZhaWxhYmxlLW91dF06aG92ZXIsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3JldmVyc2VkIFtkYXRhLWF2YWlsYWJsZS1vdXRdOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19jbnQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3JldmVyc2VkIFtkYXRhLWF2YWlsYWJsZS1vdXRdOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXZlcnNlZCBbZGF0YS1hdmFpbGFibGUtb3V0XTpob3ZlciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW5mb0V4dHJhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGluZ0RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbmlnaHREaXNhYmxlZDpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyX19uaWdodERpc2FibGVkOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19jbnQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGluZ0RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbmlnaHREaXNhYmxlZDpob3ZlciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW5mbyxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nRGlyZWN0IC5Cb29raW5nU3luY0NhbGVuZGFyX19uaWdodERpc2FibGVkOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21vcm5pbmdEaXNhYmxlZDpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21vcm5pbmdEaXNhYmxlZDpob3ZlciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fY250LFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9ybmluZ0Rpc2FibGVkOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9ybmluZ0Rpc2FibGVkOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fYWN0aW9uc0VuYWJsZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQ6bm90KC5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RlZFN0YXJ0KSB7XFxuICBiYWNrZ3JvdW5kOiAjYzBjMGMwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItY29sb3I6ICNjYWNhY2E7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdSZXZlcnNlZCAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW52YWxpZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCB0cmFuc3BhcmVudCA1MCUsICNjMGMwYzAgNTAlKTtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNlYWVjZjA7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2VhZWNmMDtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWQgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0ZWRFbmQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGluZ0RpcmVjdCAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW52YWxpZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsIHRyYW5zcGFyZW50IDUwJSwgI2MwYzBjMCA1MCUpO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VhZWNmMDtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2VhZWNmMDtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjYWNhY2E7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNjYWNhY2E7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9faW52YWxpZDpob3ZlcixcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQ6aG92ZXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NudCxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQ6aG92ZXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2luZm8sXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbnZhbGlkOmhvdmVyIC5Cb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmEge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ludmFsaWQuQm9va2luZ1N5bmNDYWxlbmRhcl9fZGlzYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuXFxuXFx0XFx0XFx0XFx0ICAgICBidXR0b25zXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19mb3J3YXJkLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2JhY2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBmaWxsOiAjNDQ0NDQ0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWNmMDtcXG4gIHBhZGRpbmc6IDZweCA5cHg7XFxuICB0b3A6IDEuNHJlbTtcXG4gIGxlZnQ6IDNyZW07XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ZvcndhcmQge1xcbiAgcmlnaHQ6IDNyZW07XFxuICBsZWZ0OiBhdXRvO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ZvcndhcmQ6YWN0aXZlLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fZm9yd2FyZDpmb2N1cyxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2JhY2s6YWN0aXZlLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fYmFjazpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ZvcndhcmQ6aG92ZXIsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19iYWNrOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzhhY2RmNjtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19mb3J3YXJkW2Rpc2FibGVkXSxcXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2FsZW5kYXIgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2ZvcndhcmRbZGlzYWJsZWRdOmhvdmVyLFxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19jYWxlbmRhciAuQm9va2luZ1N5bmNDYWxlbmRhcl9fYmFja1tkaXNhYmxlZF0sXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyIC5Cb29raW5nU3luY0NhbGVuZGFyX19iYWNrW2Rpc2FibGVkXTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3JkZXItY29sb3I6ICNlYWVjZjA7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcblxcdFxcdFxcdFxcdCAgICAgbW9kc1xcblxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIGNodW5reSBsYXlvdXQgKi9cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fY2h1bmt5IC5Cb29raW5nU3luY0NhbGVuZGFyX19tQ2VsbCB7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYWxlbmRhclwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhbGVuZGFyXCIsXG5cdFwibG9hZGluZ1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2xvYWRpbmdcIixcblx0XCJzcGluXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fc3BpblwiLFxuXHRcImxvYWRpbmdMYXllclwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2xvYWRpbmdMYXllclwiLFxuXHRcImRyb3AtZWxlbWVudFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3AtZWxlbWVudFwiLFxuXHRcImRyb3Atb3BlblwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3Atb3BlblwiLFxuXHRcImRyb3BCYXNpY1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3BCYXNpY1wiLFxuXHRcImRyb3AtY29udGVudFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Ryb3AtY29udGVudFwiLFxuXHRcImZvcndhcmRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19mb3J3YXJkXCIsXG5cdFwiYmFja1wiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2JhY2tcIixcblx0XCJtQ2VsbFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX21DZWxsXCIsXG5cdFwiY2FwdGlvblwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NhcHRpb25cIixcblx0XCJtb250aHNXcmFwcGVyXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9udGhzV3JhcHBlclwiLFxuXHRcIm1vbnRoXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9udGhcIixcblx0XCJ0YWJsZUhlYWRlclwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3RhYmxlSGVhZGVyXCIsXG5cdFwiYm9keVwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2JvZHlcIixcblx0XCJ0aFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3RoXCIsXG5cdFwiY2VsbFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2NlbGxcIixcblx0XCJjbnRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19jbnRcIixcblx0XCJpbmZvRXh0cmFcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19pbmZvRXh0cmFcIixcblx0XCJpbmZvXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9faW5mb1wiLFxuXHRcImZvY3VzXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fZm9jdXNcIixcblx0XCJzZWxlY3RlZFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3NlbGVjdGVkXCIsXG5cdFwicmV2ZXJzZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19yZXZlcnNlZFwiLFxuXHRcImRpcmVjdFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2RpcmVjdFwiLFxuXHRcInNlbGVjdGluZ1JldmVyc2VkXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fc2VsZWN0aW5nUmV2ZXJzZWRcIixcblx0XCJzZWxlY3RpbmdEaXJlY3RcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RpbmdEaXJlY3RcIixcblx0XCJkaXNhYmxlZFwiOiBcIkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Rpc2FibGVkXCIsXG5cdFwiaGlnaGxpZ2h0ZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19oaWdobGlnaHRlZFwiLFxuXHRcInNlbGVjdGVkU3RhcnRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RlZFN0YXJ0XCIsXG5cdFwic2VsZWN0ZWRFbmRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19zZWxlY3RlZEVuZFwiLFxuXHRcIm5pZ2h0RGlzYWJsZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19uaWdodERpc2FibGVkXCIsXG5cdFwibW9ybmluZ0Rpc2FibGVkXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fbW9ybmluZ0Rpc2FibGVkXCIsXG5cdFwiYWN0aW9uc0VuYWJsZWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19hY3Rpb25zRW5hYmxlZFwiLFxuXHRcImludmFsaWRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19pbnZhbGlkXCIsXG5cdFwiY2h1bmt5XCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fY2h1bmt5XCIsXG5cdFwicHVsc2VcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19wdWxzZVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSZsb2NhbElkZW50TmFtZT1Cb29raW5nU3luY0NhbGVuZGFyX19bTG9jYWxdIS4vfi9zYXNzLWxvYWRlcj9vdXRwdXRTdHlsZT1leHBhbmRlZCZzb3VyY2VNYXAmc291cmNlTWFwQ29udGVudHMhLi9zcmMvc3R5bGVzL2NhbGVuZGFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRpdiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHNwYW4sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBhcHBsZXQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBvYmplY3QsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBpZnJhbWUsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBoMSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGgyLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaDMsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBoNCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGg1LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaDYsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBwLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgYmxvY2txdW90ZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHByZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGEsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBhYmJyLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgYWNyb255bSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGFkZHJlc3MsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBiaWcsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBjaXRlLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgY29kZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRlbCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRmbiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGVtLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaW1nLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaW5zLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQga2JkLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgcSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHMsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzYW1wLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgc21hbGwsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzdHJpa2UsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzdHJvbmcsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzdWIsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzdXAsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0dCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHZhciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGIsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB1LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGNlbnRlciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRsLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZHQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBkZCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IG9sLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgdWwsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBsaSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGZpZWxkc2V0LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZm9ybSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRpdi5Cb29raW5nU3luY0NhbGVuZGFyX19mb3JtLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgbGFiZWwsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBsZWdlbmQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0YWJsZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGNhcHRpb24sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0Ym9keSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHRmb290LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgdGhlYWQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0ciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHRoLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgdGQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBhcnRpY2xlLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgYXNpZGUsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBjYW52YXMsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBkZXRhaWxzLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZmlnY2FwdGlvbiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGZpZ3VyZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGZvb3RlciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGhlYWRlciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGhncm91cCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IG1lbnUsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBuYXYsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzZWN0aW9uLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgc3VtbWFyeSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHRpbWUsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBtYXJrLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgYXVkaW8sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB2aWRlbywgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGJ1dHRvbiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHRleHRhcmVhLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaW5wdXQsXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IC5Cb29raW5nU3luY0NhbGVuZGFyX19idXR0b24sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fbGVnZW5kIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBzYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIDEwMCUgXFxcIk9wZW4gc2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgLW1vei10ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XFxuICB0ZXh0LWFsaWduLWxhc3Q6IGluaXRpYWw7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtd2Via2l0LXRleHQtZW1waGFzaXM6IG5vbmU7XFxuICB0ZXh0LWVtcGhhc2lzOiBub25lO1xcbiAgdGV4dC1oZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIHRleHQtanVzdGlmeTogYXV0bztcXG4gIHRleHQtb3V0bGluZTogbm9uZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXdyYXA6IG5vcm1hbDtcXG4gIGFsaWdubWVudC1hZGp1c3Q6IGF1dG87XFxuICBhbGlnbm1lbnQtYmFzZWxpbmU6IGJhc2VsaW5lO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XFxuICBhbmltYXRpb246IG5vbmUgMCBlYXNlIDAgMSBub3JtYWw7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICBhcHBlYXJhbmNlOiBub3JtYWw7XFxuICBhemltdXRoOiBjZW50ZXI7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2dyb3VuZDogbm9uZSAwIDAgYXV0byByZXBlYXQgc2Nyb2xsIHBhZGRpbmctYm94IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFzZWxpbmUtc2hpZnQ6IGJhc2VsaW5lO1xcbiAgYmluZGluZzogbm9uZTtcXG4gIGJsZWVkOiA2cHQ7XFxuICBib29rbWFyay1sYWJlbDogY29udGVudCgpO1xcbiAgYm9va21hcmstbGV2ZWw6IG5vbmU7XFxuICBib29rbWFyay1zdGF0ZTogb3BlbjtcXG4gIGJvb2ttYXJrLXRhcmdldDogbm9uZTtcXG4gIGJvcmRlcjogMCBub25lIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvdHRvbTogYXV0bztcXG4gIGJveC1hbGlnbjogc3RyZXRjaDtcXG4gIC13ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xcbiAgYm94LWRlY29yYXRpb24tYnJlYWs6IHNsaWNlO1xcbiAgYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgZmxleDogMC4wO1xcbiAgZmxleC1ncm91cDogMTtcXG4gIGJveC1saW5lczogc2luZ2xlO1xcbiAgYm94LW9yZGluYWwtZ3JvdXA6IDE7XFxuICBib3gtb3JpZW50OiBpbmxpbmUtYXhpcztcXG4gIGJveC1wYWNrOiBzdGFydDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAtbW96LWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgYnJlYWstYWZ0ZXI6IGF1dG87XFxuICAtd2Via2l0LWJyZWFrLWJlZm9yZTogYXV0bztcXG4gIC1tb3otYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdXRvO1xcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF1dG87XFxuICBicmVhay1pbnNpZGU6IGF1dG87XFxuICBjYXB0aW9uLXNpZGU6IHRvcDtcXG4gIGNsZWFyOiBub25lO1xcbiAgY2xpcDogYXV0bztcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3ItcHJvZmlsZTogYXV0bztcXG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiBhdXRvO1xcbiAgLW1vei1jb2x1bW4tY291bnQ6IGF1dG87XFxuICBjb2x1bW4tY291bnQ6IGF1dG87XFxuICAtd2Via2l0LWNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgLW1vei1jb2x1bW4tZmlsbDogYmFsYW5jZTtcXG4gIGNvbHVtbi1maWxsOiBiYWxhbmNlO1xcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiBub3JtYWw7XFxuICAtbW96LWNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gIGNvbHVtbi1nYXA6IG5vcm1hbDtcXG4gIC13ZWJraXQtY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gIC1tb3otY29sdW1uLXJ1bGU6IG1lZGl1bSBtZWRpdW0gIzFmMWYxZjtcXG4gIGNvbHVtbi1ydWxlOiBtZWRpdW0gbWVkaXVtICMxZjFmMWY7XFxuICAtd2Via2l0LWNvbHVtbi1zcGFuOiAxO1xcbiAgLW1vei1jb2x1bW4tc3BhbjogMTtcXG4gIGNvbHVtbi1zcGFuOiAxO1xcbiAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IGF1dG87XFxuICAtbW96LWNvbHVtbi13aWR0aDogYXV0bztcXG4gIGNvbHVtbi13aWR0aDogYXV0bztcXG4gIC13ZWJraXQtY29sdW1uczogYXV0byBhdXRvO1xcbiAgLW1vei1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBjb2x1bW5zOiBhdXRvIGF1dG87XFxuICBjb250ZW50OiBub3JtYWw7XFxuICBjb3VudGVyLWluY3JlbWVudDogbm9uZTtcXG4gIGNvdW50ZXItcmVzZXQ6IG5vbmU7XFxuICBjcm9wOiBhdXRvO1xcbiAgY3Vyc29yOiBhdXRvO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBkb21pbmFudC1iYXNlbGluZTogYXV0bztcXG4gIGRyb3AtaW5pdGlhbC1hZnRlci1hZGp1c3Q6IHRleHQtYWZ0ZXItZWRnZTtcXG4gIGRyb3AtaW5pdGlhbC1hZnRlci1hbGlnbjogYmFzZWxpbmU7XFxuICBkcm9wLWluaXRpYWwtYmVmb3JlLWFkanVzdDogdGV4dC1iZWZvcmUtZWRnZTtcXG4gIGRyb3AtaW5pdGlhbC1iZWZvcmUtYWxpZ246IGNhcHMtaGVpZ2h0O1xcbiAgZHJvcC1pbml0aWFsLXNpemU6IGF1dG87XFxuICBkcm9wLWluaXRpYWwtdmFsdWU6IGluaXRpYWw7XFxuICBlbGV2YXRpb246IGxldmVsO1xcbiAgZW1wdHktY2VsbHM6IHNob3c7XFxuICBmaXQ6IGZpbGw7XFxuICBmaXQtcG9zaXRpb246IDAlIDAlO1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBmbG9hdC1vZmZzZXQ6IDAgMDtcXG4gIGdyaWQtY29sdW1uczogbm9uZTtcXG4gIGdyaWQtcm93czogbm9uZTtcXG4gIGhhbmdpbmctcHVuY3R1YXRpb246IG5vbmU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBoeXBoZW5hdGUtYWZ0ZXI6IGF1dG87XFxuICBoeXBoZW5hdGUtYmVmb3JlOiBhdXRvO1xcbiAgaHlwaGVuYXRlLWNoYXJhY3RlcjogYXV0bztcXG4gIGh5cGhlbmF0ZS1saW5lczogbm8tbGltaXQ7XFxuICBoeXBoZW5hdGUtcmVzb3VyY2U6IG5vbmU7XFxuICAtd2Via2l0LWh5cGhlbnM6IG1hbnVhbDtcXG4gIC1tb3otaHlwaGVuczogbWFudWFsO1xcbiAgLW1zLWh5cGhlbnM6IG1hbnVhbDtcXG4gIGh5cGhlbnM6IG1hbnVhbDtcXG4gIGljb246IGF1dG87XFxuICBpbWFnZS1vcmllbnRhdGlvbjogYXV0bztcXG4gIGltYWdlLXJlbmRlcmluZzogYXV0bztcXG4gIGltYWdlLXJlc29sdXRpb246IG5vcm1hbDtcXG4gIGlubGluZS1ib3gtYWxpZ246IGxhc3Q7XFxuICBsZWZ0OiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBsaW5lLXN0YWNraW5nOiBpbmxpbmUtbGluZS1oZWlnaHQgZXhjbHVkZS1ydWJ5IGNvbnNpZGVyLXNoaWZ0cztcXG4gIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFya3M6IG5vbmU7XFxuICBtYXJxdWVlLWRpcmVjdGlvbjogZm9yd2FyZDtcXG4gIG1hcnF1ZWUtbG9vcDogMTtcXG4gIG1hcnF1ZWUtcGxheS1jb3VudDogMTtcXG4gIG1hcnF1ZWUtc3BlZWQ6IG5vcm1hbDtcXG4gIG1hcnF1ZWUtc3R5bGU6IHNjcm9sbDtcXG4gIG1heC1oZWlnaHQ6IG5vbmU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbW92ZS10bzogbm9ybWFsO1xcbiAgbmF2LWRvd246IGF1dG87XFxuICBuYXYtaW5kZXg6IGF1dG87XFxuICBuYXYtbGVmdDogYXV0bztcXG4gIG5hdi1yaWdodDogYXV0bztcXG4gIG5hdi11cDogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBvcnBoYW5zOiAyO1xcbiAgb3V0bGluZTogaW52ZXJ0IG5vbmUgbWVkaXVtO1xcbiAgb3V0bGluZS1vZmZzZXQ6IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG92ZXJmbG93LXN0eWxlOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZ2U6IGF1dG87XFxuICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XFxuICBwYWdlLWJyZWFrLWluc2lkZTogYXV0bztcXG4gIHBhZ2UtcG9saWN5OiBzdGFydDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IG5vbmU7XFxuICBwZXJzcGVjdGl2ZTogbm9uZTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHByZXNlbnRhdGlvbi1sZXZlbDogMDtcXG4gIHB1bmN0dWF0aW9uLXRyaW06IG5vbmU7XFxuICBxdW90ZXM6IG5vbmU7XFxuICByZW5kZXJpbmctaW50ZW50OiBhdXRvO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcmlnaHQ6IGF1dG87XFxuICByb3RhdGlvbjogMDtcXG4gIHJvdGF0aW9uLXBvaW50OiA1MCUgNTAlO1xcbiAgcnVieS1hbGlnbjogYXV0bztcXG4gIHJ1Ynktb3Zlcmhhbmc6IG5vbmU7XFxuICBydWJ5LXBvc2l0aW9uOiBiZWZvcmU7XFxuICBydWJ5LXNwYW46IG5vbmU7XFxuICBzaXplOiBhdXRvO1xcbiAgc3RyaW5nLXNldDogbm9uZTtcXG4gIHRhYmxlLWxheW91dDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAgZWFzZSAwO1xcbiAgdW5pY29kZS1iaWRpOiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2UtY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgd2lkb3dzOiAyO1xcbiAgd2lkdGg6IGF1dG87XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgei1pbmRleDogYXV0bztcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgLyogQW5kIGRpc2FibGUgTVMgZ3JhZGllbnRzICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGFkZHJlc3MsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBibG9ja3F1b3RlLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZGQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBkaXYsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBkbCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGR0LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZmllbGRzZXQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBmb3JtLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZGl2LkJvb2tpbmdTeW5jQ2FsZW5kYXJfX2Zvcm0sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBmcmFtZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGZyYW1lc2V0LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaDEsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBoMiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGgzLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaDQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBoNSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGg2LCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgbm9mcmFtZXMsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBvbCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHAsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB1bCwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGNlbnRlciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRpciwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGhyLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgbWVudSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHByZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGFydGljbGUsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBhc2lkZSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGNhbnZhcywgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGRldGFpbHMsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBmaWdjYXB0aW9uLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZmlndXJlLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZm9vdGVyLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaGVhZGVyLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaGdyb3VwLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgbWVudSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IG5hdiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHNlY3Rpb24sIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgbGkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgdGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0ciB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0aGVhZCB7XFxuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0Ym9keSB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0Zm9vdCB7XFxuICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBjb2wge1xcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgY29sZ3JvdXAge1xcbiAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgdGQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0aCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgY2FwdGlvbiB7XFxuICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaW5wdXQsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBzZWxlY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgYiwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGIgPiBpLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgc3Ryb25nID4gaSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGIgPiBlbSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IHN0cm9uZyA+IGVtLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgaSA+IGIsIC5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCBpID4gc3Ryb25nLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZW0gPiBiLCAuQm9va2luZ1N5bmNDYWxlbmRhcl9fcmVzZXQgZW0gPiBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5Cb29raW5nU3luY0NhbGVuZGFyX19yZXNldCB0ZXh0YXJlYSwgLkJvb2tpbmdTeW5jQ2FsZW5kYXJfX3Jlc2V0IGlucHV0IHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicmVzZXRcIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19yZXNldFwiLFxuXHRcImZvcm1cIjogXCJCb29raW5nU3luY0NhbGVuZGFyX19mb3JtXCIsXG5cdFwiYnV0dG9uXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fYnV0dG9uXCIsXG5cdFwibGVnZW5kXCI6IFwiQm9va2luZ1N5bmNDYWxlbmRhcl9fbGVnZW5kXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlJmxvY2FsSWRlbnROYW1lPUJvb2tpbmdTeW5jQ2FsZW5kYXJfX1tMb2NhbF0hLi9+L3Nhc3MtbG9hZGVyP291dHB1dFN0eWxlPWV4cGFuZGVkJnNvdXJjZU1hcCZzb3VyY2VNYXBDb250ZW50cyEuL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlJmxvY2FsSWRlbnROYW1lPUJvb2tpbmdTeW5jQ2FsZW5kYXJfX1tMb2NhbF0hLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/b3V0cHV0U3R5bGU9ZXhwYW5kZWQmc291cmNlTWFwJnNvdXJjZU1hcENvbnRlbnRzIS4vcmVzZXQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7XCJpbnNlcnRBdFwiOlwidG9wXCIsXCJzaW5nbGV0b25cIjp0cnVlfSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlJmxvY2FsSWRlbnROYW1lPUJvb2tpbmdTeW5jQ2FsZW5kYXJfX1tMb2NhbF0hLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/b3V0cHV0U3R5bGU9ZXhwYW5kZWQmc291cmNlTWFwJnNvdXJjZU1hcENvbnRlbnRzIS4vcmVzZXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUmbG9jYWxJZGVudE5hbWU9Qm9va2luZ1N5bmNDYWxlbmRhcl9fW0xvY2FsXSEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9vdXRwdXRTdHlsZT1leHBhbmRlZCZzb3VyY2VNYXAmc291cmNlTWFwQ29udGVudHMhLi9yZXNldC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==