const LinkedList = require('../linked-list');

describe('LinkedList', () => {
  let list;

  it('starts empty', () => {
    list = new LinkedList();

    expect(list.values()).toEqual([]);
  });

  it('initializes with values', () => {
    list = new LinkedList(['a', 'b', 'c']);

    expect(list.values()).toEqual(['a', 'b', 'c']);
  });

  describe('addition', () => {
    it('adds element at the end', () => {
      list = new LinkedList(['a', 'b']);

      expect(list.append('c')).toBe(list);
      expect(list.values()).toEqual(['a', 'b', 'c']);
    });

    it('adds element at the end', () => {
      list = new LinkedList(['a', 'b']);

      expect(list.addLast('c')).toBe(list);
      expect(list.values()).toEqual(['a', 'b', 'c']);
    });

    it('adds element by index', () => {
      list = new LinkedList(['a', 'c']);

      expect(list.addAt(1, 'b')).toBe(list);
      expect(list.values()).toEqual(['a', 'b', 'c']);
    });

    it('adds element at the beginning using prepend', () => {
      list = new LinkedList(['b', 'c']);

      expect(list.prepend('a')).toBe(list);
      expect(list.values()).toEqual(['a', 'b', 'c']);
    });

    it('adds element at the beginning using addFirst', () => {
      list = new LinkedList(['b', 'c']);

      expect(list.addFirst('a')).toBe(list);
      expect(list.values()).toEqual(['a', 'b', 'c']);
    });
  });

  describe('removal', () => {
    beforeEach(() => {
      list = new LinkedList(['a', 'b', 'c']);
    });

    it('removes element by value', () => {
      expect(list.remove('b')).toBe(true);
      expect(list.remove('d')).toBe(false);
      expect(list.values()).toEqual(['a', 'c']);
    });

    it('removes element by index', () => {
      expect(list.removeAt(1)).toBe('b');
      expect(list.values()).toEqual(['a', 'c']);
    });

    it('removes the first element', () => {
      expect(list.removeFirst()).toBe('a');
      expect(list.values()).toEqual(['b', 'c']);
    });

    it('removes the last element', () => {
      expect(list.removeLast()).toBe('c');
      expect(list.values()).toEqual(['a', 'b']);
    });
  });
});
