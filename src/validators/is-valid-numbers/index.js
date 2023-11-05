import REGEXS from '../../constants/regex.js';

export const isValidLength = numbers => {
  return numbers.length === 6;
};

export const isValidUnique = numbers => {
  return new Set(numbers).size === numbers.length;
};

export const isValidRange = number => {
  return REGEXS.rNumberRange.test(number);
};
