import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants.js';
import { InputError } from './utils/error.js';

export default class UserInput {
  static async getPurchaseAmount() {
    while (true) {
      const input = await Console.readLineAsync(MESSAGE.INPUT_PURCHASE_AMOUNT);
      try {
        this.checkPurchaseAmountValidation(input);
        return Number(input);
      } catch (exception) {
        this.printError(exception.message);
      }
    }
  }

  static printError(error) {
    Console.print(error);
  }

  static checkPurchaseAmountValidation(input) {
    if (input.length === 0) throw new InputError(ERROR.BLANK_INPUT);
    const num = Number(input);
    if (Number.isNaN(num)) throw new InputError(ERROR.NOT_A_NUMBER);
    if (num <= 0) throw new InputError(ERROR.NOT_A_NATURAL_NUMBER);
    if (num % 1000 !== 0) throw new InputError(ERROR.NOT_DIVIDED_BY_THOUSAND);
  }
}
