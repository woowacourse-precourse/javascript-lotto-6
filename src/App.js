import CONSTANTS from './constants/Constants.js';
import view from './utils/view.js';

class App {
  constructor() {
    this.purchaseAmount = CONSTANTS.DEFAULT_VALUE;
    this.winningNumbers = [];
  }

  async setLottoGameConfig() {
    this.purchaseAmount = await view.readPurchaseAmount();
    this.winningNumbers = await view.readWinningNumbers();
  }

  async play() {
    await this.setLottoGameConfig();
  }
}

export default App;
