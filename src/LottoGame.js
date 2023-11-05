import View from './View.js';

class LottoGame {
  async start() {
    const purchaseAmount = await View.askPurchaseAmount();
    console.log(purchaseAmount);
  }
}

export default LottoGame;
