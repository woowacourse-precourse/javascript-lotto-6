import GameUtils from './utils/GameUtils.js';
import ERROR_MESSAGE from './constants/ErrorMessage.js';
import InvalidNumberError from './error/InvalidNumberError.js';
import DuplicateNumberError from './error/DuplicateNumberError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    Lotto.#validateNumberLength(numbers);
    Lotto.#validateIsInLottoNumberRange(numbers);
    Lotto.#validateDuplicateNumber(numbers);
  }

  static #validateNumberLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_SIX_DIGITS);
    }
  }

  static #validateIsInLottoNumberRange(numbers) {
    if (numbers.some((number) => GameUtils.isNotFromOneToFourtyFive(number))) {
      throw new InvalidNumberError(ERROR_MESSAGE.NOT_LOTTO_NUMBER_RANGE);
    }
  }

  static #validateDuplicateNumber(numbers) {
    if (
      numbers.some((number) => GameUtils.checkDuplicateInList(numbers, number))
    ) {
      throw new DuplicateNumberError(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
