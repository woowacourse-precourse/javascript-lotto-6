import ErrorCheck from '../../../../src/functinoal/modules/ErrorCheck';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER } = CONSTANTS;

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
  if (isThrowing) expect(targetFunction).toThrow(ERROR_HEADER);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
