const HashMap = require('./hashmap');

class HashSet {
  constructor() {
    this._items = new HashMap();
  }

  add(value) {
    if (!this.has(value)) {
      this._items.set(value, true);
      return true;
    }

    return false;
  }

  has(value) {
    return this._items.has(value);
  }

  remove(value) {
    if (this.has(value)) {
      return this._items.remove(value);
    }

    return false;
  }

  size() {
    return this._items.size();
  }

  values() {
    return this._items.keys();
  }

  clear() {
    this._items = new HashMap();
  }

  // Operations

  union(otherSet) {
    const union = new HashSet();

    this.values().forEach((value) => union.add(value));
    otherSet.values().forEach((value) => union.add(value));

    return union;
  }

  intersect(otherSet) {
    const intersect = new HashSet();

    this.values()
      .filter((value) => otherSet.has(value))
      .forEach((value) => intersect.add(value));

    return intersect;
  }

  diff(otherSet) {
    const diff = new HashSet();

    this.values()
      .filter((value) => !otherSet.has(value))
      .forEach((value) => diff.add(value));

    return diff;
  }
}

// let setA = new HashSet();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new HashSet();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// let unionAB = setB.union(setA);

// console.log(unionAB.values());

module.exports = HashSet;
