import Lotto from './Lotto.js';
import { ERROR } from './Message.js';

class WinningLotto {
  #START = 1;
  #END = 45;

  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = new Lotto(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getMatchingNumbersCountWith(numbers) {
    return numbers.getMatchingNumbersCountWith(this.#numbers);
  }

  #validate(bonusNumber) {
    if (bonusNumber < this.#START || bonusNumber > this.#END) {
      throw new Error(ERROR.notOneToFortyFive);
    }
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR.notUniqueBonusNumber);
    }
  }
}

export default WinningLotto;
