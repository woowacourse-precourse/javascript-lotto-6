import { LOTTO, MESSAGE } from "./Constants.js";

const validation = {
  hasSameNumber: (numbers) => {
    const uniqueSet = new Set(numbers);
    if (uniqueSet.size !== numbers.length)
      throw new Error(MESSAGE.ERROR.HAS_SAME_NUMBER);
  },

  isValidRange: (input) => {
    if (input < LOTTO.START_NUM || input > LOTTO.LAST_NUM) {
      throw new Error(MESSAGE.ERROR.NO_VALID_RANGE);
    }
  },

  isValidInputCount: (inputArr, count) => {
    if (inputArr.length !== count)
      throw new Error(MESSAGE.ERROR.NO_VALID_COUNT(count));
  },

  isValidNumber: (input) => {
    if (isNaN(input)) throw new Error(MESSAGE.ERROR.NO_NUMBER);
  },
};
export default validation;
