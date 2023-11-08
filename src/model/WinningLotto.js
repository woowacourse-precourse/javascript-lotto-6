import { ERRORMESSAGE } from '../constants/constants.js';
import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
  }

  setBonusNumber(bonusNumber) {
    this.#bonusValidate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getFullLottoNumber() {
    return {
      lottoNumber: super.getLottoNumber(),
      bonusNumber: this.#bonusNumber,
    };
  }

  #bonusValidate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusType);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERRORMESSAGE.bonusInput);
    }

    if (super.getLottoNumber().includes(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusDuplicate);
    }
  }
}

export default WinningLotto;
