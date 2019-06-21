/* global document, module, VERSION, require, window */
const Calendar = require('./calendar');

// Export WidgetUtils
window.BookingSyncWidgetUtils = require('widget-utils');

// Export Popper
window.Popper = require('popper.js');

// in order to export clean constructor to global namespace "BookingSyncCalendarWidget"
// need to mix require with imports
const CalendarConst = Calendar.default;

CalendarConst.init = (opts) => {
  const initialized           = [];
  const options               = opts || {};
  const CalendarConstElements = document.querySelectorAll('[data-bookingsync-calendar-widget]');

  CalendarConstElements.forEach((element) => {
    options.el = element;
    const cal  = new CalendarConst(options);

    initialized.push(cal);
  });

  CalendarConst.instances = initialized;
  return initialized;
};

CalendarConst.VERSION = VERSION;

if (CalendarConst.autoInit !== false) {
  if (document.readyState !== 'loading') {
    CalendarConst.init();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      CalendarConst.init();
    });
  }
}

module.exports = CalendarConst;
