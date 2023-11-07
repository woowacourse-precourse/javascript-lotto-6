import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
  }

  async getWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  }

  async getBonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}

export default InputView;
