import ERROR from '../constants/error.js';
import PURCHASE_PRICE from '../constants/purchasePrice.js';
import LOTTO_NUMBER from '../constants/lottoNumber.js';

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

  validateRegExp(input, regExp, error) {
    if (!regExp.test(input)) {
      throw new Error(error);
    }
  },

  validateInRange(number) {
    if (LOTTO_NUMBER.minNum > number || LOTTO_NUMBER.maxNum < number) {
      throw new Error(errorMessage.INVALID_IN_RANGE_WINNING_NUMBER);
    }
  },

  validateUnique(number) {
    const setNumber = new Set(number);
    if (setNumber.size !== number.length) {
      throw new Error(errorMessage.INVALID_UNIQUE_WINNING_NUMBER);
    }
  },

  validateLength(number, length) {
    if (number.length !== length) {
      throw new Error(errorMessage.INVALID_LENGTH_WINNING_NUMBER);
    }
  },

  validatePurchasePrice(input) {
    this.validateRegExp(input, PURCHASE_PRICE.regExp, errorMessage.INVALID_STRING_PRICE);
    this.validateMinPrice(input);
    this.validateDivisible(input);
  },

  validateBonusNumberString(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(errorMessage.INVALID_STRING_BONUS_NUMBER);
    }
  },

  validateNumberInWinningNumbers(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error(errorMessage.WINNING_NUMBER_IN_BONUS_NUMBER);
    }
  },

  validateWinningNumber(number) {
    this.validateRegExp(number.join(''), LOTTO_NUMBER.regExp, errorMessage.INVALID_STRING_WINNING_NUMBER);
    for (let i = 0; i < number.length; i += 1) {
      this.validateInRange(number[i]);
    }
    this.validateUnique(number);
    this.validateLength(number, LOTTO_NUMBER.count);
  },

  validateBonusNumber(number, winningNumbers) {
    this.validateInRange(number);
    this.validateBonusNumberString(number);
    this.validateNumberInWinningNumbers(number, winningNumbers);
  },
};

export default Validator;
