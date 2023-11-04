import LottoGameInput from '../view/LottoGameInput.js';
import LottoGameOutput from '../view/LottoGameOutput.js';

class LottoGame {
  start() {
    return this;
  }

  async inputPurchaseAmount() {
    try {
      const amount = await LottoGameInput.purchaseAmount();
      return amount;
    } catch (error) {
      LottoGameOutput.isNotNumber(error);
      const amount = await this.inputPurchaseAmount();
      return amount;
    }
  }
}

export default LottoGame;
