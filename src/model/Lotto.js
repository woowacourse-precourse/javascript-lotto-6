import { GAME_SETTINGS } from '../constants/GameSettings';
import { ERROR_MESSAGES } from '../constants/ErrorMessages';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    this.#validateNumbersCount(numbers);
    this.#validateUniqueness(numbers);
    this.#validateNumberRange(numbers);
  }

  #validateNumbersCount(numbers) {
    if (numbers.length !== GAME_SETTINGS.NUMBERS_PER_TICKET) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBERS);
    }
  }

  #validateUniqueness(numbers) {
    if (new Set(numbers).size !== GAME_SETTINGS.NUMBERS_PER_TICKET) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBERS);
    }
  }

  #validateNumberRange(numbers) {
    if (
      numbers.some(
        (number) =>
          number < GAME_SETTINGS.MIN_LOTTO_NUMBER || number > GAME_SETTINGS.MAX_LOTTO_NUMBER,
      )
    ) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  includesBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  matchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  get numbers() {
    return this.#numbers;
  }
}
