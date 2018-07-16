const hash = require('string-hash')
const LinkedList = require('./linked-list')

class HashMap {
  constructor (size = 100) {
    this._bucket = this._createBucket(size)
    this._count = 0
  }

  set (key, value) {
    // TODO: needs a fill factor
    if (this._count >= this._bucket.length) {
      this._doubleBucket()
    }

    const hash = this._hash(key)
    this._bucket[hash].append({key, value})
    this._count++
  }

  get (key) {
    if (!key) {
      return
    }

    let list = this._getList(key)

    for (let item of list) {
      if (item.key === key) {
        return item.value
      }
    }
  }

  has (key) {
    const list = this._getList(key)
    return !list.isEmpty()
  }

  remove (key) {
    let list = this._getList(key)

    for (let item of list) {
      if (item.key === key) {
        list.remove(item)
        this._count--

        return true
      }
    }

    return false
  }

  keys () {
    const keys = []

    for (let list of this._bucket) {
      for (let item of list) {
        keys.push(item.key)
      }
    }

    return keys
  }

  values () {
    const values = []

    for (let list of this._bucket) {
      for (let item of list) {
        values.push(item.value)
      }
    }

    return values
  }

  size () {
    return this._count
  }

  toString () {
    let str = ''

    for (let i = 0; i < this._bucket.length; i++) {
      str += `[${i}] -> ${this._bucket[i].toString()}\n`
    }

    return str
  }

  // private

  _createBucket (size) {
    return Array(size).fill(null).map(() => new LinkedList())
  }

  _doubleBucket () {
    const nodes = this._nodes()
    this._bucket = this._createBucket(this._bucket.length * 2)

    for (let node of nodes) {
      this.set(node.key, node.value)
    }
  }

  _getList (key) {
    return this._bucket[this._hash(key)]
  }

  _hash (key) {
    return hash(key) % this._bucket.length
  }

  _nodes () {
    const nodes = []

    for (let list of this._bucket) {
      for (let node of list) {
        nodes.push(node)
      }
    }

    return nodes
  }
}

module.exports = HashMap
