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
    let found;

    if (!key) {
      return;
    }

    let list = this._getAdjacencies(key);

    list.iterate(function(item) {
      if (item.key === key) {
        found = item.value;
      }
    });

    return found;
  }

  has(key) {
    const list = this._getAdjacencies(key);
    return !list.isEmpty();
  }

  remove(key) {
    let found = null;
    let list = this._getAdjacencies(key);

    list.iterate(function(item) {
      if (item.key === key) {
        found = item;
      }
    });

    if (found) {
      list.remove(found);
      this._count--;

      if (list.isEmpty()) {
        delete this._table[this._hash(key)];
      }

      return true;
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

      list.iterate(function(item) {
        keys.push(item.key);
      });
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

      list.iterate(function(item) {
        values.push(item.value);
      });
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
