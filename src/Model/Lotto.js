import { generateLotteries } from "./LottoGenerator.js";

const CURRENY_NUMBER_TO_DIVIDE = 1000;

class Lotto {
  #purchaseAmount;
  #numberOfLotteries;
  #lotteries;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#numberOfLotteries = this.calculateNumberOfLotteries();
    this.#lotteries = generateLotteries(this.#numberOfLotteries);
  }

  calculateNumberOfLotteries() {
    return this.#purchaseAmount / CURRENY_NUMBER_TO_DIVIDE;
  }

  getLotteries() {
    return this.#lotteries;
  }
}

export default Lotto;
