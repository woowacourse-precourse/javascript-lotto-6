import { hasSixValues, isUnique } from './utils';
class Lotto {
  #numbers;

  constructor(numbers) {
    hasSixValues(numbers);
    isUnique(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
