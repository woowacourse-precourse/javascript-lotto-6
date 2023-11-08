import isNumberValidScope from './index.js';

describe('isNumberInValidScope', () => {
  test.each([
    { input: 5, expected: true },
    { input: 42, expected: true },
  ])('숫자가 유효한 범위내의 숫자라면 true 리턴', ({ input, expected }) => {
    expect(isNumberValidScope(input)).toBe(expected);
  });

  test.each([
    { input: 0, expected: false },
    { input: 46, expected: false },
  ])('숫자가 유효한 범위에 해당되지 않는다면 false 리턴', ({ input, expected }) => {
    expect(isNumberValidScope(input)).toBe(expected);
  });
});
