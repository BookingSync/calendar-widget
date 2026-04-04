/* global document, window */

const ARROW_SIZE = 8;

const getGlobalObject = () => ((typeof window !== 'undefined') ? window : null);

const getPopperRuntime = () => {
  const globalObject = getGlobalObject();

  if (
    globalObject
    && globalObject.Popper
    && typeof globalObject.Popper.createPopper === 'function'
  ) {
    return globalObject.Popper;
  }

  return null;
};

const getFloatingRuntime = () => {
  const globalObject = getGlobalObject();
  const runtime = globalObject
    && (globalObject.FloatingUIDOM || globalObject.FloatingUI || globalObject.floatingUI);

  if (runtime && typeof runtime.computePosition === 'function') {
    return runtime;
  }

  return null;
};

const getArrowElement = (floatingEl) => floatingEl.querySelector('[data-popper-arrow]');

const splitPlacement = (placement = 'bottom') => {
  const [basePlacement, alignment] = placement.split('-');

  return {
    basePlacement: basePlacement || 'bottom',
    alignment: alignment || null
  };
};

const setBooleanAttribute = (element, name, value) => {
  if (!element) {
    return;
  }

  if (value) {
    element.setAttribute(name, '');
  } else {
    element.removeAttribute(name);
  }
};

const applyPosition = (floatingEl, x, y, placement, strategy = 'absolute') => {
  floatingEl.style.position = strategy;
  floatingEl.style.left = `${x}px`;
  floatingEl.style.top = `${y}px`;
  floatingEl.setAttribute('data-popper-placement', placement);
};

