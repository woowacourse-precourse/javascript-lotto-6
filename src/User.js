import { Console } from '@woowacourse/mission-utils';
import LottoPurchase from '../validates/lottoPurchase.js';
import { MESSAGES } from '../constants/messages.js';
import {
  checkWinningNumbers,
  checkBonusNumber,
} from '../validates/winningNumber.js';

class User {
  async calculateLottoCount() {
    while (true) {
      try {
        const inputAmount = await Console.readLineAsync(
          MESSAGES.input.purchaseAmount,
        );
        const amount = parseInt(inputAmount);

        LottoPurchase.validateFormat(amount);
        LottoPurchase.validateMinimumAmount(amount);

        const lottoCount = Math.floor(amount / 1000);
        Console.print(`\n${lottoCount}${MESSAGES.output.lottoPurchased}`);
        return lottoCount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumbers() {
    try {
      const winningNumbersInput = await Console.readLineAsync(
        MESSAGES.input.winningNumbers,
      );

      const winningNumbers = winningNumbersInput
        .split(',')
        .map((num) => parseInt(num));

      checkWinningNumbers(winningNumbers);

      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const bonusNumberInput = await Console.readLineAsync(
        MESSAGES.input.bonusNumber,
      );

      const bonusNumber = parseInt(bonusNumberInput);

      checkBonusNumber(bonusNumber);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }
}

export default User;
