import Lotto from './Lotto.js';
import { ERROR, LOTTO, REGEX } from '../constant/constant.js';

class WinLotto extends Lotto {
  #bonusLotto;

  setBonusLotto(bonusLotto) {
    this.#validateBonus(bonusLotto);
    this.#bonusLotto = bonusLotto;
  }

  #validateBonus(bonusLotto) {
    if (bonusLotto > LOTTO.maxRange || bonusLotto < LOTTO.minRange) {
      throw new Error(ERROR.range);
    }
    if (!REGEX.isNumber.test(bonusLotto)) {
      throw new Error(ERROR.numberOnly);
    }
    if (this.getLotto().includes(bonusLotto)) {
      throw new Error(ERROR.duplicatedWithWinLotto);
    }
  }

  getBonusLotto() {
    return this.#bonusLotto;
  }
}

export default WinLotto;
