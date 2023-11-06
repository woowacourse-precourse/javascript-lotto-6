import Validator from '../Controller/modules/Validator.js';

class BonusNumber {
  #number;

  constructor(number) {
    this.validateBonusNumber(number);
    this.#number = number;
  }

  validateBonusNumber(number) {
    Validator.checkBonusNumberIsValid(number);
  }

  getBonusNumber() {
    return this.#number;
  }
}

export default BonusNumber;
