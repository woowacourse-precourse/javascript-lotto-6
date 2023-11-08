import { ERROR_MESSAGES } from '../constants/ErrorMessages';
import { GAME_SETTINGS } from '../constants/GameSettings';

export default class InputValidator {
  static validatePurchaseAmount(amount) {
    InputValidator.#ensureIsNumeric(amount);
    InputValidator.#ensureValidPurchaseAmount(amount);
  }

  static validateWinningNumbers(winningNumbersString) {
    return InputValidator.#parseAndValidateNumbers(winningNumbersString);
  }

  static validateBonusNumber(bonusNumberString, winningNumbersString) {
    const bonusNumber = InputValidator.#parseNumber(bonusNumberString);
    const winningNumbers = InputValidator.#parseNumbers(winningNumbersString);
    InputValidator.#ensureBonusNumberNotDuplicate(bonusNumber, winningNumbers);
  }

  static #ensureIsNumeric(amount) {
    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGES.INVALID_FORMAT);
    }
  }

  static #ensureValidPurchaseAmount(amount) {
    const numericAmount = parseInt(amount, 10);
    if (numericAmount <= 0 || numericAmount % GAME_SETTINGS.TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  }

  static #parseAndValidateNumbers(numbersString) {
    const numbers = InputValidator.#parseNumbers(numbersString);
    InputValidator.#validateNumbers(numbers);
    return numbers;
  }

  static #parseNumbers(numbersString) {
    return numbersString.split(',').map(InputValidator.#parseNumber);
  }

  static #parseNumber(numString) {
    const number = parseInt(numString.trim(), 10);
    if (Number.isNaN(number) || !InputValidator.#isNumberInRange(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    return number;
  }

  static #validateNumbers(numbers) {
    if (
      numbers.length !== GAME_SETTINGS.NUMBERS_PER_TICKET ||
      new Set(numbers).size !== numbers.length
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBERS);
    }
    numbers.forEach(InputValidator.#ensureNumberInRange);
  }

  static #ensureNumberInRange(number) {
    if (!InputValidator.#isNumberInRange(number)) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }
  }

  static #ensureBonusNumberNotDuplicate(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }

  static #isNumberInRange(number) {
    return number >= GAME_SETTINGS.MIN_LOTTO_NUMBER && number <= GAME_SETTINGS.MAX_LOTTO_NUMBER;
  }
}
