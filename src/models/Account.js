import OPTION from '../constants/option.js';
import MESSAGE from '../constants/message.js';
import InputError from '../error/InputError.js';

class Account {
  #purchaseAmount;

  #lottos;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#lottos = [];
  }

  #validate(purchaseAmount) {
    if (!Number.isSafeInteger(purchaseAmount) || purchaseAmount < 0) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBePositiveInteger);
    }
    if (purchaseAmount === 0 || purchaseAmount % OPTION.amountUnit) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBeAmountUnit);
    }
  }

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Account;
