import Lotto from '../Lotto.js';

class LottoGameController {
  #lottoGame;
  #validator;
  #inputView;
  #outputView;

  constructor(lottoGame, validator, inputView, outputView) {
    this.#lottoGame = lottoGame;
    this.#validator = validator;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async start() {
    try {
      const amount = await this.getValidPurchaseAmount();
      this.#lottoGame.initializeLotto(amount);

      const purchasedLotto = this.#lottoGame.getPurchasedLotto();

      this.#outputView.printPurchaseAmount(amount);
      this.#outputView.printPurchasedLotto(purchasedLotto);

      const winningLotto = await this.getValidWinningLotto();
      const bonusNumber = await this.getValidBonusNumber(winningLotto);

      const comparisonResults = this.#lottoGame.getComparisonResults(
        winningLotto.getSortedNumbers(),
        bonusNumber
      );

      const winsStatistics = this.#lottoGame.getStatistics(comparisonResults);
      this.#outputView.printWinsStatistics(winsStatistics);

      const totalPrizeAmount = this.#lottoGame.getTotalPrizeAmount(winsStatistics);
      this.#outputView.printProfitRatio(this.#lottoGame.getProfitRatio(totalPrizeAmount));
    } catch ({ message }) {
      this.#outputView.printError(message);
      await this.start();
    }
  }

  async getValidPurchaseAmount() {
    const inputPurchaseAmount = await this.#inputView.getPurchaseAmount();
    this.#validator.validatePurchaseAmount(inputPurchaseAmount);
    return inputPurchaseAmount / 1000;
  }

  async getValidWinningLotto() {
    try {
      const winningNumbers = await this.#inputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);
      return new Lotto(numbers);
    } catch ({ message }) {
      this.#outputView.printError(message);
      return this.getValidWinningLotto();
    }
  }

  async getValidBonusNumber(winningLotto) {
    try {
      const bonusNumber = await this.#inputView.getBonusNumber();
      const isContaining = winningLotto.hasContainBonusNumber(Number(bonusNumber));
      this.#validator.validateBonusNumber(bonusNumber, isContaining);
      return Number(bonusNumber);
    } catch ({ message }) {
      this.#outputView.printError(message);
      return this.getValidBonusNumber(winningLotto);
    }
  }
}

export default LottoGameController;
