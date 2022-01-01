import ArrayList from '../array-list'

describe('ArrayList', () => {
  it('starts empty', () => {
    const list = new ArrayList()

    expect(list.values()).toEqual([])
  })

  it('starts with size 10', () => {
    const list = new ArrayList()

    expect(list.size()).toEqual(10)
  })

  it('starts with a custom size', () => {
    const list = new ArrayList(12)

    expect(list.size()).toEqual(12)
  })

  it('appends an element', () => {
    const list = new ArrayList()
    list.append('a')
    list.append('b')

    expect(list.values()).toEqual(['a', 'b'])
  })

  it('doubles the size when element is appended and limit is reached', () => {
    const list = new ArrayList(2)
    expect(list.size()).toEqual(2)

    list.append('a')
    list.append('b')
    expect(list.size()).toEqual(2)

    list.append('c')
    expect(list.size()).toEqual(4)
  })

  it('sets an element in a specific index', () => {
    const list = new ArrayList()
    list.append('a')
    list.append('b')

    expect(list.set(1, 'c')).toEqual(true)
    expect(list.values()).toEqual(['a', 'c'])
  })

  it('prevents setting element in a negative index', () => {
    const list = new ArrayList()

    expect(list.set(-1, 'c')).toEqual(false)
  })

  it('prevents setting element in a higher index than allowed', () => {
    const list = new ArrayList(2)

    expect(list.set(2, 'c')).toEqual(false)
  })

  it('doubles the size when element is set and limit is reached', () => {
    const list = new ArrayList(2)
    expect(list.size()).toEqual(2)

    list.append('a')
    list.append('b')
    expect(list.size()).toEqual(2)

    expect(list.set(1, 'c')).toEqual(true)
    expect(list.size()).toEqual(4)
  })

  it('removes element by value', () => {
    const list = new ArrayList()
    list.append('a')
    list.append('b')

    expect(list.remove('a')).toBe(true)
    expect(list.remove('c')).toBe(false)
    expect(list.values()).toEqual(['b'])
  })

  it('finds index of an element', () => {
    const list = new ArrayList()
    list.append('a')
    list.append('b')
    list.append('c')

    expect(list.findIndex((item) => item === 'a')).toBe(0)
    expect(list.findIndex((item) => item === 'b')).toBe(1)
    expect(list.findIndex((item) => item === 'c')).toBe(2)
    expect(list.findIndex((item) => item === 'd')).toBe(-1)
  })
})
