# Change Log
All notable changes to this project will be documented in this file.

## [1.2.4] - 2019-01-18
### Updated
- `disableAvailabityMap` & `allowShorterMinStaySelection` default values
- README.md

## [1.2.3] - 2019-01-15
### Fixed
- Update single-input value on init

## [1.2.2] - 2019-01-12
### Added
- Expose `widget-utils` under `window.BookingSyncWidgetUtils`
### Fixed
- CHANGELOG.md

## [1.2.1] - 2019-01-11
### Added
- Option `disableAvailabityMap` & `allowShorterMinStaySelection`

## [1.2.0] - 2018-12-27
### Added
- Option `singleInputDateFormat`
- Cancel selection on invalid day click
- Locales aliases (eg: `en` = `en-US`)
### Fixed
- Minor fixes

## [1.1.0] - 2018-12-27
### Added
- Single input with date range value
- Single input example in `index.html`
- Default classes for inputs
### Fixed
- Minor fixes

## [1.0.0] - 2018-10-2
### Changed
- `TetherDrop` to `Popper.js`
- Use lang `en-US` as default instead of browser lang
### Added
- Use string date parser (e.g. %Y-%m-%d)
- Hidden inputs with different date format (optionnal)
- Use locale with country code
### Fixed
- Minor fixes

## [0.3.0] - 2018-09-18
### Fixed
- Switch from `Yarn` to `Npm`
- Migrate to `CircleCI v2`, `WebPack v3` and `Babel v7`
- Fix `currency` and `API calls`
- Add `date-range` from inputs
- Update `eslint` rules

## [0.2.4] - 2017-08-14
### Fixed
- handling adding js-script with async attribute

## [0.2.3] - 2017-08-14
### Fixed
- minor fixes

## [0.2.2] - 2017-08-14
### Fixed
- dist file

## [0.2.1] - 2017-07-10
### Fixed
- Chrome Number formatting

## [0.1.1] - 2017-02-23
### Added
- Dispatch 'change' event on inputs.

### Changed
- 'currencyFormatter' moved to 'widget-utils' module.
### Fixed
- 'onSelectionCompleted' call back params.

## [0.1.0] - 2017-02-20
### Added
- Display currency from maps request.
- Locale based price and currency format.
- Currency to locale (as fallback).
- `onSelectionCompleted` callback.
- Prices are rounded now.
- Better Logger.
- Tests.

### Changed
- Scripts for mocks.
- Styles for rates: 
  - smaller font,
  - month min-width was increased to 27rem to accommodate prices.

## [0.0.17] - 2017-02-14
### Added
- New styles for view with rates and min-stay.

### Changed
- Translations for `rate` and `minStay` to use interpolations with numbers.

## [0.0.16] - 2017-02-03
### Added
- `VERSION` property on `BookingSyncCalendar` global.
- More event loggers.
- CHANGELOG.md to track changes.

### Changed
- Minor style changes

### Fixed
- Maps offset bug

## [0.0.14] - 2017-02-02
### Added
- Filled README.md with params, events and examples.

### Fixed
- Timezone offset in calculating start of the month.

