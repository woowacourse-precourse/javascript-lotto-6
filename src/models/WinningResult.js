class WinningResult {
  #boughtPrice;
  #result;
  #prizeAmount;
  #profitRate;

  constructor(boughtPrice) {
    this.#boughtPrice = boughtPrice;
    this.#result = {
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
  }

  addPrizeToResult(place) {
    if (place === 1) this.#result['firstPrize'] += 1;
    if (place === 2) this.#result['secondPrize'] += 1;
    if (place === 3) this.#result['thirdPrize'] += 1;
    if (place === 4) this.#result['fourthPrize'] += 1;
    if (place === 5) this.#result['fifthPrize'] += 1;
  }
  #setPrizeAmount() {}
  #setProfitRate() {}

  getResult() {
    return this.#result;
  }
}

export default WinningResult;
