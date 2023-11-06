import {
  MAX_BONUS_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "./constants/standard.js";
import {
  ERROR_NUMBER_DUPLICATION_WITH_WINNING,
  ERROR_NUMBER_RANGE,
  ERROR_NUMBER_TYPE,
} from "./constants/validate.js";

class Bonus {
  #number;
  #winningNumber;

  constructor(number, winningNumber) {
    this.#validate(number, winningNumber);
    this.#number = number;
    this.#winningNumber = winningNumber;
  }

  #validate(number, winningNumber) {
    this.#validateNumberRange(number);
    this.#validateDuplicationWithWinningNumber(number, winningNumber);
    this.#validateNumberType(number);
  }

  #occurError(errorMessage) {
    throw new Error(errorMessage);
  }
  #validateNumberRange(number) {
    if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
      this.#occurError(ERROR_NUMBER_RANGE);
    }
  }
  #validateDuplicationWithWinningNumber(number, winningNumber) {
    if (winningNumber.includes(number)) {
      this.#occurError(ERROR_NUMBER_DUPLICATION_WITH_WINNING);
    }
  }
  #validateNumberType(number) {
    if (isNaN(number)) {
      this.#occurError(ERROR_NUMBER_TYPE);
    }
  }

  get() {
    return this.#number;
  }
}

export default Bonus;
