import Purchase from "./Credit.js";
import Profit from "./Profit.js";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.Purchase = new Purchase();
    this.Lotto = new Lotto();
    this.Profit = new Profit();
  }
  async play() {
    const credit = await this.Purchase.getCredit();
    const amountOfLotto = this.Purchase.getAmountOfLotto(credit);
    this.Purchase.printAmountOfLotto(amountOfLotto);
    const lottoNumbers = this.Lotto.getLottoNumbers(amountOfLotto);
    this.Lotto.printLottoNumbers(lottoNumbers);
    const drawNumbers = await this.Lotto.enterDrawNumbers();
    const bonusNumber = await this.Lotto.enterBonusNumber();
    const rankOfResult = this.Lotto.resultOfDraw(lottoNumbers, drawNumbers, bonusNumber);
    const resultOfLotto = this.Lotto.lottoDrawResult(rankOfResult);
    this.Lotto.lottoDrawPrinter(resultOfLotto);
    const profitRate = this.Profit.profitRateAcc(resultOfLotto, credit);
    this.Profit.profitRatePrinter(profitRate);
  }
}

export default App;
