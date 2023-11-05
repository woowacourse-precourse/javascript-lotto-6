import { LOTTO_PRICE_UNIT } from './constants.js';

class Price {
  constructor() {}

  static isValidPrice(price) {
    return !isNaN(price) && price % LOTTO_PRICE_UNIT === 0;
  }

  static calculateLottoAmount(price) {
    return price / LOTTO_PRICE_UNIT;
  }
}

export default Price;
