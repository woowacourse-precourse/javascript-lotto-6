import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';

const Validator = {
  isEmptyString(string) {
    return string === ERROR.errorCase.emptyString;
  },

  validateUserInput(name) {
    if (this.isEmptyString(name)) {
      throw CustomError.inputView(ERROR.message.emptyString);
    }
  },
};

export default Validator;
