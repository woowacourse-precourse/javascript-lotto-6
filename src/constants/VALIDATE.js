import NUMBER from "./NUMBER.js";

const VALIDATE = {
  isDividedBy1000: (purchase) => {
    return purchase % NUMBER.PURCHASE.UNIT === 0;
  },

  isPositiveNumber: (purchase) => {
    return purchase > 0;
  },

  isNotZero: (purchase) => {
    return purchase !== 0;
  },

  isInRange: (number) => {
    return number >= NUMBER.LOTTO.MIN && number <= NUMBER.LOTTO.MAX;
  },

  isNotDuplicated: (numbers) => {
    return new Set(numbers).size === numbers.length;
  },

  isSixNumbers: (numbers) => {
    return numbers.length === NUMBER.LOTTO.COUNT;
  },

  isNumber: (number) => {
    return !isNaN(number);
  },

  isTypeOf: (value, type) => {
    return typeof value === type;
  },
};

export default VALIDATE;
