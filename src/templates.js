import styles from './styles/calendar.scss';

export const main  = `<div class="${styles.monthsWrapper}"></div>`;

export const tooltip = `<div class="${styles.tooltip}" role="tooltip"><span></span><div class="${styles.tooltipArrow}" x-arrow></div></div>`;

export const month = `
  <div class="${styles.mCell} js-month">
    <table class="${styles.month}" role="month">
      <caption><div class="${styles.caption}"></div></caption>
      <thead class="${styles.tableHeader}"><tr></tr></thead>
      <tbody class="${styles.body}"></tbody>
    </table>
  </div>
`;

export const weekDayLabel = (label) => `<th class="${styles.th}">${label}</th>`;

/* eslint prefer-template: 0 */
export const weekDay = (label, disabled, isAvailableIn, isAvailableOut, isCurrentDay, rate, rateT) => `
  <td ${disabled ? `data-disabled=${disabled}` : 'data-enabled'}
       ${isAvailableOut ? 'data-available-out' : ''}
       ${isAvailableIn ? 'data-available-in' : ''}
       data-value="${label}"
       class="${styles.cell} ${isCurrentDay ? styles.today : ''}">
       <div class="${styles.cnt}" role="day-value">
        ${label}
        <div class="${styles.info}">
          ${rate ? '<span data-rate>' + rateT + '</span>' : ''}
        </div>
      </div>
  </td>
`;

export const forward = `
  <button class="${styles.forward}" role="button">
    <svg viewBox="0 0 1000 1000" width="20" height="20">
      <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
    </svg>
  </button>
`;

export const back = `
  <button class="${styles.back}" role="button">
    <svg viewBox="0 0 1000 1000" width="20" height="20">
      <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"></path>
    </svg>
  </button>
`;

export const weekDayPlaceholder = '<td></td>';

/* eslint arrow-body-style: 0 */
export const weekRow = (num) => {
  return {
    open: `<tr class="js-body-row-${num}">`,
    close: '</tr>'
  };
};
