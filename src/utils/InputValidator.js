import { NUMBER_REGEX, ERROR_MESSAGES } from '../constants/messages.js';

export default class InputValidator {
  static validateNumber(number) {
    if (!NUMBER_REGEX.test(number)) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBERS);
    }
    if (number > 45 || number < 1) {
      throw new Error(ERROR_MESSAGES.NUMBER_RANGE);
    }
  }

  static validateNumbers(numbers) {
    const setNumber = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.ONLY_SIX_NUMBERS);
    }
    if (setNumber.size != 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }
}
