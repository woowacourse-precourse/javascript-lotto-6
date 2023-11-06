class WinningStatistic {
  #firstPrize;
  #secondePrize;
  #thirdPrize;
  #fourthPrize;
  #fifthPrize;
  #earningRate;

  constructor(
    firstPrize = 0,
    secondePrize = 0,
    thirdPrize = 0,
    fourthPrize = 0,
    fifthPrize = 0,
    earingRate = 0
  ) {
    this.#firstPrize = firstPrize;
    this.#secondePrize = secondePrize;
    this.#thirdPrize = thirdPrize;
    this.#fourthPrize = fourthPrize;
    this.#fifthPrize = fifthPrize;
    this.#earningRate = earingRate;
  }

  getFirstPrize() {
    return this.#firstPrize;
  }
  getSecondPrize() {
    return this.#secondePrize;
  }
  getThirdPrize() {
    return this.#thirdPrize;
  }
  getFourthPrize() {
    return this.#fourthPrize;
  }
  getFifthPrize() {
    return this.#fifthPrize;
  }
  getEaringRate() {
    return this.#earningRate;
  }
}
export default WinningStatistic;
