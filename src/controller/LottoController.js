import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import Lotto from '../domain/Lotto';
import Winning from '../domain/Winning';
import CirculateRate from '../utils/CirculateRate';

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.Lottos = [];
    this.winnings = [];
  }

  printLotto() {
    this.Lottos = Lotto.generateLottoNumber(this.purchaseAmount);
    OutputView.printLotto(this.Lottos);
  }

  printWinningStatistics() {
    this.winnings = Winning.countWinning(this.Lottos, this.winningNumbers, this.bonusNumber);
    OutputView.printWinningStatistics(this.winnings);
  }

  printRevenueRate() {
    const rate = CirculateRate.revenueRate(this.winnings, this.purchaseAmount);
    OutputView.printRevenueRate(rate);
  }

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
    this.printLotto();
    this.winningNumbers = await InputView.readWinningNumbers();
    this.bonusNumber = await InputView.readBonusNumber();
    this.printWinningStatistics();
    this.printRevenueRate();
  }
}

export default LottoController;
