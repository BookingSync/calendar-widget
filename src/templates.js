import styles from './styles/calendar.scss';

export const main  = (label) => `<div class="${styles.monthsWrapper}" role="tabpanel" aria-label="${label}"></div>`;
export const pagination = () => `<div class="${styles.pagination}"></div>`;
export const mobileWeekdays = (header) => `<div class="${styles.mobileWeekdays}" role="row">${header}</div>`;
export const svgSprite = (chevronDownId) => `
  <svg class="${styles.sprite}" aria-hidden="true" focusable="false" width="0" height="0">
    <symbol id="${chevronDownId}" viewBox="0 0 16 16">
      <path d="M4.22 6.97a.75.75 0 0 1 1.06 0L8 9.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 8.03a.75.75 0 0 1 0-1.06Z"></path>
    </symbol>
  </svg>
`;

export const tooltip = `<div class="${styles.tooltip}" role="tooltip"><span></span><div class="${styles.tooltipArrow}" data-popper-arrow="true"></div></div>`;

export const month = ({
  label,
  caption,
  header,
  body
}) => `
  <div class="${styles.month} ${styles.mCell} js-month" role="grid" aria-label="${label}">
    <div class="${styles.caption}">${caption}</div>
    <div class="${styles.tableHeader}" role="row">${header}</div>
    <div class="${styles.body}" role="rowgroup">${body}</div>
  </div>
`;

export const yearPicker = ({
  label,
  chevronDownId
}) => `
  <div class="${styles.captionPicker}">
    <button
      type="button"
      class="${styles.captionTrigger}"
      data-year-picker-trigger
      aria-expanded="false"
      aria-haspopup="dialog"
      aria-label="${label}"
    >
      <span class="${styles.captionLabel}">${label}</span>
      <svg class="${styles.captionChevron}" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
        <use href="#${chevronDownId}"></use>
      </svg>
    </button>
  </div>
`;

export const sharedYearPickerPanel = ({
  closeLabel,
  previousLabel,
  nextLabel
}) => `
  <div class="${styles.yearPickerPanel}" data-year-picker-panel hidden>
    <button type="button" class="${styles.yearPickerClose}" data-year-picker-close aria-label="${closeLabel}">${closeLabel}</button>
    <div class="${styles.yearGrid}" data-year-grid></div>
    <div class="${styles.yearPickerHeader}">
      <button type="button" class="${styles.yearPager}" data-year-page-offset="-12" aria-label="${previousLabel}">${previousLabel}</button>
      <button type="button" class="${styles.yearPager}" data-year-page-offset="12" aria-label="${nextLabel}">${nextLabel}</button>
    </div>
  </div>
`;

export const yearOption = (year, selectedYear) => `
  <button
    type="button"
    class="${styles.yearOption}"
    data-year-option="${year}"
    ${year === selectedYear ? 'data-selected-year' : ''}
  >
    ${year}
  </button>
`;

export const weekDayLabel = (label) => `<div class="${styles.th}" role="columnheader">${label}</div>`;

export const weekDay = (o) => {
  const infoLines = [];

  if (o.rate) {
    infoLines.push(o.rateT);
  }

  if (o.minStay && o.minStayT) {
    infoLines.push(o.minStayT);
  }

  if (o.maxStay && o.maxStayT) {
    infoLines.push(o.maxStayT);
  }

  const infoHtml = infoLines.length ? `<div class="${styles.info}">${infoLines.join('<br>')}</div>` : '';

  return `
    <div
      ${o.disabled ? `data-disabled=${o.disabled}` : 'data-enabled'}
      ${o.isAvailableOut ? 'data-available-out' : ''}
      ${o.isAvailableIn ? 'data-available-in' : ''}
      ${o.minStay ? `data-min-stay=${o.minStay}` : ''}
      ${o.maxStay ? `data-max-stay=${o.maxStay}` : ''}
      data-value="${o.label}"
      class="${styles.cell} ${o.isCurrentDay ? styles.today : ''}"
      role="gridcell"
      tabindex="${o.tabindex}"
      aria-label="${o.date}"
    >
      <span class="${styles.cnt}">${o.label}</span>
      ${infoHtml}
    </div>
  `;
};

export const forward = (label) => `
  <button class="${styles.forward}" aria-label="${label}">
    <svg viewBox="0 0 1000 1000" width="20" height="20">
      <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
    </svg>
  </button>
`;

export const back = (label) => `
  <button class="${styles.back}" aria-label="${label}">
    <svg viewBox="0 0 1000 1000" width="20" height="20">
      <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"></path>
    </svg>
  </button>
`;

export const weekDayPlaceholder = `<div class="${styles.placeholder}" data-placeholder aria-hidden="true"></div>`;

/* eslint arrow-body-style: 0 */
export const weekRow = (num) => {
  return {
    open: `<div role="row" class="js-body-row-${num} ${styles.weekRow}">`,
    close: '</div>'
  };
};
