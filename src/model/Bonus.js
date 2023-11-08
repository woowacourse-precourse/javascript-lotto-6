import { Console } from "@woowacourse/mission-utils";
import LOTTO_CONSTANT from "../utils/constant";
import { ERROR_MESSAGES } from "../utils/message";

class Bonus {
  #number;

  constructor(number, lottoWinngNumbers) {
    this.#validate(number, lottoWinngNumbers);
    this.#number = number;
  }

  #validate(number, lottoWinngNumbers) {
    if (number.length !== LOTTO_CONSTANT.bonusCount) {
      throw new Error(ERROR_MESSAGES.bonusNumberCountOne);
    }
    if (number.some((num) => Number.isNaN(num) || typeof num !== "number")) {
      throw new Error(ERROR_MESSAGES.bonusNumberNotNumber);
    }
    if (number.some((num) => num < LOTTO_CONSTANT.minNumber || num > LOTTO_CONSTANT.maxNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumberOutOfRange);
    }
    if (lottoWinngNumbers.includes(number[0])) {
      throw new Error(ERROR_MESSAGES.bonusNumberAlreadyIncluded);
    }
  }

  getBonus() {
    return this.#number;
  }
}

export default Bonus;
