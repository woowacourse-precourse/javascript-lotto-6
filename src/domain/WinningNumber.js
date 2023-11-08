import Lotto from '../Lotto.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import InvalidNumberError from '../error/InvalidNumberError.js';

class WinningNumber {
  #winningLotto;

  constructor(winningNumbers) {
    WinningNumber.#validateIsNumber(winningNumbers);
    WinningNumber.#validateEmptyNumber(winningNumbers);

    this.#winningLotto = new Lotto(winningNumbers);
  }

  static #validateIsNumber(winningNumbers) {
    if (winningNumbers.some((number) => Number.isNaN(Number(number)))) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateEmptyNumber(winningNumbers) {
    if (winningNumbers.some((number) => number === 0)) {
      throw new InvalidNumberError(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  getWinningNumbers() {
    return this.#winningLotto.getLottoNumbers();
  }
}

export default WinningNumber;
