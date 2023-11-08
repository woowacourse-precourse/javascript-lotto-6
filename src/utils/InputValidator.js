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
    numbers.forEach(number => {
      this.validateNumber(number);
    });
    const setNumber = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.ONLY_SIX_NUMBERS);
    }
    if (setNumber.size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  static validatePurchaseMoney(money) {
    if (parseInt(money, 10) !== Number(money)) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBERS);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_THOUSANDS_ONLY);
    }
    if (money < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  }

  static validateBonusNumber(bonus, numbers) {
    this.validateNumber(bonus);
    if (numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}