const applyArrowPosition = (arrowEl, x, y) => {
  if (!arrowEl) {
    return;
  }

  arrowEl.style.left = '';
  arrowEl.style.top = '';

  if (typeof x === 'number') {
    arrowEl.style.left = `${x}px`;
  }

  if (typeof y === 'number') {
    arrowEl.style.top = `${y}px`;
  }
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const alignHorizontally = (referenceRect, floatingRect, alignment) => {
  if (alignment === 'start') {
    return referenceRect.left;
  }

  if (alignment === 'end') {
    return referenceRect.right - floatingRect.width;
  }

  return referenceRect.left + ((referenceRect.width - floatingRect.width) / 2);
};

const alignVertically = (referenceRect, floatingRect, alignment) => {
  if (alignment === 'start') {
    return referenceRect.top;
  }

  if (alignment === 'end') {
    return referenceRect.bottom - floatingRect.height;
  }

  return referenceRect.top + ((referenceRect.height - floatingRect.height) / 2);
};

const getViewportCoordinates = (referenceRect, floatingRect, placement, offset = [0, 0]) => {
  const { basePlacement, alignment } = splitPlacement(placement);
  const [crossAxisOffset = 0, mainAxisOffset = 0] = offset;

  if (basePlacement === 'top') {
    return {
      x: alignHorizontally(referenceRect, floatingRect, alignment) + crossAxisOffset,
      y: referenceRect.top - floatingRect.height - mainAxisOffset
    };
  }

  if (basePlacement === 'bottom') {
    return {
      x: alignHorizontally(referenceRect, floatingRect, alignment) + crossAxisOffset,
      y: referenceRect.bottom + mainAxisOffset
    };
  }

  if (basePlacement === 'left') {
    return {
      x: referenceRect.left - floatingRect.width - mainAxisOffset,
      y: alignVertically(referenceRect, floatingRect, alignment) + crossAxisOffset
    };
  }

  return {
    x: referenceRect.right + mainAxisOffset,
    y: alignVertically(referenceRect, floatingRect, alignment) + crossAxisOffset
  };
};

const normalizeCoordinatesForOffsetParent = (floatingEl, viewportX, viewportY) => {
  const ownerDocument = floatingEl.ownerDocument || document;
  const globalObject = ownerDocument.defaultView || getGlobalObject();
  const { offsetParent } = floatingEl;

  if (
    !offsetParent
    || offsetParent === ownerDocument.body
    || offsetParent === ownerDocument.documentElement
  ) {
    return {
      x: viewportX + (globalObject ? globalObject.pageXOffset : 0),
      y: viewportY + (globalObject ? globalObject.pageYOffset : 0)
    };
  }

  const parentRect = offsetParent.getBoundingClientRect();

  return {
    x: viewportX - parentRect.left - offsetParent.clientLeft + offsetParent.scrollLeft,
    y: viewportY - parentRect.top - offsetParent.clientTop + offsetParent.scrollTop
  };
};

const positionManualArrow = (referenceRect, floatingRect, viewportX, viewportY, placement, arrowEl) => {
  if (!arrowEl) {
    return;
  }

  const { basePlacement } = splitPlacement(placement);
  const halfArrow = ARROW_SIZE / 2;

  if (basePlacement === 'top' || basePlacement === 'bottom') {
    const maxArrowX = Math.max(floatingRect.width - ARROW_SIZE, 0);
    const arrowX = clamp(
      referenceRect.left + (referenceRect.width / 2) - viewportX - halfArrow,
      0,
      maxArrowX
    );

    applyArrowPosition(arrowEl, arrowX, null);
    return;
  }

  const maxArrowY = Math.max(floatingRect.height - ARROW_SIZE, 0);
  const arrowY = clamp(
    referenceRect.top + (referenceRect.height / 2) - viewportY - halfArrow,
    0,
    maxArrowY
  );

  applyArrowPosition(arrowEl, null, arrowY);
};

const attachFallbackAutoUpdate = (update) => {
  const globalObject = getGlobalObject();

  if (!globalObject || typeof globalObject.addEventListener !== 'function') {
    return () => {};
  }

  globalObject.addEventListener('resize', update);
  globalObject.addEventListener('scroll', update, true);

  return () => {
    globalObject.removeEventListener('resize', update);
    globalObject.removeEventListener('scroll', update, true);
  };
};

const createPopperPositioner = (popperRuntime, referenceEl, floatingEl, options) => {
  const modifiers = [];

  if (options.flip === false) {
    modifiers.push({
      name: 'flip',
      enabled: false
    });
  }

  if (Array.isArray(options.offset)) {
    modifiers.push({
      name: 'offset',
      options: {
        offset: options.offset
      }
    });
  }

  if (options.hide) {
    modifiers.push({
      name: 'hide',
      enabled: true
    });
  }

  return popperRuntime.createPopper(referenceEl, floatingEl, {
    placement: options.placement,
    strategy: options.strategy || 'absolute',
    modifiers
  });
};

const createFloatingPositioner = (floatingRuntime, referenceEl, floatingEl, options) => {
  const arrowEl = getArrowElement(floatingEl);
  const middleware = [];

  if (Array.isArray(options.offset) && typeof floatingRuntime.offset === 'function') {
    const [crossAxis = 0, mainAxis = 0] = options.offset;

    middleware.push(floatingRuntime.offset({
      mainAxis,
      crossAxis
    }));
  }

  if (options.flip !== false && typeof floatingRuntime.flip === 'function') {
    middleware.push(floatingRuntime.flip());
  }

  if (options.shift !== false && typeof floatingRuntime.shift === 'function') {
    middleware.push(floatingRuntime.shift());
  }

  if (options.hide && typeof floatingRuntime.hide === 'function') {
    middleware.push(floatingRuntime.hide());
  }

  if (arrowEl && typeof floatingRuntime.arrow === 'function') {
    middleware.push(floatingRuntime.arrow({ element: arrowEl }));
  }

  const update = () => {
    floatingEl.style.position = options.strategy || 'absolute';

    return floatingRuntime.computePosition(referenceEl, floatingEl, {
      placement: options.placement,
      strategy: options.strategy || 'absolute',
      middleware
    }).then(({ x, y, placement, middlewareData = {} }) => {
      applyPosition(floatingEl, x, y, placement, options.strategy || 'absolute');
      applyArrowPosition(arrowEl, middlewareData.arrow && middlewareData.arrow.x, middlewareData.arrow && middlewareData.arrow.y);
      setBooleanAttribute(
        floatingEl,
        'data-popper-reference-hidden',
        middlewareData.hide && middlewareData.hide.referenceHidden
      );
      setBooleanAttribute(
        floatingEl,
        'data-popper-escaped',
        middlewareData.hide && middlewareData.hide.escaped
      );
    });
  };

  const cleanup = (typeof floatingRuntime.autoUpdate === 'function')
    ? floatingRuntime.autoUpdate(referenceEl, floatingEl, update)
    : attachFallbackAutoUpdate(update);

  if (!options.deferUpdate) {
    update();
  }

  return {
    update,
    destroy() {
      cleanup();
    }
  };
};

const createManualPositioner = (referenceEl, floatingEl, options) => {
  const arrowEl = getArrowElement(floatingEl);

  const update = () => {
    floatingEl.style.position = options.strategy || 'absolute';

    const referenceRect = referenceEl.getBoundingClientRect();
    const floatingRect = floatingEl.getBoundingClientRect();
    const viewportCoordinates = getViewportCoordinates(
      referenceRect,
      floatingRect,
      options.placement,
      options.offset
    );
    const normalizedCoordinates = normalizeCoordinatesForOffsetParent(
      floatingEl,
      viewportCoordinates.x,
      viewportCoordinates.y
    );

    applyPosition(
      floatingEl,
      normalizedCoordinates.x,
      normalizedCoordinates.y,
      options.placement,
      options.strategy || 'absolute'
    );
    positionManualArrow(
      referenceRect,
      floatingRect,
      viewportCoordinates.x,
      viewportCoordinates.y,
      options.placement,
      arrowEl
    );
  };

  const cleanup = attachFallbackAutoUpdate(update);

  if (!options.deferUpdate) {
    update();
  }

  return {
    update,
    destroy() {
      cleanup();
    }
  };
};

export default function createPositioner(referenceEl, floatingEl, options = {}) {
  const normalizedOptions = {
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    offset: options.offset || [0, 0],
    flip: options.flip !== false,
    shift: options.shift !== false,
    hide: options.hide === true,
    deferUpdate: options.deferUpdate === true
  };
  const popperRuntime = getPopperRuntime();

  if (popperRuntime) {
    return createPopperPositioner(popperRuntime, referenceEl, floatingEl, normalizedOptions);
  }

  const floatingRuntime = getFloatingRuntime();

  if (floatingRuntime) {
    return createFloatingPositioner(floatingRuntime, referenceEl, floatingEl, normalizedOptions);
  }

  return createManualPositioner(referenceEl, floatingEl, normalizedOptions);
}
