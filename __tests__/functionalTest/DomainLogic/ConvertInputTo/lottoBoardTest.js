import { Console } from '@woowacourse/mission-utils';
import ConvertInputTo from '../../../../src/functinoal/modules/ConvertInputTo';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { MISS_STATE, BONUS_STATE, HIT_STATE, LOTTO_NUMBER_UPPER } = CONSTANTS;

const mockQuestions = inputs => {
  let nowIndex = 0;
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs[nowIndex++];

    return Promise.resolve(input);
  });
};

const mockBoard = (winningNumbers, bonusNumber) => {
  const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
  winningNumbers.forEach(number => (board[number] = HIT_STATE));
  board[bonusNumber] = BONUS_STATE;

  return Object.freeze(board);
};

describe('lottoBoard()', () => {
  test.each([
    [['1,2,3,4,5,6', '10'], mockBoard([1, 2, 3, 4, 5, 6], 10)],
    [['4,5,6,7,8,9', '20'], mockBoard([4, 5, 6, 7, 8, 9], 20)],
  ])('정상작동', async (input, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const board = await ConvertInputTo.lottoBoard();
    //then
    expect(board).toEqual(expectedValue);
  });

  test.each([
    [
      ['1,2,3,4,5', '10', '1,2,3,4,5,6', '10'],
      mockBoard([1, 2, 3, 4, 5, 6], 10),
    ],
    [['1,2,3,4,5,6,7', '1,2,3,4,5,6', '12'], mockBoard([1, 2, 3, 4, 5, 6], 12)],
    [['1,2,3,4,5,6', '4', '6', '40'], mockBoard([1, 2, 3, 4, 5, 6], 40)],
    [['0,1,2,3,4,5,6', '1,2,3,4,5,6', '12'], mockBoard([1, 2, 3, 4, 5, 6], 12)],
    [['1,1,1,1,1,1', '1,2,3,4,5,6', '12'], mockBoard([1, 2, 3, 4, 5, 6], 12)],
    [
      [',,,,,', ',', '1,2,3,4,5,6', '433', '43'],

      mockBoard([1, 2, 3, 4, 5, 6], 43),
    ],
  ])('예외처리', async (input, expectedValue) => {
    //given
    mockQuestions(input);
    //when
    const board = await ConvertInputTo.lottoBoard();

    //then
    expect(board).toEqual(expectedValue);
  });
});
