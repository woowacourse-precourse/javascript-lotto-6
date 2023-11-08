import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";
import Lotto from "../Lotto.js";

export default class InputView {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.PURCHASE_AMOUNT
    );
    new Lotto(purchaseAmount);
    return purchaseAmount;
  }

  async getWinningNumber() {
    const winningInput = await Console.readLineAsync(MESSAGES.WINNIG_NUMBER);
    const winningNumber = winningInput.split(",").map(Number);
    new Lotto(winningNumber);
    return winningNumber;
  }

  async getBonusNumber() {
    const bonusInput = await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
    const bonusNumber = Number(bonusInput);
    new Lotto(bonusNumber);
    return bonusNumber;
  }
}
