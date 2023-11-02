import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';

class InputValidate {
  inputMoney(money) {
    if (!Number.isSafeInteger(Number(money))) {
      throw new InputError(ERROR_MSG.MONEY_SHOULD_NUMBER);
    }

    if (Number(money) % 1000 !== 0 || Number(money) === 0) {
      throw new InputError(ERROR_MSG.MONEY_IS_THOUSAND);
    }
    return Number(money);
  }
}

export default InputValidate;
