const HashSet = require('../hashset');

describe('HashSet', () => {
  it('starts empty', () => {
    const hashSet = new HashSet();
    expect(hashSet.size()).toEqual(0);
  });

  it('initializes with values', () => {
    const hashSet = new HashSet(['a', 'b', 'c']);

    expect(hashSet.values().sort()).toEqual(['a', 'b', 'c']);
  });

  it('adds elements', () => {
    const hashSet = new HashSet();

    expect(hashSet.add('a')).toBe(true);
    expect(hashSet.values()).toEqual(['a']);
  });

  it('doesnt add duplicates', () => {
    const hashSet = new HashSet();
    hashSet.add('a');

    expect(hashSet.add('a')).toBe(false);
    expect(hashSet.values()).toEqual(['a']);
  });

  it('has element', () => {
    const hashSet = new HashSet(['a']);

    expect(hashSet.has('a')).toBe(true);
  });

  it('lists elements', () => {
    const hashSet = new HashSet(['a', 'b', 'c']);

    expect(hashSet.values().sort()).toEqual(['a', 'b', 'c']);
  });

  it('remove element', () => {
    const hashSet = new HashSet(['a']);
    hashSet.remove('a');

    expect(hashSet.has('a')).toBe(false);

    expect(hashSet.size()).toEqual(0);
  });

  it('doesnt remove unknown element', () => {
    const hashSet = new HashSet(['a']);
    hashSet.remove('a');

    expect(hashSet.remove('a')).toBe(false);
    expect(hashSet.size()).toEqual(0);
  });

  it('clears out', () => {
    const hashSet = new HashSet(['a']);
    hashSet.clear();

    expect(hashSet.size()).toBe(0);
  });
});
