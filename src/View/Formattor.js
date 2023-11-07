import ValidationError from "../Error/ValidationError.js";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js";

const formatStringToInteger = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  return (Number(input));
}

const getDivisionQuotient = (value1, value2) => {
  if (typeof value1 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof value2 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const divisionQuotient = value1 / value2;
  return (divisionQuotient);
}

const splitStringToArray = (inputString, delimiter) => {
  if (typeof inputString !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  if (typeof delimiter !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  return (inputString.split(delimiter));
}

export default {
  formatStringToInteger,
  getDivisionQuotient,
  splitStringToArray,
};
