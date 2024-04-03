/* global require, describe, it */
import { expect } from 'chai';

import { dateToIso } from '../../src/utils';

describe('utils', () => {
  let timezone_mock = require('timezone-mock');
  const year = 2019;

  describe('#dateToIso', () => {
    it('parses date correctly when timezone is GMT+0 and December', () => {
      timezone_mock.register('Europe/London');

      const month = 11;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });

    it('parses date correctly when timezone is GMT < 0 and December', () => {
      timezone_mock.register('US/Pacific');

      const month = 11;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });

    it('parses date correctly when GMT is local and December', () => {
      timezone_mock.unregister();

      const month = 11;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });

    it('parses date correctly when timezone is GMT+0 and June', () => {
      timezone_mock.register('Europe/London');

      const month = 5;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });

    it('parses date correctly when timezone is GMT < 0 and June', () => {
      timezone_mock.register('US/Pacific');

      const month = 5;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });

    it('parses date correctly when GMT is local and June', () => {
      timezone_mock.unregister();

      const month = 5;
      const day = 15;

      let parsedDate = dateToIso(year, month, day);

      expect(parsedDate.getDate()).to.be.equal(15);
    });
  });
});
