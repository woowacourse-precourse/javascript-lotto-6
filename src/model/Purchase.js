import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/message";

class Purchase {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.purchaseAmountNotNumber);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmountNotDivisible);
    }
  }

  getAmount() {
    return this.#amount;
  }
}

export default Purchase;
