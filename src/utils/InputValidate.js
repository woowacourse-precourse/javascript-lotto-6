import { ERROR_MSG } from '../constants/LottoMsg.js';
import InputError from './InputError.js';
import Lotto from '../models/Lotto.js';

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

  async inputWinNumbers(numbers) {
    const numbersToList = numbers.split(',');
    const winNumber = new Lotto(numbersToList);
  }
}

export default InputValidate;
