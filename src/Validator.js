import strings from './constants/strings.js';
import error from './constants/error.js';

const validator = {
  validationExpense(expense) {
    this.isPositiveInteger(expense);
    this.isLessThenExpense(expense);
    this.isRemainLottoPrice(expense);
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
      throw new Error(error.EXPENSE_INTEGER);
    }
  },
};
export default validator;
