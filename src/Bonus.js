import Lotto from './Lotto.js';
import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from './constants/Messages.js';

import handleValidationError from './utils/error/index.js';
import { isInteger, isNumber, isNumberValidScope } from './utils/validators/index.js';

class Bonus {
  /**
   * @type {number}
   * @private
   */
  #bonusNumber;

  /**
   * @param {string} bonus
   * @param {Lotto} winningNumbers
   */
  constructor(bonus, winningNumbers) {
    this.#validate(bonus, winningNumbers);

    this.#bonusNumber = Number(bonus);
  }

  static of(bonus, winningNumbers) {
    return new Bonus(bonus, winningNumbers);
  }

  // why? Private method
  // eslint-disable-next-line class-methods-use-this
  #validate(bonus, winningNumbers) {
    if (!isNumber(bonus)) handleValidationError(ERROR_MESSAGE.number);
    if (!isInteger(bonus)) handleValidationError(ERROR_MESSAGE.integer);
    if (!isNumberValidScope(bonus)) handleValidationError(ERROR_MESSAGE_FUNCTION.validScope());
    if (winningNumbers.isDuplicatedWinningNumbers(bonus)) {
      handleValidationError(ERROR_MESSAGE.winningDuplication);
    }
  }

  /**
   * @returns {number}
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
