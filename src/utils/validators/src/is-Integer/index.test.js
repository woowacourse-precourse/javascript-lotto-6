import isInteger from './index.js';

describe('isInteger', () => {
  test.each([
    { input: 1.1, expected: false },
    { input: 43.33, expected: false },
    { input: 0.1, expected: false },
    { input: '1.1', expected: false },
  ])('정수가 아니면 %expected 를 반환합니다.', ({ input, expected }) => {
    expect(isInteger(input)).toBe(expected);
  });

  test.each([
    { input: 5, expected: true },
    { input: '34', expected: true },
  ])('정수이면 %expected 를 반환합니다.', ({ input, expected }) => {
    expect(isInteger(input)).toBe(expected);
  });
});
