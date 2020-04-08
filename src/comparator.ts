class Comparator {
  compare: Function

  constructor (compareFunction?: any) {
    this.compare = compareFunction || this.defaultCompareFunction
  }

  defaultCompareFunction (a, b) {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  equal (a, b) {
    return this.compare(a, b) === 0
  }

  lessThan (a, b) {
    return this.compare(a, b) < 0
  }

  lessThanOrEqual (a, b) {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThan (a, b) {
    return this.compare(a, b) > 0
  }

  greaterThanOrEqual (a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}

export default Comparator
