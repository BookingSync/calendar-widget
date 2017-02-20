/* global document, module, VERSION */
import Calendar from './calendar';

Calendar.init = (opts) => {
  const initialized      = [];
  const options          = opts || {};
  const calendarElements = document.querySelectorAll('[data-bookingsync-calendar-widget]');
  const len              = calendarElements.length;

  for (let i = 0; i < len; i += 1) {
    options.el = calendarElements[i];
    const cal  = new Calendar(options);

    if (options.el.dataset.rentalId) {
      cal.autoSpawed = true;
      cal.loadMaps(options.el.dataset.rentalId);
    }
    initialized.push(cal);
  }

  Calendar.instances = initialized;
  return initialized;
};

Calendar.VERSION = VERSION;

document.addEventListener('DOMContentLoaded', () => {
  if (Calendar.autoInit !== false) {
    Calendar.init();
  }
});

module.exports = Calendar;
