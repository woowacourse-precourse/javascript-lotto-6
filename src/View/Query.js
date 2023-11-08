import { Console } from "@woowacourse/mission-utils";
import STRING from "../Message/Strig";
class Query {
  static async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(STRING.purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      throw new Error(STRING.error);
    }
  }

  static async getWinningNumber() {
    try {
      const winningNumber = await Console.readLineAsync(STRING.WinningNumber);
      return winningNumber;
    } catch (error) {
      throw new Error(STRING.error);
    }
  }

  static async getBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(STRING.BonusNumber);
      return bonusNumber;
    } catch (error) {
      throw new Error(STRING.error);
    }
  }
}
export default Query;
