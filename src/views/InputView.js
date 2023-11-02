import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/LottoMsg.js';

class InputView {
  async purchaseMoney() {
    const moneyInput = await Console.readLineAsync(INPUT_MSG.PURCHASE_MONEY);
    return Number(moneyInput);
  }
}

export default InputView;
