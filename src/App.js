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

  async play() {
    const { user } = this;

    await user.inputMoney();

    this.lottoList = new LottoList(user.lottoCount);

    await user.inputWinningNumbers();
    await user.inputBonusNumber();

    this.lottoResult = new LottoResultCalculator({
      userLottos: this.lottoList.allLottoNumbers,
      winningNumbers: user.winningNumbers,
      bonusNumber: user.bonusNumber,
    });

    this.lottoResult.printResults();

    this.calculateProfit = new CalculateProfit({
      results: this.lottoResult.results,
      moneySpent: user.lottoCount * 1000,
    });

    this.calculateProfit.printResults();
  }
}

export default App;
