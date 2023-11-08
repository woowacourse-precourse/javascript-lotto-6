import { ERROR, MONEY_UNIT } from './Constants';

class Validator {
  static validatePurchaseMoney(money) {
    if (!Number.isInteger(money) || money <= 0) {
      throw new Error(ERROR.moneyNumberErrorMessage);
    }

    if (money % MONEY_UNIT !== 0) {
      throw new Error(ERROR.moneyUnitErrorMessage);
    }
  }
}

export default Validator;
