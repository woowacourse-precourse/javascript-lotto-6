import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages';
import {
  validateFormat,
  validateMinimumAmount,
  validateUndivided,
} from '../validates/lottoPurchase';
import {
  checkDuplicate,
  checkLength,
  checkTypeAndRange,
} from '../validates/winningNumber';
import {
  checkBonusNumberRange,
  checkBonusNumberType,
  checkBonusNumberDuplicate,
} from '../validates/bonusNumber';

class User {
  #lottoCount;
  #winningNumbers;

  constructor() {
    this.#lottoCount = null;
    this.#winningNumbers = [];
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
        validateUndivided(amount);

        this.#lottoCount = amount / 1000;
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

      this.#winningNumbers = winningNumbersInput
        .split(',')
        .map((num) => parseInt(num));

      checkLength(this.#winningNumbers);
      checkDuplicate(this.#winningNumbers);
      checkTypeAndRange(this.#winningNumbers);

      return this.#winningNumbers;
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

      checkBonusNumberType(bonusNumber);
      checkBonusNumberRange(bonusNumber);
      checkBonusNumberDuplicate(bonusNumber, this.#winningNumbers);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }
}

export default User;
