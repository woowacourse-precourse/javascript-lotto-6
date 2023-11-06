import { validateBuyPrice } from "./utils/validation.js";
import { BUY_PRICE_ERROR } from "./constant/ERROR.js";

class BuyPrice {
  #buyPrice;

  constructor(buyPrice) {
    this.#validate(buyPrice);
    this.#buyPrice = buyPrice;
  }

  #validate(price) {
    price = Number(price);

    if (validateBuyPrice.isNumber(price)) {
      throw new Error(BUY_PRICE_ERROR.isNumber);
    }
    if (validateBuyPrice.isDivideThousand(price)) {
      throw new Error(BUY_PRICE_ERROR.isDivideThousand);
    }
    if (validateBuyPrice.isBiggerThanThousand(price)) {
      throw new Error(BUY_PRICE_ERROR.isBiggerThanThousand);
    }
  }

  get buyPrice() {
    return this.#buyPrice;
  }
}

export default BuyPrice;
