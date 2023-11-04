import isEmptyString from './index.js';

describe('isBlank', () => {
  test.each([
    { input: '', expected: true },
    { input: ' ', expected: true },
  ])('공백을 입력했을 때 true 리턴', ({ input, expected }) => {
    expect(isEmptyString(input)).toBe(expected);
  });

  test('공백이 아닐 때 false 리턴', () => {
    // given
    const input = '5000';

    // when
    // then
    expect(isEmptyString(input)).toBe(false);
  });
});
