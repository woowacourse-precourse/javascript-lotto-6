import { UNIT, PRICE_TYPE, ERROR } from '../constant/Constant.js';

class Validation {
  static isPriceBadUnit(price) {
    if (price % UNIT !== 0) throw new Error(ERROR.PRICE_NOT_THOUSAND);
  }

  static isPriceNull(price) {
    if (price === 0) throw new Error(ERROR.PRICE_NULL);
  }

  static isPriceNotNumber(price) {
    if (typeof price !== PRICE_TYPE) throw new Error(ERROR.PRICE_NOT_NUMBER);
  }
}

export default Validation;