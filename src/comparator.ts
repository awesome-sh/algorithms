class Comparator {
  private _compare: Function

  constructor (compareFunction?: (a: any, b: any) => number) {
    this._compare = compareFunction || this.defaultCompareFunction
  }

  defaultCompareFunction (a: any, b: any): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  equal (a: any, b: any): boolean {
    return this._compare(a, b) === 0
  }

  lessThan (a: any, b: any): boolean {
    return this._compare(a, b) < 0
  }

  lessThanOrEqual (a: any, b: any): boolean {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThan (a: any, b: any): boolean {
    return this._compare(a, b) > 0
  }

  greaterThanOrEqual (a: any, b: any): boolean {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}

export default Comparator
