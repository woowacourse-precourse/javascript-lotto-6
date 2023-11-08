import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGameController from '../../src/controllers/LottoGameController';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoGameController-LottoService 통합 테스트', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('주어진 입력에 대해서 정확한 결과를 반환하고 출력해야 한다.', () => {
    it('1등 : 6개 일치', async () => {
      const mockGeneratedNumbers = [
        [5, 6, 1, 2, 3, 4],
        [3, 5, 11, 16, 32, 38],
      ];
      mockRandoms(mockGeneratedNumbers);
      mockQuestions(['2000', '3, 5, 11, 16, 32, 38', '7']);

      const lottoGameController = new LottoGameController();
      await lottoGameController.executeLottoGame();

      const logs = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[3, 5, 11, 16, 32, 38]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 1개',
        `총 수익률은 100,000,000.0%입니다.`,
      ];

      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    it('2등 : 5개 일치, 보너스 번호 일치', async () => {
      const mockGeneratedNumbers = [
        [1, 2, 3, 4, 5, 6],
        [3, 7, 11, 16, 32, 38],
      ];
      mockRandoms(mockGeneratedNumbers);
      mockQuestions(['2000', '3, 5, 11, 16, 32, 38', '7']);

      const lottoGameController = new LottoGameController();
      await lottoGameController.executeLottoGame();

      const logs = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[3, 7, 11, 16, 32, 38]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 0개',
        `총 수익률은 1,500,000.0%입니다.`,
      ];

      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    it('3등 : 5개 일치, 보너스 번호 불일치', async () => {
      const mockGeneratedNumbers = [
        [1, 2, 3, 4, 5, 6],
        [3, 5, 11, 16, 32, 45],
      ];
      mockRandoms(mockGeneratedNumbers);
      mockQuestions(['2000', '3, 5, 11, 16, 32, 38', '7']);

      const lottoGameController = new LottoGameController();
      await lottoGameController.executeLottoGame();

      const logs = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[3, 5, 11, 16, 32, 45]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 1개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        `총 수익률은 75,000.0%입니다.`,
      ];

      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    it('4등 : 4개 일치, 보너스 번호 무관 (일치하는 케이스로 테스트)', async () => {
      const mockGeneratedNumbers = [
        [1, 2, 3, 4, 5, 6],
        [3, 7, 11, 16, 32, 45],
      ];
      mockRandoms(mockGeneratedNumbers);
      mockQuestions(['2000', '3, 5, 11, 16, 32, 38', '7']);

      const lottoGameController = new LottoGameController();
      await lottoGameController.executeLottoGame();

      const logs = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[3, 7, 11, 16, 32, 45]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        `총 수익률은 2,500.0%입니다.`,
      ];

      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    it('5등 : 3개 일치, 보너스 번호 무관 (일치하는 케이스로 테스트)', async () => {
      const mockGeneratedNumbers = [
        [1, 2, 3, 4, 5, 6],
        [3, 7, 11, 16, 44, 45],
      ];
      mockRandoms(mockGeneratedNumbers);
      mockQuestions(['2000', '3, 5, 11, 16, 32, 38', '7']);

      const lottoGameController = new LottoGameController();
      await lottoGameController.executeLottoGame();

      const logs = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6]',
        '[3, 7, 11, 16, 44, 45]',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        `총 수익률은 250.0%입니다.`,
      ];

      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
