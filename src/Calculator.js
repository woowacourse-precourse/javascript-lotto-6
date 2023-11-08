class Calculator {
  #winningAmount;

  #rateOfReturn;

  constructor(purchaseAmount, matchStats) {
    this.#winningAmount = 0;
    this.#calculateWinningAmount(matchStats);
    this.#calculateRateOfReturn(purchaseAmount);
  }

  #calculateWinningAmount(matchStats) {
    matchStats.forEach((count, amount) => {
      this.#winningAmount += amount * count;
    });
  }

  #calculateRateOfReturn(purchaseAmount) {
    const rate = (this.#winningAmount / purchaseAmount) * 100;
    this.#rateOfReturn = Math.round(rate * 10) / 10;
  }

  get rateOfReturn() {
    return this.#rateOfReturn;
  }
}

export default Calculator;
