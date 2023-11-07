import { validateNumber } from "./utils/validation.js";
import { PURCHASE_PRICE_ERROR } from "./constant/ERROR.js";

class PurchasePrice {
  #purchasePrice;

  constructor(purchasePrice) {
    this.#validate(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validate(price) {
    if (validateNumber.isNotNumber(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isNumber);
    }
    if (validateNumber.isNotDivideThousand(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isDivideThousand);
    }
    if (validateNumber.isSmallerThanThousand(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isBiggerThanThousand);
    }
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }
}

export default PurchasePrice;
