/* global document, require, window, module */
let Calendar = require('./calendar');

Calendar = Calendar.default;

// Export WidgetUtils
window.BookingSyncWidgetUtils = require('widget-utils');

// Export Popper
window.Popper = require('popper.js');

Calendar.init = (opts) => {
  const initialized = [];
  const options     = opts || {};
  const elements    = document.querySelectorAll('[data-bookingsync-calendar-widget]');

  elements.forEach((element) => {
    options.el = element;
    const cal  = new Calendar(options);

    initialized.push(cal);
  });

  Calendar.instances = initialized;
  return initialized;
};

Calendar.VERSION = require('../package.json').version;

if (document.readyState !== 'loading') {
  Calendar.init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    Calendar.init();
  });
}

window.BookingSyncCalendarWidget = Calendar;

module.exports = Calendar;
