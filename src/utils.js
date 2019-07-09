import { strftime, strptime } from 'strtime';

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

  let date = new Date(year, month, day + 1);
  if (date.getTimezoneOffset() > 0) {
    date = new Date(date - 3600 * 24 * 1000);
  }

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

export const validationOfRange = (cell, index, range) => {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }
  return cell.getAttribute('data-disabled') === '';
};

export const tFormatter = (value, str) => str.replace('%number', value);
