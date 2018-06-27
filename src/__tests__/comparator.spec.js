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

      expect(comparator.lessThan(1, 1)).toBe(false);
      expect(comparator.lessThan(1, 2)).toBe(true);
      expect(comparator.lessThan(2, 1)).toBe(false);
    });

    it('compares if a value is less than or equal to the other', () => {
      const comparator = new Comparator();

      expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
      expect(comparator.lessThanOrEqual(1, 2)).toBe(true);
      expect(comparator.lessThanOrEqual(2, 1)).toBe(false);
    });

    it('compares if a value is greater than to the other', () => {
      const comparator = new Comparator();

      expect(comparator.greaterThan(1, 1)).toBe(false);
      expect(comparator.greaterThan(1, 2)).toBe(false);
      expect(comparator.greaterThan(2, 1)).toBe(true);
    });

    it('compares if a value is greater than or equal to the other', () => {
      const comparator = new Comparator();

      expect(comparator.greaterThanOrEqual(1, 1)).toBe(true);
      expect(comparator.greaterThanOrEqual(1, 2)).toBe(false);
      expect(comparator.greaterThanOrEqual(2, 1)).toBe(true);
    });
  });
});
