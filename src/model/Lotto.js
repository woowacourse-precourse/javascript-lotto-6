import LottoValidation from '../validation/LottoValidation.js';

import makeAsendingOrder from '../util/makeAsendingOrder.js';
import chageStringtoArray from '../util/chageStringtoArray.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const numbersArr = chageStringtoArray(numbers);

    this.#validate(numbersArr);
    this.#numbers = makeAsendingOrder(numbersArr);
  }

  #validate(numbers) {
    LottoValidation.checkLength(numbers);
    LottoValidation.checkNumber(numbers);
    LottoValidation.checkDuplicate(numbers);
  }

  /**
   * 입력한 당첨 번호를 배열로 반환합니다.
   * @returns {number[]} numbers
   */
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
