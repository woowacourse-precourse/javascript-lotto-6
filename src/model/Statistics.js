class Statistics {
  #rateOfReturns;
  #statistics;

  constructor() {
    this.#rateOfReturns = 0;
    this.#statistics = STATISTICS;
  }

  getRateOfReturns() {
    return (this.#rateOfReturns * 100).toFixed(1);
  }

  getStatistics() {
    return this.#statistics;
  }

  calculateStatistics(userLotto, winningLotto) {
    const rankResult = userLotto.calculateMatchingNumber(winningLotto);

    let totalWinnings = 0;

    this.#statistics.forEach((statistic) => {
      statistic.count = rankResult[statistic.rank];
      totalWinnings += statistic.winnings * statistic.count;
    });

    this.#rateOfReturns =
      totalWinnings / (userLotto.getNumberOfPurchase() * 1000);
  }
}
