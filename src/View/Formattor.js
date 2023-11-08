import { Random } from '@woowacourse/mission-utils';
import ValidationError from '../Error/ValidationError';
import ERROR_CONSTANT from '../Constant/ErrorConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';

const formatStringToInteger = (input) => {
  if (typeof input !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  return (Number(input));
};

const getDivisionQuotient = (value1, value2) => {
  if (typeof value1 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  if (typeof value2 !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const divisionQuotient = value1 / value2;
  return (divisionQuotient);
};

const splitStringToArray = (inputString, delimiter) => {
  if (typeof inputString !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  if (typeof delimiter !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  return (inputString.split(delimiter));
};

const formatStringArrayToNumberArray = (inputArrayString) => {
  if (!Array.isArray(inputArrayString)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  const arrayNumber = inputArrayString.map((item) => formatStringToInteger(item));
  return (arrayNumber);
};

const getUniqueRandomNumbers = (minValue, maxValue, count) => {
  if (!Number.isInteger(minValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (!Number.isInteger(maxValue)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (!Number.isInteger(count)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  const numbers = Random.pickUniqueNumbersInRange(minValue, maxValue, count);
  return (numbers);
};

const sortAscendingArray = (inputArray) => {
  if (!Array.isArray(inputArray)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  const ascendingArray = inputArray.sort((first, second) => first - second);
  return (ascendingArray);
};

const getEqulsElementsCount = (inputArray1, inputArray2) => {
  if (!Array.isArray(inputArray1)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }
  if (!Array.isArray(inputArray2)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  const count = inputArray1.filter((item) => inputArray2.includes(item)).length;
  return (count);
};

const getEqulsValueCount = (input, inpinputArray) => {
  if (!Number.isInteger(input)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (!Array.isArray(inpinputArray)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  if (inpinputArray.includes(input)) {
    return (1);
  }
  return (0);
};

const multiplyValue = (value1, value2) => {
  if (!Number.isInteger(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (!Number.isInteger(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  return (value1 * value2);
};

const divideValue = (value1, value2) => {
  if (!Number.isInteger(value1)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }
  if (!Number.isInteger(value2)) {
    throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
  }

  return (value1 / value2);
};

const joinStrings = (...strings) => {
  if (!Array.isArray(strings)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  return (strings.join(''));
};

export default {
  formatStringToInteger,
  getDivisionQuotient,
  splitStringToArray,
  formatStringArrayToNumberArray,
  getUniqueRandomNumbers,
  sortAscendingArray,
  getEqulsElementsCount,
  getEqulsValueCount,
  multiplyValue,
  divideValue,
  joinStrings,
};
