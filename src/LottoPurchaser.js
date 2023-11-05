import { ERROR } from './Message.js';

class LottoPurchaser {
  static #ZERO = 0;
  static #THOUSAND = 1000;

  #purchaseAmount;

  constructor(purchaseAmount) {
    LottoPurchaser.#validate(Number(purchaseAmount));
    this.#purchaseAmount = Number(purchaseAmount);
  }

  static #validate(value) {
    if (value === LottoPurchaser.#ZERO) throw new Error(ERROR.falsy);
    if (Number.isNaN(value)) throw new Error(ERROR.falsy);
    if (value % LottoPurchaser.#THOUSAND !== LottoPurchaser.#ZERO) {
      throw new Error(ERROR.notBeDividedByThousand);
    }
  }
}

export default LottoPurchaser;
