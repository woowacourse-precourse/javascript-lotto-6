import View from '../View/View.js';

import LottoMachine from '../Model/LottoMachine.js';
import WinningMachine from '../Model/WinningMachine.js';

class LottoGame {
  #view = new View();

  #winningMachine = new WinningMachine();

  #lottoMachine;

  async run() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    const purchaseLotto = this.#startLottoMachine(purchaseAmount);

    this.#view.printPurchaseLotto(purchaseLotto);

    const numbers = await this.#view.readWinningNumber();
    const bonusNumber = await this.#view.readBonusNumber();

    const winningLotto = this.#getWinningLotto({
      numbers,
      bonusNumber,
    });
  }

  #startLottoMachine(purchaseAmount) {
    this.#lottoMachine = new LottoMachine(purchaseAmount);
    return this.#lottoMachine.getLotto();
  }

  #getWinningLotto({ numbers, bonusNumber }) {
    return this.#winningMachine.generateWinningLotto({
      numbers,
      bonusNumber,
    });
  }
}

export default LottoGame;
