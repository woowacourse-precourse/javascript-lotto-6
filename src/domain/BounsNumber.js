import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import InvalidNumberError from '../error/InvalidNumberError.js';
import GameUtils from '../utils/GameUtils.js';

class BonusNumber {
  #bonusNumber;

  constructor(number, winningNumbers) {
    BonusNumber.#validate(number, winningNumbers);

    this.#bonusNumber = number;
  }

  static #validate(number, winningNumbers) {
    BonusNumber.#validateIsNumber(number);
    BonusNumber.#validateIsInLottoNumberRange(number);
  }

  static #validateIsNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateIsInLottoNumberRange(number) {
    if (GameUtils.isNotFromOneToFourtyFive(number)) {
      throw new InvalidNumberError(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    }
  }
}

export default BonusNumber;
