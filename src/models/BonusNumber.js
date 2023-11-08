import OPTION from '../constants/option.js';
import MESSAGE from '../constants/message.js';
import { numberInRange } from '../utils/number.js';
import InputError from '../error/InputError.js';

class BonusNumber {
  #number;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#number = number;
  }

  #validate(number, winningNumbers) {
    if (
      !numberInRange(
        number,
        OPTION.lotto.minLottoNumber,
        OPTION.lotto.maxLottoNumber,
      )
    ) {
      throw new InputError(MESSAGE.error.bonuseNumberMustBeInRange);
    }
    if (winningNumbers.includes(number)) {
      throw new InputError(MESSAGE.error.bonusNumberMustBeUnique);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
