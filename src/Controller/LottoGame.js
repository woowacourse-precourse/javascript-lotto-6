import View from '../View/View.js';

import LottoMachine from '../Model/LottoMachine.js';
import WinningMachine from '../Model/WinningMachine.js';

class LottoGame {
  #view = new View();

  #winningMachine = new WinningMachine();

  #lottoMachine;

  async run() {
    const purchaseLotto = await this.#startLottoMachine();
    const winningLotto = await this.#getWinningLotto();

    purchaseLotto.map((lotto) =>
      this.#winningMachine.getStatistics({ lotto, winningLotto }),
    );
  }

  async #startLottoMachine() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    this.#generateLottoMachine(purchaseAmount);
    return this.#getPurchaseLotto();
  }

  async #getWinningLotto() {
    const { numbers, bonusNumber } = await this.#readCompareNumbers();

    return this.#winningMachine.generateWinningLotto({
      numbers,
      bonusNumber,
    });
  }

  #generateLottoMachine(purchaseAmount) {
    this.#lottoMachine = new LottoMachine(purchaseAmount);
  }

  #getPurchaseLotto() {
    const purchaseLotto = this.#lottoMachine.getLotto();
    this.#view.printPurchaseLotto(purchaseLotto);

    return purchaseLotto;
  }

  async #readCompareNumbers() {
    const numbers = await this.#view.readWinningNumber();
    const bonusNumber = await this.#view.readBonusNumber();

    return { numbers, bonusNumber };
  }
}

export default LottoGame;
