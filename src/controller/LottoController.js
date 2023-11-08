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

  generateLottoNumber() {
    this.Lottos = Lotto.generateLottoNumber(this.purchaseAmount);
  }

  printLotto() {
    OutputView.printLotto(this.Lottos);
  }

  countWinning() {
    this.winnings = Winning.countWinning(this.Lottos, this.winningNumbers, this.bonusNumber);
  }

  printWinningStatistics() {
    OutputView.printWinningStatistics(this.winnings);
  }

  printRevenueRate() {
    const rate = CirculateRate.revenueRate(this.winnings, this.purchaseAmount);
    OutputView.printRevenueRate(rate);
  }

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
    this.generateLottoNumber();
    this.printLotto();
    this.winningNumbers = await InputView.readWinningNumbers();
    this.bonusNumber = await InputView.readBonusNumber();
    this.countWinning();
    this.printWinningStatistics();
    this.printRevenueRate();
  }
}

export default LottoController;
