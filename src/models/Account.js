import OPTION from '../constants/option.js';
import MESSAGE from '../constants/message.js';
import InputError from '../error/InputError.js';

class Account {
  #purchaseAmount;

  #lottos;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
  }

  #validate(purchaseAmount) {
    if (!Number.isSafeInteger(purchaseAmount) || purchaseAmount < 0) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBePositiveInteger);
    }
    if (purchaseAmount === 0 || purchaseAmount % OPTION.lotto.amountUnit) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBeAmountUnit);
    }
  }

  setPurchaseAmount(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Account;
