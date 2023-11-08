import isEmptyString from './index.js';

describe('isEmptyString', () => {
  test.each([
    ['', true],
    [' ', true],
  ])('input값이 빈문자열이면 true를 리턴합니다.', (input, expected) => {
    expect(isEmptyString(input)).toBe(expected);
  });

  test('input값이 빈문자열이 아니면 false를 리턴합니다.', () => {
    // given
    const input = '5000';

    // when
    // then
    expect(isEmptyString(input)).toBe(false);
  });
});
