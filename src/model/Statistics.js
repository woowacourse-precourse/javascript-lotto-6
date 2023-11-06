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
}
