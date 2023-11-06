import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class LottoController {
  async startLotto() {
    await this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();
  }
}

export default LottoController;
