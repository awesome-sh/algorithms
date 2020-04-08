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

  it('adds an element in a specific index', () => {
    const list = new ArrayList()
    list.append('a')
    list.append('b')

    expect(list.add(1, 'c')).toEqual(true)
    expect(list.values()).toEqual(['a', 'c', 'b'])
  })

  it('prevents adding element in a negative index', () => {
    const list = new ArrayList()

    expect(list.add(-1, 'c')).toEqual(false)
  })

  it('prevents adding element in a higher index than allowed', () => {
    const list = new ArrayList(2)

    expect(list.add(2, 'c')).toEqual(false)
  })

  it('doubles the size when element is added and limit is reached', () => {
    const list = new ArrayList(2)
    expect(list.size()).toEqual(2)

    list.append('a')
    list.append('b')
    expect(list.size()).toEqual(2)

    expect(list.add(1, 'c')).toEqual(true)
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
})
