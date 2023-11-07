import Lotto from '../Lotto.js';
import LottoValidator from '../domain/LottoValidator.js';

class LottoGameController {
  constructor(inputView, outputView, lottoGame) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.lottoGame = lottoGame;
  }

  async start() {
    try {
      const amount = await this.getValidPurchaseAmount();
      this.lottoGame.initializeLotto(amount);

      const purchasedLotto = this.lottoGame.getPurchasedLotto();

      this.outputView.printPurchaseAmount(amount);
      this.outputView.printPurchasedLotto(purchasedLotto);

      const winningLotto = await this.getValidWinningLotto();
      const bonusNumber = await this.getValidBonusNumber(winningLotto);

      const comparisonResults = this.lottoGame.getLottoComparisonResults(
        winningLotto.getSortedLotto(),
        bonusNumber
      );

      const winsStatistics = this.lottoGame.getStatistics(comparisonResults);
      this.outputView.printWinsStatistics(winsStatistics);

      const totalPrizeAmount = this.lottoGame.calcTotalPrizeAmount(winsStatistics);
      this.outputView.printProfitRatio(this.lottoGame.getProfitRatio(totalPrizeAmount));
    } catch ({ message }) {
      this.outputView.printErrorMessage(message);
      await this.start();
    }
  }

  async getValidPurchaseAmount() {
    const inputPurchaseAmount = await this.inputView.getPurchaseAmount();
    LottoValidator.validPurchaseAmount(inputPurchaseAmount);
    return inputPurchaseAmount / 1000;
  }

  async getValidWinningLotto() {
    try {
      const winningNumbers = await this.inputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);
      return new Lotto(numbers);
    } catch ({ message }) {
      this.outputView.printErrorMessage(message);
      return this.getValidWinningLotto();
    }
  }

  async getValidBonusNumber(winningLotto) {
    try {
      const bonusNumber = await this.inputView.getBonusNumber();
      const isContaining = winningLotto.hasContainBonusNumber(Number(bonusNumber));
      LottoValidator.validBonusNumber(bonusNumber, isContaining);
      return Number(bonusNumber);
    } catch ({ message }) {
      this.outputView.printErrorMessage(message);
      return this.getValidBonusNumber(winningLotto);
    }
  }
}

export default LottoGameController;
