import InputView from './Views/InputView.js';

class LottoController {
  async play() {
    await this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
  }
}

export default LottoController;
