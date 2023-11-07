import { UTILS } from './constants.js';

// 특정 unit으로 input이 나누어 떨어지는지 확인하는 메서드
const isDivisibleByUnit = (input, unit) => input % unit === UTILS.zero;

// 문자열이 쉼표만으로 구분되었는지 확인하는 메서드
const isCommaSeparated = (input, length) => {
  const numbers = input.split(UTILS.comma).map(num => num.trim());
  const isValidFormat = UTILS.number_comma.test(input);
  return isValidFormat && numbers.length === length && numbers.every(num => !Number.isNaN(Number(num)));
};

// 문자열이 특정 길이에 해당하는지 확인하는 메서드
const isLengthEqualTo = (input, length) => {
  const number = input.split(UTILS.comma).map(num => num.trim());
  return number.length === length;
};

// 문자열이 고유한 숫자들로 이루어져 있는지 확인하는 메서드
const containUniqueNumbers = (input) => {
  const number = input.split(UTILS.comma).map(name => name.trim());
  return number.length === new Set(number).size;
};

// 문자열 안에 특정 요소가 포함(중복)되어 있는지 확인하는 메서드
const isElementInString = (string, element) => string.includes(element);

// 양의 정수인지 확인하는 메서드 (음수, 소수, 공백, 특수문자, 문자열, 0으로 시작하는 숫자 불가)
const isNumeric = (input) => UTILS.positive_integer.test(input);

// 값이 특정 범위 내에 있는지 확인하는 메서드
const isInRange = (input, min, max) => input >= min && input <= max;

export { 
  isDivisibleByUnit,
  isCommaSeparated,
  isLengthEqualTo,
  containUniqueNumbers,
  isElementInString,
  isNumeric,
  isInRange,
};
