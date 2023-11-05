import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';

class InputView {
  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async promptPurchaseAmount() {
    const money = await this.getUserInput(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
    // validation 처리할 예정
    return money;
  }
}

export default InputView;