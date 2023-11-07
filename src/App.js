import view from './utils/view.js';

class App {
  constructor() {
    this.purchaseAmount = null;
    this.winningNumbers = null;
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
