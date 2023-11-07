import { ERROR } from "./constant.js";

class Validator {
  validateInputMoney(money) {
    if (this.isNotNumber(money)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (this.isNotUnitOfPrice(money)) {
      throw new Error(ERROR.NOT_UNIT_OF_PRICE);
    }
    return true;
  }

  checkLottoNum(numbers) {
    if (this.isNotLottoNumberCount(numbers)) {
      throw new Error(ERROR.NOT_VALID_NUMBER_COUNT);
    }
    numbers.forEach((num) => {
      if (this.isNotRangeOfNumber(num)) {
        throw new Error(ERROR.NOT_RANGE_OF_NUMBER);
      }
    });
    if (this.isDuplicate(numbers)) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
  }

  isNotNumber(value) {
    const valid = /^[0-9]+$/;
    return !valid.test(value);
  }

  isNotUnitOfPrice(money) {
    return Boolean(money % 1000) || money === 0;
  }

  isNotLottoNumberCount(numbers) {
    return numbers.length !== 6;
  }

  isNotRangeOfNumber(value) {
    return value < 1 || value > 45;
  }

  isDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  }
}

export default Validator;