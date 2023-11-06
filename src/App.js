import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";
import LottoGame from "./LottoGame.js";
import Calculator from "./Calculator.js";
import UserInput from "./UserInput.js";

class App {
  /* eslint-disable class-methods-use-this */
  async play() {
    const amount = await UserInput.getAmount();
    const numberIssuance = new NumberIssuance(amount);
    await App.displayPurchase(
      numberIssuance.numberOfTickets,
      numberIssuance.lottoNumbers,
    );

    const winningNumber = await UserInput.getWinningNumber();
    const bonusNumber = await UserInput.getBonusNumber(winningNumber);
    App.displayResult(amount, numberIssuance.lottoNumbers, {
      win: winningNumber,
      bonus: bonusNumber,
    });
  }

  static displayResult(amount, myLotto, winningLotto) {
    const lottoGame = new LottoGame(myLotto, winningLotto);
    lottoGame.start();

    lottoGame.generateStatistics();
    App.displayStatistics(lottoGame.statistics);

    const calculator = new Calculator(lottoGame.reward, amount);
    App.displayRevenue(calculator.revenue);
  }

  static displayPurchase(numberOfTickets, lottoNumbers) {
    let str = "\n";
    str += `${numberOfTickets}개를 구매했습니다. \n`;
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
