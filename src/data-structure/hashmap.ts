import hash from 'string-hash'
import ArrayList from './array-list'
import LinkedList from './linked-list'

class HashMap {
  _bucket: ArrayList
  _count: number

  constructor (size: number = 100) {
    this._bucket = this._createBucket(size)
    this._count = 0
  }

  set (key: string, value: any): void {
    const [item, list] = this._getItemWithList(key)

    if (item) {
      item[1] = value
    } else {
      list.append([key, value])
      this._count++
    }
  }

  get (key: string): any {
    if (!key) {
      return
    }

    const item = this._getItem(key)

    if (item) {
      return item[1]
    }
  }

  has (key: string): boolean {
    const item = this._getItem(key)
    return !!item
  }

  remove (key: string): boolean {
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

  keys (): string[] {
    const keys = []

    for (const list of this._bucket) {
      for (const item of list) {
        keys.push(item[0])
      }
    }

    return keys
  }

  values (): any[] {
    const values = []

    for (const list of this._bucket) {
      for (const item of list) {
        values.push(item[1])
      }
    }

    return values
  }

  size (): number {
    return this._count
  }

  toString (): string {
    let str = ''

    for (let i = 0; i < this._bucket.length(); i++) {
      str += `[${i}] -> ${this._bucket.get(i).toString()}\n`
    }

    return str
  }

  private _createBucket (size: number): ArrayList {
    const bucket = new ArrayList(size)

    for (let i = 0; i < size; i++) {
      bucket.append(new LinkedList())
    }

    return bucket
  }

  // Runtime: O(1) assuming good hash function and short list
  private _getItem (key: string): any {
    const [item] = this._getItemWithList(key)

    return item
  }

  // Runtime: O(1) assuming good hash function and short list
  private _getItemWithList (key: string): [any, LinkedList] {
    const list = this._getList(key)

    for (const item of list) {
      if (item[0] === key) {
        return [item, list]
      }
    }

    return [undefined, list]
  }

  // Runtime: O(1)
  private _getList (key: string): LinkedList {
    const hash = this._hash(key) // O(1)
    return this._bucket.get(hash) // O(1)
  }

  // Runtime: O(1)
  private _hash (key: string): number {
    return hash(key) % this._bucket.length()
  }
}

export default HashMap
