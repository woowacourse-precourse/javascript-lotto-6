import { validatePurchaseAmount, inputMethod } from '../utils/index.js';
import { magicNumber, uiConstants } from '../constants/index.js';

export default class PurchaseAmount {
  #purchaseAmount;

  #lottoCnt;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCnt = this.createLottoCnt(this.#purchaseAmount);
    this.#validate(purchaseAmount);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getLottoCnt() {
    return this.#lottoCnt;
  }

  #validate(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
  }

  createLottoCnt(purchaseAmount) {
    return purchaseAmount / magicNumber.UNIT;
  }
}
