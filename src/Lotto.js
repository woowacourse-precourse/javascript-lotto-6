import { ERROR } from './constants/Error.js';
import { MAGIC_NUMBER } from './constants/MagicNumber.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberDuplicate(numbers);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== MAGIC_NUMBER.lottoNumberCount) {
      throw new Error(ERROR.numberCount);
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < MAGIC_NUMBER.lottoNumberMin ||
        number > MAGIC_NUMBER.lottoNumberMax
      ) {
        throw new Error(ERROR.numberRange);
      }
    });
  }

  #validateNumberDuplicate(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== MAGIC_NUMBER.lottoNumberCount) {
      throw new Error(ERROR.numberDuplicate);
    }
  }
}

export default Lotto;
