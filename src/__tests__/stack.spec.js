const Stack = require('../stack');

describe('Stack', () => {
  it('starts empty', () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('starts with elements', () => {
    const stack = new Stack(['elem1', 'elem2']);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  it('adds element', () => {
    const stack = new Stack();
    stack.push('elem1');

    expect(stack.size()).toBe(1);
  });

  it('removes element', () => {
    const stack = new Stack(['elem1']);

    expect(stack.pop()).toBe('elem1');
    expect(stack.size()).toBe(0);
  });

  it('removes element in LIFO way', () => {
    const stack = new Stack();

    stack.push('elem1');
    stack.push('elem2');
    stack.push('elem3');

    expect(stack.pop()).toBe('elem3');
    expect(stack.pop()).toBe('elem2');
    expect(stack.pop()).toBe('elem1');
  });
});
