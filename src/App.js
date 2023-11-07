import UserInput from './module/UserInput.js';
import Output from './module/Output.js';
import Lotto from './Lotto.js';
import ValidateBonus from './module/ValidateBonus.js';
import ValidatePurchase from './module/ValidatePurchase.js';
import purchasedLottoArray from './module/RandomLotto.js';
import Match from './module/Match.js';

class App {
  constructor() {
    this.purchasedLottoAmount = 0;
    this.lottoArray = [];
    this.winningNumbers = '';
    this.bonus = '';
  }

  async play() {
    await this.userSpendMoney();
    await this.lottoNumbers();
    this.printStatistics();
    this.printRateOfReturn();
  }

  async userSpendMoney() {
    this.purchasedLottoAmount = await UserInput.purchasedLottoAmount();
    const validatePurchase = new ValidatePurchase(this.purchasedLottoAmount);
    this.lottoArray = purchasedLottoArray(Number(this.purchasedLottoAmount));
    Output.printUserLottos(this.lottoArray);
  }

  async lottoNumbers() {
    this.winningNumbers = await UserInput.winningNumbers();
    const lotto = new Lotto(this.winningNumbers);
    this.bonus = await UserInput.bonusNumber();
    const validateBonus = new ValidateBonus(this.bonus, this.winningNumbers);
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
      Number(this.purchasedLottoAmount),
      new Match(
        this.lottoArray,
        this.winningNumbers,
        this.bonus,
      ).getMatchCount(),
    );
  }
}

export default App;
