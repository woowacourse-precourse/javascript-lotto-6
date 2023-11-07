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

  async startGame() {
    const amount = await this.requestValidPurchaseAmount();
    this.#lottoGame.initializeLotto(amount);
    const purchasedLotto = this.#lottoGame.getPurchasedLotto();
    this.#outputView.printPurchaseAmount(amount);
    this.#outputView.printPurchasedLotto(purchasedLotto);
    const winningLotto = await this.requestValidWinningLotto();
    const bonusNumber = await this.requestValidBonusNumber(winningLotto);
    const comparisonResults = this.#lottoGame.getComparisonResults(
      winningLotto.getSortedNumbers(),
      bonusNumber
    );
    const winsStatistics = this.#lottoGame.getStatistics(comparisonResults);
    this.#outputView.printWinsStatistics(winsStatistics);
    const totalPrizeAmount = this.#lottoGame.getTotalPrizeAmount(winsStatistics);
    this.#outputView.printProfitRatio(this.#lottoGame.getProfitRatio(totalPrizeAmount));
  }

  async requestValidPurchaseAmount() {
    try {
      const inputPurchaseAmount = await this.#inputView.getPurchaseAmount();
      this.#validator.validatePurchaseAmount(inputPurchaseAmount);

      return inputPurchaseAmount / 1000;
    } catch ({ message }) {
      this.#outputView.printError(message);

      return await this.requestValidPurchaseAmount();
    }
  }

  async requestValidWinningLotto() {
    try {
      const winningNumbers = await this.#inputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);

      return new Lotto(numbers);
    } catch ({ message }) {
      this.#outputView.printError(message);

      return await this.requestValidWinningLotto();
    }
  }

  async requestValidBonusNumber(winningLotto) {
    try {
      const bonusNumber = await this.#inputView.getBonusNumber();
      const isContaining = winningLotto.hasContainBonusNumber(parseInt(bonusNumber, 10));
      this.#validator.validateBonusNumber(bonusNumber, isContaining);

      return parseInt(bonusNumber, 10);
    } catch ({ message }) {
      this.#outputView.printError(message);

      return await this.requestValidBonusNumber(winningLotto);
    }
  }
}

export default LottoGameController;
