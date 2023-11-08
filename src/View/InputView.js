import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';

class InputView {
  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async promptPurchaseAmount() {
    const purchaseAmount = await this.getUserInput(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
    // validation 처리할 예정
    return purchaseAmount;
  }

  async promptWinningNumbers() {
    const winningNumbers = await this.getUserInput(GAME_MESSAGES.ENTER_WINNING_NUMBERS);
    //validation 처리할 예정
    return winningNumbers;
  }
}

export default InputView;
