import { ERROR_MESSAGE, ERROR_SCOPE, LOTTO } from '../utils/constants.js';
import { validate } from '../utils/validate.js';

class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validate(ERROR_SCOPE.AMOUNT, amount);
    this.#amount = Number(amount);
  }

  #validate(scope, amount) {
    validate.isInteger(scope, amount);
    validate.startZero(scope, amount);

    if (Number(amount) < LOTTO.MIN_AMOUNT) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${ERROR_MESSAGE.NO_LESS_MIN_AMOUNT}`
      );
    }

    if (Number(amount) % LOTTO.AMOUNT_UNIT !== 0) {
      throw new Error(`${ERROR_MESSAGE.LOGO} ${ERROR_MESSAGE.IS_UNIT}`);
    }
  }

  getPurchaseAmount() {
    return this.#amount;
  }
}

export default PurchaseAmount;
