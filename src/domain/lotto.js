import { ascendingNumbers } from '../utils/array.js';
import { validateLottoNumber } from '../validations/lottoNumberValidation.js';

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
    validateLottoNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
