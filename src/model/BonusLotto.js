import { ERRORMESSAGE } from '../utils/const.js';

class BonusLotto {
  #bonusNumber;

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusValidate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #bonusValidate(bonusNumber, lottoNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusType);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERRORMESSAGE.bonusInput);
    }

    if (lottoNumber.includes(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusDuplicate);
    }
  }
}

export default BonusLotto;
