import { PurchaseLotto } from './PurchaseLotto.js';
import { LOTTO_NUMBERS } from './constants.js';
import { randomNum } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }
}

export default Lotto;
