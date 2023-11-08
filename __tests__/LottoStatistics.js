import { LottoStatistics } from '../src/Domain/LottoStatistics.js';

describe('로또 통계 클래스 테스트', () => {
  const playerLottos = [[1, 2, 3, 11, 15, 16]];
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const lottoStatistics = new LottoStatistics(playerLottos, winningNumbers, bonusNumber);

  test('calculateStatistics() 메소드는 플레이어 로또들과 당첨 번호를 비교하여 통계를 계산한다.', () => {
    lottoStatistics.calculateStatistics();
    expect(lottoStatistics.statistics['3개 일치'].count).toBe(1);
    expect(lottoStatistics.statistics['6개 일치'].count).toBe(0);
  });

  test('countMatchedNumbers() 로또와 당첨 번호를 비교하여 일치하는 번호의 개수와 보너스 번호 일치 여부를 반환한다.', () => {
    const { count, bonusMatch } = lottoStatistics.countMatchedNumbers([5, 6, 7, 8, 9, 10]);
    expect(count).toBe(2);
    expect(bonusMatch).toBe(true);
  });

  test('updateStatistics() 일치하는 번호의 개수와 보너스 번호 일치 여부에 따라 통계를 업데이트한다.', () => {
    lottoStatistics.updateStatistics(5, true);
    expect(lottoStatistics.statistics['5개 일치, 보너스 볼 일치'].count).toBe(1);
  });

  test('calculateReturnRate() 총 수익률을 계산한다.', () => {
    const returnRate = lottoStatistics.calculateReturnRate(2000);
    expect(returnRate).toBe(1500250);
  });
});
