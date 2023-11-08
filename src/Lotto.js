import { ERROR } from './constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.notSixNumbers);
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.duplicatedNumbers);
    if (!numbers.every((number) => number >= 1 && number <= 45)) throw new Error(ERROR.outOfNumberRange);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
