import { ERROR_MESSEGE } from '../constants/messages.js';
import { OPTIONS } from '../constants/lottoConstants.js';

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
  }

  getLotto() {
    return this.#numbers;
  }

  #validateSize(numbers) {
    if (numbers.length !== OPTIONS.length) {
      throw new Error(ERROR_MESSEGE.length);
    }
  }

  #validateDuplicate(numbers) {
    numbers.forEach((number) => {
      if (this.#duplicateCount(numbers, number) >= 2) {
        throw new Error(ERROR_MESSEGE.duplicate);
      }
    });
  }

  #duplicateCount(numbers, number) {
    return numbers.filter((current) => current === number).length;
  }

  #sortedLotto(numbers) {
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
