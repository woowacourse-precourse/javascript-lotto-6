import { PRICE, RANGE } from "../constant/NUMBER.js";

export const validateNumber = {
  isDivisible(number) {
    return !(number % PRICE);
  },

  isAtLeastPrice(number) {
    return number >= PRICE;
  },

  isNumber(number) {
    return !Number.isNaN(number);
  },

  isInRange(number) {
    return number > RANGE.MIN && number < RANGE.MAX;
  },

  isInArray(number, array) {
    return array.includes(number);
  },
};

export const validateArray = {
  isSize(array) {
    return array.length === RANGE.SIZE;
  },

  isInRange(array) {
    return array.every(
      (element) => element >= RANGE.MIN && element <= RANGE.MAX
    );
  },

  isDuplicate(array) {
    return array.some((element, index) => array.indexOf(element) !== index);
  },

  isNumber(array) {
    return array.every((element) => !Number.isNaN(element));
  },
};
