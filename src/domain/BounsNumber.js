import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import { EMPTY } from '../constants/Utils.js';
import DuplicateNumberError from '../error/DuplicateNumberError.js';
import EmptyInputError from '../error/EmptyInputError.js';
import InvalidNumberError from '../error/InvalidNumberError.js';
import GameUtils from '../utils/GameUtils.js';

class BonusNumber {
  #bonusNumber;

  constructor(number, winningNumbers) {
    BonusNumber.#validate(number, winningNumbers);

    this.#bonusNumber = Number(number);
  }

  static #validate(number, winningNumbers) {
    BonusNumber.#validateIsNotEmpty(number);
    BonusNumber.#validateIsNumber(Number(number));
    BonusNumber.#validateIsInLottoNumberRange(Number(number));
    BonusNumber.#validateDuplicateWinningNumbers(
      Number(number),
      winningNumbers,
    );
  }

  static #validateIsNotEmpty(number) {
    if (number.length === EMPTY) {
      throw new EmptyInputError(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static #validateIsNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateIsInLottoNumberRange(number) {
    if (GameUtils.isNotFromOneToFourtyFive(number)) {
      throw new InvalidNumberError(ERROR_MESSAGE.NOT_LOTTO_NUMBER_RANGE);
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
