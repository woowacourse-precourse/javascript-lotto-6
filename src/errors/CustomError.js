import COMMON from '../constants/common.js';
import ERROR from '../constants/error.js';

class CustomError extends Error {
  constructor(message) {
    super(ERROR.prefix + COMMON.whiteSpace + message + COMMON.lineBreak);
  }
}

export default CustomError;
