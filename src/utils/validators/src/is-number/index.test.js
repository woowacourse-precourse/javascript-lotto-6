import isNumber from './index.js';

describe('isNumber', () => {
  test.each([
    ['로또안삼', false],
    ['오000', false],
    ['%000', false],
  ])('숫자가 아닌 문자가 포함되어있으면 false를 리턴한다.', (input, expected) => {
    expect(isNumber(input)).toBe(expected);
  });

  test('숫자만 있는 문자열이면 true를 리턴한다. ', () => {
    // given
    const input = '5000';

    // when
    // then
    expect(isNumber(input)).toBe(true);
  });
});
