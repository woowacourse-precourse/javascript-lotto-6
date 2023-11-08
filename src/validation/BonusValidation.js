import { BONUS_NUMBER_ERROR } from '../constants/error.js';
import ValidationError from '../error/ValidationError.js';
import { MAX_NUMBER, MIN_NUMBER } from '../constants/constant.js';

class BonusValidation {
  /**
   * 입력된 보너스 번호가 당첨 번호에 포함되어 있는지 확인합니다.
   * @param {number} bonusNnumber
   * @param {number[]} lottos
   */
  static checkDuplicatie(bonusNnumber, lottos) {
    if (lottos.includes(bonusNnumber)) throw new ValidationError(BONUS_NUMBER_ERROR.DUPLICATE);
  }

  /**
   * 입력된 보너스 번호가 숫자인지 확인합니다.
   * @param {number} bonusNnumbers
   */
  static checkNumber(bonusNnumber) {
    if (
      !Number.isInteger(bonusNnumber) ||
      Number.isNaN(bonusNnumber) ||
      bonusNnumber < MIN_NUMBER ||
      bonusNnumber > MAX_NUMBER
    )
      throw new ValidationError(BONUS_NUMBER_ERROR.NUMBER);
  }
}

export default BonusValidation;
