import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants.js';

export default class UserInput {
  static VALID = 'valid';

  static async getPurchaseAmount() {
    while (true) {
      const input = await Console.readLineAsync(MESSAGE.INPUT_PURCHASE_AMOUNT);
      const result = this.getPurchaseAmountValidation(input);

      if (result === this.VALID) return Number(input);
      this.printError(result);
    }
  }

  static printError(error) {
    Console.print(ERROR.getError(error));
  }

  static getPurchaseAmountValidation(input) {
    if (input.length === 0) return ERROR.BLANK_INPUT;
    const num = Number(input);
    if (Number.isNaN(num)) return ERROR.NOT_A_NUMBER;
    if (num <= 0) return ERROR.NOT_A_NATURAL_NUMBER;
    if (num % 1000 !== 0) return ERROR.NOT_DIVIDED_BY_THOUSAND;
    return this.VALID;
  }
}
