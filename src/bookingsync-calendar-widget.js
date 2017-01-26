/* global document, module */
import Calendar from './calendar';

Calendar.init = () => {
  const initialized = [];
  const calendarElements = document.querySelectorAll('[data-bookingsync-calendar-widget]');
  const len              = calendarElements.length;

  for (let i = 0; i < len; i += 1) {
    const el   = calendarElements[i];

    const cal = new Calendar({ el });

    if (el.dataset.rentalIds) {
      cal.loadMaps(el.dataset.rentalIds);
    }
    initialized.push(cal);
  }

  Calendar.instances = initialized;
};

document.addEventListener('DOMContentLoaded', () => {
  if (Calendar.autoInit !== false) {
    Calendar.init();
  }
});

module.exports = Calendar;
