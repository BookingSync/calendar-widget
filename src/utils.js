/* global console */
import { strftime, strptime } from 'strtime';
import { is } from 'widget-utils';

export const dateToIso = (year, month, day, isString = false) => {
  function pad(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  if (isString) {
    return `${year}-${pad(month + 1)}-${pad(day)}`;
  }

  let date = new Date(year, month, day, 12, 0, 0);
  return date;
};

export const dateToArray = (val, format, locale) => {
  try {
    const date = strptime(val, format, locale);
    const a    = strftime(date, '%Y-%m-%d').split('-');

    return [
      parseInt(a[0]), // year
      parseInt(a[1] - 1), // month index
      parseInt(a[2]) // day
    ];
  } catch(e) {
    if (is(e.message)) {
      console.log(e.message);
    }
    return false;
  }
};

export const isLater = (start, end) => dateToIso(...start, true) < dateToIso(...end, true);

export const isCurrent = (start, end) => dateToIso(...start, true) == dateToIso(...end, true);

export const monthDiff = (start, end) => {
  return end.getMonth() - start.getMonth() + (12 * (end.getFullYear() - start.getFullYear()));
};

export const validationOfCell = (cell) => {
  if (is(cell.dataset.enabled) || is(cell.dataset.availableIn) || is(cell.dataset.availableOut)) {
    return true;
  }

  return false;
};

export const tFormatter = (value, str) => str.replace('%number', value);
