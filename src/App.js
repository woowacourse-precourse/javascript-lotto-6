import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";
import ValidateInput from "./ValidateInput.js";
import LottoGame from "./LottoGame.js";
import Calculator from "./Calculator.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const numberIssuance = new NumberIssuance(amount);
    const myLotto = numberIssuance.lottoNumbers;

    await App.displayPurchase(numberIssuance.EA, myLotto);

    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumber);

    const winningLotto = {
      win: winningNumber,
      bonus: bonusNumber,
    };

    const lottoGame = new LottoGame(myLotto, winningLotto);
    lottoGame.start();

    lottoGame.generateStatistics();
    App.displayStatistics(lottoGame.statistics);

    const calculator = new Calculator(lottoGame.reward, amount);
    App.displayRevenue(calculator.revenue);
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

  async getBonusNumber(winningNumber) {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          "\n보너스 번호를 입력해주세요.\n",
        );
        const number = Number(input);
        ValidateInput.validateBonusNumber(number, winningNumber);
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

  static displayStatistics(statistics) {
    const str = `\n당첨 통계\n---${statistics}`;
    Console.print(str);
  }

  static displayRevenue(revenue) {
    const str = `총 수익률은 ${revenue}%입니다.`;
    Console.print(str);
  }
}

export default App;
