import Reward from '../../src/domains/Reward.js';
import WinningLotto from '../../src/domains/WinningLotto.js';

describe('Reward 클래스 테스트', () => {
  let winningLotto;
  let reward;

  const lottos = [
    { getNumbers: jest.fn().mockReturnValue([1, 2, 3, 10, 20, 30]) },
    { getNumbers: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]) },
  ];

  beforeEach(() => {
    winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    reward = new Reward(winningLotto);
  });

  test('calculateMatchCount는 정확한 매치 카운트를 반환해야 한다', () => {
    const matchCount = reward.calculateMatchCount([1, 2, 3, 10, 20, 30]);
    expect(matchCount).toBe(3);
  });

  test('calculatePrizeForMatch는 정확한 상금을 반환해야 한다', () => {
    const prize3 = reward.calculatePrizeForMatch(3);
    expect(prize3).toBe(5000);

    const prize5Plus1 = reward.calculatePrizeForMatch('5+1');
    expect(prize5Plus1).toBe(30000000);
  });

  test('updateMatchCount는 통계 상태를 업데이트해야 한다', () => {
    const statistics = reward.updateMatchCount({}, '3');
    expect(statistics['3']).toBe(1);
  });

  test('updateStatisticsAndPrize는 통계와 상금을 업데이트해야 한다', () => {
    const result = reward.updateStatisticsAndPrize({}, 3, [1, 2, 3, 10, 20, 30], 7);
    expect(result.statistics['3']).toBe(1);
    expect(result.prize).toBe(5000);
  });

  test('5개가 일치하면서 보너스 볼까지 일치할때의 통계와 상금을 업데이트 해야한다.', () => {
    const result = reward.updateStatisticsAndPrize({}, 5, [1, 2, 3, 4, 5, 7], 7);
    expect(result.statistics['5+1']).toBe(1);
    expect(result.prize).toBe(30000000);
  });

  test('calculateTotalPrizeAndStatistics는 모든 로또에 대한 총 상금과 통계를 계산해야 한다', () => {
    const initialStatistics = Reward.INITIAL_STATISTICS;

    const result = reward.calculateTotalPrizeAndStatistics(lottos, initialStatistics);
    expect(result.totalPrize).toBe(Reward.PRIZE_MONEY[3] + Reward.PRIZE_MONEY[6]);
    expect(result.statistics['3']).toBe(1);
    expect(result.statistics['6']).toBe(1);
  });

  test('calculateReward는 구입한 모든 로또에 대한 보상을 계산해야 한다', () => {
    const expectedLogs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 100000250.0%입니다.',
    ];

    const rewardResult = reward.calculateReward(lottos);

    expect(rewardResult).toEqual(expectedLogs);
  });
});
