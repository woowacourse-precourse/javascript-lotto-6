import Buy from "./utils/Buy.js";
import Winning from "./utils/Winning.js";
import Rate from "./utils/Rate.js";
import View from "./utils/View.js";

class App {

  constructor() {
    this.Buy = new Buy();
    this.View = new View();
    this.Winning = new Winning();
    this.Rate = new Rate();
  }

  async play() {
    await this.Buy.tryBuyLotto();
    this.Buy.buyLottoEntire();
    this.View.printAllLotto(this.Buy.lottoAll);

    await this.Winning.tryNumberInput();
    await this.Winning.tryBonusNumInput();

    this.Winning.CompareAll(this.Buy.lottoAll);
    const rate = this.Rate.rateOfReturn(this.Winning.statistics, this.Buy.lottoEach);

    this.View.statisticsPrint(this.Winning.statistics);
    this.View.printRateOfReturn(rate);
  }
}

export default App;
