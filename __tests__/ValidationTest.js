import { MissionUtils } from '@woowacourse/mission-utils';
import { getInputPurchasingMoney } from '../src/util/Utils';
import { ERROR_MESSAGES } from '../src/constant/Constants';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 구매 금액 입력 테스트', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });
  test('구매 금액이 로또 가격으로 나눴을 때 나머지가 나오면 에러', async () => {
    const input = ['1010', '1000'];
    mockQuestions(input);

    await getInputPurchasingMoney();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.divisibleByLottoPrice),
    );
  });
});
