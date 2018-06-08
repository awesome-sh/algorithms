const HashMap = require('../hashmap');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  it('starts empty', () => {
    expect(hashMap.size()).toEqual(0);
  });

  it('add key-values', () => {
    hashMap.set('key1', true);
    hashMap.set('key2', 2);
    hashMap.set('key3', 'value3');

    expect(hashMap.get('key1')).toBe(true);
    expect(hashMap.get('key2')).toBe(2);
    expect(hashMap.get('key3')).toBe('value3');
  });

  it('lists key names', () => {
    hashMap.set('key1', 1);
    hashMap.set('key2', 2);
    hashMap.set('key3', 3);

    expect(hashMap.keys().sort()).toEqual(['key1', 'key2', 'key3']);
  });

  it('lists values', () => {
    hashMap.set('key1', 1);
    hashMap.set('key2', 2);
    hashMap.set('key3', 3);

    expect(hashMap.values().sort()).toEqual([1, 2, 3]);
  });

  it('remove key', () => {
    hashMap.set('key1', true);
    hashMap.remove('key1');

    expect(hashMap.get('key1')).toBeUndefined();
  });

  it('has key', () => {
    hashMap.set('key1', true);

    expect(hashMap.has('key1')).toBe(true);
  });
});
