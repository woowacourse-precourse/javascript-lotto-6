import { LOTTO, MATCHING_COUNT } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';

class WinningLotto {
  #lotto;
  #bonusNumber;

  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  countMatchingWith(numbers) {
    const { FIVE, BONUS_FIVE } = MATCHING_COUNT;

    const matchingCount = numbers.countMatchingWith(this.#lotto);
    if (matchingCount === FIVE && numbers.includes(this.#bonusNumber)) {
      return BONUS_FIVE;
    }
    return matchingCount;
  }

  #validate(bonusNumber) {
    if (bonusNumber < LOTTO.number.min || bonusNumber > LOTTO.number.max) {
      throw new Error(ERROR.notOneToFortyFive);
    }
    if (this.#lotto.includes(bonusNumber)) {
      throw new Error(ERROR.notUniqueBonusNumber);
    }
  }
}

export default WinningLotto;
