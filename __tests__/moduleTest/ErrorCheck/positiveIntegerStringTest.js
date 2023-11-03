import ErrorCheck from '../../../src/modules/ErrorCheck.js';

const ERROR_FORMAT = '[ERROR]';

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
