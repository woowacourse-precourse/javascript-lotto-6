import { ErrorMessage } from '../constants/ErrorMessage.js';

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
  }

  #validateNumberLength(number) {
    if (number.length !== 6) {
      // ToDo: 에러 상수명 변경하기
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
    }
  }

  #validateNumberUnit(number) {
    if (Number.isNaN(parseInt(number, 10))) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
    }
  }

  #validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
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
