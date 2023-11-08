import { Console } from '@woowacourse/mission-utils';
import validation from '../util/validation/index.js';

class InputValidationService {
  static async setInput(query, validator, ...validatorArgs) {
    while (true) {
      try {
        const input = await Console.readLineAsync(query);
        validator(input, ...validatorArgs);
        return input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async setPurchaseMoney(query) {
    return this.setInput(query, validation.purchaseMoneyInput);
  }

  static async setWinningNumber(query) {
    return this.setInput(query, validation.winningNumberInput);
  }

  static async setBonusNumber(query, winningNumber) {
    return this.setInput(query, validation.bonusNumberInput, winningNumber);
  }
}

export default InputValidationService;
