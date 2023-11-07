import view from './utils/view.js';
import CONSTANTS from './constants/Constants.js';

class App {
  constructor() {
    this.purchaseAmount = CONSTANTS.DEFAULT_VALUE;
  }

  async setPurchaseAmount() {
    this.purchaseAmount = await view.readPurchaseAmount();
  }

  async play() {
    await this.setPurchaseAmount();
  }
}

export default App;
