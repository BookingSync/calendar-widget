# Calendar Widget
[![CircleCI](https://circleci.com/gh/BookingSync/calendar-widget.svg?style=svg&circle-token=8c6343e12779072713c394d9be543728012efc92)](https://circleci.com/gh/BookingSync/calendar-widget)

## Setup
* [Webpack](webpack.github.io) based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format, runs everywhere.
* ES6 tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Karma](https://karma-runner.github.io/1.0/index.html) runner.
* Linting with [Airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

## Getting started with Development
* `yarn` to get the project's dependencies.
* `yarn start` to start development server with live-reload and hot module replacement
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
| `apiHost` | API host name | String | `http://localhost:3000` for development, `https://www.bookingsync.com` for production |
| `apiNamespace` | API namespase | String | `/api/v2/public` |
| `apiMapsRoute` | route for maps | String | `/maps.json?rental_id={params}` - `{params}` is replaced with `rentalId` |
