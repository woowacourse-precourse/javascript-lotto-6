import { Random } from "@woowacourse/mission-utils";
import { CURRENCY_NUMBER_TO_DIVIDE, LOTTO_CONSTANTS } from "./constants/constants.js";
import Lotto from './Lotto.js';

class LottoGenerator {
  #purchaseAmount;
  #numberOfLottos;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#numberOfLottos = this.calculateNumberOfLottos();
  }

  #generateRandomLotto() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.minNumber,
      LOTTO_CONSTANTS.maxNumber,
      LOTTO_CONSTANTS.lottoLength
    ).sort((a, b) => a - b);
  }

  generateLottos() {
    return Array.from(
      { length: this.#numberOfLottos },
      (_) => new Lotto(this.#generateRandomLotto())
    );
  }

  calculateNumberOfLottos() {
    return this.#purchaseAmount / CURRENCY_NUMBER_TO_DIVIDE;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default LottoGenerator;