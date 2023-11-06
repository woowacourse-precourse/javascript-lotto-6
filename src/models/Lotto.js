import { ERROR_MESSAGE } from "../constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumber(numbers);
    this.#validateDuplication(numbers);
    this.#validateLength(numbers);
    this.#validateRange(numbers);
  }

  #validateNumber(numbers) {
    const isAllNumbers = numbers.every(item => !isNaN(item));

    if (!isAllNumbers) {
      throw new Error(ERROR_MESSAGE.not_number);
    }
  }

  #validateDuplication(numbers) {
    if (numbers.length !== new Set([...numbers]).size) {
      throw new Error(ERROR_MESSAGE.exists_duplication);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.not_six_numbers);
    }
  }

  #validateRange(numbers) {
    const isAllCorrectRange = numbers.every(item => item > 0 && item <=45);

    if (!isAllCorrectRange) {
      throw new Error(ERROR_MESSAGE.not_in_range);
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
