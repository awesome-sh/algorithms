class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
  }

  getHead() {
    return this._head;
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
  }

  append(data) {
    const node = new Node(data);

    if (!this._head) {
      this._head = node;
      this._length++;
      return;
    }

    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._length++;
  }

  values() {
    let node = this._head;
    let list = [];

    while (node) {
      list.push(node.data);
      node = node.next;
    }

    return list;
  }

  toString() {
    return this.values().join(', ');
  }

  remove(data) {
    let prev = null;
    let current = this._head;

    while (current) {
      if (current.data === data) {
        if (this._head === current) {
          this._head = this._head.next;
        } else {
          prev.next = current.next;
        }

        this._length--;
        break;
      }

      prev = current;
      current = current.next;
    }
  }

  removeAt(index) {
    if (!this._head) {
      return;
    }

    if (index < 0 || index > this._length - 1) {
      return;
    }

    let prev = null;
    let current = this._head;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    if (current === this._head) {
      this._head = this._head.next;
    } else {
      prev.next = current.next;
    }

    this._length--;
  }

  insertAt(index, data) {
    const node = new Node(data);

    if (index < 0 || index > this._length) {
      return;
    }

    let prev = null;
    let current = this._head;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    if (current === this._head) {
      node.next = current;
      this._head = node;
    } else {
      node.next = current;
      prev.next = node;
    }

    this._length++;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = LinkedList;
