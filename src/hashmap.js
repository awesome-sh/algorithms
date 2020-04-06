const hash = require('string-hash')
const ArrayList = require('./array-list')
const LinkedList = require('./linked-list')

class HashMap {
  constructor (size = 100) {
    this._bucket = this._createBucket(size)
    this._count = 0
  }

  set (key, value) {
    const hash = this._hash(key)
    this._bucket.get(hash).append([key, value])
    this._count++
  }

  get (key) {
    if (!key) {
      return
    }

    const list = this._getList(key)

    for (const item of list) {
      if (item[0] === key) {
        return item[1]
      }
    }
  }

  has (key) {
    const list = this._getList(key)
    return !list.isEmpty()
  }

  remove (key) {
    const list = this._getList(key)

    for (const item of list) {
      if (item[0] === key) {
        list.remove(item)
        this._count--

        return true
      }
    }

    return false
  }

  keys () {
    const keys = []

    for (const list of this._bucket) {
      for (const item of list) {
        keys.push(item[0])
      }
    }

    return keys
  }

  values () {
    const values = []

    for (const list of this._bucket) {
      for (const item of list) {
        values.push(item[1])
      }
    }

    return values
  }

  size () {
    return this._count
  }

  toString () {
    let str = ''

    for (let i = 0; i < this._bucket.length(); i++) {
      str += `[${i}] -> ${this._bucket.get(i).toString()}\n`
    }

    return str
  }

  // private

  _createBucket (size) {
    const bucket = new ArrayList(size)

    for (let i = 0; i < size; i++) {
      bucket.append(new LinkedList())
    }

    return bucket
  }

  _getList (key) {
    return this._bucket.get(this._hash(key))
  }

  _hash (key) {
    return hash(key) % this._bucket.length()
  }
}

module.exports = HashMap
