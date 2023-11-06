import ProfitCalculator from "../src/models/ProfitCalculator.js";

const PRIZE_MONEY = {
  5: 5000, 
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000, 
};

describe("ProfitCalculator 클래스 테스트", () => {

  test("총 이익금액 테스트", () => {
    const result = {
      5: 3,
      4: 2,
      3: 1,
      2: 0,
      1: 0, 
    };
    
    const expectedTotalPrize = 3 * PRIZE_MONEY[5] + 2 * PRIZE_MONEY[4] + 1 * PRIZE_MONEY[3];
    expect(ProfitCalculator.calculateTotalPrize(result)).toBe(expectedTotalPrize);
  });

  test("수익률 계산 테스트", () => {
    const totalPrize = 2050000;
    const purchasePrice = 3000;
    const expectedROI = (totalPrize / purchasePrice) * 100;
    expect(ProfitCalculator.calculateROI(totalPrize, purchasePrice)).toBe(expectedROI);
  });

});
