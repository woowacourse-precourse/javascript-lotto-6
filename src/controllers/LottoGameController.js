import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoGame from '../domain/LottoGame.js';

class LottoGameController {
  constructor() {}

  async start() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      const amount = new PurchaseAmount(purchaseAmount).getAmount();

      OutputView.printPurchaseAmount(amount);

      const lottoGame = new LottoGame(amount);
      const purchasedLotto = lottoGame.getPurchasedLotto();

      OutputView.printPurchasedLotto(purchasedLotto);
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.start();
    }
  }
}

export default LottoGameController;
