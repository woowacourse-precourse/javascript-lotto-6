import { validation } from "./utils/validate.js";
import { BUY_PRICE_ERROR } from "./constant/ERROR.js";

class BuyPrice {
  #buyPrice;

  constructor(buyPrice) {
    this.#validate(buyPrice);
    this.#buyPrice = buyPrice;
  }

  #validate(price) {
    if (validation.isDivideThousand(price)) {
      throw new Error(BUY_PRICE_ERROR.isDivideThousand);
    }

    if (validation.isZero(price)) {
      throw new Error(BUY_PRICE_ERROR.isZero);
    }

    if (validation.isNumber(price)) {
      throw new Error(BUY_PRICE_ERROR.isNumber);
    }
  }

  get buyPrice() {
    return this.#buyPrice;
  }
}

export default BuyPrice;
