import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class BonusNumber {
  #bonusNumber;

  constructor(number, winningNumbers) {
    BonusNumber.#validate(number, winningNumbers);

    this.#bonusNumber = number;
  }

  static #validate(number, winningNumbers) {
    BonusNumber.#validateIsNumber(number);
  }

  static #validateIsNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }
}

export default BonusNumber;
