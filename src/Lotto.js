import { LOTTO } from './constants/lotto.js';
import { ERROR_MESSAGE } from './constants/message.js';
import GameError from './errors/GameError.js';
import paramType from './lib/paramType/src/paramType.js';

export default class Lotto {
  #numbers;

  constructor(numbers, _0 = paramType(numbers, Array)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateDuplication(numbers);
    this.#validateRange(numbers);
    this.#validateNumberType(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new GameError(ERROR_MESSAGE.INVALID_NUMBERS_COUNT);
    }
  }

  #validateDuplication(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new GameError(ERROR_MESSAGE.EXIST_DUPLICATE_NUMBER);
    }
  }

  #validateRange(numbers) {
    if (numbers.some((number) => this.#isOverRange(number))) {
      throw new GameError(ERROR_MESSAGE.EXIST_OVER_RANGE_NUMBER);
    }
  }

  #isOverRange(number) {
    return number < LOTTO.NUMBER_RANGE.MIN || number > LOTTO.NUMBER_RANGE.MAX;
  }

  #validateNumberType(numbers) {
    if (numbers.some((number) => typeof number !== 'number')) {
      throw new GameError(ERROR_MESSAGE.EXIST_NOT_NUMBER_TYPE);
    }
  }
}
