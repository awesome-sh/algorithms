import hash from 'string-hash'
import ArrayList from './array-list'
import LinkedList from './linked-list'

class HashMap<KeyT, ValueT> {
  _bucket: Bucket<KeyT, ValueT>
  _count: number

  constructor (size: number = 100) {
    this._bucket = this._createBucket(size)
    this._count = 0
  }

  set (key: KeyT, value: ValueT): void {
    const [item, list] = this._getItemWithList(key)

    if (item) {
      item[1] = value
    } else {
      list.append([key, value])
      this._count++
    }
  }

  get (key: KeyT): ValueT {
    if (!key) {
      return
    }

    const item = this._getItem(key)

    if (item) {
      return item[1]
    }
  }

  has (key: KeyT): boolean {
    const item = this._getItem(key)
    return !!item
  }

  remove (key: KeyT): boolean {
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

  keys (): KeyT[] {
    const keys = []

    for (const list of this._bucket) {
      for (const item of list) {
        keys.push(item[0])
      }
    }

    return keys
  }

  values (): ValueT[] {
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

  private _createBucket (size: number): Bucket<KeyT, ValueT> {
    const bucket = new ArrayList<Collisions<KeyT, ValueT>> (size)

    for (let i = 0; i < size; i++) {
      bucket.append(new LinkedList())
    }

    return bucket
  }

  // Runtime: O(1) assuming good hash function and short list
  private _getItem (key: KeyT): Item<KeyT, ValueT> {
    const [item] = this._getItemWithList(key)

    return item
  }

  // Runtime: O(1) assuming good hash function and short list
  private _getItemWithList (key: KeyT): [Item<KeyT, ValueT>, Collisions<KeyT, ValueT>] {
    const list = this._getList(key)

    for (const item of list) {
      if (item[0] === key) {
        return [item, list]
      }
    }

    return [undefined, list]
  }

  // Runtime: O(1)
  private _getList (key: KeyT): Collisions<KeyT, ValueT> {
    const hash = this._hash(key) // O(1)
    return this._bucket.get(hash) // O(1)
  }

  // Runtime: O(1)
  private _hash (key: KeyT): number {
    return hash(key) % this._bucket.length()
  }
}

type Bucket<KeyT, ValueT> = ArrayList<Collisions<KeyT, ValueT>>

type Collisions<KeyT, ValueT> = LinkedList<Item<KeyT, ValueT>>

type Item<KeyT, ValueT> = [KeyT, ValueT]

export default HashMap
