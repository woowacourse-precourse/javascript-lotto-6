import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';

class LottoGame {
  async start() {
    const purchaseAmount = await View.askPurchaseAmount();
    const purchaser = new LottoPurchaser(purchaseAmount);
  }
}

export default LottoGame;
