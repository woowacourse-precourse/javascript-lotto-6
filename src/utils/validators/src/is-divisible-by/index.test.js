import isDivisibleBy from './index.js';

describe('isDivisibleBy', () => {
  test.each([
    ['5000', 1000, true],
    ['10000', 1000, true],
  ])('특정 숫자로 나누어 떨어지면 true를 리턴한다.', (input, divisor, expected) => {
    expect(isDivisibleBy(input, divisor)).toBe(expected);
  });

  test.each([
    ['900', 1000, false],
    ['1001', 1000, false],
    ['0', 1000, false],
  ])('특정 숫자로 나누어 떨어지지 않으면 false를 리턴한다.', (input, divisor, expected) => {
    expect(isDivisibleBy(input, divisor)).toBe(expected);
  });
});
