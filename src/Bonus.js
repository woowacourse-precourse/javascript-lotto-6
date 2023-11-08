import { ERROR_MESSAGE } from "./constants/message.js";
import { Validator } from "./utils/validator.js";

class Bonus {
  number;

  constructor(winnerNumbers, number) {
    this.#validate(winnerNumbers, number);
    this.number = number;
  }

  #validate(winnerNumbers, number) {
    if (!Validator.isNumber(number)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_ERROR);
    }

    if (!Validator.isNumberInRange(number)) {
      throw new Error(ERROR_MESSAGE.BONUS_FORMAT_ERROR);
    }

    if (this.isBonusNumberIncluded(winnerNumbers, number)) {
      throw new Error(ERROR_MESSAGE.BONUS_INCLUDES_WINNER_ERROR);
    }
  }

  isBonusNumberIncluded(winners, bonus) {
    return winners.includes(Number(bonus));
  }
}

export default Bonus;
