import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/Constants.js';

class InputView {
  constructor() {}
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
    const winningNumbersArray = winningNumbers.split(',').map((number) => number.trim());
  
    return winningNumbersArray;
  }

  async promptBonusNumber() {
    const bonusNumber = await this.getUserInput(GAME_MESSAGES.ENTER_BONUS_NUMBER);

    return bonusNumber;
  }
}

export default InputView;
