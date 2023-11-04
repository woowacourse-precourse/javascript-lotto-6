import MESSAGE from '../constants/message.js';

function checkNumber(number) {
  if (!Number.isSafeInteger(number)) {
    throw new Error(MESSAGE.error.notNumber);
  }
}

const validationUtils = {
  checkNumber,
};

export default validationUtils;
