import { ERROR_PRICE_INVALID, ERROR_PRICE_NOT_SPLITTED } from "./constants";

const UNIT_OF_PURCHASE = 1000;

class GetPurchaseAmount {
  #purchase;

  constructor(purchase) {
    this.#purchaseValidate(purchase);
    this.#purchase = purchase;
  }

  #purchaseValidate(purchase) {
    const regexNumber = /^\d+$/;
    if (!regexNumber.test(purchase)) {
      throw new Error(ERROR_PRICE_INVALID);
    } else if (purchase % UNIT_OF_PURCHASE !== 0) {
      throw new Error(ERROR_PRICE_NOT_SPLITTED);
    }
  }

  getPurchaseAmount() {
    return this.#purchase;
  }
}

export default GetPurchaseAmount;
