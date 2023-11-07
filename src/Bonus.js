import { NUMBER } from "./utils/constants.js";
import { ERROR } from "./utils/messages.js";

class Bonus {
  #number;

  constructor(number, userWinningNumbers) {
    this.#validate(number, userWinningNumbers);
    this.#number = number;
  }

  #validate(number, userWinningNumbers) {
    this.checkBonusNumberRange(number);
    this.checkDuplicateNumber(number, userWinningNumbers);
  }

  checkBonusNumberRange(number) {
    if (number < NUMBER.MIN || number > NUMBER.MAX) {
      throw new Error(ERROR.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  checkDuplicateNumber(number, userWinningNumbers) {
    if (userWinningNumbers.includes(Number(number))) {
      throw new Error(ERROR.DUPLICATED_BONUS_NUMBER);
    }
  }

  getBonusNumber() {
    return Number(this.#number);
  }
}

export default Bonus;
