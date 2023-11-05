import { ERROR } from './Message.js';

class LottoPurchaser {
  #purchaseAmount;

  constructor(purchaseAmount) {
    LottoPurchaser.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  static #validate(value) {
    console.log(value);
    throw new Error(ERROR.falsy);
  }
}

export default LottoPurchaser;
