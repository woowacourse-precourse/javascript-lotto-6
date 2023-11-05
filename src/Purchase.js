import { PurchaseErrorMessage, PurchaseRule } from './models/const.js';

class Purchase {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(value) {
    const number = Number(value);

    if (!number) {
      throw new Error(PurchaseErrorMessage.NoValue);
    }

    if (number % PurchaseRule.UNIT) {
      throw new Error(PurchaseErrorMessage.WrongUnit);
    }
  }
}

export default Purchase;
