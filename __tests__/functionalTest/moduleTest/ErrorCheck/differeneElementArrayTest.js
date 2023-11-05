import ErrorCheck from '../../../../src/functinoal/modules/ErrorCheck';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER } = CONSTANTS;

test.each([
  [[1, 2, 3, 4, 5, 6], false],
  [[1, 8, 9, 7, 6, 5], false],
  [[1, 8, 9, 7, 6, 1], true],
  [[1, 1, 1, 1, 1, 1], true],
])('differentElementArray()', (input, isThrowing) => {
  const targetFunction = () => ErrorCheck.differentElementArray(input);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_HEADER);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
