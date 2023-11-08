import { validateNumber } from "./utils/validation.js";
import { BONUS_NUMBER_ERROR } from "./constant/ERROR.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(number) {
    if (!validateNumber.isIncludesRange(number)) {
      throw new Error(BONUS_NUMBER_ERROR.isIncludesRange);
    }
    if (!validateNumber.isNumber(number)) {
      throw new Error(BONUS_NUMBER_ERROR.isNumber);
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
