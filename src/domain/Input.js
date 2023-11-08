import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
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
    while (true) {
      try {
        const winningNumberInput = await Console.readLineAsync(
          MESSAGE.inputWinningNumber
        );
        const winningNumbers = winningNumberInput
          .split(',')
          .map((number) => Number(number.trim()));
        new Lotto(winningNumbers);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          MESSAGE.inputBonusNumber
        );
        validBonusNumber(bonusNumber);
        return Number(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
