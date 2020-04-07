const LinkedList = require('./linked-list')

class Queue {
  constructor (array = []) {
    this._data = new LinkedList(array)
  }

  remove () {
    return this._data.removeFirst()
  }

  add (item) {
    return this._data.addLast(item)
  }

  isEmpty () {
    return this._data.isEmpty()
  }

  size () {
    return this._data.size()
  }

  toString () {
    return this._data.toString()
  }
}

module.exports = Queue
