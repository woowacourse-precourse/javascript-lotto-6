import PurchaseController from './PurchaseController.js';

class Controller {
  #purchaseController;

  constructor() {
    this.#purchaseController = new PurchaseController();
  }

  async play() {
    await this.#purchaseController.inputPurchase();
  }
}

export default Controller;
