import { Console } from "@woowacourse/mission-utils";
import LottoValidator from "./Validator.js";
class InputView {
  constructor() {
    this.validator = new LottoValidator();
  }
  async askPayment() {
    try {
      const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.validator.validatePurchaseAmount(amount);
      return amount;
    } catch (e) {
      Console.print(e.message);
      return this.askPayment();
    }
  }

  async askWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
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
      const input = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );
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
