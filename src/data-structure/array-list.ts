class ArrayList {
  _bucket: any[]
  _size: number

  constructor (size?: number) {
    this._size = size || 10
    this._bucket = []
  }

  add (index, item) {
    if (this._bucket.length === this._size) {
      this._expandBucket()
    }

    if (index < 0 || index >= this._bucket.length) {
      return false
    }

    for (let i = this._bucket.length; i > index; i--) {
      this._bucket[i] = this._bucket[i - 1]
    }

    this._bucket[index] = item

    return true
  }

  append (item) {
    if (this._bucket.length === this._size) {
      this._expandBucket()
    }

    this._bucket[this._bucket.length] = item
  }

  get (index) {
    return this._bucket[index]
  }

  indexOf (item) {
    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i] === item) {
        return i
      }
    }

    return -1
  }

  remove (item) {
    for (var i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i] === item) {
        break
      }
    }

    if (i < this._bucket.length) {
      for (var j = i; j < this._bucket.length - 1; j++) {
        this._bucket[j] = this._bucket[j + 1]
      }

      this._bucket.length -= 1 // Remove last element
      return true
    }

    return false
  }

  values () {
    return this._bucket
  }

  length () {
    return this._bucket.length
  }

  size () {
    return this._size
  }

  private _expandBucket () {
    const newSize = this._size * 2
    const newBucket = new Array(newSize)

    for (let i = 0; i < this._bucket.length; i++) {
      newBucket[i] = this._bucket[i]
    }

    this._size = newSize
    this._bucket = newBucket
  }

  [Symbol.iterator] () {
    const list = this
    return {
      index: 0,
      next () {
        let result = { value: undefined, done: true }

        if (this.index < list.length()) {
          result = { value: list.get(this.index), done: false }
          this.index++
        }

        return result
      }
    }
  }
}

export default ArrayList
