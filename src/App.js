import view from './utils/view.js';
import validation from './utils/validation.js';
import CONSTANTS from './constants/Constants.js';

class App {
  constructor() {
    this.purchaseAmount = CONSTANTS.DEFAULT_VALUE;
  }

  async setPurchaseAmount() {
    this.purchaseAmount = await view.readPurchaseAmount();

    validation.isValidInputPurchaseAmount(this.purchaseAmount);
  }

  async play() {
    await this.setPurchaseAmount();
  }
}

export default App;
