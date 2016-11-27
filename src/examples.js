/* global document, window */
import Calendar from './calendar';

window.calendarWidget = new Calendar({
  element: document.querySelector('.calendar1'),
});
