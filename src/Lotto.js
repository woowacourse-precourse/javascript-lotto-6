import { ERROR_MESSAGES } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const NUMBER_OF_NUMBERS = 6;

    if (numbers.length != NUMBER_OF_NUMBERS) {
      throw new Error(ERROR_MESSAGES.COUNT_OF_NUMBERS);
    } else if (this.#hasDuplicateNumber(numbers, NUMBER_OF_NUMBERS)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBERS);
    }
    numbers.forEach((num) => {
      if (1 > num || 45 < num) {
        throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
      }
    });
  }

  #hasDuplicateNumber(array, arrayLength) {
    const numberSet = new Set(array);
    return numberSet.size != arrayLength;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
