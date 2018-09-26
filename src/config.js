/* global NODE_ENV, Date */
const currDate = new Date();

export default {
  name: 'BookingSync Calendar Widget',
  apiHost: NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
  apiNamespace: '/api/v2/public',
  apiMapsRoute: '/maps.json?{apiRentalId}{apiCurrency}',
  apiRentalId: 'rental_id=',
  apiCurrency: '&exchange_to_currency=',

  rentalUrl(ids) {
    let route = this.apiMapsRoute.replace('{apiRentalId}', `${this.apiRentalId}${ids}`);
    route = route.replace('{apiCurrency}', (this.currency) ? `${this.apiCurrency}${this.currency}` : '');
    return `${this.apiHost}${this.apiNamespace}${route}`;
  },

  startOfWeek: 0, // 0 Sun 1 Mon....6 Sat
  minStay: 1, // can select one night
  monthStart: currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart: currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek: 7, // FIXME support calendar rendering
  displayMonths: 2,
  selectable: false,
  showRates: false,
  showMinStay: false,
  isReverseSelectable: false, // select end date first
  isBackDisabled: true,
  isDropDown: false,
  el: null,
  elStartAt: null,
  elEndAt: null,
  elReset: null,
  formatDate: null,
  rentalId: null,
  currency: null,
  currDate
};
