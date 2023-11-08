import { Console } from '@woowacourse/mission-utils';
import {
  GAMEMSG_INPUT_MONEY,
  GAMEMSG_INPUT_WINNING_NUMBERS,
  GAMEMSG_INPUT_BONUS_NUMBER,
} from '../constants/GameMessage.js';

class Input {
  constructor() {}

  static async inputMoney() {
    const inputMoney = await Console.readLineAsync(GAMEMSG_INPUT_MONEY);
    return inputMoney;
  }

  static async inputWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(
      GAMEMSG_INPUT_WINNING_NUMBERS,
    );
    return inputWinningNumbers;
  }

  static async inputBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(
      GAMEMSG_INPUT_BONUS_NUMBER,
    );
    return inputBonusNumber;
  }
}

export default Input;
