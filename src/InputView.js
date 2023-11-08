import { Console } from "@woowacourse/mission-utils";
import LottoValidator from "./Validator.js";
import MESSAGES from "./messages.js";

class InputView {
  constructor() {
    this.validator = new LottoValidator();
  }
  async askPayment() {
    try {
      const amount = await Console.readLineAsync(MESSAGES.ASK_PAYMENT);
      this.validator.validatePurchaseAmount(amount);
      return amount;
    } catch (e) {
      Console.print(e.message);
      return this.askPayment();
    }
  }

  async askWinningNumbers() {
    try {
      const input = await Console.readLineAsync(MESSAGES.ASK_WINNING_NUMBERS);
      const winnerNumber = input.split(",").map(Number);
      this.validator.validateNumbers(winnerNumber);
      return input.split(",").map(Number);
    } catch (e) {
      Console.print(e.message);
      return this.askWinningNumbers();
    }
  }

  async askBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(MESSAGES.ASK_BONUS_NUMBER);
      const bonusNumber = Number(input);
      this.validator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return this.askBonusNumber(winningNumbers);
    }
  }
}

export default InputView;
