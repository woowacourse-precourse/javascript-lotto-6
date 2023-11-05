import { ERROR } from './Message.js';

class Lotto {
  #LENGTH = 6;

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getSortedLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== this.#LENGTH) {
      throw new Error(ERROR.notSix);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.notUnique);
    }
    throw new Error(ERROR.notOneToFortyFive);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
