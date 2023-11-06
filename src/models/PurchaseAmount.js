import { validate } from '../utils/validate.js';

class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  #validate(amount) {
    validate.isInteger(amount);
    validate.startZero(amount);

    if (Number(amount) < 1000) {
      throw new Error('[ERROR] 금액은 1000이상 이어야 합니다.');
    }

    if (Number(amount) % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1000단위 이어야 합니다.');
    }
  }

  getLottoCount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;
