import { ERROR_MESSAGE } from '../data/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    Lotto.#isCheckProperNumberRange(numbers);
    Lotto.#isCheckDuplicate(numbers);
    Lotto.#isCheckProperNumberLength(numbers);

    // this.#isCheckProperNumberRange(numbers);
    // this.#isCheckDuplicate(numbers);
    // this.#isCheckProperNumberLength(numbers);
  };

  static #isCheckDuplicate(numbers) {
    const filteredNumbers = new Set(numbers);
    if(filteredNumbers.size !== numbers.length) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }
  }

  static #isCheckProperNumberRange(numbers) {
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        throw Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }
  }

  static #isCheckProperNumberLength(numbers) {
    if(numbers.length !== 6) {
      throw Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }
  }
}

export default Lotto;
