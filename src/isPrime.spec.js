const isPrime = require('./isPrime');

describe('isPrime', () => {
  it('should return false for negative numbers', () => {
    expect(isPrime(-2)).toBe(false);
  });

  it('shoud return false for 0', () => {
    expect(isPrime(0)).toBe(false);
  });

  it('shoud return false for 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('shoud return true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('shoud return false for 4', () => {
    expect(isPrime(4)).toBe(false);
  });

  it('shoud return true for 1009', () => {
    expect(isPrime(1009)).toBe(true);
  });
});
