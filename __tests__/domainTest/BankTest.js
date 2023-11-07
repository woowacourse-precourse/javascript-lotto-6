/* eslint-disable */
import bank from '../../src/domain/Bank';

describe.only('Bank Test', () => {
  test('당첨 금액의 총 합계 테스트', () => {
    const rank = [5, 5, 5];
    const total = 5000 + 5000 + 5000;
    expect(bank.calculateTotalPrizeAmount(rank)).toBe(total);
  });
  test('수익률 계산 테스트', () => {
    const purchaseCost = 8000;
    const totalPriz = 5000;
    const profitRate = 62.5;
    console.log(bank.calculateProfitRate(purchaseCost, totalPriz));
    expect(bank.calculateProfitRate(purchaseCost, totalPriz)).toBe(profitRate);
  });
});
