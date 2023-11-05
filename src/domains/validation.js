import { ERROR, pattern } from '../constants.js';

const validate = {
  money(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    if (pattern.notMoney.test(input)) throw new Error(ERROR.TYPE_CHECK);
    if (input % 1000 !== 0) throw new Error(ERROR.AMOUNT_CHECK);
    return input;
  },

  winningNumbers(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    const inputArray = input.split(',');
    if (!inputArray) throw new Error(ERROR.INVALID_ARRAY);
    if (inputArray.length !== 6) throw new Error(ERROR.INVALID_ARRAY);
    if (inputArray.length !== new Set(inputArray).size) throw new Error(ERROR.DUPLICATE);
    inputArray.forEach((element) => {
      if (pattern.notNumber.test(element)) throw new Error(ERROR.TYPE_CHECK);
      const checkNumber = Number(element);
      if (checkNumber > 45 || checkNumber < 0) throw new Error(ERROR.TYPE_CHECK);
    });
    return inputArray.map((str) => Number(str)).sort((a, b) => a - b);
  },

  bonusNumber(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    if (pattern.notNumber.test(input)) throw new Error(ERROR.TYPE_CHECK);
    if (input > 45) throw new Error(ERROR.RANGE_CHECK);
    return input;
  },
};

export default validate;
