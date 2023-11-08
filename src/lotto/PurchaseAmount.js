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
    this.#isNumber(purchaseAmount);
    // 0 체크
    this.#isNotZero(purchaseAmount);
    // 양옆 공백 체크
    this.#isNotEmpty(purchaseAmount);
    // 1000단위 체크
    this.#isRightUnit(purchaseAmount);
  }

  #isNumber(number) {
    if (isNaN(number)) throw new Error(errorConstants.NOT_A_NUMBER);
  }

  #isNotZero(number) {
    if (!number) throw new Error(errorConstants.NOT_ZERO);
  }

  #isNotEmpty(number) {
    if (/\s/.test(String(number))) throw new Error(errorConstants.NOT_EMPTY);
  }

  #isRightUnit(number) {
    if (number % magicNumber.UNIT !== magicNumber.ZERO)
      throw new Error(errorConstants.WRONG_UNIT);
  }

  createPurchaseCnt(purchaseAmount) {
    return purchaseAmount / magicNumber.UNIT;
  }
}
