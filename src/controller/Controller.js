import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './PurchaseController.js';
import WinningController from './WinningController.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #lottos;
  #PurchaseController;
  #WinningController;

  constructor() {
    this.#PurchaseController = new PurchaseController();
    this.#WinningController = new WinningController();
  }

  async play() {
    this.#lottos = await this.#PurchaseController.inputPurchase();
    OutputView.printLottos(this.#lottos);
    await this.#WinningController.inputWinning();
  }
}

export default Controller;
