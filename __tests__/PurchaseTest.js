import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from '../src/constants/ErrorMessage';
import LottoController from '../src/controllers/LottoController';
import Convert from '../src/utils/Convert';
import Validate from '../src/utils/Validate';
import { MESSAGE_PRINT } from '../src/constants/Message';

const mockQuestions = inputs => {
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

describe('사용자의 입력의 유효성 테스트', () => {
  test('로또 구입 금액으로 숫자 이외의 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      const amount = Convert.convertToList('1000a');
      Validate.isNumber(amount);
    }).toThrow(ERROR_MESSAGE.INVALID_NUMBER);
  });

  test('로또 구입 금액으로 정수가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      const amount = Convert.convertToList('1000.23');
      Validate.isInteger(amount);
    }).toThrow(ERROR_MESSAGE.INVALID_INTEGER);
  });

  test('로또 구입 금액으로 음수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      const amount = Convert.convertToList('-1000');
      Validate.isPositive(amount);
    }).toThrow(ERROR_MESSAGE.INVALID_POSITIVE);
  });

  test('로또 구입 금액으로 1000원 단위 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      const amount = Convert.convertToList('1100');
      Validate.isPurchaseUnit(amount);
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
  });

  test('예외가 발생하면 정상적인 값을 받을 때까지 재입력을 요구하고 해당 금액의 로또 개수를 출력한다.', async () => {
    // given
    const logSpy = getLogSpy();
    const inputs = ['1000a', '1000.23', '-1000', '1100', '1000'];
    const outputs = [
      ERROR_MESSAGE.INVALID_NUMBER,
      ERROR_MESSAGE.INVALID_INTEGER,
      ERROR_MESSAGE.INVALID_POSITIVE,
      ERROR_MESSAGE.INVALID_PURCHASE_UNIT,
      `1${MESSAGE_PRINT.LOTTO_COUNT}`,
    ];

    mockQuestions(inputs);

    // when
    const lottoGame = new LottoController();
    await lottoGame.setMyLottoCount();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
