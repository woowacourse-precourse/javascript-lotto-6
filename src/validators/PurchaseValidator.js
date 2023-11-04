import { INPUT_ERROR_MESSAGE, LOTTO_SETTING } from '../constant.js';
import ValidationError from '../errors/ValidationError.js';

class PurChaseValidator {
  static checkPurchase(input) {
    this.isUnit(input);
    this.isOverPurchase(input);
    return true;
  }

  static isUnit(input) {
    if (input / LOTTO_SETTING.unit < 1) {
      throw new ValidationError(INPUT_ERROR_MESSAGE.not_unit);
    }

    if (input % LOTTO_SETTING.unit !== 0) {
      throw new ValidationError(INPUT_ERROR_MESSAGE.not_unit);
    }
  }

  static isOverPurchase(input) {
    if (input > LOTTO_SETTING.max_purchase) {
      throw new ValidationError(INPUT_ERROR_MESSAGE.over_purchase);
    }
  }
}
export default PurChaseValidator;
