import Lotto from '../Lotto.js';
import { ERROR_MESSAGE } from '../constants/Message.js';
import { isInteger, validateNumberRange } from '../utils/index.js';
import CustomError from './CustomError.js';

class BonusBall {
  #number;

  constructor(bonusNumber, winningLottoNumbers) {
    this.#isNumber(bonusNumber);
    this.#isLotto(winningLottoNumbers);
    this.#isNotDuplicate(bonusNumber, winningLottoNumbers);
    validateNumberRange(bonusNumber);

    this.#number = bonusNumber;
  }

  #isNumber(bonusNumber) {
    if (!isInteger(bonusNumber))
      throw new CustomError(ERROR_MESSAGE.isNotNumber);
  }

  #isLotto(winningLottoNumbers) {
    try {
      new Lotto(winningLottoNumbers);
    } catch (error) {
      throw new CustomError(error);
    }
  }

  #isNotDuplicate(bonusNumber, winningLottoNumbers) {
    if (winningLottoNumbers.includes(bonusNumber))
      throw new CustomError(ERROR_MESSAGE.duplicateBonusBall);
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusBall;
