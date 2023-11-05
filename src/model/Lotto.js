import LottoValidation from '../validation/LottoValidation.js';
import makeAsendingOrder from '../util/makeAsendingOrder.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = makeAsendingOrder(numbers);
  }

  #validate(numbers) {
    LottoValidation.checkLength(numbers);
    LottoValidation.checkNumber(numbers);
    LottoValidation.checkDuplicate(numbers);
  }

  /**
   *
   * @returns {number[]} numbers
   */
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
