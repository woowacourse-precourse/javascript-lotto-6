import { ERROR } from '../constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validateLotto();
    this.#sortedLotto(this.#numbers);
  }

  #validateLotto() {
    this.#validateSize(this.#numbers);
    this.#validateDuplicate(this.#numbers);
    this.#validateRange(this.#numbers);
  }

  getLotto() {
    return this.#numbers;
  }

  #validateSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.length);
    }
  }

  #validateDuplicate(numbers) {
    numbers.forEach((number) => {
      if (this.#duplicateCount(numbers, number) >= 2) {
        throw new Error(ERROR.duplicate);
      }
    });
  }

  #duplicateCount(numbers, number) {
    return numbers.filter((current) => current === number).length;
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (1 < number && number > 45) {
        throw new Error(ERROR.notInRange);
      }
    });
  }

  #sortedLotto(numbers) {
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
