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

describe('purchasePrice()', () => {
  test.each([
    [['1000'], 1000],
    [['50000'], 50000],
    [['320000'], 320000],
    [['50000'], 50000],
  ])('정상작동', async (input, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const result = await ConvertInputTo.purchasePrice();

    //then
    expect(result).toBe(expectedValue);
  });

  test.each([[['10']], [['1001']], [['']], [['  ']]])(
    '예외처리',
    async input => {
      //given
      mockQuestions(input);

      //then
      await expect(ConvertInputTo.purchasePrice()).rejects.toThrow(
        ERROR_FORMAT
      );
    }
  );
});
