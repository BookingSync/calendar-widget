# Smily Calendar Widget (formerly BookingSync) [![CircleCI](https://circleci.com/gh/BookingSync/calendar-widget.svg?style=svg&circle-token=8c6343e12779072713c394d9be543728012efc92)](https://circleci.com/gh/BookingSync/calendar-widget)

## TL;DR
### Development
* `pnpm install`
* `pnpm dev`
* `pnpm run mock-server`
* `pnpm run test-ci`

### Usage
* load `dist/bookingsync-calendar-widget.js` script
* add `<div data-smily-calendar-widget></div>` tag to the place you would like to put the widget.

* Or as global.
```javascript
const calendar = new SmilyCalendarWidget({ el: document.querySelector('.my-widget') });
````

* Or as module
```javascript
import Calendar from 'bookingsync-calendar-widget';

const calendar = new Calendar({ el: document.querySelector('.my-widget') });
````

Note: npm package name and dist filename remain `bookingsync-calendar-widget`.

Theme note: the built-in default is now `data-theme="basic"` only. If you need the previous skew look, use `SKEW_THEME_CSS.md`.

@see `index.html` for more examples.

### Setup
* [Webpack](webpack.github.io) based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format, runs everywhere.
* ES6 tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Karma](https://karma-runner.github.io/1.0/index.html) runner.
* Linting with [Airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

## Getting started with Development
* `pnpm install` to get the project's dependencies.
* `pnpm dev` to start development server with live-reload and hot module replacement
* go to [http://localhost:8080/index.html](http://localhost:8080/index.html)

Additionally you can run json-mock server
* `pnpm run mock-server` serves the maps API for local development. Mocks are in `db.json`.

## Scripts
* `pnpm dev` - starts development server with live-reload and hot module replacement
* `pnpm run build` - produces production version under the `dist` folder
* `pnpm run test` - runs tests

## Positioning
The widget no longer bundles Popper. For dropdown and invalid-range tooltip positioning it will use the first runtime it finds:

1. `window.Popper` with a Popper 2 style `createPopper()`
2. `window.FloatingUIDOM`, `window.FloatingUI`, or `window.floatingUI` with `computePosition()`
3. a built-in fallback

The built-in fallback is intentionally basic. It supports `top` / `bottom` / `left` / `right` placement, `-start` / `-end` alignment, tooltip arrow positioning, and repositioning on `resize` and `scroll`. It does not implement collision-aware behavior such as flip, shift, or advanced hide handling. If you need that, expose Popper or Floating UI in the page runtime.

## Config
| __Option__ | __Description__ | __Type__ | __Default__ |
| ---        | ---             | ---      | ---         |
| `el` | Calendar container element. This is the only required option. | HTMLElement | `null` |
| `lang` | Locale key such as `en-US` or `fr-FR`. Invalid values fall back to `en-US`. | String | `en-US` |
| `theme` | Theme name stored in `data-theme`. The bundled stylesheet currently ships `basic` only. | String | `basic` |
| `apiHost` | API host name. | String | `http://localhost:3000` in development, `https://secure.smily.com` otherwise |
| `apiNamespace` | API namespace prefix. | String | `/api/v2/public` |
| `apiMapsRoute` | Maps route template used by the default `rentalUrl()` implementation. | String | `/maps.json?{apiRentalId}{apiCurrency}` |
| `rentalUrl(ids)` | Function used to build the maps URL. By default it derives the URL from `apiHost`, `apiNamespace`, `apiMapsRoute`, `apiRentalId`, and `apiCurrency`. | Function | built-in implementation |
| `rentalId` | Rental identifier used when loading availability maps. | String or Number | `null` |
| `currency` | Target currency for rate conversion and display. | String | `null` |
| `startOfWeek` | First weekday index, `0` for Sunday through `6` for Saturday. If omitted, the locale value is used. | Number | locale default |
| `minStay` | Minimum selectable range in nights. | Number | `1` |
| `maxStay` | Maximum selectable range in nights. | Number | `Infinity` |
| `allowShorterMinStaySelection` | Ignore per-day minimum-stay constraints and use `minStay` only. | Boolean | `false` |
| `allowLongerMaxStaySelection` | Ignore per-day maximum-stay constraints and use `maxStay` only. | Boolean | `false` |
| `monthStart` | First visible month, `0` through `11`. If omitted, the current month is used. | Number | current month |
| `yearStart` | First visible year. If omitted, the current year is used. | Number | current year |
| `displayMonths` | Number of visible months on desktop. | Number | `2` |
| `displayMonthsMobile` | Number of visible months on mobile. If omitted, `displayMonths` is used. | Number | `null` |
| `mobileBreakpoint` | Mobile viewport max width in px. `<=` this breakpoint is treated as mobile. | Number | `767` |
| `showPaginationMobile` | Keep the month pagination controls visible in mobile mode. | Boolean | `true` |
| `monthsPaginationJump` | Number of months to move when the forward/back controls are used. | Number | `1` |
| `selectable` | Enable range selection. | Boolean | `false` |
| `showRates` | Show rates from the availability map. | Boolean | `false` |
| `showMinStay` | Show minimum-stay text per day cell. | Boolean | `false` |
| `showMaxStay` | Show maximum-stay text per day cell. | Boolean | `false` |
| `isReverseSelectable` | Start selection from the end date instead of the start date. | Boolean | `false` |
| `isBackDisabled` | Prevent month navigation into the past. | Boolean | `true` |
| `enableAllDays` | Make past days and months selectable even when maps are not loaded. | Boolean | `false` |
| `isDropDown` | Render the widget as a dropdown anchored to an input or trigger element. | Boolean | `false` |
| `dropPlacement` | Preferred dropdown placement passed to the active positioning engine. | String | `bottom-start` |
| `elStartAt` | Start-date input. Also used as the dropdown opener when `isDropDown` is enabled. | HTMLElement | `null`, then `.SmilyCalendar__start-at` if found |
| `elEndAt` | End-date input. Also used as the dropdown opener when `isDropDown` is enabled. | HTMLElement | `null`, then `.SmilyCalendar__end-at` if found |
| `elSingleInput` | Single combined input used for dropdown mode. | HTMLElement | `null`, then `.SmilyCalendar__single-input` if found |
| `isSingleInput` | Use the single input and hide the start/end inputs. | Boolean | `null` |
| `singleInputDateFormat` | Date format used when filling the combined single input. | String | locale date format |
| `singleInputSeparator` | Separator inserted between start and end dates in the single input. | String | `→` |
| `elReset` | Element that clears the current selection when clicked. | HTMLElement | `null` |
| `formatDate` | Date format used for parsing and formatting visible input values. | String | locale date format |
| `hiddenElFormat` | If set, duplicates the start/end inputs into hidden fields formatted with this pattern. | String | `null` |
| `disableAvailabityMap` | Treat every mapped day as available. | Boolean | `false` |
| `currentDate` | Date used as "today" for disabling and clamping logic. | Date | `new Date()` |

## Callbacks

* `onSelectStart(ISO DateTime String, ISO Date String)`
* `onSelectEnd(ISO DateTime String, ISO Date String)`
* `onSelectionCompleted(ISO DateTime String, ISO DateTime String)`
* `onClearSelection([yyyy, m, dd] | null, [yyyy, m, dd] | null)`

See `index.html` for more examples.
All options can be passed as `data-` attributes to HTMLElement calendar placeholders, with camelCase options converted to kebab-case.
e.g.

```html
<div
  data-smily-calendar-widget
  data-selectable="true"
  data-format-date="%m/%d/%Y">
</div>
```

## Events
Calendar implements event Emitter, receiver can subscribe, unsubscribe, and subscribe one-time.

```javascript
var cal = new SmilyCalendarWidget({
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
| `init` | Finished initializing, data is NOT loaded |  |
| `maps-loaded` | Availability, rates and minimum stay maps are loaded and added to calendar | `{Object}` raw response from the server |
| `maps-error` | Error when loading maps |  |
| `loading-show` | Loading indicator shows |  |
| `loading-hide` | Loading indicator hides |  |
| `selection-start` | User selected start date | `{String}`, `{String}`: ISO datetime, ISO date |
| `selection-end` | User selected end date | `{String}`, `{String}`: ISO datetime, ISO date |
| `selection-reset` | Selection reset | `{Array}`, `{Array}`: selection start, selection end (`[yyyy, m, dd]`) |
| `selection-completed` | User selects end date when start date was already selected | `{Array}`, `{Array}`: selection start, selection end (`[yyyy, m, dd]`) |
| `drop-open` | Calendar-drop open |  |
| `drop-close` | Calendar-drop close |  |
