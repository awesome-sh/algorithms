const hash = require('string-hash');
const LinkedList = require('./linked-list');

class HashMap {
  constructor(size = 100) {
    this._table = new Array(size);
    this._count = 0;
  }

  set(key, value) {
    if (this._count >= this._table.length) {
      this._table = this._doubleTable();
    }

    const hash = this._hash(key);

    // lazy init
    if (!this.has(key)) {
      this._table[hash] = new LinkedList();
    }

    this._table[hash].append({key, value});
    this._count++;
  }

  get(key) {
    if (!key) {
      return;
    }

    let list = this._getAdjacencies(key);
    let node = list.getHead();

    while (node) {
      if (node.data.key === key) {
        return node.data.value;
      }

      node = node.next;
    }
  }

  has(key) {
    const list = this._getAdjacencies(key);
    return !list.isEmpty();
  }

  remove(key) {
    let list = this._getAdjacencies(key);
    let node = list.getHead();

    while (node) {
      if (node.data.key === key) {
        list.remove(node.data);
        this._count--;

        if (list.isEmpty()) {
          delete this._table[this._hash(key)];
        }

        return true;
      }

      node = node.next;
    }

    return false;
  }

  size() {
    return this._count;
  }

  keys() {
    const keys = [];

    for (let i=0; i<this._table.length; i++) {
      let list = this._table[i];

      if (!list) {
        continue;
      }

      let node = list.getHead();

      while (node) {
        keys.push(node.data.key);
        node = node.next;
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let i=0; i<this._table.length; i++) {
      let list = this._table[i];

      if (!list) {
        continue;
      }

      let node = list.getHead();

      while (node) {
        values.push(node.data.value);
        node = node.next;
      }
    }

    return values;
  }

  // private

  _doubleTable() {
    const newSize = this._table.length * 2;
    const newTable = new Array(newSize);

    for (let i=0; i<this._table.length; i++) {
      newTable[i] = this._table[i];
    }

    return newTable;
  }

  _getAdjacencies(key) {
    const hash = this._hash(key);
    return this._table[hash] || new LinkedList();
  }

  _hash(key) {
    return hash(key) % this._table.length;
  }
}

module.exports = HashMap;
