import InputView from '../view/InputView.js';

class LottoController {
  async startGame() {
    const purchaseAmount = await InputView.readPurchaseAmount();
  }
}

export default LottoController;
