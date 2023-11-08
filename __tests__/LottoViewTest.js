import LottoView from '../src/LottoView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('당첨 결과 출력 테스트', () => {
  test('일치 개수 확인', () => {
    const view = new LottoView();
    const logSpy = getLogSpy();
    const countWinners = { 3: 5, 4: 1, 5: 5, '5+1': 1, 6: 0 };
    view.showResults(countWinners);

    // then
    const logs = [
      '3개 일치 (5,000원) - 5개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 5개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개'
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
