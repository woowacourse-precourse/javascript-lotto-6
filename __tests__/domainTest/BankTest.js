/* eslint-disable */
import { WINNING_RANK_COUNT } from '../../src/constants/lotto';
import { ZERO } from '../../src/constants/validate';
import bank from '../../src/domain/Bank';

describe.only('Bank Test', () => {
  test('당첨 금액의 총 합계 테스트', () => {
    const ranks = {
      [ZERO]: 0,
      [WINNING_RANK_COUNT.firstPlace]: 0,
      [WINNING_RANK_COUNT.secondPlace]: 0,
      [WINNING_RANK_COUNT.thirdPlace]: 0,
      [WINNING_RANK_COUNT.fourthPlace]: 0,
      [WINNING_RANK_COUNT.fifthPlace]: 3,
    };
    const total = 5000 + 5000 + 5000;
    expect(bank.calculateTotalPrizeAmount(ranks)).toBe(total);
  });

  test('수익률 계산 테스트', () => {
    const purchaseCost = 8000;
    const totalPriz = 5000;
    const profitRate = 62.5;
    bank.calculateProfitRate(purchaseCost, totalPriz);
    expect(bank.calculateProfitRate(purchaseCost, totalPriz)).toBe(profitRate);
  });
});
