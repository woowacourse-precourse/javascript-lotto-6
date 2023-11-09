import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

class InputView {
  
  async readPurchaseAmount() {
    const amount = Console.readLineAsync(MESSAGE.inputAmount);
    return amount;
  }

  async readWinningNumber() {
    const numbers = Console.readLineAsync(MESSAGE.inputWinningNumber);
    return numbers;
  }

  async readBonusNumber() {
    const bonusNum = Console.readLineAsync(MESSAGE.inputBonusNumber);
    return bonusNum;
  }
}

export default InputView;