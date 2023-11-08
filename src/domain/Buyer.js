import CustomError from '../CustomError.js';
import { ERROR, LOTTO } from '../Constant.js';

class Buyer {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    const REGEX_NUMERIC = /^\d+$/;
    if (!REGEX_NUMERIC.test(money)) {
      throw new CustomError(ERROR.MONEY_NOT_A_NUMBER);
    }
    if (money <= 0) {
      throw new CustomError(ERROR.MONEY_NOT_A_POSITIVE);
    }
    if (money > LOTTO.MONEY_LIMIT) {
      throw new CustomError(ERROR.EXCEED_MONEY_LIMIT);
    }
    if (money % LOTTO.MONEY_UNIT !== 0) {
      throw new CustomError(ERROR.INVALID_MONEY_UNIT);
    }
  }
}

export default Buyer;
