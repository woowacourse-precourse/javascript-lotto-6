import LOTTO_RULE from "./constant/LottoRule.js";
import Output from "./utils/Output.js";

class Statistics {
  #rankCounts;
  #profit;

  constructor(results) {
    this.#rankCounts = this.#updateRank(results);
    Output.printRank(this.#rankCounts);
    this.#profit = this.#calculateProfit();
  }

  #updateRank(results) {
    const rankCounts = [0, 0, 0, 0, 0];

    results.forEach(({ matchingNumbers, bonusMatch }) => {
      if (matchingNumbers === 6) {
        rankCounts[0]++;
      } else if (matchingNumbers === 5 && bonusMatch) {
        rankCounts[1]++;
      } else if (matchingNumbers === 5) {
        rankCounts[2]++;
      } else if (matchingNumbers === 4) {
        rankCounts[3]++;
      } else if (matchingNumbers === 3) {
        rankCounts[4]++;
      }
    });

    return rankCounts;
  }

  #calculateProfit() {
    return this.#rankCounts.reduce((profit, count, index) => {
      return profit + count * LOTTO_RULE.PRIZE_MONEY[index];
    }, 0);
  }

  calculateProfitRate(purchaseAmount) {
    return (this.#profit / purchaseAmount) * LOTTO_RULE.PROFIT_RATE_PERCENT;
  }
}

export default Statistics;
