import Credit from "./Credit.js";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.Credit = new Credit();
    this.Lotto = new Lotto();
  }
  async play() {
    const credit = await this.Credit.getCredit();
    const amountOfLotto = this.Credit.getAmountOfLotto(credit);
    this.Credit.printAmountOfLotto(amountOfLotto);
    const LottoNumbers = this.Lotto.printLottoNumbers(amountOfLotto);
    const drawNumbers = await this.Lotto.enterDrawNumbers();
    const bonusNumber = await this.Lotto.enterBonusNumber();
  }
}

export default App;
