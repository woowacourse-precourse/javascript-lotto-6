import { Console } from '@woowacourse/mission-utils';
import Validate from '../util/Validate.js';
import gameMessage from '../constants/gameMessages.js';

export default class InputMoney {
  async input() {
    const inputMoney = await Console.readLineAsync(gameMessage.INPUT.MONEY);
    try {
      Validate.money(inputMoney);
    } catch (error) {
      Console.print(error.message);
      return this.input();
    }
    return inputMoney;
  }
}
