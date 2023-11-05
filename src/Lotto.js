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
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static #validateIsInLottoNumberRange(numbers) {
    if (numbers.some((number) => GameUtils.isNotFromOneToFourtyFive(number))) {
      throw new InvalidNumberError(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    }
  }

  static #validateDuplicateNumber(numbers) {
    if (
      numbers.some((number) => GameUtils.checkDuplicateInList(numbers, number))
    ) {
      throw new DuplicateNumberError(ERROR_MESSAGE.DUPLICATE_NUMBER_ERROR);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
