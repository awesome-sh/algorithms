class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
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
      this._tail = node;
      this._length++;
      return;
    }

    this._tail.next = node;
    this._tail = node;
    this._length++;

    return node;
  }

  prepend(data) {
    const node = new Node(data);

    if (!this._head) {
      this._head = node;
      this._tail = node;
      this._length++;
      return;
    }

    node.next = this._head;
    this._head = node;
    this._length++;

    return node;
  }

  addFirst(data) {
    this.prepend(data);
  }

  addLast(data) {
    this.append(data);
  }

  iterate(callback) {
    let node = this._head;

    while (node) {
      callback(node.data);
      node = node.next;
    }
  }

  [Symbol.iterator]() {
    return {
      node: this._head,
      next() {
        let result = {value: undefined, done: true};

        if (this.node) {
          result = {value: this.node.data, done: false};
          this.node = this.node.next;
        }

        return result;
      }
    };
  }

  removeFirst() {
    return this.removeAt(0);
  }

  removeLast() {
    return this.removeAt(this._length-1);
  }

  remove(data) {
    let prev = null;
    let current = this._head;

    while (current) {
      if (current.data === data) {
        if (current === this._head) {
          this._head = this._head.next;
        } else if (current === this._tail) {
          this._tail = prev;
        } else {
          prev.next = current.next;
        }

        break;
      }

      prev = current;
      current = current.next;
    }

    this._length--;

    return current;
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

  values() {
    let list = [];

    this.iterate((data) => list.push(data));

    return list;
  }

  toString() {
    return this.values().join(', ');
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = LinkedList;
