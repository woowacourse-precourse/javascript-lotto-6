class Analyzer {
  #prizeInfo;

  constructor() {
    this.#prizeInfo = { prizeRank: [], totalPrize: 0 };
  }

  getPrizeInfo() {
    return this.#prizeInfo;
  }

  getPrize(winnigResult) {
    this.#prizeInfo.prizeRank = [];
    const prizeLookup = {
      '6,0': 2000000000,
      '5,1': 30000000,
      '5,0': 150000,
      '4,0': 50000,
      '3,0': 5000,
    };
    winnigResult.forEach((matchingResult) => {
      const prize = prizeLookup[matchingResult.join(',')] || 0;
      this.#prizeInfo.prizeRank.push(prize);
    });
  }

  calculateTotalPrize() {
    this.#prizeInfo.prizeRank.forEach((lottoPrize) => {
      this.#prizeInfo.totalPrize += lottoPrize;
    });
  }

  calculateYield(money) {
    return ((this.#prizeInfo.totalPrize / money) * 100).toFixed(2);
  }
}

export default Analyzer;
