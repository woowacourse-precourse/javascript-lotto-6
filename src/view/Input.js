import Validation from '../utils/Validation.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/Messages.js';

class Input {
  async userMoney() {
    const userMoneyInput = await this.read(INPUT.user_money);
    return userMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await this.read(INPUT.winning_numbers);
    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await this.read(INPUT.bonus_number);
    return bonusNumbersInput.trim();
  }

  async read(message) {
    const input = await Console.readLineAsync(message);
    Validation.validateInputEmpty(input);
    return input;
  }
}

export default Input;
