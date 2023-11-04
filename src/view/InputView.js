import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGES.purchase);

    return purchaseAmount.trim();
  }

  async readWinningNumbers() {
    const winningNumber = await Console.readLineAsync(
      INPUT_MESSAGES.winningNumber,
    );

    return winningNumber;
  }
}

export default InputView;
