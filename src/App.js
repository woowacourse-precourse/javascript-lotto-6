import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./services/NumberIssuance.js";
import LottoGame from "./LottoGame.js";
import Calculator from "./services/Calculator.js";
import UserInput from "./io/UserInput.js";

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
    const results = App.generateResult(amount, numberIssuance.lottoNumbers, {
      win: winningNumber,
      bonus: bonusNumber,
    });

    App.displayStatistics(results.statistics);
    App.displayRevenue(results.revenue);
  }

  static generateResult(amount, myLotto, winningLotto) {
    const lottoGame = new LottoGame(myLotto, winningLotto);
    const calculator = new Calculator();

    lottoGame.start();
    lottoGame.generateStatistics();
    calculator.calculateRevenue(lottoGame.reward, amount);

    return {
      statistics: lottoGame.statistics,
      revenue: calculator.revenue,
    };
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
