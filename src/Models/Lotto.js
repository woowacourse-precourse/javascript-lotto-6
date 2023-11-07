import { validateDuplication, validateLength } from '../../utils/Validate';

class Lotto {
  #numbers;

  constructor(numbers) {
    validateDuplication(numbers);
    validateLength(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
