import { ERROR } from './constant.js';

class Validate {
  static isEmpty(value) {
    return value === '';
  }

  static isThousands(value) {
    return value % 1000 === 0;
  }

  static checkLottoBudget(lottoBudget) {
    if (!this.isThousands(lottoBudget) || this.isEmpty(lottoBudget)) {
      throw new Error(ERROR.budget);
    }
  }
}

export default Validate;
