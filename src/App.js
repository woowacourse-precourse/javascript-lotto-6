import View from './utils/View.js';
import Validation from './utils/Validation.js';
import CONSTANTS from './constants/Constants';

class App {
  constructor() {
    this.purchaseAmount = CONSTANTS.DEFAULT_VALUE;
  }

  async setPurchaseAmount() {
    this.purchaseAmount = await View.readPurchaseAmount();
    Validation.isValidInputPurchaseAmount(this.purchaseAmount);
  }

  async play() {
    await this.setPurchaseAmount();
  }
}

export default App;
