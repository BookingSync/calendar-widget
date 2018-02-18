/* eslint "max-len": ["error", 300] */
import s from './styles/calendar.scss';

const { disabled, booked, info, infoExtra, morningDisabled, nightDisabled, morningBooked, nightBooked, cnt } = s;

export const main  = `<div class="${s.monthsWrapper}"></div>`;

export const month = `<div class="${s.mCell} js-month">
                        <table class="${s.month}" role="month">
                          <caption class="${s.caption}"></caption>
                          <thead class="${s.tableHeader}"><tr></tr></thead>
                          <tbody class="${s.body}"></tbody>
                        </table>
                      </div>`;

export const weekDayLabel = label => `<th class="${s.th}">${label}</th>`;

/* eslint prefer-template: 0 */
export const weekDay = (label, dis, disStart, isOutAvailable, rate, minStay, rateT, minStayT, isBooked, bookedStart, isOutBooked, disabledAction) =>
  `<td ${dis ? 'data-disabled' : 'data-enabled'}             
       ${isOutAvailable ? 'data-available-out' : ''}
       data-value="${label}"
       class="${s.cell} ${dis && !isBooked ? disabled : ''}${disStart ? morningDisabled : ''} ${dis && isOutAvailable && !isBooked ? nightDisabled : ''} ${isBooked && !isOutAvailable ? booked : ''}${bookedStart ? morningBooked : ''} ${isOutBooked ? nightBooked : ''}"
      ${disabledAction != null ? disabledAction : ''}
      <div class="${cnt}" role="day-value">
        ${label}
      </div>
      ${rate ? '<span class="' + info + '">' + rateT + '</span>' : ''}
      ${minStay ? '<span class="' + infoExtra + '">' + minStayT + '</span>' : ''}
   </td>`;

export const forward = `<button class="${s.forward}" role="button">
                          <svg viewBox="0 0 1000 1000">
                            <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
                          </svg>
                        </button>`;

export const back    = `<button class="${s.back}" role="button">
                          <svg viewBox="0 0 1000 1000">
                            <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"></path>
                          </svg>
                        </button>`;

export const weekDayPlaceholder = '<td></td>';

/* eslint arrow-body-style: 0 */
export const weekRow = (num) => {
  return {
    open:  `<tr class="js-body-row-${num}">`,
    close: '</tr>'
  };
};

export const loading = `<div class="${s.loadingLayer}">
                          <div class="${s.loading}"></div>
                        </div>`;
