import InputView from '../views/InputView.js';
// import OutputView from '../views/OutputView.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    // this.outputView = new OutputView();
  }

  async inputPurchaseAmount() {
    await this.inputView.purchaseAmount();
  }
}

export default LottoController;
