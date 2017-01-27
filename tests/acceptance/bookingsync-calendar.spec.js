/* global describe, module, it, before, after, document, xit */
import chai from 'chai';

import BookingSyncCalendar from '../../src/bookingsync-calendar-widget';

chai.expect();

const expect   = chai.expect;
const { keys } = Object;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map(i => element.setAttribute(i, params[i]));
  return element;
};

describe('BookingSync Calendar renders on containers', () => {
  let rootElement;

  before(() => {
    rootElement = stubElement('div', { 'data-bookingsync-calendar-widget': true });
    document.body.appendChild(rootElement);
    BookingSyncCalendar.init();
  });

  it('renders', () => {
    debugger;
    expect(BookingSyncCalendar.instances[0].el).to.be.deep.equal(rootElement);
  });
});
