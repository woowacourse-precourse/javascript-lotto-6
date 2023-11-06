import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import InputValidation from './InputValidation.js';

export default class UserInput {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_PURCHASE_AMOUNT);
    try {
      InputValidation.checkPurchaseAmount(input);
      return Number(input);
    } catch (exception) {
      this.printError(exception.message);
      return this.getPurchaseAmount();
    }
  }

  static async getWinningNumbers() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
    try {
      InputValidation.checkWinningNumbers(input);
      return input.split(',').map(Number);
    } catch (exception) {
      this.printError(exception.message);
      return this.getWinningNumbers();
    }
  }

  static async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
    try {
      InputValidation.checkBonusNumber(winningNumbers, input);
      return Number(input);
    } catch (exception) {
      this.printError(exception.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  static printError(error) {
    Console.print(error);
  }
}
