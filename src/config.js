/* global NODE_ENV, Date */
const currDate = new Date();

export default {
  name:         'Calendar Widget',
  apiHost:      NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?rental_id={params}',

  rentalUrl(ids) {
    const route = this.apiMapsRoute.replace('{params}', ids);
    return NODE_ENV === 'development' ? `${this.apiHost}/rental` : `${this.apiHost}${this.apiNamespace}${route}`;
  },

  startOfWeek:         0, // 0 Mo ... 6 Su, by ISO
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
  currDate,
};
