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
    // 로또 구매 및 구매한 로또 발행
    await this.Buy.tryBuyLotto();
    this.Buy.buyLottoEntire();
    this.View.printAllLotto(this.Buy.lottoAll);
    // 당첨 번호와 보너스 번호 입력 받음
    await this.Winning.tryNumberInput();
    await this.Winning.tryBonusNumInput();
    // 당첨 결과 및 총 수익률 계산하는 함수
    this.Winning.CompareAll(this.Buy.lottoAll);
    const rate = this.Rate.rateOfReturn(this.Winning.statistics, this.Buy.lottoEach);
    // 당첨 결과 및 총 수익률 출력
    this.View.statisticsPrint(this.Winning.statistics);
    this.View.printRateOfReturn(rate);
  }
}

export default App;
