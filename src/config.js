/* global process, require */
import { dashToCapital } from 'widget-utils';

const currDate = new Date();
const { name } = require('../package.json');

export default {
  name,
  cssPrefix: dashToCapital(name),
  apiHost: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bookingsync.com',
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
  maxStay: 0, // can select infinite nights
  monthStart: currDate.getUTCMonth(), // start with current month by default M '0...12'
  yearStart: currDate.getUTCFullYear(), // start with current year YYYY
  daysPerWeek: 7, // FIXME support calendar rendering
  displayMonths: 2,
  selectable: false,
  invalidRangeSelectable: true,
  showRates: false,
  showMinStay: false,
  showMaxStay: false,
  isReverseSelectable: false, // select end date first
  isBackDisabled: true,
  isDropDown: false,
  dropPlacement: 'bottom-start',
  el: null,
  elStartAt: null,
  elEndAt: null,
  elSingleInput: null,
  isSingleInput: null,
  singleInputDateFormat: null,
  singleInputSeparator: '→',
  elReset: null,
  formatDate: null,
  hiddenElFormat: null,
  rentalId: null,
  currency: null,
  disableAvailabityMap: false,
  allowShorterMinStaySelection: false,
  allowLongerMaxStaySelection: false,
  enableAllDays: false,
  currDate
};
