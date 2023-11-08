import inputView from './views/inputView';
import validator from './utils/validator';
import { ERROR_MESSAGE } from './constants/message';
import converter from './utils/Converter';
import { PURCHASE_AMOUNT } from './constants/api';

class User {
  #purchaseAmount;

  constructor() {}

  validatePurchaseAmount(purchaseAmount) {
    if (!validator.isPositiveInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }

    // 구입 금액이 로또 가격으로 나누어 떨어지지 않는 경우 예외 처리한다.
    if (!validator.isDividedBy(purchaseAmount, PURCHASE_AMOUNT.PRICE)) {
      throw new Error(ERROR_MESSAGE.NOT_SEPERATED_BY(PURCHASE_AMOUNT.PRICE));
    }

    if (purchaseAmount > PURCHASE_AMOUNT.MAX) {
      throw new Error(ERROR_MESSAGE.BIGGER_THAN_MAX(PURCHASE_AMOUNT.MAX));
    }
  }

  async setPurchaseAmount() {
    // 입력
    this.#purchaseAmount = await inputView.inputPurchaseAmount();

    // 형변환
    if (!validator.isNumericString(this.#purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
    this.#purchaseAmount = converter.numbericStringToNumber(this.#purchaseAmount);

    // 검증
    this.validatePurchaseAmount(this.#purchaseAmount);
  }
};

export default User;
