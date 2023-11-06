import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

function checkNumberRegExp(string) {
  if (VALUE.notNumber.test(string)) {
    throw new Error(MESSAGE.error.notNumber);
  }
}

function checkRange(number) {
  const { start, end } = VALUE.range;

  if (number < start || number > end) {
    throw new Error(MESSAGE.error.rangeLotto);
  }
}

const validationUtils = {
  checkNumberRegExp,
  checkRange,
};

export default validationUtils;
