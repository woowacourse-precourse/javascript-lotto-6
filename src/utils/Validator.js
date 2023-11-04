import ERROR from '../constants/error.js';
import PURCHASE_PRICE from '../constants/purchasePrice.js';

const { errorCase, errorMessage } = ERROR;

const Validator = {
  validateEmptyInput(input) {
    if (input.trim() === errorCase.EMPTY_STRING) {
      throw new Error(errorMessage.EMPTY_STRING);
    }
  },

  validateDivisible(number) {
    if (number % PURCHASE_PRICE.divisionUnit !== 0) {
      throw new Error(errorMessage.INVALID_DIVISION);
    }
  },

  validateMinPrice(input) {
    if (input < PURCHASE_PRICE.minPrice) {
      throw new Error(errorMessage.INVALID_MIN_PRICE);
    }
  },

  validateRegExp(input, regExp) {
    if (!regExp.test(input)) {
      throw new Error(errorMessage.INVALID_STRING_PRICE);
    }
  },

  validatePurchasePrice(input) {
    this.validateRegExp(input, PURCHASE_PRICE.regExp);
    this.validateMinPrice(input);
    this.validateDivisible(input);
  },
};

export default Validator;
