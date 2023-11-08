import { validateNumber } from "./utils/validation.js";
import { BONUS_NUMBER_ERROR } from "./constant/ERROR.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, array) {
    this.#validate(bonusNumber, array);
    this.#bonusNumber = bonusNumber;
  }

  #validate(number, array) {
    if (!validateNumber.isNumber(number)) {
    if (validateNumber.isInArray(number, array)) {
      throw new Error(BONUS_NUMBER.isInArray);
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
