import Lotto from './Lotto';
import { ERROR_MESSAGE } from './constant';
import { throwError, validateNumberRange } from './utils';

class BonusBall {
  #number;

  constructor(bonusNumber, winningLottoNumbers) {
    this.isNumber(bonusNumber);
    this.isLotto(winningLottoNumbers);
    this.isNotDuplicate(bonusNumber, winningLottoNumbers);
    validateNumberRange(bonusNumber);

    this.#number = bonusNumber;
  }

  isNumber(bonusNumber) {
    if (typeof bonusNumber !== 'number' || Number.isNaN(bonusNumber))
      throwError(ERROR_MESSAGE.isNotNumber);
  }

  isLotto(winningLottoNumbers) {
    try {
      new Lotto(winningLottoNumbers);
    } catch (error) {
      throwError(error);
    }
  }

  isNotDuplicate(bonusNumber, winningLottoNumbers) {
    if (winningLottoNumbers.includes(bonusNumber))
      throwError(ERROR_MESSAGE.duplicateBonusBall);
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusBall;
