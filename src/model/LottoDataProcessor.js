import Validator from "../utils/Validator";
import RandomNumberGenerator from "../utils/RandomNumberGenerator";

class LottoDataProcessor {
  #purchaseAmount;
  #lottoResults;

  constructor(purchaseAmount) {
    this.#purchaseAmount = Number(purchaseAmount);
    this.#validate(this.#purchaseAmount);
    this.#lottoResults = [];
    this.#generateLottoResults(purchaseAmount / 1000);
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  getLottoResults() {
    return this.#lottoResults;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  #generateLottoResults(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoResults.push(
        RandomNumberGenerator.generateRandomNumber(1, 45, 6)
      );
    }
    return this.#lottoResults;
  }
}

export default LottoDataProcessor;
