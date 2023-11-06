import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import validation from '../utills/validation.js';

class LottoGameController {
  async start() {
    await this.purchaseLottos();
  }

  async purchaseLottos() {
    try {
      const purchaseAmount = await InputView.readLottoAmount();
      validation.validateInputNumber(purchaseAmount);
      validation.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      await this.purchaseLottos();
    }
  }
}
export default LottoGameController;
