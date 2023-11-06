import CustomError from './CustomError.js';
import ERROR from './constants/Error.js';

const {
  COMMON_NOT_INPUT,
  COMMON_NOT_WHITESPACE,
  PAYMENT_NOT_THOUSAND,
  PAYMENT_NOT_NUMBER,
} = ERROR;

const Validator = {
  isNotEmpty(value) {
    return value !== '';
  },
  hasNoWhitespace(value) {
    return !/\s/.test(value);
  },
  isThousandUnits(value) {
    return value % 1000 === 0;
  },
  isNumber(value) {
    return !Number.isNaN(Number(value));
  },

  throwError(message, condition) {
    if (condition) {
      return;
    }
    throw new CustomError(message);
  },

  validateCommonInput(value) {
    const conditions = [
      { message: COMMON_NOT_INPUT, condition: this.isNotEmpty(value) },
      {
        message: COMMON_NOT_WHITESPACE,
        condition: this.hasNoWhitespace(value),
      },
    ];
    conditions.forEach(({ message, condition }) => {
      this.throwError(message, condition);
    });
  },

  validatePurchaseAmount(value) {
    const conditions = [
      { message: PAYMENT_NOT_NUMBER, condition: this.isNumber(value) },
      { message: PAYMENT_NOT_THOUSAND, condition: this.isThousandUnits(value) },
    ];
    conditions.forEach(({ message, condition }) => {
      this.throwError(message, condition);
    });
  },
};

export default Validator;
