import { clone } from '../helpers/array'
class ArrayList<T> {
  _bucket: T[]
  _size: number

  constructor(size?: number) {
    this._size = size || 10
    this._bucket = []
  }

  set(index: number, item: T): boolean {
    if (index < 0 || index >= this._bucket.length) {
      return false
    }

    this._bucket[index] = item

    return true
  }

  append(item: T): void {
    const len = this._bucket.length

    if (this._bucket.length === this._size) {
      this._expandBucket()
    }

    this._bucket[len] = item
  }

  get(index: number): T {
    return this._bucket[index]
  }

  remove(item: T): boolean {
    const i: number = this.findIndex((listItem) => listItem === item)

    if (i === -1) {
      return false
    }

    if (i < this._bucket.length) {
      for (let j = i; j < this._bucket.length - 1; j++) {
        this._bucket[j] = this._bucket[j + 1]
      }

      this._bucket.length-- // Remove last element
      return true
    }

    return false
  }
  
  findIndex(fn: (T) => boolean): number {
    for (let i = 0; i < this.length(); i++) {
      if (fn(this.get(i))) {
        return i
      }
    }

    return -1
  }

  swap(indexA: number, indexB: number): void {
    const tmp = this._bucket[indexA]
    this._bucket[indexA] = this._bucket[indexB]
    this._bucket[indexB] = tmp
  }

  pop(): T {
    return this._bucket.pop()
  }

  values(): T[] {
    return this._bucket
  }

  length(): number {
    return this._bucket.length
  }

  size(): number {
    return this._size
  }

  toString(): string {
    return this._bucket.toString()
  }

  toArray(): T[] {
    return clone(this._bucket)
  }

  private _expandBucket(): void {
    const newSize = this._size * 2
    const newBucket = [] // Pretend the new bucket is twice the size of the old bucket

    for (let i = 0; i < this._bucket.length; i++) {
      newBucket[i] = this._bucket[i]
    }

    this._size = newSize
    this._bucket = newBucket
  }

  [Symbol.iterator](): {
    index: number
    next: () => { value: T; done: boolean }
  } {
    const self = this
    return {
      index: 0,
      next() {
        let result = { value: undefined, done: true }

        if (this.index < self.length()) {
          result = { value: self.get(this.index), done: false }
          this.index++
        }

        return result
      },
    }
  }
}

export default ArrayList
