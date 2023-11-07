import Lotto from './Lotto.js';
import { LOTTO, MATCHING_COUNT } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';

class WinningLotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = new Lotto(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  countMatchingWith(numbers) {
    const { FIVE, BONUS_FIVE } = MATCHING_COUNT;

    const matchingCount = numbers.countMatchingWith(this.#numbers);
    if (matchingCount === FIVE && numbers.includes(this.#bonusNumber)) {
      return BONUS_FIVE;
    }
    return matchingCount;
  }

  #validate(bonusNumber) {
    if (bonusNumber < LOTTO.number.min || bonusNumber > LOTTO.number.max) {
      throw new Error(ERROR.notOneToFortyFive);
    }
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR.notUniqueBonusNumber);
    }
  }
}

export default WinningLotto;
