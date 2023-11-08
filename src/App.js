import Purchase from "./Credit.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.Purchase = new Purchase();
    this.Lotto = new Lotto();
  }
  async play() {
    const credit = await this.Purchase.getCredit();
    const amountOfLotto = await this.Purchase.getAmountOfLotto(credit);
    this.Purchase.printAmountOfLotto(amountOfLotto);
    const lottoNumbers = this.Lotto.getLottoNumbers(amountOfLotto);
    this.Lotto.printLottoNumbers(lottoNumbers);
    const drawNumbers = await this.Lotto.enterDrawNumbers();
    const bonusNumber = await this.Lotto.enterBonusNumber();
    const rankOfResult = this.Lotto.resultOfDraw(lottoNumbers, drawNumbers, bonusNumber);
    const resultOfLotto = this.Lotto.lottoDrawResult(rankOfResult);
    const profitRate = this.Lotto.profitRateAcc(resultOfLotto, credit);
    this.Lotto.lottoResultPrinter(resultOfLotto, profitRate);
  }
}
export default App;
