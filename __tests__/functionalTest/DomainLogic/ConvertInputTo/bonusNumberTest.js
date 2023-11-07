import { Console } from '@woowacourse/mission-utils';
import ConvertInputTo from '../../../../src/functinoal/modules/ConvertInputTo';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER, LOTTO_NUMBER_UPPER, MISS_STATE, HIT_STATE } = CONSTANTS;

const mockBoard = winningNumbers => {
  const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
  winningNumbers.forEach(number => (board[number] = HIT_STATE));

  return Object.freeze(board);
};

const mockQuestions = inputs => {
  let nowIndex = 0;
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs[nowIndex++];

    return Promise.resolve(input);
  });
};

describe('bonusNumber()', () => {
  test.each([
    [['1'], mockBoard([40, 41, 42, 43, 44, 45]), 1],
    [['37'], mockBoard([10, 15, 20, 25, 30, 35]), 37],
    [['10'], mockBoard([1, 2, 3, 4, 5, 6]), 10],
  ])('정상작동', async (input, board, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const bonusNumber = await ConvertInputTo.bonusNumber(board);

    //then
    expect(bonusNumber).toBe(expectedValue);
  });

  test.each([
    [['51', '40', '31'], mockBoard([40, 41, 42, 43, 44, 45]), 31],
    [['0', '48', '30'], mockBoard([40, 41, 42, 43, 44, 45]), 30],
    [['십', '', '10'], mockBoard([40, 41, 42, 43, 44, 45]), 10],
  ])('예외처리', async (input, mockBoard, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const bonusNumber = await ConvertInputTo.bonusNumber(mockBoard);

    expect(bonusNumber).toBe(expectedValue);
  });
});
