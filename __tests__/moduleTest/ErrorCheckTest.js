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
    [[1, 0, 4], false],
    [[1, 1, 1], false],
    [[9, 1, 9], false],
    [[1, 1, 45], false],
    [[45, 1, 45], false],
    [[0, 1, 45], true],
    [[46, 1, 45], true],
    [[2, 1, 1], true],
  ])('numberInRange()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.numberInRange(...input);
    if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], false],
    [[1, 8, 9, 7, 6, 5], false],
    [[1, 8, 9, 7, 6, 1], true],
    [[1, 1, 1, 1, 1, 1], true],
  ])('differentElementArray()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.differentElementArray(input);
    if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
