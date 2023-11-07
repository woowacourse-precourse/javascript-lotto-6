import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { validAmount, validBonusNumber } from './ValidationInput.js';
import { MESSAGE } from '../constants/Message.js';

export class Input {
  async getAmount() {
    while (true) {
      try {
        const amount = await Console.readLineAsync(MESSAGE.inputAmount);
        validAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumber() {
    const winningNumberInput = await Console.readLineAsync(
      MESSAGE.inputWinningNumber
    );
    const winningNumbers = winningNumberInput
      .split(',')
      .map((number) => Number(number.trim()));

    try {
      new Lotto(winningNumbers);
    } catch (error) {
      throw error;
    }
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.inputBonusNumber);
    validBonusNumber(bonusNumber);
    return Number(bonusNumber);
  }
}
