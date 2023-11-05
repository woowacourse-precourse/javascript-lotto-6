import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';

class InputValidate {
  #MONEY_REGAX;

  constructor() {
    this.#MONEY_REGAX = /\s/;
  }

  async inputMoney(money) {
    if (this.#MONEY_REGAX.test(money)) {
      throw new InputError(ERROR_MSG.MONEY_NOT_BLANK);
    }
    if (!Number.isSafeInteger(Number(money))) {
      throw new InputError(ERROR_MSG.MONEY_SHOULD_NUMBER);
    }

    if (Number(money) % 1000 !== 0 || Number(money) === 0) {
      throw new InputError(ERROR_MSG.MONEY_IS_THOUSAND);
    }
    return Number(money);
  }

  async lengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new InputError(ERROR_MSG.LOTTO_SHOULD_SIX);
    }

    if (new Set(numbers).size !== 6) {
      throw new InputError(ERROR_MSG.LOTTO_DUPLICATE_ERROR);
    }
  }

  async bonusNumber(bonus) {
    if (!Number.isSafeInteger(Number(bonus))) {
      throw new InputError(ERROR_MSG.BONUS_NUMBER_NOT_NUMBER);
    }
  }
}

export default InputValidate;
