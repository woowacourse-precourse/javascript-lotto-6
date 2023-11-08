import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './PurchaseController.js';
import WinningController from './WinningController.js';
import OutputView from '../view/OutputView.js';
import BonusController from './BonusController.js';

class Controller {
  #lottos;
  #winning;
  #bonus;
  #PurchaseController;
  #WinningController;
  #BonusController;

  constructor() {
    this.#PurchaseController = new PurchaseController();
    this.#WinningController = new WinningController();
    this.#BonusController = new BonusController();
  }

  async play() {
    this.#lottos = await this.#PurchaseController.inputPurchase();
    OutputView.printLottos(this.#lottos);
    this.#winning = await this.#WinningController.inputWinning();
    this.#bonus = await this.#BonusController.inputBonus();
    Console.print(this.#bonus);
  }
}

export default Controller;
