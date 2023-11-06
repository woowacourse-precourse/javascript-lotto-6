import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoGame from '../domain/LottoGame.js';
import Lotto from '../Lotto.js';
import LottoValidator from '../domain/LottoValidator.js';

class LottoGameController {
  constructor() {
    this.lottoGame = null;
  }

  async start() {
    try {
      const amount = await this.getValidPurchaseAmount();
      this.lottoGame = new LottoGame(amount);

      const purchasedLotto = this.lottoGame.getPurchasedLotto();
      OutputView.printPurchaseAmount(amount);
      OutputView.printPurchasedLotto(purchasedLotto);

      const winningLotto = await this.getValidWinningLotto();
      const bonusNumber = await this.getValidBonusNumber(winningLotto);

      const comparisonResults = this.lottoGame.getLottoComparisonResults(
        winningLotto.getSortedLotto(),
        bonusNumber
      );

      const winsStatistics = this.lottoGame.getStatistics(comparisonResults);
      OutputView.printWinsStatistics(winsStatistics);

      const totalPrizeAmount = this.lottoGame.calcTotalPrizeAmount(winsStatistics);
      OutputView.printProfitRatio(this.lottoGame.getProfitRatio(totalPrizeAmount));
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      await this.start();
    }
  }

  async getValidPurchaseAmount() {
    const inputPurchaseAmount = await InputView.getPurchaseAmount();
    LottoValidator.validPurchaseAmount(inputPurchaseAmount);
    return inputPurchaseAmount / 1000;
  }

  async getValidWinningLotto() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);
      return new Lotto(numbers);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      return this.getValidWinningLotto();
    }
  }

  async getValidBonusNumber(winningLotto) {
    try {
      const bonusNumber = await InputView.getBonusNumber();
      const isContaining = winningLotto.hasContainBonusNumber(Number(bonusNumber));
      LottoValidator.validBonusNumber(bonusNumber, isContaining);
      return Number(bonusNumber);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      return this.getValidBonusNumber(winningLotto);
    }
  }
}

export default LottoGameController;
