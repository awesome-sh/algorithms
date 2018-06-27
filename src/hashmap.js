const hash = require('string-hash');
const LinkedList = require('./linked-list');

class HashMap {
  constructor(size = 100) {
    this._bucket = this._createBucket(size);
    this._count = 0;
  }

  set(key, value) {
    // TODO: needs a fill factor
    if (this._count >= this._bucket.length) {
      this._bucket = this._doubleBucket();
    }

    const hash = this._hash(key);
    this._bucket[hash].append({key, value});
    this._count++;
  }

  get(key) {
    let found;

    if (!key) {
      return;
    }

    let list = this._getList(key);

    list.iterate(function(item) {
      if (item.key === key) {
        found = item.value;
      }
    });

    return found;
  }

  has(key) {
    const list = this._getList(key);
    return !list.isEmpty();
  }

  remove(key) {
    let found = null;
    let list = this._getList(key);

    list.iterate(function(item) {
      if (item.key === key) {
        found = item;
      }
    });

    if (found) {
      list.remove(found);
      this._count--;

      return true;
    }

    return false;
  }

  size() {
    return this._count;
  }

  keys() {
    const keys = [];

    for (let i=0; i<this._bucket.length; i++) {
      let list = this._bucket[i];

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

    for (let i=0; i<this._bucket.length; i++) {
      let list = this._bucket[i];

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

  _createBucket(size) {
    return Array(size).fill(null).map(() => new LinkedList());
  }

  _doubleBucket() {
    const bucket = this._createBucket(this._bucket.length * 2);

    for (let i=0; i<this._bucket.length; i++) {
      bucket[i] = this._bucket[i];
    }

    return bucket;
  }

  _getList(key) {
    return this._bucket[this._hash(key)];
  }

  _hash(key) {
    return hash(key) % this._bucket.length;
  }
}

module.exports = HashMap;
