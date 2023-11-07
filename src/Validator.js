import CustomError from './CustomError.js';
import { ERROR_MESSAGE } from './constants/message.js';
import {
  isEmptyString,
  isIntegarString,
  isValidPurchaseUnit,
} from './utils/validation.js';

class Validator {
  static async checkPurchaseAmount(input) {
    if (isEmptyString(input)) throw new CustomError(ERROR_MESSAGE.empty);
    if (!isIntegarString(input))
      throw new CustomError(ERROR_MESSAGE.notInteger);
    if (!isValidPurchaseUnit(Number(input)))
      throw new CustomError(ERROR_MESSAGE.purchaseUnit);
  }
}

export default Validator;
