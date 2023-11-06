import { ERROR, pattern, NUMBER } from '../constants.js';

const validate = {
  money(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    if (pattern.notMoney.test(input)) throw new Error(ERROR.TYPE_CHECK);
    if (input % NUMBER.DEFAULT_WON !== NUMBER.DEFAULT) throw new Error(ERROR.AMOUNT_CHECK);

    return input;
  },

  winningNumbers(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    const inputArray = input.split(',').map(Number).sort((a, b) => a - b);

    if (inputArray.some((number) => !number)) throw new Error(ERROR.TYPE_CHECK);
    if (inputArray.some((number) => typeof number !== 'number')) throw new Error(ERROR.TYPE_CHECK);
    if (inputArray.length !== NUMBER.LOTTO_LENGTH) throw new Error(ERROR.INVALID_ARRAY);

    if (new Set(inputArray).size !== NUMBER.LOTTO_LENGTH) throw new Error(ERROR.DUPLICATE);
    if (!inputArray.every((number) => number <= NUMBER.LAST && number > NUMBER.DEFAULT)) {
      throw new Error(ERROR.RANGE_CHECK);
    }

    return inputArray;
  },

  bonusNumber(input) {
    if (!input) throw new Error(ERROR.TYPE_CHECK);
    if (pattern.notNumber.test(input)) throw new Error(ERROR.TYPE_CHECK);
    if (input > NUMBER.LAST) throw new Error(ERROR.RANGE_CHECK);

    return input;
  },
};

export default validate;
