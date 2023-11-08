import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

export default class InputView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT);
  }

  async getWinningNumber() {
    const winningInput = await Console.readLineAsync(MESSAGES.WINNIG_NUMBER);
    const winningNumber = winningInput.split(",").map(Number);
    return winningNumber;
  }

  async getBonusNumber() {
    const bonusInput = await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
    const bonusNumber = Number(bonusInput);
    return bonusNumber;
  }
}
