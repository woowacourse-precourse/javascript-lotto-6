import InputView from '../views/InputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';

class LottoGameController {
  constructor() {}

  start() {
    const amount = InputView.getPurchaseAmount();
  }
}

export default LottoGameController;
