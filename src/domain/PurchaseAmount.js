import { ERROR_MESSAGE } from '../constants/messages.js';

class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validatePurchaseAmount(parseInt(amount, 10));
    this.#amount = amount;
  }

  #validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.invalidAmount);
    }
  }

  getAmount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;
