import { REGEX } from '../constant/Regex.js';
import { ERROR_MESSAGE } from '../constant/ErrorMessage.js';

export default class Validator {
  checkIsNumber(value) {
    if (!REGEX.IS_NUMBER.test(value)) {
      throw new Error(ERROR_MESSAGE.MONEY_NOT_NUMBER);
    }
  }

  checkIsGreaterThanThousand(value) {
    if (!REGEX.IS_GREATER_THAN_THOUSAND.test(value)) {
      throw new Error(ERROR_MESSAGE.MONEY_NOT_GREATER_THAN_THOUSAND);
    }
  }

  checkIsThousandMultiple(value) {
    if (!REGEX.IS_THOUSAND_MULTIPLE.test(value)) {
      throw new Error(ERROR_MESSAGE.MONEY_NOT_THOUSAND_MULTIPLE);
    }
  }

  checkIsCommaSeparatedNumber(value) {
    if (!REGEX.IS_COMMA_SEPARATED_NUMBER.test(value)) {
      throw new Error(ERROR_MESSAGE.WIN_NUMBER_NOT_COMMA_SEPARATED);
    }
  }

  checkIsSixNumbers(value) {
    if (!REGEX.IS_SIX_NUMBERS.test(value)) {
      throw new Error(ERROR_MESSAGE.WIN_NUMBER_NOT_SIX_DIGITS);
    }
  }

  checkIsCommaSeparatedNumberBetween1And45(value) {
    if (!REGEX.IS_COMMA_SEPARATED_NUMBER_BETWEEN_1_AND_45.test(value)) {
      throw new Error(ERROR_MESSAGE.WIN_NUMBER_OUT_OF_RANGE);
    }
  }

  checkIsUnique(value) {
    const numbers = value.split(',');
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.WIN_NUMBER_NOT_UNIQUE);
    }
  }

  checkBonusIsNumber(value) {
    if (!REGEX.IS_NUMBER.test(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NOT_NUMBER);
    }
  }

  checkIsBetween1And45(value) {
    if (!REGEX.IS_BETWEEN_1_AND_45.test(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_OUT_OF_RANGE);
    }
  }

  checkIsNotInWin(value, win) {
    if (win.includes(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_IN_WIN);
    }
  }
}
