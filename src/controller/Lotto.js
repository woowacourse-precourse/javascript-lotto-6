import { ERROR_MESSAGE } from '../data/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  };

  get lottoNumber() {
    return this.#numbers;
  }

  static #validate(numbers) {
    const filteredNumbers = new Set(numbers);
    
    if(filteredNumbers.size !== numbers.length) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }
    if(numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }
  }
}

export default Lotto;
