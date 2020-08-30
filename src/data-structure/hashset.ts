import HashMap from './hashmap'

class HashSet<T> {
  private _items: HashMap<T, boolean>

  constructor (array: T[] = []) {
    this._items = new HashMap<T, boolean>()

    for (const item of array) {
      this.add(item)
    }
  }

  add (value: T): boolean {
    if (!this.has(value)) {
      this._items.set(value, true)
      return true
    }

    return false
  }

  has (value: T): boolean {
    return this._items.has(value)
  }

  remove (value: T): boolean {
    if (this.has(value)) {
      return this._items.remove(value)
    }

    return false
  }

  size (): number {
    return this._items.size()
  }

  values (): T[] {
    return this._items.keys()
  }

  clear (): void {
    this._items = new HashMap()
  }
}

export default HashSet
