import ValidationError from '../Error/ValidationError';
import ERROR_CONSTANT from '../Constant/ErrorConstant';
import NUMBER_CONSTANT from '../Constant/NumberConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';

const DOT = '.';

const assertNonEmptyString = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }
  if (input.length === NUMBER_CONSTANT.ZERO) {
    throw new ValidationError(ERROR_CONSTANT.EMPTY_STRING);
  }
};

const assertParsableAsInteger = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  const inputLength = input.length;
  if (
    input.includes(DOT) ||
    !/^[1-9]*$/.test(input[NUMBER_CONSTANT.ZERO])
    || !/^[0-9]*$/.test(input[inputLength - NUMBER_CONSTANT.ONE])
  ) {
    throw new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING);
  }
};

const assertPositiveNumber = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(input)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (input < NUMBER_CONSTANT.ZERO) {
    throw new ValidationError(ERROR_CONSTANT.NEGATIVE_AMOUNT);
  }
};

const assertRemainderNotEqual = (value1, value2, expectedRemainderValue) => {
  if (typeof value1 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof value2 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof expectedRemainderValue !== DATATYPE_CONSTANT.NUMBER
    || Number.isNaN(expectedRemainderValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const remainder = value1 % value2;
  if (remainder !== expectedRemainderValue) {
    throw new ValidationError(ERROR_CONSTANT.REMAINDER_MISMATCH);
  }
};

const assertArraySizeEqual = (inputArray, expectedSize) => {
  if (!Array.isArray(inputArray)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  if (typeof expectedSize !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(expectedSize)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const inputArraySize = inputArray.length;
  if (inputArraySize !== expectedSize) {
    throw new ValidationError(ERROR_CONSTANT.ARRAY_SIZE_MISMATCH);
  }
};

const assertValueInRange = (value, minValue, maxValue) => {
  if (typeof value !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof minValue !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(minValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof maxValue !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(maxValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (!(value >= minValue && value <= maxValue)) {
    throw new ValidationError(ERROR_CONSTANT.VALUE_NOT_IN_RANGE);
  }
};

const assertNotInDuplicateValueInArray = (inputArray) => {
  if (!Array.isArray(inputArray)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  const inputSet = new Set(inputArray);
  if (inputSet.size !== inputArray.length) {
    throw new ValidationError(ERROR_CONSTANT.DUPLICATE_VALUE_IN_ARRAY);
  }
};

const assertNotInDuplicateInputValueInArray = (inputArray, inputValue) => {
  if (!Array.isArray(inputArray)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }
  if (!Number.isInteger(inputValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (inputArray.includes(inputValue)) {
    throw new ValidationError(ERROR_CONSTANT.DUPLICATE_VALUE_IN_ARRAY);
  }
};

export default {
  assertNonEmptyString,
  assertParsableAsInteger,
  assertPositiveNumber,
  assertRemainderNotEqual,
  assertArraySizeEqual,
  assertValueInRange,
  assertNotInDuplicateValueInArray,
  assertNotInDuplicateInputValueInArray,
};
