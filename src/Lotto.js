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

  getCompareResult(inputNumbers, bonusNumber) {
    const matchCount = this.getMatchCount(inputNumbers);
    const hasBonusNumber = this.hasBonusNumber(bonusNumber);

    return { matchCount, hasBonusNumber };
  }

  getMatchCount(inputNumbers) {
    return this.#numbers.filter((number) => inputNumbers.includes(number))
      .length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
