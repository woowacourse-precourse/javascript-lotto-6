import BonusNumberValidator from '../service/BonusNumberValidator.js';

class BonusNumber {

  #value;

  constructor(value, winningNumbers) {
    this.#validate(value, winningNumbers);
    this.#value = parseInt(value, 10);
  }

  getValue() {
    return this.#value;
  }

  #validate(value, winningNumbers) {
    const bonusNumberValidator = new BonusNumberValidator(value);
    bonusNumberValidator.validate(winningNumbers);
  }
}

export default BonusNumber;
