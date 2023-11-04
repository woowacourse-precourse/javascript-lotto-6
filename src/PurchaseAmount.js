import { isDivisibleBy, isEmptyString, isNumber } from './utils/validators/index.js';

class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);

    this.#purchaseAmount = this.#convertStringToNumber(purchaseAmount);
  }

  // eslint-disable-next-line
  #validate(purchaseAmount) {
    if (isEmptyString(purchaseAmount)) {
      throw new Error('[ERROR] 빈문자열을 입력하실 수 없습니다.');
    }

    if (!isNumber(purchaseAmount)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되어있습니다.');
    }

    if (!isDivisibleBy(purchaseAmount)) {
      throw new Error('[ERROR] 1000원 단위로 입력하셔야 합니다.');
    }
  }

  // eslint-disable-next-line
  #convertStringToNumber(purchaseAmount) {
    return Number(purchaseAmount);
  }

  static of(purchaseAmount) {
    return new PurchaseAmount(purchaseAmount);
  }

  getLottoCount() {
    return this.#purchaseAmount / 1000;
  }
}

export default PurchaseAmount;
