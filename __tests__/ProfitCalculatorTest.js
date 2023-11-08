import ProfitCalculator from "../src/models/ProfitCalculator.js";
import { PRIZE_MONEY, INITIAL_RESULT  } from "../src/constants/Constant.js";

describe("ProfitCalculator 클래스 테스트", () => {
  let profitCalculator;

  beforeEach(() => {
    profitCalculator = new ProfitCalculator();
  });

  test("총 이익금액 테스트", () => {
    const result = {
      5: 3,
      4: 2,
      3: 1,
      2: 0,
      1: 0, 
    };
    
    const expectedTotalPrize = 3 * PRIZE_MONEY[5] + 2 * PRIZE_MONEY[4] + 1 * PRIZE_MONEY[3];
    expect(profitCalculator.calculateTotalPrize(result)).toBe(expectedTotalPrize);
  });

  test("수익률 계산 테스트", () => {
    const totalPrize = 2050000;
    const purchasePrice = 3000;
    const expectedROI = (totalPrize / purchasePrice) * 100;
    expect(profitCalculator.calculateROI(totalPrize, purchasePrice)).toBe(expectedROI);
  });
});