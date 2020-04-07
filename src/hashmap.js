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

    const item = this._getItem(key)

    if (item) {
      return item[1]
    }
  }

  has (key) {
    const list = this._getList(key)
    return !list.isEmpty()
  }

  remove (key) {
    const [item, list] = this._getItemWithList(key)

    if (!item) {
      return false
    }

    if (list.remove(item)) {
      this._count--
      return true
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

  _getItem (key) {
    const [item] = this._getItemWithList(key)

    return item
  }

  // Runtime: O(1) assuming good hash function and short list
  _getItemWithList (key) {
    const list = this._getList(key)

    for (const item of list) {
      if (item[0] === key) {
        return [item, list]
      }
    }

    return [undefined, list]
  }

  // Runtime: O(1)
  _getList (key) {
    const hash = this._hash(key) // O(1)
    return this._bucket.get(hash) // O(1)
  }

  // Runtime: O(1)
  _hash (key) {
    return hash(key) % this._bucket.length()
  }
}

module.exports = HashMap
