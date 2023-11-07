import Lotto from './Lotto.js';
import { ERROR } from './Message.js';

class WinningLotto {
  #START = 1;
  #END = 45;
  #FIVE = 5;
  #FIVE_BONUS_NUMBER = 51;

  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = new Lotto(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  countMatchingNumbersWith(numbers) {
    const count = numbers.countMatchingNumbersWith(this.#numbers);
    if (count === this.#FIVE && this.#includesBonusNumber(numbers)) {
      return this.#FIVE_BONUS_NUMBER;
    }
    return count;
  }

  #includesBonusNumber(numbers) {
    return numbers.includes(this.#bonusNumber);
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
