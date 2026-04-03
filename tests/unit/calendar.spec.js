/* global describe, it, before, after, document, window */
import { expect } from 'chai';

import Calendar from '../../src/calendar';
import styles from '../../src/styles/calendar.scss';

const { keys } = Object;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map((i) => element.setAttribute(i, params[i]));
  return element;
};

const setViewportWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width
  });
};

describe('responsive displayMonths', () => {
  let originalInnerWidth;
  let originalMatchMedia;

  const getMaxWidthFromMediaQuery = (query) => {
    const matched = query.match(/max-width:\s*(\d+)px/);
    return matched ? parseInt(matched[1], 10) : 0;
  };

  before(() => {
    originalInnerWidth = window.innerWidth;
    originalMatchMedia = window.matchMedia;

    window.matchMedia = (query) => {
      const maxWidth = getMaxWidthFromMediaQuery(query);

      return {
        media: query,
        get matches() {
          return window.innerWidth <= maxWidth;
        },
        addEventListener() {},
        removeEventListener() {},
        addListener() {},
        removeListener() {}
      };
    };
  });

  after(() => {
    setViewportWidth(originalInnerWidth);
    window.matchMedia = originalMatchMedia;
  });

  it('uses desktop or mobile month count on init', () => {
    setViewportWidth(1200);
    const desktopRoot = stubElement('div');
    document.body.appendChild(desktopRoot);

    const desktopCalendar = new Calendar({
      el: desktopRoot,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 3,
      displayMonthsMobile: 1,
      mobileBreakpoint: 767
    });

    expect(desktopRoot.querySelectorAll('.js-month').length).to.be.equal(3);
    desktopCalendar.destroy();

    setViewportWidth(360);
    const mobileRoot = stubElement('div');
    document.body.appendChild(mobileRoot);

    const mobileCalendar = new Calendar({
      el: mobileRoot,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 3,
      displayMonthsMobile: 1,
      mobileBreakpoint: 767
    });

    expect(mobileRoot.querySelectorAll('.js-month').length).to.be.equal(1);
    mobileCalendar.destroy();
  });

  it('rerenders when viewport crosses breakpoint', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 3,
      displayMonthsMobile: 1,
      mobileBreakpoint: 767
    });

    expect(rootElement.querySelectorAll('.js-month').length).to.be.equal(3);

    setViewportWidth(360);
    calendar.handleViewportChange();
    expect(rootElement.querySelectorAll('.js-month').length).to.be.equal(1);
    calendar.destroy();
  });

  it('renders a single shared weekday row for mobile vertical calendars', () => {
    setViewportWidth(360);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 3,
      displayMonthsMobile: 3,
      mobileBreakpoint: 767
    });

    expect(calendar.dom.mobileWeekdays).to.exist;
    expect(calendar.dom.mobileWeekdays.classList.contains(styles.mobileWeekdays)).to.equal(true);
    expect(rootElement.querySelectorAll(`.${styles.mobileWeekdays}`).length).to.be.equal(1);
    expect(rootElement.querySelectorAll(`.${styles.tableHeader}`).length).to.be.equal(3);

    calendar.destroy();
  });

  it('renders a single month-year trigger in each month caption', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    expect(rootElement.querySelectorAll(`.${styles.captionTrigger}`).length).to.be.equal(2);
    expect(rootElement.querySelectorAll(`.${styles.yearPickerPanel}`).length).to.be.equal(1);

    calendar.destroy();
  });

  it('rerenders contiguous months when a year is selected from the caption picker', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 3,
      mobileBreakpoint: 767
    });

    const secondMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[1];
    secondMonthTrigger.click();

    const sharedPanel = rootElement.querySelector(`.${styles.yearPickerPanel}`);
    const targetYear = sharedPanel.querySelector(`.${styles.yearOption}[data-year-option="2027"]`);
    targetYear.click();

    const triggers = [...rootElement.querySelectorAll(`.${styles.captionTrigger}`)].map((el) => el.textContent.trim());

    expect(triggers).to.deep.equal(['December 2026', 'January 2027', 'February 2027']);

    calendar.destroy();
  });

  it('does not show years before the current year in the year picker', () => {
    setViewportWidth(360);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2026, 3, 3),
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 1,
      displayMonthsMobile: 1,
      mobileBreakpoint: 767
    });

    rootElement.querySelector(`.${styles.captionTrigger}`).click();

    const yearOptions = [...rootElement.querySelectorAll(`.${styles.yearOption}`)]
      .map((el) => parseInt(el.getAttribute('data-year-option'), 10));
    const previousPager = rootElement.querySelector('[data-year-page-offset="-12"]');

    expect(Math.min(...yearOptions)).to.be.equal(2026);
    expect(previousPager.hidden).to.equal(true);

    calendar.destroy();
  });

});
