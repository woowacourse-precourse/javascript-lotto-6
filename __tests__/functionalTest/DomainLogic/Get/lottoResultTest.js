import Get from '../../../../src/functinoal/modules/Get';
import Lotto from '../../../../src/Lotto';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { MISS_STATE, BONUS_STATE, HIT_STATE, LOTTO_NUMBER_UPPER } = CONSTANTS;

const mockBoard = (winningNumbers, bonusNumber) => {
  const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
  winningNumbers.forEach(number => (board[number] = HIT_STATE));
  board[bonusNumber] = BONUS_STATE;

  return Object.freeze(board);
};

test.each([
  [
    [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([2, 3, 4, 5, 6, 7]),
      new Lotto([10, 11, 12, 13, 14, 15]),
      new Lotto([3, 4, 5, 6, 7, 8]),
      new Lotto([40, 41, 42, 43, 44, 45]),
    ],
    mockBoard([1, 2, 3, 4, 5, 6], 7),
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  ],
  [
    [
      new Lotto([1, 2, 3, 4, 7, 8]),
      new Lotto([10, 11, 12, 13, 14, 15]),
      new Lotto([1, 10, 20, 30, 40, 45]),
    ],
    mockBoard([10, 15, 20, 25, 30, 35], 40),
    Object.freeze([1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]),
  ],
])('lottoResult()', (lottoArray, lottoBoard, expectedValue) => {
  //when
  const lottoResult = Get.lottoResult(lottoArray, lottoBoard);

  //then
  expect(lottoResult).toEqual(expectedValue);
});
