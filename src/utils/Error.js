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

export class WinningNumberError extends Error {
  static TYPE_NOT_AMOUNT_6 = 0;
  static TYPE_OUT_OF_RANGE = 1;
  static TYPE_DUPLICATED = 2;

  /**
   * @param {number} errorType
   */
  constructor(errorType = -1) {
    super(WinningNumberError.#getMessage(errorType));
  }

  /**
   *
   * @param {number} type
   */
  static #getMessage(type) {
    if (type === WinningNumberError.TYPE_NOT_AMOUNT_6) {
      return `${DEFAULT_ERROR_MESSAGE} 입력된 당첨 번호가 6개가 아닙니다.`;
    }

    if (type === WinningNumberError.TYPE_OUT_OF_RANGE) {
      return `${DEFAULT_ERROR_MESSAGE} 당첨 번호가 1~45 사이의 값이 아닙니다.`;
    }

    if (type === WinningNumberError.TYPE_DUPLICATED) {
      return `${DEFAULT_ERROR_MESSAGE} 중복된 당첨 번호가 있습니다.`;
    }

    return DEFAULT_ERROR_MESSAGE;
  }
}

export class BonusNumberError extends Error {
  static TYPE_OUT_OF_RANGE = 0;
  static TYPE_DUPLICATED = 2;

  /**
   * @param {number} errorType
   */
  constructor(errorType = -1) {
    super(BonusNumberError.#getMessage(errorType));
  }

  /**
   *
   * @param {number} type
   */
  static #getMessage(type) {
    if (type === BonusNumberError.TYPE_OUT_OF_RANGE) {
      return `${DEFAULT_ERROR_MESSAGE} 당첨 번호가 1~45 사이의 값이 아닙니다.`;
    }

    if (type === BonusNumberError.TYPE_DUPLICATED) {
      return `${DEFAULT_ERROR_MESSAGE} 당첨 번호들과 중복되는 번호입니다.`;
    }

    return DEFAULT_ERROR_MESSAGE;
  }
}

export class ReadLineError extends Error {
  constructor() {
    super(`${DEFAULT_ERROR_MESSAGE} 잘못된 입력 호출입니다.`);
  }
}
