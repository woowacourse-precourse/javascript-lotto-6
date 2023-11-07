import Lotto from './Lotto.js';
import { LOTTO_NUMBER } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';

class WinningLotto {
  #FIVE = 5;
  #BONUS_FIVE = 51;

  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = new Lotto(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  countMatchingWith(numbers) {
    const matchingCount = numbers.countMatchingWith(this.#numbers);
    if (matchingCount === this.#FIVE && this.#includesBonusNumber(numbers)) {
      return this.#BONUS_FIVE;
    }
    return matchingCount;
  }

  #includesBonusNumber(numbers) {
    return numbers.includes(this.#bonusNumber);
  }

  #validate(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBER.min || bonusNumber > LOTTO_NUMBER.max) {
      throw new Error(ERROR.notOneToFortyFive);
    }
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR.notUniqueBonusNumber);
    }
  }
}

export default WinningLotto;
