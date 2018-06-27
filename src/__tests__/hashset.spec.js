const HashSet = require('../hashset');

describe('HashSet', () => {
  let hashSet;

  beforeEach(() => {
    hashSet = new HashSet();
  });

  it('starts empty', () => {
    expect(hashSet.size()).toEqual(0);
  });

  it('adds elements', () => {
    hashSet.add('a');
    hashSet.add('b');
    hashSet.add('c');

    expect(hashSet.has('a')).toBe(true);
    expect(hashSet.has('b')).toBe(true);
    expect(hashSet.has('c')).toBe(true);

    expect(hashSet.size()).toEqual(3);
  });

  it('lists elements', () => {
    hashSet.add('a');
    hashSet.add('b');
    hashSet.add('c');

    expect(hashSet.values().sort()).toEqual(['a', 'b', 'c']);
  });

  it('remove element', () => {
    hashSet.add('a');
    hashSet.remove('a');

    expect(hashSet.has('a')).toBe(false);

    expect(hashSet.size()).toEqual(0);
  });

  it('has element', () => {
    hashSet.add('a');

    expect(hashSet.has('a')).toBe(true);
  });
});
