import LinkedList from '../linked-list'

describe('LinkedList', () => {
  it('starts empty', () => {
    const list = new LinkedList()

    expect(list.values()).toEqual([])
  })

  it('initializes with values', () => {
    const list = new LinkedList(['a', 'b', 'c'])

    expect(list.values()).toEqual(['a', 'b', 'c'])
  })

  describe('toString', () => {
    it('stringifies scalar values', () => {
      const list = new LinkedList(['a', 'b', 'c'])
      expect(list.toString()).toBe('a -> b -> c')
    })

    it('stringifies complex values', () => {
      const list = new LinkedList([{ a: 1 }, ['b'], { c: 2 }])
      expect(list.toString()).toBe('{"a":1} -> ["b"] -> {"c":2}')
    })
  })

  describe('addition', () => {
    it('adds element at the end', () => {
      const list = new LinkedList(['a', 'b'])

      expect(list.append('c')).toBe(list)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('adds element at the end', () => {
      const list = new LinkedList(['a', 'b'])

      expect(list.addLast('c')).toBe(list)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('adds element by index', () => {
      const list = new LinkedList(['a', 'c'])

      expect(list.addAt(1, 'b')).toBe(true)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('adds element by index in the head', () => {
      const list = new LinkedList(['b', 'c'])

      expect(list.addAt(0, 'a')).toBe(true)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('does not add element if index is negative', () => {
      const list = new LinkedList(['b', 'c'])

      expect(list.addAt(-1, 'a')).toBe(false)
      expect(list.values()).toEqual(['b', 'c'])
    })

    it('does not add element if index is out of bound', () => {
      const list = new LinkedList(['b', 'c'])

      expect(list.addAt(5, 'a')).toBe(false)
      expect(list.values()).toEqual(['b', 'c'])
    })

    it('adds element at the beginning using prepend', () => {
      const list = new LinkedList(['b', 'c'])

      expect(list.prepend('a')).toBe(list)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('adds element at the beginning using addFirst', () => {
      const list = new LinkedList(['b', 'c'])

      expect(list.addFirst('a')).toBe(list)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })
  })

  describe('removal', () => {
    let list: LinkedList<string>

    beforeEach(() => {
      list = new LinkedList(['a', 'b', 'c'])
    })

    it('removes element by value', () => {
      expect(list.remove('b')).toBe(true)
      expect(list.remove('d')).toBe(false)
      expect(list.values()).toEqual(['a', 'c'])
    })

    it('removes last element by value', () => {
      expect(list.remove('c')).toBe(true)
      expect(list.remove('d')).toBe(false)
      expect(list.values()).toEqual(['a', 'b'])
    })

    it('removes element by index', () => {
      expect(list.removeAt(1)).toBe('b')
      expect(list.values()).toEqual(['a', 'c'])
    })

    it('does not remove element on empty list', () => {
      const list = new LinkedList()
      expect(list.removeAt(1)).toBe(null)
      expect(list.values()).toEqual([])
    })

    it('does not remove element on negative index', () => {
      expect(list.removeAt(-1)).toBe(null)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('does not remove element out of bound', () => {
      expect(list.removeAt(5)).toBe(null)
      expect(list.values()).toEqual(['a', 'b', 'c'])
    })

    it('removes the first element', () => {
      expect(list.removeFirst()).toBe('a')
      expect(list.values()).toEqual(['b', 'c'])
    })

    it('removes the last element', () => {
      expect(list.removeLast()).toBe('c')
      expect(list.values()).toEqual(['a', 'b'])
    })
  })

  describe('reverse', () => {
    it('reverses the list', () => {
      const list = new LinkedList(['a', 'b', 'c'])
      list.reverse()
      expect(list.toString()).toBe('c -> b -> a')
      expect(list.getHead()).toBe('c')
      expect(list.getTail()).toBe('a')
    })

    it('reverses empty list', () => {
      const list = new LinkedList()
      list.reverse()
      expect(list.toString()).toBe('')
      expect(list.getHead()).toBe(null)
      expect(list.getTail()).toBe(null)
    })
  })
})
