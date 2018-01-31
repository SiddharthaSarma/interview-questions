const findKFrequentElement = require('./index');

describe('Test cases for the finding k frequent elements in an array', () => {
  test('it should return false if the input is not an array', () => {
    expect(findKFrequentElement({}, 2)).toEqual(false);
  });

  test('it should return the elements properly', () => {
    expect(findKFrequentElement([1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(
      findKFrequentElement(
        [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
        3
      )
    ).toEqual([6, 3, 5]);
  });
});