import { PRIZE } from "../constants/Constants.js";

class ProfitProcessor {
  #profitPercentage;

  constructor(result, purchaseAmount) {
    this.#profitPercentage = 0;
    this.#generateProfit(result, purchaseAmount);
  }

  getProfit() {
    return this.#profitPercentage;
  }

  #generateProfit(result, purchaseAmount) {
    let profit = 0;
    for (const key in result) {
      profit += result[key] * PRIZE[key];
    }
    const percentageResult = (profit / purchaseAmount) * 100;
    this.#profitPercentage = Math.floor(percentageResult * 100) / 100;
  }
}

export default ProfitProcessor;
