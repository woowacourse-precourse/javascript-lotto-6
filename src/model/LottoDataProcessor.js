import Validator from "../utils/Validator";
import RandomNumberGenerator from "../utils/RandomNumberGenerator";

class LottoDataProcessor {
  #random;
  #lottoResultArr;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = Number(purchaseAmount);
    this.#validate(this.#purchaseAmount);
    this.#lottoResultArr = [];
    this.#random = new RandomNumberGenerator();
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  lottoResults(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoResultArr.push(this.#random.generateRandomNumber(1, 45, 6));
    }
    return this.#lottoResultArr;
  }
}

export default LottoDataProcessor;
