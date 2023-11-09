import Result from '../src/Result';
import Lotto from '../src/Lotto';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

test('비교기능 및 결과 출력기능 확인', async () => {
  const logSpy = getLogSpy();

  const userLottoList = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  const winningNumber = lotto;
  const bonusNumber = 7;
  const amount = 3000;

  const result = new Result(amount);
  result.startNumberComparison(userLottoList, winningNumber, bonusNumber);

  const logs = [
    '당첨 통계',
    '---',
    '3개 일치 (5,000원) - 0개',
    '4개 일치 (50,000원) - 0개',
    '5개 일치 (1,500,000원) - 0개',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
    '6개 일치 (2,000,000,000원) - 1개',
    '총 수익률은 6666666.67%입니다.',
  ];

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
