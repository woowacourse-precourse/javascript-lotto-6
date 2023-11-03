import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';

class InputValidate {
  async inputMoney(money) {
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
  }

  async bonusNumber(bonus) {
    if (!Number.isSafeInteger(Number(bonus))) {
      throw new InputError(ERROR_MSG.BONUS_NUMBER_NOT_NUMBER);
    }
  }
}

export default InputValidate;
