import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './constants/Messages.js';

class Input {
  async userMoney() {
    const userMoneyInput = await Console.readLineAsync(INPUT.userMoney);
    return userMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      INPUT.winningNumbers
    );
    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await Console.readLineAsync(INPUT.bonusNumber);
    return bonusNumbersInput.trim();
  }
}

export default Input;
