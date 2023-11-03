/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { ERROR_MESSAGE } from '../../../Util/Message.js';

class User {
  #purchaseAmount;
  // #userLotto;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  #validate(paramPurchaseAmount) {
    const purchaseAmount = paramPurchaseAmount.trim();
    if (purchaseAmount === '') throw new Error(ERROR_MESSAGE.isBlank);
    if (Number.isNaN(Number(purchaseAmount))) throw new Error(ERROR_MESSAGE.isChar);
    if (Number(purchaseAmount) % 1000 !== 0) throw new Error(ERROR_MESSAGE.isNotThousandDivide);
  }
}

export default User;
