# Calendar Widget [![CircleCI](https://circleci.com/gh/BookingSync/calendar-widget.svg?style=svg&circle-token=8c6343e12779072713c394d9be543728012efc92)](https://circleci.com/gh/BookingSync/calendar-widget)

## TL;DR
### Development
* `npm`
* `npm start`
* `npm run mock-server`
* `npm run test-ci`

### Usage
* load `dist/bookingsync-calendar-widget.js` script
* add `<div data-bookingsync-calendar-widget></div>` tag to the place you would like to put the widget. 

* Or as global.
```javascript
const calendar = new BookingSyncCalendarWidget({ el: document.querySelector('.my-widget') });
````

* Or as module 
```javascript
import Calendar from 'bookingsync-calendar-widget';

const calendar = new Calendar({ el: document.querySelector('.my-widget') });
````

@see `index.html` for more examples.

### Setup
* [Webpack](webpack.github.io) based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format, runs everywhere.
* ES6 tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Karma](https://karma-runner.github.io/1.0/index.html) runner.
* Linting with [Airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

## Getting started with Development
* `npm` to get the project's dependencies.
* `npm start` to start development server with live-reload and hot module replacement
* go to [http://localhost:8080/index.html](http://localhost:8080/index.html)

Additionally you can run json-mock server
* `npm run mock-server` it serve maps api for local development. Mocks are in `db.json` file.

## Scripts
* `npm start` - starts development server with live-reload and hot module replacement
* `npm run build` - produces production version under the `dist` folder
* `npm run test` - runs tests.

## Config
| __Option__ | __Description__ | __Type__ | __Default__ |
| ---        | ---             | ---      | ---         |
| `el` | HTMLElement to act as a container (only this one is MANDATORY) | HTMLElement | null
| `apiHost` | API host name | String | `http://localhost:3000` for development, `https://www.bookingsync.com` for production |
| `apiNamespace` | API namespase | String | `/api/v2/public` |
| `apiMapsRoute` | route for maps | String | `/maps.json?rental_id={params}` - `{params}` is replaced with `rentalId` |
| `rentalURL` | URL route for maps | Function | |
| `rentalId` | parameter to pass in API request for availability maps | String or Number | null
| `currency` | Set currency conversion | String | null
| `minStay` | Minimum selectable range | Number | 1
| `maxStay` | Maximum selectable range | Number | Infinity
| `allowShorterMinStaySelection` | Force minimum selection to `opts.minStay` | Boolean | false
| `allowShorterMaxStaySelection` | Force maximum selection to `opts.maxStay` | Boolean | false
| `monthStart` | Calendar starts months, the left up most, 0 - 11 range | Number | Current month 
| `yearStart` | Calendar start year, YYYY format (2016) | Number | Current year
| `displayMonths` | How many months to render | Number | 2
| `selectable` | Allow to select range | Boolean | false
| `showRates` | Show rates from availability map | Boolean | false
| `showMinStay` | Show minimum stay per single day (be careful to use together with `showRates` or `showMaxStay`, can be too munch information) | Boolean | false
| `showMaxStay` | Show maximum stay per single day (be careful to use together with `showRates` or `showMinStay`, can be too munch information) | Boolean | false
| `isReverseSelectable` | User selects end date first | Boolean | false
| `isBackDisabled` | Disable back button for past months | Boolean | true
| `isDropDown` | Act like drop down, good idea to specify `elStartAt` and `elEndAt` | Boolean | false
| `elStartAt` | Input field to show start selected, open drop-down on focus| HTMLElement | null (will try to find `.bookingsyncCalendarWidget__start-at` if null)
| `elEndAt` | Input field to show end selected, open drop-down on focus | HTMLElement | null (will try to find `.bookingsyncCalendarWidget__end-at` if null)
| `elSingleInput` | Single input field to show start/end selected, open drop-down on focus | HTMLElement | null (will try to find `.bookingsyncCalendarWidget__single-input` if null)
| `isSingleInput` | Allow to use the single input, hides start/end inputs | Boolean | null
| `elReset` | Any element on click resets calendar selections and input values | HTMLElement | null
| `formatDate` | Overwrite locale defined date format | String | `%m/%d/%y` (https://github.com/pineapplemachine/strtime-js/blob/HEAD/directives.md)
| `hiddenElFormat` | Duplicate start/end inputs with a different date format | String | null
| `disableAvailabityMap` | Overwrite each days to be available | Boolean | false
| `enableAllDays` | Force past days/months to be selectable | Boolean | false
| `currentDate` | Current date Date object | Date | `new Date()`

## Callbacks

* `onSelectStart(ISO String, Date)`
* `onSelectEnd(ISO String, Date)`
* `onSelectionCompleted(ISO String, ISO String)`

see `index.html` for more examples.
All options can be passed as `data-` attributes to HTMLElement calendar placeholders, with dasherized way.
e.g.

```html
<div 
  data-bookingsync-calendar-widget
  data-selectable="true"
  data-format-date="%m/%d/%y">
</div>
```

## Events
Calendar implements event Emitter, receiver can subscribe/unsubscribe to events and subscribe one-time.

```javascript
var cal = new bookingsyncCalendarWidget({
  el: document.querySelector('.calendar-wrapper'),
});

cal.on('selection-end', function(a, b) {
  console.log('selection-end', a, b)
});
cal.on('selection-start', function(a, b) {
  console.log('selection-start', a, b)
});

cal.once('selection-end', function(a, b) {
    console.log('selection-end', a, b)
 });
 
cal.off('selection-end', function(a, b) {
    console.log('selection-end', a, b)
 }); 
```

| __Event__ | __Description__ | __Params__ |
| ---       | ---             | ---        |
| `init`      | Finished initializing, data is NOT loaded |  |
| `maps-loaded` | Availability, rates and minimum stay maps are loaded and added to calendar | {Object} raw response from the server |  
| `maps-error` | Error when loading maps |  |
| `loading-show` | Loading indicator shows |  |
| `loading-hide` | Loading indicator hides |  |
| `selection-start` | User selected start date | {String} {Date}, ISO format '2016-01-01', Date |
| `selection-end` | User selected end date | {String} {Date}, ISO format '2016-01-01', Date |
| `selection-reset` | Selection reset | {Array}, {Array}, selection start, selection end ([yyyy, m, dd]) |
| `selection-completed` | User selects end date when start date was already selected | {Array}, {Array}, selection start, selection end ([yyyy, m, dd]) |
| `drop-open` | Calendar-drop open |  | 
| `drop-close` | Calendar-drop close |  | 
