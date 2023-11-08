import CustomError from './CustomError.js';
import ERROR from '../constants/Error.js';
import { SETTING } from '../constants/GameSetting.js';

const { EMPTY, UNIT, RANGE_MIN, RANGE_MAX, MAX_SIZE, MIN_VALUE } = SETTING;

const Conditions = {
  isNotEmpty(value) {
    return value !== EMPTY;
  },
  hasNoWhitespace(value) {
    return !/\s/.test(value);
  },

  isThousandUnits(value) {
    return value % UNIT === MIN_VALUE;
  },
  isPositiveInteger(value) {
    return Number.isInteger(Number(value)) && value > MIN_VALUE;
  },
  isInRange(value) {
    return value >= RANGE_MIN && value <= RANGE_MAX;
  },
  isCorrectLength(arr) {
    return arr.length === MAX_SIZE;
  },
  isDuplicate(arr) {
    return new Set(arr).size === MAX_SIZE;
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
    { message: ERROR.COMMON_INPUT, condition: Conditions.isNotEmpty(value) },
    {
      message: ERROR.COMMON_WHITESPACE,
      condition: Conditions.hasNoWhitespace(value),
    },
  ];
  inputConditions.forEach(({ message, condition }) => {
    throwError(message, condition);
  });
}

export { throwError, validateCommonInput, Conditions };
