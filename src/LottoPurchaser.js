import { ERROR } from './Message.js';

class LottoPurchaser {
  static #ZERO = 0;

  #purchaseAmount;

  constructor(purchaseAmount) {
    LottoPurchaser.#validate(Number(purchaseAmount));
    this.#purchaseAmount = Number(purchaseAmount);
  }

  static #validate(value) {
    if (value === LottoPurchaser.#ZERO) throw new Error(ERROR.falsy);
    if (Number.isNaN(value)) throw new Error(ERROR.falsy);
  }
}

export default LottoPurchaser;
