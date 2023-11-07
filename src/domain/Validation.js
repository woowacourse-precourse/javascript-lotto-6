import ERROR_MESSAGE from '../constants/ErrorMessage';

class Validation {
  #number;

  constructor(number) {
    this.#number = number;
  }

  validatePrice() {
    if (!this.#isCheckNumber()) throw new Error(ERROR_MESSAGE.NUMBER);
    if (!this.#isCheckThousandUnit())
      throw new Error(ERROR_MESSAGE.THOUSAND_UNIT);
  }

  #isCheckNumber() {
    return !Number.isNaN(this.#number);
  }

  #isCheckThousandUnit() {
    return this.#number % 1000 === 0;
  }

  #isCheckDigit() {
    return /^[1-45]+$/.test(this.#number);
  }

  #isCheckDuplicate() {
    return new Set(this.#number).size !== this.#number.length;
  }
}
export default Validation;
