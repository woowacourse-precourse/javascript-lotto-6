import { Console } from '@woowacourse/mission-utils';
import { INPUT_QUERY_MESSAGES } from './constants.js';
import Parser from './Parser.js';
import Validator from './Validator.js';

class Input {
  async readInput(message) {
    return await Console.readLineAsync(message);
  }

  static async getPurchaseAmount() {
    try {
      const priceText = await new this().readInput(
        INPUT_QUERY_MESSAGES.purchaseAmout
      );

      const purchaseAmout = Parser.stringToNumber(priceText);
      if (Validator.isValidPurchaseAmount(purchaseAmout)) return purchaseAmout;
    } catch (error) {
      console.log(error);
      await this.getPurchaseAmount();
    }
  }
}
export default Input;
