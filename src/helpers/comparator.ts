class Comparator<T> {
  private _compare: (a: T, b: T) => number

  constructor(compareFunction?: (a: T, b: T) => number) {
    this._compare = compareFunction || this.defaultCompareFunction
  }

  defaultCompareFunction(a: T, b: T): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  equal(a: T, b: T): boolean {
    return this._compare(a, b) === 0
  }

  lessThan(a: T, b: T): boolean {
    return this._compare(a, b) < 0
  }

  lessThanOrEqual(a: T, b: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThan(a: T, b: T): boolean {
    return this._compare(a, b) > 0
  }

  greaterThanOrEqual(a: T, b: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}

export default Comparator
