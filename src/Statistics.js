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
    const profit = [
      this.#rankCounts[4] * 5000,
      this.#rankCounts[3] * 50000,
      this.#rankCounts[2] * 1500000,
      this.#rankCounts[1] * 30000000,
      this.#rankCounts[0] * 2000000000,
    ];
    return profit.reduce((sum, currentValue) => sum + currentValue, 0);
  }

  calculateProfitRate(purchaseAmount) {
    return (this.#profit / purchaseAmount) * 100;
  }  

}

export default Statistics;