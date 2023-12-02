import InputView from '../View/InputView.js';
import { BASE_AMOUNT } from '../constant/constant.js';
import Lotto from '../Lotto.js';
import { SEPARATOR } from '../constant/message.js';

class LottoGameController {
  async startGame() {
    const purchaseQuantity = this.#getPurchaseQuantity();
  }

  async #getPurchaseQuantity() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    return Number(purchaseAmount) / BASE_AMOUNT;
  }

  async #getWinningLotto() {
    const winningNumbers = await InputView.readWinningNumbers();
    const splitNumbers = this.#splitNumbers(winningNumbers);

    return new Lotto(splitNumbers);
  }

  #splitNumbers(numbers) {
    return numbers.split(SEPARATOR).map((number) => number.trim());
  }
}
export default LottoGameController;
