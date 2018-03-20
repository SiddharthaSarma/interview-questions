const greatestCommonDivisor = require('./index');

describe('Testing the Greatest common divisor solution', () => {
  it('should give the greatest common divisor output as 7', () => {
    expect(greatestCommonDivisor(14, 21)).toBe(7);
  });

  it('should give the greatest common divisor output as 1', () => {
    expect(greatestCommonDivisor(2, 3)).toBe(1);
  });
});
