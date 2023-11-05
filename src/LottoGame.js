import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';

class LottoGame {
  #purchaser;

  async start() {
    try {
      const purchaseAmount = await View.askPurchaseAmount();
      this.#purchaser = new LottoPurchaser(purchaseAmount);
    } catch (error) {
      View.print(error.message);
      await this.start();
    }
  }

  play() {
    this.#purchaser.purchase();
  }
}

export default LottoGame;
