import ErrorCheck from '../../../src/modules/ErrorCheck';

const LOTTO_PRICE = 1000;
const ERROR_FORMAT = '[ERROR]';

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
