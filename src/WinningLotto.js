import Lotto from './Lotto.js';
import { ERROR, LOTTO } from './config.js';

export default class WinningLotto extends Lotto {
  #bonusNumber;

  #validateBonusNumber(bonusNumber) {
    const { START, END } = LOTTO.RANGE;

    if (bonusNumber < START || bonusNumber > END) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    if (this.getNumbers().includes(bonusNumber)) throw new Error(ERROR.IS_DUPLICATED);
  }

  #getMatchCountWithoutBonusNumber(lotto) {
    return this.getNumbers().filter((number) => lotto.getNumbers().includes(number)).length;
  }
  #isMatchBonusNumber(lotto) {
    return lotto.getNumbers().includes(this.#bonusNumber);
  }
  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  calculate(lotto) {
    const { WIN } = LOTTO;
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONE } = WIN;

    const matchCount = this.#getMatchCountWithoutBonusNumber(lotto);
    const isBonusNumberMatched = this.#isMatchBonusNumber(lotto);

    if (matchCount === 6) return FIRST;
    if (matchCount === 5 && isBonusNumberMatched) return SECOND;
    if (matchCount === 5) return THIRD;
    if (matchCount === 4) return FOURTH;
    if (matchCount === 3) return FIFTH;
    return NONE;
  }
}
