import ERROR from '../constants/error';
import CustomError from '../errors/error';
import Lotto from './Lotto';

class WinningLotto extends Lotto {
  #bonusNumber;

  /**
   *
   * @param {string[]} numbers
   * @param {string} bonusNumber
   */
  constructor(numbers, bonusNumber) {
    super(numbers);

    this.#validateBonusNumber(bonusNumber);

    this.#bonusNumber = Number(bonusNumber);
  }

  #validateBonusNumber(bonusNumber) {
    if (!this.isLottoNumber(bonusNumber)) {
      throw CustomError.lotto(ERROR.message.lotto.notInRange);
    }

    if (this.hasInclude(bonusNumber)) {
      throw CustomError.lotto(ERROR.message.lotto.notUnique);
    }
  }
}

export default WinningLotto;
