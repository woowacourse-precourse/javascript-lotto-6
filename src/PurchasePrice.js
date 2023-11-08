import { validateNumber } from "./utils/validation.js";
import { PURCHASE_PRICE } from "./constant/ERROR.js";

class PurchasePrice {
  #purchasePrice;

  constructor(purchasePrice) {
    this.#validate(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validate(price) {
    if (!validateNumber.isNumber(price)) {
      throw new Error(PURCHASE_PRICE.isNumber);
    }

    if (!validateNumber.isDivisible(price)) {
      throw new Error(PURCHASE_PRICE.isDivisible);
    }

    if (!validateNumber.isAtLeastPrice(price)) {
      throw new Error(PURCHASE_PRICE.isAtLeastPrice);
    }
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }
}

export default PurchasePrice;
