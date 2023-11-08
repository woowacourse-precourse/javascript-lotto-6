import PrizeMoneyManager from '../src/PrizeMoneyManager.js';

describe("상금매니저 테스트", () => {
  const manager = new PrizeMoneyManager;

  test('로또 당첨 수에 맞게 알맞은 금액을 반환하는가', () => {
    const ranks = [[1, 3, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 1, 1, 0]];
    const result = [155000, 2000000000, 31500000];

    ranks.forEach((rank, index) => {
      expect(manager.calculateTotalPrizeMoney(rank)).toEqual(result[index]);
    });
  });

  test('수익률은 소수점 둘째 자리에서 반올림하여 올바르게 반환하는가', () => {
    const moneys = [5000, 10000, 155000];
    const amount = 8000;
    const result = ['62.5', '125.0', '1937.5'];

    moneys.forEach((money, index) => {
      expect(manager.calculateEarningsPercent(money, amount)).toBe(result[index]);
    });
  });
});
