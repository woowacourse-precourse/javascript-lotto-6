import IssuingLotto from './domain/IssuingLotto.js';
import PurchasingLotto from './domain/PurchasingLotto.js';
import WinningLotto from './WinningLotto.js';
import WinningCalculator from './domain/WinningCalculator.js';
import UserInput from './service/UserInput.js';
import InformResult from './service/InformResult.js';

class App {
  userInput;

  constructor() {
    this.userInput = new UserInput();
  }

  async play() {
    const userCost = await this.getUserCost();
    const userPurchaseCount = this.getUserPurchaseCount(userCost);

    const lottoList = this.getUserIssuedLotto(userPurchaseCount);

    const winningLottoNumbers = await this.getWinningLotto();

    this.informWinningResult(winningLottoNumbers, lottoList);
  }

  async getUserCost() {
    const cost = await this.userInput.getCost();
    return cost;
  }

  getUserPurchaseCount(cost) {
    const purchasingLotto = new PurchasingLotto(cost);
    const count = purchasingLotto.getPurchaseCount();
    return count;
  }

  getUserIssuedLotto(count) {
    const issuingLotto = new IssuingLotto(count);
    const lottoList = issuingLotto.getLottoList();

    InformResult.issuedLotto(lottoList, count);

    return lottoList;
  }

  async getWinningLotto() {
    const winnerNumbers = await this.userInput.getWinningNumbers();
    const bonusNumber = await this.userInput.getBonusNumber();

    const winningLotto = new WinningLotto(winnerNumbers, bonusNumber);
    const totalNumbers = winningLotto.getTotalNumbers();

    return totalNumbers;
  }

  informWinningResult(totalNumbers, issuedLotto) {
    const winningCalculator = new WinningCalculator(totalNumbers, issuedLotto);
    const { winnerList } = winningCalculator;
    const profit = winningCalculator.getProfit();

    InformResult.winningStatistic(winnerList);
    InformResult.winningProfit(profit);
  }
}

export default App;
