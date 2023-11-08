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
    const { five, bonusFive } = MATCHING_COUNT;

    const matchingCount = otherLotto.countMatchingWith(this.#lotto);
    if (matchingCount === five && otherLotto.includes(this.#bonusNumber)) {
      return bonusFive;
    }
    return matchingCount;
  }

  #validate(bonusNumber) {
    if (!(LOTTO.number.min <= bonusNumber && bonusNumber <= LOTTO.number.max)) {
      throw new Error(ERROR.between);
    }
    if (this.#lotto.includes(bonusNumber)) {
      throw new Error(ERROR.uniqueBonusNumber);
    }
  }
}

export default WinningLotto;
