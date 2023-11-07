import { ERROR, LOTTO } from '../constant/constant.js';

class Validate {
  static isEmpty(value) {
    return value === '';
  }

  static isMultipleOfPrice(value) {
    return value % LOTTO.price === 0;
  }

  static checkLottoBudget(lottoBudget) {
    if (!this.isMultipleOfPrice(lottoBudget) || this.isEmpty(lottoBudget)) {
      throw new Error(ERROR.budget);
    }
  }
}

export default Validate;
