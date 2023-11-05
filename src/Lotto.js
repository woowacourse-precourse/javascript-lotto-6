import { ERROR } from './Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getSortedLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.notSix);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
