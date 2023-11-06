import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGE from '../Constants/Message.js';

const View = {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);
    return purchaseAmount;
  },
};

export default View;
