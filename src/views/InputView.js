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
    try {
      const inputMoney = await Console.readLineAsync(INPUT_MSG.PURCHASE_MONEY);
      await this.INPUT_VAL.inputMoney(inputMoney);
      return Number(inputMoney);
    } catch (error) {
      Console.print(error.name + error.message);
      return error.name;
    }
  }
}

export default InputView;
