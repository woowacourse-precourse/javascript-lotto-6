import { LOTTO_ROLE } from '../constants/lotto.js';
import { MESSAGE_FORMAT } from './messageFomat.js';

export default class Validator {
  static #isPositiveNumber(number) {
    return Number.isInteger(number) && number >= 0;
  }

  static #isValidUnit(number) {
    return number % LOTTO_ROLE.unit === 0;
  }

  static validatePurchaseAmount(amount) {
    if (!this.#isPositiveNumber(amount)) {
      const message = MESSAGE_FORMAT.error('구입 금액은 0 이상의 숫자로 입력해 주세요.');
      throw new Error(message);
    }

    if (!this.#isValidUnit(amount)) {
      const unit = LOTTO_ROLE.unit.toLocaleString();
      const message = MESSAGE_FORMAT.error(`${unit} 단위로 입력해 주세요.`);
      throw new Error(message);
    }
  }
}
