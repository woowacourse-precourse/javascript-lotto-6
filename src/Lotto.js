import { validateLottoNumbers } from './validator/index.js';
import { DIVIDER } from './constants/Symbol.js';

export default class Lotto {
  /**
   * @private
   * @type {number[]}
   */
  #numbers;

  constructor(mainNumbers) {
    validateLottoNumbers(mainNumbers);
    this.#numbers = mainNumbers.split(DIVIDER.comma).map(Number);
  }

  /**
   * @public
   * @returns {number[]}
   */
  getLottoNumbers() {
    return this.#numbers;
  }
}
