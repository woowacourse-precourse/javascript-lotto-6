import { MIN_AMOUNT } from "./constants/standard";
import { ERROR_AMOUNT_RANGE, ERROR_AMOUNT_TYPE } from "./constants/validate";

class Purchase {
  #userAmount;

  constructor(amount) {
    this.#validate(amount);
    this.#userAmount = amount;
  }

  #validate(amount) {
    this.#validateAmountRange(amount);
    this.#validateAmountType(amount);
  }
  #occurError(errorMessage) {
    throw new Error(errorMessage);
  }
  #validateAmountRange(amount) {
    if (amount < MIN_AMOUNT) {
      this.#occurError(ERROR_AMOUNT_RANGE);
    }
  }
  #validateAmountType(amount) {
    if (isNaN(amount)) {
      this.#occurError(ERROR_AMOUNT_TYPE);
    }
  }

  getPurchaseCount() {
    return this.#userAmount / 1000;
  }
}

export default Purchase;
