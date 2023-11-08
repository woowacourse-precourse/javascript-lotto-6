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

  static async getBonusNumber() {
    const stringBounsNumber = await Console.readLineAsync(
      CONSOLE_MESSAGE.INPUT_BONUS_NUMBER,
    );

    const bonusNumber = Number(stringBounsNumber);
    return bonusNumber;
  }
}

export default InputView;
