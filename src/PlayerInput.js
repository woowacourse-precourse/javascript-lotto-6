import { Console } from '@woowacourse/mission-utils';
import { prompt } from './constants/message.js';

class PlayerInput {
  expense;

  numberInput;

  bonusInput;

  async amountInput() {
    this.expense = await Console.readLineAsync(prompt.ASK_AMOUNT);
    return this.expense;
  }

  async winningNumberInput() {
    this.numberInput = await Console.readLineAsync(prompt.ASK_NUMBER);
    return this.numberInput;
  }

  async bonusNumberInput() {
    this.bonusInput = await Console.readLineAsync(prompt.ASK_BONUS_NUMBER);
    return this.bonusInput;
  }
}
export default PlayerInput;
