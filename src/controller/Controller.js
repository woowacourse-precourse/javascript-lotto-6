import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './PurchaseController.js';

class Controller {
  #lottos;
  #purchaseController;

  constructor() {
    this.#purchaseController = new PurchaseController();
  }

  async play() {
    this.#lottos = await this.#purchaseController.inputPurchase();
  }
}

export default Controller;
