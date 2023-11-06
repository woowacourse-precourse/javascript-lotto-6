import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import DuplicateNumberError from '../error/DuplicateNumberError.js';
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
    BonusNumber.#validateDuplicateWinningNumbers(number, winningNumbers);
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

  static #validateDuplicateWinningNumbers(number, winningNumbers) {
    if (winningNumbers.find((winningNumber) => winningNumber === number)) {
      throw new DuplicateNumberError(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
