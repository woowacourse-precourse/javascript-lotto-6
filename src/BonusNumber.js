import { validateNumber } from "./utils/validation.js";
import { BONUS_NUMBER } from "./constant/ERROR.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, array) {
    this.#validate(bonusNumber, array);
    this.#bonusNumber = bonusNumber;
  }

  #validate(number, array) {
    if (!validateNumber.isNumber(number)) {
      throw new Error(BONUS_NUMBER.isNumber);
    }

    if (!validateNumber.isInRange(number)) {
      throw new Error(BONUS_NUMBER.isInRange);
    }

    if (validateNumber.isInArray(number, array)) {
      throw new Error(BONUS_NUMBER.isInArray);
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
