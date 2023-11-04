import Purchase from "./Credit.js";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.Purchase = new Purchase();
    this.Lotto = new Lotto();
  }
  async play() {
    const credit = await this.Purchase.getCredit();
    const amountOfLotto = this.Purchase.getAmountOfLotto(credit);
    this.Purchase.printAmountOfLotto(amountOfLotto);
    const LottoNumbers = this.Lotto.printLottoNumbers(amountOfLotto);
    const drawNumbers = await this.Lotto.enterDrawNumbers();
    const bonusNumber = await this.Lotto.enterBonusNumber();
  }
}

export default App;
