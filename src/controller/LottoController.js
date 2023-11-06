import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class LottoController {
  async startLotto() {
    await this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    Console.print(purchaseAmount);
    this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningsNumbers = await InputView.readWinningNumbers();
    Console.print(winningsNumbers);
  }
}

export default LottoController;
