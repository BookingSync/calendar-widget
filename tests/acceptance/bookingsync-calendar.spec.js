/* global describe, module, it, before, after, document, xit, beforeEach, afterEach */
import chai from 'chai';

import { mCell, calendar } from '../../src/styles/calendar.scss';
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


const div1 = stubElement('div', {
  'data-bookingsync-calendar-widget': true,
  'data-rental-id': 833,
});

const div2 = stubElement('div', { 'data-bookingsync-calendar-widget': true });

document.body.appendChild(div1);
document.body.appendChild(div2);

describe('BookingSync Calendar renders on containers with auto-init', () => {
  after(() => {
    BookingSyncCalendar.instances.map(a => a.destroy());
  });

  it('renders 2 widgets on the page', () => {
    expect(document.querySelectorAll(`.${calendar}`).length).to.be.equal(2);
  });

  it('renders 4 (2 * 2) months', () => {
    expect(document.querySelectorAll(`.${mCell}`).length).to.be.equal(4);
  });
});
