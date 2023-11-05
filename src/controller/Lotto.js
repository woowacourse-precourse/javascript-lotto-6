import { ERROR_MESSAGE } from '../data/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#isCheckProperNumberRange(numbers);
    this.#isCheckDuplicate(numbers);
    this.#isCheckProperNumberLength(numbers);
  };

  #isCheckDuplicate(numbers) {
    const filteredNumbers = new Set(numbers);
    if(filteredNumbers.size !== numbers.length) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }

    return this.#numbers;
  }

  #isCheckProperNumberRange(numbers) {
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }

    return this.#numbers;
  }

  #isCheckProperNumberLength(numbers) {
    if(numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }

    return this.#numbers;
  }
}

export default Lotto;
