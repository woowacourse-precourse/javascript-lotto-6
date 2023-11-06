import { validateLottoNumbers } from './validator/index.js';
import { DIVIDER } from './constants/Symbol.js';

export default class Lotto {
  #numbers;

  constructor(mainNumbers) {
    validateLottoNumbers(mainNumbers);
    this.#numbers = mainNumbers.split(DIVIDER.comma).map(Number);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}
