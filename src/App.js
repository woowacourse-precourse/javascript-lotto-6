import LottoList from './LottoList.js';
import User from './User.js';
import LottoResultCalculator from './LottoResultCalculator.js';
import CalculateProfit from './CalculateProfit.js';

class App {
  constructor() {
    this.initComponent();
  }

  initComponent() {
    this.user = new User();
  }

  async getUserInputs() {
    const { user } = this;
    await user.inputMoney();
    this.generateLottoList();
    await user.inputWinningNumbers();
    await user.inputBonusNumber();
  }

  generateLottoList() {
    this.lottoList = new LottoList(this.user.lottoCount);
  }

  calculateResults() {
    this.lottoResult = new LottoResultCalculator({
      userLottos: this.lottoList.allLottoNumbers,
      winningNumbers: this.user.winningNumbers,
      bonusNumber: this.user.bonusNumber,
    });
  }

  calculateProfits() {
    this.calculateProfit = new CalculateProfit({
      results: this.lottoResult.results,
      moneySpent: this.user.lottoCount * 1000,
    });
  }

  async play() {
    await this.getUserInputs();
    this.calculateResults();
    this.lottoResult.printResults();
    this.calculateProfits();
    this.calculateProfit.printResults();
  }
}

export default App;
