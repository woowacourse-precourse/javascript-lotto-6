import { ERROR, pattern, NUMBER } from '../constants.js';

const validate = {
  money(inputNumber) {
    if (!inputNumber) throw new Error(ERROR.TYPE_CHECK);

    if (pattern.zeroCheck.test(inputNumber)) throw new Error(ERROR.MINIMUN_INPUT);

    if (pattern.notMoney.test(inputNumber)) throw new Error(ERROR.TYPE_CHECK);
    if (inputNumber % NUMBER.DEFAULT_WON !== NUMBER.DEFAULT) throw new Error(ERROR.AMOUNT_CHECK);

    return inputNumber;
  },

  winningNumbers(inputStr) {
    if (!inputStr) throw new Error(ERROR.TYPE_CHECK);
    const inputArray = inputStr.split(',').map(Number).sort((a, b) => a - b);

    if (inputArray.some((number) => !number)) throw new Error(ERROR.TYPE_CHECK);
    if (inputArray.some((number) => typeof number !== 'number')) throw new Error(ERROR.TYPE_CHECK);
    if (inputArray.length !== NUMBER.LOTTO_LENGTH) throw new Error(ERROR.INVALID_ARRAY);

    if (new Set(inputArray).size !== NUMBER.LOTTO_LENGTH) throw new Error(ERROR.DUPLICATE);
    if (!inputArray.every((number) => number <= NUMBER.LAST && number > NUMBER.DEFAULT)) {
      throw new Error(ERROR.RANGE_CHECK);
    }

    return inputArray;
  },

  bonusNumber(inputNumber) {
    if (!inputNumber) throw new Error(ERROR.TYPE_CHECK);
    if (pattern.notNumber.test(inputNumber)) throw new Error(ERROR.TYPE_CHECK);
    if (inputNumber > NUMBER.LAST) throw new Error(ERROR.RANGE_CHECK);

    return inputNumber;
  },

  lotto(inputArray) {
    if (!inputArray) throw new Error(ERROR.TYPE_CHECK);

    if (inputArray.length !== NUMBER.LOTTO_LENGTH) throw new Error(ERROR.LENGTH_CHECK);

    if (inputArray.length !== new Set(inputArray).size) throw new Error(ERROR.DUPLICATE);

    if (!Array.isArray(inputArray)) throw new Error(ERROR.TYPE_CHECK);

    const checkNumber = inputArray.every((number) => typeof number === 'number');

    if (!checkNumber) throw new Error(ERROR.TYPE_CHECK);
  },
};

export default validate;
