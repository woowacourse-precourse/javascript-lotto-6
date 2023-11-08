const validator = {
  isNumericString(input) {
    return (
      !isNaN(input) &&
      !isNaN(parseFloat(input)) &&
      typeof input === 'string'
    );
  },

  isPositiveInteger(number) {
    return (
      typeof number === 'number' &&
      Number.isInteger(number) &&
      number > 0
    )
  },

  isPositiveIntegerArray(array) {
    if (typeof array !== 'object') {
      return false;
    }
    return array.every((value) => validator.isPositiveInteger(value));
  },

  // 두 값을 나누었을 때 0으로 나누어떨어지는지 확인하는 함수
  isDividedBy(dividend, divisor) {
    if (divisor === 0 ||
      typeof dividend !== 'number' ||
      typeof divisor !== 'number') {
      return false;
    }
    return dividend % divisor === 0;
  },

  isDuplicate(array) {
    if (typeof array !== 'object') {
      return false;
    }
    return array.length !== new Set(array).size;
  },

  isNumberInRange(min, max, value) {
    if (
      typeof min !== 'number' ||
      typeof max !== 'number' ||
      typeof value !== 'number'
    ) {
      return false;
    }
    return value >= min && value <= max;
  },

  isNumberInRangeArray(min, max, array) {
    return array.every((value) => this.isNumberInRange(min, max, value));
  },
};

export default validator;
