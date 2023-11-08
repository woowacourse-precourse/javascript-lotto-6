import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/Constants";

export default class Input {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGE.INPUT_PURCHASE_AMOUNT
    );
    return purchaseAmount;
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGE.INPUT_WINNING_NUMBERS
    );

    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      MESSAGE.INPUT_BONUS_NUMBER
    );

    return bonusNumber;
  }
}
