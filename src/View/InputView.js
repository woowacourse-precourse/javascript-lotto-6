import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import isPositiveInteger from '../utils/function.js';

class InputView {
  static async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.input.money);
    return money;
  }
}

export default InputView;
