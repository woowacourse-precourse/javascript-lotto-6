import Lotto from './Lotto.js';
import { ERROR, LOTTO } from './config.js';

export default class WinningLotto extends Lotto {
  #bonusNumber;
  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    const { START, END } = LOTTO.RANGE;

    if (bonusNumber < START || bonusNumber > END) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    if (this.getNumbers().includes(bonusNumber)) throw new Error(ERROR.IS_DUPLICATED);
  }
}
