import UserLotto from './UserLotto.js.js.js';
import Lotto from './lotto.js.js.js';
import Statistics from './statistics.js.js.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class controller {
  #inputView;
  #outputView;
  #userLotto;
  #winningLotto;
  #statistics;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#statistics = new Statistics();
  }

  async buyLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();

    try {
      this.#userLotto = new UserLotto(Number(purchaseAmount));
      this.priintUserLottoNumbers();
      await this.setWinningLottoNumbers();
    } catch (error) {
      this.#outputView.print(error.message);
      this.buyLotto();
    }
  }
}
