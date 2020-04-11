import LinkedList from './linked-list'

class Queue<T> {
  private _data: LinkedList<T>

  constructor () {
    this._data = new LinkedList<T>()
  }

  remove (): T {
    return this._data.removeFirst()
  }

  add (item: T) {
    return this._data.addLast(item)
  }

  isEmpty (): boolean {
    return this._data.isEmpty()
  }

  size (): number {
    return this._data.size()
  }

  toString (): string {
    return this._data.toString()
  }
}

export default Queue
