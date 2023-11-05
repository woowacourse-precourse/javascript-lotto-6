import ERROR_MESSAGE from '../constants/error.js';

const InputValidator = {
  isNumber(input) {
    const numberPattern = /^[0-9]+$/;
    return numberPattern.test(input);
  },

  isDivisibleBy1000(input) {
    return Number(input) % 1000 === 0 && Number(input) !== 0;
  },

  validatePurchaseAmount(input) {
    if (!this.isNumber(input)) throw new Error(ERROR_MESSAGE.notNumber);
    if (!this.isDivisibleBy1000(input))
      throw new Error(ERROR_MESSAGE.invalidInput);
    return input;
  },
};

export default InputValidator;
