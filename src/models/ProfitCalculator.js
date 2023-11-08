import { PRIZE_MONEY } from "../constants/Constant";

export default class ProfitCalculator {
  calculateTotalPrize(result) {
    return (
      result[5] * PRIZE_MONEY[5] +
      result[4] * PRIZE_MONEY[4] +
      result[3] * PRIZE_MONEY[3] +
      result[2] * PRIZE_MONEY[2] +
      result[1] * PRIZE_MONEY[1]
    );
  }

  calculateROI(totalPrize, purchasePrice) {
    return (totalPrize / purchasePrice) * 100;
  }
}