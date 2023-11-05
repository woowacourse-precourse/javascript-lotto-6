import Validator from '../validators/Validator.js';

class Bonus {
  #bonusNumber;

  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = Number(bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#validate();
  }

  #validate() {
    Validator.validateBonusNumber(this.#bonusNumber, this.#winningNumbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
