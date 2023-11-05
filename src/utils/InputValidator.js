const InputValidator = {
  checkNaN(number) {
    if (Number.isNaN(number)) {
      return true;
    }
    return false;
  },

  checkInteger(number) {
    if (Number.isInteger(number)) {
      return true;
    }
    return false;
  },

  checkPositiveNumber(number) {
    if (number > 0) {
      return true;
    }
    return false;
  },
};

export default InputValidator;
