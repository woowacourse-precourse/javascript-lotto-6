import { ERROR } from "./constant.js";

class Validator {
  validateInputMoney(money) {
    if (this.isNotNumber(money)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (this.isNotUnitOfPrice(money)) {
      throw new Error(ERROR.NOT_UNIT_OF_PRICE);
    }
    return true;
  }

  isNotNumber(value) {
    const valid = /^[0-9]+$/;
    return !valid.test(value);
  }

  isNotUnitOfPrice(money) {
    return Boolean(money % 1000) || money === 0;
  }
}

export default Validator;