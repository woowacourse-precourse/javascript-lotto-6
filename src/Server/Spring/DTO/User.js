/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { ERROR_MESSAGE } from '../../../Util/Message.js';

class User {
  #purchaseAmount;
  // #userLotto;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  #validate(purchaseAmount) {
    if (Number.isNaN(Number(purchaseAmount))) throw new Error(ERROR_MESSAGE.isChar);
  }
}

export default User;
