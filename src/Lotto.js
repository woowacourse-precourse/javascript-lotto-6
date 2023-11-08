import { LOTTO_LENGTH, MIN_NUMBER, MAX_NUMBER } from "./utils/constants.js";
import {
  TYPE_ERROR,
  RANGE_ERROR,
  DUPLICATE_ERROR,
  LOTTO_LENGTH_ERROR,
} from "./utils/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validateNumberLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(LOTTO_LENGTH_ERROR);
    }
  }

  #validateNumberDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(DUPLICATE_ERROR);
    }
  }

  #validateIsNumber(numbers) {
    numbers.forEach((number) => {
      if (isNaN(+number)) {
        throw new Error(TYPE_ERROR);
      }
    });
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error(RANGE_ERROR);
      }
    });
  }

  #validate(numbers) {
    this.#validateNumberLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberDuplicate(numbers);
    this.#validateIsNumber(numbers);
  }

  returnNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
