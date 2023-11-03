import ErrorCheck from '../../../src/modules/ErrorCheck';

const LOTTO_PRICE = 1000;
const ERROR_FORMAT = '[ERROR]';

test.each([
  [1000, false],
  [40000, false],
  [10000, false],
  [2001, true],
  [9999, true],
  [123, true],
  [1, true],
  [0, true],
])('multiplesInPositive', (input, isThrowing) => {
  const targetFunction = () =>
    ErrorCheck.multiplesInPositive(input, LOTTO_PRICE);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
