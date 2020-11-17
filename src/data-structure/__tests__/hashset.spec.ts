import HashSet from '../hashset'

describe('HashSet', () => {
  it('starts empty', () => {
    const set = new HashSet<string>()
    expect(set.size()).toEqual(0)
  })

  it('initializes with values', () => {
    const set = new HashSet<string>(['a', 'b', 'c'])

    expect(set.values().sort()).toEqual(['a', 'b', 'c'])
  })

  it('adds elements', () => {
    const set = new HashSet<string>()

    expect(set.add('a')).toBe(true)
    expect(set.values()).toEqual(['a'])
  })

  it('doesnt add duplicates', () => {
    const set = new HashSet<string>()
    set.add('a')

    expect(set.add('a')).toBe(false)
    expect(set.values()).toEqual(['a'])
  })

  it('has element', () => {
    const set = new HashSet<string>(['a'])

    expect(set.has('a')).toBe(true)
  })

  it('lists elements', () => {
    const set = new HashSet<string>(['a', 'b', 'c'])

    expect(set.values().sort()).toEqual(['a', 'b', 'c'])
  })

  it('iterates through entries', () => {
    const set = new HashSet<string>(['a', 'b', 'c'])

    const values1 = []
    const values2 = []
    let hashSet = null

    set.forEach((val1: string, val2: string, map: HashSet<string>) => {
      values1.push(val1)
      values2.push(val2)
      hashSet = map
    })

    expect(values1).toEqual(['a', 'c', 'b'])
    expect(values2).toEqual(['a', 'c', 'b'])
    expect(hashSet).toEqual(set)
  })

  it('remove element', () => {
    const set = new HashSet(['a'])

    expect(set.remove('a')).toBe(true)
    expect(set.has('a')).toBe(false)
    expect(set.size()).toEqual(0)
  })

  it('does not remove unknown element', () => {
    const set = new HashSet(['a'])
    set.remove('a')

    expect(set.remove('a')).toBe(false)
    expect(set.size()).toEqual(0)
  })

  it('clears out', () => {
    const set = new HashSet(['a'])
    set.clear()

    expect(set.size()).toBe(0)
  })
})
