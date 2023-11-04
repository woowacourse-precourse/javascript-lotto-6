import PurchaseAmount from '../src/models/PurchaseAmount.js';

class LottoController {
  #lottoCount;

  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.setLottoCount();
  }

  async setLottoCount() {
    while (true) {
      let purchaseAmountInput;
      try {
        purchaseAmountInput = await this.inputView.getPurchaseAmount();
        const purchaseAmount = new PurchaseAmount(purchaseAmountInput);
        this.#lottoCount = purchaseAmount.getLottoCount();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }
}

export default LottoController;
