import inputView from '../view/inputView.js';

class LottoController {
  async getPurchaseAmount() {
    const input = await inputView.purchaseAmount();
  }
}

export default LottoController;
