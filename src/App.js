import IssuingLotto from './domain/IssuingLotto.js';
import PurchasingLotto from './domain/PurchasingLotto.js';
import WinningLotto from './WinningLotto.js';
import WinningCalculator from './domain/WinningCalculator.js';
import UserInput from './service/UserInput.js';
import InformResult from './service/InformResult.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  userInput;

  constructor() {
    this.userInput = new UserInput();
  }

  async play() {
    const userCost = await this.getUserCost();
    const userPurchaseCount = await this.getUserPurchaseCount(userCost);

    const lottoList = this.getUserIssuedLotto(userPurchaseCount);

    const winningLottoNumbers = await this.getWinningLotto();

    this.informWinningResult(winningLottoNumbers, lottoList);
  }

  async getUserCost() {
    const cost = await this.userInput.getCost();
    return cost;
  }

  async getUserPurchaseCount(cost) {
    try {
      const purchasingLotto = new PurchasingLotto(cost);
      const count = purchasingLotto.getPurchaseCount();
      return count;
    } catch (error) {
      Console.print(error);
      const userCost = await this.getUserCost();
      const count = await this.getUserPurchaseCount(userCost);
      return count;
    }
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
    try {
      const winningLotto = new WinningLotto(winnerNumbers, bonusNumber);
      const totalNumbers = winningLotto.getTotalNumbers();
      return totalNumbers;
    } catch (error) {
      Console.print(error);
      const totalNumbers = await this.getWinningLotto();
      return totalNumbers;
    }
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
