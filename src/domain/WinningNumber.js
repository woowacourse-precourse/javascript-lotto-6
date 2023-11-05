import Lotto from '../Lotto.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import InvalidNumberError from '../error/InvalidNumberError.js';

class WinningNumber {
  #winningLotto;

  constructor(winningNumbers) {
    WinningNumber.#validateIsNumber(winningNumbers);
    WinningNumber.#validateEmptyNumber(winningNumbers);

    const lotto = new Lotto(winningNumbers);
    this.#winningLotto = lotto;
  }

  static #validateIsNumber(winningNumbers) {
    if (winningNumbers.some((number) => Number.isNaN(number))) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateEmptyNumber(winningNumbers) {
    if (winningNumbers.some((number) => number === 0)) {
      throw new InvalidNumberError(ERROR_MESSAGE.INCLUDE_EMPTY_NUMBER);
    }
  }
}

export default WinningNumber;
