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
  static isValidBonus(bonusNumber, winningLottery) {
    for (const num in winningLottery) {
      if (bonusNumber === num) {
        throw new InputError('중복입니다.');
      }
    }
    return true;
  }
  #isInRange(arr) {
    for (const num of arr) {
      if (num < 1 || num > 45) {
        throw new InputError('해당 범위의 숫자가 아닙니다.');
      }
    }
  }

  #isduplicated(arr) {
    const set = new Set();
    for (const num of arr) {
      if (set.has(num)) {
        throw new InputError('중복된 숫자가 존재합니다.');
      }
      set.add(num);
    }
  }
  #isUnit(price) {
    if (price % 1000 !== 0) throw new InputError(ERROR_MESSAGES.incorrectUnit);
  }
  #isNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error('[ERROR]');
    }
  }
  #isZero(value) {
    if (value === 0) {
      throw new InputError(ERROR_MESSAGES.zero);
    }
  }
  #isExist(value) {
    return value;
  }
}
export default Validator;
