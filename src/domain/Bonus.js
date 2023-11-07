import CustomError from "../error/CustomError.js";
import { LOTTO_RULE, REGEX } from "../constants/BusinessNumber.js";
import { LOTTO_ERROR } from "../constants/Messeage.js";

class Bonus {
  #bonusNumber;

  constructor(bonusString, luckyNumbers) {
    this.#validateBonusNumber(bonusString, luckyNumbers);
    this.#bonusNumber = Number(bonusString);
  }
  
  #validateBonusNumber(bonusString, luckyNumbers) {
    if (REGEX.number.test(bonusString)) {
      throw new CustomError(LOTTO_ERROR.form);
    }
  
    if (Number(bonusString) > LOTTO_RULE.maxNumber || Number(bonusString) < LOTTO_RULE.minNumber) {
      throw new CustomError(LOTTO_ERROR.luckyRange);
    }
  
    if (luckyNumbers.includes(Number(bonusString))) {
      throw new CustomError(LOTTO_ERROR.bonusConflict);
    } 
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
