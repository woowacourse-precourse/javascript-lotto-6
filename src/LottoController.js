import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';

class LottoController {
  async play() {
    await this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    this.handlePurchaseAmount(purchaseAmount);
  }

  async handlePurchaseAmount(purchaseAmount) {
    if (!Validator.validatePurchaseAmount(purchaseAmount)) this.readPurchaseAmount();
  }
}

export default LottoController;
