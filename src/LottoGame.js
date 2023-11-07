import View from './View/View.js';
import LottoMachine from './LottoMachine.js';

class LottoGame {
  #view = new View();

  #lottoMachine;

  async run() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    const purchaseLotto = this.#startLottoMachine(purchaseAmount);

    this.#view.printPurchaseLotto(purchaseLotto);
  }

  #startLottoMachine(purchaseAmount) {
    this.#lottoMachine = new LottoMachine(purchaseAmount);
    return this.#lottoMachine.getLotto();
  }
}

export default LottoGame;
