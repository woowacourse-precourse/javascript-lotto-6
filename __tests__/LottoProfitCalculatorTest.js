import LottoProfitCalculator from '../src/models/LottoProfitCalculator.js';

describe('LottoProfitCalculator', () => {
  let lottoWinnerPrize;
  let purchasedPrice;
  let calculator;

  beforeEach(() => {
    lottoWinnerPrize = {
      fifthPrize: { count: 2, prizeMoney: 5000 },
      fourthPrize: { count: 3, prizeMoney: 50000 },
    };
    purchasedPrice = 10000;
    calculator = new LottoProfitCalculator(lottoWinnerPrize, purchasedPrice);
  });

  test('이익률이 올바르게 계산되어야 한다.', () => {
    const profitRate = calculator.rate();

    const totalProfit = 2 * 5000 + 3 * 50000;
    const expectedProfitRate = ((totalProfit / purchasedPrice) * 100).toFixed(
      1,
    );
    expect(profitRate).toBe(expectedProfitRate);
  });

  test('객체의 총 가격의 합을 계산한다.', () => {
    const totalProfit = calculator.calculateTotalProfit();

    const expectedTotalProfit = 2 * 5000 + 3 * 50000;
    expect(totalProfit).toBe(expectedTotalProfit);
  });
});
