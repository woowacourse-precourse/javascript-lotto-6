import { ERROR_DUPLICATED, ERROR_PRIZE_NUMBER } from "./constants/index.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_PRIZE_NUMBER);
    }
  }

  #validateDuplication(numbers) {
    const regexDuplicatedInLottoRange =
      /^(?!.*(\d+)(?=.*\b\1\b))(?:(?:[1-9]|[1-3]\d|4[0-5])(?:,|$)){6}$/;
    if (!regexDuplicatedInLottoRange.test(numbers)) {
      throw new Error(ERROR_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
