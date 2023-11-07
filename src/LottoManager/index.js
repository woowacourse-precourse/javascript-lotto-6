import { Random } from "@woowacourse/mission-utils";

import Lotto from "../Lotto.js";
import LOTTO from "../constants/lotto.js";
import validateNoRemaining from "../validators/lottoManager.js";

class LottoManager {
  /**
   * @type {Lotto[]}
   */
  #lottoes;

  constructor() {
    this.#lottoes = [];
  }

  /**
   *
   * @param {number} amountToPurchase
   * @returns {Lotto[]}
   */
  issueLottoes(amountToPurchase) {
    validateNoRemaining(amountToPurchase, LOTTO.price);

    const numberOfLottoTickets = parseInt(amountToPurchase / LOTTO.price, 10);
    this.#generateLottoes(numberOfLottoTickets);

    return [...this.#lottoes];
  }

  #generateLottoes(numberOfLottoTickets) {
    while (this.#lottoes.length < numberOfLottoTickets) {
      const numbers = this.#generateLottoNumbers();
      this.#lottoes.push(new Lotto(numbers));
    }
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.range.startInclusive,
      LOTTO.range.endInclusive,
      LOTTO.length,
    ).sort((a, b) => a - b);
  }
}

export default LottoManager;
