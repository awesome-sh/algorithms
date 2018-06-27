const Comparator = require('../comparator');

describe('Comparator', () => {
  describe('default', () => {
    it('compares if a value is equal to the other', () => {
      const comparator = new Comparator();

      expect(comparator.equal(1, 2)).toBe(false);
      expect(comparator.equal(2, 2)).toBe(true);
    });

    it('compares if a value is less than the other', () => {
      const comparator = new Comparator();

      expect(comparator.lessThen(1, 1)).toBe(false);
      expect(comparator.lessThen(1, 2)).toBe(true);
      expect(comparator.lessThen(2, 1)).toBe(false);
    });

    it('compares if a value is less than or equal to the other', () => {
      const comparator = new Comparator();

      expect(comparator.lessThenOrEqual(1, 1)).toBe(true);
      expect(comparator.lessThenOrEqual(1, 2)).toBe(true);
      expect(comparator.lessThenOrEqual(2, 1)).toBe(false);
    });

    it('compares if a value is greater than to the other', () => {
      const comparator = new Comparator();

      expect(comparator.greaterThen(1, 1)).toBe(false);
      expect(comparator.greaterThen(1, 2)).toBe(false);
      expect(comparator.greaterThen(2, 1)).toBe(true);
    });

    it('compares if a value is greater than or equal to the other', () => {
      const comparator = new Comparator();

      expect(comparator.greaterThenOrEqual(1, 1)).toBe(true);
      expect(comparator.greaterThenOrEqual(1, 2)).toBe(false);
      expect(comparator.greaterThenOrEqual(2, 1)).toBe(true);
    });
  });
});
