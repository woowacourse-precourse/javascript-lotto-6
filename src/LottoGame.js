import View from './View/View.js';
import LottoMachine from './LottoMachine.js';

class LottoGame {
  #view = new View();

  #lottoMachine = new LottoMachine();

  async run() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    const purchaseLotto = this.#lottoMachine.getLotto(purchaseAmount);

    this.#view.printPurchaseLotto(purchaseLotto);
  }
}

export default LottoGame;
