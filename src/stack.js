const LinkedList = require('./linked-list');

class Stack {
  constructor(array = []) {
    this._data = new LinkedList(array);
  }

  pop() {
    return this._data.removeFirst();
  }

  push(item) {
    return this._data.addFirst(item);
  }

  isEmpty() {
    return this._data.isEmpty();
  }

  size() {
    return this._data.size();
  }

  toString() {
    return this._data.toString();
  }
}

module.exports = Stack;
