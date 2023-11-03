import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const inputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(MESSAGE.purchaseAmountInput);
    return input;
  },
};

export default inputView;
