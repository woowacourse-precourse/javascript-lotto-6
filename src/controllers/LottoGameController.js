import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';

class LottoGameController {
  constructor() {}

  async start() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      const amount = new PurchaseAmount(purchaseAmount).getAmount();
      console.log(amount);
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.start();
    }
  }
}

export default LottoGameController;
