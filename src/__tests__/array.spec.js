const {clone, fill, flatten, flattenIter, leftRotation, ranking, reverse, swap} = require('../array');

describe('Array', () => {
  it('clones an array', () => {
    const array = [1, 2, 3];
    const cloned = clone(array);

    expect(cloned).not.toBe(array);
  });

  it('created a filled array', () => {
    expect(fill(3, 4)).toEqual([4, 4, 4]);
  });

  it('reverses an array', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).toEqual([3, 2, 1]);
  });

  it('swaps two items in an array', () => {
    const array = [1, 2, 3, 4];
    swap(array, 1, 3);
    expect(array).toEqual([1, 4, 3, 2]);
  });

  it('created a ranking', () => {
    expect(ranking([79, 5, 18, 5, 32, 1, 16, 1, 82, 13])).toEqual([2, 7, 4, 7, 3, 9, 5, 9, 1, 6]);
  });

  it('rotates array "n" times', () => {
    expect(leftRotation([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3]);
  });

  it('flattens recursively an array', () => {
    const array = [1, {a: [2, [3]]}, 4, [5, [6]], [[7], 8, 9], 10, 'eleven'];
    const expected = [1, {a: [2, [3]]}, 4, 5, 6, 7, 8, 9, 10, 'eleven'];

    expect(flatten(array)).toEqual(expected);
  });

  it('flattens iteratively an array', () => {
    const array = [1, {a: [2, [3]]}, 4, [5, [6]], [[7], 8, 9], 10, 'eleven'];
    const expected = [1, {a: [2, [3]]}, 4, 5, 6, 7, 8, 9, 10, 'eleven'];

    expect(flattenIter(array)).toEqual(expected);
    expect(array).toEqual([]);
  });
});
