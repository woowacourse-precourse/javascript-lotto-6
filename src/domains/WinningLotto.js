import WinningLottoError from '../errors/WinningLottoError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class WinningLotto {
  /**
   * @member {number} MIN_NUM 로또가 가질 수 있는 숫자의 최소값
   * @member {number} MAX_NUM 로또가 가질 수 있는 숫자의 최대값
   */

  static MIN_NUM = 1;

  static MAX_NUM = 45;

  /**
   * @type {[number, number. number, number, number, number, number]}
   */

  #winningNumbers;

  /**
   * @type { number }
   */

  #bonusNumber;

  /**
   *
   * @param {[number, number. number, number, number, number, number]} winningNumbers
   * @param { string } bonusNumber
   */

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = Number(bonusNumber);
    this.validateBonusNumber();
  }

  validateBonusNumber() {
    this.validateType();
    this.validateRange();
    this.validateDuplication();
  }

  validateType() {
    if (typeof this.#bonusNumber !== 'number' || Number.isNaN(this.#bonusNumber)) {
      throw new WinningLottoError(ERROR_MESSAGES.lotto_not_a_number);
    }
  }

  validateRange() {
    if (this.#bonusNumber < WinningLotto.MIN_NUM || this.#bonusNumber > WinningLotto.MAX_NUM) {
      throw new WinningLottoError(ERROR_MESSAGES.lotto_out_of_range);
    }
  }

  validateDuplication() {
    if (
      [...this.#winningNumbers, this.#bonusNumber].length !==
      new Set([...this.#winningNumbers, this.#bonusNumber]).size
    ) {
      throw new WinningLottoError(ERROR_MESSAGES.winning_lotto_have_duplication_number);
    }
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
