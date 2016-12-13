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
    widget      = new Calendar({ el: rootElement });
  });

  it('renders', () => {
    expect(widget.el).to.be.deep.equal(rootElement);
  });
});
