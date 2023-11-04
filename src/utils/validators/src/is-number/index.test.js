import isNumber from './index.js';

describe('isNumber', () => {
  test.each([
    { input: 'hi23', expected: false },
    { input: '%$#23', expected: false },
  ])('숫자가 아닌 문자가 포함되어있을 때 $expected 리턴', ({ input, expected }) => {
    expect(isNumber(input)).toBe(expected);
  });

  test('숫자만 있다면 true 리턴', () => {
    // given
    const input = '234';

    // when
    // then
    expect(isNumber(input)).toBe(true);
  });
});
