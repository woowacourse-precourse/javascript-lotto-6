import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';

class LottoController {
  async play() {
    await this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);
  }
}

export default LottoController;
