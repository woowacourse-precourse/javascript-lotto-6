import ErrorCheck from '../../../../src/functinoal/modules/ErrorCheck';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER } = CONSTANTS;

test.each([
  ['5', false],
  ['15', false],
  ['', true],
  ['true', true],
  [' ', true],
  ['+', true],
  ['1.1', true],
  ['-10', true],
  ['46', true],
  ['0', true],
])('lottoNumberString()', (input, isThrowing) => {
  const targetFunction = () => ErrorCheck.lottoNumber(input);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_HEADER);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
