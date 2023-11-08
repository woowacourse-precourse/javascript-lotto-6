import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';
import { OPTIONS } from '../constant/constants.js';
import Lottos from '../model/Lottos.js';

class PurchaseController {
  async inputPurchase() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await InputView.inputPurchaseAmount();
        this.validatePurchaseAmount(purchaseAmount);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
    return this.#buyLottos(purchaseAmount);
  }

  #buyLottos(purchaseAmount) {
    const lottos = new Lottos(purchaseAmount).getLottos();
    return lottos;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount) throw new Error(ERROR_MESSEGE.notInput);
    if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSEGE.notNumber);
    if (purchaseAmount <= 0) throw new Error(ERROR_MESSEGE.notPositive);
    if (purchaseAmount % OPTIONS.unit !== 0) throw new Error(ERROR_MESSEGE.not1000Multiple);
  }
}

export default PurchaseController;
