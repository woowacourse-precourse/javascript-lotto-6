import Validator from '../validator/Validator.js';

class BonusNumber {
  #number;

  constructor(number) {
    this.#validateBonusNumber(number);
    this.#number = Number(number);
  }

  #validateBonusNumber(number) {
    Validator.checkIsNotNumber(number);
    Validator.checkIsNotPositive(number);
    Validator.checkIsOutOfRange(number);
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
