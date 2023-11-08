import BuyLotts from "./utils/BuyLottos";
import Winning from "./utils/Winning";
import Rate from "./utils/Rate";
import View from "./utils/View";

class App {
  constructor() {
    this.Buy = new BuyLotts();
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
    const rate = this.Rate.rateOfReturn(
      this.Winning.statistics,
      this.Buy.lottoEach
    );
    this.View.statisticsPrint(this.Winning.statistics);
    this.View.printRateOfReturn(rate);
  }
}

export default App;
