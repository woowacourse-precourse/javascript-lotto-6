import { validate } from '../utils/validate.js';

class BonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#validate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumber, bonusNumber) {
    validate.isInteger(bonusNumber);
    validate.startZero(bonusNumber);
    validate.isNumberRange(bonusNumber);

    if (winningNumber.includes(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  getBonusNumber() {
    return Number(this.#bonusNumber);
  }
}

export default BonusNumber;
