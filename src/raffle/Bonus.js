import SETTINGS from '../constants/Settings.js';
import REGEXP from '../constants/RegExp.js';
import { BonusTypeError, BonusRangeError } from '../error/CustomErrors.js';

export default class Bonus {
  #bonus;

  constructor(bonus) {
    this.#validate(bonus);
    this.#bonus = bonus;
  }

  #validate(bonus) {
    if (!REGEXP.eachNumber.test(bonus)) {
      throw new BonusTypeError(bonus);
    }
    if (Number(bonus) < SETTINGS.minimumLottoRange || Number(bonus) > SETTINGS.maximumLottoRange) {
      throw new BonusRangeError(bonus);
    }
  }

  get() {
    return Number(this.#bonus);
  }
}
