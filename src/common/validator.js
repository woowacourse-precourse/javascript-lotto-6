import { UTILS } from './constants.js';

const isDivisibleByUnit = (input, unit) => input % unit === UTILS.zero;

const isCommaSeparated = (input, length) => {
  const numbers = input.split(UTILS.comma).map(num => num.trim());
  const isValidFormat = UTILS.number_comma.test(input);
  return isValidFormat && numbers.length === length && numbers.every(num => !Number.isNaN(Number(num)));
};

const isStringLengthEqualTo = (input, length) => {
  const number = input.split(UTILS.comma).map(num => num.trim());
  return number.length === length;
};

const containUniqueNumbersInString = (input) => {
  const number = input.split(UTILS.comma).map(name => name.trim());
  return number.length === new Set(number).size;
};

const containUniqueNumbersInArray = (array) => array.length === new Set(array).size;

const isArrayLengthEqualTo = (array, length) => array.length === length;

const isElementInString = (string, element) => string.includes(element);

const isNumeric = (input) => UTILS.positive_integer.test(input);

const isInRange = (input, min, max) => input >= min && input <= max;

export { 
  isDivisibleByUnit,
  isCommaSeparated,
  isStringLengthEqualTo,
  containUniqueNumbersInString,
  containUniqueNumbersInArray,
  isArrayLengthEqualTo,
  isElementInString,
  isNumeric,
  isInRange,
};
