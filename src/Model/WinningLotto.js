import Lotto from './Lotto.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  get bonusNumber() {
    return this.#bonusNumber;
  }

  set bonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  #validateBonusNumber(number) {
    this.#ifNumberIsInvalid(number, () => {
      throw new CustomError(ERROR.lotto.invalidNumber);
    });

    this.#ifNumberIsDuplicated(number, () => {
      throw new CustomError(ERROR.lotto.duplicatedNumber);
    });
  }

  #ifNumberIsInvalid(number, callback) {
    if (this.isInvalidLottoNumber(number)) {
      callback();
    }
  }

  #ifNumberIsDuplicated(number, callback) {
    const setAllNumbers = new Set([...this.numbers, number]);
    const sizeOfWinningLotto = LOTTO.size + LOTTO.sizeOfBonusNumber;
    if (setAllNumbers.size !== sizeOfWinningLotto) {
      callback();
    }
  }
}

export default WinningLotto;
