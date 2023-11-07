import validationUtils from './utils/validationUtils.js';
import MESSAGE from './constants/message.js';

class Bonus {
  #bonus;

  constructor(number, lotto) {
    this.#bonus = number;
    this.#validate(lotto);
  }

  #validate(lotto) {
    validationUtils.checkNumber(this.#bonus);
    validationUtils.checkRange(this.#bonus, MESSAGE.error.rangeBonus);
    this.#checkDuplicateNumber(lotto);
  }

  #checkDuplicateNumber(lotto) {
    if (lotto.includes(this.#bonus)) {
      throw new Error(MESSAGE.error.duplicateBonusNumber);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
