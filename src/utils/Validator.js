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

  static checkNumberRange(userInput) {
    if (!userInput.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR.rangeOfLottoNumber);
    }

    return;
  }

  static checkNumberRange(userInput) {
    if (!userInput.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR.rangeOfLottoNumber);
    }

    return;
  }

  static checkInteger(userInput) {
    if (!userInput.every((number) => Number.isInteger(number))) {
      throw new Error(ERROR.checkInteger);
    }

    return;
  }

  static checkDifferentNumbers(userInput) {
    const numbersSet = new Set(userInput);
    if (numbersSet.size !== userInput.length) {
      throw new Error(ERROR.differentNumber);
    }

    return;
  }
}

export default Validator;
