import ERROR_MESSAGES from '../constants/errorMessage';

function isString(input) {
  if (typeof input !== 'string') {
    throw new Error(ERROR_MESSAGES.stringType);
  }
}

function isNumber(input) {
  if (typeof input !== 'number') {
    throw new Error(ERROR_MESSAGES.numberType);
  }
}