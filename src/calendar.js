/* global VERSION */

export default class Calendar {
  constructor(opts) {
    this.name        = 'Calendar Widget';
    this.VERSION     = VERSION;
    this.element     = opts.element;
  }
}
