import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoData from '../models/LottoData.js';
// import OutputView from '../views/OutputView.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoData = new LottoData();
  }

  async inputPurchaseAmount() {
    const amount = await this.inputView.purchaseAmount();
    try {
      this.lottoData.validatePurchaseAmount(amount);
    } catch (error) {
      this.outputView.printError(error.message);
      return this.inputPurchaseAmount();
    }
  }
}

export default LottoController;
