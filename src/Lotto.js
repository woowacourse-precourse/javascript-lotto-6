import { Message } from './Message.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.error.NOT_SIX_LENGTH);
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(Message.error.NOT_RANGE);
      }
    });
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(Message.error.NOT_UNIQUE);
    }
  }
}

export default Lotto;
