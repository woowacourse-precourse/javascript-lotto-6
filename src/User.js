import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';
import {
  validateFormat,
  validateMinimumAmount,
} from '../validates/lottoPurchase.js';
import {
  checkDuplicate,
  checkLength,
  checkTypeAndRange,
} from '../validates/winningNumber.js';
import { checkBonusNumber } from '../validates/bonusNumber.js';

class User {
  #lottoCount;

  constructor() {
    this.#lottoCount = null;
  }

  async calculateLottoCount() {
    while (true) {
      try {
        const inputAmount = await Console.readLineAsync(
          MESSAGES.input.purchaseAmount,
        );
        const amount = parseInt(inputAmount);

        validateFormat(amount);
        validateMinimumAmount(amount);

        this.#lottoCount = Math.floor(amount / 1000);
        Console.print(`\n${this.#lottoCount}${MESSAGES.output.lottoPurchased}`);
        return this.#lottoCount;
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

      checkLength(winningNumbers);
      checkDuplicate(winningNumbers);
      checkTypeAndRange(winningNumbers);

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
