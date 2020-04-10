import LinkedList from './linked-list'

class Queue {
  private _data: LinkedList

  constructor (array = []) {
    this._data = new LinkedList(array)
  }

  remove (): any {
    return this._data.removeFirst()
  }

  add (item: any) {
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
