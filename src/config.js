/* global NODE_ENV, Date */
const currDate = new Date();

export default {
  name:         'BookingSync Calendar Widget',
  apiHost:      NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?rental_id={params}',

  rentalUrl(ids) {
    const route = this.apiMapsRoute.replace('{params}', ids);
    return `${this.apiHost}${this.apiNamespace}${route}`;
  },

  startOfWeek:         0, // 0 Su 1 Mo....6 Sa
  minStay:             1, // can select one night
  monthStart:          currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart:           currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek:         7, // FIXME support calendar rendering
  displayMonths:       2,
  selectable:          false,
  showRates:           false,
  showMinStay:         false,
  isReverseSelectable: false, // select end date first
  isBackDisabled:      true,
  isDropDown:          false,
  el:                  null,
  elStartAt:           null,
  elEndAt:             null,
  elReset:             null,
  formatDate:          'dd/mm/yyyy',
  rentalId:            null,
  showBooked:          false, // option to show booked dates in a different color,
  disabledAction:      null,
  currDate
};
