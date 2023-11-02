import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';

class InputValidate {
  inputMoney(money) {
    if (!Number.isSafeInteger(Number(money))) {
      throw new InputError(ERROR_MSG.MONEY_NUMBER_ERROR);
    }
    return Number(money);
  }
}

export default InputValidate;
