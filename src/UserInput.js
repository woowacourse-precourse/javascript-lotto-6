import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR, LOTTERY } from './constants.js';
import { InputError } from './utils/error.js';

export default class UserInput {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_PURCHASE_AMOUNT);
    try {
      this.checkPurchaseAmountValidation(input);
      return Number(input);
    } catch (exception) {
      this.printError(exception.message);
      return this.getPurchaseAmount();
    }
  }

  static checkPurchaseAmountValidation(input) {
    if (input.length === 0) throw new InputError(ERROR.BLANK_INPUT);
    const num = Number(input);
    if (Number.isNaN(num)) throw new InputError(ERROR.NOT_A_NUMBER);
    if (num <= 0) throw new InputError(ERROR.NOT_A_NATURAL_NUMBER);
    if (num % LOTTERY.PRICE !== 0) throw new InputError(ERROR.NOT_DIVIDED_BY_THOUSAND);
  }

  static async getWinningNumbers() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
    try {
      this.checkWinningNumbersValidation(input);
      return input.split(',').map(Number);
    } catch (exception) {
      this.printError(exception.message);
      return this.getWinningNumbers();
    }
  }

  static checkWinningNumbersValidation(input) {
    if (input.length === 0) throw new InputError(ERROR.BLANK_INPUT);
    const arr = input.split(',').map(Number);
    if (arr.some((num) => Number.isNaN(num))) throw new InputError(ERROR.NOT_A_NUMBER);
    if (
      !arr.every((num) => {
        return num >= LOTTERY.MIN_NUM && num <= LOTTERY.MAX_NUM;
      })
    )
      throw new InputError(ERROR.OUT_OF_RANGE(LOTTERY.MIN_NUM, LOTTERY.MAX_NUM));
    if (arr.length !== LOTTERY.NUM_COUNT) throw new InputError(ERROR.NOT_SIX_NUMBERS);
    if (new Set(arr).size !== LOTTERY.NUM_COUNT) throw new InputError(ERROR.NOT_SIX_NUMBERS);
  }

  static async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
    try {
      this.checkBonusNumberValidation(winningNumbers, input);
      return Number(input);
    } catch (exception) {
      this.printError(exception.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  static checkBonusNumberValidation(winningNumbers, input) {
    if (input.length === 0) throw new InputError(ERROR.BLANK_INPUT);
    const num = Number(input);
    if (Number.isNaN(num)) throw new InputError(ERROR.NOT_A_NUMBER);
    if (winningNumbers.includes(num)) throw new InputError(ERROR.ALREADY_SELECTED);
  }

  static printError(error) {
    Console.print(error);
  }
}
