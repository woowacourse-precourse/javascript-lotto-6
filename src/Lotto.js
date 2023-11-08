import { ERROR_MESSAGES, LOTTO_ERROR_MESSAGES } from "./Message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] ${LOTTO_ERROR_MESSAGES.INVALID_LOTTO_NUMBERS}`);
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(`[ERROR] ${ERROR_MESSAGES.LOTTO_NUMBER_RANGE}`);
      }
    });

    const set = new Set(numbers);
    const arr = Array.from(set);
    if (arr.length !== 6) {
      throw new Error(`[ERROR] ${ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS}`);
    }
  }
}

export default Lotto;