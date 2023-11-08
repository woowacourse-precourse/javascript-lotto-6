import { ERROR } from "./constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_LENGTH);
    }

    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(ERROR.INVALID_LOTTO_RANGE);
      }
    });

    const set = new Set(numbers);
    const arr = Array.from(set);
    if (arr.length !== 6) {
      throw new Error(ERROR.LOTTO_DUPLICATION);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
