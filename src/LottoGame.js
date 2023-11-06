import View from './View/View.js';

class LottoGame {
  #view = new View();

  async run() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    console.log(purchaseAmount);
  }
}

export default LottoGame;
