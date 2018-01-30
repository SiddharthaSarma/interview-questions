const checkBalancedBraces = require('./index');

describe('Test for the balanced braces', () => {
  test('should return true if the braces are matching', () => {
    expect(checkBalancedBraces('[]')).toEqual(true);
    expect(checkBalancedBraces('[({[]})]')).toEqual(true);
  });
  test('should return false if the braces are not matching', () => {
    expect(checkBalancedBraces('[[[[[)))){{{{{')).toEqual(false);
    expect(checkBalancedBraces(')(')).toEqual(false);
  });
});
