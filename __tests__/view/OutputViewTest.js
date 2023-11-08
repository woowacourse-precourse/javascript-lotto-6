import { Console } from '@woowacourse/mission-utils';
import OutputView from '../../src/view/OutputView';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('당첨 통계 출력 테스트', () => {
  test('당첨내역과 수익률을 포함한 당첨 통계를 출력한다.', () => {
    const logSpy = getLogSpy();
    const matchingTable = {
      three: 1,
      four: 1,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    };
    const rateOfReturn = 62.5;
    OutputView.printLotteryResultsSummary(matchingTable, rateOfReturn);

    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
