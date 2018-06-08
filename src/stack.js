class Stack {
  constructor(array = []) {
    this._data = array.slice(0);
  }

  pop() {
    return this._data.pop();
  }

  push(item) {
    return this._data.push(item);
  }

  isEmpty() {
    return this._data.length === 0;
  }

  size() {
    return this._data.length;
  }
}

module.exports = Stack;
