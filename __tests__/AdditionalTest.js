import { MissionUtils } from '@woowacourse/mission-utils';
import LottoController from '../src/controller/LottoController.js';
import {
  ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE,
  ERRMSG_MONEY_NOT_MONEY,
  ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER,
  ERRMSG_LOTTO_NOT_VALID_LOTTO_LENGTH,
} from '../src/constants/ErrorMessage.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('추가 테스트', () => {
  const lottoController = new LottoController();

  test('로또 구매 테스트', async () => {
    MissionUtils.Console.print = jest.fn();
    mockQuestions(['1000j', '8500', '3000']);

    await lottoController.buyLotto();

    const logs = [
      ERRMSG_MONEY_NOT_MONEY,
      ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE,
      '3개',
    ];

    logs.forEach((log, count) => {
      expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(
        count + 1,
        expect.stringContaining(log),
      );
    });
  });

  test('로또 발급 테스트', async () => {
    MissionUtils.Console.print = jest.fn();
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    lottoController.writeLotto();

    const logs = [
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
    ];

    logs.forEach((log) => {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        expect.stringContaining(log),
      );
    });
  });

  test('당첨 로또 생성', async () => {
    MissionUtils.Console.print = jest.fn();
    mockQuestions([
      '1,2,3,4,5',
      '6',
      '1,2,2,3,4,5',
      '6',
      '1,2,3,4,5,6',
      '6',
      '3, 5, 11, 8, 21, 23',
      '32',
    ]);

    await lottoController.makeWinningLotto();

    const logs = [
      ERRMSG_LOTTO_NOT_VALID_LOTTO_LENGTH,
      ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER,
      ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER,
    ];

    logs.forEach((log, count) => {
      expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(
        count + 1,
        expect.stringContaining(log),
      );
    });
  });

  test('결과 계산', () => {
    MissionUtils.Console.print = jest.fn();
    lottoController.printResult();

    const logs = [
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '333.3%',
    ];

    logs.forEach((log) => {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        expect.stringContaining(log),
      );
    });
  });
});
