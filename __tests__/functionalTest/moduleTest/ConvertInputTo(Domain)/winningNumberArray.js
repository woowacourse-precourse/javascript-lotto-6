import { Console } from '@woowacourse/mission-utils';
import ConvertInputTo from '../../../../src/functinoal/modules/ConvertInputTo';

import CONSTANTS from '../../../../src/constants/CONSTANTS';

const { ERROR_HEADER } = CONSTANTS;

const mockQuestions = inputs => {
  let nowIndex = 0;
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs[nowIndex++];

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('winningNumbersArray()', () => {
  test.each([
    [['1,2,3,4,5,6'], [1, 2, 3, 4, 5, 6]],
    [['4,5,6,7,8,9'], [4, 5, 6, 7, 8, 9]],
  ])('정상작동', async (input, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const result = await ConvertInputTo.winningNumbersArray();

    //then
    expect(result).toEqual(expectedValue);
  });

  test.each([
    [
      ['1,2,3,4,5', '1,2,3,4,5,6'],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      ['1,2,3,4,5,', '1,2,3,4,5,6'],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      ['1,2,3,4,5,6,7', '1,2,3,', '1,2,3,4,5,6'],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      ['0,1,2,3,4,5,6', '2,4,6,8,10,12'],
      [2, 4, 6, 8, 10, 12],
    ],
    [
      ['46,45,44,43,42,41', '45,44,43,42,41,40'],
      [45, 44, 43, 42, 41, 40],
    ],
    [
      ['1,1,1,1,1,1', '1,2,3,4,5,6'],
      [1, 2, 3, 4, 5, 6],
    ],
    [
      [',,,,,', '1,2,3,4,5,6'],
      [1, 2, 3, 4, 5, 6],
    ],
  ])('예외처리', async (input, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const winningNumbers = await ConvertInputTo.winningNumbersArray();
    const logSpy = getLogSpy();

    //then
    for (let i = 0; i < logSpy.mock.calls.length - 1; i++) {
      expect(String(logSpy.mock.calls[i][0])).toMatch(ERROR_HEADER);
    }
    expect(winningNumbers).toEqual(expectedValue);
  });
});
