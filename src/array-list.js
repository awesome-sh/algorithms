class ArrayList {
  constructor (size) {
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
    const newArray = new Array(this._bucket.length)
    let isRemoved = false

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i] === item) {
        isRemoved = true
        continue
      }

      newArray[i] = this._bucket[i]
    }

    this._bucket = newArray

    return isRemoved
  }

  values () {
    const values = []

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i]) {
        values[values.length] = this._bucket[i]
      }
    }

    return values
  }

  size () {
    return this._size
  }

  _expandBucket () {
    const newSize = this._size * 2
    const newBucket = new Array(newSize)

    for (let i = 0; i < this._bucket.length; i++) {
      newBucket[i] = this._bucket[i]
    }

    this._size = newSize
    this._bucket = newBucket
  }
}

module.exports = ArrayList
