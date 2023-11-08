import { REGEXP } from '../constants/regexp';
import { ERROR_MESSAGE } from '../constants/messages';

class Validate {
  static numberValidate(value) {
    const NUMBER_REGEX = REGEXP.numberRegexp.test(value);
    if (!NUMBER_REGEX) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidNumber}`);
  }

  static divisionValidate(value) {
    if (value % 1000 !== 0) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidDivision}`);
    }
  }

  static quantityValidate(value) {
    if (value === 0) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidQuantity}`);
    }
  }

  static rangeValidate(value) {
    if (value < 1 || value > 45)
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidRange}`);
  }

  static lengthValidate(value) {
    if (value.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidLength}`);
    }
  }

  static bonusValidate(value) {
    const BONUS_REGEXP = REGEXP.bonusRegexp.test(value);
    if (!BONUS_REGEXP) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidBonus}`);
  }

  static duplicateValidate(value) {
    const duplicateCheck = new Set(value);
    if (duplicateCheck.size !== value.length) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidUnique}`);
    }
  }
}

export default Validate;
