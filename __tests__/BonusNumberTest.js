import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from '../src/constants/ErrorMessage';
import Convert from '../src/utils/Convert';
import Validate from '../src/utils/Validate';
import LottoController from '../src/controllers/LottoController';

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

describe('보너스 번호 입력 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const number = Convert.convertToNumber('3f');
      Validate.isNumber(number);
    }).toThrow(ERROR_MESSAGE.INVALID_NUMBER);
  });

  test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const number = Convert.convertToNumber('3.5');
      Validate.isInteger(number);
    }).toThrow(ERROR_MESSAGE.INVALID_INTEGER);
  });

  test('보너스 번호가 음수면 예외가 발생한다.', () => {
    expect(() => {
      const number = Convert.convertToNumber('-3');
      Validate.isPositive(number);
    }).toThrow(ERROR_MESSAGE.INVALID_POSITIVE);
  });

  test('보너스 번호가 1부터 45 사이의 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      const number = Convert.convertToNumber('333');
      Validate.isNumberInRange(number);
    }).toThrow(ERROR_MESSAGE.INVALID_RANGE);
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const number = Convert.convertToNumber('3');
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      Validate.isDuplicateBonusNumber(winningNumbers, number);
    }).toThrow(ERROR_MESSAGE.INVALID_DUPLICATE_BONUS_NUMBER);
  });

  test('예외가 발생하면 정상적인 값을 받을 때까지 재입력을 요구한다. ', async () => {
    // given
    const logSpy = getLogSpy();
    const inputs = ['3f', '3.5', '-3', '333', '5', '7'];
    const outputs = [
      ERROR_MESSAGE.INVALID_NUMBER,
      ERROR_MESSAGE.INVALID_INTEGER,
      ERROR_MESSAGE.INVALID_POSITIVE,
      ERROR_MESSAGE.INVALID_RANGE,
      ERROR_MESSAGE.INVALID_DUPLICATE_BONUS_NUMBER,
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    mockQuestions(inputs);

    // when
    const lottoGame = new LottoController();
    await lottoGame.getBonusNumbers(winningNumbers);

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
