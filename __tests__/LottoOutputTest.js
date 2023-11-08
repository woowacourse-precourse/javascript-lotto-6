import { MissionUtils } from '@woowacourse/mission-utils';
import LottoOutput from '../src/View/LottoOutput';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
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

describe('LottoOutput.displayLottoTickets 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매한 로또 티켓들을 올바르게 출력한다.', () => {
    // given
    const logSpy = getLogSpy();

    const TICKETS = [
      { getLottoNumbers: () => [7, 8, 9, 10, 11, 12] },
      { getLottoNumbers: () => [15, 16, 17, 18, 19, 20] },
    ];

    // when
    LottoOutput.displayLottoTickets(TICKETS);

    // then
    const logs = [
      '2개를 구매했습니다.',
      '[7, 8, 9, 10, 11, 12]',
      '[15, 16, 17, 18, 19, 20]',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('LottoOutput.displayGameResult 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('게임 결과와 수익률 출력을 확인한다.', () => {
    // given
    const logSpy = getLogSpy();

    const PRIZE_LIST = {
      3: { countMatch: 0, prize: 5000 },
      4: { countMatch: 0, prize: 50000 },
      5: { countMatch: 1, prize: 1500000 },
      '5+1': { countMatch: 0, prize: 30000000 },
      6: { countMatch: 0, prize: 2000000000 },
    };

    const TICKET_AMOUNT = 5000;

    // when
    LottoOutput.displayGameResult(PRIZE_LIST, TICKET_AMOUNT);

    // then
    const EXPECTED_PROFIT_RATE = ((1500000 / TICKET_AMOUNT) * 100).toFixed(1);

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      `총 수익률은 ${EXPECTED_PROFIT_RATE}%입니다.`,
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
