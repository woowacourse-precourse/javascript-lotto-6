import { LOTTO_PRICE, MESSAGES } from "./constants.js";

class PublishController {
  static checkPriceDivisible(price) {
    const remainder = price % LOTTO_PRICE;

    return remainder === 0;
  }

  static calculateLottoQuantity(price) {
    if (!PublishController.checkPriceDivisible(price)) {
      throw Error(MESSAGES.priceNotDivisibleError);
    }

    const lottoQuantity = Math.floor(price / LOTTO_PRICE);

    return lottoQuantity;
  }
}

export default PublishController;
