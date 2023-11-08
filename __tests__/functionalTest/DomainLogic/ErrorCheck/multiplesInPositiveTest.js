import ErrorCheck from '../../../../src/functinoal/modules/ErrorCheck';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER, LOTTO_PRICE } = CONSTANTS;

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
  if (isThrowing) expect(targetFunction).toThrow(ERROR_HEADER);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
