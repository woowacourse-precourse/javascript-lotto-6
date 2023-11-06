import LottoModel from '../model/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #model;

  constructor() {
    this.#model = new LottoModel();
  }

  async startGame() {
    const userLottos = await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const userLottos = this.#model.generateLotto(purchaseAmount);

      return userLottos;
    } catch (error) {
      OutputView.print(error.message);

      const purchaseAmount = await this.#purchaseLotto();

      return purchaseAmount;
    }
  }
}

export default LottoController;
