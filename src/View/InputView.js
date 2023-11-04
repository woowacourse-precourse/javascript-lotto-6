import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import isPositiveInteger from '../utils/function.js';
import ERROR from '../constants/error.js';

class InputView {
  static async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.input.money);
    InputView.#validateMoney(money);
    return money;
  }

  static #validateMoney(money) {
    if (!isPositiveInteger(money)) {
      throw new Error(ERROR.input.invalidMoney);
    }
  }
}

export default InputView;
