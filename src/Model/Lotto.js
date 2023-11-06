import { generateLotteries } from "./LottoGenerator.js";
import { CURRENCY_NUMBER_TO_DIVIDE } from "../constants/constants.js";

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
    return this.#purchaseAmount / CURRENCY_NUMBER_TO_DIVIDE;
  }

  getLotteries() {
    return this.#lotteries;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default Lotto;
