import validation from '../utils/validation.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class LottoController {
  constructor() {
    this.count = 0;
  }

  async getPurchaseAmount() {
    const input = await inputView.purchaseAmount();
    validation.validatePurchaseAmount(input);
    const count = input / 1000;
    this.count = count;
  }

  printLottoNumbers() {
    outputView.printPurchaseSummary(this.count);
  }
}

export default LottoController;
