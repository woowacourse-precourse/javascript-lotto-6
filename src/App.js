import Money from "./Money";
import System from "./System";
import ConsolePrint from "./views/ConsolePrint";

class App {
  constructor() {
    this.moneyInstance = new Money();
    this.system = new System();
    this.consolePrint = new ConsolePrint();
  }

  async play() {
    await this.moneyInstance.initialize();
    const money = this.moneyInstance.getMoney();
    const lottoCount = await this.moneyInstance.getLottoCount();
    const lottos = await this.system.purchaseLottos(lottoCount);
    const { lotto, bonusNumber } = await this.getLottoAndBonusNumber();
    const winningCounts = this.system.getWinningCounts(
      lottos,
      lotto.getNumbers(),
      bonusNumber
    );
    const prize = this.system.calculateTotalWinningMoney(winningCounts);
    const percentage = this.system.calculateProfitPercentage(money, prize);
    this.printResults(lottos, winningCounts, percentage);
  }

  async getLottoAndBonusNumber() {
    const lotto = await this.system.getLotto();
    const bonusNumber = await this.system.getBonusNumber(lotto);
    return { lotto, bonusNumber };
  }

  printResults(lottos, winningCounts, percentage) {
    this.consolePrint.printLottos(lottos);
    this.consolePrint.printPrize(winningCounts);
    this.consolePrint.printPercentage(percentage);
  }
}

export default App;
