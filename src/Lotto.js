import { PurchaseLotto } from './PurchaseLotto.js';
import { LOTTO_NUMBERS } from './constants.js';
import { randomNum } from './utils.js';

class Lotto {
  #numbers;

  constructor(lottoNumbers) {
    this.#numbers = lottoNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
