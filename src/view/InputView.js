import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constant/MESSAGE.js';

const inputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmountInput);
    return input;
  },
};

export default inputView;
