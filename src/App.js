import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";
import ValidateInput from "./ValidateInput.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const numberIssuance = new NumberIssuance(amount);

    await App.displayPurchase(numberIssuance.EA, numberIssuance.lottoNumbers);

    const winningNumber = await this.getWinningNumber();

    const bonusNumber = await this.getBonusNumber();

    Console.print(winningNumber);
    Console.print(bonusNumber);
  }

  async getAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해주세요.\n");
        const amount = Number(input);
        ValidateInput.validateAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumber() {
    while (true) {
      try {
        const input =
          await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
        const numbers = input.split(",").map((item) => Number(item));
        ValidateInput.validateWinningNumber(numbers);
        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber() {
    while (true) {
      try {
        const input =
          await Console.readLineAsync("보너스 번호를 입력해주세요.\n");
        const number = Number(input);
        ValidateInput.validateBonusNumber(number);
        return number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static displayPurchase(EA, lottoNumbers) {
    let str = "\n";
    str += `${EA}개를 구매했습니다. \n`;
    str += `${lottoNumbers.map((item) => `[${item.join(", ")}]`).join("\n")}\n`;
    Console.print(str);
  }
}

export default App;
