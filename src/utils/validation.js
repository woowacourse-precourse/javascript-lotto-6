import { PRICE, RANGE } from "../constant/NUMBER.js";

export const validateNumber = {
  isDividePrice(number) {
    return !(number % PRICE);
  },

  isBiggerThanPrice(number) {
    return number >= PRICE;
  },

  isNumber(number) {
    return !Number.isNaN(number);
  },

  isIncludesRange(number) {
    return number > RANGE.MIN && number < RANGE.MAX;
  },

  isInArray(number, array) {
    return array.includes(number);
  },
};

export const validateArray = {
  isSixSize(numbers) {
    return numbers.length === RANGE.SIZE;
  },

  isIncludesRange(numbers) {
    return numbers.every(
      (element) => element >= RANGE.MIN && element <= RANGE.MAX
    );
  },

  isDuplicate(numbers) {
    return numbers.some((element, index) => numbers.indexOf(element) !== index);
  },

  isNumber(numbers) {
    return numbers.every((element) => !Number.isNaN(element));
  },
};
