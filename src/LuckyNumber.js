import Lotto from './Lotto.js';
import { MESSAGE } from './constants/messages.js';
import { numberCheck, numbersCheck } from './validation.js';
import { LOTTO_NUMBER } from './constants/policy.js';

class LuckyNumber extends Lotto {
  #bonusNumber = 0;

  constructor(luckyNumber, bonusNumber) {
    super(luckyNumber);
    this.#validation(luckyNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validation(luckyNumber, bonusNumber) {
    numberCheck.rangeCheck(
      bonusNumber,
      LOTTO_NUMBER.startNumber,
      LOTTO_NUMBER.endNumber,
      MESSAGE.ERROR.lottoRange,
    );
    numberCheck.number(bonusNumber, MESSAGE.ERROR.number);
    numbersCheck.duplicate(
      [...luckyNumber, bonusNumber],
      MESSAGE.ERROR.duplicate,
    );
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LuckyNumber;
