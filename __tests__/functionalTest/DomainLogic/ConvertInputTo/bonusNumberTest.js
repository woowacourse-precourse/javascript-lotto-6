import { Console } from '@woowacourse/mission-utils';

import ConvertInputTo from '../../../../src/functinoal/modules/ConvertInputTo';

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
    [['1'], [40, 41, 42, 43, 44, 45], 1],
    [['37'], [10, 15, 20, 25, 30, 35], 37],
    [['10'], [1, 2, 3, 4, 5, 6], 10],
  ])('정상작동', async (input, winningNumbers, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const bonusNumber = await ConvertInputTo.bonusNumber(winningNumbers);

    //then
    expect(bonusNumber).toBe(expectedValue);
  });

  test.each([
    [['51', '40', '31'], [40, 41, 42, 43, 44, 45], 31],
    [['0', '48', '30'], [40, 41, 42, 43, 44, 45], 30],
    [['십', '', '10'], [40, 41, 42, 43, 44, 45], 10],
  ])('예외처리', async (input, winnningNumbers, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const bonusNumber = await ConvertInputTo.bonusNumber(winnningNumbers);

    expect(bonusNumber).toBe(expectedValue);
  });
});
