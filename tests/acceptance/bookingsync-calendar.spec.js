/* global describe, it, before, after, document, window */
import { expect } from 'chai';
import utils from 'widget-utils';

import styles from '../../src/styles/calendar.scss';
import SmilyCalendar from '../../src/index';

const { keys } = Object;

const stubElement = (name, attrs) => {
  const params  = attrs || {};
  const element = document.createElement(name);
  keys(params).map((i) => element.setAttribute(i, params[i]));
  return element;
};

const div1 = stubElement('div', { 'data-smily-calendar-widget': true });
const div2 = stubElement('div', { 'data-smily-calendar-widget': true });

describe('Smily Calendar renders on containers with auto-init', () => {
  before(() => {
    document.body.appendChild(div1);
    document.body.appendChild(div2);
  });

  after(() => {
    SmilyCalendar.instances.map((a) => a.destroy());
    utils.destroyElement(div1);
    utils.destroyElement(div2);
  });

  it('renders 2 widgets on the page', () => {
    document.addEventListener('DOMContentLoaded', () => {
      expect(document.querySelectorAll(`.${styles.calendar}`).length).to.be.equal(2);
    });
  });

  it('renders 4 (2 * 2) months', () => {
    document.addEventListener('DOMContentLoaded', () => {
      expect(document.querySelectorAll(`.${styles.mCell}`).length).to.be.equal(4);
    });
  });

  it('exposes widget-utils', () => {
    expect(window.SmilyWidgetUtils).to.exist;
  });
});
