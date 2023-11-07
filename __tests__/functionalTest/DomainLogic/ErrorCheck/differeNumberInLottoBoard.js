import ErrorCheck from '../../../../src/functinoal/modules/ErrorCheck';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER, LOTTO_NUMBER_UPPER, MISS_STATE, HIT_STATE } = CONSTANTS;

const mockBoard = winningNumbers => {
  const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
  winningNumbers.forEach(number => (board[number] = HIT_STATE));

  return Object.freeze(board);
};

test.each([
  [[8, mockBoard([1, 2, 3, 4, 5, 6])], false],
  [[15, mockBoard([1, 2, 3, 4, 5, 6])], false],
  [[6, mockBoard([1, 2, 3, 4, 5, 6])], true],
  [[10, mockBoard([7, 8, 9, 10, 11, 12])], true],
])('differeNumberInLottoBoard()', (input, isThrowing) => {
  const targetFunction = () => ErrorCheck.differeNumberInLottoBoard(...input);
  if (isThrowing) expect(targetFunction).toThrow(ERROR_HEADER);
  if (!isThrowing) expect(targetFunction).not.toThrow();
});
