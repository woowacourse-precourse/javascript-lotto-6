import { NUMBER, ERROR } from "./utils/constants.js";

class PurchaseLottos {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    this.checkInvalidAmount(amount);
  }

  checkInvalidAmount(amount) {
    if (amount % NUMBER.DIVISOR !== 0 || Number(amount) === 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    }
  }

  getLottoCount() {
    return this.#amount / NUMBER.DIVISOR;
  }
}

export default PurchaseLottos;
