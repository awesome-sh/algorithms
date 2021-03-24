import ArrayList from '../data-structure/array-list'
import Comparator from '../helpers/comparator'

class Heap<T> {
  private list: ArrayList<T>
  protected _compare: Comparator<T>

  constructor() {
    this.list = new ArrayList<T>()
    this._compare = new Comparator<T>()
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

    if (this._compare.greaterThan(this.parentOf(i), this.elementOf(i))) {
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
    //let index = this.lastIndex()

    while (
      this.parentOf(index) &&
      this._compare.greaterThan(this.parentOf(index), this.elementOf(index))
    ) {
      this.list.swap(this.parentIndexOf(index), index)

      // Move up
      index = this.parentIndexOf(index)
    }
  }

  private heapifyDown(index = 0): void {
    //const index = 0
    let childIndex = this.leftIndexOf(index)

    while (childIndex) {
      // Compare the values of the two childs
      if (this._compare.lessThan(this.rightOf(index), this.leftOf(index))) {
        childIndex = this.rightIndexOf(index)
      }

      // Compare the values of the smaller child with the current element
      if (
        this._compare.lessThan(
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
}

export class MinHeap<T> extends Heap<T> {
  constructor() {
    super()
    this._compare = new Comparator<T>((a: unknown, b: unknown) => +a - +b)
  }
}

export class MaxHeap<T> extends Heap<T> {
  constructor() {
    super()
    this._compare = new Comparator<T>((a: T, b: T) => +b - +a)
  }
}
