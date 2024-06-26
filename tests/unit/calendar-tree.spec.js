/* global describe, it, before, after */
import { expect } from 'chai';

import CalendarTree from '../../src/calendar-tree';

const treeA = {
  2016: {
    0: [1, 2, 3],
    1: [1, 2, 3],
    2: [1, 2, 3]
  }
};

const treeB = {
  2016: {
    3: [1, 2, 3]
  },
  2017: {
    0: [1, 2, 3],
    1: [1, 2, 3]
  }
};

describe('calendarTree', () => {
  let cTree;

  before(() => {
    const validate = (a) => a;
    cTree          = new CalendarTree(validate, treeA);
  });

  describe('#selectDaysInMonth', () => {
    it('selects days correctly', () => {
      const selection  = cTree.selectDaysInMonth(2016, 0, 1, 3);
      const selection2 = cTree.selectDaysInMonth(2016, 0, 1, 2);

      expect(selection).to.be.deep.equal([1, 2, 3]);
      expect(selection2).to.be.deep.equal([1, 2]);
    });

    it('selects nothing when no year or month found', () => {
      const selection  = cTree.selectDaysInMonth(2014, 0, 1, 3);
      const selection2 = cTree.selectDaysInMonth(2016, 5, 1, 3);

      expect(selection).to.be.deep.equal([]);
      expect(selection2).to.be.deep.equal([]);
    });
  });

  describe('#selectMonthInYear', () => {
    it('selects days correctly', () => {
      const selection = cTree.selectMonthsInYear(2016, 0, 1);
      expect(selection).to.be.deep.equal([1, 2, 3, 1, 2, 3]);
    });

    it('selects nothing when no month found', () => {
      const selection = cTree.selectMonthsInYear(2016, 3, 5);
      expect(selection).to.be.deep.equal([]);
    });
  });

  describe('#selectRange', () => {
    it('selects days correctly', () => {
      const sSameMonth   = cTree.selectRange([2016, 0, 1], [2016, 0, 3]);
      const sDiffMonths  = cTree.selectRange([2016, 0, 1], [2016, 2, 1]);
      const sDiffMonths2 = cTree.selectRange([2016, 0, 1], [2016, 1, 2]);

      expect(sSameMonth.range).to.be.deep.equal([1, 2, 3]);
      expect(sDiffMonths.range).to.be.deep.equal([1, 2, 3, 1, 2, 3, 1]);
      expect(sDiffMonths2.range).to.be.deep.equal([1, 2, 3, 1, 2]);
    });
  });

  describe('#add', () => {
    it('selectRange selects days correctly', () => {
      cTree.addTree(treeB);

      const sSameMonth   = cTree.selectRange([2016, 0, 1], [2016, 0, 3]);
      const sDiffMonths  = cTree.selectRange([2016, 0, 1], [2016, 2, 1]);
      const sDiffMonths2 = cTree.selectRange([2016, 0, 1], [2016, 1, 2]);
      const newRange     = cTree.selectRange([2016, 3, 3], [2017, 0, 3]);

      expect(sSameMonth.range).to.be.deep.equal([1, 2, 3]);
      expect(sDiffMonths.range).to.be.deep.equal([1, 2, 3, 1, 2, 3, 1]);
      expect(sDiffMonths2.range).to.be.deep.equal([1, 2, 3, 1, 2]);
      expect(newRange.range).to.be.deep.equal([3, 1, 2, 3]);
    });
  });

  describe('#availabilityMapToTree', () => {
    after(() => {
      cTree.removeMap();
    });

    it('correctly return object 1', () => {
      const maps   = {
        availability: '0110',
        nightly_rates: '0,0,0,0',
        minimum_stays: '1,1,1,1'
      };
      const mapObj = CalendarTree.mapsToTree(maps, '2016-12-01'); // 1 December 2016

      expect(mapObj).to.be.deep.equal({
        2016: {
          11: {
            1: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: true,
              isAvailableOut: true
            },
            2: {
              isAvailable: false,
              rate: 0,
              minStay: 1,
              isMorningBlocked: false,
              isAvailableOut: null
            },
            3: {
              isAvailable: false,
              rate: 0,
              minStay: 1,
              isMorningBlocked: null,
              isAvailableOut: null
            },
            4: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: true,
              isAvailableOut: true
            },
            5: {
              isAvailable: false,
              rate: undefined,
              minStay: undefined,
              isMorningBlocked: false,
              isAvailableOut: null
            }
          }
        }
      });
    });

    it('correctly return object 2', () => {
      const maps = {
        availability: '0000',
        nightly_rates: '0,0,0,0',
        minimum_stays: '1,1,1,1'
      };

      const mapObj = CalendarTree.mapsToTree(maps, '2016-12-01'); // 1 December 2016

      expect(mapObj).to.be.deep.equal({
        2016: {
          11: {
            1: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: true,
              isAvailableOut: true
            },
            2: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: null,
              isAvailableOut: null
            },
            3: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: null,
              isAvailableOut: null
            },
            4: {
              isAvailable: true,
              rate: 0,
              minStay: 1,
              isMorningBlocked: null,
              isAvailableOut: true
            },
            5: {
              isAvailable: false,
              rate: undefined,
              minStay: undefined,
              isMorningBlocked: false,
              isAvailableOut: null
            }
          }
        }
      });
    });
  });

  describe('#isDayDisabledOnMap #isDayDisabled', () => {
    after(() => {
      cTree.removeMap();
    });

    it('correctly return object 1', () => {
      const maps = {
        availability: '0110',
        nightly_rates: '0,0,0,0',
        minimum_stays: '1,1,1,1'
      };

      cTree.replaceMaps(maps, '2016-12-01'); // 1 December 2016

      expect(cTree.isDayDisabled(2016, 11, 1)).to.be.false;
      expect(cTree.isDayDisabled(2016, 11, 2)).to.be.true;
      expect(cTree.isDayDisabled(2016, 11, 3)).to.be.true;
      expect(cTree.isDayDisabled(2016, 11, 4)).to.be.false;
    });
  });
});
