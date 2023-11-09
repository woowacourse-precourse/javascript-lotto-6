/* eslint-disable max-lines-per-function */
describe('배열 테스트', () => {
  test.each([
    {
      input: [8, 21, 23, 41, 42, 43],
      expected: '[8, 21, 23, 41, 42, 43]',
    },
    {
      input: [3, 5, 11, 16, 32, 38],
      expected: '[3, 5, 11, 16, 32, 38]',
    },
    {
      input: [7, 11, 16, 35, 36, 44],
      expected: '[7, 11, 16, 35, 36, 44]',
    },
    {
      input: [1, 8, 11, 31, 41, 42],
      expected: '[1, 8, 11, 31, 41, 42]',
    },
    {
      input: [13, 14, 16, 38, 42, 45],
      expected: '[13, 14, 16, 38, 42, 45]',
    },
    {
      input: [7, 11, 30, 40, 42, 43],
      expected: '[7, 11, 30, 40, 42, 43]',
    },
    {
      input: [2, 13, 22, 32, 38, 45],
      expected: '[2, 13, 22, 32, 38, 45]',
    },
    {
      input: [1, 3, 5, 14, 22, 45],
      expected: '[1, 3, 5, 14, 22, 45]',
    },
  ])('join 메서드로 배열을 문자열로 표현하기', ({ input, expected }) => {
    const START_SQUARE_BRACKET = '[';
    const CLOSE_SQUARE_BRACKET = ']';
    const COMMA_AND_SPACE = ', ';
    expect(START_SQUARE_BRACKET + input.join(COMMA_AND_SPACE) + CLOSE_SQUARE_BRACKET).toBe(expected);
  });
});
