import calculateProfit from '../src/utils/CalculateProfit.js';

describe('수익률 계산 테스트', () => {
  test('모든 당첨 1이상 일때', () => {
    // given
    const amount = 10000;
    const countWinners = { 3: 1, 4: 1, 5: 1, '5+1': 1, 6: 1 };
    const expectedProfitRate = '20315550.0';

    // when
    const profitRate = calculateProfit(amount, countWinners);

    // then
    expect(profitRate).toBe(expectedProfitRate);
  });
  test('모든 당첨 0일 때', () => {
    // given
    const amount = 10000;
    const countWinners = { 3: 0, 4: 0, 5: 0, '5+1': 0, 6: 0 };
    const expectedProfitRate = '0.0';

    // when
    const profitRate = calculateProfit(amount, countWinners);

    // then
    expect(profitRate).toBe(expectedProfitRate);
  });
});
