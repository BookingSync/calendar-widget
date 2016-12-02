export const month = `<div class="month-cell">
                        <table class="month">
                          <caption class="caption"></caption>
                          <thead class="header"><tr></tr></thead>
                          <tbody class="body"></tbody>
                        </table>
                      </div>`;

export const weekDayLabel = label => `<th>${label}</th>`;

export const weekDay = (label, disabled) =>
                      `<td data-selectable ${disabled ? 'data-disabled' : 'data-enabled'} data-value="${label}" class="cell-selectable ${disabled ? 'cell-disabled' : ''}">
                          ${label}
                       </td>`;

export const forward = `<div class="forward">
                          <svg viewBox="0 0 1000 1000">
                            <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
                          </svg>
                        </div>`;

export const back    = `<div class="back">
                          <svg viewBox="0 0 1000 1000">
                            <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"></path>
                          </svg>
                        </div>`;

export const weekDayPlaceholder = '<td></td>';

export const weekRow = {
  open:  '<tr>',
  close: '</tr>',
};
