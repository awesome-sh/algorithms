const LinkedList = require('../linked-list');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('starts empty', () => {
    expect(list.values()).toEqual([]);
  });

  it('add one element', () => {
    list.append('a');

    expect(list.values()).toEqual(['a']);
  });

  it('add multiple elements', () => {
    list.append('a');
    list.append('b');

    expect(list.values()).toEqual(['a', 'b']);
  });

  it('remove one element', () => {
    list.append('a');
    list.append('b');
    list.remove('a');

    expect(list.values()).toEqual(['b']);
  });
})
;
