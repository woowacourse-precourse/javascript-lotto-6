import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";

const MIN_WINNING_NUMBER = 1;
const MAX_WINNING_NUMBER = 45;

class App {
  async play() {
    const amount = await this.getAmount();
    const numberIssuance = new NumberIssuance(amount);

    await App.displayPurchase(numberIssuance.EA, numberIssuance.lottoNumbers);

    const winningNumber = await this.getWinningNumber();
  }

  async getAmount() {
    let amount;
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해주세요.\n");
        amount = Number(input);
        App.validateAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumber() {
    let numbers;
    while (true) {
      try {
        const input =
          await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
        numbers = input.split(",").map((item) => Number(item));
        App.validateWinningNumber(numbers);
        return numbers;
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

  static validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 구입금액은 자연수만 입력 가능합니다.\n");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위만 가능합니다.\n");
    }
  }

  static validateWinningNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n",
      );
    }

    if (
      numbers.some(
        (number) =>
          isNaN(number) ||
          number < MIN_WINNING_NUMBER ||
          number > MAX_WINNING_NUMBER,
      )
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45사이의 숫자로 입력해주세요.\n",
      );
    }
  }
}

export default App;
