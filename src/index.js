/* global document, require, window */
let Calendar = require('./calendar');

Calendar = Calendar.default;

const widgetUtils = require('widget-utils');
const autoInitSelector = '[data-smily-calendar-widget]';

// Export WidgetUtils
window.SmilyWidgetUtils = widgetUtils;

// Export Popper
window.Popper = require('@popperjs/core');

Calendar.init = (opts) => {
  const initialized = [];
  const options     = opts || {};
  const elements    = document.querySelectorAll(autoInitSelector);

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

window.SmilyCalendarWidget = Calendar;

export default Calendar;
