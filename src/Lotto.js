import { LOTTO_NUMBER_COUNT, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from "./constants/standard";
import {
  ERROR_NUMBER_COUNT,
  ERROR_NUMBER_DUPLICATION,
  ERROR_NUMBER_RANGE,
  ERROR_NUMBER_TYPE,
} from "./constants/validate";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateDuplication(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberType(numbers);
  }

  // TODO: 추가 기능 구현
  #occurError(errorMessage) {
    throw new Error(errorMessage);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      this.#occurError(ERROR_NUMBER_COUNT);
    }
  }

  #validateDuplication(numbers) {
    const checkedNumbers = new Set(numbers);
    if (checkedNumbers.size !== LOTTO_NUMBER_COUNT) {
      this.#occurError(ERROR_NUMBER_DUPLICATION);
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
        this.#occurError(ERROR_NUMBER_RANGE);
      }
    });
  }

  #validateNumberType(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        this.#occurError(ERROR_NUMBER_TYPE);
      }
    });
  }
}

export default Lotto;
