import ErrorCheck from '../../../src/modules/ErrorCheck.js';

const ERROR_FORMAT = '[ERROR]';

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
