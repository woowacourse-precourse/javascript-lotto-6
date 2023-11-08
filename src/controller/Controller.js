import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './PurchaseController.js';
import WinningController from './WinningController.js';
import OutputView from '../view/OutputView.js';
import BonusController from './BonusController.js';
import CalculateController from './CalculateController.js';

class Controller {
  #lottos;
  #winning;
  #bonus;
  #PurchaseController;
  #WinningController;
  #BonusController;
  #CalculateController;

  constructor() {
    this.#PurchaseController = new PurchaseController();
    this.#WinningController = new WinningController();
    this.#BonusController = new BonusController();
  }

  async play() {
    this.#lottos = await this.#PurchaseController.inputPurchase();
    OutputView.printLottos(this.#lottos);
    this.#winning = await this.#WinningController.inputWinning();
    this.#bonus = await this.#BonusController.inputBonus(this.#winning);

    this.#CalculateController = new CalculateController(this.#lottos, this.#winning, this.#bonus);

    const state = this.#CalculateController.calculatestate();
    Console.print(state);
  }
}

export default Controller;
