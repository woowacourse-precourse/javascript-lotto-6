import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import LottoGame from '../domain/LottoGame.js';
import Lotto from '../Lotto.js';

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
      this.userWinningNumbers();
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.start();
    }
  }

  async userWinningNumbers() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const numbers = winningNumbers.split(',').map(Number);
      const winningLotto = new Lotto(numbers).getSortedLotto();
      // console.log(winningLotto.getSortedLotto());
    } catch ({ message }) {
      OutputView.printStaticMessage(message);
      this.userWinningNumbers();
    }
  }
}

export default LottoGameController;
