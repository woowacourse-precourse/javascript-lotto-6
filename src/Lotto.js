import { ascendingNumbers } from './utils/array/array.module.js';
import lottoNumberValidation from './validations/lottoNumberValidation/lottoNumberValidation.module.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static fromByAscending(numbers) {
    return new Lotto(ascendingNumbers(numbers));
  }

  #validate(numbers) {
    lottoNumberValidation.check(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
