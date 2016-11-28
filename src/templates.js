export const month =
               `<table class="month">
                  <caption class="caption"></caption>
                  <thead class="header"><tr></tr></thead>
                  <tbody class="body"></tbody>
                </table>`;

export const weekDayLabel       = label => `<th>${label}</th>`;

export const weekDay            = (label, disabled) =>
                `<td class="cell-selectable" ${disabled ? 'data-disabled' : ''}>
                  <div>${label}</div>
                 </td>`;

export const weekDayPlaceholder = '<td></td>';

export const weekRow            = {
  open:  '<tr>',
  close: '</tr>',
};
