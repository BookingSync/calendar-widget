/* global describe, module, it, before, after, document, xit */
import chai from 'chai';

import CalendarTree from '../../src/calendarTree';

chai.expect();

const expect = chai.expect;

const treeA = {
  2016: {
    0: [1, 2, 3],
    1: [1, 2, 3],
    2: [1, 2, 3],
  },
};

const treeB = {
  2016: {
    3: [1, 2, 3],
  },
  2017: {
    0: [1, 2, 3],
    1: [1, 2, 3],
  },
};


describe('calendarTree', () => {
  let cTree;

  before(() => {
    cTree = new CalendarTree(treeA);
  });

  describe('#selectDaysInMonth', () => {
    it('selects days correctly', () => {
      const selection = cTree.selectDaysInMonth(2016, 0, 1, 3);
      const selection2 = cTree.selectDaysInMonth(2016, 0, 1, 2);

      expect(selection).to.be.deep.equal([1, 2, 3]);
      expect(selection2).to.be.deep.equal([1, 2]);
    });

    it('selects nothing when no year or month found', () => {
      const selection = cTree.selectDaysInMonth(2014, 0, 1, 3);
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
      const sSameMonth = cTree.selectRange([2016, 0, 1], [2016, 0, 3]);
      const sDiffMonths = cTree.selectRange([2016, 0, 1], [2016, 2, 1]);
      const sDiffMonths2 = cTree.selectRange([2016, 0, 1], [2016, 1, 2]);


      expect(sSameMonth).to.be.deep.equal([1, 2, 3]);
      expect(sDiffMonths).to.be.deep.equal([1, 2, 3, 1, 2, 3, 1]);
      expect(sDiffMonths2).to.be.deep.equal([1, 2, 3, 1, 2]);
    });
  });

  describe('#add', () => {
    it('selectRange selects days correctly', () => {
      cTree.add(treeB);

      const sSameMonth = cTree.selectRange([2016, 0, 1], [2016, 0, 3]);
      const sDiffMonths = cTree.selectRange([2016, 0, 1], [2016, 2, 1]);
      const sDiffMonths2 = cTree.selectRange([2016, 0, 1], [2016, 1, 2]);

      const newRange = cTree.selectRange([2016, 3, 3], [2017, 0, 3]);


      expect(sSameMonth).to.be.deep.equal([1, 2, 3]);
      expect(sDiffMonths).to.be.deep.equal([1, 2, 3, 1, 2, 3, 1]);
      expect(sDiffMonths2).to.be.deep.equal([1, 2, 3, 1, 2]);
      expect(newRange).to.be.deep.equal([3, 1, 2, 3]);
    });
  });
});
