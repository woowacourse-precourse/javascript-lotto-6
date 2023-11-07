import { ERROR } from '../constants/Constant.js';

class Validator {
  static checkThousandWonUnit(userInput) {
    if (userInput % 1000 !== 0) {
      throw new Error(ERROR.thousandWonUnit);
    }

    return;
  }
  static checkBelowThousand(userInput) {
    if (userInput < 1000) {
      throw new Error(ERROR.checkBelowThousand);
    }

    return;
  }
}

export default Validator;
