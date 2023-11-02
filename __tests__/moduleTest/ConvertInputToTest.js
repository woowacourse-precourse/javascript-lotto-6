import ConvertInputTo from '../../src/modules/ConvertInputTo';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('ConvertInputTo 테스트', () => {
  test.each([
    [['123'], 123],
    [['321'], 321],
    [['06'], 6],
  ])('purchasePrice()', async (input, expectedValue) => {
    //given
    mockQuestions(input);

    //when
    const result = await ConvertInputTo.purchasePrice();

    //then
    expect(result).toBe(expectedValue);
  });
});
