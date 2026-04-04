/* global describe, it, beforeEach, afterEach, document, window */
import { expect } from 'chai';

import createPositioner from '../../src/positioning';

const createStubElement = (rect, tagName = 'div') => {
  const element = document.createElement(tagName);
  const normalizedRect = {
    width: rect.width || 0,
    height: rect.height || 0,
    left: rect.left || 0,
    top: rect.top || 0
  };

  normalizedRect.right = normalizedRect.left + normalizedRect.width;
  normalizedRect.bottom = normalizedRect.top + normalizedRect.height;
  normalizedRect.x = normalizedRect.left;
  normalizedRect.y = normalizedRect.top;

  element.getBoundingClientRect = () => normalizedRect;
  document.body.appendChild(element);

  return element;
};

describe('positioning adapter', () => {
  let originalPopper;
  let originalFloatingUIDOM;
  let originalFloatingUI;

  beforeEach(() => {
    originalPopper = window.Popper;
    originalFloatingUIDOM = window.FloatingUIDOM;
    originalFloatingUI = window.FloatingUI;
    window.Popper = undefined;
    window.FloatingUIDOM = undefined;
    window.FloatingUI = undefined;
    document.body.innerHTML = '';
  });

  afterEach(() => {
    window.Popper = originalPopper;
    window.FloatingUIDOM = originalFloatingUIDOM;
    window.FloatingUI = originalFloatingUI;
    document.body.innerHTML = '';
  });

  it('uses runtime Popper when available', () => {
    const referenceEl = createStubElement({
      left: 20,
      top: 40,
      width: 60,
      height: 20
    });
    const floatingEl = createStubElement({
      width: 40,
      height: 20
    });
    const popperInstance = {
      update() {},
      destroy() {}
    };
    let capturedArgs = null;

    window.Popper = {
      createPopper(...args) {
        capturedArgs = args;
        return popperInstance;
      }
    };

    const positioner = createPositioner(referenceEl, floatingEl, {
      placement: 'bottom-start',
      hide: true
    });

    expect(positioner).to.equal(popperInstance);
    expect(capturedArgs[0]).to.equal(referenceEl);
    expect(capturedArgs[1]).to.equal(floatingEl);
    expect(capturedArgs[2].placement).to.equal('bottom-start');
    expect(capturedArgs[2].modifiers.map((modifier) => modifier.name)).to.include('hide');
  });

  it('uses runtime Floating UI when Popper is absent', (done) => {
    const referenceEl = createStubElement({
      left: 15,
      top: 30,
      width: 50,
      height: 18
    });
    const floatingEl = createStubElement({
      width: 45,
      height: 24
    });
    const arrowEl = document.createElement('div');
    let cleanupCalled = false;
    let computeOptions = null;

    arrowEl.setAttribute('data-popper-arrow', 'true');
    floatingEl.appendChild(arrowEl);

    window.FloatingUIDOM = {
      computePosition(reference, floating, options) {
        computeOptions = {
          reference,
          floating,
          options
        };

        return Promise.resolve({
          x: 12,
          y: 34,
          placement: 'top',
          middlewareData: {
            arrow: {
              x: 6
            },
            hide: {
              referenceHidden: true,
              escaped: false
            }
          }
        });
      },
      autoUpdate(reference, floating, update) {
        expect(reference).to.equal(referenceEl);
        expect(floating).to.equal(floatingEl);
        expect(update).to.be.a('function');

        return () => {
          cleanupCalled = true;
        };
      },
      offset(options) {
        return {
          name: 'offset',
          options
        };
      },
      flip() {
        return { name: 'flip' };
      },
      shift() {
        return { name: 'shift' };
      },
      hide() {
        return { name: 'hide' };
      },
      arrow(options) {
        return {
          name: 'arrow',
          options
        };
      }
    };

    const positioner = createPositioner(referenceEl, floatingEl, {
      placement: 'top',
      hide: true
    });

    setTimeout(() => {
      expect(computeOptions.reference).to.equal(referenceEl);
      expect(computeOptions.floating).to.equal(floatingEl);
      expect(computeOptions.options.placement).to.equal('top');
      expect(computeOptions.options.middleware.map((middleware) => middleware.name)).to.deep.equal([
        'offset',
        'flip',
        'shift',
        'hide',
        'arrow'
      ]);
      expect(floatingEl.style.left).to.equal('12px');
      expect(floatingEl.style.top).to.equal('34px');
      expect(floatingEl.getAttribute('data-popper-placement')).to.equal('top');
      expect(floatingEl.hasAttribute('data-popper-reference-hidden')).to.equal(true);
      expect(floatingEl.hasAttribute('data-popper-escaped')).to.equal(false);
      expect(arrowEl.style.left).to.equal('6px');

      positioner.destroy();
      expect(cleanupCalled).to.equal(true);
      done();
    }, 0);
  });

  it('falls back to an internal positioner when no runtime library is available', () => {
    const referenceEl = createStubElement({
      left: 20,
      top: 40,
      width: 60,
      height: 20
    });
    const floatingEl = createStubElement({
      width: 40,
      height: 12
    });
    const arrowEl = document.createElement('div');

    arrowEl.setAttribute('data-popper-arrow', 'true');
    floatingEl.appendChild(arrowEl);

    const positioner = createPositioner(referenceEl, floatingEl, {
      placement: 'bottom-start'
    });

    positioner.update();

    expect(floatingEl.style.position).to.equal('absolute');
    expect(floatingEl.style.left).to.equal('20px');
    expect(floatingEl.style.top).to.equal('60px');
    expect(floatingEl.getAttribute('data-popper-placement')).to.equal('bottom-start');
    expect(arrowEl.style.left).to.equal('26px');

    positioner.destroy();
  });
});
