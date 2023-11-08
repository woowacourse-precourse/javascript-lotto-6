import { validateNumber } from "./utils/validation.js";
import { PURCHASE_PRICE_ERROR } from "./constant/ERROR.js";

class PurchasePrice {
  #purchasePrice;

  constructor(purchasePrice) {
    this.#validate(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validate(price) {
    if (!validateNumber.isNumber(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isNumber);
    }
    if (!validateNumber.isDividePrice(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isDividePrice);
    }
    if (!validateNumber.isBiggerThanPrice(price)) {
      throw new Error(PURCHASE_PRICE_ERROR.isBiggerThanPrice);
    }
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }
}

export default PurchasePrice;
