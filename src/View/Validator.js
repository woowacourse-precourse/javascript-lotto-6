import ValidationError from "../Error/ValidationError.js"
import ERROR_CONSTANT from "../Constant/ErrorConstant.js"
import NUMBER_CONSTANT from "../Constant/NumberConstant.js"
import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js"

const assertNonEmptyString = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING)
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);

  if (input.length === NUMBER_CONSTANT.ZERO)
    throw new ValidationError(ERROR_CONSTANT.EMPTY_STRING);
}

const assertParsableAsInteger = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING)
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);

  if (
    input.length > NUMBER_CONSTANT.ONE && !/^[1-9]*$/.test(input[NUMBER_CONSTANT.ZERO])
  ) {
    throw new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING);
  }
}

const assertPositiveNumber = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(input))
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);

  if (input < NUMBER_CONSTANT.ZERO)
    throw new ValidationError(ERROR_CONSTANT.NEGATIVE_AMOUNT);
}

const assertRemainderNotEqual = (value1, value2, expectedRemainderValue) => {
  if (typeof value1 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof value2 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof expectedRemainderValue !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(expectedRemainderValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const remainder = value1 % value2;
  if (remainder !== expectedRemainderValue)
    throw new ValidationError(ERROR_CONSTANT.REMAINDER_MISMATCH);
}

export default {
  assertNonEmptyString,
  assertParsableAsInteger,
  assertPositiveNumber,
  assertRemainderNotEqual,
};
