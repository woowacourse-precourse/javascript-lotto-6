class LottoReturnRateCalculator {
  static #PRIZE = {
    first: 2000000000,
    second: 30000000,
    third: 1500000,
    fourth: 50000,
    fifth: 5000,
  };
  #lottoResult;
  #buyingPrice;

  constructor({ lottoResult, buyingPrice }) {
    this.#lottoResult = lottoResult;
    this.#buyingPrice = buyingPrice;
  }

  calculateReturnRate() {
    const totalProfit = this.#calculateTotalProfit();
    const returnRate = (totalProfit / this.#buyingPrice) * 100;

    return Math.round((returnRate + Number.EPSILON) * 10) / 10;
  }

  #calculateTotalProfit() {
    return Object.entries(LottoReturnRateCalculator.#PRIZE).reduce(
      (result, [rank, prize]) => result + prize * this.#lottoResult[rank],
      0
    );
  }
}

export default LottoReturnRateCalculator;
