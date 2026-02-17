/* global describe, it, before, after, document, window */
import { expect } from 'chai';

import Calendar from '../../src/calendar';

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

});
