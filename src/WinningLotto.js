import Lotto from './Lotto.js';
import ERROR from './constants/error.js';
import CustomError from './errors/CustomError.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  set bonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  #validateBonusNumber(number) {
    if (this.isInvalidLottoNumber(number)) {
      throw new CustomError(ERROR.lotto.invalidNumber);
    }
  }
}

export default WinningLotto;
