import InputView from '../View/InputView.js';
import { BASE_AMOUNT } from '../constant/constant.js';

class LottoGameController {
  async startGame() {
    const purchaseQuantity = this.#getPurchaseQuantity();
  }

  async #getPurchaseQuantity() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    return Number(purchaseAmount) / BASE_AMOUNT;
  }
}
export default LottoGameController;
