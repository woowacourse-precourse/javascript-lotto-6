import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import isPositiveInteger from '../utils/function.js';

class InputView {
  static async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.input.money);
    InputView.#validateMoney(money);
    return money;
  }

  static #validateMoney(money) {
    if (!isPositiveInteger(money)) {
      throw new Error('[ERROR] 올바른 금액을 입력해주세요.');
    }
  }
}

export default InputView;
