import EXCEPTION from '../constant/Exception';
import Init from '../constant/Init';

class Purchase {
  #purchaseAmount;

  constructor(userInput) {
    this.#purchaseAmount = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    if (!Number(userInput)) {
      throw new Error(EXCEPTION.nonNumericInputError);
    }
    if (userInput % Init.lottoAmount !== 0) {
      throw new Error(EXCEPTION.inValidAmountError);
    }
    if (userInput === 0) {
      throw new Error(EXCEPTION.amountIsZeroError);
    }
  }

  calculatePurchaseCount() {
    const PURCHASE_COUNT = this.#purchaseAmount / Init.lottoAmount;
    return PURCHASE_COUNT;
  }
}

export default Purchase;