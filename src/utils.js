export const formatDate = (format, year, month, day) => {
  function pad(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  return format
    .replace('dd', pad(day))
    .replace('mm', pad(month + 1))
    .replace('yyyy', year);
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
  return new Date(year, month, day);
};

export const isLater = (start, end) => dateToIso(...start, true) < dateToIso(...end, true);

export const validationOfRange = (cell, index, range) => {
  if (index === range.length - 1) {
    return cell.getAttribute('data-available-out') !== '';
  }
  return cell.getAttribute('data-disabled') === '';
};

export const tFormatter = (value, str) => str.replace('%number', value);
