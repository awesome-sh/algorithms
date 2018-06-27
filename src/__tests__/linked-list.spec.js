const LinkedList = require('../linked-list');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('starts empty', () => {
    expect(list.values()).toEqual([]);
  });

  it('initializes with values', () => {
    list = new LinkedList(['a', 'b', 'c']);
    expect(list.values()).toEqual(['a', 'b', 'c']);
  });

  it('adds an element at the end', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.values()).toEqual(['a', 'b', 'c']);
  });

  it('adds an element at the beginning', () => {
    list.append('b');
    list.append('c');

    list.prepend('a');

    expect(list.values()).toEqual(['a', 'b', 'c']);
  });

  it('removes an element', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    list.remove('b');

    expect(list.values()).toEqual(['a', 'c']);
  });

  it('removes the first element', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    list.removeFirst();

    expect(list.values()).toEqual(['b', 'c']);
  });

  it('removes the last element', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    list.removeLast();

    expect(list.values()).toEqual(['a', 'b']);
  });
})
;
