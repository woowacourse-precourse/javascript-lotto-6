import { magicNumber, errorConstants } from '../constants/index.js';

export default class PurchaseAmount {
  #purchaseAmount;

  #purchaseCnt;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseCnt = this.createPurchaseCnt(this.#purchaseAmount);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getPurchaseCnt() {
    return this.#purchaseCnt;
  }

  #validate(purchaseAmount) {
    // 숫자인지 체크
    if (isNaN(purchaseAmount)) throw new Error(errorConstants.NOT_A_NUMBER);
    // 0 체크
    if (!purchaseAmount) throw new Error(errorConstants.NOT_ZERO);
    // 양옆 공백 체크
    if (/\s/.test(String(purchaseAmount)))
      throw new Error(errorConstants.NOT_EMPTY);
    // 1000단위 체크
    if (purchaseAmount % magicNumber.UNIT !== magicNumber.ZERO)
      throw new Error(errorConstants.WRONG_UNIT);
  }

  createPurchaseCnt(purchaseAmount) {
    return purchaseAmount / magicNumber.UNIT;
  }
}
