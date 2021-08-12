import { strftime, strptime } from 'strtime';
import { is } from 'widget-utils';

export const isDST = (date) => {
  let jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) != date.getTimezoneOffset();
};

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
    return false;
  }
};

export const isLater = (start, end) => dateToIso(...start, true) < dateToIso(...end, true);

export const isCurrent = (start, end) => dateToIso(...start, true) == dateToIso(...end, true);

export const validationOfRange = (cell) => {
  const isAvailableOut = is(cell.dataset.availableOut);

  if (isAvailableOut) {
    return isAvailableOut;
  }

  return cell.dataset.disabled === '';
};

export const tFormatter = (value, str) => str.replace('%number', value);
