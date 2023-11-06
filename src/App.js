import UserInput from './module/UserInput.js';
import Output from './module/Output.js';
import Lotto from './Lotto.js';
import ValidateBonus from './module/ValidateBonus.js';
import ValidatePurchase from './module/ValidatePurchase.js';
import purchasedLottoArray from './module/RandomLotto.js';
import Match from './module/Match.js';

class App {
  constructor() {
    this.purchasedLotto = 0;
    this.lottoArray = [];
    this.winningNumbers = '';
    this.bonus = '';
  }

  async userSpendMoney() {
    this.purchasedLotto = await UserInput.purchasedLotto();
    const validatePurchase = new ValidatePurchase(this.purchasedLotto);
    this.lottoArray = purchasedLottoArray(this.purchasedLotto);
    Output.printUserLottos(this.lottoArray);
  }

  async lottoNumbers() {
    this.winningNumbers = await UserInput.winningNumbers();
    const lotto = new Lotto(this.winningNumbers);
    const bonus = await UserInput.bonusNumber();
    const validateBonus = new ValidateBonus(bonus);
  }

  printStatistics() {
    Output.printWinningStatistics(
      new Match(
        this.lottoArray,
        this.winningNumbers,
        this.bonus,
      ).getMatchCount(),
    );
  }

  printRateOfReturn() {
    Output.printTotalReturn(
      this.purchasedLotto,
      new Match(
        this.lottoArray,
        this.winningNumbers,
        this.bonus,
      ).getMatchCount(),
    );
  }

  async play() {
    await this.userSpendMoney();
    await this.lottoNumbers();
    this.printStatistics();
    this.printRateOfReturn();
  }
}

export default App;
