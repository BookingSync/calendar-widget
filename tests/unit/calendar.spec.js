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

  it('keeps month pagination available on mobile by default', () => {
    setViewportWidth(360);
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

    expect(rootElement.classList.contains(styles.mobileMode)).to.equal(true);
    expect(rootElement.classList.contains(styles.mobilePaginationEnabled)).to.equal(true);

    calendar.destroy();
  });

  it('renders a single month-year trigger in each month caption', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2025, 0, 3),
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    expect(rootElement.querySelectorAll(`.${styles.captionTrigger}`).length).to.be.equal(2);
    expect(rootElement.querySelectorAll(`.${styles.yearPickerPanel}`).length).to.be.equal(1);

    calendar.destroy();
  });

  it('ignores year-picker trigger clicks coming from another calendar instance', () => {
    setViewportWidth(1200);
    const firstRoot = stubElement('div');
    const secondRoot = stubElement('div');
    document.body.appendChild(firstRoot);
    document.body.appendChild(secondRoot);

    const firstCalendar = new Calendar({
      el: firstRoot,
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 1,
      mobileBreakpoint: 767
    });

    const secondCalendar = new Calendar({
      el: secondRoot,
      yearStart: 2026,
      monthStart: 5,
      displayMonths: 1,
      mobileBreakpoint: 767
    });

    secondRoot.querySelector(`.${styles.captionTrigger}`).click();

    expect(firstCalendar.activeYearPicker).to.equal(null);
    expect(firstCalendar.dom.yearPickerPanel.hidden).to.equal(true);
    expect(secondCalendar.activeYearPicker).to.not.equal(null);
    expect(secondCalendar.dom.yearPickerPanel.hidden).to.equal(false);

    firstCalendar.destroy();
    secondCalendar.destroy();
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

    expect(triggers).to.deep.equal(['April 2027', 'May 2027', 'June 2027']);

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
    expect(previousPager.hidden).to.equal(false);
    expect(previousPager.disabled).to.equal(true);

    calendar.destroy();
  });

  it('shows past years in the year picker when back navigation is enabled', () => {
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
      mobileBreakpoint: 767,
      isBackDisabled: false
    });

    rootElement.querySelector(`.${styles.captionTrigger}`).click();

    const yearOptions = [...rootElement.querySelectorAll(`.${styles.yearOption}`)]
      .map((el) => parseInt(el.getAttribute('data-year-option'), 10));
    const previousPager = rootElement.querySelector('[data-year-page-offset="-12"]');
    const targetYear = rootElement.querySelector(`.${styles.yearOption}[data-year-option="2025"]`);

    expect(Math.min(...yearOptions)).to.be.below(2026);
    expect(previousPager.disabled).to.equal(false);

    targetYear.click();
    expect(rootElement.querySelector(`.${styles.captionTrigger}`).textContent.trim()).to.equal('April 2025');

    calendar.destroy();
  });

  it('clamps year-picker rerenders to the current month when a lower year would expose past months', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2026, 3, 3),
      yearStart: 2026,
      monthStart: 10,
      displayMonths: 3,
      mobileBreakpoint: 767
    });

    const thirdMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[2];
    thirdMonthTrigger.click();

    const sharedPanel = rootElement.querySelector(`.${styles.yearPickerPanel}`);
    const targetYear = sharedPanel.querySelector(`.${styles.yearOption}[data-year-option="2026"]`);
    targetYear.click();

    const triggers = [...rootElement.querySelectorAll(`.${styles.captionTrigger}`)].map((el) => el.textContent.trim());

    expect(triggers).to.deep.equal(['April 2026', 'May 2026', 'June 2026']);

    calendar.destroy();
  });

  it('clamps year-picker rerenders when the selected year matches the minimum year but the month is still too early', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2026, 3, 3),
      yearStart: 2027,
      monthStart: 2,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    const firstMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[0];
    firstMonthTrigger.click();

    const sharedPanel = rootElement.querySelector(`.${styles.yearPickerPanel}`);
    const targetYear = sharedPanel.querySelector(`.${styles.yearOption}[data-year-option="2026"]`);
    targetYear.click();

    const triggers = [...rootElement.querySelectorAll(`.${styles.captionTrigger}`)].map((el) => el.textContent.trim());

    expect(triggers).to.deep.equal(['April 2026', 'May 2026']);

    calendar.destroy();
  });

  it('keeps focus on an outside control when the year picker closes from an outside click', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    const outsideInput = stubElement('input');
    document.body.appendChild(rootElement);
    document.body.appendChild(outsideInput);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    const secondMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[1];
    secondMonthTrigger.click();
    outsideInput.focus();
    outsideInput.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

    expect(calendar.activeYearPicker).to.equal(null);
    expect(document.activeElement).to.equal(outsideInput);

    calendar.destroy();
    outsideInput.remove();
  });

  it('restores focus to the active caption trigger when Escape closes the year picker', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    const secondMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[1];
    secondMonthTrigger.click();
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(calendar.activeYearPicker).to.equal(null);
    expect(document.activeElement).to.equal(secondMonthTrigger);

    calendar.destroy();
  });

  it('restores focus to the originating caption trigger after keyboard year selection', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2025, 0, 3),
      yearStart: 2025,
      monthStart: 0,
      displayMonths: 2,
      mobileBreakpoint: 767
    });

    const secondMonthTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[1];
    secondMonthTrigger.click();

    const sharedPanel = rootElement.querySelector(`.${styles.yearPickerPanel}`);
    const targetYear = sharedPanel.querySelector(`.${styles.yearOption}[data-year-option="2027"]`);

    targetYear.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 0 }));

    const updatedSecondTrigger = rootElement.querySelectorAll(`.${styles.captionTrigger}`)[1];

    expect(calendar.activeYearPicker).to.equal(null);
    expect(updatedSecondTrigger.textContent.trim()).to.contain('2027');
    expect(document.activeElement).to.equal(updatedSecondTrigger);

    calendar.destroy();
  });

  it('positions the year picker inside the visible scrolled area of the calendar', () => {
    setViewportWidth(360);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    let scrollTop = 320;

    Object.defineProperty(rootElement, 'clientHeight', {
      configurable: true,
      value: 480
    });
    Object.defineProperty(rootElement, 'scrollTop', {
      configurable: true,
      get() {
        return scrollTop;
      },
      set(value) {
        scrollTop = value;
      }
    });

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

    expect(calendar.dom.yearPickerPanel.style.top).to.equal('320px');
    expect(calendar.dom.yearPickerPanel.style.height).to.equal('480px');
    expect(calendar.dom.yearPickerPanel.style.bottom).to.equal('auto');

    calendar.destroy();
  });

  it('keeps PageDown focus in the originating month slot after paging', (done) => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2026, 0, 3),
      yearStart: 2026,
      monthStart: 4,
      displayMonths: 2,
      mobileBreakpoint: 767,
      selectable: true,
      isBackDisabled: false
    });

    const focusCell = calendar.dom.months[0].querySelector('[data-value="15"]');
    focusCell.focus();
    calendar.handleArrowNavigation({ preventDefault() {}, target: focusCell }, 'PageDown', () => {});

    setTimeout(() => {
      const activeCell = document.activeElement;
      const activeMonth = activeCell.closest('.js-month');

      expect(calendar.monthStart).to.equal(5);
      expect(activeCell.getAttribute('data-value')).to.equal('15');
      expect(activeMonth.slotIndex).to.equal(0);
      expect(activeMonth.month).to.equal(5);

      calendar.destroy();
      done();
    }, 0);
  });

  it('keeps PageUp focus in the originating month slot after paging', (done) => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    const calendar = new Calendar({
      el: rootElement,
      currentDate: new Date(2026, 0, 3),
      yearStart: 2026,
      monthStart: 1,
      displayMonths: 2,
      mobileBreakpoint: 767,
      selectable: true,
      isBackDisabled: false
    });

    const focusCell = calendar.dom.months[0].querySelector('[data-value="15"]');
    focusCell.focus();
    calendar.handleArrowNavigation({ preventDefault() {}, target: focusCell }, 'PageUp', () => {});

    setTimeout(() => {
      const activeCell = document.activeElement;
      const activeMonth = activeCell.closest('.js-month');

      expect(calendar.monthStart).to.equal(0);
      expect(activeCell.getAttribute('data-value')).to.equal('15');
      expect(activeMonth.slotIndex).to.equal(0);
      expect(activeMonth.month).to.equal(0);

      calendar.destroy();
      done();
    }, 0);
  });

  it('uses singleInputDateFormat when filling the combined input', () => {
    setViewportWidth(1200);
    const rootElement = stubElement('div');
    const singleInput = stubElement('input');
    document.body.appendChild(rootElement);
    document.body.appendChild(singleInput);

    const calendar = new Calendar({
      el: rootElement,
      isSingleInput: true,
      elSingleInput: singleInput,
      singleInputDateFormat: '%d.%m.%Y'
    });

    calendar.selectionStart = [2026, 3, 5];
    calendar.selectionEnd = [2026, 3, 12];
    calendar.completeSelection();

    expect(singleInput.value).to.equal('05.04.2026 → 12.04.2026');

    calendar.destroy();
    singleInput.remove();
  });

  it('uses unique tooltip ids per calendar instance', () => {
    setViewportWidth(1200);
    const firstRoot = stubElement('div');
    const secondRoot = stubElement('div');
    document.body.appendChild(firstRoot);
    document.body.appendChild(secondRoot);

    const firstCalendar = new Calendar({
      el: firstRoot,
      currentDate: new Date(2026, 3, 1),
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 1,
      minStay: 4
    });

    const secondCalendar = new Calendar({
      el: secondRoot,
      currentDate: new Date(2026, 3, 1),
      yearStart: 2026,
      monthStart: 3,
      displayMonths: 1,
      minStay: 4
    });

    firstCalendar.highLightRange([2026, 3, 5], [2026, 3, 6]);
    secondCalendar.highLightRange([2026, 3, 7], [2026, 3, 8]);

    const firstDescribedCell = firstRoot.querySelector(`[aria-describedby="${firstCalendar.tooltipId}"]`);
    const secondDescribedCell = secondRoot.querySelector(`[aria-describedby="${secondCalendar.tooltipId}"]`);

    expect(firstCalendar.dom.tooltip.id).to.not.equal(secondCalendar.dom.tooltip.id);
    expect(firstDescribedCell).to.exist;
    expect(secondDescribedCell).to.exist;

    firstCalendar.destroyTooltip();

    expect(firstRoot.querySelector(`[aria-describedby="${firstCalendar.tooltipId}"]`)).to.equal(null);
    expect(secondRoot.querySelector(`[aria-describedby="${secondCalendar.tooltipId}"]`)).to.equal(secondDescribedCell);

    firstCalendar.destroy();
    secondCalendar.destroy();
  });

});
