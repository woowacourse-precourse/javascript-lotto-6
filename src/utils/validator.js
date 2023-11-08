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

  // 두 값을 나누었을 때 0으로 나누어떨어지는지 확인하는 함수
  isDividedBy(dividend, divisor) {
    if (divisor === 0 ||
      typeof dividend !== 'number' ||
      typeof divisor !== 'number') {
      return false;
    }
    return dividend % divisor === 0;
  },
};

export default validator;
