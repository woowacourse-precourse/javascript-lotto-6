import ConvertInputTo from '../../../src/modules/ConvertInputTo';
import { Console } from '@woowacourse/mission-utils';

const ERROR_FORMAT = '[ERROR]';

const mockQuestions = inputs => {
  let nowIndex = 0;
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs[nowIndex++];

    return Promise.resolve(input);
  });
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
    [['1,2,3,4,5']],
    [['1,2,3,4,5']],
    [['1,2,3,4,5,6,7']],
    [['0,1,2,3,4,5,6']],
    [['46,45,44,43,42,41']],
    [['1,1,1,1,1,1']],
    [[',,,,,']],
  ])('예외처리', async input => {
    //given
    mockQuestions(input);

    //then
    await expect(ConvertInputTo.winningNumbersArray()).rejects.toThrow(
      ERROR_FORMAT
    );
  });
});
