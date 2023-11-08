import { PURCHASE_AMOUNT } from './constants/Error.js';
import { GAME } from './constants/Setting.js';

class Purchaser {
  #number;

  constructor(inputValue) {
    const purchaseAmount = Number(inputValue);
    this.#validate(purchaseAmount);
    this.#number = purchaseAmount;
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error(PURCHASE_AMOUNT.notNumber);
    }
    if (number < GAME.unit) {
      throw new Error(PURCHASE_AMOUNT.notMin);
    }
    if (number % GAME.unit !== 0) {
      throw new Error(PURCHASE_AMOUNT.invalidUnit);
    }
  }

  get purchaseAmount() {
    return this.#number;
  }
}

export default Purchaser;
