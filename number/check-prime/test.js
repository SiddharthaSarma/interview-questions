const checkPrime = require('./index');

describe('Testing whether the number is prime or not', () => {
  it('should return the number is prime', () => {
    expect(checkPrime(139)).toBe(true);
  });

  it('should return the number is not prime', () => {
    expect(checkPrime(44)).toBe(false);
  });
});
