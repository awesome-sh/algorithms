import Comparator from '../helpers/comparator'
import { swap } from '../helpers/array'

class Heap {
  private _container: any[]
  protected _compare: Comparator

  constructor() {
    this._container = []
    this._compare = new Comparator()
  }

  add(item: any): void {
    this._container.push(item)
    this.heapifyUp()
  }

  elementOf(index: number): any {
    return this._container[index]
  }

  parentOf(index: number): any {
    return this.elementOf(this.parentIndexOf(index))
  }

  leftOf(index: number): any {
    return this.elementOf(this.leftIndexOf(index))
  }

  rightOf(index: number): any {
    return this.elementOf(this.rightIndexOf(index))
  }

  parentIndexOf(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  lastIndex(): number {
    return this._container.length - 1
  }

  leftIndexOf(index: number): number {
    return 2 * index + 1
  }

  rightIndexOf(index: number): number {
    return 2 * index + 2
  }

  peek(): any {
    return this.elementOf(0)
  }

  last(): any {
    return this.elementOf(this.lastIndex())
  }

  size(): number {
    return this._container.length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  poll(): any {
    const item = this.peek()
    this._container[0] = this._container.pop()
    this.heapifyDown()
    return item
  }

  heapifyUp(): void {
    let index = this.lastIndex()

    while (
      this.parentOf(index) &&
      this._compare.greaterThan(this.parentOf(index), this.elementOf(index))
    ) {
      swap(this._container, this.parentIndexOf(index), index)

      // Move up
      index = this.parentIndexOf(index)
    }
  }

  heapifyDown(): void {
    const index = 0
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
        swap(this._container, childIndex, index)
      } else {
        // There's no more swap to do.
        break
      }

      // Move down
      childIndex = this.leftIndexOf(index)
    }
  }

  toString(): string {
    return this._container.toString()
  }
}

export class MinHeap extends Heap {
  constructor() {
    super()
    this._compare = new Comparator((a: number, b: number) => a - b)
  }
}

export class MaxHeap extends Heap {
  constructor() {
    super()
    this._compare = new Comparator((a: number, b: number) => b - a)
  }
}
