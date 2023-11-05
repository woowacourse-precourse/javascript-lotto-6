import { DIVISOR } from "./utils/constants.js";

class PurchaseLottos {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {}

  getLottoCount() {
    return this.#amount / DIVISOR;
  }
}

export default PurchaseLottos;
