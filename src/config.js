/* global process */

const name = 'smily-calendar-widget';
const currentDate = new Date();

export default {
  name,
  cssPrefix: 'SmilyCalendar',
  apiHost: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://secure.smily.com',
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
  maxStay: Infinity, // can select infinite nights
  monthStart: null, // start with current month by default M '0...11'
  yearStart: null, // start with current year YYYY
  daysPerWeek: 7, // FIXME support calendar rendering
  displayMonths: 2,
  displayMonthsMobile: null, // falls back to displayMonths
  mobileBreakpoint: 767, // px, <= breakpoint is mobile
  monthsPaginationJump: 1,
  selectable: false,
  showRates: false,
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
  currentDate,
  theme: 'basic'
};
