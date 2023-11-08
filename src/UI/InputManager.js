import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../Constant/Constants.js';

class InputManager {
  async enterPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      GUIDE_MESSAGES.ENTER_PURCHASE_AMOUNT
    );
    return purchaseAmountInput;
  }

  async enterWinningNumbersInput() {
    const winningNumbersInput = await Console.readLineAsync(
      GUIDE_MESSAGES.ENTER_WINNING_NUMBERS
    );
    return winningNumbersInput;
  }

  async enterBonusNumberInput() {
    const bonusNumberInput = await Console.readLineAsync(
      GUIDE_MESSAGES.ENTER_BONUS_NUMBER
    );
    return bonusNumberInput;
  }
}

export default InputManager;
