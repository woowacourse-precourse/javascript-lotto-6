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

function throwError(message, condition) {
  if (condition) {
    return;
  }
  throw new CustomError(message);
}

function validateCommonInput(value) {
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
}

export { throwError, validateCommonInput, conditions };
