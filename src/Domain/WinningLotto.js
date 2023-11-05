import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';
import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  /**
   *
   * @param {string[]} numbers
   * @param {string} bonusNumber
   */
  constructor({ numbers, bonusNumber }) {
    super(numbers);

    this.#validate(bonusNumber);

    this.#bonusNumber = Number(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(bonusNumber) {
    if (!this.isLottoNumber(bonusNumber)) {
      throw CustomError.lotto(ERROR.message.lotto.notInRange);
    }

    if (this.hasInclude(bonusNumber)) {
      throw CustomError.lotto(ERROR.message.lotto.notUnique);
    }
  }
}

export default WinningLotto;
