import { validatePurchaseAmount } from '../utils/index.js';

export default class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate(purchaseAmount);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  #validate(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }
}
