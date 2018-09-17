/* global describe, it, before, after, document */
import chai from 'chai';
import sinon from 'sinon';

import s from '../../src/styles/calendar.scss';
import Calendar from '../../src/calendar';

const { expect } = chai;
const { keys }      = Object;
const { stringify } = JSON;

let server;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map((i) => element.setAttribute(i, params[i]));
  return element;
};

const maps = {
  data: [
    {
      id: 833,
      type: 'maps',
      attributes: {
        minimum_stays: '5,3,1',
        nightly_rates: '10,20,30',
        availability: '1,1,1',
        start_date: '2017-02-10',
        currency: 'HKD'
      }
    }
  ]
};

describe('sense checks', () => {
  let widget, rootElement;

  before(() => {
    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    widget = new Calendar({
      el: rootElement,
      monthStart: 1,
      displayMonths: 1,
      yearStart: 2017
    });
  });

  after(() => {
    widget.destroy();
  });

  it('renders', () => {
    expect(widget.el).to.be.deep.equal(rootElement);
  });

  it('renders 3 (Su first) empty days in February 2017, 01/02/2017 is We', () => {
    expect(document.querySelectorAll('.js-body-row-0 td:empty').length).to.be.equal(3);
  });

  it('renders 1 month', () => {
    expect(document.querySelectorAll('.js-month').length).to.be.equal(1);
  });
});

describe('Loads maps and display correct currency, rates and min stay', () => {
  let widget, rootElement;

  before(() => {
    server                    = sinon.fakeServer.create();
    server.autoRespond        = true;
    server.respondImmediately = true;

    server.respondWith('GET', new RegExp('maps.json'), stringify(maps));

    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    widget = new Calendar({
      el: rootElement,
      monthStart: 1,
      displayMonths: 1,
      showRates: true,
      showMinStay: true,
      rentalId: 833,
      yearStart: 2017,
      lang: 'es'
    });
  });

  after(() => {
    widget.destroy();
    server.restore();
  });

  it('renders', () => {
    expect(widget.el).to.be.deep.equal(rootElement);
  });

  it('renders 2 (Mo first) empty days in February 2017, 01/02/2017 is We', () => {
    expect(document.querySelectorAll('.js-body-row-0 td:empty').length).to.be.equal(2);
  });

  it('10 of February has rates, currency and min stay', () => {
    const cell = document.querySelector('[data-value="10"]');

    expect(cell.querySelector(`.${s.cnt}`).innerText).to.be.equal('10');
    expect(cell.querySelector(`.${s.info}`).innerText).to.be.equal('10 HKD');
    expect(cell.querySelector(`.${s.infoExtra}`).innerText).to.be.equal('5+ Noches');
  });

  it('on 13 there is no information about rates..', () => {
    expect(document.querySelector('[data-value="13"]').innerText).to.be.equal('13');
  });
});
