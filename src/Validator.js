import InputError from './errors/InputError.js';
import { ERROR_MESSAGES } from './constants/index.js';
class Validator {
  static isValidPurchaseAmount(price) {
    new this().#isNaN(price);
    new this().#isUnit(price);
    new this().#isZero(price);

    return true;
  }
  static isValidLottery(lottery) {
    //중복이 없는지
    //해당 범위 숫자의 값인지
    //해당값들이 정수인지
    new this().#isduplicated(lottery);
    new this().#isInRange(lottery);
    return true;
  }
  #isInRange(arr) {
    for (const num of arr) {
      if (num < 1 || num > 45) {
        throw new InputError('해당 범위의 숫자가 아닙니다.');
      }
    }
    return true;
  }

  #isduplicated(arr) {
    const set = new Set();
    for (const num of arr) {
      if (set.has(num)) {
        throw new InputError('중복된 숫자가 존재합니다.');
      }
      set.add(num);
    }
    return true;
  }
  #isUnit(price) {
    if (price % 1000 !== 0) throw new InputError(ERROR_MESSAGES.incorrectUnit);
    return true;
  }
  #isNaN(value) {
    if (Number.isNaN(value)) {
      throw new InputError(ERROR_MESSAGES.notANumber);
    }
    return true;
  }
  #isZero(value) {
    if (value === 0) {
      throw new InputError(ERROR_MESSAGES.zero);
    }
    return true;
  }
  #isExist(value) {
    return value;
  }
}
export default Validator;
