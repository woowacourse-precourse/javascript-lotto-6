import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from '../constants/message';
import COMMON_VALUE from '../constants/\bcommonValue';

const LottoUi = {
  async inputPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
      this.validatePurchaseAmount(Number(purchaseAmount));

      return Number(purchaseAmount);
    } catch (err) {
      Console.print(err.message);
      this.inputPurchaseAmount();
    }
  },

  alertFinishdrawLottos(numberOfLottos) {
    Console.print(`${numberOfLottos}${MESSAGE.FINISH_DRAW_LOTTOS}`);
  },

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT);
    }
  },
};

export default Object.freeze(LottoUi);
