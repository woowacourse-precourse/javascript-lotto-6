import CONSTRAINTS from '../constants/Constraints';
import ERROR_MESSAGE from '../constants/ErrorMessage';

class Validation {
  #number;

  constructor(number) {
    this.#number = number;
  }

  validatePrice() {
    if (!this.#isCheckNumber()) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
    if (!this.#isCheckThousandUnit()) {
      throw new Error(ERROR_MESSAGE.THOUSAND_UNIT);
    }
  }

  validateLotto() {
    if (!this.#isCheckDigit()) {
      throw new Error(ERROR_MESSAGE.DIGIT);
    }
    if (this.#isCheckDuplicate()) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static validateLottoLength(number) {
    if (number.length !== CONSTRAINTS.LOTTO_NUMBERS_LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
  }

  #isCheckNumber() {
    return !Number.isNaN(Number(this.#number));
  }

  #isCheckThousandUnit() {
    return this.#number % CONSTRAINTS.PRICE_UNIT === 0;
  }

  #isCheckDigit() {
    return this.#number.every(
      (num) =>
        Number.isInteger(num) &&
        num >= CONSTRAINTS.MIN_LOTTO_NUMBER &&
        num <= CONSTRAINTS.MAX_LOTTO_NUMBER,
    );
  }

  #isCheckDuplicate() {
    return new Set(this.#number).size !== this.#number.length;
  }
}
export default Validation;
