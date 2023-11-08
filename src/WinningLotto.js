import Lotto from './Lotto.js';
import { LOTTO, MATCHING_COUNT } from './LottoInfo.js';
import { ERROR } from './LottoMessage.js';

class WinningLotto {
  #lotto;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#lotto = new Lotto(winningNumbers);

    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  countMatchingWith(otherLotto) {
    const { FIVE, BONUS_FIVE } = MATCHING_COUNT;

    const matchingCount = otherLotto.countMatchingWith(this.#lotto);
    if (matchingCount === FIVE && otherLotto.includes(this.#bonusNumber)) {
      return BONUS_FIVE;
    }
    return matchingCount;
  }

  #validate(bonusNumber) {
    if (bonusNumber < LOTTO.number.min || bonusNumber > LOTTO.number.max) {
      throw new Error(ERROR.between);
    }
    if (this.#lotto.includes(bonusNumber)) {
      throw new Error(ERROR.uniqueBonusNumber);
    }
  }
}

export default WinningLotto;
