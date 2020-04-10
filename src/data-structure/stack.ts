import LinkedList from './linked-list'

class Stack {
  private _data: any

  constructor (array = []) {
    this._data = new LinkedList(array)
  }

  pop () {
    return this._data.removeFirst()
  }

  push (item) {
    return this._data.addFirst(item)
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

export default Stack
