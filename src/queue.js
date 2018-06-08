class Queue {
  constructor(array = []) {
    this._data = array.slice(0);
  }

  remove() {
    return this._data.shift();
  }

  add(item) {
    return this._data.push(item);
  }

  isEmpty() {
    return this._data.length === 0;
  }

  size() {
    return this._data.length;
  }
}

module.exports = Queue;
