import { Console } from '@woowacourse/mission-utils';

import { CONSOLE_MESSAGE, CONSTANT } from './../constants/constants';

class InputView {
  static async getMoney() {
    const stringMoney = await Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_MONEY,
    );

    const money = Number(stringMoney);
    return money;
  }

  static async getWinningNumber() {
    const stringWinningNumber = await Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_WINNING_NUMBER,
    );

    const winningNumber = stringWinningNumber
      .split(CONSTANT.COMMA)
      .map((number) => Number(number));

    return winningNumber;
  }
}

export default InputView;
