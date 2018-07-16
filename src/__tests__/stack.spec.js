const Stack = require('../stack')

describe('Stack', () => {
  it('starts empty', () => {
    const stack = new Stack()

    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
  })

  it('starts with elements', () => {
    const stack = new Stack(['a', 'b'])

    expect(stack.size()).toBe(2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('adds element', () => {
    const stack = new Stack()
    stack.push('a')

    expect(stack.size()).toBe(1)
  })

  it('removes element', () => {
    const stack = new Stack(['a'])

    expect(stack.pop()).toBe('a')
    expect(stack.size()).toBe(0)
  })

  it('removes element in LIFO way', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')
    stack.push('c')

    expect(stack.pop()).toBe('c')
    expect(stack.pop()).toBe('b')
    expect(stack.pop()).toBe('a')
  })

  it('converts to string', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')
    stack.push('c')

    expect(stack.toString()).toBe('c, b, a')
  })
})
