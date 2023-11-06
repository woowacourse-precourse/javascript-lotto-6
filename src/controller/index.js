import PurchaseAmount from '../PurchaseAmount.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  async startGame() {
    const purchaseAmount = await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();

      PurchaseAmount.of(purchaseAmount);

      return purchaseAmount;
    } catch (error) {
      OutputView.print(error.message);

      const purchaseAmount = await this.#purchaseLotto();

      return purchaseAmount;
    }
  }
}

export default LottoController;
