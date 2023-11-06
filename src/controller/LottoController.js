import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';

class LottoController {
  async startLotto() {
    this.#inputPurchaseAmountForLotto();
  }

  async #inputPurchaseAmountForLotto() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Console.print(purchaseAmount);
  }
}

export default LottoController;
