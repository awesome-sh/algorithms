const Comparator = require('./comparator')
const { swap } = require('./array')

class Heap {
  constructor () {
    this._container = []
    this.compare = new Comparator()
  }

  add (item) {
    this._container.push(item)
    this.heapifyUp()
  }

  elementOf (index) {
    return this._container[index]
  }

  parentOf (index) {
    return this.elementOf(this.parentIndexOf(index))
  }

  leftOf (index) {
    return this.elementOf(this.leftIndexOf(index))
  }

  rightOf (index) {
    return this.elementOf(this.rightIndexOf(index))
  }

  parentIndexOf (index) {
    return Math.floor((index - 1) / 2)
  }

  lastIndex () {
    return this._container.length - 1
  }

  leftIndexOf (index) {
    return 2 * index + 1
  }

  rightIndexOf (index) {
    return 2 * index + 2
  }

  peek () {
    return this.elementOf(0)
  }

  last () {
    return this.elementOf(this.lastIndex())
  }

  size () {
    return this._container.length
  }

  isEmpty () {
    return this.size() === 0
  }

  poll () {
    const item = this.peek()
    this._container[0] = this._container.pop()
    this.heapifyDown()
    return item
  }

  heapifyUp () {
    let index = this.lastIndex()

    while (this.parentOf(index) && this.compare.greaterThan(this.parentOf(index), this.elementOf(index))) {
      swap(this._container, this.parentIndexOf(index), index)

      // Move up
      index = this.parentIndexOf(index)
    }
  }

  heapifyDown () {
    const index = 0
    let childIndex = this.leftIndexOf(index)

    while (childIndex) {
      // Compare the values of the two childs
      if (this.compare.lessThan(this.rightOf(index), this.leftOf(index))) {
        childIndex = this.rightIndexOf(index)
      }

      // Compare the values of the smaller child with the current element
      if (this.compare.lessThan(this.elementOf(childIndex), this.elementOf(index))) {
        swap(this._container, childIndex, index)
      } else {
        // There's no more swap to do.
        break
      }

      // Move down
      childIndex = this.leftIndexOf(index)
    }
  }

  toString () {
    return this._container.toString()
  }
}

class MinHeap extends Heap {
  constructor () {
    super()
    this.compare = new Comparator((a, b) => a - b)
  }
}

class MaxHeap extends Heap {
  constructor () {
    super()
    this.compare = new Comparator((a, b) => b - a)
  }
}

module.exports = {
  MinHeap,
  MaxHeap
}
