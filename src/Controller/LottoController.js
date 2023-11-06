import View from '../View/View.js';

class LottoController {
  #view;

  constructor() {
    this.#view = View;
  }

  async play() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
  }
}

export default LottoController;
