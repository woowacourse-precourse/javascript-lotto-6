import Lotto from "./Lotto.js";
import LOTTO from "./constants/lotto.js";
import {
  validateBonusNumberDuplicate,
  validateBonusNumberRange,
} from "./validators/winningLotto.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  /**
   * @param {number[]} numbers
   * @param {number} bonusNumber
   */
  constructor(numbers, bonusNumber) {
    super(numbers);

    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  /**
   * @returns {number}
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }

  /**
   * @param {number} bonusNumber
   */
  #validateBonusNumber(bonusNumber) {
    validateBonusNumberRange(
      bonusNumber,
      LOTTO.range.startInclusive,
      LOTTO.range.endInclusive,
    );
    validateBonusNumberDuplicate(this.getNumbers(), bonusNumber);
  }
}

export default WinningLotto;
