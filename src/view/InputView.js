import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const inputView = {
  async readPurchase() {
    const input = await Console.readLineAsync(MESSAGE.purchaseInput);
    return input;
  },
};

export default inputView;
