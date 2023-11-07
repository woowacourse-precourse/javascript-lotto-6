import Message from './utils/Message.js';

class Statistics {
  #rankCount = [0, 0, 0, 0, 0];

  /**
   *
   * @param {LottoResult[]} results
   */
  constructor(results) {
    this.results = results;
    this.#calculate();
  }

  show() {
    const profitRate = this.#getProfitRate();
    Message.showStatistics(this.#rankCount, profitRate);
  }

  #calculate() {
    this.results.forEach((result) => {
      const rank = result.getRank();
      if (rank > -1) this.#rankCount[rank] += 1;
    });
  }

  #getProfitRate() {
    const totalPrize = this.results.reduce((acc, result) => acc + result.getPrize(), 0);
    const totalPurchase = this.results.length * 1000;

    return (totalPrize / totalPurchase) * 100;
  }
}

export default Statistics;
