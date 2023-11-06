import { DEFAULT_ERROR_MESSAGE } from "../core/const.js";

export class PurchaseValueError extends Error {
  static TYPE_NOT_NUMBER = 0;
  static TYPE_HAS_MONEY_CHANGE = 1;
  static TYPE_NOT_PURCHASED = 2;

  /**
   * @param {number} errorType
   */
  constructor(errorType = -1) {
    super(PurchaseValueError.#getMessage(errorType));
  }

  /**
   *
   * @param {number} type
   */
  static #getMessage(type) {
    if (type === PurchaseValueError.TYPE_NOT_NUMBER) {
      return `${DEFAULT_ERROR_MESSAGE} 올바르지 않은 숫자 형식입니다.`;
    }

    if (type === PurchaseValueError.TYPE_HAS_MONEY_CHANGE) {
      return `${DEFAULT_ERROR_MESSAGE} 입력한 금액이 1000원 단위가 아닙니다.`;
    }

    if (type === PurchaseValueError.TYPE_NOT_PURCHASED) {
      return `${DEFAULT_ERROR_MESSAGE} 최소 1개 이상을 구입하셔야 합니다.`;
    }

    return DEFAULT_ERROR_MESSAGE;
  }
}
