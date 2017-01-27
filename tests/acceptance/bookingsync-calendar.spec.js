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

describe.only('BookingSync Calendar renders on containers', () => {
  let widget;
  let rootElement;

  before(() => {
    const element = stubElement('div', { 'data-bookingsync-calendar-widget': true });
    document.body.appendChild(element);
  });

  it('renders', () => {
    BookingSyncCalendar.init();
    // expect(widget.el).to.be.deep.equal(rootElement);
  });
});
