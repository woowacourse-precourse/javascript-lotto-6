import Validation from './Validation.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './constants/Messages.js';

class Input {
  async userMoney() {
    const userMoneyInput = await this.read(INPUT.userMoney);
    return userMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await this.read(INPUT.winningNumbers);
    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await this.read(INPUT.bonusNumber);
    return bonusNumbersInput.trim();
  }

  async read(message) {
    const input = await Console.readLineAsync(message);
    Validation.validateInputEmpty(input);
    return input;
  }
}

export default Input;
