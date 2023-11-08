import {
  ERROR_MESSAGE,
  LOTTO_STATISTICS_MESSAGE,
  MESSAGE,
  REGEX,
} from '../src/utils/constants';
import InputView from '../src/view/InputView';
import OutputView from '../src/view/OutputView';
import { getLogSpy, mockQuestions } from './utils';

describe('InputView', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('구입 금액 입력', () => {
    test('실패 - 빈 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['']);

      await expect(instance.inputAmount()).rejects.toThrow(ERROR_MESSAGE.empty);
    });

    test('실패 - 숫자가 아닌 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['a']);

      await expect(instance.inputAmount()).rejects.toThrow(
        ERROR_MESSAGE.not_number,
      );
    });

    test('성공', async () => {
      const instance = new InputView();

      mockQuestions(['1000']);

      const amount = await instance.inputAmount();

      expect(amount).toBe(1000);
    });
  });

  describe('당첨 번호 입력', () => {
    test('실패 - 빈 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['']);

      await expect(instance.inputWinningNumbers()).rejects.toThrow(
        ERROR_MESSAGE.empty,
      );
    });
    test('실패 - 숫자가 아닌 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['a']);

      await expect(instance.inputWinningNumbers()).rejects.toThrow(
        ERROR_MESSAGE.not_number,
      );
    });
    test('성공', async () => {
      const instance = new InputView();

      mockQuestions(['1,2,3,4,5,6']);

      const winningNumbers = await instance.inputWinningNumbers();

      expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('보너스 번호 입력', () => {
    test('실패 - 빈 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['']);

      await expect(instance.inputBonusNumber()).rejects.toThrow(
        ERROR_MESSAGE.empty,
      );
    });
    test('실패 - 숫자가 아닌 값 입력', async () => {
      const instance = new InputView();

      mockQuestions(['a']);

      await expect(instance.inputBonusNumber()).rejects.toThrow(
        ERROR_MESSAGE.not_number,
      );
    });
    test('성공', async () => {
      const instance = new InputView();

      mockQuestions(['1']);

      const bonusNumber = await instance.inputBonusNumber();

      expect(bonusNumber).toBe(1);
    });
  });
});

describe('OutputView', () => {
  test('사용자가 구매한 로또 번호 출력', () => {
    const logSpy = getLogSpy();

    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
    ];

    const logs = [
      '5개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
      '[13, 14, 15, 16, 17, 18]',
      '[19, 20, 21, 22, 23, 24]',
      '[25, 26, 27, 28, 29, 30]',
    ];

    const instance = new OutputView();

    instance.printUserLottos(lottos);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 통계 출력', () => {
    const logSpy = getLogSpy();

    const result = [5, 4, 3, 2, 1];

    const logs = [
      MESSAGE.statistics,
      `${LOTTO_STATISTICS_MESSAGE[0]}${result[0]}개`,
      `${LOTTO_STATISTICS_MESSAGE[1]}${result[1]}개`,
      `${LOTTO_STATISTICS_MESSAGE[2]}${result[2]}개`,
      `${LOTTO_STATISTICS_MESSAGE[3]}${result[3]}개`,
      `${LOTTO_STATISTICS_MESSAGE[4]}${result[4]}개`,
    ];

    const instance = new OutputView();

    instance.printStatistics(result);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('수익률 출력 - 세 자리수 마다 콤마 출력, 소수점 첫째 자리까지 출력', () => {
    const logSpy = getLogSpy();

    const result = 125912562.512581;

    const log = `총 수익률은 ${result
      .toFixed(1)
      .replace(REGEX.three_digits_comma, REGEX.comma)}%입니다.`;

    const instance = new OutputView();

    instance.printRateOfReturn(result);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
