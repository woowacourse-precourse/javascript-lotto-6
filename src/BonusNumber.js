import Validator from "./Validator.js";
import PRIZE from "./constant/PRIZE.js";

class BonusNumber {
  #bonusNumber;

  constructor(winningNumberArray, bonusNumberString) {
    this.#validateBonusNumber(winningNumberArray, bonusNumberString);
    this.#bonusNumber = Number(bonusNumberString);
  }

  #validateBonusNumber(winningNumberArray, bonusNumberString) {
    if (!Validator.isInLottoNumberRange(bonusNumberString)) {
      throw new Error(PRIZE.ERROR.BONUS_NUMBER_RANGE_NUMBER);
    }

    if (
      Validator.hasDuplicate([...winningNumberArray, Number(bonusNumberString)])
    ) {
      throw new Error(PRIZE.ERROR.BONUS_NUMBER_DUPLICATE);
    }
  }

  get number() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
