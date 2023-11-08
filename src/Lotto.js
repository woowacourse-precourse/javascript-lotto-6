import messages from './constants/messages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const set = new Set(numbers);
    const hasDuplicates = set.size !== numbers.length;
    if (numbers.length !== 6) {
      throw new Error(messages.error.invalidCount);
    }
    if (hasDuplicates) {
      throw new Error(messages.error.duplicate);
    }
  }

  issue() {
    return this.#numbers;
  }
}

export default Lotto;
