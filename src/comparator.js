class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || this.defaultCompareFunction;
  }

  defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  lessThen(a, b) {
    return this.compare(a, b) < 0;
  }

  lessThenOrEqual(a, b) {
    return this.lessThen(a, b) || this.equal(a, b);
  }

  greaterThen(a, b) {
    return this.compare(a, b) > 0;
  }

  greaterThenOrEqual(a, b) {
    return this.greaterThen(a, b) || this.equal(a, b);
  }
}

module.exports = Comparator;
