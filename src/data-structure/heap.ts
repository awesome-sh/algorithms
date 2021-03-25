import ArrayList from '../data-structure/array-list'

class Heap<T> {
  private list: ArrayList<T>
  protected _compare: (a: T, b: T) => number

  constructor(comparator: (a: T, b: T) => number) {
    this.list = new ArrayList<T>()
    this._compare = comparator || this.defaultFn
  }

  add(item: T): void {
    this.list.append(item)
    this.heapifyUp()
  }

  // Inspiration: https://bit.ly/369fprr
  remove(item: T): void {
    let i

    for (i = 0; i < this.list.size(); i++) {
      if (this.list.get(i) === item) {
        break
      }
    }

    this.list.set(i, this.list.pop())

    if (this.isGreaterThanOrEqual(this.parentOf(i), this.elementOf(i))) {
      this.heapifyUp(i)
    } else {
      this.heapifyDown(i)
    }
  }

  peek(): T {
    return this.elementOf(0)
  }

  size(): number {
    return this.list.length()
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  poll(): T {
    const item = this.peek()
    this.list.set(0, this.list.pop())
    this.heapifyDown()
    return item
  }

  toString(): string {
    return this.list.toString()
  }

  toArray(): T[] {
    return this.list.toArray()
  }

  private heapifyUp(index: number = this.lastIndex()): void {
    while (
      this.parentOf(index) &&
      this.isGreaterThanOrEqual(this.parentOf(index), this.elementOf(index))
    ) {
      this.list.swap(this.parentIndexOf(index), index)

      // Move up
      index = this.parentIndexOf(index)
    }
  }

  private heapifyDown(index = 0): void {
    let childIndex = this.leftIndexOf(index)

    while (typeof this.list.get(childIndex) !== 'undefined') {
      // Compare the values of the two childs
      if (this.isLessThanOrEqual(this.rightOf(index), this.leftOf(index))) {
        childIndex = this.rightIndexOf(index)
      }

      // Compare the values of the smaller child with the current element
      if (
        this.isLessThanOrEqual(
          this.elementOf(childIndex),
          this.elementOf(index)
        )
      ) {
        this.list.swap(childIndex, index)
      } else {
        // There's no more swap to do.
        break
      }

      // Move down
      childIndex = this.leftIndexOf(index)
    }
  }

  private elementOf(index: number): T {
    return this.list.get(index)
  }

  private parentOf(index: number): T {
    return this.elementOf(this.parentIndexOf(index))
  }

  private leftOf(index: number): T {
    return this.elementOf(this.leftIndexOf(index))
  }

  private rightOf(index: number): T {
    return this.elementOf(this.rightIndexOf(index))
  }

  private parentIndexOf(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private lastIndex(): number {
    return this.list.length() - 1
  }

  private leftIndexOf(index: number): number {
    return 2 * index + 1
  }

  private rightIndexOf(index: number): number {
    return 2 * index + 2
  }

  private isGreaterThanOrEqual(a: T, b: T): boolean {
    return this._compare(a, b) >= 0
  }

  private isLessThanOrEqual(a: T, b: T): boolean {
    return this._compare(a, b) <= 0
  }

  private defaultFn(a: T, b: T): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }
}

export default Heap
