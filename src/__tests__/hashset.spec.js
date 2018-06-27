const HashSet = require('../hashset');

describe('HashSet', () => {
  it('starts empty', () => {
    const set = new HashSet();
    expect(set.size()).toEqual(0);
  });

  it('initializes with values', () => {
    const set = new HashSet(['a', 'b', 'c']);

    expect(set.values().sort()).toEqual(['a', 'b', 'c']);
  });

  it('adds elements', () => {
    const set = new HashSet();

    expect(set.add('a')).toBe(true);
    expect(set.values()).toEqual(['a']);
  });

  it('doesnt add duplicates', () => {
    const set = new HashSet();
    set.add('a');

    expect(set.add('a')).toBe(false);
    expect(set.values()).toEqual(['a']);
  });

  it('has element', () => {
    const set = new HashSet(['a']);

    expect(set.has('a')).toBe(true);
  });

  it('lists elements', () => {
    const set = new HashSet(['a', 'b', 'c']);

    expect(set.values().sort()).toEqual(['a', 'b', 'c']);
  });

  it('remove element', () => {
    const set = new HashSet(['a']);
    set.remove('a');

    expect(set.has('a')).toBe(false);

    expect(set.size()).toEqual(0);
  });

  it('doesnt remove unknown element', () => {
    const set = new HashSet(['a']);
    set.remove('a');

    expect(set.remove('a')).toBe(false);
    expect(set.size()).toEqual(0);
  });

  it('clears out', () => {
    const set = new HashSet(['a']);
    set.clear();

    expect(set.size()).toBe(0);
  });
});
