import InputView from '../view/InputView.js';
import Validator from '../utils/Validator.js';

class LottoController {
  async startLotto() {
    await this.#inputPurchaseAmountForLotto();
  }

  async #inputPurchaseAmountForLotto() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.invalidNumber(purchaseAmount);
  }
}

export default LottoController;
