import { LOTTO } from './constant.js';

class Util {
  static calculatePurchaseCount(budget) {
    return budget / LOTTO.price;
  }
}

export default Util;
