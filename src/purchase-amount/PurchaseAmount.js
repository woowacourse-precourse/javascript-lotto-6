import { validatePurchaseAmount } from '../utils/index.js';

export default class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate(purchaseAmount);
  }

  getPurchaseAmount() {
    console.log(this.#purchaseAmount, 'get');
  }

  #validate(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }
}
