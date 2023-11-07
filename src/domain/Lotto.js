import { ERROR } from '../constants/Error';
import { MagicNumber } from '../constants/MagicNumber';

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
    if (numbers.length !== MagicNumber.lottoNumberCount) {
      throw new Error(ERROR.numberCount);
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < MagicNumber.lottoNumberMin ||
        number > MagicNumber.lottoNumberMax
      ) {
        throw new Error(ERROR.numberRange);
      }
    });
  }

  #validateNumberDuplicate(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== MagicNumber.lottoNumberCount) {
      throw new Error(ERROR.numberDuplicate);
    }
  }
}

export default Lotto;
