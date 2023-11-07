import CustomError from './CustomError.js';
import ERROR from '../constants/Error.js';

const {
  COMMON_INPUT,
  COMMON_WHITESPACE,
  PAYMENT_THOUSAND,
  PAYMENT_NUMBER,
  WINNING_RANGE,
  WINNING_NUMBER,
  WINNING_LENGTH,
} = ERROR;

function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new CustomError(message);
}

const conditions = {
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
    return arr.length === 6;
  },
  isDuplicate(arr) {
    return new Set(arr).size === 6;
  },
};

const Validator = {
  validateCommonInput(value) {
    const inputConditions = [
      { message: COMMON_INPUT, condition: conditions.isNotEmpty(value) },
      {
        message: COMMON_WHITESPACE,
        condition: conditions.hasNoWhitespace(value),
      },
    ];
    inputConditions.forEach(({ message, condition }) => {
      throwError(message, condition);
    });
  },

  validatePurchaseAmount(value) {
    const inputConditions = [
      {
        message: PAYMENT_NUMBER,
        condition: conditions.isPositiveInteger(value),
      },
      {
        message: PAYMENT_THOUSAND,
        condition: conditions.isThousandUnits(value),
      },
    ];
    inputConditions.forEach(({ message, condition }) => {
      throwError(message, condition);
    });
  },

  validateWinningNumber(value) {
    const winningNumberArray = value.split(',');

    throwError(WINNING_LENGTH, conditions.isCorrectLength(winningNumberArray));
    winningNumberArray.forEach((number) => {
      throwError(WINNING_NUMBER, conditions.isPositiveInteger(number));
      throwError(WINNING_RANGE, conditions.isInRange(number));
    });
  },
};

export { throwError, conditions, Validator };
