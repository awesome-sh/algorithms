import ArrayList from '../data-structure/array-list'

class Heap<T> {
  private list: ArrayList<T>
  protected _compare: (a: T, b: T) => number

  constructor(values?: T[] | null, comparator?: (a: T, b: T) => number) {
    this.list = new ArrayList<T>()
    this._compare = comparator || this.defaultFn

    values = values || []
    for (let i = 0; i < values.length; i++) {
      this.add(values[i])
    }
  }

  add(item: T): void {
    this.list.append(item)
    this.heapifyUp()
  }

  update(item: T): void {
    const index = this.list.findIndex(listItem => listItem === item)
    this.heapifyUp(index)
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

  private heapifyDown(parentIndex = 0): void {
    let childIndex

    while (typeof this.list.get(parentIndex) !== 'undefined') {
      // STEP 1: CHOOSE SMALLER CHILD
      const rightChild = this.rightElementOf(parentIndex)
      const leftChild = this.leftElementOf(parentIndex)

      // If there are no children, finish execution
      if (!rightChild && !leftChild) {
        break
      }

      // If only right child is present, choose it
      if (rightChild && !leftChild) {
        childIndex = this.rightIndexOf(parentIndex)
      }
      
      // If only left child is present, choose it
      else if (!rightChild && leftChild) {
        childIndex = this.leftIndexOf(parentIndex)
      }

      // If both are preseent, choose the smaller to be compared later on against its parent
      else if (this.isLessThanOrEqual(rightChild, leftChild)) {
        childIndex = this.rightIndexOf(parentIndex)
      } else {
        childIndex = this.leftIndexOf(parentIndex)
      }

      // STEP 2: DECIDE SWAP WITH PARENT
      // Compare the values of the smaller child against its parent
      if (
        this.isLessThanOrEqual(
          this.elementOf(childIndex),
          this.elementOf(parentIndex)
        )
      ) {
        this.list.swap(childIndex, parentIndex)
        // Move down
        parentIndex = childIndex
      } else {
        // There's no more swap to do.
        break
      }
    }
  }

  private elementOf(index: number): T {
    return this.list.get(index)
  }

  private parentOf(index: number): T {
    return this.elementOf(this.parentIndexOf(index))
  }

  private leftElementOf(index: number): T {
    return this.elementOf(this.leftIndexOf(index))
  }

  private rightElementOf(index: number): T {
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

  protected defaultFn(a: T, b: T): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }
}

export default Heap
