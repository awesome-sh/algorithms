const Queue = require('../queue');

describe('Queue', () => {
  it('starts empty', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('starts with elements', () => {
    const queue = new Queue(['elem1', 'elem2']);

    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
  });

  it('adds element', () => {
    const queue = new Queue();
    queue.add('elem1');

    expect(queue.size()).toBe(1);
  });

  it('removes element', () => {
    const queue = new Queue(['elem1']);

    expect(queue.remove()).toBe('elem1');
    expect(queue.size()).toBe(0);
  });

  it('removes element in FIFO way', () => {
    const queue = new Queue();

    queue.add('elem1');
    queue.add('elem2');
    queue.add('elem3');

    expect(queue.remove()).toBe('elem1');
    expect(queue.remove()).toBe('elem2');
    expect(queue.remove()).toBe('elem3');
  });
});
