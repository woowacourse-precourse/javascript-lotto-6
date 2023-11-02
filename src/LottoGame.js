import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import { GAME_MESSAGES } from './constants.js';
import { validateMoney } from './utils.js';

class LottoGame {
  async setupInputMoney() {
    while (true) {
      const money = await InputView.inputCommon(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
      try {
        validateMoney(money);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoGame;
