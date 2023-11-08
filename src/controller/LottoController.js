import validation from '../utils/validation.js';
import inputView from '../view/inputView.js';

class LottoController {
  async getPurchaseAmount() {
    const input = await inputView.purchaseAmount();
    validation.validatePurchaseAmount(input);
  }
}

export default LottoController;
