import isDivisibleBy from './index.js';

describe('Name of the group', () => {
  test.each([
    { input: 1000, expected: true },
    { input: 10000, expected: true },
    { input: 5000, expected: true },
  ])('1000단위로 나누어 떨어지면 true 리턴', ({ input, expected }) => {
    expect(isDivisibleBy(input)).toBe(expected);
  });

  test.each([
    { input: 100, expected: false },
    { input: 10, expected: false },
    { input: 1001, expected: false },
    { input: 0, expected: false },
  ])('1000단위로 나누어 떨어지지 않으면 false 리턴', ({ input, expected }) => {
    expect(isDivisibleBy(input)).toBe(expected);
  });
});
