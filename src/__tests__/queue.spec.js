const Queue = require('../queue')

describe('Queue', () => {
  it('starts empty', () => {
    const queue = new Queue()

    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBe(true)
  })

  it('starts with elements', () => {
    const queue = new Queue(['a', 'b'])

    expect(queue.size()).toBe(2)
    expect(queue.isEmpty()).toBe(false)
  })

  it('adds element', () => {
    const queue = new Queue()
    queue.add('a')

    expect(queue.size()).toBe(1)
  })

  it('removes element', () => {
    const queue = new Queue(['a'])

    expect(queue.remove()).toBe('a')
    expect(queue.size()).toBe(0)
  })

  it('removes element in FIFO way', () => {
    const queue = new Queue()

    queue.add('a')
    queue.add('b')
    queue.add('c')

    expect(queue.remove()).toBe('a')
    expect(queue.remove()).toBe('b')
    expect(queue.remove()).toBe('c')
  })

  it('converts to string', () => {
    const queue = new Queue()

    queue.add('a')
    queue.add('b')
    queue.add('c')

    expect(queue.toString()).toBe('a, b, c')
  })
})
