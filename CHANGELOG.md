# Change Log
All notable changes to this project will be documented in this file.

## [1.4.7] - 2021-03-04
### Added
- `nl-NL` language

## [1.4.6] - 2020-10-30
### Added
- `maxStay` option to limit the number of selectable nights
- Russian and Polish languages

## [1.4.5] - 2020-01-23
### Fixed
- inputsToValues method was called too early

## [1.4.4] - 2020-01-03
### Added
- inputsToValues method (reads inputs values to set dates selection)

## [1.4.3] - 2019-12-02
### Fixed
- GMT +00 issue

## [1.4.2] - 2019-08-24
### Updated
- Removed `Open Sans` font
### Fixed
- Now fully working on IE11 / Edge

## [1.4.1] - 2019-07-16
### Updated
- Moved Reset styles to `widget-utils` module

## [1.4.0] - 2019-07-16
### Fixed
- Global variables
### Updated
- Namespace `BookingSyncCalendarWidget` to `bookingsyncCalendarWidget`

## [1.3.4] - 2019-07-09
### Fixed
- Day-1 Timezone issue

## [1.3.3] - 2019-06-21
### Added
- Export `Popper.js`
### Fixed
- Input touch event on Android devices

## [1.3.2] - 2019-06-06
### Fixed
- `hiddenElFormat` now removes the attribute `name` of the visible input

## [1.3.0] - 2019-03-31
### Added
- `resetSelectionOnEscape` Resets selection with Escape key
- Option `enableAllDays` Force past days/months to be selectable
### Fixed
- Past days were not disabled within the current month
### Updated
- Webpack Config, dev version under `bookingsync-calendar-widget.dev.js`, production version unminified under `bookingsync-calendar-widget.js`
- Demo `index.html`
- README

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
