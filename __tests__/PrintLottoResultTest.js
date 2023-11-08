import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 출력 테스트', () => {
  test('일치하는 로또 확인', () => {
    const app = new App([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 9],
      [3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 7],
    ]);
    const number = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const logSpy = getLogSpy();

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 50788750.0%입니다.',
    ];
    app.printLottoResult(number, bonus);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
