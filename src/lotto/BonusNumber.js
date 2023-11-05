import { errorConstants, magicNumber } from '../constants/index.js';

export default class BonusNumber {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = Number(number);
  }

  #validate(number) {
    this.#isNumber(number);
    this.#isNotEmpty(number);
    this.#isNotZero(number);
    this.#isInRange(number);
  }

  #isNotEmpty(number) {
    if (/\s/.test(String(number))) throw new Error(errorConstants.NOT_EMPTY);
  }

  #isNumber(number) {
    if (isNaN(number)) throw new Error(errorConstants.NOT_A_NUMBER);
  }

  #isNotZero(number) {
    if (number === magicNumber.ZERO) throw new Error(errorConstants.NOT_ZERO);
  }

  #isInRange(number) {
    if (number > magicNumber.END_RANGE)
      throw new Error(errorConstants.NOT_IN_RANGE);
  }

  getBonusNumber() {
    return this.#number;
  }
}
