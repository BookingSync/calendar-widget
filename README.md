# Calendar Widget

## Setup
* [Webpack](webpack.github.io) based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format, runs everywhere.
* ES6 tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Karma](https://karma-runner.github.io/1.0/index.html) runner.
* Linting with [Airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

## Install Yarn (Recommended)
* `npm install -g yarn`

## Getting started with Development
* `yarn` or `npm install` to get the project's dependencies.
* `npm start` to start development server with live-reload and hot module replacement
* go to [http://localhost:8080/index.html](http://localhost:8080/index.html)

Additionally you can run json-mock server
* `npm run mock-server` it serve maps api for local development. Mocks are in `db.json` file.

## Scripts
* `npm start` - starts development server with live-reload and hot module replacement
* `npm run build` - produces production version under the `dist` folder
* `npm run test` - runs tests.


## Usage

Include `dist/calendar-widget.js`.

Make sure there is a placeholder on page with minimum configuration:
```
  <div data-calendar-widget data-rental-ids="1"></div>
```

All config support:
 
```
    rentalIds:     1 // rental to show availabilities
    startOfWeek:   0, // 0 Mo ... 6 Su, by ISO
    monthStart:    // start with current month by default, or M '0...11'
    yearStart:     // start with current year, or YYYY
    displayMonths: 2,
    lang:          //'en', 'fr', 'de'
    selectable:    false,
    showRates:     false,
    showMinStay:   false,
```

```
<div data-calendar-widget
     data-rental-ids=1
     data-lang="fr"
     data-show-rates=true
     data-min-stay=true
     data-display-months=6
     data-start-of-week=0 >
</div>
```

Api host and namespace can be configurable

`data-api-host`,  `data-api-namespace`, `data-api-maps-route`

defaults are: `https://www.bookingsync.com`, `/api/v2/public` and `/maps.json?rental_id={params}`
place `{params}` where api expects params.


