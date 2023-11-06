import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoGame from '../domain/LottoGame.js';
import Lotto from '../Lotto.js';
import LottoValidator from '../domain/LottoValidator.js';

class LottoGameController {
  constructor() {
    this.lottoGame = [];
  }

  async start() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      const amount = new PurchaseAmount(purchaseAmount).getAmount();

      OutputView.printPurchaseAmount(amount);

      this.lottoGame = new LottoGame(amount);
      const purchasedLotto = this.lottoGame.getPurchasedLotto();

      OutputView.printPurchasedLotto(purchasedLotto);
      this.userWinningNumbers();
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.start();
    }
  }

  async userWinningNumbers() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);
      const winningLotto = new Lotto(numbers);
      // console.log(winningLotto.getSortedLotto());
      this.userBonusNumber(winningLotto);
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.userWinningNumbers();
    }
  }

  async userBonusNumber(winningLotto) {
    try {
      const bonusNumber = await InputView.getBonusNumber();
      const isContainning = winningLotto.hasContainBonusNumber(Number(bonusNumber));

      LottoValidator.validBonusNumber(bonusNumber, isContainning);

      // console.log(bonusNumber, winningLotto);
      const comparisonResults = this.lottoGame.getLottoComparisonResults(
        winningLotto.getSortedLotto(),
        Number(bonusNumber)
      );

      const winsStatistics = this.lottoGame.getStatistics(comparisonResults);

      OutputView.printWinsStatistics(winsStatistics);
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.userBonusNumber(winningLotto);
    }
  }
}

export default LottoGameController;
