import { validateNumber } from "./utils/validation.js";
import { BUY_PRICE_ERROR } from "./constant/ERROR.js";

class BuyPrice {
  #buyPrice;

  constructor(buyPrice) {
    this.#validate(buyPrice);
    this.#buyPrice = buyPrice;
  }

  #validate(price) {
    if (validateNumber.isNumber(price)) {
      throw new Error(BUY_PRICE_ERROR.isNumber);
    }
    if (validateNumber.isDivideThousand(price)) {
      throw new Error(BUY_PRICE_ERROR.isDivideThousand);
    }
    if (validateNumber.isBiggerThanThousand(price)) {
      throw new Error(BUY_PRICE_ERROR.isBiggerThanThousand);
    }
  }

  get buyPrice() {
    return this.#buyPrice;
  }
}

export default BuyPrice;
