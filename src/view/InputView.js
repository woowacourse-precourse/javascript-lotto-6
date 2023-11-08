import { Console } from '@woowacourse/mission-utils';

import { CONSOLE_MESSAGE } from './../constants/constants';

class InputView {
  static async getMoney() {
    const stringMoney = await Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_MONEY,
    );
    const money = Number(stringMoney);
    return money;
  }
}

export default InputView;
