import { PurchaseErrorMessage } from './models/message.js';
import { PurchaseRule } from './models/rule.js';

class Purchase {
  #amount;

  get amount() {
    return this.#amount;
  }

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
