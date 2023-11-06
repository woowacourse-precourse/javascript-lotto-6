import LottoService from '../services/LottoService.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  #service;

  #view;

  constructor() {
    this.#service = new LottoService();
    this.#view = new LottoView();
  }

  async play() {
    await this.#readPurchaseAmount();
  }

  async #readPurchaseAmount() {
    try {
      const purchaseAmount = await this.#view.readPurchaseAmount();
      this.#service.setPurchaseAmount(purchaseAmount);
    } catch (error) {
      this.#view.print(error.message);
      this.#readPurchaseAmount();
    }
  }
}

export default LottoController;
