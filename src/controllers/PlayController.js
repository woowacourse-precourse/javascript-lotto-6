import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class PlayController {
  #MONEY;

  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
  }

  async inputPurchaseMoney() {
    this.#MONEY = await this.INPUT_VIEW.purchaseMoney();
    this.OUTPUT_VIEW.userMoney(this.#MONEY);
  }
}

export default PlayController;
