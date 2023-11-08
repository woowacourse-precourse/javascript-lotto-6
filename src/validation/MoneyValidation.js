import ValidationError from '../error/ValidationError.js';
import { PURCHASE_AMOUNT_ERROR } from '../constants/error.js';
import { MULTIPLE } from '../constants/constant.js';

class MoneyValidation {
  /**
   * 인자가 NaN이거나 1000보다 작은 수면 Error를 생성
   * @param {number} money
   */
  static checkNumber(money) {
    if (Number.isNaN(money) || money < MULTIPLE) throw new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);
  }

  /**
   * 나눈 숫자가 1000의 배수가 아니면 Error 생성
   * @param {number} money
   */
  static checkMultiple(money) {
    const division = money / MULTIPLE;
    if (Math.floor(division) !== division) throw new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);
  }
}

export default MoneyValidation;
