/* global describe, it, before, after, document */
import chai from 'chai';

import s from '../../src/styles/calendar.scss';
import Calendar from '../../src/calendar';

const { expect } = chai;
const { keys }      = Object;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map((i) => element.setAttribute(i, params[i]));
  return element;
};

const date = new Date();
date.setMonth(date.getMonth() + 1);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

describe('sense checks', () => {
  let calendar, rootElement;

  before(() => {
    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    calendar = new Calendar({
      el: rootElement,
      lang: 'en-GB',
      monthStart: 1,
      displayMonths: 1,
      yearStart: 2017
    });
  });

  after(() => {
    calendar.destroy();
  });

  it('renders', () => {
    expect(calendar.el).to.be.deep.equal(rootElement);
  });

  it('renders 3 (Su first) empty days in February 2017, 01/02/2017 is We', () => {
    expect(document.querySelectorAll('.js-body-row-0 td:empty').length).to.be.equal(3);
  });

  it('renders 1 month', () => {
    expect(document.querySelectorAll('.js-month').length).to.be.equal(1);
  });
});

describe('Loads maps and display correct currency, rates and min stay', () => {
  let calendar, rootElement;

  before((done) => {
    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    calendar = new Calendar({
      el: rootElement,
      displayMonths: 1,
      showRates: true,
      showMinStay: true,
      rentalId: 833,
      lang: 'es-ES'
    });

    calendar.on('maps-loaded', () => {
      done();
    });
  });

  after(() => {
    calendar.destroy();
  });

  it('renders', () => {
    expect(calendar.el).to.be.deep.equal(rootElement);
  });

  it('should have Today with rates, currency and min stay', () => {
    const cell = document.querySelector(`[data-value="${day}"]`);
    // eslint-disable-next-line no-irregular-whitespace
    expect(cell.querySelector(`.${s.cnt}`).innerText).to.be.equal(`${day}\n120 €\n2+ noches`);
  });
});

describe('highLightRange', () => {
  let calendar, rootElement;

  before((done) => {
    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    calendar = new Calendar({
      el: rootElement,
      displayMonths: 2,
      showRates: true,
      showMinStay: true,
      rentalId: 833,
      selectable: true
    });

    calendar.on('maps-loaded', () => {
      done();
    });
  });

  after(() => {
    calendar.destroy();
  });

  it('should highlight the range of dates between start and end', () => {
    calendar.highLightRange([year, month - 1, day + 5], [year, month - 1, day + 8]);

    const highlightedCells = document.querySelectorAll('[data-highlighted]');
    expect(highlightedCells.length).to.be.equal(4);
  });

  it('should show a tooltip when the range is invalid', () => {
    calendar.highLightRange([year, month - 1, day + 5], [year, month - 1, day + 9]);
    const tooltip = document.querySelector('.BookingSyncCalendarWidget__tooltip');
    expect(tooltip.innerText).to.be.equal('minimum stay: 5 nights');
  });

  it('should take the biggest minStay in the highlighted range', () => {
    calendar.highLightRange([year, month - 1, day + 6], [year, month - 1, day + 9]);
    const tooltip = document.querySelector('.BookingSyncCalendarWidget__tooltip');
    expect(tooltip.innerText).to.be.equal('minimum stay: 5 nights');
  });

  it('should remove any highlighted cells and reset the selection', () => {
    calendar.highLightRange([year, month - 1, day + 5], [year, month - 1, day + 8]);
    calendar.resetSelection();
    const highlightedCells = document.querySelectorAll('[data-highlighted]');
    expect(highlightedCells.length).to.be.equal(0);
    expect(calendar.selectionStart).to.be.equal(null);
    expect(calendar.selectionEnd).to.be.equal(null);
  });
});
