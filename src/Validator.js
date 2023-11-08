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

  checkUserNum(userNumber) {
    if (this.isNotUserNumberFormat(userNumber)) {
      throw new Error(ERROR.NOT_FORMAT_OF_USER_NUMBER);
    }
  }

  checkUserBonusNum(userNumber, bonusNumber) {
    if (this.isNotNumber(bonusNumber)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (this.isNotRangeOfNumber(bonusNumber)) {
      throw new Error(ERROR.NOT_RANGE_OF_NUMBER);
    }
    if (this.isExistInUserNumber(userNumber, bonusNumber)) {
      throw new Error(ERROR.EXIST_IN_USER_NUMBER);
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
    return Number(value) < 1 || Number(value) > 45;
  }

  isDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  isNotUserNumberFormat(userNumber) {
    const valid = /^[0-9]+(,[0-9]+)+$/;
    return !valid.test(userNumber);
  }

  isExistInUserNumber (userNumber, bonusNumber) {
    return userNumber.includes(Number(bonusNumber));
  }
}

export default Validator;