/* global document, module */
import { merge, ajax, isArray } from 'widget-utils';

import Calendar from './calendar';
import config from './config';

let initialized = [];

const loadRental = (opts, rentalId, calendar) => {
  calendar.toggleLoading();

  const onSuccess = (rental) => {
    calendar.toggleLoading();
    if (isArray(rental.data) && rental.data[0].attributes) {
      calendar.addMaps(rental.data[0].attributes);
    } else {
      console.error('expects json-api data format');
    }
  };

  const onError = () => {
    calendar.toggleLoading();
    console.error('Server error happened');
  };

  ajax(opts.rentalUrl(rentalId), onSuccess, onError);
};

Calendar.init = () => {
  const calendarElements = document.querySelectorAll('[data-calendar-widget]');
  const len              = calendarElements.length;

  if (calendarElements.length === 0) {
    console.log('expects at least one HTMLElement with "data-calendar-widget" and "data-rental-ids"');
  }

  for (let i = 0; i < len; i += 1) {
    const el   = calendarElements[i];
    const opts = merge(config, el.dataset);
    opts.el    = el;

    const cal = new Calendar(opts);

    if (el.dataset.rentalIds) {
      loadRental(opts, el.dataset.rentalIds, cal);
      initialized.push(cal);
    }  else {
      console.log('data-rental-ids is mandatory');
    }
  }

  if (initialized.length === 1) {
    initialized = initialized[0];
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (Calendar.autoInit !== false) {
    Calendar.init();
  }
});

module.exports = initialized;
