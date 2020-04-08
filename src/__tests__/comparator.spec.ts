import Comparator from '../comparator'

describe('Comparator', () => {
  describe('default', () => {
    let comparator

    beforeEach(() => {
      comparator = new Comparator()
    })

    it('compares if a value is equal to the other', () => {
      expect(comparator.equal(1, 2)).toBe(false)
      expect(comparator.equal(2, 2)).toBe(true)
    })

    it('compares if a value is less than the other', () => {
      expect(comparator.lessThan(1, 1)).toBe(false)
      expect(comparator.lessThan(1, 2)).toBe(true)
      expect(comparator.lessThan(2, 1)).toBe(false)
    })

    it('compares if a value is less than or equal to the other', () => {
      expect(comparator.lessThanOrEqual(1, 1)).toBe(true)
      expect(comparator.lessThanOrEqual(1, 2)).toBe(true)
      expect(comparator.lessThanOrEqual(2, 1)).toBe(false)
    })

    it('compares if a value is greater than to the other', () => {
      expect(comparator.greaterThan(1, 1)).toBe(false)
      expect(comparator.greaterThan(1, 2)).toBe(false)
      expect(comparator.greaterThan(2, 1)).toBe(true)
    })

    it('compares if a value is greater than or equal to the other', () => {
      expect(comparator.greaterThanOrEqual(1, 1)).toBe(true)
      expect(comparator.greaterThanOrEqual(1, 2)).toBe(false)
      expect(comparator.greaterThanOrEqual(2, 1)).toBe(true)
    })
  })

  describe('custom', () => {
    let john
    let marie
    let comparator

    beforeEach(() => {
      john = { name: 'john' }
      marie = { name: 'marie' }
      comparator = new Comparator((a, b) => {
        if (a.name === b.name) {
          return 0
        }

        return a.name < b.name ? -1 : 1
      })
    })

    it('compares if a value is equal to the other', () => {
      expect(comparator.equal(john, marie)).toBe(false)
      expect(comparator.equal(marie, marie)).toBe(true)
    })

    it('compares if a value is less than the other', () => {
      expect(comparator.lessThan(john, john)).toBe(false)
      expect(comparator.lessThan(john, marie)).toBe(true)
      expect(comparator.lessThan(marie, john)).toBe(false)
    })

    it('compares if a value is less than or equal to the other', () => {
      expect(comparator.lessThanOrEqual(john, john)).toBe(true)
      expect(comparator.lessThanOrEqual(john, marie)).toBe(true)
      expect(comparator.lessThanOrEqual(marie, john)).toBe(false)
    })

    it('compares if a value is greater than to the other', () => {
      expect(comparator.greaterThan(john, john)).toBe(false)
      expect(comparator.greaterThan(john, marie)).toBe(false)
      expect(comparator.greaterThan(marie, john)).toBe(true)
    })

    it('compares if a value is greater than or equal to the other', () => {
      expect(comparator.greaterThanOrEqual(john, john)).toBe(true)
      expect(comparator.greaterThanOrEqual(john, marie)).toBe(false)
      expect(comparator.greaterThanOrEqual(marie, john)).toBe(true)
    })
  })
})
