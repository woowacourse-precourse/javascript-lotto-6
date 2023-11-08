import { Console } from '@woowacourse/mission-utils';
import { INPUT_QUERY_MESSAGES } from './constants/index.js';
import Parser from './Parser.js';
import Validator from './Validator.js';

class Input {
  async readInput(message) {
    return await Console.readLineAsync(message);
  }

  static async getPurchaseAmount() {
    try {
      const inputValue = await new this().readInput(
        INPUT_QUERY_MESSAGES.purchaseAmout
      );

      const purchaseAmout = Parser.stringToNumber(inputValue);
      if (Validator.isValidPurchaseAmount(purchaseAmout)) return purchaseAmout;
    } catch (error) {
      console.log(error);
      await this.getPurchaseAmount();
    }
  }

  static async getWinningLottery() {
    try {
      const inputValue = await new this().readInput(
        INPUT_QUERY_MESSAGES.winningLottery
      );
      const winningLottery = Parser.stringToArray(inputValue);
      Validator.isValidLottery(
        winningLottery.map((num) => Parser.stringToNumber(num))
      );

      const bonusNumber = await new this().readInput(
        INPUT_QUERY_MESSAGES.bonusNumber
      );
      winningLottery.push(Parser.stringToNumber(bonusNumber));
      // console.log(winningLottery);
      if (Validator.isValidLottery(winningLottery)) return winningLottery;
    } catch (error) {
      console.log(error);
      await this.getWinningLottery();
    }
  }
}
export default Input;
