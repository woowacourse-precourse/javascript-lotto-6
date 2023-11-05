import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';

class LottoGame {
  async start() {
    try {
      const purchaseAmount = await View.askPurchaseAmount();
      const purchaser = new LottoPurchaser(purchaseAmount);
    } catch (error) {
      View.print(error.message);
      await this.start();
    }
  }
}

export default LottoGame;
