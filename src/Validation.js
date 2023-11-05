import { MESSAGE } from "./Constant.js";

class Validation {
  static validateLottoPrice(price) {
    if (price <= 0) {
      throw new Error(MESSAGE.ERROR_ZERO_PRICE);
    }
    if (price % 1000 != 0) {
      throw new Error(MESSAGE.ERROR_INVALID_PRICE);
    }
    return true;
  }
}

export default Validation;
