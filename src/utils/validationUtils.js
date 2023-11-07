import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const validationUtils = {
  checkNumber(number) {
    if (!Number.isSafeInteger(number)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  },

  checkRange(number, message) {
    const { start, end } = VALUE.range;

    if (number < start || number > end) {
      throw new Error(message);
    }
  },
};

export default validationUtils;
