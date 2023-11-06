import CustomError from './CustomError.js';
import ERROR from './constants/Error.js';

const {
  COMMON_NOT_INPUT,
  COMMON_NOT_WHITESPACE,
  PAYMENT_NOT_THOUSAND,
  PAYMENT_NOT_NUMBER,
  WINNING_NOT_RANGE,
  WINNING_NOT_NUMBER,
  WINNING_NOT_LENGTH,
} = ERROR;

function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new CustomError(message);
}

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
  isPositiveInteger(value) {
    return Number.isInteger(Number(value)) && value > 0;
  },
  isInRange(value) {
    return value >= 1 && value <= 45;
  },
  isCorrectLength(arr) {
    return new Set(arr).size === 6;
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
      throwError(message, condition);
    });
  },

  validatePurchaseAmount(value) {
    const conditions = [
      { message: PAYMENT_NOT_NUMBER, condition: this.isPositiveInteger(value) },
      { message: PAYMENT_NOT_THOUSAND, condition: this.isThousandUnits(value) },
    ];
    conditions.forEach(({ message, condition }) => {
      throwError(message, condition);
    });
  },

  validateWinningNumber(value) {
    const winningNumberArray = value.split(',');

    throwError(WINNING_NOT_LENGTH, this.isCorrectLength(winningNumberArray));
    winningNumberArray.forEach((number) => {
      throwError(WINNING_NOT_NUMBER, this.isPositiveInteger(number));
      throwError(WINNING_NOT_RANGE, this.isInRange(number));
    });
  },
};

export { throwError, Validator };
