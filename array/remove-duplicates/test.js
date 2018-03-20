const removeDuplicates = require('./index');

describe('Test the remove duplicated in an array', () => {
  it('should remove the duplicates from the array', () => {
    expect(removeDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1])).toEqual([
      1,
      3,
      5,
      6,
      7,
      8
    ]);
  });
});
