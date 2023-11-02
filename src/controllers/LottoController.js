import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #USER_MONEY;

  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
  }

  async inputPurchaseMoney() {
    this.#USER_MONEY = await this.INPUT_VIEW.purchaseMoney();
  }
}

export default LottoController;
