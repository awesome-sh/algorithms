const HashSet = require('../hashset');

describe('HashSet', () => {
  let hashSet;

  beforeEach(() => {
    hashSet = new HashSet();
  });

  it('starts empty', () => {
    expect(hashSet.size()).toEqual(0);
  });

  it('add values', () => {
    hashSet.add('value1');
    hashSet.add('value2');
    hashSet.add('value3');

    expect(hashSet.has('value1')).toBe(true);
    expect(hashSet.has('value2')).toBe(true);
    expect(hashSet.has('value3')).toBe(true);
    expect(hashSet.size()).toEqual(3);
  });

  it('lists values', () => {
    hashSet.add('value1');
    hashSet.add('value2');
    hashSet.add('value3');

    expect(hashSet.values().sort()).toEqual(['value1', 'value2', 'value3']);
  });

  it('remove key', () => {
    hashSet.add('key1');
    hashSet.remove('key1');

    expect(hashSet.has('key1')).toBe(false);
    expect(hashSet.size()).toEqual(0);
  });

  it('has key', () => {
    hashSet.add('key1');

    expect(hashSet.has('key1')).toBe(true);
  });
});
