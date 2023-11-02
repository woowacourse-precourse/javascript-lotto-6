import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/LottoMsg.js';
import InputValidate from '../utils/InputValidate.js';

class InputView {
  constructor() {
    this.INPUT_VAL = new InputValidate();
  }

  purchaseMsg() {
    Console.print(INPUT_MSG.PURCHASE_MONEY);
  }

  async purchaseMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MSG.PURCHASE_MONEY);
    return this.INPUT_VAL.inputMoney(inputMoney);
  }
}

export default InputView;
