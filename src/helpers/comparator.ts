class Comparator {
  private _compare: (a: any, b: any) => any

  constructor(compareFunction?: (a: any, b: any) => number) {
    this._compare = compareFunction || this.defaultCompareFunction
  }

  defaultCompareFunction(a: unknown, b: unknown): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  equal(a: unknown, b: unknown): boolean {
    return this._compare(a, b) === 0
  }

  lessThan(a: unknown, b: unknown): boolean {
    return this._compare(a, b) < 0
  }

  lessThanOrEqual(a: unknown, b: unknown): boolean {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThan(a: unknown, b: unknown): boolean {
    return this._compare(a, b) > 0
  }

  greaterThanOrEqual(a: unknown, b: unknown): boolean {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}

export default Comparator
