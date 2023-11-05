import InputView from "../View/InputView.js";
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  constructor() {
    this.inputView = new InputView();
  }

  async handlePurchase() {
    const purchaseAmount = await this.inputView.promptPurchaseAmount();
    Console.print(purchaseAmount);
  }
}

export default LottoController;