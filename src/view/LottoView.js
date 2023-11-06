import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message';
import ERROR from '../constants/error';

class LottoView {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
    this.validatePurchaseAmount(Number(purchaseAmount));

    return Number(purchaseAmount);
  }

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR.PURCHASE_AMOUNT);
    }
  }
}

export default LottoView;
