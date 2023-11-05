import strings from './constants/strings.js';
import error from './constants/error.js';

const validator = {
  validationExpense(expense) {
    this.isPositiveInteger(expense);
    this.isLessThenExpense(expense);
    this.isRemainLottoPrice(expense);
  },

  validationNumber(numbers) {
    this.isDifferentCount(numbers);
    this.isDuplicateNumber(numbers);

    numbers.forEach((inputElement) => {
      this.isPositiveInteger(inputElement);
      this.isNotBetweenNumber(inputElement);
    });
  },

  validationBonusNumber(numbers, number) {
    this.isPositiveInteger(number);
    this.isNotBetweenNumber(number);
    this.isIncludeNumber(numbers, number);
  },

  isLessThenExpense(expense) {
    if (expense < strings.LOTTO_PRICE) {
      throw new Error(error.EXPENSE_MORE_THEN_LOTTO_PRICE);
    }
  },

  isRemainLottoPrice(expense) {
    if (expense % strings.LOTTO_PRICE !== strings.REMAIN) {
      throw new Error(error.EXPENSE_UNIT_LOTTO_PRICE);
    }
  },

  isPositiveInteger(number) {
    if (strings.EXCLUDING_NUMBERS_REGEX.test(number)) {
      throw new Error(error.CORRECT_INTEGER);
    }
  },

  isDifferentCount(numbers) {
    if (numbers.length !== strings.LOTTO_COUNT) {
      throw new Error(error.NUMBER_CORRECT_CONT);
    }
  },

  isNotBetweenNumber(number) {
    if (number < strings.START_NUMBER || number > strings.END_NUMBER) {
      throw new Error(error.NUMBER_CORRECT_BETWEEN);
    }
  },

  isDuplicateNumber(numbers) {
    if (new Set(numbers).size !== strings.LOTTO_COUNT) {
      throw new Error(error.NUMBER_NOT_DUPLICATE);
    }
  },

  isIncludeNumber(numbers, number) {
    if (numbers.includes(number)) {
      throw new Error(error.NUMBER_INCLUDE_BONUS_NUMBER);
    }
  },
};
export default validator;
