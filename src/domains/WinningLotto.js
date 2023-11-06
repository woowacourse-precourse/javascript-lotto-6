import REGEXP from '../constants/RegExp.js';
import SETTINGS from '../constants/Settings.js';
import Lotto from './Lotto.js';
import {
  BonusTypeError,
  BonusRangeError,
  BonusIncludedError
} from '../error/CustomErrors.js';
import Utils from '../utils/Utils.js';

class WinningLotto extends Lotto {
  #bonus;

  constructor(numbers) {
    const numbersArray = Utils.stringToNumberArray(numbers);
    super(numbersArray);
    this.#bonus = 0;
  }

  setBonus(bonus) {
    this.#validateBonus(bonus);
    this.#bonus = Number(bonus);
  }

  #validateBonus(bonus) {
    if (!REGEXP.eachNumber.test(bonus)) {
      throw new BonusTypeError(bonus);
    }
    if (Number(bonus) < SETTINGS.minimumLottoRange || Number(bonus) > SETTINGS.maximumLottoRange) {
      throw new BonusRangeError(bonus);
    }
    if (this._numbers.includes(Number(bonus))) {
      throw new BonusIncludedError(bonus);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

export default WinningLotto;
