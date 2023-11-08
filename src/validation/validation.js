import { NUM_REGEXP } from '../constants/numbers.js';
import { LOTTO } from '../constants/numbers.js';

const validation = {
  isNumber(input) {
    if (!NUM_REGEXP.test(input)) return false;
    return true;
  },

  isValidMoney(input) {
    if (parseInt(input, 10) % 1000 !== 0) return false;
    return true;
  },

  isValidNumber(input) {
    if (parseInt(input, 10) <= LOTTO.MAX || parseInt(input, 10) >= LOTTO.MIN)
      return true;
    return false;
  },

  isLengthSix(input) {
    if (input.length !== 6) return false;
    return true;
  },

  isInRange(input) {
    for (let i = 0; i < input.length; i += 1) {
      if (!this.isValidNumber(input[i])) return false;
    }
    return true;
  },

  isDuplicated(input) {
    for (let i = 0; i < input.length; i += 1) {
      if (input.indexOf(input[i]) !== i) return true;
    }
    return false;
  },

  isBonusDuplicated(numbers, input) {
    if (numbers.includes(input)) return true;
    return false;
  },
};

export default validation;
