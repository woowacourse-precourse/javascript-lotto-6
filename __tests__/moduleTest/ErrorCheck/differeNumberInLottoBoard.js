import ErrorCheck from '../../../src/modules/ErrorCheck.js';

const ERROR_FORMAT = '[ERROR]';
const LOTTO_UPPER_NUMBER = 45;
const MISS_STATE = 0;
const HIT_STATE = 1;

const boardMaker = winningNumbers => {
  const board = new Array(LOTTO_UPPER_NUMBER).fill(MISS_STATE);
  winningNumbers.forEach(number => (board[number] = HIT_STATE));

  return Object.freeze(board);
};

test.each([
  [[8, boardMaker([1, 2, 3, 4, 5, 6])], false],
  [[15, boardMaker([1, 2, 3, 4, 5, 6])], false],
  [[6, boardMaker([1, 2, 3, 4, 5, 6])], true],
  [[10, boardMaker([7, 8, 9, 10, 11, 12])], true],
])('differeNumberInLottoBoard()', (input, isThrowing) => {
  const targetFunction = () => ErrorCheck.differeNumberInLottoBoard(...input);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_FORMAT);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
