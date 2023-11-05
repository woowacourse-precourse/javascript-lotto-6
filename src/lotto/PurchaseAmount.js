import { magicNumber, errorConstants } from '../constants/index.js';

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
    // 숫자인지 체크
    if (isNaN(purchaseAmount)) throw new Error(errorConstants.NOT_A_NUMBER);
    // 공백 체크
    if (/\s/.test(String(purchaseAmount)))
      throw new Error(errorConstants.NOT_EMPTY);
    // 1000단위 체크
    if (purchaseAmount % magicNumber.UNIT !== magicNumber.ZERO)
      throw new Error(errorConstants.WRONG_UNIT);
  }

  createLottoCnt(purchaseAmount) {
    return purchaseAmount / magicNumber.UNIT;
  }
}
