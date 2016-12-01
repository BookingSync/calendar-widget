/* global document, window */
import Calendar from './calendar';

// window.calendarWidget1 = new Calendar({
//   element: document.querySelector('.calendar1'),
// });

window.calendarWidget2 = new Calendar({
  element: document.querySelector('.calendar2'),
  // monthStart: 0,
  displayMonths: 3,
});

