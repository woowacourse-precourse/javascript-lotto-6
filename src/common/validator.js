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

const containUniqueNumbersInArray = (array) => array.length === new Set(array).size;

const isArrayLengthEqualTo = (array, length) => array.length === length;

const isElementInTarget = (target, element) => target.includes(element);

const isNumeric = (input) => UTILS.positive_integer.test(input);

const isInRange = (input, min, max) => input >= min && input <= max;

export {
  containUniqueNumbersInArray, isArrayLengthEqualTo, isCommaSeparated, isDivisibleByUnit, isElementInTarget, isInRange, isNumeric, isStringLengthEqualTo
};
