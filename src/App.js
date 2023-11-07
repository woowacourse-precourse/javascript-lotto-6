import NumberIssuance from "./services/NumberIssuance.js";
import LottoGame from "./LottoGame.js";
import Calculator from "./services/Calculator.js";
import UserInput from "./io/UserInput.js";
import UserOutput from "./io/UserOutput.js";

class App {
  /* eslint-disable class-methods-use-this */
  async play() {
    const amount = await UserInput.getAmount();
    const numberIssuance = new NumberIssuance(amount);
    await UserOutput.displayPurchase(
      numberIssuance.numberOfTickets,
      numberIssuance.lottoNumbers,
    );

    const winningNumber = await UserInput.getWinningNumber();
    const bonusNumber = await UserInput.getBonusNumber(winningNumber);
    const results = App.generateResult(amount, numberIssuance.lottoNumbers, {
      win: winningNumber,
      bonus: bonusNumber,
    });

    UserOutput.displayStatistics(results.statistics);
    UserOutput.displayRevenue(results.revenue);
  }

  static generateResult(amount, myLotto, winningLotto) {
    const lottoGame = new LottoGame(myLotto);
    const calculator = new Calculator();

    lottoGame.start(winningLotto);
    lottoGame.generateStatistics();
    calculator.calculateRevenue(lottoGame.reward, amount);

    return {
      statistics: lottoGame.statistics,
      revenue: calculator.revenue,
    };
  }
}

export default App;
