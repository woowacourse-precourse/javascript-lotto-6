import { Console } from '@woowacourse/mission-utils';

import CONSTANTS from './constants.js';

import PurchaseAmount from './PurchaseAmount.js';
import WinningNumbers from './WinningNumbers.js';
import BonusNumber from './BonusNumber.js';

class App {
  async play() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber(
      winningNumbers.getValues(),
    );
  }

  async #inputPurchaseAmount() {
    while (true) {
      try {
        const amountInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_PURCHASE_AMOUNT,
        );
        const purchaseAmount = new PurchaseAmount(amountInput);

        return purchaseAmount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #inputWinningNumbers() {
    while (true) {
      try {
        const numbersInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_WINNING_NUMBERS,
        );
        const winningNumbers = new WinningNumbers(numbersInput);

        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  /**
   * @param {number[]} winningValues
   */
  async #inputBonusNumber(winningValues) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_BONUS_NUMBER,
        );
        const bonusNumber = new BonusNumber(bonusInput, winningValues);

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
