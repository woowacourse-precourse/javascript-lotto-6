import InputError from './InputError.js';
import { ERROR_MESSAGES } from './constants.js';
class Validator {
  #isUnit(price) {
    if (price % 1000 !== 0) throw new InputError(ERROR_MESSAGES.incorrectUnit);
    return true;
  }
  #isNaN(value) {
    if (Number.isNaN(value)) {
      throw new InputError(ERROR_MESSAGES.notANumber);
    }
    return true;
  }
  #isZero(value) {
    console.log(value);
    if (value === 0) {
      throw new InputError(ERROR_MESSAGES.zero);
    }
    return true;
  }

  static isValidPurchaseAmount(price) {
    new this().#isNaN(price);
    new this().#isUnit(price);
    new this().#isZero(price);

    return true;
  }
}
export default Validator;
