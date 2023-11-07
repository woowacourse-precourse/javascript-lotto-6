import InputView from '../view/InputView.js';

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
  }

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
  }
}

export default LottoController;
