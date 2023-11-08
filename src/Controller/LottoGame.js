import View from '../View/View.js';
import LottoMachine from '../Model/LottoMachine.js';
import WinningMachine from '../Model/WinningMachine.js';

class LottoGame {
  #view = new View();

  #winningMachine = new WinningMachine();

  #lottoMachine;

  async run() {
    const { purchaseLotto, purchaseAmount } = await this.#retry(() =>
      this.#startLottoMachine(),
    );
    const winningLotto = await this.#retry(() => this.#getWinningLotto());

    this.#startWinningMachine({ purchaseLotto, winningLotto, purchaseAmount });
    const { matchResult, rateOfReturn } = this.#getWinningMachineResults();

    this.#view.printWinningStatistics({ matchResult, rateOfReturn });
  }

  async #retry(callback) {
    try {
      return await callback();
    } catch (error) {
      this.#view.printErrorMessage(error);

      return this.#retry(callback);
    }
  }

  async #startLottoMachine() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    this.#generateLottoMachine(purchaseAmount);
    return this.#getPurchaseLotto(purchaseAmount);
  }

  #startWinningMachine({ purchaseLotto, winningLotto, purchaseAmount }) {
    purchaseLotto.map((lotto) =>
      this.#winningMachine.calculateStatistics({ lotto, winningLotto }),
    );

    this.#winningMachine.calculateRateOfReturn(purchaseAmount);
  }

  #generateLottoMachine(purchaseAmount) {
    this.#lottoMachine = new LottoMachine(purchaseAmount);
  }

  async #readCompareNumbers() {
    const numbers = await this.#view.readWinningNumber();
    const bonusNumber = await this.#view.readBonusNumber();

    return { numbers, bonusNumber };
  }

  #getPurchaseLotto(purchaseAmount) {
    const purchaseLotto = this.#lottoMachine.getLotto();
    this.#view.printPurchaseLotto(purchaseLotto);

    return { purchaseLotto, purchaseAmount };
  }

  async #getWinningLotto() {
    const { numbers, bonusNumber } = await this.#readCompareNumbers();

    return this.#winningMachine.generateWinningLotto({
      numbers,
      bonusNumber,
    });
  }

  #getWinningMachineResults() {
    const matchResult = this.#winningMachine.getMatchResult();
    const rateOfReturn = this.#winningMachine.getRateOfReturn();

    return { matchResult, rateOfReturn };
  }
}

export default LottoGame;
