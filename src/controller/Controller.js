import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './PurchaseController.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #lottos;
  #purchaseController;

  constructor() {
    this.#purchaseController = new PurchaseController();
  }

  async play() {
    this.#lottos = await this.#purchaseController.inputPurchase();
    OutputView.printLottos(this.#lottos);
  }
}

export default Controller;
