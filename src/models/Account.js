import OPTION from '../constants/option.js';
import MESSAGE from '../constants/message.js';
import InputError from '../error/InputError.js';

class Account {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  #validate(purchaseAmount) {
    if (!Number.isSafeInteger(purchaseAmount) || purchaseAmount < 0) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBePositiveInteger);
    }
    if (purchaseAmount === 0 || purchaseAmount % OPTION.amountUnit) {
      throw new InputError(MESSAGE.error.purchaseAmountMustBeAmountUnit);
    }
  }
}

export default Account;
