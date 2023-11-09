import Lotto from "../Lotto.js";
import Validations from "../Validations.js";

class LottoTotal {
  /** @type {Lotto} */
  #lotto;

  /** @type {number} */
  #bonusNumber;

  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#validateBonusNumber(bonusNumber, lotto);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, lotto) {
    Validations.hasSpace(bonusNumber);
    Validations.isNumber(bonusNumber);
    Validations.isInRange(bonusNumber);
    Validations.isInteger(bonusNumber);
    Validations.isBonusNumberNotDuplicated(bonusNumber, lotto);
  }

  getLotto() {
    return this.#lotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoTotal;