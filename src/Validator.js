import strings from './constants/strings.js';
import error from './constants/error.js';
import CustomError from './CustomError.js';

class Validator {
  static validationExpense(expense) {
    Validator.isPositiveInteger(expense);
    Validator.isLessThenExpense(expense);
    Validator.isRemainLottoPrice(expense);
  }

  static validationNumber(numbers) {
    Validator.isDifferentCount(numbers);
    Validator.isDuplicateNumber(numbers);

    numbers.forEach((inputElement) => {
      Validator.isPositiveInteger(inputElement);
      Validator.isNotBetweenNumber(inputElement);
    });
  }

  static validationBonusNumber(numbers, number) {
    Validator.isPositiveInteger(number);
    Validator.isNotBetweenNumber(number);
    Validator.isIncludeNumber(numbers, number);
  }

  static isLessThenExpense(expense) {
    if (expense < strings.LOTTO_PRICE) {
      throw new CustomError(error.EXPENSE_MORE_THEN_LOTTO_PRICE);
    }
  }

  static isRemainLottoPrice(expense) {
    if (expense % strings.LOTTO_PRICE !== strings.REMAIN) {
      throw new CustomError(error.EXPENSE_UNIT_LOTTO_PRICE);
    }
  }

  static isPositiveInteger(number) {
    if (strings.EXCLUDING_NUMBERS_REGEX.test(number)) {
      throw new CustomError(error.CORRECT_INTEGER);
    }
  }

  static isDifferentCount(numbers) {
    if (numbers.length !== strings.LOTTO_COUNT) {
      throw new CustomError(error.NUMBER_CORRECT_CONT);
    }
  }

  static isNotBetweenNumber(number) {
    if (number < strings.START_NUMBER || number > strings.END_NUMBER) {
      throw new CustomError(error.CORRECT_BETWEEN);
    }
  }

  static isDuplicateNumber(numbers) {
    if (new Set(numbers).size !== strings.LOTTO_COUNT) {
      throw new CustomError(error.NUMBER_NOT_DUPLICATE);
    }
  }

  static isIncludeNumber(numbers, number) {
    if (numbers.includes(number)) {
      throw new CustomError(error.NUMBER_INCLUDE_BONUS_NUMBER);
    }
  }
}
export default Validator;
