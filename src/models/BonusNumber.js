import InputValidator from '../Validator/InputValidator.js';

class BonusNumber {
  #number;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#number = number;
  }

  #validate(number, winningNumbers) {
    InputValidator.isBonusNumberInRange(number);
    InputValidator.isBonusNumberUnique(number, winningNumbers);
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
