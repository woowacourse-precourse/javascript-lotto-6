import ErrorMessage from '../constants/ErrorMessage';
import GAME_SETTINGS from '../constants/LottoSettings';

const { MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH } = GAME_SETTINGS;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    this.#validateNumberLength(numbers);
    this.#validateNumberUnit(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberUniqueness(numbers);
  }

  #validateNumberLength(numbers) {
    if (numbers.length !== NUMBER_LENGTH) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
    }
  }

  #validateNumberUnit(numbers) {
    numbers.forEach(number => {
      if (Number.isNaN(Number(number))) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
      }
    });
  }

  #validateNumberRange(numbers) {
    numbers.forEach(number => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
      }
    });
  }

  #validateNumberUniqueness(numbers) {
    if (new Set(numbers).size !== NUMBER_LENGTH) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
    }
  }

  #sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
