# Select Widget

Pure functionality, no styles included.

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
* `npm run server` to start development server with live-reload and hot module replacement
* go to [http://localhost:8080/index.html](http://localhost:8080/index.html)

## Scripts
* `npm run server` - starts development server with live-reload and hot module replacement
* `npm run build` - produces production version under the `dist` folder
* `npm run test` - runs tests.


## Usage

``` html

   <div class=".select"></div>
   
```

```javascript

import Select from 'calendar-widget';
const select = new Select({
  element: document.querySelector('.select'),
  data: ['A', 'B', 'C'],
  onChange(rawData, selected) {
    
  }
})

select.on('change', (a, b) => console.log(a, b));

```

see `src/examples.js` for more usages.

