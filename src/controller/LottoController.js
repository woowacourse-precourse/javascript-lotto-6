import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../domain/Lotto.js';
import Winning from '../domain/Winning.js';

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.Lottos = [];
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

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
    this.generateLottoNumber();
    this.printLotto();
    this.winningNumbers = await InputView.readWinningNumbers();
    this.bonusNumber = await InputView.readBonusNumber();
    this.countWinning();
    this.printWinningStatistics();
  }
}

export default LottoController;
