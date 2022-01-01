import { clone } from '../helpers/array'
class ArrayList<T> {
  private bucket: T[]
  private capacity: number

  constructor(capacity?: number) {
    this.capacity = capacity || 10
    this.bucket = []
  }

  set(index: number, item: T): boolean {
    if (index < 0 || index >= this.bucket.length) {
      return false
    }

    this.bucket[index] = item

    return true
  }

  append(item: T): void {
    const len = this.bucket.length

    if (this.bucket.length === this.capacity) {
      this.expandBucket()
    }

    this.bucket[len] = item
  }

  get(index: number): T {
    return this.bucket[index]
  }

  remove(item: T): boolean {
    const i: number = this.findIndex((listItem) => listItem === item)

    if (i === -1) {
      return false
    }

    if (i < this.bucket.length) {
      for (let j = i; j < this.bucket.length - 1; j++) {
        this.bucket[j] = this.bucket[j + 1]
      }

      this.bucket.length-- // Remove last element
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
    const tmp = this.bucket[indexA]
    this.bucket[indexA] = this.bucket[indexB]
    this.bucket[indexB] = tmp
  }

  pop(): T {
    return this.bucket.pop()
  }

  values(): T[] {
    return this.bucket
  }

  length(): number {
    return this.bucket.length
  }

  size(): number {
    return this.capacity
  }

  toString(): string {
    return this.bucket.toString()
  }

  toArray(): T[] {
    return clone(this.bucket)
  }

  private expandBucket(): void {
    const newSize = this.capacity * 2
    const newBucket = [] // Pretend the new bucket is twice the size of the old bucket

    for (let i = 0; i < this.bucket.length; i++) {
      newBucket[i] = this.bucket[i]
    }

    this.capacity = newSize
    this.bucket = newBucket
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
