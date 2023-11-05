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
    const purchasePrice = await ConvertInputTo.purchasePrice();

    //then
    expect(purchasePrice).toBe(expectedValue);
  });

  test.each([
    [['10', '10000'], 10000],
    [['1001', '10001', '1000'], 1000],
    [['만원', '10000'], 10000],
  ])('예외처리', async (input, expectedValue) => {
    //given
    mockQuestions(input);
    const logSpy = getLogSpy();

    //when
    const purchasePrice = await ConvertInputTo.purchasePrice();

    //then
    for (let i = 0; i < logSpy.mock.calls.length - 1; i++) {
      expect(String(logSpy.mock.calls[i][0])).toMatch(ERROR_HEADER);
    }
    expect(purchasePrice).toBe(expectedValue);
  });
});
