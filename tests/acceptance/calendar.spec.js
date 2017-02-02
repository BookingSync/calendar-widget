/* global describe, module, it, before, after, document, xit */
import chai from 'chai';

import Calendar from '../../src/calendar';

chai.expect();

const expect   = chai.expect;
const { keys } = Object;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map(i => element.setAttribute(i, params[i]));
  return element;
};

describe('sense checks', () => {
  let widget;
  let rootElement;

  before(() => {
    rootElement = stubElement('div');
    document.body.appendChild(rootElement);

    widget      = new Calendar({
      el: rootElement,
      monthStart: 2,
      displayMonths: 1,
      yearStart: 2017,
    });
  });

  after(() => {
    widget.destroy();
  });

  it('renders', () => {
    expect(widget.el).to.be.deep.equal(rootElement);
  });

  it('renders 3 empty days in February 2017, 01/02/2017 is We', () => {
    expect(document.querySelectorAll('.js-body-row-0 td:empty').length).to.be.deep.equal(3);
  });
});
