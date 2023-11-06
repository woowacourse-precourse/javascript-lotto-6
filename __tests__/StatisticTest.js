import Statistics from '../src/Statistic';
import { STATISTICS_MESSAGE, WINNINGS_MONEY } from '../src/constant';
import { getLogSpy, makeExpectedWinningResult } from '../testUtils';

describe('Statistics 클래스 테스트', () => {
  const winningResult = makeExpectedWinningResult(1, 1, 1, 1, 1);
  const rateOfReturn = 50.52;

  test('당첨 통계 출력', () => {
    const logs = [
      STATISTICS_MESSAGE.header,
      STATISTICS_MESSAGE.division,
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 50.52%입니다.',
    ];
    const logSpy = getLogSpy();

    new Statistics(winningResult, rateOfReturn);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
