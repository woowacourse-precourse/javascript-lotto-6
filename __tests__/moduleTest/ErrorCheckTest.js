import ErrorCheck from '../../src/modules/ErrorCheck';

const LOTTO_PRICE = 1000;
const ERROR_FORMAT = '[ERROR]';

describe('ErrorCheck 테스트', () => {
  test.each([
    ['123', false],
    ['', true],
    ['true', true],
    [' ', true],
    ['+', true],
    ['1.1', true],
    ['-10', true],
  ])('positiveIntegerString()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.positiveIntegerString(input);
    if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });

  test.each([
    [1000, false],
    [40000, false],
    [10000, false],
    [2001, true],
    [9999, true],
    [123, true],
    [1, true],
  ])('multiplesInPositive', (input, isThrowing) => {
    const targetFunction = () =>
      ErrorCheck.multiplesInPositive(input, LOTTO_PRICE);
    if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });

  test.each([
    [['100000', 6], false],
    [['1,2,3,4,5,6'.split(','), 6], false],
    [[[2, 4, 6, 8, 10], 5], false],
    [['123', 2], true],
    [['1,2,3,4'.split(','), 6], true],
    [[[2, 4, 5, 6, 1], 3], true],
  ])('arrayLikeLength()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.arrayLikeLength(...input);
    if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
