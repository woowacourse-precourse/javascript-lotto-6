import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Calculate from '../utils/Calculate.js';

class LottoController {
  #USER_MONEY;

  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
  }

  async inputPurchaseMoney() {
    this.#USER_MONEY = await this.INPUT_VIEW.purchaseMoney();
    this.#buyLotto();
  }

  async #buyLotto() {
    const CALC_BUY = new Calculate(this.#USER_MONEY);
    this.OUTPUT_VIEW.userCanBuy(CALC_BUY.howManyToBuy());
  }
}

export default LottoController;
