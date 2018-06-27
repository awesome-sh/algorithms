const HashMap = require('../hashmap');

describe('dict', () => {
  let dict;

  beforeEach(() => {
    dict = new HashMap();
  });

  it('starts empty', () => {
    expect(dict.size()).toEqual(0);
  });

  it('add key-values', () => {
    dict.set('key1', true);
    dict.set('key2', 2);
    dict.set('key3', 'value3');

    expect(dict.get('key1')).toBe(true);
    expect(dict.get('key2')).toBe(2);
    expect(dict.get('key3')).toBe('value3');
  });

  it('returns undefined on invalid keys', () => {
    dict.set('key1', true);

    expect(dict.get(null)).toBeUndefined();
  });

  it('lists key names', () => {
    dict.set('key1', 1);
    dict.set('key2', 2);
    dict.set('key3', 3);

    expect(dict.keys().sort()).toEqual(['key1', 'key2', 'key3']);
  });

  it('lists values', () => {
    dict.set('key1', 1);
    dict.set('key2', 2);
    dict.set('key3', 3);

    expect(dict.values().sort()).toEqual([1, 2, 3]);
  });

  it('remove key', () => {
    dict.set('key1', true);

    expect(dict.remove('key1')).toBe(true);
    expect(dict.get('key1')).toBeUndefined();
  });

  it('doesnt remove unknown key', () => {
    dict.set('key1', true);

    expect(dict.remove('key2')).toBe(false);
  });

  it('expands when bucket is full', () => {
    dict = new HashMap(2);

    expect(dict.getBucketSize()).toBe(2);

    dict.set('key1', 1);
    dict.set('key2', 2);
    dict.set('key3', 3);

    expect(dict.getBucketSize()).toBe(4);
  });
});
